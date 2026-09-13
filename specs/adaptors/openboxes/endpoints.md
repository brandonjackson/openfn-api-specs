# OpenBoxes API (openboxes) v0.9.x

<!-- derived from openapi.json by `pnpm specs index openboxes` — do not edit by hand -->

base: https://{host}/{contextPath}, https://demo.openboxes.com/openboxes | auth: apiKey (cookie JSESSIONID) | 295 operations in 55 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Authentication
- POST /api/login — login: Authenticate and start a session
- POST /api/logout — logout: End the current session
- GET /api/status — getStatus: Application and database health
- POST /api/chooseLocation/{id} — chooseLocation: Switch the session to another location
- POST /api/chooseLocale/{id} — chooseLocale: Switch the session locale
- GET /api/getAppContext — getAppContext: Client bootstrap context (user, location, config, supported locales)
- GET /api/getMenuConfig — getMenuConfig: Navigation menu configuration for the current user
- GET /api/getRequestTypes — getRequestTypes: Supported requisition request types
- GET /api/getSupportLinks — getSupportLinks: Configured support links
- GET /api/getResettingInstanceCommand — getResettingInstanceCommand: Command used to reset a demo instance

## CatalogOptions
- GET /api/catalogOptions — catalogOptions: Catalog Options (selectOptionsApi.catalogOptions)

## CategoryOptions
- GET /api/categoryOptions — categoryOptions: Category Options (selectOptionsApi.categoryOptions)

## CombinedShipmentItems
- POST /api/combinedShipmentItems/findOrderItems — findOrderItemsCombinedShipmentItems: Find Order Items (combinedShipmentItemApi.findOrderItems)
- POST /api/combinedShipmentItems/addToShipment/{id} — addItemsToShipmentCombinedShipmentItemsAddToShipment: Add Items To Shipment (combinedShipmentItemApi.addItemsToShipment)
- POST /api/combinedShipmentItems/importTemplate/{id} — importTemplateCombinedShipmentItems: Import Template (combinedShipmentItemApi.importTemplate)
- GET /api/combinedShipmentItems/getProductsInOrders — getProductsInOrdersCombinedShipmentItems: Get Products In Orders (combinedShipmentItemApi.getProductsInOrders)
- GET /api/combinedShipmentItems/exportTemplate — exportTemplateCombinedShipmentItems: Export Template (combinedShipmentItemApi.exportTemplate)

## Config
- GET /api/config/data/demo — loadConfigDataDemo: Load (loadDataApi.load)

## Core
- POST /api/identifiers — createIdentifier: Generate an alphanumeric identifier
- GET /api/localizations — listLocalizations: All localized messages for a locale
- GET /api/localizations/{id} — getLocalization: Resolve one localized message
- GET /api/reasonCodes — listReasonCodes: List reason codes for an activity
- GET /api/reasonCodes/{id} — getReasonCode: Read a reason code

