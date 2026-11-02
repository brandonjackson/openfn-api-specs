// Write the entity rows the peer judges classify: kept concepts, mocked adaptors,
// with each entity's top-level field names and descriptions-at-a-glance.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
const mocker = process.argv[2];
const E = JSON.parse(readFileSync('experiments/data-mapping-analysis/entities_final.json', 'utf8'));
const sys = readdirSync(`${mocker}/src/systems`, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !['shared', 'http-generic'].includes(d.name)).map((d) => d.name);
const KEEP = new Set('PERSON STAFF_USER ORG LOCATION ENCOUNTER OBSERVATION CASE MESSAGE IMMUNIZATION MEDICATION LAB_ORDER PRODUCT INVENTORY SUBMISSION FINANCE_TX CIVIL_EVENT CONDITION'.split(' '));
const specs = {};
const props = (e) => {
  const spec = (specs[e.adaptor] ??= JSON.parse(readFileSync(`specs/adaptors/${e.adaptor}/openapi.json`, 'utf8')));
  const seen = new Set();
  const walk = (n) => {
    if (!n || typeof n !== 'object') return {};
    if (n.$ref) { const k = n.$ref.split('/').pop(); if (seen.has(k)) return {}; seen.add(k); return walk(spec.components?.schemas?.[k]); }
    const o = { ...(n.properties ?? {}) };
    for (const k of ['allOf', 'oneOf', 'anyOf']) for (const s of n[k] ?? []) Object.assign(o, walk(s));
    return o;
  };
  return Object.keys(walk(spec.components?.schemas?.[e.name])).slice(0, 25).join(',');
};
const rows = E.filter((e) => sys.includes(e.adaptor) && KEEP.has(e.concept) && (e.R || e.W))
  .sort((a, b) => a.concept.localeCompare(b.concept) || a.id.localeCompare(b.id))
  .map((e) => [e.id, e.concept, e.native, (e.R ? 'R' : '') + (e.W ? 'W' : ''), props(e) || '(unresolved inline schema)'].join('\t'));
const n = Math.ceil(rows.length / 3);
for (let i = 0; i < 3; i++) writeFileSync(`experiments/bld-120/peer-judging/in/chunk_${i + 1}.tsv`, 'id\tconcept\tnative\trw\tfields\n' + rows.slice(i * n, (i + 1) * n).join('\n') + '\n');
console.log(rows.length, 'rows');
