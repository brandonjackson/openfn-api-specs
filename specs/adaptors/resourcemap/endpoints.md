# InSTEDD Resource Map REST API (resourcemap) v1.0.0

<!-- derived from openapi.json by `pnpm specs index resourcemap` — do not edit by hand -->

base: https://resourcemap.instedd.org | auth: http/basic | 13 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## collections
- GET /api/collections.json — listCollections: List all collections the authenticated user can access
- GET /api/collections/{id}.json — getCollection: Get a collection and its sites (supports filter query params)
- GET /api/collections/{id}/count.json — getCollectionCount: Count the number of sites in a collection
- GET /api/collections/{id}/geo.json — getCollectionGeoJson: Get collection sites as a GeoJSON FeatureCollection
- POST /api/collections/{collection_id}/sites.json — submitSite: Create a new site in a collection
- GET /api/collections/{collection_id}/sites/{site_id}/histories.json — getSiteHistories: Get the version history of a site
- GET /api/collections/{collection_id}/layers.json — listCollectionLayers: Get the layers and field definitions (metadata) of a collection
- POST /api/collections/{collection_id}/layers.json — createCollectionLayer: Create a new layer in a collection
- GET /api/collections/{id}/memberships.json — listCollectionMemberships: List members of a collection

## sites
- GET /api/sites/{id}.json — getSite: Retrieve a single site by id
- DELETE /api/sites/{site_id} — deleteSite: Delete a site
- POST /api/sites/{site_id}/update_property.json — updateSiteProperty: Update a single property (field) on a site
- POST /api/sites/{site_id}/partial_update.json — partialUpdateSite: Update multiple properties on a site
