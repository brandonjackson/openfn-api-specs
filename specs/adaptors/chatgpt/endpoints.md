# OpenAI API (chatgpt) v2.3.0

<!-- derived from openapi.json by `pnpm specs index chatgpt` — do not edit by hand -->

base: https://api.openai.com/v1 | auth: http/bearer, http/bearer | 288 operations in 41 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Assistants
- GET /assistants — listAssistants: Returns a list of assistants. (deprecated)
- POST /assistants — createAssistant: Create an assistant with a model and instructions. (deprecated)
- GET /assistants/{assistant_id} — getAssistant: Retrieves an assistant. (deprecated)
- POST /assistants/{assistant_id} — modifyAssistant: Modifies an assistant. (deprecated)
- DELETE /assistants/{assistant_id} — deleteAssistant: Delete an assistant. (deprecated)
- POST /threads — createThread: Create a thread.
- POST /threads/runs — createThreadAndRun: Create a thread and run it in one request.
- GET /threads/{thread_id} — getThread: Retrieves a thread.
- POST /threads/{thread_id} — modifyThread: Modifies a thread.
- DELETE /threads/{thread_id} — deleteThread: Delete a thread.
- GET /threads/{thread_id}/messages — listMessages: Returns a list of messages for a given thread.
- POST /threads/{thread_id}/messages — createMessage: Create a message.
- GET /threads/{thread_id}/messages/{message_id} — getMessage: Retrieve a message.
- POST /threads/{thread_id}/messages/{message_id} — modifyMessage: Modifies a message.
- DELETE /threads/{thread_id}/messages/{message_id} — deleteMessage: Deletes a message.
- GET /threads/{thread_id}/runs — listRuns: Returns a list of runs belonging to a thread.
- POST /threads/{thread_id}/runs — createRun: Create a run.
- GET /threads/{thread_id}/runs/{run_id} — getRun: Retrieves a run.
- POST /threads/{thread_id}/runs/{run_id} — modifyRun: Modifies a run.
- POST /threads/{thread_id}/runs/{run_id}/cancel — cancelRun: Cancels a run that is `in_progress`.
- GET /threads/{thread_id}/runs/{run_id}/steps — listRunSteps: Returns a list of run steps belonging to a run.
- GET /threads/{thread_id}/runs/{run_id}/steps/{step_id} — getRunStep: Retrieves a run step.
- POST /threads/{thread_id}/runs/{run_id}/submit_tool_outputs — submitToolOuputsToRun: When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.

## Audio
- POST /audio/speech — createSpeech: Generates audio from the input text. Returns the audio file content, or a stream of audio events.
- POST /audio/transcriptions — createTranscription: Transcribes audio into the input language. Returns a transcription object in `json`, `diarized_json`, or `verbose_json` format, or a stream of transcript events.
- POST /audio/translations — createTranslation: Translates audio into English.
- GET /audio/voice_consents — listVoiceConsents: Returns a list of voice consent recordings.
- POST /audio/voice_consents — createVoiceConsent: Upload a voice consent recording.
- GET /audio/voice_consents/{consent_id} — getVoiceConsent: Retrieves a voice consent recording.
- POST /audio/voice_consents/{consent_id} — updateVoiceConsent: Updates a voice consent recording (metadata only).
- DELETE /audio/voice_consents/{consent_id} — deleteVoiceConsent: Deletes a voice consent recording.
- POST /audio/voices — createVoice: Creates a custom voice.

## Audit Logs
- GET /organization/audit_logs — list-audit-logs: List user actions and configuration changes within this organization.

## Batch
- GET /batches — listBatches: List your organization's batches.
- POST /batches — createBatch: Creates and executes a batch from an uploaded file of requests
- GET /batches/{batch_id} — retrieveBatch: Retrieves a batch.
- POST /batches/{batch_id}/cancel — cancelBatch: Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.

## Certificates
- GET /organization/certificates — listOrganizationCertificates: List uploaded certificates for this organization.
- POST /organization/certificates — uploadCertificate: Upload a certificate to the organization. This does **not** automatically activate the certificate. Organizations can upload up to 50 certificates.
- POST /organization/certificates/activate — activateOrganizationCertificates: Activate certificates at the organization level. You can atomically and idempotently activate up to 10 certificates at a time.
- POST /organization/certificates/deactivate — deactivateOrganizationCertificates: Deactivate certificates at the organization level. You can atomically and idempotently deactivate up to 10 certificates at a time.
- GET /organization/certificates/{certificate_id} — getCertificate: Get a certificate that has been uploaded to the organization. You can get a certificate regardless of whether it is active or not.
- POST /organization/certificates/{certificate_id} — modifyCertificate: Modify a certificate. Note that only the name can be modified.
- DELETE /organization/certificates/{certificate_id} — deleteCertificate: Delete a certificate from the organization. The certificate must be inactive for the organization and all projects.
- GET /organization/projects/{project_id}/certificates — listProjectCertificates: List certificates for this project.
- POST /organization/projects/{project_id}/certificates/activate — activateProjectCertificates: Activate certificates at the project level. You can atomically and idempotently activate up to 10 certificates at a time.
- POST /organization/projects/{project_id}/certificates/deactivate — deactivateProjectCertificates: Deactivate certificates at the project level. You can atomically and idempotently deactivate up to 10 certificates at a time.

