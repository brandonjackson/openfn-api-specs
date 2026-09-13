# DHIS2 Web API (mock subset) (dhis2) v2.39

<!-- derived from openapi.json by `pnpm specs index dhis2` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 20 operations in 10 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## dataElements
- GET /api/dataElements — listDataElements: List data elements
- POST /api/dataElements — createDataElement: Create a data element
- GET /api/dataElements/{id} — getDataElement: Get a data element by uid

## dataValueSets
- GET /api/dataValueSets — getDataValueSets: Read data values
- POST /api/dataValueSets — postDataValueSet: Import a data value set

## enrollments
- GET /api/enrollments — listEnrollments: List enrollments
- POST /api/enrollments — createEnrollment: Create an enrollment

## events
- GET /api/events — listEvents: List events
- POST /api/events — createEvent: Create an event

## metadata
- POST /api/metadata — importMetadata: Import a metadata bundle

## organisationUnits
- GET /api/organisationUnits — listOrganisationUnits: List organisation units
- POST /api/organisationUnits — createOrganisationUnit: Create an organisation unit
- GET /api/organisationUnits/{id} — getOrganisationUnit: Get an organisation unit by uid

## programs
- GET /api/programs — listPrograms: List programs
- GET /api/programs/{id} — getProgram: Get a program by uid

## system
- GET /api/system/info — getSystemInfo: System information

## trackedEntityInstances
- GET /api/trackedEntityInstances — listTrackedEntityInstances: List tracked entity instances
- POST /api/trackedEntityInstances — createTrackedEntityInstance: Create a tracked entity instance

## trackedEntityTypes
- GET /api/trackedEntityTypes — listTrackedEntityTypes: List tracked entity types
- GET /api/trackedEntityTypes/{id} — getTrackedEntityType: Get a tracked entity type by uid
