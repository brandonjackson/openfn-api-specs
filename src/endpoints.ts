/**
 * Endpoint index — a compact, human- and model-readable table of contents for
 * one adaptor's `openapi.json`, written as `endpoints.md`.
 *
 * Why it exists: the full specs run to megabytes (Stripe ~8 MB, Mailchimp
 * ~14 MB), which is far too much to hand an AI assistant that just needs to
 * pick the right call. For a REST API the method, path and one-line summary are
 * most of what a reader needs to *choose* an operation; the request body and
 * response shape are only needed once one is chosen, and can be sliced out of
 * `openapi.json` (by `operationId`) at that point. So this file is deliberately
 * only the list: one line per operation, grouped by resource, roughly 25 tokens
 * a line — Stripe's 587 operations fit in ~15k tokens instead of ~2M.
 *
 * It is a pure, deterministic function of `openapi.json` (no timestamps, no
 * wall-clock input), so `pnpm test` can re-derive it and fail on drift, and a
 * no-op rebuild is byte-identical.
 *
 * Grouping: an operation's first `tag` when the vendor tags operations,
 * otherwise the first path segment that is neither a version prefix (`v1`) nor
 * a parameter (`{id}`). Groups are sorted by name; within a group, operations
 * keep the spec's path order and a fixed method order, which for REST reads
 * naturally as list / create / retrieve / update / delete.
 */

const METHODS = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'] as const;

/** Cap on a summary line pulled from a description (when `summary` is absent). */
const SUMMARY_MAX = 140;

export interface EndpointLine {
  method: string; // upper-case HTTP method
  path: string;
  operationId?: string;
  summary: string; // may be '' when the spec gives nothing usable
  deprecated: boolean;
}

export interface EndpointGroup {
  name: string;
  operations: EndpointLine[];
}

export interface EndpointIndex {
  adaptor: string;
  title: string;
  version?: string;
  servers: string[];
  auth: string[]; // one short label per security scheme, e.g. "apiKey (header X-Api-Key)"
  operations: number;
  groups: EndpointGroup[];
}

