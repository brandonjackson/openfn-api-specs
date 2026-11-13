# Anthropic API (claude)

<!-- derived from openapi.json by `pnpm specs index claude` — do not edit by hand -->

base: https://api.anthropic.com | auth: not declared | 385 operations in 29 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## agents
- GET /v1/agents/{agent_id}?beta=true — BetaGetAgent: Get Agent
- POST /v1/agents/{agent_id}?beta=true — BetaUpdateAgent: Update Agent
- POST /v1/agents/{agent_id}/archive?beta=true — BetaArchiveAgent: Archive Agent
- GET /v1/agents/{agent_id}/versions?beta=true — BetaListAgentVersions: List Agent Versions

## agents?beta=true
- GET /v1/agents?beta=true — BetaListAgents: List Agents
- POST /v1/agents?beta=true — BetaCreateAgent: Create Agent

## deployment_runs
- GET /v1/deployment_runs/{deployment_run_id}?beta=true — BetaGetDeploymentRun: Get Deployment Run

## deployment_runs?beta=true
- GET /v1/deployment_runs?beta=true — BetaListDeploymentRuns: List Deployment Runs

## deployments
- GET /v1/deployments/{deployment_id}?beta=true — BetaGetDeployment: Get Deployment
- POST /v1/deployments/{deployment_id}?beta=true — BetaUpdateDeployment: Update Deployment
- POST /v1/deployments/{deployment_id}/archive?beta=true — BetaArchiveDeployment: Archive Deployment
- POST /v1/deployments/{deployment_id}/pause?beta=true — BetaPauseDeployment: Pause Deployment
- POST /v1/deployments/{deployment_id}/unpause?beta=true — BetaUnpauseDeployment: Unpause Deployment
- POST /v1/deployments/{deployment_id}/run?beta=true — BetaRunDeploymentNow: Run Deployment Now

## deployments?beta=true
- GET /v1/deployments?beta=true — BetaListDeployments: List Deployments
- POST /v1/deployments?beta=true — BetaCreateDeployment: Create Deployment

## dreams
- GET /v1/dreams/{dream_id}?beta=true — BetaGetDream: Get a Dream
- POST /v1/dreams/{dream_id}/cancel?beta=true — BetaCancelDream: Cancel a Dream
- POST /v1/dreams/{dream_id}/archive?beta=true — BetaArchiveDream: Archive a Dream

## dreams?beta=true
- GET /v1/dreams?beta=true — BetaListDreams: List Dreams
- POST /v1/dreams?beta=true — BetaCreateDream: Create a Dream

## environments
- GET /v1/environments/{environment_id}?beta=true — beta_get_environment_v1_environments__environment_id__get: Get Environment
- POST /v1/environments/{environment_id}?beta=true — beta_update_environment_v1_environments__environment_id__post: Update Environment
- DELETE /v1/environments/{environment_id}?beta=true — beta_delete_environment_v1_environments__environment_id__delete: Delete Environment
- POST /v1/environments/{environment_id}/archive?beta=true — beta_archive_environment_v1_environments__environment_id__archive_post: Archive Environment
- GET /v1/environments/{environment_id}/work/stats?beta=true — beta_get_environment_stats_v1_environments__environment_id__work_stats_get: Get Queue Statistics
- GET /v1/environments/{environment_id}/work/poll?beta=true — beta_poll_work_v1_environments__environment_id__work_poll_get: Poll for Work
- POST /v1/environments/{environment_id}/work/{work_id}/ack?beta=true — beta_acknowledge_work_v1_environments__environment_id__work__work_id__ack_post: Acknowledge Work
- POST /v1/environments/{environment_id}/work/{work_id}/heartbeat?beta=true — beta_record_heartbeat_v1_environments__environment_id__work__work_id__heartbeat_post: Record Heartbeat
- POST /v1/environments/{environment_id}/work/{work_id}/stop?beta=true — beta_stop_work_v1_environments__environment_id__work__work_id__stop_post: Stop Work
- GET /v1/environments/{environment_id}/work/{work_id}?beta=true — beta_get_work_v1_environments__environment_id__work__work_id__get: Get Work Item
- POST /v1/environments/{environment_id}/work/{work_id}?beta=true — beta_update_work_v1_environments__environment_id__work__work_id__post: Update Work Item
- GET /v1/environments/{environment_id}/work?beta=true — beta_list_work_v1_environments__environment_id__work_get: List Work Items

## environments?beta=true
- GET /v1/environments?beta=true — beta_list_environments_v1_environments_get: List Environments
- POST /v1/environments?beta=true — beta_create_environment_v1_environments_post: Create Environment

## files
- GET /v1/files — list_files_v1_files_get: List Files
- POST /v1/files — upload_file_v1_files_post: Upload File
- GET /v1/files/{file_id} — get_file_metadata_v1_files__file_id__get: Get File Metadata
- DELETE /v1/files/{file_id} — delete_file_v1_files__file_id__delete: Delete File
- GET /v1/files/{file_id}/content — download_file_v1_files__file_id__content_get: Download File
- GET /v1/files/{file_id}?beta=true — beta_get_file_metadata_v1_files__file_id__get: Get File Metadata
- DELETE /v1/files/{file_id}?beta=true — beta_delete_file_v1_files__file_id__delete: Delete File
- GET /v1/files/{file_id}/content?beta=true — beta_download_file_v1_files__file_id__content_get: Download File

## files?beta=true
- GET /v1/files?beta=true — beta_list_files_v1_files_get: List Files
- POST /v1/files?beta=true — beta_upload_file_v1_files_post: Upload File

## memory_stores
- GET /v1/memory_stores/{memory_store_id}/memories?beta=true — BetaListMemories: List Memories
- POST /v1/memory_stores/{memory_store_id}/memories?beta=true — BetaCreateMemory: Create a Memory
- GET /v1/memory_stores/{memory_store_id}/memories/{memory_id}?beta=true — BetaGetMemory: Retrieve a Memory
- POST /v1/memory_stores/{memory_store_id}/memories/{memory_id}?beta=true — BetaUpdateMemory: Update a Memory
- DELETE /v1/memory_stores/{memory_store_id}/memories/{memory_id}?beta=true — BetaDeleteMemory: Delete a Memory
- GET /v1/memory_stores/{memory_store_id}/memory_versions?beta=true — BetaListMemoryVersions: List Memory Versions
- GET /v1/memory_stores/{memory_store_id}/memory_versions/{memory_version_id}?beta=true — BetaGetMemoryVersion: Retrieve a Memory Version
- POST /v1/memory_stores/{memory_store_id}/memory_versions/{memory_version_id}/redact?beta=true — BetaRedactMemoryVersion: Redact a Memory Version
- GET /v1/memory_stores/{memory_store_id}?beta=true — BetaGetMemoryStore: Retrieve a Memory Store
- POST /v1/memory_stores/{memory_store_id}?beta=true — BetaUpdateMemoryStore: Update a Memory Store
- DELETE /v1/memory_stores/{memory_store_id}?beta=true — BetaDeleteMemoryStore: Delete a Memory Store
- POST /v1/memory_stores/{memory_store_id}/archive?beta=true — BetaArchiveMemoryStore: Archive a Memory Store

