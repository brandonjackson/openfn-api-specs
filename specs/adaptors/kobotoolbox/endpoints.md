# KoboToolbox Primary API (kobotoolbox) v2.0.0 (api_v2)

<!-- derived from openapi.json by `pnpm specs index kobotoolbox` — do not edit by hand -->

base: not declared | auth: http/basic, http/bearer, apiKey (header Authorization) | 275 operations in 13 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Authentication (Allauth Headless)
- GET /api/v2/allauth/browser/v1/config — api_v2_allauth_browser_v1_config_get: Get configuration
- GET /api/v2/allauth/app/v1/config — api_v2_allauth_app_v1_config_get: Get configuration
- POST /api/v2/allauth/browser/v1/auth/login — api_v2_allauth_browser_v1_auth_login_post: Login
- POST /api/v2/allauth/app/v1/auth/login — api_v2_allauth_app_v1_auth_login_post: Login
- POST /api/v2/allauth/browser/v1/auth/signup — api_v2_allauth_browser_v1_auth_signup_post: Signup
- POST /api/v2/allauth/app/v1/auth/signup — api_v2_allauth_app_v1_auth_signup_post: Signup
- GET /api/v2/allauth/browser/v1/auth/email/verify — api_v2_allauth_browser_v1_auth_email_verify_get: Get email verification information
- POST /api/v2/allauth/browser/v1/auth/email/verify — api_v2_allauth_browser_v1_auth_email_verify_post: Verify an email
- GET /api/v2/allauth/app/v1/auth/email/verify — api_v2_allauth_app_v1_auth_email_verify_get: Get email verification information
- POST /api/v2/allauth/app/v1/auth/email/verify — api_v2_allauth_app_v1_auth_email_verify_post: Verify an email
- POST /api/v2/allauth/browser/v1/auth/email/verify/resend — api_v2_allauth_browser_v1_auth_email_verify_resend_post: Resend email verification code
- POST /api/v2/allauth/app/v1/auth/email/verify/resend — api_v2_allauth_app_v1_auth_email_verify_resend_post: Resend email verification code
- POST /api/v2/allauth/browser/v1/auth/phone/verify — api_v2_allauth_browser_v1_auth_phone_verify_post: Verify a phone number
- POST /api/v2/allauth/app/v1/auth/phone/verify — api_v2_allauth_app_v1_auth_phone_verify_post: Verify a phone number
- POST /api/v2/allauth/browser/v1/auth/phone/verify/resend — api_v2_allauth_browser_v1_auth_phone_verify_resend_post: Resend phone number verification code
- POST /api/v2/allauth/app/v1/auth/phone/verify/resend — api_v2_allauth_app_v1_auth_phone_verify_resend_post: Resend phone number verification code
- POST /api/v2/allauth/browser/v1/auth/reauthenticate — api_v2_allauth_browser_v1_auth_reauthenticate_post: Reauthenticate
- POST /api/v2/allauth/app/v1/auth/reauthenticate — api_v2_allauth_app_v1_auth_reauthenticate_post: Reauthenticate
- POST /api/v2/allauth/browser/v1/auth/password/request — api_v2_allauth_browser_v1_auth_password_request_post: Request password
- POST /api/v2/allauth/app/v1/auth/password/request — api_v2_allauth_app_v1_auth_password_request_post: Request password
- GET /api/v2/allauth/browser/v1/auth/password/reset — api_v2_allauth_browser_v1_auth_password_reset_get: Get password reset information
- POST /api/v2/allauth/browser/v1/auth/password/reset — api_v2_allauth_browser_v1_auth_password_reset_post: Reset password
- GET /api/v2/allauth/app/v1/auth/password/reset — api_v2_allauth_app_v1_auth_password_reset_get: Get password reset information
- POST /api/v2/allauth/app/v1/auth/password/reset — api_v2_allauth_app_v1_auth_password_reset_post: Reset password
- POST /api/v2/allauth/browser/v1/auth/provider/redirect — api_v2_allauth_browser_v1_auth_provider_redirect_post: Provider redirect
- POST /api/v2/allauth/browser/v1/auth/provider/token — api_v2_allauth_browser_v1_auth_provider_token_post: Provider token
- POST /api/v2/allauth/app/v1/auth/provider/token — api_v2_allauth_app_v1_auth_provider_token_post: Provider token
- GET /api/v2/allauth/browser/v1/auth/provider/signup — api_v2_allauth_browser_v1_auth_provider_signup_get: Provider signup information
- POST /api/v2/allauth/browser/v1/auth/provider/signup — api_v2_allauth_browser_v1_auth_provider_signup_post: Provider signup
- GET /api/v2/allauth/app/v1/auth/provider/signup — api_v2_allauth_app_v1_auth_provider_signup_get: Provider signup information
- POST /api/v2/allauth/app/v1/auth/provider/signup — api_v2_allauth_app_v1_auth_provider_signup_post: Provider signup
- POST /api/v2/allauth/browser/v1/auth/2fa/authenticate — api_v2_allauth_browser_v1_auth_2fa_authenticate_post: Two-factor authentication
- POST /api/v2/allauth/app/v1/auth/2fa/authenticate — api_v2_allauth_app_v1_auth_2fa_authenticate_post: Two-factor authentication
- POST /api/v2/allauth/browser/v1/auth/2fa/reauthenticate — api_v2_allauth_browser_v1_auth_2fa_reauthenticate_post: Reauthenticate using 2FA
- POST /api/v2/allauth/app/v1/auth/2fa/reauthenticate — api_v2_allauth_app_v1_auth_2fa_reauthenticate_post: Reauthenticate using 2FA
- POST /api/v2/allauth/browser/v1/auth/code/confirm — api_v2_allauth_browser_v1_auth_code_confirm_post: Confirm login code
- POST /api/v2/allauth/app/v1/auth/code/confirm — api_v2_allauth_app_v1_auth_code_confirm_post: Confirm login code
- GET /api/v2/allauth/browser/v1/account/providers — api_v2_allauth_browser_v1_account_providers_get: List the connected third-party provider accounts
- DELETE /api/v2/allauth/browser/v1/account/providers — api_v2_allauth_browser_v1_account_providers_delete: Disconnect a third-party provider account
- GET /api/v2/allauth/app/v1/account/providers — api_v2_allauth_app_v1_account_providers_get: List the connected third-party provider accounts
- DELETE /api/v2/allauth/app/v1/account/providers — api_v2_allauth_app_v1_account_providers_delete: Disconnect a third-party provider account
- GET /api/v2/allauth/browser/v1/account/email — api_v2_allauth_browser_v1_account_email_get: List email addresses
- POST /api/v2/allauth/browser/v1/account/email — api_v2_allauth_browser_v1_account_email_post: Add/Change email address
- PUT /api/v2/allauth/browser/v1/account/email — api_v2_allauth_browser_v1_account_email_put: Request email verification
- PATCH /api/v2/allauth/browser/v1/account/email — api_v2_allauth_browser_v1_account_email_patch: Change primary email address
- DELETE /api/v2/allauth/browser/v1/account/email — api_v2_allauth_browser_v1_account_email_delete: Remove an email address
- GET /api/v2/allauth/app/v1/account/email — api_v2_allauth_app_v1_account_email_get: List email addresses
- POST /api/v2/allauth/app/v1/account/email — api_v2_allauth_app_v1_account_email_post: Add/Change email address
- PUT /api/v2/allauth/app/v1/account/email — api_v2_allauth_app_v1_account_email_put: Request email verification
- PATCH /api/v2/allauth/app/v1/account/email — api_v2_allauth_app_v1_account_email_patch: Change primary email address
- DELETE /api/v2/allauth/app/v1/account/email — api_v2_allauth_app_v1_account_email_delete: Remove an email address
- GET /api/v2/allauth/browser/v1/account/phone — api_v2_allauth_browser_v1_account_phone_get: Get the phone number
- POST /api/v2/allauth/browser/v1/account/phone — api_v2_allauth_browser_v1_account_phone_post: Change the phone number
- GET /api/v2/allauth/app/v1/account/phone — api_v2_allauth_app_v1_account_phone_get: Get the phone number
- POST /api/v2/allauth/app/v1/account/phone — api_v2_allauth_app_v1_account_phone_post: Change the phone number
- GET /api/v2/allauth/browser/v1/account/authenticators — api_v2_allauth_browser_v1_account_authenticators_get: List authenticators
- GET /api/v2/allauth/app/v1/account/authenticators — api_v2_allauth_app_v1_account_authenticators_get: List authenticators
- GET /api/v2/allauth/browser/v1/account/authenticators/totp — api_v2_allauth_browser_v1_account_authenticators_totp_get: TOTP authenticator status
- POST /api/v2/allauth/browser/v1/account/authenticators/totp — api_v2_allauth_browser_v1_account_authenticators_totp_post: Activate TOTP
- DELETE /api/v2/allauth/browser/v1/account/authenticators/totp — api_v2_allauth_browser_v1_account_authenticators_totp_delete: Deactivate TOTP
- GET /api/v2/allauth/app/v1/account/authenticators/totp — api_v2_allauth_app_v1_account_authenticators_totp_get: TOTP authenticator status
- POST /api/v2/allauth/app/v1/account/authenticators/totp — api_v2_allauth_app_v1_account_authenticators_totp_post: Activate TOTP
- DELETE /api/v2/allauth/app/v1/account/authenticators/totp — api_v2_allauth_app_v1_account_authenticators_totp_delete: Deactivate TOTP
- GET /api/v2/allauth/browser/v1/account/authenticators/recovery-codes — api_v2_allauth_browser_v1_account_authenticators_recovery_codes_get: List recovery codes
- POST /api/v2/allauth/browser/v1/account/authenticators/recovery-codes — api_v2_allauth_browser_v1_account_authenticators_recovery_codes_post: Regenerate recovery codes
- GET /api/v2/allauth/app/v1/account/authenticators/recovery-codes — api_v2_allauth_app_v1_account_authenticators_recovery_codes_get: List recovery codes
- POST /api/v2/allauth/app/v1/account/authenticators/recovery-codes — api_v2_allauth_app_v1_account_authenticators_recovery_codes_post: Regenerate recovery codes
- GET /api/v2/allauth/browser/v1/auth/session — api_v2_allauth_browser_v1_auth_session_get: Get authentication status
- DELETE /api/v2/allauth/browser/v1/auth/session — api_v2_allauth_browser_v1_auth_session_delete: Logout
- GET /api/v2/allauth/app/v1/auth/session — api_v2_allauth_app_v1_auth_session_get: Get authentication status
- DELETE /api/v2/allauth/app/v1/auth/session — api_v2_allauth_app_v1_auth_session_delete: Logout
- POST /api/v2/allauth/app/v1/tokens/refresh — api_v2_allauth_app_v1_tokens_refresh_post: Refresh the access token
- POST /api/v2/allauth/browser/v1/account/password/change — api_v2_allauth_browser_v1_account_password_change_post: Change password
- POST /api/v2/allauth/app/v1/account/password/change — api_v2_allauth_app_v1_account_password_change_post: Change password
- GET /api/v2/allauth/browser/v1/auth/sessions — api_v2_allauth_browser_v1_auth_sessions_get: List sessions
- DELETE /api/v2/allauth/browser/v1/auth/sessions — api_v2_allauth_browser_v1_auth_sessions_delete: End one or more sessions
- GET /api/v2/allauth/app/v1/auth/sessions — api_v2_allauth_app_v1_auth_sessions_get: List sessions
- DELETE /api/v2/allauth/app/v1/auth/sessions — api_v2_allauth_app_v1_auth_sessions_delete: End one or more sessions

