---
name: api-spec-ingestion
description: Produce or refresh one adaptor's OpenAPI spec for this registry. Use when scraping a vendor's API documentation, hunting for and saving a vendor machine spec, authoring OpenAPI 3.x from docs, or cross-referencing an existing openapi.json against the vendor docs and the adaptor's operation surface. Covers the agentic "finding step" that `pnpm specs instructions <adaptor>` hands off to.
---

# API spec ingestion

This skill is the standard procedure for the agentic part of the maintenance
loop in `AGENTS.md`: turning a vendor's public API (machine spec or prose docs)
into `specs/adaptors/<adaptor>/{upstream.*, openapi.json, source.json}` and
keeping it correct over time. `AGENTS.md` says *what* must be true; this file
says *how* to get there the same way every time.

Start every job the same way:

```bash
pnpm specs report | grep <adaptor>          # which bucket it is in and why
pnpm specs instructions <adaptor>           # the work order: adaptor surface URLs, save paths
TODAY=$(date -u +%F)                        # every date you write is this value
```

Work in the scratchpad for raw downloads and notes. Only the four registry
files (plus `data-schemas/`) land in the repo.

## 1. Choose the path

Decide once, up front, and record the decision in `source.json.attempts[]`.

| you found | origin | upstreamFormat | completeness |
| --- | --- | --- | --- |
| the vendor's own OpenAPI 3.x (JSON or YAML) | `found-openapi` | `openapi-3.0` / `openapi-3.1` | `complete` (implied) |
| Swagger 2.0, Google Discovery, Postman, WSDL, GraphQL SDL, OData CSDL | `converted` | `swagger-2.0`, `google-discovery`, `postman`, `wsdl`, `graphql-sdl`, `csdl` | `complete` once the conversion covers everything |
| prose docs only | `generated` | `docs` | `best-effort`, reason `docs-only` (or `partial-docs`) |
| no vendor REST API (DB, protocol, internal) | `synthesized` | `adaptor-surface` | `complete` once every adaptor op is modelled |

Rules that decide edge cases:

- **A machine spec always beats docs**, even when the docs look nicer. Docs are
  used to cross-check it, never to replace it.
- **Vendor-published only.** A community or third-party spec (an apis.guru
  mirror of something the vendor does not host, a random GitHub gist) is a
  lead, not a source. Follow it to the vendor's copy. If only the third-party
  copy exists, use it as `converted`/`generated` evidence and say so in `notes`.
- **Right version.** The spec must describe the API version the adaptor calls
  (check `ast.json` and the adaptor README). Record the version in `info.version`.
- **Vendor specs with a narrow scope** (one product area of a larger API) are
  still `found-openapi`. `coverage` describes *our* narrowing, not the
  vendor's, so it stays `full`; explain the vendor's own scope in `notes`. If
  the vendor publishes several specs for one API, save each as
  `upstream-<area>.json`, merge them into one `openapi.json`, and list every
  file in `attempts[]` and `sources[]`.

## 2. Hunt for a machine spec

Spend real effort here. A found spec is worth more than any amount of hand
authoring, and a logged miss is what makes a `generated` spec credible.

Check, in this order, and log each as an `attempt` (`used`, `not-found`, or
`rejected` with a `note`):

1. **The docs site itself.** Most reference sites are rendered *from* a spec.
   See `references/docs-site-recipes.md` for how to find the underlying file on
   Redoc, Swagger UI, Stoplight, ReadMe, Mintlify, Docusaurus, GitBook, Postman
   and Apiary sites. Always try the well-known URLs on the API host and the
   docs host:
   `/openapi.json`, `/openapi.yaml`, `/swagger.json`, `/swagger/v1/swagger.json`,
   `/v3/api-docs`, `/api-docs`, `/api/openapi.json`, `/.well-known/openapi.json`,
   `/$metadata` (OData), `/graphql` with an introspection query (GraphQL),
   `/discovery/v1/apis/<api>/<version>/rest` (Google).