## Chat
- GET /chat/completions — listChatCompletions: List stored Chat Completions. Only Chat Completions that have been stored with the `store` parameter set to `true` will be returned.
- POST /chat/completions — createChatCompletion: **Starting a new project?** We recommend trying [Responses](/docs/api-reference/responses) to take advantage of the latest OpenAI platform features. Compare [Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-mode=responses). --- Creates a model response for the given chat conversation. Learn more in the [text generation](/docs/guides/text-generation), [vision](/docs/guides/vision), and [audio](/docs/guides/audio) guides. Parameter support can differ depending on the model used to generate the response, particularly for newer reasoning models. Parameters that are only supported for reasoning models are noted below. For the current state of unsupported parameters in reasoning models, [refer to the reasoning guide](/docs/guides/reasoning). Returns a chat completion object, or a streamed sequence of chat completion chunk objects if the request is streamed.
- GET /chat/completions/{completion_id} — getChatCompletion: Get a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` will be returned.
- POST /chat/completions/{completion_id} — updateChatCompletion: Modify a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` can be modified. Currently, the only supported modification is to update the `metadata` field.
- DELETE /chat/completions/{completion_id} — deleteChatCompletion: Delete a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` can be deleted.
- GET /chat/completions/{completion_id}/messages — getChatCompletionMessages: Get the messages in a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` will be returned.

## Completions
- POST /completions — createCompletion: Creates a completion for the provided prompt and parameters. Returns a completion object, or a sequence of completion objects if the request is streamed.

## Conversations
- GET /conversations/{conversation_id}/items — listConversationItems: List all items for a conversation with the given ID.
- POST /conversations/{conversation_id}/items — createConversationItems: Create items in a conversation with the given ID.
- GET /conversations/{conversation_id}/items/{item_id} — getConversationItem: Get a single item from a conversation with the given IDs.
- DELETE /conversations/{conversation_id}/items/{item_id} — deleteConversationItem: Delete an item from a conversation with the given IDs.
- POST /conversations — createConversation: Create a conversation.
- GET /conversations/{conversation_id} — getConversation: Get a conversation
- POST /conversations/{conversation_id} — updateConversation: Update a conversation
- DELETE /conversations/{conversation_id} — deleteConversation: Delete a conversation. Items in the conversation will not be deleted.

## Data retention
- GET /organization/data_retention — retrieve-organization-data-retention: Retrieves organization data retention controls.
- POST /organization/data_retention — update-organization-data-retention: Updates organization data retention controls.
- GET /organization/projects/{project_id}/data_retention — retrieve-project-data-retention: Retrieves project data retention controls.
- POST /organization/projects/{project_id}/data_retention — update-project-data-retention: Updates project data retention controls.

## Embeddings
- POST /embeddings — createEmbedding: Creates an embedding vector representing the input text.

## Evals
- GET /evals — listEvals: List evaluations for a project.
- POST /evals — createEval: Create the structure of an evaluation that can be used to test a model's performance. An evaluation is a set of testing criteria and the config for a data source, which dictates the schema of the data used in the evaluation. After creating an evaluation, you can run it on different models and model parameters. We support several types of graders and datasources. For more information, see the [Evals guide](/docs/guides/evals).
- GET /evals/{eval_id} — getEval: Get an evaluation by ID.
- POST /evals/{eval_id} — updateEval: Update certain properties of an evaluation.
- DELETE /evals/{eval_id} — deleteEval: Delete an evaluation.
- GET /evals/{eval_id}/runs — getEvalRuns: Get a list of runs for an evaluation.
- POST /evals/{eval_id}/runs — createEvalRun: Kicks off a new run for a given evaluation, specifying the data source, and what model configuration to use to test. The datasource will be validated against the schema specified in the config of the evaluation.
- GET /evals/{eval_id}/runs/{run_id} — getEvalRun: Get an evaluation run by ID.
- POST /evals/{eval_id}/runs/{run_id} — cancelEvalRun: Cancel an ongoing evaluation run.
- DELETE /evals/{eval_id}/runs/{run_id} — deleteEvalRun: Delete an eval run.
- GET /evals/{eval_id}/runs/{run_id}/output_items — getEvalRunOutputItems: Get a list of output items for an evaluation run.
- GET /evals/{eval_id}/runs/{run_id}/output_items/{output_item_id} — getEvalRunOutputItem: Get an evaluation run output item by ID.

