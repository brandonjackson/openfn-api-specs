# Primero API (primero) v2.0

<!-- derived from openapi.json by `pnpm specs index primero` — do not edit by hand -->

base: https://{host} | auth: http/bearer (JWT) | 217 operations in 36 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## activity_log
- GET /api/v2/activity_log — getActivityLog: List recent activity relevant to the signed-in user

## agencies
- GET /api/v2/agencies — getAgencies: Query agencies
- POST /api/v2/agencies — createAgency: Create an agency
- GET /api/v2/agencies/{id} — getAgency: Fetch one agency
- PATCH /api/v2/agencies/{id} — updateAgency: Update an agency
- DELETE /api/v2/agencies/{id} — deleteAgency: Delete an agency

## alerts
- GET /api/v2/alerts — getAlerts: Count the alerts raised for the signed-in user
- GET /api/v2/cases/{case_id}/alerts — getCaseAlerts: List the alerts on a case
- DELETE /api/v2/cases/{case_id}/alerts/{id} — deleteCaseAlert: Dismiss an alert on a case
- GET /api/v2/families/{family_id}/alerts — getFamilyAlerts: List the alerts on a family
- GET /api/v2/incidents/{incident_id}/alerts — getIncidentAlerts: List the alerts on an incident
- DELETE /api/v2/incidents/{incident_id}/alerts/{id} — deleteIncidentAlert: Dismiss an alert on an incident
- GET /api/v2/registry_records/{registry_record_id}/alerts — getRegistryRecordAlerts: List the alerts on a registry record
- GET /api/v2/tracing_requests/{tracing_request_id}/alerts — getTracingRequestAlerts: List the alerts on a tracing request

## approvals
- PATCH /api/v2/cases/{case_id}/approvals/{id} — updateCaseApproval: Request, approve or reject a case approval
- PATCH /api/v2/incidents/{incident_id}/approvals/{id} — updateIncidentApproval: Request, approve or reject an incident approval
- PATCH /api/v2/tracing_requests/{tracing_request_id}/approvals/{id} — updateTracingRequestApproval: Request, approve or reject a tracing-request approval

## attachments
- POST /api/v2/cases/{case_id}/attachments — createCaseAttachment: Attach a file to a case
- GET /api/v2/cases/{case_id}/attachments/{id} — getCaseAttachment: Fetch one attachment of a case
- DELETE /api/v2/cases/{case_id}/attachments/{id} — deleteCaseAttachment: Detach a file from a case
- POST /api/v2/incidents/{incident_id}/attachments — createIncidentAttachment: Attach a file to an incident
- GET /api/v2/incidents/{incident_id}/attachments/{id} — getIncidentAttachment: Fetch one attachment of an incident
- DELETE /api/v2/incidents/{incident_id}/attachments/{id} — deleteIncidentAttachment: Detach a file from an incident
- POST /api/v2/tracing_requests/{tracing_request_id}/attachments — createTracingRequestAttachment: Attach a file to a tracing request
- GET /api/v2/tracing_requests/{tracing_request_id}/attachments/{id} — getTracingRequestAttachment: Fetch one attachment of a tracing request
- DELETE /api/v2/tracing_requests/{tracing_request_id}/attachments/{id} — deleteTracingRequestAttachment: Detach a file from a tracing request

## audit_logs
- GET /api/v2/audit_logs — getAuditLogs: Query the audit log

## cases
- GET /api/v2/cases — getCases: Query cases
- POST /api/v2/cases — createCase: Create a case
- GET /api/v2/cases/identified — getIdentifiedCase: Fetch the case the signed-in user has been identified as
- GET /api/v2/cases/{case_id}/case_relationships — getCaseRelationships: List a case's relationships to other cases
- POST /api/v2/cases/{case_id}/case_relationships — createCaseRelationship: Relate a case to another case
- PATCH /api/v2/cases/{case_id}/case_relationships/{id} — updateCaseRelationship: Update a case relationship
- DELETE /api/v2/cases/{case_id}/case_relationships/{id} — deleteCaseRelationship: Remove a case relationship
- GET /api/v2/cases/{case_id}/incidents — getCaseIncidents: List the incidents recorded against a case
- POST /api/v2/cases/{case_id}/incidents — createCaseIncidents: Create or update the incidents of a case in bulk
- POST /api/v2/cases/{case_id}/sync — createCaseWebhookSync: Push a case to the configured webhook receivers
- GET /api/v2/cases/{id} — getCase: Fetch one case
- PATCH /api/v2/cases/{id} — updateCase: Update a case
- DELETE /api/v2/cases/{id} — deleteCase: Disable a case

