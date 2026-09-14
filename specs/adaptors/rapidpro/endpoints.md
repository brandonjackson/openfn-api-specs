# RapidPro / TextIt REST API v2 (rapidpro) v2.0

<!-- derived from openapi.json by `pnpm specs index rapidpro` — do not edit by hand -->

base: https://app.rapidpro.io | auth: not declared | 8 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## broadcasts
- GET /api/v2/broadcasts.json — listBroadcasts: List broadcasts
- POST /api/v2/broadcasts.json — sendBroadcast: Send a message to contacts, groups, and/or URNs

## contacts
- GET /api/v2/contacts.json — listContacts: List contacts
- POST /api/v2/contacts.json — addContact: Create or upsert a contact (upsert when a urn query param is supplied)
- DELETE /api/v2/contacts.json — deleteContact: Delete a contact

## flow_starts
- GET /api/v2/flow_starts.json — listFlowStarts: List flow starts
- POST /api/v2/flow_starts.json — startFlow: Start a flow for a set of contacts, groups, or URNs

## flows
- GET /api/v2/flows.json — listFlows: List flows
