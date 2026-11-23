# OpenAI API (chatgpt) v2.3.0

<!-- derived from openapi.json by `pnpm specs index chatgpt` — do not edit by hand -->

base: https://api.openai.com/v1 | auth: http/bearer | 388 operations in 47 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Agents
- GET /agents/automations — listAgentAutomations: List automations
- POST /agents/automations — createAgentAutomation: Create an automation
- GET /agents/automations/{automation_id} — getAgentAutomation: Get an automation
- POST /agents/automations/{automation_id} — updateAgentAutomation: Update an automation
- DELETE /agents/automations/{automation_id} — deleteAgentAutomation: Delete an automation
- POST /agents/automations/{automation_id}/pause — pauseAgentAutomation: Pause an automation
- POST /agents/automations/{automation_id}/resume — resumeAgentAutomation: Resume an automation
- GET /agents/automations/{automation_id}/invocations — listAgentAutomationInvocations: List automation invocations
- POST /agents/automations/{automation_id}/invocations — createAgentAutomationInvocation: Invoke an automation
- GET /agents/automations/{automation_id}/invocations/{invocation_id} — getAgentAutomationInvocation: Get an automation invocation
- GET /agents/environments — listAgentEnvironments: List agent environments
- POST /agents/environments — createAgentEnvironment: Create an agent environment
- GET /agents/environments/{environment_id} — retrieveAgentEnvironment: Retrieve an agent environment
- GET /agents/environments/{environment_id}/files — listAgentEnvironmentFiles: List agent environment files
- POST /agents/environments/{environment_id}/files — createAgentEnvironmentFile: Write an agent environment file
- GET /agents/sessions/{session_id}/subagents — listAgentSessionSubagents: List session subagents
- GET /agents/sessions/{session_id}/subagents/{subagent_id} — retrieveAgentSessionSubagent: Retrieve a session subagent
- GET /agents/sessions/{session_id}/subagents/{subagent_id}/items — listAgentSessionSubagentItems: List subagent items
- GET /agents/sessions/{session_id}/subagents/{subagent_id}/turns — listAgentSessionSubagentTurns: List subagent turns
- GET /agents/sessions/{session_id}/subagents/{subagent_id}/turns/{turn_id} — retrieveAgentSessionSubagentTurn: Retrieve a subagent turn
- GET /agents/sessions/{session_id}/subagents/{subagent_id}/turns/{turn_id}/items — listAgentSessionSubagentTurnItems: List subagent turn items
- GET /agents — listAgents: List agents
- POST /agents — createAgent: Create an agent
- GET /agents/{agent_id} — retrieveAgent: Retrieve an agent
- POST /agents/{agent_id} — updateAgent: Update an agent
- DELETE /agents/{agent_id} — deleteAgent: Delete an agent
- GET /agents/environments/templates — listAgentEnvironmentTemplates: List agent environment templates
- POST /agents/environments/templates — createAgentEnvironmentTemplate: Create an agent environment template
- GET /agents/environments/templates/{environment_template_id} — retrieveAgentEnvironmentTemplate: Retrieve an agent environment template
- POST /agents/environments/templates/{environment_template_id} — updateAgentEnvironmentTemplate: Update an agent environment template
- DELETE /agents/environments/templates/{environment_template_id} — deleteAgentEnvironmentTemplate: Delete an agent environment template
- GET /agents/sessions — listAgentSessions: List agent sessions
- POST /agents/sessions — createAgentSession: Create an agent session
- GET /agents/sessions/{session_id} — retrieveAgentSession: Retrieve an agent session
- POST /agents/sessions/{session_id} — updateAgentSession: Update an agent session
- DELETE /agents/sessions/{session_id} — deleteAgentSession: Delete an agent session
- GET /agents/sessions/{session_id}/artifacts — listAgentSessionArtifacts: List agent session artifacts
- GET /agents/sessions/{session_id}/artifacts/{artifact_id} — retrieveAgentSessionArtifact: Retrieve an agent session artifact
- DELETE /agents/sessions/{session_id}/artifacts/{artifact_id} — deleteAgentSessionArtifact: Delete an agent session artifact
- GET /agents/sessions/{session_id}/artifacts/{artifact_id}/content — retrieveAgentSessionArtifactContent: Retrieve agent session artifact content
- GET /agents/sessions/{session_id}/events — listAgentSessionEvents: Stream agent session events
- POST /agents/sessions/{session_id}/events — createAgentSessionEvents: Create agent session input events
- GET /agents/sessions/{session_id}/items — listAgentSessionItems: List agent session items
- GET /agents/sessions/{session_id}/traces — listAgentSessionTraces: List agent session traces
- GET /agents/sessions/{session_id}/turns — listAgentSessionTurns: List agent session turns
- GET /agents/sessions/{session_id}/turns/{turn_id} — retrieveAgentSessionTurn: Retrieve an agent session turn
- GET /agents/sessions/{session_id}/turns/{turn_id}/items — listAgentSessionTurnItems: List agent session turn items