## memory_stores?beta=true
- GET /v1/memory_stores?beta=true — BetaListMemoryStores: List Memory Stores
- POST /v1/memory_stores?beta=true — BetaCreateMemoryStore: Create a Memory Store

## messages
- POST /v1/messages — messages_post: Create a Message
- GET /v1/messages/batches — message_batches_list: List Message Batches
- POST /v1/messages/batches — message_batches_post: Create a Message Batch
- GET /v1/messages/batches/{message_batch_id} — message_batches_retrieve: Retrieve a Message Batch
- DELETE /v1/messages/batches/{message_batch_id} — message_batches_delete: Delete a Message Batch
- POST /v1/messages/batches/{message_batch_id}/cancel — message_batches_cancel: Cancel a Message Batch
- GET /v1/messages/batches/{message_batch_id}/results — message_batches_results: Retrieve Message Batch results
- POST /v1/messages/count_tokens — messages_count_tokens_post: Count tokens in a Message
- GET /v1/messages/batches?beta=true — beta_message_batches_list: List Message Batches
- POST /v1/messages/batches?beta=true — beta_message_batches_post: Create a Message Batch
- GET /v1/messages/batches/{message_batch_id}?beta=true — beta_message_batches_retrieve: Retrieve a Message Batch
- DELETE /v1/messages/batches/{message_batch_id}?beta=true — beta_message_batches_delete: Delete a Message Batch
- POST /v1/messages/batches/{message_batch_id}/cancel?beta=true — beta_message_batches_cancel: Cancel a Message Batch
- GET /v1/messages/batches/{message_batch_id}/results?beta=true — beta_message_batches_results: Retrieve Message Batch results
- POST /v1/messages/count_tokens?beta=true — beta_messages_count_tokens_post: Count tokens in a Message

## messages?beta=true
- POST /v1/messages?beta=true — beta_messages_post: Create a Message

## models
- GET /v1/models — models_list: List Models
- GET /v1/models/{model_id} — models_get: Get a Model
- GET /v1/models/{model_id}?beta=true — beta_models_get: Get a Model

## models?beta=true
- GET /v1/models?beta=true — beta_models_list: List Models

