# SENAITE JSON API (senaite) v1.0.0

<!-- derived from openapi.json by `pnpm specs index senaite` — do not edit by hand -->

base: https://demo.senaite.org/@@API/senaite/v1 | auth: not declared | 11 operations in 8 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## catalogs
- GET /catalogs — listCatalogs: List all registered catalogs
- GET /catalogs/{catalog_id} — getCatalog: Get catalog details (indexes, columns, portal_types)

## create
- POST /{resource}/create — createResource: Create a new content object

## delete
- POST /{resource}/delete/{uid} — deleteResource: Deactivate / delete a content object by UID

## search
- GET /search — search: Search across indexed content in a catalog

## update
- POST /{resource}/update/{uid} — updateResource: Update an existing content object by UID

## users
- GET /users — listUsers: List all users
- GET /users/{username} — getUser: Get a specific user, or the authenticated user with username `current`

## version
- GET /version — getVersion: Get API and SENAITE version information

## {resource}
- GET /{resource} — listResource: List resources of a given type / catalog route
- GET /{resource}/{uid} — getResourceByUid: Get a single resource by UID