## Assistants
- GET /assistants — listAssistants: List assistants (deprecated)
- POST /assistants — createAssistant: Create assistant (deprecated)
- GET /assistants/{assistant_id} — getAssistant: Retrieve assistant (deprecated)
- POST /assistants/{assistant_id} — modifyAssistant: Modify assistant (deprecated)
- DELETE /assistants/{assistant_id} — deleteAssistant: Delete assistant (deprecated)
- POST /threads — createThread: Create thread
- POST /threads/runs — createThreadAndRun: Create thread and run
- GET /threads/{thread_id} — getThread: Retrieve thread
- POST /threads/{thread_id} — modifyThread: Modify thread
- DELETE /threads/{thread_id} — deleteThread: Delete thread
- GET /threads/{thread_id}/messages — listMessages: List messages
- POST /threads/{thread_id}/messages — createMessage: Create message
- GET /threads/{thread_id}/messages/{message_id} — getMessage: Retrieve message
- POST /threads/{thread_id}/messages/{message_id} — modifyMessage: Modify message
- DELETE /threads/{thread_id}/messages/{message_id} — deleteMessage: Delete message
- GET /threads/{thread_id}/runs — listRuns: List runs
- POST /threads/{thread_id}/runs — createRun: Create run
- GET /threads/{thread_id}/runs/{run_id} — getRun: Retrieve run
- POST /threads/{thread_id}/runs/{run_id} — modifyRun: Modify run
- POST /threads/{thread_id}/runs/{run_id}/cancel — cancelRun: Cancel a run
- GET /threads/{thread_id}/runs/{run_id}/steps — listRunSteps: List run steps
- GET /threads/{thread_id}/runs/{run_id}/steps/{step_id} — getRunStep: Retrieve run step
- POST /threads/{thread_id}/runs/{run_id}/submit_tool_outputs — submitToolOuputsToRun: Submit tool outputs to run

## Audio
- POST /audio/speech — createSpeech: Create speech
- POST /audio/transcriptions — createTranscription: Create transcription
- POST /audio/translations — createTranslation: Create translation (deprecated)
- GET /audio/voice_consents — listVoiceConsents: List voice consents
- POST /audio/voice_consents — createVoiceConsent: Create voice consent
- GET /audio/voice_consents/{consent_id} — getVoiceConsent: Retrieve voice consent
- POST /audio/voice_consents/{consent_id} — updateVoiceConsent: Update voice consent
- DELETE /audio/voice_consents/{consent_id} — deleteVoiceConsent: Delete voice consent
- POST /audio/voices — createVoice: Create voice
- DELETE /audio/voices/{voice_id} — deleteVoice: Delete voice

## Audit Logs
- GET /organization/audit_logs — list-audit-logs: List audit logs

## Batch
- GET /batches — listBatches: List batches
- POST /batches — createBatch: Create batch
- GET /batches/{batch_id} — retrieveBatch: Retrieve batch
- POST /batches/{batch_id}/cancel — cancelBatch: Cancel batch

## Certificates
- GET /organization/certificates — listOrganizationCertificates: List organization certificates
- POST /organization/certificates — uploadCertificate: Upload certificate
- POST /organization/certificates/activate — activateOrganizationCertificates: Activate certificates for organization
- POST /organization/certificates/deactivate — deactivateOrganizationCertificates: Deactivate certificates for organization
- GET /organization/certificates/{certificate_id} — getCertificate: Get certificate
- POST /organization/certificates/{certificate_id} — modifyCertificate: Modify certificate
- DELETE /organization/certificates/{certificate_id} — deleteCertificate: Delete certificate
- GET /organization/projects/{project_id}/certificates — listProjectCertificates: List project certificates
- POST /organization/projects/{project_id}/certificates/activate — activateProjectCertificates: Activate certificates for project
- POST /organization/projects/{project_id}/certificates/deactivate — deactivateProjectCertificates: Deactivate certificates for project

