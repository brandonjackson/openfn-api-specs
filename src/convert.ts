/**
 * The capture half of the finding step (AGENTS.md step 4): take the machine spec
 * URL an agent found and turn it into the three artifacts the registry serves —
 * a verbatim `upstream.<ext>`, a full-coverage `openapi.json`, and the
 * `upstream.*` provenance block (including the `contentHash` drift detector).
 *
 * Doing this in code rather than by hand is what makes the verbatim contract
 * hold: the upstream bytes are written exactly as fetched and hashed in the same
 * pass, so the hash can never describe a different file than the one committed.
 *
 * Three upstream formats are recognised and each maps to the origin AGENTS.md
 * prescribes for it:
 *
 *  | detected                    | origin         | openapi.json is…                    |
 *  | --------------------------- | -------------- | ----------------------------------- |
 *  | OpenAPI 3.x (JSON or YAML)  | found-openapi  | the upstream, rendered to JSON      |
 *  | Swagger 2.0                 | converted      | swaggerToOpenApi(upstream)          |
 *  | Google Discovery            | converted      | discoveryToOpenApi(upstream)        |
 *
 * A YAML upstream is parsed with the `yaml` package (a devDependency, imported
 * lazily so the published runtime never needs it) and the *original YAML bytes*
 * are what get committed and hashed — the JSON rendering is a derivative.
 */
import { createHash } from 'node:crypto';
import { existsSync, writeFileSync } from 'node:fs';
import { discoveryToOpenApi } from './discovery.js';
import { swaggerToOpenApi } from './swagger.js';
import type { SpecOrigin } from './types.js';
import { countOperations } from './util.js';

/** What kind of machine spec the fetched bytes are. */
export type UpstreamKind = 'openapi' | 'swagger' | 'discovery';

export interface DetectedUpstream {
  kind: UpstreamKind;
  /** The `upstreamFormat` string for source.json (e.g. `openapi-3.1`). */
  format: string;
  /** The origin AGENTS.md prescribes for this kind. */
  origin: SpecOrigin;
  /** File extension for the verbatim copy (`json` or `yaml`). */
  ext: 'json' | 'yaml';
  /** The parsed document. */
  doc: any;
}

/** sha256 of the exact bytes we commit, in the `sha256:<hex>` form source.json uses. */
export function contentHash(bytes: Buffer | string): string {
  return 'sha256:' + createHash('sha256').update(bytes).digest('hex');
}

/** Parse fetched spec bytes as JSON, falling back to YAML. */
export async function parseSpec(text: string): Promise<{ doc: any; ext: 'json' | 'yaml' }> {
  try {
    return { doc: JSON.parse(text), ext: 'json' };
  } catch {
    // Not JSON — try YAML. `yaml` is a devDependency (maintenance-time only), so
    // import it lazily and say something useful if it is not installed.
    let parse: (s: string) => any;
    try {
      ({ parse } = await import('yaml'));
    } catch {
      throw new Error('Upstream is not JSON and the `yaml` package is not installed (run `pnpm install`).');
    }
    const doc = parse(text);
    if (!doc || typeof doc !== 'object') throw new Error('Upstream parsed as YAML but is not a document.');
    return { doc, ext: 'yaml' };
  }
}

/** Classify a parsed upstream document. Throws if it is not a spec we can serve. */
export function detect(doc: any, ext: 'json' | 'yaml'): Omit<DetectedUpstream, 'doc'> {
  if (typeof doc?.openapi === 'string' && /^3\./.test(doc.openapi)) {
    // 3.0.x and 3.1.x differ enough (nullable, examples, JSON Schema dialect)
    // that provenance records the minor version, not just "openapi-3".
    const format = /^3\.1/.test(doc.openapi) ? 'openapi-3.1' : 'openapi-3.0';
    return { kind: 'openapi', format, origin: 'found-openapi', ext };
  }
  if (doc?.swagger === '2.0') return { kind: 'swagger', format: 'swagger-2.0', origin: 'converted', ext };
  if (doc?.kind === 'discovery#restDescription') {
    return { kind: 'discovery', format: 'google-discovery', origin: 'converted', ext };
  }
  throw new Error(
    `Unrecognised upstream spec (openapi=${doc?.openapi} swagger=${doc?.swagger} kind=${doc?.kind}). ` +
      'Supported: OpenAPI 3.x, Swagger 2.0, Google Discovery.'
  );
}

