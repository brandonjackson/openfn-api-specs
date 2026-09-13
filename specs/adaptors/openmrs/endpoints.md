# OpenMRS REST Web Services API (mock subset) (openmrs) v2.x

<!-- derived from openapi.json by `pnpm specs index openmrs` — do not edit by hand -->

base: https://demo.openmrs.org/openmrs/ws/rest/v1 | auth: not declared | 38 operations in 11 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## concept
- GET /concept — listConcepts: Search concepts
- POST /concept — createConcept: Create a concept
- GET /concept/{uuid} — getConcept: Get a concept by UUID

## encounter
- GET /encounter — listEncounters: Search encounters
- POST /encounter — createEncounter: Create an encounter
- GET /encounter/{uuid} — getEncounter: Get an encounter by UUID
- POST /encounter/{uuid} — updateEncounter: Update an encounter
- DELETE /encounter/{uuid} — deleteEncounter: Void an encounter

## encountertype
- GET /encountertype — listEncounterTypes: List encounter types
- GET /encountertype/{uuid} — getEncounterType: Get an encounter type by UUID

## location
- GET /location — listLocations: Search locations
- POST /location — createLocation: Create a location
- GET /location/{uuid} — getLocation: Get a location by UUID

## obs
- GET /obs — listObs: Search observations
- POST /obs — createObs: Create an observation
- GET /obs/{uuid} — getObs: Get an observation by UUID
- DELETE /obs/{uuid} — deleteObs: Void an observation

## patient
- GET /patient — listPatients: Search patients
- POST /patient — createPatient: Create a patient
- GET /patient/{uuid} — getPatient: Get a patient by UUID
- POST /patient/{uuid} — updatePatient: Update a patient
- DELETE /patient/{uuid} — deletePatient: Void (delete) a patient
- GET /patient/{uuid}/allergy — listPatientAllergies: List a patient's allergies (subresource)
- POST /patient/{uuid}/allergy — createPatientAllergy: Add an allergy to a patient
- GET /patient/{uuid}/allergy/{allergyUuid} — getPatientAllergy: Get one allergy subresource by UUID

## patientidentifiertype
- GET /patientidentifiertype — listPatientIdentifierTypes: List patient identifier types
- GET /patientidentifiertype/{uuid} — getPatientIdentifierType: Get a patient identifier type by UUID

## person
- GET /person — listPersons: Search persons
- POST /person — createPerson: Create a person
- GET /person/{uuid} — getPerson: Get a person by UUID
- POST /person/{uuid} — updatePerson: Update a person

## provider
- GET /provider — listProviders: Search providers
- GET /provider/{uuid} — getProvider: Get a provider by UUID

## visit
- GET /visit — listVisits: Search visits
- POST /visit — createVisit: Create a visit
- GET /visit/{uuid} — getVisit: Get a visit by UUID
- POST /visit/{uuid} — updateVisit: Update a visit

## visittype
- GET /visittype — listVisitTypes: List visit types
