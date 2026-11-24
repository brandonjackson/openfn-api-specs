# Open mSupply GraphQL API (msupply) v3.1.0

<!-- derived from openapi.json by `pnpm specs index msupply` — do not edit by hand -->

base: https://demo-open.msupply.org | auth: http/bearer (JWT) | 309 operations in 53 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## abbreviations
- POST /graphql#abbreviations — abbreviations: GraphQL query `abbreviations`

## assets
- POST /graphql#assetCatalogueItems — assetCatalogueItems: GraphQL query `assetCatalogueItems`
- POST /graphql#assetCatalogueItem — assetCatalogueItem: GraphQL query `assetCatalogueItem`
- POST /graphql#assetClasses — assetClasses: GraphQL query `assetClasses`
- POST /graphql#assetClass — assetClass: GraphQL query `assetClass`
- POST /graphql#assetCategories — assetCategories: GraphQL query `assetCategories`
- POST /graphql#assetCategory — assetCategory: GraphQL query `assetCategory`
- POST /graphql#assetTypes — assetTypes: GraphQL query `assetTypes`
- POST /graphql#assetType — assetType: GraphQL query `assetType`
- POST /graphql#assets — assets: Query omSupply "assets" entries
- POST /graphql#assetFromGs1Data — assetFromGs1Data: GraphQL query `assetFromGs1Data`
- POST /graphql#assetLogs — assetLogs: GraphQL query `assetLogs`
- POST /graphql#assetLogReasons — assetLogReasons: GraphQL query `assetLogReasons`
- POST /graphql#assetProperties — assetProperties: GraphQL query `assetProperties`
- POST /graphql#insertAsset — insertAsset: GraphQL mutation `insertAsset`
- POST /graphql#updateAsset — updateAsset: GraphQL mutation `updateAsset`
- POST /graphql#deleteAsset — deleteAsset: GraphQL mutation `deleteAsset`
- POST /graphql#insertAssetLog — insertAssetLog: GraphQL mutation `insertAssetLog`

## auth
- POST /graphql#authToken — authToken: Authenticate with username + password
- POST /graphql#logout — logout: GraphQL query `logout`
- POST /graphql#refreshToken — refreshToken: Slides the existing session's expiry forward (no token rotation)
- POST /graphql#me — me: GraphQL query `me`

## barcodes
- POST /graphql#barcodeByGtin — barcodeByGtin: GraphQL query `barcodeByGtin`
- POST /graphql#insertBarcode — insertBarcode: GraphQL mutation `insertBarcode`

## campaigns
- POST /graphql#campaigns — campaigns: GraphQL query `campaigns`

## central-server
- POST /graphql#isCentralServer — isCentralServer: GraphQL query `isCentralServer`
- POST /graphql#isCentralStandalone — isCentralStandalone: GraphQL query `isCentralStandalone`
- POST /graphql#centralPatientSearch — centralPatientSearch: GraphQL query `centralPatientSearch`
- POST /graphql#centralServer — centralServer: GraphQL query `centralServer`
- POST /graphql#centralServerMutation — centralServerMutation: GraphQL mutation `centralServer`

## clinicians
- POST /graphql#clinicians — clinicians: GraphQL query `clinicians`
- POST /graphql#insertClinician — insertClinician: GraphQL mutation `insertClinician`

## cold-chain
- POST /graphql#temperatureLogs — temperatureLogs: Query omSupply "temperature_log" entries
- POST /graphql#temperatureBreaches — temperatureBreaches: Query omSupply "temperature_breach" entries
- POST /graphql#temperatureNotifications — temperatureNotifications: Query omSupply temperature notification entries
- POST /graphql#sensors — sensors: Query omSupply "sensor" entries
- POST /graphql#getVvmStatusLogByStockLine — getVvmStatusLogByStockLine: GraphQL query `getVvmStatusLogByStockLine`
- POST /graphql#updateTemperatureBreach — updateTemperatureBreach: GraphQL mutation `updateTemperatureBreach`
- POST /graphql#updateSensor — updateSensor: GraphQL mutation `updateSensor`
- POST /graphql#insertVvmStatusLog — insertVvmStatusLog: GraphQL mutation `insertVvmStatusLog`
- POST /graphql#updateVvmStatusLog — updateVvmStatusLog: GraphQL mutation `updateVvmStatusLog`

