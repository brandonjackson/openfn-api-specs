# WhatsApp Business Cloud API (OpenFn whatsapp adaptor) (whatsapp) vv20.0

<!-- derived from openapi.json by `pnpm specs index whatsapp` — do not edit by hand -->

base: https://graph.facebook.com/v20.0 | auth: http/bearer | 6 operations in 5 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## deregister
- POST /{phoneNumberId}/deregister — deregisterPhoneNumber: Deregister a business phone number

## media
- POST /{phoneNumberId}/media — uploadMedia: Upload media

## messages
- POST /{phoneNumberId}/messages — sendMessage: Send a WhatsApp message

## register
- POST /{phoneNumberId}/register — registerPhoneNumber: Register a business phone number

## {mediaId}
- GET /{mediaId} — getMedia: Retrieve media URL
- DELETE /{mediaId} — deleteMedia: Delete media
