# OpenELIS Global REST API (openelis) v3.2.2.0

<!-- derived from openapi.json by `pnpm specs index openelis` — do not edit by hand -->

base: https://openelis.example.org/api/OpenELIS-Global, https://fhir.openelis.example.org:8443 | auth: http/basic | 1057 operations in 276 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## AccessionValidation
- GET /rest/AccessionValidation — getResultsForValidation: List results awaiting validation
- POST /rest/AccessionValidation — validateResults: Submit result validation
- POST /rest/AccessionValidation/analysis/{analysisId}/modify — modifyAnalysisResult: A validator corrects a result without releasing it
- POST /rest/AccessionValidation/analysis/{analysisId}/reject — rejectWithNonConformity: Reject with non conformity
- POST /rest/AccessionValidation/analysis/{analysisId}/release — releaseAnalysis: Validate and release ONE analysis from its review panel
- POST /rest/AccessionValidation/analysis/{analysisId}/retest — sendForRetest: Send for retest
- GET /rest/AccessionValidation/auto-validated — autoValidatedForAccession: The accession's auto-validated results: released at result entry with no validator signature
- POST /rest/AccessionValidation/qc-acknowledgment — acknowledgeQcFailures: Persists the validator's QC failure acknowledgment for a batch (S-08 FR-04)
- POST /rest/AccessionValidation/release-clear — releaseAllClear: The guarded bulk release

## Aliquot
- POST /rest/Aliquot — updateSampleItem: Update sample item

## AllTestsForSampleTypeProvider
- GET /rest/AllTestsForSampleTypeProvider — getAllTestsForSampleTypeProvider: Process request

## AnalyzerResults
- GET /rest/AnalyzerResults — showRestAnalyzerResults: Show rest analyzer results
- POST /rest/AnalyzerResults — showRestAnalyzerResultsSave: Show rest analyzer results save

## AuditTrailReport
- GET /rest/AuditTrailReport — getAuditTrailReport: Get audit trail report
- GET /rest/AuditTrailReport/exportCsv — getAuditTrailReportExportCsv: Export csv
- GET /rest/AuditTrailReport/exportPdf — getAuditTrailReportExportPdf: Export pdf

## BatchTestReassignment
- GET /rest/BatchTestReassignment — showBatchTestReassignment: Show batch test reassignment
- POST /rest/BatchTestReassignment — showBatchTestReassignmentUpdate: Show batch test reassignment update

## CancelDictionary
- GET /rest/CancelDictionary — cancelDictionary: Cancel dictionary

## CancelMenuStatementConfig
- GET /rest/CancelMenuStatementConfig — getCancelMenuStatementConfig: Cancel site information

## CancelNonConformityConfiguration
- GET /rest/CancelNonConformityConfiguration — getCancelNonConformityConfiguration: Cancel site information

## CancelOrganization
- GET /rest/CancelOrganization — cancelOrganization: Cancel organization

## CancelPatientConfiguration
- GET /rest/CancelPatientConfiguration — getCancelPatientConfiguration: Cancel site information

## CancelPrintedReportsConfiguration
- GET /rest/CancelPrintedReportsConfiguration — getCancelPrintedReportsConfiguration: Cancel site information

## CancelResultConfiguration
- GET /rest/CancelResultConfiguration — getCancelResultConfiguration: Cancel site information

## CancelSampleEntryConfig
- GET /rest/CancelSampleEntryConfig — getCancelSampleEntryConfig: Cancel site information

## CancelSiteInformation
- GET /rest/CancelSiteInformation — getCancelSiteInformation: Cancel site information

## CancelValidationConfiguration
- GET /rest/CancelValidationConfiguration — getCancelValidationConfiguration: Cancel site information

## CancelWorkplanConfiguration
- GET /rest/CancelWorkplanConfiguration — getCancelWorkplanConfiguration: Cancel site information

## DataExportStatus
- GET /rest/DataExportStatus — getDataExportStatus: Get data export status
- GET /rest/DataExportStatus/{taskId}/attempts — getAttempts: Get attempts
- POST /rest/DataExportStatus/{taskId}/trigger — triggerExport: Trigger export

## DeactivateExternalConnection
- POST /rest/DeactivateExternalConnection — deactivateExternalConnection: Deactivate external connection

## DeleteDictionary
- POST /rest/DeleteDictionary — showDeleteDictionary: Show delete dictionary

## DeleteMenuStatementConfig
- GET /rest/DeleteMenuStatementConfig — getDeleteMenuStatementConfig: Show delete site information

## DeleteNonConformityConfiguration
- GET /rest/DeleteNonConformityConfiguration — getDeleteNonConformityConfiguration: Show delete site information

## DeleteOrganization
- POST /rest/DeleteOrganization — showDeleteOrganization: Show delete organization

## DeletePatientConfiguration
- GET /rest/DeletePatientConfiguration — getDeletePatientConfiguration: Show delete site information

## DeletePrintedReportsConfiguration
- GET /rest/DeletePrintedReportsConfiguration — getDeletePrintedReportsConfiguration: Show delete site information

## DeleteProvider
- POST /rest/DeleteProvider — showDeleteProvider: Show delete provider

## DeleteResultConfiguration
- GET /rest/DeleteResultConfiguration — getDeleteResultConfiguration: Show delete site information

## DeleteSiteInformation
- GET /rest/DeleteSiteInformation — getDeleteSiteInformation: Show delete site information

## DeleteUnifiedSystemUser
- POST /rest/DeleteUnifiedSystemUser — showDeleteUnifiedSystemUser: Show delete unified system user

## DeleteWorkplanConfiguration
- GET /rest/DeleteWorkplanConfiguration — getDeleteWorkplanConfiguration: Show delete site information

## Dictionary
- GET /rest/Dictionary — showDictionary: Show dictionary
- POST /rest/Dictionary — showUpdateDictionary: Show update dictionary

## DictionaryMenu
- GET /rest/DictionaryMenu — getDictionaryMenu: Show dictionary menu

## ElectronicOrders
- GET /rest/ElectronicOrders — showElectronicOrders: Show electronic orders

## EntityNamesProvider
- GET /rest/EntityNamesProvider — getEntityNamesProvider: Process request

## ExternalConnection
- GET /rest/ExternalConnection — showExternalConnection: Show external connection
- POST /rest/ExternalConnection — saveExternalConnection: Save external connection

## ExternalConnectionMenu
- GET /rest/ExternalConnectionMenu — getExternalConnectionMenu: Show external connection menu

## GenericSampleOrder
- GET /rest/GenericSampleOrder — getGenericSampleOrderByAccessionNumber: Get generic sample order by accession number
- POST /rest/GenericSampleOrder — saveGenericSampleOrder: Save generic sample order
- POST /rest/GenericSampleOrder/import — importSamplesFromFile: Import samples from file
- POST /rest/GenericSampleOrder/validate — validateImportFile: Validate import file
- PUT /rest/GenericSampleOrder/{accessionNumber} — updateGenericSampleOrder: Update generic sample order

## LogbookResults
- GET /rest/LogbookResults — getLogbookResults: Get results awaiting entry
- POST /rest/LogbookResults — saveLogbookResults: Save entered results

## MenuStatementConfig
- GET /rest/MenuStatementConfig — getMenuStatementConfig: Show site information
- POST /rest/MenuStatementConfig — postMenuStatementConfig: Show update site information

## MenuStatementConfigMenu
- GET /rest/MenuStatementConfigMenu — getMenuStatementConfigMenu: Show site information menu

## MethodCreate
- GET /rest/MethodCreate — showMethodCreate: Show method create
- POST /rest/MethodCreate — postMethodCreate: Post method create

## MethodManagement
- GET /rest/MethodManagement — getMethodManagement: Show method management
- POST /rest/MethodManagement — postMethodManagement: Show method management

## MethodRenameEntry
- GET /rest/MethodRenameEntry — showMethodRenameEntry: Show method rename entry
- POST /rest/MethodRenameEntry — updateMethodRenameEntry: Update method rename entry

## MicrobiologyTb
- GET /MicrobiologyTb/panel_test — getPanelTestsElement: Get panel tests element

## NCECorrectiveAction
- GET /rest/NCECorrectiveAction — getNCECorrectiveActionForm: Get nce corrective action form
- POST /rest/NCECorrectiveAction — updateNCECorretiveActionForm: Update nce corretive action form

## NextPreviousDictionary
- GET /rest/NextPreviousDictionary — showNextPreviousDictionary: Show next previous dictionary

## NextPreviousMenuStatementConfig
- GET /rest/NextPreviousMenuStatementConfig — getNextPreviousMenuStatementConfig: Show site information

## NextPreviousNonConformityConfiguration
- GET /rest/NextPreviousNonConformityConfiguration — getNextPreviousNonConformityConfiguration: Show site information

## NextPreviousOrganization
- GET /rest/NextPreviousOrganization — getNextPreviousOrganization: Show organization

## NextPreviousPatientConfiguration
- GET /rest/NextPreviousPatientConfiguration — getNextPreviousPatientConfiguration: Show site information

## NextPreviousPrintedReportsConfiguration
- GET /rest/NextPreviousPrintedReportsConfiguration — getNextPreviousPrintedReportsConfiguration: Show site information

## NextPreviousResultConfiguration
- GET /rest/NextPreviousResultConfiguration — getNextPreviousResultConfiguration: Show site information

## NextPreviousSampleEntryConfig
- GET /rest/NextPreviousSampleEntryConfig — getNextPreviousSampleEntryConfig: Show site information

## NextPreviousSiteInformation
- GET /rest/NextPreviousSiteInformation — getNextPreviousSiteInformation: Show site information

## NextPreviousValidationConfiguration
- GET /rest/NextPreviousValidationConfiguration — getNextPreviousValidationConfiguration: Show site information

## NextPreviousWorkplanConfiguration
- GET /rest/NextPreviousWorkplanConfiguration — getNextPreviousWorkplanConfiguration: Show site information

## NonConformityConfiguration
- GET /rest/NonConformityConfiguration — getNonConformityConfiguration: Show site information
- POST /rest/NonConformityConfiguration — postNonConformityConfiguration: Show update site information

## NonConformityConfigurationMenu
- GET /rest/NonConformityConfigurationMenu — getNonConformityConfigurationMenu: Show site information menu

## NotificationTriggerConfig
- GET /rest/NotificationTriggerConfig — getNotificationTriggerConfig: List
- POST /rest/NotificationTriggerConfig — save: Save
- GET /rest/NotificationTriggerConfig/sent-messages — listSentMessages: List sent messages
- GET /rest/NotificationTriggerConfig/sent-messages/{id} — getSentMessage: Get sent message
- POST /rest/NotificationTriggerConfig/sent-messages/{id}/resend — resendSentMessage: Resend sent message
- GET /rest/NotificationTriggerConfig/templates — listTemplates: List templates
- PUT /rest/NotificationTriggerConfig/templates/{type} — saveTemplate: Save template

## OEToFhir
- GET /OEToFhir — transformPersistMissingFhirObjects: Transform persist missing fhir objects
- GET /OEToFhir/info — getTransformationInfo: Get transformation info

## Organization
- GET /rest/Organization — getOrganization: Show organization
- POST /rest/Organization — showUpdateOrganization: Show update organization

## OrganizationExport
- GET /OrganizationExport — createMenuList: Create menu list
- GET /rest/OrganizationExport — exportOrganizations: Export organizations

## OrganizationMenu
- GET /rest/OrganizationMenu — getOrganizationMenu: Show organization menu

## PanelCreate
- GET /rest/PanelCreate — showPanelCreate: Show panel create
- POST /rest/PanelCreate — postPanelCreate: Post panel create

## PanelManagement
- GET /rest/PanelManagement — getPanelManagement: Show panel management
- POST /rest/PanelManagement — postPanelManagement: Show panel management

## PanelOrder
- GET /rest/PanelOrder — showPanelOrder: Show panel order
- POST /rest/PanelOrder — postPanelOrder: Post panel order

## PanelRenameEntry
- GET /rest/PanelRenameEntry — showPanelRenameEntry: Show panel rename entry
- POST /rest/PanelRenameEntry — updatePanelRenameEntry: Update panel rename entry

## PanelTestAssign
- GET /rest/PanelTestAssign — showPanelTestAssign: Show panel test assign
- POST /rest/PanelTestAssign — postPanelTestAssign: Post panel test assign

## PatientConfiguration
- GET /rest/PatientConfiguration — getPatientConfiguration: Show site information
- POST /rest/PatientConfiguration — postPatientConfiguration: Show update site information

## PatientConfigurationMenu
- GET /rest/PatientConfigurationMenu — getPatientConfigurationMenu: Show site information menu

## PatientManagement
- POST /rest/PatientManagement — savePatient: Create or update a patient

## PatientToFhir
- GET /PatientToFhir — transformPersistFhirPatients: Transform persist fhir patients

## PhoneNumberValidationProvider
- GET /rest/PhoneNumberValidationProvider — getPhoneNumberValidation: Get phone number validation

## PrintWorkplanReport
- POST /rest/PrintWorkplanReport — showRestPrintWorkplanReport: Show rest print workplan report

## PrintedReportsConfiguration
- GET /rest/PrintedReportsConfiguration — getPrintedReportsConfiguration: Show site information
- POST /rest/PrintedReportsConfiguration — postPrintedReportsConfiguration: Show update site information

## PrintedReportsConfigurationMenu
- GET /rest/PrintedReportsConfigurationMenu — getPrintedReportsConfigurationMenu: Show site information menu

