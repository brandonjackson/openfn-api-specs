# openfn-api-specs

Maintained **OpenAPI 3.x specs** and standalone **data-object schemas** for every
adaptor in [OpenFn/adaptors](https://github.com/OpenFn/adaptors) — one focused
API spec per adaptor, and from each, the set of data objects that system returns
as clean, reusable JSON Schema files.

This started life inside [openfn-mocker](https://github.com/brandonjackson/openfn-mocker)
and was extracted here so the specs can be a shared source of truth.

## Why

The schemas serve two independent consumers, and neither should leak into the
other:

1. **Seed-data generation** (openfn-mocker): assembles a mock seed dump from
   these objects. That mapping lives in mocker, not in these files.
2. **Lightning tooling**: expected trigger payloads, data-mapping, type-checking
   and testing — built on "what the data coming in looks like". This needs the
   object types pristine, so no seed/mocker shape is baked in here.

## Full coverage, not a slice

Every adaptor inherits generic `get()`/`post()`/`request()` builders, so a
workflow can call **any** endpoint of the vendor's API — not just the adaptor's
named operations. Each `openapi.json` therefore aims to describe the **whole
vendor API**. Where a machine spec exists upstream it is committed **verbatim**
as `upstream.json` (the source of truth) and the served spec is derived from it.
A narrowed view, if ever needed, is derived from the full spec — never
hand-authored on its own.

The agent-run **maintenance loop** that keeps this copy correct and current —
the environment definition, the feedback buckets (new / missing / stale /
incomplete / at-risk / wrong), the provenance schema, and the audit log — lives
in [`AGENTS.md`](./AGENTS.md).

## Layout

```
specs/adaptors/
  _adaptors.json          cached adaptor list from openfn/adaptors
  manifest.json           aggregate coverage index
  maintenance-log.jsonl   append-only audit log (scrapes, problems, fixes)
  <adaptor>/
    upstream.json         verbatim upstream machine spec (source of truth), when one exists
    openapi.json          full-coverage OpenAPI 3.x (found, converted, or generated)
    source.json           provenance: origin, coverage, completeness, upstream, dates
    data-schemas/
      <Object>.json       one standalone JSON Schema per data object
      index.json          lists the objects + which are top-level resources
```

`source.json.origin`:

| origin           | meaning                                                              |
| ---------------- | -------------------------------------------------------------------- |
| `found-openapi`  | an official OpenAPI 3.x doc was found online and saved verbatim      |
| `converted`      | another machine spec (Swagger 2.0 / Discovery / Postman / WSDL / GraphQL) converted to OpenAPI 3.x |
| `generated`      | no machine spec existed — authored from the vendor docs (documenting pass) |
| `synthesized`    | non-REST adaptor (DB / protocol / internal) — modelled from the adaptor's own operation surface |

## Maintenance CLI

```
pnpm install
pnpm specs list                       # adaptor list from openfn/adaptors (cached)
pnpm specs status                     # who has openapi.json + data-schemas/
pnpm specs missing                    # adaptors with no OpenAPI spec
pnpm specs instructions <a|--missing> # per-adaptor agentic work order (the finding step)
pnpm specs data-objects <a|--all>     # extract standalone data-object schemas
pnpm specs manifest                   # rebuild manifest.json
```

The **finding step is agentic**: `pnpm specs instructions` emits a precise work
order (which endpoints the adaptor calls, where to look for a spec, the required
OpenAPI shape, where to save files). An AI agent — or a human — executes it,
doing the web research a fixed scraper can't. The tool handles the deterministic
parts: listing, status, data-object extraction, and the manifest.

## Data objects

`data-schemas/<Object>.json` files are the transitive `$ref` closure of the
API's **response resources** (every domain object an operation returns, plus the
nested types they reference; request/error plumbing excluded). Each is **JSON
Schema 2020-12** (OpenAPI 3.0-isms like `nullable` normalised), self-identifying
via `$id`/`title`/`x-openfn-adaptor`, with an `x-source` pointer to the
originating `components.schemas` entry and internal refs rewritten to sibling
files (`{"$ref": "Organization.json"}`). The verbatim OpenAPI form of every
schema also lives in `openapi.json`, so both dialects are available.

## Programmatic API

```ts
import {
  listAdaptors, getManifest,
  getOpenapi, getSource,
  getDataObjects, getDataObject, getDataObjectIndex,
} from 'openfn-api-specs';

const patient = getDataObject('fhir', 'Patient');   // one JSON Schema
const all = getDataObjects('dhis2');                // { OrganisationUnit: {...}, ... }
const spec = getOpenapi('twilio');                  // OpenAPI 3.x document
```

Reads resolve to the specs shipped with the installed package.
