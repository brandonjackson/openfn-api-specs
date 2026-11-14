# Vtiger CRM Webservices API (vtiger) v1.0.0

<!-- derived from openapi.json by `pnpm specs index vtiger` — do not edit by hand -->

base: https://{instance}.od1.vtiger.com | auth: not declared | 13 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## webservice.php
- GET /webservice.php#operation=getchallenge — getChallenge: Get authentication challenge token
- POST /webservice.php#operation=login — login: Log in and open a session
- GET /webservice.php#operation=logout — logout: Close the current session
- POST /webservice.php#operation=listtypes — listTypes: List accessible module (element) types
- GET /webservice.php#operation=describe — describe: Describe a module's fields and metadata
- POST /webservice.php#operation=create — createElement: Create a CRM record
- GET /webservice.php#operation=retrieve — retrieveElement: Retrieve a CRM record by id
- POST /webservice.php#operation=update — updateElement: Update (fully replace) a CRM record
- POST /webservice.php#operation=revise — reviseElement: Partially update a CRM record
- POST /webservice.php#operation=delete — deleteElement: Delete a CRM record
- GET /webservice.php#operation=query — query: Run a VtigerQL query
- GET /webservice.php#operation=sync — sync: Fetch records changed since a timestamp
- GET /webservice.php#operation=lookup — lookup: Search records by phone or email across modules
