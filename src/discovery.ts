/**
 * Convert a Google API **Discovery document** (`discovery#restDescription`, the
 * machine spec Google publishes at `…/$discovery/rest?version=…`) into a
 * full-coverage OpenAPI 3.0.3 document.
 *
 * Several OpenFn adaptors wrap Google APIs through the `googleapis` SDK
 * (googledrive, googlesheets, gmail, bigquery, googlehealthcare, …). The
 * authoritative machine spec for those APIs is the Discovery doc, not an
 * OpenAPI file — so per AGENTS.md we save the Discovery doc verbatim as
 * `upstream.json` (origin `converted`, upstreamFormat `google-discovery`) and
 * derive the full `openapi.json` from it with this converter. "Full" means the
 * ENTIRE documented API: every resource method becomes a path, every Discovery
 * schema becomes a component schema. No subsetting.
 *
 * The transform is mechanical and total:
 *
 *  - `schemas`      → `components.schemas` (Discovery schema nodes are JSON-Schema
 *                     shaped; bare `$ref: "Name"` become `#/components/schemas/Name`).
 *  - `resources[…].methods[…]` (walked recursively) → `paths[path][httpMethod]`.
 *    The OpenAPI path is the method's `flatPath` when present (its template vars
 *    are concrete segments, so reserved-expansion methods like `v1/{+name}` —
 *    which would otherwise all collapse onto the same template and collide — get
 *    unique, resolvable paths), else its `path`.
 *  - path template vars → required string path parameters; the method's query
 *    parameters plus the doc's global parameters → query parameters.
 *  - `method.request.$ref`  → JSON request body; `method.response.$ref` → 200 body.
 *  - `method.mediaUpload.protocols` → one extra operation per protocol at its
 *    own upload path (`/upload/drive/v3/files`, `/resumable/upload/…`). Those
 *    paths are absolute from `rootUrl`, not from the service path, so each
 *    gets a path-level `servers` entry of `rootUrl`. operationIds are
 *    `<method id>.upload` (simple: media or multipart) and
 *    `<method id>.resumableUpload` (the request that opens an upload session).
 *
 * Lossy-but-safe normalisations (Discovery has a few non-OpenAPI-isms):
 *  - `type: "any"`            → empty schema `{}` (matches anything).
 *  - string `minimum`/`maximum` (int64 bounds arrive as strings) → numbers, or dropped.
 *  - Discovery-only annotations (`enumDescriptions`, `annotations`, `id`, …) are dropped.
 */

/** A Discovery schema/parameter node (loosely typed — we only read known fields). */
type DiscoveryNode = Record<string, any>;

/** A Google Discovery REST description (the fields this converter reads). */
export interface DiscoveryDoc {
  kind?: string;
  name?: string;
  version?: string;
  title?: string;
  description?: string;
  revision?: string;
  documentationLink?: string;
  rootUrl?: string;
  servicePath?: string;
  baseUrl?: string;
  /** Global parameters that apply to every method (alt, fields, key, …). */
  parameters?: Record<string, DiscoveryNode>;
  /** Named schemas, keyed by schema id. */
  schemas?: Record<string, DiscoveryNode>;
  /** Top-level resource tree; each resource may hold `methods` and nested `resources`. */
  resources?: Record<string, DiscoveryResource>;
}

interface DiscoveryResource {
  methods?: Record<string, DiscoveryMethod>;
  resources?: Record<string, DiscoveryResource>;
}

interface DiscoveryMethod {
  id?: string;
  path?: string;
  flatPath?: string;
  httpMethod?: string;
  description?: string;
  parameters?: Record<string, DiscoveryNode>;
  parameterOrder?: string[];
  request?: { $ref?: string };
  response?: { $ref?: string };
  scopes?: string[];
  deprecated?: boolean;
  supportsMediaUpload?: boolean;
  supportsMediaDownload?: boolean;
  /** Upload endpoints: `protocols.simple.path` / `protocols.resumable.path`, absolute from `rootUrl`. */
  mediaUpload?: {
    accept?: string[];
    maxSize?: string;
    protocols?: Record<string, { path?: string; multipart?: boolean }>;
  };
}

const HTTP_METHODS = new Set(['get', 'post', 'put', 'patch', 'delete', 'head', 'options']);

/** Coerce a Discovery numeric bound (often a string) to a finite number, else undefined. */
function toNumber(v: unknown): number | undefined {
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  if (typeof v === 'string' && v.trim() !== '') {
    const n = Number(v);
    if (Number.isFinite(n)) return n;
  }
  return undefined;
}

