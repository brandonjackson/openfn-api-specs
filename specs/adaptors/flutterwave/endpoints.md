# Flutterwave v4 API (OpenFn flutterwave subset) (flutterwave) v4.0.0

<!-- derived from openapi.json by `pnpm specs index flutterwave` — do not edit by hand -->

base: https://api.flutterwave.cloud/developersandbox, https://api.flutterwave.cloud/f4bexternal | auth: http/bearer | 10 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## charges
- GET /charges — listCharges: List charges
- POST /charges — initiatePayment: Create a charge (initiate payment)
- GET /charges/{id} — getCharge: Retrieve a charge

## customers
- GET /customers — listCustomers: List customers
- POST /customers — createCustomer: Create a customer
- GET /customers/{id} — getCustomer: Retrieve a customer
- PUT /customers/{id} — updateCustomer: Update a customer

## payment-methods
- GET /payment-methods — listPaymentMethods: List payment methods
- POST /payment-methods — createPaymentMethod: Create a payment method
- GET /payment-methods/{id} — getPaymentMethod: Retrieve a payment method
