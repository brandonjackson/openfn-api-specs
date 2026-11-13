# MTN MoMo Open API (mtn-momo) v1.0

<!-- derived from openapi.json by `pnpm specs index mtn-momo` — do not edit by hand -->

base: https://proxy.momoapi.mtn.com, https://sandbox.momodeveloper.mtn.com | auth: apiKey (header Ocp-Apim-Subscription-Key), http/basic, http/bearer (JWT) | 56 operations in 20 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Collection: Account balance
- GET /collection/v1_0/account/balance — getCollectionAccountBalance: Get account balance
- GET /collection/v1_0/account/balance/{currency} — getCollectionAccountBalanceInCurrency: Get account balance in currency

## Collection: Account holders
- GET /collection/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/basicuserinfo — getCollectionBasicUserInfo: Get basic user info
- GET /collection/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active — validateCollectionAccountHolderStatus: Validate account holder status

## Collection: Authentication
- POST /collection/v1_0/bc-authorize — authorizeCollectionConsent: Authorize consent
- POST /collection/token/ — createCollectionAccessToken: Create access token
- POST /collection/oauth2/token/ — createCollectionOauth2Token: Create oauth2token
- GET /collection/oauth2/v1_0/userinfo — getCollectionUserInfoWithConsent: Get user info with consent

## Collection: Invoices
- GET /collection/v2_0/invoice/{referenceId} — getCollectionInvoiceStatus: Get invoice status
- DELETE /collection/v2_0/invoice/{referenceId} — cancelCollectionInvoice: Cancel invoice
- POST /collection/v2_0/invoice — createCollectionInvoice: Create invoice

## Collection: Payments
- POST /collection/v2_0/payment — createCollectionPayment: Create payment
- GET /collection/v2_0/payment/{x-referenceId} — getCollectionPaymentStatus: Get payment status

## Collection: Pre-approvals
- DELETE /collection/v1_0/preapproval/{preapprovalid} — cancelCollectionPreApproval: Cancel pre approval
- GET /collection/v1_0/preapprovals/{accountHolderIdType}/{accountHolderId} — listCollectionApprovedPreApprovals: List approved pre approvals
- GET /collection/v2_0/preapproval/{referenceId} — getCollectionPreApprovalStatus: Get pre approval status
- POST /collection/v2_0/preapproval — createCollectionPreApproval: Create pre approval

## Collection: Requests to pay
- POST /collection/v1_0/requesttopay — createCollectionRequestToPay: Create request to pay
- POST /collection/v1_0/requesttopay/{referenceId}/deliverynotification — sendCollectionRequestToPayDeliveryNotification: Send request to pay delivery notification
- GET /collection/v1_0/requesttopay/{referenceId} — getCollectionRequestToPayStatus: Get request to pay status

## Collection: Requests to withdraw
- GET /collection/v1_0/requesttowithdraw/{referenceId} — getCollectionRequestToWithdrawStatus: Get request to withdraw status
- POST /collection/v1_0/requesttowithdraw — createCollectionRequestToWithdrawV1: Create request to withdraw v1
- POST /collection/v2_0/requesttowithdraw — createCollectionRequestToWithdrawV2: Create request to withdraw v2

## Disbursement: Account balance
- GET /disbursement/v1_0/account/balance — getDisbursementAccountBalance: Get account balance
- GET /disbursement/v1_0/account/balance/{currency} — getDisbursementAccountBalanceInCurrency: Get account balance in currency

## Disbursement: Account holders
- GET /disbursement/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/basicuserinfo — getDisbursementBasicUserInfo: Get basic user info
- GET /disbursement/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active — validateDisbursementAccountHolderStatus: Validate account holder status

## Disbursement: Authentication
- POST /disbursement/v1_0/bc-authorize — authorizeDisbursementConsent: Authorize consent
- POST /disbursement/token/ — createDisbursementAccessToken: Create access token
- POST /disbursement/oauth2/token/ — createDisbursementOauth2Token: Create oauth2token
- GET /disbursement/oauth2/v1_0/userinfo — getDisbursementUserInfoWithConsent: Get user info with consent

## Disbursement: Deposits
- POST /disbursement/v1_0/deposit — createDisbursementDepositV1: Create deposit v1
- POST /disbursement/v2_0/deposit — createDisbursementDepositV2: Create deposit v2
- GET /disbursement/v1_0/deposit/{referenceId} — getDisbursementDepositStatus: Get deposit status

## Disbursement: Refunds
- GET /disbursement/v1_0/refund/{referenceId} — getDisbursementRefundStatus: Get refund status
- POST /disbursement/v1_0/refund — createDisbursementRefundV1: Create refund v1
- POST /disbursement/v2_0/refund — createDisbursementRefundV2: Create refund v2

## Disbursement: Transfers
- GET /disbursement/v1_0/transfer/{referenceId} — getDisbursementTransferStatus: Get transfer status
- POST /disbursement/v1_0/transfer — createDisbursementTransfer: Create transfer

## Remittance: Account balance
- GET /remittance/v1_0/account/balance — getRemittanceAccountBalance: Get account balance
- GET /remittance/v1_0/account/balance/{currency} — getRemittanceAccountBalanceInCurrency: Get account balance in currency

## Remittance: Account holders
- GET /remittance/v1_0/accountholder/msisdn/{accountHolderMSISDN}/basicuserinfo — getRemittanceBasicUserInfo: Get basic user info
- GET /remittance/clone-671b0/v1_0/accountholder/msisdn/{accountHolderMSISDN}/basicuserinfo — getRemittanceBasicUserInfoClone: Get basic user info clone (deprecated)
- GET /remittance/v1_0/accountholder/msisdn/999{accountHolderMSISDN}999/basicuserinfo — getRemittanceBasicUserInfoPadded: Get basic user info padded (deprecated)
- GET /remittance/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active — validateRemittanceAccountHolderStatus: Validate account holder status

## Remittance: Authentication
- POST /remittance/v1_0/bc-authorize — authorizeRemittanceConsent: Authorize consent
- POST /remittance/token/ — createRemittanceAccessToken: Create access token
- POST /remittance/oauth2/token/ — createRemittanceOauth2Token: Create oauth2token
- GET /remittance/oauth2/v1_0/userinfo — getRemittanceUserInfoWithConsent: Get user info with consent

## Remittance: Cash transfers
- POST /remittance/v2_0/cashtransfer — createRemittanceCashTransfer: Create cash transfer
- GET /remittance/v2_0/cashtransfer/{referenceId} — getRemittanceCashTransferStatus: Get cash transfer status

## Remittance: Transfers
- GET /remittance/v1_0/transfer/{referenceId} — getRemittanceTransferStatus: Get transfer status
- POST /remittance/v1_0/transfer — createRemittanceTransfer: Create transfer

## Sandbox provisioning: API users
- POST /v1_0/apiuser — createSandboxApiUser: Create api user
- GET /v1_0/apiuser/{X-Reference-Id} — getSandboxApiUser: Get api user
- POST /v1_0/apiuser/{X-Reference-Id}/apikey — createSandboxApiKey: Create api key
