# CHT / Medic REST API (mock subset) (cht) v5.2.0

<!-- derived from openapi.json by `pnpm specs index cht` — do not edit by hand -->

base: https://{instance}.app.medicmobile.org | auth: not declared | 15 operations in 8 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Config
- GET /api/v1/settings — getSettings: Get app settings
- PUT /api/v1/settings — updateSettings: Update app settings
- GET /api/v1/forms — listForms: List available forms

## Contact
- GET /api/v1/contact/{id} — getContact: Get a contact by id

## Export
- GET /api/v2/export/contacts — exportContacts: Export contacts
- GET /api/v2/export/dhis — exportDhis: Export DHIS2 target data

## Monitoring
- GET /api/v2/monitoring — getMonitoring: Get monitoring metrics

## Person
- POST /api/v1/people — createPerson: Create a person (legacy) (deprecated)
- POST /api/v1/person — createPersonV1: Create a new person
- GET /api/v1/person/{id} — getPerson: Get a person by id

## Place
- POST /api/v1/places — createPlace: Create a place (legacy) (deprecated)
- GET /api/v1/place/{id} — getPlace: Get a place by id

## SMS
- POST /api/v2/records — createRecord: Create a record (report)

## User
- GET /api/v1/users — listUsers: List users
- POST /api/v1/users — createUsers: Create users
