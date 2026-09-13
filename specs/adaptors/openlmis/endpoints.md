# OpenLMIS API (openlmis) v3

<!-- derived from openapi.json by `pnpm specs index openlmis` — do not edit by hand -->

base: https://demo.openlmis.org/api, {host}/api | auth: http/bearer, apiKey (query access_token) | 456 operations in 87 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Device
- GET /Device — getDevice: Get local resources (like inventory items) as FHIR Device instances.

## Location
- GET /Location — getLocation: Get local resources (like geographic zones, facilities) as FHIR Location instances.

## apiKeys
- GET /apiKeys — getApiKeys: Returns all API Keys.
- POST /apiKeys — createApiKeys: Create API Key.
- DELETE /apiKeys/{token} — deleteApiKeysByToken: Completely removes API Key. This action is not recoverable.

## availableRequisitionColumns
- GET /availableRequisitionColumns — getAvailableRequisitionColumns: Get page of Available Requisition Columns.

## bottomUpQuantifications
- GET /bottomUpQuantifications — getBottomUpQuantifications: Get all bottom-up quantifications that match the given parameters.
- GET /bottomUpQuantifications/{id} — getBottomUpQuantificationsById: Get chosen bottom-up quantification.
- PUT /bottomUpQuantifications/{id} — updateBottomUpQuantificationsById: Update existing bottom-up quantification. Do not change invariants – id, createdDate, facilityId, + programId, process…
- DELETE /bottomUpQuantifications/{id} — deleteBottomUpQuantificationsById: Completely removes bottom-up quantification. This action is not recoverable.
- GET /bottomUpQuantifications/{id}/auditLog — getBottomUpQuantificationsAuditLog: Returns all or part of the resource's audit log
- GET /bottomUpQuantifications/{id}/download — getBottomUpQuantificationsDownload: Downloads csv file with bottom-up quantification data.
- POST /bottomUpQuantifications/{id}/authorize — createBottomUpQuantificationsAuthorize: Authorize existing bottom-up quantification.
- POST /bottomUpQuantifications/{id}/reject — createBottomUpQuantificationsReject: Reject existing bottom-up quantification.
- GET /bottomUpQuantifications/{id}/mostRecentRejection — getBottomUpQuantificationsMostRecentRejection: Get most recent rejection of buq
- POST /bottomUpQuantifications/{id}/approve — createBottomUpQuantificationsApprove: Approve existing bottom-up quantification.
- POST /bottomUpQuantifications/{id}/submit — createBottomUpQuantificationsSubmit: Submit bottomUpQuantification
- POST /bottomUpQuantifications/prepare — createBottomUpQuantificationsPrepare: Prepare bottom-up quantification.
- POST /bottomUpQuantifications/finalApprove — createBottomUpQuantificationsFinalApprove: Final approve bottomUpQuantification
- GET /bottomUpQuantifications/approveFacilityForecastingStats — getBottomUpQuantificationsApproveFacilityForecastingStats: Get statistics for approve facility forecasting. This includes the number of all facilities, the number and percentage…
- GET /bottomUpQuantifications/forFinalApproval — getBottomUpQuantificationsForFinalApproval: Get bottom-up quantifications to be approved by NQT.
- GET /bottomUpQuantifications/supervisedGeographicZones — getBottomUpQuantificationsSupervisedGeographicZones: Get geographic zones supervised by current user.
- POST /bottomUpQuantifications/costCalculation — createBottomUpQuantificationsCostCalculation: Get geographic zones supervised by current user.

## buq
- GET /buq — getBuq: Get version

## catalogItems
- GET /catalogItems — getCatalogItems: Returns all CCE catalog items that are matching given request parameters by conjunction.
- POST /catalogItems — createCatalogItems: Creates given CCE catalog item if possible.
- GET /catalogItems/{id} — getCatalogItemsById: Get chosen CCE catalog item.
- PUT /catalogItems/{id} — updateCatalogItemsById: Update existing CCE catalog item.

## cce
- GET /cce — getCce: Get version

## cceAlerts
- GET /cceAlerts — getCceAlerts: Get CCE alerts.
- PUT /cceAlerts — updateCceAlerts: Creates or updates a CCE alert.

## clients
- GET /clients/search/findOneByClientId — getClientsSearchFindOneByClientId: Find Client by ID.

## commodityTypes
- GET /commodityTypes — getCommodityTypes: Retrieve commodity types.
- PUT /commodityTypes — updateCommodityTypes: Create or update a Commodity Type.
- GET /commodityTypes/{id}/tradeItems — getCommodityTypesTradeItems: Get a list of Trade Item UUIDs that may fulfill for the given Commodity Type.
- PUT /commodityTypes/{id}/tradeItems — updateCommodityTypesTradeItems: Update the list of Trade Item UUIDs that may fulfill for the given Commodity Type.
- GET /commodityTypes/{id}/auditLog — getCommodityTypesAuditLog: Returns all or part of the resource's audit log

## currencySettings
- GET /currencySettings — getCurrencySettings: Get all currency settings.

## dhis2
- GET /dhis2 — getDhis2: Get version

## diagnostics
- GET /diagnostics — getDiagnostics: Get version

## digestConfiguration
- GET /digestConfiguration — getDigestConfiguration: Get all available digest configurations.
- GET /digestConfiguration/{id} — getDigestConfigurationById: Get digest configuration.

## execute
- POST /execute — createExecute: Run execution

## exportData
- GET /exportData — getExportData: Exports the given data to a file.

## facilities
- GET /facilities — getFacilities: Returns a paginated list of all facilities that are matching given request parameters. If no parameters, all facilitie…
- POST /facilities — createFacilities: Creates new facility.
- GET /facilities/{id} — getFacilitiesById: Get chosen facility.
- PUT /facilities/{id} — updateFacilitiesById: Update existing facility.
- DELETE /facilities/{id} — deleteFacilitiesById: [AVOID USING] Completely removes facility. This action is not recoverable.
- GET /facilities/{id}/auditLog — getFacilitiesAuditLog: Returns all or part of the resource's audit log
- GET /facilities/{id}/approvedProducts — getFacilitiesApprovedProducts: Returns a list of full or non-full supply approved products for this facility
- POST /facilities/search — searchFacilities: Returns a paginated list of facilities given either a Zone, a Name, a Facility Type or a Code. The recurse option shou…
- GET /facilities/minimal — getFacilitiesMinimal: Returns all facilities with id and name fields.
- GET /facilities/full — getFacilitiesFull: Returns a paginated list of all facilities with full representation that are matching given request parameters. If no …
- POST /facilities/byBoundary — createFacilitiesByBoundary: Returns a paginated list of facilities given a polygon in the GeoJSON format.