## Chat
- GET /chat/completions — listChatCompletions: List Chat Completions
- POST /chat/completions — createChatCompletion: Create chat completion
- GET /chat/completions/{completion_id} — getChatCompletion: Get chat completion
- POST /chat/completions/{completion_id} — updateChatCompletion: Update chat completion
- DELETE /chat/completions/{completion_id} — deleteChatCompletion: Delete chat completion
- GET /chat/completions/{completion_id}/messages — getChatCompletionMessages: Get chat messages

## Completions
- POST /completions — createCompletion: Create completion

## Conversations
- GET /conversations/{conversation_id}/items — listConversationItems: List items
- POST /conversations/{conversation_id}/items — createConversationItems: Create items
- GET /conversations/{conversation_id}/items/{item_id} — getConversationItem: Retrieve an item
- DELETE /conversations/{conversation_id}/items/{item_id} — deleteConversationItem: Delete an item
- POST /conversations — createConversation: Create a conversation
- GET /conversations/{conversation_id} — getConversation: Retrieve a conversation
- POST /conversations/{conversation_id} — updateConversation: Update a conversation
- DELETE /conversations/{conversation_id} — deleteConversation: Delete a conversation

## Data retention
- GET /organization/data_retention — retrieve-organization-data-retention: Retrieve organization data retention
- POST /organization/data_retention — update-organization-data-retention: Update organization data retention
- GET /organization/projects/{project_id}/data_retention — retrieve-project-data-retention: Retrieve project data retention
- POST /organization/projects/{project_id}/data_retention — update-project-data-retention: Update project data retention

## Decisions
- POST /decisions — createDecision: Create a decision

## Embeddings
- POST /embeddings — createEmbedding: Create embeddings

## Evals
- GET /evals — listEvals: List evals
- POST /evals — createEval: Create eval
- GET /evals/{eval_id} — getEval: Get an eval
- POST /evals/{eval_id} — updateEval: Update an eval
- DELETE /evals/{eval_id} — deleteEval: Delete an eval
- GET /evals/{eval_id}/runs — getEvalRuns: Get eval runs
- POST /evals/{eval_id}/runs — createEvalRun: Create eval run
- GET /evals/{eval_id}/runs/{run_id} — getEvalRun: Get an eval run
- DELETE /evals/{eval_id}/runs/{run_id} — deleteEvalRun: Delete eval run
- POST /evals/{eval_id}/runs/{run_id}/cancel — cancelEvalRun: Cancel eval run
- GET /evals/{eval_id}/runs/{run_id}/output_items — getEvalRunOutputItems: Get eval run output items
- GET /evals/{eval_id}/runs/{run_id}/output_items/{output_item_id} — getEvalRunOutputItem: Get an output item of an eval run

## Files
- GET /files — listFiles: List files
- POST /files — createFile: Upload file
- GET /files/{file_id} — retrieveFile: Retrieve file
- DELETE /files/{file_id} — deleteFile: Delete file
- GET /files/{file_id}/content — downloadFile: Retrieve file content

## Fine-tuning
- POST /fine_tuning/alpha/graders/run — runGrader: Run grader
- POST /fine_tuning/alpha/graders/validate — validateGrader: Validate grader
- GET /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions — listFineTuningCheckpointPermissions: List checkpoint permissions
- POST /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions — createFineTuningCheckpointPermission: Create checkpoint permissions
- DELETE /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id} — deleteFineTuningCheckpointPermission: Delete checkpoint permission
- GET /fine_tuning/jobs — listPaginatedFineTuningJobs: List fine-tuning jobs
- POST /fine_tuning/jobs — createFineTuningJob: Create fine-tuning job
- GET /fine_tuning/jobs/{fine_tuning_job_id} — retrieveFineTuningJob: Retrieve fine-tuning job
- POST /fine_tuning/jobs/{fine_tuning_job_id}/cancel — cancelFineTuningJob: Cancel fine-tuning
- GET /fine_tuning/jobs/{fine_tuning_job_id}/checkpoints — listFineTuningJobCheckpoints: List fine-tuning checkpoints
- GET /fine_tuning/jobs/{fine_tuning_job_id}/events — listFineTuningEvents: List fine-tuning events
- POST /fine_tuning/jobs/{fine_tuning_job_id}/pause — pauseFineTuningJob: Pause fine-tuning
- POST /fine_tuning/jobs/{fine_tuning_job_id}/resume — resumeFineTuningJob: Resume fine-tuning

## Group organization role assignments
- GET /organization/groups/{group_id}/roles — list-group-role-assignments: List group organization role assignments
- POST /organization/groups/{group_id}/roles — assign-group-role: Assign organization role to group
- GET /organization/groups/{group_id}/roles/{role_id} — retrieve-group-role: Retrieve group organization role
- DELETE /organization/groups/{group_id}/roles/{role_id} — unassign-group-role: Unassign organization role from group

