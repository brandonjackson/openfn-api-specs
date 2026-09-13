# Salesforce REST API (salesforce) v67.0

<!-- derived from openapi.json by `pnpm specs index salesforce` — do not edit by hand -->

base: https://{myDomain}.my.salesforce.com | auth: http/bearer, oauth2 (authorizationCode) | 166 operations in 22 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Actions
- GET /services/data/v{version}/actions — listInvocableActions: List the invocable action groups
- HEAD /services/data/v{version}/actions — headInvocableActions: Return headers for the actions resource
- GET /services/data/v{version}/actions/custom — listCustomInvocableActions: List custom invocable actions
- HEAD /services/data/v{version}/actions/custom — headCustomInvocableActions: Return headers for the custom actions resource
- GET /services/data/v{version}/actions/standard — listStandardInvocableActions: List standard invocable actions
- HEAD /services/data/v{version}/actions/standard — headStandardInvocableActions: Return headers for the standard actions resource

## Bulk API
- POST /services/async/{version}/job — createBulkJob: Create a Bulk API (1.0) job
- GET /services/async/{version}/job/{jobId} — getBulkJob: Get a Bulk API (1.0) job
- POST /services/async/{version}/job/{jobId} — updateBulkJob: Close or abort a Bulk API (1.0) job
- GET /services/async/{version}/job/{jobId}/batch — listBulkBatches: List every batch in a job
- POST /services/async/{version}/job/{jobId}/batch — createBulkBatch: Add a batch of records to a job
- GET /services/async/{version}/job/{jobId}/batch/{batchId} — getBulkBatch: Get information about a batch
- GET /services/async/{version}/job/{jobId}/batch/{batchId}/request — getBulkBatchRequest: Download the data a batch was created with
- GET /services/async/{version}/job/{jobId}/batch/{batchId}/result — getBulkBatchResults: Download a batch’s per-record results

## Bulk API 2.0
- GET /services/data/v{version}/jobs/ingest — listIngestJobs: List Bulk API 2.0 ingest jobs
- POST /services/data/v{version}/jobs/ingest — createIngestJob: Create a Bulk API 2.0 ingest job
- GET /services/data/v{version}/jobs/ingest/{jobId} — getIngestJob: Get information about an ingest job
- PATCH /services/data/v{version}/jobs/ingest/{jobId} — updateIngestJobState: Close or abort an ingest job
- DELETE /services/data/v{version}/jobs/ingest/{jobId} — deleteIngestJob: Delete an ingest job
- PUT /services/data/v{version}/jobs/ingest/{jobId}/batches — uploadIngestJobData: Upload the CSV data for an ingest job
- GET /services/data/v{version}/jobs/ingest/{jobId}/failedResults — getIngestJobFailedResults: Download the records an ingest job failed to process
- GET /services/data/v{version}/jobs/ingest/{jobId}/successfulResults — getIngestJobSuccessfulResults: Download the records an ingest job processed successfully
- GET /services/data/v{version}/jobs/ingest/{jobId}/unprocessedrecords — getIngestJobUnprocessedRecords: Download the records an ingest job never processed
- GET /services/data/v{version}/jobs/query — listQueryJobs: List Bulk API 2.0 query jobs
- POST /services/data/v{version}/jobs/query — createQueryJob: Create a Bulk API 2.0 query job
- GET /services/data/v{version}/jobs/query/{queryJobId} — getQueryJob: Get information about a query job
- PATCH /services/data/v{version}/jobs/query/{queryJobId} — updateQueryJobState: Abort a query job
- DELETE /services/data/v{version}/jobs/query/{queryJobId} — deleteQueryJob: Delete a query job
- GET /services/data/v{version}/jobs/query/{queryJobId}/resultPages — getQueryJobResultPages: Get locators for fetching a query job’s results in parallel
- GET /services/data/v{version}/jobs/query/{queryJobId}/results — getQueryJobResults: Download the results of a completed query job

