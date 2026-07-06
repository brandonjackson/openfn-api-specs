import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseSpec } from '../src/spec-parser.js';

/** A tiny OpenAPI doc exercising request/response, 2xx selection, and refs. */
const doc = {
  openapi: '3.0.3',
  paths: {
    '/things': {
      get: {
        operationId: 'listThings',
        responses: {
          '200': { content: { 'application/json': { schema: { $ref: '#/components/schemas/ThingList' } } } },
          '500': { description: 'error' },
        },
      },
      post: {
        operationId: 'createThing',
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Thing' } } } },
        responses: {
          '201': { content: { 'application/json': { schema: { $ref: '#/components/schemas/Thing' } } } },
          '202': { description: 'accepted' },
        },
      },
    },
    '/a~b/{id}': {
      // path key containing a tilde/slash-ish char to test pointer escaping
      get: { operationId: 'weird', responses: { default: { content: { 'application/json': { schema: { type: 'object' } } } } } },
    },
  },
  components: {
    schemas: {
      Thing: { type: 'object', properties: { id: { type: 'string' } } },
      ThingList: { type: 'object', properties: { data: { type: 'array', items: { $ref: '#/components/schemas/Thing' } } } },
    },
  },
};

test('parseSpec extracts one operation per path+method', () => {
  const { operations } = parseSpec(doc);
  const ids = operations.map((o) => o.operationId).sort();
  assert.deepEqual(ids, ['createThing', 'listThings', 'weird']);
});

test('parseSpec chooses the lowest 2xx response', () => {
  const { operations } = parseSpec(doc);
  const post = operations.find((o) => o.operationId === 'createThing')!;
  assert.equal(post.successStatus, 201);
  assert.equal(post.method, 'POST');
  assert.deepEqual(post.responseSchema, { $ref: '#/components/schemas/Thing' });
  assert.deepEqual(post.requestSchema, { $ref: '#/components/schemas/Thing' });
});

test('parseSpec falls back to the default response when no 2xx exists', () => {
  const { operations } = parseSpec(doc);
  const weird = operations.find((o) => o.operationId === 'weird')!;
  // No 2xx -> GET keeps default 200 status, but still resolves the default schema.
  assert.equal(weird.successStatus, 200);
  assert.deepEqual(weird.responseSchema, { type: 'object' });
});

test('deref follows a $ref chain to its target', () => {
  const { deref } = parseSpec(doc);
  const resolved = deref({ $ref: '#/components/schemas/Thing' });
  assert.equal(resolved.type, 'object');
  assert.ok(resolved.properties.id);
});

test('resolveRef decodes JSON-pointer escapes (~1 -> /)', () => {
  const spec = { paths: { '/a/b': { get: { operationId: 'x' } } } } as any;
  const { resolveRef } = parseSpec(spec);
  assert.equal(resolveRef('#/paths/~1a~1b/get/operationId'), 'x');
});

test('deref returns non-ref nodes unchanged and is cycle-guarded', () => {
  const cyclic = { components: { schemas: { A: { $ref: '#/components/schemas/A' } } } } as any;
  const { deref } = parseSpec(cyclic);
  // Must terminate (guarded) rather than loop forever.
  const out = deref({ $ref: '#/components/schemas/A' });
  assert.ok(out === undefined || typeof out === 'object');
  assert.deepEqual(deref({ type: 'string' }), { type: 'string' });
});

test('parseSpec tolerates an empty / malformed document', () => {
  assert.deepEqual(parseSpec({}).operations, []);
  assert.deepEqual(parseSpec(null).operations, []);
  assert.deepEqual(parseSpec({ paths: { '/x': null } }).operations, []);
});
