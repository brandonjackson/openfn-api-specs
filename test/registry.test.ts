import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { registryRoot, openapiPath, sourcePath, dataSchemasDir, dataSchemasIndexPath } from '../src/paths.js';
import { extractDataObjects } from '../src/data-objects.js';

/**
 * Registry-wide invariants over the shipped specs. This is the standing gate
 * that CI runs on every change: it re-derives the data-schemas from each
 * openapi.json and asserts they match what is committed (no silent drift), that
 * every sibling `$ref` resolves, that provenance is well-formed, and that the
 * OpenAPI docs have the required shape.
 */

const ROOT = registryRoot();
const ORIGINS = new Set(['found-openapi', 'converted', 'generated', 'synthesized']);

/** Adaptor directories that actually ship an openapi.json. */
const adaptors = existsSync(ROOT)
  ? readdirSync(ROOT)
      .filter((n) => statSync(join(ROOT, n)).isDirectory())
      .filter((n) => existsSync(openapiPath(n)))
      .sort()
  : [];

const readJson = (p: string) => JSON.parse(readFileSync(p, 'utf8'));

test('the registry root resolves and ships adaptors', () => {
  assert.ok(existsSync(ROOT), `registry root not found at ${ROOT}`);
  assert.ok(adaptors.length > 0, 'no adaptors with openapi.json found');
});

test('every openapi.json is valid JSON with the required top-level shape', () => {
  const bad: string[] = [];
  for (const a of adaptors) {
    try {
      const doc = readJson(openapiPath(a));
      if (typeof doc.openapi !== 'string' || !/^3\./.test(doc.openapi)) bad.push(`${a}: openapi != 3.x`);
      if (!doc.info || typeof doc.info.title !== 'string') bad.push(`${a}: missing info.title`);
      if (!doc.paths || typeof doc.paths !== 'object') bad.push(`${a}: missing paths`);
    } catch (e) {
      bad.push(`${a}: unparseable (${(e as Error).message})`);
    }
  }
  assert.deepEqual(bad, [], `malformed OpenAPI docs:\n  ${bad.join('\n  ')}`);
});

test('every source.json has well-formed provenance', () => {
  const bad: string[] = [];
  for (const a of adaptors) {
    if (!existsSync(sourcePath(a))) {
      bad.push(`${a}: no source.json`);
      continue;
    }
    const s = readJson(sourcePath(a));
    if (s.adaptor !== a) bad.push(`${a}: source.adaptor="${s.adaptor}" != dir`);
    if (!ORIGINS.has(s.origin)) bad.push(`${a}: bad origin "${s.origin}"`);
    if (typeof s.upstreamFormat !== 'string' || !s.upstreamFormat) bad.push(`${a}: empty upstreamFormat`);
    if (!Array.isArray(s.sources) || s.sources.length === 0) bad.push(`${a}: empty sources[]`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.capturedAt ?? '')) bad.push(`${a}: bad capturedAt "${s.capturedAt}"`);
  }
  assert.deepEqual(bad, [], `provenance problems:\n  ${bad.join('\n  ')}`);
});

test('committed data-schemas match a fresh extraction (no drift)', () => {
  const drifted: string[] = [];
  for (const a of adaptors) {
    const indexPath = dataSchemasIndexPath(a);
    if (!existsSync(indexPath)) {
      drifted.push(`${a}: no data-schemas/index.json`);
      continue;
    }
    const committedIndex = readJson(indexPath);
    // Re-extract with the committed capturedAt so timestamps compare equal.
    const { objects, index } = extractDataObjects(readJson(openapiPath(a)), a, committedIndex.capturedAt);

    // Index matches.
    if (JSON.stringify(index) !== JSON.stringify(committedIndex)) drifted.push(`${a}: index.json differs`);

    // File set matches (no stragglers, nothing missing).
    const onDisk = readdirSync(dataSchemasDir(a)).filter((f) => f.endsWith('.json') && f !== 'index.json').sort();
    const fresh = objects.map((o) => o.file).sort();
    if (JSON.stringify(onDisk) !== JSON.stringify(fresh)) {
      drifted.push(`${a}: file set differs (disk=${onDisk.length}, fresh=${fresh.length})`);
      continue;
    }

    // Each committed schema body matches the freshly extracted one.
    for (const obj of objects) {
      const committed = readJson(join(dataSchemasDir(a), obj.file));
      if (JSON.stringify(committed) !== JSON.stringify(obj.schema)) drifted.push(`${a}/${obj.file}: body differs`);
    }
  }
  assert.deepEqual(drifted, [], `data-schemas drift (run \`pnpm specs data-objects --all\`):\n  ${drifted.join('\n  ')}`);
});

test('every sibling $ref in a data-schema resolves to a file that exists', () => {
  const dangling: string[] = [];
  for (const a of adaptors) {
    const dir = dataSchemasDir(a);
    if (!existsSync(dir)) continue;
    const files = new Set(readdirSync(dir).filter((f) => f.endsWith('.json')));
    for (const f of files) {
      if (f === 'index.json') continue;
      const doc = readJson(join(dir, f));
      const walk = (n: any) => {
        if (n && typeof n === 'object') {
          const ref = n.$ref;
          if (typeof ref === 'string' && !ref.startsWith('#') && ref.endsWith('.json')) {
            const target = ref.split('/').pop()!;
            if (!files.has(target)) dangling.push(`${a}/${f} -> ${ref}`);
          }
          for (const v of Object.values(n)) walk(v);
        }
      };
      walk(doc);
    }
  }
  assert.deepEqual(dangling, [], `dangling sibling refs:\n  ${dangling.join('\n  ')}`);
});

test('every data-object schema declares the 2020-12 dialect and identity', () => {
  const bad: string[] = [];
  for (const a of adaptors) {
    const dir = dataSchemasDir(a);
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'index.json')) {
      const doc = readJson(join(dir, f));
      if (doc.$schema !== 'https://json-schema.org/draft/2020-12/schema') bad.push(`${a}/${f}: wrong $schema`);
      if (doc['x-openfn-adaptor'] !== a) bad.push(`${a}/${f}: wrong x-openfn-adaptor`);
      if (typeof doc.$id !== 'string') bad.push(`${a}/${f}: missing $id`);
    }
  }
  assert.deepEqual(bad, [], `identity problems:\n  ${bad.join('\n  ')}`);
});