/**
 * Convert one Discovery schema node into an OpenAPI 3.0 schema node. Recurses
 * through `properties`, `items`, and `additionalProperties`; rewrites bare
 * `$ref: "Name"` into `#/components/schemas/Name`.
 */
function convertSchema(node: DiscoveryNode | undefined): any {
  if (node == null || typeof node !== 'object') return {};
  if (Array.isArray(node)) return node.map((n) => convertSchema(n));

  // A reference: Discovery uses a bare schema name. Siblings of $ref are ignored
  // by OpenAPI 3.0, so emit a clean single-key ref.
  if (typeof node.$ref === 'string') {
    return { $ref: `#/components/schemas/${node.$ref}` };
  }

  const out: Record<string, any> = {};

  // `type: "any"` has no OpenAPI equivalent — an empty schema matches anything.
  if (node.type && node.type !== 'any') out.type = node.type;
  if (typeof node.format === 'string') out.format = node.format;
  if (typeof node.description === 'string') out.description = node.description;
  if (node.default !== undefined) out.default = node.default;
  if (Array.isArray(node.enum)) out.enum = node.enum;
  if (typeof node.pattern === 'string') out.pattern = node.pattern;
  if (node.readOnly === true) out.readOnly = true;
  if (node.deprecated === true) out.deprecated = true;

  const min = toNumber(node.minimum);
  if (min !== undefined) out.minimum = min;
  const max = toNumber(node.maximum);
  if (max !== undefined) out.maximum = max;

  if (node.properties && typeof node.properties === 'object') {
    out.type = out.type ?? 'object';
    out.properties = {};
    for (const [k, v] of Object.entries(node.properties)) out.properties[k] = convertSchema(v as DiscoveryNode);
  }

  if (node.items) {
    out.type = out.type ?? 'array';
    out.items = convertSchema(node.items);
  }

  // Map types: additionalProperties is itself a schema node.
  if (node.additionalProperties && typeof node.additionalProperties === 'object') {
    out.type = out.type ?? 'object';
    out.additionalProperties = convertSchema(node.additionalProperties);
  }

  return out;
}

/** Build a JSON-schema fragment for a parameter's value (handles `repeated` → array, `any`). */
function paramSchema(p: DiscoveryNode): any {
  const scalar: Record<string, any> = {};
  if (p.type && p.type !== 'any') scalar.type = p.type;
  if (typeof p.format === 'string') scalar.format = p.format;
  if (Array.isArray(p.enum)) scalar.enum = p.enum;
  if (typeof p.pattern === 'string') scalar.pattern = p.pattern;
  if (p.default !== undefined) scalar.default = p.default;
  const min = toNumber(p.minimum);
  if (min !== undefined) scalar.minimum = min;
  const max = toNumber(p.maximum);
  if (max !== undefined) scalar.maximum = max;
  if (!scalar.type) scalar.type = 'string';
  return p.repeated === true ? { type: 'array', items: scalar } : scalar;
}

/** Convert a Discovery parameter into an OpenAPI parameter object. */
function convertParam(name: string, p: DiscoveryNode, location: 'path' | 'query'): any {
  const param: Record<string, any> = {
    name,
    in: location,
    required: location === 'path' ? true : p.required === true,
    schema: paramSchema(p),
  };
  if (typeof p.description === 'string') param.description = p.description;
  if (p.deprecated === true) param.deprecated = true;
  return param;
}

/** All `{placeholder}` names in an OpenAPI path template, in order. */
function pathVars(path: string): string[] {
  return [...path.matchAll(/\{([^}]+)\}/g)].map((m) => m[1]);
}

interface FlatMethod {
  method: DiscoveryMethod;
  /** Dotted resource path for tagging, e.g. "projects.locations.datasets". */
  resourcePath: string[];
}

/** Depth-first walk of the resource tree collecting every method with its resource path. */
function collectMethods(
  resources: Record<string, DiscoveryResource> | undefined,
  trail: string[],
  out: FlatMethod[]
): void {
  for (const [key, res] of Object.entries(resources ?? {})) {
    const here = [...trail, key];
    for (const method of Object.values(res.methods ?? {})) out.push({ method, resourcePath: here });
    if (res.resources) collectMethods(res.resources, here, out);
  }
}

/** The first sentence of a description, without its full stop. */
function firstSentence(text: string | undefined): string | undefined {
  const m = text?.trim().match(/^(.+?)\.(?:\s|$)/s);
  const out = (m ? m[1] : text?.trim())?.replace(/\s+/g, ' ');
  return out || undefined;
}

