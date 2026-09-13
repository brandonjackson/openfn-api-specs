# HL7 FHIR R4 REST API (subset) (fhir) v4.0.1

<!-- derived from openapi.json by `pnpm specs index fhir` — do not edit by hand -->

base: http://hapi.fhir.org/baseR4 | auth: not declared | 10 operations in 5 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## (root)
- POST / — createTransactionBundle: Submit a transaction/batch Bundle to the base endpoint

## Claim
- GET /Claim — getClaim: Search claims
- GET /Claim/{id} — getClaimById: Read a Claim by id

## Encounter
- GET /Encounter — searchEncounters: Search encounters
- POST /Encounter — createEncounter: Create an Encounter

## Observation
- GET /Observation — searchObservations: Search observations
- POST /Observation — createObservation: Create an Observation

## Patient
- GET /Patient — searchPatients: Search patients
- POST /Patient — createPatient: Create a Patient
- GET /Patient/{id} — getPatient: Read a Patient by id