## Configuration
- GET /api/v2/environment/ — api_v2_environment_retrieve: Retrieve Kobo server environment configurations.

## Form content
- GET /api/v2/asset_snapshots/ — api_v2_asset_snapshots_list: ## List all snapshots for every asset of a user
- POST /api/v2/asset_snapshots/ — api_v2_asset_snapshots_create: ## Create an asset snapshot When creating an asset snapshot, you must provide either: - the asset (as a URI), or - the source (as a JSON ob…
- GET /api/v2/asset_snapshots/{uid_asset_snapshot}/ — api_v2_asset_snapshots_retrieve: ## Retrieve an asset snapshot Note: If the `Content-Type` of the request is set to `application/xml`, the response will return the XML vers…
- DELETE /api/v2/asset_snapshots/{uid_asset_snapshot}/ — api_v2_asset_snapshots_destroy: ## Delete an asset snapshot
- GET /api/v2/asset_snapshots/{uid_asset_snapshot}/preview/ — api_v2_asset_snapshots_preview_retrieve: ## Asset snapshot preview Returns a `302 Found` redirect to the Enketo preview page associated with the asset.
- GET /api/v2/asset_snapshots/{uid_asset_snapshot}/xform/ — api_v2_asset_snapshots_xform_retrieve: ## This route will render the XForm into syntax-highlighted HTML.
- GET /api/v2/asset_snapshots/{uid_asset_snapshot}/xml_with_disclaimer/ — api_v2_asset_snapshots_xml_with_disclaimer_retrieve: ## Implement part of the OpenRosa Form List API This endpoint is used by Enketo to fetch and return the full XML form.
- GET /api/v2/assets/{uid_asset}/content/ — api_v2_assets_content_retrieve: ## Return the content of a user's asset.
- GET /api/v2/assets/{uid_asset}/table_view/ — api_v2_assets_table_view_retrieve: ## Return plain HTML of survey in tabular format
- GET /api/v2/assets/{uid_asset}/valid_content/ — api_v2_assets_valid_content_retrieve: ## Return valid content for user's asset
- GET /api/v2/assets/{uid_asset}/xls/ — api_v2_assets_xls_retrieve: ## Return plain HTML of survey in tabular format

