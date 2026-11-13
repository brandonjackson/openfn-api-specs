# OpenFn Lightning REST API (openfn) v2.20.1+main.71ce1f0

<!-- derived from openapi.json by `pnpm specs index openfn` — do not edit by hand -->

base: https://{host}/api | auth: http/bearer | 40 operations in 11 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Auth
- POST /oauth/token — exchangeServiceAccountToken: Exchange a service account assertion for an access token

## Collections
- GET /projects/{project_id}/collections/{id} — getCollection: Read a collection
- PUT /projects/{project_id}/collections/{id} — putCollection: Create or rename a collection

## Credentials
- GET /credentials — listCredentials: List your credentials, or a project's by project_id
- POST /credentials — createCredential: Create a credential you own
- GET /credentials/{id} — getCredential: Read a credential, without its secrets
- PUT /credentials/{id} — putCredential: Create or replace a credential
- DELETE /credentials/{id} — deleteCredential: Delete a credential you own
- GET /projects/{project_id}/credentials — listProjectCredentials: List a project's credentials

## Jobs
- GET /projects/{project_id}/jobs — listProjectJobs: List a project's jobs
- GET /projects/{project_id}/jobs/{id} — getProjectJob: Read a job
- GET /jobs — listJobs: List jobs across projects
- GET /jobs/{id} — getJob: Read a job

## Log Lines
- GET /log_lines — listLogLines: List log lines

## Projects
- GET /projects — listProjects: List projects
- GET /projects/{id} — getProject: Read a project
- PUT /projects/{id} — putProject: Create or replace a project

## Provisioning
- POST /provision — provisionProject: Apply a provisioning document
- GET /provision/yaml — getProvisionedProjectYaml: Read a project as YAML
- GET /provision/{id} — getProvisionedProject: Read a project as a provisioning document

## Runs
- GET /projects/{project_id}/runs — listProjectRuns: List a project's runs
- GET /projects/{project_id}/runs/{id} — getProjectRun: Read a run
- GET /runs — listRuns: List runs across projects
- GET /runs/{id} — getRun: Read a run

## Users
- GET /users — listUsers: List users, or find one by email
- POST /users — createUser: Create a user
- GET /users/{id} — getUser: Read a user
- PATCH /users/{id} — updateUser: Change a user
- POST /users/register — registerUser: Sign up, where the instance offers it

## Work Orders
- GET /projects/{project_id}/work_orders — listProjectWorkOrders: List a project's work orders
- GET /projects/{project_id}/work_orders/{id} — getProjectWorkOrder: Read a work order
- GET /work_orders — listWorkOrders: List work orders across projects
- GET /work_orders/{id} — getWorkOrder: Read a work order

## Workflows
- GET /projects/{project_id}/workflows — listProjectWorkflows: List a project's workflows
- POST /projects/{project_id}/workflows — createWorkflow: Create a workflow
- GET /projects/{project_id}/workflows/{id} — getProjectWorkflow: Read a workflow
- PUT /projects/{project_id}/workflows/{id} — replaceWorkflow: Change a workflow (PUT)
- PATCH /projects/{project_id}/workflows/{id} — updateWorkflow: Change a workflow (PATCH)
- GET /workflows — listWorkflows: List workflows across projects
- GET /workflows/{id} — getWorkflow: Read a workflow
