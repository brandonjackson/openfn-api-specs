import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractDataObjects, JSON_SCHEMA_DIALECT } from '../src/data-objects.js';

const CAPTURED = '2026-01-01';

/** One GET / returning Thing; Thing references Nested; Orphan is unreferenced. */
const spec = {
  openapi: '3.0.3',
  paths: { '/x': { get: { operationId: 'x', responses: { '200': { content: { 'application/json': { schema: { $ref: '#/components/schemas/Thing' } } } } } } } },
  components: {
    schemas: {
      Thing: {
        type: 'object',
        properties: {
          nested: { $ref: '#/components/schemas/Nested' },
          count: { type: 'integer', minimum: 0, exclusiveMinimum: true },
          name: { type: 'string', nullable: true },
        },
      },
      Nested: { type: 'object', properties: { id: { type: 'string' } } },
      Orphan: { type: 'object' },
    },
  },
};

test('closure includes referenced types and excludes unreferenced ones', () => {
  const { objects } = extractDataObjects(spec, 'demo', CAPTURED);
  assert.deepEqual(objects.map((o) => o.name).sort(), ['Nested', 'Thing']);
  assert.ok(!objects.some((o) => o.name === 'Orphan'));
});

test('resource flags: the returned type is a resource, nested types are not', () => {
  const { objects, index } = extractDataObjects(spec, 'demo', CAPTURED);
  assert.equal(objects.find((o) => o.name === 'Thing')!.isResource, true);
  assert.equal(objects.find((o) => o.name === 'Nested')!.isResource, false);
  assert.deepEqual(index.resources, ['Thing']);
});

test('each object carries JSON Schema identity + provenance envelope', () => {
  const { objects } = extractDataObjects(spec, 'demo', CAPTURED);
  const thing = objects.find((o) => o.name === 'Thing')!.schema;
  assert.equal(thing.$schema, JSON_SCHEMA_DIALECT);
  assert.equal(thing.$id, 'demo/Thing');
  assert.equal(thing.title, 'Thing');
  assert.equal(thing['x-openfn-adaptor'], 'demo');
  assert.deepEqual(thing['x-source'], { openapi: '#/components/schemas/Thing', capturedAt: CAPTURED });
});

test('internal $refs are rewritten to sibling files', () => {
  const { objects } = extractDataObjects(spec, 'demo', CAPTURED);
  const thing = objects.find((o) => o.name === 'Thing')!.schema;
  assert.deepEqual(thing.properties.nested, { $ref: 'Nested.json' });
});

test('nullable on a typed schema becomes a null-union type', () => {
  const { objects } = extractDataObjects(spec, 'demo', CAPTURED);
  const thing = objects.find((o) => o.name === 'Thing')!.schema;
  assert.deepEqual(thing.properties.name.type, ['string', 'null']);
  assert.ok(!('nullable' in thing.properties.name));
});

test('boolean exclusiveMinimum becomes the numeric JSON Schema form', () => {
  const { objects } = extractDataObjects(spec, 'demo', CAPTURED);
  const thing = objects.find((o) => o.name === 'Thing')!.schema;
  assert.equal(thing.properties.count.exclusiveMinimum, 0);
  assert.ok(!('minimum' in thing.properties.count));
});

test('exclusiveMinimum: false is dropped (no bound)', () => {
  const one = {
    openapi: '3.0.3',
    paths: { '/x': { get: { operationId: 'x', responses: { '200': { content: { 'application/json': { schema: { $ref: '#/components/schemas/N' } } } } } } } },
    components: { schemas: { N: { type: 'integer', minimum: 5, exclusiveMinimum: false } } },
  };
  const { objects } = extractDataObjects(one, 'demo', CAPTURED);
  const n = objects[0].schema;
  assert.equal(n.minimum, 5);
  assert.ok(!('exclusiveMinimum' in n));
});

test('a nullable $ref is expressed as anyOf, preserving the ref target', () => {
  const one = {
    openapi: '3.0.3',
    paths: { '/x': { get: { operationId: 'x', responses: { '200': { content: { 'application/json': { schema: { $ref: '#/components/schemas/Wrap' } } } } } } } },
    components: {
      schemas: {
        Wrap: { type: 'object', properties: { child: { $ref: '#/components/schemas/Child', nullable: true } } },
        Child: { type: 'object' },
      },
    },
  };
  const { objects } = extractDataObjects(one, 'demo', CAPTURED);
  const wrap = objects.find((o) => o.name === 'Wrap')!.schema;
  assert.deepEqual(wrap.properties.child, { anyOf: [{ $ref: 'Child.json' }, { type: 'null' }] });
});

test('the index mirrors the object set with resource flags and dialect', () => {
  const { index } = extractDataObjects(spec, 'demo', CAPTURED);
  assert.equal(index.adaptor, 'demo');
  assert.equal(index.dialect, JSON_SCHEMA_DIALECT);
  assert.equal(index.source, 'openapi.json');
  assert.deepEqual(
    index.objects,
    [
      { name: 'Nested', file: 'Nested.json', resource: false },
      { name: 'Thing', file: 'Thing.json', resource: true },
    ]
  );
});

test('schema names with unsafe characters get sanitised file names', () => {
  const one = {
    openapi: '3.0.3',
    paths: { '/x': { get: { operationId: 'x', responses: { '200': { content: { 'application/json': { schema: { type: 'object' } } } } } } } },
    components: { schemas: { 'Foo Bar': { type: 'object' } } },
  };
  // Inline-only response -> fallback to every component schema, incl. "Foo Bar".
  const { objects } = extractDataObjects(one, 'demo', CAPTURED);
  assert.equal(objects[0].file, 'Foo_Bar.json');
  assert.equal(objects[0].schema.$id, 'demo/Foo_Bar');
});