## Library collections
- GET /api/v2/asset_subscriptions/ — api_v2_asset_subscriptions_list: ## List all asset subscriptions of a user
- POST /api/v2/asset_subscriptions/ — api_v2_asset_subscriptions_create: ## Create an asset subscription Create a subscription to a public collection for the user.
- GET /api/v2/asset_subscriptions/{uid_asset_subscription}/ — api_v2_asset_subscriptions_retrieve: ## Retrieve an asset subscription
- DELETE /api/v2/asset_subscriptions/{uid_asset_subscription}/ — api_v2_asset_subscriptions_destroy: ## Delete a subscription to an asset Unsubscribe from a public asset.

## Logging
- GET /api/v2/access-logs/me/ — api_v2_access_logs_me_list: ## List all access logs for the authenticated user Submissions will be grouped together by hour Results from this endpoint can be filtered…
- GET /api/v2/access-logs/me/export/ — api_v2_access_logs_me_export_list: ## List all access logs export tasks for the authenticated user
- POST /api/v2/access-logs/me/export/ — api_v2_access_logs_me_export_create: ## Create an export task for the authenticated user
- GET /api/v2/assets/{uid_asset}/history/ — api_v2_assets_history_list: ## List project history logs Lists all project history logs for a single project.
- GET /api/v2/assets/{uid_asset}/history/actions/ — api_v2_assets_history_actions_retrieve: ## Retrieve distinct actions performed on the project.
- POST /api/v2/assets/{uid_asset}/history/export/ — api_v2_assets_history_export_create: ## Export current project's history Exports the project's history and sends it by email to the requesting user.

## Manage permissions
- GET /api/v2/assets/{uid_asset}/permission-assignments/ — api_v2_assets_permission_assignments_list: ## List permission assignments
- POST /api/v2/assets/{uid_asset}/permission-assignments/ — api_v2_assets_permission_assignments_create: ## Assign a permission N.B.: - Filters use Mongo Query Engine to narrow down results - Filters are joined with `OR` operator - Implied perm…
- GET /api/v2/assets/{uid_asset}/permission-assignments/{uid_permission_assignment}/ — api_v2_assets_permission_assignments_retrieve: ## Retrieve assignments
- DELETE /api/v2/assets/{uid_asset}/permission-assignments/{uid_permission_assignment}/ — api_v2_assets_permission_assignments_destroy: ## Remove a permission assignment
- POST /api/v2/assets/{uid_asset}/permission-assignments/bulk/ — api_v2_assets_permission_assignments_bulk_create: ## Assign multiple permissions at once * Can put both regular and partial permission in the payload
- DELETE /api/v2/assets/{uid_asset}/permission-assignments/bulk/ — api_v2_assets_permission_assignments_bulk_destroy: ## Remove all permission assignments ⚠️ **Warning** This endpoint currently supports deleting **only the user whose username is provided as…
- PATCH /api/v2/assets/{uid_asset}/permission-assignments/clone/ — api_v2_assets_permission_assignments_clone_partial_update: ## Clone permission assignments from another asset using uid Where `clone_from` is the source uid.