## Provider
- POST /rest/Provider/FhirUuid — insertOrUpdateProviderByFhirUuid: Insert or update provider by fhir uuid
- GET /rest/Provider/Person/{id} — getPerson: Get person
- GET /rest/Provider/raw/{id} — getProvider: Get provider

## ProviderMenu
- GET /rest/ProviderMenu — getProviderMenu: Show provider menu

## ReferredOutTests
- GET /rest/ReferredOutTests — showReferredOutTests: Show referred out tests

## ReportPrint
- POST /rest/ReportPrint — showReportPrint: Show report print

## ResultConfiguration
- GET /rest/ResultConfiguration — getResultConfiguration: Show site information
- POST /rest/ResultConfiguration — postResultConfiguration: Show update site information

## ResultConfigurationMenu
- GET /rest/ResultConfigurationMenu — getResultConfigurationMenu: Show site information menu

## ResultReportingConfiguration
- GET /rest/ResultReportingConfiguration — showResultReportingConfiguration: Show result reporting configuration
- POST /rest/ResultReportingConfiguration — showUpdateResultReportingConfiguration: Show update result reporting configuration

## ResultSelectListAdd
- GET /rest/ResultSelectListAdd — showCreateResultSelectList: Show create result select list
- POST /rest/ResultSelectListAdd — showResultSelectListAddToTest: Show result select list add to test

## SampleBatchEntry
- POST /rest/SampleBatchEntry — showSampleBatchEntry: Show sample batch entry

## SampleBatchEntrySetup
- GET /rest/SampleBatchEntrySetup — showSampleBatchEntrySetup: Show sample batch entry setup

## SampleEdit
- GET /rest/SampleEdit — showSampleEdit: Show sample edit
- POST /rest/SampleEdit — saveSampleEdit: Save sample edit

## SampleEntryAccessionNumberValidation
- GET /rest/SampleEntryAccessionNumberValidation — getAccessionNumberValidation: Get accession number validation

## SampleEntryConfig
- GET /rest/SampleEntryConfig — getSampleEntryConfig: Show site information
- POST /rest/SampleEntryConfig — postSampleEntryConfig: Show update site information

## SampleEntryConfigMenu
- GET /rest/SampleEntryConfigMenu — getSampleEntryConfigMenu: Show site information menu

## SampleEntryGenerateScanProvider
- GET /rest/SampleEntryGenerateScanProvider — accessionNumberGenerator: Accession number generator

## SampleItem
- GET /rest/SampleItem — getSampleItemByAccessionNumber: Get sample item by accession number

## SamplePatientEntry
- GET /rest/SamplePatientEntry — showSamplePatientEntry: Show sample patient entry
- POST /rest/SamplePatientEntry — createSampleOrder: Create a lab order (sample + patient + tests)

## SamplePatientEntryBatch
- POST /rest/SamplePatientEntryBatch — showSamplePatientEntrySave: Show sample patient entry save

## SampleTypeCreate
- GET /rest/SampleTypeCreate — showSampleTypeCreate: Show sample type create
- POST /rest/SampleTypeCreate — postSampleTypeCreate: Post sample type create

## SampleTypeOrder
- GET /rest/SampleTypeOrder — showSampleTypeOrder: Show sample type order
- POST /rest/SampleTypeOrder — postSampleTypeOrder: Post sample type order

## SampleTypeRenameEntry
- GET /rest/SampleTypeRenameEntry — showSampleTypeRenameEntry: Show sample type rename entry
- POST /rest/SampleTypeRenameEntry — updateSampleTypeRenameEntry: Update sample type rename entry

## SampleTypeTestAssign
- GET /rest/SampleTypeTestAssign — showSampleTypeTestAssign: Show sample type test assign
- POST /rest/SampleTypeTestAssign — postSampleTypeTestAssign: Post sample type test assign

## SaveResultSelectList
- POST /rest/SaveResultSelectList — SaveResultSelectList: Save result select list

## SearchDictionaryMenu
- GET /rest/SearchDictionaryMenu — getSearchDictionaryMenu: Show dictionary menu

## SearchExternalConnectionMenu
- GET /rest/SearchExternalConnectionMenu — getSearchExternalConnectionMenu: Show external connection menu

## SearchOrganizationMenu
- GET /rest/SearchOrganizationMenu — getSearchOrganizationMenu: Show organization menu

## SearchProviderMenu
- GET /rest/SearchProviderMenu — getSearchProviderMenu: Show provider menu

## SearchUnifiedSystemUserMenu
- GET /rest/SearchUnifiedSystemUserMenu — getSearchUnifiedSystemUserMenu: Show unified system user menu

## SelectListRenameEntry
- GET /rest/SelectListRenameEntry — getSelectListRenameEntry: Show uom rename entry
- POST /rest/SelectListRenameEntry — postSelectListRenameEntry: Update uom rename entry

## SiteInformation
- GET /rest/SiteInformation — getSiteInformation: Show site information
- POST /rest/SiteInformation — postSiteInformation: Show update site information

## SiteInformationMenu
- GET /rest/SiteInformationMenu — getSiteInformationMenu: Show site information menu

## TestActivation
- GET /rest/TestActivation — showTestActivation: Show test activation
- POST /rest/TestActivation — postTestActivation: Post test activation

## TestAdd
- GET /rest/TestAdd — showTestAdd: Show test add
- POST /rest/TestAdd — postTestAdd: Post test add

## TestCatalog
- GET /rest/TestCatalog — showTestCatalog: Show test catalog

## TestManagementConfigMenu
- GET /rest/TestManagementConfigMenu — getTestManagementConfigMenu: Show test management config menu
- POST /rest/TestManagementConfigMenu — postTestManagementConfigMenu: Show test management config menu

## TestModifyEntry
- GET /rest/TestModifyEntry — showTestModifyEntry: Show test modify entry
- POST /rest/TestModifyEntry — postTestModifyEntry: Post test modify entry

## TestNamesProvider
- GET /rest/TestNamesProvider — getTestNamesProvider: Process request

## TestNotificationConfig
- GET /TestNotificationConfig/raw/list — getTestNotificationConfigRawList: Get notification configs
- GET /rest/TestNotificationConfig — getTestNotificationConfig: Display notification config
- POST /rest/TestNotificationConfig — postTestNotificationConfig: Update notification config
- GET /rest/TestNotificationConfig/raw/list — getTestNotificationConfigRawList2: Get notification configs

## TestNotificationConfigMenu
- GET /rest/TestNotificationConfigMenu — getTestNotificationConfigMenu: Display notification config
- POST /rest/TestNotificationConfigMenu — postTestNotificationConfigMenu: Update notification config

## TestOrderability
- GET /rest/TestOrderability — showTestOrderability: Show test orderability
- POST /rest/TestOrderability — postTestOrderability: Post test orderability

## TestRenameEntry
- GET /rest/TestRenameEntry — showTestRenameEntry: Show test rename entry
- POST /rest/TestRenameEntry — updateTestRenameEntry: Update test rename entry

## TestSectionCreate
- GET /rest/TestSectionCreate — showTestSectionCreate: Show test section create
- POST /rest/TestSectionCreate — postTestSectionCreate: Post test section create

## TestSectionEdit
- GET /rest/TestSectionEdit — getTestSectionEdit: Get test section edit
- POST /rest/TestSectionEdit — updateTestSectionDomain: Update test section domain
- GET /rest/TestSectionEdit/section — getTestSection: Get test section

## TestSectionManagement
- GET /rest/TestSectionManagement — getTestSectionManagement: Show test section management
- POST /rest/TestSectionManagement — postTestSectionManagement: Show test section management

## TestSectionOrder
- GET /rest/TestSectionOrder — showTestSectionOrder: Show test section order
- POST /rest/TestSectionOrder — postTestSectionOrder: Post test section order

## TestSectionRenameEntry
- GET /rest/TestSectionRenameEntry — showTestSectionRenameEntry: Show test section rename entry
- POST /rest/TestSectionRenameEntry — updateTestSectionRenameEntry: Update test section rename entry

## TestSectionTestAssign
- GET /rest/TestSectionTestAssign — showTestSectionTestAssign: Show test section test assign
- POST /rest/TestSectionTestAssign — postTestSectionTestAssign: Post test section test assign

## UnifiedSystemUser
- GET /rest/UnifiedSystemUser — showUnifiedSystemUser: Show unified system user
- POST /rest/UnifiedSystemUser — showUpdateUnifiedSystemUser: Show update unified system user

## UnifiedSystemUserMenu
- GET /rest/UnifiedSystemUserMenu — getUnifiedSystemUserMenu: Show unified system user menu

## UomCreate
- GET /rest/UomCreate — showUomCreate: Show uom create
- POST /rest/UomCreate — postUomCreate: Post uom create

## UomManagement
- GET /rest/UomManagement — getUomManagement: Show uom management
- POST /rest/UomManagement — postUomManagement: Show uom management

## UomRenameEntry
- GET /rest/UomRenameEntry — getUomRenameEntry: Show uom rename entry
- POST /rest/UomRenameEntry — postUomRenameEntry: Update uom rename entry

## ValidationConfiguration
- GET /rest/ValidationConfiguration — getValidationConfiguration: Show site information
- POST /rest/ValidationConfiguration — postValidationConfiguration: Show update site information

## ValidationConfigurationMenu
- GET /rest/ValidationConfigurationMenu — getValidationConfigurationMenu: Show site information menu

## WorkPlanByPanel
- GET /rest/WorkPlanByPanel — getWorkPlanByPanel: Show work plan by panel

## WorkPlanByPriority
- GET /rest/WorkPlanByPriority — showWorkPlanByPriority: Show work plan by priority

## WorkPlanByTest
- GET /rest/WorkPlanByTest — getWorkPlanByTest: Show work plan by panel

## WorkPlanByTestSection
- GET /rest/WorkPlanByTestSection — showWorkPlanByTestSection: Show work plan by test section

## WorkplanConfiguration
- GET /rest/WorkplanConfiguration — getWorkplanConfiguration: Show site information
- POST /rest/WorkplanConfiguration — postWorkplanConfiguration: Show update site information

## WorkplanConfigurationMenu
- GET /rest/WorkplanConfigurationMenu — getWorkplanConfigurationMenu: Show site information menu

## accession-results
- GET /rest/accession-results — getAccessionResults: Get results for an accession

## activate-reflexrule
- POST /rest/activate-reflexrule/{id} — postActivatereflexruleById: Activate reflex rule

## activate-test-calculation
- POST /rest/activate-test-calculation/{id} — postActivatetestcalculationById: Counterpart to deactivate

## address-hierarchy
- GET /rest/address-hierarchy/children — getAddresshierarchyChildren: Get children of a specific location by parent ID
- GET /rest/address-hierarchy/level/{levelNumber} — getValuesAtLevel: Get all values at a specific hierarchy level
- GET /rest/address-hierarchy/levels — getLevels: Get all configured address hierarchy levels
- GET /rest/address-hierarchy/path/{organizationId} — getHierarchyPath: Get the full hierarchy path for a location (from top level down to the specified location)
- GET /rest/address-hierarchy/search — getAddresshierarchySearch: Search for locations by name across all levels

## admin
- GET /rest/admin/menu/{elementId} — getEditableMenuItem: Get editable menu item
- GET /rest/admin/vector/manual-entry-fields — getFields: Get fields
- POST /rest/admin/vector/manual-entry-fields — createField: Create field
- PUT /rest/admin/vector/manual-entry-fields/{id} — updateField: Update field
- GET /rest/admin/vector/sample-types — getAdminVectorSampletypes: Get all sample types
- GET /rest/admin/vector/sample-types/active — getActiveSampleTypes: Get active sample types
- GET /rest/admin/vector/sampling-sites — getAllSites: Get all sites
- POST /rest/admin/vector/sampling-sites — createSite: Create site
- GET /rest/admin/vector/sampling-sites/active — getActiveSites: Get active sites
- GET /rest/admin/vector/sampling-sites/search — searchSites: Search sites
- GET /rest/admin/vector/sampling-sites/{id} — getSite: Get site
- PUT /rest/admin/vector/sampling-sites/{id} — updateSite: Update site
- GET /rest/admin/vector/species — getSpecies: Get species
- POST /rest/admin/vector/species — createSpecies: Create species
- GET /rest/admin/vector/species/lifecycle-stages — getAdminVectorSpeciesLifecyclestages: Get lifecycle stages
- GET /rest/admin/vector/species/{id} — getSpeciesById: Get species by id
- PUT /rest/admin/vector/species/{id} — updateSpecies: Update species
- GET /rest/admin/vector/trap-types — getTrapTypes: Get trap types
- POST /rest/admin/vector/trap-types — createTrapType: Create trap type
- GET /rest/admin/vector/trap-types/{id} — getTrapType: Get trap type
- PUT /rest/admin/vector/trap-types/{id} — updateTrapType: Update trap type

## alert-notification-config
- GET /rest/alert-notification-config — getAlertNotificationConfig: Get alert notification config
- POST /rest/alert-notification-config — saveAlertNotificationConfig: Save alert notification config

## alerts
- GET /rest/alerts — getAlerts: Get alerts
- GET /rest/alerts/count — countActiveAlerts: Count active alerts
- GET /rest/alerts/dashboard — getAlertsDashboard: Get alerts dashboard
- GET /rest/alerts/dashboard/summary — getAlertsSummary: Get alerts summary
- PUT /rest/alerts/dashboard/{id}/acknowledge — putAlertsDashboardByIdAcknowledge: Dashboard acknowledge: acknowledges and, when a comment is supplied, resolves in one step
- GET /rest/alerts/{id} — getAlertById: Get alert by id
- DELETE /rest/alerts/{id} — deleteAlert: Deletes an alert record outright
- PUT /rest/alerts/{id}/acknowledge — putAlertsByIdAcknowledge: Acknowledge alert
- PUT /rest/alerts/{id}/resolve — resolveAlert: Resolve alert

