/**
 * BLD-120 step 1: sample N "get X from A, modify it, post it to B as peer Y"
 * prompts, each carrying the ground truth the checker scores against.
 *
 * Source of pairs: experiments/data-mapping-analysis/entities_final.json. A
 * pair is a readable entity in adaptor A and a writable entity of the same
 * concept in adaptor B (A != B), exactly as that analysis defines a mapping
 * step. Only adaptors openfn-mocker can serve are eligible, because the checker
 * runs each generated job against the mock.
 *
 * Sampling is at the system level (adaptor A x adaptor B x concept), stratified
 * by peer type in proportion to how many system-level pairs each type has, so
 * no single family swamps the set. Within a system-level pair the entities are
 * drawn at random from the readable/writable candidates, so per-entity
 * confidence varies and can be used as an explanatory variable later.
 *
 * Deterministic: the same --seed always yields the same file.
 *
 *   pnpm tsx experiments/bld-120/sample-prompts.ts --n=1000 --seed=120 \
 *     --mocker=../openfn-mocker > experiments/bld-120/prompts.jsonl
 */
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');

interface Entity {
  id: string;
  adaptor: string;
  name: string;
  concept: string;
  native: string;
  cr: number | null;
  cw: number | null;
  R: boolean;
  W: boolean;
  origin: string;
  issues: string[];
}

export interface PromptCase {
  id: string;
  concept: string;
  peerType: string;
  prompt: string;
  source: { adaptor: string; system: string; entity: string; native: string; confidence: number | null; origin: string };
  modify: { field: string | null; instruction: string };
  target: { adaptor: string; system: string; entity: string; native: string; confidence: number | null; origin: string };
  /** min(source read confidence, target write confidence): the analysis' step rating. */
  confidence: number | null;
}

/**
 * Peer judgments (peer-judging/judgments.tsv): for each entity in a kept
 * concept, whether it is a core record an integration would sync, and its
 * specific peer type within the concept (invoice vs payment, sms vs email).
 * Two entities are peers only when both are core and share concept AND type.
 */
function loadJudgments(): Map<string, string> {
  const out = new Map<string, string>();
  for (const line of readFileSync(join(HERE, 'peer-judging/judgments.tsv'), 'utf8').split('\n')) {
    const [id, core, peerType] = line.split('\t');
    if (core === 'yes' && peerType && peerType !== 'none') out.set(id, peerType);
  }
  return out;
}

/** Human names for systems whose spec title doesn't reduce cleanly. */
const DISPLAY: Record<string, string> = {
  dhis2: 'DHIS2', opencrvs: 'OpenCRVS', openmrs: 'OpenMRS', fhir: 'a FHIR R4 server', 'fhir-4': 'a FHIR R4 server',
  commcare: 'CommCare', kobotoolbox: 'KoboToolbox', msupply: 'mSupply', cht: 'the Community Health Toolkit (CHT)',
  odk: 'ODK Central', surveycto: 'SurveyCTO', openlmis: 'OpenLMIS', msgraph: 'Microsoft Graph', gmail: 'Gmail',
  googlesheets: 'Google Sheets', googledrive: 'Google Drive', mailchimp: 'Mailchimp', twilio: 'Twilio',
  stripe: 'Stripe', asana: 'Asana', salesforce: 'Salesforce', primero: 'Primero', godata: 'Go.Data', ocl: 'OCL',
  openimis: 'openIMIS', openspp: 'OpenSPP', rapidpro: 'RapidPro', telerivet: 'Telerivet', mpesa: 'M-Pesa',
  'mtn-momo': 'MTN MoMo', 'sunbird-rc': 'Sunbird RC', divoc: 'DIVOC', 'ghana-bdr': 'Ghana BDR', 'ghana-nia': 'Ghana NIA',
};

function systemName(adaptor: string): string {
  if (DISPLAY[adaptor]) return DISPLAY[adaptor];
  try {
    const title: string = JSON.parse(readFileSync(join(ROOT, 'specs/adaptors', adaptor, 'openapi.json'), 'utf8')).info.title;
    return title.replace(/\s*\(.*?\)\s*/g, ' ').replace(/\b(REST|Web|Public|Primary)?\s*API\b.*$/i, '').trim() || adaptor;
  } catch {
    return adaptor;
  }
}

/** mulberry32: small, seedable, good enough for sampling. */
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pick = <T>(r: () => number, xs: T[]): T => xs[Math.floor(r() * xs.length)];