## organizations
- GET /v1/organizations/telemetry_destinations?beta=true — BetaListTelemetryDestinations: List Telemetry Destinations
- POST /v1/organizations/telemetry_destinations?beta=true — BetaCreateTelemetryDestination: Create a Telemetry Destination
- GET /v1/organizations/telemetry_destinations/{destination_id}?beta=true — BetaGetTelemetryDestination: Retrieve a Telemetry Destination
- POST /v1/organizations/telemetry_destinations/{destination_id}?beta=true — BetaUpdateTelemetryDestination: Update a Telemetry Destination
- DELETE /v1/organizations/telemetry_destinations/{destination_id}?beta=true — BetaDeleteTelemetryDestination: Delete a Telemetry Destination
- GET /v1/organizations/telemetry_destinations/{destination_id}/workspaces?beta=true — BetaListTelemetryDestinationWorkspaces: List Telemetry Destination Workspaces
- POST /v1/organizations/telemetry_destinations/{destination_id}/workspaces/{workspace_id}?beta=true — BetaAddTelemetryDestinationWorkspace: Add a Telemetry Destination Workspace
- DELETE /v1/organizations/telemetry_destinations/{destination_id}/workspaces/{workspace_id}?beta=true — BetaRemoveTelemetryDestinationWorkspace: Remove a Telemetry Destination Workspace
- POST /v1/organizations/telemetry_destinations/{destination_id}/test?beta=true — BetaTestTelemetryDestination: Test a Telemetry Destination
- GET /v1/organizations/claude_tag/slack_channels?beta=true — BetaListSlackChannels: List Slack Channels
- POST /v1/organizations/claude_tag/slack_channels?beta=true — BetaCreateSlackChannel: Set Up Slack Channel
- GET /v1/organizations/claude_tag/slack_channels/{id}?beta=true — BetaGetSlackChannel: Get Slack Channel
- POST /v1/organizations/claude_tag/slack_channels/{id}?beta=true — BetaUpdateSlackChannel: Update Slack Channel
- DELETE /v1/organizations/claude_tag/slack_channels/{id}?beta=true — BetaDeleteSlackChannel: Remove Slack Channel
- GET /v1/organizations/claude_tag/slack_workspaces?beta=true — BetaListSlackWorkspaces: List Slack Workspaces
- GET /v1/organizations/claude_tag/slack_workspaces/{id}?beta=true — BetaGetSlackWorkspace: Get Slack Workspace
- POST /v1/organizations/claude_tag/slack_workspaces/{id}?beta=true — BetaUpdateSlackWorkspace: Update Slack Workspace
- GET /v1/organizations/claude_tag/bundles?beta=true — BetaListBundles: List Bundles
- GET /v1/organizations/claude_tag/bundles/{bundle_id}?beta=true — BetaGetBundle: Get Bundle
- GET /v1/organizations/claude_tag/bundles/{bundle_id}/targets?beta=true — BetaListBundleTargets: List Bundle Targets
- POST /v1/organizations/claude_tag/bundles/{bundle_id}/targets?beta=true — BetaCreateBundleTarget: Attach Bundle
- GET /v1/organizations/claude_tag/bundles/{bundle_id}/targets/{target_id}?beta=true — BetaGetBundleTarget: Get Bundle Target
- DELETE /v1/organizations/claude_tag/bundles/{bundle_id}/targets/{target_id}?beta=true — BetaDeleteBundleTarget: Detach Bundle
- GET /v1/organizations/invites?beta=true — beta_list_invites_v1_organizations_invites_get: List Invites
- POST /v1/organizations/invites?beta=true — beta_create_invite_v1_organizations_invites_post: Create Invite
- GET /v1/organizations/invites/{invite_id}?beta=true — beta_get_invite_v1_organizations_invites__invite_id__get: Get Invite
- DELETE /v1/organizations/invites/{invite_id}?beta=true — beta_delete_invite_v1_organizations_invites__invite_id__delete: Delete Invite
- GET /v1/organizations/users/{user_id}?beta=true — beta_get_user_v1_organizations_users__user_id__get: Get User
- POST /v1/organizations/users/{user_id}?beta=true — beta_update_user_v1_organizations_users__user_id__post: Update User
- DELETE /v1/organizations/users/{user_id}?beta=true — beta_remove_user_v1_organizations_users__user_id__delete: Remove User
- GET /v1/organizations/users?beta=true — beta_list_users_v1_organizations_users_get: List Users
- POST /v1/organizations/users/{user_id}/sign_out?beta=true — beta_sign_out_user_v1_organizations_users__user_id__sign_out_post: Sign Out User
- GET /v1/organizations/workspaces/{workspace_id}?beta=true — beta_get_workspace_v1_organizations_workspaces__workspace_id__get: Get Workspace
- POST /v1/organizations/workspaces/{workspace_id}?beta=true — beta_update_workspace_v1_organizations_workspaces__workspace_id__post: Update Workspace
- GET /v1/organizations/workspaces?beta=true — beta_list_workspaces_v1_organizations_workspaces_get: List Workspaces
- POST /v1/organizations/workspaces?beta=true — beta_create_workspace_v1_organizations_workspaces_post: Create Workspace
- POST /v1/organizations/workspaces/{workspace_id}/archive?beta=true — beta_archive_workspace_v1_organizations_workspaces__workspace_id__archive_post: Archive Workspace
- GET /v1/organizations/workspaces/{workspace_id}/members/{user_id}?beta=true — beta_get_workspace_member_v1_organizations_workspaces__workspace_id__members__user_id__get: Get Workspace Member
- POST /v1/organizations/workspaces/{workspace_id}/members/{user_id}?beta=true — beta_update_workspace_member_v1_organizations_workspaces__workspace_id__members__user_id__post: Update Workspace Member
- DELETE /v1/organizations/workspaces/{workspace_id}/members/{user_id}?beta=true — beta_delete_workspace_member_v1_organizations_workspaces__workspace_id__members__user_id__delete: Delete Workspace Member
- GET /v1/organizations/workspaces/{workspace_id}/members?beta=true — beta_list_workspace_members_v1_organizations_workspaces__workspace_id__members_get: List Workspace Members
- POST /v1/organizations/workspaces/{workspace_id}/members?beta=true — beta_create_workspace_member_v1_organizations_workspaces__workspace_id__members_post: Create Workspace Member
- GET /v1/organizations/api_keys/{api_key_id}?beta=true — beta_get_api_key_v1_organizations_api_keys__api_key_id__get: Get API Key
- POST /v1/organizations/api_keys/{api_key_id}?beta=true — beta_update_api_key_v1_organizations_api_keys__api_key_id__post: Update API Key
- GET /v1/organizations/api_keys?beta=true — beta_list_api_keys_v1_organizations_api_keys_get: List API Keys
- GET /v1/organizations/usage_report/messages?beta=true — beta_get_messages_usage_report_v1_organizations_usage_report_messages_get: Get Messages Usage Report
- GET /v1/organizations/usage_report/claude_code?beta=true — beta_get_claude_code_usage_report_v1_organizations_usage_report_claude_code_get: Get Claude Code Usage Report
- GET /v1/organizations/cost_report?beta=true — beta_get_cost_report_v1_organizations_cost_report_get: Get Cost Report
- GET /v1/organizations/me?beta=true — beta_get_current_organization_v1_organizations_me_get: Get Current Organization
- GET /v1/organizations/external_keys?beta=true — beta_list_external_keys_v1_organizations_external_keys_get: List External Keys
- POST /v1/organizations/external_keys?beta=true — beta_create_external_key_v1_organizations_external_keys_post: Create External Key
- GET /v1/organizations/external_keys/{external_key_id}?beta=true — beta_get_external_key_v1_organizations_external_keys__external_key_id__get: Get External Key
- POST /v1/organizations/external_keys/{external_key_id}?beta=true — beta_update_external_key_v1_organizations_external_keys__external_key_id__post: Update External Key
- DELETE /v1/organizations/external_keys/{external_key_id}?beta=true — beta_delete_external_key_v1_organizations_external_keys__external_key_id__delete: Delete External Key
- POST /v1/organizations/external_keys/{external_key_id}/validate?beta=true — beta_validate_external_key_v1_organizations_external_keys__external_key_id__validate_post: Validate External Key
- GET /v1/organizations/compliance_settings?beta=true — beta_get_compliance_settings_v1_organizations_compliance_settings_get: Get Compliance Settings
- POST /v1/organizations/compliance_settings?beta=true — beta_update_compliance_settings_v1_organizations_compliance_settings_post: Update Compliance Settings
- GET /v1/organizations/rate_limits?beta=true — beta_get_org_rate_limits_v1_organizations_rate_limits_get: List Organization Rate Limits
- GET /v1/organizations/workspaces/{workspace_id}/rate_limits?beta=true — beta_get_workspace_rate_limits_v1_organizations_workspaces__workspace_id__rate_limits_get: List Workspace Rate Limits
- POST /v1/organizations/workspaces/{workspace_id}/rate_limits/{rate_limit_id}?beta=true — beta_update_workspace_rate_limits_v1_organizations_workspaces__workspace_id__rate_limits__rate_limit_id__post: Set Workspace Rate Limits
- GET /v1/organizations/spend_limits/effective?beta=true — beta_list_effective_spend_limits_v1_organizations_spend_limits_effective_get: List Effective Spend Limits
- GET /v1/organizations/spend_limits?beta=true — beta_list_spend_limits_v1_organizations_spend_limits_get: List Spend Limits
- POST /v1/organizations/spend_limits?beta=true — beta_set_spend_limit_v1_organizations_spend_limits_post: Set Spend Limit
- GET /v1/organizations/spend_limits/{spend_limit_id}?beta=true — beta_get_spend_limit_v1_organizations_spend_limits__spend_limit_id__get: Get Spend Limit
- DELETE /v1/organizations/spend_limits/{spend_limit_id}?beta=true — beta_delete_spend_limit_v1_organizations_spend_limits__spend_limit_id__delete: Delete Spend Limit
- GET /v1/organizations/service_accounts?beta=true — beta_list_service_accounts_v1_organizations_service_accounts_get: List Service Accounts
- POST /v1/organizations/service_accounts?beta=true — beta_create_service_account_v1_organizations_service_accounts_post: Create Service Account
- GET /v1/organizations/service_accounts/{service_account_id}?beta=true — beta_get_service_account_v1_organizations_service_accounts__service_account_id__get: Get Service Account
- POST /v1/organizations/service_accounts/{service_account_id}?beta=true — beta_update_service_account_v1_organizations_service_accounts__service_account_id__post: Update Service Account
- POST /v1/organizations/service_accounts/{service_account_id}/archive?beta=true — beta_archive_service_account_v1_organizations_service_accounts__service_account_id__archive_post: Archive Service Account
- GET /v1/organizations/workspaces/{workspace_id}/service_accounts?beta=true — beta_list_service_account_workspace_members_v1_organizations_workspaces__workspace_id__service_accounts_get: List Service Account Workspace Members
- POST /v1/organizations/workspaces/{workspace_id}/service_accounts?beta=true — beta_create_service_account_workspace_member_v1_organizations_workspaces__workspace_id__service_accounts_post: Create Service Account Workspace Member
- GET /v1/organizations/workspaces/{workspace_id}/service_accounts/{service_account_id}?beta=true — beta_get_service_account_workspace_member_v1_organizations_workspaces__workspace_id__service_accounts__service_account_id__get: Get Service Account Workspace Member
- POST /v1/organizations/workspaces/{workspace_id}/service_accounts/{service_account_id}?beta=true — beta_update_service_account_workspace_member_v1_organizations_workspaces__workspace_id__service_accounts__service_account_id__post: Update Service Account Workspace Member
- DELETE /v1/organizations/workspaces/{workspace_id}/service_accounts/{service_account_id}?beta=true — beta_delete_service_account_workspace_member_v1_organizations_workspaces__workspace_id__service_accounts__service_account_id__delete: Delete Service Account Workspace Member
- GET /v1/organizations/service_accounts/{service_account_id}/workspaces?beta=true — beta_list_workspaces_for_service_account_v1_organizations_service_accounts__service_account_id__workspaces_get: List Workspaces For Service Account
- POST /v1/organizations/service_accounts/{service_account_id}/workspaces?beta=true — beta_add_workspace_to_service_account_v1_organizations_service_accounts__service_account_id__workspaces_post: Add Workspace To Service Account
- DELETE /v1/organizations/service_accounts/{service_account_id}/workspaces/{workspace_id}?beta=true — beta_remove_workspace_from_service_account_v1_organizations_service_accounts__service_account_id__workspaces__workspace_id__delete: Remove Workspace From Service Account
- GET /v1/organizations/federation_issuers?beta=true — beta_list_federation_issuers_v1_organizations_federation_issuers_get: List Federation Issuers
- POST /v1/organizations/federation_issuers?beta=true — beta_create_federation_issuer_v1_organizations_federation_issuers_post: Create Federation Issuer
- GET /v1/organizations/federation_issuers/{federation_issuer_id}?beta=true — beta_get_federation_issuer_v1_organizations_federation_issuers__federation_issuer_id__get: Get Federation Issuer
- POST /v1/organizations/federation_issuers/{federation_issuer_id}?beta=true — beta_update_federation_issuer_v1_organizations_federation_issuers__federation_issuer_id__post: Update Federation Issuer
- POST /v1/organizations/federation_issuers/{federation_issuer_id}/archive?beta=true — beta_archive_federation_issuer_v1_organizations_federation_issuers__federation_issuer_id__archive_post: Archive Federation Issuer
- GET /v1/organizations/federation_rules?beta=true — beta_list_federation_rules_v1_organizations_federation_rules_get: List Federation Rules
- POST /v1/organizations/federation_rules?beta=true — beta_create_federation_rule_v1_organizations_federation_rules_post: Create Federation Rule
- GET /v1/organizations/federation_rules/{federation_rule_id}?beta=true — beta_get_federation_rule_v1_organizations_federation_rules__federation_rule_id__get: Get Federation Rule
- POST /v1/organizations/federation_rules/{federation_rule_id}?beta=true — beta_update_federation_rule_v1_organizations_federation_rules__federation_rule_id__post: Update Federation Rule
- POST /v1/organizations/federation_rules/{federation_rule_id}/archive?beta=true — beta_archive_federation_rule_v1_organizations_federation_rules__federation_rule_id__archive_post: Archive Federation Rule
- GET /v1/organizations/federation_rules/{federation_rule_id}/workspaces?beta=true — beta_list_federation_rule_workspaces_v1_organizations_federation_rules__federation_rule_id__workspaces_get: List Federation Rule Workspaces
- POST /v1/organizations/federation_rules/{federation_rule_id}/workspaces?beta=true — beta_add_federation_rule_workspace_v1_organizations_federation_rules__federation_rule_id__workspaces_post: Add Federation Rule Workspace
- DELETE /v1/organizations/federation_rules/{federation_rule_id}/workspaces/{workspace_id}?beta=true — beta_remove_federation_rule_workspace_v1_organizations_federation_rules__federation_rule_id__workspaces__workspace_id__delete: Remove Federation Rule Workspace
- GET /v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id}?beta=true — beta_get_spend_limit_increase_request_v1_organizations_spend_limit_increase_requests__spend_limit_increase_request_id__get: Get Spend Limit Increase Request
- POST /v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id}/deny?beta=true — beta_deny_spend_limit_increase_request_v1_organizations_spend_limit_increase_requests__spend_limit_increase_request_id__deny_post: Deny Spend Limit Increase Request
- POST /v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id}/approve?beta=true — beta_approve_spend_limit_increase_request_v1_organizations_spend_limit_increase_requests__spend_limit_increase_request_id__approve_post: Approve Spend Limit Increase Request
- GET /v1/organizations/spend_limit_increase_requests?beta=true — beta_list_spend_limit_increase_requests_v1_organizations_spend_limit_increase_requests_get: List Spend Limit Increase Requests
- GET /v1/organizations/tunnels?beta=true — beta_list_tunnels_v1_organizations_tunnels_get: List Tunnels (deprecated)
- GET /v1/organizations/tunnels/{tunnel_id}?beta=true — beta_get_tunnel_v1_organizations_tunnels__tunnel_id__get: Get Tunnel (deprecated)
- POST /v1/organizations/tunnels/{tunnel_id}/archive?beta=true — beta_archive_tunnel_v1_organizations_tunnels__tunnel_id__archive_post: Archive Tunnel (deprecated)
- POST /v1/organizations/tunnels/{tunnel_id}/reveal_token?beta=true — beta_reveal_tunnel_token_v1_organizations_tunnels__tunnel_id__reveal_token_post: Reveal Tunnel Token (deprecated)
- POST /v1/organizations/tunnels/{tunnel_id}/rotate_token?beta=true — beta_rotate_tunnel_token_v1_organizations_tunnels__tunnel_id__rotate_token_post: Rotate Tunnel Token (deprecated)
- GET /v1/organizations/tunnels/{tunnel_id}/certificates?beta=true — beta_list_certificates_v1_organizations_tunnels__tunnel_id__certificates_get: List Tunnel Certificates (deprecated)
- POST /v1/organizations/tunnels/{tunnel_id}/certificates?beta=true — beta_create_certificate_v1_organizations_tunnels__tunnel_id__certificates_post: Create Tunnel Certificate (deprecated)
- GET /v1/organizations/tunnels/{tunnel_id}/certificates/{certificate_id}?beta=true — beta_get_certificate_v1_organizations_tunnels__tunnel_id__certificates__certificate_id__get: Get Tunnel Certificate (deprecated)
- POST /v1/organizations/tunnels/{tunnel_id}/certificates/{certificate_id}/archive?beta=true — beta_archive_certificate_v1_organizations_tunnels__tunnel_id__certificates__certificate_id__archive_post: Archive Tunnel Certificate (deprecated)
- GET /v1/organizations/rbac_groups?beta=true — beta_list_rbac_groups_v1_organizations_rbac_groups_get: List RBAC Groups
- POST /v1/organizations/rbac_groups?beta=true — beta_create_rbac_group_v1_organizations_rbac_groups_post: Create RBAC Group
- GET /v1/organizations/rbac_groups/{rbac_group_id}?beta=true — beta_get_rbac_group_v1_organizations_rbac_groups__group_id__get: Get RBAC Group
- POST /v1/organizations/rbac_groups/{rbac_group_id}?beta=true — beta_update_rbac_group_v1_organizations_rbac_groups__group_id__post: Update RBAC Group
- DELETE /v1/organizations/rbac_groups/{rbac_group_id}?beta=true — beta_delete_rbac_group_v1_organizations_rbac_groups__group_id__delete: Delete RBAC Group
- DELETE /v1/organizations/rbac_groups/{rbac_group_id}/members/{user_id}?beta=true — beta_remove_rbac_group_member_v1_organizations_rbac_groups__group_id__members__user_id__delete: Remove RBAC Group Member
- GET /v1/organizations/rbac_groups/{rbac_group_id}/members?beta=true — beta_list_rbac_group_members_v1_organizations_rbac_groups__group_id__members_get: List RBAC Group Members
- POST /v1/organizations/rbac_groups/{rbac_group_id}/members?beta=true — beta_add_rbac_group_member_v1_organizations_rbac_groups__group_id__members_post: Add RBAC Group Member
- GET /v1/organizations/rbac_roles?beta=true — beta_list_rbac_roles_v1_organizations_rbac_roles_get: List RBAC Roles
- GET /v1/organizations/rbac_roles/{rbac_role_id}?beta=true — beta_get_rbac_role_v1_organizations_rbac_roles__role_id__get: Get RBAC Role
- GET /v1/organizations/rbac_roles/{rbac_role_id}/permissions?beta=true — beta_list_rbac_role_permissions_v1_organizations_rbac_roles__role_id__permissions_get: List RBAC Role Permissions
- GET /v1/organizations/plugins?beta=true — beta_list_plugins_v1_organizations_plugins_get: List Plugins
- POST /v1/organizations/plugins?beta=true — beta_create_plugin_v1_organizations_plugins_post: Create Plugin
- GET /v1/organizations/plugins/{plugin_id}?beta=true — beta_get_plugin_v1_organizations_plugins__plugin_id__get: Get Plugin
- POST /v1/organizations/plugins/{plugin_id}?beta=true — beta_update_plugin_v1_organizations_plugins__plugin_id__post: Update Plugin
- DELETE /v1/organizations/plugins/{plugin_id}?beta=true — beta_delete_plugin_v1_organizations_plugins__plugin_id__delete: Delete Plugin
- GET /v1/organizations/plugins/{plugin_id}/installation_settings?beta=true — beta_list_plugin_installation_settings_v1_organizations_plugins__plugin_id__installation_settings_get: List Plugin Installation Settings
- GET /v1/organizations/plugins/{plugin_id}/shares?beta=true — beta_list_plugin_shares_v1_organizations_plugins__plugin_id__shares_get: List Plugin Shares
- GET /v1/organizations/plugins/{plugin_id}/versions?beta=true — beta_list_plugin_versions_v1_organizations_plugins__plugin_id__versions_get: List Plugin Versions
- POST /v1/organizations/plugins/{plugin_id}/versions?beta=true — beta_create_plugin_version_v1_organizations_plugins__plugin_id__versions_post: Create Plugin Version
- GET /v1/organizations/plugins/{plugin_id}/versions/{version}?beta=true — beta_get_plugin_version_v1_organizations_plugins__plugin_id__versions__version__get: Get Plugin Version
- GET /v1/organizations/plugins/{plugin_id}/versions/{version}/content?beta=true — beta_get_plugin_version_content_v1_organizations_plugins__plugin_id__versions__version__content_get: Download Plugin Version Archive
- POST /v1/organizations/plugin_marketplaces/validate_repository?beta=true — beta_validate_plugin_marketplace_repository_v1_organizations_plugin_marketplaces_validate_repository_post: Validate Plugin Marketplace Repository
- POST /v1/organizations/plugin_marketplaces/validate_archive?beta=true — beta_validate_plugin_marketplace_archive_v1_organizations_plugin_marketplaces_validate_archive_post: Validate Plugin Marketplace Archive
- POST /v1/organizations/plugins/{plugin_id}/installation_settings/{target}?beta=true — beta_set_plugin_installation_setting_v1_organizations_plugins__plugin_id__installation_settings__target__post: Set Plugin Installation Setting
- DELETE /v1/organizations/plugins/{plugin_id}/installation_settings/{target}?beta=true — beta_remove_plugin_installation_setting_v1_organizations_plugins__plugin_id__installation_settings__target__delete: Remove Plugin Installation Setting
- GET /v1/organizations/plugin_marketplaces?beta=true — beta_list_plugin_marketplaces_v1_organizations_plugin_marketplaces_get: List Plugin Marketplaces
- GET /v1/organizations/plugin_marketplaces/{marketplace_id}?beta=true — beta_get_plugin_marketplace_v1_organizations_plugin_marketplaces__marketplace_id__get: Get Plugin Marketplace
- POST /v1/organizations/plugin_marketplaces/{marketplace_id}?beta=true — beta_update_plugin_marketplace_v1_organizations_plugin_marketplaces__marketplace_id__post: Update Plugin Marketplace
- GET /v1/organizations/webhooks?beta=true — beta_list_organization_webhook_endpoints_v1_organizations_webhooks_get: List Organization Webhook Endpoints
- POST /v1/organizations/webhooks?beta=true — beta_create_organization_webhook_endpoint_v1_organizations_webhooks_post: Create Organization Webhook Endpoint
- GET /v1/organizations/webhooks/{webhook_endpoint_id}?beta=true — beta_get_organization_webhook_endpoint_v1_organizations_webhooks__webhook_endpoint_id__get: Get Organization Webhook Endpoint
- POST /v1/organizations/webhooks/{webhook_endpoint_id}?beta=true — beta_update_organization_webhook_endpoint_v1_organizations_webhooks__webhook_endpoint_id__post: Update Organization Webhook Endpoint
- DELETE /v1/organizations/webhooks/{webhook_endpoint_id}?beta=true — beta_delete_organization_webhook_endpoint_v1_organizations_webhooks__webhook_endpoint_id__delete: Delete Organization Webhook Endpoint
- POST /v1/organizations/webhooks/{webhook_endpoint_id}/regenerate_signing_secret?beta=true — beta_regenerate_organization_webhook_endpoint_signing_secret_v1_organizations_webhooks__webhook_endpoint_id__regenerate_signing_secret_post: Regenerate Organization Webhook Endpoint Signing Secret
- GET /v1/organizations/analytics/user_usage_report?beta=true — beta_get_user_usage_report_v1_organizations_analytics_user_usage_report_get: Get Per-User Token Usage
- GET /v1/organizations/analytics/user_cost_report?beta=true — beta_get_user_cost_report_v1_organizations_analytics_user_cost_report_get: Get Per-User Cost
- GET /v1/organizations/analytics/usage_report?beta=true — beta_get_usage_report_v1_organizations_analytics_usage_report_get: Get Token Usage Over Time
- GET /v1/organizations/analytics/cost_report?beta=true — beta_get_cost_report_v1_organizations_analytics_cost_report_get: Get Cost Over Time
- GET /v1/organizations/analytics/usage?beta=true — beta_get_usage_v1_organizations_analytics_usage_get: Get Token Usage By Dimension
- GET /v1/organizations/analytics/cost?beta=true — beta_get_cost_v1_organizations_analytics_cost_get: Get Cost By Dimension
- GET /v1/organizations/analytics/summaries?beta=true — beta_get_summaries_v1_organizations_analytics_summaries_get: Get Activity Summaries
- GET /v1/organizations/analytics/users?beta=true — beta_get_users_v1_organizations_analytics_users_get: List User Activity
- GET /v1/organizations/analytics/apps/chat/projects?beta=true — beta_get_projects_v1_organizations_analytics_apps_chat_projects_get: Get Chat Project Usage
- GET /v1/organizations/analytics/skills?beta=true — beta_get_skills_v1_organizations_analytics_skills_get: Get Skill Usage
- GET /v1/organizations/analytics/connectors?beta=true — beta_get_connectors_v1_organizations_analytics_connectors_get: Get Connector Usage
- GET /v1/organizations/analytics/plugins?beta=true — beta_get_plugins_v1_organizations_analytics_plugins_get: Get Plugin Usage
- GET /v1/organizations/analytics/artifacts?beta=true — beta_get_artifacts_v1_organizations_analytics_artifacts_get: Get Artifact Activity
- GET /v1/organizations/invites — list_invites_v1_organizations_invites_get: List Invites
- POST /v1/organizations/invites — create_invite_v1_organizations_invites_post: Create Invite
- GET /v1/organizations/invites/{invite_id} — get_invite_v1_organizations_invites__invite_id__get: Get Invite
- DELETE /v1/organizations/invites/{invite_id} — delete_invite_v1_organizations_invites__invite_id__delete: Delete Invite
- GET /v1/organizations/users/{user_id} — get_user_v1_organizations_users__user_id__get: Get User
- POST /v1/organizations/users/{user_id} — update_user_v1_organizations_users__user_id__post: Update User
- DELETE /v1/organizations/users/{user_id} — remove_user_v1_organizations_users__user_id__delete: Remove User
- GET /v1/organizations/users — list_users_v1_organizations_users_get: List Users
- GET /v1/organizations/workspaces/{workspace_id} — get_workspace_v1_organizations_workspaces__workspace_id__get: Get Workspace
- POST /v1/organizations/workspaces/{workspace_id} — update_workspace_v1_organizations_workspaces__workspace_id__post: Update Workspace
- GET /v1/organizations/workspaces — list_workspaces_v1_organizations_workspaces_get: List Workspaces
- POST /v1/organizations/workspaces — create_workspace_v1_organizations_workspaces_post: Create Workspace
- POST /v1/organizations/workspaces/{workspace_id}/archive — archive_workspace_v1_organizations_workspaces__workspace_id__archive_post: Archive Workspace
- GET /v1/organizations/workspaces/{workspace_id}/members/{user_id} — get_workspace_member_v1_organizations_workspaces__workspace_id__members__user_id__get: Get Workspace Member
- POST /v1/organizations/workspaces/{workspace_id}/members/{user_id} — update_workspace_member_v1_organizations_workspaces__workspace_id__members__user_id__post: Update Workspace Member
- DELETE /v1/organizations/workspaces/{workspace_id}/members/{user_id} — delete_workspace_member_v1_organizations_workspaces__workspace_id__members__user_id__delete: Delete Workspace Member
- GET /v1/organizations/workspaces/{workspace_id}/members — list_workspace_members_v1_organizations_workspaces__workspace_id__members_get: List Workspace Members
- POST /v1/organizations/workspaces/{workspace_id}/members — create_workspace_member_v1_organizations_workspaces__workspace_id__members_post: Create Workspace Member
- GET /v1/organizations/api_keys/{api_key_id} — get_api_key_v1_organizations_api_keys__api_key_id__get: Get API Key
- POST /v1/organizations/api_keys/{api_key_id} — update_api_key_v1_organizations_api_keys__api_key_id__post: Update API Key
- GET /v1/organizations/api_keys — list_api_keys_v1_organizations_api_keys_get: List API Keys
- GET /v1/organizations/me — get_current_organization_v1_organizations_me_get: Get Current Organization
- GET /v1/organizations/external_keys — list_external_keys_v1_organizations_external_keys_get: List External Keys
- POST /v1/organizations/external_keys — create_external_key_v1_organizations_external_keys_post: Create External Key
- GET /v1/organizations/external_keys/{external_key_id} — get_external_key_v1_organizations_external_keys__external_key_id__get: Get External Key
- POST /v1/organizations/external_keys/{external_key_id} — update_external_key_v1_organizations_external_keys__external_key_id__post: Update External Key
- DELETE /v1/organizations/external_keys/{external_key_id} — delete_external_key_v1_organizations_external_keys__external_key_id__delete: Delete External Key
- POST /v1/organizations/external_keys/{external_key_id}/validate — validate_external_key_v1_organizations_external_keys__external_key_id__validate_post: Validate External Key
- GET /v1/organizations/compliance_settings — get_compliance_settings_v1_organizations_compliance_settings_get: Get Compliance Settings
- POST /v1/organizations/compliance_settings — update_compliance_settings_v1_organizations_compliance_settings_post: Update Compliance Settings
- GET /v1/organizations/rate_limits — get_org_rate_limits_v1_organizations_rate_limits_get: List Organization Rate Limits
- GET /v1/organizations/workspaces/{workspace_id}/rate_limits — get_workspace_rate_limits_v1_organizations_workspaces__workspace_id__rate_limits_get: List Workspace Rate Limits
- POST /v1/organizations/workspaces/{workspace_id}/rate_limits/{rate_limit_id} — update_workspace_rate_limits_v1_organizations_workspaces__workspace_id__rate_limits__rate_limit_id__post: Set Workspace Rate Limits
- GET /v1/organizations/spend_limits/effective — list_effective_spend_limits_v1_organizations_spend_limits_effective_get: List Effective Spend Limits
- GET /v1/organizations/service_accounts — list_service_accounts_v1_organizations_service_accounts_get: List Service Accounts
- POST /v1/organizations/service_accounts — create_service_account_v1_organizations_service_accounts_post: Create Service Account
- GET /v1/organizations/service_accounts/{service_account_id} — get_service_account_v1_organizations_service_accounts__service_account_id__get: Get Service Account
- POST /v1/organizations/service_accounts/{service_account_id} — update_service_account_v1_organizations_service_accounts__service_account_id__post: Update Service Account
- POST /v1/organizations/service_accounts/{service_account_id}/archive — archive_service_account_v1_organizations_service_accounts__service_account_id__archive_post: Archive Service Account
- GET /v1/organizations/workspaces/{workspace_id}/service_accounts — list_service_account_workspace_members_v1_organizations_workspaces__workspace_id__service_accounts_get: List Service Account Workspace Members
- POST /v1/organizations/workspaces/{workspace_id}/service_accounts — create_service_account_workspace_member_v1_organizations_workspaces__workspace_id__service_accounts_post: Create Service Account Workspace Member
- GET /v1/organizations/workspaces/{workspace_id}/service_accounts/{service_account_id} — get_service_account_workspace_member_v1_organizations_workspaces__workspace_id__service_accounts__service_account_id__get: Get Service Account Workspace Member
- POST /v1/organizations/workspaces/{workspace_id}/service_accounts/{service_account_id} — update_service_account_workspace_member_v1_organizations_workspaces__workspace_id__service_accounts__service_account_id__post: Update Service Account Workspace Member
- DELETE /v1/organizations/workspaces/{workspace_id}/service_accounts/{service_account_id} — delete_service_account_workspace_member_v1_organizations_workspaces__workspace_id__service_accounts__service_account_id__delete: Delete Service Account Workspace Member
- GET /v1/organizations/service_accounts/{service_account_id}/workspaces — list_workspaces_for_service_account_v1_organizations_service_accounts__service_account_id__workspaces_get: List Workspaces For Service Account
- POST /v1/organizations/service_accounts/{service_account_id}/workspaces — add_workspace_to_service_account_v1_organizations_service_accounts__service_account_id__workspaces_post: Add Workspace To Service Account
- DELETE /v1/organizations/service_accounts/{service_account_id}/workspaces/{workspace_id} — remove_workspace_from_service_account_v1_organizations_service_accounts__service_account_id__workspaces__workspace_id__delete: Remove Workspace From Service Account
- GET /v1/organizations/federation_issuers — list_federation_issuers_v1_organizations_federation_issuers_get: List Federation Issuers
- POST /v1/organizations/federation_issuers — create_federation_issuer_v1_organizations_federation_issuers_post: Create Federation Issuer
- GET /v1/organizations/federation_issuers/{federation_issuer_id} — get_federation_issuer_v1_organizations_federation_issuers__federation_issuer_id__get: Get Federation Issuer
- POST /v1/organizations/federation_issuers/{federation_issuer_id} — update_federation_issuer_v1_organizations_federation_issuers__federation_issuer_id__post: Update Federation Issuer
- POST /v1/organizations/federation_issuers/{federation_issuer_id}/archive — archive_federation_issuer_v1_organizations_federation_issuers__federation_issuer_id__archive_post: Archive Federation Issuer
- GET /v1/organizations/federation_rules — list_federation_rules_v1_organizations_federation_rules_get: List Federation Rules
- POST /v1/organizations/federation_rules — create_federation_rule_v1_organizations_federation_rules_post: Create Federation Rule
- GET /v1/organizations/federation_rules/{federation_rule_id} — get_federation_rule_v1_organizations_federation_rules__federation_rule_id__get: Get Federation Rule
- POST /v1/organizations/federation_rules/{federation_rule_id} — update_federation_rule_v1_organizations_federation_rules__federation_rule_id__post: Update Federation Rule
- POST /v1/organizations/federation_rules/{federation_rule_id}/archive — archive_federation_rule_v1_organizations_federation_rules__federation_rule_id__archive_post: Archive Federation Rule
- GET /v1/organizations/federation_rules/{federation_rule_id}/workspaces — list_federation_rule_workspaces_v1_organizations_federation_rules__federation_rule_id__workspaces_get: List Federation Rule Workspaces
- POST /v1/organizations/federation_rules/{federation_rule_id}/workspaces — add_federation_rule_workspace_v1_organizations_federation_rules__federation_rule_id__workspaces_post: Add Federation Rule Workspace
- DELETE /v1/organizations/federation_rules/{federation_rule_id}/workspaces/{workspace_id} — remove_federation_rule_workspace_v1_organizations_federation_rules__federation_rule_id__workspaces__workspace_id__delete: Remove Federation Rule Workspace
- GET /v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id} — get_spend_limit_increase_request_v1_organizations_spend_limit_increase_requests__spend_limit_increase_request_id__get: Get Spend Limit Increase Request
- POST /v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id}/deny — deny_spend_limit_increase_request_v1_organizations_spend_limit_increase_requests__spend_limit_increase_request_id__deny_post: Deny Spend Limit Increase Request
- POST /v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id}/approve — approve_spend_limit_increase_request_v1_organizations_spend_limit_increase_requests__spend_limit_increase_request_id__approve_post: Approve Spend Limit Increase Request
- GET /v1/organizations/spend_limit_increase_requests — list_spend_limit_increase_requests_v1_organizations_spend_limit_increase_requests_get: List Spend Limit Increase Requests
- GET /v1/organizations/rbac_groups — list_rbac_groups_v1_organizations_rbac_groups_get: List RBAC Groups
- POST /v1/organizations/rbac_groups — create_rbac_group_v1_organizations_rbac_groups_post: Create RBAC Group
- GET /v1/organizations/rbac_groups/{rbac_group_id} — get_rbac_group_v1_organizations_rbac_groups__group_id__get: Get RBAC Group
- POST /v1/organizations/rbac_groups/{rbac_group_id} — update_rbac_group_v1_organizations_rbac_groups__group_id__post: Update RBAC Group
- DELETE /v1/organizations/rbac_groups/{rbac_group_id} — delete_rbac_group_v1_organizations_rbac_groups__group_id__delete: Delete RBAC Group
- DELETE /v1/organizations/rbac_groups/{rbac_group_id}/members/{user_id} — remove_rbac_group_member_v1_organizations_rbac_groups__group_id__members__user_id__delete: Remove RBAC Group Member
- GET /v1/organizations/rbac_groups/{rbac_group_id}/members — list_rbac_group_members_v1_organizations_rbac_groups__group_id__members_get: List RBAC Group Members
- POST /v1/organizations/rbac_groups/{rbac_group_id}/members — add_rbac_group_member_v1_organizations_rbac_groups__group_id__members_post: Add RBAC Group Member
- GET /v1/organizations/rbac_roles — list_rbac_roles_v1_organizations_rbac_roles_get: List RBAC Roles
- GET /v1/organizations/rbac_roles/{rbac_role_id} — get_rbac_role_v1_organizations_rbac_roles__role_id__get: Get RBAC Role
- GET /v1/organizations/rbac_roles/{rbac_role_id}/permissions — list_rbac_role_permissions_v1_organizations_rbac_roles__role_id__permissions_get: List RBAC Role Permissions
- GET /v1/organizations/analytics/summaries — get_summaries_v1_organizations_analytics_summaries_get: Get Activity Summaries
- GET /v1/organizations/analytics/users — get_users_v1_organizations_analytics_users_get: List User Activity
- GET /v1/organizations/analytics/apps/chat/projects — get_projects_v1_organizations_analytics_apps_chat_projects_get: Get Chat Project Usage
- GET /v1/organizations/analytics/skills — get_skills_v1_organizations_analytics_skills_get: Get Skill Usage
- GET /v1/organizations/analytics/connectors — get_connectors_v1_organizations_analytics_connectors_get: Get Connector Usage
- GET /v1/organizations/analytics/plugins — get_plugins_v1_organizations_analytics_plugins_get: Get Plugin Usage
- GET /v1/organizations/analytics/artifacts — get_artifacts_v1_organizations_analytics_artifacts_get: Get Artifact Activity

