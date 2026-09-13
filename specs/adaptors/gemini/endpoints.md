# Gemini API (gemini) vv1beta

<!-- derived from openapi.json by `pnpm specs index gemini` — do not edit by hand -->

base: https://generativelanguage.googleapis.com | auth: not declared | 85 operations in 22 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## auth_tokens
- POST /v1beta/auth_tokens — generativelanguage.auth_tokens.create: Creates a token that can be used to constrain the behavior of a BidiGenerateContent session.

## batches
- GET /v1beta/batches/{batchesId} — generativelanguage.batches.get: Gets the latest state of a long-running operation.
- DELETE /v1beta/batches/{batchesId} — generativelanguage.batches.delete: Deletes a long-running operation.
- PATCH /v1beta/batches/{batchesId}:updateGenerateContentBatch — generativelanguage.batches.updateGenerateContentBatch: Updates a batch of GenerateContent requests for batch processing.
- GET /v1beta/batches — generativelanguage.batches.list: Lists operations that match the specified filter in the request.
- POST /v1beta/batches/{batchesId}:cancel — generativelanguage.batches.cancel: Starts asynchronous cancellation on a long-running operation.
- PATCH /v1beta/batches/{batchesId}:updateEmbedContentBatch — generativelanguage.batches.updateEmbedContentBatch: Updates a batch of EmbedContent requests for batch processing.

## cachedContents
- GET /v1beta/cachedContents/{cachedContentsId} — generativelanguage.cachedContents.get: Reads CachedContent resource.
- PATCH /v1beta/cachedContents/{cachedContentsId} — generativelanguage.cachedContents.patch: Updates CachedContent resource (only expiration is updatable).
- DELETE /v1beta/cachedContents/{cachedContentsId} — generativelanguage.cachedContents.delete: Deletes CachedContent resource.
- GET /v1beta/cachedContents — generativelanguage.cachedContents.list: Lists CachedContents.
- POST /v1beta/cachedContents — generativelanguage.cachedContents.create: Creates CachedContent resource.

## corpora
- GET /v1beta/corpora — generativelanguage.corpora.list: Lists all `Corpora` owned by the user. (deprecated)
- POST /v1beta/corpora — generativelanguage.corpora.create: Creates an empty `Corpus`. (deprecated)
- GET /v1beta/corpora/{corporaId} — generativelanguage.corpora.get: Gets information about a specific `Corpus`. (deprecated)
- DELETE /v1beta/corpora/{corporaId} — generativelanguage.corpora.delete: Deletes a `Corpus`. (deprecated)

## corpora.operations
- GET /v1beta/corpora/{corporaId}/operations/{operationsId} — generativelanguage.corpora.operations.get: Gets the latest state of a long-running operation.

## corpora.permissions
- GET /v1beta/corpora/{corporaId}/permissions/{permissionsId} — generativelanguage.corpora.permissions.get: Gets information about a specific Permission.
- PATCH /v1beta/corpora/{corporaId}/permissions/{permissionsId} — generativelanguage.corpora.permissions.patch: Updates the permission.
- DELETE /v1beta/corpora/{corporaId}/permissions/{permissionsId} — generativelanguage.corpora.permissions.delete: Deletes the permission.
- GET /v1beta/corpora/{corporaId}/permissions — generativelanguage.corpora.permissions.list: Lists permissions for the specific resource.
- POST /v1beta/corpora/{corporaId}/permissions — generativelanguage.corpora.permissions.create: Create a permission to a specific resource.