## Manage projects and library content
- GET /api/v2/assets/ — api_v2_assets_list: ## Get user's assets Search can be made with `q` parameter.
- POST /api/v2/assets/ — api_v2_assets_create: ## Create or clone an asset When cloning an asset, you must provide: - the name (as a string), - the `clone_from` (the uid representing the…
- GET /api/v2/assets/{uid_asset}/ — api_v2_assets_retrieve: ## Get a user's current asset
- PATCH /api/v2/assets/{uid_asset}/ — api_v2_assets_partial_update: ## Update or connect a user's asset Updates a project or connect project's data from this project to other projects When `Data sharing`: `f…
- DELETE /api/v2/assets/{uid_asset}/ — api_v2_assets_destroy: ## Delete a user's asset
- GET /api/v2/assets/{uid_asset}/counts/ — api_v2_assets_counts_list: ## Count the daily amount of submissions Returns up to the last 31 days of daily counts and total counts of submissions to a survey.
- GET /api/v2/assets/{uid_asset}/deployment/ — api_v2_assets_deployment_retrieve: ## Retrieve the existing deployment (if any)
- POST /api/v2/assets/{uid_asset}/deployment/ — api_v2_assets_deployment_create: ## (Re)Deploy a form Deploy a new form or re-deploy an existing one.
- PATCH /api/v2/assets/{uid_asset}/deployment/ — api_v2_assets_deployment_partial_update: ## (Un)Archive the existing deployment.
- GET /api/v2/assets/{uid_asset}/versions/ — api_v2_assets_versions_list: ## List the versions of forms
- GET /api/v2/assets/{uid_asset}/versions/{uid_version}/ — api_v2_assets_versions_retrieve: ## Retrieve asset versions Returns the details of an asset version
- GET /api/v2/assets/{uid_asset}/xform/ — api_v2_assets_xform_retrieve: ## This route will render the XForm into syntax-highlighted HTML.
- POST /api/v2/assets/bulk/ — api_v2_assets_bulk_create: ## Perform bulk actions on assets Actions available: - `archive` - `delete` - `unarchive` - `undelete` (superusers only)
- GET /api/v2/assets/counts/ — api_v2_assets_counts_retrieve: ## Return counts of deployed, archived, and draft assets
- GET /api/v2/assets/hash/ — api_v2_assets_hash_retrieve: ## Get a hash of all `version_id`s of all accessible assets by the current user.
- GET /api/v2/assets/metadata/ — api_v2_assets_metadata_retrieve: ## Get metadata for all authenticated user' assets
- GET /api/v2/assets/minimal-list/ — api_v2_assets_minimal_list_retrieve: ## Return a minimal listing of assets with their deployment status Returns a paginated list of assets visible to the current user, includin…
- GET /api/v2/imports/ — api_v2_imports_list: ## List imported files
- POST /api/v2/imports/ — api_v2_imports_create: ## Import file _**Note**: this endpoint is expecting a multipart/form-data_
- GET /api/v2/imports/{uid_import}/ — api_v2_imports_retrieve: ## Retrieve imported files
- GET /api/v2/project-ownership/invites/ — api_v2_project_ownership_invites_list: ## List of invites Invites sent or received by current user about transferring project ownership.
- POST /api/v2/project-ownership/invites/ — api_v2_project_ownership_invites_create: ## Create (send) an invite Where the assets `uid` are given in the payload's list
- GET /api/v2/project-ownership/invites/{uid_invite}/ — api_v2_project_ownership_invites_retrieve: ## Invite detail It can be useful to monitor the invite status while the transfer is being processed
- PATCH /api/v2/project-ownership/invites/{uid_invite}/ — api_v2_project_ownership_invites_partial_update: ## Update an invite status Update the status of an invite.
- DELETE /api/v2/project-ownership/invites/{uid_invite}/ — api_v2_project_ownership_invites_destroy: ## Delete invite
- GET /api/v2/project-ownership/invites/{uid_invite}/transfers/{uid_transfer}/ — api_v2_project_ownership_invites_transfers_retrieve: ## Retrieve transfer details
- GET /api/v2/tags/ — api_v2_tags_list: ## List current user's assets' tags
- GET /api/v2/tags/{taguid__uid}/ — api_v2_tags_retrieve: ## Retrieve a tag's data

## Other
- GET /api/v2/languages/ — api_v2_languages_list: ## List the languages accessible to requesting (authenticated) user.
- GET /api/v2/languages/{code}/ — api_v2_languages_retrieve: ## Retrieve one language * `code` - is the unique identifier of a specific language
- GET /api/v2/permissions/ — api_v2_permissions_list: ## List all assignable permissions for `Asset` The `implied` property of a given permission shows which additional permissions are automati…
- GET /api/v2/permissions/{codename}/ — api_v2_permissions_retrieve: ## Retrieve a codename's permissions
- GET /api/v2/stripe/addons/ — api_v2_stripe_addons_list: Lists the one-time add-ons for the authenticated user's organization.
- GET /api/v2/stripe/addons/{id}/ — api_v2_stripe_addons_retrieve: Lists the one-time add-ons for the authenticated user's organization.
- GET /api/v2/stripe/change-plan — api_v2_stripe_change_plan_retrieve: Change an existing subscription to a new price.
- POST /api/v2/stripe/checkout-link — api_v2_stripe_checkout_link_create
- POST /api/v2/stripe/customer-portal — api_v2_stripe_customer_portal_create
- GET /api/v2/stripe/products/ — api_v2_stripe_products_list: Returns Product and Price Lists, sorted from the product with the lowest price to highest This endpoint is cached for an amount of time det…
- GET /api/v2/stripe/subscriptions/ — api_v2_stripe_subscriptions_list
- GET /api/v2/stripe/subscriptions/{id}/ — api_v2_stripe_subscriptions_retrieve
- GET /api/v2/terms-of-service/ — api_v2_terms_of_service_list: ## List the different terms of service
- GET /api/v2/terms-of-service/{slug}/ — api_v2_terms_of_service_retrieve: ## Retrieve a specific terms of service
- GET /api/v2/transcription-services/ — api_v2_transcription_services_list: ## List the transcription services accessible to requesting user.
- GET /api/v2/transcription-services/{code}/ — api_v2_transcription_services_retrieve: ## retrieve a transcription service * `code` - is the unique identifier of a specific language
- GET /api/v2/translation-services/ — api_v2_translation_services_list: ## List the translation services accessible to requesting (authenticated) user.
- GET /api/v2/translation-services/{code}/ — api_v2_translation_services_retrieve: ## Retrieve a translation service * `code` - is the unique identifier of a specific language

