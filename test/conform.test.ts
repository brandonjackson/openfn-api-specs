import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import {
  createConformer,
  formatConformanceReport,
  normalizePath,
  parseExchangesJsonl,
  serverPathPrefixes,
  toExchangesJsonl,
  trailingSubPaths,
  type Exchange,
} from '../src/conform.js';
import { adaptorDir, openapiPath } from '../src/paths.js';

/** A small OpenAPI 3.0 doc with a templated server prefix, refs, nullable, and a range status. */
const doc = {
  openapi: '3.0.3',
  info: { title: 't', version: '1' },
  servers: [{ url: 'https://api.example.com/a/{domain}', variables: { domain: { default: 'demo' } } }],
  paths: {
    '/things': {
      get: {
        responses: {
          '200': { content: { 'application/json': { schema: { $ref: '#/components/schemas/ThingList' } } } },
          '4XX': { content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } } },
        },
      },
      post: {
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/NewThing' } } } },
        responses: {
          '201': { content: { 'application/json': { schema: { $ref: '#/components/schemas/Thing' } } } },
        },
      },
    },
    '/things/{id}': {
      get: {
        responses: {
          '200': { content: { 'application/json': { schema: { $ref: '#/components/schemas/Thing' } } } },
          default: { content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } } },
        },
      },
    },
    '/things/special': {
      get: { responses: { '200': { content: { 'application/json': { schema: { type: 'object', required: ['special'] } } } } } },
    },
    '/files/{id}.csv': {
      get: { responses: { '200': { content: { 'text/csv': { schema: { type: 'string' } } } } } },
    },
  },
  components: {
    schemas: {
      Thing: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          deletedAt: { type: 'string', format: 'date-time', nullable: true },
          size: { type: 'integer', minimum: 0, exclusiveMinimum: true },
          kind: { type: 'string', format: 'vendor-kind' },
        },
      },
      NewThing: { type: 'object', required: ['name'], properties: { name: { type: 'string' } } },
      ThingList: {
        type: 'object',
        required: ['data'],
        properties: { data: { type: 'array', items: { $ref: '#/components/schemas/Thing' } } },
      },
      Error: { type: 'object', required: ['message'], properties: { message: { type: 'string' } } },
    },
  },
};

const ok: Exchange = {
  method: 'GET',
  path: '/things/abc?fields=id',
  status: 200,
  responseBody: { id: 'abc', name: 'A', deletedAt: null, size: 1, kind: 'anything' },
};

test('normalizePath strips query, fragment and trailing slash', () => {
  assert.equal(normalizePath('/api/things/?x=1#f'), '/api/things');
  assert.equal(normalizePath('api/things'), '/api/things');
  assert.equal(normalizePath('/'), '/');
});

test('serverPathPrefixes keeps template variables and handles bare hosts', () => {
  assert.deepEqual(serverPathPrefixes(doc), ['/a/{domain}']);
  assert.deepEqual(serverPathPrefixes({ servers: [{ url: 'http://localhost:4010' }] }), ['']);
  assert.deepEqual(serverPathPrefixes({ servers: [{ url: 'https://{tenant}.example.com/v2/' }] }), ['/v2']);
  assert.deepEqual(serverPathPrefixes({}), []);
});

test('match resolves concrete paths to templates, bare or behind a server prefix', () => {
  const c = createConformer(doc);
  assert.equal(c.match('get', '/things')?.path, '/things');
  assert.equal(c.match('GET', '/things/abc')?.path, '/things/{id}');
  assert.equal(c.match('GET', '/a/demo/things/abc')?.path, '/things/{id}');
  assert.equal(c.match('GET', '/things/special')?.path, '/things/special', 'literal beats param');
  assert.equal(c.match('GET', '/files/report.csv')?.path, '/files/{id}.csv', 'embedded param');
  assert.equal(c.match('DELETE', '/things/abc'), undefined);
  assert.equal(c.match('GET', '/nothing'), undefined);
});

test('trailingSubPaths enumerates the base-URL absorptions of a server path', () => {
  assert.deepEqual(trailingSubPaths('/openmrs/ws/rest/v1'), ['/openmrs/ws/rest/v1', '/ws/rest/v1', '/rest/v1', '/v1']);
  assert.deepEqual(trailingSubPaths(''), ['']);
});

test('a base URL that absorbs part of the server path still matches', () => {
  const spec = {
    openapi: '3.0.3',
    servers: [{ url: 'https://demo.openmrs.org/openmrs/ws/rest/v1' }],
    paths: { '/patient': { get: { responses: { '200': { description: 'ok' } } } } },
  };
  const c = createConformer(spec);
  assert.equal(c.match('GET', '/openmrs/ws/rest/v1/patient')?.path, '/patient');
  assert.equal(c.match('GET', '/ws/rest/v1/patient')?.path, '/patient');
  assert.equal(c.match('GET', '/patient')?.path, '/patient');
  assert.equal(c.match('GET', '/v2/patient'), undefined);
});

