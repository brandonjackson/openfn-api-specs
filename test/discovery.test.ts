import { test } from 'node:test';
import assert from 'node:assert/strict';
import { discoveryToOpenApi } from '../src/discovery.js';
import { parseSpec } from '../src/spec-parser.js';

/**
 * A tiny Discovery doc exercising the conversion's tricky cases: reserved-
 * expansion paths (flatPath vs {+name}), $ref rewriting, global parameters,
 * repeated (array) params, request/response bodies, map types, and `type: any`.
 */
const disc = {
  kind: 'discovery#restDescription',
  name: 'demo',
  version: 'v1',
  title: 'Demo API',
  description: 'A demo.',
  revision: '20260101',
  documentationLink: 'https://example.com/docs',
  rootUrl: 'https://demo.googleapis.com/',
  servicePath: '',
  baseUrl: 'https://demo.googleapis.com/',
  parameters: {
    alt: { type: 'string', location: 'query', enum: ['json', 'media'], default: 'json' },
    fields: { type: 'string', location: 'query' },
  },
  schemas: {
    Widget: {
      id: 'Widget',
      type: 'object',
      properties: {
        id: { type: 'string' },
        size: { type: 'integer', format: 'int64', minimum: '0', maximum: '100' },
        parent: { $ref: 'Widget' },
        labels: { type: 'object', additionalProperties: { type: 'string' } },
        payload: { type: 'any' },
      },
    },
    WidgetList: {
      id: 'WidgetList',
      type: 'object',
      properties: { widgets: { type: 'array', items: { $ref: 'Widget' } } },
    },
  },
  resources: {
    widgets: {
      methods: {
        list: {
          id: 'demo.widgets.list',
          path: 'v1/{+parent}/widgets',
          flatPath: 'v1/projects/{projectsId}/widgets',
          httpMethod: 'GET',
          description: 'List widgets.',
          parameters: {
            parent: { type: 'string', location: 'path', required: true, pattern: '^projects/[^/]+$' },
            tags: { type: 'string', location: 'query', repeated: true },
          },
          response: { $ref: 'WidgetList' },
          scopes: ['https://www.googleapis.com/auth/demo'],
        },
        create: {
          id: 'demo.widgets.create',
          path: 'v1/{+parent}/widgets',
          flatPath: 'v1/projects/{projectsId}/widgets',
          httpMethod: 'POST',
          request: { $ref: 'Widget' },
          response: { $ref: 'Widget' },
        },
      },
    },
  },
};

test('discoveryToOpenApi produces a valid-shaped OpenAPI 3.0 doc', () => {
  const { openapi } = discoveryToOpenApi(disc, 'demo');
  assert.equal(openapi.openapi, '3.0.3');
  assert.equal(openapi.info.title, 'Demo API');
  assert.equal(openapi.info['x-openfn-adaptor'], 'demo');
  assert.deepEqual(openapi.servers, [{ url: 'https://demo.googleapis.com' }]);
  assert.equal(openapi.externalDocs.url, 'https://example.com/docs');
});

test('every schema and method is carried over (full coverage)', () => {
  const { openapi } = discoveryToOpenApi(disc, 'demo');
  assert.deepEqual(Object.keys(openapi.components.schemas).sort(), ['Widget', 'WidgetList']);
  const { operations } = parseSpec(openapi);
  assert.deepEqual(operations.map((o) => o.operationId).sort(), ['demo.widgets.create', 'demo.widgets.list']);
});

test('uses flatPath so reserved-expansion methods get unique, resolvable paths', () => {
  const { openapi } = discoveryToOpenApi(disc, 'demo');
  const path = '/v1/projects/{projectsId}/widgets';
  assert.ok(openapi.paths[path], 'flatPath template becomes the OpenAPI path');
  // {projectsId} is a synthesised required path param (flatPath var, not in method params).
  const listParams = openapi.paths[path].get.parameters;
  const projectsId = listParams.find((p: any) => p.name === 'projectsId');
  assert.equal(projectsId.in, 'path');
  assert.equal(projectsId.required, true);
});

