# Hubtel Messaging API (mock subset) (hubtel) v1.0.0

<!-- derived from openapi.json by `pnpm specs index hubtel` — do not edit by hand -->

base: https://smsc.hubtel.com/v1 | auth: not declared | 2 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## messages
- POST /messages/send — sendSMS: Send an SMS message (Quick Send)
- GET /messages/{messageId} — getMessageStatus: Get the delivery status of a sent message