## Composite
- GET /services/data/v{version}/composite — listCompositeResources: List the available composite resources
- POST /services/data/v{version}/composite — composite: Run up to 25 subrequests in a single call
- POST /services/data/v{version}/composite/batch — compositeBatch: Run up to 25 independent subrequests in a single call
- POST /services/data/v{version}/composite/graph — compositeGraph: Run up to 500 subrequests as independently committed graphs
- GET /services/data/v{version}/composite/sobjects — getRecordCollection: Get up to 2000 records of one object by id
- POST /services/data/v{version}/composite/sobjects — createRecordCollection: Create up to 200 records in a single call
- PATCH /services/data/v{version}/composite/sobjects — updateRecordCollection: Update up to 200 records in a single call
- DELETE /services/data/v{version}/composite/sobjects — deleteRecordCollection: Delete up to 200 records in a single call
- POST /services/data/v{version}/composite/sobjects/{sObjectName} — getRecordCollectionByPost: Get records of one object by posting a list of ids
- PATCH /services/data/v{version}/composite/sobjects/{sObjectName}/{externalIdFieldName} — upsertRecordCollection: Upsert up to 200 records by external id
- POST /services/data/v{version}/composite/tree/{sObjectName} — createSObjectTree: Create one or more record trees in a single call

## Consent
- GET /services/data/v{version}/consent/action/portability — getPortabilityRequestStatus: Get the status of a portability request
- POST /services/data/v{version}/consent/action/portability — createPortabilityRequest: Compile data for a portability request
- GET /services/data/v{version}/consent/action/{action} — getConsent: Compile consent settings for an action
- POST /services/data/v{version}/consent/dsr/rtp/execute — executeConsentWrite: Write consent settings across the objects that track them
- GET /services/data/v{version}/consent/multiaction — getMultiActionConsent: Compile consent settings for several actions

## Discovery
- GET /services/data — listVersions: List available API versions
- GET /services/data/v{version} — listResources: List available REST resources for a version
- GET /services/data/v{version}/appMenu — listAppMenuTypes: List app menu types
- GET /services/data/v{version}/appMenu/AppSwitcher — getAppSwitcherMenu: Get App Switcher menu items
- HEAD /services/data/v{version}/appMenu/AppSwitcher — headAppSwitcherMenu: Return headers for the App Switcher menu
- GET /services/data/v{version}/appMenu/Salesforce1 — getMobileAppMenu: Get Salesforce mobile app menu items
- HEAD /services/data/v{version}/appMenu/Salesforce1 — headMobileAppMenu: Return headers for the mobile app menu
- GET /services/data/v{version}/limits — getLimits: List org limits
- GET /services/data/v{version}/limits/recordCount — getRecordCount: Get approximate record counts
- GET /services/data/v{version}/recent — listRecentlyViewedItems: List recently viewed items
- GET /services/data/v{version}/tabs — listTabs: List available tabs
- HEAD /services/data/v{version}/tabs — headTabs: Return headers for the tabs resource
- GET /services/data/v{version}/theme — getTheme: Get icons and colours for org objects

## Embedded Service
- GET /services/data/v{version}/support/embeddedservice/configuration/{embeddedServiceConfigDeveloperName} — getEmbeddedServiceConfig: Get an Embedded Service deployment configuration
- HEAD /services/data/v{version}/support/embeddedservice/configuration/{embeddedServiceConfigDeveloperName} — headEmbeddedServiceConfig: Return headers for an Embedded Service configuration

## Knowledge
- GET /services/data/v{version}/knowledgeManagement/settings — getKnowledgeSettings: Get knowledge language settings
- GET /services/data/v{version}/sobjects/{sObjectName}/suggestedArticles — getSuggestedArticlesForNewCase: Get articles suggested for a new case
- GET /services/data/v{version}/sobjects/{sObjectName}/{id}/suggestedArticles — getSuggestedArticlesForCase: Get articles suggested for an existing case
- GET /services/data/v{version}/support/dataCategoryGroups — listDataCategoryGroups: List data category groups
- GET /services/data/v{version}/support/dataCategoryGroups/{group}/dataCategories/{category} — getDataCategoryDetail: Get a data category and its children
- GET /services/data/v{version}/support/knowledgeArticles — listKnowledgeArticles: List knowledge articles
- GET /services/data/v{version}/support/knowledgeArticles/{articleIdOrUrlName} — getKnowledgeArticle: Get one knowledge article