## Group users
- GET /organization/groups/{group_id}/users — list-group-users: List group users
- POST /organization/groups/{group_id}/users — add-group-user: Add group user
- GET /organization/groups/{group_id}/users/{user_id} — retrieve-group-user: Retrieve group user
- DELETE /organization/groups/{group_id}/users/{user_id} — remove-group-user: Remove group user

## Groups
- GET /organization/groups — list-groups: List groups
- POST /organization/groups — create-group: Create group
- GET /organization/groups/{group_id} — retrieve-group: Retrieve group
- POST /organization/groups/{group_id} — update-group: Update group
- DELETE /organization/groups/{group_id} — delete-group: Delete group

## Hosted tools
- GET /organization/projects/{project_id}/hosted_tool_permissions — retrieve-project-hosted-tool-permissions: Retrieve project hosted tool permissions
- POST /organization/projects/{project_id}/hosted_tool_permissions — update-project-hosted-tool-permissions: Modify project hosted tool permissions

## Images
- POST /images/edits — createImageEdit: Create image edit
- POST /images/generations — createImage: Create image
- POST /images/variations — createImageVariation: Create image variation (deprecated)

## Invites
- GET /organization/invites — list-invites: List invites
- POST /organization/invites — inviteUser: Create invite
- GET /organization/invites/{invite_id} — retrieve-invite: Retrieve invite
- DELETE /organization/invites/{invite_id} — delete-invite: Delete invite

## Live
- POST /live/sessions — create-live: Create session
- POST /live/sessions/{session_id}/accept — accept-live-session: Accept call
- POST /live/sessions/{session_id}/fork — fork-live-session: Fork session
- POST /live/sessions/{session_id}/hangup — hangup-live-session: Hang up session
- POST /live/sessions/{session_id}/refer — refer-live-session: Transfer call
- POST /live/sessions/{session_id}/reject — reject-live-session: Reject call
- GET /live/sessions/{session_id}/content — download-live-recording: Download recording

## Models
- GET /models — listModels: List models
- GET /models/{model} — retrieveModel: Retrieve model
- DELETE /models/{model} — deleteModel: Delete a fine-tuned model

## Moderations
- POST /moderations — createModeration: Create moderation

## Project group role assignments
- GET /projects/{project_id}/groups/{group_id}/roles — list-project-group-role-assignments: List project group role assignments
- POST /projects/{project_id}/groups/{group_id}/roles — assign-project-group-role: Assign project role to group
- GET /projects/{project_id}/groups/{group_id}/roles/{role_id} — retrieve-project-group-role: Retrieve project group role
- DELETE /projects/{project_id}/groups/{group_id}/roles/{role_id} — unassign-project-group-role: Unassign project role from group

## Project groups
- GET /organization/projects/{project_id}/groups — list-project-groups: List project groups
- POST /organization/projects/{project_id}/groups — add-project-group: Add project group
- GET /organization/projects/{project_id}/groups/{group_id} — retrieve-project-group: Retrieve project group
- DELETE /organization/projects/{project_id}/groups/{group_id} — remove-project-group: Remove project group

## Project user role assignments
- GET /projects/{project_id}/users/{user_id}/roles — list-project-user-role-assignments: List project user role assignments
- POST /projects/{project_id}/users/{user_id}/roles — assign-project-user-role: Assign project role to user
- GET /projects/{project_id}/users/{user_id}/roles/{role_id} — retrieve-project-user-role: Retrieve project user role
- DELETE /projects/{project_id}/users/{user_id}/roles/{role_id} — unassign-project-user-role: Unassign project role from user