/** The entity's top-level properties, when its schema resolves by name. */
function propsOf(e: Entity, specs: Map<string, any>): Record<string, any> {
  if (!specs.has(e.adaptor)) {
    specs.set(e.adaptor, JSON.parse(readFileSync(join(ROOT, 'specs/adaptors', e.adaptor, 'openapi.json'), 'utf8')));
  }
  const spec = specs.get(e.adaptor);
  const seen = new Set<string>();
  const walk = (node: any): Record<string, any> => {
    if (!node || typeof node !== 'object') return {};
    if (typeof node.$ref === 'string') {
      const name = node.$ref.split('/').pop();
      if (seen.has(name)) return {};
      seen.add(name);
      return walk(spec.components?.schemas?.[name]);
    }
    const out: Record<string, any> = { ...(node.properties ?? {}) };
    for (const k of ['allOf', 'oneOf', 'anyOf']) for (const s of node[k] ?? []) Object.assign(out, walk(s));
    return out;
  };
  return walk(spec.components?.schemas?.[e.name]);
}

/**
 * Choose the "modify" step from the source object's own fields: a date field
 * set to today if there is one (the ticket's birthday example), else a
 * name/description-like string field, else a generic note. Fields the spec
 * marks readOnly are skipped.
 */
function modification(e: Entity, specs: Map<string, any>, r: () => number): { field: string | null; instruction: string } {
  // Skip readOnly fields and localised variants (Stripe's display_name_kana).
  const props = Object.entries(propsOf(e, specs)).filter(
    ([k, s]) => !s?.readOnly && !/_(kana|kanji|[a-z]{2}_[A-Z]{2})$/.test(k) && !/^(id|uuid|_)/i.test(k)
  );
  const dates = props.filter(
    ([k, s]) =>
      (s?.format === 'date' || s?.format === 'date-time' || (s?.type === 'string' && /(?<!up)date|birth|dob/i.test(k))) &&
      // System-managed timestamps aren't something an integration would set.
      !/^_|last|created|updated|modified|login|lock|expir|deleted|sync/i.test(k)
  );
  if (dates.length) {
    const [k] = pick(r, dates);
    return { field: k, instruction: `set its ${k} to today's date` };
  }
  const strings = props.filter(([k, s]) => s?.type === 'string' && /name|title|description|note|comment|label/i.test(k) && !s?.enum && !/(id|ids|code|unit|status|type)$/i.test(k));
  if (strings.length) {
    const [k] = pick(r, strings);
    return { field: k, instruction: `append " (synced from OpenFn)" to its ${k}` };
  }
  return { field: null, instruction: `leave the fields unchanged` };
}

const TEMPLATES = [
  (a: string, an: string, mod: string, b: string, bn: string) =>
    `Get the latest ${an} from ${a}, ${mod}, and upload it as a ${bn} to ${b}.`,
  (a: string, an: string, mod: string, b: string, bn: string) =>
    `Write a workflow that fetches the most recent ${an} from ${a}, ${mod}, then creates a matching ${bn} in ${b}.`,
  (a: string, an: string, mod: string, b: string, bn: string) =>
    `I need to move data from ${a} to ${b}: pull the newest ${an}, ${mod}, and post it to ${b} as a ${bn}.`,
];

