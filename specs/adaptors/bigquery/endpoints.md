# BigQuery API (bigquery) vv2

<!-- derived from openapi.json by `pnpm specs index bigquery` — do not edit by hand -->

base: https://bigquery.googleapis.com/bigquery/v2 | auth: not declared | 47 operations in 8 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## datasets
- GET /projects/{projectsId}/datasets/{datasetsId} — bigquery.datasets.get: Returns the dataset specified by datasetID.
- PUT /projects/{projectsId}/datasets/{datasetsId} — bigquery.datasets.update: Updates information in an existing dataset.
- PATCH /projects/{projectsId}/datasets/{datasetsId} — bigquery.datasets.patch: Updates information in an existing dataset.
- DELETE /projects/{projectsId}/datasets/{datasetsId} — bigquery.datasets.delete: Deletes the dataset specified by the datasetId value.
- GET /projects/{projectsId}/datasets — bigquery.datasets.list: Lists all datasets in the specified project to which the user has been granted the READER dataset role.
- POST /projects/{projectsId}/datasets — bigquery.datasets.insert: Creates a new empty dataset.
- POST /projects/{projectsId}/datasets/{datasetsId}:undelete — bigquery.datasets.undelete: Undeletes a dataset which is within time travel window based on datasetId.

## jobs
- GET /projects/{projectsId}/jobs/{jobsId} — bigquery.jobs.get: Returns information about a specific job.
- DELETE /projects/{projectsId}/jobs/{jobsId}/delete — bigquery.jobs.delete: Requests the deletion of the metadata of a job.
- GET /projects/{projectsId}/queries/{queriesId} — bigquery.jobs.getQueryResults: RPC to get the results of a query job.
- GET /projects/{projectsId}/jobs — bigquery.jobs.list: Lists all jobs that you started in the specified project.
- POST /projects/{projectsId}/jobs — bigquery.jobs.insert: Starts a new asynchronous job.
- POST /projects/{projectsId}/jobs/{jobsId}/cancel — bigquery.jobs.cancel: Requests that a job be cancelled.
- POST /projects/{projectsId}/queries — bigquery.jobs.query: Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

## models
- GET /projects/{projectsId}/datasets/{datasetsId}/models/{modelsId} — bigquery.models.get: Gets the specified model resource by model ID.
- PATCH /projects/{projectsId}/datasets/{datasetsId}/models/{modelsId} — bigquery.models.patch: Patch specific fields in the specified model.
- DELETE /projects/{projectsId}/datasets/{datasetsId}/models/{modelsId} — bigquery.models.delete: Deletes the model specified by modelId from the dataset.
- GET /projects/{projectsId}/datasets/{datasetsId}/models — bigquery.models.list: Lists all models in the specified dataset.

## projects
- GET /projects/{projectsId}/serviceAccount — bigquery.projects.getServiceAccount: RPC to get the service account for a project used for interactions with Google Cloud KMS.
- GET /projects — bigquery.projects.list: RPC to list projects to which the user has been granted any project role.

## routines
- POST /projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:testIamPermissions — bigquery.routines.testIamPermissions: Returns permissions that a caller has on the specified resource.
- GET /projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId} — bigquery.routines.get: Gets the specified routine resource by routine ID.
- PUT /projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId} — bigquery.routines.update: Updates information in an existing routine.
- DELETE /projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId} — bigquery.routines.delete: Deletes the routine specified by routineId from the dataset.
- GET /projects/{projectsId}/datasets/{datasetsId}/routines — bigquery.routines.list: Lists all routines in the specified dataset.
- POST /projects/{projectsId}/datasets/{datasetsId}/routines — bigquery.routines.insert: Creates a new routine in the dataset.
- POST /projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:setIamPolicy — bigquery.routines.setIamPolicy: Sets the access control policy on the specified resource.
- POST /projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:getIamPolicy — bigquery.routines.getIamPolicy: Gets the access control policy for a resource.

## rowAccessPolicies
- GET /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies — bigquery.rowAccessPolicies.list: Lists all row access policies on the specified table.
- POST /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies — bigquery.rowAccessPolicies.insert: Creates a row access policy.
- POST /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}:testIamPermissions — bigquery.rowAccessPolicies.testIamPermissions: Returns permissions that a caller has on the specified resource.
- GET /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId} — bigquery.rowAccessPolicies.get: Gets the specified row access policy by policy ID.
- PUT /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId} — bigquery.rowAccessPolicies.update: Updates a row access policy.
- DELETE /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId} — bigquery.rowAccessPolicies.delete: Deletes a row access policy.
- POST /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies:batchDelete — bigquery.rowAccessPolicies.batchDelete: Deletes provided row access policies.
- POST /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}:getIamPolicy — bigquery.rowAccessPolicies.getIamPolicy: Gets the access control policy for a resource.

## tabledata
- POST /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/insertAll — bigquery.tabledata.insertAll: Streams data into BigQuery one record at a time without needing to run a load job.
- GET /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/data — bigquery.tabledata.list: List the content of a table in rows.

## tables
- GET /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId} — bigquery.tables.get: Gets the specified table resource by table ID.
- PUT /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId} — bigquery.tables.update: Updates information in an existing table.
- PATCH /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId} — bigquery.tables.patch: Updates information in an existing table.
- DELETE /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId} — bigquery.tables.delete: Deletes the table specified by tableId from the dataset.
- GET /projects/{projectsId}/datasets/{datasetsId}/tables — bigquery.tables.list: Lists all tables in the specified dataset.
- POST /projects/{projectsId}/datasets/{datasetsId}/tables — bigquery.tables.insert: Creates a new, empty table in the dataset.
- POST /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:getIamPolicy — bigquery.tables.getIamPolicy: Gets the access control policy for a resource.
- POST /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:setIamPolicy — bigquery.tables.setIamPolicy: Sets the access control policy on the specified resource.
- POST /projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:testIamPermissions — bigquery.tables.testIamPermissions: Returns permissions that a caller has on the specified resource.
