/**
 * `pnpm specs <command>` — maintain up-to-date API specs for every OpenFn adaptor.
 *
 * The system is a loop with an agentic "finding" step:
 *
 *   1. list      — pull the adaptor list from openfn/adaptors (cached).
 *   2. status    — which adaptors have an OpenAPI spec + data-object schemas.
 *   3. instructions <a|--missing|--all>
 *                — emit a per-adaptor work order. An AI agent executes it: find
 *                  an official OpenAPI spec online (save), find another standard
 *                  (save + convert), or do a documenting pass over the vendor
 *                  docs (generate). It writes openapi.json + source.json.
 *   4. data-objects <a|--all>
 *                — extract one standalone JSON Schema per data object (the
 *                  closure of the API's response resources) into data-schemas/.
 *   5. manifest  — rebuild the aggregate index/coverage report.
 *
 * See specs/adaptors/README.md for the on-disk layout.
 */
import { existsSync, mkdirSync, readFileSync, rmSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { loadAdaptors, type AdaptorInfo } from './adaptors.js';
import { capture, staleUpstreams } from './convert.js';
import { extractDataObjects } from './data-objects.js';
import { instructionsFor } from './instructions.js';
import { buildManifest } from './manifest.js';
import { report as buildReport, orphanDirs, type FeedbackRow } from './report.js';
import { buildStatusData, renderSite } from './site.js';
import {
  adaptorDir,
  dataSchemasDir,
  dataSchemasIndexPath,
  manifestPath,
  openapiPath,
  sourcePath,
  upstreamPath,
} from './paths.js';
import type { FeedbackStatus, SpecSource } from './types.js';

const today = (): string => new Date().toISOString().slice(0, 10);

function writeJson(path: string, value: unknown): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
}

function has(path: string): boolean {
  return existsSync(path);
}

/** Resolve which adaptors a command targets from argv (names, --all, --missing). */
function selectTargets(all: AdaptorInfo[], argv: string[]): AdaptorInfo[] {
  if (argv.includes('--all')) return all;
  if (argv.includes('--missing')) return all.filter((a) => !has(openapiPath(a.name)));
  const names = argv.filter((a) => !a.startsWith('--'));
  if (names.length === 0) return [];
  const set = new Set(names);
  const chosen = all.filter((a) => set.has(a.name));
  const unknown = names.filter((n) => !all.some((a) => a.name === n));
  if (unknown.length) throw new Error(`Unknown adaptor(s): ${unknown.join(', ')}`);
  return chosen;
}

async function cmdList(argv: string[]): Promise<void> {
  const adaptors = await loadAdaptors(argv.includes('--refresh'));
  const rest = adaptors.filter((a) => a.rest).length;
  console.log(`${adaptors.length} adaptors (${rest} REST, ${adaptors.length - rest} non-REST)`);
  for (const a of adaptors) {
    console.log(`  ${a.rest ? ' ' : '·'} ${a.name}${a.note ? `  — ${a.note}` : ''}`);
  }
}

async function cmdStatus(argv: string[]): Promise<void> {
  const adaptors = await loadAdaptors();
  const rows = adaptors.map((a) => ({
    name: a.name,
    rest: a.rest,
    openapi: has(openapiPath(a.name)),
    dataSchemas: has(dataSchemasIndexPath(a.name)),
  }));

  if (argv.includes('--json')) {
    console.log(JSON.stringify(rows, null, 2));
    return;
  }

  for (const r of rows) {
    const o = r.openapi ? '✓' : '✗';
    const d = r.dataSchemas ? '✓' : '✗';
    console.log(`  openapi:${o}  data-schemas:${d}  ${r.name}`);
  }
  const withO = rows.filter((r) => r.openapi).length;
  const withD = rows.filter((r) => r.dataSchemas).length;
  console.log(`\n${'─'.repeat(50)}`);
  console.log(`  ${withO}/${rows.length} have OpenAPI, ${withD}/${rows.length} have data-schemas`);
}

async function cmdMissing(): Promise<void> {
  const adaptors = await loadAdaptors();
  const missing = adaptors.filter((a) => !has(openapiPath(a.name)));
  console.log(missing.map((a) => a.name).join('\n'));
}