## Dashboard
- POST /api/dashboard/config — updateConfigDashboardConfig: Update Config (dashboardApi.updateConfig)
- GET /api/dashboard/{id}/config — configDashboard: Config (dashboardApi.config)
- GET /api/dashboard/{id}/subdashboardKeys — getSubdashboardKeysDashboardSubdashboardKeys: Get Subdashboard Keys (dashboardApi.getSubdashboardKeys)
- GET /api/dashboard/inventoryByLotAndBin — getInventoryByLotAndBinDashboardInventoryByLotAndBin: Get Inventory By Lot And Bin (dashboardApi.getInventoryByLotAndBin)
- GET /api/dashboard/inProgressShipments — getInProgressShipmentsDashboardInProgressShipments: Get In Progress Shipments (dashboardApi.getInProgressShipments)
- GET /api/dashboard/inProgressPutaways — getInProgressPutawaysDashboardInProgressPutaways: Get In Progress Putaways (dashboardApi.getInProgressPutaways)
- GET /api/dashboard/receivingBin — getReceivingBinDashboardReceivingBin: Get Receiving Bin (dashboardApi.getReceivingBin)
- GET /api/dashboard/itemsInventoried — getItemsInventoriedDashboardItemsInventoried: Get Items Inventoried (dashboardApi.getItemsInventoried)
- GET /api/dashboard/defaultBin — getDefaultBinDashboardDefaultBin: Get Default Bin (dashboardApi.getDefaultBin)
- GET /api/dashboard/expiredProductsInStock — getExpiredProductsInStockDashboardExpiredProductsInStock: Get Expired Products In Stock (dashboardApi.getExpiredProductsInStock)
- GET /api/dashboard/expirationSummary — getExpirationSummaryDashboardExpirationSummary: Get Expiration Summary (dashboardApi.getExpirationSummary)
- GET /api/dashboard/fillRate — getFillRateDashboardFillRate: Get Fill Rate (dashboardApi.getFillRate)
- GET /api/dashboard/fillRateSnapshot — getFillRateSnapshotDashboardFillRateSnapshot: Get Fill Rate Snapshot (dashboardApi.getFillRateSnapshot)
- GET /api/dashboard/fillRateDestinations — getFillRateDestinationsDashboardFillRateDestinations: Get Fill Rate Destinations (dashboardApi.getFillRateDestinations)
- GET /api/dashboard/inventorySummary — getInventorySummaryDashboardInventorySummary: Get Inventory Summary (dashboardApi.getInventorySummary)
- GET /api/dashboard/requisitionsByYear — getRequisitionsByYearDashboardRequisitionsByYear: Get Requisitions By Year (dashboardApi.getRequisitionsByYear)
- GET /api/dashboard/sentStockMovements — getSentStockMovementsDashboardSentStockMovements: Get Sent Stock Movements (dashboardApi.getSentStockMovements)
- GET /api/dashboard/receivedStockMovements — getReceivedStockMovementsDashboardReceivedStockMovements: Get Received Stock Movements (dashboardApi.getReceivedStockMovements)
- GET /api/dashboard/outgoingStock — getOutgoingStockDashboardOutgoingStock: Get Outgoing Stock (dashboardApi.getOutgoingStock)
- GET /api/dashboard/incomingStock — getIncomingStockDashboardIncomingStock: Get Incoming Stock (dashboardApi.getIncomingStock)
- GET /api/dashboard/discrepancy — getDiscrepancyDashboardDiscrepancy: Get Discrepancy (dashboardApi.getDiscrepancy)
- GET /api/dashboard/delayedShipments — getDelayedShipmentsDashboardDelayedShipments: Get Delayed Shipments (dashboardApi.getDelayedShipments)
- GET /api/dashboard/productWithNegativeInventory — getProductWithNegativeInventoryDashboardProductWithNegativeInventory: Get Product With Negative Inventory (dashboardApi.getProductWithNegativeInventory)
- GET /api/dashboard/lossCausedByExpiry — getLossCausedByExpiryDashboardLossCausedByExpiry: Get Loss Caused By Expiry (dashboardApi.getLossCausedByExpiry)
- GET /api/dashboard/productsInventoried — getProductsInventoriedDashboardProductsInventoried: Get Products Inventoried (dashboardApi.getProductsInventoried)
- GET /api/dashboard/percentageAdHoc — getPercentageAdHocDashboardPercentageAdHoc: Get Percentage Ad Hoc (dashboardApi.getPercentageAdHoc)
- GET /api/dashboard/stockOutLastMonth — getStockOutLastMonthDashboardStockOutLastMonth: Get Stock Out Last Month (dashboardApi.getStockOutLastMonth)
- GET /api/dashboard/openStockRequests — getOpenStockRequestsDashboardOpenStockRequests: Get Open Stock Requests (dashboardApi.getOpenStockRequests)
- GET /api/dashboard/requestsPendingApproval — getRequestsPendingApprovalDashboardRequestsPendingApproval: Get Requests Pending Approval (dashboardApi.getRequestsPendingApproval)
- GET /api/dashboard/inventoryValue — getInventoryValueDashboardInventoryValue: Get Inventory Value (dashboardApi.getInventoryValue)
- GET /api/dashboard/openPurchaseOrdersCount — getOpenPurchaseOrdersCountDashboardOpenPurchaseOrdersCount: Get Open Purchase Orders Count (dashboardApi.getOpenPurchaseOrdersCount)
- GET /api/dashboard/backdatedOutboundShipments — getBackdatedOutboundShipmentsDashboardBackdatedOutboundShipments: Get Backdated Outbound Shipments (dashboardApi.getBackdatedOutboundShipments)
- GET /api/dashboard/backdatedInboundShipments — getBackdatedInboundShipmentsDashboardBackdatedInboundShipments: Get Backdated Inbound Shipments (dashboardApi.getBackdatedInboundShipments)
- GET /api/dashboard/itemsWithBackdatedShipments — getItemsWithBackdatedShipmentsDashboardItemsWithBackdatedShipments: Get Items With Backdated Shipments (dashboardApi.getItemsWithBackdatedShipments)

