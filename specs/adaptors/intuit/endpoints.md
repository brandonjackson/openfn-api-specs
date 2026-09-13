# Intuit QuickBooks Online Accounting API (mock subset) (intuit) vv3

<!-- derived from openapi.json by `pnpm specs index intuit` — do not edit by hand -->

base: https://sandbox-quickbooks.api.intuit.com | auth: not declared | 10 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## company
- GET /v3/company/{realmId}/query — query: Run a QuickBooks query (SQL-like)
- POST /v3/company/{realmId}/customer — createCustomer: Create or update a customer
- GET /v3/company/{realmId}/customer/{id} — getCustomer: Read a customer by id
- POST /v3/company/{realmId}/invoice — createInvoice: Create or update an invoice
- GET /v3/company/{realmId}/invoice/{id} — getInvoice: Read an invoice by id
- POST /v3/company/{realmId}/item — createItem: Create or update an item
- POST /v3/company/{realmId}/account — createAccount: Create or update an account
- POST /v3/company/{realmId}/vendor — createVendor: Create or update a vendor
- POST /v3/company/{realmId}/payment — createPayment: Create or update a payment
- GET /v3/company/{realmId}/companyinfo/{id} — getCompanyInfo: Read company info