test('an extra serverPrefixes option matches a mounted API', () => {
  const c = createConformer(doc, { serverPrefixes: ['/mock/'] });
  assert.equal(c.match('GET', '/mock/things/abc')?.path, '/things/{id}');
});

test('a conforming exchange yields no violations and counts toward coverage', () => {
  const c = createConformer(doc);
  assert.deepEqual(c.check(ok), []);
  const cov = c.coverage();
  assert.deepEqual(cov.hit, ['GET /things/{id}']);
  assert.equal(cov.exchanges, 1);
  assert.deepEqual(cov.unmatched, []);
  assert.ok(cov.missed.includes('POST /things'));
});

test('response-schema violations carry the operation, pointer and a readable message', () => {
  const c = createConformer(doc);
  const v = c.check({
    method: 'GET',
    path: '/things',
    status: 200,
    responseBody: { data: [{ id: 1, name: 'x' }, { id: 'ok' }] },
  });
  const kinds = v.map((x) => x.kind);
  assert.ok(kinds.every((k) => k === 'response-schema'));
  assert.ok(v.some((x) => x.pointer === '/data/0/id' && x.message === 'must be string'));
  assert.ok(v.some((x) => x.pointer === '/data/1' && x.message === "missing required property 'name'"));
  assert.equal(v[0].operation, 'GET /things');
  assert.equal(v[0].exchange, 'GET /things');
});

test('nullable and boolean exclusiveMinimum are honoured after rewriting', () => {
  const c = createConformer(doc);
  assert.deepEqual(c.check({ ...ok, responseBody: { id: 'a', name: 'n', deletedAt: null } }), []);
  const v = c.check({ ...ok, responseBody: { id: 'a', name: 'n', size: 0 } });
  assert.equal(v.length, 1);
  assert.equal(v[0].pointer, '/size');
});

test('unknown vendor formats pass; ignoreFormats disables a known one', () => {
  const strict = createConformer(doc);
  const bad = { id: 'a', name: 'n', deletedAt: 'not-a-date' };
  assert.equal(strict.check({ ...ok, responseBody: bad }).length, 1, 'date-time enforced by default');
  const lax = createConformer(doc, { ignoreFormats: ['date-time'] });
  assert.deepEqual(lax.check({ ...ok, responseBody: bad }), []);
});

test('status resolution: exact, then range, then default, else unknown-status', () => {
  const c = createConformer(doc);
  assert.deepEqual(c.check({ method: 'GET', path: '/things', status: 404, responseBody: { message: 'nope' } }), [], '4XX range');
  assert.deepEqual(c.check({ method: 'GET', path: '/things/x', status: 500, responseBody: { message: 'boom' } }), [], 'default');
  const v = c.check({ method: 'GET', path: '/things', status: 500, responseBody: {} });
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, 'unknown-status');
});

test('unknown operations are reported once and listed as unmatched', () => {
  const c = createConformer(doc);
  const v = c.check({ method: 'PUT', path: '/things/1', status: 200, responseBody: {} });
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, 'unknown-operation');
  assert.deepEqual(c.coverage().unmatched, ['PUT /things/1']);
});

test('request bodies are checked unless checkRequests is off', () => {
  const ex: Exchange = { method: 'POST', path: '/things', status: 201, requestBody: {}, responseBody: { id: 'a', name: 'b' } };
  const on = createConformer(doc).check(ex);
  assert.equal(on.length, 1);
  assert.equal(on[0].kind, 'request-schema');
  assert.deepEqual(createConformer(doc, { checkRequests: false }).check(ex), []);
});

test('strictAdditional flags fields the spec does not list; default tolerates them', () => {
  const body = { id: 'a', name: 'b', extra: true };
  assert.deepEqual(createConformer(doc).check({ ...ok, responseBody: body }), []);
  const v = createConformer(doc, { strictAdditional: true }).check({ ...ok, responseBody: body });
  assert.equal(v.length, 1);
  assert.equal(v[0].message, "unexpected property 'extra'");
});

test('non-JSON responses and bodiless exchanges are not schema-checked', () => {
  const c = createConformer(doc);
  assert.deepEqual(c.check({ method: 'GET', path: '/files/x.csv', status: 200, responseBody: 'a,b', contentType: 'text/csv' }), []);
  assert.deepEqual(c.check({ method: 'GET', path: '/things/abc', status: 200 }), []);
  assert.deepEqual(c.check({ ...ok, contentType: 'application/pdf', responseBody: 'garbage' }), []);
});