## SCIM
- GET /api/v2/scim/v2/{idp_slug}/Groups — api_v2_scim_v2_Groups_list: Returns a list of SCIM groups.
- POST /api/v2/scim/v2/{idp_slug}/Groups — api_v2_scim_v2_Groups_create: Creates a new SCIM group.
- GET /api/v2/scim/v2/{idp_slug}/Groups/{id} — api_v2_scim_v2_Groups_retrieve: Returns a specific SCIM group.
- PUT /api/v2/scim/v2/{idp_slug}/Groups/{id} — api_v2_scim_v2_Groups_update: Replaces a SCIM group entirely.
- PATCH /api/v2/scim/v2/{idp_slug}/Groups/{id} — api_v2_scim_v2_Groups_partial_update: Updates a SCIM group.
- DELETE /api/v2/scim/v2/{idp_slug}/Groups/{id} — api_v2_scim_v2_Groups_destroy: Deletes a SCIM group.
- GET /api/v2/scim/v2/{idp_slug}/ResourceTypes — api_v2_scim_v2_ResourceTypes_retrieve: Returns the SCIM supported ResourceTypes.
- GET /api/v2/scim/v2/{idp_slug}/Schemas — api_v2_scim_v2_Schemas_retrieve: Returns the SCIM supported Schemas.
- GET /api/v2/scim/v2/{idp_slug}/ServiceProviderConfig — api_v2_scim_v2_ServiceProviderConfig_retrieve: Returns the SCIM Service Provider Configuration.
- GET /api/v2/scim/v2/{idp_slug}/Users — api_v2_scim_v2_Users_list: Returns a list of SCIM users matching the optional query
- POST /api/v2/scim/v2/{idp_slug}/Users — api_v2_scim_v2_Users_create: Handle POST requests (user provisioning from IdP).
- GET /api/v2/scim/v2/{idp_slug}/Users/{id} — api_v2_scim_v2_Users_retrieve: Returns a specific SCIM user.
- PUT /api/v2/scim/v2/{idp_slug}/Users/{id} — api_v2_scim_v2_Users_update: Handle PUT requests (user update from IdP).
- PATCH /api/v2/scim/v2/{idp_slug}/Users/{id} — api_v2_scim_v2_Users_partial_update: Updates a SCIM user.
- DELETE /api/v2/scim/v2/{idp_slug}/Users/{id} — api_v2_scim_v2_Users_destroy: Deactivates all Kobo accounts linked to the user's email address.

## Server logs (superusers)
- GET /api/v2/access-logs/ — api_v2_access_logs_list: ## List all access logs for all users ⚠️ _Only available to superusers_ Submissions will be grouped together by user by hour **Filterable f…
- GET /api/v2/access-logs/export/ — api_v2_access_logs_export_list: ## List all access logs export tasks for all users ⚠️ _Only available to superusers_
- POST /api/v2/access-logs/export/ — api_v2_access_logs_export_create: ## Create an export task for all users ⚠️ _Only available to superusers_
- GET /api/v2/audit-logs/ — api_v2_audit_logs_list: ## List actions performed by users.
- GET /api/v2/project-history-logs/ — api_v2_project_history_logs_list: ## List all project history logs for all projects.
- GET /api/v2/project-history-logs/export/ — api_v2_project_history_logs_export_retrieve: ## List of Project History Exports ⚠️ _Only available to superusers_
- POST /api/v2/project-history-logs/export/ — api_v2_project_history_logs_export_create: ## Create an export of projects history logs ⚠️ _Only available to superusers_ Export project history logs and send it by email to the requ…
- GET /api/v2/user-reports/ — api_v2_user_reports_list: # List user reports ⚠️ _Only available to superusers_ ## Filterable fields by string: Supports partial filtering - username - first_name -…

