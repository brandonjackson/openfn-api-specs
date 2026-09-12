/**
 * Convert a **Swagger 2.0** document into a full-coverage OpenAPI 3.0.3 document.
 *
 * Swagger 2.0 is still the machine spec a lot of vendors publish (Mailchimp's
 * Marketing API, OpenConceptLab's `?format=openapi`, every Azure data-plane
 * service, anything behind drf-yasg/springfox). Per AGENTS.md those adaptors are
 * `origin: converted`, `upstreamFormat: swagger-2.0`: the Swagger file is saved
 * verbatim as `upstream.json` (the source of truth) and the served
 * `openapi.json` is derived from it by this converter.
 *
 * The transform is mechanical and total — every path, operation, parameter,
 * definition and security scheme in the input appears in the output. Nothing is
 * subsetted.
 *
 *  - `host` + `basePath` + `schemes`   → `servers[]`
 *  - `definitions`                     → `components.schemas`
 *  - top-level `parameters`/`responses`→ `components.parameters`/`components.responses`
 *  - `securityDefinitions`             → `components.securitySchemes`
 *  - `in: body` parameter              → `requestBody` (media types from `consumes`)
 *  - `in: formData` parameters         → `requestBody` with a synthesised object
 *                                        schema (`multipart/form-data` when any
 *                                        field is a file, else form-urlencoded)
 *  - other parameters                  → OpenAPI 3 parameters with a `schema`
 *  - `response.schema`                 → `response.content[<produces>]`
 *  - `response.headers`                → OpenAPI 3 header objects (typed schema)
 *  - every `$ref` is repointed at its `components/*` home.
 *
 * Swagger-only spellings are normalised where OpenAPI 3 has an equivalent
 * (`x-nullable` → `nullable`, `type: file` → `string`/`binary`, string
 * `discriminator` → `{ propertyName }`, `collectionFormat` → `style`/`explode`)
 * and dropped where it does not (`collectionFormat: tsv`, which OpenAPI 3 has no
 * style for, is reported as a warning rather than silently mistranslated).
 *
 * `x-ms-paths` (the Azure extension for operations that differ only by query
 * string, which plain `paths` cannot key) is merged into `paths` with the `?`
 * turned into `#` — the same fragment-style disambiguation apis.guru uses for
 * AWS S3. The keys stay unique and the query string stays visible; a `#`
 * fragment is not part of the request target, so the path itself is unchanged.
 */

/** A loosely-typed Swagger node — we only read the fields we convert. */
type Node = Record<string, any>;

/** A Swagger 2.0 document (the fields this converter reads). */
export interface SwaggerDoc {
  swagger?: string;
  info?: Node;
  host?: string;
  basePath?: string;
  schemes?: string[];
  consumes?: string[];
  produces?: string[];
  paths?: Record<string, Node>;
  /** Azure extension: operations keyed with a query string. Merged into paths. */
  'x-ms-paths'?: Record<string, Node>;
  /** Azure extension: a templated host used instead of a fixed `host`. */
  'x-ms-parameterized-host'?: Node;
  definitions?: Record<string, Node>;
  parameters?: Record<string, Node>;
  responses?: Record<string, Node>;
  securityDefinitions?: Record<string, Node>;
  security?: Node[];
  tags?: Node[];
  externalDocs?: Node;
}

export interface SwaggerConvertResult {
  openapi: any;
  /** Human-readable notes about anything lossy or skipped, for logging. */
  warnings: string[];
}

const HTTP_METHODS = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch']);

/** Keys that live on a Swagger parameter but belong on its OpenAPI 3 schema. */
const SCHEMA_KEYS = [
  'type', 'format', 'items', 'enum', 'default', 'maximum', 'exclusiveMaximum',
  'minimum', 'exclusiveMinimum', 'maxLength', 'minLength', 'pattern', 'maxItems',
  'minItems', 'uniqueItems', 'multipleOf',
] as const;

/** Keys that stay on the OpenAPI 3 parameter itself. */
const PARAM_KEYS = new Set(['name', 'in', 'description', 'required', 'deprecated', 'allowEmptyValue', 'example']);

