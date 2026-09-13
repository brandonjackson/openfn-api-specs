# Monnify API (mock subset) (monnify) v1.0.0

<!-- derived from openapi.json by `pnpm specs index monnify` — do not edit by hand -->

base: https://sandbox.monnify.com | auth: not declared | 7 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## auth
- POST /api/v1/auth/login — login: Authenticate and obtain an access token

## bank-transfer
- POST /api/v2/bank-transfer/reserved-accounts — createReservedAccount: Reserve an account for a customer
- GET /api/v2/bank-transfer/reserved-accounts/{accountReference} — getReservedAccount: Get reserved account details

## disbursements
- POST /api/v2/disbursements/single — initiateTransfer: Initiate a single disbursement transfer
- GET /api/v2/disbursements/single/transactions — getTransferStatus: Get the status of a single transfer
- GET /api/v2/disbursements/search-transactions — searchDisbursements: Search disbursement transactions

## transactions
- GET /api/v1/transactions/search — searchTransactions: Search collection transactions