## analysis-status-types
- GET /rest/analysis-status-types — getAnalysisStatusTypes: Get analysis status types

## analyzer
- POST /analyzer/fhir — importFhirBundle: Import fhir bundle
- GET /rest/analyzer/analyzers — getAnalyzerAnalyzers: List
- POST /rest/analyzer/analyzers — postAnalyzerAnalyzers: Create
- GET /rest/analyzer/analyzers/{id} — getAnalyzerAnalyzersById: Get
- PUT /rest/analyzer/analyzers/{id} — putAnalyzerAnalyzersById: Update
- POST /rest/analyzer/analyzers/{id}/activate — postAnalyzerAnalyzersByIdActivate: Activate
- GET /rest/analyzer/analyzers/{id}/activation-readiness — readiness: Readiness
- POST /rest/analyzer/analyzers/{id}/deactivate — postAnalyzerAnalyzersByIdDeactivate: Deactivate
- POST /rest/analyzer/analyzers/{id}/reactivate — postAnalyzerAnalyzersByIdReactivate: Reactivate
- PUT /rest/analyzer/analyzers/{id}/site-binding — selectSiteBindingRevision: Select site binding revision
- POST /rest/analyzer/analyzers/{id}/test-connection — testConnection: Test connection
- POST /rest/analyzer/events/ast — postAnalyzerEventsAst: Receive
- POST /rest/analyzer/events/culture — postAnalyzerEventsCulture: Receive
- GET /rest/analyzer/import-issues — getImportIssues: Get import issues

## analyzer-types
- GET /rest/analyzer-types — getAnalyzerTypes: Get analyzer types
- POST /rest/analyzer-types/drafts — createDraft: Create draft
- GET /rest/analyzer-types/drafts/{draftId} — getDraft: Get draft
- PUT /rest/analyzer-types/drafts/{draftId} — updateDraft: Update draft
- GET /rest/analyzer-types/drafts/{draftId}/control-recognition — getControlRecognition: Get control recognition
- PUT /rest/analyzer-types/drafts/{draftId}/control-recognition — updateControlRecognition: Update control recognition
- POST /rest/analyzer-types/drafts/{draftId}/publish — publishDraft: Publish draft
- GET /rest/analyzer-types/mapping-catalog/tests — searchMappingTests: Search mapping tests
- GET /rest/analyzer-types/mapping-catalog/tests/{testId}/result-options — getMappingResultOptions: Get mapping result options
- GET /rest/analyzer-types/{profileId} — getAnalyzerType: Get analyzer type
- POST /rest/analyzer-types/{profileId}/deactivate — postAnalyzertypesByProfileIdDeactivate: Deactivate
- POST /rest/analyzer-types/{profileId}/duplicate — duplicate: Duplicate
- GET /rest/analyzer-types/{profileId}/history — history: History
- GET /rest/analyzer-types/{profileId}/mapping — getMapping: Get mapping
- PUT /rest/analyzer-types/{profileId}/mapping — saveMapping: Save mapping
- POST /rest/analyzer-types/{profileId}/mapping/confirm — confirmMapping: Confirm mapping
- POST /rest/analyzer-types/{profileId}/reactivate — postAnalyzertypesByProfileIdReactivate: Reactivate
- POST /rest/analyzer-types/{profileId}/update — updateShared: Update shared

## api
- GET /rest/api/tests/{id}/labelConfig — getLabelConfig: Get label config
- PUT /rest/api/tests/{id}/labelConfig — putLabelConfig: PUT /rest/api/tests/{id}/labelConfig Full-replace the label configuration for the test

## barcode
- GET /api/barcode/print/{orderId}/{presetId} — printFromSnapshot: Print from snapshot

## box-sample
- POST /rest/box-sample — addSampleToBox: Add sample to box
- GET /rest/box-sample/by-box/{shippingBoxId} — getBoxSamplesByShippingBox: Get box samples by shipping box ID (SampleItem-based API)
- GET /rest/box-sample/by-box/{shippingBoxId}/status/{status} — getBoxSamplesByReceptionStatus: Get box samples by reception status
- GET /rest/box-sample/by-sample/{sampleId} — getBoxSampleBySampleId: Get box sample by sample ID
- GET /rest/box-sample/check-sample/{sampleId} — isSampleInBox: Check if sample is in a box
- GET /rest/box-sample/count-by-box/{shippingBoxId} — countSamplesInBox: Count samples in box
- POST /rest/box-sample/items — addSampleItemToBox: Add sample item to box (NEW API using SampleItem)
- GET /rest/box-sample/items/by-box/{shippingBoxId} — getBoxSampleItemsByShippingBox: Get box sample items by shipping box ID (NEW API using SampleItem)
- GET /rest/box-sample/items/check/{sampleItemId} — isSampleItemInBox: Check if sample item is in a box
- GET /rest/box-sample/items/count-by-box/{shippingBoxId} — countSampleItemsInBox: Count sample items in box
- POST /rest/box-sample/items/reconcile-shipment/{shippingBoxId} — reconcileShipment: Resolve a box's specimens to their referral orders and link any already-accepted samples
- DELETE /rest/box-sample/items/{id} — removeSampleItemFromBox: Remove sample item from box (DELETE method)
- PUT /rest/box-sample/items/{id}/reception-status — updateSampleItemReceptionStatus: Update reception status for a sample item
- POST /rest/box-sample/items/{id}/remove — removeSampleItemFromBoxPost: Remove sample item from box (POST alternative to DELETE for CSRF compatibility)
- GET /rest/box-sample/{id} — getBoxSampleById: Get box sample by ID
- DELETE /rest/box-sample/{id} — removeSampleFromBox: Remove sample from box
- PUT /rest/box-sample/{id}/reception-status — updateReceptionStatus: Update reception status
- POST /rest/box-sample/{id}/remove — removeSampleFromBoxPost: Remove sample from box (POST alternative to DELETE for CSRF compatibility)

## calendar
- GET /rest/calendar/holidays — getHolidays: Get holidays
- POST /rest/calendar/holidays — createHoliday: Create holiday
- GET /rest/calendar/holidays/export — exportHolidays: Export holidays
- POST /rest/calendar/holidays/import — importHolidays: Import holidays
- PUT /rest/calendar/holidays/{id} — updateHoliday: Update holiday
- DELETE /rest/calendar/holidays/{id} — deleteHoliday: Delete holiday
- GET /rest/calendar/weekends — getWeekends: Get weekends
- PUT /rest/calendar/weekends — updateWeekends: Update weekends

## clinical
- GET /rest/clinical/dictionary/collection-methods — getCollectionMethods: Get collection methods
- GET /rest/clinical/dictionary/specimen-origins — getSpecimenOrigins: Get specimen origins

## coldstorage
- GET /rest/coldstorage/audit-trail — getAuditTrail: Get audit trail
- GET /rest/coldstorage/corrective-actions — getAllCorrectiveActions: Get all corrective actions
- POST /rest/coldstorage/corrective-actions — createCorrectiveAction: Create corrective action
- GET /rest/coldstorage/corrective-actions/{id} — getCorrectiveActionById: Get corrective action by id
- PUT /rest/coldstorage/corrective-actions/{id} — updateCorrectiveAction: Update corrective action
- PUT /rest/coldstorage/corrective-actions/{id}/complete — completeCorrectiveAction: Complete corrective action
- PUT /rest/coldstorage/corrective-actions/{id}/retract — retractCorrectiveAction: Retract corrective action
- GET /rest/coldstorage/devices — listDevices: List devices
- POST /rest/coldstorage/devices — postColdstorageDevices: Create device
- GET /rest/coldstorage/devices/name/{name} — getDeviceByName: Get device by name
- GET /rest/coldstorage/devices/{id} — getDevice: Get device
- PUT /rest/coldstorage/devices/{id} — putColdstorageDevicesById: Update device
- POST /rest/coldstorage/devices/{id}/delete — postColdstorageDevicesByIdDelete: Delete device
- PUT /rest/coldstorage/devices/{id}/thresholds — updateDeviceThresholds: Update device thresholds
- POST /rest/coldstorage/devices/{id}/toggle-status — toggleDeviceStatus: Toggle device status
- GET /rest/coldstorage/id/{freezerId}/readings — getReadings: Get readings
- GET /rest/coldstorage/reports/excursions — getExcursions: Get excursions
- POST /rest/coldstorage/reports/generate — generateReport: Generate report
- GET /rest/coldstorage/status — getCurrentStatus: Get current status
- GET /rest/coldstorage/storage-devices — listStorageDevices: List storage devices
- GET /rest/coldstorage/system-config — getSystemConfig: Get system config
- POST /rest/coldstorage/system-config — saveSystemConfig: Save system config
- GET /rest/coldstorage/thresholds — listThresholds: List thresholds
- POST /rest/coldstorage/thresholds — createThreshold: Create threshold
- GET /rest/coldstorage/users — listUsers: List users
- POST /rest/coldstorage/{freezerId}/thresholds/{profileId}/assign — assignThreshold: Assign threshold
- GET /rest/coldstorage/{name}/latest — getLatestByName: Get latest by name
- GET /rest/coldstorage/{name}/recent — getRecentByName: Get recent by name

## compliance
- GET /rest/compliance/dashboard/exceedances — getExceedances: Get exceedances
- GET /rest/compliance/dashboard/sites/comparison — getSiteComparison: Get site comparison
- GET /rest/compliance/dashboard/sites/{siteId}/parameters — getSiteParameters: Get site parameters
- GET /rest/compliance/dashboard/summary — getComplianceDashboardSummary: Get summary
- GET /rest/compliance/dashboard/trend — getComplianceDashboardTrend: Get trend
- GET /rest/compliance/sample-type-categories — getSampleTypeCategories: Distinct sample-type category names available in the system
- GET /rest/compliance/standards — getAllStandards: Get all standards
- POST /rest/compliance/standards — createStandard: Create standard
- GET /rest/compliance/standards/active — getActiveStandards: Get active standards
- GET /rest/compliance/standards/country-regions — getDistinctCountryRegions: Distinct list of countryRegion values currently in use across standards
- GET /rest/compliance/standards/search — searchStandards: Search standards
- GET /rest/compliance/standards/{id} — getComplianceStandardsById: Get standard
- PUT /rest/compliance/standards/{id} — updateStandard: Update standard
- DELETE /rest/compliance/standards/{id} — deleteStandard: Delete standard
- POST /rest/compliance/standards/{id}/archive — archiveStandard: Archive (soft-delete) a standard
- POST /rest/compliance/standards/{id}/copy — copyStandard: Copy Standard
- GET /rest/compliance/standards/{id}/linked-tests — getLinkedTests: Get linked tests
- GET /rest/compliance/standards/{id}/parameter-groups — getParameterGroups: Get parameter groups
- POST /rest/compliance/standards/{id}/parameter-groups — createParameterGroup: Create parameter group
- PUT /rest/compliance/standards/{id}/parameter-groups/{groupId} — updateParameterGroup: Update parameter group
- DELETE /rest/compliance/standards/{id}/parameter-groups/{groupId} — deleteParameterGroup: Delete parameter group
- GET /rest/compliance/test-catalog — getCatalog: Get catalog
- GET /rest/compliance/test-catalog/with-compliance — getCatalogWithCompliance: Catalog rows for tests that have at least one compliance threshold linked
- GET /rest/compliance/thresholds — listByGroup: List by group
- POST /rest/compliance/thresholds — postComplianceThresholds: Create
- GET /rest/compliance/thresholds/summary — summaryByTest: One row per test that has at least one threshold, with counts
- GET /rest/compliance/thresholds/{id} — getComplianceThresholdsById: Get
- PUT /rest/compliance/thresholds/{id} — putComplianceThresholdsById: Update
- DELETE /rest/compliance/thresholds/{id} — deleteComplianceThresholdsById: Delete

## complianceReport
- GET /rest/complianceReport — getReport: Get report
- GET /rest/complianceReport/compliance-statuses — getComplianceStatuses: Get compliance statuses
- POST /rest/complianceReport/exportPdf — postComplianceReportExportPdf: Generates the certificate PDF and records the generation (and, for released samples, archives it)
- POST /rest/complianceReport/reissue — reissue: Reissue

## configuration
- POST /rest/configuration/domains/reload — reloadDomains: Reload domains

## configuration-properties
- GET /rest/configuration-properties — getConfigurationProperties: Get configuration properties

## cytology
- POST /rest/cytology/assignCytoPathologist — postCytologyAssignCytoPathologist: Assign pathologist
- POST /rest/cytology/assignTechnician — postCytologyAssignTechnician: Assign technician
- GET /rest/cytology/caseView/{cytologySampleId} — getCytologyEntry: Get cytology entry
- POST /rest/cytology/caseView/{cytologySampleId} — createCytologyEntry: Create cytology entry
- GET /rest/cytology/dashboard — getFilteredCytologyEntries: Get filtered cytology entries
- GET /rest/cytology/dashboard/count — getCytologyDashBoardMetrics: Get cytology dash board metrics

## database-cleaning
- POST /rest/database-cleaning — cleanDatabase: Clean database
- GET /rest/database-cleaning/status — getStatus: Get status

## dataexport
- POST /dataexport/fhir — runAllDataExportTasks: Run all data export tasks

## dbImage
- GET /dbImage/siteInformation/{imageName} — getImage: Get image

## deactivate-reflexrule
- POST /rest/deactivate-reflexrule/{id} — postDeactivatereflexruleById: Deactivate reflex rule