## Files
- GET /files — listFiles: Returns a list of files.
- POST /files — createFile: Upload a file that can be used across various endpoints. Individual files can be up to 512 MB, and each project can store up to 2.5 TB of files in total. There is no organization-wide storage limit. Uploads to this endpoint are rate-limited to 1,000 requests per minute per authenticated user. - The Assistants API supports files up to 2 million tokens and of specific file types. See the [Assistants Tools guide](/docs/assistants/tools) for details. - The Fine-tuning API only supports `.jsonl` files. The input also has certain required formats for fine-tuning [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) models. - The Batch API only supports `.jsonl` files up to 200 MB in size. The input also has a specific required [format](/docs/api-reference/batch/request-input). - For Retrieval or `file_search` ingestion, upload files here first. If you need to attach multiple uploaded files to the same vector store, use [`/vector_stores/{vector_store_id}/file_batches`](/docs/api-reference/vector-stores-file-batches/createBatch) instead of attaching them one by one. Vector store attachment has separate limits from file upload, including 2,000 attached files per minute per organization. Please [contact us](https://help.openai.com/) if you need to increase these storage limits.
- GET /files/{file_id} — retrieveFile: Returns information about a specific file.
- DELETE /files/{file_id} — deleteFile: Delete a file and remove it from all vector stores.
- GET /files/{file_id}/content — downloadFile: Returns a response containing the contents of the specified file.

## Fine-tuning
- POST /fine_tuning/alpha/graders/run — runGrader: Run a grader.
- POST /fine_tuning/alpha/graders/validate — validateGrader: Validate a grader.
- GET /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions — listFineTuningCheckpointPermissions: **NOTE:** This endpoint requires an [admin API key](../admin-api-keys). Organization owners can use this endpoint to view all permissions for a fine-tuned model checkpoint.
- POST /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions — createFineTuningCheckpointPermission: **NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys). This enables organization owners to share fine-tuned models with other projects in their organization.
- DELETE /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id} — deleteFineTuningCheckpointPermission: **NOTE:** This endpoint requires an [admin API key](../admin-api-keys). Organization owners can use this endpoint to delete a permission for a fine-tuned model checkpoint.
- GET /fine_tuning/jobs — listPaginatedFineTuningJobs: List your organization's fine-tuning jobs
- POST /fine_tuning/jobs — createFineTuningJob: Creates a fine-tuning job which begins the process of creating a new model from a given dataset. Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete. [Learn more about fine-tuning](/docs/guides/model-optimization)
- GET /fine_tuning/jobs/{fine_tuning_job_id} — retrieveFineTuningJob: Get info about a fine-tuning job. [Learn more about fine-tuning](/docs/guides/model-optimization)
- POST /fine_tuning/jobs/{fine_tuning_job_id}/cancel — cancelFineTuningJob: Immediately cancel a fine-tune job.
- GET /fine_tuning/jobs/{fine_tuning_job_id}/checkpoints — listFineTuningJobCheckpoints: List checkpoints for a fine-tuning job.
- GET /fine_tuning/jobs/{fine_tuning_job_id}/events — listFineTuningEvents: Get status updates for a fine-tuning job.
- POST /fine_tuning/jobs/{fine_tuning_job_id}/pause — pauseFineTuningJob: Pause a fine-tune job.
- POST /fine_tuning/jobs/{fine_tuning_job_id}/resume — resumeFineTuningJob: Resume a fine-tune job.

## Group organization role assignments
- GET /organization/groups/{group_id}/roles — list-group-role-assignments: Lists the organization roles assigned to a group within the organization.
- POST /organization/groups/{group_id}/roles — assign-group-role: Assigns an organization role to a group within the organization.
- GET /organization/groups/{group_id}/roles/{role_id} — retrieve-group-role: Retrieves an organization role assigned to a group.
- DELETE /organization/groups/{group_id}/roles/{role_id} — unassign-group-role: Unassigns an organization role from a group within the organization.

## Group users
- GET /organization/groups/{group_id}/users — list-group-users: Lists the users assigned to a group.
- POST /organization/groups/{group_id}/users — add-group-user: Adds a user to a group.
- GET /organization/groups/{group_id}/users/{user_id} — retrieve-group-user: Retrieves a user in a group.
- DELETE /organization/groups/{group_id}/users/{user_id} — remove-group-user: Removes a user from a group.

## Groups
- GET /organization/groups — list-groups: Lists all groups in the organization.
- POST /organization/groups — create-group: Creates a new group in the organization.
- GET /organization/groups/{group_id} — retrieve-group: Retrieves a group.
- POST /organization/groups/{group_id} — update-group: Updates a group's information.
- DELETE /organization/groups/{group_id} — delete-group: Deletes a group from the organization.

