# PDFShift API Documentation (pdfshift) v3.0

<!-- derived from openapi.json by `pnpm specs index pdfshift` — do not edit by hand -->

base: https://api.pdfshift.io/v3 | auth: apiKey (header X-API-Key) | 15 operations in 6 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## account
- GET /account — Account details

## convert
- POST /convert/pdf — Convert to PDF
- POST /convert/png — Convert to PNG
- POST /convert/jpeg — Convert to JPEG
- POST /convert/webp — Convert to WEBP

## credits
- GET /credits/usage — Credits usage

## invoices
- GET /invoices — Invoices list

## logs
- GET /logs — List recent logs
- GET /logs/{request_id} — Get log by request ID

## templates
- GET /templates — List templates
- POST /templates — Create template
- GET /templates/{slug}.html — Get template HTML
- PUT /templates/{slug} — Update template
- DELETE /templates/{slug} — Delete template
- POST /templates/{slug}.{ext} — Generate document from template