export function samplePrompts(opts: { n: number; seed: number; mockedSystems: string[] }): PromptCase[] {
  const r = rng(opts.seed);
  const entities: Entity[] = JSON.parse(
    readFileSync(join(ROOT, 'experiments/data-mapping-analysis/entities_final.json'), 'utf8')
  );
  const mocked = new Set(opts.mockedSystems);
  const peerType = loadJudgments();
  const eligible = entities.filter((e) => mocked.has(e.adaptor) && peerType.has(e.id));

  // System-level pairs: (A, B, peer type) -> candidate source and target entities.
  const pairs = new Map<string, { concept: string; peerType: string; sources: Entity[]; targets: Entity[] }>();
  const readers = eligible.filter((e) => e.R);
  const writers = eligible.filter((e) => e.W);
  for (const s of readers) {
    for (const t of writers) {
      const pt = peerType.get(s.id)!;
      if (s.concept !== t.concept || pt !== peerType.get(t.id) || s.adaptor === t.adaptor) continue;
      const key = `${s.adaptor}>${t.adaptor}:${pt}`;
      const p = pairs.get(key) ?? { concept: s.concept, peerType: pt, sources: [], targets: [] };
      if (!p.sources.includes(s)) p.sources.push(s);
      if (!p.targets.includes(t)) p.targets.push(t);
      pairs.set(key, p);
    }
  }

  // Stratify by peer type, proportional to system-level pair counts (largest remainder).
  const byConcept = new Map<string, string[]>();
  for (const [key, p] of pairs) byConcept.set(p.peerType, [...(byConcept.get(p.peerType) ?? []), key]);
  const total = pairs.size;
  const quotas = [...byConcept].map(([c, keys]) => {
    const exact = (opts.n * keys.length) / total;
    return { c, keys: keys.sort(), q: Math.floor(exact), rem: exact - Math.floor(exact) };
  });
  let short = opts.n - quotas.reduce((s, x) => s + x.q, 0);
  for (const x of [...quotas].sort((a, b) => b.rem - a.rem || a.c.localeCompare(b.c))) {
    if (short-- <= 0) break;
    x.q++;
  }

  const specs = new Map<string, any>();
  const out: PromptCase[] = [];
  const seen = new Set<string>();
  /** One draw from a system-level pair: entities, phrasing and modify step. */
  const draw = (key: string): PromptCase => {
    const p = pairs.get(key)!;
    const s = pick(r, p.sources);
    const t = pick(r, p.targets.filter((x) => x.adaptor !== s.adaptor));
    const mod = modification(s, specs, r);
    const a = systemName(s.adaptor);
    const b = systemName(t.adaptor);
    return {
      id: '',
      concept: p.concept,
      peerType: p.peerType,
      prompt: pick(r, TEMPLATES)(a, s.native, mod.instruction, b, t.native),
      source: { adaptor: s.adaptor, system: a, entity: s.name, native: s.native, confidence: s.cr, origin: s.origin },
      modify: mod,
      target: { adaptor: t.adaptor, system: b, entity: t.name, native: t.native, confidence: t.cw, origin: t.origin },
      confidence: s.cr == null || t.cw == null ? null : Math.min(s.cr, t.cw),
    };
  };
  /**
   * Every prompt text is distinct: the model only sees the text, so a repeat
   * would be a wasted generation. A draw that repeats an earlier text is
   * redrawn from the same stratum; a stratum with no distinct draws left gives
   * up after MAX_TRIES and its slot goes to the largest strata afterwards.
   */
  const MAX_TRIES = 200;
  const drawDistinct = (first: string | undefined, keys: string[]): PromptCase | undefined => {
    for (let tries = 0; tries < MAX_TRIES; tries++) {
      const c = draw(tries === 0 && first ? first : pick(r, keys));
      if (!seen.has(c.prompt)) {
        seen.add(c.prompt);
        return c;
      }
    }
    return undefined;
  };
  let shortfall = 0;
  const strata = quotas.sort((a, b) => a.c.localeCompare(b.c));
  for (const { keys, q } of strata) {
    // Pairs without replacement while the stratum has room, then with replacement.
    const pool = [...keys];
    for (let i = 0; i < q; i++) {
      const first = pool.length ? pool.splice(Math.floor(r() * pool.length), 1)[0] : undefined;
      const c = drawDistinct(first, keys);
      if (c) out.push(c);
      else shortfall++;
    }
  }
  for (const { keys } of [...strata].sort((a, b) => b.keys.length - a.keys.length || a.c.localeCompare(b.c))) {
    while (shortfall > 0) {
      const c = drawDistinct(undefined, keys);
      if (!c) break;
      out.push(c);
      shortfall--;
    }
  }
  // Shuffle so any prefix (e.g. a 50-prompt pilot) is itself a fair sample.
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  out.forEach((c, i) => (c.id = `bld120-${String(i + 1).padStart(4, '0')}`));
  return out;
}

function mockedSystemsFrom(mockerDir: string): string[] {
  return readdirSync(join(mockerDir, 'src/systems'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== 'shared' && d.name !== 'http-generic')
    .map((d) => d.name);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const arg = (k: string, d?: string) =>
    process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;
  const mockerDir = resolve(arg('mocker', process.env.MOCKER_DIR ?? '../openfn-mocker')!);
  const cases = samplePrompts({
    n: Number(arg('n', '1000')),
    seed: Number(arg('seed', '120')),
    mockedSystems: mockedSystemsFrom(mockerDir),
  });
  for (const c of cases) process.stdout.write(JSON.stringify(c) + '\n');
}
