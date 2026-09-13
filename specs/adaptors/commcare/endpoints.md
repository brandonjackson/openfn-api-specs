# CommCare HQ REST API (OpenFn commcare adaptor) (commcare) v0.5.0

<!-- derived from openapi.json by `pnpm specs index commcare` — do not edit by hand -->

base: https://www.commcarehq.org/a/{domain} | auth: not declared | 13 operations in 9 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## case
- GET /api/v0.5/case/ — listCases: List cases
- GET /api/v0.5/case/{case_id}/ — getCase: Get a single case

## configurablereportdata
- GET /api/v0.5/configurablereportdata/{report_id}/ — getReportData: Fetch configurable report data

## fixture
- GET /api/v0.5/fixture/ — listFixtures: List lookup table (fixture) rows
- GET /api/v0.5/fixture/{fixture_id}/ — getFixture: Get a single fixture row

## fixtures
- POST /fixtures/fixapi/ — bulkUploadLookupTable: Bulk upload lookup table (fixture) data (Excel)

## form
- GET /api/v0.5/form/ — listForms: List form submissions
- GET /api/v0.5/form/{form_id}/ — getForm: Get a single form

## group
- GET /api/v0.5/group/ — listGroups: List groups

## importer
- POST /importer/excel/bulk_upload_api/ — bulkUploadCaseData: Bulk upload case data (Excel)

## receiver
- POST /receiver/{app_id}/ — submitForm: Submit a form (OpenRosa receiver)

## user
- GET /api/v0.5/user/ — listUsers: List mobile workers (users)
- POST /api/v0.5/user/ — createUser: Create a mobile worker (user)
