import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classify, report } from '../src/report.js';
import type { AdaptorInfo } from '../src/adaptors.js';

const NOW = new Date('2026-07-06T00:00:00Z');
const info = (name: string): AdaptorInfo => ({ name, npm: `@openfn/language-${name}`, rest: true });

// classify() reads real files, so we exercise it against the shipped registry
// and against known-absent adaptors for the synthetic buckets.

test('a nonexistent adaptor dir is "new"', () => {
  const r = classify(info('definitely-not-an-adaptor-xyz'), NOW, 90);
  assert.equal(r.status, 'new');
});

test('a found-openapi spec is complete by definition (vendor gold standard)', () => {
  // asana is origin=found-openapi: the vendor's own OpenAPI, so it counts as
  // full+complete without a separate claim (subject only to staleness).
  const r = classify(info('asana'), NOW, 90);
  assert.ok(['ok', 'stale'].includes(r.status), `expected ok/stale, got ${r.status}`);
});

test('a docs-derived (generated) spec is incomplete until it claims otherwise', () => {
  // salesforce is origin=generated: best-effort from docs, not a gold-standard
  // vendor spec, so it must be treated as not-yet-full.
  const r = classify(info('salesforce'), NOW, 90);
  assert.equal(r.status, 'incomplete');
});

test('a complete spec goes stale once its check date passes the threshold', () => {
  // asana/twilio are found-openapi (complete); from far enough in the future
  // their capturedAt clock exceeds the 90-day threshold.
  const later = new Date('2027-01-01T00:00:00Z');
  const rows = report([info('asana'), info('twilio')], later, 90);
  assert.equal(rows.length, 2);
  assert.ok(rows.every((r) => r.status === 'stale'), rows.map((r) => `${r.adaptor}:${r.status}`).join(', '));
});

test('report sorts most-urgent buckets first', () => {
  const rows = report([info('salesforce'), info('does-not-exist-abc')], NOW, 90);
  const statuses = rows.map((r) => r.status);
  // 'new' (does-not-exist) must sort before 'incomplete' (salesforce).
  assert.ok(statuses.indexOf('new') < statuses.indexOf('incomplete'));
});
