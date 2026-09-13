# CHT API (cht) v5.3.0

<!-- derived from openapi.json by `pnpm specs index cht` — do not edit by hand -->

base: / | auth: not declared | 86 operations in 12 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Bulk
- POST /api/v1/archive — v1ArchivePost: Enqueue documents for archiving
- POST /api/v1/bulk-delete — v1BulkDeletePost: Bulk delete documents
- GET /api/v1/hydrate — v1HydrateGet: Hydrate documents by id (GET)
- POST /api/v1/hydrate — v1HydratePost: Hydrate documents by id (POST)

## Config
- PUT /api/v1/credentials/{key} — v1CredentialsKeyPut: Set a credential
- GET /api/v1/forms — v1FormsGet: List installed forms
- GET /api/v1/forms/{form} — v1FormsFormGet: Get a form definition
- POST /api/v1/forms/validate — v1FormsValidatePost: Validate an XForm
- GET /api/v1/settings — v1SettingsGet: Get app settings
- PUT /api/v1/settings — v1SettingsPut: Update app settings
- GET /api/v1/settings/deprecated-transitions — v1SettingsDeprecatedTransitionsGet: Get deprecated transitions

## Contact
- GET /api/v1/contact/{id} — v1ContactIdGet: Get a contact by id
- GET /api/v1/contact/uuid — v1ContactUuidGet: Get contact UUIDs
- GET /api/v1/contact — v1ContactGet: Get contacts
- POST /api/v1/contact/summary — v1ContactSummaryPost: Get contact summaries by id
- GET /api/v1/contacts-by-phone — v1ContactsByPhoneGet: Find contacts by phone number
- POST /api/v1/contacts-by-phone — v1ContactsByPhonePost: Find contacts by phone number (POST)

## Export
- GET /api/v2/export/dhis — v2ExportDhisGet: Export DHIS2 target data
- POST /api/v2/export/dhis — v2ExportDhisPost: Export DHIS2 target data (deprecated)
- GET /api/v2/export/reports — v2ExportReportsGet: Export reports
- POST /api/v2/export/reports — v2ExportReportsPost: Export reports (deprecated)
- GET /api/v2/export/messages — v2ExportMessagesGet: Export messages
- POST /api/v2/export/messages — v2ExportMessagesPost: Export messages (deprecated)
- GET /api/v2/export/contacts — v2ExportContactsGet: Export contacts
- POST /api/v2/export/contacts — v2ExportContactsPost: Export contacts (deprecated)
- GET /api/v2/export/feedback — v2ExportFeedbackGet: Export feedback
- POST /api/v2/export/feedback — v2ExportFeedbackPost: Export feedback (deprecated)
- GET /api/v2/export/user-devices — v2ExportUserDevicesGet: Export user device information (deprecated)
- POST /api/v2/export/user-devices — v2ExportUserDevicesPost: Export user device information (deprecated)

## Monitoring
- GET /api/v1/express-metrics — v1ExpressMetricsGet: Get metrics for Express API endpoints
- GET /api/info — apiInfoGet: Get the version of the CHT server
- GET /api/deploy-info — apiDeployInfoGet: Get deploy information
- GET /api/v1/impact — v1ImpactGet: Get impact metrics
- GET /api/v1/monitoring — v1MonitoringGet: Get monitoring metrics (deprecated)
- GET /api/v2/monitoring — v2MonitoringGet: Get monitoring metrics

## Person
- POST /api/v1/people — v1PeoplePost: Create a person (deprecated)
- GET /api/v1/person/{id} — v1PersonIdGet: Get a person by id
- PUT /api/v1/person/{id} — v1PersonIdPut: Update a person
- GET /api/v1/person — v1PersonGet: Get persons
- POST /api/v1/person — v1PersonPost: Create a new person

## Place
- POST /api/v1/places — v1PlacesPost: Create a place (deprecated)
- POST /api/v1/places/{id} — v1PlacesIdPost: Update a place (deprecated)
- GET /api/v1/place/{id} — v1PlaceIdGet: Get a place by id
- PUT /api/v1/place/{id} — v1PlaceIdPut: Update a place
- GET /api/v1/place — v1PlaceGet: Get places
- POST /api/v1/place — v1PlacePost: Create a new place

