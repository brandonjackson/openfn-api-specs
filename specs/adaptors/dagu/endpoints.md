# Dagu Pharmacy/Dispensing API (synthesized) (dagu) v1.0.0

<!-- derived from openapi.json by `pnpm specs index dagu` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 4 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## DispensingUnit
- GET /DispensingUnit/Dashboard/StockOutReport — getStockOutReport: Stock-out report for a dispensing unit
- POST /DispensingUnit/Request/History — getRequestHistory: Dispensing-unit request history

## Patient
- POST /Patient/CheckPrescription — checkPrescription: Check a patient prescription by row GUID
- POST /Patient/Prescription/History — getPrescriptionHistory: Paged prescription history
