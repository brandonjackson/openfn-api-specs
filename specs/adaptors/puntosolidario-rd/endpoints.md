# Punto Solidario RD adaptor surface (synthesized) (puntosolidario-rd) v1.0

<!-- derived from openapi.json by `pnpm specs index puntosolidario-rd` — do not edit by hand -->

base: https://api.puntosolidario.example.gob.do | auth: not declared | 6 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## beneficiarios
- GET /beneficiarios — listBeneficiarios: List beneficiaries
- POST /beneficiarios — createBeneficiario: Register a beneficiary
- GET /beneficiarios/{id} — getBeneficiario: Get a beneficiary by id

## subsidios
- GET /subsidios — listSubsidios: List subsidy programs

## transacciones
- GET /transacciones — listTransacciones: List payment transactions
- POST /transacciones — createTransaccion: Record a subsidy payment transaction