test('bare Discovery $refs become #/components/schemas refs and all resolve', () => {
  const { openapi } = discoveryToOpenApi(disc, 'demo');
  assert.deepEqual(openapi.components.schemas.WidgetList.properties.widgets.items, {
    $ref: '#/components/schemas/Widget',
  });
  // No dangling refs: every $ref target exists.
  const refs = JSON.stringify(openapi).match(/#\/components\/schemas\/[A-Za-z0-9_]+/g) ?? [];
  for (const r of refs) {
    const name = r.split('/').pop()!;
    assert.ok(openapi.components.schemas[name], `dangling ref ${r}`);
  }
});

test('normalises Discovery-isms: type:any -> {}, string bounds -> numbers, map types', () => {
  const { openapi } = discoveryToOpenApi(disc, 'demo');
  const w = openapi.components.schemas.Widget.properties;
  assert.deepEqual(w.payload, {}, 'type:any becomes an empty (any) schema');
  assert.equal(w.size.minimum, 0);
  assert.equal(w.size.maximum, 100);
  assert.equal(w.labels.additionalProperties.type, 'string');
});

test('merges global params and models repeated params as arrays', () => {
  const { openapi } = discoveryToOpenApi(disc, 'demo');
  const params = openapi.paths['/v1/projects/{projectsId}/widgets'].get.parameters;
  const byName = Object.fromEntries(params.map((p: any) => [p.name, p]));
  assert.ok(byName.alt && byName.fields, 'global params attached to every method');
  assert.equal(byName.alt.in, 'query');
  assert.equal(byName.tags.schema.type, 'array', 'repeated param modelled as an array');
});

test('request/response bodies become JSON media types', () => {
  const { openapi } = discoveryToOpenApi(disc, 'demo');
  const post = openapi.paths['/v1/projects/{projectsId}/widgets'].post;
  assert.deepEqual(post.requestBody.content['application/json'].schema, { $ref: '#/components/schemas/Widget' });
  assert.deepEqual(post.responses['200'].content['application/json'].schema, { $ref: '#/components/schemas/Widget' });
});

test('media upload URIs become operations of their own', () => {
  const doc: any = {
    name: 'demo',
    version: 'v1',
    rootUrl: 'https://www.googleapis.com/',
    servicePath: 'demo/v1/',
    schemas: { File: { id: 'File', type: 'object', properties: { id: { type: 'string' } } } },
    resources: {
      files: {
        methods: {
          create: {
            id: 'demo.files.create',
            path: '{+parent}/files',
            flatPath: 'folders/{foldersId}/files',
            httpMethod: 'POST',
            parameters: { parent: { type: 'string', location: 'path', required: true } },
            request: { $ref: 'File' },
            response: { $ref: 'File' },
            supportsMediaUpload: true,
            mediaUpload: {
              accept: ['image/*'],
              maxSize: '1024',
              protocols: {
                simple: { multipart: true, path: '/upload/demo/v1/{+parent}/files' },
                resumable: { multipart: true, path: '/resumable/upload/demo/v1/{+parent}/files' },
              },
            },
          },
        },
      },
    },
  };
  const { openapi, warnings } = discoveryToOpenApi(doc, 'demo');
  assert.deepEqual(warnings, []);
  assert.deepEqual(Object.keys(openapi.paths), [
    '/folders/{foldersId}/files',
    '/upload/demo/v1/folders/{foldersId}/files',
    '/resumable/upload/demo/v1/folders/{foldersId}/files',
  ]);
  const simple = openapi.paths['/upload/demo/v1/folders/{foldersId}/files'];
  // Upload URIs hang off rootUrl, so the path item overrides the API's base URL.
  assert.deepEqual(simple.servers, [{ url: 'https://www.googleapis.com' }]);
  assert.equal(simple.post.operationId, 'demo.files.create.simpleUpload');
  assert.deepEqual(simple.post.tags, ['files']);
  assert.deepEqual(Object.keys(simple.post.requestBody.content), ['image/*', 'multipart/related']);
  assert.equal(simple.post.parameters[0].name, 'foldersId');
  const resumable = openapi.paths['/resumable/upload/demo/v1/folders/{foldersId}/files'].post;
  assert.equal(resumable.operationId, 'demo.files.create.resumableUpload');
  assert.ok(resumable.requestBody.content['application/json']);
  // The method itself is untouched.
  assert.equal(openapi.paths['/folders/{foldersId}/files'].post.operationId, 'demo.files.create');
  assert.equal(openapi.paths['/folders/{foldersId}/files'].servers, undefined);
  assert.equal(parseSpec(openapi).operations.length, 3);
});
