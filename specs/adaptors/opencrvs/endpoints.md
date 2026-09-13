# OpenCRVS API (mock subset) (opencrvs) v1.5.0

<!-- derived from openapi.json by `pnpm specs index opencrvs` — do not edit by hand -->

base: https://gateway.example.opencrvs.org | auth: not declared | 6 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## events
- POST /api/events/events — createEvent: Create a v2 event
- POST /api/events/events/{eventId}/notify — notifyEvent: Notify a v2 event with declaration data
- GET /api/events/locations — getLocations: List configured locations

## graphql
- POST /graphql — queryEvents: Run the searchEvents GraphQL query

## notification
- POST /notification — createBirthNotification: Submit a FHIR birth notification bundle

## token
- POST /token — authorize: Obtain an access token (client_credentials)
