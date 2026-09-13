# ArcGIS REST API (OpenFn focused subset) (arcgis) v1.0.0

<!-- derived from openapi.json by `pnpm specs index arcgis` — do not edit by hand -->

base: https://services.arcgis.com | auth: not declared | 6 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## FeatureServer
- GET /rest/services/{serviceName}/FeatureServer/{layerId}/query — queryFeatures: Query features from a feature layer
- POST /rest/services/{serviceName}/FeatureServer/{layerId}/addFeatures — addFeatures: Add features to a feature layer
- POST /rest/services/{serviceName}/FeatureServer/{layerId}/updateFeatures — updateFeatures: Update features in a feature layer
- POST /rest/services/{serviceName}/FeatureServer/{layerId}/deleteFeatures — deleteFeatures: Delete features from a feature layer

## arcgis
- GET /arcgis/rest/services/World/GeocodeServer/findAddressCandidates — geocode: Find address candidates (geocode)

## sharing
- POST /sharing/rest/generateToken — generateToken: Generate an access token