## Projects
- GET /organization/projects — list-projects: List projects
- POST /organization/projects — create-project: Create project
- GET /organization/projects/{project_id} — retrieve-project: Retrieve project
- POST /organization/projects/{project_id} — modify-project: Modify project
- GET /organization/projects/{project_id}/api_keys — list-project-api-keys: List project API keys
- GET /organization/projects/{project_id}/api_keys/{api_key_id} — retrieve-project-api-key: Retrieve project API key
- POST /organization/projects/{project_id}/api_keys/{api_key_id} — update-project-api-key: Update project API key
- DELETE /organization/projects/{project_id}/api_keys/{api_key_id} — delete-project-api-key: Delete project API key
- POST /organization/projects/{project_id}/archive — archive-project: Archive project
- GET /organization/projects/{project_id}/model_permissions — retrieve-project-model-permissions: Retrieve project model permissions
- POST /organization/projects/{project_id}/model_permissions — update-project-model-permissions: Modify project model permissions
- DELETE /organization/projects/{project_id}/model_permissions — delete-project-model-permissions: Delete project model permissions
- GET /organization/projects/{project_id}/rate_limits — list-project-rate-limits: List project rate limits
- POST /organization/projects/{project_id}/rate_limits/{rate_limit_id} — update-project-rate-limits: Modify project rate limit
- GET /organization/projects/{project_id}/service_accounts — list-project-service-accounts: List project service accounts
- POST /organization/projects/{project_id}/service_accounts — create-project-service-account: Create project service account
- GET /organization/projects/{project_id}/service_accounts/{service_account_id} — retrieve-project-service-account: Retrieve project service account
- POST /organization/projects/{project_id}/service_accounts/{service_account_id} — update-project-service-account: Update project service account
- DELETE /organization/projects/{project_id}/service_accounts/{service_account_id} — delete-project-service-account: Delete project service account
- GET /organization/projects/{project_id}/users — list-project-users: List project users
- POST /organization/projects/{project_id}/users — create-project-user: Create project user
- GET /organization/projects/{project_id}/users/{user_id} — retrieve-project-user: Retrieve project user
- POST /organization/projects/{project_id}/users/{user_id} — modify-project-user: Modify project user
- DELETE /organization/projects/{project_id}/users/{user_id} — delete-project-user: Delete project user

## Realtime
- POST /realtime/calls — create-realtime-call: Create call
- POST /realtime/calls/{call_id}/accept — accept-realtime-call: Accept call
- POST /realtime/calls/{call_id}/hangup — hangup-realtime-call: Hang up call
- POST /realtime/calls/{call_id}/refer — refer-realtime-call: Refer call
- POST /realtime/calls/{call_id}/reject — reject-realtime-call: Reject call
- POST /realtime/client_secrets — create-realtime-client-secret: Create client secret
- POST /realtime/sessions — create-realtime-session: Create session
- POST /realtime/transcription_sessions — create-realtime-transcription-session: Create transcription session
- POST /realtime/translations/client_secrets — create-realtime-translation-client-secret: Create translation client secret

## Responses
- POST /responses — createResponse: Create a model response
- GET /responses/{response_id} — getResponse: Get a model response
- DELETE /responses/{response_id} — deleteResponse: Delete a model response
- POST /responses/{response_id}/cancel — cancelResponse: Cancel a response
- GET /responses/{response_id}/input_items — listInputItems: List input items
- POST /responses/input_tokens — Getinputtokencounts: Get input token counts
- POST /responses/compact — Compactconversation: Compact conversation
- POST /responses?beta=true — beta_createResponse: Create a model response
- GET /responses/{response_id}?beta=true — beta_getResponse: Get a model response
- DELETE /responses/{response_id}?beta=true — beta_deleteResponse: Delete a model response
- POST /responses/{response_id}/cancel?beta=true — beta_cancelResponse: Cancel a response
- POST /responses/compact?beta=true — beta_Compactconversation: Compact conversation
- GET /responses/{response_id}/input_items?beta=true — beta_listInputItems: List input items
- POST /responses/input_tokens?beta=true — beta_Getinputtokencounts: Get input token counts

## Roles
- GET /organization/roles — list-roles: List organization roles
- POST /organization/roles — create-role: Create organization role
- GET /organization/roles/{role_id} — retrieve-role: Retrieve organization role
- POST /organization/roles/{role_id} — update-role: Update organization role
- DELETE /organization/roles/{role_id} — delete-role: Delete organization role
- GET /projects/{project_id}/roles — list-project-roles: List project roles
- POST /projects/{project_id}/roles — create-project-role: Create project role
- GET /projects/{project_id}/roles/{role_id} — retrieve-project-role: Retrieve project role
- POST /projects/{project_id}/roles/{role_id} — update-project-role: Update project role
- DELETE /projects/{project_id}/roles/{role_id} — delete-project-role: Delete project role

## Skills
- GET /skills — ListSkills: List Skills
- POST /skills — CreateSkill: Create Skill
- GET /skills/{skill_id} — GetSkill: Get Skill
- POST /skills/{skill_id} — UpdateSkillDefaultVersion: Update Skill Default Version
- DELETE /skills/{skill_id} — DeleteSkill: Delete Skill
- GET /skills/{skill_id}/content — GetSkillContent: Get Skill Content
- GET /skills/{skill_id}/versions — ListSkillVersions: List Skill Versions
- POST /skills/{skill_id}/versions — CreateSkillVersion: Create Skill Version
- GET /skills/{skill_id}/versions/{version} — GetSkillVersion: Get Skill Version
- DELETE /skills/{skill_id}/versions/{version} — DeleteSkillVersion: Delete Skill Version
- GET /skills/{skill_id}/versions/{version}/content — GetSkillVersionContent: Get Skill Version Content

