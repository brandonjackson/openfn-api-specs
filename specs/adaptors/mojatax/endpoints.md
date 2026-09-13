# Mojatax VFD API (generated, focused) (mojatax) v1.0.0

<!-- derived from openapi.json by `pnpm specs index mojatax` — do not edit by hand -->

base: https://api.mojatax.com | auth: not declared | 3 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## client
- POST /client/GetToken — getToken: Authenticate a business client and obtain an access token
- POST /client/CreateInvoice — createInvoice: Create a fiscal invoice/receipt
- POST /client/CancelInvoice — cancelInvoice: Cancel a previously issued invoice
