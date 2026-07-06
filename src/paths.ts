import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * On-disk layout for the spec registry:
 *
 *   specs/adaptors/
 *     _adaptors.json            cached list of adaptor names from openfn/adaptors
 *     manifest.json             aggregate index + coverage status
 *     <adaptor>/
 *       openapi.json            the OpenAPI 3.x spec (found, converted, or generated)
 *       source.json             provenance: origin, source URLs, method, date, notes
 *       data-schemas/           one standalone JSON Schema per data object + index.json
 *
 * Paths resolve relative to this package's own `specs/adaptors` directory —
 * walking up from this module first (so a consumer that installs this package
 * as a dependency reads the shipped specs, not something in its own cwd), and
 * falling back to the process cwd for in-repo runs. Override with API_SPECS_ROOT.
 */

const HERE = dirname(fileURLToPath(import.meta.url));

/** Locate the package/repo root by walking up until a `specs/adaptors` dir is found. */
function findRoot(): string {
  const override = process.env.API_SPECS_ROOT?.trim();
  if (override) return resolve(override, '..', '..');

  const candidates: string[] = [];
  // Walk up from this module's dir first (works from src/ in dev and dist/ when
  // installed under node_modules/openfn-api-specs/dist).
  let dir = HERE;
  for (let i = 0; i < 8; i++) {
    candidates.push(dir);
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  candidates.push(process.cwd()); // last resort
  for (const c of candidates) {
    if (existsSync(join(c, 'specs', 'adaptors'))) return c;
  }
  return process.cwd();
}

/** Root dir for the registry: `<root>/specs/adaptors` (override API_SPECS_ROOT). */
export function registryRoot(): string {
  const override = process.env.API_SPECS_ROOT?.trim();
  if (override) return resolve(override);
  return join(findRoot(), 'specs', 'adaptors');
}

/** Directory holding one adaptor's spec files. */
export function adaptorDir(name: string): string {
  return join(registryRoot(), name);
}

export function openapiPath(name: string): string {
  return join(adaptorDir(name), 'openapi.json');
}

export function sourcePath(name: string): string {
  return join(adaptorDir(name), 'source.json');
}

/** Directory holding one adaptor's standalone data-object schema files. */
export function dataSchemasDir(name: string): string {
  return join(adaptorDir(name), 'data-schemas');
}

/** Index listing an adaptor's data objects (written inside data-schemas/). */
export function dataSchemasIndexPath(name: string): string {
  return join(dataSchemasDir(name), 'index.json');
}

export function manifestPath(): string {
  return join(registryRoot(), 'manifest.json');
}