2. **The vendor's GitHub organisation.** Search the org for `openapi`,
   `swagger`, `api-spec`, `postman`. Prefer the `main` branch file the vendor
   links from their docs over release assets.
3. **apis.guru** (`https://api.apis.guru/v2/list.json`): if listed, follow the
   `origin` URL to the vendor's copy and use that.
4. **SwaggerHub and Postman public workspaces** owned by the vendor.
5. **SDK repositories.** Generated SDKs (`openapi-generator`, Speakeasy, Stainless,
   Fern) usually carry the spec in the repo or point at it in the README.

Verify before you use a spec: it parses, `openapi`/`swagger` is set, `paths` is
non-empty, and its server URL matches what the adaptor calls. A spec with a
handful of paths for an API whose docs list dozens is `rejected` with the note
`incomplete vendor spec`, and you continue the hunt (or fall through to §3
with that spec as a starting point, recorded as such).

Save it verbatim and fingerprint it:

```bash
curl -sSL "$SPEC_URL" -o specs/adaptors/<adaptor>/upstream.json   # or upstream.yaml, keep the vendor's format
sha256sum specs/adaptors/<adaptor>/upstream.json                   # -> upstream.contentHash ("sha256:<hex>")
```

Never reformat, sort, or pretty-print the upstream file. `pnpm test` re-hashes
it. If a value must be redacted (a real-looking key trips secret scanning),
make the smallest edit, record it in `modifications[]`, and hash the edited
file.

Then produce `openapi.json`:

- `found-openapi`: the upstream rendered to JSON with no content change (YAML
  to JSON is lossless; keep key order). Add nothing except
  `info.x-openfn-adaptor` if the tests or tooling need it, and if you do, say
  so in `notes`.
- `converted`: use the repo converter where one exists — `src/discovery.ts` for
  Google Discovery, `src/swagger.ts` for Swagger 2.0 (it also handles Azure's
  `x-ms-paths` and `x-ms-parameterized-host`). Both are wired into
  `pnpm specs convert <adaptor> --url=<specUrl>`, which writes the verbatim
  upstream, derives `openapi.json` and records the hash in one pass; run it with
  no `--url` to re-derive after a converter change. For Postman collections use
  `postman-to-openapi`; for GraphQL/WSDL/CSDL convert with a known tool or by
  hand and describe the mapping in `notes`. Check that every upstream operation
  and schema survived: count them on both sides and put the counts in `notes`.

## 3. Scrape the docs (docs-only path)

Only after §2 has come up empty. The goal is the **whole documented API**, not
the endpoints the adaptor happens to name. Work in two passes: inventory, then
detail. Writing schemas before the inventory is finished is how subsets happen.

### 3a. Inventory

1. **Find the reference section**, not the guides. Look for "API reference",
   "REST API", "Endpoints", "Resources".
2. **Enumerate every reference page** mechanically, not by clicking around:
   `sitemap.xml` filtered to the reference path prefix, the site's navigation
   JSON (see the recipes file), or the left-nav list from one rendered page.
3. **Write the inventory** to the scratchpad as one table before extracting
   anything: `method | path | operationId (yours) | docs URL | resource returned`.
   Include deprecated endpoints (mark them `deprecated: true`), webhooks
   payloads if documented (as `components.schemas`, not paths), and auth
   endpoints.
4. **Read the adaptor surface** (`ast.json`, `Adaptor.d.ts`, adaptor source on
   GitHub) and confirm every endpoint the adaptor builds a URL for is in the
   inventory. If the adaptor calls something the docs do not mention, add it
   from the adaptor source and note `private-api` or `partial-docs` in
   `completenessReason`.

### 3b. Extract each endpoint

For every inventory row capture, in this priority order of evidence:

1. **Example responses** (JSON blocks). These are the best evidence of field
   names and types. Prefer a full example over a field table when they disagree.
2. **Parameter and field tables** for types, required flags, enums, defaults.
3. **Prose** only for meaning (`description`), pagination behaviour, and auth.

