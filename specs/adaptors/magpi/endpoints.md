# Magpi API (Outbound, REST Outbound and Inbound) (magpi) vlegacy-v1-v3 / rest-2019

<!-- derived from openapi.json by `pnpm specs index magpi` — do not edit by hand -->

base: https://www.magpi.com, https://app.magpi.com, https://api.magpi.com | auth: apiKey (header Authorization) | 11 operations in 5 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Answers
- GET /api/form/{formExternalId}/answers — listFormAnswers: Get the data (answers) for a form
- GET /api/answer/{formExternalId}/{uuid}/{questionName} — getSubformAnswers: Get Sub-form data

## Forms
- GET /api/forms — listForms: List Forms
- GET /api/form/{formExternalId} — listFormQuestions: List Questions of a form

## Inbound
- POST /GetSurveyForm — getSurveyForm: Get a form definition (XForm)
- POST /UploadRecordsNew — uploadRecords: Upload a record (add new or update existing)
- POST /mobileApi/uploadData — submitRecord: Submit a record (adaptor submitRecord target) (deprecated)

## Survey Data
- POST /api/surveydata — getSurveyData: Get Survey Data (v1)
- POST /api/surveydata/v2 — getSurveyDataV2: Get Survey Data (v2, includes sub-form data)
- POST /api/surveydata/v3 — getSurveyDataV3: Get Survey Data (v3, as called by the adaptor)

## Surveys
- POST /api/surveys — listSurveys: Get Surveys: list the forms the user has data-view access to
