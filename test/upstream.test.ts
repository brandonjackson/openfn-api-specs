import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { registryRoot, openapiPath, sourcePath } from '../src/paths.js';
import type { SpecSource } from '../src/types.js';

/**
 * The verbatim contract (see AGENTS.md rule 2, and STANDARDS): a provider-published
 * OpenAPI spec is committed byte-for-byte as `upstream.<ext>` and never edited. This
 * is the offline gate that makes "never happens again" real:
 *
 *  - every `found-openapi` adaptor must ship its verbatim upstream file + a recorded
 *    `upstream.contentHash` (you cannot claim a vendor spec without committing it), and
 *  - whenever a `contentHash` is recorded, the committed upstream file must still hash
 *    to it — so editing/subsetting a captured provider spec after the fact fails CI.
 *
 * (Drift-vs-refetch — the API moving under us — is a separate future `--check`; this
 * test guards the committed copy, which is what the "specs were edited" concern is about.)
 */

const ROOT = registryRoot();
const readJson = (p: string) => JSON.parse(readFileSync(p, 'utf8'));

const adaptors = existsSync(ROOT)
  ? readdirSync(ROOT)
      .filter((n) => statSync(join(ROOT, n)).isDirectory())
      .filter((n) => existsSync(openapiPath(n)))
      .sort()
  : [];

/** The committed `upstream.{json,yaml,yml}` file for an adaptor, or undefined. */
function findUpstreamFile(adaptor: string): string | undefined {
  const dir = join(ROOT, adaptor);
  for (const ext of ['json', 'yaml', 'yml']) {
    const p = join(dir, `upstream.${ext}`);
    if (existsSync(p)) return p;
  }
  return undefined;
}

test('every found-openapi adaptor ships a verbatim upstream file + contentHash', () => {
  const bad: string[] = [];
  for (const a of adaptors) {
    if (!existsSync(sourcePath(a))) continue;
    const src = readJson(sourcePath(a)) as SpecSource;
    if (src.origin !== 'found-openapi') continue;
    if (!findUpstreamFile(a)) bad.push(`${a}: no upstream.* file (a published OpenAPI spec must be committed verbatim)`);
    if (!src.upstream?.contentHash) bad.push(`${a}: no source.upstream.contentHash`);
  }
  assert.deepEqual(bad, [], `verbatim provider specs missing their upstream:\n  ${bad.join('\n  ')}`);
});

test('a committed upstream file still matches its recorded contentHash (no post-hoc edits)', () => {
  const tampered: string[] = [];
  for (const a of adaptors) {
    if (!existsSync(sourcePath(a))) continue;
    const src = readJson(sourcePath(a)) as SpecSource;
    const recorded = src.upstream?.contentHash;
    if (!recorded) continue; // only checkable when a hash was recorded
    const file = findUpstreamFile(a);
    if (!file) {
      tampered.push(`${a}: contentHash recorded but no upstream.* file present`);
      continue;
    }
    const actual = 'sha256:' + createHash('sha256').update(readFileSync(file)).digest('hex');
    if (actual !== recorded) {
      tampered.push(`${a}: ${file.split('/').pop()} hash ${actual} != recorded ${recorded} — the verbatim spec was edited (record edits in source.modifications[] and re-capture)`);
    }
  }
  assert.deepEqual(tampered, [], `verbatim drift:\n  ${tampered.join('\n  ')}`);
});
