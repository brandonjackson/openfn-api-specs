/**
 * BLD-120 step 4: roll results.jsonl up into the numbers the ticket asks for.
 *
 * Every rate is given two ways:
 *   - over all prompts, where a check that was never reached (null) counts as
 *     a fail: "of everything we asked for, how much came out right";
 *   - over measured prompts only: "when the code got that far, how often was
 *     that part right".
 * Breakdowns by the analysis' confidence rating, peer type, and each side's
 * adaptor show where doc-quality work would pay off first.
 *
 *   npx tsx experiments/bld-120/report.ts > experiments/bld-120/REPORT.md
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CheckResult } from './check.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const arg = (k: string, d?: string) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;
const all: CheckResult[] = readFileSync(arg('results', join(HERE, 'results.jsonl'))!, 'utf8')
  .trim().split('\n').filter(Boolean).map((l) => JSON.parse(l));
// Rows the harness or the mock's seed data couldn't judge fairly are counted
// but kept out of every rate.
const rows = all.filter((r) => !r.excluded);
const excluded = (k: string) => all.filter((r) => r.excluded === k).length;

type K = keyof CheckResult['checks'];
const KEYS: [K, string][] = [
  ['source_endpoint', 'Valid endpoint on A'],
  ['source_fields', 'Understands object A'],
  ['target_body', 'Understands peer object B'],
  ['target_endpoint', 'Valid endpoint on B'],
];
const strict = (r: CheckResult) => KEYS.every(([k]) => r.checks?.[k] === true);
/** Ran to completion and no check failed (an unmeasurable check doesn't count against it). */
const clean = (r: CheckResult) => r.run_ok === true && KEYS.every(([k]) => r.checks?.[k] !== false);

/** Why a run failed, from its first error: the failures outside the four checks. */
function failureReason(r: CheckResult): string {
  // The first error is the root cause; later ones are its knock-on effects
  // (a wrong call 404s, then the next line reads the missing result).
  const e = r.errors.find((x) => !/aborted with error|CRITICAL ERROR|Check state\.errors/.test(x)) ?? r.errors[0] ?? '';
  if (!r.generated) return 'no workflow generated';
  if (/ReferenceError: (\w+) is not defined/.test(e)) return 'calls a function the adaptor does not have';
  if (/Cannot read properties of (undefined|null)/.test(e)) return 'read source data in a shape it does not have';
  if (/is not a function|is not iterable|Spread syntax/.test(e)) return 'called an adaptor function with the wrong arguments';
  if (/returned 4\d\d|status code 4\d\d|404|400|422/.test(e)) return 'API rejected a request';
  if (/returned 5\d\d|status code 5\d\d/.test(e)) return 'API errored (5xx)';
  if (/timed out|ETIMEDOUT/.test(e)) return 'timed out';
  if (/SyntaxError/.test(e)) return 'code does not parse';
  return 'other';
}
const pct = (n: number, d: number) => (d ? `${((100 * n) / d).toFixed(0)}%` : 'n/a');

function rates(rs: CheckResult[]) {
  const out: Record<string, string> = { n: String(rs.length), all4: pct(rs.filter(strict).length, rs.length) };
  for (const [k] of KEYS) {
    const measured = rs.filter((r) => r.checks?.[k] != null);
    const pass = measured.filter((r) => r.checks[k] === true).length;
    out[k] = `${pct(pass, rs.length)} (${pct(pass, measured.length)} of ${measured.length})`;
  }
  return out;
}

function table(title: string, groups: Map<string, CheckResult[]>, min = 1) {
  const lines = [`## ${title}`, '', `| ${title.split(' by ')[1] ?? 'group'} | n | all four | ${KEYS.map(([, l]) => l).join(' | ')} |`, `|---|---|---|${KEYS.map(() => '---').join('|')}|`];
  for (const [g, rs] of [...groups].filter(([, rs]) => rs.length >= min).sort((a, b) => b[1].length - a[1].length)) {
    const r = rates(rs);
    lines.push(`| ${g} | ${r.n} | ${r.all4} | ${KEYS.map(([k]) => r[k]).join(' | ')} |`);
  }
  return lines.join('\n') + '\n';
}

const group = (f: (r: CheckResult) => string) => {
  const m = new Map<string, CheckResult[]>();
  for (const r of rows) m.set(f(r), [...(m.get(f(r)) ?? []), r]);
  return m;
};

const n = rows.length;
const generated = rows.filter((r) => r.generated).length;
const ran = rows.filter((r) => r.run_ok === true).length;
const rightAdaptors = rows.filter((r) => r.uses_source_adaptor && r.uses_target_adaptor).length;
const fieldsUnmeasurable = rows.filter((r) => r.checks?.source_endpoint === true && r.checks?.source_fields == null).length;
const overall = rates(rows);
const violationKinds = new Map<string, number>();
for (const r of rows) for (const v of r.violations ?? []) violationKinds.set(`${v.system}: ${v.kind}`, (violationKinds.get(`${v.system}: ${v.kind}`) ?? 0) + 1);

console.log(`# BLD-120 results

${all.length} prompts checked; ${n} judged. Left out: ${excluded('infra')} where the run failed before any job code ran (adaptor install or environment), ${excluded('empty-source')} where the source read was valid but the mock had no records to return. Each rate reads "pass rate over all prompts (pass rate where the check could be measured, of how many)".

## Headline

| | |
|---|---|
| Workflow generated | ${pct(generated, n)} |
| Uses both expected adaptors | ${pct(rightAdaptors, n)} |
| Ran to completion against the mocks | ${pct(ran, n)} |
| **All four checks pass** | **${overall.all4}** |
| Ran clean (completed, no check failed) | ${pct(rows.filter(clean).length, n)} |
${KEYS.map(([k, l]) => `| ${l} | ${overall[k]} |`).join('\n')}

"Understands object A" could not be measured for ${fieldsUnmeasurable} prompts whose read was valid, usually because A's spec gives that operation no response schema. That is itself a docs gap.

${table('Rates by confidence', group((r) => String(r.confidence ?? '?')))}
${table('Rates by peer type', group((r) => r.peerType ?? r.concept), 5)}
${table('Rates by source adaptor', group((r) => r.source), 5)}
${table('Rates by target adaptor', group((r) => r.target), 5)}
## Why runs failed

| reason | count |
|---|---|
${[...rows.filter((r) => r.run_ok === false).reduce((m, r) => m.set(failureReason(r), (m.get(failureReason(r)) ?? 0) + 1), new Map<string, number>())]
  .sort((a, b) => b[1] - a[1]).map(([k, c]) => `| ${k} | ${c} |`).join('\n')}

## Most common violations

| system: kind | count |
|---|---|
${[...violationKinds].sort((a, b) => b[1] - a[1]).slice(0, 20).map(([k, c]) => `| ${k} | ${c} |`).join('\n')}
`);
