# openIMIS FHIR R4 API (mock subset) (openimis) vR4

<!-- derived from openapi.json by `pnpm specs index openimis` — do not edit by hand -->

base: http://localhost:8000/api/api_fhir_r4 | auth: not declared | 29 operations in 15 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Claim
- GET /Claim/ — searchClaim: Search Claim resources
- GET /Claim/{id}/ — getClaim: Get a Claim by id

## ClaimResponse
- GET /ClaimResponse/ — searchClaimResponse: Search ClaimResponse resources
- GET /ClaimResponse/{id}/ — getClaimResponse: Get a ClaimResponse by id

## Condition
- GET /Condition/ — searchCondition: Search Condition resources
- GET /Condition/{id}/ — getCondition: Get a Condition by id

## Contract
- GET /Contract/ — searchContract: Search Contract resources
- GET /Contract/{id}/ — getContract: Get a Contract by id

## Coverage
- GET /Coverage/ — searchCoverage: Search Coverage resources
- GET /Coverage/{id}/ — getCoverage: Get a Coverage by id

## CoverageEligibilityRequest
- GET /CoverageEligibilityRequest/ — searchCoverageEligibilityRequest: Search CoverageEligibilityRequest resources
- GET /CoverageEligibilityRequest/{id}/ — getCoverageEligibilityRequest: Get a CoverageEligibilityRequest by id

## Group
- GET /Group/ — searchGroup: Search Group resources
- GET /Group/{id}/ — getGroup: Get a Group by id

## HealthcareService
- GET /HealthcareService/ — searchHealthcareService: Search HealthcareService resources
- GET /HealthcareService/{id}/ — getHealthcareService: Get a HealthcareService by id

## Location
- GET /Location/ — searchLocation: Search Location resources
- GET /Location/{id}/ — getLocation: Get a Location by id

## Medication
- GET /Medication/ — searchMedication: Search Medication resources
- GET /Medication/{id}/ — getMedication: Get a Medication by id

## Organization
- GET /Organization/ — searchOrganization: Search Organization resources
- GET /Organization/{id}/ — getOrganization: Get a Organization by id

## Patient
- GET /Patient/ — searchPatient: Search Patient resources
- GET /Patient/{id}/ — getPatient: Get a Patient by id

## Practitioner
- GET /Practitioner/ — searchPractitioner: Search Practitioner resources
- GET /Practitioner/{id}/ — getPractitioner: Get a Practitioner by id

## PractitionerRole
- GET /PractitionerRole/ — searchPractitionerRole: Search PractitionerRole resources
- GET /PractitionerRole/{id}/ — getPractitionerRole: Get a PractitionerRole by id

## login
- POST /login/ — login: Authenticate and obtain a bearer token
