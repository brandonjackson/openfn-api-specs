# LAMISPlus EMR API (synthesized) (lamisplus) v1.0.0

<!-- derived from openapi.json by `pnpm specs index lamisplus` — do not edit by hand -->

base: https://lamisplus.example.org | auth: http/bearer (JWT) | 8 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## auth
- POST /core/api/v1/auth/login — login: Authenticate and obtain a bearer token

## patients
- GET /plugin/ehr/api/v1/patient — getPatients: List patient resources
- POST /plugin/ehr/api/v1/patient — createPatient: Create a patient record
- GET /plugin/ehr/api/v1/patient/{id} — getPatientById: Get a single patient by id
- GET /plugin/ehr/api/v1/biometric — getBiometrics: List patient biometric records

## visits
- GET /plugin/ehr/api/v1/visit — getVisits: List clinical visits
- POST /plugin/ehr/api/v1/visit — createVisit: Create a clinical visit
- GET /plugin/ehr/api/v1/encounter — getEncounters: List encounters