/**
 * The operation for one `mediaUpload` protocol of a method. It shares the
 * method's description, tags and response; its path parameters are the upload
 * path's own; its query adds the required `uploadType`; its body is the media
 * itself, or `multipart/related` (JSON metadata part + media part), or, for a
 * resumable session request, the JSON metadata alone.
 */
function uploadOperation(
  base: Record<string, any>,
  method: DiscoveryMethod,
  protocol: string,
  upPath: string,
  methodParams: Record<string, DiscoveryNode>
): Record<string, any> {
  const resumable = protocol === 'resumable';
  const vars = pathVars(upPath);
  const parameters: any[] = vars.map((v) =>
    methodParams[v] ? convertParam(v, methodParams[v], 'path') : { name: v, in: 'path', required: true, schema: { type: 'string' } }
  );
  parameters.push({
    name: 'uploadType',
    in: 'query',
    required: true,
    description: resumable
      ? 'Must be `resumable`: this request opens an upload session; the session URI comes back in the `Location` header.'
      : '`media` (the body is the file), or `multipart` (a `multipart/related` body: JSON metadata, then the file).',
    schema: resumable ? { type: 'string', enum: ['resumable'] } : { type: 'string', enum: ['media', 'multipart'] },
  });
  for (const p of base.parameters ?? []) {
    if (p.in === 'query' && p.name !== 'uploadType') parameters.push(p);
  }

  const metadata = method.request?.$ref ? { $ref: `#/components/schemas/${method.request.$ref}` } : { type: 'object' };
  const accept = method.mediaUpload?.accept?.length ? method.mediaUpload.accept : ['*/*'];
  const content: Record<string, any> = {};
  if (resumable) {
    content['application/json'] = { schema: metadata };
  } else {
    content['multipart/related'] = {
      schema: { type: 'object', properties: { metadata, media: { type: 'string', format: 'binary' } } },
    };
    for (const type of accept) content[type] = { schema: { type: 'string', format: 'binary' } };
  }

  const op: Record<string, any> = {
    operationId: `${method.id}.${resumable ? 'resumableUpload' : 'upload'}`,
    tags: base.tags,
    summary: `${firstSentence(method.description) ?? method.id} (${resumable ? 'resumable upload session' : 'media upload'})`,
    description: base.description,
    parameters,
    requestBody: { required: !resumable, content },
    responses: resumable
      ? {
          '200': {
            description: 'Upload session opened; PUT the media to the URI in `Location`.',
            headers: { Location: { description: 'The resumable session URI.', schema: { type: 'string' } } },
          },
        }
      : base.responses,
    'x-google-media-upload': {
      protocol,
      ...(method.mediaUpload?.accept ? { accept: method.mediaUpload.accept } : {}),
      ...(method.mediaUpload?.maxSize ? { maxSize: method.mediaUpload.maxSize } : {}),
    },
  };
  if (base['x-google-scopes']) op['x-google-scopes'] = base['x-google-scopes'];
  if (base.deprecated) op.deprecated = true;
  for (const k of Object.keys(op)) if (op[k] === undefined) delete op[k];
  return op;
}

export interface DiscoveryConvertResult {
  openapi: any;
  /** Human-readable notes about anything skipped (collisions), for logging. */
  warnings: string[];
}

/**
 * Convert a Google Discovery document to a full-coverage OpenAPI 3.0.3 spec.
 * `adaptorName` is stamped as `info.x-openfn-adaptor` so the file self-identifies.
 */
