# IBM Maximo REST API (Maximo Manage / Asset Management) (maximo) v7.6-8.x

<!-- derived from openapi.json by `pnpm specs index maximo` — do not edit by hand -->

base: https://{host} | auth: apiKey (header maxauth), apiKey (header apikey), http/basic | 60 operations in 14 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## API home
- GET /maximo/{apiRoot} — getApiRoot: API home: links to systeminfo, whoami, products, members, license, apimeta
- GET /maximo/{apiRoot}/whoami — getWhoAmI: Profile of the logged-in user
- GET /maximo/{apiRoot}/systeminfo — getSystemInfo: System information of the instance
- GET /maximo/{apiRoot}/products — listInstalledProducts: Installed products / add-ons
- GET /maximo/{apiRoot}/members — listServerMembers: Live Maximo servers (Maximo Management Interface root)
- GET /maximo/{apiRoot}/license — listLicenses: License keys of the deployed components

## API keys
- POST /maximo/{apiRoot}/apitoken/create — createApiKey: Create (or regenerate) an API key for the logged-in user
- POST /maximo/{apiRoot}/apitoken/revoke — revokeApiKey: Revoke the logged-in user's API key

## Attachments
- GET /maximo/{apiRoot}/os/{objectStructure}/{restId}/doclinks — listAttachments: List a record's attachments (metadata)
- POST /maximo/{apiRoot}/os/{objectStructure}/{restId}/doclinks — createAttachment: Upload an attachment
- GET /maximo/{apiRoot}/os/{objectStructure}/{restId}/doclinks/{docId} — getAttachmentContent: Download an attachment's file
- POST /maximo/{apiRoot}/os/{objectStructure}/{restId}/doclinks/{docId} — deleteAttachment: Delete an attachment (POST with x-method-override: DELETE)
- GET /maximo/{apiRoot}/os/{objectStructure}/{restId}/doclinks/meta/{docId} — getAttachmentMeta: Attachment metadata

## Authentication
- POST /maximo/oslc/login — login: Log in (native auth) and start a session
- POST /maximo/j_security_check — formLogin: Form-based (app-server security) login
- GET /maximo/oslc/logout — logout: End the session

## Automation scripts
- GET /maximo/{apiRoot}/script/{scriptName} — runScriptGet: Run an automation script as an API
- POST /maximo/{apiRoot}/script/{scriptName} — runScriptPost: Run an automation script with a request body

## Legacy REST: business objects
- GET /maxrest/rest/mbo/{mbo} — queryLegacyMbo: Legacy: query a business object
- POST /maxrest/rest/mbo/{mbo} — createLegacyMbo: Legacy: create a business object record
- GET /maxrest/rest/mbo/{mbo}/{id} — getLegacyMbo: Legacy: get one record by unique id
- POST /maxrest/rest/mbo/{mbo}/{id} — updateLegacyMbo: Legacy: update a record (POST; _action=addchange)

## Legacy REST: object structures
- GET /maxrest/rest/os/{objectStructure} — queryLegacyOS: Legacy: query an object structure
- POST /maxrest/rest/os/{objectStructure} — createLegacyOS: Legacy: create through an object structure
- GET /maxrest/rest/os/{objectStructure}/{id} — getLegacyOS: Legacy: get one record by unique id
- POST /maxrest/rest/os/{objectStructure}/{id} — updateLegacyOS: Legacy: update a record (POST; _action=addchange)

## Legacy REST: standard services
- GET /maxrest/rest/ss/{service}/{method} — invokeLegacyStandardService: Legacy: invoke a standard service method

## Logging
- GET /maximo/{apiRoot}/log — getLog: Read the calling user's correlated REST log
- POST /maximo/{apiRoot}/log/enablelogs — enableLogs: Enable REST/integration logging for the calling user
- POST /maximo/{apiRoot}/log/enablealllogs — enableAllLogs: Enable all loggers for the calling user
- POST /maximo/{apiRoot}/log/disablealllogs — disableAllLogs: Disable the calling user's logging

## Lookups
- GET /maximo/{apiRoot}/os/{objectStructure}/{restId}/getlist~{attribute} — listAttributeValues: Lookup: valid values for an attribute of a record

## Metadata
- GET /maximo/{apiRoot}/apimeta — listApiMeta: Metadata of every API-eligible object structure
- GET /maximo/{apiRoot}/apimeta/{objectStructure} — getApiMeta: Metadata of one object structure
- GET /maximo/{apiRoot}/oas — getOpenApiDocument: Instance-generated OpenAPI 3 document
- GET /maximo/{apiRoot}/jsonschemas/{objectStructure} — getObjectStructureJsonSchema: JSON schema of an object structure
- GET /maximo/{apiRoot}/jsonmboschemas/{mbo} — getMboJsonSchema: JSON schema of a business object
- GET /maximo/{apiRoot}/glcomp — listGlComponents: General-ledger component hierarchy (segment by segment)
- GET /maximo/{apiRoot}/error/messages/{messageId} — getErrorMessage: Describe a BMXAA error message (extendedError.moreInfo target)

## Migration Manager
- POST /maximo/api/dm/create — createMigrationPackage: Create a Migration Manager package from a package definition
- POST /maximo/api/dm/distribute — distributeMigrationPackage: Distribute (build) a package
- GET /maximo/api/dm/download — downloadMigrationPackage: Download a package zip
- POST /maximo/api/dm/upload — uploadMigrationPackage: Upload a package zip to the target instance
- POST /maximo/api/dm/deploy — deployMigrationPackage: Deploy an uploaded package
- POST /maximo/api/dm/completedeploy — completeDeployMigrationPackage: Complete a deployment (after admin mode)
- POST /maximo/api/dm/reset — resetMigrationPackage: Reset a package
- POST /maximo/api/dm/toggleactive — toggleActiveMigrationPackage: Toggle a package's active flag
- POST /maximo/api/dm/close — closeMigrationPackage: Close a package after download
- POST /maximo/api/dm/delete — deleteMigrationPackage: Delete a package
- POST /maximo/api/adminmode/on — enableAdminMode: Turn admin mode on
- POST /maximo/api/adminmode/off — disableAdminMode: Turn admin mode off
- GET /maximo/api/adminmode/state — getAdminModeState: Admin mode state

## Object structures
- GET /maximo/{apiRoot}/os/{objectStructure} — queryResources: Query an object structure (collection)
- POST /maximo/{apiRoot}/os/{objectStructure} — createResource: Create a record, or run a collection-level action / BULK / SYNC / import
- GET /maximo/{apiRoot}/os/{objectStructure}/{restId} — getResource: Get one record
- POST /maximo/{apiRoot}/os/{objectStructure}/{restId} — updateResource: Update (x-method-override PATCH), delete (DELETE) or run an action on a record
- DELETE /maximo/{apiRoot}/os/{objectStructure}/{restId} — deleteResource: Delete a record
- GET /maximo/{apiRoot}/os/{objectStructure}/{restId}/{childRelation} — queryChildCollection: Query a child object / related collection of a record

## Services
- GET /maximo/{apiRoot}/service/{serviceName} — invokeServiceGet: Invoke a read-only MBO service method
- POST /maximo/{apiRoot}/service/{serviceName} — invokeServicePost: Invoke an MBO service method
