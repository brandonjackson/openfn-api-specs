/**
 * `pnpm specs site` — build the static status dashboard.
 *
 * A single self-contained HTML page that answers, for every adaptor:
 *   (a) what quality of spec we have — provenance/origin (vendor OpenAPI,
 *       converted machine spec, synthesized surface, or docs-authored), plus
 *       the coverage/completeness claim and the feedback bucket (health);
 *   (b) how recently it was updated — captured / last-checked dates, shown as
 *       live relative time in the browser;
 *   (c) any notes — the free-text provenance notes from source.json.
 *
 * The layout mirrors the openfn-mocker sandbox (same design tokens, navbar,
 * hero, footer). Data is inlined into the page as `window.__STATUS__`, so the
 * result is one file with no external requests — ideal for GitHub Pages.
 *
 * The heavy lifting is reused, not reinvented: `buildEntry` (manifest.ts) reads
 * the on-disk operation/schema/object counts, and `classify` (report.ts) assigns
 * the same feedback bucket `pnpm specs report` uses. The dashboard therefore
 * never drifts from the CLI's own view of the registry.
 */
import { existsSync } from 'node:fs';
import type { AdaptorInfo } from './adaptors.js';
import { buildEntry } from './manifest.js';
import { classify } from './report.js';
import { sourcePath, upstreamPath } from './paths.js';
import type { FeedbackStatus, SpecOrigin, SpecSource } from './types.js';
import { daysBetween, readJsonSafe as readJson } from './util.js';

/** owner/repo the dashboard links back to (spec files, GitHub). */
const DEFAULT_REPO = 'brandonjackson/openfn-api-specs';

/**
 * Quality tier per origin — "what quality of spec we have". Ranked by source
 * authority: a verbatim vendor OpenAPI is the gold standard; a docs-authored
 * pass is the weakest (best-effort). Each maps to a colour token in the page CSS.
 */
export const QUALITY: Record<SpecOrigin, { label: string; rank: number; blurb: string }> = {
  'found-openapi': {
    label: 'Vendor OpenAPI',
    rank: 1,
    blurb: 'The vendor’s own OpenAPI document, saved verbatim — the gold standard.',
  },
  converted: {
    label: 'Converted',
    rank: 2,
    blurb: 'Converted to OpenAPI 3.x from another machine spec (Discovery / Swagger / GraphQL / CSDL).',
  },
  synthesized: {
    label: 'Synthesized',
    rank: 3,
    blurb: 'Modelled from the adaptor’s own operation surface (non-REST — DB / protocol / internal).',
  },
  generated: {
    label: 'Documented',
    rank: 4,
    blurb: 'Authored from the vendor docs because no machine spec was found (best-effort).',
  },
};

/** One adaptor's row in the dashboard payload. */
export interface StatusRow {
  adaptor: string;
  npm: string;
  rest: boolean;
  /** Non-REST reason, when the adaptor has no external HTTP API. */
  note?: string;
  /** Feedback bucket (same logic as `pnpm specs report`). */
  status: FeedbackStatus;
  /** Human explanation for the bucket. */
  reason: string;
  origin?: SpecOrigin;
  /** Human quality label derived from origin. */
  quality?: string;
  /** Rank 1–4 (1 = highest authority) for sorting by quality. */
  qualityRank?: number;
  upstreamFormat?: string;
  coverage?: string;
  completeness?: string;
  completenessReason?: string;
  operations?: number;
  schemas?: number;
  dataObjects?: number;
  resources?: number;
  capturedAt?: string;
  lastCheckedAt?: string;
  /** Days since the staleness clock (lastCheckedAt ?? capturedAt); undefined if unknown. */
  ageDays?: number;
  /** Verbatim upstream machine spec on disk? (upstream.json / .yaml). */
  hasUpstream: boolean;
  /** Where the upstream machine spec was fetched from, if any. */
  upstreamUrl?: string;
  upstreamFetchedAt?: string;
  /** First consulted source URL — a "reference" link for the row. */
  sourceUrl?: string;
  /** Free-text provenance notes. */
  notes?: string;
}