## configurations
- GET /api/v2/configurations — getConfigurations: Query configurations
- POST /api/v2/configurations — createConfiguration: Create a configuration
- GET /api/v2/configurations/{id} — getConfiguration: Fetch one configuration
- PATCH /api/v2/configurations/{id} — updateConfiguration: Update a configuration
- DELETE /api/v2/configurations/{id} — deleteConfiguration: Delete a configuration

## dashboards
- GET /api/v2/dashboards — getDashboards: List the dashboards available to the signed-in user, with their indicators computed

## exports
- GET /api/v2/exports — getExports: Query exports
- POST /api/v2/exports — createExport: Create an export
- GET /api/v2/exports/{bulk_export_id}/export_file — getExportFile: Download the file produced by a bulk export
- GET /api/v2/exports/{id} — getExport: Fetch one export
- DELETE /api/v2/exports/{id} — deleteExport: Delete an export

## families
- POST /api/v2/cases/{case_id}/family — createFamilyFromCase: Create a family record from a case
- GET /api/v2/families — getFamilies: Query families
- POST /api/v2/families — createFamily: Create a family
- POST /api/v2/families/{family_id}/case — createCaseFromFamily: Create a case from a family member
- GET /api/v2/families/{id} — getFamily: Fetch one family
- PATCH /api/v2/families/{id} — updateFamily: Update a family
- DELETE /api/v2/families/{id} — deleteFamily: Disable a family

## flags
- POST /api/v2/cases/flags — createCaseFlagsBulk: Flag several cases in one request
- GET /api/v2/cases/{case_id}/flags — getCaseFlags: List the flags on a case
- POST /api/v2/cases/{case_id}/flags — createCaseFlag: Flag a case
- PATCH /api/v2/cases/{case_id}/flags/{id} — updateCaseFlag: Unflag a case
- GET /api/v2/families/{family_id}/flags — getFamilyFlags: List the flags on a family
- POST /api/v2/families/{family_id}/flags — createFamilyFlag: Flag a family
- PATCH /api/v2/families/{family_id}/flags/{id} — updateFamilyFlag: Unflag a family
- GET /api/v2/flags — getFlags: List the flags on records the signed-in user owns
- POST /api/v2/incidents/flags — createIncidentFlagsBulk: Flag several incidents in one request
- GET /api/v2/incidents/{incident_id}/flags — getIncidentFlags: List the flags on an incident
- POST /api/v2/incidents/{incident_id}/flags — createIncidentFlag: Flag an incident
- PATCH /api/v2/incidents/{incident_id}/flags/{id} — updateIncidentFlag: Unflag an incident
- GET /api/v2/registry_records/{registry_record_id}/flags — getRegistryRecordFlags: List the flags on a registry record
- POST /api/v2/registry_records/{registry_record_id}/flags — createRegistryRecordFlag: Flag a registry record
- PATCH /api/v2/registry_records/{registry_record_id}/flags/{id} — updateRegistryRecordFlag: Unflag a registry record
- POST /api/v2/tracing_requests/flags — createTracingRequestFlagsBulk: Flag several tracing requests in one request
- GET /api/v2/tracing_requests/{tracing_request_id}/flags — getTracingRequestFlags: List the flags on a tracing request
- POST /api/v2/tracing_requests/{tracing_request_id}/flags — createTracingRequestFlag: Flag a tracing request
- PATCH /api/v2/tracing_requests/{tracing_request_id}/flags/{id} — updateTracingRequestFlag: Unflag a tracing request

## forms
- GET /api/v2/forms — getForms: Query form sections
- POST /api/v2/forms — createFormSection: Create a form section
- GET /api/v2/forms/export — exportForms: Export the form configuration as a spreadsheet
- GET /api/v2/forms/{id} — getFormSection: Fetch one form section
- PATCH /api/v2/forms/{id} — updateFormSection: Update a form section
- DELETE /api/v2/forms/{id} — deleteFormSection: Delete a form section