/** Where a Swagger `$ref` target moves to in OpenAPI 3. */
const REF_MAP: Array<[RegExp, string]> = [
  [/^#\/definitions\//, '#/components/schemas/'],
  [/^#\/parameters\//, '#/components/parameters/'],
  [/^#\/responses\//, '#/components/responses/'],
];

function rewriteRef(ref: string): string {
  for (const [from, to] of REF_MAP) if (from.test(ref)) return ref.replace(from, to);
  return ref;
}

/**
 * Keywords whose value is a map of *arbitrary names* to schemas. Their keys are
 * user data, so they must be recursed into as schemas without the key ever being
 * read as a JSON Schema keyword — a property genuinely called `type` holding
 * `{ $ref: … }` is a schema to convert, not a type declaration to rewrite.
 */
const SCHEMA_MAP_KEYS = new Set(['properties', 'patternProperties', 'definitions', 'dependencies']);

/**
 * Convert a Swagger schema (JSON Schema draft 4 + Swagger extras) to an OpenAPI
 * 3.0 schema: repoint `$ref`s, normalise `x-nullable`, `type: file` and the
 * string form of `discriminator`, and drop draft-4's boolean `exclusive*`
 * spelling when it has no numeric bound to attach to.
 */
export function convertSchema(node: any): any {
  if (Array.isArray(node)) return node.map(convertSchema);
  if (!node || typeof node !== 'object') return node;

  const out: Node = {};
  for (const [k, v] of Object.entries(node)) {
    if (SCHEMA_MAP_KEYS.has(k) && v && typeof v === 'object' && !Array.isArray(v)) {
      out[k] = Object.fromEntries(Object.entries(v as Node).map(([name, sub]) => [name, convertSchema(sub)]));
      continue;
    }
    switch (k) {
      case '$ref':
        out.$ref = typeof v === 'string' ? rewriteRef(v) : v;
        break;
      case 'x-nullable':
        // OpenAPI 3.0's spelling of the same thing.
        if (v === true) out.nullable = true;
        break;
      case 'discriminator':
        // Swagger 2.0: the property name as a bare string. OpenAPI 3: an object.
        out.discriminator = typeof v === 'string' ? { propertyName: v } : convertSchema(v);
        break;
      case 'type':
        // Swagger's `file` is OpenAPI 3's binary string.
        if (v === 'file') {
          out.type = 'string';
          out.format = 'binary';
        } else {
          out.type = v;
        }
        break;
      case 'format':
        // Only set if `type: file` did not already claim it.
        if (out.format === undefined) out.format = v;
        break;
      case 'exclusiveMaximum':
      case 'exclusiveMinimum':
        // draft-4 booleans modify `maximum`/`minimum`, which OpenAPI 3.0 keeps
        // as booleans too — pass through booleans, convert numbers to the bound.
        if (typeof v === 'boolean') out[k] = v;
        else if (typeof v === 'number') out[k === 'exclusiveMaximum' ? 'maximum' : 'minimum'] = v;
        break;
      case 'example':
      case 'examples':
      case 'default':
      case 'enum':
        // Literal values — copy as-is, never walked (an example may contain a
        // key literally named `$ref` that is data, not a reference).
        out[k] = v;
        break;
      default:
        out[k] = convertSchema(v);
    }
  }
  return out;
}

/** `collectionFormat` → OpenAPI 3 serialisation. `undefined` style = not representable. */
function collectionStyle(format: string | undefined, location: string): { style?: string; explode?: boolean } | undefined {
  switch (format ?? 'csv') {
    case 'csv':
      return { style: location === 'query' || location === 'cookie' ? 'form' : 'simple', explode: false };
    case 'ssv':
      return { style: 'spaceDelimited', explode: false };
    case 'pipes':
      return { style: 'pipeDelimited', explode: false };
    case 'multi':
      return { style: 'form', explode: true };
    default:
      return undefined; // `tsv` has no OpenAPI 3 equivalent.
  }
}

/** Convert one non-body, non-formData Swagger parameter. */
function convertParameter(param: Node, warnings: string[]): Node {
  if (typeof param.$ref === 'string') return { $ref: rewriteRef(param.$ref) };

  const out: Node = {};
  for (const [k, v] of Object.entries(param)) if (PARAM_KEYS.has(k) || k.startsWith('x-')) out[k] = v;

  const schema: Node = {};
  for (const k of SCHEMA_KEYS) if (param[k] !== undefined) schema[k] = param[k];
  out.schema = convertSchema(schema);
  if (param.in === 'path') out.required = true;

  if (param.type === 'array') {
    const style = collectionStyle(param.collectionFormat, param.in);
    if (style) Object.assign(out, style);
    else warnings.push(`${param.in} parameter "${param.name}": collectionFormat "${param.collectionFormat}" has no OpenAPI 3 style — dropped`);
  }
  return out;
}

/** Build a requestBody from a `in: body` parameter. */
function bodyRequest(param: Node, consumes: string[]): Node {
  const schema = param.schema ? convertSchema(param.schema) : {};
  const content: Node = {};
  for (const type of consumes.length ? consumes : ['application/json']) content[type] = { schema };
  const out: Node = { content };
  if (param.required) out.required = true;
  if (param.description) out.description = param.description;
  return out;
}

/** Build a requestBody from the `in: formData` parameters of one operation. */
function formRequest(params: Node[], consumes: string[]): Node {
  const properties: Node = {};
  const required: string[] = [];
  let hasFile = false;

  for (const p of params) {
    const schema: Node = {};
    for (const k of SCHEMA_KEYS) if (p[k] !== undefined) schema[k] = p[k];
    if (p.description) schema.description = p.description;
    if (p.type === 'file') hasFile = true;
    properties[p.name] = convertSchema(schema);
    if (p.required) required.push(p.name);
  }

  const schema: Node = { type: 'object', properties };
  if (required.length) schema.required = required;

  // Honour an explicit form media type from `consumes`; otherwise pick the one
  // implied by the fields (a file field cannot be form-urlencoded).
  const declared = consumes.filter((c) => c === 'multipart/form-data' || c === 'application/x-www-form-urlencoded');
  const types = declared.length ? declared : [hasFile ? 'multipart/form-data' : 'application/x-www-form-urlencoded'];

  const content: Node = {};
  for (const t of types) content[t] = { schema };
  return { content };
}

/** Convert a Swagger response's `headers` map to OpenAPI 3 header objects. */
function convertHeaders(headers: Node): Node {
  const out: Node = {};
  for (const [name, h] of Object.entries(headers)) {
    const header: Node = {};
    if ((h as Node).description) header.description = (h as Node).description;
    const schema: Node = {};
    for (const k of SCHEMA_KEYS) if ((h as Node)[k] !== undefined) schema[k] = (h as Node)[k];
    header.schema = convertSchema(schema);
    out[name] = header;
  }
  return out;
}

/** Convert one Swagger response object. */
function convertResponse(res: Node, produces: string[]): Node {
  if (typeof res.$ref === 'string') return { $ref: rewriteRef(res.$ref) };

  const out: Node = { description: res.description ?? '' };
  if (res.schema) {
    const schema = convertSchema(res.schema);
    const content: Node = {};
    for (const type of produces.length ? produces : ['application/json']) content[type] = { schema };
    out.content = content;
  }
  if (res.headers) out.headers = convertHeaders(res.headers);
  if (res.examples) {
    // Swagger keys examples by media type; OpenAPI 3 nests them under content.
    for (const [type, value] of Object.entries(res.examples)) {
      out.content ??= {};
      out.content[type] ??= {};
      out.content[type].example = value;
    }
  }
  for (const [k, v] of Object.entries(res)) if (k.startsWith('x-')) out[k] = v;
  return out;
}

/** `securityDefinitions` → `components.securitySchemes`. */
function convertSecurityScheme(def: Node, name: string, warnings: string[]): Node | undefined {
  switch (def.type) {
    case 'basic':
      return { type: 'http', scheme: 'basic', ...(def.description ? { description: def.description } : {}) };
    case 'apiKey':
      return { type: 'apiKey', name: def.name, in: def.in, ...(def.description ? { description: def.description } : {}) };
    case 'oauth2': {
      const scopes = def.scopes ?? {};
      const flow: Node = { scopes };
      if (def.authorizationUrl) flow.authorizationUrl = def.authorizationUrl;
      if (def.tokenUrl) flow.tokenUrl = def.tokenUrl;
      // Swagger flow names → OpenAPI 3 flow names.
      const NAMES: Record<string, string> = {
        implicit: 'implicit',
        password: 'password',
        application: 'clientCredentials',
        accessCode: 'authorizationCode',
      };
      const flowName = NAMES[def.flow as string];
      if (!flowName) {
        warnings.push(`securityDefinitions.${name}: unknown oauth2 flow "${def.flow}" — scheme dropped`);
        return undefined;
      }
      return { type: 'oauth2', flows: { [flowName]: flow }, ...(def.description ? { description: def.description } : {}) };
    }
    default:
      warnings.push(`securityDefinitions.${name}: unknown type "${def.type}" — scheme dropped`);
      return undefined;
  }
}

/**
 * `host` + `basePath` + `schemes` → `servers[]`.
 *
 * When the document has no fixed `host` but carries Azure's
 * `x-ms-parameterized-host` (every Azure data-plane service does — the account
 * name is part of the hostname), the host template becomes an OpenAPI 3 server
 * with one `variables` entry per `{placeholder}`. Without this those specs
 * convert to `servers: []`, which leaves the served document with no base URL at
 * all — the one thing AGENTS.md requires of `servers[0]`.
 */
function buildServers(doc: SwaggerDoc): Node[] {
  const base = (doc.basePath ?? '').replace(/\/$/, '');
  const schemes = (doc.schemes?.length ? doc.schemes : ['https']).filter((s) => s === 'http' || s === 'https');

  if (doc.host) return schemes.map((s) => ({ url: `${s}://${doc.host}${base}` }));

  const parameterized = doc['x-ms-parameterized-host'];
  const template = parameterized?.hostTemplate as string | undefined;
  if (template) {
    // `useSchemePrefix: false` means the template already carries the scheme (or
    // the whole URL, as with Blob Storage's bare `{url}`).
    const prefix = parameterized!.useSchemePrefix === false ? '' : `${schemes[0] ?? 'https'}://`;
    const names = [...template.matchAll(/\{([^}/]+)\}/g)].map((m) => m[1]);
    const server: Node = { url: `${prefix}${template}${base}` };
    if (names.length) {
      server.variables = Object.fromEntries(
        names.map((n) => [
          n,
          {
            // A server variable must declare a default; there is no real value to
            // use here (it is per-account), so the placeholder says so out loud.
            default: `<${n}>`,
            description: resolveHostParamDescription(doc, parameterized!, n) ?? `Value for {${n}} in the service host.`,
          },
        ])
      );
    }
    return [server];
  }

  return base ? [{ url: base }] : [];
}

/** Description for a `x-ms-parameterized-host` variable, following its `$ref` if needed. */
function resolveHostParamDescription(doc: SwaggerDoc, parameterized: Node, name: string): string | undefined {
  for (const p of (parameterized.parameters ?? []) as Node[]) {
    const def = typeof p.$ref === 'string' ? doc.parameters?.[p.$ref.replace('#/parameters/', '')] : p;
    if (def?.name === name && typeof def.description === 'string') return def.description;
  }
  return undefined;
}

/**
 * Merge `paths` and `x-ms-paths` into a single path map. `x-ms-paths` keys carry
 * a query string (`/{containerName}?restype=container`), which is not a legal
 * OpenAPI path key; the `?` becomes `#` so the key is unique and the query is
 * still readable without changing the request target.
 */
function mergePaths(doc: SwaggerDoc, warnings: string[]): Record<string, Node> {
  const merged: Record<string, Node> = { ...(doc.paths ?? {}) };
  for (const [key, item] of Object.entries(doc['x-ms-paths'] ?? {})) {
    const normalised = key.replace('?', '#');
    if (merged[normalised]) {
      warnings.push(`x-ms-paths collision on "${normalised}" — kept the paths entry`);
      continue;
    }
    merged[normalised] = item;
  }
  return merged;
}

/**
 * Convert a Swagger 2.0 document to a full-coverage OpenAPI 3.0.3 spec.
 * `adaptorName` is stamped as `info.x-openfn-adaptor` so the file self-identifies.
 */
export function swaggerToOpenApi(doc: SwaggerDoc, adaptorName: string): SwaggerConvertResult {
  const warnings: string[] = [];
  const docConsumes = doc.consumes ?? [];
  const docProduces = doc.produces ?? [];

  const paths: Record<string, Node> = {};
  const operations: PendingOperation[] = [];
  for (const [rawPath, rawItem] of Object.entries(mergePaths(doc, warnings))) {
    const item: Node = {};

    // Path-level parameters apply to every operation under the path.
    const pathParams: Node[] = Array.isArray(rawItem.parameters) ? rawItem.parameters : [];
    const shared = pathParams.filter((p) => p.in !== 'body' && p.in !== 'formData');
    if (shared.length) item.parameters = shared.map((p) => convertParameter(p, warnings));
    // OpenAPI 3 has no path-level requestBody, so a path-level body/formData
    // parameter has to be pushed down onto each operation under the path.
    const inheritedBody = pathParams.filter((p) => p.in === 'body' || p.in === 'formData');
    if (inheritedBody.length) {
      warnings.push(`${rawPath}: path-level body/formData parameter(s) moved onto each operation`);
    }
    if (rawItem.$ref) item.$ref = rewriteRef(rawItem.$ref);
    for (const [k, v] of Object.entries(rawItem)) if (k.startsWith('x-')) item[k] = v;

    for (const [method, rawOp] of Object.entries(rawItem)) {
      if (!HTTP_METHODS.has(method)) continue;
      const op = rawOp as Node;

      const consumes = op.consumes ?? docConsumes;
      const produces = op.produces ?? docProduces;
      // The operation's own parameters win over the path's, per the Swagger spec.
      const ownParams: Node[] = Array.isArray(op.parameters) ? op.parameters : [];
      const allParams: Node[] = [...ownParams, ...inheritedBody];

      const out: Node = {};
      if (op.tags) out.tags = op.tags;
      if (op.summary) out.summary = op.summary;
      if (op.description) out.description = op.description;
      if (op.externalDocs) out.externalDocs = op.externalDocs;
      if (op.deprecated) out.deprecated = true;

      const plain = ownParams.filter((p) => p.in !== 'body' && p.in !== 'formData');
      if (plain.length) out.parameters = plain.map((p) => convertParameter(p, warnings));

      const body = allParams.find((p) => p.in === 'body');
      const form = allParams.filter((p) => p.in === 'formData');
      if (body) out.requestBody = bodyRequest(body, consumes);
      else if (form.length) out.requestBody = formRequest(form, consumes);

      const responses: Node = {};
      for (const [code, res] of Object.entries(op.responses ?? {})) {
        responses[code] = convertResponse(res as Node, produces);
      }
      // An operation with no documented response is not a valid OpenAPI 3 doc.
      if (Object.keys(responses).length === 0) {
        responses.default = { description: 'Undocumented response' };
        warnings.push(`${method.toUpperCase()} ${rawPath}: no responses declared — added a default`);
      }
      out.responses = responses;

      if (op.security) out.security = op.security;
      for (const [k, v] of Object.entries(op)) if (k.startsWith('x-')) out[k] = v;

      // operationId is assigned once the whole document is walked — vendor ids are
      // optional in Swagger and are not always unique (see assignOperationIds).
      operations.push({ op: out, method, path: rawPath, vendorId: op.operationId });
      item[method] = out;
    }
    paths[rawPath] = item;
  }
  assignOperationIds(operations, warnings);

  const components: Node = {};
  if (doc.definitions) {
    components.schemas = Object.fromEntries(
      Object.entries(doc.definitions).map(([name, node]) => [name, convertSchema(node)])
    );
  }
  if (doc.parameters) {
    components.parameters = Object.fromEntries(
      Object.entries(doc.parameters).map(([name, p]) => [name, convertParameter(p, warnings)])
    );
  }
  if (doc.responses) {
    components.responses = Object.fromEntries(
      Object.entries(doc.responses).map(([name, r]) => [name, convertResponse(r, docProduces)])
    );
  }
  if (doc.securityDefinitions) {
    const schemes: Node = {};
    for (const [name, def] of Object.entries(doc.securityDefinitions)) {
      const scheme = convertSecurityScheme(def, name, warnings);
      if (scheme) schemes[name] = scheme;
    }
    if (Object.keys(schemes).length) components.securitySchemes = schemes;
  }

  const info: Node = { ...(doc.info ?? {}) };
  info.title ??= `${adaptorName} API`;
  info.version ??= '1.0';
  info['x-openfn-adaptor'] = adaptorName;

  const openapi: any = {
    openapi: '3.0.3',
    info,
    servers: buildServers(doc),
    paths,
  };
  if (Object.keys(components).length) openapi.components = components;
  if (doc.security) openapi.security = doc.security;
  if (doc.tags) openapi.tags = doc.tags;
  if (doc.externalDocs) openapi.externalDocs = doc.externalDocs;
  for (const [k, v] of Object.entries(doc)) if (k.startsWith('x-') && k !== 'x-ms-paths') openapi[k] = v;

  return { openapi, warnings };
}

/** An operation awaiting its operationId (assigned once the whole doc is walked). */
interface PendingOperation {
  op: Node;
  method: string;
  path: string;
  /** The vendor's `operationId`, if the Swagger document supplied one. */
  vendorId?: string;
}

/**
 * Give every operation a unique `operationId`.
 *
 * OpenAPI requires operationIds to be unique across the document, but Swagger
 * makes them optional and plenty of generators emit duplicates — OCL's drf-yasg
 * spec, for instance, reuses `collections_concepts_read` across every collection
 * route. An operationId is how downstream tooling names an operation, so
 * duplicates cannot be passed through.
 *
 * The rule is order-independent, so re-capturing an upstream whose paths merely
 * moved produces the same ids: a vendor id is kept only when it is unique in the
 * whole document, and any id used more than once is replaced — for *every*
 * occurrence — by one derived from the method and path. The vendor's id is kept
 * on `x-upstream-operation-id` so nothing is lost.
 */
function assignOperationIds(operations: PendingOperation[], warnings: string[]): void {
  const vendorCounts = new Map<string, number>();
  for (const { vendorId } of operations) {
    if (vendorId) vendorCounts.set(vendorId, (vendorCounts.get(vendorId) ?? 0) + 1);
  }

  const used = new Set<string>();
  let renamed = 0;
  for (const { op, method, path, vendorId } of operations) {
    const unique = vendorId !== undefined && vendorCounts.get(vendorId) === 1;
    let id = unique ? vendorId! : synthOperationId(method, path);
    // Two different paths can slug to the same id (`/a/{b}` and `/a-b`); break
    // the residual tie with a counter so the document stays valid.
    if (used.has(id)) {
      let n = 2;
      while (used.has(`${id}_${n}`)) n++;
      id = `${id}_${n}`;
    }
    used.add(id);
    op.operationId = id;
    if (vendorId !== undefined && id !== vendorId) {
      op['x-upstream-operation-id'] = vendorId;
      renamed++;
    }
  }
  if (renamed) {
    warnings.push(`${renamed} operation(s) had a duplicate upstream operationId — renamed from method+path (original kept on x-upstream-operation-id)`);
  }
}

/** A stable operationId for an operation the vendor left unnamed. */
function synthOperationId(method: string, path: string): string {
  const slug = path
    .replace(/[{}]/g, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((s, i) => (i === 0 ? s : s[0].toUpperCase() + s.slice(1)))
    .join('');
  return `${method}${slug ? slug[0].toUpperCase() + slug.slice(1) : 'Root'}`;
}
