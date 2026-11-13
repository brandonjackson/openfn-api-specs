# Monnify API (monnify) v1.0

<!-- derived from openapi.json by `pnpm specs index monnify` — do not edit by hand -->

base: https://sandbox.monnify.com, https://api.monnify.com | auth: http/basic, http/bearer (JWT) | 77 operations in 16 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Authentication
- POST /api/v1/auth/login — Generate Access Token

## Bills Payment APIs
- GET /api/v1/vas/bills-payment/biller-categories — Get Biller Categories
- GET /api/v1/vas/bills-payment/billers — List Billers
- GET /api/v1/vas/bills-payment/biller-products — Get Biller Products
- POST /api/v1/vas/bills-payment/vend — Process Bill Payment
- GET /api/v1/vas/bills-payment/requery — Check Bill Payment Status
- POST /api/v1/vas/bills-payment/validate-customer — Validate Customer

## Customer Reserved Account
- POST /api/v2/bank-transfer/reserved-accounts — Create Reserved Account(General)
- POST /api/v1/bank-transfer/reserved-accounts — Create Reserved Account(Invoice)
- GET /api/v2/bank-transfer/reserved-accounts/{accountReference} — Get Reserved Account Details
- PUT /api/v1/bank-transfer/reserved-accounts/add-linked-accounts/{accountReference} — Add Linked Accounts
- PUT /api/v1/bank-transfer/reserved-accounts/update-customer-bvn/{reservedAccountReference} — Update BVN for a Reserve Account
- PUT /api/v1/bank-transfer/reserved-accounts/update-payment-source-filter/{accountReference} — Allowed Payment Source(s)
- PUT /api/v1/bank-transfer/reserved-accounts/update-income-split-config/{accountReference} — Updating Split Config for Reserved Account
- DELETE /api/v1/bank-transfer/reserved-accounts/reference/{accountReference} — Deallocating a reserved account
- GET /api/v1/bank-transfer/reserved-accounts/transactions — Get Reserved Account Transactions
- PUT /api/v1/bank-transfer/reserved-accounts/{accountReference}/kyc-info — Update KYC Info

## Direct Debit
- POST /api/v1/direct-debit/mandate/create — Create Mandate
- GET /api/v1/direct-debit/mandate/ — Get Mandate Status
- POST /api/v1/direct-debit/mandate/debit — Debit Mandate
- GET /api/v1/direct-debit/mandate/debit-status — Get Debit Status
- PATCH /api/v1/direct-debit/mandate/cancel-mandate/{mandateCode} — Update Mandate (Cancel Mandate)

## Invoice
- POST /api/v1/invoice/create — Create an Invoice
- GET /api/v1/invoice/{invoiceReference}/details — View Invoice Details
- GET /api/v1/invoice/all — Get All Invoices
- DELETE /api/v1/invoice/{invoiceReference}/cancel — Cancel an Invoice

## Limit Profile
- GET /api/v1/limit-profile/ — Get Limit Profiles
- POST /api/v1/limit-profile/ — Create Limit Profile(s)
- PUT /api/v1/limit-profile/{limitProfileCode} — Update Limit Profile
- POST /api/v1/bank-transfer/reserved-accounts/limit — Reserve Account with Limit
- PUT /api/v1/bank-transfer/reserved-accounts/limit — Update Reserve Account Limit

## Others
- GET /api/v1/banks — Get Banks
- GET /api/v1/sdk/transactions/banks — Get Banks With USSD Short Code

## Paycode API
- GET /api/v1/paycode — Fetch Paycodes
- POST /api/v1/paycode — Create Paycode
- GET /api/v1/paycode/{paycodeReference} — Get Paycode
- DELETE /api/v1/paycode/{paycodeReference} — Delete Paycode
- GET /api/v1/paycode/{paycodeReference}/authorize — Get Clear Paycode

## Recurring Payment
- POST /api/v1/merchant/cards/charge-card-token — Charge Card Token

## Refund
- POST /api/v1/refunds/initiate-refund — Initiate Refund
- GET /api/v1/refunds/{refundReference} — Get Refund Status
- GET /api/v1/refunds — Get All Refunds

## Settlements
- GET /api/v1/transactions/find-by-settlement-reference — Get Transactions By Settlement Reference
- GET /api/v1/settlement-detail — Get Settlement Information for Transaction

## Sub Accounts
- GET /api/v1/sub-accounts — Get Sub Accounts
- POST /api/v1/sub-accounts — Create Sub Account(s)
- PUT /api/v1/sub-accounts — Update Sub Account
- DELETE /api/v1/sub-accounts/{subAccountCode} — Delete Sub Account

## Transactions
- POST /api/v1/merchant/transactions/init-transaction — Initialize Transaction
- POST /api/v1/merchant/bank-transfer/init-payment — Pay With Bank Transfer
- POST /api/v1/merchant/cards/charge — Charge a Card
- POST /api/v1/merchant/cards/otp/authorize — Authorize OTP
- POST /api/v1/sdk/cards/secure-3d/authorize — Authorize 3DS Card
- GET /api/v1/transactions/search — Get All Transactions
- GET /api/v2/transactions/{transactionReference} — Get Transaction Status
- GET /api/v2/merchant/transactions/query — Get Transaction Status By Reference

## Transfers (Disbursement)
- POST /api/v2/disbursements/single — Initiate Transfer (Single)
- POST /api/v2/disbursements/batch — Initiate Transfer (Bulk)
- POST /api/v2/disbursements/single/validate-otp — Authorize Single Transfers
- POST /api/v2/disbursements/batch/validate-otp — Authorize Bulk Transfers
- POST /api/v2/disbursements/single/resend-otp — Resend OTP (Single)
- POST /api/v2/disbursements/batch/resend-otp — Resend OTP (Bulk)
- GET /api/v2/disbursements/single/summary — Single Transfer Status
- GET /api/v2/disbursements/single/transactions — List All Single Transfers
- GET /api/v2/disbursements/bulk/transactions — List All Bulk Transfers
- GET /api/v2/disbursements/bulk/{batchReference}/transactions — Bulk Transfer Status
- GET /api/v2/disbursements/batch/summary — Bulk Batch Summary
- GET /api/v2/disbursements/search-transactions — Search Disbursement Transactions
- GET /api/v2/disbursements/wallet-balance — Get Wallet Balance

## Verification APIs
- GET /api/v2/disbursements/account/validate — Validate Bank Account
- POST /api/v1/vas/bvn-details-match — BVN Information Verification
- POST /api/v1/vas/bvn-account-match — BVN and Account Name Match
- POST /api/v1/vas/nin-details — NIN Verification

## Wallet
- GET /api/v1/disbursements/wallet — Get Wallets
- POST /api/v1/disbursements/wallet — Create Wallet
- GET /api/v1/disbursements/wallet/balance — Wallet Balance
- GET /api/v1/disbursements/wallet/transactions — Wallet Transactions
