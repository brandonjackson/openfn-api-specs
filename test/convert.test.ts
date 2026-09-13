import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  buildOpenapi,
  capture,
  contentHash,
  detect,
  parseSpec,
  staleUpstreams,
} from '../src/convert.js';
import { countOperations } from '../src/util.js';

/**
 * The capture step's contract (AGENTS.md rule 2): the upstream bytes are
 * committed byte-for-byte and the recorded `contentHash` describes exactly those
 * bytes. These tests run entirely offline — `capture()` takes pre-fetched bytes —
 * so they gate the behaviour without reaching the network.
 */

const OPENAPI_31 = JSON.stringify({
  openapi: '3.1.0',
  info: { title: 'Demo', version: '1.0' },
  paths: { '/things': { get: { responses: { 200: { description: 'OK' } } } } },
});

const SWAGGER = JSON.stringify({
  swagger: '2.0',
  info: { title: 'Demo', version: '1.0' },
  host: 'demo.test',
  paths: { '/things': { get: { operationId: 'listThings', responses: { 200: { description: 'OK' } } } } },
});

const DISCOVERY = JSON.stringify({
  kind: 'discovery#restDescription',
  name: 'demo',
  version: 'v1',
  title: 'Demo',
  baseUrl: 'https://demo.googleapis.com/',
  resources: { things: { methods: { list: { id: 'demo.things.list', path: 'v1/things', httpMethod: 'GET' } } } },
});

test('detect maps each upstream format to the origin AGENTS.md prescribes', () => {
  assert.deepEqual(detect(JSON.parse(OPENAPI_31), 'json'), {
    kind: 'openapi',
    format: 'openapi-3.1',
    origin: 'found-openapi',
    ext: 'json',
  });
  assert.equal(detect({ openapi: '3.0.3' }, 'yaml').format, 'openapi-3.0');
  assert.deepEqual(detect(JSON.parse(SWAGGER), 'json'), {
    kind: 'swagger',
    format: 'swagger-2.0',
    origin: 'converted',
    ext: 'json',
  });
  assert.equal(detect(JSON.parse(DISCOVERY), 'json').origin, 'converted');
});

test('detect rejects anything that is not a spec we can serve', () => {
  assert.throws(() => detect({ swagger: '1.2' }, 'json'), /Unrecognised upstream spec/);
  assert.throws(() => detect({}, 'json'), /Unrecognised upstream spec/);
});

test('parseSpec reads JSON, and falls back to YAML', async () => {
  assert.deepEqual(await parseSpec(OPENAPI_31), { doc: JSON.parse(OPENAPI_31), ext: 'json' });
  const { doc, ext } = await parseSpec('openapi: 3.1.0\ninfo:\n  title: Demo\n  version: "1.0"\npaths: {}\n');
  assert.equal(ext, 'yaml');
  assert.equal(doc.openapi, '3.1.0');
  assert.equal(doc.info.title, 'Demo');
});

test('an OpenAPI 3.x upstream passes through, gaining only the adaptor stamp', () => {
  const upstream = JSON.parse(OPENAPI_31);
  const { openapi } = buildOpenapi(upstream, 'demo', 'json');
  assert.equal(openapi.info['x-openfn-adaptor'], 'demo');
  assert.equal(openapi.openapi, '3.1.0');
  // The stamp must not leak into the parse of the verbatim upstream, which is
  // what gets hashed and committed.
  assert.equal(upstream.info['x-openfn-adaptor'], undefined);
});

test('countOperations counts path+method pairs', () => {
  assert.equal(countOperations(JSON.parse(OPENAPI_31)), 1);
  assert.equal(countOperations({ paths: { '/a': { get: {}, post: {}, parameters: [] }, '/b': { put: {} } } }), 3);
  assert.equal(countOperations({}), 0);
});

test('capture commits the bytes verbatim and hashes exactly what it wrote', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'capture-'));
  const result = await capture({
    adaptor: 'demo',
    specUrl: 'https://demo.test/openapi.json',
    upstreamBase: join(dir, 'upstream'),
    openapiTarget: join(dir, 'openapi.json'),
    today: '2026-09-03',
    bytes: OPENAPI_31,
  });

  assert.equal(result.upstreamPath, join(dir, 'upstream.json'));
  const written = readFileSync(result.upstreamPath, 'utf8');
  assert.equal(written, OPENAPI_31, 'upstream is written byte-for-byte, not reserialised');
  assert.equal(result.contentHash, contentHash(written));
  assert.equal(result.upstream.contentHash, result.contentHash);
  assert.equal(result.upstream.fetchedAt, '2026-09-03');
  assert.equal(result.upstream.format, 'openapi-3.1');
  assert.equal(result.operations, 1);

  const served = JSON.parse(readFileSync(join(dir, 'openapi.json'), 'utf8'));
  assert.equal(served.info['x-openfn-adaptor'], 'demo');
});

test('a YAML upstream keeps its .yaml extension and its original bytes', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'capture-yaml-'));
  const yaml = 'swagger: "2.0"\ninfo:\n  title: Demo\n  version: "1.0"\nhost: demo.test\npaths: {}\n';
  const result = await capture({
    adaptor: 'demo',
    specUrl: 'https://demo.test/swagger.yaml',
    upstreamBase: join(dir, 'upstream'),
    openapiTarget: join(dir, 'openapi.json'),
    today: '2026-09-03',
    bytes: yaml,
  });
  assert.equal(result.upstreamPath, join(dir, 'upstream.yaml'));
  assert.equal(readFileSync(result.upstreamPath, 'utf8'), yaml);
  assert.equal(result.detected.origin, 'converted');
  assert.equal(JSON.parse(readFileSync(join(dir, 'openapi.json'), 'utf8')).openapi, '3.0.3');
});

test('staleUpstreams finds the leftovers a format change would shadow', () => {
  const dir = mkdtempSync(join(tmpdir(), 'stale-'));
  writeFileSync(join(dir, 'upstream.json'), '{}');
  writeFileSync(join(dir, 'upstream.yaml'), '{}');
  assert.deepEqual(staleUpstreams(join(dir, 'upstream'), 'yaml'), [join(dir, 'upstream.json')]);
  assert.deepEqual(staleUpstreams(join(dir, 'upstream'), 'json'), [join(dir, 'upstream.yaml')]);
});
