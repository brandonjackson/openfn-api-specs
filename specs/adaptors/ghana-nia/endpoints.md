# Ghana NIA AWOPA Baby Registration API (ghana-nia) v1

<!-- derived from openapi.json by `pnpm specs index ghana-nia` — do not edit by hand -->

base: https://selfie.imsgh.org:2035 | auth: apiKey (header NIa_merchantKey) | 3 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Baby Registration
- GET /awopa/api/v1/baby/registration — listRegistrations: List minted registrations
- POST /awopa/api/v1/baby/registration — registerChild: Register a newborn and mint a Ghana Card PIN
- GET /awopa/api/v1/baby/registration/{babyPin} — getRegistration: Look up one registration by baby PIN