## Facilities
- GET /api/facilities/{facilityId}/products/classifications — listFacilitiesProductsClassifications: List (productClassificationApi.list)
- GET /api/facilities/{facilityId}/inventory-levels — listFacilitiesInventoryLevels: List (inventoryLevelApi.list)
- GET /api/facilities/{facilityId}/inventories/import — indexFacilitiesInventoriesImport: Index (inventoryApi.index)
- GET /api/facilities/{facilityId}/inventories/reorderReport — getReorderReportFacilitiesInventoriesReorderReport: Get Reorder Report (inventoryApi.getReorderReport)
- GET /api/facilities/{facilityId}/cycle-counts/candidates — getCandidatesFacilitiesCycleCountsCandidates: Get Candidates (cycleCountApi.getCandidates)
- GET /api/facilities/{facilityId}/cycle-counts/requests/pending — getPendingCycleCountRequestsFacilitiesCycleCountsRequestsPending: Get Pending Cycle Count Requests (cycleCountApi.getPendingCycleCountRequests)
- POST /api/facilities/{facilityId}/cycle-counts/requests/batch — createRequestsFacilitiesCycleCountsRequestsBatch: Create Requests (cycleCountApi.createRequests)
- PATCH /api/facilities/{facilityId}/cycle-counts/requests/batch — updateRequestsFacilitiesCycleCountsRequestsBatch: Update Requests (cycleCountApi.updateRequests)
- DELETE /api/facilities/{facilityId}/cycle-counts/requests/batch — deleteRequestsFacilitiesCycleCountsRequestsBatch: Delete Requests (cycleCountApi.deleteRequests)
- POST /api/facilities/{facility}/cycle-counts/start/batch — startCycleCountFacilitiesCycleCountsStartBatch: Start Cycle Count (cycleCountApi.startCycleCount)
- POST /api/facilities/{facility}/cycle-counts/recount/start/batch — startRecountFacilitiesCycleCountsRecountStartBatch: Start Recount (cycleCountApi.startRecount)
- GET /api/facilities/{facility}/cycle-counts — listFacilitiesCycleCounts: List (cycleCountApi.list)
- DELETE /api/facilities/{facility}/cycle-counts/{cycleCountId} — deleteCycleCountFacilitiesCycleCounts: Delete Cycle Count (cycleCountApi.deleteCycleCount)
- POST /api/facilities/{facility}/cycle-counts/{cycleCountId}/count — submitCountFacilitiesCycleCountsCount: Submit Count (cycleCountApi.submitCount)
- POST /api/facilities/{facility}/cycle-counts/{cycleCountId}/recount — submitRecountFacilitiesCycleCountsRecount: Submit Recount (cycleCountApi.submitRecount)
- PATCH /api/facilities/{facility}/cycle-counts/items/{cycleCountItemId} — updateCycleCountItemFacilitiesCycleCountsItems: Update Cycle Count Item (cycleCountApi.updateCycleCountItem)
- DELETE /api/facilities/{facility}/cycle-counts/items/{cycleCountItemId} — deleteCycleCountItemFacilitiesCycleCountsItems: Delete Cycle Count Item (cycleCountApi.deleteCycleCountItem)
- POST /api/facilities/{facility}/cycle-counts/items/upload/count — uploadCycleCountItemsFacilitiesCycleCountsItemsUploadCount: Upload Cycle Count Items (cycleCountApi.uploadCycleCountItems)
- POST /api/facilities/{facility}/cycle-counts/items/upload/recount — uploadCycleCountRecountItemsFacilitiesCycleCountsItemsUploadRecount: Upload Cycle Count Recount Items (cycleCountApi.uploadCycleCountRecountItems)
- POST /api/facilities/{facility}/cycle-counts/{cycleCountId}/items — createCycleCountItemFacilitiesCycleCountsItems: Create Cycle Count Item (cycleCountApi.createCycleCountItem)
- POST /api/facilities/{facility}/cycle-counts/{cycleCountId}/items/batch — createCycleCountItemBatchFacilitiesCycleCountsItemsBatch: Create Cycle Count Item Batch (cycleCountApi.createCycleCountItemBatch)
- PATCH /api/facilities/{facility}/cycle-counts/{cycleCountId}/items/batch — updateCycleCountItemBatchFacilitiesCycleCountsItemsBatch: Update Cycle Count Item Batch (cycleCountApi.updateCycleCountItemBatch)
- POST /api/facilities/{facility}/cycle-counts/items/batch — createCycleCountItemBatchFacilitiesCycleCountsItemsBatch2: Create Cycle Count Item Batch (cycleCountApi.createCycleCountItemBatch)
- PATCH /api/facilities/{facility}/cycle-counts/items/batch — updateCycleCountItemBatchFacilitiesCycleCountsItemsBatch2: Update Cycle Count Item Batch (cycleCountApi.updateCycleCountItemBatch)
- POST /api/facilities/{facility}/cycle-counts/{cycleCountId}/refresh — refreshCycleCountFacilitiesCycleCountsRefresh: Refresh Cycle Count (cycleCountApi.refreshCycleCount)
- POST /api/facilities/{facility}/inventory/record-stock/save — saveRecordStockFacilitiesInventoryRecordStockSave: Save Record Stock (recordStockApi.saveRecordStock)

## Fulfillments
- POST /api/fulfillments — saveFulfillments: Save (fulfillmentApi.save)
- POST /api/fulfillments/validate — validateFulfillments: Validate (fulfillmentApi.validate)

## Generic
- GET /api/generic/{resource} — listGenericResources: List instances of a domain resource
- POST /api/generic/{resource} — createGenericResources: Create one or many instances of a domain resource
- GET /api/generic/{resource}/search — searchGenericResources: Search instances of a domain resource
- POST /api/generic/{resource}/search — searchGenericResourcesPost: Search instances of a domain resource
- GET /api/generic/{resource}/{id} — getGenericResource: Read one instance of a domain resource
- POST /api/generic/{resource}/{id} — updateGenericResource: Update one instance of a domain resource
- PUT /api/generic/{resource}/{id} — replaceGenericResource: Update one instance of a domain resource
- DELETE /api/generic/{resource}/{id} — deleteGenericResource: Delete one instance of a domain resource
- GET /api/{resourcePlural} — listResources: List instances of any REST resource
- POST /api/{resourcePlural} — createResource: Create an instance of any REST resource
- GET /api/{resourcePlural}/{id} — getResource: Read an instance of any REST resource
- POST /api/{resourcePlural}/{id} — updateResource: Update an instance of any REST resource
- PUT /api/{resourcePlural}/{id} — replaceResource: Update an instance of any REST resource
- DELETE /api/{resourcePlural}/{id} — deleteResource: Delete an instance of any REST resource
- GET /api/{resourcePlural}/{id}/status — getResourceStatus: Read the status of any REST resource
- POST /api/{resourcePlural}/{id}/status — updateResourceStatus: Transition the status of any REST resource
- DELETE /api/{resourcePlural}/{id}/status — deleteResourceStatus: Roll back the status of any REST resource

