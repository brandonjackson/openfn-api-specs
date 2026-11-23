/**
 * Convert a **Smithy 2.0 JSON AST** model (the machine spec AWS publishes for
 * every service in github.com/aws/api-models-aws, and the source its SDKs are
 * generated from) into a full-coverage OpenAPI 3.0.3 document.
 *
 * AWS publishes no OpenAPI for most services. The Smithy model is the vendor's
 * own, current, complete description of the API, so per AGENTS.md we save it
 * verbatim as `upstream.json` (origin `converted`, upstreamFormat `smithy-2.0`)
 * and derive `openapi.json` from it here. Every operation bound to the service
 * becomes an OpenAPI operation; every shape an operation reaches becomes a
 * component schema. No subsetting.
 *
 * Supported protocols are the HTTP-binding ones (`aws.protocols#restXml`,
 * `aws.protocols#restJson1`): each operation carries `smithy.api#http`
 * `{method, uri, code}` and its input/output members carry binding traits.
 *
 *  - `uri` `/{Bucket}/{Key+}?uploads` → path `/{Bucket}/{Key}` plus the literal
 *    query `uploads`. Greedy labels lose their `+` (OpenAPI has no greedy
 *    template; the parameter says so in `x-smithy-greedy`).
 *  - Several operations share one method+path and differ only in their query
 *    (the S3 pattern). OpenAPI cannot key two operations on one path, so the
 *    literal query becomes a `#a&b=c` suffix on the path key — the same
 *    discriminator form the conformance engine already reads for Azure's
 *    `x-ms-paths` and DHIS2's variants. Smithy's `x-id=<Operation>` literal is
 *    only an SDK-side disambiguator the server ignores, so it is dropped unless
 *    nothing else tells two operations apart; see `discriminate()`.
 *  - `httpLabel` → path parameter; `httpQuery` → query parameter; `httpHeader`
 *    → header parameter (request) or response header (output).
 *    `httpPrefixHeaders` (e.g. `x-amz-meta-*`) has no OpenAPI form and is
 *    recorded in the operation's `x-smithy-prefix-headers`.
 *  - `httpPayload` → the body is that member (structure → XML/JSON document;
 *    blob → `application/octet-stream`; string → `text/plain`). Otherwise the
 *    unbound members form the body document.
 *  - `errors[]` → responses keyed by each error's `httpError` code.
 *  - Shapes → schemas: structure → object, list → array, map → object with
 *    `additionalProperties`, union → object with exactly one property, enum /
 *    intEnum → `enum`, timestamp → `date-time` string, blob → binary/byte
 *    string. `xmlName` / `xmlFlattened` / `xmlAttribute` / `xmlNamespace` become
 *    OpenAPI `xml` objects; `documentation` becomes `description`.
 *
 * Endpoint rule sets, waiters, examples and checksum/auth customisations are
 * client concerns with no OpenAPI equivalent and are not carried over.
 */

type Shape = Record<string, any>;
type Traits = Record<string, any>;

export interface SmithyModel {
  smithy: string;
  metadata?: Record<string, any>;
  shapes: Record<string, Shape>;
}

export interface SmithyConvertResult {
  openapi: any;
  warnings: string[];
}

const PRELUDE: Record<string, any> = {
  'smithy.api#String': { type: 'string' },
  'smithy.api#Boolean': { type: 'boolean' },
  'smithy.api#PrimitiveBoolean': { type: 'boolean' },
  'smithy.api#Integer': { type: 'integer', format: 'int32' },
  'smithy.api#PrimitiveInteger': { type: 'integer', format: 'int32' },
  'smithy.api#Long': { type: 'integer', format: 'int64' },
  'smithy.api#PrimitiveLong': { type: 'integer', format: 'int64' },
  'smithy.api#Short': { type: 'integer' },
  'smithy.api#Byte': { type: 'integer' },
  'smithy.api#Float': { type: 'number', format: 'float' },
  'smithy.api#Double': { type: 'number', format: 'double' },
  'smithy.api#BigInteger': { type: 'integer' },
  'smithy.api#BigDecimal': { type: 'number' },
  'smithy.api#Timestamp': { type: 'string', format: 'date-time' },
  'smithy.api#Blob': { type: 'string', format: 'byte' },
  'smithy.api#Document': {},
  'smithy.api#Unit': { type: 'object' },
};

