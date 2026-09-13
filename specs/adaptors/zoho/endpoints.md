# Zoho Reports / Analytics Data API (v1) (zoho) v1.0.0

<!-- derived from openapi.json by `pnpm specs index zoho` — do not edit by hand -->

base: https://reportsapi.zoho.com/api | auth: not declared | 5 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## {account}
- GET /{account}/{db}/{table} — exportData: Export a table or report (ZOHO_ACTION=EXPORT)
- POST /{account}/{db}/{table} — addRow: Add a row to a table (ZOHO_ACTION=ADDROW)
- GET /{account}/{db} — getWorkspaceMetadata: Get workspace/table metadata (ZOHO_ACTION=DATABASEMETADATA)
- POST /{account}/{db} — createTable: Create a table in a workspace (ZOHO_ACTION=CREATETABLE)
- GET /{account} — listWorkspaces: List workspaces owned by the user (ZOHO_ACTION=USERDATABASES)