## sessions
- GET /v1/sessions/{session_id}?beta=true — BetaGetSession: Get Session
- POST /v1/sessions/{session_id}?beta=true — BetaUpdateSession: Update Session
- DELETE /v1/sessions/{session_id}?beta=true — BetaDeleteSession: Delete Session
- GET /v1/sessions/{session_id}/events?beta=true — BetaListEvents: List Events
- POST /v1/sessions/{session_id}/events?beta=true — BetaSendEvents: Send Events
- GET /v1/sessions/{session_id}/events/stream?beta=true — BetaStreamSessionEvents: Stream Events
- POST /v1/sessions/{session_id}/archive?beta=true — BetaArchiveSession: Archive Session
- GET /v1/sessions/{session_id}/threads?beta=true — BetaListSessionThreads: List Session Threads
- GET /v1/sessions/{session_id}/threads/{thread_id}?beta=true — BetaGetSessionThread: Get Session Thread
- GET /v1/sessions/{session_id}/threads/{thread_id}/events?beta=true — BetaListSessionThreadEvents: List Session Thread Events
- GET /v1/sessions/{session_id}/threads/{thread_id}/stream?beta=true — BetaStreamSessionThreadEvents: Stream Session Thread Events
- POST /v1/sessions/{session_id}/threads/{thread_id}/archive?beta=true — BetaArchiveSessionThread: Archive Session Thread
- GET /v1/sessions/{session_id}/resources?beta=true — BetaListResources: List Session Resources
- POST /v1/sessions/{session_id}/resources?beta=true — BetaAddResource: Add Session Resource
- GET /v1/sessions/{session_id}/resources/{resource_id}?beta=true — BetaGetResource: Get Session Resource
- POST /v1/sessions/{session_id}/resources/{resource_id}?beta=true — BetaUpdateResource: Update Session Resource
- DELETE /v1/sessions/{session_id}/resources/{resource_id}?beta=true — BetaDeleteResource: Delete Session Resource