async function cmdInstructions(argv: string[]): Promise<void> {
  const adaptors = await loadAdaptors();
  const targets = selectTargets(adaptors, argv);
  if (targets.length === 0) {
    throw new Error('Specify adaptor name(s), --missing, or --all.');
  }
  console.log(targets.map(instructionsFor).join('\n\n' + '═'.repeat(72) + '\n\n'));
}

async function cmdDataObjects(argv: string[]): Promise<void> {
  const adaptors = await loadAdaptors();
  const targets = argv.includes('--all')
    ? adaptors.filter((a) => has(openapiPath(a.name)))
    : selectTargets(adaptors, argv);
  if (targets.length === 0) throw new Error('Specify adaptor name(s) or --all.');

  for (const a of targets) {
    const p = openapiPath(a.name);
    if (!has(p)) {
      console.log(`  ✗ ${a.name}: no openapi.json`);
      continue;
    }
    const raw = JSON.parse(readFileSync(p, 'utf8'));
    const { objects, index } = extractDataObjects(raw, a.name, today());

    // Rewrite the folder from scratch so a shrunk object set leaves no stragglers.
    const dir = dataSchemasDir(a.name);
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });
    for (const obj of objects) writeJson(join(dir, obj.file), obj.schema);
    writeJson(dataSchemasIndexPath(a.name), index);

    const res = index.resources.length;
    console.log(`  ✓ ${a.name}: ${objects.length} data object(s) (${res} resource(s)) → data-schemas/`);
  }
}

/** Read the `--flag=value` form out of argv. */
function flag(argv: string[], name: string): string | undefined {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit?.slice(name.length + 3);
}

/**
 * `convert <adaptor> --url=<specUrl>` — the capture step of the loop. Fetches an
 * upstream machine spec, commits it verbatim as `upstream.<ext>`, derives the
 * full-coverage `openapi.json`, and records the provenance (origin, format,
 * contentHash, the `used` attempt) in source.json.
 *
 * With no `--url`, it re-derives `openapi.json` from the upstream already
 * committed for that adaptor. Use that after changing a converter: the upstream
 * bytes (and so `upstream.contentHash`) have not moved, only the derivation has,
 * and nothing should be refetched to rebuild it.
 *
 * The `coverage`/`completeness` claims are NOT written here: whether a spec
 * really covers the whole vendor API is the agent's judgement to make and
 * record, not something a fetch can assert. Pass `--complete` once verified.
 */
