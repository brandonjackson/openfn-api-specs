# SIUBEN (Sistema Único de Beneficiarios) API (siuben-rd) v1.0.0

<!-- derived from openapi.json by `pnpm specs index siuben-rd` — do not edit by hand -->

base: https://api.siuben.gob.do | auth: http/bearer | 6 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## authenticate
- POST /authenticate — authenticate: Authenticate and obtain a bearer token

## beneficiarios
- GET /beneficiarios — listBeneficiarios: List/search beneficiaries
- GET /beneficiarios/{cedula} — getBeneficiario: Get a beneficiary by cédula

## hogares
- GET /hogares/{hogarId} — getHogar: Get a household by id
- GET /hogares/{hogarId}/miembros — getHogarMiembros: List members of a household

## icv
- GET /icv/{hogarId} — getIcv: Get the Quality of Life Index (ICV) for a household
