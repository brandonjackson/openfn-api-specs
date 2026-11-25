# Vtiger CRM Webservices API (vtiger) v1.0.0

<!-- derived from openapi.json by `pnpm specs index vtiger` — do not edit by hand -->

base: https://{instance}.od1.vtiger.com | auth: not declared | 35 operations in 8 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Files
- GET /webservice.php#operation=files_retrieve — retrieveFiles: Retrieve a record's attached files (base64)

## Metadata
- GET /webservice.php#operation=listtypes — listTypesByFieldType: List accessible module types, optionally filtered by field type
- POST /webservice.php#operation=listtypes — listTypes: List accessible module (element) types
- GET /webservice.php#operation=describe — describe: Describe a module's fields and metadata
- GET /webservice.php#operation=relatedtypes — listRelatedTypes: List the modules related to a module

## Mobile
- POST /webservice.php#operation=mobile.fetchallalerts — fetchMobileAlerts: List the mobile alert definitions
- POST /webservice.php#operation=mobile.alertdetailswithmessage — getMobileAlert: Get one alert with its message and record count
- POST /webservice.php#operation=mobile.fetchmodulefilters — listMobileModuleFilters: List a module's list-view filters
- POST /webservice.php#operation=mobile.fetchrecord — fetchMobileRecord: Fetch one record
- POST /webservice.php#operation=mobile.fetchrecordwithgrouping — fetchMobileRecordWithGrouping: Fetch one record with fields grouped by block
- POST /webservice.php#operation=mobile.filterdetailswithcount — getMobileFilter: Get a filter with its record count
- POST /webservice.php#operation=mobile.listmodulerecords — listMobileModuleRecords: Page through a module's records
- POST /webservice.php#operation=mobile.saverecord — saveMobileRecord: Create or update a record
- POST /webservice.php#operation=mobile.syncModuleRecords — syncMobileModuleRecords: Fetch records changed since a sync token
- POST /webservice.php#operation=mobile.query — queryMobile: Run a VtigerQL query, paged
- POST /webservice.php#operation=mobile.querywithgrouping — queryMobileWithGrouping: Run a VtigerQL query, paged, with fields grouped by block

## Query
- GET /webservice.php#operation=query — query: Run a VtigerQL query
- GET /webservice.php#operation=sync — sync: Fetch records changed since a timestamp
- GET /webservice.php#operation=lookup — lookup: Search records by phone or email across modules

## Records
- POST /webservice.php#operation=create — createElement: Create a CRM record
- GET /webservice.php#operation=retrieve — retrieveElement: Retrieve a CRM record by id
- POST /webservice.php#operation=update — updateElement: Update (fully replace) a CRM record
- POST /webservice.php#operation=revise — reviseElement: Partially update a CRM record
- POST /webservice.php#operation=delete — deleteElement: Delete a CRM record
- GET /webservice.php#operation=retrieve_inventory — retrieveInventory: Retrieve an inventory record with its line items
- POST /webservice.php#operation=convertlead — convertLead: Convert a lead into an account, contact and/or opportunity

## Relations
- GET /webservice.php#operation=retrieve_related — retrieveRelated: Retrieve a record's related records of one module
- GET /webservice.php#operation=query_related — queryRelated: Run a VtigerQL query over a record's related records
- POST /webservice.php#operation=add_related — addRelated: Link records to a source record

## Session
- GET /webservice.php#operation=getchallenge — getChallenge: Get authentication challenge token
- POST /webservice.php#operation=login — login: Log in and open a session
- POST /webservice.php#operation=logout — logout: Close the current session
- POST /webservice.php#operation=extendsession — extendSession: Turn a logged-in web (PHPSESSID) session into a webservice session

## Users
- POST /webservice.php#operation=changePassword — changePassword: Change a user's password
- POST /webservice.php#operation=deleteUser — deleteUser: Delete a user and transfer their records
