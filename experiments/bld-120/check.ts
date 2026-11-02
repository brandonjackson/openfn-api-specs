/**
 * BLD-120 step 3: run each generated workflow against openfn-mocker and judge
 * the HTTP traffic it produces against the full OpenAPI specs in this repo.
 *
 * For one generation:
 *   1. parse the workflow YAML into ordered steps (trigger -> edges);
 *   2. boot one root-mounted mock per mocked system the steps use, each with an
 *      exchange capture, and give every step a credential pointing at its mock;
 *   3. run the whole workflow through the real `@openfn/cli` (real published
 *      adaptors from npm), with a tracking hook prepended to every step after
 *      the first that records reads of fields the incoming data doesn't have;
 *   4. judge each system's captured exchanges with `createConformer` against
 *      that adaptor's `openapi.json`, which is the verdict on endpoints and
 *      request bodies. The mock's own 404s are evidence, not the verdict: its
 *      routes are hand-written and narrower than the spec.
 *
 * The four BLD-120 checks per prompt:
 *   source_endpoint  every request to system A matches an operation in A's spec
 *   source_fields    later steps read no field that A's data didn't carry
 *   target_body      every body sent to system B passes B's request schema
 *   target_endpoint  B received a write, and every request to B matches B's spec
 * A check is `null` (not measured) when the run never reached it, e.g. the
 * source step failed so B was never called. The report gives rates both over
 * all prompts (null = fail) and over measured prompts only.
 *
 *   MOCKER_DIR=../openfn-mocker npx tsx experiments/bld-120/check.ts --limit=50
 *
 * Needs the OpenFn CLI on PATH (`npm i -g @openfn/cli`) and root for systems
 * that need host aliasing (it writes /etc/hosts entries, removed on exit).
 */
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import * as http from 'node:http';
import * as https from 'node:https';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse as parseYaml } from 'yaml';

import { createConformer, type Exchange, type Violation } from '../../src/conform.js';
import { parseSpec } from '../../src/spec-parser.js';
import type { PromptCase } from './sample-prompts.js';
import type { Generation } from './run-apollo.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const arg = (k: string, d?: string) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;

const MOCKER_DIR = resolve(arg('mocker', process.env.MOCKER_DIR ?? join(ROOT, '../openfn-mocker'))!);
const RUN_TIMEOUT_MS = Number(arg('timeout', '60000'));
const REPO_DIR = process.env.OPENFN_REPO_DIR ?? join(tmpdir(), 'openfn-mocker-adaptors');

// ---------------------------------------------------------------- workflow

export interface Step {
  key: string;
  name: string;
  adaptor: string; // short name: 'dhis2'
  version: string;
  body: string;
}

/** '@openfn/language-dhis2@4.2.1' -> { adaptor: 'dhis2', version: '4.2.1' } */
export function parseAdaptor(spec: string): { adaptor: string; version: string } {
  const m = String(spec ?? '').match(/^(?:@openfn\/language-)?([a-z0-9-]+?)(?:@(.+))?$/i);
  return { adaptor: m?.[1] ?? String(spec), version: m?.[2] ?? 'latest' };
}

/**
 * Ordered steps from Lightning workflow YAML (jobs/triggers/edges maps, or the
 * list forms). Order follows edges from the trigger; jobs no edge reaches are
 * appended in YAML order so nothing generated is silently skipped.
 */