Rules:

- Do not invent fields. If the docs show a field with no type, use the type of
  the example value; if there is no example either, use `{}` (any) with a
  description that says "type not documented".
- Do not guess required-ness. Mark `required` only when the docs say so or the
  field is obviously an identifier the API always returns.
- Record the **envelope**: is a list `{ data: [...] }`, `{ results: [...] , count }`,
  a bare array, `{ objects, meta }`? Model it exactly. The extractor unwraps
  these to find the resource (see §4).
- Record **auth** once (`components.securitySchemes`) and apply it globally
  with `security`.
- Record **errors** once as a shared `Error` schema and reference it from
  `4xx`/`default` responses. Keep them out of resource schemas.
- Note the **API version and base URL** from the docs, including any
  per-tenant host template (`{subdomain}.example.com`) as `servers[].variables`.

Fetching tips: use the fetch tool or `curl -sL`; when a page is a client-side
app and returns an empty shell, look for the JSON the app loads (recipes file)
rather than rendering it. Save raw pages you relied on to the scratchpad so you
can re-check a field without re-fetching. Every URL you used goes into
`sources[]`; the inventory URLs are enough, one per resource group is fine for
very large APIs.

## 4. Write a good openapi.json

These are the house rules. They exist because downstream tooling
(`src/spec-parser.ts`, `src/resources.ts`, `src/data-objects.ts`, the mocker
seed generator, Lightning type tooling) reads the spec mechanically.

**Document shape**

- `openapi: "3.0.3"` for hand-authored specs (3.1.0 only when the upstream is
  3.1). `info.title` is the vendor API's real name, not "OpenFn focused subset".
  `info.version` is the vendor API version. `info.description` says what the
  API is and, in one sentence, how this adaptor reaches it.
- `info.x-openfn-adaptor: "<adaptor>"` so the file is self-identifying.
- `servers[0].url` is the real production base URL. Use `variables` for
  tenant/region segments. Sandboxes go in `servers[1..]` with a `description`.
- Group operations with `tags` named after resources.

**Operations**

- Every operation has an `operationId` in `camelCase`, `verbNoun` form
  (`listCases`, `getCase`, `createPayment`, `deleteWebhook`). Unique across the
  document.
- Every operation has a `summary`, a `2xx` response, and for JSON APIs an
  `application/json` response schema. The parser picks the **lowest 2xx**; put
  the primary success there. Empty bodies use `204` with no content.
- Path parameters are declared, `required: true`, with a type. Shared query
  parameters (`limit`, `offset`, `page`, `fields`) live in
  `components.parameters` and are `$ref`ed.
- Request bodies `$ref` a named schema (`CreateCaseRequest`) when the shape is
  reused or has more than a few fields; otherwise inline is fine.
- Binary responses (PDF, images, CSV downloads) are described honestly in the
  response `description` and, when the adaptor exposes a JSON shape on state
  (for example `{ base64, type }`), that JSON wrapper is the `application/json`
  schema. Say so in the description. This is the convention browserless and
  aws-s3 already follow.

**Schemas (these become the data objects)**

- Every domain object the API returns is a named schema under
  `components.schemas`, `PascalCase`, singular noun (`Case`, `Patient`,
  `OrganisationUnit`). Responses `$ref` these; never inline a resource body.
