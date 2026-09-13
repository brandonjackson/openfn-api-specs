# Google Sheets API (googlesheets) vv4

<!-- derived from openapi.json by `pnpm specs index googlesheets` — do not edit by hand -->

base: https://sheets.googleapis.com | auth: not declared | 17 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## spreadsheets
- GET /v4/spreadsheets/{spreadsheetId} — sheets.spreadsheets.get: Returns the spreadsheet at the given ID.
- POST /v4/spreadsheets — sheets.spreadsheets.create: Creates a spreadsheet, returning the newly created spreadsheet.
- POST /v4/spreadsheets/{spreadsheetId}:getByDataFilter — sheets.spreadsheets.getByDataFilter: Returns the spreadsheet at the given ID.
- POST /v4/spreadsheets/{spreadsheetId}:batchUpdate — sheets.spreadsheets.batchUpdate: Applies one or more updates to the spreadsheet.

## spreadsheets.developerMetadata
- GET /v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId} — sheets.spreadsheets.developerMetadata.get: Returns the developer metadata with the specified ID.
- POST /v4/spreadsheets/{spreadsheetId}/developerMetadata:search — sheets.spreadsheets.developerMetadata.search: Returns all developer metadata matching the specified DataFilter.

## spreadsheets.sheets
- POST /v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo — sheets.spreadsheets.sheets.copyTo: Copies a single sheet from a spreadsheet to another spreadsheet.

## spreadsheets.values
- POST /v4/spreadsheets/{spreadsheetId}/values:batchUpdate — sheets.spreadsheets.values.batchUpdate: Sets values in one or more ranges of a spreadsheet.
- POST /v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter — sheets.spreadsheets.values.batchClearByDataFilter: Clears one or more ranges of values from a spreadsheet.
- GET /v4/spreadsheets/{spreadsheetId}/values/{range} — sheets.spreadsheets.values.get: Returns a range of values from a spreadsheet.
- PUT /v4/spreadsheets/{spreadsheetId}/values/{range} — sheets.spreadsheets.values.update: Sets values in a range of a spreadsheet.
- POST /v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter — sheets.spreadsheets.values.batchGetByDataFilter: Returns one or more ranges of values that match the specified data filters.
- POST /v4/spreadsheets/{spreadsheetId}/values:batchClear — sheets.spreadsheets.values.batchClear: Clears one or more ranges of values from a spreadsheet.
- POST /v4/spreadsheets/{spreadsheetId}/values/{range}:clear — sheets.spreadsheets.values.clear: Clears values from a spreadsheet.
- GET /v4/spreadsheets/{spreadsheetId}/values:batchGet — sheets.spreadsheets.values.batchGet: Returns one or more ranges of values from a spreadsheet.
- POST /v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter — sheets.spreadsheets.values.batchUpdateByDataFilter: Sets values in one or more ranges of a spreadsheet.
- POST /v4/spreadsheets/{spreadsheetId}/values/{range}:append — sheets.spreadsheets.values.append: Appends values to a spreadsheet.
