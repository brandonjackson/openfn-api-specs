/**
 * Conformance engine: does an observed HTTP exchange conform to an adaptor's
 * OpenAPI spec?
 *
 * The engine is deliberately transport-agnostic. It takes a spec and a
 * recorded request/response pair (`Exchange`) and returns `Violation`s. Who
 * produced the traffic — openfn-mocker's in-process driver, a real adaptor run
 * against a live instance, a captured HAR — is none of its business, so the
 * specs repo never learns the shape of any one consumer.
 *
 *   const c = createConformer(getOpenapi('dhis2'));
 *   c.check({ method: 'GET', path: '/api/organisationUnits', status: 200, responseBody });
 *   c.coverage();   // which spec operations the traffic exercised
 *
 * Matching: the exchange's concrete path (query string ignored) is matched
 * against every operation's path template, first bare and then behind each
 * `servers[].url` path prefix (CommCare's `/a/{domain}`, for instance) or any
 * trailing part of it (a base URL that already absorbs `/openmrs` out of
 * `/openmrs/ws/rest/v1`), with the most literal template winning. The response schema is chosen by the
 * *actual* status (`responses[status]`, then `2XX`-style ranges, then
 * `default`), not by the spec's preferred success code.
 *
 * Validation uses Ajv against the spec's own `components`, so every `$ref`
 * resolves the way the spec author wrote it. OpenAPI 3.0 and generator idioms
 * that are not JSON Schema 2020-12 (`nullable`, boolean `exclusiveMinimum`, a
 * non-array `required`, `type: any`, a Java-only regex `pattern`) are
 * rewritten on a private copy; the committed spec is never touched.
 */
import Ajv2020Module, { type ErrorObject, type ValidateFunction } from 'ajv/dist/2020.js';
import addFormatsModule from 'ajv-formats';

// Both packages are CommonJS with `module.exports = X; exports.default = X`, so
// under NodeNext the default import is typed as the module namespace while the
// runtime value is X itself; `.default` is X in both worlds.
const Ajv2020 = Ajv2020Module.default;
const addFormats = addFormatsModule.default;
import { parseSpec, type ParsedOperation, type ParsedSpec } from './spec-parser.js';

/** One observed request/response pair, as sent and received. */
export interface Exchange {
  /** HTTP method, any case ('GET'). */
  method: string;
  /** Concrete request path as sent, query string allowed ('/api/organisationUnits/abc?fields=id'). */
  path: string;
  /** Response status code. */
  status: number;
  /** Parsed request body, when one was sent. */
  requestBody?: unknown;
  /** Parsed response body. Omit (undefined) when the response had none. */
  responseBody?: unknown;
  /** Response Content-Type, when known. Non-JSON responses are not schema-checked. */
  contentType?: string;
}

export type ViolationKind =
  /** No operation in the spec matches this method + path. */
  | 'unknown-operation'
  /** The operation matched but the spec documents no response for this status (and no default). */
  | 'unknown-status'
  /** The response body does not satisfy the documented schema for this status. */
  | 'response-schema'
  /** The request body does not satisfy the documented request schema. */
  | 'request-schema'
  /** The spec's schema itself could not be compiled (dangling $ref, malformed keyword). */
  | 'schema-error';

export interface Violation {
  kind: ViolationKind;
  /** 'GET /api/organisationUnits/{id}' — the matched spec operation, when there is one. */
  operation?: string;
  /** The exchange that produced this violation, as 'GET /api/organisationUnits/abc'. */
  exchange: string;
  /** JSON pointer into the offending body ('/organisationUnits/0/created'). */
  pointer?: string;
  message: string;
}

export interface ConformOptions {
  /**
   * Treat properties the spec does not list as violations wherever an object
   * schema declares `properties` but is silent on `additionalProperties`.
   * Default false: extra fields pass unless the spec forbids them, because real
   * servers grow fields faster than specs do and drift should surface as a
   * signal, not noise.
   */
  strictAdditional?: boolean;
  /** Validate request bodies too (default true). Turn off for traffic you don't control. */
  checkRequests?: boolean;
  /** `format` names to skip entirely (e.g. ['date-time'] where a vendor is sloppy). */
  ignoreFormats?: string[];
  /**
   * Extra path prefixes to try in front of every template, on top of those
   * derived from `servers[].url`. A runner that mounts the API under `/dhis2`
   * passes ['/dhis2'].
   */
  serverPrefixes?: string[];
}