## contacts
- POST /graphql#contacts — contacts: GraphQL query `contacts`
- POST /graphql#contactTraces — contactTraces: GraphQL query `contactTraces`
- POST /graphql#insertContactTrace — insertContactTrace: GraphQL mutation `insertContactTrace`
- POST /graphql#updateContactTrace — updateContactTrace: GraphQL mutation `updateContactTrace`
- POST /graphql#insertContactForm — insertContactForm: GraphQL mutation `insertContactForm`

## currencies
- POST /graphql#currencies — currencies: GraphQL query `currencies`

## custom-fields
- POST /graphql#customFields — customFields: Properties v2 definitions

## demographics
- POST /graphql#demographics — demographics: GraphQL query `demographics`
- POST /graphql#demographicIndicators — demographicIndicators: GraphQL query `demographicIndicators`
- POST /graphql#demographicProjections — demographicProjections: GraphQL query `demographicProjections`
- POST /graphql#demographicProjectionByBaseYear — demographicProjectionByBaseYear: GraphQL query `demographicProjectionByBaseYear`

## diagnoses
- POST /graphql#diagnosesActive — diagnosesActive: GraphQL query `diagnosesActive`

## documents
- POST /graphql#documents — documents: GraphQL query `documents`
- POST /graphql#document — document: GraphQL query `document`
- POST /graphql#documentHistory — documentHistory: GraphQL query `documentHistory`
- POST /graphql#documentRegistries — documentRegistries: GraphQL query `documentRegistries`
- POST /graphql#insertDocumentRegistry — insertDocumentRegistry: GraphQL mutation `insertDocumentRegistry`

## encounters
- POST /graphql#encounters — encounters: GraphQL query `encounters`
- POST /graphql#encounterFields — encounterFields: GraphQL query `encounterFields`
- POST /graphql#insertEncounter — insertEncounter: GraphQL mutation `insertEncounter`
- POST /graphql#updateEncounter — updateEncounter: GraphQL mutation `updateEncounter`

## forms
- POST /graphql#formSchemas — formSchemas: GraphQL query `formSchemas`
- POST /graphql#insertFormSchema — insertFormSchema: GraphQL mutation `insertFormSchema`

## graphql
- POST /graphql — graphqlRequest: Execute an arbitrary GraphQL query or mutation

## help-documents
- POST /graphql#helpDocuments — helpDocuments: GraphQL query `helpDocuments`

## inbound-shipments
- POST /graphql#inboundShipmentCounts — inboundShipmentCounts: GraphQL query `inboundShipmentCounts`
- POST /graphql#inboundShipmentExternalCounts — inboundShipmentExternalCounts: GraphQL query `inboundShipmentExternalCounts`
- POST /graphql#insertInboundShipment — insertInboundShipment: GraphQL mutation `insertInboundShipment`
- POST /graphql#insertInboundShipmentExternal — insertInboundShipmentExternal: GraphQL mutation `insertInboundShipmentExternal`
- POST /graphql#updateInboundShipment — updateInboundShipment: GraphQL mutation `updateInboundShipment`
- POST /graphql#updateInboundShipmentExternal — updateInboundShipmentExternal: GraphQL mutation `updateInboundShipmentExternal`
- POST /graphql#deleteInboundShipment — deleteInboundShipment: GraphQL mutation `deleteInboundShipment`
- POST /graphql#duplicateInboundShipment — duplicateInboundShipment: GraphQL mutation `duplicateInboundShipment`
- POST /graphql#deleteInboundShipmentExternal — deleteInboundShipmentExternal: GraphQL mutation `deleteInboundShipmentExternal`
- POST /graphql#insertInboundShipmentLine — insertInboundShipmentLine: GraphQL mutation `insertInboundShipmentLine`
- POST /graphql#insertInboundShipmentExternalLine — insertInboundShipmentExternalLine: GraphQL mutation `insertInboundShipmentExternalLine`
- POST /graphql#updateInboundShipmentLine — updateInboundShipmentLine: GraphQL mutation `updateInboundShipmentLine`
- POST /graphql#updateInboundShipmentExternalLine — updateInboundShipmentExternalLine: GraphQL mutation `updateInboundShipmentExternalLine`
- POST /graphql#deleteInboundShipmentLine — deleteInboundShipmentLine: GraphQL mutation `deleteInboundShipmentLine`
- POST /graphql#deleteInboundShipmentExternalLine — deleteInboundShipmentExternalLine: GraphQL mutation `deleteInboundShipmentExternalLine`
- POST /graphql#insertInboundShipmentServiceLine — insertInboundShipmentServiceLine: GraphQL mutation `insertInboundShipmentServiceLine`
- POST /graphql#insertInboundShipmentExternalServiceLine — insertInboundShipmentExternalServiceLine: GraphQL mutation `insertInboundShipmentExternalServiceLine`
- POST /graphql#updateInboundShipmentServiceLine — updateInboundShipmentServiceLine: GraphQL mutation `updateInboundShipmentServiceLine`
- POST /graphql#updateInboundShipmentExternalServiceLine — updateInboundShipmentExternalServiceLine: GraphQL mutation `updateInboundShipmentExternalServiceLine`
- POST /graphql#deleteInboundShipmentServiceLine — deleteInboundShipmentServiceLine: GraphQL mutation `deleteInboundShipmentServiceLine`
- POST /graphql#deleteInboundShipmentExternalServiceLine — deleteInboundShipmentExternalServiceLine: GraphQL mutation `deleteInboundShipmentExternalServiceLine`
- POST /graphql#batchInboundShipment — batchInboundShipment: GraphQL mutation `batchInboundShipment`
- POST /graphql#batchInboundShipmentExternal — batchInboundShipmentExternal: GraphQL mutation `batchInboundShipmentExternal`

