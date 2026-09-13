# Wigal Frog SMS API (wigal-sms) v3.0.0

<!-- derived from openapi.json by `pnpm specs index wigal-sms` — do not edit by hand -->

base: https://frogapi.wigal.com.gh | auth: apiKey (header API-KEY), apiKey (header USERNAME) | 5 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## balance
- GET /api/v3/balance — getAccountBalance: Get account balance

## sms
- POST /api/v3/sms/send — sendSms: Send SMS (general or personalized)
- POST /api/v3/sms/otp/generate — generateOtp: Generate and send an OTP
- POST /api/v3/sms/otp/verify — verifyOtp: Verify an OTP
- POST /api/v3/sms/history — getSmsHistory: Get message history / delivery status
