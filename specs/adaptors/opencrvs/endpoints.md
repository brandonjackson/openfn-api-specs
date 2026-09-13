# OpenCRVS API (opencrvs) v2.0.0

<!-- derived from openapi.json by `pnpm specs index opencrvs` — do not edit by hand -->

base: https://{service}.{domain} | auth: http/bearer | 24 operations in 11 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Attachments
- POST /api/events/attachments — attachments-upload: Upload a file attachment

## Auth
- POST /token — authorize: Exchange client credentials for an access token

## Config
- GET /config — getClientConfig: Fetch the authenticated client configuration
- GET /publicConfig — getPublicConfig: Fetch the unauthenticated client configuration
- GET /forms — getForms: Fetch the v1 declaration form definitions

## Country configuration
- GET /events — countryConfig-events-list: Get event configurations
- POST /trigger/events/{eventType}/actions/{actionType} — countryConfig-actions-notify: Receive a notification of an action

## Events
- GET /api/events/events/reindex — event-reindex-status: Returns the status of current and past reindexing calls
- POST /api/events/events/reindex — event-reindex-trigger: Triggers reindexing of search, workqueues and notifies country config
- GET /api/events/config — event-config-get: List event configurations
- POST /api/events/events — event-create: Create event
- GET /api/events/events/{eventId} — event-get: Fetch full event document
- POST /api/events/events/{eventId}/notify — event-actions-notify-request: Notify an event
- POST /api/events/events/notify — event-actions-createAndNotify-request: Create an event and immediately notify (single request, system clients only)
- POST /api/events/events/{eventId}/correction/request — event-actions-correction-request-request: Request correction for an event
- POST /api/events/events/{eventId}/correction/approve — event-actions-correction-approve-request: Approve correction for an event
- POST /api/events/events/{eventId}/correction/reject — event-actions-correction-reject-request: Reject correction for an event

## GraphQL
- POST /graphql — queryGraphql: Run a GraphQL query against the gateway

## Health
- GET /ping — getHealth: Health check

## Integrations
- GET /api/events/integrations — integrations-list: List integration clients
- POST /api/events/integrations — integrations-create: Create a new integration client

## Locations
- GET /api/events/locations — locations-list: List locations

## Notification
- POST /notification — createEventNotification: Submit a FHIR birth or death notification bundle

## Search
- POST /api/events/events/search — event-search: Search for events
