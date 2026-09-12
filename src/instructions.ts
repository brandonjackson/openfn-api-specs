import type { AdaptorInfo } from './adaptors.js';
import { adaptorDir, dataSchemasDir, openapiPath, sourcePath } from './paths.js';

/**
 * The "finding" step is deliberately agentic: this module does not scrape the
 * web itself. It emits a precise, self-contained work order that an AI agent
 * (or a human) executes to produce one adaptor's spec. The loop driver prints
 * one of these per missing adaptor; the agent does the research and writes the
 * files described here.
 *
 * Keeping the intelligence in the agent (rather than a brittle scraper) is the
 * whole point — vendor docs vary wildly, and an agent can read a docs site,
 * recognise a Swagger/Postman/Discovery doc, or author a faithful subset from
 * prose, where a fixed parser cannot.
 */
export function instructionsFor(adaptor: AdaptorInfo): string {
  const { name, npm, rest, note } = adaptor;
  const lines: string[] = [];

  lines.push(`# Spec work order: ${name}`);
  lines.push('');
  lines.push(`Adaptor: ${name}  (npm: ${npm})`);
  if (!rest) lines.push(`Classification: NON-REST — ${note}`);
  lines.push('');
  lines.push('## Goal');
  lines.push(
    'Produce a FULL-COVERAGE OpenAPI 3.x document for the external API this adaptor ' +
      'talks to. The adaptor inherits generic get()/post()/request() builders, so a ' +
      'workflow can call ANY endpoint of the vendor API — cover the whole API, not just ' +
      "the adaptor's named operations. If a machine spec exists, save it VERBATIM as the " +
      'source of truth and derive the served spec from it. Then extract the standalone ' +
      'data-object schemas. Save:'
  );
  lines.push('');
  lines.push(`  - ${adaptorDir(name)}/upstream.json   (verbatim upstream machine spec, when one exists)`);
  lines.push(`  - ${openapiPath(name)}   (full-coverage OpenAPI 3.x we serve)`);
  lines.push(`  - ${sourcePath(name)}`);
  lines.push(`  - ${dataSchemasDir(name)}/   (run \`pnpm specs data-objects ${name}\` after)`);
  lines.push('');
  lines.push('See AGENTS.md for the overall maintenance loop, provenance schema, and log rules.');
  lines.push('');
  lines.push('## Step 1 — understand what the adaptor calls');
  lines.push(
    'Read the adaptor surface from the CDN (no auth): these tell you which endpoints matter.'
  );
  lines.push(`  - https://cdn.jsdelivr.net/npm/${npm}/ast.json          (public operations)`);
  lines.push(`  - https://cdn.jsdelivr.net/npm/${npm}/types/index.d.ts   (re-exported namespaces)`);
  lines.push(`  - https://github.com/OpenFn/adaptors/tree/main/packages/${name}  (source, README, docs)`);
  lines.push('');
  lines.push('## Step 2 — find an existing machine spec (preferred)');
  lines.push('Search for an official spec, in this order of preference:');
  lines.push(`  1. OpenAPI 3.x (JSON or YAML) — save verbatim to ${adaptorDir(name)}/upstream.json.`);
  lines.push('     origin="found-openapi". openapi.json is that spec normalised to 3.x.');
  lines.push('  2. Swagger 2.0, Google API Discovery doc, Postman collection, WSDL, or GraphQL SDL');
  lines.push('     — save the original verbatim to upstream.json; openapi.json is the converted 3.x.');
  lines.push('     origin="converted", upstreamFormat=the source kind.');
  lines.push('Good hunting grounds: the vendor developer portal, apis.guru, the vendor GitHub org,');
  lines.push('SwaggerHub, and Postman public workspaces. Prefer the COMPLETE spec — do not narrow it;');
  lines.push('full coverage is the goal. Record upstream.specUrl + a sha256 contentHash of upstream.json.');
  lines.push('');
  lines.push(`Once you have a URL, let the tool do the capture — it handles the verbatim write, the`);
  lines.push('conversion (OpenAPI 3.x JSON or YAML, Swagger 2.0, Google Discovery) and the hash:');
  lines.push(`  pnpm specs convert ${name} --url=<specUrl>`);
  lines.push('Then verify the coverage yourself and record the claim (add --complete to have it');
  lines.push('written for you). Do NOT claim full/complete on a spec you have not checked.');
  lines.push('');
  lines.push('## Step 3 — if no machine spec exists, do a documenting pass');
  lines.push(
    'Read the vendor API docs and author OpenAPI 3.x by hand covering the FULL documented API ' +
      '(all resources/endpoints the docs describe), not just what Step 1 shows the adaptor calling. ' +
      'origin="generated", upstreamFormat="docs", completeness="best-effort" (reason="docs-only"), ' +
      'and list the docs URLs in sources[].'
  );
  if (!rest) {
    lines.push('');
    lines.push('## Non-REST note');
    lines.push(
      'This adaptor has no vendor REST API. Synthesize an OpenAPI 3.x document covering the adaptor ' +
        'surface IN FULL (Step 1): model every public operation as a path (e.g. POST /sql for query(), ' +
        'POST /upload for a file put) with request/response schemas that reflect the operation ' +
        'arguments and return shape. origin="synthesized", upstreamFormat="adaptor-surface". The ' +
        'operation surface is bounded, so completeness="complete" once every operation is covered.'
    );
  }
  lines.push('');
  lines.push('## OpenAPI requirements');
  lines.push('  - openapi: "3.0.3" (or 3.1.0). info.title, info.version, info.description set.');
  lines.push(`  - info.x-openfn-adaptor: "${name}" so the file is self-identifying.`);
  lines.push('  - servers[0].url: the real API base URL (or a mock placeholder for synthesized specs).');
  lines.push('  - Each operation: an operationId, a 2xx response, and a JSON response schema.');
  lines.push('  - Reusable resource shapes under components.schemas (these become seed collections).');
  lines.push('  - Valid JSON. Full coverage of the vendor API — large specs are fine; do NOT subset.');
  lines.push('    A narrowed view, if ever needed, is derived from openapi.json, not authored here.');
  lines.push('');
  lines.push('## source.json shape (see AGENTS.md for the full schema)');
  lines.push(
    JSON.stringify(
      {
        adaptor: name,
        npm,
        origin: rest ? 'found-openapi | converted | generated' : 'synthesized',
        upstreamFormat: rest ? 'openapi-3.1 | swagger-2.0 | google-discovery | graphql-sdl | docs' : 'adaptor-surface',
        coverage: 'full',
        completeness: rest ? 'complete | best-effort' : 'complete',
        completenessReason: 'required when best-effort: docs-only | private-api | partial-docs',
        upstream: rest
          ? { specUrl: 'https://…', format: 'openapi-3.1', contentHash: 'sha256:…', fetchedAt: 'YYYY-MM-DD' }
          : null,
        attempts: [
          { kind: 'openapi', url: 'https://…', result: 'used' },
          { kind: 'postman', url: 'https://…', result: 'not-found' },
        ],
        verifiedAgainst: ['ast.json'],
        sources: ['https://…'],
        capturedAt: 'YYYY-MM-DD',
        lastCheckedAt: 'YYYY-MM-DD',
        notes: 'coverage scope and caveats',
      },
      null,
      2
    )
  );
  lines.push('');
  lines.push('## Step 4 — data objects');
  lines.push(
    `After openapi.json exists, run \`pnpm specs data-objects ${name}\` to extract one standalone ` +
      'JSON Schema per data object (the closure of the API\'s response resources) into ' +
      'data-schemas/. These are the clean type source for downstream tooling and carry no ' +
      'seed/mocker artifacts; review the object set and hand-edit openapi.json if a resource is missing.'
  );

  return lines.join('\n');
}