async function cmdConvert(argv: string[]): Promise<void> {
  const adaptors = await loadAdaptors();
  const targets = selectTargets(adaptors, argv);
  if (targets.length !== 1) throw new Error('Specify exactly one adaptor name.');
  const [adaptor] = targets;

  const dir = adaptorDir(adaptor.name);
  mkdirSync(dir, { recursive: true });

  const existing: Partial<SpecSource> = existsSync(sourcePath(adaptor.name))
    ? JSON.parse(readFileSync(sourcePath(adaptor.name), 'utf8'))
    : {};

  // No --url: rebuild from the upstream we already hold, and leave the curated
  // provenance (claims, notes, attempt trail) exactly as it is.
  const url = flag(argv, 'url');
  if (!url) {
    const committed = upstreamPath(adaptor.name);
    if (!existsSync(committed)) {
      throw new Error(`No upstream committed for ${adaptor.name} — specify --url=<upstream spec URL>.`);
    }
    const before = readFileSync(openapiPath(adaptor.name), 'utf8');
    const rebuilt = await capture({
      adaptor: adaptor.name,
      specUrl: existing.upstream?.specUrl ?? committed,
      upstreamBase: join(dir, 'upstream'),
      openapiTarget: openapiPath(adaptor.name),
      today: today(),
      bytes: readFileSync(committed, 'utf8'),
    });
    const after = readFileSync(openapiPath(adaptor.name), 'utf8');
    console.log(
      `  ${before === after ? '=' : '~'} ${adaptor.name}: re-derived from ${committed.split('/').pop()} — ` +
        `${before === after ? 'unchanged' : `rebuilt (${before.length} → ${after.length} bytes)`} ` +
        `(${rebuilt.operations} operations)`
    );
    for (const w of rebuilt.warnings.slice(0, 10)) console.log(`    ! ${w}`);
    if (before !== after) console.log(`    next: pnpm specs data-objects ${adaptor.name} && pnpm test`);
    return;
  }

  const result = await capture({
    adaptor: adaptor.name,
    specUrl: url,
    upstreamBase: join(dir, 'upstream'),
    openapiTarget: openapiPath(adaptor.name),
    today: today(),
  });

  // A re-capture in a different format must not leave the old file behind:
  // upstreamPath() resolves json before yaml, so a leftover would shadow it.
  const keepExt = result.upstreamPath.split('.').pop()!;
  for (const stale of staleUpstreams(join(dir, 'upstream'), keepExt)) {
    unlinkSync(stale);
    console.log(`  removed stale ${stale.split('/').pop()}`);
  }

  // Merge into any existing provenance rather than clobbering hand-written
  // notes and the attempt trail that got us here.
  const attempts = (existing.attempts ?? []).filter((a) => a.url !== url);
  attempts.push({ kind: result.detected.kind, url, result: 'used' });

  const source: SpecSource = {
    ...existing,
    adaptor: adaptor.name,
    npm: adaptor.npm,
    origin: result.detected.origin,
    upstreamFormat: result.detected.format,
    upstream: result.upstream,
    attempts,
    sources: [...new Set([url, ...(existing.sources ?? [])])],
    capturedAt: today(),
    lastCheckedAt: today(),
  };
  if (argv.includes('--complete')) {
    source.coverage = 'full';
    source.completeness = 'complete';
  }
  const note = flag(argv, 'note');
  if (note) source.notes = note;
  writeJson(sourcePath(adaptor.name), source);

  const schemas = Object.keys(result.openapi.components?.schemas ?? {}).length;
  console.log(
    `  ✓ ${adaptor.name}: ${result.detected.format} → ${result.openapi.openapi} ` +
      `(${result.operations} operations, ${schemas} schemas)`
  );
  console.log(`    upstream: ${result.upstreamPath.split('/').pop()} (${(result.bytes / 1024).toFixed(0)} KiB, ${result.contentHash.slice(0, 19)}…)`);
  for (const w of result.warnings.slice(0, 10)) console.log(`    ! ${w}`);
  if (result.warnings.length > 10) console.log(`    ! …and ${result.warnings.length - 10} more warning(s)`);
  console.log(`    next: pnpm specs data-objects ${adaptor.name} && pnpm test`);
}

async function cmdReport(argv: string[]): Promise<void> {
  const adaptors = await loadAdaptors(argv.includes('--refresh'));
  const staleArg = argv.find((a) => a.startsWith('--stale='));
  const staleAfterDays = staleArg ? parseInt(staleArg.slice('--stale='.length), 10) : 90;
  const rows = buildReport(adaptors, new Date(), staleAfterDays);

  if (argv.includes('--json')) {
    console.log(JSON.stringify({ staleAfterDays, rows, orphans: orphanDirs(adaptors) }, null, 2));
    return;
  }

  const counts: Record<FeedbackStatus, FeedbackRow[]> = {
    wrong: [], 'at-risk': [], missing: [], new: [], incomplete: [], stale: [], ok: [],
  };
  for (const r of rows) counts[r.status].push(r);

  const ICON: Record<FeedbackStatus, string> = {
    ok: '✓', new: '+', missing: '?', stale: '~', incomplete: '◐', 'at-risk': '!', wrong: '✗',
  };
  // Show everything that isn't ok, grouped; ok is just a tally.
  for (const status of ['wrong', 'at-risk', 'missing', 'new', 'incomplete', 'stale'] as FeedbackStatus[]) {
    for (const r of counts[status]) console.log(`  ${ICON[status]} ${status.padEnd(10)} ${r.adaptor.padEnd(20)} ${r.reason}`);
  }
  const orphans = orphanDirs(adaptors);
  for (const name of orphans) console.log(`  ✗ orphan     ${name.padEnd(20)} directory not in adaptor list`);

  console.log(`\n${'─'.repeat(60)}`);
  const summary = (['ok', 'incomplete', 'stale', 'missing', 'new', 'at-risk', 'wrong'] as FeedbackStatus[])
    .map((s) => `${s}:${counts[s].length}`)
    .join('  ');
  console.log(`  ${summary}${orphans.length ? `  orphan:${orphans.length}` : ''}   (stale > ${staleAfterDays}d)`);
}