## deactivate-test-calculation
- POST /rest/deactivate-test-calculation/{id} — postDeactivatetestcalculationById: Deactivate reflex rule

## departments-for-site
- GET /rest/departments-for-site — getDepartmentsForReferingSite: Get departments for refering site

## dictionary
- GET /rest/dictionary/categories/{categoryName}/entries — getDictionaryEntriesByCategoryName: Get dictionary entries by category name
- GET /rest/dictionary/category/{categoryName} — getDictionaryByCategory: Get dictionary entries by category name

## dictionary-categories
- GET /rest/dictionary-categories — fetchDictionaryCategories: Fetch dictionary categories

## displayList
- GET /rest/displayList/{listType} — getDisplayList: Get a dictionary list by type

## domains
- GET /rest/domains — listDomains: List domains

## environmental-sample-types
- GET /rest/environmental-sample-types — getEnvironmentalSampleTypes: Get environmental sample types

## eqa
- GET /rest/eqa/distributions — listDistributions: List distributions
- POST /rest/eqa/distributions — createDistribution: Create distribution
- GET /rest/eqa/distributions/{distributionId}/results — getResults: Get results
- POST /rest/eqa/distributions/{distributionId}/results — submitResult: Submit result
- POST /rest/eqa/distributions/{distributionId}/results/import — batchImportResults: Batch import results
- GET /rest/eqa/distributions/{distributionId}/statistics — getEqaDistributionsByDistributionIdStatistics: Get statistics
- POST /rest/eqa/distributions/{distributionId}/submit/{organizationId} — submitViaFhir: Submit via fhir
- POST /rest/eqa/distributions/{distributionId}/submit/{organizationId}/approve-late — approveLateSubmission: Approve late submission
- GET /rest/eqa/distributions/{id} — getDistribution: Get distribution
- POST /rest/eqa/distributions/{id}/barcodes — generateBarcodes: Generate barcodes
- PUT /rest/eqa/distributions/{id}/status — advanceStatus: Advance status
- GET /rest/eqa/eligible-organizations — getEligibleOrganizations: Get eligible organizations
- GET /rest/eqa/my-programs — listMyPrograms: List my programs
- POST /rest/eqa/my-programs — createMyProgram: Create my program
- GET /rest/eqa/my-programs/providers — getProviders: Get providers
- GET /rest/eqa/my-programs/{id} — getMyProgram: Get my program
- PUT /rest/eqa/my-programs/{id} — updateMyProgram: Update my program
- DELETE /rest/eqa/my-programs/{id} — deleteMyProgram: Delete my program
- GET /rest/eqa/orders — listOrders: List orders
- GET /rest/eqa/orders/summary — getEqaOrdersSummary: Get summary
- GET /rest/eqa/programs — listPrograms: List programs
- POST /rest/eqa/programs — postEqaPrograms: Create program
- GET /rest/eqa/programs/{id} — getProgram: Get program
- PUT /rest/eqa/programs/{id} — updateProgram: Update program
- GET /rest/eqa/programs/{id}/tests — getTestAssignments: Get test assignments
- PUT /rest/eqa/programs/{id}/tests — updateTestAssignments: Update test assignments
- GET /rest/eqa/programs/{programId}/enrollments — listEnrollments: List enrollments
- POST /rest/eqa/programs/{programId}/enrollments — createEnrollments: Create enrollments
- PUT /rest/eqa/programs/{programId}/enrollments/{enrollmentId} — updateEnrollmentStatus: Update enrollment status

## esig
- GET /rest/esig/admin/certifications — getAllCertifications: Get all certifications (admin)
- DELETE /rest/esig/admin/certifications/{username} — revokeCertification: Revoke a user's certification (admin)
- GET /rest/esig/certified/{username} — isUserCertified: Check if current user is certified
- POST /rest/esig/certify — certifyUser: Complete first-use certification
- GET /rest/esig/enabled — isEsigEnabled: Check if e-signatures are enabled
- GET /rest/esig/session-status/{username} — getSessionStatus: Get signing session status for the current user
- POST /rest/esig/sign — executeSignature: Execute an electronic signature
- GET /rest/esig/signatures — getSignaturesForRecord: Get signatures for a specific record

## fhir
- POST /fhir/optimizeStorage — triggerOptimizeStorage: Trigger optimize storage
- GET /rest/fhir/{resourceType} — queryFhirResources: Query FHIR resources by resource type with search parameters
- GET /rest/fhir/{resourceType}/_search — searchFhirResourcesRaw: Execute a raw FHIR query using the FHIR search URL format
- POST /rest/fhir/{resourceType}/_search — searchFhirResources: Execute a FHIR search using a POST request with a search parameter map
- GET /rest/fhir/{resourceType}/{resourceId} — getFhirResource: Get a specific FHIR resource by ID

## fhir-store
- POST /fhir — submitFhirBundle: Submit a transaction or batch Bundle
- GET /fhir/metadata — getFhirCapabilityStatement: Get the FHIR server CapabilityStatement
- GET /fhir/{resourceType} — searchFhirStoreResources: Search resources of one type (searchset Bundle)
- POST /fhir/{resourceType} — createFhirStoreResource: Create a resource of one type
- GET /fhir/{resourceType}/_search — searchFhirStoreResourcesByGet: Search resources of one type via the _search endpoint
- POST /fhir/{resourceType}/_search — searchFhirStoreResourcesByPost: Search resources of one type with search parameters in the body
- GET /fhir/{resourceType}/{id} — getFhirStoreResource: Read one resource by logical id
- PUT /fhir/{resourceType}/{id} — updateFhirStoreResource: Update or create a resource at a known id
- DELETE /fhir/{resourceType}/{id} — deleteFhirStoreResource: Delete a resource by logical id

## getPendingAnalysisForTestProvider
- GET /rest/getPendingAnalysisForTestProvider — getGetPendingAnalysisForTestProvider: Process request

## health
- GET /health — showHealthState: Show health state
- GET /health/odoo — odooHealth: Odoo health

## health-districts-for-region
- GET /rest/health-districts-for-region — getHealthDistrictsForRegion: Get health districts for region

## home-dashboard
- GET /rest/home-dashboard/metrics — getDashboardMetrics: Get dashboard summary metrics
- GET /rest/home-dashboard/turn-around-time-metrics — getDasBoardAverageTurnAroundTime: Get das board average turn around time
- GET /rest/home-dashboard/{listType} — getDashboardOrders: Get dashboard orders for a tile type

## immunohistochemistry
- POST /rest/immunohistochemistry/assignPathologist — postImmunohistochemistryAssignPathologist: Assign pathologist
- POST /rest/immunohistochemistry/assignTechnician — postImmunohistochemistryAssignTechnician: Assign technician
- GET /rest/immunohistochemistry/caseView/{immunohistochemistrySampleId} — getImmunohistochemistryCaseViewByImmunohistochemistrySampleId: Get filtered immunohistochemistry entries
- POST /rest/immunohistochemistry/caseView/{immunohistochemistrySampleId} — postImmunohistochemistryCaseViewByImmunohistochemistrySampleId: Get filtered immunohistochemistry entries
- GET /rest/immunohistochemistry/dashboard — getImmunohistochemistryDashboard: Get filtered immunohistochemistry entries
- GET /rest/immunohistochemistry/dashboard/count — getImmunohistochemistryDashboardCount: Get filtered immunohistochemistry entries

## import
- GET /import/all — importAll: Import all
- GET /import/organization — importOrganizations: Import organizations
- GET /import/provider — importProviders: Import providers

## inventory
- GET /rest/inventory/items — getInventoryItems: Get all active
- POST /rest/inventory/items — postInventoryItems: Create
- GET /rest/inventory/items/all — getInventoryItemsAll: Get all
- GET /rest/inventory/items/category/{category} — getByCategory: Get by category
- GET /rest/inventory/items/low-stock — getLowStockItems: Get low stock items
- GET /rest/inventory/items/search — getInventoryItemsSearch: Search
- GET /rest/inventory/items/type/{itemType} — getInventoryItemsTypeByItemType: Get by type
- GET /rest/inventory/items/types — getAllItemTypes: Get all item types
- GET /rest/inventory/items/{id} — getInventoryItemsById: Get by id
- PUT /rest/inventory/items/{id} — putInventoryItemsById: Update
- PUT /rest/inventory/items/{id}/activate — putInventoryItemsByIdActivate: Activate
- PUT /rest/inventory/items/{id}/deactivate — putInventoryItemsByIdDeactivate: Deactivate
- GET /rest/inventory/items/{id}/stock — getTotalStock: Get total stock
- GET /rest/inventory/lots — getInventoryLots: Get all
- POST /rest/inventory/lots — postInventoryLots: Create
- GET /rest/inventory/lots/expired — getExpiredActiveLots: Get expired active lots
- GET /rest/inventory/lots/expiring — getExpiringLots: Get expiring lots
- GET /rest/inventory/lots/item/{itemId} — getInventoryLotsItemByItemId: Get by item id
- GET /rest/inventory/lots/item/{itemId}/available — getAvailableLotsFEFO: Get available lots fefo
- GET /rest/inventory/lots/item/{itemId}/total-quantity — getTotalQuantity: Get total quantity
- GET /rest/inventory/lots/location/{locationId} — getByLocationId: Get by location id
- GET /rest/inventory/lots/lot-number/{lotNumber} — getByLotNumber: Get by lot number
- POST /rest/inventory/lots/process-expired — processExpired: Process expired
- GET /rest/inventory/lots/{id} — getInventoryLotsById: Get by id
- PUT /rest/inventory/lots/{id} — putInventoryLotsById: Update
- POST /rest/inventory/lots/{id}/adjust — adjustQuantity: Adjust quantity
- POST /rest/inventory/lots/{id}/dispose — disposeLot: Dispose lot
- POST /rest/inventory/lots/{id}/open — openLot: Open lot
- PUT /rest/inventory/lots/{id}/qc-status — updateQCStatus: Update qc status
- PUT /rest/inventory/lots/{id}/status — updateStatus: Update status
- GET /rest/inventory/management/alerts — getInventoryManagementAlerts: Get alerts
- GET /rest/inventory/management/check-availability — checkAvailability: Check availability
- POST /rest/inventory/management/consume — consumeInventory: Consume inventory
- POST /rest/inventory/management/receive — receiveInventory: Receive inventory
- GET /rest/inventory/transactions/date-range — getByDateRange: Get by date range
- GET /rest/inventory/transactions/lot/{lotId} — getInventoryTransactionsLotByLotId: Get by lot id
- GET /rest/inventory/transactions/reference — getByReference: Get by reference
- GET /rest/inventory/transactions/type/{transactionType} — getInventoryTransactionsTypeByTransactionType: Get by type
- GET /rest/inventory/transactions/{id} — getInventoryTransactionsById: Get by id
- GET /rest/inventory/usage/analysis/{analysisId} — getByAnalysisId: Get by analysis id
- GET /rest/inventory/usage/item/{itemId} — getInventoryUsageItemByItemId: Get by item id
- GET /rest/inventory/usage/lot/{lotId} — getInventoryUsageLotByLotId: Get by lot id
- GET /rest/inventory/usage/test-result/{testResultId} — getByTestResultId: Get by test result id
- GET /rest/inventory/usage/{id} — getInventoryUsageById: Get by id

## inventory-storage-locations
- GET /rest/inventory-storage-locations — getInventorystoragelocations: Get all active
- POST /rest/inventory-storage-locations — postInventorystoragelocations: Create
- GET /rest/inventory-storage-locations/code/{code} — getByCode: Get by code
- GET /rest/inventory-storage-locations/top-level — getTopLevel: Get top level
- GET /rest/inventory-storage-locations/type/{locationType} — getInventorystoragelocationsTypeByLocationType: Get by type
- GET /rest/inventory-storage-locations/{id} — getInventorystoragelocationsById: Get by id
- PUT /rest/inventory-storage-locations/{id} — putInventorystoragelocationsById: Update
- PUT /rest/inventory-storage-locations/{id}/deactivate — putInventorystoragelocationsByIdDeactivate: Deactivate
- GET /rest/inventory-storage-locations/{id}/has-active-lots — hasActiveLots: Has active lots
- GET /rest/inventory-storage-locations/{id}/path — getPath: Get path
- GET /rest/inventory-storage-locations/{parentId}/children — getInventorystoragelocationsByParentIdChildren: Get children

## lab-units-management
- GET /rest/lab-units-management — getAllLabUnits: Get all lab units
- POST /rest/lab-units-management — createLabUnit: Create a lab unit
- GET /rest/lab-units-management/{labUnitId} — getLabUnit: Get lab unit
- PUT /rest/lab-units-management/{labUnitId} — updateLabUnit: Update lab unit
- GET /rest/lab-units-management/{labUnitId}/assignable-tests — getAssignableTests: Active tests NOT currently assigned to this lab unit, for the bulk Assign dialog
- PUT /rest/lab-units-management/{labUnitId}/display-order — putLabunitsmanagementByLabUnitIdDisplayorder: Update display order
- GET /rest/lab-units-management/{labUnitId}/tests — getAssignedTests: Get assigned tests
- POST /rest/lab-units-management/{labUnitId}/tests/assign — assignTests: Bulk-assign tests INTO this lab unit (moves them off their current unit)
- POST /rest/lab-units-management/{labUnitId}/tests/reassign — reassignTests: Bulk-reassign tests OUT of this lab unit into a destination unit

## labUnit
- GET /rest/labUnit/config — getLabUnitConfig: Get lab unit config

