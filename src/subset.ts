/**
 * Mechanical subsetting of a verbatim vendor OpenAPI.
 *
 * AGENTS.md allows a narrowed `openapi.json` only when it is *derived* from a
 * full source of truth by a stated rule, never hand-picked. This module is that
 * rule, made executable: `source.json` carries a `subsetRule`, and `pnpm specs
 * convert <a>` applies it to the converted upstream, so a refreshed upstream
 * yields a refreshed subset with no manual step and no lost provenance.
 *
 * The rule keeps a path when its first segment is one of `resources` (exactly:
 * an OData alternate-key segment like `users(userPrincipalName='…')` does not
 * count as `users`) and it has at most `maxSegments` segments, plus every path in
 * `include`. Path items are copied verbatim; `components` is reduced to the
 * transitive `$ref` closure of what is kept, in upstream order.
 */
import type { SubsetRule } from './types.js';

const SECTIONS = [
  'schemas',
  'responses',
  'parameters',
  'examples',
  'requestBodies',
  'headers',
  'securitySchemes',
  'links',
  'callbacks',
  'pathItems',
] as const;

export function keepsPath(path: string, rule: SubsetRule): boolean {
  if (rule.include?.includes(path)) return true;
  const segs = path.replace(/^\/+|\/+$/g, '').split('/');
  return rule.resources.includes(segs[0]) && segs.length <= rule.maxSegments;
}

function collectRefs(node: unknown, out: Set<string>): void {
  if (Array.isArray(node)) {
    for (const v of node) collectRefs(v, out);
  } else if (node && typeof node === 'object') {
    const ref = (node as Record<string, unknown>).$ref;
    if (typeof ref === 'string' && ref.startsWith('#/components/')) out.add(ref);
    for (const v of Object.values(node)) collectRefs(v, out);
  }
}

function lookup(doc: any, ref: string): unknown {
  const [, , section, ...rest] = ref.split('/');
  const name = rest.join('/').replace(/~1/g, '/').replace(/~0/g, '~');
  return doc.components?.[section]?.[name];
}

export interface SubsetResult {
  openapi: any;
  paths: number;
  operations: number;
}

/** Apply `rule` to a full OpenAPI document; returns a new document (input untouched). */
export function deriveSubset(full: any, rule: SubsetRule): SubsetResult {
  const paths: Record<string, unknown> = {};
  for (const [p, item] of Object.entries(full.paths ?? {})) if (keepsPath(p, rule)) paths[p] = item;

  // Transitive $ref closure over components, seeded from the kept paths and
  // the document's own security requirements.
  const seen = new Set<string>();
  const queue = new Set<string>();
  collectRefs(paths, queue);
  collectRefs(full.security, queue);
  while (queue.size) {
    const [ref] = queue;
    queue.delete(ref);
    if (seen.has(ref)) continue;
    seen.add(ref);
    const found = new Set<string>();
    collectRefs(lookup(full, ref), found);
    for (const r of found) if (!seen.has(r)) queue.add(r);
  }

  const components: Record<string, Record<string, unknown>> = {};
  for (const section of SECTIONS) {
    const src = full.components?.[section];
    if (!src) continue;
    const kept: Record<string, unknown> = {};
    for (const [name, value] of Object.entries(src)) {
      const ref = `#/components/${section}/${name.replace(/~/g, '~0').replace(/\//g, '~1')}`;
      // Security schemes are referenced by name, not $ref: keep them all.
      if (section === 'securitySchemes' || seen.has(ref)) kept[name] = value;
    }
    if (Object.keys(kept).length) components[section] = kept;
  }

  const openapi = JSON.parse(JSON.stringify({ ...full, paths, components }));
  if (rule.title) openapi.info = { ...openapi.info, title: rule.title };
  if (rule.note) openapi.info = { ...openapi.info, 'x-openfn-subset-note': rule.note };

  let operations = 0;
  for (const item of Object.values(paths) as Record<string, unknown>[]) {
    for (const m of ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']) if (item?.[m]) operations++;
  }
  return { openapi, paths: Object.keys(paths).length, operations };
}
