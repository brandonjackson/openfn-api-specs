# MySQL API (synthesized) (mysql) v1.0.0

<!-- derived from openapi.json by `pnpm specs index mysql` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 4 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## sql
- POST /sql — sql: Execute a SQL statement

## tables
- POST /tables/{table}/insert — insert: Insert a record
- POST /tables/{table}/upsert — upsert: Insert or update a record if matched (ON DUPLICATE KEY UPDATE)
- POST /tables/{table}/upsertMany — upsertMany: Insert or update multiple records (ON DUPLICATE KEY UPDATE)