## labelPresets
- GET /api/labelPresets — listPresets: List presets
- POST /api/labelPresets — createPreset: Create preset
- GET /api/labelPresets/{id} — getPreset: Get preset
- PUT /api/labelPresets/{id} — updatePreset: Update preset
- PATCH /api/labelPresets/{id}/activate — activatePreset: Activate preset
- POST /api/labelPresets/{id}/duplicate — duplicatePreset: Duplicate preset

## labnumbermanagement
- GET /rest/labnumbermanagement — getValues: Get values
- POST /rest/labnumbermanagement — setValues: Set values

## localizations
- GET /rest/localizations — getAllLocalizations: Get all localizations with their translations
- GET /rest/localizations/export/{locale} — exportTranslations: Export all translations for a specific locale
- POST /rest/localizations/import — importTranslations: Bulk update translations from CSV/import data
- GET /rest/localizations/missing/{locale} — getMissingTranslations: Get localizations with missing translations for a specific locale
- GET /rest/localizations/stats — getTranslationStats: Get translation statistics
- GET /rest/localizations/{id} — getLocalization: Get a specific localization by ID
- PUT /rest/localizations/{id}/translations — updateTranslations: Update translations for a localization entry
- POST /rest/localizations/{id}/translations/{locale} — setTranslation: Set a single translation for a localization entry

## logging
- GET /logging — changeLoggingLevel: Change logging level
- GET /logging/stream — streamLog: Stream log
- GET /logging/test — loggingLevelTest: Logging level test

## logoUpload
- POST /rest/logoUpload — doPost: Do post

## math-functions
- GET /rest/math-functions — getMathFunctions: Get math functions

## menu
- GET /rest/menu — getMenu: Get menu tree
- POST /rest/menu — postMenu: Post menu tree
- GET /rest/menu/{elementId} — getMenuByElementId: Get menu tree
- POST /rest/menu/{elementId} — postMenuByElementId: Post menu tree

## methods-for-test
- GET /rest/methods-for-test/{testId} — getMethodsForTest: Returns methods linked to the given test plus the default method id

## microbiology
- POST /rest/microbiology/admin/breakpoints/imports/preview — previewImport: Preview import
- POST /rest/microbiology/admin/breakpoints/imports/{previewToken}/apply — applyImport: Apply import
- GET /rest/microbiology/admin/breakpoints/standards — getStandards: Get standards
- GET /rest/microbiology/admin/breakpoints/standards/{id} — getMicrobiologyAdminBreakpointsStandardsById: Get standard
- POST /rest/microbiology/admin/breakpoints/standards/{id}/activate — postMicrobiologyAdminBreakpointsStandardsByIdActivate: Activate
- POST /rest/microbiology/admin/breakpoints/standards/{id}/archive — archive: Archive
- GET /rest/microbiology/admin/breakpoints/standards/{id}/rules — getRules: Get rules
- POST /rest/microbiology/admin/breakpoints/standards/{id}/rules — createRule: Create rule
- GET /rest/microbiology/admin/breakpoints/standards/{id}/rules/{ruleId} — getRule: Get rule
- PUT /rest/microbiology/admin/breakpoints/standards/{id}/rules/{ruleId} — updateRule: Update rule
- GET /rest/microbiology/admin/reference/antibiotics — getMicrobiologyAdminReferenceAntibiotics: Get antibiotics
- POST /rest/microbiology/admin/reference/antibiotics — createAntibiotic: Create antibiotic
- GET /rest/microbiology/admin/reference/antibiotics/{id} — getAntibiotic: Get antibiotic
- PUT /rest/microbiology/admin/reference/antibiotics/{id} — updateAntibiotic: Update antibiotic
- PATCH /rest/microbiology/admin/reference/antibiotics/{id}/active — setAntibioticActive: Set antibiotic active
- GET /rest/microbiology/admin/reference/ast-panels — getMicrobiologyAdminReferenceAstpanels: Get ast panels
- POST /rest/microbiology/admin/reference/ast-panels — createAstPanel: Create ast panel
- GET /rest/microbiology/admin/reference/ast-panels/{id} — getAstPanel: Get ast panel
- POST /rest/microbiology/admin/reference/ast-panels/{id}/versions — publishAstPanelVersion: Publish ast panel version
- GET /rest/microbiology/admin/reference/culture-setups — getCultureSetups: Get culture setups
- POST /rest/microbiology/admin/reference/culture-setups — createCultureSetup: Create culture setup
- GET /rest/microbiology/admin/reference/culture-setups/{id} — getCultureSetup: Get culture setup
- PUT /rest/microbiology/admin/reference/culture-setups/{id} — updateCultureSetup: Update culture setup
- GET /rest/microbiology/admin/reference/options/{resource} — getMicrobiologyAdminReferenceOptionsByResource: Get options
- GET /rest/microbiology/admin/reference/organisms — getMicrobiologyAdminReferenceOrganisms: Get organisms
- POST /rest/microbiology/admin/reference/organisms — createOrganism: Create organism
- GET /rest/microbiology/admin/reference/organisms/{id} — getOrganism: Get organism
- PUT /rest/microbiology/admin/reference/organisms/{id} — updateOrganism: Update organism
- PATCH /rest/microbiology/admin/reference/organisms/{id}/active — setOrganismActive: Set organism active
- GET /rest/microbiology/admin/reference/patient-origins — getMicrobiologyAdminReferencePatientorigins: Get patient origins
- GET /rest/microbiology/ast/panels/{panelId}/antibiotics — getPanelAntibiotics: Get panel antibiotics
- PUT /rest/microbiology/ast/readings/{readingId}/override — overrideReading: Override reading
- POST /rest/microbiology/ast/readings/{readingId}/override/revert — revertOverride: Revert override
- GET /rest/microbiology/ast/runs — getRunsForIsolate: Get runs for isolate
- POST /rest/microbiology/ast/runs — startRun: Start run
- POST /rest/microbiology/ast/runs/{runId}/analyzer-flags/acknowledge — acknowledgeAnalyzerFlags: Acknowledge analyzer flags
- POST /rest/microbiology/ast/runs/{runId}/invalidate-and-repeat — invalidateAndRepeat: Invalidate and repeat
- POST /rest/microbiology/ast/runs/{runId}/qc/override — overrideQcFailure: Override qc failure
- POST /rest/microbiology/ast/runs/{runId}/readings — recordReading: Record reading
- POST /rest/microbiology/ast/runs/{runId}/reportable — selectReportableRun: Select reportable run
- POST /rest/microbiology/ast/runs/{runId}/review — reviewRun: Review run
- POST /rest/microbiology/ast/runs/{sourceRunId}/attempts — startRepeatRun: Start repeat run
- GET /rest/microbiology/ast/setup — getSetup: Get setup
- GET /rest/microbiology/cases — getCasesForSampleItem: Get cases for sample item
- GET /rest/microbiology/cases/{caseId} — getCaseDetail: Get case detail
- POST /rest/microbiology/cases/{caseId}/activities — recordActivity: Record activity
- GET /rest/microbiology/cases/{caseId}/amendments — getMicrobiologyCasesByCaseIdAmendments: Get history
- POST /rest/microbiology/cases/{caseId}/amendments — open: Open
- POST /rest/microbiology/cases/{caseId}/amendments/current/cancel — cancel: Cancel
- GET /rest/microbiology/cases/{caseId}/amendments/report-versions — getReportVersions: Get report versions
- GET /rest/microbiology/cases/{caseId}/critical-communications — getCommunications: Get communications
- POST /rest/microbiology/cases/{caseId}/critical-communications — logCommunication: Log communication
- GET /rest/microbiology/cases/{caseId}/inoculations — getByCaseId: Get by case id
- POST /rest/microbiology/cases/{caseId}/inoculations — postMicrobiologyCasesByCaseIdInoculations: Record
- POST /rest/microbiology/cases/{caseId}/nonconformances — report: Report
- POST /rest/microbiology/cases/{caseId}/notes — addNote: Add note
- PUT /rest/microbiology/cases/{caseId}/order-detail — saveOrderDetail: Save order detail
- PUT /rest/microbiology/cases/{caseId}/protocol — changeProtocol: Change protocol
- GET /rest/microbiology/cases/{caseId}/protocol/options — getMicrobiologyCasesByCaseIdProtocolOptions: Get options
- GET /rest/microbiology/cases/{caseId}/readiness — getMicrobiologyCasesByCaseIdReadiness: Get readiness
- GET /rest/microbiology/cases/{caseId}/reagent-lots — getOverview: Get overview
- POST /rest/microbiology/cases/{caseId}/release/amended — releaseAmended: Release amended
- POST /rest/microbiology/cases/{caseId}/release/final — releaseFinal: Release final
- POST /rest/microbiology/cases/{caseId}/release/preliminary — releasePreliminary: Release preliminary
- GET /rest/microbiology/cases/{caseId}/release/preview — getMicrobiologyCasesByCaseIdReleasePreview: Preview
- GET /rest/microbiology/cases/{caseId}/timeline — getTimeline: Get timeline
- GET /rest/microbiology/cases/{caseId}/whonet-readiness — getMicrobiologyCasesByCaseIdWhonetreadiness: Get readiness
- PUT /rest/microbiology/cases/{caseId}/workflow — changeWorkflow: Change workflow
- PUT /rest/microbiology/critical-communications/{communicationId}/acknowledge — acknowledge: Acknowledge
- PUT /rest/microbiology/critical-communications/{communicationId}/close — close: Close
- POST /rest/microbiology/isolates — createIsolate: Create isolate
- PUT /rest/microbiology/isolates/{isolateId}/identification — updateIdentification: Update identification
- GET /rest/microbiology/isolates/{isolateId}/identification-history — getIdentificationHistory: Get identification history
- GET /rest/microbiology/reference/antibiotics — getMicrobiologyReferenceAntibiotics: Get antibiotics
- GET /rest/microbiology/reference/ast-panels — getMicrobiologyReferenceAstpanels: Get ast panels
- GET /rest/microbiology/reference/breakpoint-standards — getBreakpointStandards: Get breakpoint standards
- GET /rest/microbiology/reference/culture-methods — getCultureMethods: Get culture methods
- GET /rest/microbiology/reference/organisms — getMicrobiologyReferenceOrganisms: Get organisms
- GET /rest/microbiology/reference/patient-origins — getMicrobiologyReferencePatientorigins: Get patient origins
- POST /rest/microbiology/uat/scenarios — provision: Provision
- POST /rest/microbiology/whonet/exports — generate: Generate
- GET /rest/microbiology/whonet/filter-options — filterOptions: Filter options
- GET /rest/microbiology/whonet/preview — getMicrobiologyWhonetPreview: Preview
- GET /rest/microbiology/worklist — getWorklistRows: Get worklist rows

## nce
- POST /rest/nce/assign — assignNce: Assign an NCE to a user
- GET /rest/nce/attachments/{attachmentId}/download — getNceAttachmentsByAttachmentIdDownload: Download an NCE attachment file
- GET /rest/nce/categories — getCategories: Get categories
- GET /rest/nce/dashboard — getDashboardData: Get dashboard data
- GET /rest/nce/generate-number — generateNceNumber: Generate nce number
- POST /rest/nce/history — addHistoryEntry: Add a history entry (note) to an NCE
- GET /rest/nce/users — getUsers: Get list of users for assignment autocomplete

## nonconformevents
- GET /rest/nonconformevents — getNCESampleSearch: Get nce sample search

## nonconformingcorrectiveaction
- GET /rest/nonconformingcorrectiveaction — getNCECorrectionActions: Get nce correction actions

## notebook
- GET /rest/notebook/auditTrail — getNoteBookAuditTrail: Get note book audit trail
- POST /rest/notebook/create — createNoteBookEntry: Create note book entry
- GET /rest/notebook/dashboard/entries — getFilteredNoteBooks: Get filtered note books
- GET /rest/notebook/dashboard/entries/{noteBookId} — getNoteBookEntries: Get note book entries
- GET /rest/notebook/dashboard/metrics — getNoteBookDashboardMetrics: Get note book dashboard metrics
- GET /rest/notebook/dashboard/notebooks — getAllNoteBooks: Get all note books
- GET /rest/notebook/list — getAvailableNotebooks: Get available notebooks
- GET /rest/notebook/notebooksamples — getNoteBookSamples: Get note book samples
- GET /rest/notebook/questionnaires — getQuestionnaires: Get questionnaires
- GET /rest/notebook/samples — getNotebookSamples: Search samples
- POST /rest/notebook/update/{noteBookId} — updateNoteBookEntry: Update note book entry
- POST /rest/notebook/updatestatus/{noteBookId} — updateNoteBookStatus: Update note book status
- GET /rest/notebook/view/{noteBookId} — getNoteBookEntry: Get note book entry

## notification
- PUT /rest/notification/markasread/all — markAllNotificationsAsRead: Mark all notifications as read
- PUT /rest/notification/markasread/{id} — markNotificationAsRead: Mark notification as read
- GET /rest/notification/pnconfig — getSubscriptionDetails: Get subscription details
- GET /rest/notification/public_key — getPublicKey: Get public key
- POST /rest/notification/subscribe — subscribe: Subscribe
- PUT /rest/notification/unsubscribe — unsubscribe: Unsubscribe
- POST /rest/notification/{userId} — saveNotification: Save notification

## notifications
- GET /rest/notifications — getNotificationsByUserId: Get notifications by user id
- GET /rest/notifications/all — getNotifications: Get notifications

## open-configuration-properties
- GET /rest/open-configuration-properties — getOpenConfigurationProperties: Get open configuration properties