export function parseWorkflow(yaml: string): Step[] {
  const doc = parseYaml(yaml) ?? {};
  const wf = doc.workflows ? Object.values(doc.workflows)[0] as any : doc;
  const jobsRaw = wf.jobs ?? {};
  const jobs: [string, any][] = Array.isArray(jobsRaw)
    ? jobsRaw.map((j: any, i: number) => [j.id ?? j.name ?? String(i), j])
    : Object.entries(jobsRaw);
  const edgesRaw = wf.edges ?? {};
  const edges: any[] = Array.isArray(edgesRaw) ? edgesRaw : Object.values(edgesRaw);
  const norm = (s: string) => String(s ?? '').trim().toLowerCase().replace(/[\s_]+/g, '-');
  const byNorm = new Map(jobs.map(([k, j]) => [norm(k), k] as const));
  for (const [k, j] of jobs) if (j?.name) byNorm.set(norm(j.name), k);

  const order: string[] = [];
  const visit = (k: string | undefined) => {
    if (!k || order.includes(k)) return;
    order.push(k);
    for (const e of edges) if (byNorm.get(norm(e.source_job)) === k) visit(byNorm.get(norm(e.target_job)));
  };
  for (const e of edges) if (e.source_trigger) visit(byNorm.get(norm(e.target_job)));
  for (const [k] of jobs) visit(k);

  return order.map((k) => {
    const j = Object.fromEntries(jobs)[k];
    return { key: k, name: j.name ?? k, ...parseAdaptor(j.adaptor), body: String(j.body ?? '') };
  });
}

// ---------------------------------------------------------------- mocks

interface Mocker {
  plugins: Record<string, any>;
  createSystemServer: (plugin: any, config: any, opts: any) => Promise<{ app: any }>;
  loadConfig: (path?: string) => any;
  resolveCredentialValues: (spec: any, opts: any) => Record<string, unknown>;
  systemVars: (guide: any, config: any) => Record<string, string>;
  attachExchangeCapture: (app: any) => { exchanges: Exchange[] };
}

async function loadMocker(): Promise<Mocker> {
  const imp = (p: string) => import(pathToFileURL(join(MOCKER_DIR, p)).href);
  const [server, systems, config, creds, conf] = await Promise.all([
    imp('src/server.ts'), imp('src/systems/index.ts'), imp('src/config.ts'), imp('src/credentials.ts'),
    imp('scripts/lib/conformance.ts'),
  ]);
  return {
    plugins: systems.plugins,
    createSystemServer: server.createSystemServer,
    loadConfig: config.loadConfig,
    resolveCredentialValues: creds.resolveCredentialValues,
    systemVars: creds.systemVars,
    attachExchangeCapture: conf.attachExchangeCapture,
  };
}

/** Mock system key for an adaptor short name ('fhir-4' -> 'fhir' when a plugin says so). */
function systemFor(m: Mocker, adaptor: string): string | undefined {
  if (m.plugins[adaptor] && !m.plugins[adaptor].adaptorName) return adaptor;
  return Object.keys(m.plugins).find((k) => (m.plugins[k].adaptorName ?? k) === adaptor);
}

interface RunningMock {
  system: string;
  configuration: Record<string, unknown>;
  exchanges: Exchange[];
  env: Record<string, string>;
  reset(): Promise<void>;
  close(): Promise<void>;
}

const HOSTS = '/etc/hosts';
const HOSTS_MARK = '# bld-120 check alias (safe to delete)';
const CERT_DIR = join(tmpdir(), 'openfn-mocker-alias-cert');

function cert(): { cert: string; key: string } {
  const c = join(CERT_DIR, 'cert.pem');
  const k = join(CERT_DIR, 'key.pem');
  if (!existsSync(c)) {
    mkdirSync(CERT_DIR, { recursive: true });
    spawnSync('openssl', ['req', '-x509', '-newkey', 'rsa:2048', '-keyout', k, '-out', c, '-days', '3650', '-nodes', '-subj', '/CN=openfn-mocker']);
  }
  return { cert: readFileSync(c, 'utf8'), key: readFileSync(k, 'utf8') };
}

/**
 * Host aliasing for adaptors that derive per-service hostnames from a `host`
 * credential field (opencrvs: auth.<domain>, gateway.<domain>, ...) or call a
 * hardcoded public host (mailgun). Same mechanism as the mocker's
 * scripts/lib/host-alias-proxy.ts, with one fix: the base domain is a name
 * (`<system>.mock.test`), not `127.0.0.1`, because `auth.127.0.0.1` is not a
 * valid URL host (its last label is numeric, so WHATWG parses it as IPv4).
 */
