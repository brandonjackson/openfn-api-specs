# Go.Data API (mock subset) (godata) v2.x

<!-- derived from openapi.json by `pnpm specs index godata` — do not edit by hand -->

base: http://localhost:3000/api | auth: not declared | 15 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## locations
- GET /locations — listLocations: List / filter locations
- POST /locations — createLocation: Create a location
- PUT /locations/{id} — updateLocation: Update a location

## outbreaks
- GET /outbreaks — listOutbreaks: List / filter outbreaks
- POST /outbreaks — createOutbreak: Create an outbreak
- PUT /outbreaks/{id} — updateOutbreak: Update an outbreak
- GET /outbreaks/{outbreakId}/contacts — listContacts: List / filter contacts for an outbreak
- POST /outbreaks/{outbreakId}/contacts — createContact: Create a contact in an outbreak
- PUT /outbreaks/{outbreakId}/contacts/{contactId} — updateContact: Update a contact
- GET /outbreaks/{outbreakId}/cases — listCases: List / filter cases for an outbreak
- POST /outbreaks/{outbreakId}/cases — createCase: Create a case in an outbreak
- PUT /outbreaks/{outbreakId}/cases/{caseId} — updateCase: Update a case

## reference-data
- GET /reference-data — listReferenceData: List / filter reference data
- POST /reference-data — createReferenceData: Create a reference-data entry
- PUT /reference-data/{id} — updateReferenceData: Update a reference-data entry