## order
- DELETE /rest/order/attachments/{attachmentId} — deleteAttachment: Delete attachment
- GET /rest/order/attachments/{attachmentId}/download — getOrderAttachmentsByAttachmentIdDownload: Download attachment
- GET /rest/order/attachments/{attachmentId}/view — viewAttachment: View attachment
- GET /rest/order/dashboard — getOrderDashboard: Search/list orders
- GET /rest/order/search — searchOrder: Search for an order by lab number (accession number)
- GET /rest/order/{accessionNumber}/attachments — listAttachments: List attachments
- POST /rest/order/{accessionNumber}/attachments — uploadAttachments: Uploads may carry the analysis / result component they document (Results pages); order-entry uploads send neither and stay order-level

## order-override
- GET /rest/order-override/{labNumber} — getOverrides: Get overrides
- POST /rest/order-override/{labNumber} — recordOverride: Record override

## orderEntry
- POST /api/orderEntry/labelRequest — computeLabelRequest: Compute label request

## orders
- GET /api/orders/by-accession/{accessionNumber}/labels — getOrderLabelsByAccession: Accession-keyed twin of #getOrderLabels(String) for frontends that hold only the accession number, not the internal Sample PK
- GET /api/orders/{id}/labels — getOrderLabels: Get order labels

## organization
- GET /rest/organization/search — searchOrganizations: Search organizations
- GET /rest/organization/types — getOrganizationTypes: Get all organization types
- GET /rest/organization/{id} — getOrganizationById: Get organization

## organization-list
- GET /rest/organization-list — getAllOrganizations: Get all organizations

## paginatedDisplayList
- GET /rest/paginatedDisplayList/{listType} — getPaginatedDisplayList: Get paginated display list

## panels
- GET /panels — createPanelList: Create panel list

## pathology
- POST /rest/pathology/assignPathologist — postPathologyAssignPathologist: Assign pathologist
- POST /rest/pathology/assignTechnician — postPathologyAssignTechnician: Assign technician
- GET /rest/pathology/caseView/{pathologySampleId} — getPathologyCaseViewByPathologySampleId: Get filtered pathology entries
- POST /rest/pathology/caseView/{pathologySampleId} — postPathologyCaseViewByPathologySampleId: Get filtered pathology entries
- GET /rest/pathology/dashboard — getPathologyDashboard: Get filtered pathology entries
- GET /rest/pathology/dashboard/count — getPathologyDashboardCount: Get filtered pathology entries

## patient
- GET /rest/patient/merge/details/{patientId} — getMergeDetails: GET /api/patient/merge/details/{patientId} Retrieves merge details for a specific patient
- POST /rest/patient/merge/execute — executeMerge: POST /api/patient/merge/execute Executes a patient merge operation
- POST /rest/patient/merge/validate — validateMerge: POST /api/patient/merge/validate Validates a patient merge request without executing it

## patient-details
- GET /rest/patient-details — getPatientdetails: Get patient results

## patient-id-documents
- PUT /rest/patient-id-documents/{documentId} — updateIdDocument: Update id document
- DELETE /rest/patient-id-documents/{documentId} — deleteIdDocument: Delete id document
- GET /rest/patient-id-documents/{patientId} — getIdDocuments: Get id documents
- GET /rest/patient-id-documents/{patientId}/{documentId}/full — getIdDocumentFull: Get id document full

## patient-photos
- GET /rest/patient-photos/{id}/{isThumbnail} — getPhoto: Get photo

## patient-search
- GET /rest/patient-search — searchPatientsBare: Search patients (unpaged array)

## patient-search-results
- GET /rest/patient-search-results — searchPatients: Search patients (paged)

## patientByLabNumer
- GET /rest/patientByLabNumer — getPatientByLabNumber: Get patient by lab number

## practitioner
- GET /rest/practitioner — getProviderInformation: Get provider information

## program
- POST /rest/program — postProgram: Create program
- GET /rest/program/{id} — getProgramById: Create program
- GET /rest/program/{id}/questionnaire — getAdditionalEntryQuestions: Get additional entry questions

## programSample
- GET /rest/programSample/{id} — getProgramSampleDisplayItem: Get program sample display item

## programSamplesList
- GET /rest/programSamplesList — getPaginatedProgramSamples: Get paginated program samples

## projects
- GET /rest/projects — getProjects: Get projects

## properties
- GET /rest/properties — getProperties: Get properties
- POST /rest/properties — updateProperties: Update properties

## provider
- GET /rest/provider/search — searchProviders: Search providers

## qa-checklist
- POST /rest/qa-checklist — saveQaChecklist: Save or update QA checklist
- GET /rest/qa-checklist/by-lab-number/{labNumber} — getQaChecklistByLabNumber: Get QA checklist by lab number (accession number)
- GET /rest/qa-checklist/config — getChecklistConfig: Get all active checklist item configurations from the Dictionary
- GET /rest/qa-checklist/{sampleId} — getQaChecklist: Get QA checklist by sample ID

## qc
- GET /rest/qc/alerts — getQcAlerts: Get alerts for the current user
- GET /rest/qc/alerts/count/unread — getUnreadCount: Get unread alert count for the current user
- PUT /rest/qc/alerts/read — markMultipleAsRead: Mark multiple alerts as read
- PUT /rest/qc/alerts/{id}/read — markAsRead: Mark a single alert as read
- GET /rest/qc/charts/{controlLotId} — getChartData: Get chart data for a specific control lot with optional filtering
- GET /rest/qc/charts/{controlLotId}/statistics — getChartStatistics: Get statistics (mean, SD) for reference lines in the chart
- GET /rest/qc/control-lots — getAllControlLots: Get all control lots (all statuses)
- POST /rest/qc/controlLot — saveControlLot: Create or update a control lot
- GET /rest/qc/controlLot/byLotNumber/{lotNumber} — getControlLotByLotNumber: Get a control lot by lot number
- GET /rest/qc/controlLot/{id} — getControlLot: Get a specific control lot by ID
- PUT /rest/qc/controlLot/{id}/activate — activateControlLot: Activate a control lot (transition from ESTABLISHMENT to ACTIVE)
- PUT /rest/qc/controlLot/{id}/deactivate — deactivateControlLot: Deactivate a control lot (mark as EXPIRED)
- GET /rest/qc/controlLot/{id}/statistics — getLatestStatistics: Get the latest statistics for a control lot
- POST /rest/qc/controlLot/{id}/statistics/initialRuns — calculateInitialRunsStatistics: Calculate initial runs statistics for a control lot
- POST /rest/qc/controlLot/{id}/statistics/rolling — calculateRollingStatistics: Calculate rolling window statistics for a control lot
- GET /rest/qc/controlLots — getActiveControlLots: Get all active control lots for a specific test and instrument
- GET /rest/qc/dashboard/instruments — getAllInstrumentQCStatus: Get compliance status for all instruments
- GET /rest/qc/dashboard/instruments/{instrumentId} — getInstrumentQCStatus: Get compliance status for a specific instrument
- GET /rest/qc/dashboard/summary — getDashboardSummary: Get dashboard summary with aggregate violation counts
- GET /rest/qc/ruleConfig — getRuleConfigurations: Get all rule configurations for a specific test and instrument
- POST /rest/qc/ruleConfig/defaults — createDefaultRuleConfigurations: Create default rule configurations for a new test-instrument combination
- GET /rest/qc/ruleConfig/enabled — getEnabledRuleConfigurations: Get only enabled rule configurations for a test and instrument
- POST /rest/qc/ruleConfig/preset — applyPresetConfiguration: Apply a preset configuration (BASIC, STANDARD, COMPREHENSIVE)
- GET /rest/qc/ruleConfig/summaries — getAllRuleConfigSummaries: Get summaries of all rule configurations grouped by (test, instrument)
- GET /rest/qc/ruleConfig/unconfigured — getUnconfiguredMappings: Get control-lot mappings that have no rule configuration
- POST /rest/qc/ruleConfig/validate — validateRuleConfiguration: Validate the current rule configuration
- PUT /rest/qc/ruleConfig/{id} — updateRuleConfiguration: Update a single rule configuration
- GET /rest/qc/violations — getViolations: Get all violations with optional filtering
- GET /rest/qc/violations/counts — getViolationCounts: Get count of unresolved violations by severity
- GET /rest/qc/violations/{id} — getViolation: Get a specific violation by ID
- POST /rest/qc/violations/{id}/acknowledge — acknowledgeViolation: Acknowledge a warning violation (marks as seen but not fully resolved)
- POST /rest/qc/violations/{id}/resolve — resolveViolation: Resolve a violation

## reference-lab-results
- GET /rest/reference-lab-results/metrics — metrics: Metrics
- GET /rest/reference-lab-results/referrals — listReferrals: List referrals
- PUT /rest/reference-lab-results/referrals/{referralId}/accept — acceptReferral: Accept referral
- PUT /rest/reference-lab-results/referrals/{referralId}/mark-lost — markReferralAsLost: Mark referral as lost
- POST /rest/reference-lab-results/referrals/{referralId}/notify — notifyReferenceLab: Notify reference lab
- PUT /rest/reference-lab-results/referrals/{referralId}/reject — rejectReferral: Reject referral

## referrals
- POST /rest/referrals/{referralId}/dispatch-subcontract — dispatchReferral: Dispatch referral

## reflexrule
- POST /rest/reflexrule — postReflexrule: Save reflex rule

## reflexrule-options
- GET /rest/reflexrule-options — getReflexRuleOptions: Get reflex rule options

## reflexrules
- GET /rest/reflexrules — getReflexrules: Get reflex rules

## reindex
- GET /rest/reindex — reindex: Reindex

## reportnonconformingevent
- GET /rest/reportnonconformingevent — getReportNonConformingEvent: Get report non conforming event
- POST /rest/reportnonconformingevent — postReportnonconformingevent: Post report non conforming event
- POST /rest/reportnonconformingevent/with-attachments — postReportNonConformingEventWithAttachments: Post report non conforming event with attachments

## reports
- GET /rest/reports — healthCheck: Health check endpoint to verify the reports namespace is available
- GET /rest/reports/categories — getReportCategories: Get available report categories for filtering and discovery
- GET /rest/reports/definitions — getDefinitions: Get all report definitions
- GET /rest/reports/definitions/active — getActiveDefinitions: Get all active report definitions
- GET /rest/reports/definitions/category/{category} — getDefinitionsByCategory: Get report definitions by category
- GET /rest/reports/definitions/{id} — getDefinition: Get a specific report definition by ID
- GET /rest/reports/formats — getAvailableFormats: Execute a report with optional parameters and return data in requested format
- GET /rest/reports/patient-results — getReportsPatientresults: Get patient results
- GET /rest/reports/tat/detail — getDetail: Get detail
- GET /rest/reports/tat/export — export: Export
- GET /rest/reports/tat/summary — getReportsTatSummary: Get summary
- GET /rest/reports/tat/trend — getReportsTatTrend: Get trend
- GET /rest/reports/vector-surveillance/indices — getIndices: Get indices
- GET /rest/reports/vector-surveillance/manual-entry — getManualEntryView: Get manual entry view
- POST /rest/reports/vector-surveillance/manual-entry/submit — submit: Submit
- GET /rest/reports/vector-surveillance/sites — getSites: Get sites
- GET /rest/reports/version — getVersion: Get report API version and capabilities

## requestor
- GET /rest/requestor/search — searchRequestors: Search requestors

## result-tree
- GET /rest/result-tree — getResultTreeArray: Get result tree array

## results-entry
- GET /rest/results-entry/analysis/{analysisId}/history — getAnalysisHistory: This analysis's own event timeline, newest first, paginated 25/50/100
- POST /rest/results-entry/analysis/{analysisId}/result — saveSingleAnalysisResult: Per-analysis result save (FR-O1/FR-O2)
- GET /rest/results-entry/lab-units — getUserLabUnits: Lab Units the user may enter results for, each carrying its domain so the page can derive currentDomain (FR-M1)
- POST /rest/results-entry/presence — presenceHeartbeat: Presence heartbeat
- GET /rest/results-entry/test/{testId}/interpretations — getTestInterpretations: The interpretation rule buckets configured on a test's components (Test Catalog Editor, OGC-949 M7), readable by the Results role
- GET /rest/results-entry/test/{testId}/reagents — getTestReagentLinks: Get test reagent links

## sample
- GET /rest/sample/all-by-accession/{accessionNumber} — getSampleByAccessionNumber: Get sample by accession number
- GET /rest/sample/unassigned-by-accession/{accessionNumber} — getUnassignedSampleByAccessionNumber: Get unassigned sample by accession number

