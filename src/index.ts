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

/* ------------------------------------------------------------------ *
 * Runtime CDN fetch (freshness)
 *
 * The `get*` readers above return the specs bundled with this installed
 * package version — a fixed snapshot. The `fetch*` variants below pull the
 * live specs from jsDelivr (which mirrors this public repo), so a consumer
 * always sees the latest without bumping its dependency, and fall back to the
 * bundled snapshot when the CDN is unreachable (offline, air-gapped CI).
 *
 * Env controls:
 *   OPENFN_API_SPECS_REF          git ref to fetch (default 'main')
 *   OPENFN_API_SPECS_REPO         owner/repo (default 'brandonjackson/openfn-api-specs')
 *   OPENFN_API_SPECS_DISABLE_CDN  '1' to always use the bundled snapshot
 *   OPENFN_API_SPECS_TIMEOUT_MS   per-request timeout (default 5000)
 * ------------------------------------------------------------------ */
const CDN_REPO = process.env.OPENFN_API_SPECS_REPO || 'brandonjackson/openfn-api-specs';
const CDN_REF = process.env.OPENFN_API_SPECS_REF || 'main';
const CDN_TIMEOUT_MS = Number(process.env.OPENFN_API_SPECS_TIMEOUT_MS) || 5000;
const cdnDisabled = (): boolean => process.env.OPENFN_API_SPECS_DISABLE_CDN === '1';
const cdnCache = new Map<string, unknown>();

/** Fetch + parse a JSON file under specs/adaptors/ from the CDN; undefined on any failure. */
async function cdnJson(relPath: string): Promise<any | undefined> {
  if (cdnDisabled()) return undefined;
  if (cdnCache.has(relPath)) return cdnCache.get(relPath);
  const url = `https://cdn.jsdelivr.net/gh/${CDN_REPO}@${CDN_REF}/specs/adaptors/${relPath}`;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), CDN_TIMEOUT_MS);
    const res = await fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
    if (!res.ok) return undefined;
    const json = await res.json();
    cdnCache.set(relPath, json);
    return json;
  } catch {
    return undefined;
  }
}

/** Latest OpenAPI doc for an adaptor (CDN-first, bundled fallback). */
export async function fetchOpenapi(adaptor: string): Promise<any | undefined> {
  return (await cdnJson(`${adaptor}/openapi.json`)) ?? getOpenapi(adaptor);
}

/** Latest aggregate manifest (CDN-first, bundled fallback). */
export async function fetchManifest(): Promise<Manifest | undefined> {
  return (await cdnJson('manifest.json')) ?? getManifest();
}

/** Latest data-object index for an adaptor (CDN-first, bundled fallback). */
export async function fetchDataObjectIndex(adaptor: string): Promise<ReturnType<typeof getDataObjectIndex>> {
  return (await cdnJson(`${adaptor}/data-schemas/index.json`)) ?? getDataObjectIndex(adaptor);
}

/** Latest single data-object schema for an adaptor (CDN-first, bundled fallback). */
export async function fetchDataObject(adaptor: string, object: string): Promise<any | undefined> {
  const file = object.endsWith('.json') ? object : `${object}.json`;
  return (await cdnJson(`${adaptor}/data-schemas/${file}`)) ?? getDataObject(adaptor, object);
}

/** All of an adaptor's data-object schemas keyed by name (CDN-first, bundled fallback). */
export async function fetchDataObjects(adaptor: string): Promise<Record<string, any>> {
  const index = await fetchDataObjectIndex(adaptor);
  if (!index) return getDataObjects(adaptor);
  const out: Record<string, any> = {};
  for (const o of index.objects) {
    const schema = await fetchDataObject(adaptor, o.file);
    if (schema) out[o.name] = schema;
  }
  return out;
}
