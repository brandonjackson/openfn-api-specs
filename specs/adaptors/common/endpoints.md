# OpenFn common adaptor (generic HTTP surface) (common) v1.0.0

<!-- derived from openapi.json by `pnpm specs index common` — do not edit by hand -->

base: https://{baseUrl} | auth: not declared | 7 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## request
- POST /request — sendRequest: Generic request echo (mirrors http.request), returning the common HTTP response wrapper.

## resources
- GET /resources — listResources: List resources (generic http.get against a collection).
- POST /resources — createResource: Create a resource (generic http.post).
- GET /resources/{id} — getResource: Get a single resource by id (generic http.get).
- PUT /resources/{id} — replaceResource: Replace a resource by id (generic http.put).
- PATCH /resources/{id} — updateResource: Partially update a resource by id (generic http.patch).
- DELETE /resources/{id} — deleteResource: Delete a resource by id (generic http.delete).
