# OpenFn Lightning Collections API (collections) v2.20.1+main.71ce1f0

<!-- derived from openapi.json by `pnpm specs index collections` — do not edit by hand -->

base: https://{host}/collections | auth: http/bearer | 6 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Items
- GET /{name} — listCollectionItems: Stream items matching a key pattern and date filters
- POST /{name} — upsertCollectionItems: Upsert many items
- DELETE /{name} — deleteCollectionItems: Delete items matching a key pattern (or all)
- GET /{name}/{key} — getCollectionItem: Get one item by key
- PUT /{name}/{key} — putCollectionItem: Upsert one item
- DELETE /{name}/{key} — deleteCollectionItem: Delete one item by key
