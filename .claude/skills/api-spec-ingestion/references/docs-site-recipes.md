# Docs-site recipes: finding the spec behind the docs, and enumerating pages

Most API reference sites are rendered from a machine spec. Finding that file
turns a docs-only job into a `found-openapi` job. When there is no spec, the
same platforms expose navigation data that gives a complete page inventory
without clicking through the site.

General moves that work everywhere:

```bash
# 1. Look at the HTML for a spec URL or the renderer's config.
curl -sL "$DOCS_URL" | grep -oiE '(spec-url|specUrl|swagger|openapi|api-docs|redoc|stoplight|readme|mintlify)[^"'"'"' >]{0,200}' | sort -u | head -50

# 2. Try the well-known paths on both the docs host and the API host.
for p in /openapi.json /openapi.yaml /swagger.json /swagger/v1/swagger.json /v3/api-docs /api-docs /api/openapi.json /.well-known/openapi.json; do
  code=$(curl -sL -o /dev/null -w '%{http_code}' "$HOST$p"); echo "$code $HOST$p"; done

# 3. Enumerate reference pages from the sitemap.
curl -sL "$DOCS_HOST/sitemap.xml" | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | grep -i '/reference\|/api' | sort -u
```

A page that comes back as a near-empty HTML shell is a client-side app. Do not
try to render it; find the JSON it loads (below) or the sitemap.

## Platform recipes

| platform | tell-tale | where the spec is | page inventory |
| --- | --- | --- | --- |
| **Redoc / Redocly** | `<redoc spec-url=...>`, `Redoc.init(`, `redoc.standalone.js` | the `spec-url` attribute or first argument of `Redoc.init`; Redocly portals often serve `/openapi/<name>.json` | the spec itself |
| **Swagger UI** | `swagger-ui.css`, `SwaggerUIBundle({ url:` | the `url` (or `urls[]`) in the bundle config; Springdoc: `/v3/api-docs`; .NET: `/swagger/v1/swagger.json` | the spec itself |
| **Stoplight Elements / Platform** | `elements-api`, `stoplight.io`, `apiUrl=` | the `apiUrl` attribute; hosted projects expose `https://stoplight.io/api/v1/projects/<org>/<project>/nodes/...` and a raw spec under the project's GitHub repo | project sidebar JSON at `/api/v1/projects/<org>/<project>/table-of-contents` |
| **ReadMe (readme.io / readme.com)** | `readme.io`, `hub.` subdomain, `data-hub-url`, "Powered by ReadMe" | `https://<sub>.readme.io/openapi/<slug>` or the download link on any reference page; the API explorer fetches `/api-next/v2/...` | `https://<sub>.readme.io/sitemap.xml`; reference pages live under `/reference/` |
| **Mintlify** | `mintlify`, `_next/`, `mint.json`, `docs.json` | `mint.json` / `docs.json` at the docs root has an `openapi` key with the spec URL or path; pages with `openapi: METHOD /path` frontmatter are spec-backed | `navigation` array in the same config file lists every page slug |
| **Docusaurus (+ docusaurus-openapi-docs)** | `docusaurus`, `/assets/js/main.*.js`, `.theme-doc-sidebar` | the plugin bundles the spec; search the JS for `openapi` or check the repo `docs/` for `*.openapi.yaml`; the vendor's GitHub repo usually has it | `sitemap.xml`, or `sidebars.js` in the repo |
| **GitBook** | `gitbook.io`, `gitbook.com`, `data-gitbook` | OpenAPI blocks reference a spec URL in the page JSON; look for `openapi` in `__NEXT_DATA__` | `sitemap.xml`; the space's `/~gitbook/...` JSON |
| **Postman public docs** | `documenter.getpostman.com`, `postman.co/collection` | the collection: `https://www.postman.com/collections/<id>` or the "Run in Postman" link; export via the public API or the collection JSON link | the collection itself |
| **Apiary / API Blueprint** | `apiary.io`, `.apib` | `https://jsapi.apiary.io/apis/<name>.apib`; convert with `apib2swagger` | the blueprint itself |
| **Slate / Slatedocs** | single long page, three-column layout, `slate` css | none; the docs *are* the source (often a Markdown repo on GitHub; scrape the Markdown, not the HTML) | headings of the single page or the repo's `source/includes/` |
| **Confluence / Notion / Google Docs** | obvious | none | manual; treat as `partial-docs` if incomplete |
| **Google APIs** | `googleapis.com` | Discovery doc: `https://<api>.googleapis.com/$discovery/rest?version=<v>` (save verbatim, convert with `src/discovery.ts`) | the Discovery doc |
| **Microsoft Graph / Dynamics / OData** | `$metadata`, `learn.microsoft.com` | `https://graph.microsoft.com/v1.0/$metadata` (CSDL); Microsoft publishes OpenAPI in `microsoftgraph/msgraph-metadata` on GitHub | the CSDL or the OpenAPI repo |
| **FHIR servers** | `/metadata` returns a `CapabilityStatement` | HL7 publishes `fhir.schema.json` and OpenAPI per release at `hl7.org/fhir/<release>/`; the server's CapabilityStatement lists supported resources | the CapabilityStatement |
| **GraphQL** | `/graphql` endpoint | introspection query (`{ __schema { ... } }`) saved as `upstream.json`; convert to OpenAPI by modelling `POST /graphql` plus one schema per type | the introspection result |
| **DHIS2-style self-describing APIs** | `/api/openapi.json` or `/api/schemas.json` | fetch from a public demo instance and save verbatim; note the instance version in `notes` | the spec |

## When the docs really are prose only

- Prefer the docs' **source repository** (many sites are Markdown on GitHub)
  over the rendered HTML: fewer fetches, stable structure, easy to grep for
  `GET /`, `POST /`, and fenced JSON examples.
- Build the inventory from the **left navigation of one rendered reference
  page** if there is no sitemap: every reference page is linked from it.
- For **SDK-only vendors** (the docs describe methods, not HTTP), read the SDK
  source for the routes it calls and model those; say so in `notes` and set
  `completenessReason: "partial-docs"`.
- For **private or reverse-engineered APIs**, the adaptor source and its test
  mocks are the evidence; `completenessReason: "private-api"`.

## Politeness and evidence

- Fetch each page once; save it to the scratchpad; re-read from disk.
- Keep the request rate modest (no parallel crawling of hundreds of pages).
- Never fetch with credentials or from behind a login; if the reference is
  behind auth, record `attempts[].result: "not-found"` with the note
  `docs require login` and fall back to the adaptor surface.
- Do not commit scraped HTML, Markdown, or notes to the repo. Only the
  registry files land in git; the URLs in `sources[]` are the citation.
