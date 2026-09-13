# Memento Database Cloud API (mock subset) (memento) vv1

<!-- derived from openapi.json by `pnpm specs index memento` — do not edit by hand -->

base: https://api.mementodatabase.com | auth: not declared | 6 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## libraries
- GET /v1/libraries — listLibraries: List all libraries
- GET /v1/libraries/{libraryId} — getLibrary: Get a library and its fields
- GET /v1/libraries/{libraryId}/entries — listEntries: List entries in a library
- POST /v1/libraries/{libraryId}/entries — createEntry: Create an entry
- GET /v1/libraries/{libraryId}/entries/{entryId} — getEntry: Get a single entry
- PATCH /v1/libraries/{libraryId}/entries/{entryId} — updateEntry: Update an entry
