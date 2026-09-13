# FHIR NDR Ethiopia R4 REST API (OpenFn fhir-ndr-et subset) (fhir-ndr-et) v4.0.1

<!-- derived from openapi.json by `pnpm specs index fhir-ndr-et` — do not edit by hand -->

base: https://ndr.moh.gov.et/fhir | auth: not declared | 31 operations in 7 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## (root)
- POST / — submitTransactionBundle: Submit a transaction/batch Bundle (uploadBundle)

## Condition
- GET /Condition — searchCondition: Search Condition resources
- POST /Condition — createCondition: Create a Condition resource
- GET /Condition/{id} — readCondition: Read a Condition by id
- PUT /Condition/{id} — updateCondition: Update (upsert) a Condition by id
- DELETE /Condition/{id} — deleteCondition: Delete a Condition by id

## Encounter
- GET /Encounter — searchEncounter: Search Encounter resources
- POST /Encounter — createEncounter: Create a Encounter resource
- GET /Encounter/{id} — readEncounter: Read a Encounter by id
- PUT /Encounter/{id} — updateEncounter: Update (upsert) a Encounter by id
- DELETE /Encounter/{id} — deleteEncounter: Delete a Encounter by id

## Observation
- GET /Observation — searchObservation: Search Observation resources
- POST /Observation — createObservation: Create a Observation resource
- GET /Observation/{id} — readObservation: Read a Observation by id
- PUT /Observation/{id} — updateObservation: Update (upsert) a Observation by id
- DELETE /Observation/{id} — deleteObservation: Delete a Observation by id

## Organization
- GET /Organization — searchOrganization: Search Organization resources
- POST /Organization — createOrganization: Create a Organization resource
- GET /Organization/{id} — readOrganization: Read a Organization by id
- PUT /Organization/{id} — updateOrganization: Update (upsert) a Organization by id
- DELETE /Organization/{id} — deleteOrganization: Delete a Organization by id

## Patient
- GET /Patient — searchPatient: Search Patient resources
- POST /Patient — createPatient: Create a Patient resource
- GET /Patient/{id} — readPatient: Read a Patient by id
- PUT /Patient/{id} — updatePatient: Update (upsert) a Patient by id
- DELETE /Patient/{id} — deletePatient: Delete a Patient by id

## Practitioner
- GET /Practitioner — searchPractitioner: Search Practitioner resources
- POST /Practitioner — createPractitioner: Create a Practitioner resource
- GET /Practitioner/{id} — readPractitioner: Read a Practitioner by id
- PUT /Practitioner/{id} — updatePractitioner: Update (upsert) a Practitioner by id
- DELETE /Practitioner/{id} — deletePractitioner: Delete a Practitioner by id