## Layouts
- GET /services/data/v{version}/compactLayouts — getCompactLayouts: Get compact layouts for several objects
- GET /services/data/v{version}/sobjects/Global/describe/layouts — getGlobalPublisherLayouts: Get global publisher layouts
- HEAD /services/data/v{version}/sobjects/Global/describe/layouts — headGlobalPublisherLayouts: Return headers for the global publisher layouts
- GET /services/data/v{version}/sobjects/PlatformAction — getPlatformActions: Get the actions displayed in the UI for the current context
- GET /services/data/v{version}/sobjects/{sObjectName}/describe/approvalLayouts — getSObjectApprovalLayouts: Get approval layouts for an object
- HEAD /services/data/v{version}/sobjects/{sObjectName}/describe/approvalLayouts — headSObjectApprovalLayouts: Return headers for an object’s approval layouts
- GET /services/data/v{version}/sobjects/{sObjectName}/describe/approvalLayouts/{approvalProcessName} — getSObjectApprovalLayout: Get the layout for one approval process
- HEAD /services/data/v{version}/sobjects/{sObjectName}/describe/approvalLayouts/{approvalProcessName} — headSObjectApprovalLayout: Return headers for a single approval process layout
- GET /services/data/v{version}/sobjects/{sObjectName}/describe/compactLayouts — getSObjectCompactLayouts: Get compact layouts for an object
- HEAD /services/data/v{version}/sobjects/{sObjectName}/describe/compactLayouts — headSObjectCompactLayouts: Return headers for an object’s compact layouts
- GET /services/data/v{version}/sobjects/{sObjectName}/describe/layouts — getSObjectLayouts: Get page layouts for an object
- HEAD /services/data/v{version}/sobjects/{sObjectName}/describe/layouts — headSObjectLayouts: Return headers for an object’s layouts
- GET /services/data/v{version}/sobjects/{sObjectName}/describe/layouts/{recordTypeId} — getSObjectLayoutForRecordType: Get the layout for one record type
- HEAD /services/data/v{version}/sobjects/{sObjectName}/describe/layouts/{recordTypeId} — headSObjectLayoutForRecordType: Return headers for a record type layout

## Lightning Usage
- GET /services/data/v{version}/sobjects/LightningExitByPageMetrics — getLightningExitByPageMetrics: Get basic metadata for LightningExitByPageMetrics
- GET /services/data/v{version}/sobjects/LightningToggleMetrics — getLightningToggleMetrics: Get basic metadata for LightningToggleMetrics
- GET /services/data/v{version}/sobjects/LightningUsageByAppTypeMetrics — getLightningUsageByAppTypeMetrics: Get basic metadata for LightningUsageByAppTypeMetrics
- GET /services/data/v{version}/sobjects/LightningUsageByBrowserMetrics — getLightningUsageByBrowserMetrics: Get basic metadata for LightningUsageByBrowserMetrics
- GET /services/data/v{version}/sobjects/LightningUsageByFlexiPageMetrics — getLightningUsageByFlexiPageMetrics: Get basic metadata for LightningUsageByFlexiPageMetrics
- GET /services/data/v{version}/sobjects/LightningUsageByPageMetrics — getLightningUsageByPageMetrics: Get basic metadata for LightningUsageByPageMetrics

## List Views
- GET /services/data/v{version}/sobjects/{sObjectName}/listviews — listListViews: List the list views defined for an object
- GET /services/data/v{version}/sobjects/{sObjectName}/listviews/recent — listRecentListViews: List recently used list views for an object
- GET /services/data/v{version}/sobjects/{sObjectName}/listviews/{listViewId} — getListView: Get basic information about a list view
- GET /services/data/v{version}/sobjects/{sObjectName}/listviews/{listViewId}/describe — describeListView: Get the query a list view runs
- GET /services/data/v{version}/sobjects/{sObjectName}/listviews/{listViewId}/results — getListViewResults: Run a list view and return its rows

## Platform Events
- GET /services/data/v{version}/event/eventSchema/{schemaId} — getEventSchemaById: Get a platform event schema by schema id
- GET /services/data/v{version}/sobjects/{eventName}/eventSchema — getEventSchemaByName: Get a platform event schema by event name