## Hosted tools
- GET /organization/projects/{project_id}/hosted_tool_permissions — retrieve-project-hosted-tool-permissions: Returns hosted tool permissions for a project.
- POST /organization/projects/{project_id}/hosted_tool_permissions — update-project-hosted-tool-permissions: Updates hosted tool permissions for a project.

## Images
- POST /images/edits — createImageEdit: Creates an edited or extended image given one or more source images and a prompt. This endpoint supports GPT Image models (`gpt-image-1.5`, `gpt-image-1`, `gpt-image-1-mini`, and `chatgpt-image-latest`) and `dall-e-2`.
- POST /images/generations — createImage: Creates an image given a prompt. [Learn more](/docs/guides/images).
- POST /images/variations — createImageVariation: Creates a variation of a given image. This endpoint only supports `dall-e-2`.

## Invites
- GET /organization/invites — list-invites: Returns a list of invites in the organization.
- POST /organization/invites — inviteUser: Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.
- GET /organization/invites/{invite_id} — retrieve-invite: Retrieves an invite.
- DELETE /organization/invites/{invite_id} — delete-invite: Delete an invite. If the invite has already been accepted, it cannot be deleted.

## Models
- GET /models — listModels: Lists the currently available models, and provides basic information about each one such as the owner and availability.
- GET /models/{model} — retrieveModel: Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
- DELETE /models/{model} — deleteModel: Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.

## Moderations
- POST /moderations — createModeration: Classifies if text and/or image inputs are potentially harmful. Learn more in the [moderation guide](/docs/guides/moderation).

## Project group role assignments
- GET /projects/{project_id}/groups/{group_id}/roles — list-project-group-role-assignments: Lists the project roles assigned to a group within a project.
- POST /projects/{project_id}/groups/{group_id}/roles — assign-project-group-role: Assigns a project role to a group within a project.
- GET /projects/{project_id}/groups/{group_id}/roles/{role_id} — retrieve-project-group-role: Retrieves a project role assigned to a group.
- DELETE /projects/{project_id}/groups/{group_id}/roles/{role_id} — unassign-project-group-role: Unassigns a project role from a group within a project.

## Project groups
- GET /organization/projects/{project_id}/groups — list-project-groups: Lists the groups that have access to a project.
- POST /organization/projects/{project_id}/groups — add-project-group: Grants a group access to a project.
- GET /organization/projects/{project_id}/groups/{group_id} — retrieve-project-group: Retrieves a project's group.
- DELETE /organization/projects/{project_id}/groups/{group_id} — remove-project-group: Revokes a group's access to a project.

## Project user role assignments
- GET /projects/{project_id}/users/{user_id}/roles — list-project-user-role-assignments: Lists the project roles assigned to a user within a project.
- POST /projects/{project_id}/users/{user_id}/roles — assign-project-user-role: Assigns a project role to a user within a project.
- GET /projects/{project_id}/users/{user_id}/roles/{role_id} — retrieve-project-user-role: Retrieves a project role assigned to a user.
- DELETE /projects/{project_id}/users/{user_id}/roles/{role_id} — unassign-project-user-role: Unassigns a project role from a user within a project.

## Projects
- GET /organization/projects — list-projects: Returns a list of projects.
- POST /organization/projects — create-project: Create a new project in the organization. Projects can be created and archived, but cannot be deleted.
- GET /organization/projects/{project_id} — retrieve-project: Retrieves a project.
- POST /organization/projects/{project_id} — modify-project: Modifies a project in the organization.
- GET /organization/projects/{project_id}/api_keys — list-project-api-keys: Returns a list of API keys in the project.
- GET /organization/projects/{project_id}/api_keys/{api_key_id} — retrieve-project-api-key: Retrieves an API key in the project.
- DELETE /organization/projects/{project_id}/api_keys/{api_key_id} — delete-project-api-key: Deletes an API key from the project. Returns confirmation of the key deletion, or an error if the key belonged to a service account.
- POST /organization/projects/{project_id}/archive — archive-project: Archives a project in the organization. Archived projects cannot be used or updated.
- GET /organization/projects/{project_id}/model_permissions — retrieve-project-model-permissions: Returns model permissions for a project.
- POST /organization/projects/{project_id}/model_permissions — update-project-model-permissions: Updates model permissions for a project.
- DELETE /organization/projects/{project_id}/model_permissions — delete-project-model-permissions: Deletes model permissions for a project.
- GET /organization/projects/{project_id}/rate_limits — list-project-rate-limits: Returns the rate limits per model for a project.
- POST /organization/projects/{project_id}/rate_limits/{rate_limit_id} — update-project-rate-limits: Updates a project rate limit.
- GET /organization/projects/{project_id}/service_accounts — list-project-service-accounts: Returns a list of service accounts in the project.
- POST /organization/projects/{project_id}/service_accounts — create-project-service-account: Creates a new service account in the project. By default, this also returns an unredacted API key for the service account.
- GET /organization/projects/{project_id}/service_accounts/{service_account_id} — retrieve-project-service-account: Retrieves a service account in the project.
- POST /organization/projects/{project_id}/service_accounts/{service_account_id} — update-project-service-account: Updates a service account in the project.
- DELETE /organization/projects/{project_id}/service_accounts/{service_account_id} — delete-project-service-account: Deletes a service account from the project. Returns confirmation of service account deletion, or an error if the project is archived (archived projects have no service accounts).
- GET /organization/projects/{project_id}/users — list-project-users: Returns a list of users in the project.
- POST /organization/projects/{project_id}/users — create-project-user: Adds a user to the project. Users must already be members of the organization to be added to a project.
- GET /organization/projects/{project_id}/users/{user_id} — retrieve-project-user: Retrieves a user in the project.
- POST /organization/projects/{project_id}/users/{user_id} — modify-project-user: Modifies a user's role in the project.
- DELETE /organization/projects/{project_id}/users/{user_id} — delete-project-user: Deletes a user from the project. Returns confirmation of project user deletion, or an error if the project is archived (archived projects have no users).