## indicators
- POST /graphql#updateIndicatorValue — updateIndicatorValue: GraphQL mutation `updateIndicatorValue`

## insurance
- POST /graphql#insurancePolicies — insurancePolicies: GraphQL query `insurancePolicies`
- POST /graphql#insurancePolicy — insurancePolicy: GraphQL query `insurancePolicy`
- POST /graphql#insuranceProviders — insuranceProviders: GraphQL query `insuranceProviders`
- POST /graphql#insertInsurance — insertInsurance: GraphQL mutation `insertInsurance`
- POST /graphql#updateInsurance — updateInsurance: GraphQL mutation `updateInsurance`

## inventory-adjustments
- POST /graphql#inventoryAdjustmentReasons — inventoryAdjustmentReasons: GraphQL query `inventoryAdjustmentReasons` (deprecated)
- POST /graphql#createInventoryAdjustment — createInventoryAdjustment: GraphQL mutation `createInventoryAdjustment`

## invoices
- POST /graphql#invoice — invoice: GraphQL query `invoice`
- POST /graphql#invoiceByNumber — invoiceByNumber: GraphQL query `invoiceByNumber`
- POST /graphql#invoices — invoices: GraphQL query `invoices`
- POST /graphql#invoiceLines — invoiceLines: GraphQL query `invoiceLines`
- POST /graphql#invoiceCounts — invoiceCounts: GraphQL query `invoiceCounts` (deprecated)

## items
- POST /graphql#itemPrice — itemPrice: GraphQL query `itemPrice`
- POST /graphql#items — items: Query omSupply "item" entries
- POST /graphql#itemLedger — itemLedger: GraphQL query `itemLedger`
- POST /graphql#itemCounts — itemCounts: GraphQL query `itemCounts`
- POST /graphql#itemsByStockLineFilter — itemsByStockLineFilter: Query for items that have at least one stock_line matching `filter` in `store_id`, sorted/paginated by item attributes
- POST /graphql#itemVariantsConfigured — itemVariantsConfigured: GraphQL query `itemVariantsConfigured`

## ledger
- POST /graphql#ledger — ledger: GraphQL query `ledger`

## locations
- POST /graphql#locations — locations: Query omSupply "locations" entries
- POST /graphql#locationTypes — locationTypes: Query omSupply "location_type" entries
- POST /graphql#insertLocation — insertLocation: GraphQL mutation `insertLocation`
- POST /graphql#updateLocation — updateLocation: GraphQL mutation `updateLocation`
- POST /graphql#deleteLocation — deleteLocation: GraphQL mutation `deleteLocation`

## logs
- POST /graphql#activityLogs — activityLogs: GraphQL query `activityLogs`
- POST /graphql#logFileNames — logFileNames: GraphQL query `logFileNames`
- POST /graphql#logContents — logContents: GraphQL query `logContents`
- POST /graphql#logLevel — logLevel: GraphQL query `logLevel`
- POST /graphql#updateLogLevel — updateLogLevel: GraphQL mutation `updateLogLevel`

