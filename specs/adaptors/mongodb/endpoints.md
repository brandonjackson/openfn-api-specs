# MongoDB Document Operations (synthesized) (mongodb) v1.0.0

<!-- derived from openapi.json by `pnpm specs index mongodb` — do not edit by hand -->

base: http://localhost:8080 | auth: not declared | 3 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## find
- POST /{database}/{collection}/find — findDocuments: Find documents in a collection

## insert
- POST /{database}/{collection}/insert — insertDocuments: Insert documents into a collection

## update
- POST /{database}/{collection}/update — updateDocument: Update (optionally upsert) documents in a collection