## Spend alerts
- GET /organization/projects/{project_id}/spend_alerts — list-project-spend-alerts: List project spend alerts
- POST /organization/projects/{project_id}/spend_alerts — create-project-spend-alert: Create project spend alert
- GET /organization/projects/{project_id}/spend_alerts/{alert_id} — retrieve-project-spend-alert: Retrieve project spend alert
- POST /organization/projects/{project_id}/spend_alerts/{alert_id} — update-project-spend-alert: Update project spend alert
- DELETE /organization/projects/{project_id}/spend_alerts/{alert_id} — delete-project-spend-alert: Delete project spend alert
- GET /organization/spend_alerts — list-organization-spend-alerts: List organization spend alerts
- POST /organization/spend_alerts — create-organization-spend-alert: Create organization spend alert
- GET /organization/spend_alerts/{alert_id} — retrieve-organization-spend-alert: Retrieve organization spend alert
- POST /organization/spend_alerts/{alert_id} — update-organization-spend-alert: Update organization spend alert
- DELETE /organization/spend_alerts/{alert_id} — delete-organization-spend-alert: Delete organization spend alert

## Uploads
- POST /uploads — createUpload: Create upload
- POST /uploads/{upload_id}/cancel — cancelUpload: Cancel upload
- POST /uploads/{upload_id}/complete — completeUpload: Complete upload
- POST /uploads/{upload_id}/parts — addUploadPart: Add upload part

## Usage
- GET /organization/costs — usage-costs: Costs
- GET /organization/usage/audio_speeches — usage-audio-speeches: Audio speeches
- GET /organization/usage/audio_transcriptions — usage-audio-transcriptions: Audio transcriptions
- GET /organization/usage/code_interpreter_sessions — usage-code-interpreter-sessions: Code interpreter sessions
- GET /organization/usage/completions — usage-completions: Completions
- GET /organization/usage/embeddings — usage-embeddings: Embeddings
- GET /organization/usage/file_search_calls — usage-file-search-calls: File search calls
- GET /organization/usage/images — usage-images: Images
- GET /organization/usage/moderations — usage-moderations: Moderations
- GET /organization/usage/vector_stores — usage-vector-stores: Vector stores
- GET /organization/usage/web_search_calls — usage-web-search-calls: Web search calls

## User organization role assignments
- GET /organization/users/{user_id}/roles — list-user-role-assignments: List user organization role assignments
- POST /organization/users/{user_id}/roles — assign-user-role: Assign organization role to user
- GET /organization/users/{user_id}/roles/{role_id} — retrieve-user-role: Retrieve user organization role
- DELETE /organization/users/{user_id}/roles/{role_id} — unassign-user-role: Unassign organization role from user

## Users
- GET /organization/users — list-users: List users
- GET /organization/users/{user_id} — retrieve-user: Retrieve user
- POST /organization/users/{user_id} — modify-user: Modify user
- DELETE /organization/users/{user_id} — delete-user: Delete user

## Vaults
- GET /vaults — listVaults: List vaults
- POST /vaults — createVault: Create a vault
- GET /vaults/{vault_id} — retrieveVault: Retrieve a vault
- POST /vaults/{vault_id} — updateVault: Update a vault
- DELETE /vaults/{vault_id} — deleteVault: Delete a vault
- GET /vaults/{vault_id}/credentials — listVaultCredentials: List vault credentials
- POST /vaults/{vault_id}/credentials — createVaultCredential: Create a vault credential
- GET /vaults/{vault_id}/credentials/{credential_id} — retrieveVaultCredential: Retrieve a vault credential
- POST /vaults/{vault_id}/credentials/{credential_id} — rotateVaultCredential: Update a vault credential
- DELETE /vaults/{vault_id}/credentials/{credential_id} — deleteVaultCredential: Delete a vault credential

