# Dagu pharmacy / dispensing API (dagu) vunknown

<!-- derived from openapi.json by `pnpm specs index dagu` — do not edit by hand -->

base: {baseUrl} | auth: http/bearer | 5 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Account
- POST /account/login — login: Log in and get an access token

## Dispensing Unit
- GET /DispensingUnit/Dashboard/StockOutReport — getStockOutReport: Get the dispensing unit stock-out report
- POST /DispensingUnit/Request/History — getRequestHistory: Search dispensing-unit request history

## Patient
- POST /Patient/CheckPrescription — checkPrescription: Check a prescription
- POST /Patient/Prescription/History — getPrescriptionHistory: Page through patient prescription history
