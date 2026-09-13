# Generic HTTP API (synthesized) (http) v1.0.0

<!-- derived from openapi.json by `pnpm specs index http` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 6 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## resources
- GET /resources — listResources: List resources (get)
- POST /resources — createResource: Create a resource (post)
- GET /resources/{id} — getResource: Get a resource by id (get)
- PUT /resources/{id} — replaceResource: Replace a resource (put)
- PATCH /resources/{id} — updateResource: Partially update a resource (patch)
- DELETE /resources/{id} — deleteResource: Delete a resource (del)