## master-lists
- POST /graphql#masterLists — masterLists: Query omSupply "master_lists" entries
- POST /graphql#masterListLines — masterListLines: GraphQL query `masterListLines`

## names
- POST /graphql#names — names: Query omSupply "name" entries
- POST /graphql#nameProperties — nameProperties: GraphQL query `nameProperties`
- POST /graphql#updateNameProperties — updateNameProperties: GraphQL mutation `updateNameProperties`

## outbound-shipments
- POST /graphql#outboundShipmentCounts — outboundShipmentCounts: GraphQL query `outboundShipmentCounts`
- POST /graphql#insertOutboundShipment — insertOutboundShipment: GraphQL mutation `insertOutboundShipment`
- POST /graphql#updateOutboundShipment — updateOutboundShipment: GraphQL mutation `updateOutboundShipment`
- POST /graphql#updateOutboundShipmentName — updateOutboundShipmentName: GraphQL mutation `updateOutboundShipmentName`
- POST /graphql#deleteOutboundShipment — deleteOutboundShipment: GraphQL mutation `deleteOutboundShipment`
- POST /graphql#duplicateOutboundShipment — duplicateOutboundShipment: GraphQL mutation `duplicateOutboundShipment`
- POST /graphql#insertOutboundShipmentLine — insertOutboundShipmentLine: GraphQL mutation `insertOutboundShipmentLine`
- POST /graphql#updateOutboundShipmentLine — updateOutboundShipmentLine: GraphQL mutation `updateOutboundShipmentLine`
- POST /graphql#deleteOutboundShipmentLine — deleteOutboundShipmentLine: GraphQL mutation `deleteOutboundShipmentLine`
- POST /graphql#insertOutboundShipmentServiceLine — insertOutboundShipmentServiceLine: GraphQL mutation `insertOutboundShipmentServiceLine`
- POST /graphql#updateOutboundShipmentServiceLine — updateOutboundShipmentServiceLine: GraphQL mutation `updateOutboundShipmentServiceLine`
- POST /graphql#deleteOutboundShipmentServiceLine — deleteOutboundShipmentServiceLine: GraphQL mutation `deleteOutboundShipmentServiceLine`
- POST /graphql#insertOutboundShipmentUnallocatedLine — insertOutboundShipmentUnallocatedLine: GraphQL mutation `insertOutboundShipmentUnallocatedLine`
- POST /graphql#updateOutboundShipmentUnallocatedLine — updateOutboundShipmentUnallocatedLine: GraphQL mutation `updateOutboundShipmentUnallocatedLine`
- POST /graphql#deleteOutboundShipmentUnallocatedLine — deleteOutboundShipmentUnallocatedLine: GraphQL mutation `deleteOutboundShipmentUnallocatedLine`
- POST /graphql#allocateOutboundShipmentUnallocatedLine — allocateOutboundShipmentUnallocatedLine: GraphQL mutation `allocateOutboundShipmentUnallocatedLine`
- POST /graphql#saveOutboundShipmentItemLines — saveOutboundShipmentItemLines: GraphQL mutation `saveOutboundShipmentItemLines`
- POST /graphql#batchOutboundShipment — batchOutboundShipment: GraphQL mutation `batchOutboundShipment`

## patients
- POST /graphql#patients — patients: GraphQL query `patients`
- POST /graphql#patient — patient: GraphQL query `patient`
- POST /graphql#patientSearch — patientSearch: GraphQL query `patientSearch`
- POST /graphql#insertPatient — insertPatient: Inserts a new patient (without document data)
- POST /graphql#updatePatient — updatePatient: Updates a new patient (without document data)
- POST /graphql#updatePatientCustomFields — updatePatientCustomFields: Update a patient's new-system custom property values (`custom_fields`)
- POST /graphql#linkPatientToStore — linkPatientToStore: Links a patient to a store and thus effectively to a site

## periods
- POST /graphql#periods — periods: GraphQL query `periods`
- POST /graphql#schedulesWithPeriodsByProgram — schedulesWithPeriodsByProgram: GraphQL query `schedulesWithPeriodsByProgram`

## plugins
- POST /graphql#frontendPluginMetadata — frontendPluginMetadata: GraphQL query `frontendPluginMetadata`
- POST /graphql#pluginData — pluginData: GraphQL query `pluginData`
- POST /graphql#pluginGraphqlQuery — pluginGraphqlQuery: GraphQL query `pluginGraphqlQuery`
- POST /graphql#insertPluginData — insertPluginData: GraphQL mutation `insertPluginData`
- POST /graphql#updatePluginData — updatePluginData: GraphQL mutation `updatePluginData`
- POST /graphql#deletePluginData — deletePluginData: GraphQL mutation `deletePluginData`

