# Flutterwave API v4 (flutterwave) v4.0.0

<!-- derived from openapi.json by `pnpm specs index flutterwave` — do not edit by hand -->

base: https://f4bexperience.flutterwave.com, https://developersandbox-api.flutterwave.com | auth: oauth2 (clientCredentials) | 57 operations in 18 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Banks
- GET /banks — listBanks: Retrieve banks
- GET /banks/{id}/branches — listBankBranches: Retrieve bank branches
- POST /banks/account-resolve — resolveBankAccount: Bank Account Look Up

## Chargebacks
- GET /chargebacks — listChargebacks: List chargebacks
- POST /chargebacks — createChargeback: Create a chargeback
- GET /chargebacks/{id} — getChargeback: Get chargeback by id
- PUT /chargebacks/{id} — updateChargeback: Update a chargeback

## Charges
- GET /charges — listCharges: List charges
- POST /charges — createCharge: Create a charge
- GET /charges/{id} — getCharge: Retrieve a charge
- PUT /charges/{id} — updateCharge: Update a charge

## Customers
- GET /customers — listCustomers: List customers
- POST /customers — createCustomer: Create a customer
- GET /customers/{id} — getCustomer: Retrieve a customer
- PUT /customers/{id} — updateCustomer: Update a customer
- POST /customers/search — searchCustomers: Search customers

## Fees
- GET /fees — getFees: Retrieve fees

## Mobile Networks
- GET /mobile-networks — listMobileNetworks: Retrieve mobile networks

## Orchestration
- POST /orchestration/direct-charges — createOrchestratorCharge: Initiate an Orchestrator charge
- POST /orchestration/direct-orders — createOrchestratorOrder: Initiate Order with Orchestrator

## Orders
- GET /orders — listOrders: List orders
- POST /orders — createOrder: Create an order
- GET /orders/{id} — getOrder: Retrieve an order
- PUT /orders/{id} — updateOrder: Update an order

## Payment Methods
- GET /payment-methods — listPaymentMethods: List payment methods
- POST /payment-methods — createPaymentMethod: Create a payment method
- GET /payment-methods/{id} — getPaymentMethod: Retrieve a payment method

## Refunds
- GET /refunds — listRefunds: List refunds
- POST /refunds — createRefund: Create a refund
- GET /refunds/{id} — getRefund: Retrieve a refund

## Settlements
- GET /settlements — listSettlements: List settlement
- GET /settlements/{id} — getSettlement: Retrieve a settlement

## Transfer Rates
- POST /transfers/rates — createTransferRate: Rate conversion
- GET /transfers/rates/{id} — getTransferRate: Fetch converted rate

## Transfer Recipients
- GET /transfers/recipients — listTransferRecipients: List transfer recipients
- POST /transfers/recipients — createTransferRecipient: Create a transfer recipient
- GET /transfers/recipients/{id} — getTransferRecipient: Retrieve a transfer recipient
- DELETE /transfers/recipients/{id} — deleteTransferRecipient: Delete a transfer recipient

## Transfer Senders
- GET /transfers/senders — listTransferSenders: List transfer senders
- POST /transfers/senders — createTransferSender: Create a transfer sender
- GET /transfers/senders/{id} — getTransferSender: Retrieve a transfer sender
- DELETE /transfers/senders/{id} — deleteTransferSender: Delete a transfer sender

## Transfers
- POST /direct-transfers — createOrchestratorTransfer: Initiate an Orchestrator transfer
- GET /transfers — listTransfers: List transfers
- POST /transfers — createTransfer: Create a transfer
- GET /transfers/{id} — getTransfer: Retrieve a transfer
- PUT /transfers/{id} — updateTransfer: Update a transfer
- POST /transfers/{id}/retries — retryTransfer: Retry or Duplicate a transfer

## Virtual Accounts
- GET /virtual-accounts — listVirtualAccounts: List all virtual accounts
- POST /virtual-accounts — createVirtualAccount: Create a virtual account
- GET /virtual-accounts/{id} — getVirtualAccount: Retrieve a virtual account
- PUT /virtual-accounts/{id} — updateVirtualAccount: Update a virtual account

## Wallets
- POST /wallets/account-resolve — resolveWalletAccount: Wallet Account Look Up
- GET /wallets/statement — getWalletStatement: Retrieve wallet statement
- GET /wallets/balances/{currency} — getWalletBalance: Fetch a currency's wallet balance
- GET /wallets/balances — listWalletBalances: Fetch wallet balance for multiple currencies

## Webhooks
- POST /resend-webhook — resendWebhook: Resend Webhook
