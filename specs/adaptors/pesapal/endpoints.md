# Pesapal API 3.0 (mock subset) (pesapal) v3.0

<!-- derived from openapi.json by `pnpm specs index pesapal` — do not edit by hand -->

base: https://pay.pesapal.com/pesapalv3, https://cybqa.pesapal.com/pesapalv3 | auth: not declared | 7 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Auth
- POST /api/Auth/RequestToken — requestToken: Request a bearer auth token

## Transactions
- POST /api/Transactions/SubmitOrderRequest — submitOrderRequest: Submit an order for payment
- GET /api/Transactions/GetTransactionStatus — getTransactionStatus: Get the status of a transaction
- POST /api/Transactions/RefundRequest — refundRequest: Request a refund for a confirmed payment
- POST /api/Transactions/CancelOrder — cancelOrder: Cancel a pending order

## URLSetup
- POST /api/URLSetup/RegisterIPN — registerIPN: Register an Instant Payment Notification (IPN) URL
- GET /api/URLSetup/GetIpnList — getIpnList: List registered IPN URLs