## Realtime
- POST /realtime/calls — create-realtime-call: Create a new Realtime API call over WebRTC and receive the SDP answer needed to complete the peer connection.
- POST /realtime/calls/{call_id}/accept — accept-realtime-call: Accept an incoming SIP call and configure the realtime session that will handle it.
- POST /realtime/calls/{call_id}/hangup — hangup-realtime-call: End an active Realtime API call, whether it was initiated over SIP or WebRTC.
- POST /realtime/calls/{call_id}/refer — refer-realtime-call: Transfer an active SIP call to a new destination using the SIP REFER verb.
- POST /realtime/calls/{call_id}/reject — reject-realtime-call: Decline an incoming SIP call by returning a SIP status code to the caller.
- POST /realtime/client_secrets — create-realtime-client-secret: Create a Realtime client secret with an associated session configuration. Client secrets are short-lived tokens that can be passed to a client app, such as a web frontend or mobile client, which grants access to the Realtime API without leaking your main API key. You can configure a custom TTL for each client secret. You can also attach session configuration options to the client secret, which will be applied to any sessions created using that client secret, but these can also be overridden by the client connection. [Learn more about authentication with client secrets over WebRTC](/docs/guides/realtime-webrtc). Returns the created client secret and the effective session object. The client secret is a string that looks like `ek_1234`.
- POST /realtime/sessions — create-realtime-session: Create an ephemeral API token for use in client-side applications with the Realtime API. Can be configured with the same session parameters as the `session.update` client event. It responds with a session object, plus a `client_secret` key which contains a usable ephemeral API token that can be used to authenticate browser clients for the Realtime API. Returns the created Realtime session object, plus an ephemeral key.
- POST /realtime/transcription_sessions — create-realtime-transcription-session: Create an ephemeral API token for use in client-side applications with the Realtime API specifically for realtime transcriptions. Can be configured with the same session parameters as the `transcription_session.update` client event. It responds with a session object, plus a `client_secret` key which contains a usable ephemeral API token that can be used to authenticate browser clients for the Realtime API. Returns the created Realtime transcription session object, plus an ephemeral key.
- POST /realtime/translations/client_secrets — create-realtime-translation-client-secret: Create a Realtime translation client secret with an associated translation session configuration. Client secrets are short-lived tokens that can be passed to a client app, such as a web frontend or mobile client, which grants access to the Realtime Translation API without leaking your main API key. You can configure a custom TTL for each client secret. Returns the created client secret and the effective translation session object. The client secret is a string that looks like `ek_1234`.

## Responses
- POST /responses — createResponse: Creates a model response. Provide [text](/docs/guides/text) or [image](/docs/guides/images) inputs to generate [text](/docs/guides/text) or [JSON](/docs/guides/structured-outputs) outputs. Have the model call your own [custom code](/docs/guides/function-calling) or use built-in [tools](/docs/guides/tools) like [web search](/docs/guides/tools-web-search) or [file search](/docs/guides/tools-file-search) to use your own data as input for the model's response.
- GET /responses/{response_id} — getResponse: Retrieves a model response with the given ID.
- DELETE /responses/{response_id} — deleteResponse: Deletes a model response with the given ID.
- POST /responses/{response_id}/cancel — cancelResponse: Cancels a model response with the given ID. Only responses created with the `background` parameter set to `true` can be cancelled. [Learn more](/docs/guides/background).
- GET /responses/{response_id}/input_items — listInputItems: Returns a list of input items for a given response.
- POST /responses?beta=true — beta_createResponse: Creates a model response. Provide [text](/docs/guides/text) or [image](/docs/guides/images) inputs to generate [text](/docs/guides/text) or [JSON](/docs/guides/structured-outputs) outputs. Have the model call your own [custom code](/docs/guides/function-calling) or use built-in [tools](/docs/guides/tools) like [web search](/docs/guides/tools-web-search) or [file search](/docs/guides/tools-file-search) to use your own data as input for the model's response.
- GET /responses/{response_id}?beta=true — beta_getResponse: Retrieves a model response with the given ID.
- DELETE /responses/{response_id}?beta=true — beta_deleteResponse: Deletes a model response with the given ID.
- POST /responses/{response_id}/cancel?beta=true — beta_cancelResponse: Cancels a model response with the given ID. Only responses created with the `background` parameter set to `true` can be cancelled. [Learn more](/docs/guides/background).
- GET /responses/{response_id}/input_items?beta=true — beta_listInputItems: Returns a list of input items for a given response.

