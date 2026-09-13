# IBM Maximo REST API (maxrest) (maximo) v7.6.0

<!-- derived from openapi.json by `pnpm specs index maximo` — do not edit by hand -->

base: https://{host} | auth: not declared | 13 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## maxrest
- GET /maxrest/rest/os/{objectStructure} — queryObjectStructure: Query an object structure
- POST /maxrest/rest/os/{objectStructure} — createObjectStructure: Create a record via an object structure
- GET /maxrest/rest/os/{objectStructure}/{id} — getObjectStructureById: Get a single object structure record by unique id
- GET /maxrest/rest/mbo/workorder — queryWorkOrders: Query work orders (WORKORDER MBO)
- POST /maxrest/rest/mbo/workorder — createWorkOrder: Create a work order (WORKORDER MBO)
- GET /maxrest/rest/mbo/workorder/{id} — getWorkOrderById: Get a work order by WORKORDERID
- POST /maxrest/rest/mbo/workorder/{id} — updateWorkOrder: Update a work order (POST + x-methodoverride: PATCH)
- GET /maxrest/rest/mbo/asset — queryAssets: Query assets (ASSET MBO)
- POST /maxrest/rest/mbo/asset/{id} — updateAsset: Update an asset (POST + x-methodoverride: PATCH)
- GET /maxrest/rest/mbo/inventory — queryInventory: Query inventory items (INVENTORY MBO)
- GET /maxrest/rest/mbo/invbalances — queryInvBalances: Query inventory balances (INVBALANCES MBO)
- POST /maxrest/rest/mbo/invbalances — updateInvBalances: Update inventory balances (Maximo 7.5, POST + x-methodoverride: PATCH)
- GET /maxrest/rest/mbo/person — queryPersons: Query people (PERSON MBO)
