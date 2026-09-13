# Salesforce REST API (OpenFn focused subset) (salesforce) v1.0.0

<!-- derived from openapi.json by `pnpm specs index salesforce` — do not edit by hand -->

base: https://yourInstance.salesforce.com | auth: not declared | 13 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## data
- GET /services/data/v{version}/sobjects — describeGlobal: List available objects (Describe Global)
- GET /services/data/v{version}/sobjects/{sObject}/describe — describeSObject: Describe an sObject
- POST /services/data/v{version}/sobjects/{sObject} — createSObject: Create a record
- GET /services/data/v{version}/sobjects/{sObject}/{id} — retrieveSObject: Retrieve a record
- PATCH /services/data/v{version}/sobjects/{sObject}/{id} — updateSObject: Update a record
- DELETE /services/data/v{version}/sobjects/{sObject}/{id} — deleteSObject: Delete a record
- PATCH /services/data/v{version}/sobjects/{sObject}/{extIdField}/{extId} — upsertSObject: Upsert a record by external ID
- GET /services/data/v{version}/query — query: Run a SOQL query
- GET /services/data/v{version}/queryAll — queryAll: Run a SOQL query including deleted/archived records
- GET /services/data/v{version}/query/{queryLocator} — queryMore: Retrieve the next batch of query results
- POST /services/data/v{version}/composite/sobjects — createSObjectsComposite: Create multiple records (composite)
- PATCH /services/data/v{version}/composite/sobjects — updateSObjectsComposite: Update multiple records (composite)
- DELETE /services/data/v{version}/composite/sobjects — deleteSObjectsComposite: Delete multiple records (composite)
