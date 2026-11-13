# Pesapal API 3.0 (pesapal) v3.0

<!-- derived from openapi.json by `pnpm specs index pesapal` — do not edit by hand -->

base: https://pay.pesapal.com/v3, https://cybqa.pesapal.com/pesapalv3 | auth: http/bearer | 15 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Authentication
- POST /api/Auth/RequestToken — requestToken: Request an access token

## IPN
- POST /api/URLSetup/RegisterIPN — registerIpnUrl: Register an IPN URL
- GET /api/URLSetup/GetIpnList — listIpnUrls: List registered IPN URLs
- POST /api/URLSetup/RegisterCallBackUrl — registerCallbackUrl: Register a callback URL

## Internal
- GET /api/tests/fx/convert — convertFx: Convert an amount between currencies (test endpoint) (deprecated)
- GET /api/health — getHealth: Health check (sandbox only) (deprecated)
- POST /api/webhooks/fingerprintjs/blockFingerprint — blockFingerprint: FingerprintJS webhook receiver (deprecated)
- POST /api/webhooks/fingerprintjs/blockFingerprintBasicAuth — blockFingerprintBasicAuth: FingerprintJS webhook receiver (basic auth) (deprecated)

## Transactions
- POST /api/Transactions/SubmitOrderRequest — submitOrderRequest: Submit an order request
- POST /api/Transactions/stk — submitMobileMoneyStk: Direct mobile money (STK push) order
- GET /api/Transactions/GetTransactionStatus — getTransactionStatus: Get transaction status
- GET /api/Transactions/GetTransactionByMerchantReference — getTransactionByMerchantReference: Get a transaction by merchant reference
- GET /api/Transactions/QueryStatusByConfirmationCode — queryStatusByConfirmationCode: Query transaction status by confirmation code
- POST /api/Transactions/RefundRequest — requestRefund: Request a refund
- POST /api/Transactions/CancelOrder — cancelOrder: Cancel an order