export interface StatusData {
  /** ISO-8601 build time (when this page was rendered). */
  generatedAt: string;
  /**
   * Freshest actual data timestamp across all adaptors — the most recent
   * `lastCheckedAt ?? capturedAt`. This is when the registry was genuinely
   * updated, as opposed to when the page was last (re)built. The hero "Updated"
   * chip reads this so a no-op weekly rebuild doesn't misreport "updated today".
   * Undefined only when no adaptor has any recorded date.
   */
  dataUpdatedAt?: string;
  /** owner/repo for links back to the source. */
  repo: string;
  /** Staleness threshold in days used to bucket adaptors. */
  staleAfterDays: number;
  totals: {
    adaptors: number;
    byStatus: Record<FeedbackStatus, number>;
    byOrigin: Record<string, number>;
    operations: number;
    dataObjects: number;
  };
  rows: StatusRow[];
}

const EMPTY_STATUS: Record<FeedbackStatus, number> = {
  ok: 0,
  new: 0,
  missing: 0,
  stale: 0,
  incomplete: 0,
  'at-risk': 0,
  wrong: 0,
};

/** Assemble one adaptor's dashboard row from its on-disk files + classification. */
export function buildRow(info: AdaptorInfo, now: Date, staleAfterDays: number): StatusRow {
  const entry = buildEntry(info);
  const feedback = classify(info, now, staleAfterDays);
  const src = readJson<SpecSource>(sourcePath(info.name));

  const row: StatusRow = {
    adaptor: info.name,
    npm: info.npm,
    rest: info.rest,
    note: info.note,
    status: feedback.status,
    reason: feedback.reason,
    origin: entry.origin,
    upstreamFormat: entry.upstreamFormat,
    operations: entry.operations,
    schemas: entry.schemas,
    dataObjects: entry.dataObjects,
    resources: entry.resources,
    capturedAt: entry.capturedAt,
    hasUpstream: existsSync(upstreamPath(info.name)),
  };

  if (entry.origin && QUALITY[entry.origin]) {
    row.quality = QUALITY[entry.origin].label;
    row.qualityRank = QUALITY[entry.origin].rank;
  }
  if (src) {
    row.coverage = src.coverage;
    row.completeness = src.completeness;
    row.completenessReason = src.completenessReason ?? undefined;
    row.lastCheckedAt = src.lastCheckedAt;
    row.notes = src.notes;
    row.upstreamUrl = src.upstream?.specUrl;
    row.upstreamFetchedAt = src.upstream?.fetchedAt;
    row.sourceUrl = Array.isArray(src.sources) ? src.sources[0] : undefined;
  }
  row.ageDays = daysBetween(row.lastCheckedAt ?? row.capturedAt, now);
  return row;
}

/** Build the full dashboard payload over every adaptor. */
export function buildStatusData(
  adaptors: AdaptorInfo[],
  now: Date,
  staleAfterDays = 90,
  repo = process.env.OPENFN_API_SPECS_REPO || DEFAULT_REPO
): StatusData {
  const rows = adaptors.map((a) => buildRow(a, now, staleAfterDays));

  const byStatus = { ...EMPTY_STATUS };
  const byOrigin: Record<string, number> = {};
  let operations = 0;
  let dataObjects = 0;
  let dataUpdatedAt: string | undefined;
  let newest = -Infinity;
  for (const r of rows) {
    byStatus[r.status] += 1;
    if (r.origin) byOrigin[r.origin] = (byOrigin[r.origin] ?? 0) + 1;
    operations += r.operations ?? 0;
    dataObjects += r.dataObjects ?? 0;
    // Track the freshest real data timestamp (last-checked, else captured).
    const clock = r.lastCheckedAt ?? r.capturedAt;
    if (clock) {
      const t = Date.parse(clock);
      if (!Number.isNaN(t) && t > newest) {
        newest = t;
        dataUpdatedAt = clock;
      }
    }
  }

  return {
    generatedAt: now.toISOString(),
    dataUpdatedAt,
    repo,
    staleAfterDays,
    totals: { adaptors: rows.length, byStatus, byOrigin, operations, dataObjects },
    rows,
  };
}

// The renderer (static shell + inlined data) lives in ./site-render to keep the
// large HTML/CSS/JS template out of the data-building logic above.
export { renderSite } from './site-render.js';