## Survey data
- GET /api/v2/assets/{uid_asset}/advanced-features/ — api_v2_assets_advanced_features_list: ## List all advanced features on an asset Lists all advanced features on all questions in an asset.
- POST /api/v2/assets/{uid_asset}/advanced-features/ — api_v2_assets_advanced_features_create: ## Add an advanced action to an asset Enables a new type of advanced action on a question in the asset.
- GET /api/v2/assets/{uid_asset}/advanced-features/{uid_advanced_feature}/ — api_v2_assets_advanced_features_retrieve: ## Retrieve advanced feature configuration for a question on an asset Gets the params for one advanced action for one question in an asset
- PATCH /api/v2/assets/{uid_asset}/advanced-features/{uid_advanced_feature}/ — api_v2_assets_advanced_features_partial_update: ## Update an advanced action on an asset Update the params of an advanced action on a question in the asset.
- GET /api/v2/assets/{uid_asset}/advanced-features/bulk-actions/ — api_v2_assets_advanced_features_bulk_actions_list: ## List bulk processing jobs on an asset Returns all bulk processing jobs associated with the specified asset.
- POST /api/v2/assets/{uid_asset}/advanced-features/bulk-actions/ — api_v2_assets_advanced_features_bulk_actions_create: ## Create a bulk processing job Creates a placeholder bulk transcription or bulk translation job for a single question across multiple subm…
- GET /api/v2/assets/{uid_asset}/advanced-features/bulk-actions/{action_uid}/ — api_v2_assets_advanced_features_bulk_actions_retrieve: ## Retrieve a bulk processing job Returns detailed information about a single bulk processing job, including its current status and process…
- PATCH /api/v2/assets/{uid_asset}/advanced-features/bulk-actions/{action_uid}/ — api_v2_assets_advanced_features_bulk_actions_partial_update: ## Update a bulk processing job Cancels a single bulk processing job for an asset.
- DELETE /api/v2/assets/{uid_asset}/attachments/{id}/ — api_v2_assets_attachments_destroy: ## Delete a specific attachment of an Asset * `id` can only be the uid of attachment to be deleted
- DELETE /api/v2/assets/{uid_asset}/attachments/bulk/ — api_v2_assets_attachments_bulk_destroy: ## Delete all attachments from a list of submissions ```curl curl -X DELETE https://kf.kobotoolbox.org/api/v2/assets/aSAvYreNzVEkrWg5Gdcvg/…
- GET /api/v2/assets/{uid_asset}/data/ — api_v2_assets_data_list: ## List of submissions for a specific asset By default, JSON format is used, but XML and GeoJSON are also available: ```shell curl -X GET h…
- GET /api/v2/assets/{uid_asset}/data/{id}/ — api_v2_assets_data_retrieve: ## Get a specific submission `{id}` can be: - The primary key of the submission - Its `_uuid` 1 - Its `rootUuid` (without "uuid:" prefix) 1…
- DELETE /api/v2/assets/{uid_asset}/data/{id}/ — api_v2_assets_data_destroy: ## Deletes current submission
- POST /api/v2/assets/{uid_asset}/data/{id}/duplicate/ — api_v2_assets_data_duplicate_create: ## Duplicate submission Duplicates the data of a submission `{id}` can be: - The primary key of the submission - Its `_uuid` 1 - Its `rootU…
- GET /api/v2/assets/{uid_asset}/data/{id}/edit/ — api_v2_assets_data_edit_retrieve: ## Get submission url of enketo in edit mode `{id}` can be: - The primary key of the submission - Its `_uuid` 1 - Its `rootUuid` (without "…
- GET /api/v2/assets/{uid_asset}/data/{id}/enketo/edit/ — api_v2_assets_data_enketo_edit_retrieve: ## Get submission url of enketo in edit mode `{id}` can be: - The primary key of the submission - Its `_uuid` 1 - Its `rootUuid` (without "…
- GET /api/v2/assets/{uid_asset}/data/{id}/enketo/redirect/edit/ — api_v2_assets_data_enketo_redirect_edit_retrieve: ## Get submission url of enketo in edit mode `{id}` can be: - The primary key of the submission - Its `_uuid` 1 - Its `rootUuid` (without "…
- GET /api/v2/assets/{uid_asset}/data/{id}/enketo/redirect/view/ — api_v2_assets_data_enketo_redirect_view_retrieve: ## Get submission url of enketo in preview mode `{id}` can be: - The primary key of the submission - Its `_uuid` 1 - Its `rootUuid` (withou…
- GET /api/v2/assets/{uid_asset}/data/{id}/enketo/view/ — api_v2_assets_data_enketo_view_retrieve: ## Get submission url of enketo in preview mode `{id}` can be: - The primary key of the submission - Its `_uuid` 1 - Its `rootUuid` (withou…
- GET /api/v2/assets/{uid_asset}/data/{id}/validation_status/ — api_v2_assets_data_validation_status_retrieve: ## Get validation statuses Retrieves the validation status of a submission.
- PATCH /api/v2/assets/{uid_asset}/data/{id}/validation_status/ — api_v2_assets_data_validation_status_partial_update: ## Update the validation of a submission The validation status of the submission can be updated.
- DELETE /api/v2/assets/{uid_asset}/data/{id}/validation_status/ — api_v2_assets_data_validation_status_destroy: ## Delete validation status
- GET /api/v2/assets/{uid_asset}/data/{root_uuid}/supplement/ — api_v2_assets_data_supplement_retrieve: ## Retrieve submission supplementary data This endpoint allows you to retrieve supplementary data attached to a submission.
- PATCH /api/v2/assets/{uid_asset}/data/{root_uuid}/supplement/ — api_v2_assets_data_supplement_partial_update: ## Update submission supplementary data This endpoint allows you to add, update, or delete supplementary data for a submission.
- GET /api/v2/assets/{uid_asset}/data/{uid_data}/attachments/ — api_v2_assets_data_attachments_list: ## Get an asset's attachment using xpath * `uid_data` can be the primary key of the submission or its `uuid`.
- GET /api/v2/assets/{uid_asset}/data/{uid_data}/attachments/{id}/ — attachment_retrieve: ## Get an asset's attachment using the ID * `uid_data` can be the primary key of the submission or its `uuid`.
- GET /api/v2/assets/{uid_asset}/data/{uid_data}/attachments/{id}/{suffix}/ — attachment_thumbnail: ## Get a specific size of the user's attachment (Only for images) Available formats: - `small` - `medium` - `large` `id` of attachment can…
- PATCH /api/v2/assets/{uid_asset}/data/bulk/ — api_v2_assets_data_bulk_partial_update: ## Bulk updating of submissions Where `` is a string and should be an existing XML field value of the submissions.
- DELETE /api/v2/assets/{uid_asset}/data/bulk/ — api_v2_assets_data_bulk_destroy: ## Bulk delete submissions ```curl curl -X DELETE https://kf.kobotoolbox.org/api/v2/assets/aSAvYreNzVEkrWg5Gdcvg/data/bulk/ ``` **Payload**…
- PATCH /api/v2/assets/{uid_asset}/data/validation_statuses/ — api_v2_assets_data_validation_statuses_partial_update: ## Bulk update submissions status * Where: "submissions_ids" (required) is a list of submission root id on the data to delete * Where: "val…
- DELETE /api/v2/assets/{uid_asset}/data/validation_statuses/ — api_v2_assets_data_validation_statuses_destroy: ## Bulk delete submissions status ```curl curl -X DELETE https://kf.kobotoolbox.org/api/v2/assets/aSAvYreNzVEkrWg5Gdcvg/data/validation_sta…
- GET /api/v2/assets/{uid_asset}/export-settings/ — api_v2_assets_export_settings_list: ## List of export settings for a specific asset * _Required permissions: `view_submissions` (View submissions)_
- POST /api/v2/assets/{uid_asset}/export-settings/ — api_v2_assets_export_settings_create: ## Create an export setting for an asset * _Required permissions: `manage_asset` (Manage project)_ Where: * `name` (required) is the name o…
- GET /api/v2/assets/{uid_asset}/export-settings/{uid_export_setting}/ — api_v2_assets_export_settings_retrieve: ## Retrieve a specific export setting * _Required permissions: `view_submissions` (View submissions)_
- PATCH /api/v2/assets/{uid_asset}/export-settings/{uid_export_setting}/ — api_v2_assets_export_settings_partial_update: ## Update the current export setting * _Required permissions: `manage_asset` (Manage project)_
- DELETE /api/v2/assets/{uid_asset}/export-settings/{uid_export_setting}/ — api_v2_assets_export_settings_destroy: ## Delete current export setting * _Required permissions: `manage_asset` (Manage project)_
- GET /api/v2/assets/{uid_asset}/export-settings/{uid_export_setting}/data/ — api_v2_assets_export_settings_data_retrieve: ## Synchronously export data To retrieve data synchronously in CSV and XLSX format according to a particular instance of export settings.
- GET /api/v2/assets/{uid_asset}/exports/ — api_v2_assets_exports_list: ## List of export tasks endpoints Lists the export tasks accessible to requesting user, for anonymous access nothing is returned.
- POST /api/v2/assets/{uid_asset}/exports/ — api_v2_assets_exports_create: ## Creates an export task Where: * `fields_from_all_versions` (required) is a boolean to specify whether fields from all form versions will…
- GET /api/v2/assets/{uid_asset}/exports/{uid_export}/ — api_v2_assets_exports_retrieve: ## Retrieves current export task
- DELETE /api/v2/assets/{uid_asset}/exports/{uid_export}/ — api_v2_assets_exports_destroy: ## Deletes current export task
- GET /api/v2/assets/{uid_asset}/files/ — api_v2_assets_files_list: ## Retrieve current asset files Results can be narrowed down with a filter by type: ```shell curl -X GET https://kf.kobotoolbox.org/api/v2/…
- POST /api/v2/assets/{uid_asset}/files/ — api_v2_assets_files_create: ## Create a new file on current asset Fields: - `asset` (required) - `user` (required) - `description` (required) - `file_type` (required)…
- GET /api/v2/assets/{uid_asset}/files/{uid_file}/ — api_v2_assets_files_retrieve: ## Retrieve a file from current asset
- DELETE /api/v2/assets/{uid_asset}/files/{uid_file}/ — api_v2_assets_files_destroy: ## Delete a file from current asset
- GET /api/v2/assets/{uid_asset}/files/{uid_file}/content/ — api_v2_assets_files_content_retrieve: ## Download the asset file
- GET /api/v2/assets/{uid_asset}/paired-data/ — api_v2_assets_paired_data_list: ## List paired project endpoints This endpoint is paginated and accepts these parameters: - `offset`: The initial index from which to retur…
- POST /api/v2/assets/{uid_asset}/paired-data/ — api_v2_assets_paired_data_create: ## Create a connection between two projects * `fields`: Optional.
- GET /api/v2/assets/{uid_asset}/paired-data/{uid_paired_data}/ — api_v2_assets_paired_data_retrieve: ## Retrieve a connection between two projects
- PATCH /api/v2/assets/{uid_asset}/paired-data/{uid_paired_data}/ — api_v2_assets_paired_data_partial_update: ## Update a connection between two projects _Notes: `source` cannot be changed_
- DELETE /api/v2/assets/{uid_asset}/paired-data/{uid_paired_data}/ — api_v2_assets_paired_data_destroy: ## Remove a connection between two projects
- GET /api/v2/assets/{uid_asset}/paired-data/{uid_paired_data}/external/ — api_v2_assets_paired_data_external_retrieve: ## Return an XML which contains data submitted to paired asset Creates the endpoints - /api/v2/assets//paired-data//external/ - /api/v2/ass…
- GET /api/v2/assets/{uid_asset}/reports/ — api_v2_assets_reports_retrieve: ## Report of a user's asset Returns the submission data for all deployments of a survey.

