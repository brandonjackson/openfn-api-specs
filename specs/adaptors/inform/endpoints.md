# UNICEF Inform API (mock subset) (inform) vv1

<!-- derived from openapi.json by `pnpm specs index inform` — do not edit by hand -->

base: https://data.inform.unicef.org/api/v1 | auth: not declared | 6 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## data
- GET /data/{formId} — getSubmissions: List submissions for a form
- GET /data/{formId}/{submissionId} — getSubmission: Get a single submission

## forms
- GET /forms — getForms: List forms
- GET /forms/{formId} — getForm: Get a single form's metadata
- GET /forms/{formId}/form.json — getFormStructure: Get a form's structure (XLSForm JSON)

## media
- GET /media/{attachmentId} — getAttachmentMetadata: Get attachment (media) metadata
