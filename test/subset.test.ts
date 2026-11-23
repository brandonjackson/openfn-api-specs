import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { deriveSubset, keepsPath } from '../src/subset.js';
import { openapiPath, registryRoot, sourcePath } from '../src/paths.js';
import type { SpecSource, SubsetRule } from '../src/types.js';

const rule: SubsetRule = { resources: ['users', 'drives'], maxSegments: 3, include: ['/me'], title: 'Narrowed', note: 'why' };

const full = {
  openapi: '3.0.4',
  info: { title: 'Full', version: '1' },
  tags: [{ name: 'users' }],
  paths: {
    '/me': { get: { responses: { '200': { $ref: '#/components/responses/user' } } } },
    '/users': { get: { responses: { '200': { description: 'ok' } } }, post: { requestBody: { $ref: '#/components/requestBodies/newUser' }, responses: {} } },
    '/users/{id}/manager': { get: { responses: {} } },
    '/users/{id}/manager/ref/deep': { get: { responses: {} } },
    "/users(userPrincipalName='{upn}')": { get: { responses: {} } },
    '/print/printers': { get: { responses: { '200': { $ref: '#/components/responses/printer' } } } },
  },
  components: {
    responses: {
      user: { description: 'u', content: { 'application/json': { schema: { $ref: '#/components/schemas/user' } } } },
      printer: { description: 'p', content: { 'application/json': { schema: { $ref: '#/components/schemas/printer' } } } },
    },
    requestBodies: { newUser: { content: { 'application/json': { schema: { $ref: '#/components/schemas/user' } } } } },
    schemas: {
      entity: { type: 'object' },
      user: { allOf: [{ $ref: '#/components/schemas/entity' }, { properties: { manager: { $ref: '#/components/schemas/user' } } }] },
      printer: { allOf: [{ $ref: '#/components/schemas/entity' }] },
    },
    securitySchemes: { oauth: { type: 'oauth2' } },
  },
};

test('keepsPath: exact first segment, depth limit, explicit includes', () => {
  assert.ok(keepsPath('/me', rule));
  assert.ok(keepsPath('/users/{id}/manager', rule));
  assert.ok(!keepsPath('/users/{id}/manager/ref/deep', rule), 'deeper than maxSegments');
  assert.ok(!keepsPath("/users(userPrincipalName='{upn}')", rule), 'an OData alternate key is not the resource');
  assert.ok(!keepsPath('/print/printers', rule));
});

test('deriveSubset keeps paths verbatim and reduces components to the $ref closure', () => {
  const before = JSON.stringify(full);
  const { openapi, paths, operations } = deriveSubset(full, rule);
  assert.equal(JSON.stringify(full), before, 'input untouched');
  assert.deepEqual(Object.keys(openapi.paths), ['/me', '/users', '/users/{id}/manager']);
  assert.equal(paths, 3);
  assert.equal(operations, 4);
  assert.deepEqual(openapi.paths['/users'], full.paths['/users']);
  assert.deepEqual(Object.keys(openapi.components.schemas), ['entity', 'user'], 'transitive, recursive refs; printer dropped');
  assert.deepEqual(Object.keys(openapi.components.responses), ['user']);
  assert.deepEqual(Object.keys(openapi.components.requestBodies), ['newUser']);
  assert.deepEqual(Object.keys(openapi.components.securitySchemes), ['oauth']);
  assert.equal(openapi.info.title, 'Narrowed');
  assert.equal(openapi.info['x-openfn-subset-note'], 'why');
  assert.deepEqual(openapi.tags, full.tags);
});

test('every adaptor with a subsetRule serves only paths the rule keeps', () => {
  const root = registryRoot();
  const bad: string[] = [];
  for (const a of readdirSync(root).filter((n) => statSync(join(root, n)).isDirectory())) {
    if (!existsSync(sourcePath(a)) || !existsSync(openapiPath(a))) continue;
    const src = JSON.parse(readFileSync(sourcePath(a), 'utf8')) as SpecSource;
    if (!src.subsetRule) continue;
    if (src.coverage !== 'subset') bad.push(`${a}: subsetRule without coverage: subset`);
    const doc = JSON.parse(readFileSync(openapiPath(a), 'utf8'));
    for (const p of Object.keys(doc.paths ?? {})) if (!keepsPath(p, src.subsetRule)) bad.push(`${a}: ${p} is outside its subsetRule`);
  }
  assert.deepEqual(bad, []);
});