## sessions?beta=true
- GET /v1/sessions?beta=true — BetaListSessions: List Sessions
- POST /v1/sessions?beta=true — BetaCreateSession: Create Session

## skills
- GET /v1/skills — list_skills_v1_skills_get: List Skills
- POST /v1/skills — create_skill_v1_skills_post: Create Skill
- GET /v1/skills/{skill_id} — get_skill_v1_skills__skill_id__get: Get Skill
- DELETE /v1/skills/{skill_id} — delete_skill_v1_skills__skill_id__delete: Delete Skill
- GET /v1/skills/{skill_id}/versions — list_skill_versions_v1_skills__skill_id__versions_get: List Skill Versions
- POST /v1/skills/{skill_id}/versions — create_skill_version_v1_skills__skill_id__versions_post: Create Skill Version
- GET /v1/skills/{skill_id}/versions/{version} — get_skill_version_v1_skills__skill_id__versions__version__get: Get Skill Version
- DELETE /v1/skills/{skill_id}/versions/{version} — delete_skill_version_v1_skills__skill_id__versions__version__delete: Delete Skill Version
- GET /v1/skills/{skill_id}?beta=true — beta_get_skill_v1_skills__skill_id__get: Get Skill
- DELETE /v1/skills/{skill_id}?beta=true — beta_delete_skill_v1_skills__skill_id__delete: Delete Skill
- GET /v1/skills/{skill_id}/versions?beta=true — beta_list_skill_versions_v1_skills__skill_id__versions_get: List Skill Versions
- POST /v1/skills/{skill_id}/versions?beta=true — beta_create_skill_version_v1_skills__skill_id__versions_post: Create Skill Version
- GET /v1/skills/{skill_id}/versions/{version}?beta=true — beta_get_skill_version_v1_skills__skill_id__versions__version__get: Get Skill Version
- DELETE /v1/skills/{skill_id}/versions/{version}?beta=true — beta_delete_skill_version_v1_skills__skill_id__versions__version__delete: Delete Skill Version
- GET /v1/skills/{skill_id}/versions/{version}/content?beta=true — beta_download_skill_version_content_v1_skills__skill_id__versions__version__content_get: Download Skill Version Content