export interface Coverage {
  /** Spec operations exercised by at least one checked exchange. */
  hit: string[];
  /** Spec operations no checked exchange reached. */
  missed: string[];
  /** Exchanges that matched no operation, as 'GET /some/path'. */
  unmatched: string[];
  /** Total exchanges checked. */
  exchanges: number;
}

export interface Conformer {
  /** Resolve a method + concrete path to the spec operation it hits, if any. */
  match(method: string, path: string): ParsedOperation | undefined;
  /** Check one exchange; records it for coverage. */
  check(exchange: Exchange): Violation[];
  /** Check many exchanges; violations in input order. */
  checkAll(exchanges: Iterable<Exchange>): Violation[];
  /** Which operations the traffic checked so far did and did not exercise. */
  coverage(): Coverage;
  /** Every operation in the spec, as 'METHOD /template'. */
  operations(): string[];
}

/* ------------------------------------------------------------------ *
 * Path matching
 * ------------------------------------------------------------------ */

interface Matcher {
  op: ParsedOperation;
  key: string;
  regex: RegExp;
  /** Literal (non-parameter) segments — more is more specific. */
  literals: number;
  params: number;
}

const escapeRegex = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Strip query/fragment and a trailing slash (but keep the root '/'). */
export function normalizePath(path: string): string {
  let p = path;
  const q = p.search(/[?#]/);
  if (q >= 0) p = p.slice(0, q);
  if (!p.startsWith('/')) p = '/' + p;
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p;
}

/** One template segment → regex source; `{x}` (possibly embedded) becomes a non-slash run. */
function segmentSource(seg: string): { src: string; isParam: boolean } {
  if (!seg.includes('{')) return { src: escapeRegex(seg), isParam: false };
  const src = seg
    .split(/(\{[^}]+\})/)
    .filter(Boolean)
    .map((part) => (/^\{[^}]+\}$/.test(part) ? '[^/]+' : escapeRegex(part)))
    .join('');
  return { src, isParam: true };
}

/**
 * Trailing-slash-insensitive form of a path template. Unlike `normalizePath`
 * this keeps `#`: some generators (DHIS2) mint keys like
 * `/api/organisationUnits/#getGeoJson` for content-negotiated variants, and a
 * request path never carries a fragment, so those stay distinct and unmatched
 * instead of shadowing the real `/api/organisationUnits` operation.
 */
function normalizeTemplate(template: string): string {
  let p = template.startsWith('/') ? template : '/' + template;
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p;
}

function compileTemplate(template: string): { src: string; literals: number; params: number } {
  const segs = normalizeTemplate(template).split('/').filter(Boolean);
  let literals = 0;
  let params = 0;
  const src = segs
    .map((seg) => {
      const s = segmentSource(seg);
      if (s.isParam) params++;
      else literals++;
      return '/' + s.src;
    })
    .join('');
  return { src: src || '/', literals, params };
}

/** Path prefixes implied by `servers[].url` ('' for a bare host). Template variables become wildcards. */
export function serverPathPrefixes(openapi: any): string[] {
  const servers: any[] = Array.isArray(openapi?.servers) ? openapi.servers : [];
  const out = new Set<string>();
  for (const s of servers) {
    if (typeof s?.url !== 'string') continue;
    const url: string = s.url;
    // Templated hosts ('https://{tenant}.example.com/v1') are not valid URLs, so
    // split by hand: an optional scheme://host, then the path (variables kept).
    const m = url.match(/^(?:[a-z][a-z0-9+.-]*:)?\/\/[^/]*(\/.*)?$/i);
    const pathname = m ? m[1] ?? '' : url.startsWith('/') ? url : '';
    const norm = normalizePath(pathname);
    out.add(norm === '/' ? '' : norm);
  }
  return [...out];
}

/** '/a/b/c' → ['/a/b/c', '/b/c', '/c'] ('' stays ['']). */
export function trailingSubPaths(prefix: string): string[] {
  if (!prefix) return [''];
  const segs = prefix.split('/').filter(Boolean);
  return segs.map((_, i) => '/' + segs.slice(i).join('/'));
}

/* ------------------------------------------------------------------ *
 * Schema preparation for Ajv
 * ------------------------------------------------------------------ */

const JSON_TYPES = new Set(['null', 'boolean', 'object', 'array', 'number', 'string', 'integer']);

