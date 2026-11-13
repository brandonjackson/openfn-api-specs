# Generic HTTP target (OpenFn common adaptor http namespace) (common) v3.3.5

<!-- derived from openapi.json by `pnpm specs index common` — do not edit by hand -->

base: {baseUrl} | auth: http/basic, http/bearer | 10 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Resources
- GET /{resource} — httpGetCollection: GET a collection path of the target API
- POST /{resource} — httpPostCollection: POST a collection path of the target API
- PUT /{resource} — httpPutCollection: PUT a collection path of the target API
- PATCH /{resource} — httpPatchCollection: PATCH a collection path of the target API
- DELETE /{resource} — httpDeleteCollection: DELETE a collection path of the target API
- GET /{resource}/{id} — httpGetItem: GET a item path of the target API
- POST /{resource}/{id} — httpPostItem: POST a item path of the target API
- PUT /{resource}/{id} — httpPutItem: PUT a item path of the target API
- PATCH /{resource}/{id} — httpPatchItem: PATCH a item path of the target API
- DELETE /{resource}/{id} — httpDeleteItem: DELETE a item path of the target API