## Survey data - Rest Services
- GET /api/v2/assets/{uid_asset}/hooks/ — api_v2_assets_hooks_list: ## List external services Lists the external services endpoints accessible to requesting user
- POST /api/v2/assets/{uid_asset}/hooks/ — api_v2_assets_hooks_create: ## Add an external service to asset.
- GET /api/v2/assets/{uid_asset}/hooks/{uid_hook}/ — api_v2_assets_hooks_retrieve: ## Retrieve an external service
- PATCH /api/v2/assets/{uid_asset}/hooks/{uid_hook}/ — api_v2_assets_hooks_partial_update: ## Update an external service.
- DELETE /api/v2/assets/{uid_asset}/hooks/{uid_hook}/ — api_v2_assets_hooks_destroy: ## Delete an external service.
- GET /api/v2/assets/{uid_asset}/hooks/{uid_hook}/logs/ — api_v2_assets_hooks_logs_list: ## List logs of an external services endpoints accessible to requesting user ⚠️ The `page` query parameter is deprecated, use `start` and `…
- GET /api/v2/assets/{uid_asset}/hooks/{uid_hook}/logs/{uid_log}/ — api_v2_assets_hooks_logs_retrieve: ## Retrieve an external service endpoint log
- PATCH /api/v2/assets/{uid_asset}/hooks/{uid_hook}/logs/{uid_log}/retry/ — api_v2_assets_hooks_logs_retry_partial_update: ## Retry a failed submission attempt
- PATCH /api/v2/assets/{uid_asset}/hooks/{uid_hook}/retry/ — api_v2_assets_hooks_retry_partial_update: ## Retries all failed attempts **This call is asynchronous.