## preferences
- POST /graphql#preferences — preferences: Returns the relevant set of preferences based on context (e.g
- POST /graphql#preferenceDescriptions — preferenceDescriptions: The list of preferences and their current values (used for the admin/edit page)

## prescriptions
- POST /graphql#insertPrescription — insertPrescription: GraphQL mutation `insertPrescription`
- POST /graphql#updatePrescription — updatePrescription: GraphQL mutation `updatePrescription`
- POST /graphql#deletePrescription — deletePrescription: GraphQL mutation `deletePrescription`
- POST /graphql#savePrescriptionItemLines — savePrescriptionItemLines: GraphQL mutation `savePrescriptionItemLines`
- POST /graphql#insertPrescriptionLine — insertPrescriptionLine: GraphQL mutation `insertPrescriptionLine`
- POST /graphql#updatePrescriptionLine — updatePrescriptionLine: GraphQL mutation `updatePrescriptionLine`
- POST /graphql#deletePrescriptionLine — deletePrescriptionLine: GraphQL mutation `deletePrescriptionLine`
- POST /graphql#batchPrescription — batchPrescription: GraphQL mutation `batchPrescription`

## printers
- POST /graphql#labelPrinterSettings — labelPrinterSettings: GraphQL query `labelPrinterSettings`
- POST /graphql#printers — printers: GraphQL query `printers`
- POST /graphql#insertPrinter — insertPrinter: GraphQL mutation `insertPrinter`
- POST /graphql#updatePrinter — updatePrinter: GraphQL mutation `updatePrinter`
- POST /graphql#updateLabelPrinterSettings — updateLabelPrinterSettings: GraphQL mutation `updateLabelPrinterSettings`

## programs
- POST /graphql#programRequisitionSettingsByCustomer — programRequisitionSettingsByCustomer: GraphQL query `programRequisitionSettingsByCustomer`
- POST /graphql#programIndicators — programIndicators: GraphQL query `programIndicators`
- POST /graphql#programEnrolments — programEnrolments: GraphQL query `programEnrolments`
- POST /graphql#activeProgramEvents — activeProgramEvents: Returns active program events at a given date time
- POST /graphql#programEvents — programEvents: GraphQL query `programEvents`
- POST /graphql#programs — programs: GraphQL query `programs`
- POST /graphql#activeVvmStatuses — activeVvmStatuses: GraphQL query `activeVvmStatuses`
- POST /graphql#insertProgramRequestRequisition — insertProgramRequestRequisition: GraphQL mutation `insertProgramRequestRequisition`
- POST /graphql#insertProgramResponseRequisition — insertProgramResponseRequisition: GraphQL mutation `insertProgramResponseRequisition`
- POST /graphql#insertProgramPatient — insertProgramPatient: Inserts a new program patient, i.e
- POST /graphql#updateProgramPatient — updateProgramPatient: Updates a new program patient, i.e
- POST /graphql#insertProgramEnrolment — insertProgramEnrolment: Enrols a patient into a program by adding a program document to the patient's documents
- POST /graphql#updateProgramEnrolment — updateProgramEnrolment: Updates an existing program document belonging to a patient.
- POST /graphql#allocateProgramNumber — allocateProgramNumber: GraphQL mutation `allocateProgramNumber`

## purchase-orders
- POST /graphql#purchaseOrder — purchaseOrder: GraphQL query `purchaseOrder`
- POST /graphql#purchaseOrders — purchaseOrders: GraphQL query `purchaseOrders`
- POST /graphql#purchaseOrderLine — purchaseOrderLine: GraphQL query `purchaseOrderLine`
- POST /graphql#purchaseOrderLines — purchaseOrderLines: GraphQL query `purchaseOrderLines`
- POST /graphql#unitsOrderedInOtherPurchaseOrders — unitsOrderedInOtherPurchaseOrders: GraphQL query `unitsOrderedInOtherPurchaseOrders`
- POST /graphql#insertPurchaseOrder — insertPurchaseOrder: GraphQL mutation `insertPurchaseOrder`
- POST /graphql#updatePurchaseOrder — updatePurchaseOrder: GraphQL mutation `updatePurchaseOrder`
- POST /graphql#deletePurchaseOrder — deletePurchaseOrder: GraphQL mutation `deletePurchaseOrder`
- POST /graphql#insertPurchaseOrderLine — insertPurchaseOrderLine: GraphQL mutation `insertPurchaseOrderLine`
- POST /graphql#updatePurchaseOrderLine — updatePurchaseOrderLine: GraphQL mutation `updatePurchaseOrderLine`
- POST /graphql#deletePurchaseOrderLines — deletePurchaseOrderLines: GraphQL mutation `deletePurchaseOrderLines`

