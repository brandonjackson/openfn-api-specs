# OpenFn Varo Adaptor (synthesized surface) (varo) v1.0.0

<!-- derived from openapi.json by `pnpm specs index varo` — do not edit by hand -->

base: https://varo.local/transform | auth: not declared | 5 operations in 5 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## convertItemsToReports
- POST /convertItemsToReports — convertItemsToReports: Convert EMS-like records to an EMS report

## convertReportsToMessageContents
- POST /convertReportsToMessageContents — convertReportsToMessageContents: Convert an EMS report to Varo message components

## convertToEms
- POST /convertToEms — convertToEms: Convert Varo/FridgeTag message contents to EMS-compliant data

## isKeyInRange
- POST /isKeyInRange — isKeyInRange: Check whether a key's embedded timestamp is within a UTC range

## parseUtcForDataRange
- POST /parseUtcForDataRange — parseUtcForDataRange: Compute the UTC datetime range for a timezone