## Process
- GET /services/data/v{version}/process/approvals — listApprovals: List approval processes and pending approval requests
- POST /services/data/v{version}/process/approvals — submitApprovalRequests: Submit, approve or reject approval requests
- HEAD /services/data/v{version}/process/approvals — headApprovals: Return headers for the approvals resource
- GET /services/data/v{version}/process/rules — listProcessRules: List the active workflow rules in the org
- POST /services/data/v{version}/process/rules — triggerProcessRules: Trigger workflow rules for a set of records
- HEAD /services/data/v{version}/process/rules — headProcessRules: Return headers for the process rules resource
- GET /services/data/v{version}/process/rules/{sObjectName} — listProcessRulesForSObject: List the active workflow rules for an object
- HEAD /services/data/v{version}/process/rules/{sObjectName} — headProcessRulesForSObject: Return headers for an object’s process rules
- GET /services/data/v{version}/process/rules/{sObjectName}/{workflowRuleId} — getProcessRule: Get one workflow rule
- POST /services/data/v{version}/process/rules/{sObjectName}/{workflowRuleId} — triggerProcessRule: Trigger one workflow rule for a set of records
- HEAD /services/data/v{version}/process/rules/{sObjectName}/{workflowRuleId} — headProcessRule: Return headers for one process rule

## Product Schedules
- GET /services/data/v{version}/sobjects/OpportunityLineItem/{opportunityLineItemId}/OpportunityLineItemSchedules — getProductSchedules: Get an opportunity product’s schedules
- PUT /services/data/v{version}/sobjects/OpportunityLineItem/{opportunityLineItemId}/OpportunityLineItemSchedules — createProductSchedules: Establish an opportunity product’s schedules
- DELETE /services/data/v{version}/sobjects/OpportunityLineItem/{opportunityLineItemId}/OpportunityLineItemSchedules — deleteProductSchedules: Delete an opportunity product’s schedules

## Query
- GET /services/data/v{version}/named/query/{queryApiName} — runNamedQuery: Run a Named Query API
- GET /services/data/v{version}/query — query: Run a SOQL query
- GET /services/data/v{version}/query/{queryLocator} — queryMore: Get the next batch of query results
- GET /services/data/v{version}/queryAll — queryAll: Run a SOQL query including deleted and archived records
- GET /services/data/v{version}/queryAll/{queryLocator} — queryAllMore: Get the next batch of queryAll results

## Quick Actions
- GET /services/data/v{version}/quickActions — listGlobalQuickActions: List global quick actions
- HEAD /services/data/v{version}/quickActions — headGlobalQuickActions: Return headers for the global quick actions
- GET /services/data/v{version}/sobjects/{sObjectName}/quickActions — listSObjectQuickActions: List quick actions for an object
- HEAD /services/data/v{version}/sobjects/{sObjectName}/quickActions — headSObjectQuickActions: Return headers for an object’s quick actions
- GET /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName} — getSObjectQuickAction: Get one quick action on an object
- POST /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName} — invokeSObjectQuickAction: Create a record using a quick action
- HEAD /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName} — headSObjectQuickAction: Return headers for one quick action
- GET /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName}/defaultValues — getSObjectQuickActionDefaultValues: Get a quick action’s default field values
- HEAD /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName}/defaultValues — headSObjectQuickActionDefaultValues: Return headers for quick action default values
- GET /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName}/defaultValues/{contextId} — getSObjectQuickActionDefaultValuesForRecord: Get a quick action’s default field values for one record
- HEAD /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName}/defaultValues/{contextId} — headSObjectQuickActionDefaultValuesForRecord: Return headers for record-context quick action default values
- GET /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName}/describe — describeSObjectQuickAction: Describe a quick action
- HEAD /services/data/v{version}/sobjects/{sObjectName}/quickActions/{actionName}/describe — headSObjectQuickActionDescribe: Return headers for a quick action description

## Scheduler
- POST /services/data/v{version}/scheduling/getAppointmentCandidates — getAppointmentCandidates: Get service resources available for an appointment
- POST /services/data/v{version}/scheduling/getAppointmentSlots — getAppointmentSlots: Get available Salesforce Scheduler appointment slots

## Search
- GET /services/data/v{version}/parameterizedSearch — parameterizedSearchGet: Search with parameters in the URI
- POST /services/data/v{version}/parameterizedSearch — parameterizedSearchPost: Search with parameters in the request body
- GET /services/data/v{version}/search — search: Run a SOSL search
- GET /services/data/v{version}/search/layout — getSearchResultLayouts: Get search result layouts for objects
- GET /services/data/v{version}/search/scopeOrder — getSearchScopeOrder: Get the default search scope and order
- GET /services/data/v{version}/search/suggestSearchQueries — getSuggestedSearchQueries: Get suggested search queries
- GET /services/data/v{version}/search/suggestTitleMatches — getSuggestedTitleMatches: Get knowledge article titles matching a search string
- GET /services/data/v{version}/search/suggestions — getSearchSuggestions: Get records suggested by autocomplete and instant results

