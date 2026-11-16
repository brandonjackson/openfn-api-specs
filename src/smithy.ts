/**
 * Convert a **Smithy JSON AST** service model into a full-coverage OpenAPI 3.0.3
 * document.
 *
 * Smithy is the machine spec AWS publishes for every service
 * (`github.com/aws/api-models-aws`, `models/<service>/service/<version>/*.json`):
 * AWS hosts no OpenAPI for S3, so the Smithy model *is* the vendor spec. Per
 * AGENTS.md such an adaptor is `origin: converted`, `upstreamFormat: smithy`: the
 * model is saved verbatim as `upstream.json` (the source of truth) and the served
 * `openapi.json` is derived from it by this converter.
 *
 * It handles services whose operations are bound to HTTP with the
 * `smithy.api#http` trait (the `restXml` and `restJson1` protocols). Every such
 * operation and every data shape in the model appears in the output:
 *
 *  - `smithy.api#http` (method, uri, code)  → a path + operation + success status
 *  - `httpLabel` members                    → path parameters (`{Key+}` → `{Key}`)
 *  - `httpQuery` / `httpQueryParams`        → query parameters
 *  - `httpHeader` / `httpPrefixHeaders`     → header parameters / response headers
 *  - `httpPayload`, or the unbound members  → `requestBody` / response `content`
 *    (`application/xml` for restXml, `application/json` for restJson1,
 *    `application/octet-stream` for blobs, `text/plain` for strings)
 *  - operation `errors`                     → responses keyed by `httpError`
 *  - structure / union / list / map / enum / intEnum / scalar shapes
 *                                           → `components.schemas`
 *  - `documentation`, `deprecated`, `required`, `default`, `length`, `range`,
 *    `pattern`, `timestampFormat`, `xmlName` / `xmlAttribute` / `xmlFlattened` /
 *    `xmlNamespace`                         → their OpenAPI spellings
 *
 * **Query-string literals.** A Smithy URI may carry literal query parameters
 * that select the operation (`/{Bucket}?acl`, `/{Bucket}?list-type=2`), so many
 * operations share one method + path, which OpenAPI `paths` cannot key. Following
 * the registry's convention (see `swagger.ts` on Azure's `x-ms-paths`, and how
 * `conform.ts` matches such keys), the literal query is carried in the path key
 * after a `#`: `/{Bucket}#acl`. The literal is also declared as a required query
 * parameter on the operation. AWS URIs additionally carry `x-id=<Operation>`, an
 * SDK-side hint that a plain HTTP client does not send; it is kept as an
 * optional query parameter but left out of the key. Operations that still share
 * a key are told apart by their required query parameters (`#uploadId`), then
 * their required headers (`#x-amz-copy-source`), and only as a last resort by
 * the `x-id` literal itself.
 *
 * **What is modelled loosely** (OpenAPI 3.0 has no exact form): a
 * `httpPrefixHeaders` map becomes one header named `<prefix>*`; a greedy label
 * loses its `+` (flagged `x-greedy`); a union becomes an object allowing one
 * property; an event stream is a schema under
 * `application/vnd.amazon.eventstream`, not a framed stream; XML element naming
 * is carried where Smithy states it (`xml.name`, `attribute`, `wrapped`) but
 * list-item and map-entry element names are not exhaustive; `smithy.api#examples`,
 * waiters, endpoint rule sets and checksum traits are not carried. Operations
 * with no `smithy.api#http` trait (the awsJson / awsQuery RPC protocols) are
 * skipped with a warning.
 */

/** A loosely-typed Smithy node — we only read the fields we convert. */
type Node = Record<string, any>;

/** A Smithy JSON AST document (the fields this converter reads). */
export interface SmithyDoc {
  smithy?: string;
  metadata?: Node;
  shapes?: Record<string, Node>;
}

export interface SmithyConvertResult {
  openapi: any;
  /** Human-readable notes about anything lossy or skipped, for logging. */
  warnings: string[];
}

const T = (name: string): string => `smithy.api#${name}`;

/** Member traits that bind a member to somewhere other than the body. */
const BINDING_TRAITS = ['httpLabel', 'httpQuery', 'httpQueryParams', 'httpHeader', 'httpPrefixHeaders', 'httpPayload', 'httpResponseCode'].map(T);