## Roles
- GET /organization/roles — list-roles: Lists the roles configured for the organization.
- POST /organization/roles — create-role: Creates a custom role for the organization.
- GET /organization/roles/{role_id} — retrieve-role: Retrieves an organization role.
- POST /organization/roles/{role_id} — update-role: Updates an existing organization role.
- DELETE /organization/roles/{role_id} — delete-role: Deletes a custom role from the organization.
- GET /projects/{project_id}/roles — list-project-roles: Lists the roles configured for a project.
- POST /projects/{project_id}/roles — create-project-role: Creates a custom role for a project.
- GET /projects/{project_id}/roles/{role_id} — retrieve-project-role: Retrieves a project role.
- POST /projects/{project_id}/roles/{role_id} — update-project-role: Updates an existing project role.
- DELETE /projects/{project_id}/roles/{role_id} — delete-project-role: Deletes a custom role from a project.

## Skills
- GET /skills — ListSkills: List all skills for the current project.
- POST /skills — CreateSkill: Create a new skill.
- GET /skills/{skill_id} — GetSkill: Get a skill by its ID.
- POST /skills/{skill_id} — UpdateSkillDefaultVersion: Update the default version pointer for a skill.
- DELETE /skills/{skill_id} — DeleteSkill: Delete a skill by its ID.
- GET /skills/{skill_id}/content — GetSkillContent: Download a skill zip bundle by its ID.
- GET /skills/{skill_id}/versions — ListSkillVersions: List skill versions for a skill.
- POST /skills/{skill_id}/versions — CreateSkillVersion: Create a new immutable skill version.
- GET /skills/{skill_id}/versions/{version} — GetSkillVersion: Get a specific skill version.
- DELETE /skills/{skill_id}/versions/{version} — DeleteSkillVersion: Delete a skill version.
- GET /skills/{skill_id}/versions/{version}/content — GetSkillVersionContent: Download a skill version zip bundle.

## Spend alerts
- GET /organization/projects/{project_id}/spend_alerts — list-project-spend-alerts: Lists project spend alerts.
- POST /organization/projects/{project_id}/spend_alerts — create-project-spend-alert: Creates a project spend alert.
- GET /organization/projects/{project_id}/spend_alerts/{alert_id} — retrieve-project-spend-alert: Retrieves a project spend alert.
- POST /organization/projects/{project_id}/spend_alerts/{alert_id} — update-project-spend-alert: Updates a project spend alert.
- DELETE /organization/projects/{project_id}/spend_alerts/{alert_id} — delete-project-spend-alert: Deletes a project spend alert.
- GET /organization/spend_alerts — list-organization-spend-alerts: Lists organization spend alerts.
- POST /organization/spend_alerts — create-organization-spend-alert: Creates an organization spend alert.
- GET /organization/spend_alerts/{alert_id} — retrieve-organization-spend-alert: Retrieves an organization spend alert.
- POST /organization/spend_alerts/{alert_id} — update-organization-spend-alert: Updates an organization spend alert.
- DELETE /organization/spend_alerts/{alert_id} — delete-organization-spend-alert: Deletes an organization spend alert.

