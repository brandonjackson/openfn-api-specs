# FormSG webhook submissions (OpenFn formsg adaptor operations) (formsg) vformsg-sdk 0.15

<!-- derived from openapi.json by `pnpm specs index formsg` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 3 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Submissions
- POST /decryptSubmission — decryptSubmission: Decrypt a submission (optionally verifying the signature first)
- POST /verifyWebhook — verifyWebhook: Verify an X-FormSG-Signature header
- POST /processWebhook — processWebhook: Verify and decrypt in one step
