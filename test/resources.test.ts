import { test } from 'node:test';
import assert from 'node:assert/strict';
import { refName, responseResourceNames } from '../src/resources.js';

/** Build a minimal spec with one GET / whose 200 json schema is `responseSchema`. */
function specWith(responseSchema: any, schemas: Record<string, any>) {
  return {
    openapi: '3.0.3',
    paths: { '/x': { get: { operationId: 'x', responses: { '200': { content: { 'application/json': { schema: responseSchema } } } } } } },
    components: { schemas },
  };
}

test('refName extracts a component name, else undefined', () => {
  assert.equal(refName({ $ref: '#/components/schemas/Patient' }), 'Patient');
  assert.equal(refName({ $ref: '#/components/parameters/Foo' }), undefined);
  assert.equal(refName({ type: 'string' }), undefined);
  assert.equal(refName(null), undefined);
});

test('a direct $ref response is the resource', () => {
  const spec = specWith({ $ref: '#/components/schemas/Thing' }, { Thing: { type: 'object' } });
  assert.deepEqual([...responseResourceNames(spec)], ['Thing']);
});

test('an array-of-$ref response unwraps to the item resource', () => {
  const spec = specWith(
    { type: 'array', items: { $ref: '#/components/schemas/Thing' } },
    { Thing: { type: 'object' } }
  );
  assert.deepEqual([...responseResourceNames(spec)], ['Thing']);
});

test('a well-known envelope key (data: [ $ref ]) unwraps to the inner resource', () => {
  const spec = specWith(
    { $ref: '#/components/schemas/ThingList' },
    {
      ThingList: { type: 'object', properties: { data: { type: 'array', items: { $ref: '#/components/schemas/Thing' } } } },
      Thing: { type: 'object' },
    }
  );
  // The wrapper is plumbing; only the inner resource counts.
  assert.deepEqual([...responseResourceNames(spec)], ['Thing']);
});

test('a paginated wrapper with a resource-named array (DHIS2 style) unwraps', () => {
  const spec = specWith(
    { $ref: '#/components/schemas/OrgUnitPage' },
    {
      OrgUnitPage: {
        type: 'object',
        properties: {
          pager: { type: 'object' },
          organisationUnits: { type: 'array', items: { $ref: '#/components/schemas/OrganisationUnit' } },
        },
      },
      OrganisationUnit: { type: 'object' },
    }
  );
  assert.deepEqual([...responseResourceNames(spec)], ['OrganisationUnit']);
});

test('an object with an array property but no pagination hint stays the resource', () => {
  const spec = specWith(
    { $ref: '#/components/schemas/Thing' },
    {
      Thing: { type: 'object', properties: { tags: { type: 'array', items: { $ref: '#/components/schemas/Tag' } } } },
      Tag: { type: 'object' },
    }
  );
  // Not a list wrapper: Thing is the resource; Tag is only a nested type.
  assert.deepEqual([...responseResourceNames(spec)], ['Thing']);
});

test('inline-only responses fall back to every component schema', () => {
  const spec = specWith({ type: 'object', properties: { ok: { type: 'boolean' } } }, { A: { type: 'object' }, B: { type: 'object' } });
  assert.deepEqual([...responseResourceNames(spec)].sort(), ['A', 'B']);
});

test('refs to non-existent components are dropped', () => {
  const spec = specWith({ $ref: '#/components/schemas/Ghost' }, { Real: { type: 'object' } });
  // Ghost isn't a component, and there are no resolvable resources, so we fall
  // back to all component schemas.
  assert.deepEqual([...responseResourceNames(spec)], ['Real']);
});
