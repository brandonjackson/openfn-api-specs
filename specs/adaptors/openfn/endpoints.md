# OpenFn Platform API (synthesized from adaptor surface) (openfn) v1.0.0

<!-- derived from openapi.json by `pnpm specs index openfn` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 22 operations in 8 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## credentials
- GET /api/credentials — listCredentials: List credentials
- GET /api/credentials/{id} — getCredential: Get a credential by id

## dataclips
- GET /api/dataclips — listDataclips: List dataclips
- POST /api/dataclips — createDataclip: Create a dataclip
- GET /api/dataclips/{id} — getDataclip: Get a dataclip by id

## jobs
- GET /api/jobs — listJobs: List jobs
- POST /api/jobs — createJob: Create a job
- GET /api/jobs/{id} — getJob: Get a job by id

## projects
- GET /api/projects — listProjects: List projects
- POST /api/projects — createProject: Create a project
- GET /api/projects/{id} — getProject: Get a project by id

## runs
- GET /api/runs — listRuns: List runs
- POST /api/runs — createRun: Create (enqueue) a run
- GET /api/runs/{id} — getRun: Get a run by id

## triggers
- GET /api/triggers — listTriggers: List triggers
- POST /api/triggers — createTrigger: Create a trigger
- GET /api/triggers/{id} — getTrigger: Get a trigger by id

## workflows
- GET /api/workflows — listWorkflows: List workflows
- POST /api/workflows — createWorkflow: Create a workflow
- GET /api/workflows/{id} — getWorkflow: Get a workflow by id

## {path}
- GET /api/{path} — request: Generic GET passthrough to any OpenFn API resource
- POST /api/{path} — post: Generic POST passthrough to any OpenFn API resource
