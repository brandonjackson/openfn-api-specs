# CommCare HQ API (commcare) v1

<!-- derived from openapi.json by `pnpm specs index commcare` — do not edit by hand -->

base: https://www.commcarehq.org, https://india.commcarehq.org, https://{host} | auth: http/basic, apiKey (header Authorization), http/bearer | 181 operations in 17 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Application
- GET /a/{domain}/api/application/v1/ — listApplications: List applications
- GET /a/{domain}/api/application/v1/{app_id}/ — getApplication: Get an application's structure
- GET /a/{domain}/api/v0.5/application/ — listApplicationsV05: List applications
- GET /a/{domain}/api/v0.5/application/{app_id}/ — getApplicationV05: Get an application's structure
- POST /a/{domain}/apps/api/import_app/ — importApplication: Import or update an application
- POST /a/{domain}/apps/api/{app_id}/multimedia/ — uploadApplicationMultimedia: Upload application multimedia
- GET /a/{domain}/apps/api/{app_id}/multimedia/status/{processing_id}/ — getApplicationMultimediaStatus: Get application multimedia upload status

## Audit
- GET /a/{domain}/api/action_times/v1/ — listNavigationEventAudits: List navigation audit entries
- GET /a/{domain}/api/v0.5/action_times/ — listNavigationEventAuditsV05: List navigation audit entries

## Case
- GET /a/{domain}/api/case/v1/ — listCases: List cases
- GET /a/{domain}/api/case/v1/{case_id}/ — getCase: Get a case
- GET /a/{domain}/api/v0.5/case/ — listCasesV05: List cases
- GET /a/{domain}/api/v0.5/case/{case_id}/ — getCaseV05: Get a case
- GET /a/{domain}/api/case/v2/ — listCasesV2: List cases (Case API v2)
- POST /a/{domain}/api/case/v2/ — createCaseV2: Create case(s) (Case API v2)
- PUT /a/{domain}/api/case/v2/ — upsertCasesV2: Upsert cases by external id (Case API v2)
- POST /a/{domain}/api/case/v2/bulk-fetch/ — bulkFetchCasesV2: Fetch cases in bulk (Case API v2)
- GET /a/{domain}/api/case/v2/{case_id} — getCaseV2: Get case(s) by id (Case API v2)
- PUT /a/{domain}/api/case/v2/{case_id} — updateCaseV2: Update a case (Case API v2)
- GET /a/{domain}/api/case/v2/ext/{external_id}/ — getCaseByExternalIdV2: Get a case by external id (Case API v2)
- PUT /a/{domain}/api/case/v2/ext/{external_id}/ — upsertCaseByExternalIdV2: Upsert a case by external id (Case API v2)
- GET /a/{domain}/api/v0.6/case/ — listCasesV2V06: List cases (Case API v2)
- POST /a/{domain}/api/v0.6/case/ — createCaseV2V06: Create case(s) (Case API v2)
- PUT /a/{domain}/api/v0.6/case/ — upsertCasesV2V06: Upsert cases by external id (Case API v2)
- POST /a/{domain}/api/v0.6/case/bulk-fetch/ — bulkFetchCasesV2V06: Fetch cases in bulk (Case API v2)
- GET /a/{domain}/api/v0.6/case/{case_id} — getCaseV2V06: Get case(s) by id (Case API v2)
- PUT /a/{domain}/api/v0.6/case/{case_id} — updateCaseV2V06: Update a case (Case API v2)
- GET /a/{domain}/api/v0.6/case/ext/{external_id}/ — getCaseByExternalIdV2V06: Get a case by external id (Case API v2)
- PUT /a/{domain}/api/v0.6/case/ext/{external_id}/ — upsertCaseByExternalIdV2V06: Upsert a case by external id (Case API v2)
- GET /a/{domain}/api/case_attachment/v1/{case_id}/{attachment_id} — getCaseAttachment: Download a case attachment
- GET /a/{domain}/api/case/attachment/{case_id}/{attachment_id} — getCaseAttachmentLegacy: Download a case attachment
- POST /a/{domain}/api/case/custom/{api_id}/ — postGenericInbound: Post to a custom inbound API