async function cmdSite(argv: string[]): Promise<void> {
  const adaptors = await loadAdaptors(argv.includes('--refresh'));
  const staleArg = argv.find((a) => a.startsWith('--stale='));
  const staleAfterDays = staleArg ? parseInt(staleArg.slice('--stale='.length), 10) : 90;
  const outArg = argv.find((a) => a.startsWith('--out='));
  const outDir = outArg ? outArg.slice('--out='.length) : join(process.cwd(), 'site');

  const data = buildStatusData(adaptors, new Date(), staleAfterDays);
  const html = renderSite(data);

  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  // .nojekyll keeps GitHub Pages from running the static files through Jekyll.
  writeFileSync(join(outDir, '.nojekyll'), '');

  const { byStatus } = data.totals;
  console.log(`site → ${join(outDir, 'index.html')}`);
  console.log(
    `  ${data.totals.adaptors} adaptors — ` +
      `ok:${byStatus.ok} incomplete:${byStatus.incomplete} stale:${byStatus.stale} ` +
      `missing:${byStatus.missing} new:${byStatus.new} at-risk:${byStatus['at-risk']} wrong:${byStatus.wrong}`
  );
}

async function cmdManifest(): Promise<void> {
  const adaptors = await loadAdaptors();
  const manifest = buildManifest(adaptors);
  writeJson(manifestPath(), manifest);
  const { withOpenapi, withDataSchemas, dataObjects, adaptors: n } = manifest.totals;
  console.log(
    `manifest.json: ${n} adaptors, ${withOpenapi} with OpenAPI, ${withDataSchemas} with data-schemas ` +
      `(${dataObjects} data objects total)`
  );
  console.log(`  by origin: ${JSON.stringify(manifest.totals.byOrigin)}`);
}

const USAGE = `Usage: pnpm specs <command>

  list [--refresh]              List adaptors from openfn/adaptors (cached).
  status [--json]               Coverage: which adaptors have openapi + data-schemas.
  report [--json] [--refresh] [--stale=<days>]
                                Feedback buckets (ok/incomplete/stale/missing/new/wrong).
  missing                       Print adaptors with no OpenAPI spec (newline-separated).
  instructions <a…|--missing|--all>
                                Emit agentic work order(s) for finding/generating specs.
  convert <a> [--url=<specUrl>] [--complete] [--note=<text>]
                                Capture an upstream machine spec (OpenAPI 3.x / Swagger 2.0 /
                                Google Discovery): commit it verbatim as upstream.<ext>, derive
                                openapi.json, record provenance + contentHash. With no --url,
                                re-derive openapi.json from the committed upstream.
  data-objects <a…|--all>       Extract standalone data-object schemas into data-schemas/.
  manifest                      Rebuild specs/adaptors/manifest.json.
  site [--out=<dir>] [--stale=<days>] [--refresh]
                                Build the static status dashboard (index.html) for GitHub Pages.
`;

async function main(): Promise<void> {
  const [cmd, ...argv] = process.argv.slice(2);
  switch (cmd) {
    case 'list':
      return cmdList(argv);
    case 'status':
      return cmdStatus(argv);
    case 'report':
      return cmdReport(argv);
    case 'missing':
      return cmdMissing();
    case 'instructions':
      return cmdInstructions(argv);
    case 'convert':
      return cmdConvert(argv);
    case 'data-objects':
      return cmdDataObjects(argv);
    case 'manifest':
      return cmdManifest();
    case 'site':
      return cmdSite(argv);
    case undefined:
    case '--help':
    case '-h':
      console.log(USAGE);
      return;
    default:
      throw new Error(`Unknown command: ${cmd}\n\n${USAGE}`);
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
