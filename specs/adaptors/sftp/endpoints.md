# OpenFn SFTP Adaptor (Synthesized) (sftp) v1.0.0

<!-- derived from openapi.json by `pnpm specs index sftp` — do not edit by hand -->

base: https://sftp.mock.openfn.org | auth: not declared | 5 operations in 5 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## getCSV
- POST /getCSV — getCSV: Fetch a CSV file and parse it to JSON

## getJSON
- POST /getJSON — getJSON: Fetch a JSON file from the remote server

## list
- POST /list — list: List files present in a remote directory

## normalizeCSVarray
- POST /normalizeCSVarray — normalizeCSVarray: Normalize a JSON array of strings into objects

## putCSV
- POST /putCSV — putCSV: Convert JSON to CSV and upload to the remote server