async function startAlias(plugin: any, backendPort: number) {
  if (!plugin.hostAliases?.length) return undefined;
  const base = `${plugin.name}.mock.test`;
  const hosts: string[] = [...new Set<string>(plugin.hostAliases.map((t: string) => t.replace('{host}', base)))];
  const current = readFileSync(HOSTS, 'utf8');
  const add = hosts.filter((h) => !current.includes(`127.0.0.1 ${h} `)).map((h) => `127.0.0.1 ${h} ${HOSTS_MARK}`);
  if (add.length) writeFileSync(HOSTS, current.replace(/\n?$/, '\n') + add.join('\n') + '\n');
  const explicitPort = plugin.credential?.fields?.some((f: any) => f.role === 'host');
  const server = https.createServer(cert(), (req, res) => {
    const up = http.request({ host: '127.0.0.1', port: backendPort, method: req.method, path: req.url, headers: req.headers }, (r) => {
      res.writeHead(r.statusCode ?? 502, r.headers);
      r.pipe(res);
    });
    up.on('error', () => { res.writeHead(502); res.end(); });
    req.pipe(up);
  });
  const port: number = await new Promise((ok, fail) => {
    server.once('error', fail);
    server.listen(explicitPort ? 0 : 443, '0.0.0.0', () => ok((server.address() as any).port));
  });
  return {
    hostValue: explicitPort ? `${base}:${port}` : undefined,
    env: { NODE_TLS_REJECT_UNAUTHORIZED: '0', NO_PROXY: [process.env.NO_PROXY, ...hosts].filter(Boolean).join(','), no_proxy: [process.env.no_proxy, ...hosts].filter(Boolean).join(',') },
    close: () => new Promise<void>((ok) => server.close(() => ok())),
  };
}

async function startMock(m: Mocker, system: string): Promise<RunningMock> {
  const plugin = m.plugins[system];
  let fromFile: any = {};
  try { fromFile = m.loadConfig(join(MOCKER_DIR, 'mock.config.yaml')).systems?.[system] ?? {}; } catch { /* defaults */ }
  const config = { ...fromFile, port: 0 };
  // Faults off: one run per prompt, so an injected 500 would be noise. Latency off too.
  for (const k of ['error_rate', 'error_status', 'rate_limit', 'latency']) delete config[k];
  const { app } = await m.createSystemServer(plugin, config, { logLevel: 'warn', autoAuth: false });
  const { exchanges } = m.attachExchangeCapture(app);
  await app.listen({ port: 0, host: '127.0.0.1' });
  const port = (app.server.address() as any).port;
  const origin = `http://127.0.0.1:${port}`;
  const alias = await startAlias(plugin, port);
  const vars = { ...m.systemVars(plugin.guide, config), ORIGIN: origin };
  const configuration = m.resolveCredentialValues(plugin.credential, { url: origin, hostValue: alias?.hostValue, vars });
  return {
    system, configuration, exchanges, env: alias?.env ?? {},
    reset: async () => {
      exchanges.length = 0;
      await fetch(`${origin}/_admin/reset`, { method: 'POST' }).catch(() => undefined);
    },
    close: async () => { await alias?.close(); await app.close(); },
  };
}

// ---------------------------------------------------------------- run

/**
 * Prepended to every step after the first: wraps the incoming state.data in a
 * Proxy that records reads of properties the object doesn't have, so a mapping
 * that reads `patient.dob` from data that carries `birthDate` is caught.
 * Runtime/serialiser probes (toJSON, then, ...) are not the job's reads.
 */
const TRACK = (step: string) => `fn(state => {
  const IGNORE = new Set(['toJSON','then','read','constructor','inspect','asymmetricMatch','$$typeof','nodeType','length']);
  const misses = (globalThis.__bld120 = globalThis.__bld120 || {})[${JSON.stringify(step)}] = [];
  const wrap = (v, p) => v && typeof v === 'object' ? new Proxy(v, { get(t, k, r) {
    const x = Reflect.get(t, k, r);
    if (typeof k === 'string' && !(k in t) && !IGNORE.has(k) && !k.startsWith('__') && !(Array.isArray(t) && /^\\d+$/.test(k))) misses.push(p + '.' + k);
    return wrap(x, Array.isArray(t) && /^\\d+$/.test(k) ? p + '[]' : p + '.' + String(k));
  } }) : v;
  state.data = wrap(state.data, 'data');
  return state;
});
`;
const FLUSH = `\nfn(state => { state.__bld120 = globalThis.__bld120 || {}; return state; });\n`;

