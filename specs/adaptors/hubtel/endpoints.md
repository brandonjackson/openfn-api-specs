# Hubtel Messaging API (SMS and OTP) (hubtel) vv1

<!-- derived from openapi.json by `pnpm specs index hubtel` — do not edit by hand -->

base: https://sms.hubtel.com/v1, https://smsc.hubtel.com/v1 | auth: http/basic | 9 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Batches
- POST /messages/batch/simple/send — sendBatchMessage: Send one message to many recipients
- POST /messages/batch/personalized/send — sendPersonalizedBatch: Send personalised messages to many recipients
- GET /messages/batch/{batchId} — getMessageBatch: Get the status of every message in a batch

## Messages
- GET /messages/send — quickSendMessage: Send a message (quick send, URL authentication)
- POST /messages/send — sendMessage: Send a message
- GET /messages/{messageId} — getMessage: Get the status of a message

## OTP
- POST /otp/send — sendOtp: Send a one-time password
- POST /otp/verify — verifyOtp: Verify a one-time password
- POST /otp/resend — resendOtp: Resend a previously issued one-time password