const KNOWN_FORMATS = new Set([
  'date', 'time', 'date-time', 'iso-time', 'iso-date-time', 'duration', 'uri', 'uri-reference',
  'uri-template', 'url', 'email', 'hostname', 'ipv4', 'ipv6', 'regex', 'uuid', 'json-pointer',
  'json-pointer-uri-fragment', 'relative-json-pointer', 'byte', 'int32', 'int64', 'float',
  'double', 'password', 'binary',
]);

/**
 * Rewrite a deep copy of the spec so Ajv (2020-12) accepts OpenAPI-flavoured
 * schemas: `nullable` → union with null, boolean `exclusiveMinimum/Maximum`
 * (draft-4 via Swagger conversions) → numeric, and optionally the closed-object
 * rule for `strictAdditional`. Also collects every `format` name used.
 */
function prepareSpec(openapi: any, opts: ConformOptions): { doc: any; formats: Set<string> } {
  const doc = JSON.parse(JSON.stringify(openapi));
  const formats = new Set<string>();
  const seen = new WeakSet<object>();

  const walk = (node: any, inSchema: boolean): void => {
    if (!node || typeof node !== 'object' || seen.has(node)) return;
    seen.add(node);
    if (Array.isArray(node)) {
      for (const item of node) walk(item, inSchema);
      return;
    }
    if (inSchema) {
      if (node.nullable === true) {
        delete node.nullable;
        if (typeof node.type === 'string') node.type = [node.type, 'null'];
        else if (Array.isArray(node.type)) {
          if (!node.type.includes('null')) node.type.push('null');
        } else {
          // No `type` to widen: the shape lives in `$ref` / `anyOf` / `oneOf` /
          // `allOf` (Stripe: `{ anyOf: [{ $ref }], nullable: true }`). Wrap the
          // whole constraint so null is accepted alongside it.
          const inner: Record<string, any> = {};
          for (const [k, v] of Object.entries(node)) {
            if (['description', 'title', 'example', 'examples', 'deprecated', 'readOnly', 'writeOnly', 'xml', 'externalDocs'].includes(k)) continue;
            inner[k] = v;
            delete node[k];
          }
          if (Object.keys(inner).length) node.anyOf = [inner, { type: 'null' }];
          else node.type = ['null', 'object', 'array', 'string', 'number', 'boolean', 'integer'];
        }
      }
      for (const k of ['exclusiveMinimum', 'exclusiveMaximum'] as const) {
        if (typeof node[k] === 'boolean') {
          const bound = k === 'exclusiveMinimum' ? 'minimum' : 'maximum';
          if (node[k] === true && typeof node[bound] === 'number') {
            node[k] = node[bound];
            delete node[bound];
          } else delete node[k];
        }
      }
      // Swagger-1.2-style `required: true` on a property (and other non-array
      // values) is not JSON Schema; Ajv refuses to compile it, so drop it.
      if (node.required !== undefined && !Array.isArray(node.required)) delete node.required;
      // Non-JSON-Schema type names (`any` from DHIS2's generator, Swagger's
      // `file`) constrain nothing Ajv can check: drop them, keeping real ones.
      if (typeof node.type === 'string' && !JSON_TYPES.has(node.type)) delete node.type;
      else if (Array.isArray(node.type)) {
        node.type = node.type.filter((t: unknown) => typeof t === 'string' && JSON_TYPES.has(t));
        if (node.type.length === 0) delete node.type;
        else if (node.type.length === 1) node.type = node.type[0];
      }
      // A `pattern` in a dialect JS cannot compile (Java inline flags `(?i)`,
      // possessive quantifiers) would throw at compile time; it cannot be
      // checked here, so drop it rather than fail the whole schema.
      if (typeof node.pattern === 'string') {
        try {
          new RegExp(node.pattern);
        } catch {
          delete node.pattern;
        }
      }
      if (typeof node.format === 'string') formats.add(node.format);
      if (
        opts.strictAdditional &&
        node.type === 'object' &&
        node.properties &&
        node.additionalProperties === undefined &&
        !node.$ref
      ) {
        node.additionalProperties = false;
      }
    }
    for (const [k, v] of Object.entries(node)) {
      // Everything under components.schemas / a `schema` key is schema territory;
      // `properties`/`items`/combinators keep us there. Anything else (paths,
      // parameters, examples) is OpenAPI plumbing that Ajv must ignore.
      const enters = k === 'schema' || k === 'schemas';
      const stays = inSchema && !['example', 'examples', 'xml', 'externalDocs', 'discriminator'].includes(k);
      walk(v, enters || stays);
    }
  };

  walk(doc, false);
  return { doc, formats };
}

