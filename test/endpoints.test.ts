import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildEndpointIndex, renderEndpointIndex, resourceOf, ROOT_GROUP } from '../src/endpoints.js';

/**
 * The endpoint index is the compact view an AI assistant reads instead of the
 * full spec, so the contract is: every operation present exactly once, grouped
 * sensibly, one line each, deterministic (so the registry drift test can
 * re-derive it), and honest when the spec gives us little to work with.
 */

const SPEC = {
  openapi: '3.1.0',
  info: { title: 'Demo <b>API</b>', version: '2.0' },
  servers: [{ url: 'https://api.demo.test/v1' }],
  components: {
    securitySchemes: {
      key: { type: 'apiKey', in: 'header', name: 'X-Api-Key' },
      oauth: { type: 'oauth2', flows: { authorizationCode: {} } },
    },
  },
  paths: {
    '/v1/widgets': {
      get: { operationId: 'listWidgets', summary: 'List widgets', responses: {} },
      post: { operationId: 'createWidget', description: '<p>Creates a widget.</p> Second sentence.', responses: {} },
    },
    '/v1/widgets/{id}': {
      get: { operationId: 'getWidget', summary: 'Get a widget', responses: {} },
      delete: { operationId: 'deleteWidget', summary: 'Delete a widget', deprecated: true, responses: {} },
    },
    '/v1/gadgets': {
      get: { tags: ['Gadgets'], summary: 'List gadgets', responses: {} },
    },
    '/health': {
      get: { responses: {} },
    },
  },
};

test('resourceOf skips version and generic API prefixes, and path parameters', () => {
  assert.equal(resourceOf('/v1/widgets/{id}/parts'), 'widgets');
  assert.equal(resourceOf('/api/v2.1/things'), 'things');
  assert.equal(resourceOf('/api/v2.39/dataElements/{id}'), 'dataElements');
  assert.equal(resourceOf('/{tenant}/users'), 'users');
  assert.equal(resourceOf('/api/v2/contacts.json'), 'contacts');
  assert.equal(resourceOf('/{Bucket}/{Key}#uploadId'), '{Bucket}', 'all-parameter path: first parameter names the group');
  assert.equal(resourceOf('/'), ROOT_GROUP);
});

test('every operation lands in exactly one group; tag wins over path segment', () => {
  const idx = buildEndpointIndex(SPEC, 'demo');
  assert.equal(idx.operations, 6);
  const all = idx.groups.flatMap((g) => g.operations);
  assert.equal(all.length, 6);
  assert.deepEqual(
    idx.groups.map((g) => g.name),
    ['Gadgets', 'health', 'widgets'],
    'groups sorted by name'
  );
  const widgets = idx.groups.find((g) => g.name === 'widgets')!;
  assert.deepEqual(
    widgets.operations.map((o) => `${o.method} ${o.path}`),
    ['GET /v1/widgets', 'POST /v1/widgets', 'GET /v1/widgets/{id}', 'DELETE /v1/widgets/{id}'],
    'path order kept, fixed method order within a path'
  );
});

test('header facts: title is de-HTMLed, auth schemes are summarised', () => {
  const idx = buildEndpointIndex(SPEC, 'demo');
  assert.equal(idx.title, 'Demo API');
  assert.equal(idx.version, '2.0');
  assert.deepEqual(idx.servers, ['https://api.demo.test/v1']);
  assert.deepEqual(idx.auth, ['apiKey (header X-Api-Key)', 'oauth2 (authorizationCode)']);
});

test('summary falls back to the first sentence of the description, HTML stripped', () => {
  const idx = buildEndpointIndex(SPEC, 'demo');
  const create = idx.groups.flatMap((g) => g.operations).find((o) => o.operationId === 'createWidget')!;
  assert.equal(create.summary, 'Creates a widget.');
});

test('render: one line per operation, deprecated flagged, missing id/summary tolerated', () => {
  const md = renderEndpointIndex(buildEndpointIndex(SPEC, 'demo'));
  assert.match(md, /^# Demo API \(demo\) v2\.0\n/);
  assert.match(md, /do not edit by hand/);
  assert.match(md, /6 operations in 3 resources/);
  assert.ok(md.includes('- GET /v1/widgets — listWidgets: List widgets\n'));
  assert.ok(md.includes('- DELETE /v1/widgets/{id} — deleteWidget: Delete a widget (deprecated)\n'));
  assert.ok(md.includes('- GET /v1/gadgets — List gadgets\n'), 'no operationId: summary follows the dash');
  assert.ok(md.includes('- GET /health\n'), 'nothing to say: just the method and path');
  const opLines = md.split('\n').filter((l) => l.startsWith('- '));
  assert.equal(opLines.length, 6);
});

test('render is deterministic and ends with a newline', () => {
  const a = renderEndpointIndex(buildEndpointIndex(SPEC, 'demo'));
  const b = renderEndpointIndex(buildEndpointIndex(JSON.parse(JSON.stringify(SPEC)), 'demo'));
  assert.equal(a, b);
  assert.ok(a.endsWith('\n'));
});

test('an empty spec renders a sane header rather than throwing', () => {
  const md = renderEndpointIndex(buildEndpointIndex({ openapi: '3.0.0', info: {} }, 'empty'));
  assert.match(md, /^# empty \(empty\)\n/);
  assert.match(md, /base: not declared \| auth: not declared \| 0 operations in 0 resources/);
});