## Uploads
- POST /uploads — createUpload: Creates an intermediate [Upload](/docs/api-reference/uploads/object) object that you can add [Parts](/docs/api-reference/uploads/part-object) to. Currently, an Upload can accept at most 8 GB in total and expires after an hour after you create it. Once you complete the Upload, we will create a [File](/docs/api-reference/files/object) object that contains all the parts you uploaded. This File is usable in the rest of our platform as a regular File object. For certain `purpose` values, the correct `mime_type` must be specified. Please refer to documentation for the [supported MIME types for your use case](/docs/assistants/tools/file-search#supported-files). For guidance on the proper filename extensions for each purpose, please follow the documentation on [creating a File](/docs/api-reference/files/create). Returns the Upload object with status `pending`.
- POST /uploads/{upload_id}/cancel — cancelUpload: Cancels the Upload. No Parts may be added after an Upload is cancelled. Returns the Upload object with status `cancelled`.
- POST /uploads/{upload_id}/complete — completeUpload: Completes the [Upload](/docs/api-reference/uploads/object). Within the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform. You can specify the order of the Parts by passing in an ordered list of the Part IDs. The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed. Returns the Upload object with status `completed`, including an additional `file` property containing the created usable File object.
- POST /uploads/{upload_id}/parts — addUploadPart: Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload. Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB. It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you [complete the Upload](/docs/api-reference/uploads/complete).

## Usage
- GET /organization/costs — usage-costs: Get costs details for the organization.
- GET /organization/usage/audio_speeches — usage-audio-speeches: Get audio speeches usage details for the organization.
- GET /organization/usage/audio_transcriptions — usage-audio-transcriptions: Get audio transcriptions usage details for the organization.
- GET /organization/usage/code_interpreter_sessions — usage-code-interpreter-sessions: Get code interpreter sessions usage details for the organization.
- GET /organization/usage/completions — usage-completions: Get completions usage details for the organization.
- GET /organization/usage/embeddings — usage-embeddings: Get embeddings usage details for the organization.
- GET /organization/usage/file_search_calls — usage-file-search-calls: Get file search calls usage details for the organization.
- GET /organization/usage/images — usage-images: Get images usage details for the organization.
- GET /organization/usage/moderations — usage-moderations: Get moderations usage details for the organization.
- GET /organization/usage/vector_stores — usage-vector-stores: Get vector stores usage details for the organization.
- GET /organization/usage/web_search_calls — usage-web-search-calls: Get web search calls usage details for the organization.

## User organization role assignments
- GET /organization/users/{user_id}/roles — list-user-role-assignments: Lists the organization roles assigned to a user within the organization.
- POST /organization/users/{user_id}/roles — assign-user-role: Assigns an organization role to a user within the organization.
- GET /organization/users/{user_id}/roles/{role_id} — retrieve-user-role: Retrieves an organization role assigned to a user.
- DELETE /organization/users/{user_id}/roles/{role_id} — unassign-user-role: Unassigns an organization role from a user within the organization.

## Users
- GET /organization/users — list-users: Lists all of the users in the organization.
- GET /organization/users/{user_id} — retrieve-user: Retrieves a user by their identifier.
- POST /organization/users/{user_id} — modify-user: Modifies a user's role in the organization.
- DELETE /organization/users/{user_id} — delete-user: Deletes a user from the organization.

## Vector stores
- GET /vector_stores — listVectorStores: Returns a list of vector stores.
- POST /vector_stores — createVectorStore: Create a vector store.
- GET /vector_stores/{vector_store_id} — getVectorStore: Retrieves a vector store.
- POST /vector_stores/{vector_store_id} — modifyVectorStore: Modifies a vector store.
- DELETE /vector_stores/{vector_store_id} — deleteVectorStore: Delete a vector store.
- POST /vector_stores/{vector_store_id}/file_batches — createVectorStoreFileBatch: Create a vector store file batch.
- GET /vector_stores/{vector_store_id}/file_batches/{batch_id} — getVectorStoreFileBatch: Retrieves a vector store file batch.
- POST /vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel — cancelVectorStoreFileBatch: Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.
- GET /vector_stores/{vector_store_id}/file_batches/{batch_id}/files — listFilesInVectorStoreBatch: Returns a list of vector store files in a batch.
- GET /vector_stores/{vector_store_id}/files — listVectorStoreFiles: Returns a list of vector store files.
- POST /vector_stores/{vector_store_id}/files — createVectorStoreFile: Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object).
- GET /vector_stores/{vector_store_id}/files/{file_id} — getVectorStoreFile: Retrieves a vector store file.
- POST /vector_stores/{vector_store_id}/files/{file_id} — updateVectorStoreFileAttributes: Update attributes on a vector store file.
- DELETE /vector_stores/{vector_store_id}/files/{file_id} — deleteVectorStoreFile: Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint.
- GET /vector_stores/{vector_store_id}/files/{file_id}/content — retrieveVectorStoreFileContent: Retrieve the parsed contents of a vector store file.
- POST /vector_stores/{vector_store_id}/search — searchVectorStore: Search a vector store for relevant chunks based on a query and file attributes filter.

## Videos
- GET /videos — ListVideos: List recently generated videos for the current project. (deprecated)
- POST /videos — createVideo: Create a new video generation job from a prompt and optional reference assets. (deprecated)
- POST /videos/characters — CreateVideoCharacter: Create a character from an uploaded video. (deprecated)
- GET /videos/characters/{character_id} — GetVideoCharacter: Fetch a character. (deprecated)
- POST /videos/edits — CreateVideoEdit: Create a new video generation job by editing a source video or existing generated video. (deprecated)
- POST /videos/extensions — CreateVideoExtend: Create an extension of a completed video. (deprecated)
- GET /videos/{video_id} — GetVideo: Fetch the latest metadata for a generated video. (deprecated)
- DELETE /videos/{video_id} — DeleteVideo: Permanently delete a completed or failed video and its stored assets. (deprecated)
- GET /videos/{video_id}/content — RetrieveVideoContent: Download the generated video bytes or a derived preview asset. Streams the rendered video content for the specified video job. (deprecated)
- POST /videos/{video_id}/remix — CreateVideoRemix: Create a remix of a completed video using a refreshed prompt. (deprecated)

