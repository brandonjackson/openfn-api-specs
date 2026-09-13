# Ethiopia Master Facility Registry (MFR) API (et-mfr) v2.0.0

<!-- derived from openapi.json by `pnpm specs index et-mfr` — do not edit by hand -->

base: https://mfr.moh.gov.et | auth: http/basic, http/bearer | 14 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## facilities
- GET /api/Facility — getFacility: Get one facility by its MFR id
- POST /api/Facility — createFacility: Create a facility
- PUT /api/Facility — updateFacility: Update a facility
- GET /api/Facility/All — listFacilities: List facilities in full detail
- POST /api/Facility/GetFacilities — searchFacilities: Search facilities, one page at a time
- POST /api/Facility/ExportCSV — exportFacilitiesCsv: Export matching facilities as CSV
- GET /api/Facility/{dhis2Id} — getFacilityByDhis2Id: Get one facility by its DHIS2 id
- DELETE /api/Facility/{dhis2Id} — deleteFacility: Delete a facility by its DHIS2 id

## health
- GET /api/Health — getHealth: Readiness probe for the API and its dependencies

## locations
- GET /api/Location/Regions — listRegions: List regions
- GET /api/Location/Zones — listZones: List zones
- GET /api/Location/Woredas — listWoredas: List woredas

## lookups
- GET /api/Lookup — listLookupItems: List one reference-data collection by name
- POST /api/Lookup — createLookupItem: Create a reference-data row