## GlAccountOptions
- GET /api/glAccountOptions — glAccountOptions: Gl Account Options (selectOptionsApi.glAccountOptions)

## HandlingRequirementsOptions
- GET /api/handlingRequirementsOptions — handlingRequirementsOptions: Handling Requirements Options (selectOptionsApi.handlingRequirementsOptions)

## Helpscout
- GET /api/helpscout/configuration — configurationHelpscout: Configuration (helpScoutApi.configuration)

## Inbound
- GET /api/putaways — listPutawayCandidates: List putaway candidates for a facility
- POST /api/putaways — createPutaway: Create, update, split or complete a putaway
- GET /api/putaways/{id} — getPutaway: Read a putaway
- GET /api/partialReceiving/{id} — getPartialReceipt: Get the partial-receipt candidates for a shipment
- POST /api/partialReceiving/{id} — savePartialReceipt: Save, complete or roll back a partial receipt

## InternalLocations
- GET /api/internalLocations/receiving — listReceivingInternalLocationsReceiving: List Receiving (internalLocationApi.listReceiving)
- GET /api/internalLocations/search — searchInternalLocations: Search (internalLocationApi.search)

## Inventories
- GET /api/inventories/expirationHistoryReport — getExpirationHistoryReportInventoriesExpirationHistoryReport: Get Expiration History Report (inventoryApi.getExpirationHistoryReport)

## InvoiceItems
- POST /api/invoiceItems/{id}/validation — validateInvoiceItemInvoiceItemsValidation: Validate Invoice Item (invoiceApi.validateInvoiceItem)

## InvoiceStatuses
- GET /api/invoiceStatuses — statusOptionsInvoiceStatuses: Status Options (invoiceApi.statusOptions)

## InvoiceTypeCodes
- GET /api/invoiceTypeCodes — invoiceTypeCodes: Invoice Type Codes (invoiceApi.invoiceTypeCodes)

## Invoices
- GET /api/invoices/{id}/items — getInvoiceItemsInvoicesItems: Get Invoice Items (invoiceApi.getInvoiceItems)
- POST /api/invoices/{id}/items — updateItemsInvoicesItems: Update Items (invoiceApi.updateItems)
- POST /api/invoices/{id}/invoiceItemCandidates — getInvoiceItemCandidatesInvoicesInvoiceItemCandidates: Get Invoice Item Candidates (invoiceApi.getInvoiceItemCandidates)
- GET /api/invoices/{id}/orders — getOrderNumbersInvoicesOrders: Get Order Numbers (invoiceApi.getOrderNumbers)
- GET /api/invoices/{id}/shipments — getShipmentNumbersInvoicesShipments: Get Shipment Numbers (invoiceApi.getShipmentNumbers)
- DELETE /api/invoices/{id}/removeItem — removeItemInvoices: Remove Item (invoiceApi.removeItem)
- POST /api/invoices/{id}/submit — submitInvoiceInvoicesSubmit: Submit Invoice (invoiceApi.submitInvoice)
- POST /api/invoices/{id}/post — postInvoiceInvoicesPost: Post Invoice (invoiceApi.postInvoice)
- GET /api/invoices/{id}/prepaymentItems — getPrepaymentItemsInvoicesPrepaymentItems: Get Prepayment Items (invoiceApi.getPrepaymentItems)

## LoadData
- GET /api/loadData/listOfDemoData — listOfDemoDataLoadData: List Of Demo Data (loadDataApi.listOfDemoData)

## LocationGroups
- GET /api/locationGroups — listLocationGroups: List (locationGroupApi.list)
- POST /api/locationGroups — createLocationGroups: Create (locationGroupApi.create)
- GET /api/locationGroups/{id} — getLocationGroups: Read (locationGroupApi.read)
- PUT /api/locationGroups/{id} — updateLocationGroups: Update (locationGroupApi.update)
- DELETE /api/locationGroups/{id} — deleteLocationGroups: Delete (locationGroupApi.delete)

## Locations
- GET /api/locations — listLocations: List locations
- POST /api/locations — createLocation: Create a location
- GET /api/locations/{id} — getLocation: Read a location
- POST /api/locations/{id} — updateLocation: Update a location
- PUT /api/locations/{id} — replaceLocation: Update a location (PUT form)
- DELETE /api/locations/{id} — deleteLocation: Delete a location
- GET /api/internalLocations — listInternalLocations: List internal (bin) locations of a facility
- GET /api/internalLocations/{id} — getInternalLocation: Read an internal location
- GET /api/binLocations — listBinLocations: List bin locations, filtered by parent location
- GET /api/binLocations/{id} — getBinLocation: Read a bin location
- GET /api/locations/locationTypes — locationTypesLocations: Location Types (locationApi.locationTypes)
- GET /api/locations/supportedActivities — supportedActivitiesLocations: Supported Activities (locationApi.supportedActivities)
- GET /api/locations/binLocations/template — downloadBinLocationTemplateLocationsBinLocationsTemplate: Download Bin Location Template (locationApi.downloadBinLocationTemplate)
- POST /api/locations/{id}/binLocations/import — importBinLocationsLocationsBinLocationsImport: Import Bin Locations (locationApi.importBinLocations)
- GET /api/locations/template — downloadTemplateLocationsTemplate: Download Template (locationApi.downloadTemplate)
- POST /api/locations/importCsv — importCsvLocations: Import Csv (locationApi.importCsv)
- GET /api/locations/{id}/{action} — indexLocations: Index (locationApi.index)

