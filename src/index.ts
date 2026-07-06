/**
 * openfn-api-specs — programmatic API.
 *
 * Read access to the maintained OpenAPI specs and standalone data-object
 * schemas for every OpenFn adaptor. Consumers (e.g. openfn-mocker's seed
 * generation, or Lightning tooling) import from here rather than reaching into
 * the files directly.
 *
 *   import { getOpenapi, getDataObjects, listAdaptors } from 'openfn-api-specs';
 *
 * The maintenance CLI (list / status / instructions / data-objects / manifest)
 * lives in ./cli and is exposed as the `openfn-api-specs` bin.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadAdaptors, type AdaptorInfo } from './adaptors.js';
import {
  dataSchemasDir,
  dataSchemasIndexPath,
  manifestPath,
  openapiPath,
  sourcePath,
} from './paths.js';
import type { Manifest, SpecSource } from './types.js';

export type { AdaptorInfo } from './adaptors.js';
export type {
  Manifest,
  ManifestEntry,
  SpecSource,
  SpecOrigin,
  SpecCoverage,
  SpecCompleteness,
  SpecUpstream,
  SpecAttempt,
  FeedbackStatus,
  MaintenanceLogEntry,
} from './types.js';

function readJson<T>(path: string): T | undefined {
  if (!existsSync(path)) return undefined;
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

/** The full adaptor list from openfn/adaptors (reads the shipped cache). */
export async function listAdaptors(refresh = false): Promise<AdaptorInfo[]> {
  return loadAdaptors(refresh);
}

/** The aggregate manifest (coverage index), or undefined if not built. */
export function getManifest(): Manifest | undefined {
  return readJson<Manifest>(manifestPath());
}

/** One adaptor's OpenAPI 3.x document, or undefined if absent. */
export function getOpenapi(adaptor: string): any | undefined {
  return readJson<any>(openapiPath(adaptor));
}

/** One adaptor's spec provenance, or undefined if absent. */
export function getSource(adaptor: string): SpecSource | undefined {
  return readJson<SpecSource>(sourcePath(adaptor));
}

/** The data-object index for an adaptor (objects + which are resources). */
export function getDataObjectIndex(adaptor: string):
  | { adaptor: string; capturedAt: string; dialect: string; source: string; resources: string[]; objects: Array<{ name: string; file: string; resource: boolean }> }
  | undefined {
  return readJson(dataSchemasIndexPath(adaptor));
}

/** One named data-object JSON Schema for an adaptor. */
export function getDataObject(adaptor: string, object: string): any | undefined {
  const file = object.endsWith('.json') ? object : `${object}.json`;
  return readJson<any>(join(dataSchemasDir(adaptor), file));
}

/**
 * All of an adaptor's data-object schemas, keyed by object name. Reads the
 * index when present (authoritative ordering + resource flags); otherwise
 * falls back to listing the directory.
 */
export function getDataObjects(adaptor: string): Record<string, any> {
  const out: Record<string, any> = {};
  const index = getDataObjectIndex(adaptor);
  const dir = dataSchemasDir(adaptor);
  const files = index
    ? index.objects.map((o) => o.file)
    : existsSync(dir)
    ? readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'index.json')
    : [];
  for (const f of files) {
    const schema = readJson<any>(join(dir, f));
    if (schema) out[f.replace(/\.json$/, '')] = schema;
  }
  return out;
}

export {
  registryRoot,
  adaptorDir,
  openapiPath,
  upstreamPath,
  sourcePath,
  dataSchemasDir,
  dataSchemasIndexPath,
  manifestPath,
  maintenanceLogPath,
} from './paths.js';