## skills?beta=true
- GET /v1/skills?beta=true — beta_list_skills_v1_skills_get: List Skills
- POST /v1/skills?beta=true — beta_create_skill_v1_skills_post: Create Skill

## tunnels
- GET /v1/tunnels/{tunnel_id}?beta=true — BetaGetTunnel: Get Tunnel
- POST /v1/tunnels/{tunnel_id}/archive?beta=true — BetaArchiveTunnel: Archive Tunnel
- POST /v1/tunnels/{tunnel_id}/reveal_token?beta=true — BetaRevealTunnelToken: Reveal Tunnel Token
- POST /v1/tunnels/{tunnel_id}/rotate_token?beta=true — BetaRotateTunnelToken: Rotate Tunnel Token
- GET /v1/tunnels/{tunnel_id}/certificates?beta=true — BetaListTunnelCertificates: List Tunnel Certificates
- POST /v1/tunnels/{tunnel_id}/certificates?beta=true — BetaCreateTunnelCertificate: Create Tunnel Certificate
- GET /v1/tunnels/{tunnel_id}/certificates/{certificate_id}?beta=true — BetaGetTunnelCertificate: Get Tunnel Certificate
- POST /v1/tunnels/{tunnel_id}/certificates/{certificate_id}/archive?beta=true — BetaArchiveTunnelCertificate: Archive Tunnel Certificate

