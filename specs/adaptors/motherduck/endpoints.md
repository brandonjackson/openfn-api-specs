# MotherDuck (DuckDB Cloud) SQL API (synthesized) (motherduck) v1.0.0

<!-- derived from openapi.json by `pnpm specs index motherduck` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 3 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## execute
- POST /execute — execute: Execute a sequence of operations

## query
- POST /query — query: Execute a SQL query against MotherDuck

## tables
- POST /tables/{table}/insert — insert: Insert records into a table