## chatkit
- POST /chatkit/sessions/{session_id}/cancel — CancelChatSessionMethod: Cancel an active ChatKit session and return its most recent metadata. Cancelling prevents new requests from using the issued client secret.
- POST /chatkit/sessions — CreateChatSessionMethod: Create a ChatKit session.
- GET /chatkit/threads/{thread_id}/items — ListThreadItemsMethod: List items that belong to a ChatKit thread.
- GET /chatkit/threads/{thread_id} — GetThreadMethod: Retrieve a ChatKit thread by its identifier.
- DELETE /chatkit/threads/{thread_id} — DeleteThreadMethod: Delete a ChatKit thread along with its items and stored attachments.
- GET /chatkit/threads — ListThreadsMethod: List ChatKit threads with optional pagination and user filters.

## containers
- GET /containers — ListContainers: List Containers
- POST /containers — CreateContainer: Create Container
- GET /containers/{container_id} — RetrieveContainer: Retrieve Container
- DELETE /containers/{container_id} — DeleteContainer: Delete Container
- GET /containers/{container_id}/files — ListContainerFiles: List Container files
- POST /containers/{container_id}/files — CreateContainerFile: Create a Container File You can send either a multipart/form-data request with the raw file content, or a JSON request with a file ID.
- GET /containers/{container_id}/files/{file_id} — RetrieveContainerFile: Retrieve Container File
- DELETE /containers/{container_id}/files/{file_id} — DeleteContainerFile: Delete Container File
- GET /containers/{container_id}/files/{file_id}/content — RetrieveContainerFileContent: Retrieve Container File Content

## content_provenance_checks
- POST /content_provenance_checks — Createcontentprovenancecheck: Check whether an image or audio file contains known OpenAI provenance signals. [Learn more about content provenance](/api/docs/guides/content-provenance). If `not_detected`, it means the tool did not find supported signals in the uploaded file. The content could still have been generated by OpenAI if the metadata was stripped or has evidence of tampering, the watermark was degraded, it comes from a legacy generation model, or it was created before provenance signals were available. Content could also still be AI-generated by another company's model, which the tool currently does not detect.

## organization
- GET /organization/admin_api_keys — admin-api-keys-list: List organization API keys
- POST /organization/admin_api_keys — admin-api-keys-create: Create an organization admin API key
- GET /organization/admin_api_keys/{key_id} — admin-api-keys-get: Retrieve a single organization API key
- DELETE /organization/admin_api_keys/{key_id} — admin-api-keys-delete: Delete an organization admin API key
- GET /organization/spend_limit — Getorganizationspendlimit: Get the organization's hard spend limit.
- POST /organization/spend_limit — Updateorganizationspendlimit: Create or replace the organization's hard spend limit.
- DELETE /organization/spend_limit — Deleteorganizationspendlimit: Delete the organization's hard spend limit.
- GET /organization/projects/{project_id}/spend_limit — Getprojectspendlimit: Get a project's hard spend limit.
- POST /organization/projects/{project_id}/spend_limit — Updateprojectspendlimit: Create or replace a project's hard spend limit.
- DELETE /organization/projects/{project_id}/spend_limit — Deleteprojectspendlimit: Delete a project's hard spend limit.
- POST /organization/projects/{project_id}/service_accounts/{service_account_id}/api_keys — CreateanAPIkeyforaserviceaccount: Creates an API key for a service account in the project.

## responses
- POST /responses/input_tokens — Getinputtokencounts: Returns input token counts of the request. Returns an object with `object` set to `response.input_tokens` and an `input_tokens` count.
- POST /responses/compact — Compactconversation: Compact a conversation. Returns a compacted response object. Learn when and how to compact long-running conversations in the [conversation state guide](/docs/guides/conversation-state#managing-the-context-window). For ZDR-compatible compaction details, see [Compaction (advanced)](/docs/guides/conversation-state#compaction-advanced).
- POST /responses/compact?beta=true — beta_Compactconversation: Compact a conversation. Returns a compacted response object. Learn when and how to compact long-running conversations in the [conversation state guide](/docs/guides/conversation-state#managing-the-context-window). For ZDR-compatible compaction details, see [Compaction (advanced)](/docs/guides/conversation-state#compaction-advanced).
- POST /responses/input_tokens?beta=true — beta_Getinputtokencounts: Returns input token counts of the request. Returns an object with `object` set to `response.input_tokens` and an `input_tokens` count.
