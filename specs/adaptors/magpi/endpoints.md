# Magpi Outbound & Inbound API (magpi) v3.0.0

<!-- derived from openapi.json by `pnpm specs index magpi` — do not edit by hand -->

base: https://www.magpi.com | auth: not declared | 4 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## mobileApi
- POST /mobileApi/uploadData — submitRecord: Upload / submit a record to an existing form

## surveydata
- POST /api/surveydata/v3 — fetchSurveyData: Get survey data (v3)
- POST /api/surveydata/v2 — fetchSurveyDataV2: Get survey data (v2, includes sub-form data)
- POST /api/surveydata — fetchSurveyDataV1: Get survey data (v1)
