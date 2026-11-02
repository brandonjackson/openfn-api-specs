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
const rows: CheckResult[] = readFileSync(arg('results', join(HERE, 'results.jsonl'))!, 'utf8')
  .trim().split('\n').filter(Boolean).map((l) => JSON.parse(l));

type K = keyof CheckResult['checks'];
const KEYS: [K, string][] = [
  ['source_endpoint', 'Valid endpoint on A'],
  ['source_fields', 'Understands object A'],
  ['target_body', 'Understands peer object B'],
  ['target_endpoint', 'Valid endpoint on B'],
];
const strict = (r: CheckResult) => KEYS.every(([k]) => r.checks?.[k] === true);
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

${n} prompts checked. Each rate reads "pass rate over all prompts (pass rate where the check could be measured, of how many)".

## Headline

| | |
|---|---|
| Workflow generated | ${pct(generated, n)} |
| Uses both expected adaptors | ${pct(rightAdaptors, n)} |
| Ran to completion against the mocks | ${pct(ran, n)} |
| **All four checks pass** | **${overall.all4}** |
${KEYS.map(([k, l]) => `| ${l} | ${overall[k]} |`).join('\n')}

"Understands object A" could not be measured for ${fieldsUnmeasurable} prompts whose read was valid, usually because A's spec gives that operation no response schema. That is itself a docs gap.

${table('Rates by confidence', group((r) => String(r.confidence ?? '?')))}
${table('Rates by peer type', group((r) => r.peerType ?? r.concept), 5)}
${table('Rates by source adaptor', group((r) => r.source), 5)}
${table('Rates by target adaptor', group((r) => r.target), 5)}
## Most common violations

| system: kind | count |
|---|---|
${[...violationKinds].sort((a, b) => b[1] - a[1]).slice(0, 20).map(([k, c]) => `| ${k} | ${c} |`).join('\n')}
`);