## facilityOperators
- GET /facilityOperators — getFacilityOperators: Returns all Facility Operators.
- POST /facilityOperators — createFacilityOperators: Add Facility Operator to database.
- GET /facilityOperators/{id} — getFacilityOperatorsById: Get Facility Operator with given id.
- PUT /facilityOperators/{id} — updateFacilityOperatorsById: Updates Facility Operators with given id from database.
- DELETE /facilityOperators/{id} — deleteFacilityOperatorsById: [AVOID USING] Completely removes facility operator. This action is not recoverable.
- GET /facilityOperators/{id}/auditLog — getFacilityOperatorsAuditLog: Returns all or part of the resource's audit log

## facilityTypeApprovedProducts
- GET /facilityTypeApprovedProducts — getFacilityTypeApprovedProducts: Returns a page of approved products by search criteria. Returned FTAPs do not ensure that the ProgramOrderable for the…
- POST /facilityTypeApprovedProducts — createFacilityTypeApprovedProducts: Create new facility type approved product.
- POST /facilityTypeApprovedProducts/search — searchFacilityTypeApprovedProducts: Return a page of approved products by search criteria. Returned FTAPs do not ensure that the ProgramOrderable for the …
- GET /facilityTypeApprovedProducts/{id} — getFacilityTypeApprovedProductsById: Get chosen facility type approved product.
- PUT /facilityTypeApprovedProducts/{id} — updateFacilityTypeApprovedProductsById: Update existing facility type approved product or create a new one with the given ID.
- DELETE /facilityTypeApprovedProducts/{id} — deleteFacilityTypeApprovedProductsById: WARNING! Deprecated. [AVOID USING] Completely removes facility type approved product. This action is not recoverable.
- GET /facilityTypeApprovedProducts/{id}/auditLog — getFacilityTypeApprovedProductsAuditLog: Returns all or part of the resource's audit log

## facilityTypes
- GET /facilityTypes — getFacilityTypes: Get page of facilityTypes.
- POST /facilityTypes — createFacilityTypes: Creates new facilityType.
- GET /facilityTypes/{id} — getFacilityTypesById: Get chosen facilityType.
- PUT /facilityTypes/{id} — updateFacilityTypesById: Update existing facilityType.
- DELETE /facilityTypes/{id} — deleteFacilityTypesById: [AVOID USING] Completely removes facility type. This action is not recoverable.
- GET /facilityTypes/{id}/auditLog — getFacilityTypesAuditLog: Returns all or part of the resource's audit log

## fileTemplates
- GET /fileTemplates — getFileTemplates: Get File Template.
- PUT /fileTemplates — updateFileTemplates: Update fileTemplate.

## geographicLevels
- GET /geographicLevels — getGeographicLevels: Get all geographicLevels.
- POST /geographicLevels — createGeographicLevels: Creates new geographicLevel.
- GET /geographicLevels/{id} — getGeographicLevelsById: Get chosen geographicLevel.
- PUT /geographicLevels/{id} — updateGeographicLevelsById: Update existing geographicLevel.
- DELETE /geographicLevels/{id} — deleteGeographicLevelsById: [AVOID USING] Completely removes geographic level. This action is not recoverable.
- GET /geographicLevels/{id}/auditLog — getGeographicLevelsAuditLog: Returns all or part of the resource's audit log

## geographicZones
- GET /geographicZones — getGeographicZones: Get all geographicZones.
- POST /geographicZones — createGeographicZones: Creates new geographicZone.
- GET /geographicZones/{id} — getGeographicZonesById: Get chosen geographicZone.
- PUT /geographicZones/{id} — updateGeographicZonesById: Update existing geographicZone.
- DELETE /geographicZones/{id} — deleteGeographicZonesById: [AVOID USING] Completely removes geographic zone. This action is not recoverable.
- GET /geographicZones/{id}/auditLog — getGeographicZonesAuditLog: Returns all or part of the resource's audit log
- POST /geographicZones/search — searchGeographicZones: Filter geographic zones by parent, level, name and code. Results are ordered ascending by name.
- POST /geographicZones/byLocation — createGeographicZonesByLocation: Returns a list of geographic zones given a point in the GeoJSON format.

## hapifhir
- GET /hapifhir — getHapifhir: Get version
- GET /hapifhir/Location — getHapifhirLocation: Retrieve FHIR locations based on passed parameters
- GET /hapifhir/Measure — getHapifhirMeasure: Retrieve FHIR measure based on passed parameters
- GET /hapifhir/MeasureReport — getHapifhirMeasureReport: Retrieve FHIR measureReport based on passed parameters

## health
- GET /health — getHealth: Return current system health status. Response code depends on health status of services. The 200 HTTP code means that …

## idealStockAmounts
- GET /idealStockAmounts — getIdealStockAmounts: Returns Ideal Stock Amounts.
- POST /idealStockAmounts — createIdealStockAmounts: Creates given ISA items if possible.

## importData
- POST /importData — createImportData: Imports data.

## integration
- GET /integration/status — getIntegrationStatus: Get scheduler status
- PUT /integration/enable — updateIntegrationEnable: Turns on the scheduler
- PUT /integration/disable — updateIntegrationDisable: Turns off the scheduler
- POST /integration/orderable — createIntegrationOrderable: Receives product related data and writes them to the buffer
- POST /integration/stockEvent — createIntegrationStockEvent: Receives stockEvent related data and send them to the buffer

## inventoryItems
- GET /inventoryItems — getInventoryItems: Get all CCE Inventory items.
- POST /inventoryItems — createInventoryItems: Creates given CCE Inventory item if possible.
- GET /inventoryItems/{id} — getInventoryItemsById: Get chosen CCE Inventory item.
- PUT /inventoryItems/{id} — updateInventoryItemsById: Update existing CCE Inventory item.
- DELETE /inventoryItems/{id} — deleteInventoryItemsById: Delete chosen CCE Inventory item.
- PUT /inventoryItems/{id}/transfer — updateInventoryItemsTransfer: Transfers CCE Inventory to specified facility
- GET /inventoryItems/volume — getInventoryItemsVolume: Get CCE Inventory items volume for facility.
- GET /inventoryItems/download — getInventoryItemsDownload: Returns all CCE inventory items that are matching given request parameters by conjunction.

## localeSettings
- GET /localeSettings — getLocaleSettings: Get locale settings.

## lots
- GET /lots — getLots: Find lots with matched parameters. This endpoint is experimental.
- POST /lots — createLots: Create new lot. This endpoint is experimental.
- GET /lots/{id} — getLotsById: Get chosen lot. This endpoint is experimental.
- PUT /lots/{id} — updateLotsById: Update existing lot.
- GET /lots/{id}/auditLog — getLotsAuditLog: Returns all or part of the resource's audit log

