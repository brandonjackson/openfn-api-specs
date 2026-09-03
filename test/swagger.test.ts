import { test } from 'node:test';
import assert from 'node:assert/strict';
import { convertSchema, swaggerToOpenApi } from '../src/swagger.js';

/**
 * A small Swagger 2.0 document exercising the conversion's tricky cases: host +
 * basePath + schemes → servers, body/formData/array parameters, `$ref`
 * repointing, shared path-level parameters, response headers and examples,
 * security definitions, and duplicate/absent operationIds.
 */
const swagger = {
  swagger: '2.0',
  info: { title: 'Demo API', version: '1.4.0', description: 'A demo.' },
  host: 'api.demo.test',
  basePath: '/v2',
  schemes: ['https', 'http', 'ws'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    basicAuth: { type: 'basic' },
    apiKey: { type: 'apiKey', name: 'X-Key', in: 'header' },
    oauth: {
      type: 'oauth2',
      flow: 'accessCode',
      authorizationUrl: 'https://demo.test/authorize',
      tokenUrl: 'https://demo.test/token',
      scopes: { read: 'Read things' },
    },
    weird: { type: 'sasl' },
  },
  parameters: {
    PageSize: { name: 'page_size', in: 'query', type: 'integer', default: 20 },
  },
  responses: {
    NotFound: { description: 'Missing', schema: { $ref: '#/definitions/Error' } },
  },
  paths: {
    '/widgets': {
      parameters: [{ $ref: '#/parameters/PageSize' }],
      get: {
        operationId: 'listWidgets',
        parameters: [{ name: 'tags', in: 'query', type: 'array', items: { type: 'string' }, collectionFormat: 'multi' }],
        responses: {
          200: {
            description: 'OK',
            schema: { type: 'array', items: { $ref: '#/definitions/Widget' } },
            headers: { 'X-Total': { type: 'integer', description: 'Total count' } },
            examples: { 'application/json': [{ id: 'w1' }] },
          },
          404: { $ref: '#/responses/NotFound' },
        },
      },
      post: {
        operationId: 'createWidget',
        parameters: [{ name: 'body', in: 'body', required: true, schema: { $ref: '#/definitions/Widget' } }],
        responses: { 201: { description: 'Created', schema: { $ref: '#/definitions/Widget' } } },
      },
    },
    '/widgets/{id}/attachment': {
      post: {
        // Deliberately shares listWidgets' id to exercise de-duplication.
        operationId: 'listWidgets',
        consumes: ['multipart/form-data'],
        parameters: [
          { name: 'id', in: 'path', type: 'string' },
          { name: 'file', in: 'formData', type: 'file', required: true },
          { name: 'caption', in: 'formData', type: 'string' },
        ],
        responses: { 204: { description: 'No content' } },
      },
      delete: {
        // No operationId and no responses — both have to be synthesised.
        parameters: [{ name: 'id', in: 'path', type: 'string', required: true }],
      },
    },
  },
  definitions: {
    Widget: {
      type: 'object',
      discriminator: 'kind',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        // A property literally called `type` whose value is a reference: the
        // key is a name here, not the JSON Schema `type` keyword.
        type: { $ref: '#/definitions/WidgetType' },
        upload: { type: 'file' },
        note: { type: 'string', 'x-nullable': true },
        size: { type: 'integer', minimum: 0, exclusiveMinimum: true },
      },
    },
    WidgetType: { type: 'string', enum: ['big', 'small'] },
    Error: { type: 'object', properties: { message: { type: 'string' } } },
  },
};

const { openapi, warnings } = swaggerToOpenApi(swagger as any, 'demo');

test('emits OpenAPI 3.0.3 with self-identifying info', () => {
  assert.equal(openapi.openapi, '3.0.3');
  assert.equal(openapi.info.title, 'Demo API');
  assert.equal(openapi.info.version, '1.4.0');
  assert.equal(openapi.info['x-openfn-adaptor'], 'demo');
});