## OrderNumberOptions
- GET /api/orderNumberOptions — getOrderOptionsOrderNumberOptions: Get Order Options (combinedShipmentItemApi.getOrderOptions)

## OrderSummaryStatus
- GET /api/orderSummaryStatus — statusOptionsOrderSummaryStatus: Status Options (purchaseOrderApi.statusOptions)

## PartialReceiving
- GET /api/partialReceiving — listPartialReceiving: List (partialReceivingApi.list)
- POST /api/partialReceiving — createPartialReceiving: Create (partialReceivingApi.create)
- POST /api/partialReceiving/importCsv/{id} — importCsvPartialReceiving: Import Csv (partialReceivingApi.importCsv)
- POST /api/partialReceiving/exportCsv/{id} — exportCsvPartialReceiving: Export Csv (partialReceivingApi.exportCsv)

## PaymentTermOptions
- GET /api/paymentTermOptions — paymentTermOptions: Payment Term Options (selectOptionsApi.paymentTermOptions)

## Picklists
- DELETE /api/picklists/{id}/items — clearPicklistPicklistsItems: Clear Picklist (picklistApi.clearPicklist)

## PreferenceTypeOptions
- GET /api/preferenceTypeOptions — preferenceTypeOptions: Preference Type Options (selectOptionsApi.preferenceTypeOptions)

## PrepaymentInvoiceItems
- POST /api/prepaymentInvoiceItems/{id} — updatePrepaymentInvoiceItems: Update (prepaymentInvoiceItemApi.update)
- DELETE /api/prepaymentInvoiceItems/{id} — deletePrepaymentInvoiceItems: Delete (prepaymentInvoiceItemApi.delete)

## PrepaymentInvoices
- POST /api/prepaymentInvoices/{id}/invoiceItems — updateItemsPrepaymentInvoicesInvoiceItems: Update Items (prepaymentInvoiceApi.updateItems)

## ProductGroupOptions
- GET /api/productGroupOptions — productGroupOptions: Product Group Options (selectOptionsApi.productGroupOptions)

## ProductSupplierAttributes
- POST /api/productSupplierAttributes/batch — updateAttributesProductSupplierAttributesBatch: Update Attributes (productSupplierAttributeApi.updateAttributes)

## ProductSupplierPreferences
- POST /api/productSupplierPreferences/batch — createOrUpdateBatchProductSupplierPreferencesBatch: Create Or Update Batch (productSupplierPreferenceApi.createOrUpdateBatch)

## ProductSuppliers
- GET /api/productSuppliers/export — exportProductSuppliers: Export (productSupplierApi.export)

## Products
- GET /api/products — listProducts: List products
- POST /api/products — createProduct: Create a product
- GET /api/products/search — searchProducts: Type-ahead product search
- GET /api/products/{id} — getProduct: Read a product
- POST /api/products/{id} — updateProduct: Update a product
- DELETE /api/products/{id} — deleteProduct: Delete a product
- GET /api/products/{id}/availableItems — listProductAvailableItems: Available lots of a product at a location
- GET /api/products/{id}/availableBins — listProductAvailableBins: Available bin locations holding a product
- GET /api/products/{id}/associatedProducts — listAssociatedProducts: Substitutes and other associations for a product
- GET /api/products/{productId}/inventoryItems/{lotNumber} — getProductInventoryItem: Read one lot of a product by lot number
- GET /api/categories — listCategories: List product categories
- POST /api/categories — createCategory: Create a category
- GET /api/categories/{id} — getCategory: Read a category
- POST /api/categories/{id} — updateCategory: Update a category
- PUT /api/categories/{id} — replaceCategory: Update a category (PUT form)
- DELETE /api/categories/{id} — deleteCategory: Delete a category
- GET /api/products/{id}/{action} — indexProducts: Index (productApi.index)
- GET /api/products/getLatestInventoryCountDate — getLatestInventoryCountDateProducts: Get Latest Inventory Count Date (productApi.getLatestInventoryCountDate)
- POST /api/products/import — importCsvProductsImport: Import Csv (productApi.importCsv)
- GET /api/products/availableItems — availableItemsProducts: Available Items (productApi.availableItems)
- GET /api/products/inventoryItems/lotNumbersWithExpirationDate — getLotNumbersWithExpirationDateProductsInventoryItemsLotNumbersWithExpirationDate: Get Lot Numbers With Expiration Date (productApi.getLotNumbersWithExpirationDate)

