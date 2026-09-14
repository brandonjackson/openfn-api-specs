# SurveyCTO Server API (v1 + v2) (surveycto) vv2

<!-- derived from openapi.json by `pnpm specs index surveycto` — do not edit by hand -->

base: https://your-server.surveycto.com | auth: not declared | 50 operations in 9 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Dataset Records
- GET /api/v2/datasets/{datasetId}/record — getRecord: Get record by ID
- PUT /api/v2/datasets/{datasetId}/record — updateRecord: Update record
- PATCH /api/v2/datasets/{datasetId}/record — upsertRecord: Upsert record
- DELETE /api/v2/datasets/{datasetId}/record — deleteRecord: Delete record
- GET /api/v2/datasets/{datasetId}/records — getAllRecords: Get all records from dataset
- POST /api/v2/datasets/{datasetId}/records — addRecord: Add record to dataset
- POST /api/v2/datasets/{datasetId}/records/search — searchDatasetRecords: Search dataset records
- POST /api/v2/datasets/{datasetId}/records/upload — uploadRecords: Upload records from CSV

## Datasets
- GET /api/v2/datasets — getDatasets: List all datasets
- POST /api/v2/datasets — createDataset: Create dataset
- GET /api/v2/datasets/data/csv/{datasetID:.+} — datasetCsvDataHandlerV2: Download dataset data as CSV
- GET /api/v2/datasets/{datasetId} — getDatasetById: Get dataset by ID
- PUT /api/v2/datasets/{datasetId} — updateDataset: Update dataset
- DELETE /api/v2/datasets/{datasetId} — deleteDataset: Delete dataset
- POST /api/v2/datasets/{datasetId}/purge — purgeDataset: Purge dataset

## Forms
- POST /api/v2/forms/data/wide/json/{formID:.+} — formJsonHandlerV2: Export form submissions (wide JSON)
- GET /api/v2/forms/ids — getFormIds: List form IDs
- GET /api/v2/forms/{formID:.+}/submissions — formSubmissionsGetV2: form Submissions Get
- POST /api/v2/forms/{formID:.+}/submissions — formSubmissionsPostMultipart: List form submissions (multipart, encrypted)
- POST /api/v2/forms/{formID:.+}/submissions/search — formSubmissionsSearch: Search form submissions (JSON body)
- POST /api/v2/forms/{formID:.+}/submissions/{instanceID:.+}/attachments/{filename:.+} — submissionAttachmentHandlerV2: Download a submission attachment
- GET /api/v1/forms/data/csv/{formID:.+} — formCsvDataHandlerV1: Download CSV data in long format
- GET /api/v1/forms/data/csv/{formID:.+}/{repeatName:.+} — formCsvDataHandlerRepeatV1: Download CSV data for a specific repeat group
- GET /api/v1/forms/data/wide/csv/{formID:.+} — formCsvWideDataHandlerV1: Download CSV data in wide format
- GET /api/v1/forms/data/wide/json/{formID:.+} — formJsonWideDataHandlerV1: Download JSON data in wide format
- GET /api/v1/forms/files/csv/{formID:.+} — formCsvFileUrlsHandlerV1: List CSV export file URLs

## Groups
- GET /api/v2/groups — getGroups: List groups

## Roles
- GET /api/v2/roles — getAllRoles: List all roles
- GET /api/v2/roles/{roleId} — getRolePermissions: Get role permissions

## Server Configuration
- POST /api/v1/forms/settings/csv/linebreak — formCsvSettingsLinebreakHandlerV1: Configure CSV line break replacement
- DELETE /api/v1/forms/settings/csv/linebreak — formCsvSettingsLinebreakDeleterV1: Delete CSV line break replacement

## Teams
- GET /api/v2/teams/ids — getTeamIds: List team IDs

## Users
- GET /api/v2/users — getAllUsers: List all users
- POST /api/v2/users — createUser: Create a user
- DELETE /api/v2/users/bulk — bulkDeleteUsers: Bulk delete users
- POST /api/v2/users/bulk/file — bulkCreateUsersFromFile: Bulk create users from CSV file
- PUT /api/v2/users/bulk/file — bulkUpdateUsersFromFile: Bulk edit users from CSV file
- POST /api/v2/users/bulk/json — bulkCreateUsersFromJson: Bulk create users from JSON
- PUT /api/v2/users/bulk/json — bulkUpdateUsersFromJson: Bulk edit users from JSON
- GET /api/v2/users/{username} — getUserByUsername: Get user by username
- PUT /api/v2/users/{username} — updateUser: Update a user
- DELETE /api/v2/users/{username} — deleteUser: Delete a user

## Workflow Profiles
- GET /api/v2/workflow-profiles — getAllWorkflowProfiles: List all workflow profiles
- POST /api/v2/workflow-profiles — createWorkflowProfile: Create a workflow profile
- GET /api/v2/workflow-profiles/roles/{roleId} — getWorkflowProfileForRole: Get the workflow profile attached to a role
- PUT /api/v2/workflow-profiles/roles/{roleId} — attachWorkflowProfileToRole: Attach a workflow profile to a role
- DELETE /api/v2/workflow-profiles/roles/{roleId} — detachWorkflowProfileFromRole: Detach the workflow profile from a role
- GET /api/v2/workflow-profiles/{id} — getWorkflowProfile: Get a workflow profile
- PUT /api/v2/workflow-profiles/{id} — updateWorkflowProfile: Update a workflow profile
- DELETE /api/v2/workflow-profiles/{id} — deleteWorkflowProfile: Delete a workflow profile