test('host + basePath + schemes become servers, dropping non-HTTP schemes', () => {
  assert.deepEqual(openapi.servers, [
    { url: 'https://api.demo.test/v2' },
    { url: 'http://api.demo.test/v2' },
  ]);
});

test('x-ms-parameterized-host becomes a templated server with variables', () => {
  const { openapi: azure } = swaggerToOpenApi(
    {
      swagger: '2.0',
      info: { title: 'Blobs', version: '2021-12-02' },
      schemes: ['https'],
      'x-ms-parameterized-host': {
        hostTemplate: '{url}',
        useSchemePrefix: false,
        parameters: [{ $ref: '#/parameters/Url' }],
      },
      parameters: { Url: { name: 'url', in: 'path', type: 'string', description: 'The service URL.' } },
      paths: {},
      'x-ms-paths': { '/{container}?restype=container': { get: { responses: { 200: { description: 'OK' } } } } },
    } as any,
    'azure-storage'
  );
  assert.deepEqual(azure.servers, [
    { url: '{url}', variables: { url: { default: '<url>', description: 'The service URL.' } } },
  ]);
  // x-ms-paths merges in with `?` → `#` so the key is a legal, unique path.
  assert.deepEqual(Object.keys(azure.paths), ['/{container}#restype=container']);
});

test('definitions/parameters/responses move under components with refs repointed', () => {
  assert.ok(openapi.components.schemas.Widget);
  assert.equal(
    openapi.components.schemas.Widget.properties.type.$ref,
    '#/components/schemas/WidgetType'
  );
  assert.equal(openapi.components.parameters.PageSize.name, 'page_size');
  assert.equal(
    openapi.components.responses.NotFound.content['application/json'].schema.$ref,
    '#/components/schemas/Error'
  );
  assert.equal(openapi.paths['/widgets'].get.responses['404'].$ref, '#/components/responses/NotFound');
});

test('a property named after a JSON Schema keyword is still converted as a schema', () => {
  // The regression this guards: treating the `type` KEY inside `properties` as
  // the `type` keyword left `$ref: "#/definitions/WidgetType"` unrewritten.
  const props = openapi.components.schemas.Widget.properties;
  assert.equal(props.type.$ref, '#/components/schemas/WidgetType');
  assert.equal(JSON.stringify(openapi).includes('#/definitions/'), false);
});

test('Swagger-only schema spellings are normalised', () => {
  const widget = openapi.components.schemas.Widget;
  assert.deepEqual(widget.discriminator, { propertyName: 'kind' });
  assert.deepEqual(widget.properties.upload, { type: 'string', format: 'binary' });
  assert.equal(widget.properties.note.nullable, true);
  assert.equal(widget.properties.note['x-nullable'], undefined);
  assert.equal(widget.properties.size.exclusiveMinimum, true);
});

test('parameters gain a schema; path params are required; collectionFormat maps to style', () => {
  const get = openapi.paths['/widgets'].get;
  const tags = get.parameters.find((p: any) => p.name === 'tags');
  assert.deepEqual(tags.schema, { type: 'array', items: { type: 'string' } });
  assert.equal(tags.style, 'form');
  assert.equal(tags.explode, true);
  assert.equal(tags.collectionFormat, undefined);

  // Shared path-level parameters stay at path level, by reference.
  assert.deepEqual(openapi.paths['/widgets'].parameters, [{ $ref: '#/components/parameters/PageSize' }]);

  const id = openapi.paths['/widgets/{id}/attachment'].post.parameters.find((p: any) => p.name === 'id');
  assert.equal(id.required, true, 'path parameters are required in OpenAPI 3 even if Swagger omitted it');
});

test('a body parameter becomes a requestBody keyed by consumes', () => {
  const post = openapi.paths['/widgets'].post;
  assert.equal(post.requestBody.required, true);
  assert.deepEqual(post.requestBody.content['application/json'].schema, {
    $ref: '#/components/schemas/Widget',
  });
  assert.equal(post.parameters, undefined, 'the body parameter is not left in parameters[]');
});

