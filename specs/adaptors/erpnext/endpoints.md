# ERPNext / Frappe REST API (subset) (erpnext) v1.0.0

<!-- derived from openapi.json by `pnpm specs index erpnext` — do not edit by hand -->

base: https://site.erpnext.com | auth: not declared | 6 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## method
- GET /api/method/frappe.client.get_count — getCount: Count documents matching filters

## resource
- GET /api/resource/{doctype} — getList: List documents of a doctype
- POST /api/resource/{doctype} — create: Create a document
- GET /api/resource/{doctype}/{name} — read: Read a document by name
- PUT /api/resource/{doctype}/{name} — update: Update a document
- DELETE /api/resource/{doctype}/{name} — deleteRecord: Delete a document