## ProductsConfiguration
- POST /api/productsConfiguration/importCategories — importCategoriesProductsConfiguration: Import Categories (productsConfigurationApi.importCategories)
- POST /api/productsConfiguration/importCategoryCsv — importCategoryCsvProductsConfiguration: Import Category Csv (productsConfigurationApi.importCategoryCsv)
- GET /api/productsConfiguration/downloadCategoryTemplate — downloadCategoryTemplateProductsConfiguration: Download Category Template (productsConfigurationApi.downloadCategoryTemplate)
- GET /api/productsConfiguration/categoryOptions — categoryOptionsProductsConfiguration: Category Options (productsConfigurationApi.categoryOptions)
- GET /api/productsConfiguration/productOptions — productOptionsProductsConfiguration: Product Options (productsConfigurationApi.productOptions)
- POST /api/productsConfiguration/importProducts — importProductsProductsConfiguration: Import Products (productsConfigurationApi.importProducts)
- GET /api/productsConfiguration/categoriesCount — getCategoriesCountProductsConfigurationCategoriesCount: Get Categories Count (productsConfigurationApi.getCategoriesCount)
- GET /api/productsConfiguration/downloadCategories — downloadCategoriesProductsConfiguration: Download Categories (productsConfigurationApi.downloadCategories)

## PurchaseOrders
- POST /api/purchaseOrders/{id}/rollback — rollbackPurchaseOrders: Rollback (purchaseOrderApi.rollback)
- GET /api/purchaseOrders — listPurchaseOrders: List (purchaseOrderApi.list)
- GET /api/purchaseOrders/{id} — getPurchaseOrders: Read (purchaseOrderApi.read)
- DELETE /api/purchaseOrders/{id} — deletePurchaseOrders: Delete (purchaseOrderApi.delete)

## PutawayItems
- DELETE /api/putawayItems/{id} — removingItemPutawayItems: Removing Item (putawayItemApi.removingItem)

## RatingTypeCodeOptions
- GET /api/ratingTypeCodeOptions — ratingTypeCodeOptions: Rating Type Code Options (selectOptionsApi.ratingTypeCodeOptions)

## Replenishments
- GET /api/replenishments/statusOptions — statusOptionsReplenishments: Status Options (replenishmentApi.statusOptions)
- GET /api/replenishments/{id} — getReplenishments: Read (replenishmentApi.read)
- POST /api/replenishments/{id} — updateReplenishments: Update (replenishmentApi.update)
- PUT /api/replenishments/{id} — updateReplenishments2: Update (replenishmentApi.update)
- DELETE /api/replenishments/{id}/removeItem — removeItemReplenishments: Remove Item (replenishmentApi.removeItem)
- GET /api/replenishments/{id}/picklists — getPicklistReplenishmentsPicklists: Get Picklist (replenishmentApi.getPicklist)
- POST /api/replenishments/{id}/picklists — createPicklistReplenishmentsPicklists: Create Picklist (replenishmentApi.createPicklist)
- PUT /api/replenishments/{id}/picklists — updatePicklistReplenishmentsPicklists: Update Picklist (replenishmentApi.updatePicklist)
- DELETE /api/replenishments/{id}/picklists — deletePicklistReplenishmentsPicklists: Delete Picklist (replenishmentApi.deletePicklist)
- POST /api/replenishments/{id}/picklistItem — createPicklistItemReplenishmentsPicklistItem: Create Picklist Item (replenishmentApi.createPicklistItem)

## Reports
- GET /api/reports/cycle-count-details — getCycleCountDetailsReportsCycleCountDetails2: Get Cycle Count Details (cycleCountApi.getCycleCountDetails)
- POST /api/reports/cycle-count-details — getCycleCountDetailsReportsCycleCountDetails: Get Cycle Count Details (cycleCountApi.getCycleCountDetails)
- GET /api/reports/cycle-count-summary — getCycleCountSummaryReportsCycleCountSummary2: Get Cycle Count Summary (cycleCountApi.getCycleCountSummary)
- POST /api/reports/cycle-count-summary — getCycleCountSummaryReportsCycleCountSummary: Get Cycle Count Summary (cycleCountApi.getCycleCountSummary)
- GET /api/reports/inventory-audit-details — getInventoryAuditDetailsReportsInventoryAuditDetails2: Get Inventory Audit Details (inventoryAuditReport.getInventoryAuditDetails)
- POST /api/reports/inventory-audit-details — getInventoryAuditDetailsReportsInventoryAuditDetails: Get Inventory Audit Details (inventoryAuditReport.getInventoryAuditDetails)
- GET /api/reports/inventory-audit-summary — getInventoryAuditSummaryReportsInventoryAuditSummary2: Get Inventory Audit Summary (inventoryAuditReport.getInventoryAuditSummary)
- POST /api/reports/inventory-audit-summary — getInventoryAuditSummaryReportsInventoryAuditSummary: Get Inventory Audit Summary (inventoryAuditReport.getInventoryAuditSummary)
- GET /api/reports/inventory-transactions-summary — getInventoryTransactionsSummaryReportsInventoryTransactionsSummary: Get Inventory Transactions Summary (inventoryTransactionSummaryApi.getInventoryTransactionsSummary)
- GET /api/reports/indicators/productsInventoried — getProductsInventoriedReportsIndicatorsProductsInventoried: Get Products Inventoried (indicatorApi.getProductsInventoried)
- GET /api/reports/indicators/inventoryAccuracy — getInventoryAccuracyReportsIndicatorsInventoryAccuracy: Get Inventory Accuracy (indicatorApi.getInventoryAccuracy)
- GET /api/reports/indicators/inventoryShrinkage — getInventoryShrinkageReportsIndicatorsInventoryShrinkage: Get Inventory Shrinkage (indicatorApi.getInventoryShrinkage)