- List responses are named `<Resource>List` (or the vendor's own name) and
  carry the resource under one of the envelope keys the extractor recognises:
  `data`, `objects`, `results`, `items`, `entry`, `records`, `elements`,
  `value`. If the vendor uses a resource-named key (`{ pager, organisationUnits: [] }`),
  keep a pagination sibling (`pager`, `meta`, `count`, `total`, `next`,
  `cursor`, ...) so the wrapper is recognised as a list and not a resource.
- Nested types the resource references are their own named schemas too
  (`Address`, `Money`). They come along in the closure.
- Request wrappers and `Error` are named schemas but are never referenced from
  a `2xx` response, so they stay out of `data-schemas/`.
- Use `nullable: true` (3.0) rather than `type: [.., "null"]`; the extractor
  normalises it. Use `enum`, `format` (`date-time`, `uuid`, `email`, `uri`),
  `readOnly`, `deprecated`, and a one-line `description` per property when the
  docs give one.
- Add one realistic `example` per resource schema when the docs provide an
  example response. Strip anything that looks like a real credential, email
  address, phone number, or person's name; use obvious placeholders.

**Full coverage**

- Cover every endpoint in the inventory. Large files are fine. Never trim to
  "what the adaptor uses". If a narrowed view is ever needed downstream, it is
  derived from this file.

**Validate before you move on**

```bash
python3 -m json.tool specs/adaptors/<adaptor>/openapi.json > /dev/null   # parses
pnpm specs data-objects <adaptor>                                        # extraction runs, review the object list
cat specs/adaptors/<adaptor>/data-schemas/index.json                     # resources = the domain objects you expect?
pnpm test                                                                # drift, refs, provenance, shape
```

If `index.json` lists request wrappers or `Error` as resources, a `2xx`
response is referencing them; fix the spec, not the output. If a resource you
expect is missing, the envelope is not being unwrapped; rename the key or add a
pagination sibling. An optional deeper lint, when network allows:
`npx --yes @redocly/cli lint specs/adaptors/<adaptor>/openapi.json`.

## 5. Cross-reference an existing spec

This is the check pass for `stale`, `at-risk`, and `incomplete` adaptors, and
the final step of any new spec. Three comparisons, always in this order.

### 5a. Spec vs adaptor surface (required for every adaptor)

```bash
curl -sL https://cdn.jsdelivr.net/npm/@openfn/language-<adaptor>/ast.json | python3 -c '
import json,sys; d=json.load(sys.stdin)
for op in d.get("operations",[]): print(op.get("name"), "-", (op.get("docs") or {}).get("description","")[:80])'
```

Then read the adaptor source for the URL each operation builds. Every such
`method + path` must exist in `openapi.json` (template variables may differ in
name). Record the result: `verifiedAgainst: ["ast.json"]`, and if you also
read the source, add `"adaptor-source"`. A miss on a `found-openapi` or
`converted` spec is a finding, not a reason to edit anything: `openapi.json`
must stay equal to the normalised upstream. Record the gap in `notes`, log an
`incomplete` entry naming the operation and path, and re-check the vendor's
spec URL for a newer version. A miss on a `generated` or `synthesized` spec is
a bug in our copy: add the path from the adaptor source.

### 5b. Spec vs vendor docs

Build the docs inventory exactly as in §3a (even for `found-openapi` specs; it
is cheap with a sitemap) and diff it against the spec's `paths`:

| finding | on a vendor spec (`found-openapi`/`converted`) | on an authored spec (`generated`/`synthesized`) |
| --- | --- | --- |
| in docs, not in spec | log it in `notes`; the vendor spec still wins; re-check the spec URL for a newer version | add it |
| in spec, not in docs | keep it (likely undocumented or deprecated) | keep it if the adaptor uses it, else mark `deprecated: true` and note |
| field/type mismatch (from example responses) | note it; do not edit upstream | fix the schema, cite the docs URL |
| auth or base URL changed | re-fetch upstream; if unchanged, note | update `servers`/`securitySchemes` |
| new API version | check for a new spec URL; treat as `upstream-changed` | update `info.version` and affected paths |

For very large specs (hundreds of paths) compare the full path list
mechanically and spot-check field shapes on every top-level resource plus a
sample of ten operations. Say in the log entry what was sampled.

### 5c. Upstream drift (machine-spec adaptors)

```bash
curl -sSL "$(python3 -c 'import json;print(json.load(open("specs/adaptors/<adaptor>/source.json"))["upstream"]["specUrl"])')" -o "$SCRATCH/upstream.new"
echo "sha256:$(sha256sum "$SCRATCH/upstream.new" | cut -d" " -f1)"      # compare with upstream.contentHash
```

- Hash unchanged: set `lastCheckedAt`, log `checked`.
- Hash changed: diff the two files (paths added/removed, schemas changed),
  replace `upstream.*` with the new verbatim copy, update `contentHash` and
  `fetchedAt`, re-derive `openapi.json`, re-run `pnpm specs data-objects`, set
  `capturedAt` and `lastCheckedAt`, log `upstream-changed` with `from`/`to`
  hashes and a `detail` naming what moved.
- URL no longer resolves: hunt for the new location (§2). Log `error` if none
  is found and leave the committed copy in place with a `notes` warning.

### What a check pass leaves behind

- `source.json`: `lastCheckedAt = TODAY`; `capturedAt = TODAY` only if content
  changed; `verifiedAgainst` filled; `notes` updated with any open gaps.
- One `maintenance-log.jsonl` line: `checked` (no change), `fixed` (you changed
  the spec), `upstream-changed`, `incomplete` (you found and could not close a
  gap), or `error`. Never log a no-op run twice.
- Nothing else. A clean check does not touch `openapi.json` or `data-schemas/`.

## 6. Write source.json and finish

Copy the shape from `pnpm specs instructions <adaptor>` and fill every field.
The ones that are most often left out:

- `coverage: "full"` and `completeness` with `completenessReason`. Without an
  explicit claim, `generated`/`converted`/`synthesized` adaptors sit in the
  `incomplete` bucket forever.
- `attempts[]` including the misses, with a `note` for each `not-found` saying
  where you looked.
- `verifiedAgainst` (at least `ast.json`).
- `sources[]`: the spec URL first, then the docs pages you actually relied on,
  then the adaptor CDN/GitHub URLs.
- `lastCheckedAt` (equal to `capturedAt` on a fresh capture).
- `notes`: three to six sentences a reviewer can trust. Say what the API is,
  where the spec came from, what "full" means here, what was modelled
  differently from reality (binary bodies, SDK-only surfaces), and what is
  still unknown.

Then, in order:

```bash
pnpm specs data-objects <adaptor>
pnpm test
# append one maintenance-log.jsonl line (event: scraped | fixed | checked | ...)
pnpm specs manifest
git add specs/adaptors/<adaptor> specs/adaptors/manifest.json specs/adaptors/maintenance-log.jsonl
git commit -m "<adaptor>: <origin> spec from <source>, N ops / M schemas"
```

## Anti-patterns (seen in this repo's history)

- Titling a spec "focused subset" and covering the three endpoints the adaptor
  names. That is a `subset`, and the loop will keep flagging it.
- Editing `upstream.*` to "clean it up". The hash test will fail, and the
  vendor's copy is the point.
- Declaring `completeness: complete` on a docs-only spec. Docs-only is
  `best-effort` by definition, however thorough the pass was.
- Inlining resource objects in responses. They vanish from `data-schemas/`.
- Inventing plausible fields to make an example look complete.
- Skipping `attempts[]` because "there obviously isn't a spec". Log the miss.
- Real email addresses, names, phone numbers, or keys in `example` values.

## Checklist

- [ ] `pnpm specs instructions <adaptor>` read; path chosen and logged in `attempts[]`
- [ ] machine spec hunted in all five places (§2) or one found and saved verbatim with hash
- [ ] docs inventory complete before schemas were written (docs-only)
- [ ] every adaptor operation's endpoint present (`verifiedAgainst`)
- [ ] `info.title`/`version`/`x-openfn-adaptor`, real `servers`, `securitySchemes`
- [ ] every op: `operationId`, lowest-2xx JSON schema, `$ref` to a named resource
- [ ] list envelopes use a recognised key or a pagination sibling
- [ ] `data-schemas/index.json` resources look like the domain objects
- [ ] `source.json`: coverage, completeness(+reason), attempts, sources, dates, notes
- [ ] `pnpm test` green, log line appended, manifest rebuilt, committed
