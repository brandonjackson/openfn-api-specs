# CARTO Engine APIs (SQL, Maps, Import, Auth) (cartodb) v2.0.0

<!-- derived from openapi.json by `pnpm specs index cartodb` — do not edit by hand -->

base: https://{user}.{domain} | auth: http/basic, apiKey (header api_key), apiKey (query api_key) | 37 operations in 10 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## API Keys
- GET /api/v3/api_keys — getApiKeys: List API keys
- POST /api/v3/api_keys — createApiKey: Create API key
- GET /api/v3/api_keys/{name} — getApiKeyById: Get API key
- DELETE /api/v3/api_keys/{name} — deleteApiKeyById: Delete API key
- POST /api/v3/api_keys/{name}/regenerate — regenerateApiKeyById: Regenerate API key token

## Anonymous Maps
- POST /api/v1/map — instantiateAnonymousMap: Create map
- GET /api/v1/map/{layergroupid}/{layers_filter}/{z}/{x}/{y}.png — getTileWithLayerFilter: Get tile - Layer filter
- GET /api/v1/map/{layergroupid}/{layer}/{z}/{x}/{y}.torque.json — getTorqueLayer: Get Torque layer
- GET /api/v1/map/{layergroupid}/{z}/{x}/{y}.png — getTile: Get tile

## Batch Queries
- POST /api/v2/sql/job — createJob: Create a Job
- GET /api/v2/sql/job/{job_id} — getJob: Get a Job
- PUT /api/v2/sql/job/{job_id} — updateJob: Update a Job
- DELETE /api/v2/sql/job/{job_id} — cancelJob: Cancel a Job

## CARTO Map Visualizations
- POST /api/v3/visualization_exports — exportCarto: Export as .carto file
- GET /api/v3/visualization_exports/{visualization_export_id} — getExportStatus: Check .carto export status

## Named Maps
- GET /api/v1/map/named — getMapsMapNamed: List user's templates
- POST /api/v1/map/named — postMapsMapNamed: Upload template
- GET /api/v1/map/named/{template_name} — getMapsMapNamedTemplateName: Get template definition
- POST /api/v1/map/named/{template_name} — instantiateNamedMap: Instantiate a Named Map
- PUT /api/v1/map/named/{template_name} — putMapsMapNamedTemplateName: Update template definition
- DELETE /api/v1/map/named/{template_name} — deleteMapsMapNamedTemplateName: Delete template
- GET /api/v1/map/named/{template_name}/jsonp — getMapsMapNamedTemplateNameJsonp: Instantiate a Named Map using JSONP

## Single COPY command
- POST /api/v2/sql/copyfrom — postCopyFromStatement: Runs a copy command to ingest data
- GET /api/v2/sql/copyto — getCopyToStatement: Runs a copy command to extract data

## Single SQL Statement
- GET /api/v2/sql — getSQLStatement: Runs a single SQL statement
- POST /api/v2/sql — postSQLStatement: Runs a single SQL statement.

## Standard Tables
- GET /api/v1/imports — getImports: List current import processes
- POST /api/v1/imports — createImport: Create import
- GET /api/v1/imports/{import_id} — getImportStatus: Check import status

## Static Maps
- GET /api/v1/map/static/bbox/{layergroupid}/{west},{south},{east},{north}/{width}/{height}.{format} — getStaticBoundingBox: Bounding Box
- GET /api/v1/map/static/center/{layergroupid}/{z}/{lat}/{lng}/{width}/{height}.{format} — getStaticZoomCenter: Zoom + center
- GET /api/v1/map/static/named/{name}/{width}/{height}.{format} — getStaticNamedMap: Named map

## Sync Tables
- GET /api/v1/synchronizations — getSyncTables: List current sync tables
- POST /api/v1/synchronizations — syncTable: Sync a file from a URL
- DELETE /api/v1/synchronizations/{import_id} — removeSyncTables: Remove sync feature from table
- GET /api/v1/synchronizations/{import_id}/sync_now — checkSyncTables: Check whether a sync table is syncing or not
- PUT /api/v1/synchronizations/{import_id}/sync_now — forceSyncTable: Force a synchronization action on a sync table