## Report
- GET /api/v1/report/{id} — v1ReportIdGet: Get a report by id
- PUT /api/v1/report/{id} — v1ReportIdPut: Update a report
- GET /api/v1/report/uuid — v1ReportUuidGet: Get report UUIDs
- POST /api/v1/report/summary — v1ReportSummaryPost: Get report summaries by id
- GET /api/v1/report — v1ReportGet: Get reports
- POST /api/v1/report — v1ReportPost: Create a new report

## SMS
- POST /api/v1/sms/africastalking/incoming-messages — v1SmsAfricasTalkingIncomingMessagesPost: Receive incoming SMS from Africa's Talking
- POST /api/v1/sms/africastalking/delivery-reports — v1SmsAfricasTalkingDeliveryReportsPost: Receive delivery reports from Africa's Talking
- POST /api/v1/sms/radpidpro/incoming-messages — v1SmsRadpidproIncomingMessagesPost: Receive incoming SMS from RapidPro (deprecated)
- POST /api/v2/sms/rapidpro/incoming-messages — v2SmsRapidProIncomingMessagesPost: Receive incoming SMS from RapidPro
- POST /api/v1/records — v1RecordsPost: Create a record (deprecated)
- POST /api/v2/records — v2RecordsPost: Create a record
- GET /api/sms — smsGet: Check SMS gateway connectivity
- POST /api/sms — smsPost: Exchange SMS messages with cht-gateway

## Target
- GET /api/v1/target/{id} — v1TargetIdGet: Get a target by id
- GET /api/v1/target — v1TargetGet: Get targets

## Upgrade
- GET /api/v2/upgrade/can-upgrade — v2UpgradeCanUpgradeGet: Check if an upgrade can be performed
- POST /api/v1/upgrade — v1UpgradePost: Upgrade to a version (deprecated)
- GET /api/v2/upgrade — v2UpgradeGet: Get upgrade status
- POST /api/v2/upgrade — v2UpgradePost: Upgrade to a version
- DELETE /api/v2/upgrade — v2UpgradeDelete: Abort an upgrade
- POST /api/v1/upgrade/stage — v1UpgradeStagePost: Stage an upgrade (deprecated)
- POST /api/v2/upgrade/stage — v2UpgradeStagePost: Stage an upgrade
- POST /api/v1/upgrade/complete — v1UpgradeCompletePost: Complete a staged upgrade (deprecated)
- POST /api/v2/upgrade/complete — v2UpgradeCompletePost: Complete a staged upgrade
- POST /api/v2/upgrade/service-worker — v2UpgradeServiceWorkerPost: Update the service worker
- POST /api/v2/upgrade/compare — v2UpgradeComparePost: Compare build versions

## User
- GET /api/v1/replication-failure-logs — v1ReplicationFailureLogsGet: Get replication failure logs
- GET /api/v1/replication-health/failed — v1ReplicationHealthFailedGet: Get users that are failing to replicate
- GET /api/v1/users-doc-count — v1UsersDocCountGet: Get user document replication counts
- GET /api/v1/users — v1UsersGet: List users (deprecated)
- POST /api/v1/users — v1UsersPost: Create users (deprecated)
- POST /api/v1/users/{username} — v1UsersUsernamePost: Update a user (deprecated)
- DELETE /api/v1/users/{username} — v1UsersUsernameDelete: Delete a user
- GET /api/v1/users-info — v1UsersInfoGet: Get user replication info
- GET /api/v2/users/{username} — v2UsersUsernameGet: Get a user by username.
- GET /api/v2/users — v2UsersGet: List users
- POST /api/v2/users — v2UsersPost: Create users - bulk import (JSON or CSV)
- POST /api/v3/users — v3UsersPost: Create a user
- POST /api/v3/users/{username} — v3UsersUsernamePost: Update a user
