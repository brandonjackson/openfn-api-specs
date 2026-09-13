# PROGRES adaptor surface (synthesized) (progres) v1.0

<!-- derived from openapi.json by `pnpm specs index progres` — do not edit by hand -->

base: https://progres.example.azure-api.net | auth: not declared | 3 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## data
- POST /data — postData: Submit a data payload via mutual-TLS POST (generic postData)

## enrollments
- POST /enrollments — postEnrollment: Submit a student enrollment record

## students
- POST /students — postStudent: Submit a student record
