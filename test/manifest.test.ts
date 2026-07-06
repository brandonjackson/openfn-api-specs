import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildManifest } from '../src/manifest.js';
import type { AdaptorInfo } from '../src/adaptors.js';

// buildEntry/buildManifest read files from disk via the path helpers, so we
// exercise them against the real shipped registry and assert structural
// invariants rather than mocking the filesystem.
const infos: AdaptorInfo[] = [
  { name: 'asana', npm: '@openfn/language-asana', rest: true },
  { name: 'postgresql', npm: '@openfn/language-postgresql', rest: false, note: 'SQL database (protocol adaptor, not REST)' },
];

test('buildManifest totals are internally consistent', () => {
  const m = buildManifest(infos, '2026-01-01T00:00:00.000Z');
  assert.equal(m.totals.adaptors, 2);
  assert.equal(m.totals.withOpenapi, m.adaptors.filter((e) => e.hasOpenapi).length);
  assert.equal(m.totals.withDataSchemas, m.adaptors.filter((e) => e.hasDataSchemas).length);
  const sumObjects = m.adaptors.reduce((n, e) => n + (e.dataObjects ?? 0), 0);
  assert.equal(m.totals.dataObjects, sumObjects);
  const byOriginSum = Object.values(m.totals.byOrigin).reduce((a, b) => a + b, 0);
  assert.equal(byOriginSum, m.adaptors.filter((e) => e.origin).length);
});

test('a REST adaptor entry carries operation/schema/object counts', () => {
  const m = buildManifest(infos, '2026-01-01T00:00:00.000Z');
  const asana = m.adaptors.find((e) => e.adaptor === 'asana')!;
  assert.equal(asana.hasOpenapi, true);
  assert.equal(asana.hasDataSchemas, true);
  assert.ok((asana.operations ?? 0) > 0);
  assert.ok((asana.dataObjects ?? 0) > 0);
  assert.ok(asana.origin);
});

test('a non-REST adaptor keeps its note', () => {
  const m = buildManifest(infos, '2026-01-01T00:00:00.000Z');
  const pg = m.adaptors.find((e) => e.adaptor === 'postgresql')!;
  assert.equal(pg.rest, false);
  assert.match(pg.note ?? '', /protocol adaptor/);
});
