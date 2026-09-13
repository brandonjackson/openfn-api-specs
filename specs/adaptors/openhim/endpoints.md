# OpenHIM Core API (mock subset) (openhim) v8.4.0

<!-- derived from openapi.json by `pnpm specs index openhim` — do not edit by hand -->

base: http://localhost:8080 | auth: not declared | 10 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## channels
- GET /channels — getChannels: Read all channel records
- POST /channels — createChannel: Create a new channel
- GET /channels/{channelId} — getChannel: Read a specific channel record

## clients
- GET /clients — getClients: Read all registered client records
- POST /clients — createClient: Create a new client record
- GET /clients/{clientId} — getClient: Read a specific client record

## tasks
- GET /tasks — getTasks: Read all tasks
- POST /tasks — createTask: Create a new task to rerun transactions

## transactions
- GET /transactions — getTransactions: Read all transactions
- GET /transactions/{transactionId} — getTransaction: Read a single transaction by id
