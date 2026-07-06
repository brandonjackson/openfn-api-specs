/** How an adaptor's OpenAPI spec was obtained. */
export type SpecOrigin =
  /** A published OpenAPI/Swagger document was found online and saved verbatim. */
  | 'found-openapi'
  /** A non-OpenAPI machine spec (Swagger 2.0, Google Discovery, Postman, WSDL,
   *  GraphQL SDL) was found and converted to OpenAPI 3.x. */
  | 'converted'
  /** No machine spec existed; the OpenAPI was authored from the vendor's docs
   *  (a "documenting pass"), covering the endpoints the adaptor calls. */
  | 'generated'
  /** The adaptor has no external REST API (protocol/util/internal); the spec is
   *  synthesized from the adaptor's own operation surface. */
  | 'synthesized';

/** Whether openapi.json is the full API or a view derived from a full source. */
export type SpecCoverage = 'full' | 'subset';

/** How complete the full-coverage copy actually is. */
export type SpecCompleteness = 'complete' | 'best-effort';

/** Pointer + fingerprint for the verbatim upstream machine spec (upstream.json). */
export interface SpecUpstream {
  /** Where the upstream spec was fetched from. */
  specUrl: string;
  /** Upstream format as fetched (e.g. 'openapi-3.1', 'swagger-2.0', 'graphql-sdl'). */
  format: string;
  /** sha256 of upstream.json as fetched — the drift detector. */
  contentHash: string;
  /** ISO date (YYYY-MM-DD) the upstream spec was fetched. */
  fetchedAt: string;
}

/** One entry in the finding-step decision trail. */
export interface SpecAttempt {
  /** What kind of source was tried. */
  kind: 'openapi' | 'swagger' | 'discovery' | 'postman' | 'wsdl' | 'graphql' | 'docs' | string;
  url?: string;
  result: 'used' | 'not-found' | 'rejected';
  note?: string;
}

/**
 * `source.json` — provenance for one adaptor's spec. Written alongside
 * `openapi.json` so a human (or a re-run of the loop) can see where the spec
 * came from, how complete it is, and whether it needs a refresh. See AGENTS.md
 * for the authoritative schema and the maintenance loop that maintains it.
 */
export interface SpecSource {
  adaptor: string;
  /** npm package the adaptor publishes as. */
  npm: string;
  origin: SpecOrigin;
  /** The upstream format before any conversion (e.g. 'openapi-3.1', 'swagger-2.0',
   *  'google-discovery', 'graphql-sdl', 'docs', 'adaptor-surface'). */
  upstreamFormat: string;
  /** Whether openapi.json is the full API ('full') or a derived view ('subset'). */
  coverage?: SpecCoverage;
  /** When coverage='subset', the full artifact it was derived from (e.g. 'upstream.json'). */
  derivedFrom?: string;
  /** Whether the full copy is genuinely complete or a best-effort reconstruction. */
  completeness?: SpecCompleteness;
  /** When completeness='best-effort': why (e.g. 'docs-only', 'private-api', 'partial-docs'). */
  completenessReason?: string;
  /** Present when a machine spec exists (origin found-openapi | converted). */
  upstream?: SpecUpstream;
  /** The finding-step decision trail — including the misses, so fallbacks are auditable. */
  attempts?: SpecAttempt[];
  /** What the endpoint/operation surface was cross-checked against (e.g. ['ast.json']). */
  verifiedAgainst?: string[];
  /** URLs consulted: the spec URL and/or the docs pages scraped. */
  sources: string[];
  /** ISO date (YYYY-MM-DD) the spec content was produced. */
  capturedAt: string;
  /** ISO date (YYYY-MM-DD) we last verified this spec against upstream (staleness clock). */
  lastCheckedAt?: string;
  /**
   * Content edits applied to a verbatim upstream, if ANY were unavoidable (e.g. a
   * secret-scanner-tripping example value redacted). MUST be empty/absent for a
   * clean verbatim copy — every entry is a loud, reviewable exception to the
   * "never edit a published spec" rule. One human-readable string per change.
   */
  modifications?: string[];
  /** Free-text notes: coverage scope, caveats, what was omitted. */
  notes?: string;
}

/** The bucket `pnpm specs report` assigns an adaptor to (see AGENTS.md). */
export type FeedbackStatus =
  | 'ok'
  | 'new'
  | 'missing'
  | 'stale'
  | 'incomplete'
  | 'at-risk'
  | 'wrong';

/**
 * One append-only entry in `specs/adaptors/maintenance-log.jsonl`. Written only
 * when something happened (a scrape/check, a problem detected, or a fix) — never
 * for a clean no-op run.
 */
export interface MaintenanceLogEntry {
  /** ISO-8601 timestamp. */
  ts: string;
  adaptor: string;
  event:
    | 'scraped'
    | 'checked'
    | 'new'
    | 'missing'
    | 'stale'
    | 'drift'
    | 'upstream-changed'
    | 'incomplete'
    | 'fixed'
    | 'error';
  detail: string;
  /** Before value for a transition (e.g. old contentHash). */
  from?: string;
  /** After value for a transition. */
  to?: string;
  /** Who wrote the entry. */
  by?: 'agent' | 'cli';
}

/** One adaptor's row in the aggregate manifest. */
export interface ManifestEntry {
  adaptor: string;
  npm: string;
  rest: boolean;
  hasOpenapi: boolean;
  hasDataSchemas: boolean;
  origin?: SpecOrigin;
  upstreamFormat?: string;
  /** Number of path+method operations in the OpenAPI spec. */
  operations?: number;
  /** Number of top-level component schemas in the OpenAPI spec. */
  schemas?: number;
  /** Number of standalone data-object files extracted (closure of resources). */
  dataObjects?: number;
  /** Number of those that are top-level response resources. */
  resources?: number;
  capturedAt?: string;
  note?: string;
}

export interface Manifest {
  generatedAt: string;
  source: string;
  totals: {
    adaptors: number;
    withOpenapi: number;
    withDataSchemas: number;
    dataObjects: number;
    byOrigin: Record<string, number>;
  };
  adaptors: ManifestEntry[];
}
