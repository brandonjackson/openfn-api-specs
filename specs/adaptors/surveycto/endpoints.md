# SurveyCTO REST API (mocker subset) (surveycto) v2.0.0

<!-- derived from openapi.json by `pnpm specs index surveycto` — do not edit by hand -->

base: https://{servername}.surveycto.com/api/{apiVersion} | auth: http/basic | 9 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## datasets
- GET /datasets — listDatasets: List datasets
- POST /datasets — createDataset: Create a dataset
- GET /datasets/{datasetId} — getDataset: Get a dataset
- PUT /datasets/{datasetId} — updateDataset: Update a dataset
- GET /datasets/{datasetId}/records — listDatasetRecords: List dataset records
- PATCH /datasets/{datasetId}/record — patchDatasetRecord: Create or update a dataset record
- POST /datasets/{datasetId}/records/upload — uploadDatasetRecords: Bulk upload dataset records via CSV

## forms
- GET /forms/data/wide/json/{formId} — getFormDataWideJson: Fetch form submissions as wide-format JSON
- GET /forms/data/csv/{formId} — getFormDataCsv: Fetch form submissions as CSV