## sample-acceptance-checklist
- GET /rest/sample-acceptance-checklist/admin — getAdminView: Get admin view
- PUT /rest/sample-acceptance-checklist/admin/enforcement/{domain} — setEnforcement: Set the per-domain enforcement mode
- POST /rest/sample-acceptance-checklist/admin/items — createItem: Create a checklist item
- POST /rest/sample-acceptance-checklist/admin/items/reorder — reorderItems: Persist item order
- PUT /rest/sample-acceptance-checklist/admin/items/{id} — updateItem: Rename / activate-deactivate an item
- GET /rest/sample-acceptance-checklist/config — getConfig: Resolved checklist config
- GET /rest/sample-acceptance-checklist/enforcement — getEnforcement: Per-domain enforcement modes (MANDATORY / OPTIONAL / OFF)
- GET /rest/sample-acceptance-checklist/order/{sampleId}/items — getForOrder: Get for order
- POST /rest/sample-acceptance-checklist/pool/{vectorPoolId} — recordForPool: Accept/record an assessment for an entire vector pool — the pool is the unit of acceptance for vector
- POST /rest/sample-acceptance-checklist/pool/{vectorPoolId}/reject — rejectPool: Reject an entire vector pool — cascade a plain reject (no replacement order, unlike #resample) to every live member sample_item
- GET /rest/sample-acceptance-checklist/sample-item/{sampleItemId} — getForSampleItem: Acceptance evaluation for a specimen (resolved checklist + latest decision + blocked + resample links)
- POST /rest/sample-acceptance-checklist/sample-item/{sampleItemId} — postSampleacceptancechecklistSampleitemBySampleItemId: Record an acceptance assessment for a specimen (append-only)
- GET /rest/sample-acceptance-checklist/sample-item/{sampleItemId}/nce-prefill — ncePrefill: Suggested NCE reason pre-filled from the specimen's latest failed items
- POST /rest/sample-acceptance-checklist/sample-item/{sampleItemId}/reject — rejectSampleItem: Plainly reject a single (non-pooled vector) specimen — no replacement order
- POST /rest/sample-acceptance-checklist/sample-item/{sampleItemId}/resample — resample: Resample
- GET /rest/sample-acceptance-checklist/sample/{sampleId}/gate — gate: FR-08 server-side enforcement gate for a whole order

## sample-item-status-types
- GET /rest/sample-item-status-types — getSampleItemStatusTypes: Get sample item status types

## sample-management
- POST /rest/sample-management/add-tests — addTestsToSamples: Add tests to one or more sample items
- POST /rest/sample-management/aliquot — createAliquot: Create an aliquot from a parent sample item
- POST /rest/sample-management/cancel-test — cancelTest: Cancel/remove a test from a sample item
- GET /rest/sample-management/search — searchSamplesByAccessionNumber: Search for sample items by accession number

## sample-status-types
- GET /rest/sample-status-types — getSampleStatusTypes: List sample status types

## sample-type-requests
- GET /rest/sample-type-requests/sample/{sampleId} — getRequestsBySample: Get all sample type requests for a sample
- GET /rest/sample-type-requests/sample/{sampleId}/pending — getPendingRequests: Get pending (not yet collected) requests for a sample
- PUT /rest/sample-type-requests/{requestId}/cancel — cancelRequest: Cancel a pending request
- PUT /rest/sample-type-requests/{requestId}/fulfill — fulfillRequest: Fulfill a request by linking it to a collected sample_item (Step 2: Collect Sample)

## sample-type-tests
- GET /rest/sample-type-tests — getSampletypetests: Process request

## sample-types
- GET /rest/sample-types — getSampletypes: Get all sample types
- GET /rest/sample-types/{sampleTypeId} — getSampleType: Get sample type
- PUT /rest/sample-types/{sampleTypeId} — updateSampleType: Update sample type
- GET /rest/sample-types/{sampleTypeId}/associable-tests — getAssociableTests: Tests NOT yet linked to this sample type, for the Associated Tests autocomplete
- PUT /rest/sample-types/{sampleTypeId}/display-order — putSampletypesBySampleTypeIdDisplayorder: Update display order
- GET /rest/sample-types/{sampleTypeId}/localization — getSampletypesBySampleTypeIdLocalization: Get localization refs
- GET /rest/sample-types/{sampleTypeId}/terminology — getSampletypesBySampleTypeIdTerminology: Get terminology
- PUT /rest/sample-types/{sampleTypeId}/terminology — putSampletypesBySampleTypeIdTerminology: Save terminology
- PUT /rest/sample-types/{sampleTypeId}/tests/{testId} — addTestToSampleType: Link an existing test to this sample type (idempotent)

## server-time
- GET /rest/server-time — getServerTime: Get server time

## session
- GET /session — getSesssionDetails: Get sesssion details

## setUserLoginLabUnit
- POST /rest/setUserLoginLabUnit/{labUnitId} — setUserLoginLabUnit: Set user login lab unit

## shipping-box
- GET /rest/shipping-box — getAllBoxes: Get all active shipping boxes
- POST /rest/shipping-box — postShippingbox: Create a new shipping box
- GET /rest/shipping-box/box-label-prefix — getBoxLabelPrefix: Get the configured box label prefix
- PUT /rest/shipping-box/box-label-prefix — updateBoxLabelPrefix: Update the box label prefix
- GET /rest/shipping-box/by-box-id/{boxId} — getBoxByBoxId: Get shipping box by box ID (not database ID)
- GET /rest/shipping-box/by-facility/{facilityId} — getBoxesByFacility: Get shipping boxes by destination facility
- GET /rest/shipping-box/by-state/{state} — getBoxesByState: Get shipping boxes by state
- GET /rest/shipping-box/fhir-mapping-config — getFhirMappingConfig: Get all FHIR mapping configuration values
- PUT /rest/shipping-box/fhir-mapping-config — setFhirMappingConfig: Update FHIR mapping configuration values
- GET /rest/shipping-box/generate-box-number — generateBoxNumber: Generate a unique box number
- POST /rest/shipping-box/import-from-fhir — importShipmentsFromFhir: Import shipments from remote FHIR servers
- GET /rest/shipping-box/incoming — getIncomingBoxes: Get incoming (FHIR-imported) shipping boxes for the reception workflow
- GET /rest/shipping-box/site-organization-uuid — getSiteOrganizationUuid: Get the FHIR UUID and org ID of the Organization representing this site
- PUT /rest/shipping-box/site-organization-uuid — setSiteOrganizationUuid: Set the site organization by its database ID
- GET /rest/shipping-box/statistics — getShippingboxStatistics: Get dashboard statistics
- GET /rest/shipping-box/{id} — getShippingboxById: Get shipping box by ID
- PUT /rest/shipping-box/{id} — putShippingboxById: Update an existing shipping box
- PUT /rest/shipping-box/{id}/archive — archiveBox: Delete/Archive a box
- GET /rest/shipping-box/{id}/label/pdf — downloadBoxLabel: Download box label PDF
- GET /rest/shipping-box/{id}/manifest-data — getManifestData: Get manifest data as JSON for frontend PDF generation
- GET /rest/shipping-box/{id}/manifest/pdf — downloadBoxManifest: Download box manifest PDF
- PUT /rest/shipping-box/{id}/state — changeBoxState: Change box state

## site-branding
- GET /rest/site-branding — getBranding: GET /rest/site-branding - Get current branding configuration Returns default values if no custom branding is configured
- PUT /rest/site-branding — updateBranding: PUT /rest/site-branding - Update branding configuration
- GET /rest/site-branding/logo/{type} — getLogo: GET /rest/site-branding/logo/{type} - Serve logo file Task Reference: T034
- POST /rest/site-branding/logo/{type} — uploadLogo: POST /rest/site-branding/logo/{type} - Upload logo file Task Reference: T031
- DELETE /rest/site-branding/logo/{type} — removeLogo: DELETE /rest/site-branding/logo/{type} - Remove logo file Task Reference: T062
- POST /rest/site-branding/reset — resetBranding: POST /rest/site-branding/reset - Reset all branding to defaults Task Reference: T067

## siteSettings
- GET /api/siteSettings/barcode — getSettings: Get settings
- POST /api/siteSettings/barcode — saveSettings: Save settings

## storage
- POST /rest/storage/barcode/validate — validateBarcode: Validate a storage location barcode POST /rest/storage/barcode/validate
- GET /rest/storage/boxes — getBoxes: Get boxes
- POST /rest/storage/boxes — postStorageBoxes: Create box
- GET /rest/storage/boxes/{id} — getStorageBoxesById: Get box by id
- PUT /rest/storage/boxes/{id} — putStorageBoxesById: Update box
- DELETE /rest/storage/boxes/{id} — deleteBox: Delete box
- GET /rest/storage/boxes/{id}/can-delete — canDeleteBox: Check if a box can be deleted (pre-flight check for frontend)
- GET /rest/storage/dashboard/location-counts — getLocationCounts: Get location counts by type for active locations only (FR-057, FR-057a)
- GET /rest/storage/devices — getDevices: Get devices with optional filters (FR-065: Devices tab - filter by type, room, and status)
- POST /rest/storage/devices — postStorageDevices: Create device
- GET /rest/storage/devices/search — searchDevices: Search devices by name, code, and type
- GET /rest/storage/devices/types — getDeviceTypes: Get device types
- GET /rest/storage/devices/{id} — getDeviceById: Get device by id
- PUT /rest/storage/devices/{id} — putStorageDevicesById: Update device
- DELETE /rest/storage/devices/{id} — deleteStorageDevicesById: Delete device
- GET /rest/storage/devices/{id}/can-delete — canDeleteDevice: Check if a device can be deleted (pre-flight check for frontend)
- GET /rest/storage/devices/{id}/can-move — canMoveDevice: Check if a device can be moved to a new parent room, and if samples exist downstream
- GET /rest/storage/devices/{id}/cascade-delete-summary — getDeviceCascadeDeleteSummary: Get cascade delete summary for a device (admin only)
- GET /rest/storage/locations/search — searchLocations: Search locations
- GET /rest/storage/racks — getRacks: Get racks with optional filters (FR-065: Racks tab - filter by room, shelf, device, and status) Returns racks with roomId column (FR-065a)
- POST /rest/storage/racks — createRack: Create rack
- GET /rest/storage/racks/search — searchRacks: Search racks by label (name)
- GET /rest/storage/racks/{id} — getRackById: Get rack by id
- PUT /rest/storage/racks/{id} — updateRack: Update rack
- DELETE /rest/storage/racks/{id} — deleteRack: Delete rack
- GET /rest/storage/racks/{id}/can-delete — canDeleteRack: Check if a rack can be deleted (pre-flight check for frontend)
- GET /rest/storage/racks/{id}/can-move — canMoveRack: Check if a rack can be moved to a new parent shelf, and if samples exist downstream
- GET /rest/storage/racks/{id}/cascade-delete-summary — getRackCascadeDeleteSummary: Get cascade delete summary for a rack (admin only)
- GET /rest/storage/rooms — getRooms: Get rooms with optional status filter (FR-065: Rooms tab - filter by status)
- POST /rest/storage/rooms — createRoom: Create room
- GET /rest/storage/rooms/search — searchRooms: Search rooms by name and code
- GET /rest/storage/rooms/{id} — getRoomById: Get room by id
- PUT /rest/storage/rooms/{id} — updateRoom: Update room
- DELETE /rest/storage/rooms/{id} — deleteRoom: Delete room
- GET /rest/storage/rooms/{id}/can-delete — canDeleteRoom: Check if a room can be deleted (pre-flight check for frontend)
- GET /rest/storage/rooms/{id}/cascade-delete-summary — getRoomCascadeDeleteSummary: Get cascade delete summary for a room (admin only)
- GET /rest/storage/sample-items — getSampleItems: Get sample items
- POST /rest/storage/sample-items/assign — assignSampleItem: Assign sample item
- POST /rest/storage/sample-items/dispose — disposeSampleItem: Dispose sample item
- POST /rest/storage/sample-items/move — moveSampleItem: Move SampleItem to new storage position POST /rest/storage/sample-items/move
- POST /rest/storage/sample-items/record-usage — recordSampleUsage: Record usage against a SampleItem's remaining quantity
- GET /rest/storage/sample-items/search — searchSampleItems: Search sample items by sample item ID, external ID, parent sample accession number, and assigned location (full hierarchical path)
- GET /rest/storage/sample-items/{sampleItemId} — getSampleItemLocation: Get storage location for a specific SampleItem by ID GET /rest/storage/sample-items/{sampleItemId}
- PATCH /rest/storage/sample-items/{sampleItemId} — updateAssignmentMetadata: Update position and/or notes for existing assignment without changing location PATCH /rest/storage/sample-items/{sampleItemId}
- GET /rest/storage/sample-items/{sampleItemId}/movements — getSampleItemMovements: List all movement-audit rows for a SampleItem in chronological order
- GET /rest/storage/samples/search — getStorageSamplesSearch: SampleItems, not Samples
- GET /rest/storage/shelves — getShelves: Get shelves with optional filters (FR-065: Shelves tab - filter by device, room, and status)
- POST /rest/storage/shelves — createShelf: Create shelf
- GET /rest/storage/shelves/search — searchShelves: Search shelves by label (name)
- GET /rest/storage/shelves/{id} — getShelfById: Get shelf by id
- PUT /rest/storage/shelves/{id} — updateShelf: Update shelf
- DELETE /rest/storage/shelves/{id} — deleteShelf: Delete shelf
- GET /rest/storage/shelves/{id}/can-delete — canDeleteShelf: Check if a shelf can be deleted (pre-flight check for frontend)
- GET /rest/storage/shelves/{id}/can-move — canMoveShelf: Check if a shelf can be moved to a new parent device, and if samples exist downstream
- GET /rest/storage/shelves/{id}/cascade-delete-summary — getShelfCascadeDeleteSummary: Get cascade delete summary for a shelf (admin only)
- GET /rest/storage/{type}/{id}/print-history — getPrintHistory: Get print history for a location GET /rest/storage/{type}/{id}/print-history
- POST /rest/storage/{type}/{id}/print-label — printLabel: Generate and return PDF label POST /rest/storage/{type}/{id}/print-label Validates code exists before printing, returns error if missing

## subjectNumberValidationProvider
- GET /rest/subjectNumberValidationProvider — validateSubjectNumberAndNationalId: Validate subject number and national id

## supportedlocales
- GET /rest/supportedlocales — getAllLocales: Get all supported locales
- POST /rest/supportedlocales — createLocale: Create a new supported locale
- GET /rest/supportedlocales/active — getActiveLocales: Get only active locales
- GET /rest/supportedlocales/fallback — getFallbackLocale: Get the fallback locale
- GET /rest/supportedlocales/{id} — getLocale: Get a specific locale by ID
- PUT /rest/supportedlocales/{id} — updateLocale: Update an existing locale
- DELETE /rest/supportedlocales/{id} — deleteLocale: Delete a locale
- POST /rest/supportedlocales/{id}/setFallback — setFallback: Set a locale as the fallback

## systemAuditEvents
- GET /rest/systemAuditEvents — getSystemAuditEvents: Get system audit events
- GET /rest/systemAuditEvents/entityTypes — getEntityTypes: Get entity types
- GET /rest/systemAuditEvents/export — getSystemAuditEventsExport: Export csv
- GET /rest/systemAuditEvents/exportPdf — getSystemAuditEventsExportPdf: Export pdf

## systemroles
- GET /rest/systemroles — getRoles: Get roles

## systemroles-testsections
- GET /rest/systemroles-testsections — getRolesWithTestSections: Get roles with test sections

## systemusers
- GET /rest/systemusers — getSystemUsers: Get system users

## test
- GET /rest/test/{testId}/methods — getLinkedMethods: Get linked methods
- POST /rest/test/{testId}/methods — linkMethod: Link method
- POST /rest/test/{testId}/methods/copyFrom/{sourceTestId} — copyFromTest: Copy from test
- POST /rest/test/{testId}/methods/inline-create — inlineCreateAndLink: Inline create and link
- PATCH /rest/test/{testId}/methods/{id} — updateLink: Update link
- DELETE /rest/test/{testId}/methods/{id} — removeLink: Remove link

## test-calculation
- POST /rest/test-calculation — postTestcalculation: Save reflex rule

## test-calculations
- GET /rest/test-calculations — getTestcalculations: Get reflex rules

## test-catalog
- GET /rest/test-catalog/dictionary — searchDictionaryOptions: Typeahead for select-list option values: active dictionary entries whose name starts with search, capped for responsiveness
- PUT /rest/test-catalog/group/ranges — saveGroupRanges: Save group ranges
- PUT /rest/test-catalog/group/storage — saveGroupStorage: Save group storage
- GET /rest/test-catalog/group/summary — groupSummary: Group summary
- GET /rest/test-catalog/lab-units — listLabUnits: List lab units
- GET /rest/test-catalog/panels — listPanels: List panels
- POST /rest/test-catalog/panels — createPanel: Create panel
- GET /rest/test-catalog/panels/{panelId} — getPanel: Get panel
- PUT /rest/test-catalog/panels/{panelId}/basic-info — savePanelBasicInfo: Save panel basic info
- GET /rest/test-catalog/panels/{panelId}/localization — getPanelLocalizationRefs: The localization records behind a panel's name, for the editor's Localization section
- GET /rest/test-catalog/panels/{panelId}/terminology — getPanelTerminology: Get panel terminology
- PUT /rest/test-catalog/panels/{panelId}/terminology — savePanelTerminology: Save panel terminology
- GET /rest/test-catalog/panels/{panelId}/test-order — getPanelTestOrder: Get panel test order
- PUT /rest/test-catalog/panels/{panelId}/tests — savePanelTests: Save panel tests
- GET /rest/test-catalog/sample-types — listSampleTypes: List sample types
- GET /rest/test-catalog/sample-types/{sampleTypeId}/test-order — getTestOrder: Get test order
- PUT /rest/test-catalog/sample-types/{sampleTypeId}/test-order — saveTestOrder: Save test order
- GET /rest/test-catalog/tests — listTests: List tests
- POST /rest/test-catalog/tests — createTest: Create test
- GET /rest/test-catalog/tests/{testId} — getEditorEnvelope: Get editor envelope
- POST /rest/test-catalog/tests/{testId}/activate — activateTest: Activates a test, gated on reference-range coverage
- GET /rest/test-catalog/tests/{testId}/analyzers — getAnalyzers: Get analyzers
- GET /rest/test-catalog/tests/{testId}/basic-info — getBasicInfo: Get basic info
- PUT /rest/test-catalog/tests/{testId}/basic-info — saveBasicInfo: Save basic info
- GET /rest/test-catalog/tests/{testId}/completeness — getCompleteness: The completeness checklist for a test, so the editor can show what still blocks activation before the user even tries
- GET /rest/test-catalog/tests/{testId}/localization — getTestcatalogTestsByTestIdLocalization: Get localization refs
- GET /rest/test-catalog/tests/{testId}/loinc-integrity — getLoincIntegrity: Get loinc integrity
- GET /rest/test-catalog/tests/{testId}/panels — getTestPanels: Get test panels
- PUT /rest/test-catalog/tests/{testId}/panels — saveTestPanels: Save test panels
- GET /rest/test-catalog/tests/{testId}/ranges — getRanges: Get ranges
- PUT /rest/test-catalog/tests/{testId}/ranges — saveRanges: Save ranges
- GET /rest/test-catalog/tests/{testId}/sample-results — getSampleResults: Get sample results
- PUT /rest/test-catalog/tests/{testId}/sample-results — saveSampleResults: Save sample results
- POST /rest/test-catalog/tests/{testId}/sample-results/copy-from/{sourceId} — copySampleResults: Copy sample results
- GET /rest/test-catalog/tests/{testId}/siblings — siblings: Active tests sharing this test's name stem (the analyte's specimen siblings) — the suggested set for "Edit related tests together" (FR-7)
- GET /rest/test-catalog/tests/{testId}/storage — getStorage: Get storage
- PUT /rest/test-catalog/tests/{testId}/storage — saveStorage: Save storage
- GET /rest/test-catalog/tests/{testId}/terminology — getTestcatalogTestsByTestIdTerminology: Get terminology
- PUT /rest/test-catalog/tests/{testId}/terminology — putTestcatalogTestsByTestIdTerminology: Save terminology
- GET /rest/test-catalog/{testId}/alerts — getTestcatalogByTestIdAlerts: List
- POST /rest/test-catalog/{testId}/alerts — postTestcatalogByTestIdAlerts: Create
- GET /rest/test-catalog/{testId}/alerts/components — components: The components a rule on this test may name, so the editor can offer them
- GET /rest/test-catalog/{testId}/alerts/roles — roles: Selectable roles for the "notify role" recipient (id + human description)
- GET /rest/test-catalog/{testId}/alerts/sample-types — sampleTypes: The specimens this test runs on, for the rule's specimen scope
- PUT /rest/test-catalog/{testId}/alerts/{ruleId} — putTestcatalogByTestIdAlertsByRuleId: Update
- DELETE /rest/test-catalog/{testId}/alerts/{ruleId} — deleteTestcatalogByTestIdAlertsByRuleId: Delete
- GET /rest/test-catalog/{testId}/reagents — getTestcatalogByTestIdReagents: List
- POST /rest/test-catalog/{testId}/reagents — link: Link
- PUT /rest/test-catalog/{testId}/reagents/{reagentId} — putTestcatalogByTestIdReagentsByReagentId: Update
- DELETE /rest/test-catalog/{testId}/reagents/{reagentId} — unlink: Unlink
- GET /rest/test-catalog/{testId}/reflex-calc — getTestcatalogByTestIdReflexcalc: Get
- GET /rest/test-catalog/{testId}/storage/history — getTestcatalogByTestIdStorageHistory: Get history

