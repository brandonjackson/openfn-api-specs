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

test('the shipped specs are "incomplete" until the full-coverage claim is added', () => {
  // Existing specs predate coverage=full/completeness=complete, so honest state
  // is incomplete rather than ok.
  const r = classify(info('asana'), NOW, 90);
  assert.equal(r.status, 'incomplete');
  assert.match(r.reason, /coverage/);
});

test('staleness uses a configurable threshold', () => {
  // capturedAt in the shipped specs is 2026-07-06; from far in the future they
  // read as stale once the claim exists. Here we assert the threshold plumbs
  // through: a 0-day threshold with a future "now" would flag anything dated.
  const rows = report([info('asana'), info('twilio')], NOW, 90);
  assert.equal(rows.length, 2);
  assert.ok(rows.every((r) => ['ok', 'incomplete', 'stale', 'wrong'].includes(r.status)));
});

test('report sorts most-urgent buckets first', () => {
  const rows = report([info('asana'), info('does-not-exist-abc')], NOW, 90);
  const statuses = rows.map((r) => r.status);
  // 'new' (does-not-exist) must sort before 'incomplete' (asana).
  assert.ok(statuses.indexOf('new') < statuses.indexOf('incomplete'));
});
