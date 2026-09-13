# Ethiopia Master Facility Registry (MFR) API (subset) (et-mfr) v2.0.0

<!-- derived from openapi.json by `pnpm specs index et-mfr` — do not edit by hand -->

base: https://mfrapi.moh.gov.et | auth: not declared | 5 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Facility
- GET /Facility — getFacility: Get a facility by id
- GET /Facility/All — getAllFacilities: Search facilities by name
- POST /Facility/GetFacilities — getFacilities: Paged facility listing
- POST /Facility/ExportCSV — exportFacilitiesCsv: Export facilities as CSV

## Location
- GET /Location/Regions — getRegions: List administrative regions