export function discoveryToOpenApi(discovery: DiscoveryDoc, adaptorName: string): DiscoveryConvertResult {
  const warnings: string[] = [];

  // components.schemas — the whole schema catalogue, converted 1:1.
  const schemas: Record<string, any> = {};
  for (const [name, node] of Object.entries(discovery.schemas ?? {})) {
    schemas[name] = convertSchema(node);
  }

  // Global parameters apply to every method as query parameters.
  const globalParams: Record<string, DiscoveryNode> = discovery.parameters ?? {};

  // paths — every method in the resource tree.
  const flat: FlatMethod[] = [];
  collectMethods(discovery.resources, [], flat);

  // Upload paths are absolute from rootUrl (they repeat the service path).
  const rootServer = (discovery.rootUrl ?? '').replace(/\/+$/, '');

  const paths: Record<string, any> = {};
  for (const { method, resourcePath } of flat) {
    const httpMethod = (method.httpMethod ?? 'GET').toLowerCase();
    if (!HTTP_METHODS.has(httpMethod)) {
      warnings.push(`${method.id}: unsupported httpMethod ${method.httpMethod}`);
      continue;
    }
    // Prefer flatPath: its template vars are concrete, so reserved-expansion
    // methods (v1/{+name}) get unique, resolvable OpenAPI paths.
    const rawPath = method.flatPath ?? method.path ?? '';
    const oaPath = '/' + rawPath.replace(/^\/+/, '').replace(/\{\+/g, '{');

    const vars = pathVars(oaPath);
    const methodParams = method.parameters ?? {};

    // Path parameters: one per template var. Enrich from the method's parameter
    // definition when the name matches; otherwise synthesise a string param.
    const parameters: any[] = [];
    for (const v of vars) {
      const def = methodParams[v];
      parameters.push(def ? convertParam(v, def, 'path') : { name: v, in: 'path', required: true, schema: { type: 'string' } });
    }
    const seen = new Set(vars);

    // Query parameters: the method's non-path params, then globals (deduped).
    for (const [name, p] of Object.entries(methodParams)) {
      if (seen.has(name) || p.location === 'path') continue;
      seen.add(name);
      parameters.push(convertParam(name, p, 'query'));
    }
    for (const [name, p] of Object.entries(globalParams)) {
      if (seen.has(name)) continue;
      seen.add(name);
      parameters.push(convertParam(name, p, 'query'));
    }

    const op: Record<string, any> = {
      operationId: method.id,
      tags: resourcePath.length ? [resourcePath.join('.')] : undefined,
      description: method.description,
    };
    if (parameters.length) op.parameters = parameters;

    if (method.request?.$ref) {
      op.requestBody = {
        required: true,
        content: { 'application/json': { schema: { $ref: `#/components/schemas/${method.request.$ref}` } } },
      };
    }

    const response: Record<string, any> = { description: 'Successful response' };
    if (method.response?.$ref) {
      response.content = { 'application/json': { schema: { $ref: `#/components/schemas/${method.response.$ref}` } } };
    }
    op.responses = { '200': response };

    if (Array.isArray(method.scopes) && method.scopes.length) op['x-google-scopes'] = method.scopes;
    if (method.deprecated === true) op.deprecated = true;

    // Drop undefined keys for a clean document.
    for (const k of Object.keys(op)) if (op[k] === undefined) delete op[k];

    const item = (paths[oaPath] ??= {});
    if (item[httpMethod]) {
      warnings.push(`collision: ${httpMethod.toUpperCase()} ${oaPath} (${item[httpMethod].operationId} vs ${method.id}) — kept first`);
      continue;
    }
    item[httpMethod] = op;

    // Media upload endpoints, one per protocol, rooted at rootUrl.
    for (const [protocol, spec] of Object.entries(method.mediaUpload?.protocols ?? {})) {
      if (typeof spec?.path !== 'string') continue;
      const upPath = '/' + spec.path.replace(/^\/+/, '').replace(/\{\+/g, '{');
      const upOp = uploadOperation(op, method, protocol, upPath, methodParams);
      const upItem = (paths[upPath] ??= {});
      if (upItem[httpMethod]) {
        warnings.push(`collision: ${httpMethod.toUpperCase()} ${upPath} (${upItem[httpMethod].operationId} vs ${upOp.operationId}) — kept first`);
        continue;
      }
      if (rootServer && !upItem.servers) upItem.servers = [{ url: rootServer }];
      upItem[httpMethod] = upOp;
    }
  }

  const baseUrl = (discovery.baseUrl ?? (discovery.rootUrl ?? '') + (discovery.servicePath ?? '')).replace(/\/+$/, '');

  const openapi: any = {
    openapi: '3.0.3',
    info: {
      title: discovery.title ?? `${discovery.name ?? adaptorName} API`,
      version: discovery.version ?? '1.0',
      description: discovery.description,
      'x-openfn-adaptor': adaptorName,
      'x-discovery-name': discovery.name,
      'x-discovery-revision': discovery.revision,
    },
    servers: baseUrl ? [{ url: baseUrl }] : [],
    paths,
    components: { schemas },
  };
  if (discovery.documentationLink) openapi.externalDocs = { url: discovery.documentationLink };
  for (const k of Object.keys(openapi.info)) if (openapi.info[k] === undefined) delete openapi.info[k];

  return { openapi, warnings };
}