test('formData parameters become one object-schema requestBody', () => {
  const post = openapi.paths['/widgets/{id}/attachment'].post;
  const body = post.requestBody.content['multipart/form-data'].schema;
  assert.equal(body.type, 'object');
  assert.deepEqual(body.required, ['file']);
  assert.deepEqual(body.properties.file, { type: 'string', format: 'binary' });
  assert.equal(body.properties.caption.type, 'string');
});

test('responses carry content, typed headers and examples', () => {
  const ok = openapi.paths['/widgets'].get.responses['200'];
  assert.equal(ok.content['application/json'].schema.items.$ref, '#/components/schemas/Widget');
  assert.deepEqual(ok.headers['X-Total'], { description: 'Total count', schema: { type: 'integer' } });
  assert.deepEqual(ok.content['application/json'].example, [{ id: 'w1' }]);
});

test('an operation with no declared responses gets a default, with a warning', () => {
  const del = openapi.paths['/widgets/{id}/attachment'].delete;
  assert.deepEqual(del.responses, { default: { description: 'Undocumented response' } });
  assert.ok(warnings.some((w) => w.includes('no responses declared')));
});

test('operationIds are unique: duplicates are replaced everywhere by method+path', () => {
  const ids = [
    openapi.paths['/widgets'].get.operationId,
    openapi.paths['/widgets'].post.operationId,
    openapi.paths['/widgets/{id}/attachment'].post.operationId,
    openapi.paths['/widgets/{id}/attachment'].delete.operationId,
  ];
  assert.equal(new Set(ids).size, ids.length, `duplicate operationIds: ${ids.join(', ')}`);
  // `createWidget` was unique upstream, so it survives untouched.
  assert.equal(openapi.paths['/widgets'].post.operationId, 'createWidget');
  // `listWidgets` was used twice, so BOTH occurrences are renamed — which keeps
  // the result independent of the order the paths happen to be listed in.
  assert.equal(openapi.paths['/widgets'].get.operationId, 'getWidgets');
  assert.equal(openapi.paths['/widgets'].get['x-upstream-operation-id'], 'listWidgets');
  assert.equal(openapi.paths['/widgets/{id}/attachment'].post['x-upstream-operation-id'], 'listWidgets');
  // The unnamed DELETE gets a synthesised id.
  assert.equal(openapi.paths['/widgets/{id}/attachment'].delete.operationId, 'deleteWidgetsIdAttachment');
  assert.ok(warnings.some((w) => w.includes('duplicate upstream operationId')));
});

test('security definitions convert, and unknown types are dropped with a warning', () => {
  const s = openapi.components.securitySchemes;
  assert.deepEqual(s.basicAuth, { type: 'http', scheme: 'basic' });
  assert.deepEqual(s.apiKey, { type: 'apiKey', name: 'X-Key', in: 'header' });
  assert.deepEqual(s.oauth.flows.authorizationCode, {
    scopes: { read: 'Read things' },
    authorizationUrl: 'https://demo.test/authorize',
    tokenUrl: 'https://demo.test/token',
  });
  assert.equal(s.weird, undefined);
  assert.ok(warnings.some((w) => w.includes('unknown type "sasl"')));
});

test('every operation in the input appears in the output (no subsetting)', () => {
  const METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'];
  const count = (doc: any, key: string) =>
    Object.values(doc[key] ?? {}).reduce(
      (n: number, item: any) => n + METHODS.filter((m) => item?.[m]).length,
      0
    );
  assert.equal(count(openapi, 'paths'), count(swagger, 'paths'));
});

test('convertSchema leaves literal example/default/enum values alone', () => {
  const out = convertSchema({
    type: 'object',
    default: { $ref: 'not-a-reference' },
    example: { type: 'file' },
    enum: [{ $ref: '#/definitions/X' }],
  });
  assert.deepEqual(out.default, { $ref: 'not-a-reference' });
  assert.deepEqual(out.example, { type: 'file' });
  assert.deepEqual(out.enum, [{ $ref: '#/definitions/X' }]);
});
