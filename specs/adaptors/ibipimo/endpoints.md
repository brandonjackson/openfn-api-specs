# IBIPIMO Viral Load API (mock subset) (ibipimo) vv1

<!-- derived from openapi.json by `pnpm specs index ibipimo` — do not edit by hand -->

base: https://demo.ibipimo.org | auth: not declared | 4 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## ask-for-vl-results
- POST /api/v1/ask-for-vl-results — getViralLoadResults: Request viral load results for a set of samples

## post-viral-load-requests
- POST /api/v1/post-viral-load-requests — postViralLoadRequest: Submit viral load test requests

## samples
- GET /api/v1/samples/status — getSamplesStatus: Get sample processing statuses

## sites
- GET /api/v1/sites — getSites: List sites