interface RunOutcome {
  ok: boolean;
  errors: string[];
  log: string;
  misses: Record<string, string[]>;
  stepsCompleted: string[];
  timedOut: boolean;
}

function runWorkflow(steps: Step[], configs: Record<string, unknown>[], env: Record<string, string>, dir: string): Promise<RunOutcome> {
  mkdirSync(dir, { recursive: true });
  const wf = {
    workflow: {
      steps: steps.map((s, i) => ({
        id: `s${i}`,
        name: s.name,
        adaptor: `@openfn/language-${s.adaptor}@${s.version}`,
        configuration: configs[i] ?? {},
        expression: (i > 0 ? TRACK(s.name) : '') + s.body + FLUSH,
        ...(i < steps.length - 1 ? { next: { [`s${i + 1}`]: true } } : {}),
      })),
    },
  };
  const wfPath = join(dir, 'workflow.json');
  const outPath = join(dir, 'out.json');
  writeFileSync(wfPath, JSON.stringify(wf, null, 2));
  return new Promise((done) => {
    const child = spawn('openfn', [wfPath, '-o', outPath], { detached: true, env: { ...process.env, OPENFN_REPO_DIR: REPO_DIR, ...env } });
    let log = '';
    child.stdout.on('data', (b) => (log += b));
    child.stderr.on('data', (b) => (log += b));
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      try { process.kill(-child.pid!, 'SIGKILL'); } catch { child.kill('SIGKILL'); }
    }, RUN_TIMEOUT_MS);
    child.on('close', (code) => {
      clearTimeout(timer);
      writeFileSync(join(dir, 'run.log'), log);
      let state: any = {};
      try { state = JSON.parse(readFileSync(outPath, 'utf8')); } catch { /* none written */ }
      const errors = Object.values(state?.errors ?? {}).map((e: any) => e?.message ?? String(e));
      const fatal = log.match(/(CRITICAL ERROR[^\n]*|[✗×][^\n]*)/g) ?? [];
      const stepsCompleted = [...log.matchAll(/√ (s\d+) completed/g)].map((m) => m[1]);
      done({
        ok: code === 0 && !timedOut && errors.length === 0 && fatal.length === 0,
        errors: [...errors, ...fatal].slice(0, 5),
        log: log.slice(-4000),
        misses: state?.__bld120 ?? {},
        stepsCompleted,
        timedOut,
      });
    });
  });
}

// ---------------------------------------------------------------- judge

type PathStatus = 'declared' | 'undeclared' | 'unknown';

/**
 * Is a read path ('instances[].attributes[].value') declared by a response
 * schema? `unknown` where the schema can't say (free-form object, no schema,
 * additionalProperties allowed), so only a field the schema positively rules
 * out counts as invented.
 */
