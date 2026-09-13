# Safaricom M-Pesa Daraja API (mpesa) v1.0.0

<!-- derived from openapi.json by `pnpm specs index mpesa` — do not edit by hand -->

base: https://sandbox.safaricom.co.ke, https://api.safaricom.co.ke | auth: http/bearer, http/basic | 6 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## mpesa
- POST /mpesa/stkpush/v1/processrequest — stkPush: Initiate Lipa Na M-Pesa Online (STK Push)
- POST /mpesa/transactionstatus/v1/query — checkTransactionStatus: Query the status of a transaction
- POST /mpesa/c2b/v1/registerurl — registerUrl: Register C2B validation and confirmation URLs
- POST /mpesa/b2b/v1/remittax — remitTax: Remit tax to the Kenya Revenue Authority (KRA)
- POST /mpesa/b2b/v1/paymentrequest — buyGoods: B2B payment (buy goods / till payment)

## oauth
- GET /oauth/v1/generate — generateToken: Generate an OAuth access token