## reasons
- POST /graphql#returnReasons — returnReasons: GraphQL query `returnReasons` (deprecated)
- POST /graphql#reasonOptions — reasonOptions: GraphQL query `reasonOptions`

## repacks
- POST /graphql#repack — repack: GraphQL query `repack`
- POST /graphql#repacksByStockLine — repacksByStockLine: GraphQL query `repacksByStockLine`
- POST /graphql#insertRepack — insertRepack: GraphQL mutation `insertRepack`

## reports
- POST /graphql#report — report: GraphQL query `report`
- POST /graphql#reports — reports: Queries a list of available reports
- POST /graphql#allReportVersions — allReportVersions: Queries all reports and their respective versions
- POST /graphql#generateReport — generateReport: Creates a generated report
- POST /graphql#generateReportDefinition — generateReportDefinition: Can be used when developing reports, e.g
- POST /graphql#csvToExcel — csvToExcel: GraphQL query `csvToExcel`

## request
- POST /graphql#batchRequestRequisition — batchRequestRequisition: GraphQL mutation `batchRequestRequisition`
- POST /graphql#insertRequestRequisition — insertRequestRequisition: GraphQL mutation `insertRequestRequisition`
- POST /graphql#updateRequestRequisition — updateRequestRequisition: GraphQL mutation `updateRequestRequisition`
- POST /graphql#deleteRequestRequisition — deleteRequestRequisition: GraphQL mutation `deleteRequestRequisition`
- POST /graphql#insertRequestFromResponseRequisition — insertRequestFromResponseRequisition: GraphQL mutation `insertRequestFromResponseRequisition`
- POST /graphql#insertRequestRequisitionLine — insertRequestRequisitionLine: GraphQL mutation `insertRequestRequisitionLine`
- POST /graphql#updateRequestRequisitionLine — updateRequestRequisitionLine: GraphQL mutation `updateRequestRequisitionLine`
- POST /graphql#deleteRequestRequisitionLine — deleteRequestRequisitionLine: GraphQL mutation `deleteRequestRequisitionLine`

## requisitions
- POST /graphql#requisitionLineChart — requisitionLineChart: GraphQL query `requisitionLineChart`
- POST /graphql#responseRequisitionStats — responseRequisitionStats: GraphQL query `responseRequisitionStats`
- POST /graphql#requisitionCounts — requisitionCounts: GraphQL query `requisitionCounts`
- POST /graphql#requisition — requisition: GraphQL query `requisition`
- POST /graphql#requisitions — requisitions: GraphQL query `requisitions`
- POST /graphql#requisitionByNumber — requisitionByNumber: GraphQL query `requisitionByNumber`
- POST /graphql#batchResponseRequisition — batchResponseRequisition: GraphQL mutation `batchResponseRequisition`
- POST /graphql#useSuggestedQuantity — useSuggestedQuantity: Set requested for each line in request requisition to calculated
- POST /graphql#addFromMasterList — addFromMasterList: Add requisition lines from master item master list
- POST /graphql#responseAddFromMasterList — responseAddFromMasterList: GraphQL mutation `responseAddFromMasterList`
- POST /graphql#insertResponseRequisition — insertResponseRequisition: GraphQL mutation `insertResponseRequisition`
- POST /graphql#updateResponseRequisition — updateResponseRequisition: GraphQL mutation `updateResponseRequisition`
- POST /graphql#deleteResponseRequisition — deleteResponseRequisition: GraphQL mutation `deleteResponseRequisition`
- POST /graphql#supplyRequestedQuantity — supplyRequestedQuantity: Set supply quantity to requested quantity
- POST /graphql#createRequisitionShipment — createRequisitionShipment: Create shipment for response requisition Will create Outbound Shipment with placeholder lines for each requisition line
- POST /graphql#refreshAncillaryItems — refreshAncillaryItems: GraphQL mutation `refreshAncillaryItems`
- POST /graphql#insertResponseRequisitionLine — insertResponseRequisitionLine: GraphQL mutation `insertResponseRequisitionLine`
- POST /graphql#updateResponseRequisitionLine — updateResponseRequisitionLine: GraphQL mutation `updateResponseRequisitionLine`
- POST /graphql#deleteResponseRequisitionLine — deleteResponseRequisitionLine: GraphQL mutation `deleteResponseRequisitionLine`