const SPEC_ID = 'urn:openfn:api-spec';

/** JSON-pointer-escape and URI-encode one pointer segment for an Ajv `$ref` fragment. */
const pointerSeg = (s: string): string => encodeURIComponent(s.replace(/~/g, '~0').replace(/\//g, '~1'));

function isJsonMedia(mediaType: string): boolean {
  const mt = mediaType.split(';')[0].trim().toLowerCase();
  return mt === 'application/json' || mt.endsWith('+json') || mt === 'text/json';
}

/** Pick the JSON media type key under a `content` map, preferring the exchange's own. */
function pickJsonMedia(content: Record<string, any> | undefined, preferred?: string): string | undefined {
  if (!content) return undefined;
  const keys = Object.keys(content);
  if (preferred) {
    const want = preferred.split(';')[0].trim().toLowerCase();
    const exact = keys.find((k) => k.split(';')[0].trim().toLowerCase() === want);
    if (exact) return exact;
  }
  return keys.find((k) => k.split(';')[0].trim() === 'application/json') ?? keys.find(isJsonMedia) ?? keys.find((k) => k.includes('*'));
}

function statusKey(responses: Record<string, any> | undefined, status: number): string | undefined {
  if (!responses) return undefined;
  const exact = String(status);
  if (responses[exact]) return exact;
  const range = `${Math.floor(status / 100)}XX`;
  if (responses[range]) return range;
  if (responses[range.toLowerCase()]) return range.toLowerCase();
  if (responses.default) return 'default';
  return undefined;
}

/* ------------------------------------------------------------------ *
 * The conformer
 * ------------------------------------------------------------------ */

export function createConformer(openapi: any, opts: ConformOptions = {}): Conformer {
  if (!openapi || typeof openapi !== 'object' || !openapi.paths) {
    throw new Error('createConformer: expected an OpenAPI document with `paths`');
  }
  const checkRequests = opts.checkRequests ?? true;
  const ignoreFormats = new Set(opts.ignoreFormats ?? []);

  const parsed: ParsedSpec = parseSpec(openapi);
  const { doc, formats } = prepareSpec(openapi, opts);

  const ajv = new Ajv2020({
    strict: false,
    allErrors: true,
    validateSchema: false,
    validateFormats: true,
    allowUnionTypes: true,
    // Vendors write JS-flavoured patterns (`\_`, `\@`) that the `u` flag rejects.
    unicodeRegExp: false,
  });
  addFormats(ajv);
  for (const f of formats) {
    // Vendor-specific or ignored formats validate as pass-through rather than throwing.
    if (ignoreFormats.has(f) || !KNOWN_FORMATS.has(f)) ajv.addFormat(f, true);
  }
  ajv.addSchema(doc, SPEC_ID);

  // --- matchers -----------------------------------------------------------
  // A client's base URL may absorb any leading part of the server path: an
  // OpenMRS credential points at `https://host/openmrs`, so the adaptor sends
  // `/ws/rest/v1/patient` against a spec whose server is
  // `https://demo.openmrs.org/openmrs/ws/rest/v1` and whose path is `/patient`.
  // So every trailing sub-path of a derived server prefix is tried too.
  const prefixes = Array.from(
    new Set([
      '',
      ...serverPathPrefixes(openapi).flatMap(trailingSubPaths),
      ...(opts.serverPrefixes ?? []).map((p) => {
        const n = normalizePath(p);
        return n === '/' ? '' : n;
      }),
    ])
  );

  const matchers: Matcher[] = [];
  for (const op of parsed.operations) {
    const key = `${op.method} ${op.path}`;
    const t = compileTemplate(op.path);
    for (const prefix of prefixes) {
      const p = prefix ? compileTemplate(prefix) : { src: '', literals: 0, params: 0 };
      matchers.push({
        op,
        key,
        regex: new RegExp(`^${p.src}${t.src === '/' ? '/?' : t.src}$`),
        literals: t.literals + p.literals,
        params: t.params + p.params,
      });
    }
  }
  // Most specific first: more literal segments, then fewer params.
  matchers.sort((a, b) => b.literals - a.literals || a.params - b.params);

  const match = (method: string, path: string): ParsedOperation | undefined => {
    const m = method.toUpperCase();
    const p = normalizePath(path);
    for (const cand of matchers) {
      if (cand.op.method !== m) continue;
      if (cand.regex.test(p)) return cand.op;
    }
    return undefined;
  };

  // --- schema lookup --------------------------------------------------------
  const compiled = new Map<string, ValidateFunction | Error>();
  const validatorFor = (pointerSegs: string[]): ValidateFunction | Error => {
    const ref = `${SPEC_ID}#/${pointerSegs.map(pointerSeg).join('/')}`;
    const cached = compiled.get(ref);
    if (cached) return cached;
    let v: ValidateFunction | Error;
    try {
      v = ajv.compile({ $ref: ref });
    } catch (err) {
      v = err instanceof Error ? err : new Error(String(err));
    }
    compiled.set(ref, v);
    return v;
  };

  const rawOp = (op: ParsedOperation): any => openapi.paths?.[op.path]?.[op.method.toLowerCase()];

  const describeErrors = (errors: ErrorObject[] | null | undefined): Array<{ pointer: string; message: string }> => {
    const out: Array<{ pointer: string; message: string }> = [];
    const seenMsgs = new Set<string>();
    for (const e of errors ?? []) {
      const pointer = e.instancePath || '/';
      let message = e.message ?? e.keyword;
      if (e.keyword === 'additionalProperties' && e.params?.additionalProperty) {
        message = `unexpected property '${e.params.additionalProperty}'`;
      } else if (e.keyword === 'required' && e.params?.missingProperty) {
        message = `missing required property '${e.params.missingProperty}'`;
      } else if (e.keyword === 'enum' && Array.isArray(e.params?.allowedValues)) {
        message = `must be one of ${JSON.stringify(e.params.allowedValues)}`;
      } else if (e.keyword === 'type') {
        message = `must be ${e.params?.type}`;
      }
      const sig = `${pointer}|${message}`;
      if (seenMsgs.has(sig)) continue;
      seenMsgs.add(sig);
      out.push({ pointer, message });
    }
    return out;
  };

  // --- coverage state ---------------------------------------------------------
  const allOps = parsed.operations.map((op) => `${op.method} ${op.path}`);
  const hit = new Set<string>();
  const unmatched: string[] = [];
  let exchanges = 0;

  const check = (ex: Exchange): Violation[] => {
    exchanges++;
    const label = `${ex.method.toUpperCase()} ${normalizePath(ex.path)}`;
    const op = match(ex.method, ex.path);
    if (!op) {
      unmatched.push(label);
      return [{ kind: 'unknown-operation', exchange: label, message: `no operation in the spec matches ${label}` }];
    }
    const opKey = `${op.method} ${op.path}`;
    hit.add(opKey);
    const violations: Violation[] = [];
    const raw = rawOp(op);
    const methodLower = op.method.toLowerCase();

    // Request body.
    if (checkRequests && ex.requestBody !== undefined && raw?.requestBody) {
      const rb = parsed.deref(raw.requestBody);
      const media = pickJsonMedia(rb?.content);
      if (media && rb.content[media]?.schema) {
        const segs = raw.requestBody.$ref
          ? [...String(raw.requestBody.$ref).replace(/^#\//, '').split('/').map((s) => s.replace(/~1/g, '/').replace(/~0/g, '~')), 'content', media, 'schema']
          : ['paths', op.path, methodLower, 'requestBody', 'content', media, 'schema'];
        const v = validatorFor(segs);
        if (v instanceof Error) {
          violations.push({ kind: 'schema-error', operation: opKey, exchange: label, message: `request schema failed to compile: ${v.message}` });
        } else if (!v(ex.requestBody)) {
          for (const e of describeErrors(v.errors)) {
            violations.push({ kind: 'request-schema', operation: opKey, exchange: label, pointer: e.pointer, message: e.message });
          }
        }
      }
    }

    // Response body.
    const responses = raw?.responses as Record<string, any> | undefined;
    const sk = statusKey(responses, ex.status);
    if (!sk) {
      violations.push({
        kind: 'unknown-status',
        operation: opKey,
        exchange: label,
        message: `spec documents no response for status ${ex.status} (documented: ${Object.keys(responses ?? {}).join(', ') || 'none'})`,
      });
      return violations;
    }
    if (ex.responseBody === undefined) return violations;
    if (ex.contentType && !isJsonMedia(ex.contentType)) return violations;
    const respNode = responses![sk];
    const resp = parsed.deref(respNode);
    const media = pickJsonMedia(resp?.content, ex.contentType);
    if (!media || !resp.content[media]?.schema) return violations;
    const segs = respNode.$ref
      ? [...String(respNode.$ref).replace(/^#\//, '').split('/').map((s: string) => s.replace(/~1/g, '/').replace(/~0/g, '~')), 'content', media, 'schema']
      : ['paths', op.path, methodLower, 'responses', sk, 'content', media, 'schema'];
    const v = validatorFor(segs);
    if (v instanceof Error) {
      violations.push({ kind: 'schema-error', operation: opKey, exchange: label, message: `response schema failed to compile: ${v.message}` });
    } else if (!v(ex.responseBody)) {
      for (const e of describeErrors(v.errors)) {
        violations.push({ kind: 'response-schema', operation: opKey, exchange: label, pointer: e.pointer, message: e.message });
      }
    }
    return violations;
  };

  return {
    match,
    check,
    checkAll(list) {
      const out: Violation[] = [];
      for (const ex of list) out.push(...check(ex));
      return out;
    },
    coverage() {
      return {
        hit: allOps.filter((k) => hit.has(k)),
        missed: allOps.filter((k) => !hit.has(k)),
        unmatched: [...unmatched],
        exchanges,
      };
    },
    operations: () => [...allOps],
  };
}

/* ------------------------------------------------------------------ *
 * Exchange files (JSON Lines) — the hand-off format between a traffic
 * producer and this engine.
 * ------------------------------------------------------------------ */

/** Parse a JSON Lines document of Exchange records. Blank lines are skipped; bad lines throw with their line number. */
export function parseExchangesJsonl(text: string): Exchange[] {
  const out: Exchange[] = [];
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    let rec: any;
    try {
      rec = JSON.parse(line);
    } catch (err) {
      throw new Error(`exchanges line ${i + 1}: invalid JSON (${(err as Error).message})`);
    }
    if (typeof rec?.method !== 'string' || typeof rec?.path !== 'string' || typeof rec?.status !== 'number') {
      throw new Error(`exchanges line ${i + 1}: need string method, string path and numeric status`);
    }
    out.push(rec as Exchange);
  }
  return out;
}

/** Serialize exchanges as JSON Lines (one record per line, trailing newline). */
export function toExchangesJsonl(exchanges: Iterable<Exchange>): string {
  let s = '';
  for (const ex of exchanges) s += JSON.stringify(ex) + '\n';
  return s;
}

/** Group violations by operation (unmatched exchanges under '(unmatched)'). */
export function groupViolations(violations: Violation[]): Map<string, Violation[]> {
  const groups = new Map<string, Violation[]>();
  for (const v of violations) {
    const k = v.operation ?? '(unmatched)';
    const list = groups.get(k) ?? [];
    list.push(v);
    groups.set(k, list);
  }
  return groups;
}

/** Human-readable report: violations grouped by operation, then a coverage summary. */
export function formatConformanceReport(violations: Violation[], coverage: Coverage): string {
  const lines: string[] = [];
  if (violations.length === 0) {
    lines.push(`✓ ${coverage.exchanges} exchange(s), no violations`);
  } else {
    lines.push(`✗ ${violations.length} violation(s) across ${coverage.exchanges} exchange(s)`);
    for (const [op, list] of groupViolations(violations)) {
      lines.push('', `  ${op}`);
      const byExchange = new Map<string, Violation[]>();
      for (const v of list) byExchange.set(v.exchange, [...(byExchange.get(v.exchange) ?? []), v]);
      for (const [ex, vs] of byExchange) {
        if (ex !== op) lines.push(`    ${ex}`);
        for (const v of vs) {
          const where = v.pointer && v.pointer !== '/' ? ` ${v.pointer}` : '';
          lines.push(`      [${v.kind}]${where}: ${v.message}`);
        }
      }
    }
  }
  const total = coverage.hit.length + coverage.missed.length;
  lines.push('', `Coverage: ${coverage.hit.length}/${total} spec operation(s) exercised; ${coverage.unmatched.length} exchange(s) matched no operation.`);
  if (coverage.missed.length) {
    lines.push('  Not exercised:');
    for (const m of coverage.missed) lines.push(`    ${m}`);
  }
  return lines.join('\n');
}
