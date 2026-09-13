# Zata Taxes and Payments API (zata) v1.0.0

<!-- derived from openapi.json by `pnpm specs index zata` — do not edit by hand -->

base: https://sandbox.zata.rw/api/v1 | auth: http/bearer | 26 operations in 9 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## auth
- POST /create-account — createAccount: Create User Account
- POST /login — login: Sign In User

## company
- GET /company — listCompanies: List Companies
- POST /company — createCompany: Create Company
- PUT /company — updateCompany: Update Company
- GET /company/{companyId} — getCompany: Get Company
- GET /company/branch — listBranches: List Company Branches
- POST /company/branch — createBranch: Create Company Branch

## data
- GET /data/product-type — listProductTypes: List Product Types
- GET /data/payment-mode — listPaymentModes: List Payment Modes

## expense
- GET /expense — listExpenses: List Expenses
- POST /expense — createExpense: Create Expense

## health
- GET /test — runHealthCheck: Run Health Check

## party
- GET /party — listParties: List Parties
- POST /party/new-customer — createCustomer: Create Customer

## payment
- GET /zatapay/banks — listSupportedBanks: List Supported Banks
- POST /zatapay/debit-initiate — initiateDebitPayment: Initiate Debit Payment
- GET /zatapay/payment-status — getPaymentStatus: Get Payment Status

## product
- POST /product — createProduct: Create Product
- GET /product/pos — listPosProducts: List POS Products
- GET /product/{productId} — getProduct: Get Product
- PUT /product/reduce-quantity/{productId} — reduceProductQuantity: Reduce Product Quantity

## transaction
- GET /transaction — listTransactions: List Transactions
- POST /transaction/sale — createSaleTransaction: Create Sales Transaction
- POST /transaction/calculate — calculateTransactionTotals: Calculate Transaction Totals
- GET /transaction/{transactionId} — getTransaction: Get Transaction