test('JSONL round-trips and rejects malformed lines with a line number', () => {
  const text = toExchangesJsonl([ok, { method: 'GET', path: '/things', status: 200 }]);
  assert.equal(text.split('\n').filter(Boolean).length, 2);
  assert.deepEqual(parseExchangesJsonl(text), [ok, { method: 'GET', path: '/things', status: 200 }]);
  assert.throws(() => parseExchangesJsonl('{"method":"GET"}'), /line 1/);
  assert.throws(() => parseExchangesJsonl('\n\nnot json'), /line 3/);
});

test('formatConformanceReport groups by operation and summarises coverage', () => {
  const c = createConformer(doc);
  const v = c.checkAll([ok, { method: 'GET', path: '/things', status: 200, responseBody: {} }]);
  const report = formatConformanceReport(v, c.coverage());
  assert.match(report, /1 violation\(s\) across 2 exchange\(s\)/);
  assert.match(report, /GET \/things\n\s+\[response-schema\]: missing required property 'data'/);
  assert.match(report, /Coverage: 2\/5 spec operation\(s\) exercised/);
});

test('works against a committed spec (dhis2): matches behind a mount, ignores query strings', () => {
  const spec = JSON.parse(readFileSync(openapiPath('dhis2'), 'utf8'));
  const c = createConformer(spec, { serverPrefixes: ['/dhis2'] });
  const op = c.match('GET', '/dhis2/api/organisationUnits/abc123?fields=id,name');
  assert.match(op?.path ?? '', /^\/api\/organisationUnits\/\{\w+\}$/);
  assert.equal(c.match('GET', '/api/organisationUnits/')?.path.replace(/\/$/, ''), '/api/organisationUnits');
  assert.ok(c.operations().length >= 10);
  const kinds = new Set(['unknown-operation', 'unknown-status', 'response-schema', 'request-schema', 'schema-error']);
  const v = c.check({ method: 'GET', path: '/api/organisationUnits', status: 200, responseBody: { organisationUnits: 'not-an-array' } });
  assert.ok(v.every((x) => kinds.has(x.kind) && x.kind !== 'schema-error'));
});

test('generator-only template keys with a fragment never shadow the real path', () => {
  const spec = {
    openapi: '3.0.3',
    paths: {
      '/things/': { get: { responses: { '200': { content: { 'application/json': { schema: { type: 'object', required: ['a'] } } } } } } },
      '/things/#asCsv': { get: { responses: { '200': { content: { 'text/csv': { schema: { type: 'string' } } } } } } },
    },
  };
  const c = createConformer(spec);
  assert.equal(c.match('GET', '/things')?.path, '/things/');
  assert.equal(c.match('GET', '/things#asCsv')?.path, '/things/');
  const v = c.check({ method: 'GET', path: '/things', status: 200, responseBody: {} });
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, 'response-schema');
});

test('non-JSON type names and JS-incompatible patterns are dropped, not fatal', () => {
  const spec = {
    openapi: '3.0.3',
    paths: {
      '/x': {
        get: {
          responses: {
            '200': {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      a: { type: 'any' },
                      b: { type: ['any', 'string'] },
                      c: { type: 'string', pattern: '^(?i)(?<lang>[a-z]{2})$' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  const c = createConformer(spec);
  assert.deepEqual(c.check({ method: 'GET', path: '/x', status: 200, responseBody: { a: 1, b: 'ok', c: 'EN' } }), []);
  const v = c.check({ method: 'GET', path: '/x', status: 200, responseBody: { b: 5 } });
  assert.equal(v.length, 1);
  assert.equal(v[0].pointer, '/b');
});

test('every committed spec compiles its response schemas without error', () => {
  // A schema-error on any operation means the spec has a $ref or keyword Ajv
  // cannot take, which pnpm test's dangling-ref check should already prevent.
  const root = adaptorDir('dhis2').replace(/\/dhis2$/, '');
  const failures: string[] = [];
  for (const name of readdirSync(root)) {
    const p = openapiPath(name);
    if (!existsSync(p)) continue;
    const spec = JSON.parse(readFileSync(p, 'utf8'));
    const c = createConformer(spec);
    for (const key of c.operations()) {
      const [method, path] = key.split(' ');
      // A probe with an empty object body: only schema-error kinds are interesting here.
      const v = c.check({ method, path: path.replace(/\{[^}]+\}/g, 'x'), status: 200, responseBody: {} });
      for (const x of v) if (x.kind === 'schema-error') failures.push(`${name}: ${x.message}`);
    }
  }
  assert.deepEqual(failures, []);
});