export function pathStatus(root: any, segs: string[], schemas: Record<string, any>, data?: unknown): PathStatus {
  // Cycle guard per $ref chain (A -> B -> A), not per walk: a union's branches
  // are dereferenced to narrow them and must still resolve when walked.
  const deref = (n: any): any => {
    const seen = new Set<string>();
    while (n && typeof n.$ref === 'string') {
      if (seen.has(n.$ref)) return undefined;
      seen.add(n.$ref);
      n = schemas[n.$ref.split('/').pop()!];
    }
    return n;
  };
  /**
   * A oneOf/anyOf union (FHIR's Bundle.entry.resource is every resource type)
   * is narrowed by the actual record: keep the branches whose const/enum
   * discriminator properties match it (resourceType: 'Patient'), so a field
   * from some other branch doesn't count as declared.
   */
  const narrow = (branches: any[], val: any): any[] => {
    if (!val || typeof val !== 'object' || Array.isArray(val)) return branches;
    const fits = branches.filter((b) => {
      const props = deref(b)?.properties ?? {};
      return Object.entries(props).every(([k, ps]: [string, any]) => {
        const p = deref(ps);
        if (p?.const !== undefined) return val[k] === p.const;
        if (Array.isArray(p?.enum) && p.enum.length === 1) return val[k] === p.enum[0];
        return true;
      });
    });
    return fits.length ? fits : branches;
  };
  const walk = (node: any, i: number, val: any): PathStatus => {
    node = deref(node);
    if (!node || typeof node !== 'object') return 'unknown';
    if (i === segs.length) return 'declared';
    const unions = [...(node.oneOf ?? []), ...(node.anyOf ?? [])];
    const branches = [...(node.allOf ?? []), ...narrow(unions, val)];
    if (branches.length) {
      const own = node.properties || node.items ? [walk({ ...node, allOf: undefined, oneOf: undefined, anyOf: undefined }, i, val)] : [];
      const rs = [...own, ...branches.map((b: any) => walk(b, i, val))];
      return rs.includes('declared') ? 'declared' : rs.includes('unknown') ? 'unknown' : 'undeclared';
    }
    const seg = segs[i];
    const next = (n: any, v: any) => walk(n, i + 1, v);
    if (seg === '[]') return node.items ? next(node.items, Array.isArray(val) ? val[0] : undefined) : node.type === 'array' ? 'unknown' : 'undeclared';
    const child = val && typeof val === 'object' ? (val as any)[seg] : undefined;
    if (node.properties && seg in node.properties) return next(node.properties[seg], child);
    if (node.additionalProperties && typeof node.additionalProperties === 'object') return next(node.additionalProperties, child);
    if (node.additionalProperties === true || (!node.properties && node.type !== 'array')) return 'unknown';
    return 'undeclared';
  };
  return walk(root, 0, data);
}

/**
 * The status of a recorded read against A's response, allowing for adaptors
 * that unwrap an envelope ({ instances: [...] } -> [...], { data: {...} } ->
 * {...}) before the next step sees it: try the body itself, then each of its
 * top-level properties as the root.
 */
export function readStatus(responseSchema: any, path: string, schemas: Record<string, any>, body?: any): PathStatus {
  const segs = path.replace(/^data\.?/, '').split(/\.|(?=\[\])/).filter(Boolean).map((x) => (x === '[]' ? '[]' : x.replace(/^\[\]\.?/, '')));
  const flat = segs.flatMap((x) => (x.startsWith('[]') ? ['[]', x.slice(2)].filter(Boolean) : [x]));
  const roots: [any, any][] = [[responseSchema, body]];
  const top = responseSchema?.$ref ? schemas[responseSchema.$ref.split('/').pop()] : responseSchema;
  for (const [k, v] of Object.entries<any>(top?.properties ?? {})) {
    const inner = body && typeof body === 'object' ? body[k] : undefined;
    roots.push([v, inner], [v?.items, Array.isArray(inner) ? inner[0] : undefined]);
  }
  // Candidate alignments: each root as-is, and (for a path that starts with
  // '[]') each root as the unwrapped element. Only alignments whose first
  // segment the schema actually declares are used, so a free-form sibling
  // property can't turn an invented field into 'unknown'.
  const live = roots.filter(([r]) => r);
  const tries: [any, string[], any][] = live.map(([r, d]) => [r, flat, d]);
  if (flat[0] === '[]') tries.push(...live.map(([r, d]) => [r, flat.slice(1), Array.isArray(d) ? d[0] : d] as [any, string[], any]));
  const aligned = tries.filter(([r, segs, d]) => segs.length && pathStatus(r, segs.slice(0, segs[0] === '[]' ? 2 : 1), schemas, d) === 'declared');
  const rs = (aligned.length ? aligned : tries).map(([r, segs, d]) => pathStatus(r, segs, schemas, d));
  return rs.includes('declared') ? 'declared' : rs.includes('unknown') ? 'unknown' : 'undeclared';
}

const WRITE = new Set(['POST', 'PUT', 'PATCH']);

function specFor(adaptor: string): any | undefined {
  const p = join(ROOT, 'specs/adaptors', adaptor, 'openapi.json');
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : undefined;
}

