import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import type { AdaptorInfo } from './adaptors.js';
import { adaptorDir, dataSchemasIndexPath, openapiPath, registryRoot, sourcePath } from './paths.js';
import type { FeedbackStatus, SpecSource } from './types.js';

/**
 * The feedback pillar of the maintenance loop (see AGENTS.md): classify every
 * adaptor into one bucket so the agent knows what to work on next. This is a
 * metadata-level, OFFLINE read — it does not re-fetch upstream (that's a future
 * `--check`, which is what surfaces the `at-risk` bucket). Deep correctness
 * (drift, dangling refs) is enforced separately by `pnpm test`.
 */

const ORIGINS = new Set(['found-openapi', 'converted', 'generated', 'synthesized']);

export interface FeedbackRow {
  adaptor: string;
  status: FeedbackStatus;
  reason: string;
}

function readJson<T>(path: string): T | undefined {
  if (!existsSync(path)) return undefined;
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as T;
  } catch {
    return undefined;
  }
}

function daysBetween(isoDate: string, now: Date): number | undefined {
  const t = Date.parse(isoDate);
  if (Number.isNaN(t)) return undefined;
  return Math.floor((now.getTime() - t) / 86_400_000);
}

/** Classify one adaptor. `now` and `staleAfterDays` are injected for testability. */
export function classify(info: AdaptorInfo, now: Date, staleAfterDays: number): FeedbackRow {
  const name = info.name;
  const row = (status: FeedbackStatus, reason: string): FeedbackRow => ({ adaptor: name, status, reason });

  if (!existsSync(adaptorDir(name))) return row('new', 'in adaptor list, no directory yet');
  if (!existsSync(openapiPath(name))) return row('missing', 'no openapi.json');

  // openapi.json must at least parse and look like OpenAPI.
  const openapi = readJson<any>(openapiPath(name));
  if (!openapi || typeof openapi !== 'object') return row('wrong', 'openapi.json is unparseable');
  if (typeof openapi.openapi !== 'string' || !openapi.paths) return row('wrong', 'openapi.json missing openapi/paths');
  if (!existsSync(dataSchemasIndexPath(name))) return row('missing', 'no data-schemas/index.json');

  const src = readJson<SpecSource>(sourcePath(name));
  if (!src) return row('wrong', 'no source.json');
  if (!ORIGINS.has(src.origin)) return row('wrong', `bad origin "${src.origin}"`);
  if (!Array.isArray(src.sources) || src.sources.length === 0) return row('wrong', 'empty sources[]');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(src.capturedAt ?? '')) return row('wrong', `bad capturedAt "${src.capturedAt}"`);

  // Coverage/completeness. A vendor-provided complete OpenAPI spec saved
  // verbatim (origin=found-openapi) is full + complete by definition, so it
  // needs no separate claim. Every other origin must declare completeness;
  // absent a claim it is treated as not-yet-verified (incomplete). Explicit
  // source.json fields always win (and can downgrade found-openapi to subset).
  const impliedComplete = src.origin === 'found-openapi';
  const coverage = src.coverage ?? (impliedComplete ? 'full' : undefined);
  const completeness = src.completeness ?? (impliedComplete ? 'complete' : undefined);

  if (coverage !== 'full') return row('incomplete', coverage ? `coverage=${coverage}` : 'coverage unverified (no full-coverage claim)');
  if (completeness === 'best-effort') return row('incomplete', `best-effort${src.completenessReason ? ` (${src.completenessReason})` : ''}`);
  if (completeness !== 'complete') return row('incomplete', 'completeness unverified');

  // Staleness clock: prefer lastCheckedAt, fall back to capturedAt.
  const clock = src.lastCheckedAt ?? src.capturedAt;
  const age = daysBetween(clock, now);
  if (age === undefined) return row('wrong', `bad date "${clock}"`);
  if (age > staleAfterDays) return row('stale', `last checked ${age}d ago (> ${staleAfterDays}d)`);

  return row('ok', `${src.origin}, ${completeness}, checked ${age}d ago`);
}

const ORDER: FeedbackStatus[] = ['wrong', 'at-risk', 'missing', 'new', 'incomplete', 'stale', 'ok'];

/** Classify every adaptor. Discovers on-disk dirs too, so removed-upstream dirs surface. */
export function report(adaptors: AdaptorInfo[], now: Date, staleAfterDays = 90): FeedbackRow[] {
  const rows = adaptors.map((a) => classify(a, now, staleAfterDays));
  return rows.sort((a, b) => ORDER.indexOf(a.status) - ORDER.indexOf(b.status) || a.adaptor.localeCompare(b.adaptor));
}

/** Directories under specs/adaptors that are not in the adaptor list (removed upstream?). */
export function orphanDirs(adaptors: AdaptorInfo[]): string[] {
  const root = registryRoot();
  if (!existsSync(root)) return [];
  const known = new Set(adaptors.map((a) => a.name));
  return readdirSync(root)
    .filter((n) => statSync(join(root, n)).isDirectory() && existsSync(openapiPath(n)))
    .filter((n) => !known.has(n))
    .sort();
}