export interface BuildResult {
  detected: Omit<DetectedUpstream, 'doc'>;
  openapi: any;
  warnings: string[];
}

/**
 * Produce the served `openapi.json` from a parsed upstream. An OpenAPI 3.x
 * upstream passes through untouched apart from the `x-openfn-adaptor` stamp
 * (AGENTS.md requires the file to be self-identifying); Swagger and Discovery
 * documents go through their converters.
 */
export function buildOpenapi(doc: any, adaptor: string, ext: 'json' | 'yaml'): BuildResult {
  const detected = detect(doc, ext);
  switch (detected.kind) {
    case 'openapi': {
      // Structured clone so the stamp never mutates the caller's parse of the
      // verbatim upstream (which is what gets hashed).
      const openapi = JSON.parse(JSON.stringify(doc));
      openapi.info ??= {};
      openapi.info['x-openfn-adaptor'] = adaptor;
      return { detected, openapi, warnings: [] };
    }
    case 'swagger': {
      const { openapi, warnings } = swaggerToOpenApi(doc, adaptor);
      return { detected, openapi, warnings };
    }
    case 'discovery': {
      const { openapi, warnings } = discoveryToOpenApi(doc, adaptor);
      return { detected, openapi, warnings };
    }
  }
}

export interface CaptureOptions {
  adaptor: string;
  /** Where to fetch the upstream spec from. */
  specUrl: string;
  /** Absolute path to write the verbatim upstream to, minus the extension. */
  upstreamBase: string;
  /** Absolute path for the served openapi.json. */
  openapiTarget: string;
  /** ISO date (YYYY-MM-DD) recorded as `fetchedAt`. */
  today: string;
  /** Pre-fetched bytes (tests, or a spec already on disk). Skips the network. */
  bytes?: string;
}

export interface CaptureResult extends BuildResult {
  /** Path the verbatim upstream was written to. */
  upstreamPath: string;
  contentHash: string;
  bytes: number;
  operations: number;
  /** The `upstream` block to merge into source.json. */
  upstream: { specUrl: string; format: string; contentHash: string; fetchedAt: string };
}

/**
 * Fetch (or accept) an upstream spec, commit it verbatim, and write the derived
 * `openapi.json`. Returns everything source.json needs to record the capture.
 */
export async function capture(opts: CaptureOptions): Promise<CaptureResult> {
  let text = opts.bytes;
  if (text === undefined) {
    const res = await fetch(opts.specUrl, { headers: { accept: 'application/json, application/yaml, text/yaml, */*' } });
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText} — ${opts.specUrl}`);
    text = await res.text();
  }

  const { doc, ext } = await parseSpec(text);
  const built = buildOpenapi(doc, opts.adaptor, ext);

  // The verbatim copy is the bytes as fetched — no reserialisation, no reformat.
  const upstreamPath = `${opts.upstreamBase}.${ext}`;
  writeFileSync(upstreamPath, text);
  writeFileSync(opts.openapiTarget, JSON.stringify(built.openapi, null, 2) + '\n');

  return {
    ...built,
    upstreamPath,
    contentHash: contentHash(text),
    bytes: Buffer.byteLength(text),
    operations: countOperations(built.openapi),
    upstream: {
      specUrl: opts.specUrl,
      format: built.detected.format,
      contentHash: contentHash(text),
      fetchedAt: opts.today,
    },
  };
}

/**
 * Verbatim upstream files left over from a previous capture in a different
 * format (e.g. re-capturing as YAML a spec that used to be JSON). The caller
 * deletes these so an adaptor never ships two `upstream.*` files both claiming
 * to be the source of truth — `upstreamPath()` resolves the first it finds, so a
 * leftover would silently shadow the real one.
 */
export function staleUpstreams(upstreamBase: string, keepExt: string): string[] {
  return ['json', 'yaml', 'yml']
    .filter((ext) => ext !== keepExt)
    .map((ext) => `${upstreamBase}.${ext}`)
    .filter((p) => existsSync(p));
}
