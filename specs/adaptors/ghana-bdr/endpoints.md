# Ghana Births & Deaths Registry (CHIM eTracker) API (ghana-bdr) v1.0.0

<!-- derived from openapi.json by `pnpm specs index ghana-bdr` — do not edit by hand -->

base: http://tracker.chimgh.org | auth: not declared | 2 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## notification
- POST /api/notification — sendBirthNotification: Send a birth notification / generate a birth certificate

## {resource}
- GET /api/{resource} — get: Generic GET request