## Device log
- GET /a/{domain}/api/device-log/v1/ — listDeviceLogs: List device log entries
- GET /a/{domain}/api/device-log/v1/{id}/ — getDeviceLog: Get a device log entry
- GET /a/{domain}/api/v0.5/device-log/ — listDeviceLogsV05: List device log entries
- GET /a/{domain}/api/v0.5/device-log/{id}/ — getDeviceLogV05: Get a device log entry

## Form
- GET /a/{domain}/api/form/v1/ — listForms: List form submissions
- GET /a/{domain}/api/form/v1/{form_id}/ — getForm: Get a form submission
- GET /a/{domain}/api/v0.5/form/ — listFormsV05: List form submissions
- GET /a/{domain}/api/v0.5/form/{form_id}/ — getFormV05: Get a form submission
- GET /a/{domain}/api/form_attachment/v1/{instance_id}/{attachment_id} — getFormAttachment: Download a form attachment
- GET /a/{domain}/api/form/attachment/{instance_id}/{attachment_id} — getFormAttachmentLegacy: Download a form attachment

## Form submission
- POST /a/{domain}/receiver/ — submitForm: Submit a form
- POST /a/{domain}/receiver/{app_id}/ — submitFormForApp: Submit a form for an application
- POST /a/{domain}/receiver/api/ — submitFormApi: Submit a form (api alias)
- POST /a/{domain}/receiver/submission/ — submitFormOdk: Submit a form (ODK alias)
- GET /a/{domain}/phone/restore/ — getOtaRestore: OTA restore

## Group
- GET /a/{domain}/api/group/v1/ — listGroups: List groups
- POST /a/{domain}/api/group/v1/ — createGroup: Create a group
- PATCH /a/{domain}/api/group/v1/ — bulkCreateGroups: Create groups in bulk
- GET /a/{domain}/api/group/v1/{group_id}/ — getGroup: Get a group
- PUT /a/{domain}/api/group/v1/{group_id}/ — updateGroup: Update a group
- DELETE /a/{domain}/api/group/v1/{group_id}/ — deleteGroup: Delete a group
- GET /a/{domain}/api/v0.5/group/ — listGroupsV05: List groups
- POST /a/{domain}/api/v0.5/group/ — createGroupV05: Create a group
- PATCH /a/{domain}/api/v0.5/group/ — bulkCreateGroupsV05: Create groups in bulk
- GET /a/{domain}/api/v0.5/group/{group_id}/ — getGroupV05: Get a group
- PUT /a/{domain}/api/v0.5/group/{group_id}/ — updateGroupV05: Update a group
- DELETE /a/{domain}/api/v0.5/group/{group_id}/ — deleteGroupV05: Delete a group

## Location
- GET /a/{domain}/api/location/v1/ — listLocations: List locations
- POST /a/{domain}/api/location/v1/ — createLocation: Create a location
- GET /a/{domain}/api/location/v1/{location_id}/ — getLocation: Get a location
- PUT /a/{domain}/api/location/v1/{location_id}/ — updateLocation: Update a location
- GET /a/{domain}/api/v0.5/location/ — listLocationsV05: List locations
- POST /a/{domain}/api/v0.5/location/ — createLocationV05: Create a location
- GET /a/{domain}/api/v0.5/location/{location_id}/ — getLocationV05: Get a location
- PUT /a/{domain}/api/v0.5/location/{location_id}/ — updateLocationV05: Update a location
- GET /a/{domain}/api/location_type/v1/ — listLocationTypes: List location types
- GET /a/{domain}/api/location_type/v1/{id}/ — getLocationType: Get a location type
- GET /a/{domain}/api/v0.5/location_type/ — listLocationTypesV05: List location types
- GET /a/{domain}/api/v0.5/location_type/{id}/ — getLocationTypeV05: Get a location type
- GET /a/{domain}/api/location_internal/v1/ — listInternalLocations: List locations (internal)
- GET /a/{domain}/api/location_internal/v1/{location_id}/ — getInternalLocation: Get a location (internal)
- GET /a/{domain}/api/v0.5/location_internal/ — listInternalLocationsV05: List locations (internal)
- GET /a/{domain}/api/v0.5/location_internal/{location_id}/ — getInternalLocationV05: Get a location (internal)

