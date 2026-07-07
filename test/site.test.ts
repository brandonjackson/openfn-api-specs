import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildRow, buildStatusData, renderSite, type StatusData } from '../src/site.js';
import type { AdaptorInfo } from '../src/adaptors.js';

const NOW = new Date('2026-07-06T00:00:00Z');
const info = (name: string, rest = true, note?: string): AdaptorInfo => ({
  name,
  npm: `@openfn/language-${name}`,
  rest,
  note,
});

// buildRow/buildStatusData read the shipped registry, mirroring report.test.ts.

test('buildRow maps a found-openapi spec to the Vendor OpenAPI quality tier', () => {
  const r = buildRow(info('asana'), NOW, 90);
  assert.equal(r.origin, 'found-openapi');
  assert.equal(r.quality, 'Vendor OpenAPI');
  assert.equal(r.qualityRank, 1);
  assert.ok(['ok', 'stale'].includes(r.status), `expected ok/stale, got ${r.status}`);
  assert.ok(typeof r.operations === 'number' && r.operations > 0);
  assert.ok((r.notes ?? '').length > 0, 'expected provenance notes');
});

test('buildRow maps a generated (docs) spec to the Documented tier + incomplete', () => {
  const r = buildRow(info('salesforce'), NOW, 90);
  assert.equal(r.origin, 'generated');
  assert.equal(r.quality, 'Documented');
  assert.equal(r.qualityRank, 4);
  assert.equal(r.status, 'incomplete');
});

test('buildRow computes an age from the staleness clock', () => {
  const r = buildRow(info('asana'), new Date('2026-07-16T00:00:00Z'), 90);
  // asana was captured/checked 2026-07-06 → 10 days before this NOW.
  assert.equal(r.ageDays, 10);
});

test('buildStatusData totals are internally consistent', () => {
  const data = buildStatusData([info('asana'), info('salesforce'), info('bigquery')], NOW, 90);
  assert.equal(data.rows.length, 3);
  const sumStatus = Object.values(data.totals.byStatus).reduce((a, b) => a + b, 0);
  assert.equal(sumStatus, data.rows.length);
  const sumOrigin = Object.values(data.totals.byOrigin).reduce((a, b) => a + b, 0);
  assert.equal(sumOrigin, 3);
  assert.ok(data.totals.operations > 0);
  assert.ok(data.totals.dataObjects > 0);
  assert.match(data.generatedAt, /^\d{4}-\d{2}-\d{2}T/);
});

test('renderSite produces a self-contained page with inlined data', () => {
  const data = buildStatusData([info('asana')], NOW, 90);
  const html = renderSite(data);
  assert.match(html, /^<!doctype html>/i);
  assert.ok(html.includes('window.__STATUS__ ='), 'data is inlined');
  assert.ok(html.includes('Adaptor spec status'), 'has the hero title');
  assert.ok(html.includes('asana'), 'includes the adaptor');
  // No external asset/script requests — the page must stand alone.
  assert.ok(!/<script[^>]+src=/.test(html), 'no external scripts');
  assert.ok(!/<link[^>]+stylesheet/.test(html), 'no external stylesheets');
});

test('renderSite escapes </script> inside inlined data', () => {
  // A note containing a closing script tag must not break out of the <script>.
  const data: StatusData = {
    generatedAt: NOW.toISOString(),
    repo: 'owner/repo',
    staleAfterDays: 90,
    totals: {
      adaptors: 1,
      byStatus: { ok: 1, new: 0, missing: 0, stale: 0, incomplete: 0, 'at-risk': 0, wrong: 0 },
      byOrigin: { 'found-openapi': 1 },
      operations: 1,
      dataObjects: 1,
    },
    rows: [
      {
        adaptor: 'evil',
        npm: '@openfn/language-evil',
        rest: true,
        status: 'ok',
        reason: 'test',
        hasUpstream: false,
        notes: 'break out </script><script>alert(1)</script>',
      },
    ],
  };
  const html = renderSite(data);
  // The only literal </script> occurrences should be our two real closers,
  // not the one smuggled in via the note.
  const closers = (html.match(/<\/script>/g) ?? []).length;
  assert.equal(closers, 2, `expected exactly 2 </script>, found ${closers}`);
  assert.ok(html.includes('\\u003c/script>'), 'note angle-bracket was escaped');
});
