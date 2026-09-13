# CARTO Platform API (mock subset) (cartodb) v2.0.0

<!-- derived from openapi.json by `pnpm specs index cartodb` — do not edit by hand -->

base: https://{account}.carto.com | auth: not declared | 5 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## imports
- GET /api/v1/imports — listImports: List import jobs
- POST /api/v1/imports — createImport: Create an import job
- GET /api/v1/imports/{item_queue_id} — getImport: Get an import job status

## sql
- GET /api/v2/sql — runSqlQueryGet: Run an SQL query (GET)
- POST /api/v2/sql — runSqlQueryPost: Run an SQL query (POST)