## Lookup table
- GET /a/{domain}/api/fixture/v1/ — listFixtures: List lookup table rows
- GET /a/{domain}/api/fixture/v1/{fixture_item_id}/ — getFixture: Get a lookup table row
- GET /a/{domain}/api/v0.5/fixture/ — listFixturesV05: List lookup table rows
- GET /a/{domain}/api/v0.5/fixture/{fixture_item_id}/ — getFixtureV05: Get a lookup table row
- GET /a/{domain}/api/fixture_internal/v1/ — listInternalFixtures: List lookup table rows (internal)
- GET /a/{domain}/api/fixture_internal/v1/{fixture_item_id}/ — getInternalFixture: Get a lookup table row (internal)
- GET /a/{domain}/api/v0.5/fixture_internal/ — listInternalFixturesV05: List lookup table rows (internal)
- GET /a/{domain}/api/v0.5/fixture_internal/{fixture_item_id}/ — getInternalFixtureV05: Get a lookup table row (internal)
- GET /a/{domain}/api/lookup_table/v1/ — listLookupTables: List lookup tables
- POST /a/{domain}/api/lookup_table/v1/ — createLookupTable: Create a lookup table
- GET /a/{domain}/api/lookup_table/v1/{lookup_table_id}/ — getLookupTable: Get a lookup table
- PUT /a/{domain}/api/lookup_table/v1/{lookup_table_id}/ — updateLookupTable: Update a lookup table
- DELETE /a/{domain}/api/lookup_table/v1/{lookup_table_id}/ — deleteLookupTable: Delete a lookup table
- GET /a/{domain}/api/v0.5/lookup_table/ — listLookupTablesV05: List lookup tables
- POST /a/{domain}/api/v0.5/lookup_table/ — createLookupTableV05: Create a lookup table
- GET /a/{domain}/api/v0.5/lookup_table/{lookup_table_id}/ — getLookupTableV05: Get a lookup table
- PUT /a/{domain}/api/v0.5/lookup_table/{lookup_table_id}/ — updateLookupTableV05: Update a lookup table
- DELETE /a/{domain}/api/v0.5/lookup_table/{lookup_table_id}/ — deleteLookupTableV05: Delete a lookup table
- GET /a/{domain}/api/lookup_table_item/v1/ — listLookupTableItems: List lookup table rows
- POST /a/{domain}/api/lookup_table_item/v1/ — createLookupTableItem: Create a lookup table row
- GET /a/{domain}/api/lookup_table_item/v1/{lookup_table_item_id}/ — getLookupTableItem: Get a lookup table row
- PUT /a/{domain}/api/lookup_table_item/v1/{lookup_table_item_id}/ — updateLookupTableItem: Update a lookup table row
- DELETE /a/{domain}/api/lookup_table_item/v1/{lookup_table_item_id}/ — deleteLookupTableItem: Delete a lookup table row
- GET /a/{domain}/api/v0.5/lookup_table_item/ — listLookupTableItemsV05: List lookup table rows
- POST /a/{domain}/api/v0.5/lookup_table_item/ — createLookupTableItemV05: Create a lookup table row
- GET /a/{domain}/api/v0.5/lookup_table_item/{lookup_table_item_id}/ — getLookupTableItemV05: Get a lookup table row
- PUT /a/{domain}/api/v0.5/lookup_table_item/{lookup_table_item_id}/ — updateLookupTableItemV05: Update a lookup table row
- DELETE /a/{domain}/api/v0.5/lookup_table_item/{lookup_table_item_id}/ — deleteLookupTableItemV05: Delete a lookup table row

## Messaging
- GET /a/{domain}/api/messaging-event/v1/ — listMessagingEvents: List messaging events
- GET /a/{domain}/api/messaging-event/v1/{event_id}/ — getMessagingEvent: Get a messaging event
- GET /a/{domain}/api/v0.5/messaging-event/ — listMessagingEventsV05: List messaging events
- GET /a/{domain}/api/v0.5/messaging-event/{event_id}/ — getMessagingEventV05: Get a messaging event

