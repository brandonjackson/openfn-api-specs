# SENAITE JSON API (senaite) v2.7.0

<!-- derived from openapi.json by `pnpm specs index senaite` — do not edit by hand -->

base: https://demo.senaite.org/@@API/senaite/v1, https://{host}/{site}/@@API/senaite/v1 | auth: http/basic, http/bearer (JWT), apiKey (cookie __ac), apiKey (cookie token) | 47 operations in 11 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## auth
- GET /auth — authenticate: Trigger HTTP Basic authentication
- GET /login — loginByGet: Log in and issue a JWT (deprecated GET form) (deprecated)
- POST /login — login: Log in and issue a JWT
- GET /logout — logout: Log out

## catalogs
- GET /catalogs — listCatalogs: List the registered catalogs
- GET /catalogs/{catalog_id} — getCatalog: Get one catalog

## content
- POST /create — createContent: Create content
- POST /create/{uid} — createContentByUid: Create content in the container with this UID
- POST /delete — deleteContent: Deactivate content
- POST /delete/{uid} — deleteContentByUid: Deactivate the content object with this UID
- POST /update — updateContent: Update content
- POST /update/{uid} — updateContentByUid: Update the content object with this UID
- GET /{resource} — listResource: List content of one portal type
- POST /{resource} — actionOnUid: Run create/update/delete on the object with this bare UID via a method override
- PUT /{resource} — putUid: Update the object with this bare UID with HTTP PUT
- PATCH /{resource} — patchUid: Update the object with this bare UID with HTTP PATCH
- DELETE /{resource} — deleteUid: Deactivate the object with this bare UID with HTTP DELETE
- POST /{resource}/create — createResource: Create content of one portal type
- POST /{resource}/create/{uid} — createResourceByUid: Create content of one portal type in the container with this UID
- POST /{resource}/delete — deleteResource: Deactivate content of one portal type
- POST /{resource}/delete/{uid} — deleteResourceByUid: Deactivate the content object of one portal type with this UID
- POST /{resource}/update — updateResource: Update content of one portal type
- POST /{resource}/update/{uid} — updateResourceByUid: Update the content object of one portal type with this UID
- GET /{resource}/{uid} — getResourceByUid: Read one content object by UID
- POST /{resource}/{uid} — actionOnResourceByUid: Run create/update/delete on one object via a method override
- PUT /{resource}/{uid} — putResourceByUid: Update one object with HTTP PUT (REST verb form)
- PATCH /{resource}/{uid} — patchResourceByUid: Update one object with HTTP PATCH (REST verb form)
- DELETE /{resource}/{uid} — deleteResourceByUid: Deactivate one object with HTTP DELETE (REST verb form)

## introspect
- GET /types — listTypes: List the registered portal types
- GET /types/{portal_type} — getType: Describe one portal type
- GET /schema/{portal_type} — getSchema: Describe the schema fields of a portal type
- GET /workflow/{uid} — getWorkflow: Get an object's workflow state and available transitions

## operations
- POST /partition — createPartitions: Create partitions (aliquots) of received samples

## push
- POST /push — push: Push a record to a named consumer

## registry
- GET /registry — listRegistryRecords: List the Plone registry records
- GET /registry/{key} — getRegistryRecords: Get registry records matching a keyword

## search
- GET /search — search: Search any indexed content

## settings
- GET /settings — listSettings: List the control-panel settings
- GET /settings/{key} — getSettings: Get settings matching a keyword

## users
- GET /users — listUsers: List SENAITE users
- GET /users/auth — authenticateUser: Trigger HTTP Basic authentication (users route alias)
- GET /users/login — loginUserByGet: Log in and issue a JWT (users route alias, deprecated GET form) (deprecated)
- POST /users/login — loginUser: Log in and issue a JWT (users route alias)
- GET /users/logout — logoutUser: Log out (users route alias)
- GET /users/{username} — getUser: Get one user

## version
- GET / — getApiRoot: Get the API version at the base URL
- GET /version — getVersion: Get the senaite.jsonapi version
