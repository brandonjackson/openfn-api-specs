# OpenFn Collections API (collections) v0.9.3

<!-- derived from openapi.json by `pnpm specs index collections` — do not edit by hand -->

base: https://{host}/collections | auth: http/bearer | 7 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## collections
- GET / — listCollections: List collections

## items
- GET /{name} — listCollectionItems: List / query items in a collection
- POST /{name} — upsertCollectionItems: Upsert (set) one or more items
- DELETE /{name} — removeCollectionItemsByQuery: Remove items by key pattern / query
- GET /{name}/{key} — getCollectionItem: Get a single item by key
- PUT /{name}/{key} — setCollectionItem: Set / replace a single item by key
- DELETE /{name}/{key} — removeCollectionItem: Remove a single item by key
