import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildManifest } from '../src/manifest.js';
import { loadAdaptors } from '../src/adaptors.js';
import { manifestPath } from '../src/paths.js';
import { readFileSync } from 'node:fs';
import type { AdaptorInfo } from '../src/adaptors.js';

// buildEntry/buildManifest read files from disk via the path helpers, so we
// exercise them against the real shipped registry and assert structural
// invariants rather than mocking the filesystem.
const infos: AdaptorInfo[] = [
  { name: 'asana', npm: '@openfn/language-asana', rest: true },
  { name: 'postgresql', npm: '@openfn/language-postgresql', rest: false, note: 'SQL database (protocol adaptor, not REST)' },
];

test('buildManifest totals are internally consistent', () => {
  const m = buildManifest(infos);
  assert.equal(m.totals.adaptors, 2);
  assert.equal(m.totals.withOpenapi, m.adaptors.filter((e) => e.hasOpenapi).length);
  assert.equal(m.totals.withDataSchemas, m.adaptors.filter((e) => e.hasDataSchemas).length);
  const sumObjects = m.adaptors.reduce((n, e) => n + (e.dataObjects ?? 0), 0);
  assert.equal(m.totals.dataObjects, sumObjects);
  const byOriginSum = Object.values(m.totals.byOrigin).reduce((a, b) => a + b, 0);
  assert.equal(byOriginSum, m.adaptors.filter((e) => e.origin).length);
});

test('a REST adaptor entry carries operation/schema/object counts', () => {
  const m = buildManifest(infos);
  const asana = m.adaptors.find((e) => e.adaptor === 'asana')!;
  assert.equal(asana.hasOpenapi, true);
  assert.equal(asana.hasDataSchemas, true);
  assert.ok((asana.operations ?? 0) > 0);
  assert.ok((asana.dataObjects ?? 0) > 0);
  assert.ok(asana.origin);
});

test('a non-REST adaptor keeps its note', () => {
  const m = buildManifest(infos);
  const pg = m.adaptors.find((e) => e.adaptor === 'postgresql')!;
  assert.equal(pg.rest, false);
  assert.match(pg.note ?? '', /protocol adaptor/);
});

test('buildManifest is a pure function of the registry (no wall-clock churn)', () => {
  // manifest.json is a committed derived artifact: two builds of the same
  // on-disk state must be byte-identical, or every rebuild dirties the file.
  const a = JSON.stringify(buildManifest(infos), null, 2);
  const b = JSON.stringify(buildManifest(infos), null, 2);
  assert.equal(a, b);
  assert.ok(!a.includes('generatedAt'), 'manifest must not carry a build timestamp');
});

test('dataUpdatedAt is the freshest lastCheckedAt/capturedAt in the manifest', () => {
  const m = buildManifest(infos);
  const dates = m.adaptors
    .map((e) => e.lastCheckedAt ?? e.capturedAt)
    .filter((d): d is string => Boolean(d))
    .sort();
  assert.equal(m.dataUpdatedAt, dates[dates.length - 1]);
});

test('the committed manifest.json matches a fresh rebuild', async () => {
  // Guards the "rebuild the index" step of the loop (AGENTS.md step 8): if a
  // spec changed without `pnpm specs manifest` being re-run, this fails.
  const committed = readFileSync(manifestPath(), 'utf8');
  const rebuilt = JSON.stringify(buildManifest(await loadAdaptors()), null, 2) + '\n';
  assert.equal(rebuilt, committed, 'manifest.json is stale — run `pnpm specs manifest`');
});