const BINDING_TRAITS = [
  'smithy.api#httpLabel',
  'smithy.api#httpQuery',
  'smithy.api#httpQueryParams',
  'smithy.api#httpHeader',
  'smithy.api#httpPrefixHeaders',
  'smithy.api#httpPayload',
  'smithy.api#httpResponseCode',
];

const localName = (id: string): string => id.slice(id.indexOf('#') + 1);

/** Smithy `documentation` is HTML; keep it as the description, trimmed. */
const doc = (traits: Traits | undefined): string | undefined => {
  const d = traits?.['smithy.api#documentation'];
  return typeof d === 'string' && d.trim() ? d.trim() : undefined;
};

const isBound = (traits: Traits | undefined): boolean => BINDING_TRAITS.some((t) => traits && t in traits);

interface Literal {
  key: string;
  value?: string;
}

interface Bound {
  id: string;
  name: string;
  method: string;
  path: string;
  literals: Literal[];
  shape: Shape;
}

function parseUri(uri: string): { path: string; literals: Literal[] } {
  const q = uri.indexOf('?');
  const rawPath = q < 0 ? uri : uri.slice(0, q);
  const literals = (q < 0 ? '' : uri.slice(q + 1))
    .split('&')
    .filter(Boolean)
    .map((pair) => {
      const eq = pair.indexOf('=');
      return eq < 0 ? { key: pair } : { key: pair.slice(0, eq), value: pair.slice(eq + 1) };
    });
  return { path: rawPath.replace(/\{([^}]+?)\+\}/g, '{$1}'), literals };
}

const fmt = (lits: Literal[]): string => lits.map((l) => (l.value === undefined ? l.key : `${l.key}=${l.value}`)).join('&');

