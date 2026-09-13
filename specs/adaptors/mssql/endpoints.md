# Microsoft SQL Server API (synthesized) (mssql) v1.0.0

<!-- derived from openapi.json by `pnpm specs index mssql` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 10 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## findValue
- POST /findValue — findValue: Fetch a single value/uuid given a filter condition

## sql
- POST /sql — sql: Execute a raw SQL statement

## tables
- POST /tables/{table}/insert — insert: Insert a single record
- POST /tables/{table}/insertMany — insertMany: Insert many records
- POST /tables/{table}/upsert — upsert: Insert or update a record using SQL MERGE
- POST /tables/{table}/upsertIf — upsertIf: Conditionally insert or update a record
- POST /tables/{table}/upsertMany — upsertMany: Insert or update multiple records
- GET /tables/{table}/describe — describeTable: List the columns of a table
- POST /tables/{table}/create — insertTable: Create a table given an array of columns
- POST /tables/{table}/alter — modifyTable: Alter an existing table