## identity_providers
- GET /api/v2/identity_providers — getIdentityProviders: List the configured single sign-on identity providers

## incidents
- GET /api/v2/incidents — getIncidents: Query incidents
- POST /api/v2/incidents — createIncident: Create an incident
- GET /api/v2/incidents/get_case_to_link — getCaseToLink: Find the case an incident should be linked to
- GET /api/v2/incidents/{id} — getIncident: Fetch one incident
- PATCH /api/v2/incidents/{id} — updateIncident: Update an incident
- DELETE /api/v2/incidents/{id} — deleteIncident: Disable an incident

## intakes
- POST /api/v2/intakes/{id} — createIntake: Submit an intake form
- GET /api/v2/intakes/{id}/forms — getIntakeForms: List the form sections of an intake
- GET /api/v2/intakes/{id}/lookups — getIntakeLookups: List the lookups referenced by an intake's forms

## locations
- GET /api/v2/locations — getLocations: Query locations
- POST /api/v2/locations — createLocation: Create a location
- POST /api/v2/locations/import — importLocations: Import locations from a file
- POST /api/v2/locations/update_bulk — updateLocationsBulk: Update several locations in one request
- GET /api/v2/locations/{id} — getLocation: Fetch one location
- PATCH /api/v2/locations/{id} — updateLocation: Update a location
- DELETE /api/v2/locations/{id} — deleteLocation: Delete a location

## lookups
- GET /api/v2/lookups — getLookups: Query lookups
- POST /api/v2/lookups — createLookup: Create a lookup
- GET /api/v2/lookups/{id} — getLookup: Fetch one lookup
- PATCH /api/v2/lookups/{id} — updateLookup: Update a lookup
- DELETE /api/v2/lookups/{id} — deleteLookup: Delete a lookup

## managed_reports
- GET /api/v2/managed_reports — getManagedReports: List the built-in managed reports
- GET /api/v2/managed_reports/export — exportManagedReport: Export a managed report
- GET /api/v2/managed_reports/{id} — getManagedReport: Fetch one managed report with its computed data

## matching
- GET /api/v2/cases/{case_id}/potential_matches — getCasePotentialMatches: List traces that potentially match a case
- GET /api/v2/cases/{case_id}/traces — getCaseTraces: List the traces matched to a case
- GET /api/v2/traces/{id} — getTrace: Fetch one trace
- PATCH /api/v2/traces/{id} — updateTrace: Match a trace to a case
- GET /api/v2/traces/{trace_id}/potential_matches — getTracePotentialMatches: List cases that potentially match a trace
- GET /api/v2/tracing_requests/{tracing_request_id}/traces — getTracingRequestTraces: List the traces of a tracing request

## primero
- GET /api/v2/primero — getPrimeroInfo: Public information about this Primero instance

## primero_modules
- GET /api/v2/primero_modules — getPrimeroModules: Query Primero modules
- GET /api/v2/primero_modules/{id} — getPrimeroModule: Fetch one Primero module
- PATCH /api/v2/primero_modules/{id} — updatePrimeroModule: Update a Primero module

## record_history
- GET /api/v2/cases/{case_id}/access_log — getCaseAccessLog: List who has accessed a case
- GET /api/v2/cases/{case_id}/record_history — getCaseRecordHistory: List the change history of a case
- GET /api/v2/families/{family_id}/access_log — getFamilyAccessLog: List who has accessed a family
- GET /api/v2/families/{family_id}/record_history — getFamilyRecordHistory: List the change history of a family
- GET /api/v2/incidents/{incident_id}/access_log — getIncidentAccessLog: List who has accessed an incident
- GET /api/v2/incidents/{incident_id}/record_history — getIncidentRecordHistory: List the change history of an incident
- GET /api/v2/registry_records/{registry_record_id}/access_log — getRegistryRecordAccessLog: List who has accessed a registry record
- GET /api/v2/registry_records/{registry_record_id}/record_history — getRegistryRecordRecordHistory: List the change history of a registry record
- GET /api/v2/tracing_requests/{tracing_request_id}/access_log — getTracingRequestAccessLog: List who has accessed a tracing request
- GET /api/v2/tracing_requests/{tracing_request_id}/record_history — getTracingRequestRecordHistory: List the change history of a tracing request