## dynamic
- POST /v1beta/dynamic/{dynamicId}:generateContent — generativelanguage.dynamic.generateContent: Generates a model response given an input `GenerateContentRequest`.
- POST /v1beta/dynamic/{dynamicId}:streamGenerateContent — generativelanguage.dynamic.streamGenerateContent: Generates a [streamed response](https://ai.google.dev/gemini-api/docs/text-generation?lang=python#generate-a-text-stream) from the model gi…

## environments
- POST /v1beta/environments:create — generativelanguage.environments.create: Creates an environment.
- GET /v1beta/environments:list — generativelanguage.environments.list: Lists environments.
- GET /v1beta/environments/{id}:get — generativelanguage.environments.get: Gets an environment.
- DELETE /v1beta/environments/{id}:delete — generativelanguage.environments.delete: Deletes an environment.

## environments.files.media
- GET /v1beta/environments/{environmentsId}/files/{filesId} — generativelanguage.environments.files.media.download: Retrieves a file or directory from an environment's snapshot (HTTP endpoint).

## fileSearchStores
- GET /v1beta/fileSearchStores — generativelanguage.fileSearchStores.list: Lists all `FileSearchStores` owned by the user.
- POST /v1beta/fileSearchStores — generativelanguage.fileSearchStores.create: Creates an empty `FileSearchStore`.
- POST /v1beta/fileSearchStores/{fileSearchStoresId}:importFile — generativelanguage.fileSearchStores.importFile: Imports a `File` from File Service to a `FileSearchStore`.
- GET /v1beta/fileSearchStores/{fileSearchStoresId} — generativelanguage.fileSearchStores.get: Gets information about a specific `FileSearchStore`.
- DELETE /v1beta/fileSearchStores/{fileSearchStoresId} — generativelanguage.fileSearchStores.delete: Deletes a `FileSearchStore`.

## fileSearchStores.documents
- GET /v1beta/fileSearchStores/{fileSearchStoresId}/documents/{documentsId} — generativelanguage.fileSearchStores.documents.get: Gets information about a specific `Document`.
- DELETE /v1beta/fileSearchStores/{fileSearchStoresId}/documents/{documentsId} — generativelanguage.fileSearchStores.documents.delete: Deletes a `Document`.
- GET /v1beta/fileSearchStores/{fileSearchStoresId}/documents — generativelanguage.fileSearchStores.documents.list: Lists all `Document`s in a `Corpus`.

## fileSearchStores.operations
- GET /v1beta/fileSearchStores/{fileSearchStoresId}/operations/{operationsId} — generativelanguage.fileSearchStores.operations.get: Gets the latest state of a long-running operation.

## fileSearchStores.upload.operations
- GET /v1beta/fileSearchStores/{fileSearchStoresId}/upload/operations/{operationsId} — generativelanguage.fileSearchStores.upload.operations.get: Gets the latest state of a long-running operation.

## files
- GET /v1beta/files — generativelanguage.files.list: Lists the metadata for `File`s owned by the requesting project.
- GET /v1beta/files/{filesId} — generativelanguage.files.get: Gets the metadata for the given `File`.
- DELETE /v1beta/files/{filesId} — generativelanguage.files.delete: Deletes the `File`.
- POST /v1beta/files:register — generativelanguage.files.register: Registers a Google Cloud Storage files with FileService.

## generatedFiles
- GET /v1beta/generatedFiles — generativelanguage.generatedFiles.list: Lists the generated files owned by the requesting project.

## generatedFiles.operations
- GET /v1beta/generatedFiles/{generatedFilesId}/operations/{operationsId} — generativelanguage.generatedFiles.operations.get: Gets the latest state of a long-running operation.

## media
- POST /v1beta/files — generativelanguage.media.upload: Creates a `File`.
- POST /v1beta/fileSearchStores/{fileSearchStoresId}:uploadToFileSearchStore — generativelanguage.media.uploadToFileSearchStore: Uploads data to a FileSearchStore, preprocesses and chunks before storing it in a FileSearchStore Document.

## models
- POST /v1beta/models/{modelsId}:generateMessage — generativelanguage.models.generateMessage: Generates a response from the model given an input `MessagePrompt`. (deprecated)
- POST /v1beta/models/{modelsId}:predictLongRunning — generativelanguage.models.predictLongRunning: Same as Predict but returns an LRO.
- POST /v1beta/models/{modelsId}:generateText — generativelanguage.models.generateText: Generates a response from the model given an input message. (deprecated)
- GET /v1beta/models — generativelanguage.models.list: Lists the [`Model`s](https://ai.google.dev/gemini-api/docs/models/gemini) available through the Gemini API.
- POST /v1beta/models/{modelsId}:generateContent — generativelanguage.models.generateContent: Generates a model response given an input `GenerateContentRequest`.
- POST /v1beta/models/{modelsId}:embedContent — generativelanguage.models.embedContent: Generates a text embedding vector from the input `Content` using the specified [Gemini Embedding model](https://ai.google.dev/gemini-api/do…
- POST /v1beta/models/{modelsId}:countMessageTokens — generativelanguage.models.countMessageTokens: Runs a model's tokenizer on a string and returns the token count. (deprecated)
- POST /v1beta/models/{modelsId}:batchEmbedContents — generativelanguage.models.batchEmbedContents: Generates multiple embedding vectors from the input `Content` which consists of a batch of strings represented as `EmbedContentRequest` obj…
- GET /v1beta/models/{modelsId} — generativelanguage.models.get: Gets information about a specific `Model` such as its version number, token limits, [parameters](https://ai.google.dev/gemini-api/docs/mode…
- POST /v1beta/models/{modelsId}:generateAnswer — generativelanguage.models.generateAnswer: Generates a grounded answer from the model given an input `GenerateAnswerRequest`. (deprecated)
- POST /v1beta/models/{modelsId}:asyncBatchEmbedContent — generativelanguage.models.asyncBatchEmbedContent: Enqueues a batch of `EmbedContent` requests for batch processing.
- POST /v1beta/models/{modelsId}:batchEmbedText — generativelanguage.models.batchEmbedText: Generates multiple embeddings from the model given input text in a synchronous call. (deprecated)
- POST /v1beta/models/{modelsId}:countTextTokens — generativelanguage.models.countTextTokens: Runs a model's tokenizer on a text and returns the token count. (deprecated)
- POST /v1beta/models/{modelsId}:embedText — generativelanguage.models.embedText: Generates an embedding from the model given an input message. (deprecated)
- POST /v1beta/models/{modelsId}:predict — generativelanguage.models.predict: Performs a prediction request.
- POST /v1beta/models/{modelsId}:streamGenerateContent — generativelanguage.models.streamGenerateContent: Generates a [streamed response](https://ai.google.dev/gemini-api/docs/text-generation?lang=python#generate-a-text-stream) from the model gi…
- POST /v1beta/models/{modelsId}:countTokens — generativelanguage.models.countTokens: Runs a model's tokenizer on input `Content` and returns the token count.
- POST /v1beta/models/{modelsId}:batchGenerateContent — generativelanguage.models.batchGenerateContent: Enqueues a batch of `GenerateContent` requests for batch processing.

## models.operations
- GET /v1beta/models/{modelsId}/operations — generativelanguage.models.operations.list: Lists operations that match the specified filter in the request.
- GET /v1beta/models/{modelsId}/operations/{operationsId} — generativelanguage.models.operations.get: Gets the latest state of a long-running operation.

## tunedModels
- POST /v1beta/tunedModels/{tunedModelsId}:generateText — generativelanguage.tunedModels.generateText: Generates a response from the model given an input message. (deprecated)
- GET /v1beta/tunedModels — generativelanguage.tunedModels.list: Lists created tuned models. (deprecated)
- POST /v1beta/tunedModels — generativelanguage.tunedModels.create: Creates a tuned model. (deprecated)
- GET /v1beta/tunedModels/{tunedModelsId} — generativelanguage.tunedModels.get: Gets information about a specific TunedModel. (deprecated)
- PATCH /v1beta/tunedModels/{tunedModelsId} — generativelanguage.tunedModels.patch: Updates a tuned model. (deprecated)
- DELETE /v1beta/tunedModels/{tunedModelsId} — generativelanguage.tunedModels.delete: Deletes a tuned model. (deprecated)
- POST /v1beta/tunedModels/{tunedModelsId}:asyncBatchEmbedContent — generativelanguage.tunedModels.asyncBatchEmbedContent: Enqueues a batch of `EmbedContent` requests for batch processing.
- POST /v1beta/tunedModels/{tunedModelsId}:streamGenerateContent — generativelanguage.tunedModels.streamGenerateContent: Generates a [streamed response](https://ai.google.dev/gemini-api/docs/text-generation?lang=python#generate-a-text-stream) from the model gi…
- POST /v1beta/tunedModels/{tunedModelsId}:batchGenerateContent — generativelanguage.tunedModels.batchGenerateContent: Enqueues a batch of `GenerateContent` requests for batch processing.
- POST /v1beta/tunedModels/{tunedModelsId}:transferOwnership — generativelanguage.tunedModels.transferOwnership: Transfers ownership of the tuned model.
- POST /v1beta/tunedModels/{tunedModelsId}:generateContent — generativelanguage.tunedModels.generateContent: Generates a model response given an input `GenerateContentRequest`.

## tunedModels.operations
- GET /v1beta/tunedModels/{tunedModelsId}/operations — generativelanguage.tunedModels.operations.list: Lists operations that match the specified filter in the request.
- GET /v1beta/tunedModels/{tunedModelsId}/operations/{operationsId} — generativelanguage.tunedModels.operations.get: Gets the latest state of a long-running operation.

## tunedModels.permissions
- GET /v1beta/tunedModels/{tunedModelsId}/permissions — generativelanguage.tunedModels.permissions.list: Lists permissions for the specific resource.
- POST /v1beta/tunedModels/{tunedModelsId}/permissions — generativelanguage.tunedModels.permissions.create: Create a permission to a specific resource.
- GET /v1beta/tunedModels/{tunedModelsId}/permissions/{permissionsId} — generativelanguage.tunedModels.permissions.get: Gets information about a specific Permission.
- PATCH /v1beta/tunedModels/{tunedModelsId}/permissions/{permissionsId} — generativelanguage.tunedModels.permissions.patch: Updates the permission.
- DELETE /v1beta/tunedModels/{tunedModelsId}/permissions/{permissionsId} — generativelanguage.tunedModels.permissions.delete: Deletes the permission.