## User / team / organization / usage
- GET /api/v2/asset_usage/ — api_v2_asset_usage_list: ## Get user's asset usage
- GET /api/v2/organizations/ — api_v2_organizations_list: ## List user's organizations
- GET /api/v2/organizations/{uid_organization}/ — api_v2_organizations_retrieve: ## Retrieve organization's details
- PATCH /api/v2/organizations/{uid_organization}/ — api_v2_organizations_partial_update: ## Update organization's details
- GET /api/v2/organizations/{uid_organization}/asset_usage/ — api_v2_organizations_asset_usage_list: ## Retrieve organization asset usage tracker Tracks the total usage of each asset for the user in the given organization
- GET /api/v2/organizations/{uid_organization}/assets/ — api_v2_organizations_assets_retrieve: ## Retrieve Organization Assets This endpoint returns all assets associated with a specific organization.
- GET /api/v2/organizations/{uid_organization}/assets/counts/ — api_v2_organizations_assets_counts_retrieve: ## Return counts of deployed, archived, and draft assets owned by the organization
- GET /api/v2/organizations/{uid_organization}/assets/minimal-list/ — api_v2_organizations_assets_minimal_list_retrieve: ## Return a minimal listing of assets in an organization Returns a paginated list of assets owned by the organization, including only `uid`…
- GET /api/v2/organizations/{uid_organization}/invites/ — api_v2_organizations_invites_list: ## List organization invites
- POST /api/v2/organizations/{uid_organization}/invites/ — api_v2_organizations_invites_create: ## Create Organization Invite * Create organization invites for registered and unregistered users.
- GET /api/v2/organizations/{uid_organization}/invites/{guid}/ — api_v2_organizations_invites_retrieve: ## Retrieve organization invite
- PATCH /api/v2/organizations/{uid_organization}/invites/{guid}/ — api_v2_organizations_invites_partial_update: ## Update Organization Invite * Update an organization invite to accept, decline, cancel, expire, or resend.
- DELETE /api/v2/organizations/{uid_organization}/invites/{guid}/ — api_v2_organizations_invites_destroy: ## Delete Organization Invite * Organization owner or admin can delete an organization invite.
- GET /api/v2/organizations/{uid_organization}/members/ — api_v2_organizations_members_list: ## List Members Retrieves all members in the specified organization.
- GET /api/v2/organizations/{uid_organization}/members/{username}/ — api_v2_organizations_members_retrieve: ## Retrieve Member Details Retrieves the details of a specific member within an organization by username.
- PATCH /api/v2/organizations/{uid_organization}/members/{username}/ — api_v2_organizations_members_partial_update: ## Update Member Role Updates the role of a member within the organization to `admin` or `member`.
- DELETE /api/v2/organizations/{uid_organization}/members/{username}/ — api_v2_organizations_members_destroy: ## Remove Member Delete an organization member.
- GET /api/v2/organizations/{uid_organization}/service_usage/ — api_v2_organizations_service_usage_retrieve: ## Organization Usage Tracker - Tracks the total usage of different services for each account in an organization - Tracks the submissions a…
- GET /api/v2/project-views/ — api_v2_project_views_list: ## List project views for current user
- GET /api/v2/project-views/{uid_project_view}/ — api_v2_project_views_retrieve: ## Retrieve project view of a shared project to current user
- GET /api/v2/project-views/{uid_project_view}/{obj_type}/export/ — api_v2_project_views_export_retrieve: ## Retrieve an export for the requested object * Note: `{obj_type}` can either be `users` or `assets`
- POST /api/v2/project-views/{uid_project_view}/{obj_type}/export/ — api_v2_project_views_export_create: ## Create an export for the requested object * Note: `{obj_type}` can either be `users` or `assets`
- GET /api/v2/project-views/{uid_project_view}/assets/ — api_v2_project_views_assets_retrieve: ## Retrieve assets available in project view
- GET /api/v2/project-views/{uid_project_view}/assets/counts/ — api_v2_project_views_assets_counts_retrieve: ## Return counts of deployed, archived, and draft assets in the project view
- GET /api/v2/project-views/{uid_project_view}/assets/minimal-list/ — api_v2_project_views_assets_minimal_list_retrieve: ## Return a minimal listing of assets in a project view Returns a paginated list of assets visible within the project view, including only…
- GET /api/v2/project-views/{uid_project_view}/users/ — api_v2_project_views_users_retrieve: ## Retrieve users available in project view
- GET /api/v2/service_usage/ — api_v2_service_usage_list: ⚠️ Deprecated ## Track Service Usage Tracks the total usage of different services for the logged-in user.
- GET /api/v2/users/ — api_v2_users_list: ## List users ⚠️ _Only available to superusers_ Search can be made with `q` parameter.
- GET /api/v2/users/{username}/ — api_v2_users_retrieve: ## Retrieve a user ⚠️ _Regular users have access to active users only_
- GET /me/ — me_retrieve: ## Retrieve current user profile
- PATCH /me/ — me_partial_update: ## Update current user infos
- DELETE /me/ — me_destroy: ## Delete current user > Payload Example: > > { > "confirm": "user__extra_details__uid", > } ### !!
- GET /me/emails/ — me_emails_list: ## View current user's email
- POST /me/emails/ — me_emails_create: ## Set a new email The new email will be unverified and replace existing unverified, non-primary emails.
- GET /me/social-accounts/ — me_social_accounts_list: ## List user's social accounts
- GET /me/social-accounts/{provider}/{uid_social_account}/ — me_social_accounts_retrieve: ## Retrieve a social account provider
- DELETE /me/social-accounts/{provider}/{uid_social_account}/ — me_social_accounts_destroy: ## Delete a social account provider
