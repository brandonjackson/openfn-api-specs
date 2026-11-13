# Wigal Frog API (wigal-sms) vv3

<!-- derived from openapi.json by `pnpm specs index wigal-sms` — do not edit by hand -->

base: https://frogapi.wigal.com.gh | auth: apiKey (header API-KEY), apiKey (header USERNAME) | 9 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Account
- GET /api/v3/balance — getAccountBalance: Get the account balance and bundles

## OTP
- POST /api/v3/sms/otp/generate — generateSmsOtp: Generate and send an OTP by SMS
- POST /api/v3/sms/otp/verify — verifySmsOtp: Verify an SMS OTP
- POST /api/v3/voice/otp/generate — generateVoiceOtp: Generate and deliver an OTP by voice call
- POST /api/v3/voice/otp/verify — verifyVoiceOtp: Verify a voice OTP

## SMS
- POST /api/v3/sms/send — sendSms: Send general or personalised SMS
- POST /api/v3/sms/history — listMessageHistory: Get sent message history

## Voice
- POST /api/v3/voice/send — sendVoice: Place pre-recorded voice calls
- POST /api/v3/voice/send/dynamic — sendInteractiveVoice: Place interactive voice calls