export interface CheckResult {
  id: string;
  concept: string;
  peerType?: string;
  confidence: number | null;
  source: string;
  target: string;
  generated: boolean;
  steps: { name: string; adaptor: string }[];
  uses_source_adaptor: boolean;
  uses_target_adaptor: boolean;
  run_ok: boolean | null;
  checks: { source_endpoint: boolean | null; source_fields: boolean | null; target_body: boolean | null; target_endpoint: boolean | null };
  violations: { system: string; kind: string; operation?: string; exchange: string; pointer?: string; message: string }[];
  misses: { path: string; status: PathStatus }[];
  exchanges: { system: string; method: string; path: string; status: number }[];
  errors: string[];
  note?: string;
}

const allTrue = (xs: boolean[]) => xs.length > 0 && xs.every(Boolean);

export async function checkOne(m: Mocker, c: PromptCase, g: Generation, workDir: string): Promise<CheckResult> {
  const base: CheckResult = {
    id: c.id, concept: c.concept, peerType: c.peerType, confidence: c.confidence, source: c.source.adaptor, target: c.target.adaptor,
    generated: !!g.workflow_yaml, steps: [], uses_source_adaptor: false, uses_target_adaptor: false, run_ok: null,
    checks: { source_endpoint: null, source_fields: null, target_body: null, target_endpoint: null },
    violations: [], misses: [], exchanges: [], errors: g.error ? [g.error] : [],
  };
  if (!g.workflow_yaml) return { ...base, note: 'no workflow generated' };

  let steps: Step[];
  try {
    steps = parseWorkflow(g.workflow_yaml);
  } catch (err: any) {
    return { ...base, note: `workflow YAML did not parse: ${err.message}` };
  }
  base.steps = steps.map((s) => ({ name: s.name, adaptor: s.adaptor }));
  base.uses_source_adaptor = steps.some((s) => s.adaptor === c.source.adaptor);
  base.uses_target_adaptor = steps.some((s) => s.adaptor === c.target.adaptor);

  // One mock per mocked system the workflow touches (plus A and B, so a step
  // using the generic http adaptor against A's base URL still lands somewhere).
  const systems = new Map<string, RunningMock>();
  const wanted = [...new Set([...steps.map((s) => s.adaptor), c.source.adaptor, c.target.adaptor])];
  try {
    for (const a of wanted) {
      const sys = systemFor(m, a);
      if (sys && !systems.has(a)) systems.set(a, await startMock(m, sys));
    }
    // A step on the generic http adaptor is pointed at A for the first such
    // step and B for the last; anything else gets an empty configuration.
    const configs = steps.map((s, i) => {
      const own = systems.get(s.adaptor);
      if (own) return own.configuration;
      if (s.adaptor === 'http') {
        const sys = systems.get(i === 0 ? c.source.adaptor : c.target.adaptor);
        const url = sys && Object.values(sys.configuration).find((v) => typeof v === 'string' && /^https?:/.test(v));
        return url ? { baseUrl: url } : {};
      }
      return {};
    });
    const env = Object.assign({}, ...[...systems.values()].map((s) => s.env));
    const run = await runWorkflow(steps, configs, env, join(workDir, c.id));
    base.run_ok = run.ok;
    base.errors.push(...run.errors);
    const rawMisses = [...new Set(Object.values(run.misses).flat())];

    // Judge each side's traffic against its own spec.
    const judge = (adaptor: string) => {
      const mock = systems.get(adaptor);
      const spec = specFor(adaptor);
      const ex = mock?.exchanges ?? [];
      // Query strings dropped: some carry (mock) client secrets, and the verdict doesn't need them.
      base.exchanges.push(...ex.map((e) => ({ system: adaptor, method: e.method, path: e.path.split('?')[0], status: e.status })));
      if (!spec || !ex.length) return { ex, v: [] as Violation[] };
      const conformer = createConformer(spec);
      const v = ex.flatMap((e) => conformer.check(e));
      base.violations.push(...v.map((x) => ({ system: adaptor, kind: x.kind, operation: x.operation, exchange: x.exchange, pointer: x.pointer, message: x.message })));
      return { ex, v };
    };
    const A = judge(c.source.adaptor);
    const B = c.target.adaptor === c.source.adaptor ? A : judge(c.target.adaptor);

    if (A.ex.length) base.checks.source_endpoint = !A.v.some((v) => v.kind === 'unknown-operation');

    // Field reads: judge each read of an absent field against the response
    // schema of A's last successful read. Only observable once A's data has
    // flowed into a later step, and only when A's spec gives a schema.
    const aSpec = specFor(c.source.adaptor);
    const lastRead = [...A.ex].reverse().find((e) => e.status < 300 && e.responseBody !== undefined);
    if (aSpec && lastRead && steps.length > 1 && Object.keys(run.misses).length) {
      const parsed = parseSpec(aSpec);
      const op = createConformer(aSpec).match(lastRead.method, lastRead.path);
      if (op?.responseSchema) {
        base.misses = rawMisses.map((path) => ({ path, status: readStatus(op.responseSchema, path, parsed.schemas, lastRead.responseBody) }));
        base.checks.source_fields = !base.misses.some((x) => x.status === 'undeclared');
      }
    }
    const bWrites = B.ex.filter((e) => WRITE.has(e.method.toUpperCase()));
    if (bWrites.length) {
      base.checks.target_endpoint = !B.v.some((v) => v.kind === 'unknown-operation');
      const known = B.v.filter((v) => v.kind === 'request-schema');
      base.checks.target_body = known.length === 0 && allTrue(bWrites.map(() => true));
    } else if (B.ex.length) {
      base.checks.target_endpoint = false; // B was called but never written to
    }
    return base;
  } finally {
    for (const s of systems.values()) await s.close();
  }
}