## notifications
- GET /notifications — getNotifications: Get notifications.
- POST /notifications — createNotifications: Send a notification to the given user with provided messages.

## oauth
- POST /oauth/token — createOauthToken: Get access token. Please note that client credentials have to be provided in the Authorization header. [Read more](htt…
- POST /oauth/check_token — createOauthCheckToken: Check access token.
- GET /oauth/authorize — getOauthAuthorize: Displays user approval page or performs redirection if the user allowed it previously.
- POST /oauth/authorize — createOauthAuthorize: Submit the authorization form and perform redirection to the client. Form data includes flags such as user_oauth_appro…
- GET /oauth/confirm_access — getOauthConfirmAccess: Used to render approval form in the authorization server.
- GET /oauth/error — getOauthError: Used to render errors in the authorization server.

## oneNetworkIntegration
- GET /oneNetworkIntegration — getOneNetworkIntegration: Get version

## orderNumberConfigurations
- GET /orderNumberConfigurations — getOrderNumberConfigurations: Get OrderNumberConfiguration.
- POST /orderNumberConfigurations — createOrderNumberConfigurations: Create or Update OrderNumberConfiguration.

## orderableDisplayCategories
- GET /orderableDisplayCategories — getOrderableDisplayCategories: Get all orderableDisplayCategories.
- POST /orderableDisplayCategories — createOrderableDisplayCategories: Create new orderableDisplayCategory.
- GET /orderableDisplayCategories/{id} — getOrderableDisplayCategoriesById: Get chosen orderableDisplayCategory.
- PUT /orderableDisplayCategories/{id} — updateOrderableDisplayCategoriesById: Update existing orderableDisplayCategory.
- DELETE /orderableDisplayCategories/{id} — deleteOrderableDisplayCategoriesById: [AVOID USING] Completely removes display category. This action is not recoverable.
- GET /orderableDisplayCategories/{id}/auditLog — getOrderableDisplayCategoriesAuditLog: Returns all or part of the resource's audit log
- GET /orderableDisplayCategories/search — searchOrderableDisplayCategories: Find orderable categories with matched code.

## orderableFulfills
- GET /orderableFulfills — getOrderableFulfills: This endpoint returns two types of orderable IDs for each orderable. For each orderable, what it returns depends on th…

## orderables
- GET /orderables — getOrderables: Get all Orderable Products if no search params provided. Otherwise returns a paginated list of Orderables given either…
- PUT /orderables — updateOrderables: Create an Orderable.
- GET /orderables/{id} — getOrderablesById: Get chosen orderable. If versionNumber is omitted, returns newest version.
- PUT /orderables/{id} — updateOrderablesById: Creates a new version of an orderable with an incremented versionNumber. WARNING! Versioned orderables may not be full…
- GET /orderables/{id}/auditLog — getOrderablesAuditLog: Returns all or part of the resource's audit log
- POST /orderables/search — searchOrderables: Return a page of orderables by search criteria.

## orders
- GET /orders — getOrders: Get all orders. This endpoint requires one of the following rights: ORDERS_EDIT, ORDERS_VIEW, SHIPMENT_EDIT, SHIPMENT_…
- POST /orders — createOrders: Creates new order. This endpoint requires ORDERS_EDIT right.
- DELETE /orders — deleteOrders: Removes many orders by id. This endpoint requires ORDERS_DELETE right.
- POST /orders/requisitionLess — createOrdersRequisitionLess: Creates requisition-less order. This endpoint requires ORDER_CREATE right.
- GET /orders/{id} — getOrdersById: Get chosen order. This endpoint requires one of the following rights: ORDERS_EDIT, ORDERS_VIEW, SHIPMENT_EDIT, SHIPMEN…
- PUT /orders/{id} — updateOrdersById: Update order. This endpoint requires ORDER_CREATE right.
- PUT /orders/{id}/requisitionLess/send — updateOrdersRequisitionLessSend: Send requisition-less order. This endpoint requires ORDER_CREATE right.
- GET /orders/{id}/export — getOrdersExport: Export Order to csv. This endpoint requires one of the following rights: ORDERS_EDIT, ORDERS_VIEW, SHIPMENT_EDIT, SHIP…
- GET /orders/{id}/retry — getOrdersRetry: Manually retry transmitting the order CSV to the configured FTP target. The order must be in TRANSFER_FAILED status an…
- PUT /orders/{id}/cancel — updateOrdersCancel: Cancel an order that cannot be fulfilled and remove its shipment draft.
- GET /orders/{id}/print — getOrdersPrint: Print all order line items from an order to a csv or pdf file. This endpoint requires one of the following rights: ORD…
- POST /orders/batch — createOrdersBatch: Creates multiple new orders in one transaction. If order was already created endpoint returns the existing one found b…
- GET /orders/requestingFacilities — getOrdersRequestingFacilities: Return UUIDs of all the available, distinct requesting facilities. The supplying facility when provided, it will also …
- GET /orders/numberOfOrdersData — getOrdersNumberOfOrdersData: Get information about number of orders. This endpoint requires one of the following rights: ORDERS_EDIT, ORDERS_VIEW, …
- GET /orders/statusesStatsData — getOrdersStatusesStatsData: Get statistics on the number of orders depending on the status.

## organizations
- GET /organizations — getOrganizations: Retrieve all organizations. This is for administrators only. It requires the permission STOCK_ORGANIZATIONS_MANAGE. Re…
- POST /organizations — createOrganizations: Create a new organization.
- PUT /organizations/{id} — updateOrganizationsById: Update an organization.

## physicalInventories
- GET /physicalInventories — getPhysicalInventories: Get a list of saved physical inventory. If inventories do not exist, will return empty list.
- POST /physicalInventories — createPhysicalInventories: Create empty draft physical inventory. Only one draft is allowed at the same time for one facility&program.
- GET /physicalInventories/{id} — getPhysicalInventoriesById: Get a physical inventory with format specified in query param. Json format is default.
- PUT /physicalInventories/{id} — updatePhysicalInventoriesById: Save a draft physical inventory. Only one draft is allowed at the same time for one facility&program.
- DELETE /physicalInventories/{id} — deletePhysicalInventoriesById: Delete a draft physical inventory.

## physicalInventoryTemplates
- GET /physicalInventoryTemplates — getPhysicalInventoryTemplates: Download Physical Inventory report template with jrxml format.
- POST /physicalInventoryTemplates — createPhysicalInventoryTemplates: Save Physical Inventory report template in database.

## processingPeriods
- GET /processingPeriods — getProcessingPeriods: Get all processing periods that match the given parameters. The processingScheduleId parameter should not be used toge…
- POST /processingPeriods — createProcessingPeriods: Creates given processingPeriod if possible.
- GET /processingPeriods/{id} — getProcessingPeriodsById: Get chosen processingPeriod.
- PUT /processingPeriods/{id} — updateProcessingPeriodsById: Update existing processingPeriod.
- GET /processingPeriods/{id}/duration — getProcessingPeriodsDuration: Display total months of processingPeriod.
- GET /processingPeriods/{id}/auditLog — getProcessingPeriodsAuditLog: Returns all or part of the resource's audit log

## processingSchedules
- GET /processingSchedules — getProcessingSchedules: Get all schedules.
- POST /processingSchedules — createProcessingSchedules: Creates new processingSchedule.
- GET /processingSchedules/search — searchProcessingSchedules: Retrieve Processing Schedule based on the provided parameters.
- GET /processingSchedules/{id} — getProcessingSchedulesById: Get chosen processingSchedule.
- PUT /processingSchedules/{id} — updateProcessingSchedulesById: Update existing processingSchedule.
- DELETE /processingSchedules/{id} — deleteProcessingSchedulesById: [AVOID USING] Completely removes processing schedule. This action is not recoverable.
- GET /processingSchedules/{id}/auditLog — getProcessingSchedulesAuditLog: Returns all or part of the resource's audit log

## productGroups
- GET /productGroups — getProductGroups: Get all product groups that match the given parameters.
- POST /productGroups — createProductGroups: Creates given product group if possible.
- GET /productGroups/{id} — getProductGroupsById: Get chosen product group.
- PUT /productGroups/{id} — updateProductGroupsById: Update existing product group.
- DELETE /productGroups/{id} — deleteProductGroupsById: Completely removes product group. This action is not recoverable.
- GET /productGroups/{id}/auditLog — getProductGroupsAuditLog: Returns all or part of the resource's audit log

## programs
- GET /programs — getPrograms: Get all programs.
- POST /programs — createPrograms: Creates new program.
- GET /programs/{id} — getProgramsById: Get chosen program.
- PUT /programs/{id} — updateProgramsById: Update existing program.
- DELETE /programs/{id} — deleteProgramsById: [AVOID USING] Completely removes program. This action is not recoverable.
- GET /programs/search — searchPrograms: Get chosen program.
- GET /programs/{id}/auditLog — getProgramsAuditLog: Returns all or part of the resource's audit log

## proofOfDeliveryTemplates
- GET /proofOfDeliveryTemplates — getProofOfDeliveryTemplates: Download Proof Of Delivery report template with jrxml format.
- POST /proofOfDeliveryTemplates — createProofOfDeliveryTemplates: Save Proof Of Delivery report template in database.

## proofsOfDelivery
- GET /proofsOfDelivery — getProofsOfDelivery: Get proofs of delivery page. This endpoint requires one of the following rights: PODS_MANAGE, PODS_VIEW (for requestin…
- GET /proofsOfDelivery/{id} — getProofsOfDeliveryById: Get chosen proofOfDelivery. This endpoint requires one of the following rights: PODS_MANAGE, PODS_VIEW (for requesting…
- PUT /proofsOfDelivery/{id} — updateProofsOfDeliveryById: Update existing proofOfDelivery. This endpoint requires PODS_MANAGE right.
- GET /proofsOfDelivery/{id}/print — getProofsOfDeliveryPrint: Print proof of delivery to a pdf file. This endpoint requires one of the following rights: PODS_MANAGE, PODS_VIEW (for…
- GET /proofsOfDelivery/{id}/auditLog — getProofsOfDeliveryAuditLog: Returns all or part of the resource's audit log

## public
- GET /public/stockCardSummaries — getPublicStockCardSummaries: Get summaries of stock cards, which contains SOH, product name, lot and other essential information.
- POST /public/stockEvents — createPublicStockEvents: Create a new stock event with one or more orderables - for external integrators use.

## reasonCategories
- GET /reasonCategories — getReasonCategories: Returns a list reason categories to choose from, for admin user to configure reasons.

## reasonTypes
- GET /reasonTypes — getReasonTypes: Returns a list reason types to choose from, for admin user to configure reasons.

## rejectionReasonCategories
- GET /rejectionReasonCategories — getRejectionReasonCategories: Get a page rejection reason category.
- POST /rejectionReasonCategories — createRejectionReasonCategories: Save a rejection reason category.
- GET /rejectionReasonCategories/{id} — getRejectionReasonCategoriesById: Get chosen rejection reason category.
- PUT /rejectionReasonCategories/{id} — updateRejectionReasonCategoriesById: Create/update rejection reason catgeory.
- GET /rejectionReasonCategories/search — searchRejectionReasonCategories: Search for rejection reason category. Atleast one parameter should be passed or else will throw 400 error

## rejectionReasons
- GET /rejectionReasons — getRejectionReasons: Get a page rejection reason.
- POST /rejectionReasons — createRejectionReasons: Save a rejection reason.
- GET /rejectionReasons/{id} — getRejectionReasonsById: Get chosen rejection reason.
- PUT /rejectionReasons/{id} — updateRejectionReasonsById: Create/update rejection reason.
- GET /rejectionReasons/search — searchRejectionReasons: Search for rejection reason. Atleast one parameter should be passed or else will throw 400 error

## remark
- GET /remark — getRemark: Get all remarks
- POST /remark — createRemark: Create a remark
- GET /remark/{id} — getRemarkById: Get one remark
- PUT /remark/{id} — updateRemarkById: Update existing remark
- DELETE /remark/{id} — deleteRemarkById: Delete remark
- GET /remark/{id}/auditLog — getRemarkAuditLog: Returns all or part of the resource's audit log

## reports
- GET /reports/templates/requisitions — getReportsTemplatesRequisitions: Get all templates.
- POST /reports/templates/requisitions — createReportsTemplatesRequisitions: Add or update report template to database.
- GET /reports/templates/requisitions/{id} — getReportsTemplatesRequisitionsById: Get chosen template.
- DELETE /reports/templates/requisitions/{id} — deleteReportsTemplatesRequisitionsById: Delete chosen template.
- GET /reports/templates/requisitions/{id}/{format} — getReportsTemplatesRequisitionsByFormat: Generate report from template ID and format.
- GET /reports/templates/fulfillment — getReportsTemplatesFulfillment: Get all templates.
- POST /reports/templates/fulfillment — createReportsTemplatesFulfillment: Add report template to database.
- GET /reports/templates/fulfillment/{id} — getReportsTemplatesFulfillmentById: Get chosen template.
- PUT /reports/templates/fulfillment/{id} — updateReportsTemplatesFulfillmentById: Update existing template.
- DELETE /reports/templates/fulfillment/{id} — deleteReportsTemplatesFulfillmentById: Delete chosen template.
- POST /reports/generate — createReportsGenerate: Generates a Jasper report using a provided JSON data source and template payload.
- GET /reports/requisitions/{id}/print — getReportsRequisitionsPrint: Print requisition to a pdf file.
- GET /reports/districts — getReportsDistricts: Get all districts.
- GET /reports/programs — getReportsPrograms: Get all programs.
- GET /reports/processingPeriods — getReportsProcessingPeriods: Get all processing periods.
- GET /reports/stockAdjustmentReasons/search — searchReportsStockAdjustmentReasons: Search for Stock Adjustment Reasons.
- GET /reports/templates/common — getReportsTemplatesCommon: Get all templates.
- POST /reports/templates/common — createReportsTemplatesCommon: Create or update report template.
- GET /reports/templates/common/{id} — getReportsTemplatesCommonById: Get chosen template.
- DELETE /reports/templates/common/{id} — deleteReportsTemplatesCommonById: Delete chosen template.
- GET /reports/templates/common/{id}/{format} — getReportsTemplatesCommonByFormat: Generate report from template ID and format.
- GET /reports/images — getReportsImages: Get all images.
- POST /reports/images — createReportsImages: Create or update report image.
- GET /reports/images/{id} — getReportsImagesById: Get chosen image.
- DELETE /reports/images/{id} — deleteReportsImagesById: Delete chosen image.
- GET /reports/superset/guest-token — getReportsSupersetGuestToken: Get a Superset guest token for embedding a dashboard.
- GET /reports/dashboardReports — getReportsDashboardReports: Get all dashboard reports matching certain criteria.
- POST /reports/dashboardReports — createReportsDashboardReports: Create dashboard report.
- PUT /reports/dashboardReports — updateReportsDashboardReports: Update dashboard report.
- GET /reports/dashboardReports/{id} — getReportsDashboardReportsById: Get chosen dashboard report.
- DELETE /reports/dashboardReports/{id} — deleteReportsDashboardReportsById: Delete chosen dashboard report.
- GET /reports/dashboardReports/availableReports — getReportsDashboardReportsAvailableReports: Get dashboard reports permitted for user.
- GET /reports/reportCategories — getReportsReportCategories: Get all report categories matching certain criteria.
- POST /reports/reportCategories — createReportsReportCategories: Create report category.
- PUT /reports/reportCategories — updateReportsReportCategories: Update report category.
- GET /reports/reportCategories/{id} — getReportsReportCategoriesById: Get chosen report category.
- DELETE /reports/reportCategories/{id} — deleteReportsReportCategoriesById: Delete chosen report category.

## requisitionGroups
- GET /requisitionGroups — getRequisitionGroups: Get all requisitionGroups.
- POST /requisitionGroups — createRequisitionGroups: Create new requisitionGroup.
- GET /requisitionGroups/{id} — getRequisitionGroupsById: Get chosen requisitionGroup.
- PUT /requisitionGroups/{id} — updateRequisitionGroupsById: Update existing requisitionGroup.
- DELETE /requisitionGroups/{id} — deleteRequisitionGroupsById: [AVOID USING] Completely removes requisition group. This action is not recoverable.
- GET /requisitionGroups/{id}/auditLog — getRequisitionGroupsAuditLog: Returns all or part of the resource's audit log
- POST /requisitionGroups/search — searchRequisitionGroups: Returns a paginated list of requisition groups given either a zone, a name, a program or a code.

## requisitionTemplates
- GET /requisitionTemplates — getRequisitionTemplates: Get all requisitionTemplates.
- POST /requisitionTemplates — createRequisitionTemplates: Creates new requisitionTemplate.
- GET /requisitionTemplates/{id} — getRequisitionTemplatesById: Get chosen requisitionTemplate.
- PUT /requisitionTemplates/{id} — updateRequisitionTemplatesById: Update existing requisitionTemplate.
- DELETE /requisitionTemplates/{id} — deleteRequisitionTemplatesById: Delete chosen requisitionTemplate.
- GET /requisitionTemplates/{facilityTypeId}/{programId}/{reportOnly} — getRequisitionTemplatesByReportOnly: Get chosen requisitionTemplate.

## requisitions
- GET /requisitions — getRequisitions: when retrieveAll param is present, it will retrieve requisitions with passed ids
- POST /requisitions — createRequisitions: when approveAll param is present, it will approve requisitions with passed ids
- PUT /requisitions — updateRequisitions: When saveAll param is present, it will save all requisitions from the request body
- POST /requisitions/initiate — createRequisitionsInitiate: Initiate requisition.
- GET /requisitions/submitted — getRequisitionsSubmitted: WARNING! Deprecated. Get all requisitions with submitted status.
- GET /requisitions/unSkipRequisition — getRequisitionsUnSkipRequisition: Get Unskip requisition setting from the env file.
- GET /requisitions/{id} — getRequisitionsById: Get chosen requisition.
- PUT /requisitions/{id} — updateRequisitionsById: Update existing requisition. Do not change invariants – id, createdDate, facility, program, supplyingFacility, status,…
- DELETE /requisitions/{id} — deleteRequisitionsById: Delete chosen requisition.
- PUT /requisitions/{id}/skip — updateRequisitionsSkip: Skip chosen requisition period.
- PUT /requisitions/{id}/reject — updateRequisitionsReject: Reject requisition which is waiting for approval.
- POST /requisitions/{id}/submit — createRequisitionsSubmit: Submit earlier initiated requisition.
- POST /requisitions/{id}/authorize — createRequisitionsAuthorize: Authorize submitted requisition.
- GET /requisitions/{id}/print — getRequisitionsPrint: Print requisition to a pdf file.
- GET /requisitions/{id}/statusMessages — getRequisitionsStatusMessages: Get status messages associated with a requisition.
- GET /requisitions/search — searchRequisitions: Find requisitions matching all of provided parameters.
- POST /requisitions/{id}/approve — createRequisitionsApprove: Approve specified by id requisition.
- GET /requisitions/requisitionsForApproval — getRequisitionsRequisitionsForApproval: Get requisitions to approve for right supervisor.
- GET /requisitions/numberOfRequisitionsForApproval — getRequisitionsNumberOfRequisitionsForApproval: Get number of requisitions to approve for right supervisor.
- GET /requisitions/statusesStatsData — getRequisitionsStatusesStatsData: Get statistics on the number of requisitions depending on the status.
- GET /requisitions/requisitionsForConvert — getRequisitionsRequisitionsForConvert: Get requisitions to approve for right supervisor.
- POST /requisitions/convertToOrder — createRequisitionsConvertToOrder: WARNING! deprecated; Please use /batchReleases to convert Requisition to orders.
- POST /requisitions/batchReleases — createRequisitionsBatchReleases: Release Requisition/s with or without orders.
- GET /requisitions/periodsForInitiate — getRequisitionsPeriodsForInitiate: Find periods for initiate requisition.

## rights
- GET /rights — getRights: Get all rights.
- PUT /rights — updateRights: Save a right.
- GET /rights/{rightId} — getRightsByRightId: Get chosen right.
- DELETE /rights/{rightId} — deleteRightsByRightId: [AVOID USING] Completely removes right. This action is not recoverable.
- GET /rights/{id}/auditLog — getRightsAuditLog: Returns all or part of the resource's audit log
- GET /rights/search — searchRights: Search for rights.

## roleAssignments
- GET /roleAssignments — getRoleAssignments: Get all role assignments of all users, each tagged with its user.

## roles
- GET /roles — getRoles: Get all roles based on passed parameters. Please have in mind that only roles that match all parameters will be return…
- POST /roles — createRoles: Create new role.
- GET /roles/{roleId} — getRolesByRoleId: Get chosen role.
- PUT /roles/{roleId} — updateRolesByRoleId: Update existing role (or create new one using role ID).
- DELETE /roles/{roleId} — deleteRolesByRoleId: [AVOID USING] Completely removes role. This action is not recoverable.
- GET /roles/{id}/auditLog — getRolesAuditLog: Returns all or part of the resource's audit log

## serverConfiguration
- GET /serverConfiguration — getServerConfiguration: Get all servers.
- POST /serverConfiguration — createServerConfiguration: Add new server.
- GET /serverConfiguration/{id} — getServerConfigurationById: Get server configuration.
- PUT /serverConfiguration/{id} — updateServerConfigurationById: Change server parameters.
- DELETE /serverConfiguration/{id} — deleteServerConfigurationById: Completely removes server configuration. This action is not recoverable.
- GET /serverConfiguration/{id}/datasets — getServerConfigurationDatasets: Get all datasets.
- POST /serverConfiguration/{id}/datasets — createServerConfigurationDatasets: Add new dataset.
- GET /serverConfiguration/{id}/datasets/{id} — getServerConfigurationDatasetsById: Get dataset configuration.
- PUT /serverConfiguration/{id}/datasets/{id} — updateServerConfigurationDatasetsById: Change dataset parameters.
- DELETE /serverConfiguration/{id}/datasets/{id} — deleteServerConfigurationDatasetsById: Completely removes dataset. This action is not recoverable.
- GET /serverConfiguration/{id}/datasets/{id}/periodMappings — getServerConfigurationDatasetsPeriodMappings: Get all period mappings.
- POST /serverConfiguration/{id}/datasets/{id}/periodMappings — createServerConfigurationDatasetsPeriodMappings: Add new period mapping.
- GET /serverConfiguration/{id}/datasets/{id}/periodMappings/{id} — getServerConfigurationDatasetsPeriodMappingsById: Get period mapping.
- PUT /serverConfiguration/{id}/datasets/{id}/periodMappings/{id} — updateServerConfigurationDatasetsPeriodMappingsById: Change period mapping parameters.
- DELETE /serverConfiguration/{id}/datasets/{id}/periodMappings/{id} — deleteServerConfigurationDatasetsPeriodMappingsById: Completely removes period mapping. This action is not recoverable.
- GET /serverConfiguration/{id}/datasets/{id}/periodMappings/{id}/auditLog — getServerConfigurationDatasetsPeriodMappingsAuditLog: Returns all or part of the resource's audit log
- GET /serverConfiguration/{id}/datasets/{id}/elements — getServerConfigurationDatasetsElements: Get all data elements.
- POST /serverConfiguration/{id}/datasets/{id}/elements — createServerConfigurationDatasetsElements: Add new data element.
- GET /serverConfiguration/{id}/datasets/{id}/elements/{id} — getServerConfigurationDatasetsElementsById: Get data element configuration.
- PUT /serverConfiguration/{id}/datasets/{id}/elements/{id} — updateServerConfigurationDatasetsElementsById: Change data element parameters.
- DELETE /serverConfiguration/{id}/datasets/{id}/elements/{id} — deleteServerConfigurationDatasetsElementsById: Completely removes data element. This action is not recoverable.
- GET /serverConfiguration/{id}/datasets/{id}/elements/{id}/auditLog — getServerConfigurationDatasetsElementsAuditLog: Returns all or part of the resource's audit log
- GET /serverConfiguration/{id}/datasets/{id}/dhisElements — getServerConfigurationDatasetsDhisElements: Get all dhis data elements.
- GET /serverConfiguration/{id}/datasets/{id}/elementsAndCombos — getServerConfigurationDatasetsElementsAndCombos: Get all concatenated data elements and category option combos.
- GET /serverConfiguration/{id}/datasets/{id}/auditLog — getServerConfigurationDatasetsAuditLog: Returns all or part of the resource's audit log
- GET /serverConfiguration/{id}/dhisDatasets — getServerConfigurationDhisDatasets: Get all dhis datasets.
- GET /serverConfiguration/{id}/dhisDatasets/{id} — getServerConfigurationDhisDatasetsById: Get period mapping.
- GET /serverConfiguration/{id}/dhisPeriodTypes — getServerConfigurationDhisPeriodTypes: Get all dhis period types.
- GET /serverConfiguration/{id}/categoryOptionCombos — getServerConfigurationCategoryOptionCombos: Get all category option combos.
- GET /serverConfiguration/{id}/auditLog — getServerConfigurationAuditLog: Returns all or part of the resource's audit log

## serviceAccounts
- POST /serviceAccounts — createServiceAccounts: Create a new Service Account. This account is related with the API key generated by the auth service. It is required i…
- GET /serviceAccounts/{token} — getServiceAccountsByToken: Get Service Account.
- PUT /serviceAccounts/{token} — updateServiceAccountsByToken: Update Service Account.
- DELETE /serviceAccounts/{token} — deleteServiceAccountsByToken: Completely removes Service Account. This action is not recoverable.

## settings
- GET /settings/{key} — getSettingsByKey: Get chosen setting.

## shipmentDrafts
- GET /shipmentDrafts — getShipmentDrafts: Get shipment drafts. This endpoint requires SHIPMENT_VIEW or SHIPMENT_EDIT rights.
- POST /shipmentDrafts — createShipmentDrafts: Create a shipment draft. Only one draft can exist in the system for a given order. This endpoint requires SHIPMENT_EDI…
- GET /shipmentDrafts/{id} — getShipmentDraftsById: Get chosen shipment draft. This endpoint requires SHIPMENT_VIEW or SHIPMENT_EDIT rights.
- PUT /shipmentDrafts/{id} — updateShipmentDraftsById: Create or update shipment draft. This endpoint requires SHIPMENT_EDIT right.
- DELETE /shipmentDrafts/{id} — deleteShipmentDraftsById: Delete chosen shipment draft. This endpoint requires SHIPMENT_EDIT right.

## shipments
- GET /shipments — getShipments: Get shipments page. This endpoint requires SHIPMENT_VIEW or SHIPMENT_EDIT rights.
- POST /shipments — createShipments: Create a shipment. This endpoint requires SHIPMENT_EDIT right.
- GET /shipments/{id} — getShipmentsById: Get chosen shipment. This endpoint requires SHIPMENT_VIEW or SHIPMENT_EDIT rights.

## sourcesOfFunds
- GET /sourcesOfFunds — getSourcesOfFunds: Get all sources of funds that match the given parameters.
- POST /sourcesOfFunds — createSourcesOfFunds: Creates given source of fund if possible.
- GET /sourcesOfFunds/{id} — getSourcesOfFundsById: Get chosen source of fund.
- PUT /sourcesOfFunds/{id} — updateSourcesOfFundsById: Update existing source of fund.
- DELETE /sourcesOfFunds/{id} — deleteSourcesOfFundsById: Completely removes source of fund. This action is not recoverable.
- GET /sourcesOfFunds/{id}/auditLog — getSourcesOfFundsAuditLog: Returns all or part of the resource's audit log

## stockCardLineItemReasonTags
- GET /stockCardLineItemReasonTags — getStockCardLineItemReasonTags: Retrieve all tags that are assosiated with any reason. The result list does no contain duplicates.

## stockCardLineItemReasons
- GET /stockCardLineItemReasons — getStockCardLineItemReasons: Retrieve all reasons.
- POST /stockCardLineItemReasons — createStockCardLineItemReasons: Create a new stock card line item reason.
- GET /stockCardLineItemReasons/{id} — getStockCardLineItemReasonsById: Get a stock card line item reason.
- POST /stockCardLineItemReasons/{id} — createStockCardLineItemReasonsById: Update a stock card line item reason.

## stockCardRangeSummaries
- GET /stockCardRangeSummaries — getStockCardRangeSummaries: Get summaries of stock cards with reason info and amount assigned. Range of line items taken is specified by date para…

## stockCardSummaries
- GET /stockCardSummaries — getStockCardSummaries: Get summaries of stock cards, which contains SOH, product name, and other essential information. This will NOT return …
- GET /stockCardSummaries/print — getStockCardSummariesPrint: Get stock card summary report in PDF format to print.
- GET /stockCardSummaries/noCards — getStockCardSummariesNoCards: Get dummy stock card summaries for approved products and lots that don't have cards yet. This can be used by front end…

## stockCardTemplates
- GET /stockCardTemplates — getStockCardTemplates: Get stock card template
- POST /stockCardTemplates — createStockCardTemplates: Create stock card template for a facility-type&program combination. This is for administrators only. It requires the p…

## stockCards
- GET /stockCards — getStockCards: Search for Stock Cards, result is an intersection of user rights and request parameters.
- POST /stockCards/deactivate — createStockCardsDeactivate: Set stock cards as inactive.
- GET /stockCards/{id} — getStockCardsById: Get full details of one stock card.
- GET /stockCards/{id}/print — getStockCardsPrint: Get stock card report in PDF format to print.
- PUT /stockCards/{id}/deactivate — updateStockCardsDeactivate: Set stock card as inactive.

## stockEvents
- GET /stockEvents — getStockEvents: Get a page of issue/receive/adjustment stock events (transaction history) for a facility and program.
- POST /stockEvents — createStockEvents: Create a new stock event with one or more orderables.
- GET /stockEvents/{id} — getStockEventsById: Get the history header (e.g. event type, document number) of a single stock event.
- POST /stockEvents/{id}/cancel — createStockEventsCancel: Cancel selected issue/receive/adjustment line items of the stock event. Requires the STOCK_EVENTS_CANCEL right for the…
- GET /stockEvents/{id}/lineItems — getStockEventsLineItems: Get the line items (transaction detail) of a single stock event.
- GET /stockEvents/{id}/print — getStockEventsPrint: Get stock event report in PDF format to print.

## supervisoryNodes
- GET /supervisoryNodes — getSupervisoryNodes: Get page of Supervisory Nodes that are matching given query parameters.
- POST /supervisoryNodes — createSupervisoryNodes: Create new supervisoryNode.
- GET /supervisoryNodes/{id} — getSupervisoryNodesById: Get chosen supervisoryNode.
- PUT /supervisoryNodes/{id} — updateSupervisoryNodesById: Update existing supervisoryNode.
- DELETE /supervisoryNodes/{id} — deleteSupervisoryNodesById: [AVOID USING] Completely removes supervisory node. This action is not recoverable.
- GET /supervisoryNodes/{id}/supervisingUsers — getSupervisoryNodesSupervisingUsers: Get supervising users based on the provided parameters.
- GET /supervisoryNodes/{id}/facilities — getSupervisoryNodesFacilities: Get supervising facilities based on the provided parameters.
- GET /supervisoryNodes/{id}/auditLog — getSupervisoryNodesAuditLog: Returns all or part of the resource's audit log

## supplyLines
- GET /supplyLines — getSupplyLines: Returns supply lines that are matching given search params.
- POST /supplyLines — createSupplyLines: Creates new supplyLine.
- GET /supplyLines/{id} — getSupplyLinesById: Get chosen supplyLine.
- PUT /supplyLines/{id} — updateSupplyLinesById: Update existing supplyLine.
- DELETE /supplyLines/{id} — deleteSupplyLinesById: [AVOID USING] Completely removes supply line. This action is not recoverable.
- GET /supplyLines/{id}/auditLog — getSupplyLinesAuditLog: Returns all or part of the resource's audit log

## supplyPartners
- GET /supplyPartners — getSupplyPartners: Get a page of supply partners based on passed parameters. Please have in mind that only supply partners that match all…
- POST /supplyPartners — createSupplyPartners: Creates a new supply partner
- GET /supplyPartners/{id} — getSupplyPartnersById: Get a specific supply partner
- PUT /supplyPartners/{id} — updateSupplyPartnersById: Updates the existing supply partner or creates a new one with the given id.
- GET /supplyPartners/{id}/auditLog — getSupplyPartnersAuditLog: Returns all or part of the resource's audit log

## systemNotifications
- GET /systemNotifications — getSystemNotifications: Get a page of system notifications based on passed parameters. Please have in mind that only system notifications that…
- POST /systemNotifications — createSystemNotifications: Creates a new system notification
- GET /systemNotifications/{id} — getSystemNotificationsById: Get a specific system notification
- PUT /systemNotifications/{id} — updateSystemNotificationsById: Updates the existing system notification or creates a new one with the given id.
- DELETE /systemNotifications/{id} — deleteSystemNotificationsById: Completely removes a system notification. This action is not recoverable.
- GET /systemNotifications/{id}/auditLog — getSystemNotificationsAuditLog: Returns all or part of the resource's audit log

## tradeItems
- GET /tradeItems — getTradeItems: Retrieve trade items. Optionally filter by GTIN, by trade item IDs, or by the classification ID using either a full or…
- PUT /tradeItems — updateTradeItems: Create or update a Trade Item.
- GET /tradeItems/{id}/auditLog — getTradeItemsAuditLog: Returns all or part of the resource's audit log

## transferProperties
- POST /transferProperties — createTransferProperties: Creates new transfer properties.
- GET /transferProperties/{id} — getTransferPropertiesById: Get chosen transfer properties.
- PUT /transferProperties/{id} — updateTransferPropertiesById: Update existing transfer properties.
- DELETE /transferProperties/{id} — deleteTransferPropertiesById: Delete chosen transfer properties.
- GET /transferProperties/search — searchTransferProperties: Find transfer properties by facility id.

## userContactDetails
- GET /userContactDetails — getUserContactDetails: Get all user contact details that are matching given request parameters. If no parameters, all user contact details ar…
- GET /userContactDetails/{id} — getUserContactDetailsById: Get user contact details.
- PUT /userContactDetails/{id} — updateUserContactDetailsById: Update user contact details.
- GET /userContactDetails/{id}/verifications — getUserContactDetailsVerifications: Get pending verification for a user.
- POST /userContactDetails/{id}/verifications — createUserContactDetailsVerifications: Resend verification for the current user.
- GET /userContactDetails/{id}/verifications/{token} — getUserContactDetailsVerificationsByToken: Verifies the given email address

## users
- GET /users — getUsers: Retrieve all users in the system or search users, matching all parameters specified. Returns paginated user list. For …
- PUT /users — updateUsers: Create a new user or update an exising one. The value of the ID field in the body is used to determine whether this is…
- GET /users/{userId} — getUsersByUserId: Get a chosen user by providing his ID.
- DELETE /users/{userId} — deleteUsersByUserId: [AVOID USING] Completely removes user. This action is not recoverable.
- GET /users/{userId}/roleAssignments — getUsersRoleAssignments: Return full information about user's roles and rights.
- GET /users/{userId}/hasRight — getUsersHasRight: Check if the user has a right with certain criteria.
- GET /users/{userId}/programs — getUsersPrograms: Get all programs the associated user supervises.
- GET /users/{userId}/supportedPrograms — getUsersSupportedPrograms: Get all supported programs the associated user supervises through the home facility.
- GET /users/{userId}/fulfillmentFacilities — getUsersFulfillmentFacilities: Get all facilities the associated user can fulfill.
- GET /users/{userId}/permissionStrings — getUsersPermissionStrings: Gets a list of all permissions (in string format) associated with a user. The full format is RightName|FacilityUUID|Pr…
- GET /users/{userId}/facilities — getUsersFacilities: Gets all supervision facilities associated with a user. To determine which facilities work with which right and progra…
- GET /users/{id}/auditLog — getUsersAuditLog: Returns all or part of the resource's audit log
- POST /users/search — searchUsers: Search users, matching all parameters specified. Search parameters are passed in the request body, in JSON format. The…
- GET /users/rightSearch — getUsersRightSearch: Search users that have the given right assigned. This searches for users with role assignments matching all the parame…
- POST /users/auth — createUsersAuth: Save user.
- GET /users/auth/{id} — getUsersAuthById: Get a user by the given ID value.
- POST /users/auth/passwordReset — createUsersAuthPasswordReset: Reset user's password.
- POST /users/auth/forgotPassword — createUsersAuthForgotPassword: Send an email to the user with a reset password link.
- POST /users/auth/changePassword — createUsersAuthChangePassword: Change user's password.
- POST /users/auth/passwordResetToken — createUsersAuthPasswordResetToken: Create token which can be used to change user's password.
- POST /users/auth/logout — createUsersAuthLogout: Logout user.
- POST /users/auth/unlock — createUsersAuthUnlock: Bulk-unlocks the given users. For each user the lockout flag is cleared and the failed-attempt counter is reset, in it…
- GET /users/search/findOneByUsername — getUsersSearchFindOneByUsername: Find User by username.
- GET /users/{id}/subscriptions — getUsersSubscriptions: Get user subscriptions.
- POST /users/{id}/subscriptions — createUsersSubscriptions: Create user subscriptions.

## v2
- POST /v2/requisitions/initiate — createV2RequisitionsInitiate: Initiate requisition.
- GET /v2/requisitions/{id} — getV2RequisitionsById: Get chosen requisition.
- PUT /v2/requisitions/{id} — updateV2RequisitionsById: Update existing requisition. Do not change invariants – id, createdDate, facility, program, supplyingFacility, status,…
- PATCH /v2/requisitions/{id}/updatePatientsData — patchV2RequisitionsUpdatePatientsData: Update patients data.
- GET /v2/stockCardSummaries — getV2StockCardSummaries: Get summaries of stock cards, which contains SOH, product name, and other essential information. This will NOT return …

## validDestinations
- GET /validDestinations — getValidDestinations: Get a list of valid destinations of a program and a facility. The filtration works only if both params are provided. I…
- POST /validDestinations — createValidDestinations: Configure a destination to program and facility.
- DELETE /validDestinations/{id} — deleteValidDestinationsById: Remove a destination assignment from a valid destination assignment list.

## validReasons
- GET /validReasons — getValidReasons: Return a list of valid reasons based on program and facility type.
- POST /validReasons — createValidReasons: Configure a reason to program and facility type.
- DELETE /validReasons/{id} — deleteValidReasonsById: Remove a reason assignment from a valid reason assignment list.

## validSources
- GET /validSources — getValidSources: Get a list of valid sources of a program and a facility. The filtration works only if both params are provided. If no …
- POST /validSources — createValidSources: Configure a source to program and facility type.
- DELETE /validSources/{id} — deleteValidSourcesById: Remove a source assignment from a valid source assignment list.
