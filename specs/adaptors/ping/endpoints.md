# Ping (SPING) adaptor surface (synthesized) (ping) v1.0

<!-- derived from openapi.json by `pnpm specs index ping` — do not edit by hand -->

base: https://sping.example.azure-api.net | auth: not declared | 5 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## ping
- GET /ping — ping: Connectivity/health probe

## records
- GET /records — getRecords: Generic GET read (get helper)
- POST /records — postRecord: Generic POST write (post helper)
- GET /records/{id} — getRecord: Fetch a single record by id

## token
- POST /token — requestToken: Obtain an OAuth2 bearer token from the Azure AD B2C token endpoint