## tunnels?beta=true
- GET /v1/tunnels?beta=true — BetaListTunnels: List Tunnels
- POST /v1/tunnels?beta=true — BetaCreateTunnel: Create Tunnel

## user_profiles
- GET /v1/user_profiles — ListUserProfiles: List User Profiles
- POST /v1/user_profiles — CreateUserProfile: Create User Profile
- GET /v1/user_profiles/{user_profile_id} — GetUserProfile: Get User Profile
- POST /v1/user_profiles/{user_profile_id} — UpdateUserProfile: Update User Profile
- DELETE /v1/user_profiles/{user_profile_id} — DeleteUserProfile: Delete User Profile
- POST /v1/user_profiles/{user_profile_id}/action_urls — CreateUserProfileActionUrl: Create Action URL
- GET /v1/user_profiles/{user_profile_id}?beta=true — BetaGetUserProfile: Get User Profile
- POST /v1/user_profiles/{user_profile_id}?beta=true — BetaUpdateUserProfile: Update User Profile
- DELETE /v1/user_profiles/{user_profile_id}?beta=true — BetaDeleteUserProfile: Delete User Profile
- POST /v1/user_profiles/{user_profile_id}/enrollment_url?beta=true — BetaCreateEnrollmentUrl: Create Enrollment URL
- POST /v1/user_profiles/{user_profile_id}/action_urls?beta=true — BetaCreateUserProfileActionUrl: Create Action URL

