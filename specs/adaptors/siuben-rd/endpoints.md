# SIUBEN (Sistema Único de Beneficiarios) API (siuben-rd) vunpublished

<!-- derived from openapi.json by `pnpm specs index siuben-rd` — do not edit by hand -->

base: {baseUrl} | auth: http/bearer (JWT) | 4 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Authentication
- POST /authenticate — authenticate: Obtain a bearer token
- POST /api/auth/login — login: Obtain a bearer token (login variant seen in a third-party client)

## Beneficiarios
- GET /api/Data/get/{cedula} — getBeneficiario: Look up a beneficiary by cédula
- PUT /api/Data/update/{cedula} — updateBeneficiarioContrato: Record a programme contract against a beneficiary
