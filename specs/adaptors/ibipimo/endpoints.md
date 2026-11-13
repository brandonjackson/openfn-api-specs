# IBIPIMO Laboratory API (ibipimo) vv1

<!-- derived from openapi.json by `pnpm specs index ibipimo` — do not edit by hand -->

base: https://demo.ibipimo.org | auth: http/bearer | 4 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Samples
- GET /api/v1/samples/status — getSamplesStatus: Sample status (from adaptor JSDoc example; unverified)

## Sites
- GET /api/v1/sites — listSites: List sites (from adaptor examples; unverified)

## Viral load requests
- POST /api/v1/post-viral-load-requests — postViralLoadRequests: Submit viral load test requests

## Viral load results
- POST /api/v1/ask-for-vl-results — askForViralLoadResults: Ask for viral load results by sample UID