function cleanupHosts() {
  try {
    const cur = readFileSync(HOSTS, 'utf8');
    if (cur.includes(HOSTS_MARK)) writeFileSync(HOSTS, cur.split('\n').filter((l) => !l.includes(HOSTS_MARK)).join('\n'));
  } catch { /* not writable: nothing was added */ }
}

async function main() {
  const promptsPath = arg('prompts', join(HERE, 'prompts.jsonl'))!;
  const genDir = arg('generations', join(HERE, 'generations'))!;
  const outPath = arg('out', join(HERE, 'results.jsonl'))!;
  const workDir = arg('work', join(tmpdir(), 'bld120-runs'))!;
  const limit = Number(arg('limit', 'Infinity'));
  const only = arg('id');

  const cases: PromptCase[] = readFileSync(promptsPath, 'utf8').trim().split('\n').map((l) => JSON.parse(l));
  const done = new Set(existsSync(outPath) ? readFileSync(outPath, 'utf8').trim().split('\n').filter(Boolean).map((l) => JSON.parse(l).id) : []);
  const gens = new Set(existsSync(genDir) ? readdirSync(genDir).map((f) => f.replace(/\.json$/, '')) : []);
  const todo = cases.filter((c) => (only ? c.id === only : gens.has(c.id) && !done.has(c.id))).slice(0, limit);
  console.log(`${todo.length} generations to check (mocker: ${MOCKER_DIR})`);

  const m = await loadMocker();
  process.on('exit', cleanupHosts);
  for (const c of todo) {
    const g: Generation = JSON.parse(readFileSync(join(genDir, `${c.id}.json`), 'utf8'));
    let r: CheckResult;
    try {
      r = await checkOne(m, c, g, workDir);
    } catch (err: any) {
      r = { id: c.id, note: `checker error: ${err.message}` } as CheckResult;
    }
    writeFileSync(outPath, JSON.stringify(r) + '\n', { flag: 'a' });
    const k = r.checks ?? ({} as any);
    const f = (x: boolean | null | undefined) => (x === true ? '✓' : x === false ? '✗' : '·');
    console.log(`${c.id} run:${f(r.run_ok)} A-endpoint:${f(k.source_endpoint)} A-fields:${f(k.source_fields)} B-body:${f(k.target_body)} B-endpoint:${f(k.target_endpoint)} ${r.note ?? ''}`);
  }
  cleanupHosts();
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