export function smithyToOpenApi(model: SmithyModel, adaptorName: string): SmithyConvertResult {
  const warnings: string[] = [];
  const shapes = model.shapes ?? {};
  const services = Object.entries(shapes).filter(([, s]) => s.type === 'service');
  if (services.length !== 1) throw new Error(`Smithy model must define exactly one service (found ${services.length}).`);
  const [serviceId, service] = services[0];
  const st: Traits = service.traits ?? {};
  const protocol = ['aws.protocols#restXml', 'aws.protocols#restJson1'].find((p) => p in st);
  if (!protocol) {
    throw new Error(`Unsupported Smithy protocol on ${serviceId}: only restXml / restJson1 (HTTP-binding) services convert to OpenAPI.`);
  }
  const xml = protocol === 'aws.protocols#restXml';
  const docMedia = xml ? 'application/xml' : 'application/json';
  const xmlNs = st['smithy.api#xmlNamespace']?.uri as string | undefined;

  // ---- schemas ------------------------------------------------------------
  const schemas: Record<string, any> = {};
  const target = (id: string): Shape | undefined => shapes[id];

  /** Schema for a shape id: a $ref for named aggregate/enum shapes, inline for simple ones. */
  function schemaFor(id: string): any {
    if (id in PRELUDE) return { ...PRELUDE[id] };
    const s = target(id);
    if (!s) {
      warnings.push(`unresolved shape ${id}`);
      return {};
    }
    if (['structure', 'union', 'list', 'map', 'enum', 'intEnum'].includes(s.type)) {
      const name = localName(id);
      if (!(name in schemas)) {
        schemas[name] = {}; // reserve first: shapes are recursive
        schemas[name] = buildShape(s);
      }
      return { $ref: `#/components/schemas/${name}` };
    }
    return simpleSchema(s);
  }

  function simpleSchema(s: Shape): any {
    const t: Traits = s.traits ?? {};
    let out: any;
    switch (s.type) {
      case 'string':
        out = { type: 'string' };
        if (t['smithy.api#pattern']) out.pattern = t['smithy.api#pattern'];
        if (t['smithy.api#length']?.min !== undefined) out.minLength = t['smithy.api#length'].min;
        if (t['smithy.api#length']?.max !== undefined) out.maxLength = t['smithy.api#length'].max;
        break;
      case 'boolean':
        out = { type: 'boolean' };
        break;
      case 'byte':
      case 'short':
      case 'integer':
        out = { type: 'integer', format: 'int32' };
        break;
      case 'long':
        out = { type: 'integer', format: 'int64' };
        break;
      case 'bigInteger':
        out = { type: 'integer' };
        break;
      case 'float':
        out = { type: 'number', format: 'float' };
        break;
      case 'double':
        out = { type: 'number', format: 'double' };
        break;
      case 'bigDecimal':
        out = { type: 'number' };
        break;
      case 'timestamp':
        // The wire format depends on where the value travels (XML/JSON body:
        // date-time; headers: http-date) — OpenAPI has one `format`, so the
        // body form is recorded and the trait, when set, is kept alongside.
        out = { type: 'string', format: 'date-time' };
        if (t['smithy.api#timestampFormat']) out['x-smithy-timestamp-format'] = t['smithy.api#timestampFormat'];
        break;
      case 'blob':
        out = t['smithy.api#streaming'] !== undefined ? { type: 'string', format: 'binary' } : { type: 'string', format: 'byte' };
        break;
      case 'document':
        out = {};
        break;
      default:
        warnings.push(`unhandled simple shape type ${s.type}`);
        out = {};
    }
    if (t['smithy.api#range']) {
      if (t['smithy.api#range'].min !== undefined) out.minimum = t['smithy.api#range'].min;
      if (t['smithy.api#range'].max !== undefined) out.maximum = t['smithy.api#range'].max;
    }
    const d = doc(t);
    if (d) out.description = d;
    return out;
  }

  /** A member's schema: the target's, with the member's own docs/xml naming layered on. */
  function memberSchema(member: Shape): any {
    const mt: Traits = member.traits ?? {};
    let sch = schemaFor(member.target);
    const extra: any = {};
    const d = doc(mt);
    if (d) extra.description = d;
    const xmlObj: any = {};
    if (xml) {
      if (mt['smithy.api#xmlName']) xmlObj.name = mt['smithy.api#xmlName'];
      if (mt['smithy.api#xmlAttribute'] !== undefined) xmlObj.attribute = true;
      if (mt['smithy.api#xmlNamespace']) {
        xmlObj.namespace = mt['smithy.api#xmlNamespace'].uri;
        if (mt['smithy.api#xmlNamespace'].prefix) xmlObj.prefix = mt['smithy.api#xmlNamespace'].prefix;
      }
      const tgt = target(member.target);
      if (tgt && (tgt.type === 'list' || tgt.type === 'map')) {
        // Smithy lists/maps are wrapped unless the *member* says xmlFlattened.
        xmlObj.wrapped = mt['smithy.api#xmlFlattened'] === undefined;
      }
    }
    if (Object.keys(xmlObj).length) extra.xml = xmlObj;
    if (mt['smithy.api#default'] !== undefined && mt['smithy.api#default'] !== null) extra.default = mt['smithy.api#default'];
    if (mt['smithy.api#deprecated'] !== undefined) extra.deprecated = true;
    if (!Object.keys(extra).length) return sch;
    // OpenAPI 3.0 ignores siblings of $ref, so wrap it.
    if (sch.$ref) sch = { allOf: [sch] };
    return { ...sch, ...extra };
  }

  function objectOf(members: Record<string, Shape>, opts: { skipBound: boolean }): any {
    const properties: Record<string, any> = {};
    const required: string[] = [];
    for (const [name, m] of Object.entries(members)) {
      if (opts.skipBound && isBound(m.traits)) continue;
      properties[name] = memberSchema(m);
      if (m.traits?.['smithy.api#required'] !== undefined) required.push(name);
    }
    const out: any = { type: 'object', properties };
    if (required.length) out.required = required;
    return out;
  }

  function buildShape(s: Shape): any {
    const t: Traits = s.traits ?? {};
    let out: any;
    switch (s.type) {
      case 'structure':
        // Bound members (headers, labels, query, payload) of an operation's
        // input/output travel outside the body document, so the schema of the
        // structure is its body members only.
        out = objectOf(s.members ?? {}, { skipBound: true });
        break;
      case 'union':
        out = { ...objectOf(s.members ?? {}, { skipBound: false }), minProperties: 1, maxProperties: 1 };
        delete out.required;
        break;
      case 'list': {
        const m = s.member;
        let items = schemaFor(m.target);
        const mt: Traits = m.traits ?? {};
        if (xml && mt['smithy.api#xmlName']) items = { ...(items.$ref ? { allOf: [items] } : items), xml: { name: mt['smithy.api#xmlName'] } };
        out = { type: 'array', items };
        if (t['smithy.api#uniqueItems'] !== undefined) out.uniqueItems = true;
        break;
      }
      case 'map':
        out = { type: 'object', additionalProperties: schemaFor(s.value.target) };
        break;
      case 'enum':
        out = {
          type: 'string',
          enum: Object.entries<Shape>(s.members ?? {}).map(([k, m]) => m.traits?.['smithy.api#enumValue'] ?? k),
        };
        break;
      case 'intEnum':
        out = {
          type: 'integer',
          enum: Object.values<Shape>(s.members ?? {}).map((m) => m.traits?.['smithy.api#enumValue']),
        };
        break;
    }
    const d = doc(t);
    if (d) out.description = d;
    if (xml && t['smithy.api#xmlName']) out.xml = { ...(out.xml ?? {}), name: t['smithy.api#xmlName'] };
    if (t['smithy.api#error']) out['x-smithy-error'] = t['smithy.api#error'];
    return out;
  }

  // ---- operations ---------------------------------------------------------
  const opIds: string[] = [];
  const seenOps = new Set<string>();
  const addOp = (id: string) => {
    if (!seenOps.has(id)) {
      seenOps.add(id);
      opIds.push(id);
    }
  };
  for (const o of service.operations ?? []) addOp(o.target);
  // Resource-bound operations (other AWS services model CRUD as resources).
  const walkResource = (rid: string) => {
    const r = target(rid);
    if (!r) return;
    for (const k of ['create', 'put', 'read', 'update', 'delete', 'list']) if (r[k]) addOp(r[k].target);
    for (const o of r.operations ?? []) addOp(o.target);
    for (const o of r.collectionOperations ?? []) addOp(o.target);
    for (const c of r.resources ?? []) walkResource(c.target);
  };
  for (const r of service.resources ?? []) walkResource(r.target);

  const bound: Bound[] = [];
  for (const id of opIds) {
    const op = target(id);
    const http = op?.traits?.['smithy.api#http'];
    if (!op || !http) {
      warnings.push(`${id}: no smithy.api#http binding, skipped`);
      continue;
    }
    const { path, literals } = parseUri(http.uri);
    bound.push({ id, name: localName(id), method: String(http.method).toLowerCase(), path, literals, shape: op });
  }

  const keys = discriminate(bound, shapes);

  const paths: Record<string, any> = {};
  for (const b of bound) {
    const key = keys.get(b.id)!;
    const op = b.shape;
    const ot: Traits = op.traits ?? {};
    const http = ot['smithy.api#http'];
    const input = op.input && op.input.target !== 'smithy.api#Unit' ? target(op.input.target) : undefined;
    const output = op.output && op.output.target !== 'smithy.api#Unit' ? target(op.output.target) : undefined;

    const parameters: any[] = [];
    const prefixHeaders: string[] = [];
    let requestBody: any;
    for (const [name, m] of Object.entries<Shape>(input?.members ?? {})) {
      const mt: Traits = m.traits ?? {};
      const base = (where: string, wire: string, required: boolean) => {
        const p: any = { name: wire, in: where, required };
        const d = doc(mt);
        if (d) p.description = d;
        p.schema = schemaFor(m.target);
        if (wire !== name) p['x-smithy-member'] = name;
        return p;
      };
      if (mt['smithy.api#httpLabel'] !== undefined) {
        const p = base('path', name, true);
        if (new RegExp(`\\{${name}\\+\\}`).test(http.uri)) p['x-smithy-greedy'] = true;
        parameters.push(p);
      } else if (mt['smithy.api#httpQuery'] !== undefined) {
        parameters.push(base('query', mt['smithy.api#httpQuery'], mt['smithy.api#required'] !== undefined));
      } else if (mt['smithy.api#httpHeader'] !== undefined) {
        parameters.push(base('header', mt['smithy.api#httpHeader'], mt['smithy.api#required'] !== undefined));
      } else if (mt['smithy.api#httpPrefixHeaders'] !== undefined) {
        prefixHeaders.push(mt['smithy.api#httpPrefixHeaders']);
      } else if (mt['smithy.api#httpQueryParams'] !== undefined) {
        // A map spread into the query string: no OpenAPI form beyond "any extra query".
      }
    }
    const reqPayload = payloadOf(input, op.input?.target, true);
    if (reqPayload) requestBody = reqPayload;

    // Literal query keys (other than x-id) are required, fixed-value parameters.
    for (const l of b.literals) {
      if (l.key === 'x-id') continue;
      if (parameters.some((p) => p.in === 'query' && p.name === l.key)) continue;
      parameters.push({
        name: l.key,
        in: 'query',
        required: true,
        allowEmptyValue: l.value === undefined,
        schema: l.value === undefined ? { type: 'string', enum: [''] } : { type: 'string', enum: [l.value] },
        description: 'Fixed by the operation URI.',
      });
    }

    const responses: Record<string, any> = {};
    const okCode = String(http.code ?? 200);
    const ok: any = { description: 'Success' };
    const headers: Record<string, any> = {};
    for (const [, m] of Object.entries<Shape>(output?.members ?? {})) {
      const mt: Traits = m.traits ?? {};
      if (mt['smithy.api#httpHeader'] !== undefined) {
        const h: any = { schema: schemaFor(m.target) };
        const d = doc(mt);
        if (d) h.description = d;
        headers[mt['smithy.api#httpHeader']] = h;
      }
    }
    if (Object.keys(headers).length) ok.headers = headers;
    const resPayload = payloadOf(output, op.output?.target, false);
    if (resPayload) ok.content = resPayload.content;
    responses[okCode] = ok;

    for (const e of op.errors ?? []) {
      const es = target(e.target);
      const code = String(es?.traits?.['smithy.api#httpError'] ?? (es?.traits?.['smithy.api#error'] === 'server' ? 500 : 400));
      const name = localName(e.target);
      const content = { [docMedia]: { schema: schemaFor(e.target) } };
      if (responses[code]) {
        responses[code].description += `, ${name}`;
        const prior = responses[code].content[docMedia].schema;
        responses[code].content[docMedia].schema = { oneOf: [...(prior.oneOf ?? [prior]), schemaFor(e.target)] };
      } else {
        responses[code] = { description: name, content };
      }
    }

    const operation: any = { operationId: b.name };
    const d = doc(ot);
    if (d) operation.description = d;
    if (parameters.length) operation.parameters = parameters;
    if (requestBody) operation.requestBody = requestBody;
    operation.responses = responses;
    if (prefixHeaders.length) operation['x-smithy-prefix-headers'] = prefixHeaders;
    if (ot['smithy.api#paginated']) operation['x-smithy-paginated'] = ot['smithy.api#paginated'];
    if (ot['smithy.api#deprecated'] !== undefined) operation.deprecated = true;

    paths[key] ??= {};
    if (paths[key][b.method]) {
      warnings.push(`${b.name}: ${b.method.toUpperCase()} ${key} already taken by ${paths[key][b.method].operationId}, skipped`);
      continue;
    }
    paths[key][b.method] = operation;
  }

  /** The request/response body for an operation's input or output structure. */
  function payloadOf(struct: Shape | undefined, structId: string | undefined, isRequest: boolean): any {
    if (!struct || !structId) return undefined;
    const members = Object.entries<Shape>(struct.members ?? {});
    const payload = members.find(([, m]) => m.traits?.['smithy.api#httpPayload'] !== undefined);
    if (payload) {
      const [, m] = payload;
      const tgt = m.target in PRELUDE ? { type: localName(m.target).toLowerCase() } : target(m.target);
      let media = docMedia;
      let schema = schemaFor(m.target);
      if (tgt?.type === 'blob') {
        media = m.traits?.['smithy.api#mediaType'] ?? tgt.traits?.['smithy.api#mediaType'] ?? 'application/octet-stream';
        schema = { type: 'string', format: 'binary' };
      } else if (tgt?.type === 'string' || tgt?.type === 'enum') {
        media = tgt.traits?.['smithy.api#mediaType'] ?? 'text/plain';
      } else if (tgt?.type === 'union' && tgt.traits?.['smithy.api#streaming'] !== undefined) {
        media = 'application/vnd.amazon.eventstream';
      } else if (xml && m.traits?.['smithy.api#xmlName']) {
        // A structure payload's root element is named by the member's xmlName.
        schema = { allOf: [schema], xml: { name: m.traits['smithy.api#xmlName'], ...(xmlNs ? { namespace: xmlNs } : {}) } };
      }
      const out: any = { content: { [media]: { schema } } };
      if (isRequest) out.required = m.traits?.['smithy.api#required'] !== undefined;
      return out;
    }
    const body = members.filter(([, m]) => !isBound(m.traits));
    if (!body.length) return undefined;
    // Unbound members form a document whose root element is the structure.
    let schema = schemaFor(structId);
    if (xml && !struct.traits?.['smithy.api#xmlName']) {
      schema = { allOf: [schema], xml: { name: localName(structId).replace(/(Request|Output)$/, ''), ...(xmlNs ? { namespace: xmlNs } : {}) } };
    }
    const out: any = { content: { [docMedia]: { schema } } };
    if (isRequest) out.required = body.some(([, m]) => m.traits?.['smithy.api#required'] !== undefined);
    return out;
  }

  // ---- document -----------------------------------------------------------
  const title: string = st['smithy.api#title'] ?? localName(serviceId);
  const sdkId: string | undefined = st['aws.api#service']?.sdkId;
  const endpointPrefix: string | undefined = st['aws.api#service']?.endpointPrefix;
  const servers = endpointPrefix
    ? [
        {
          url: `https://${endpointPrefix}.{region}.amazonaws.com`,
          variables: { region: { default: 'us-east-1', description: 'AWS region' } },
          description: `${title} regional endpoint`,
        },
        { url: `https://${endpointPrefix}.amazonaws.com`, description: `${title} global endpoint` },
      ]
    : [];

  const openapi: any = {
    openapi: '3.0.3',
    info: {
      title,
      version: service.version ?? 'unknown',
      'x-openfn-adaptor': adaptorName,
      'x-smithy-service': serviceId,
      ...(sdkId ? { 'x-aws-sdk-id': sdkId } : {}),
      ...(doc(st) ? { description: doc(st) } : {}),
    },
    servers,
    security: [{ sigv4: [] }],
    paths: Object.fromEntries(Object.entries(paths).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))),
    components: {
      securitySchemes: {
        sigv4: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: 'AWS Signature Version 4 (aws.auth#sigv4): an `AWS4-HMAC-SHA256 Credential=…, SignedHeaders=…, Signature=…` header computed from the request.',
        },
      },
      schemas: Object.fromEntries(Object.entries(schemas).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))),
    },
  };
  if (xmlNs) openapi.info['x-xml-namespace'] = xmlNs;
  return { openapi, warnings };
}