/** Strip HTML tags, collapse whitespace. */
function plain(text: unknown): string {
  if (typeof text !== 'string') return '';
  return text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

/** First sentence of a description, capped, for use as a fallback summary. */
function firstSentence(text: unknown): string {
  const t = plain(text);
  if (!t) return '';
  const m = t.match(/^.*?[.!?](?=\s|$)/);
  const s = (m ? m[0] : t).trim();
  return s.length > SUMMARY_MAX ? s.slice(0, SUMMARY_MAX - 1).trimEnd() + '…' : s;
}

/** Path prefixes that name the API rather than a resource (`/api/v1/users`). */
const GENERIC_PREFIXES = new Set(['api', 'rest', 'v', 'ws', 'services', 'service']);

/** Group name for the bare root path. */
export const ROOT_GROUP = '(root)';

/**
 * The resource a path belongs to when the spec has no tags. The first segment
 * that is neither a version prefix (`v1`, `v2.39`), a generic API prefix
 * (`api`, `rest`), nor a path parameter (`{id}`). A format suffix is dropped
 * so `/contacts.json` and `/contacts` share a group. When every segment is a
 * parameter (`/{bucket}/{key}`) the first parameter names the group, so an
 * S3-style API still groups by its leading placeholder; `/` alone is the root.
 */
export function resourceOf(path: string): string {
  const segs = path
    .split('/')
    .filter(Boolean)
    .map((s) => s.replace(/#.*$/, ''))
    .filter((s) => !/^v\d+(\.\d+)*$/i.test(s) && !GENERIC_PREFIXES.has(s.toLowerCase()));
  const real = segs.find((s) => !s.startsWith('{'));
  if (real) return real.replace(/\.(json|xml)$/i, '');
  return segs[0] ?? ROOT_GROUP;
}

/** One short label per security scheme. */
function authLabels(openapi: any): string[] {
  const schemes = openapi?.components?.securitySchemes ?? {};
  const out: string[] = [];
  for (const [name, raw] of Object.entries<any>(schemes)) {
    if (!raw || typeof raw !== 'object') continue;
    switch (raw.type) {
      case 'http':
        out.push(`http/${raw.scheme ?? 'unknown'}${raw.bearerFormat ? ` (${raw.bearerFormat})` : ''}`);
        break;
      case 'apiKey':
        out.push(`apiKey (${raw.in ?? 'header'} ${raw.name ?? name})`);
        break;
      case 'oauth2': {
        const flows = Object.keys(raw.flows ?? {});
        out.push(`oauth2${flows.length ? ` (${flows.join(', ')})` : ''}`);
        break;
      }
      case 'openIdConnect':
        out.push('openIdConnect');
        break;
      default:
        out.push(String(raw.type ?? name));
    }
  }
  return out;
}

/** Build the structured index from an OpenAPI 3.x document. */
export function buildEndpointIndex(openapi: any, adaptor: string): EndpointIndex {
  const groups = new Map<string, EndpointLine[]>();
  let count = 0;

  for (const [path, item] of Object.entries<any>(openapi?.paths ?? {})) {
    if (!item || typeof item !== 'object') continue;
    for (const m of METHODS) {
      const op = item[m];
      if (!op || typeof op !== 'object') continue;
      count++;
      const line: EndpointLine = {
        method: m.toUpperCase(),
        path,
        operationId: typeof op.operationId === 'string' && op.operationId ? op.operationId : undefined,
        summary: plain(op.summary) || firstSentence(op.description),
        deprecated: op.deprecated === true,
      };
      const tag = Array.isArray(op.tags) && typeof op.tags[0] === 'string' && op.tags[0] ? op.tags[0] : undefined;
      const group = tag ?? resourceOf(path);
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group)!.push(line);
    }
  }

  const sorted = [...groups.keys()].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  return {
    adaptor,
    title: plain(openapi?.info?.title) || adaptor,
    version: typeof openapi?.info?.version === 'string' && openapi.info.version ? openapi.info.version : undefined,
    servers: (Array.isArray(openapi?.servers) ? openapi.servers : [])
      .map((s: any) => (typeof s?.url === 'string' ? s.url : ''))
      .filter(Boolean),
    auth: authLabels(openapi),
    operations: count,
    groups: sorted.map((name) => ({ name, operations: groups.get(name)! })),
  };
}

/** Render the index as the committed `endpoints.md`. */
export function renderEndpointIndex(index: EndpointIndex): string {
  const lines: string[] = [];
  lines.push(`# ${index.title} (${index.adaptor})${index.version ? ` v${index.version}` : ''}`);
  lines.push('');
  lines.push(`<!-- derived from openapi.json by \`pnpm specs index ${index.adaptor}\` — do not edit by hand -->`);
  lines.push('');
  const facts: string[] = [];
  facts.push(`base: ${index.servers.length ? index.servers.join(', ') : 'not declared'}`);
  facts.push(`auth: ${index.auth.length ? index.auth.join(', ') : 'not declared'}`);
  facts.push(`${index.operations} operation${index.operations === 1 ? '' : 's'} in ${index.groups.length} resource${index.groups.length === 1 ? '' : 's'}`);
  lines.push(facts.join(' | '));
  lines.push('');
  lines.push(
    'Each line is `METHOD /path — operationId: summary`. For a request body, parameters or ' +
      'response shape, look the operationId up in `openapi.json`; for the objects an operation ' +
      'returns, see `data-schemas/index.json`.'
  );
  lines.push('');
  for (const g of index.groups) {
    lines.push(`## ${g.name}`);
    for (const op of g.operations) {
      let l = `- ${op.method} ${op.path}`;
      if (op.operationId) l += ` — ${op.operationId}`;
      if (op.summary) l += `${op.operationId ? ':' : ' —'} ${op.summary}`;
      if (op.deprecated) l += ' (deprecated)';
      lines.push(l);
    }
    lines.push('');
  }
  return lines.join('\n');
}

/** Convenience: `openapi.json` document → `endpoints.md` text. */
export function endpointIndexMarkdown(openapi: any, adaptor: string): string {
  return renderEndpointIndex(buildEndpointIndex(openapi, adaptor));
}
