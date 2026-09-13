# Browserless API (OpenFn focused subset) (browserless) v2.0.0

<!-- derived from openapi.json by `pnpm specs index browserless` — do not edit by hand -->

base: https://production-sfo.browserless.io | auth: not declared | 4 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## content
- POST /content — getContent: Return the fully rendered HTML of a page

## pdf
- POST /pdf — createPDF: Generate a PDF from HTML or a URL

## scrape
- POST /scrape — scrape: Scrape structured data from a page using element selectors

## screenshot
- POST /screenshot — createScreenshot: Capture a screenshot from HTML or a URL