## registry_records
- GET /api/v2/registry_records — getRegistryRecords: Query registry records
- POST /api/v2/registry_records — createRegistryRecord: Create a registry record
- GET /api/v2/registry_records/{id} — getRegistryRecord: Fetch one registry record
- PATCH /api/v2/registry_records/{id} — updateRegistryRecord: Update a registry record
- DELETE /api/v2/registry_records/{id} — deleteRegistryRecord: Disable a registry record

## reports
- GET /api/v2/kpis/{id} — getKeyPerformanceIndicator: Compute one key performance indicator
- GET /api/v2/reports — getReports: Query reports
- POST /api/v2/reports — createReport: Create a report
- GET /api/v2/reports/{id} — getReport: Fetch one report
- PATCH /api/v2/reports/{id} — updateReport: Update a report
- DELETE /api/v2/reports/{id} — deleteReport: Delete a report
- GET /api/v2/unused_fields_report/current — getUnusedFieldsReport: Fetch a link to the current unused-fields report
- GET /api/v2/usage_reports/current — getUsageReport: Fetch the current quarter's usage report
- GET /api/v2/usage_reports/current/export — exportUsageReport: Download the current usage report as a spreadsheet

## roles
- GET /api/v2/permissions — getPermissions: List every permission a role can be granted
- GET /api/v2/roles — getRoles: Query roles
- POST /api/v2/roles — createRole: Create a role
- GET /api/v2/roles/{id} — getRole: Fetch one role
- PATCH /api/v2/roles/{id} — updateRole: Update a role
- DELETE /api/v2/roles/{id} — deleteRole: Delete a role

## saved_searches
- GET /api/v2/saved_searches — getSavedSearches: Query saved searches
- POST /api/v2/saved_searches — createSavedSearch: Create a saved search
- DELETE /api/v2/saved_searches/{id} — deleteSavedSearch: Delete a saved search

## system_settings
- GET /api/v2/codes_of_conduct — getCodesOfConduct: Fetch the current code of conduct
- POST /api/v2/codes_of_conduct — createCodeOfConduct: Publish a new code of conduct
- GET /api/v2/contact_information — getContactInformation: Fetch the support-contact block
- PATCH /api/v2/contact_information — updateContactInformation: Update the support-contact block
- GET /api/v2/system_settings — getSystemSettings: Fetch the instance's system settings

## tasks
- GET /api/v2/tasks — getTasks: List the signed-in user's due and overdue tasks

## tokens
- POST /api/v2/tokens — createToken: Issue or refresh a JWT
- DELETE /api/v2/tokens — deleteToken: Invalidate the token in the Authorization header

## tracing_requests
- GET /api/v2/tracing_requests — getTracingRequests: Query tracing requests
- POST /api/v2/tracing_requests — createTracingRequest: Create a tracing request
- GET /api/v2/tracing_requests/{id} — getTracingRequest: Fetch one tracing request
- PATCH /api/v2/tracing_requests/{id} — updateTracingRequest: Update a tracing request
- DELETE /api/v2/tracing_requests/{id} — deleteTracingRequest: Disable a tracing request