## Mobile worker
- GET /a/{domain}/api/user/v1/ — listMobileWorkers: List mobile workers
- POST /a/{domain}/api/user/v1/ — createMobileWorker: Create a mobile worker
- GET /a/{domain}/api/user/v1/{user_id}/ — getMobileWorker: Get a mobile worker
- PUT /a/{domain}/api/user/v1/{user_id}/ — updateMobileWorker: Update a mobile worker
- DELETE /a/{domain}/api/user/v1/{user_id}/ — deleteMobileWorker: Delete a mobile worker
- GET /a/{domain}/api/v0.5/user/ — listMobileWorkersV05: List mobile workers
- POST /a/{domain}/api/v0.5/user/ — createMobileWorkerV05: Create a mobile worker
- GET /a/{domain}/api/v0.5/user/{user_id}/ — getMobileWorkerV05: Get a mobile worker
- PUT /a/{domain}/api/v0.5/user/{user_id}/ — updateMobileWorkerV05: Update a mobile worker
- DELETE /a/{domain}/api/v0.5/user/{user_id}/ — deleteMobileWorkerV05: Delete a mobile worker
- GET /a/{domain}/api/bulk-user/v1/ — listBulkUsers: List users (condensed)
- GET /a/{domain}/api/v0.5/bulk-user/ — listBulkUsersV05: List users (condensed)
- GET /a/{domain}/api/analytics-roles/v1/{user_id}/ — getAnalyticsRole: Get a user's CommCare Analytics roles
- POST /a/{domain}/api/user/v1/{user_id}/email_password_reset/ — sendMobileWorkerPasswordReset: Send a password reset email

## OData
- GET /a/{domain}/api/odata/cases/v1/{config_id}/ — getODataCaseFeed: OData feed of cases
- GET /a/{domain}/api/odata/cases/v1/{config_id}/$metadata — getODataCaseMetadata: OData metadata document for cases
- GET /a/{domain}/api/odata/cases/v1/{config_id}/{table_id}/ — getODataCaseTableFeed: OData feed of cases for one table
- GET /a/{domain}/api/v0.5/odata/cases/{config_id}/ — getODataCaseFeedV05: OData feed of cases
- GET /a/{domain}/api/v0.5/odata/cases/{config_id}/$metadata — getODataCaseMetadataV05: OData metadata document for cases
- GET /a/{domain}/api/v0.5/odata/cases/{config_id}/{table_id}/ — getODataCaseTableFeedV05: OData feed of cases for one table
- GET /a/{domain}/api/odata/forms/v1/{config_id}/ — getODataFormFeed: OData feed of forms
- GET /a/{domain}/api/odata/forms/v1/{config_id}/$metadata — getODataFormMetadata: OData metadata document for forms
- GET /a/{domain}/api/odata/forms/v1/{config_id}/{table_id}/ — getODataFormTableFeed: OData feed of forms for one table
- GET /a/{domain}/api/v0.5/odata/forms/{config_id}/ — getODataFormFeedV05: OData feed of forms
- GET /a/{domain}/api/v0.5/odata/forms/{config_id}/$metadata — getODataFormMetadataV05: OData metadata document for forms
- GET /a/{domain}/api/v0.5/odata/forms/{config_id}/{table_id}/ — getODataFormTableFeedV05: OData feed of forms for one table

## Project space
- GET /a/{domain}/api/project_space_metadata/v1/ — listDomainMetadatas: List project-space metadata
- GET /a/{domain}/api/project_space_metadata/v1/{name}/ — getDomainMetadata: Get project-space metadata
- GET /a/{domain}/api/v0.5/project_space_metadata/ — listDomainMetadatasV05: List project-space metadata
- GET /a/{domain}/api/v0.5/project_space_metadata/{name}/ — getDomainMetadataV05: Get project-space metadata
- GET /a/{domain}/api/domain_forms/v1/ — listDomainFormSummarys: List an application's forms
- GET /a/{domain}/api/v0.5/domain_forms/ — listDomainFormSummarysV05: List an application's forms
- GET /a/{domain}/api/domain_cases/v1/ — listDomainCaseTypes: List case types in use
- GET /a/{domain}/api/v0.5/domain_cases/ — listDomainCaseTypesV05: List case types in use
- GET /a/{domain}/api/domain_usernames/v1/ — listDomainUsernames: List usernames
- GET /a/{domain}/api/v0.5/domain_usernames/ — listDomainUsernamesV05: List usernames