## Surveys
- GET /services/data/v{version}/localizedvalue/record/{developerName}/{language} — getSurveyTranslation: Get the translated value of a survey field
- POST /services/data/v{version}/localizedvalue/records/delete — deleteSurveyTranslations: Delete translated values of survey fields
- POST /services/data/v{version}/localizedvalue/records/get — getSurveyTranslations: Get translated values of several survey fields
- POST /services/data/v{version}/localizedvalue/records/upsert — upsertSurveyTranslations: Add or update translated values of survey fields

## Users
- GET /services/data/v{version}/sobjects/SelfServiceUser/{selfServiceUserId}/password — getSelfServiceUserPasswordStatus: Check whether a self-service user’s password has expired
- POST /services/data/v{version}/sobjects/SelfServiceUser/{selfServiceUserId}/password — setSelfServiceUserPassword: Set a self-service user’s password
- DELETE /services/data/v{version}/sobjects/SelfServiceUser/{selfServiceUserId}/password — resetSelfServiceUserPassword: Reset a self-service user’s password
- HEAD /services/data/v{version}/sobjects/SelfServiceUser/{selfServiceUserId}/password — headSelfServiceUserPassword: Return headers for the self-service user password resource
- GET /services/data/v{version}/sobjects/User/{userId}/password — getUserPasswordStatus: Check whether a user’s password has expired
- POST /services/data/v{version}/sobjects/User/{userId}/password — setUserPassword: Set a user’s password
- DELETE /services/data/v{version}/sobjects/User/{userId}/password — resetUserPassword: Reset a user’s password
- HEAD /services/data/v{version}/sobjects/User/{userId}/password — headUserPassword: Return headers for the user password resource
- GET /services/data/v{version}/sobjects/relevantItems — listRelevantItems: List records relevant to the current user

## sObject Rows
- GET /services/data/v{version}/sobjects/{sObjectName}/{fieldName}/{fieldValue} — getRecordByExternalId: Get a record by external id
- POST /services/data/v{version}/sobjects/{sObjectName}/{fieldName}/{fieldValue} — createRecordByExternalId: Create a record with an external id
- PATCH /services/data/v{version}/sobjects/{sObjectName}/{fieldName}/{fieldValue} — upsertRecordByExternalId: Create or update a record by external id
- DELETE /services/data/v{version}/sobjects/{sObjectName}/{fieldName}/{fieldValue} — deleteRecordByExternalId: Delete a record by external id
- HEAD /services/data/v{version}/sobjects/{sObjectName}/{fieldName}/{fieldValue} — headRecordByExternalId: Return headers for a record addressed by external id
- GET /services/data/v{version}/sobjects/{sObjectName}/{id} — getRecord: Get a record by id
- PATCH /services/data/v{version}/sobjects/{sObjectName}/{id} — updateRecord: Update a record
- DELETE /services/data/v{version}/sobjects/{sObjectName}/{id} — deleteRecord: Delete a record
- GET /services/data/v{version}/sobjects/{sObjectName}/{id}/richTextImageFields/{fieldName}/{contentReferenceId} — getRichTextImage: Download an image embedded in a rich text field

## sObjects
- GET /services/data/v{version}/sobjects — describeGlobal: List the objects available in the org
- GET /services/data/v{version}/sobjects/{sObjectName} — getSObjectBasicInformation: Get basic metadata for an object
- POST /services/data/v{version}/sobjects/{sObjectName} — createRecord: Create a record
- GET /services/data/v{version}/sobjects/{sObjectName}/deleted — getDeletedRecords: List records deleted within a timespan
- GET /services/data/v{version}/sobjects/{sObjectName}/describe — describeSObject: Get field and other metadata for an object
- GET /services/data/v{version}/sobjects/{sObjectName}/describe/namedLayouts/{layoutName} — getNamedLayout: Get a named layout for an object
- GET /services/data/v{version}/sobjects/{sObjectName}/updated — getUpdatedRecords: List records created or updated within a timespan
