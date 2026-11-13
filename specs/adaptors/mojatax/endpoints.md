# Mojatax VFD API (mojatax) vv1

<!-- derived from openapi.json by `pnpm specs index mojatax` — do not edit by hand -->

base: https://vfd-staging.mojatax.com, https://vfd.mojatax.com | auth: http/bearer | 2 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Authentication
- POST /api/v1/auth/clientLogin — clientLogin: Exchange client credentials for an access token

## Invoices
- POST /api/v1/client/CreateInvoice — createInvoice: Create (fiscalise) an invoice
