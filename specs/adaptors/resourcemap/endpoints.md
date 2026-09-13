# InSTEDD Resource Map REST API (resourcemap) v1.0

<!-- derived from openapi.json by `pnpm specs index resourcemap` — do not edit by hand -->

base: https://resourcemap.instedd.org, https://{host} | auth: http/basic | 37 operations in 7 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## activity
- GET /api/activity.rss — listActivity: Feed of recent activity across the caller's collections

## collections
- GET /api/collections.json — listCollections: List the collections the authenticated user can access
- POST /api/collections.json — createCollection: Create a collection
- GET /api/collections/{id}.json — getCollectionSites: Query the sites in a collection
- DELETE /api/collections/{id}.json — deleteCollection: Delete a collection
- GET /api/collections/{id}.csv — exportCollectionSitesCsv: Export the sites in a collection as CSV
- GET /api/collections/{id}.rss — getCollectionSitesRss: Query the sites in a collection as GeoRSS
- GET /api/collections/{id}/count.json — getCollectionCount: Count the sites matching a query
- GET /api/collections/{id}/geo.json — getCollectionGeoJson: Query the geolocated sites in a collection as GeoJSON
- GET /api/collections/{id}/sample_csv.csv — getCollectionSampleCsv: Download a sample CSV import template for a collection
- GET /api/histogram/{field_id}.json — getFieldHistogram: Count sites bucketed by the values of one field

## fields
- POST /api/collections/{collection_id}/layers/{layer_id}/fields.json — createLayerFields: Add fields to a layer
- GET /api/collections/{collection_id}/fields.json — listCollectionFields: List the layers and fields visible to the caller
- GET /api/collections/{collection_id}/fields/mapping.json — getFieldMapping: List every field's name, code and kind

## layers
- GET /api/collections/{collection_id}/layers.json — listCollectionLayers: List a collection's layers and their field definitions
- POST /api/collections/{collection_id}/layers.json — createCollectionLayer: Create a layer
- PUT /api/collections/{collection_id}/layers/{id}.json — updateCollectionLayer: Update a layer and its fields
- DELETE /api/collections/{collection_id}/layers/{id}.json — deleteCollectionLayer: Delete a layer

## memberships
- GET /api/collections/{collection_id}/memberships.json — listCollectionMemberships: List a collection's members and their permissions
- POST /api/collections/{collection_id}/memberships.json — createCollectionMembership: Add an existing user to a collection
- GET /api/collections/{collection_id}/memberships/personal.json — getPersonalMembership: Fetch the caller's own membership of a collection
- GET /api/collections/{collection_id}/memberships/invitable.json — listInvitableUsers: List users who can still be invited to a collection
- DELETE /api/collections/{collection_id}/memberships/{id}.json — deleteCollectionMembership: Remove a user from a collection
- POST /api/collections/{collection_id}/memberships/{id}/set_admin.json — setMembershipAdmin: Make a member a collection admin
- POST /api/collections/{collection_id}/memberships/{id}/unset_admin.json — unsetMembershipAdmin: Revoke a member's collection-admin rights
- POST /api/collections/{collection_id}/memberships/{id}/set_layer_access.json — setMembershipLayerAccess: Grant or revoke a member's access to one layer

## sites
- POST /api/collections/{id}/sites.json — submitSite: Create a site in a collection
- POST /api/collections/{id}/update_sites.json — bulkUpdateSites: Update every site matching a query
- GET /api/collections/{collection_id}/sites/{id}/histories.json — getSiteHistories: List the stored versions of a site
- GET /api/sites/{id}.json — getSite: Fetch a single site by id
- PUT /api/sites/{id}.json — updateSite: Replace a site's name, location and properties
- DELETE /api/sites/{id}.json — deleteSite: Delete a site
- GET /api/sites/{id}.rss — getSiteRss: Fetch a single site as GeoRSS
- POST /api/sites/{id}/update_property.json — updateSiteProperty: Set a single property on a site
- POST /api/sites/{id}/partial_update.json — partialUpdateSite: Update several properties on a site

## tokens
- GET /api/tokens.json — getAuthenticationToken: Fetch the caller's long-lived authentication token
- DELETE /api/tokens/{id}.json — resetAuthenticationToken: Reset the caller's authentication token