## returns
- POST /graphql#generateSupplierReturnLines — generateSupplierReturnLines: Generates new supplier return lines in memory, based on either stock line ids, or an item id
- POST /graphql#generateCustomerReturnLines — generateCustomerReturnLines: Generates new customer_return lines in memory, based on supplier return line ids
- POST /graphql#supplierProgramRequisitionSettings — supplierProgramRequisitionSettings: GraphQL query `supplierProgramRequisitionSettings`
- POST /graphql#hasCustomerProgramRequisitionSettings — hasCustomerProgramRequisitionSettings: GraphQL query `hasCustomerProgramRequisitionSettings`
- POST /graphql#insertSupplierReturn — insertSupplierReturn: GraphQL mutation `insertSupplierReturn`
- POST /graphql#updateSupplierReturn — updateSupplierReturn: GraphQL mutation `updateSupplierReturn`
- POST /graphql#updateSupplierReturnOtherParty — updateSupplierReturnOtherParty: GraphQL mutation `updateSupplierReturnOtherParty`
- POST /graphql#updateSupplierReturnLines — updateSupplierReturnLines: GraphQL mutation `updateSupplierReturnLines`
- POST /graphql#deleteSupplierReturn — deleteSupplierReturn: GraphQL mutation `deleteSupplierReturn`
- POST /graphql#insertCustomerReturn — insertCustomerReturn: GraphQL mutation `insertCustomerReturn`
- POST /graphql#updateCustomerReturn — updateCustomerReturn: GraphQL mutation `updateCustomerReturn`
- POST /graphql#updateCustomerReturnLines — updateCustomerReturnLines: GraphQL mutation `updateCustomerReturnLines`
- POST /graphql#deleteCustomerReturn — deleteCustomerReturn: GraphQL mutation `deleteCustomerReturn`

## rnr-forms
- POST /graphql#rAndRForms — rAndRForms: GraphQL query `rAndRForms`
- POST /graphql#rAndRForm — rAndRForm: GraphQL query `rAndRForm`
- POST /graphql#insertRnrForm — insertRnrForm: GraphQL mutation `insertRnrForm`
- POST /graphql#updateRnrForm — updateRnrForm: GraphQL mutation `updateRnrForm`
- POST /graphql#finaliseRnrForm — finaliseRnrForm: GraphQL mutation `finaliseRnrForm`
- POST /graphql#deleteRnrForm — deleteRnrForm: GraphQL mutation `deleteRnrForm`

## server
- POST /graphql#apiVersion — apiVersion: GraphQL query `apiVersion`
- POST /graphql#serverVersion — serverVersion: The running server's version, from the repo-root package.json (e.g
- POST /graphql#featureFlags — featureFlags: GraphQL query `featureFlags`
- POST /graphql#initialisationStatus — initialisationStatus: Available without authorisation in operational and initialisation states
- POST /graphql#migrationStatus — migrationStatus: Available without authorisation in all states (Operational, Initialisation and MigratingDatabase)
- POST /graphql#displaySettings — displaySettings: GraphQL query `displaySettings`
- POST /graphql#databaseSettings — databaseSettings: GraphQL query `databaseSettings`
- POST /graphql#initialiseSite — initialiseSite: GraphQL mutation `initialiseSite`
- POST /graphql#initialiseAsCentralServer — initialiseAsCentralServer: GraphQL mutation `initialiseAsCentralServer`
- POST /graphql#updateDisplaySettings — updateDisplaySettings: GraphQL mutation `updateDisplaySettings`

## shipping-methods
- POST /graphql#shippingMethods — shippingMethods: GraphQL query `shippingMethods`

