# Anthropic API (mock subset) (claude) v2023-06-01

<!-- derived from openapi.json by `pnpm specs index claude` — do not edit by hand -->

base: https://api.anthropic.com/v1 | auth: apiKey (header x-api-key) | 8 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## messages
- POST /messages — createMessage: Create a Message
- POST /messages/count_tokens — countMessageTokens: Count tokens in a Message
- GET /messages/batches — listMessageBatches: List Message Batches
- POST /messages/batches — createMessageBatch: Create a Message Batch
- GET /messages/batches/{message_batch_id} — getMessageBatch: Retrieve a Message Batch
- POST /messages/batches/{message_batch_id}/cancel — cancelMessageBatch: Cancel a Message Batch

## models
- GET /models — listModels: List available models
- GET /models/{model_id} — getModel: Get a model
