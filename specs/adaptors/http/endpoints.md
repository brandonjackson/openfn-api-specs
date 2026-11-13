# Generic HTTP target (OpenFn http adaptor) (http) v7.3.3

<!-- derived from openapi.json by `pnpm specs index http` — do not edit by hand -->

base: {baseUrl} | auth: http/basic, http/bearer | 10 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Resources
- GET /{resource} — getCollection: GET a collection path of the target API
- POST /{resource} — postCollection: POST a collection path of the target API
- PUT /{resource} — putCollection: PUT a collection path of the target API
- PATCH /{resource} — patchCollection: PATCH a collection path of the target API
- DELETE /{resource} — deleteCollection: DELETE a collection path of the target API
- GET /{resource}/{id} — getItem: GET a item path of the target API
- POST /{resource}/{id} — postItem: POST a item path of the target API
- PUT /{resource}/{id} — putItem: PUT a item path of the target API
- PATCH /{resource}/{id} — patchItem: PATCH a item path of the target API
- DELETE /{resource}/{id} — deleteItem: DELETE a item path of the target API
