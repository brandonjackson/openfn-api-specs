# FormSG Webhook / Submission API (OpenFn formsg synthesized) (formsg) v1.0.0

<!-- derived from openapi.json by `pnpm specs index formsg` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 3 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## decrypt
- POST /decrypt — decryptSubmission: Decrypt a FormSG submission (local SDK operation, modelled as an endpoint)

## process
- POST /process — processWebhook: Verify and decrypt a FormSG webhook in one step

## verify
- POST /verify — verifyWebhook: Verify a FormSG webhook signature header