## user_profiles?beta=true
- GET /v1/user_profiles?beta=true — BetaListUserProfiles: List User Profiles
- POST /v1/user_profiles?beta=true — BetaCreateUserProfile: Create User Profile

## vaults
- GET /v1/vaults/{vault_id}?beta=true — BetaGetVault: Retrieve a Vault
- POST /v1/vaults/{vault_id}?beta=true — BetaUpdateVault: Update a Vault
- DELETE /v1/vaults/{vault_id}?beta=true — BetaDeleteVault: Delete a Vault
- POST /v1/vaults/{vault_id}/archive?beta=true — BetaArchiveVault: Archive a Vault
- GET /v1/vaults/{vault_id}/credentials?beta=true — BetaListCredentials: List Credentials
- POST /v1/vaults/{vault_id}/credentials?beta=true — BetaCreateCredential: Create a Credential
- GET /v1/vaults/{vault_id}/credentials/{credential_id}?beta=true — BetaGetCredential: Retrieve a Credential
- POST /v1/vaults/{vault_id}/credentials/{credential_id}?beta=true — BetaUpdateCredential: Update a Credential
- DELETE /v1/vaults/{vault_id}/credentials/{credential_id}?beta=true — BetaDeleteCredential: Delete a Credential
- POST /v1/vaults/{vault_id}/credentials/{credential_id}/archive?beta=true — BetaArchiveCredential: Archive a Credential
- POST /v1/vaults/{vault_id}/credentials/{credential_id}/mcp_oauth_validate?beta=true — BetaValidateCredential: Validate an MCP OAuth Credential

## vaults?beta=true
- GET /v1/vaults?beta=true — BetaListVaults: List Vaults
- POST /v1/vaults?beta=true — BetaCreateVault: Create a Vault
