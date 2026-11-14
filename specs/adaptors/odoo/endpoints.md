# Odoo External API (odoo) v19.0

<!-- derived from openapi.json by `pnpm specs index odoo` — do not edit by hand -->

base: https://{instance} | auth: http/bearer | 5 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## JSON-2
- POST /json/2/{model}/{method} — json2Call: Call a model method (JSON-2)

## JSON-RPC
- POST /web/session/authenticate — authenticate: Authenticate a session (deprecated)
- POST /jsonrpc — callObject: Call a model method (execute_kw) (deprecated)

## XML-RPC
- POST /xmlrpc/2/common — xmlrpcCommon: Common service (version, login, authenticate) (deprecated)
- POST /xmlrpc/2/object — xmlrpcObject: Object service (execute_kw) (deprecated)