## transitions
- POST /api/v2/cases/assigns — createCaseAssignsBulk: Assign several cases in one request
- POST /api/v2/cases/referrals — createCaseReferralsBulk: Create the same referral across several cases
- POST /api/v2/cases/transfers — createCaseTransfersBulk: Create the same transfer across several cases
- GET /api/v2/cases/{case_id}/assigns — getCaseAssigns: List the assignments made on a case
- POST /api/v2/cases/{case_id}/assigns — createCaseAssign: Assign a case to another user
- GET /api/v2/cases/{case_id}/referrals — getCaseReferrals: List the referrals made on a case
- POST /api/v2/cases/{case_id}/referrals — createCaseReferral: Create a referral on a case
- PATCH /api/v2/cases/{case_id}/referrals/{id} — updateCaseReferral: Accept, reject or complete a referral
- DELETE /api/v2/cases/{case_id}/referrals/{id} — deleteCaseReferral: Relinquish or retract a referral
- GET /api/v2/cases/{case_id}/transfer_requests — getCaseTransferRequests: List the transfer requests made on a case
- POST /api/v2/cases/{case_id}/transfer_requests — createCaseTransferRequest: Create a transfer request on a case
- PATCH /api/v2/cases/{case_id}/transfer_requests/{id} — updateCaseTransferRequest: Accept or decline a transfer request
- GET /api/v2/cases/{case_id}/transfers — getCaseTransfers: List the transfers made on a case
- POST /api/v2/cases/{case_id}/transfers — createCaseTransfer: Create a transfer on a case
- PATCH /api/v2/cases/{case_id}/transfers/{id} — updateCaseTransfer: Accept or decline a transfer
- GET /api/v2/cases/{case_id}/transitions — getCaseTransitions: List every transition on a case
- POST /api/v2/families/assigns — createFamilyAssignsBulk: Assign several families in one request
- GET /api/v2/families/{family_id}/assigns — getFamilyAssigns: List the assignments made on a family
- POST /api/v2/families/{family_id}/assigns — createFamilyAssign: Assign a family to another user
- POST /api/v2/incidents/assigns — createIncidentAssignsBulk: Assign several incidents in one request
- GET /api/v2/incidents/{incident_id}/assigns — getIncidentAssigns: List the assignments made on an incident
- POST /api/v2/incidents/{incident_id}/assigns — createIncidentAssign: Assign an incident to another user
- GET /api/v2/incidents/{incident_id}/transitions — getIncidentTransitions: List every transition on an incident

## user_groups
- GET /api/v2/user_groups — getUserGroups: Query user groups
- POST /api/v2/user_groups — createUserGroup: Create an user group
- GET /api/v2/user_groups/{id} — getUserGroup: Fetch one user group
- PATCH /api/v2/user_groups/{id} — updateUserGroup: Update an user group
- DELETE /api/v2/user_groups/{id} — deleteUserGroup: Delete an user group

## users
- GET /api/v2/users — getUsers: Query users
- POST /api/v2/users — createUser: Create an user
- GET /api/v2/users/access — getUserAccess: Fetch the signed-in user's own permissions
- GET /api/v2/users/assign-to — getUsersToAssignTo: List users the caller may assign records to
- GET /api/v2/users/identified — getIdentifiedUser: Fetch the user the signed-in identity is linked to
- POST /api/v2/users/password-reset — resetPassword: Complete a password reset with a reset token
- POST /api/v2/users/password-reset-request — requestPasswordReset: Ask Primero to email a password-reset link
- GET /api/v2/users/refer-to — getUsersToReferTo: List users the caller may refer records to
- POST /api/v2/users/self-register — selfRegisterUser: Self-register a new account
- POST /api/v2/users/send_emails — sendUserEmails: Send the welcome email to several users
- GET /api/v2/users/transfer-to — getUsersToTransferTo: List users the caller may transfer records to
- POST /api/v2/users/update_bulk — updateUsersBulk: Update several users in one request
- GET /api/v2/users/{id} — getUser: Fetch one user
- PATCH /api/v2/users/{id} — updateUser: Update an user
- DELETE /api/v2/users/{id} — deleteUser: Delete an user
- POST /api/v2/users/{user_id}/password-reset-request — requestUserPasswordReset: Ask Primero to email a password-reset link to a specific user

## webhooks
- GET /api/v2/webhooks — getWebhooks: Query webhooks
- POST /api/v2/webhooks — createWebhook: Create a webhook
- GET /api/v2/webhooks/{id} — getWebhook: Fetch one webhook
- PATCH /api/v2/webhooks/{id} — updateWebhook: Update a webhook
- DELETE /api/v2/webhooks/{id} — deleteWebhook: Delete a webhook

## webpush
- GET /api/v2/webpush/config — getWebpushConfig: Fetch the browser-push configuration
- GET /api/v2/webpush/subscriptions — getWebpushSubscriptions: List the signed-in user's browser-push subscriptions
- POST /api/v2/webpush/subscriptions — createWebpushSubscription: Register or ping a browser-push subscription
- PATCH /api/v2/webpush/subscriptions/current — updateCurrentWebpushSubscription: Ping, enable or disable the current browser-push subscription