## Report
- GET /a/{domain}/api/simplereportconfiguration/v1/ — listReportConfigurations: List configurable reports
- GET /a/{domain}/api/simplereportconfiguration/v1/{report_id}/ — getReportConfiguration: Get a configurable report definition
- GET /a/{domain}/api/v0.5/simplereportconfiguration/ — listReportConfigurationsV05: List configurable reports
- GET /a/{domain}/api/v0.5/simplereportconfiguration/{report_id}/ — getReportConfigurationV05: Get a configurable report definition
- GET /a/{domain}/api/datasourceconfiguration/v1/ — listDataSourceConfigurations: List report data sources
- GET /a/{domain}/api/datasourceconfiguration/v1/{data_source_id}/ — getDataSourceConfiguration: Get a report data source
- GET /a/{domain}/api/v0.5/datasourceconfiguration/ — listDataSourceConfigurationsV05: List report data sources
- GET /a/{domain}/api/v0.5/datasourceconfiguration/{data_source_id}/ — getDataSourceConfigurationV05: Get a report data source
- GET /a/{domain}/api/det_export_instance/v1/ — listDETExportInstances: List Data Export Tool exports
- GET /a/{domain}/api/det_export_instance/v1/{export_id}/ — getDETExportInstance: Get a Data Export Tool export
- GET /a/{domain}/api/configurablereportdata/v1/{report_id}/ — getReportData: Download configurable report data
- GET /a/{domain}/api/v0.5/configurablereportdata/{report_id}/ — getReportDataV05: Download configurable report data
- GET /a/{domain}/api/ucr/v1/ — getUcrData: Query a user-configurable report data source
- GET /a/{domain}/api/v0.5/ucr/ — getUcrDataV05: Query a user-configurable report data source

## Supply
- GET /a/{domain}/api/v0.3/product/ — listProductsV03: List products
- GET /a/{domain}/api/v0.3/product/{product_id}/ — getProductV03: Get a product

## Upload
- POST /a/{domain}/importer/excel/bulk_upload_api/ — bulkUploadCases: Bulk import case data from a spreadsheet
- POST /a/{domain}/fixtures/fixapi/ — bulkUploadLookupTables: Bulk upload lookup table data
- GET /a/{domain}/fixtures/fixapi/status/{download_id}/ — getLookupTableUploadStatus: Get lookup table upload status

## Web user
- GET /a/{domain}/api/web-user/v1/ — listWebUsers: List web users
- POST /a/{domain}/api/web-user/v1/ — inviteWebUser: Invite a web user
- GET /a/{domain}/api/web-user/v1/{user_id}/ — getWebUser: Get a web user
- PUT /a/{domain}/api/web-user/v1/{user_id}/ — updateWebUser: Update a web user
- DELETE /a/{domain}/api/web-user/v1/{user_id}/ — deleteWebUser: Remove a web user from the project space
- GET /a/{domain}/api/v0.5/web-user/ — listWebUsersV05: List web users
- POST /a/{domain}/api/v0.5/web-user/ — inviteWebUserV05: Invite a web user
- GET /a/{domain}/api/v0.5/web-user/{user_id}/ — getWebUserV05: Get a web user
- PUT /a/{domain}/api/v0.5/web-user/{user_id}/ — updateWebUserV05: Update a web user
- DELETE /a/{domain}/api/v0.5/web-user/{user_id}/ — deleteWebUserV05: Remove a web user from the project space
- POST /a/{domain}/api/invitation/v1/ — createInvitation: Invite a web user
- POST /a/{domain}/api/sso/v1/ — authenticateSsoSession: Authenticate a user (single sign-on)
- POST /a/{domain}/api/v0.5/sso/ — authenticateSsoSessionV05: Authenticate a user (single sign-on)
- GET /api/user_domains/v1/ — listUserDomains: List the authenticated user's project spaces
- GET /api/v0.5/user_domains/ — listUserDomainsV05: List the authenticated user's project spaces
- GET /api/identity/v1/ — getIdentity: Get the authenticated user
- GET /api/v0.5/identity/ — getIdentityV05: Get the authenticated user
- POST /a/{domain}/api/web-user/v1/{user_id}/activate/ — activateWebUser: Reactivate a web user
- POST /a/{domain}/api/web-user/v1/{user_id}/deactivate/ — deactivateWebUser: Deactivate a web user