## Vector stores
- GET /vector_stores — listVectorStores: List vector stores
- POST /vector_stores — createVectorStore: Create vector store
- GET /vector_stores/{vector_store_id} — getVectorStore: Retrieve vector store
- POST /vector_stores/{vector_store_id} — modifyVectorStore: Modify vector store
- DELETE /vector_stores/{vector_store_id} — deleteVectorStore: Delete vector store
- POST /vector_stores/{vector_store_id}/file_batches — createVectorStoreFileBatch: Create vector store file batch
- GET /vector_stores/{vector_store_id}/file_batches/{batch_id} — getVectorStoreFileBatch: Retrieve vector store file batch
- POST /vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel — cancelVectorStoreFileBatch: Cancel vector store file batch
- GET /vector_stores/{vector_store_id}/file_batches/{batch_id}/files — listFilesInVectorStoreBatch: List vector store files in a batch
- GET /vector_stores/{vector_store_id}/files — listVectorStoreFiles: List vector store files
- POST /vector_stores/{vector_store_id}/files — createVectorStoreFile: Create vector store file
- GET /vector_stores/{vector_store_id}/files/{file_id} — getVectorStoreFile: Retrieve vector store file
- POST /vector_stores/{vector_store_id}/files/{file_id} — updateVectorStoreFileAttributes: Update vector store file attributes
- DELETE /vector_stores/{vector_store_id}/files/{file_id} — deleteVectorStoreFile: Delete vector store file
- GET /vector_stores/{vector_store_id}/files/{file_id}/content — retrieveVectorStoreFileContent: Retrieve vector store file content
- POST /vector_stores/{vector_store_id}/search — searchVectorStore: Search vector store

## Videos
- GET /videos — ListVideos: List videos (deprecated)
- POST /videos — createVideo: Create a video (deprecated)
- POST /videos/characters — CreateVideoCharacter: Create a character (deprecated)
- GET /videos/characters/{character_id} — GetVideoCharacter: Retrieve a character (deprecated)
- POST /videos/edits — CreateVideoEdit: Create a video edit (deprecated)
- POST /videos/extensions — CreateVideoExtend: Create a video extension (deprecated)
- GET /videos/{video_id} — GetVideo: Retrieve a video (deprecated)
- DELETE /videos/{video_id} — DeleteVideo: Delete a video (deprecated)
- GET /videos/{video_id}/content — RetrieveVideoContent: Download video content (deprecated)
- POST /videos/{video_id}/remix — CreateVideoRemix: Create a video remix (deprecated)

## chatkit
- POST /chatkit/sessions/{session_id}/cancel — CancelChatSessionMethod: Cancel a ChatKit session
- POST /chatkit/sessions — CreateChatSessionMethod: Create a ChatKit session
- GET /chatkit/threads/{thread_id}/items — ListThreadItemsMethod: List ChatKit thread items
- GET /chatkit/threads/{thread_id} — GetThreadMethod: Retrieve a ChatKit thread
- DELETE /chatkit/threads/{thread_id} — DeleteThreadMethod: Delete a ChatKit thread
- GET /chatkit/threads — ListThreadsMethod: List ChatKit threads

## containers
- GET /containers — ListContainers: List containers
- POST /containers — CreateContainer: Create container
- GET /containers/{container_id} — RetrieveContainer: Retrieve container
- DELETE /containers/{container_id} — DeleteContainer: Delete a container
- GET /containers/{container_id}/files — ListContainerFiles: List container files
- POST /containers/{container_id}/files — CreateContainerFile: Create container file
- GET /containers/{container_id}/files/{file_id} — RetrieveContainerFile: Retrieve container file
- DELETE /containers/{container_id}/files/{file_id} — DeleteContainerFile: Delete a container file
- GET /containers/{container_id}/files/{file_id}/content — RetrieveContainerFileContent: Retrieve container file content

## content_provenance_checks
- POST /content_provenance_checks — Createcontentprovenancecheck: Create content provenance check