## stock
- POST /graphql#draftStockOutLines — draftStockOutLines: GraphQL query `draftStockOutLines`
- POST /graphql#stockCounts — stockCounts: GraphQL query `stockCounts`
- POST /graphql#stockLines — stockLines: Query for "stock_line" entries
- POST /graphql#historicalStockLines — historicalStockLines: Query for "historical_stock_line" entries
- POST /graphql#stockRelocation — stockRelocation: GraphQL query `stockRelocation`
- POST /graphql#stockRelocations — stockRelocations: GraphQL query `stockRelocations`
- POST /graphql#stockRelocationDraftLines — stockRelocationDraftLines: GraphQL query `stockRelocationDraftLines`
- POST /graphql#insertStockLine — insertStockLine: GraphQL mutation `insertStockLine`
- POST /graphql#updateStockLine — updateStockLine: GraphQL mutation `updateStockLine`
- POST /graphql#insertStockRelocation — insertStockRelocation: GraphQL mutation `insertStockRelocation`
- POST /graphql#updateStockRelocation — updateStockRelocation: GraphQL mutation `updateStockRelocation`
- POST /graphql#deleteStockRelocation — deleteStockRelocation: GraphQL mutation `deleteStockRelocation`
- POST /graphql#deleteStockRelocations — deleteStockRelocations: GraphQL mutation `deleteStockRelocations`
- POST /graphql#batchStockRelocationLine — batchStockRelocationLine: GraphQL mutation `batchStockRelocationLine`

## stocktakes
- POST /graphql#stocktake — stocktake: GraphQL query `stocktake`
- POST /graphql#stocktakeByNumber — stocktakeByNumber: GraphQL query `stocktakeByNumber`
- POST /graphql#stocktakes — stocktakes: GraphQL query `stocktakes`
- POST /graphql#stocktakeLines — stocktakeLines: GraphQL query `stocktakeLines`
- POST /graphql#insertStocktake — insertStocktake: GraphQL mutation `insertStocktake`
- POST /graphql#updateStocktake — updateStocktake: GraphQL mutation `updateStocktake`
- POST /graphql#deleteStocktake — deleteStocktake: GraphQL mutation `deleteStocktake`
- POST /graphql#insertStocktakeLine — insertStocktakeLine: GraphQL mutation `insertStocktakeLine`
- POST /graphql#updateStocktakeLine — updateStocktakeLine: GraphQL mutation `updateStocktakeLine`
- POST /graphql#deleteStocktakeLine — deleteStocktakeLine: GraphQL mutation `deleteStocktakeLine`
- POST /graphql#batchStocktake — batchStocktake: GraphQL mutation `batchStocktake`

## stores
- POST /graphql#store — store: GraphQL query `store`
- POST /graphql#stores — stores: GraphQL query `stores`
- POST /graphql#storePreferences — storePreferences: GraphQL query `storePreferences`

## sync
- POST /graphql#latestSyncStatus — latestSyncStatus: GraphQL query `latestSyncStatus`
- POST /graphql#numberOfRecordsInPushQueue — numberOfRecordsInPushQueue: GraphQL query `numberOfRecordsInPushQueue`
- POST /graphql#syncSettings — syncSettings: GraphQL query `syncSettings`
- POST /graphql#updateSyncSettings — updateSyncSettings: GraphQL mutation `updateSyncSettings`
- POST /graphql#manualSync — manualSync: GraphQL mutation `manualSync`
- POST /graphql#insertSyncMessage — insertSyncMessage: GraphQL mutation `insertSyncMessage`

## to
- POST /graphql#addToOutboundShipmentFromMasterList — addToOutboundShipmentFromMasterList: Add invoice lines from master item master list
- POST /graphql#addToInboundShipmentFromMasterList — addToInboundShipmentFromMasterList: GraphQL mutation `addToInboundShipmentFromMasterList`
- POST /graphql#addToPurchaseOrderFromMasterList — addToPurchaseOrderFromMasterList: GraphQL mutation `addToPurchaseOrderFromMasterList`

## vaccination
- POST /graphql#vaccination — vaccination: GraphQL query `vaccination`
- POST /graphql#vaccinationCard — vaccinationCard: GraphQL query `vaccinationCard`
- POST /graphql#vaccineCourses — vaccineCourses: GraphQL query `vaccineCourses`
- POST /graphql#vaccineCourse — vaccineCourse: GraphQL query `vaccineCourse`
- POST /graphql#vaccineCourseDose — vaccineCourseDose: GraphQL query `vaccineCourseDose`
- POST /graphql#insertVaccination — insertVaccination: GraphQL mutation `insertVaccination`
- POST /graphql#updateVaccination — updateVaccination: GraphQL mutation `updateVaccination`
