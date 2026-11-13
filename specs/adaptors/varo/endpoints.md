# OpenFn Varo adaptor (in-process operations) (varo) v2.2.3

<!-- derived from openapi.json by `pnpm specs index varo` — do not edit by hand -->

base: https://varo.local | auth: not declared | 5 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Date helpers
- POST /parseUtcForDataRange — parseUtcForDataRange: Compute a UTC window and collection-key patterns for a local date range
- POST /isKeyInRange — isKeyInRange: Test whether a collection key's timestamp falls in a UTC range

## EMS conversion
- POST /convertToEms — convertToEms: Convert Varo/FridgeTag message contents to EMS reports
- POST /convertItemsToReports — convertItemsToReports: Group EMS-like records into EMS reports

## Varo packaging
- POST /convertReportsToMessageContents — convertReportsToMessageContents: Package EMS reports as Varo email message contents
