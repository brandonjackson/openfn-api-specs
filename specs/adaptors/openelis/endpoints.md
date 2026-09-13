# OpenELIS Global REST API (mock subset) (openelis) v3.2.1

<!-- derived from openapi.json by `pnpm specs index openelis` — do not edit by hand -->

base: https://openelis.example.org/api/OpenELIS-Global | auth: http/basic | 15 operations in 12 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## AccessionValidation
- GET /rest/AccessionValidation — getResultsForValidation: List results awaiting validation
- POST /rest/AccessionValidation — validateResults: Submit result validation

## LogbookResults
- GET /rest/LogbookResults — getLogbookResults: Get results awaiting entry
- POST /rest/LogbookResults — saveLogbookResults: Save entered results

## PatientManagement
- POST /rest/PatientManagement — savePatient: Create or update a patient

## SamplePatientEntry
- POST /rest/SamplePatientEntry — createSampleOrder: Create a lab order (sample + patient + tests)

## accession-results
- GET /rest/accession-results — getAccessionResults: Get results for an accession

## displayList
- GET /rest/displayList/{listType} — getDisplayList: Get a dictionary list by type

## home-dashboard
- GET /rest/home-dashboard/{listType} — getDashboardOrders: Get dashboard orders for a tile type
- GET /rest/home-dashboard/metrics — getDashboardMetrics: Get dashboard summary metrics

## order
- GET /rest/order/dashboard — getOrderDashboard: Search/list orders

## patient-search
- GET /rest/patient-search — searchPatientsBare: Search patients (unpaged array)

## patient-search-results
- GET /rest/patient-search-results — searchPatients: Search patients (paged)

## sample-status-types
- GET /rest/sample-status-types — getSampleStatusTypes: List sample status types

## test-list
- GET /rest/test-list — getTestList: List tests available to the user