## organization
- GET /organization/admin_api_keys — admin-api-keys-list: List all organization and project API keys.
- POST /organization/admin_api_keys — admin-api-keys-create: Create admin API key
- GET /organization/admin_api_keys/{key_id} — admin-api-keys-get: Retrieve admin API key
- DELETE /organization/admin_api_keys/{key_id} — admin-api-keys-delete: Delete admin API key
- GET /organization/external_keys — Listtheexternalkeyconfigsregisteredontheuser'sorganization: List the external key configs registered on the user's organization
- POST /organization/external_keys — Addanexternalkeyconfigforanorganization: Add an external key config for an organization
- GET /organization/external_keys/{external_key_id} — Retrieveanexternalkeyregistration: Retrieve an external key registration
- DELETE /organization/external_keys/{external_key_id} — Deleteanexternalkeyconfigfortheuser'sorganization: Delete an external key config for the user's organization
- POST /organization/external_keys/{external_key_id}/validate — Validateanexternalkeyconfigfortheuser'sorganization: Validate an external key config for the user's organization
- GET /organization/workload_identity_providers — ListPlatformworkloadidentityproviders: List Platform workload identity providers
- POST /organization/workload_identity_providers — CreatePlatformworkloadidentityprovider: Create Platform workload identity provider
- GET /organization/workload_identity_providers/{workload_identity_provider_id} — RetrievePlatformworkloadidentityprovider: Retrieve Platform workload identity provider
- POST /organization/workload_identity_providers/{workload_identity_provider_id} — UpdatePlatformworkloadidentityprovider: Update Platform workload identity provider
- DELETE /organization/workload_identity_providers/{workload_identity_provider_id} — DeletePlatformworkloadidentityprovider: Delete Platform workload identity provider
- GET /organization/workload_identity_providers/{workload_identity_provider_id}/federation_rules — ListPlatformworkloadidentityfederationrules: List Platform workload identity federation rules
- POST /organization/workload_identity_providers/{workload_identity_provider_id}/federation_rules — CreatePlatformworkloadidentityfederationrule: Create Platform workload identity federation rule
- GET /organization/workload_identity_providers/{workload_identity_provider_id}/federation_rules/{workload_identity_federation_rule_id} — RetrievePlatformworkloadidentityfederationrule: Retrieve Platform workload identity federation rule
- POST /organization/workload_identity_providers/{workload_identity_provider_id}/federation_rules/{workload_identity_federation_rule_id} — UpdatePlatformworkloadidentityfederationrule: Update Platform workload identity federation rule
- DELETE /organization/workload_identity_providers/{workload_identity_provider_id}/federation_rules/{workload_identity_federation_rule_id} — DeletePlatformworkloadidentityfederationrule: Delete Platform workload identity federation rule
- GET /organization/usage/decisions — OrganizationDecisionsusage: Decisions
- GET /organization/external_storage — Listexternalstorageconfigurations: List external storage configurations
- POST /organization/external_storage — Createanexternalstorageconfiguration: Create an external storage configuration
- GET /organization/external_storage/{external_storage_id} — Getanexternalstorageconfiguration: Get an external storage configuration
- DELETE /organization/external_storage/{external_storage_id} — Deleteanexternalstorageconfiguration: Delete an external storage configuration
- POST /organization/external_storage/{external_storage_id}/validate — Validateanexternalstorageconfiguration: Validate an external storage configuration
- GET /organization/spend_limit — Getorganizationspendlimit: Get organization spend limit
- POST /organization/spend_limit — Updateorganizationspendlimit: Update organization spend limit
- DELETE /organization/spend_limit — Deleteorganizationspendlimit: Delete organization spend limit
- GET /organization/projects/{project_id}/spend_limit — Getprojectspendlimit: Get project spend limit
- POST /organization/projects/{project_id}/spend_limit — Updateprojectspendlimit: Update project spend limit
- DELETE /organization/projects/{project_id}/spend_limit — Deleteprojectspendlimit: Delete project spend limit
- GET /organization/projects/{project_id}/service_tier_settings — Retrieveprojectservicetiersettings: Retrieve project service tier settings
- POST /organization/projects/{project_id}/service_tier_settings — Updateprojectservicetiersettings: Update project service tier settings
- POST /organization/projects/{project_id}/service_accounts/{service_account_id}/api_keys — CreateanAPIkeyforaserviceaccount: Create an API key for a service account

## safety
- GET /safety/cases/{id} — Getsafetycase: Get safety case
- GET /safety/alerts/{id} — Getprojectsafetyalert: Get project safety alert

## webhook_endpoints
- GET /webhook_endpoints — ListWebhookEndpoints: List Webhook Endpoints
- POST /webhook_endpoints — CreateWebhookEndpoint: Create Webhook Endpoint
- GET /webhook_endpoints/{webhook_endpoint_id} — RetrieveWebhookEndpoint: Retrieve Webhook Endpoint
- POST /webhook_endpoints/{webhook_endpoint_id} — UpdateWebhookEndpoint: Update Webhook Endpoint
- DELETE /webhook_endpoints/{webhook_endpoint_id} — DeleteWebhookEndpoint: Delete Webhook Endpoint
- POST /webhook_endpoints/{webhook_endpoint_id}/rotate_secret — RotateWebhookEndpointSigningSecret: Rotate Webhook Endpoint Signing Secret
- POST /webhook_endpoints/{webhook_endpoint_id}/test — TestWebhookEndpoint: Test Webhook Endpoint

## webhook_event_types
- GET /webhook_event_types — ListWebhookEventTypes: List Webhook Event Types
