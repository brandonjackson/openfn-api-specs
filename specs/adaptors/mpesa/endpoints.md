# Safaricom Daraja (M-Pesa) API (mpesa) v2026-11-13

<!-- derived from openapi.json by `pnpm specs index mpesa` — do not edit by hand -->

base: https://api.safaricom.co.ke, https://sandbox.safaricom.co.ke | auth: http/bearer, http/basic | 52 operations in 18 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Account Balance
- POST /mpesa/accountbalance/v1/query — queryAccountBalance: Query the balance of a shortcode's accounts

## Authorization
- GET /oauth/v1/generate — generateAccessToken: Generate an OAuth access token

## B2B Express Checkout
- POST /v1/ussdpush/get-msisdn — initiateB2BExpressCheckout: Push a USSD payment prompt to a merchant (B2B express checkout)

## Bill Manager
- POST /v1/billmanager-invoice/optin — optInBillManager: Opt a shortcode in to Bill Manager
- POST /v1/billmanager-invoice/change-optin-details — updateBillManagerOptIn: Update Bill Manager opt-in details
- POST /v1/billmanager-invoice/single-invoicing — createInvoice: Send a single e-invoice
- POST /v1/billmanager-invoice/bulk-invoicing — createBulkInvoices: Send up to 1000 e-invoices
- POST /v1/billmanager-invoice/reconciliation — acknowledgeBillManagerPayment: Acknowledge a payment pushed by Bill Manager
- POST /v1/billmanager-invoice/cancel-single-invoice — cancelInvoice: Cancel a sent invoice
- POST /v1/billmanager-invoice/cancel-bulk-invoices — cancelBulkInvoices: Cancel several sent invoices

## Business To Business (B2B)
- POST /mpesa/b2b/v1/remittax — remitTax: Remit tax to the Kenya Revenue Authority
- POST /mpesa/b2b/v1/paymentrequest — createB2BPayment: Business pay bill, buy goods or B2C account top-up

## Business To Customer (B2C)
- POST /mpesa/b2c/v3/paymentrequest — createB2CPayment: Pay a customer from a B2C shortcode

## Business To Pochi
- POST /mpesa/b2pochi/v1/paymentrequest — createB2PochiPayment: Pay a customer's Pochi la Biashara wallet

## Customer To Business (C2B)
- POST /mpesa/c2b/v1/registerurl — registerC2BUrlV1: Register C2B confirmation and validation URLs (v1) (deprecated)
- POST /mpesa/c2b/v1/simulate — simulateC2BPaymentV1: Simulate a C2B payment (v1, sandbox only) (deprecated)
- POST /mpesa/c2b/v2/registerurl — registerC2BUrlV2: Register C2B confirmation and validation URLs (v2)
- POST /mpesa/c2b/v2/simulate — simulateC2BPaymentV2: Simulate a C2B payment (v2, sandbox only)

## Dynamic QR
- POST /mpesa/qrcode/v1/generate — generateDynamicQrCode: Generate a dynamic M-Pesa QR code

## Identity and Lookup
- POST /imsi/v2/checkATI — checkSimSwap: Get a line's last SIM swap date (Swap)
- POST /imsi/v1/checkATI — checkImsiV1: Get a line's IMSI, registration date and last swap date (IMSI v1)
- POST /imsi-lookup/v1/checkATI — checkImsiV2: Get a line's IMSI (IMSI v2)
- POST /registration/lookup/v1/checkATI — checkAgeOnNetwork: Get a line's registration date (Age on Network)
- POST /v1/KYC-validation/validateID — validateMobileNumber: Check that an ID document matches a mobile number
- POST /sfcverify/v1/query/info — queryOrganizationInfo: Look up an organisation by shortcode (B2B Hakikisha)
- POST /c2b_hakikisha/v1/notify — verifyC2BAccount: Look up the account name behind a paybill account number (C2B Hakikisha)
- POST /mpesa/b2c/hakikisha/v1/hakikisha — verifyB2CRecipient: Look up a B2C recipient's (masked) name (B2C Hakikisha)

## IoT SIM Management
- POST /simportal/v1/allsims — listSims: List all SIMs in a customer account
- POST /simportal/v1/queryLifeCycleStatus — getSimLifeCycleStatus: Get a SIM's life-cycle status
- POST /simportal/v1/querycustomerinfo — getSimCustomerInfo: Get a SIM's product and subscriber status
- POST /simportal/v1/simactivation — activateSim: Activate a SIM
- POST /simportal/v1/getactivationtrends — getSimActivationTrends: Get SIM activation trends for a period
- POST /simportal/v1/renameasset — renameSimAsset: Rename a SIM asset
- POST /simportal/v1/suspend_unsuspend_sub — suspendOrResumeSim: Suspend or resume a subscriber/SIM
- POST /simportal/v1/searchmessages — searchSimMessages: Search SIM messages
- POST /simportal/v1/filtermessages — filterSimMessages: Filter SIM messages by date and status
- POST /simportal/v1/deleteMessageThread — deleteSimMessageThread: Delete all messages sent to a SIM
- POST /simportal/v1/getallmessages — listSimMessages: List all messages sent to SIMs in an account
- POST /simportal/v1/sendsinglemessage — sendSimMessage: Send a message to a SIM
- POST /simportal/v1/deletemessage — deleteSimMessage: Delete a message by id

## Lipa na Bonga
- POST /lipa/na/bonga/v2/api/v2/calculator/amount — calculateBongaPoints: Convert an amount to Bonga points
- POST /lipa/na/bonga/v2/api/v1/merchant-redemptions/initiate — redeemBongaPoints: Initiate a Bonga points redemption

## M-Pesa Express
- POST /mpesa/stkpush/v1/processrequest — createStkPush: Initiate an M-Pesa Express (STK push) payment prompt
- POST /mpesa/stkpushquery/v1/query — queryStkPush: Query the status of an M-Pesa Express payment

## M-Pesa Ratiba
- POST /standingorder/v1/createStandingOrderExternal — createStandingOrder: Create a standing order (M-Pesa Ratiba)

## Mobile Data Bundles
- GET /v1/dynamic-offers/fetch — listDataBundleOffers: Fetch the data bundle offers available to a customer
- POST /v1/dynamic-offers/facebook-bundle/purchase — purchaseDataBundle: Purchase a data bundle offer
- GET /v2/bundles/get/status — getDataBundlePurchaseStatus: Check the status of a bundle purchase

## Pull Transactions
- POST /pulltransactions/v1/register — registerPullTransactions: Register a shortcode for pull transactions
- POST /pulltransactions/v1/query — queryPullTransactions: Query transactions for a registered shortcode

## Reversals
- POST /mpesa/reversal/v1/request — reverseTransaction: Reverse a C2B M-Pesa transaction

## Transaction Status
- POST /mpesa/transactionstatus/v1/query — queryTransactionStatus: Query the status of an M-Pesa transaction
