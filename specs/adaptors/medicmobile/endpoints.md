# Medic Mobile / CHT CouchDB API (mock subset) (medicmobile) v1.0.0

<!-- derived from openapi.json by `pnpm specs index medicmobile` — do not edit by hand -->

base: http://localhost:5984 | auth: not declared | 4 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## _all_docs
- GET /{db}/_all_docs — getAllDocs: List all documents in a database

## _changes
- GET /{db}/_changes — getChanges: Read the CouchDB changes feed

## inbox
- POST /inbox — postSubmission: Post an extracted form submission to an inbox endpoint

## {db}
- GET /{db}/{docId} — getDocument: Fetch a single document