/**
 * The path key for each operation. Start from path + literal query minus
 * `x-id`; where two operations still share a method and key, add (in order)
 * their required query parameter names, then their required header names,
 * then — for S3 Express control-plane operations, which live on a different
 * host — `x-id`, and finally `x-id` for everyone still colliding.
 */
function discriminate(bound: Bound[], shapes: Record<string, Shape>): Map<string, string> {
  const lits = new Map<string, Literal[]>(bound.map((b) => [b.id, b.literals.filter((l) => l.key !== 'x-id')]));
  const keyOf = (b: Bound) => {
    const l = lits.get(b.id)!;
    return l.length ? `${b.path}#${fmt(l)}` : b.path;
  };
  const required = (b: Bound, binding: 'smithy.api#httpQuery' | 'smithy.api#httpHeader'): string[] => {
    const input = b.shape.input ? shapes[b.shape.input.target] : undefined;
    return Object.values<Shape>(input?.members ?? {})
      .filter((m) => m.traits?.[binding] !== undefined && m.traits?.['smithy.api#required'] !== undefined)
      .map((m) => String(m.traits[binding]))
      .sort();
  };
  const xId = (b: Bound): Literal => b.literals.find((l) => l.key === 'x-id') ?? { key: 'x-id', value: b.name };
  const steps: Array<(b: Bound) => Literal[]> = [
    (b) => required(b, 'smithy.api#httpQuery').map((key) => ({ key })),
    (b) => required(b, 'smithy.api#httpHeader').map((key) => ({ key })),
    (b) => (b.shape.traits?.['smithy.rules#staticContextParams']?.UseS3ExpressControlEndpoint?.value === true ? [xId(b)] : []),
    (b) => [xId(b)],
  ];
  for (const step of steps) {
    const groups = new Map<string, Bound[]>();
    for (const b of bound) {
      const k = `${b.method} ${keyOf(b)}`;
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k)!.push(b);
    }
    let collided = false;
    for (const g of groups.values()) {
      if (g.length < 2) continue;
      collided = true;
      for (const b of g) {
        const cur = lits.get(b.id)!;
        const add = step(b).filter((l) => !cur.some((c) => c.key === l.key));
        lits.set(b.id, [...cur, ...add]);
      }
    }
    if (!collided) break;
  }
  return new Map(bound.map((b) => [b.id, keyOf(b)]));
}
