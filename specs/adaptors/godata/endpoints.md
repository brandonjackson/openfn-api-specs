# Go.Data API (godata) v2.50.3

<!-- derived from openapi.json by `pnpm specs index godata` — do not edit by hand -->

base: https://{host}/api, http://localhost:3000/api | auth: apiKey (query access_token), apiKey (header Authorization) | 507 operations in 30 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## audit-logs
- GET /audit-logs — listAuditLogs: List audit logs.
- GET /audit-logs/count — countAuditLogs: Count audit logs.
- POST /audit-logs/export — exportFilteredAuditLogs: Export filtered list of audit-logs

## backups
- GET /backups — listBackups: List backups.
- POST /backups — createManualBackup: Create backups
- GET /backups/count — countBackups: Count backups.
- GET /backups/{id} — getBackup: Find a backup by id.
- DELETE /backups/{id} — removeBackup: Remove backup
- POST /backups/{id}/restore — restoreBackup: Restore backup
- GET /backups/{id}/user — getBackupUser: Fetch the user of a backup.

## captcha
- GET /captcha/generate-svg — generateSVG: Generate a SVG captcha

## client-applications
- GET /client-applications — listClientApplications: List client applications.
- POST /client-applications — createClientApplication: Create a clientApplication.
- GET /client-applications/count — countClientApplications: Count client applications.
- GET /client-applications/{id} — getClientApplication: Find a clientApplication by id.
- PUT /client-applications/{id} — updateClientApplication: Update a clientApplication (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /client-applications/{id} — patchClientApplication: Patch attributes of a clientApplication.
- DELETE /client-applications/{id} — deleteClientApplication: Delete a clientApplication by id.
- GET /client-applications/{id}/configuration-file — downloadConfigurationFile: Generate and download a (QR-Code) PNG file containing client application configuration.

## database-export-logs
- GET /database-export-logs — listDatabaseExportLogs: List database export logs.
- GET /database-export-logs/count — countDatabaseExportLogs: Count database export logs.
- GET /database-export-logs/{id} — getDatabaseExportLog: Find a databaseExportLog by id.
- DELETE /database-export-logs/{id} — deleteDatabaseExportLog: Delete a databaseExportLog by id.

## devices
- GET /devices — listDevices: List devices.
- GET /devices/count — countDevices: Count devices.
- GET /devices/find-by-physical-device-id/{nk} — findByPhysicalDeviceId: Queries devices
- POST /devices/wipe-complete — wipeComplete: Wipe completed successfully
- GET /devices/{id} — getDevice: Find a device by id.
- PUT /devices/{id} — updateDevice: Update a device (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /devices/{id} — patchDevice: Patch attributes of a device.
- DELETE /devices/{id} — deleteDevice: Delete a device by id.
- GET /devices/{id}/history — listDeviceHistory: List the history of a device.
- GET /devices/{id}/history/count — countDeviceHistory: Count the history of a device.
- POST /devices/{id}/wipe — wipe: Wipe Device

## export-logs
- GET /export-logs — listExportLogs: List export logs.
- GET /export-logs/count — countExportLogs: Count export logs.
- GET /export-logs/{id} — getExportLog: Find a exportLog by id.
- GET /export-logs/{id}/download — downloadExportedFile: Export filtered list of relationships

## filter-mappings
- GET /filter-mappings — listFilterMappings: List filter mappings.
- POST /filter-mappings — createFilterMapping: Create a filterMapping.
- GET /filter-mappings/count — countFilterMappings: Count filter mappings.
- GET /filter-mappings/{id} — getFilterMapping: Find a filterMapping by id.
- PUT /filter-mappings/{id} — updateFilterMapping: Update a filterMapping (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /filter-mappings/{id} — patchFilterMapping: Patch attributes of a filterMapping.
- DELETE /filter-mappings/{id} — deleteFilterMapping: Delete a filterMapping by id.

## help-categories
- GET /help-categories — listHelpCategories: List help categories.
- POST /help-categories — createHelpCategory: Create a helpCategory.
- GET /help-categories/count — countHelpCategories: Count help categories.
- GET /help-categories/search-help-category — searchHelpCategory: Returns the help categories that contain the text sent
- GET /help-categories/search-help-items — searchHelpItem: Returns the help items that contain the text sent
- GET /help-categories/{id} — getHelpCategory: Find a helpCategory by id.
- PUT /help-categories/{id} — updateHelpCategory: Update a helpCategory (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /help-categories/{id} — patchHelpCategory: Patch attributes of a helpCategory.
- DELETE /help-categories/{id} — deleteHelpCategory: Delete a helpCategory by id.
- GET /help-categories/{id}/help-items — listHelpCategoryHelpItems: List the helpItems of a helpCategory.
- POST /help-categories/{id}/help-items — createHelpCategoryHelpItems: Create a helpItem in the helpItems of a helpCategory.
- GET /help-categories/{id}/help-items/count — countHelpCategoryHelpItems: Count the helpItems of a helpCategory.
- GET /help-categories/{id}/help-items/{fk} — getHelpCategoryHelpItemsById: Find a helpItem in the helpItems of a helpCategory.
- PUT /help-categories/{id}/help-items/{fk} — updateHelpItem: Update a help item
- DELETE /help-categories/{id}/help-items/{fk} — deleteHelpCategoryHelpItemsById: Delete a helpItem from the helpItems of a helpCategory.
- POST /help-categories/{id}/help-items/{fk}/approve — approveHelpItem: Approves a help item

## help-items
- GET /help-items — getHelpItems: Queries help items
- GET /help-items/count — countHelpItems: Count help items

## icons
- GET /icons — listIcons: List icons.
- POST /icons — uploadIcon: Create a new instance of the model and persist it into the data source.
- GET /icons/count — countIcons: Count icons.
- GET /icons/{id} — getIcon: Find a icon by id.
- DELETE /icons/{id} — deleteIcon: Delete a icon by id.
- GET /icons/{id}/download — download: Download an icon.

## import-logs
- GET /import-logs — listImportLogs: List import logs.
- GET /import-logs/count — countImportLogs: Count import logs.
- GET /import-logs/{id} — getImportLog: Find a importLog by id.

## import-mappings
- GET /import-mappings — listImportMappings: List import mappings.
- POST /import-mappings — createImportMapping: Create a importMapping.
- GET /import-mappings/count — countImportMappings: Count import mappings.
- GET /import-mappings/{id} — getImportMapping: Find a importMapping by id.
- PUT /import-mappings/{id} — updateImportMapping: Update a importMapping (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /import-mappings/{id} — patchImportMapping: Patch attributes of a importMapping.
- DELETE /import-mappings/{id} — deleteImportMapping: Delete a importMapping by id.

## import-results
- GET /import-results — listImportResults: List import results.
- GET /import-results/count — countImportResults: Count import results.
- GET /import-results/{id} — getImportResult: Find a importResult by id.

## importable-files
- POST /importable-files — uploadImportableFile: Upload a file and get file headers
- POST /importable-files/{id}/distinct-values-json — getJsonDistinctValuesById: Retrieve distinct values from an uploaded file
- GET /importable-files/{id}/json — getJsonById: Retrieve JSON version of an uploaded file

## languages
- GET /languages — listLanguages: List languages.
- POST /languages — createLanguage: Create a language.
- GET /languages/count — countLanguages: Count languages.
- GET /languages/{id} — getLanguage: Find a language by id.
- PUT /languages/{id} — updateLanguage: Update a language (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /languages/{id} — patchLanguage: Patch attributes of a language.
- DELETE /languages/{id} — deleteLanguage: Delete a language by id.
- GET /languages/{id}/language-tokens — getLanguageTokens: Queries language tokens of language.
- GET /languages/{id}/language-tokens/count — countLanguageLanguageTokens: Count the languageTokens of a language.
- GET /languages/{id}/language-tokens/export — exportLanguageTokensFile: Download a translation file for a language.
- POST /languages/{id}/language-tokens/import — importLanguageTokensFile: Import a translation file for a language

## locations
- GET /locations — listLocations: Queries locations.
- POST /locations — createLocation: Create a location.
- GET /locations/count — countLocations: Count locations.
- POST /locations/filter — listLocations2: Queries locations.
- GET /locations/hierarchical — getHierarchicalList: Get hierarchical list of locations.
- GET /locations/hierarchical/export — exportHierarchicalList: Export hierarchical list of locations.
- POST /locations/import — importHierarchicalList: Import a hierarchical locations list (JSON)
- POST /locations/import-importable-file-using-map — importImportableFileUsingMap: Import a hierarchical locations list coming from a flat XLS file that was previously uploaded as an importable file
- GET /locations/{id} — getLocation: Find a location by id.
- PUT /locations/{id} — updateLocation: Update a location (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /locations/{id} — patchLocation: Patch attributes of a location.
- DELETE /locations/{id} — deleteLocation: Delete a location by id.
- GET /locations/{id}/parent-location — getLocationParentLocation: Fetch the parentLocation of a location.
- POST /locations/{id}/propagate-geo-location — propagateGeoLocationToLinkedPeople: Propagate Geo-Location to linked people.
- GET /locations/{id}/usage — getUsage: Find usage for a record.
- GET /locations/{id}/usage/count — countUsage: Count usage for a record.

## logs
- POST /logs — addLogs: Write log messages

## oauth
- POST /oauth/token — createToken: Generate an OAuth access token
- POST /oauth/two-factor-authentication-step-2 — twoFactorAuthenticationStep2Oauth: Step 2 of the Two-Factor Authentication process

## outbreaks
- GET /outbreaks — listOutbreaks: Get outbreaks.
- POST /outbreaks — createOutbreak: Create a outbreak.
- POST /outbreaks/cases-contacts-reached — countCasesContactsReached: Counts cases and contacts reached for follow-up
- GET /outbreaks/count — countOutbreaks: Count outbreaks.
- POST /outbreaks/count — countOutbreaks2: Count outbreaks.
- GET /outbreaks/export-fields-group — exportFieldsGroup: Retrieves the export fields groups
- POST /outbreaks/filter — listOutbreaks2: Get outbreaks.
- GET /outbreaks/{id} — getOutbreak: Find a outbreak by id.
- PUT /outbreaks/{id} — updateOutbreak: Update a outbreak (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /outbreaks/{id} — patchOutbreak: Patch attributes of a outbreak.
- DELETE /outbreaks/{id} — deleteOutbreak: Delete a outbreak by id.
- POST /outbreaks/{id}/attachments — attachmentUpload: Upload a new attachment.
- GET /outbreaks/{id}/attachments/{fk} — getOutbreakAttachmentsById: Find a fileAttachment in the attachments of a outbreak.
- DELETE /outbreaks/{id}/attachments/{fk} — deleteOutbreakAttachmentsById: Delete a fileAttachment from the attachments of a outbreak.
- GET /outbreaks/{id}/attachments/{fk}/download — attachmentDownload: Download an attachment.
- GET /outbreaks/{id}/cases — findCases: Queries cases of outbreak.
- POST /outbreaks/{id}/cases — createOutbreakCases: Create a case in the cases of a outbreak.
- GET /outbreaks/{id}/cases/bars-transmission-chains — getBarsTransmissionChains: Bars graph data
- PUT /outbreaks/{id}/cases/bulk — bulkModifyCases: Update multiple cases
- GET /outbreaks/{id}/cases/classification-over-reporting-time/count — countCasesStratifiedByClassificationOverReportingTime: Count cases stratified by classification over reporting time
- GET /outbreaks/{id}/cases/classification-over-time/count — countCasesStratifiedByClassificationOverTime: Count cases stratified by classification over time
- GET /outbreaks/{id}/cases/count — countOutbreakCases: Count the cases of a outbreak.
- GET /outbreaks/{id}/cases/count-map — getCaseCountMap: Queries cases of outbreak.
- GET /outbreaks/{id}/cases/daily-list/export — exportDailyCaseFollowUpList: Export pdf containing cases to be seen by place
- POST /outbreaks/{id}/cases/daily-list/export — exportDailyCaseFollowUpList2: Export pdf containing cases to be seen by place
- GET /outbreaks/{id}/cases/delay-onset-hospitalization — caseDelayBetweenOnsetAndHospitalizationIsolation: Get a list of entries that show the delay between date of symptom onset and hospitalization/isolation date of a case
- GET /outbreaks/{id}/cases/delay-onset-lab-testing — caseDelayBetweenOnsetAndLabTesting: Get a list of entries that show the delay between date of symptom onset and the lab testing for a case
- POST /outbreaks/{id}/cases/dossier — caseDossier: Export dossier for one or more cases
- POST /outbreaks/{id}/cases/duplicates/find — getCasePossibleDuplicates: Get list of cases that are possible duplicates
- GET /outbreaks/{id}/cases/export — exportFilteredCases: Export filtered list of cases
- POST /outbreaks/{id}/cases/export — exportFilteredCases2: Export filtered list of cases
- GET /outbreaks/{id}/cases/export-daily-follow-up-form — exportDailyCaseFollowUpForm: Export pdf containing daily follow up form
- GET /outbreaks/{id}/cases/export-investigation-template — exportCaseInvestigationTemplate: Export pdf containing case investigation template
- POST /outbreaks/{id}/cases/filter — findCases2: Queries cases of outbreak.
- GET /outbreaks/{id}/cases/filtered-count — filteredCountCases: Counts cases of outbreak.
- POST /outbreaks/{id}/cases/filtered-count — filteredCountCases2: Counts cases of outbreak.
- POST /outbreaks/{id}/cases/generate-visual-id — generateCaseVisualId: Generates the next (available) visual ID based on the outbreak mask.
- GET /outbreaks/{id}/cases/hospitalized/count — countCasesHospitalized: Counts the number of cases hospitalized and isolated
- POST /outbreaks/{id}/cases/import-importable-file-using-map — importImportableCasesFileUsingMap: Import a list of cases from a file that was previously uploaded as an importable file
- POST /outbreaks/{id}/cases/lab-results/import-importable-file-using-map — importImportableCaseLabResultsFileUsingMap: Import a list of lab results from a file that was previously uploaded as an importable file
- GET /outbreaks/{id}/cases/new-among-known-contacts/count — countNewCasesInThePreviousXDaysDetectedAmongKnownContacts: Count the number of new cases in the previous X days
- GET /outbreaks/{id}/cases/on-follow-up-list/count — filteredCountCasesOnFollowUpList: Counts the cases that are on the follow up list, that pass a filter.
- GET /outbreaks/{id}/cases/outcome-over-time/count — countCasesStratifiedByOutcomeOverTime: Count cases stratified by outcome over time
- GET /outbreaks/{id}/cases/per-classification-per-location-level-report/download — downloadCaseClassificationPerLocationLevelReport: Export a case classification per location report for an outbreak
- GET /outbreaks/{id}/cases/per-classification/count — countCasesPerClassification: Counts the number of cases grouped by case classification
- GET /outbreaks/{id}/cases/per-location-level-tracing-report/download — downloadCaseTracingPerLocationLevelReport: Export a case tracing per location report for an outbreak
- GET /outbreaks/{id}/cases/per-location-level/count — countCasesPerLocationLevel: Return an array of locations and the cases (that pass a filter) assigned to those locations
- GET /outbreaks/{id}/cases/per-period-per-contact-status/count — countCasesPerPeriodPerContactStatus: Count the total number of cases per period per their contact status
- GET /outbreaks/{id}/cases/{fk} — getOutbreakCasesById: Find a case in the cases of a outbreak.
- PUT /outbreaks/{id}/cases/{fk} — updateOutbreakCasesById: Update a case in the cases of a outbreak.
- DELETE /outbreaks/{id}/cases/{fk} — deleteOutbreakCasesById: Delete a case from the cases of a outbreak.
- GET /outbreaks/{id}/cases/{fk}/isolated-contacts — getCaseIsolatedContacts: Get count of isolated contacts for a case
- GET /outbreaks/{id}/cases/{fk}/movement — getCaseMovement: Get list of addresses with GeoLocations ordered from the oldest one to the most recent
- POST /outbreaks/{id}/cases/{nk}/contacts — createCaseMultipleContacts: Creates multiple contacts for a case.
- POST /outbreaks/{id}/cases/{nk}/convert-to-contact — convertCaseToContact: Converts case to contact.
- POST /outbreaks/{id}/cases/{nk}/duplicates/change — caseMarkPersonAsOrNotADuplicate: Update list of records that aren't duplicates for this record
- GET /outbreaks/{id}/cases/{nk}/duplicates/marked-as-not-duplicates — getCaseMarkedAsNotDuplicates: Get list of cases that are possible duplicates
- GET /outbreaks/{id}/cases/{nk}/duplicates/marked-as-not-duplicates/count — getCaseMarkedAsNotDuplicatesCount: Count list of contact of contacts that are possible duplicates
- GET /outbreaks/{id}/cases/{nk}/export-empty-case-investigation — exportExistingEmptyCaseInvestigation: Export an empty case investigation for an existing case
- GET /outbreaks/{id}/cases/{nk}/follow-ups — listOutbreakCasesFollowUps: List the followUps of a outbreak.
- POST /outbreaks/{id}/cases/{nk}/follow-ups — createOutbreakCasesFollowUps: Create a followUp in the followUps of a outbreak.
- GET /outbreaks/{id}/cases/{nk}/follow-ups/count — countOutbreakCasesFollowUps: Count the followUps of a outbreak.
- GET /outbreaks/{id}/cases/{nk}/follow-ups/{fk} — getOutbreakCasesFollowUpsById: Find a followUp in the followUps of a outbreak.
- PUT /outbreaks/{id}/cases/{nk}/follow-ups/{fk} — modifyCaseFollowUp: Update a case's follow-up.
- DELETE /outbreaks/{id}/cases/{nk}/follow-ups/{fk} — deleteOutbreakCasesFollowUpsById: Delete a followUp from the followUps of a outbreak.
- GET /outbreaks/{id}/cases/{nk}/lab-results — listOutbreakCasesLabResults: List the labResults of a outbreak.
- POST /outbreaks/{id}/cases/{nk}/lab-results — createOutbreakCasesLabResults: Create a labResult in the labResults of a outbreak.
- GET /outbreaks/{id}/cases/{nk}/lab-results/count — countOutbreakCasesLabResults: Count the labResults of a outbreak.
- GET /outbreaks/{id}/cases/{nk}/lab-results/export — exportFilteredCaseLabResults: Export filtered list of lab results
- POST /outbreaks/{id}/cases/{nk}/lab-results/export — exportFilteredCaseLabResults2: Export filtered list of lab results
- GET /outbreaks/{id}/cases/{nk}/lab-results/filtered-count — filteredCountCaseLabResults: Counts the lab results that pass a filter
- GET /outbreaks/{id}/cases/{nk}/lab-results/{fk} — getOutbreakCasesLabResultsById: Find a labResult in the labResults of a outbreak.
- PUT /outbreaks/{id}/cases/{nk}/lab-results/{fk} — updateOutbreakCasesLabResultsById: Update a labResult in the labResults of a outbreak.
- DELETE /outbreaks/{id}/cases/{nk}/lab-results/{fk} — deleteOutbreakCasesLabResultsById: Delete a labResult from the labResults of a outbreak.
- POST /outbreaks/{id}/cases/{nk}/lab-results/{fk}/restore — restoreCaseLabResult: Restores a deleted lab result.
- GET /outbreaks/{id}/cases/{nk}/relationships — findCaseRelationships: Queries relationships of case.
- POST /outbreaks/{id}/cases/{nk}/relationships — createCaseRelationship: Creates a new instance in relationships of this model.
- GET /outbreaks/{id}/cases/{nk}/relationships/available-people — getCaseRelationshipsAvailablePeople: Queries people of a case
- GET /outbreaks/{id}/cases/{nk}/relationships/available-people/count — countCaseRelationshipsAvailablePeople: Counts people of a case
- GET /outbreaks/{id}/cases/{nk}/relationships/contacts — findCaseRelationshipContacts: Queries relationship contacts of case.
- GET /outbreaks/{id}/cases/{nk}/relationships/contacts/filtered-count — countCaseRelationshipContacts: Counts the relationship contacts that pass a filter of a case
- GET /outbreaks/{id}/cases/{nk}/relationships/count — countCaseRelationships: Counts relationships of case.
- GET /outbreaks/{id}/cases/{nk}/relationships/exposures — findCaseRelationshipExposures: Queries relationship exposures of case.
- GET /outbreaks/{id}/cases/{nk}/relationships/exposures/filtered-count — countCaseRelationshipExposures: Counts the relationship exposures that pass a filter of a case
- GET /outbreaks/{id}/cases/{nk}/relationships/filtered-count — filteredCountCaseRelationships: Counts the relationships that pass a filter (which now can accept relations) of a case
- GET /outbreaks/{id}/cases/{nk}/relationships/{fk} — getCaseRelationship: Find a related item by id for relationships.
- PUT /outbreaks/{id}/cases/{nk}/relationships/{fk} — updateCaseRelationship: Update a related item by id for relationships.
- DELETE /outbreaks/{id}/cases/{nk}/relationships/{fk} — deleteCaseRelationship: Delete a related item by id for relationships.
- POST /outbreaks/{id}/cases/{nk}/restore — restoreCase: Restores a deleted case.
- GET /outbreaks/{id}/clusters — listOutbreakClusters: List the clusters of a outbreak.
- POST /outbreaks/{id}/clusters — createOutbreakClusters: Create a cluster in the clusters of a outbreak.
- GET /outbreaks/{id}/clusters/count — countOutbreakClusters: Count the clusters of a outbreak.
- GET /outbreaks/{id}/clusters/{fk} — getOutbreakClustersById: Find a cluster in the clusters of a outbreak.
- PUT /outbreaks/{id}/clusters/{fk} — updateOutbreakClustersById: Update a cluster in the clusters of a outbreak.
- DELETE /outbreaks/{id}/clusters/{fk} — deleteOutbreakClustersById: Delete a cluster from the clusters of a outbreak.
- GET /outbreaks/{id}/clusters/{fk}/people — findPeopleInCluster: Find the people inside a cluster
- GET /outbreaks/{id}/clusters/{fk}/people/count — countPeopleInCluster: Number the people inside a cluster
- GET /outbreaks/{id}/contacts — findContacts: Queries contacts of outbreak.
- POST /outbreaks/{id}/contacts — createOutbreakContacts: Create a contact in the contacts of a outbreak.
- GET /outbreaks/{id}/contacts-of-contacts — findContactsOfContacts: Queries contacts of contacts of outbreak.
- POST /outbreaks/{id}/contacts-of-contacts — createOutbreakContactsOfContacts: Create a contactOfContact in the contactsOfContacts of a outbreak.
- PUT /outbreaks/{id}/contacts-of-contacts/bulk — bulkModifyContactsOfContacts: Update multiple contacts of contacts
- POST /outbreaks/{id}/contacts-of-contacts/dossier — contactOfContactDossier: Export dossier for one or more contacts
- POST /outbreaks/{id}/contacts-of-contacts/duplicates/find — getContactOfContactPossibleDuplicates: Get list of contacts of contacts that are possible duplicates
- GET /outbreaks/{id}/contacts-of-contacts/export — exportFilteredContactsOfContacts: Export filtered list of contacts of contacts
- POST /outbreaks/{id}/contacts-of-contacts/export — exportFilteredContactsOfContacts2: Export filtered list of contacts of contacts
- POST /outbreaks/{id}/contacts-of-contacts/filter — findContactsOfContacts2: Queries contacts of contacts of outbreak.
- GET /outbreaks/{id}/contacts-of-contacts/filtered-count — filteredCountContactsOfContacts: Counts the contacts of contacts of an outbreak
- POST /outbreaks/{id}/contacts-of-contacts/generate-visual-id — generateContactOfContactVisualId: Generates the next (available) visual ID based on the outbreak mask.
- POST /outbreaks/{id}/contacts-of-contacts/import-importable-file-using-map — importImportableContactsOfContactsFileUsingMap: Import a list of contacts from a file that was previously uploaded as an importable file
- GET /outbreaks/{id}/contacts-of-contacts/per-risk-level/count — countContactsOfContactsPerRiskLevel: Counts the number of contacts grouped by risk level
- GET /outbreaks/{id}/contacts-of-contacts/{fk} — getOutbreakContactsOfContactsById: Find a contactOfContact in the contactsOfContacts of a outbreak.
- PUT /outbreaks/{id}/contacts-of-contacts/{fk} — updateOutbreakContactsOfContactsById: Update a contactOfContact in the contactsOfContacts of a outbreak.
- DELETE /outbreaks/{id}/contacts-of-contacts/{fk} — deleteOutbreakContactsOfContactsById: Delete a contactOfContact from the contactsOfContacts of a outbreak.
- GET /outbreaks/{id}/contacts-of-contacts/{fk}/movement — getContactOfContactMovement: Get list of addresses with GeoLocations ordered from the oldest one to the most recent
- POST /outbreaks/{id}/contacts-of-contacts/{nk}/convert-to-contact — convertContactOfContactToContact: Converts contact of contact to contact.
- POST /outbreaks/{id}/contacts-of-contacts/{nk}/duplicates/change — contactOfContactMarkPersonAsOrNotADuplicate: Update list of records that aren't duplicates for this record
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/duplicates/marked-as-not-duplicates — getContactOfContactMarkedAsNotDuplicates: Get list of contact of contacts that are possible duplicates
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/duplicates/marked-as-not-duplicates/count — getContactOfContactMarkedAsNotDuplicatesCount: Count list of contact of contacts that are possible duplicates
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/follow-ups — listOutbreakContactsOfContactsFollowUps: List the followUps of a outbreak.
- POST /outbreaks/{id}/contacts-of-contacts/{nk}/follow-ups — createOutbreakContactsOfContactsFollowUps: Create a followUp in the followUps of a outbreak.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/follow-ups/count — countOutbreakContactsOfContactsFollowUps: Count the followUps of a outbreak.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/follow-ups/{fk} — getOutbreakContactsOfContactsFollowUpsById: Find a followUp in the followUps of a outbreak.
- PUT /outbreaks/{id}/contacts-of-contacts/{nk}/follow-ups/{fk} — updateOutbreakContactsOfContactsFollowUpsById: Update a followUp in the followUps of a outbreak.
- DELETE /outbreaks/{id}/contacts-of-contacts/{nk}/follow-ups/{fk} — deleteOutbreakContactsOfContactsFollowUpsById: Delete a followUp from the followUps of a outbreak.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results — listOutbreakContactsOfContactsLabResults: List the labResults of a outbreak.
- POST /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results — createOutbreakContactsOfContactsLabResults: Create a labResult in the labResults of a outbreak.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results/count — countOutbreakContactsOfContactsLabResults: Count the labResults of a outbreak.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results/export — exportFilteredContactOfContactLabResults: Export filtered list of lab results
- POST /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results/export — exportFilteredContactOfContactLabResults2: Export filtered list of lab results
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results/filtered-count — filteredCountContactOfContactLabResults: Counts the lab results that pass a filter
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results/{fk} — getOutbreakContactsOfContactsLabResultsById: Find a labResult in the labResults of a outbreak.
- PUT /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results/{fk} — updateOutbreakContactsOfContactsLabResultsById: Update a labResult in the labResults of a outbreak.
- DELETE /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results/{fk} — deleteOutbreakContactsOfContactsLabResultsById: Delete a labResult from the labResults of a outbreak.
- POST /outbreaks/{id}/contacts-of-contacts/{nk}/lab-results/{fk}/restore — restoreContactOfContactLabResult: Restores a deleted lab result.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships — findContactOfContactRelationships: Queries relationships of contact of contact.
- POST /outbreaks/{id}/contacts-of-contacts/{nk}/relationships — createContactOfContactRelationship: Creates a new instance in relationships of this model.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/available-people — getContactOfContactRelationshipsAvailablePeople: Queries people of a contact of contact
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/available-people/count — countContactOfContactRelationshipsAvailablePeople: Counts people of a contact
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/contacts — findContactOfContactRelationshipContacts: Queries relationship contacts of contact of contact.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/contacts/filtered-count — countContactOfContactRelationshipContacts: Counts the relationship contacts that pass a filter of a contact of contact
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/count — countContactOfContactRelationships: Counts relationships of contacts of contacts.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/exposures — findContactOfContactRelationshipExposures: Queries relationship exposures of a contact of contact.
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/exposures/filtered-count — countContactOfContactRelationshipExposures: Counts the relationship exposures that pass a filter of a contact of contact
- GET /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/{fk} — getContactOfContactRelationship: Find a related item by id for relationships.
- PUT /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/{fk} — updateContactOfContactRelationship: Update a related item by id for relationships.
- DELETE /outbreaks/{id}/contacts-of-contacts/{nk}/relationships/{fk} — deleteContactOfContactRelationship: Delete a related item by id for relationships.
- POST /outbreaks/{id}/contacts-of-contacts/{nk}/restore — restoreContactOfContact: Restores a deleted contact of contact.
- PUT /outbreaks/{id}/contacts/bulk — bulkModifyContacts: Update multiple contacts
- GET /outbreaks/{id}/contacts/daily-followup-form/export — exportContactFollowUpListPerDay: Export a pdf file with the daily contact follow-up form, for every relevant contact (or case follow-ups registered as a
- POST /outbreaks/{id}/contacts/daily-followup-form/export — exportContactFollowUpListPerDay2: Export a pdf file with the daily contact follow-up form, for every relevant contact (or case follow-ups registered as a
- GET /outbreaks/{id}/contacts/daily-list/export — exportDailyContactFollowUpList: Export pdf containing contacts to be seen by place/case
- POST /outbreaks/{id}/contacts/daily-list/export — exportDailyContactFollowUpList2: Export pdf containing contacts to be seen by place/case
- POST /outbreaks/{id}/contacts/dossier — contactDossier: Export dossier for one or more contacts
- POST /outbreaks/{id}/contacts/duplicates/find — getContactPossibleDuplicates: Get list of contacts that are possible duplicates
- GET /outbreaks/{id}/contacts/export — exportFilteredContacts: Export filtered list of contacts
- POST /outbreaks/{id}/contacts/export — exportFilteredContacts2: Export filtered list of contacts
- GET /outbreaks/{id}/contacts/export-daily-follow-up-form — exportDailyContactFollowUpForm: Export pdf containing daily follow up form
- POST /outbreaks/{id}/contacts/filter — findContacts2: Queries contacts of outbreak.
- GET /outbreaks/{id}/contacts/filtered-count — filteredCountContacts: Counts the contacts of an outbreak
- POST /outbreaks/{id}/contacts/filtered-count — filteredCountContacts2: Counts the contacts of an outbreak
- POST /outbreaks/{id}/contacts/follow-up-report — getContactFollowUpReport: Get total number of contacts that were followed up in the given period of time
- POST /outbreaks/{id}/contacts/generate-visual-id — generateContactVisualId: Generates the next (available) visual ID based on the outbreak mask.
- POST /outbreaks/{id}/contacts/import-importable-file-using-map — importImportableContactsFileUsingMap: Import a list of contacts from a file that was previously uploaded as an importable file
- POST /outbreaks/{id}/contacts/lab-results/import-importable-file-using-map — importImportableContactLabResultsFileUsingMap: Import a list of lab results from a file that was previously uploaded as an importable file
- GET /outbreaks/{id}/contacts/on-follow-up-list/count — filteredCountContactsOnFollowUpList: Counts the contacts that are on the follow up list, that pass a filter.
- GET /outbreaks/{id}/contacts/per-location-level-tracing-report/download — downloadContactTracingPerLocationLevelReport: Export a contact tracing per location report for an outbreak
- GET /outbreaks/{id}/contacts/per-risk-level/count — countContactsPerRiskLevel: Counts the number of contacts grouped by case risk level
- POST /outbreaks/{id}/contacts/range-list/export — exportRangeListOfContacts: Export pdf containing range of contacts to be seen by place/case
- GET /outbreaks/{id}/contacts/{fk} — getOutbreakContactsById: Find a contact in the contacts of a outbreak.
- PUT /outbreaks/{id}/contacts/{fk} — updateOutbreakContactsById: Update a contact in the contacts of a outbreak.
- DELETE /outbreaks/{id}/contacts/{fk} — deleteOutbreakContactsById: Delete a contact from the contacts of a outbreak.
- GET /outbreaks/{id}/contacts/{fk}/isolated-contacts — getContactIsolatedContacts: Get count of isolated contacts for a contact
- GET /outbreaks/{id}/contacts/{fk}/movement — getContactMovement: Get list of addresses with GeoLocations ordered from the oldest one to the most recent
- POST /outbreaks/{id}/contacts/{nk}/contacts-of-contacts — createContactMultipleContactsOfContacts: Creates multiple contacts of contacts for a contact.
- POST /outbreaks/{id}/contacts/{nk}/convert-to-case — convertContactToCase: Converts contact to case.
- POST /outbreaks/{id}/contacts/{nk}/convert-to-contact-of-contact — convertContactToContactOfContact: Converts contact to contact of contact.
- POST /outbreaks/{id}/contacts/{nk}/duplicates/change — contactMarkPersonAsOrNotADuplicate: Update list of records that aren't duplicates for this record
- GET /outbreaks/{id}/contacts/{nk}/duplicates/marked-as-not-duplicates — getContactMarkedAsNotDuplicates: Get list of contacts that are possible duplicates
- GET /outbreaks/{id}/contacts/{nk}/duplicates/marked-as-not-duplicates/count — getContactMarkedAsNotDuplicatesCount: Count list of contact of contacts that are possible duplicates
- POST /outbreaks/{id}/contacts/{nk}/follow-ups — createOutbreakContactsFollowUps: Create a followUp in the followUps of a outbreak.
- GET /outbreaks/{id}/contacts/{nk}/follow-ups/{fk} — getOutbreakContactsFollowUpsById: Find a followUp in the followUps of a outbreak.
- PUT /outbreaks/{id}/contacts/{nk}/follow-ups/{fk} — modifyContactFollowUp: Update a contact's follow-up.
- DELETE /outbreaks/{id}/contacts/{nk}/follow-ups/{fk} — deleteContactFollowUp: Delete a contact's follow-up.
- POST /outbreaks/{id}/contacts/{nk}/follow-ups/{fk}/restore — restoreContactFollowUp: Restores a deleted follow-up.
- GET /outbreaks/{id}/contacts/{nk}/lab-results — listOutbreakContactsLabResults: List the labResults of a outbreak.
- POST /outbreaks/{id}/contacts/{nk}/lab-results — createOutbreakContactsLabResults: Create a labResult in the labResults of a outbreak.
- GET /outbreaks/{id}/contacts/{nk}/lab-results/count — countOutbreakContactsLabResults: Count the labResults of a outbreak.
- GET /outbreaks/{id}/contacts/{nk}/lab-results/export — exportFilteredContactLabResults: Export filtered list of lab results
- POST /outbreaks/{id}/contacts/{nk}/lab-results/export — exportFilteredContactLabResults2: Export filtered list of lab results
- GET /outbreaks/{id}/contacts/{nk}/lab-results/filtered-count — filteredCountContactLabResults: Counts the lab results that pass a filter
- GET /outbreaks/{id}/contacts/{nk}/lab-results/{fk} — getOutbreakContactsLabResultsById: Find a labResult in the labResults of a outbreak.
- PUT /outbreaks/{id}/contacts/{nk}/lab-results/{fk} — updateOutbreakContactsLabResultsById: Update a labResult in the labResults of a outbreak.
- DELETE /outbreaks/{id}/contacts/{nk}/lab-results/{fk} — deleteOutbreakContactsLabResultsById: Delete a labResult from the labResults of a outbreak.
- POST /outbreaks/{id}/contacts/{nk}/lab-results/{fk}/restore — restoreContactLabResult: Restores a deleted lab result.
- GET /outbreaks/{id}/contacts/{nk}/relationships — findContactRelationships: Queries relationships of contacts.
- POST /outbreaks/{id}/contacts/{nk}/relationships — createContactRelationship: Creates a new instance in relationships of this model.
- GET /outbreaks/{id}/contacts/{nk}/relationships/available-people — getContactRelationshipsAvailablePeople: Queries people of a contact
- GET /outbreaks/{id}/contacts/{nk}/relationships/available-people/count — countContactRelationshipsAvailablePeople: Counts people of a contact
- GET /outbreaks/{id}/contacts/{nk}/relationships/contacts — findContactRelationshipContacts: Queries relationship contacts of contacts.
- GET /outbreaks/{id}/contacts/{nk}/relationships/contacts/filtered-count — countContactRelationshipContacts: Counts the relationship contacts that pass a filter of a contact
- GET /outbreaks/{id}/contacts/{nk}/relationships/count — countContactRelationships: Counts relationships of contact.
- GET /outbreaks/{id}/contacts/{nk}/relationships/exposures — findContactRelationshipExposures: Queries relationship exposures of contact.
- GET /outbreaks/{id}/contacts/{nk}/relationships/exposures/filtered-count — countContactRelationshipExposures: Counts the relationship exposures that pass a filter of a contact
- GET /outbreaks/{id}/contacts/{nk}/relationships/filtered-count — filteredCountContactRelationships: Counts the relationships that pass a filter (which now can accept relations) of a case
- GET /outbreaks/{id}/contacts/{nk}/relationships/{fk} — getContactRelationship: Find a related item by id for relationships.
- PUT /outbreaks/{id}/contacts/{nk}/relationships/{fk} — updateContactRelationship: Update a related item by id for relationships.
- DELETE /outbreaks/{id}/contacts/{nk}/relationships/{fk} — deleteContactRelationship: Delete a related item by id for relationships.
- POST /outbreaks/{id}/contacts/{nk}/restore — restoreContact: Restores a deleted contact.
- GET /outbreaks/{id}/events — findEvents: Queries events of outbreak.
- POST /outbreaks/{id}/events — createOutbreakEvents: Create a event in the events of a outbreak.
- GET /outbreaks/{id}/events/export — exportFilteredEvents: Export filtered list of events
- POST /outbreaks/{id}/events/export — exportFilteredEvents2: Export filtered list of events
- POST /outbreaks/{id}/events/filter — findEvents2: Queries events of outbreak.
- GET /outbreaks/{id}/events/filtered-count — filteredCountEvents: Counts the cases that pass a filter (which can now accept relations)
- POST /outbreaks/{id}/events/generate-visual-id — generateEventVisualId: Generates the next (available) visual ID based on the outbreak mask.
- POST /outbreaks/{id}/events/import-importable-file-using-map — importImportableEventsFileUsingMap: Import a list of events from a file that was previously uploaded as an importable file
- GET /outbreaks/{id}/events/{fk} — getOutbreakEventsById: Find a event in the events of a outbreak.
- PUT /outbreaks/{id}/events/{fk} — updateOutbreakEventsById: Update a event in the events of a outbreak.
- DELETE /outbreaks/{id}/events/{fk} — deleteOutbreakEventsById: Delete a event from the events of a outbreak.
- GET /outbreaks/{id}/events/{fk}/isolated-contacts — getEventIsolatedContacts: Get count of isolated contacts for an event
- POST /outbreaks/{id}/events/{nk}/contacts — createEventMultipleContacts: Creates multiple contacts for a event.
- GET /outbreaks/{id}/events/{nk}/relationships — findEventRelationships: Queries relationships of event.
- POST /outbreaks/{id}/events/{nk}/relationships — createEventRelationship: Creates a new instance in relationships of this model.
- GET /outbreaks/{id}/events/{nk}/relationships/available-people — getEventRelationshipsAvailablePeople: Queries people of a event
- GET /outbreaks/{id}/events/{nk}/relationships/available-people/count — countEventRelationshipsAvailablePeople: Counts people of a event
- GET /outbreaks/{id}/events/{nk}/relationships/contacts — findEventRelationshipContacts: Queries relationship contacts of event.
- GET /outbreaks/{id}/events/{nk}/relationships/contacts/filtered-count — countEventRelationshipContacts: Counts the relationship contacts that pass a filter of a event
- GET /outbreaks/{id}/events/{nk}/relationships/count — countEventRelationships: Counts relationships of event.
- GET /outbreaks/{id}/events/{nk}/relationships/exposures — findEventRelationshipExposures: Queries relationship exposures of event.
- GET /outbreaks/{id}/events/{nk}/relationships/exposures/filtered-count — countEventRelationshipExposures: Counts the relationship exposures that pass a filter of a event
- GET /outbreaks/{id}/events/{nk}/relationships/filtered-count — filteredCountEventRelationships: Counts the relationships that pass a filter (which now can accept relations) of a case
- GET /outbreaks/{id}/events/{nk}/relationships/{fk} — getEventRelationship: Find a related item by id for relationships.
- PUT /outbreaks/{id}/events/{nk}/relationships/{fk} — updateEventRelationship: Update a related item by id for relationships.
- DELETE /outbreaks/{id}/events/{nk}/relationships/{fk} — deleteEventRelationship: Delete a related item by id for relationships.
- POST /outbreaks/{id}/events/{nk}/restore — restoreEvent: Restores a deleted event.
- GET /outbreaks/{id}/follow-ups — findFollowUps: Queries followUps of outbreak.
- PUT /outbreaks/{id}/follow-ups/bulk — bulkModifyFollowUps: Bulk update follow-ups
- DELETE /outbreaks/{id}/follow-ups/bulk — bulkDeleteFollowUps: Delete a list of follow ups.
- POST /outbreaks/{id}/follow-ups/bulk/delete — bulkDeleteFollowUps2: Delete a list of follow ups.
- POST /outbreaks/{id}/follow-ups/bulk/restore — bulkRestoreFollowUps: Restore a list of deleted follow ups.
- GET /outbreaks/{id}/follow-ups/cases-lost-to-follow-up/count — countCasesLostToFollowup: Count the total number of cases lost to follow-up as well as per team
- GET /outbreaks/{id}/follow-ups/cases-not-seen/count — countCasesNotSeenInXDays: Count the number of cases not seen in the past X days
- GET /outbreaks/{id}/follow-ups/cases-seen/count — countCasesSeen: Count the total number of seen cases as well as per team
- GET /outbreaks/{id}/follow-ups/cases-with-successful-follow-ups/count — countCasesWithSuccessfulFollowups: Count the total number of cases with follow-ups and cases with successful follow-ups
- GET /outbreaks/{id}/follow-ups/contacts-lost-to-follow-up/count — countContactsLostToFollowup: Count the total number of contacts lost to follow-up as well as per team
- GET /outbreaks/{id}/follow-ups/contacts-not-seen/count — countContactsNotSeenInXDays: Count the number of contacts not seen in the past X days
- GET /outbreaks/{id}/follow-ups/contacts-seen/count — countContactsSeen: Count the total number of seen contacts as well as per team
- GET /outbreaks/{id}/follow-ups/contacts-with-successful-follow-ups/count — countContactsWithSuccessfulFollowups: Count the total number of contacts with follow-ups and contacts with successful follow-ups
- GET /outbreaks/{id}/follow-ups/export — exportFilteredFollowups: Export filtered list of follow ups
- POST /outbreaks/{id}/follow-ups/export — exportFilteredFollowups2: Export filtered list of follow ups
- GET /outbreaks/{id}/follow-ups/filtered-count — filteredCountFollowUps: Counts the follow-ups that pass a filter (which now can accept relations)
- GET /outbreaks/{id}/follow-ups/per-team-per-day/count — countFollowUpsPerTeamPerDay: Count the total number of followups and successful followups
- GET /outbreaks/{id}/follow-ups/per-team/count — countFollowUpsByTeam: Count follow-ups grouped by team
- GET /outbreaks/{id}/follow-ups/per-user-per-day/count — countFollowUpsPerUserPerDay: Count the total number of followups and successful followups
- GET /outbreaks/{id}/follow-ups/{fk} — getOutbreakFollowUpsById: Find a followUp in the followUps of a outbreak.
- POST /outbreaks/{id}/generate-followups — generateFollowups: Generate a list of follow-ups
- POST /outbreaks/{id}/importable-files — importableFileUpload: Upload a file and get file headers
- GET /outbreaks/{id}/importable-files/{id}/json — getImportableFileJsonById: Retrieve JSON version of an uploaded file
- GET /outbreaks/{id}/lab-results/aggregate — findLabResultsAggregate: Queries labResults of outbreak.
- GET /outbreaks/{id}/lab-results/aggregate-filtered-count — filteredCountLabResultsAggregate: Counts the lab results that pass a filter
- PUT /outbreaks/{id}/lab-results/bulk — bulkModifyLabResults: Bulk update lab results
- GET /outbreaks/{id}/lab-results/export — exportFilteredLabResults: Export filtered list of lab results
- POST /outbreaks/{id}/lab-results/export — exportFilteredLabResults2: Export filtered list of lab results
- GET /outbreaks/{id}/lab-results/filtered-count — filteredCountLabResults: Counts the lab results that pass a filter
- GET /outbreaks/{id}/lab-results/{fk} — getOutbreakLabResultsById: Find a labResult in the labResults of a outbreak.
- PUT /outbreaks/{id}/lab-results/{fk} — updateOutbreakLabResultsById: Update a labResult in the labResults of a outbreak.
- DELETE /outbreaks/{id}/lab-results/{fk} — deleteOutbreakLabResultsById: Delete a labResult from the labResults of a outbreak.
- GET /outbreaks/{id}/locations/hierarchical — getLocationsHierarchicalList: Get hierarchical list of locations for an outbreak.
- POST /outbreaks/{id}/merge — mergePeople: Merge multiple people of the same type (case/event/contact)
- GET /outbreaks/{id}/people — listOutbreakPeople: List the people of a outbreak.
- POST /outbreaks/{id}/people/duplicates/find — getPersonPossibleDuplicates: Get list of cases, contacts and contacts of contacts that are possible duplicates
- GET /outbreaks/{id}/people/filtered-count — countPeople: Counts people of outbreak.
- GET /outbreaks/{id}/people/inconsistencies-in-key-dates — listInconsistenciesInKeyDates: List of contacts/cases where inconsistencies were found between dates
- GET /outbreaks/{id}/people/possible-duplicates — findPossiblePersonDuplicates: Find the possible duplicate people groups
- GET /outbreaks/{id}/people/possible-duplicates/count — countPossiblePersonDuplicates: Count the number of possible duplicate people groups
- GET /outbreaks/{id}/range-follow-ups — getFollowUpsGroupedByContact: Get list of follow ups grouped by contact and pagination support
- GET /outbreaks/{id}/range-follow-ups/count — countFollowUpsGroupedByContact: Count list of follow ups grouped by contact
- GET /outbreaks/{id}/relationships — findRelationships: Queries relationships of outbreak.
- POST /outbreaks/{id}/relationships/bulk — bulkCreateRelationships: Bulk create relationships.
- DELETE /outbreaks/{id}/relationships/bulk — bulkDeleteRelationships: Bulk delete relationships.
- POST /outbreaks/{id}/relationships/bulk-change-source — bulkChangeSourceRelationships: Bulk change source relationships.
- POST /outbreaks/{id}/relationships/bulk-change-target — bulkChangeTargetRelationships: Bulk change target relationships.
- POST /outbreaks/{id}/relationships/bulk/delete — bulkDeleteRelationships2: Bulk delete relationships.
- POST /outbreaks/{id}/relationships/calculate-independent-transmission-chains — calculateIndependentTransmissionChains: Calculate independent transmission chains
- GET /outbreaks/{id}/relationships/cases-with-less-than-x-contacts/count — countCasesWithLessThanXContacts: Count the number of cases with less than X contacts; Also return the case IDs
- GET /outbreaks/{id}/relationships/contacts-per-case/count — countCasesContacts: Count the number of contacts for each case; Additionally calculate mean/median
- GET /outbreaks/{id}/relationships/count — countRelationships: Counts relationships of outbreak.
- GET /outbreaks/{id}/relationships/export — exportFilteredRelationships: Export filtered list of relationships
- POST /outbreaks/{id}/relationships/export — exportFilteredRelationships2: Export filtered list of relationships
- POST /outbreaks/{id}/relationships/import-importable-file-using-map — importImportableRelationshipsFileUsingMap: Import a list of relationships from a file that was previously uploaded as an importable file
- GET /outbreaks/{id}/relationships/independent-transmission-chains — getIndependentTransmissionChains: Get independent transmission chains
- GET /outbreaks/{id}/relationships/independent-transmission-chains/filtered-count — countIndependentTransmissionChains: Count the number of independent transmission chains
- GET /outbreaks/{id}/relationships/long-periods-between-dates-of-onset-in-transmission-chains — longPeriodsBetweenDatesOfOnsetInTransmissionChains: Get a list of relationships that links cases with long periods between the dates of onset
- GET /outbreaks/{id}/relationships/new-cases-in-transmission-chains/count — countNewCasesInKnownTransmissionChains: Count the number of new cases vs total number of cases in known transmission chains
- GET /outbreaks/{id}/relationships/new-transmission-chains-from-registered-contacts-who-became-cases — buildNewChainsFromRegisteredContactsWhoBecameCases: Build new transmission chains from registered contacts who became cases
- GET /outbreaks/{id}/relationships/new-transmission-chains-from-registered-contacts-who-became-cases/filtered-count — countNewChainsFromRegisteredContactsWhoBecameCases: Count new transmission chains from registered contacts who became cases
- GET /outbreaks/{id}/relationships/secondary-cases-with-date-of-onset-before-primary-case — findSecondaryCasesWithDateOfOnsetBeforePrimaryCase: Get a list of secondary cases that have date of onset before the date of onset of primary cases
- POST /outbreaks/{id}/relationships/{nk}/replace-source-and-target — setTargetAndSourceForRelationship: Change source and target of a relationship ( needs write case / contact permission )
- POST /outbreaks/{id}/restore — restoreOutbreak: Restores a deleted outbreak.
- GET /outbreaks/{id}/transmission-chains — listOutbreakTransmissionChains: List the transmissionChains of a outbreak.
- GET /outbreaks/{id}/transmission-chains/count — countOutbreakTransmissionChains: Count the transmissionChains of a outbreak.
- GET /outbreaks/{id}/transmission-chains/{fk} — getOutbreakTransmissionChainsById: Find a transmissionChain in the transmissionChains of a outbreak.
- DELETE /outbreaks/{id}/transmission-chains/{fk} — deleteOutbreakTransmissionChainsById: Delete a transmissionChain from the transmissionChains of a outbreak.
- GET /outbreaks/{id}/transmission-chains/{fk}/result — getCalculatedIndependentTransmissionChains: Get already calculated independent transmission chains

## reference-data
- GET /reference-data — listReferenceData: List reference data.
- POST /reference-data — createReferenceData: Create a referenceData.
- GET /reference-data/available-categories — getAvailableCategories: Retrieve the list of available reference data categories.
- GET /reference-data/available-categories-per-disease — getAvailableCategoriesPerDisease: Retrieve the list of available reference data categories that can be per disease.
- GET /reference-data/count — countReferenceData: Count reference data.
- GET /reference-data/export — exportFilteredReferenceData: Export filtered list of reference data
- POST /reference-data/export — exportFilteredReferenceData2: Export filtered list of reference data
- POST /reference-data/import-importable-file-using-map — importImportableReferenceDataFileUsingMap: Import a list of reference data from a file that was previously uploaded as an importable file
- GET /reference-data/{id} — getReferenceData: Find a referenceData by id.
- PUT /reference-data/{id} — updateReferenceData: Update a referenceData (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /reference-data/{id} — patchReferenceData: Patch attributes of a referenceData.
- DELETE /reference-data/{id} — deleteReferenceData: Delete a referenceData by id.

## restore-logs
- GET /restore-logs — listRestoreLogs: List restore logs.
- GET /restore-logs/count — countRestoreLogs: Count restore logs.
- GET /restore-logs/{id} — getRestoreLog: Find a restoreLog by id.
- GET /restore-logs/{id}/backup — getRestoreLogBackup: Fetch the backup of a restoreLog.

## roles
- GET /roles — getRoles: Queries roles
- POST /roles — createRole: Create a role.
- GET /roles/available-permissions — getAvailablePermissions: Retrieve the list of available permissions.
- GET /roles/count — countRoles: Count roles
- GET /roles/export — exportFilteredUserRoles: Export filtered list of user roles
- POST /roles/export — exportFilteredUserRoles2: Export filtered list of user roles
- POST /roles/import-importable-file-using-map — importImportableUserRolesFileUsingMap: Import a list of users from a file that was previously uploaded as an importable file
- GET /roles/{id} — getRole: Find a role by id.
- PUT /roles/{id} — updateRole: Update a role (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /roles/{id} — patchRole: Patch attributes of a role.
- DELETE /roles/{id} — deleteRole: Delete a role by id.

## security-questions
- GET /security-questions — getQuestions: Return Security Questions

## sync
- POST /sync — sync: Synchronize the instance with upstream servers
- GET /sync/available-outbreaks — getAvailableOutbreaksForClient: Retrieve the list of IDs for the client available outbreaks
- GET /sync/database-snapshot — getDatabaseSnapshot: Retrieve a compressed snapshot of the database.
- GET /sync/database-snapshot-asynchronous — getDatabaseSnapshotAsynchronous: Export a compressed snapshot of the database in the tmp folder
- GET /sync/exported-database-snapshot/{databaseExportLogId} — getExportedDatabaseSnapshot: Download an already exported snapshot of the database.
- POST /sync/get-mobile-database-snapshot — getDatabaseSnapshotForMobile: Retrieve a compressed snapshot of the database
- POST /sync/import-database-snapshot — importDatabaseSnapshot: Synchronize the database based on a given snapshot archive

## sync-logs
- GET /sync-logs — listSyncLogs: List sync logs.
- DELETE /sync-logs — bulkDelete: Delete sync log entries that match the criteria.
- GET /sync-logs/count — countSyncLogs: Count sync logs.
- GET /sync-logs/{id} — getSyncLog: Find a syncLog by id.
- DELETE /sync-logs/{id} — deleteSyncLog: Delete a syncLog by id.

## system-settings
- GET /system-settings — getSystemSettings: Return System Settings
- PUT /system-settings — updateSystemSettings: Update System Settings
- GET /system-settings/backup-location — getBackupLocation: Get application install & backup locations.
- GET /system-settings/created-on — getCreatedOnValues: Get created on values.
- POST /system-settings/generate-unique-id — generateUniqueId: Generates a globally unique ID (UUID).
- POST /system-settings/image-to-pdf — createPdfFromImage: Create a PDF file containing PNG images coming from PNG files
- GET /system-settings/model-definition — getModelDefinition: Get model definition.
- GET /system-settings/version — getVersion: Get application version information.

## teams
- GET /teams — listTeams: Queries teams.
- POST /teams — createTeam: Create a team.
- GET /teams/count — countTeams: Count teams.
- GET /teams/export — exportFilteredTeams: Export filtered list of teams
- POST /teams/export — exportFilteredTeams2: Export filtered list of teams
- POST /teams/filter — listTeams2: Queries teams.
- POST /teams/import-importable-file-using-map — importImportableTeamsFileUsingMap: Import a list of teams from a file that was previously uploaded as an importable file
- GET /teams/{id} — getTeam: Find a team by id.
- PUT /teams/{id} — updateTeam: Update a team (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /teams/{id} — patchTeam: Patch attributes of a team.
- DELETE /teams/{id} — deleteTeam: Delete a team by id.
- GET /teams/{id}/follow-ups — listTeamFollowUps: List the followUps of a team.
- GET /teams/{id}/follow-ups/count — countTeamFollowUps: Count the followUps of a team.
- GET /teams/{id}/follow-ups/{fk} — getTeamFollowUpsById: Find a followUp in the followUps of a team.

## templates
- GET /templates — listTemplates: List templates.
- POST /templates — createTemplate: Create a template.
- GET /templates/count — countTemplates: Count templates.
- GET /templates/{id} — getTemplate: Find a template by id.
- PUT /templates/{id} — updateTemplate: Update a template (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /templates/{id} — patchTemplate: Patch attributes of a template.
- DELETE /templates/{id} — deleteTemplate: Delete a template by id.

## users
- GET /users — listUsers: List users.
- POST /users — createUser: Create a user.
- POST /users/change-password — changePasswordUser: Change the password of the logged-in user.
- GET /users/count — countUsers: Count users.
- GET /users/export — exportFilteredUsers: Export filtered list of users
- POST /users/export — exportFilteredUsers2: Export filtered list of users
- GET /users/for-filters — findForFilters: Queries users with limited information.
- POST /users/import-importable-file-using-map — importImportableUsersFileUsingMap: Import a list of users from a file that was previously uploaded as an importable file
- POST /users/login — loginUser: Log in a user, returning an access token.
- POST /users/logout — logoutUser: Log the current user out (invalidate the access token).
- POST /users/reset — resetPasswordUser: Request a password reset email.
- POST /users/reset-password — setPasswordUser: Set a new password using a reset access token.
- POST /users/reset-password-with-security-question — resetPassWithSecurityQuestion: Return Security Questions
- POST /users/two-factor-authentication-step-2 — twoFactorAuthenticationStep2User: Step 2 of the Two-Factor Authentication process
- GET /users/{id} — getUser: Find a user by id.
- PUT /users/{id} — updateUser: Update a user (PUT patches attributes; Go.Data sets replaceOnPUT=false).
- PATCH /users/{id} — patchUser: Patch attributes of a user.
- DELETE /users/{id} — deleteUser: Delete a user by id.
