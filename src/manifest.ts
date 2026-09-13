import type { AdaptorInfo } from './adaptors.js';
import { dataSchemasIndexPath, openapiPath, sourcePath } from './paths.js';
import type { Manifest, ManifestEntry, SpecSource } from './types.js';
import { countOperations, readJsonSafe as readJson } from './util.js';

/** Build one adaptor's manifest row from whatever files exist on disk. */
export function buildEntry(info: AdaptorInfo): ManifestEntry {
  const openapi = readJson<any>(openapiPath(info.name));
  const source = readJson<SpecSource>(sourcePath(info.name));
  const index = readJson<{ objects?: unknown[]; resources?: unknown[] }>(
    dataSchemasIndexPath(info.name)
  );

  const entry: ManifestEntry = {
    adaptor: info.name,
    npm: info.npm,
    rest: info.rest,
    hasOpenapi: openapi !== undefined,
    hasDataSchemas: index !== undefined,
  };
  if (info.note) entry.note = info.note;
  if (openapi) {
    entry.operations = countOperations(openapi);
    entry.schemas = Object.keys(openapi?.components?.schemas ?? {}).length;
  }
  if (index) {
    entry.dataObjects = index.objects?.length ?? 0;
    entry.resources = index.resources?.length ?? 0;
  }
  if (source) {
    entry.origin = source.origin;
    entry.upstreamFormat = source.upstreamFormat;
    entry.capturedAt = source.capturedAt;
    entry.lastCheckedAt = source.lastCheckedAt;
  }
  return entry;
}

/**
 * Assemble the aggregate manifest over all adaptors.
 *
 * The result is a pure function of what's on disk — deliberately no wall-clock
 * timestamp. `manifest.json` is a committed derived artifact, so a build time
 * would dirty the file on every rebuild even when no spec changed, and AGENTS.md
 * already makes git the version/timestamp record. `dataUpdatedAt` carries the
 * meaning instead: the freshest real `lastCheckedAt ?? capturedAt` across the
 * registry, the same rule the dashboard's "Updated" chip uses. Rebuilding after
 * a no-op run therefore produces a byte-identical file.
 */
export function buildManifest(adaptors: AdaptorInfo[]): Manifest {
  const entries = adaptors.map(buildEntry);
  const byOrigin: Record<string, number> = {};
  for (const e of entries) if (e.origin) byOrigin[e.origin] = (byOrigin[e.origin] ?? 0) + 1;

  let dataUpdatedAt: string | undefined;
  let newest = -Infinity;
  for (const e of entries) {
    const clock = e.lastCheckedAt ?? e.capturedAt;
    if (!clock) continue;
    const t = Date.parse(clock);
    if (!Number.isNaN(t) && t > newest) {
      newest = t;
      dataUpdatedAt = clock;
    }
  }

  return {
    dataUpdatedAt,
    source: 'https://github.com/OpenFn/adaptors (packages/*)',
    totals: {
      adaptors: entries.length,
      withOpenapi: entries.filter((e) => e.hasOpenapi).length,
      withDataSchemas: entries.filter((e) => e.hasDataSchemas).length,
      dataObjects: entries.reduce((n, e) => n + (e.dataObjects ?? 0), 0),
      byOrigin,
    },
    adaptors: entries,
  };
}
