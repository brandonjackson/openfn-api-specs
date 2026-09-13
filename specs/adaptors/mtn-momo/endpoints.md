# MTN Mobile Money (MoMo) Open API (mtn-momo) v1.0.0

<!-- derived from openapi.json by `pnpm specs index mtn-momo` — do not edit by hand -->

base: https://sandbox.momodeveloper.mtn.com | auth: not declared | 13 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Authentication
- POST /collection/token/ — createCollectionToken: Create an OAuth 2.0 access token for the Collection product
- POST /disbursement/token/ — createDisbursementToken: Create an OAuth 2.0 access token for the Disbursement product

## Collection
- POST /collection/v1_0/requesttopay — requestToPay: Request a payment from a consumer (payer)
- GET /collection/v1_0/requesttopay/{referenceId} — getRequestToPayStatus: Get the status of a request to pay
- GET /collection/v1_0/account/balance — getAccountBalance: Get the balance of the collection account
- GET /collection/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active — validateAccountHolderActive: Check whether an account holder is registered and active
- GET /collection/v1_0/accountholder/msisdn/{msisdn}/basicuserinfo — getBasicUserInfo: Get basic KYC information about an account holder
- POST /collection/v2_0/invoice — createInvoice: Create an invoice for a payer

## Disbursement
- POST /disbursement/v1_0/transfer — transfer: Transfer funds from the disbursement account to a payee
- GET /disbursement/v1_0/transfer/{referenceId} — getTransferStatus: Get the status of a transfer

## Sandbox provisioning
- POST /v1_0/apiuser — createApiUser: Create an API user in the sandbox
- GET /v1_0/apiuser/{referenceId} — getApiUser: Get details of an API user
- POST /v1_0/apiuser/{referenceId}/apikey — createApiKey: Create an API key for an API user