## test-display-beans
- GET /rest/test-display-beans — getTestBeansBySample: Get test beans by sample

## test-display-beans-map
- GET /rest/test-display-beans-map — getTestBeansMap: Get test beans map

## test-list
- GET /rest/test-list — getTestList: List tests available to the user

## test-result-tree
- GET /rest/test-result-tree — getTestResultTree: Get test result tree

## test-sample-types
- GET /rest/test-sample-types — getTestSampleTypes: Get test sample types

## tests
- GET /rest/tests/{testId}/compliance-thresholds — getTestThresholds: Get all compliance thresholds for a specific test
- POST /rest/tests/{testId}/compliance-thresholds — createTestThreshold: Create a new compliance threshold for a test
- GET /rest/tests/{testId}/compliance-thresholds/standard/{standardId} — getTestThresholdsByStandard: Get compliance thresholds for a test by specific standard
- GET /rest/tests/{testId}/compliance-thresholds/{thresholdId} — getTestThreshold: Get a specific compliance threshold by ID
- PUT /rest/tests/{testId}/compliance-thresholds/{thresholdId} — updateTestThreshold: Update an existing compliance threshold
- DELETE /rest/tests/{testId}/compliance-thresholds/{thresholdId} — deleteTestThreshold: Remove/archive a compliance threshold

## tests-by-sample
- GET /rest/tests-by-sample — getTestsBySample: Get tests by sample

## trendsprojects
- GET /rest/trendsprojects — getTempProjects: Get temp projects

## unassigned-sample
- GET /rest/unassigned-sample — getAllUnassignedSamples: Get all unassigned referral samples for dashboard Returns samples that are not yet assigned to a box and not lost/canceled
- GET /rest/unassigned-sample/by-facility/{facilityId} — getUnassignedSamplesByFacility: Get unassigned samples by destination facility
- GET /rest/unassigned-sample/count-by-facility/{facilityId} — countUnassignedSamplesByFacility: Count unassigned samples by facility
- GET /rest/unassigned-sample/items — getAllUnassignedSampleItems: Get all unassigned sample items grouped by SampleItem
- GET /rest/unassigned-sample/items/search — searchUnassignedSampleItems: Search unassigned sample items by accession number
- PUT /rest/unassigned-sample/{referralId}/assign-to-box — assignSampleToBox: Assign a referral sample to a shipment box
- PUT /rest/unassigned-sample/{referralId}/cancel — cancelReferral: Cancel a referral
- PUT /rest/unassigned-sample/{referralId}/mark-lost — markSampleAsLost: Mark a referral sample as lost

## uom
- GET /rest/uom — getUnitOfMeasuresByType: Get unit of measures by type
- POST /rest/uom — createUnitOfMeasure: Create a unit of measure inline (FR-29 / OGC-963)

## user-programs
- GET /rest/user-programs — getUserSPrograms: Get user s programs

## user-sample-types
- GET /rest/user-sample-types — getUserSampleTests: Sample types offerable in clinical order entry: those explicitly in the CLINICAL domain plus those with no domain at all

## user-test-sections
- GET /rest/user-test-sections/{roleName} — createUserTestSectionsList: Create user test sections list

## users
- GET /rest/users — getUsers2: Get users with role
- GET /rest/users/{roleName} — getUsersByRoleName: Get users with role

## vector
- POST /rest/vector/deconvolution/initiate — initiate: Initiate
- GET /rest/vector/deconvolution/pool/{poolId} — getDeconvolution: Get deconvolution
- GET /rest/vector/deconvolution/pool/{poolId}/available-panel-tests — getAvailablePanelTests: Returns all panels for the pool's sample type with tests not yet on the pool
- PUT /rest/vector/deconvolution/pool/{poolId}/complete — forceComplete: Force complete
- POST /rest/vector/deconvolution/pool/{poolId}/confirm-all — confirmResultForAllMembers: Supervisor override — manually mark a deconvolution COMPLETE
- POST /rest/vector/deconvolution/pool/{poolId}/confirm-result/{analysisId} — confirmResultForAllMembersPerAnalysis: Confirm result for all members per analysis
- GET /rest/vector/deconvolution/preview/{vectorPoolId} — previewReflexes: Reflex preview — read-only
- GET /rest/vector/deconvolution/worklist — getVectorDeconvolutionWorklist: Get worklist
- GET /rest/vector/dictionary/env-collection-methods — getEnvCollectionMethods: Get env collection methods
- GET /rest/vector/dictionary/env-weather — getEnvWeather: Get env weather
- GET /rest/vector/dictionary/environmental-zones — getEnvironmentalZones: Get environmental zones
- GET /rest/vector/dictionary/lifecycle-categories — getLifecycleCategories: Get lifecycle categories
- GET /rest/vector/dictionary/lifecycle-stages — getVectorDictionaryLifecyclestages: Get lifecycle stages
- GET /rest/vector/dictionary/pathogen-categories — getPathogenCategories: Get pathogen categories
- GET /rest/vector/dictionary/pathogens — getPathogens: Get pathogens
- GET /rest/vector/dictionary/sample-containers — getSampleContainers: Get sample containers
- GET /rest/vector/dictionary/sampling-site-types — getSamplingSiteTypes: Get sampling site types
- GET /rest/vector/identification/lots/{lotId}/result-candidates — getResultCandidates: Candidates for the molecular "Link to Pathogen Result" picker — all Results on this lot's SampleItems with a non-null value
- GET /rest/vector/identification/lots/{lotId}/specimens — getSpecimensForLot: Get specimens for lot
- POST /rest/vector/identification/specimens/bulk-identify — bulkIdentify: Bulk identify
- POST /rest/vector/identification/specimens/{specimenId}/bloodmeal-dismiss — dismissBloodmealSuggestion: Records an audit Note so reviewers can see the dismissal was deliberate
- POST /rest/vector/identification/specimens/{specimenId}/bloodmeal-panel — addBloodmealPanel: Idempotent and mosquito-only
- GET /rest/vector/identification/specimens/{specimenId}/identification — getIdentification: Get identification
- POST /rest/vector/identification/specimens/{specimenId}/identify — identify: SpecimenId path param must match request.sampleItemId
- GET /rest/vector/identification/worklist — getVectorIdentificationWorklist: Status: pending | notstarted | partialid | decon | complete (default pending)

## vector-sample-types
- GET /rest/vector-sample-types — getVectorSampleTypes: Get vector sample types

## viewNonConformEvents
- GET /rest/viewNonConformEvents — getNceNumber: Get nce number
- POST /rest/viewNonConformEvents — postViewNonConformEvents: Post report non conforming event
