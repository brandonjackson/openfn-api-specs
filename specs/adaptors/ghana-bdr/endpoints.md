# Ghana HBDRP Integration API (Births & Deaths Registry) (ghana-bdr) v1

<!-- derived from openapi.json by `pnpm specs index ghana-bdr` — do not edit by hand -->

base: https://bdrbeta.npontu.com, https://bdr.npontu.com | auth: apiKey (header Token), http/bearer | 8 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Auth
- POST /api/v1/UserManagementService/integrations/auth/token — createAccessToken: Exchange the API-consumer token for an access token
- POST /api/v1/UserManagementService/integrations/auth/refresh — refreshAccessToken: Exchange a refresh token for a new token pair

## Birth Registrations
- POST /api/v1/UserManagementService/integrations/registrations/birth — createBirthRecord: Create a birth registration record
- GET /api/v1/UserManagementService/integrations/registrations/birth/{documentNumber} — getBirthRecord: Look up a birth record and its status
- POST /api/v1/UserManagementService/integrations/registrations/birth/{documentNumber} — updateBirthRecord: Update a birth registration record

## Death Registrations
- POST /api/v1/UserManagementService/integrations/registrations/death — createDeathRecord: Create a death registration record
- GET /api/v1/UserManagementService/integrations/registrations/death/{documentNumber} — getDeathRecord: Look up a death record and its status

## Utilities
- POST /api/v1/UserManagementService/integrations/utility — listUtilityValues: Fetch a coded-value lookup list
