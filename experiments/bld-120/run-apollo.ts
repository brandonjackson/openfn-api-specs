/**
 * BLD-120 step 2: send each prompt to Apollo's global_chat and save what comes
 * back (the workflow YAML with job bodies, the text answer, token usage).
 *
 * Resumable: a prompt whose output file already exists is skipped, so a run
 * that dies halfway can simply be started again. Failed calls are written with
 * an `error` field and are retried on the next run only with --retry-errors.
 *
 *   APOLLO_URL=https://apollo-staging.openfn.org APOLLO_API_KEY=... \
 *   npx tsx experiments/bld-120/run-apollo.ts --limit=50 --concurrency=4
 *
 * APOLLO_API_KEY is sent as the payload's `api_key`, the same field Lightning
 * sends; leave it unset against a local Apollo that has a global key.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PromptCase } from './sample-prompts.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const arg = (k: string, d?: string) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;

const APOLLO_URL = (process.env.APOLLO_URL ?? 'http://localhost:3000').replace(/\/$/, '');
const API_KEY = process.env.APOLLO_API_KEY;
const promptsPath = arg('prompts', join(HERE, 'prompts.jsonl'))!;
const outDir = arg('out', join(HERE, 'generations'))!;
const limit = Number(arg('limit', 'Infinity'));
const concurrency = Number(arg('concurrency', '4'));
const timeoutMs = Number(arg('timeout', String(10 * 60_000)));
const retryErrors = process.argv.includes('--retry-errors');

export interface Generation {
  id: string;
  prompt: string;
  workflow_yaml: string | null;
  response: string | null;
  usage: Record<string, number> | null;
  meta: unknown;
  ms: number;
  error?: string;
  at: string;
}

async function generate(c: PromptCase): Promise<Generation> {
  const started = Date.now();
  const base = { id: c.id, prompt: c.prompt, at: new Date().toISOString() };
  try {
    const res = await fetch(`${APOLLO_URL}/services/global_chat`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ content: c.prompt, ...(API_KEY ? { api_key: API_KEY } : {}) }),
      signal: AbortSignal.timeout(timeoutMs),
    });
    const text = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
    const body = JSON.parse(text);
    const yaml = (body.attachments ?? []).find((a: any) => a?.type === 'workflow_yaml')?.content ?? null;
    return { ...base, workflow_yaml: yaml, response: body.response ?? null, usage: body.usage ?? null, meta: body.meta ?? null, ms: Date.now() - started };
  } catch (err: any) {
    return { ...base, workflow_yaml: null, response: null, usage: null, meta: null, ms: Date.now() - started, error: String(err?.message ?? err) };
  }
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  const cases: PromptCase[] = readFileSync(promptsPath, 'utf8').trim().split('\n').map((l) => JSON.parse(l)).slice(0, limit);
  const todo = cases.filter((c) => {
    const p = join(outDir, `${c.id}.json`);
    if (!existsSync(p)) return true;
    return retryErrors && JSON.parse(readFileSync(p, 'utf8')).error;
  });
  console.log(`${cases.length} prompts, ${todo.length} to generate against ${APOLLO_URL}`);

  let done = 0;
  let tokens = 0;
  const worker = async () => {
    for (let c = todo.shift(); c; c = todo.shift()) {
      const g = await generate(c);
      writeFileSync(join(outDir, `${c.id}.json`), JSON.stringify(g, null, 2));
      tokens += (g.usage?.input_tokens ?? 0) + (g.usage?.output_tokens ?? 0);
      done++;
      console.log(`${c.id} ${g.error ? 'ERROR ' + g.error.slice(0, 80) : g.workflow_yaml ? 'ok' : 'no workflow'} ${(g.ms / 1000).toFixed(0)}s (${done} done, ${tokens} tokens)`);
    }
  };
  await Promise.all(Array.from({ length: concurrency }, worker));
}

main();
