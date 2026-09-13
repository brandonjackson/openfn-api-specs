# iHRIS FHIR R4 API (mock subset) (ihris) v4.0.1

<!-- derived from openapi.json by `pnpm specs index ihris` — do not edit by hand -->

base: https://ihris.example.com/fhir | auth: not declared | 9 operations in 5 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Location
- GET /Location/{id} — getLocation: Read a location by id

## Organization
- GET /Organization/{id} — getOrganization: Read an organization by id

## Practitioner
- GET /Practitioner — searchPractitioner: Search practitioners
- POST /Practitioner — createPractitioner: Create a practitioner
- GET /Practitioner/{id} — getPractitioner: Read a practitioner by id
- PUT /Practitioner/{id} — updatePractitioner: Update a practitioner

## PractitionerRole
- GET /PractitionerRole — searchPractitionerRole: Search practitioner roles
- POST /PractitionerRole — createPractitionerRole: Create a practitioner role

## metadata
- GET /metadata — getCapabilityStatement: Server capability statement
