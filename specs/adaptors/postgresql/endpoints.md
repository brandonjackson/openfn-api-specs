# PostgreSQL adaptor surface (synthesized HTTP facade) (postgresql) v1.0

<!-- derived from openapi.json by `pnpm specs index postgresql` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 10 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## find-value
- POST /find-value — findValue: Fetch a single value given a filter (SELECT ... WHERE ... LIMIT 1)

## sql
- POST /sql — sql: Execute a raw SQL statement

## tables
- POST /tables/{table}/rows — insert: Insert a single record
- PUT /tables/{table}/rows — upsert: Insert or update a record using ON CONFLICT (uuid) DO UPDATE
- POST /tables/{table}/rows/bulk — insertMany: Insert many records (columns templated from the first record)
- PUT /tables/{table}/rows/bulk — upsertMany: Insert or update many records using ON CONFLICT (uuid) DO UPDATE
- GET /tables/{table}/columns — describeTable: List the columns of a table
- POST /tables — insertTable: Create a table from an array of column definitions
- PATCH /tables/{table} — modifyTable: Alter an existing table by adding columns
- PUT /tables/{table}/rows/conditional — upsertIf: Conditionally insert or update a record (ON CONFLICT (uuid) DO UPDATE) when a logical guard is truthy