## Requirements
- GET /api/requirements — requirements: Requirements (replenishmentApi.requirements)
- POST /api/requirements — createRequirements: Create (replenishmentApi.create)

## ResettingInstance
- GET /api/resettingInstance/command — getResettingInstanceCommand2: Get Resetting Instance Command (api.getResettingInstanceCommand)

## StockMovementItems
- GET /api/stockMovementItems/{id} — getStockMovementItems: Read (stockMovementItemApi.read)
- GET /api/stockMovementItems — listStockMovementItems2: List (stockMovementItemApi.list)
- GET /api/stockMovementItems/{id}/details — detailsStockMovementItems: Details (stockMovementItemApi.details)
- POST /api/stockMovementItems/{id}/updatePicklist — updatePicklistStockMovementItems: Update Picklist (stockMovementItemApi.updatePicklist)
- DELETE /api/stockMovementItems/{id}/picklistItems — revertPickStockMovementItemsPicklistItems: Revert Pick (stockMovementItemApi.revertPick)
- POST /api/stockMovementItems/{id}/createPicklist — createPicklistStockMovementItems: Create Picklist (stockMovementItemApi.createPicklist)
- POST /api/stockMovementItems/{id}/clearPicklist — clearPicklistStockMovementItems: Clear Picklist (stockMovementItemApi.clearPicklist)
- POST /api/stockMovementItems/{id}/substituteItem — substituteItemStockMovementItems: Substitute Item (stockMovementItemApi.substituteItem)
- POST /api/stockMovementItems/{id}/revertItem — revertItemStockMovementItems: Revert Item (stockMovementItemApi.revertItem)
- POST /api/stockMovementItems/{id}/cancelItem — cancelItemStockMovementItems: Cancel Item (stockMovementItemApi.cancelItem)
- DELETE /api/stockMovementItems/{id}/removeItem — eraseItemStockMovementItemsRemoveItem: Erase Item (stockMovementItemApi.eraseItem)

## StockMovements
- GET /api/stockMovements — listStockMovements: List stock movements
- POST /api/stockMovements — createStockMovement: Create a stock movement
- GET /api/stockMovements/{id} — getStockMovement: Read a stock movement
- POST /api/stockMovements/{id} — updateStockMovement: Update a stock movement or its line items
- DELETE /api/stockMovements/{id} — deleteStockMovement: Delete a stock movement
- GET /api/stockMovements/{id}/status — getStockMovementStatus: Read the status of a stock movement
- POST /api/stockMovements/{id}/status — updateStockMovementStatus: Transition a stock movement to another status
- DELETE /api/stockMovements/{id}/status — rollbackStockMovementStatus: Roll back the current status of a stock movement
- GET /api/stockMovements/{id}/stockMovementItems — listStockMovementItems: List the line items of a stock movement
- POST /api/stockMovementItems/{id} — updateStockMovementItem: Update one stock movement line item (picking)
- GET /api/stockMovements/shipmentStatusCodes — shipmentStatusCodesOptionsStockMovementsShipmentStatusCodes: Shipment Status Codes Options (selectOptionsApi.shipmentStatusCodesOptions)
- GET /api/stockMovements/{id}/substitutionItems — getSubstitutionItemsStockMovementsSubstitutionItems: Get Substitution Items (stockMovementItemApi.getSubstitutionItems)
- DELETE /api/stockMovements/{id}/removeAllItems — removeAllItemsStockMovements: Remove All Items (stockMovementApi.removeAllItems)
- POST /api/stockMovements/{id}/reviseItems — reviseItemsStockMovements: Revise Items (stockMovementApi.reviseItems)
- POST /api/stockMovements/{id}/updateItems — updateItemsStockMovements: Update Items (stockMovementApi.updateItems)
- POST /api/stockMovements/{id}/updateInventoryItems — updateInventoryItemsStockMovements: Update Inventory Items (stockMovementApi.updateInventoryItems)
- POST /api/stockMovements/{id}/updateShipmentItems — updateShipmentItemsStockMovements: Update Shipment Items (stockMovementApi.updateShipmentItems)
- POST /api/stockMovements/{id}/updateRequisition — updateRequisitionStockMovements: Update Requisition (stockMovementApi.updateRequisition)
- POST /api/stockMovements/{id}/updateShipment — updateShipmentStockMovements: Update Shipment (stockMovementApi.updateShipment)
- GET /api/stockMovements/{id}/validatePicklist — validatePicklistStockMovements: Validate Picklist (stockMovementApi.validatePicklist)
- POST /api/stockMovements/importPickListItems/{id} — importPickListItemsStockMovements: Import Pick List Items (picklist.importPickListItems)
- POST /api/stockMovements/importPackListItems/{id} — importPackListItemsStockMovements: Import Pack List Items (packListApi.importPackListItems)
- GET /api/stockMovements/exportPickListItems/{id} — exportPicklistItemsStockMovements: Export Picklist Items (picklist.exportPicklistItems)
- GET /api/stockMovements/picklistTemplate/{id} — exportPicklistTemplateStockMovementsPicklistTemplate: Export Picklist Template (picklist.exportPicklistTemplate)
- GET /api/stockMovements/packlistTemplate/{id} — exportPackTemplateStockMovementsPacklistTemplate: Export Pack Template (packListApi.exportPackTemplate)
- GET /api/stockMovements/createPickList/{id} — createPickListStockMovements: Create Pick List (stockMovementApi.createPickList)
- GET /api/stockMovements/pendingRequisitionDetails — getPendingRequisitionDetailsStockMovementsPendingRequisitionDetails: Get Pending Requisition Details (stockMovementApi.getPendingRequisitionDetails)
- GET /api/stockMovements/shippedItems — shippedItemsStockMovements: Shipped Items (stockMovementApi.shippedItems)
- GET /api/stockMovements/pendingRequisitionItems — pendingRequisitionItemsStockMovements: Pending Requisition Items (stockMovementApi.pendingRequisitionItems)
- POST /api/stockMovements/{id}/updateAdjustedItems — updateAdjustedItemsStockMovements: Update Adjusted Items (stockMovementApi.updateAdjustedItems)
- POST /api/stockMovements/createCombinedShipments — createCombinedShipmentsStockMovements: Create Combined Shipments (stockMovementApi.createCombinedShipments)
- GET /api/stockMovements/requisitionsStatusCodes — requisitionStatusCodesStockMovementsRequisitionsStatusCodes: Requisition Status Codes (stockMovementApi.requisitionStatusCodes)
- PUT /api/stockMovements/{id}/rollbackApproval — rollbackApprovalStockMovements: Rollback Approval (stockMovementApi.rollbackApproval)
- GET /api/stockMovements/packingList/template — downloadPackingListTemplateStockMovementsPackingListTemplate: Download Packing List Template (stockMovementApi.downloadPackingListTemplate)
- GET /api/stockMovements/{id}/documents — getDocumentsStockMovementsDocuments: Get Documents (stockMovementApi.getDocuments)

