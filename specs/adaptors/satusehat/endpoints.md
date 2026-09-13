# SatuSehat Platform FHIR R4 API (satusehat) v1.0.0

<!-- derived from openapi.json by `pnpm specs index satusehat` — do not edit by hand -->

base: https://api-satusehat.kemkes.go.id, https://api-satusehat-stg.dto.kemkes.go.id | auth: http/bearer (JWT) | 20 operations in 7 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Auth
- POST /oauth2/v1/accesstoken — getAccessToken: Obtain an OAuth2 access token (client_credentials grant)

## Condition
- GET /fhir-r4/v1/Condition/{id} — readCondition: Read a Condition by id
- GET /fhir-r4/v1/Condition — searchCondition: Search Conditions
- POST /fhir-r4/v1/Condition — createCondition: Create a Condition

## Encounter
- GET /fhir-r4/v1/Encounter/{id} — readEncounter: Read an Encounter by id
- PUT /fhir-r4/v1/Encounter/{id} — updateEncounter: Update an Encounter
- GET /fhir-r4/v1/Encounter — searchEncounter: Search Encounters (e.g. by subject)
- POST /fhir-r4/v1/Encounter — createEncounter: Create an Encounter

## Location
- GET /fhir-r4/v1/Location/{id} — readLocation: Read a Location by id
- POST /fhir-r4/v1/Location — createLocation: Create a Location

## Observation
- GET /fhir-r4/v1/Observation/{id} — readObservation: Read an Observation by id
- GET /fhir-r4/v1/Observation — searchObservation: Search Observations
- POST /fhir-r4/v1/Observation — createObservation: Create an Observation

## Organization
- GET /fhir-r4/v1/Organization/{id} — readOrganization: Read an Organization by id
- PUT /fhir-r4/v1/Organization/{id} — updateOrganization: Update an Organization
- GET /fhir-r4/v1/Organization — searchOrganization: Search Organizations
- POST /fhir-r4/v1/Organization — createOrganization: Create an Organization

## Patient
- GET /fhir-r4/v1/Patient/{id} — readPatient: Read a Patient by IHS id
- PUT /fhir-r4/v1/Patient/{id} — updatePatient: Update a Patient
- GET /fhir-r4/v1/Patient — searchPatient: Search Patients (e.g. by identifier/NIK)