/** Shape types that are not data and never become a schema. */
const NON_DATA = new Set(['service', 'operation', 'resource']);

/**
 * Literal query parameters that are a client-side hint rather than part of the
 * request a plain HTTP client makes. AWS SDKs add `x-id=<Operation>` to tell
 * same-URI operations apart in logs and presigned URLs.
 */
const HINT_QUERY = new Set(['x-id']);

/**
 * Tag rules for services whose model declares no `resource` shapes, keyed by
 * `aws.api#service.sdkId`. The tag is what `endpoints.md` groups by, and S3's
 * model is a flat list of 100+ operations on two URL shapes, so without this
 * every operation would land in one `{Bucket}` group. First matching rule wins;
 * the last rule is the catch-all. Kept in code (not in the adaptor directory) so
 * a re-derivation from the committed upstream is deterministic.
 */
const SERVICE_TAG_RULES: Record<string, Array<[RegExp, string]>> = {
  S3: [
    [/MultipartUpload|^UploadPart|^ListParts$/, 'Multipart uploads'],
    [/BucketMetadata/, 'Metadata tables'],
    [/ObjectAnnotation/, 'Object annotations'],
    [/Tagging$/, 'Tagging'],
    [/Acl$|Policy|PublicAccessBlock|OwnershipControls|Abac$/, 'Access control'],
    [/LegalHold|Retention|ObjectLock/, 'Object Lock'],
    [/Encryption$/, 'Encryption'],
    [/Lifecycle|IntelligentTiering/, 'Lifecycle and tiering'],
    [/Replication$/, 'Replication'],
    [/BucketVersioning$/, 'Versioning'],
    [/Logging$|Notification/, 'Logging and notifications'],
    [/Analytics|Metrics|Inventory/, 'Analytics, metrics and inventory'],
    [/Cors$|Website$|Accelerate|RequestPayment$/, 'Bucket configuration'],
    [/Object/, 'Objects'],
    [/./, 'Buckets'],
  ],
};