## StockTransferItems
- DELETE /api/stockTransferItems/{id} — removeItemStockTransferItems: Remove Item (stockTransferApi.removeItem)

## StockTransfers
- GET /api/stockTransfers/statusOptions — statusOptionsStockTransfers: Status Options (stockTransferApi.statusOptions)
- GET /api/stockTransfers/candidates — stockTransferCandidatesStockTransfersCandidates: Stock Transfer Candidates (stockTransferApi.stockTransferCandidates)
- POST /api/stockTransfers/candidates — returnCandidatesStockTransfersCandidates: Return Candidates (stockTransferApi.returnCandidates)
- POST /api/stockTransfers/{id}/sendShipment — sendShipmentStockTransfers: Send Shipment (stockTransferApi.sendShipment)
- POST /api/stockTransfers/{id}/rollback — rollbackStockTransfers: Rollback (stockTransferApi.rollback)
- DELETE /api/stockTransfers/{id}/removeAllItems — removeAllItemsStockTransfers: Remove All Items (stockTransferApi.removeAllItems)

## StocklistItems
- GET /api/stocklistItems/availableStocklists — availableStocklistsStocklistItems: Available Stocklists (stocklistItemApi.availableStocklists)
- GET /api/stocklistItems/{id} — getStocklistItems: Read (stocklistItemApi.read)
- POST /api/stocklistItems/{id} — saveStocklistItems: Save (stocklistItemApi.save)
- PUT /api/stocklistItems/{id} — updateStocklistItems: Update (stocklistItemApi.update)
- DELETE /api/stocklistItems/{id} — removeStocklistItems: Remove (stocklistItemApi.remove)

## Stocklists
- GET /api/stocklists — listStocklists: List stock lists (requisition templates)
- GET /api/stocklists/{id} — getStocklist: Read a stock list
- POST /api/stocklists/sendMail/{id} — sendMailStocklists: Send Mail (stocklistApi.sendMail)
- GET /api/stocklists/{id}/export — exportStocklists: Export (stocklistApi.export)
- POST /api/stocklists/{id}/clone — cloneStocklists: Clone (stocklistApi.clone)
- POST /api/stocklists/{id}/publish — publishStocklists: Publish (stocklistApi.publish)
- POST /api/stocklists/{id}/unpublish — unpublishStocklists: Unpublish (stocklistApi.unpublish)
- POST /api/stocklists/{id}/clear — clearStocklists: Clear (stocklistApi.clear)

## SupportLinks
- GET /api/supportLinks — getSupportLinks2: Get Support Links (api.getSupportLinks)

## TagOptions
- GET /api/tagOptions — tagOptions: Tag Options (selectOptionsApi.tagOptions)

## UnitOfMeasure
- GET /api/unitOfMeasure/currencies — currenciesUnitOfMeasure: Currencies (unitOfMeasureApi.currencies)

## UnitOfMeasures
- GET /api/unitOfMeasures/options — uomOptionsUnitOfMeasuresOptions: Uom Options (unitOfMeasureApi.uomOptions)

## Users
- GET /api/users — usersOptionsUsers: Users Options (selectOptionsApi.usersOptions)
