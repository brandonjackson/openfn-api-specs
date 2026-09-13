/**
 * Small internal helpers shared by the modules that read the registry off disk
 * (index / report / manifest / site). Nothing here is domain logic — it exists
 * so the same three-line JSON read and the same day-difference arithmetic
 * aren't re-declared, slightly differently, in four files.
 *
 * The pure converters (swagger.ts, discovery.ts, spec-parser.ts) deliberately
 * do NOT import from here: they are self-contained transforms over a plain
 * object, and keeping them dependency-free is worth one repeated constant.
 *
 * Package-internal; not re-exported from index.ts.
 */
import { existsSync, readFileSync } from 'node:fs';

/** The HTTP methods an OpenAPI path item can carry. */
const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'] as const;

/**
 * Read + parse a JSON file, or undefined if it doesn't exist. Malformed JSON
 * throws — callers that would rather treat a corrupt file as absent should use
 * `readJsonSafe`.
 */
export function readJson<T>(path: string): T | undefined {
  if (!existsSync(path)) return undefined;
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

/**
 * Like `readJson`, but a file that can't be parsed is treated as absent rather
 * than throwing. Used by the survey paths (report, manifest, site), which walk
 * the whole registry and must keep going past one bad file — `classify` is what
 * reports it, as the `wrong` bucket.
 */
export function readJsonSafe<T>(path: string): T | undefined {
  if (!existsSync(path)) return undefined;
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as T;
  } catch {
    return undefined;
  }
}

/**
 * Whole days from `isoDate` to `now`, or undefined if the date is missing or
 * unparseable. Drives the staleness clock in both the report and the dashboard.
 */
export function daysBetween(isoDate: string | undefined, now: Date): number | undefined {
  if (!isoDate) return undefined;
  const t = Date.parse(isoDate);
  if (Number.isNaN(t)) return undefined;
  return Math.floor((now.getTime() - t) / 86_400_000);
}

/** Count path+method operations in an OpenAPI document. */
export function countOperations(openapi: any): number {
  let n = 0;
  for (const item of Object.values(openapi?.paths ?? {})) {
    if (item && typeof item === 'object') {
      for (const m of HTTP_METHODS) if ((item as any)[m]) n++;
    }
  }
  return n;
}