/** Smithy prelude shapes (`smithy.api#String` …) → an inline OpenAPI schema. */
function preludeSchema(target: string): Node | undefined {
  switch (target.replace(/^smithy\.api#(Primitive)?/, '')) {
    case 'String': return { type: 'string' };
    case 'Blob': return { type: 'string', format: 'byte' };
    case 'Boolean': return { type: 'boolean' };
    case 'Byte':
    case 'Short': return { type: 'integer' };
    case 'Integer': return { type: 'integer', format: 'int32' };
    case 'Long': return { type: 'integer', format: 'int64' };
    case 'BigInteger': return { type: 'integer' };
    case 'Float': return { type: 'number', format: 'float' };
    case 'Double': return { type: 'number', format: 'double' };
    case 'BigDecimal': return { type: 'number' };
    case 'Timestamp': return { type: 'string', format: 'date-time' };
    case 'Document': return {};
    case 'Unit': return { type: 'object' };
    default: return undefined;
  }
}

/** Strip HTML tags and collapse whitespace (Smithy documentation is HTML). */
function plain(text: unknown): string {
  return typeof text === 'string' ? text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
}

/**
 * First sentence of a documentation string, capped, for `summary`. AWS opens
 * many operations with a `<note>`/`<important>` callout ("not supported for
 * directory buckets", an end-of-support notice); the sentence that says what
 * the operation does is the first one after those.
 */
function summaryOf(text: unknown): string {
  const body = typeof text === 'string' ? text.replace(/^(\s*<(note|important)>[\s\S]*?<\/\2>)+/, '') : text;
  const t = plain(body) || plain(text);
  const s = (t.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? t).trim();
  return s.length > 140 ? s.slice(0, 139).trimEnd() + '…' : s;
}

/** A timestamp in the given Smithy `timestampFormat`. */
function timestampSchema(format: string): Node {
  if (format === 'epoch-seconds') return { type: 'number' };
  if (format === 'http-date') return { type: 'string', 'x-timestamp-format': 'http-date' };
  return { type: 'string', format: 'date-time' };
}

/** A member's `smithy.api#<name>` trait value. */
const trait = (node: Node | undefined, name: string): any => node?.traits?.[T(name)];
const has = (node: Node | undefined, name: string): boolean => trait(node, name) !== undefined;

/**
 * Convert a Smithy JSON AST to a full-coverage OpenAPI 3.0.3 spec.
 * `adaptorName` is stamped as `info.x-openfn-adaptor` so the file self-identifies.
 */
export function smithyToOpenApi(doc: SmithyDoc, adaptorName: string): SmithyConvertResult {
  const warnings: string[] = [];
  const shapes = doc.shapes ?? {};

  const services = Object.entries(shapes).filter(([, s]) => s?.type === 'service');
  if (!services.length) throw new Error('Smithy model declares no service shape.');
  if (services.length > 1) warnings.push(`model declares ${services.length} services — converted ${services[0][0]} only`);
  const [serviceId, service] = services[0];

  const protocol = Object.keys(service.traits ?? {}).find((t) => /#(restXml|restJson1)$/.test(t));
  const isXml = !!protocol && protocol.endsWith('#restXml');
  if (!protocol) warnings.push('service declares neither restXml nor restJson1 — bodies are described as application/json');
  const bodyMedia = isXml ? 'application/xml' : 'application/json';
  const bodyTimestamp = isXml ? 'date-time' : 'epoch-seconds';

  // --- naming -----------------------------------------------------------------
  // A shape id is `namespace#Name`; the schema is `Name`, qualified with the
  // namespace only when two namespaces define the same name.
  const bare = (id: string): string => id.slice(id.indexOf('#') + 1);
  const seenNames = new Map<string, number>();
  for (const [id, s] of Object.entries(shapes)) if (!NON_DATA.has(s?.type)) seenNames.set(bare(id), (seenNames.get(bare(id)) ?? 0) + 1);
  const nameOf = (id: string): string =>
    (seenNames.get(bare(id)) ?? 0) > 1 ? `${id.slice(0, id.indexOf('#')).split('.').pop()}_${bare(id)}` : bare(id);

  // --- operations in the service closure --------------------------------------
  const opResource = new Map<string, string>();
  const operationIds: string[] = [];
  const addOp = (ref: any, resource?: string) => {
    const id = ref?.target;
    if (typeof id !== 'string' || operationIds.includes(id)) return;
    operationIds.push(id);
    if (resource) opResource.set(id, resource);
  };
  const walkResource = (ref: any, guard: Set<string>) => {
    const id = ref?.target;
    const r = shapes[id];
    if (!r || guard.has(id)) return;
    guard.add(id);
    for (const k of ['create', 'put', 'read', 'update', 'delete', 'list']) addOp(r[k], bare(id));
    for (const k of ['operations', 'collectionOperations']) for (const o of r[k] ?? []) addOp(o, bare(id));
    for (const sub of r.resources ?? []) walkResource(sub, guard);
  };
  for (const o of service.operations ?? []) addOp(o);
  for (const r of service.resources ?? []) walkResource(r, new Set());

  // Structures that are an operation's input or output are dissolved into
  // parameters, headers and a body; they are only a schema of their own when
  // something else references them as data.
  const ioShapes = new Set<string>();
  for (const id of operationIds) {
    for (const k of ['input', 'output']) {
      const t = shapes[id]?.[k]?.target;
      if (typeof t === 'string' && shapes[t]) ioShapes.add(t);
    }
  }
  const referenced = new Set<string>();
  for (const s of Object.values(shapes)) {
    for (const m of [...Object.values<Node>(s?.members ?? {}), s?.member, s?.key, s?.value]) {
      if (typeof m?.target === 'string') referenced.add(m.target);
    }
    for (const e of s?.errors ?? []) if (typeof e?.target === 'string') referenced.add(e.target);
  }

  // --- schemas ----------------------------------------------------------------
  const schemas: Record<string, Node> = {};
  const ref = (target: string): Node => {
    const prelude = preludeSchema(target);
    if (prelude && !shapes[target]) return prelude;
    if (!shapes[target]) {
      warnings.push(`reference to undeclared shape ${target} — described as any`);
      return { description: `Shape ${target} is not declared in the model.` };
    }
    return { $ref: `#/components/schemas/${nameOf(target)}` };
  };

  /** XML facts Smithy states about a member, as an OpenAPI `xml` object. */
  const memberXml = (member: Node): Node | undefined => {
    if (!isXml) return undefined;
    const xml: Node = {};
    if (typeof trait(member, 'xmlName') === 'string') xml.name = trait(member, 'xmlName');
    if (has(member, 'xmlAttribute')) xml.attribute = true;
    const ns = trait(member, 'xmlNamespace');
    if (ns?.uri) {
      xml.namespace = ns.uri;
      if (ns.prefix) xml.prefix = ns.prefix;
    }
    const target = shapes[member.target];
    if ((target?.type === 'list' || target?.type === 'set') && !has(member, 'xmlFlattened')) xml.wrapped = true;
    return Object.keys(xml).length ? xml : undefined;
  };

  /** The schema for a structure/union member: its target plus the member's own traits. */
  const memberSchema = (member: Node): Node => {
    const base = ref(member.target);
    const extra: Node = {};
    const docs = trait(member, 'documentation');
    if (typeof docs === 'string' && docs) extra.description = docs;
    if (has(member, 'deprecated')) extra.deprecated = true;
    const def = trait(member, 'default');
    const targetType = shapes[member.target]?.type;
    if (def !== undefined && def !== null && targetType !== 'blob') extra.default = def;
    const tsFormat = trait(member, 'timestampFormat');
    const xml = memberXml(member);
    if (xml) extra.xml = xml;
    if (typeof tsFormat === 'string') return { ...timestampSchema(tsFormat), ...extra };
    if (!Object.keys(extra).length) return base;
    // OpenAPI 3.0 ignores siblings of `$ref`, so a described reference is an allOf.
    return base.$ref ? { allOf: [base], ...extra } : { ...base, ...extra };
  };

  /** An object schema over a chosen subset of a structure's members. */
  const objectSchema = (shape: Node, memberNames: string[]): Node => {
    const out: Node = { type: 'object' };
    const required = memberNames.filter((m) => has(shape.members[m], 'required'));
    if (required.length) out.required = required;
    if (memberNames.length) out.properties = Object.fromEntries(memberNames.map((m) => [m, memberSchema(shape.members[m])]));
    return out;
  };

  const withCommon = (shape: Node, schema: Node): Node => {
    const docs = trait(shape, 'documentation');
    if (typeof docs === 'string' && docs) schema.description = docs;
    if (has(shape, 'deprecated')) schema.deprecated = true;
    if (isXml && typeof trait(shape, 'xmlName') === 'string') schema.xml = { ...(schema.xml ?? {}), name: trait(shape, 'xmlName') };
    return schema;
  };

  const shapeSchema = (id: string, shape: Node): Node | undefined => {
    switch (shape.type) {
      case 'structure':
        return withCommon(shape, objectSchema(shape, Object.keys(shape.members ?? {})));
      case 'union': {
        const s = objectSchema(shape, Object.keys(shape.members ?? {}));
        s.minProperties = 1;
        s.maxProperties = 1;
        if (has(shape, 'streaming')) s['x-event-stream'] = true;
        return withCommon(shape, s);
      }
      case 'list':
      case 'set': {
        const items = shape.member ? memberSchema(shape.member) : {};
        const s: Node = { type: 'array', items };
        if (shape.type === 'set' || has(shape, 'uniqueItems')) s.uniqueItems = true;
        const len = trait(shape, 'length');
        if (typeof len?.min === 'number') s.minItems = len.min;
        if (typeof len?.max === 'number') s.maxItems = len.max;
        return withCommon(shape, s);
      }
      case 'map':
        return withCommon(shape, { type: 'object', additionalProperties: shape.value ? memberSchema(shape.value) : {} });
      case 'enum':
      case 'intEnum': {
        const values = Object.entries<Node>(shape.members ?? {}).map(([name, m]) => trait(m, 'enumValue') ?? name);
        return withCommon(shape, { type: shape.type === 'enum' ? 'string' : 'integer', enum: values });
      }
      case 'string': {
        const s: Node = { type: 'string' };
        // Smithy 1.0 spelling of an enum: a trait on a string shape.
        const legacy = trait(shape, 'enum');
        if (Array.isArray(legacy)) s.enum = legacy.map((e: any) => e?.value).filter((v: any) => v !== undefined);
        const len = trait(shape, 'length');
        if (typeof len?.min === 'number') s.minLength = len.min;
        if (typeof len?.max === 'number') s.maxLength = len.max;
        if (typeof trait(shape, 'pattern') === 'string') s.pattern = trait(shape, 'pattern');
        if (has(shape, 'sensitive')) s['x-sensitive'] = true;
        return withCommon(shape, s);
      }
      case 'blob':
        // A streaming blob is only ever a raw payload; any other blob is base64 inside a body.
        return withCommon(shape, { type: 'string', format: has(shape, 'streaming') ? 'binary' : 'byte' });
      case 'timestamp':
        return withCommon(shape, timestampSchema(trait(shape, 'timestampFormat') ?? bodyTimestamp));
      case 'boolean':
      case 'byte':
      case 'short':
      case 'integer':
      case 'long':
      case 'bigInteger':
      case 'float':
      case 'double':
      case 'bigDecimal':
      case 'document': {
        const s = preludeSchema(T(shape.type[0].toUpperCase() + shape.type.slice(1))) ?? {};
        const range = trait(shape, 'range');
        if (typeof range?.min === 'number') s.minimum = range.min;
        if (typeof range?.max === 'number') s.maximum = range.max;
        return withCommon(shape, s);
      }
      default:
        warnings.push(`shape ${id} has unsupported type "${shape.type}" — described as any`);
        return withCommon(shape, {});
    }
  };

  for (const [id, shape] of Object.entries(shapes)) {
    if (!shape || NON_DATA.has(shape.type)) continue;
    if (ioShapes.has(id) && !referenced.has(id)) continue; // dissolved into its operation
    const s = shapeSchema(id, shape);
    if (s) schemas[nameOf(id)] = s;
  }

  // --- security ---------------------------------------------------------------
  const securitySchemes: Record<string, Node> = {};
  const st = service.traits ?? {};
  if (st['aws.auth#sigv4']) {
    securitySchemes.sigv4 = {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      'x-amazon-apigateway-authtype': 'awsSigv4',
      description: `AWS Signature Version 4, signing name "${st['aws.auth#sigv4'].name}".`,
    };
  }
  if (st[T('httpBearerAuth')]) securitySchemes.httpBearerAuth = { type: 'http', scheme: 'bearer' };
  if (st[T('httpBasicAuth')]) securitySchemes.httpBasicAuth = { type: 'http', scheme: 'basic' };
  if (st[T('httpApiKeyAuth')]) {
    const k = st[T('httpApiKeyAuth')];
    securitySchemes.httpApiKeyAuth = { type: 'apiKey', name: k.name, in: k.in };
  }
  const schemeName = (authTrait: string): string => authTrait.slice(authTrait.indexOf('#') + 1);

  // --- operations -------------------------------------------------------------
  interface Pending {
    id: string;
    name: string;
    method: string;
    path: string;
    /** Literal query pairs from the URI, hints (`x-id`) excluded. */
    literals: Array<{ key: string; value?: string }>;
    hint?: { key: string; value?: string };
    requiredQuery: string[];
    requiredHeaders: string[];
    operation: Node;
  }
  const pending: Pending[] = [];
  const tagRules = SERVICE_TAG_RULES[st['aws.api#service']?.sdkId ?? ''];
  const tagsUsed: string[] = [];

  /** Body members of an input/output structure: those with no HTTP binding. */
  const bodyMembers = (shape: Node): string[] =>
    Object.entries<Node>(shape.members ?? {})
      .filter(([, m]) => !BINDING_TRAITS.some((b) => m?.traits?.[b] !== undefined))
      .map(([name]) => name);

  /** A parameter/header schema for a bound member (headers default timestamps to http-date). */
  const boundSchema = (member: Node, where: 'header' | 'query' | 'path'): Node => {
    const target = shapes[member.target];
    if (target?.type === 'timestamp' || /#(Timestamp)$/.test(member.target)) {
      const format = trait(member, 'timestampFormat') ?? trait(target, 'timestampFormat') ?? (where === 'header' ? 'http-date' : 'date-time');
      return timestampSchema(format);
    }
    return ref(member.target);
  };

  /**
   * The `content` for a payload member or for the unbound members of an
   * input/output structure. Registers a body schema when one has to be minted.
   */
  const bodyContent = (shapeId: string, shape: Node): { content?: Node; required: boolean } => {
    const payload = Object.entries<Node>(shape.members ?? {}).find(([, m]) => has(m, 'httpPayload'));
    if (payload) {
      const [, member] = payload;
      const target = shapes[member.target];
      const type = target?.type ?? (preludeSchema(member.target)?.format === 'byte' ? 'blob' : 'string');
      const required = has(member, 'required');
      const explicit = trait(target, 'mediaType');
      if (type === 'blob') {
        return { content: { [explicit ?? 'application/octet-stream']: { schema: { type: 'string', format: 'binary' } } }, required };
      }
      if (type === 'string' || type === 'enum') return { content: { [explicit ?? 'text/plain']: { schema: ref(member.target) } }, required };
      if (type === 'union' && has(target, 'streaming')) {
        return { content: { 'application/vnd.amazon.eventstream': { schema: ref(member.target) } }, required };
      }
      // A structure/union/document payload: the member may rename the root element.
      const base = ref(member.target);
      const rootName = trait(member, 'xmlName');
      const schema = isXml && typeof rootName === 'string' && rootName !== (trait(target, 'xmlName') ?? bare(member.target)) && base.$ref
        ? { allOf: [base], xml: { name: rootName } }
        : base;
      return { content: { [bodyMedia]: { schema } }, required };
    }
    const members = bodyMembers(shape);
    if (!members.length) return { required: false };
    const all = members.length === Object.keys(shape.members ?? {}).length;
    // Referenced elsewhere as data, so the full shape already has the plain name.
    let name = nameOf(shapeId);
    if (referenced.has(shapeId) && !all) name = `${name}Body`;
    if (!(referenced.has(shapeId) && all)) {
      const s = withCommon(shape, objectSchema(shape, members));
      const ns = st[T('xmlNamespace')]?.uri;
      if (isXml) s.xml = { name: bare(shapeId), ...(s.xml ?? {}), ...(ns ? { namespace: ns } : {}) };
      schemas[name] = s;
    }
    const required = members.some((m) => has(shape.members[m], 'required'));
    return { content: { [bodyMedia]: { schema: { $ref: `#/components/schemas/${name}` } } }, required };
  };

  for (const id of operationIds) {
    const op = shapes[id];
    if (!op || op.type !== 'operation') {
      warnings.push(`service lists ${id}, which is not an operation shape — skipped`);
      continue;
    }
    const http = trait(op, 'http');
    if (!http?.method || typeof http.uri !== 'string') {
      warnings.push(`operation ${bare(id)} has no smithy.api#http binding — skipped`);
      continue;
    }

    const [rawPath, rawQuery = ''] = http.uri.split('?');
    const greedy = new Set<string>();
    const path = rawPath.replace(/\{([^}+]+)\+\}/g, (_: string, label: string) => {
      greedy.add(label);
      return `{${label}}`;
    });
    const pairs = rawQuery
      .split('&')
      .filter(Boolean)
      .map((p: string) => {
        const eq = p.indexOf('=');
        return eq < 0 ? { key: p } : { key: p.slice(0, eq), value: p.slice(eq + 1) };
      });
    const literals = pairs.filter((p: { key: string }) => !HINT_QUERY.has(p.key));
    const hint = pairs.find((p: { key: string }) => HINT_QUERY.has(p.key));

    const input: Node | undefined = shapes[op.input?.target];
    const output: Node | undefined = shapes[op.output?.target];

    // Parameters.
    const parameters: Node[] = [];
    for (const lit of literals) {
      parameters.push({
        name: lit.key,
        in: 'query',
        required: true,
        ...(lit.value === undefined ? { allowEmptyValue: true } : {}),
        description: lit.value === undefined ? 'Selects this operation; sent with no value.' : 'Selects this operation; always this value.',
        schema: { type: 'string', enum: [lit.value ?? ''] },
      });
    }
    if (hint) {
      parameters.push({
        name: hint.key,
        in: 'query',
        required: false,
        description: 'Operation hint that SDKs add to the request URI. Optional for a plain HTTP client.',
        schema: { type: 'string', enum: [hint.value ?? ''] },
      });
    }
    const requiredQuery: string[] = [];
    const requiredHeaders: string[] = [];
    for (const [name, member] of Object.entries<Node>(input?.members ?? {})) {
      const common: Node = {};
      const docs = trait(member, 'documentation');
      if (typeof docs === 'string' && docs) common.description = docs;
      const required = has(member, 'required');
      if (has(member, 'deprecated')) common.deprecated = true;
      if (has(member, 'httpLabel')) {
        parameters.push({ name, in: 'path', ...common, required: true, ...(greedy.has(name) ? { 'x-greedy': true } : {}), schema: boundSchema(member, 'path') });
      } else if (has(member, 'httpQuery')) {
        const qn = trait(member, 'httpQuery');
        if (required) requiredQuery.push(qn);
        parameters.push({ name: qn, in: 'query', ...common, required, schema: boundSchema(member, 'query') });
      } else if (has(member, 'httpQueryParams')) {
        parameters.push({ name, in: 'query', ...common, required, style: 'form', explode: true, schema: ref(member.target) });
      } else if (has(member, 'httpHeader')) {
        const hn = trait(member, 'httpHeader');
        if (required) requiredHeaders.push(hn);
        parameters.push({ name: hn, in: 'header', ...common, required, schema: boundSchema(member, 'header') });
      } else if (has(member, 'httpPrefixHeaders')) {
        const prefix = trait(member, 'httpPrefixHeaders');
        parameters.push({
          name: `${prefix}*`,
          in: 'header',
          ...common,
          required: false,
          'x-prefix-headers': prefix,
          schema: { type: 'string' },
        });
      }
    }

    const operation: Node = { operationId: bare(id) };
    const docs = trait(op, 'documentation');
    const summary = summaryOf(docs);
    if (summary) operation.summary = summary;
    if (typeof docs === 'string' && docs) operation.description = docs;
    if (has(op, 'deprecated')) operation.deprecated = true;
    const tag = opResource.get(id) ?? tagRules?.find(([re]) => re.test(bare(id)))?.[1];
    if (tag) {
      operation.tags = [tag];
      if (!tagsUsed.includes(tag)) tagsUsed.push(tag);
    }
    if (parameters.length) operation.parameters = parameters;

    if (input) {
      const body = bodyContent(op.input.target, input);
      if (body.content) operation.requestBody = { required: body.required, content: body.content };
    }

    // Responses: the success status, then one per error status.
    const responses: Record<string, Node> = {};
    const success: Node = { description: 'Success' };
    if (output) {
      const headers: Record<string, Node> = {};
      for (const [, member] of Object.entries<Node>(output.members ?? {})) {
        const d = trait(member, 'documentation');
        const described = typeof d === 'string' && d ? { description: d } : {};
        if (has(member, 'httpHeader')) headers[trait(member, 'httpHeader')] = { ...described, schema: boundSchema(member, 'header') };
        else if (has(member, 'httpPrefixHeaders')) {
          const prefix = trait(member, 'httpPrefixHeaders');
          headers[`${prefix}*`] = { ...described, 'x-prefix-headers': prefix, schema: { type: 'string' } };
        }
      }
      if (Object.keys(headers).length) success.headers = headers;
      const body = bodyContent(op.output.target, output);
      if (body.content) success.content = body.content;
    }
    responses[String(http.code ?? 200)] = success;

    const byStatus = new Map<string, string[]>();
    for (const e of op.errors ?? []) {
      const err = shapes[e?.target];
      if (!err) continue;
      const status = String(trait(err, 'httpError') ?? (trait(err, 'error') === 'server' ? 500 : 400));
      byStatus.set(status, [...(byStatus.get(status) ?? []), e.target]);
    }
    for (const [status, ids] of [...byStatus].sort(([a], [b]) => (a < b ? -1 : 1))) {
      const refs = ids.map((e) => ref(e));
      responses[status] = {
        description: ids.map((e) => bare(e)).join(' / '),
        content: { [bodyMedia]: { schema: refs.length === 1 ? refs[0] : { oneOf: refs } } },
      };
    }
    operation.responses = responses;

    // Operation-level auth overrides.
    const auth = trait(op, 'auth');
    if (Array.isArray(auth)) operation.security = auth.map((a: string) => ({ [schemeName(a)]: [] })).filter((s) => securitySchemes[Object.keys(s)[0]]);
    if (has(op, 'optionalAuth')) operation.security = [...(operation.security ?? Object.keys(securitySchemes).map((n) => ({ [n]: [] }))), {}];

    const paginated = trait(op, 'paginated');
    if (paginated) operation['x-paginated'] = paginated;
    const endpoint = trait(op, 'endpoint');
    if (endpoint?.hostPrefix) operation['x-host-prefix'] = endpoint.hostPrefix;

    pending.push({ id, name: bare(id), method: String(http.method).toLowerCase(), path, literals, hint, requiredQuery, requiredHeaders, operation });
  }

  // --- path keys --------------------------------------------------------------
  // Start from the path plus its literal query; operations that still collide
  // add their required query names, then required headers, then the hint.
  const fragments = new Map<Pending, string[]>(pending.map((p) => [p, p.literals.map((l) => (l.value === undefined ? l.key : `${l.key}=${l.value}`))]));
  const keyOf = (p: Pending): string => {
    const f = fragments.get(p)!;
    return `${p.method} ${p.path}${f.length ? `#${f.join('&')}` : ''}`;
  };
  const collisions = (): Pending[][] => {
    const groups = new Map<string, Pending[]>();
    for (const p of pending) groups.set(keyOf(p), [...(groups.get(keyOf(p)) ?? []), p]);
    return [...groups.values()].filter((g) => g.length > 1);
  };
  const steps: Array<(p: Pending, group: Pending[]) => string[]> = [
    (p) => p.requiredQuery,
    // Only headers that tell the group apart: ones every member requires say nothing.
    (p, group) => p.requiredHeaders.filter((h) => !group.every((g) => g.requiredHeaders.includes(h))),
    (p) => [p.hint ? `${p.hint.key}=${p.hint.value}` : `x-id=${p.name}`],
  ];
  for (const step of steps) {
    for (const group of collisions()) {
      for (const p of group) {
        const f = fragments.get(p)!;
        for (const extra of step(p, group)) if (!f.includes(extra)) f.push(extra);
      }
    }
  }
  for (const group of collisions()) warnings.push(`operations still share a path key: ${group.map((p) => p.name).join(', ')} — kept the first`);

  // Within one path, the key with the most requirements goes first: the
  // conformer takes the first template a request satisfies, and a request for
  // `?analytics&id=1` satisfies both `#analytics` and `#analytics&id`.
  const firstSeen = new Map<string, number>();
  pending.forEach((p, i) => firstSeen.has(p.path) || firstSeen.set(p.path, i));
  const ordered = pending
    .map((p, i) => ({ p, i }))
    .sort((a, b) => firstSeen.get(a.p.path)! - firstSeen.get(b.p.path)! || fragments.get(b.p)!.length - fragments.get(a.p)!.length || a.i - b.i)
    .map(({ p }) => p);

  const paths: Record<string, Node> = {};
  for (const p of ordered) {
    const key = keyOf(p).slice(p.method.length + 1);
    paths[key] ??= {};
    if (paths[key][p.method]) continue;
    paths[key][p.method] = p.operation;
  }

  // --- document ---------------------------------------------------------------
  const info: Node = {
    title: trait(service, 'title') ?? bare(serviceId),
    version: service.version ?? '',
  };
  if (typeof trait(service, 'documentation') === 'string') info.description = trait(service, 'documentation');
  info['x-openfn-adaptor'] = adaptorName;
  info['x-smithy-service'] = serviceId;
  if (protocol) info['x-smithy-protocol'] = protocol;

  const openapi: Node = { openapi: '3.0.3', info };
  const prefix = st['aws.api#service']?.endpointPrefix;
  if (prefix) {
    openapi.servers = [
      {
        url: `https://${prefix}.{region}.amazonaws.com`,
        description: 'Regional endpoint. The service model resolves the real host with endpoint rules that OpenAPI cannot express.',
        variables: { region: { default: 'us-east-1', description: 'AWS region' } },
      },
    ];
  } else {
    warnings.push('service declares no endpoint — no servers[] written');
  }
  if (tagsUsed.length) openapi.tags = tagsUsed.map((name) => ({ name }));
  openapi.paths = paths;
  openapi.components = { schemas, ...(Object.keys(securitySchemes).length ? { securitySchemes } : {}) };
  if (Object.keys(securitySchemes).length) openapi.security = Object.keys(securitySchemes).map((n) => ({ [n]: [] }));

  return { openapi, warnings };
}
