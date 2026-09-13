# DHIS2 API (dhis2) v2.42

<!-- derived from openapi.json by `pnpm specs index dhis2` — do not edit by hand -->

base: http://play.im.dhis2.org/stable-2-43-1/ | auth: http/basic | 2574 operations in 182 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## (root)
- GET / — Index.getIndexWithSlash
- GET /api — Index.getIndex

## 2fa
- POST /api/2fa/disable — TwoFactor.disable
- POST /api/2fa/disabled — TwoFactor.disable2
- POST /api/2fa/enable — TwoFactor.enable
- GET /api/2fa/enabled — TwoFactor.isEnabled
- POST /api/2fa/enabled — TwoFactor.enable2
- POST /api/2fa/enrollEmail2FA — TwoFactor.enrollEmail2FA
- POST /api/2fa/enrollTOTP2FA — TwoFactor.enrollTOTP2FA
- GET /api/2fa/qrCode — TwoFactor.generateQRCode (deprecated)
- GET /api/2fa/qrCodeJson — TwoFactor.qrCodeJson
- GET /api/2fa/qrCodePng — TwoFactor.qrCodePng

## account
- POST /api/account/ — Account.createAccount (deprecated)
- GET /api/account/linkedAccounts — Account.getLinkedAccounts
- GET /api/account/listSessions — Account.listSessions
- GET /api/account/password — Account.validatePasswordGet
- POST /api/account/password — Account.updatePassword
- POST /api/account/recovery — Account.recoverAccount (deprecated)
- POST /api/account/restore — Account.restoreAccount (deprecated)
- POST /api/account/sendEmailVerification — Account.sendEmailVerification
- GET /api/account/username — Account.validateUserNameGet
- POST /api/account/validatePassword — Account.validatePasswordPost
- POST /api/account/validateUsername — Account.validateUserNameGetPost
- GET /api/account/verifyEmail — Account.verifyEmail

## aggregateDataExchanges
- GET /api/aggregateDataExchanges/ — AggregateDataExchange.getObjectList: List all AggregateDataExchanges
- POST /api/aggregateDataExchanges/ — AggregateDataExchange.postJsonObject
- GET /api/aggregateDataExchanges/#getObjectListCsv — AggregateDataExchange.getObjectListCsv
- POST /api/aggregateDataExchanges/exchange — AggregateDataExchange.runDataExchange
- GET /api/aggregateDataExchanges/gist — AggregateDataExchange.getObjectListGist+getObjectListGistAsCsv
- GET /api/aggregateDataExchanges/gist.csv — AggregateDataExchange.getObjectListGistAsCsv
- PATCH /api/aggregateDataExchanges/sharing — AggregateDataExchange.bulkSharing
- GET /api/aggregateDataExchanges/{uid} — AggregateDataExchange.getObject: View a AggregateDataExchange
- PUT /api/aggregateDataExchanges/{uid} — AggregateDataExchange.putJsonObject
- PATCH /api/aggregateDataExchanges/{uid} — AggregateDataExchange.patchObject
- DELETE /api/aggregateDataExchanges/{uid} — AggregateDataExchange.deleteObject: Deletes the AggregateDataExchange provided by ID.
- POST /api/aggregateDataExchanges/{uid}/exchange — AggregateDataExchange.runDataExchangeByUid
- GET /api/aggregateDataExchanges/{uid}/gist — AggregateDataExchange.getObjectGist+getObjectGistAsCsv
- GET /api/aggregateDataExchanges/{uid}/gist.csv — AggregateDataExchange.getObjectGistAsCsv
- PUT /api/aggregateDataExchanges/{uid}/sharing — AggregateDataExchange.setSharing
- GET /api/aggregateDataExchanges/{uid}/sourceData — AggregateDataExchange.getSourceData
- GET /api/aggregateDataExchanges/{uid}/sourceDataValueSets — AggregateDataExchange.getSourceDataValueSets
- PUT /api/aggregateDataExchanges/{uid}/translations — AggregateDataExchange.replaceTranslations
- GET /api/aggregateDataExchanges/{uid}/{property} — AggregateDataExchange.getObjectProperty
- POST /api/aggregateDataExchanges/{uid}/{property} — AggregateDataExchange.addCollectionItemsJson
- PUT /api/aggregateDataExchanges/{uid}/{property} — AggregateDataExchange.replaceCollectionItemsJson
- DELETE /api/aggregateDataExchanges/{uid}/{property} — AggregateDataExchange.deleteCollectionItemsJson
- GET /api/aggregateDataExchanges/{uid}/{property}/gist — AggregateDataExchange.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/aggregateDataExchanges/{uid}/{property}/gist.csv — AggregateDataExchange.getObjectPropertyGistAsCsv
- POST /api/aggregateDataExchanges/{uid}/{property}/{itemId} — AggregateDataExchange.addCollectionItem
- DELETE /api/aggregateDataExchanges/{uid}/{property}/{itemId} — AggregateDataExchange.deleteCollectionItem

## analytics
- GET /api/analytics — Analytics.getJson
- GET /api/analytics.xml — Analytics.getXml
- GET /api/analytics/dataValueSet.csv — Analytics.getDataValueSetCsv
- GET /api/analytics/dataValueSet.json — Analytics.getDataValueSetJson
- GET /api/analytics/dataValueSet.xml — Analytics.getDataValueSetXml
- GET /api/analytics/debug/sql — Analytics.getDebugSql
- GET /api/analytics/enrollments/aggregate/dimensions — EnrollmentAggregateAnalytics.getAggregateDimensions
- GET /api/analytics/enrollments/aggregate/{program} — EnrollmentAggregateAnalytics.getAggregateJson
- GET /api/analytics/enrollments/aggregate/{program}.csv — EnrollmentAggregateAnalytics.getAggregateCsv
- GET /api/analytics/enrollments/aggregate/{program}.html — EnrollmentAggregateAnalytics.getAggregateHtml
- GET /api/analytics/enrollments/aggregate/{program}.html+css — EnrollmentAggregateAnalytics.getAggregateHtmlCss
- GET /api/analytics/enrollments/aggregate/{program}.xls — EnrollmentAggregateAnalytics.getAggregateXls
- GET /api/analytics/enrollments/aggregate/{program}.xlsx — EnrollmentAggregateAnalytics.getAggregateXlsx
- GET /api/analytics/enrollments/aggregate/{program}.xml — EnrollmentAggregateAnalytics.getAggregateXml
- GET /api/analytics/enrollments/aggregate/{program}/explain — EnrollmentAggregateAnalytics.getExplainAggregateJson
- GET /api/analytics/enrollments/query/dimensions — EnrollmentQueryAnalytics.getQueryDimensions
- GET /api/analytics/enrollments/query/{program} — EnrollmentQueryAnalytics.getQueryJson
- GET /api/analytics/enrollments/query/{program}.csv — EnrollmentQueryAnalytics.getQueryCsv
- GET /api/analytics/enrollments/query/{program}.html — EnrollmentQueryAnalytics.getQueryHtml
- GET /api/analytics/enrollments/query/{program}.html+css — EnrollmentQueryAnalytics.getQueryHtmlCss
- GET /api/analytics/enrollments/query/{program}.xls — EnrollmentQueryAnalytics.getQueryXls
- GET /api/analytics/enrollments/query/{program}.xlsx — EnrollmentQueryAnalytics.getQueryXlsx
- GET /api/analytics/enrollments/query/{program}.xml — EnrollmentQueryAnalytics.getQueryXml
- GET /api/analytics/enrollments/query/{program}/explain — EnrollmentQueryAnalytics.getExplainQueryJson
- GET /api/analytics/events/aggregate/dimensions — EventAggregateAnalytics.getAggregateDimensions
- GET /api/analytics/events/aggregate/{program} — EventAggregateAnalytics.getAggregateJson
- GET /api/analytics/events/aggregate/{program}.csv — EventAggregateAnalytics.getAggregateCsv
- GET /api/analytics/events/aggregate/{program}.html — EventAggregateAnalytics.getAggregateHtml
- GET /api/analytics/events/aggregate/{program}.html+css — EventAggregateAnalytics.getAggregateHtmlCss
- GET /api/analytics/events/aggregate/{program}.xls — EventAggregateAnalytics.getAggregateXls
- GET /api/analytics/events/aggregate/{program}.xlsx — EventAggregateAnalytics.getAggregateXlsx
- GET /api/analytics/events/aggregate/{program}.xml — EventAggregateAnalytics.getAggregateXml
- GET /api/analytics/events/aggregate/{program}/explain — EventAggregateAnalytics.getExplainAggregateJson
- GET /api/analytics/events/cluster/{program} — EventQueryAnalytics.getClusterJson
- GET /api/analytics/events/count/{program} — EventQueryAnalytics.getCountJson
- GET /api/analytics/events/query/dimensions — EventQueryAnalytics.getQueryDimensions
- GET /api/analytics/events/query/{program} — EventQueryAnalytics.getQueryJson
- GET /api/analytics/events/query/{program}.csv — EventQueryAnalytics.getQueryCsv
- GET /api/analytics/events/query/{program}.html — EventQueryAnalytics.getQueryHtml
- GET /api/analytics/events/query/{program}.html+css — EventQueryAnalytics.getQueryHtmlCss
- GET /api/analytics/events/query/{program}.xls — EventQueryAnalytics.getQueryXls
- GET /api/analytics/events/query/{program}.xlsx — EventQueryAnalytics.getQueryXlsx
- GET /api/analytics/events/query/{program}.xml — EventQueryAnalytics.getQueryXml
- GET /api/analytics/events/query/{program}/explain — EventQueryAnalytics.getExplainQueryJson
- GET /api/analytics/explain — Analytics.getExplainJson
- GET /api/analytics/outlierDetection — AnalyticsOutlierDetection.getOutliersJson
- GET /api/analytics/outlierDetection.csv — AnalyticsOutlierDetection.getOutliersCsv
- GET /api/analytics/outlierDetection.html — AnalyticsOutlierDetection.getOutliersHtml
- GET /api/analytics/outlierDetection.html+css — AnalyticsOutlierDetection.getOutliersHtmlCss
- GET /api/analytics/outlierDetection.xls — AnalyticsOutlierDetection.getOutliersXls
- GET /api/analytics/outlierDetection.xlsx — AnalyticsOutlierDetection.getOutliersXlsx
- GET /api/analytics/outlierDetection.xml — AnalyticsOutlierDetection.getOutliersXml
- GET /api/analytics/outlierDetection/explain — AnalyticsOutlierDetection.getExplainOutliersJson
- GET /api/analytics/rawData.csv — Analytics.getRawDataCsv
- GET /api/analytics/rawData.json — Analytics.getRawDataJson
- GET /api/analytics/tableTypes — Analytics.getTableTypes
- GET /api/analytics/trackedEntities/query/dimensions — TrackedEntityAnalytics.getQueryDimensions
- GET /api/analytics/trackedEntities/query/{trackedEntityType} — TrackedEntityAnalytics.query
- GET /api/analytics/trackedEntities/query/{trackedEntityType}.csv — TrackedEntityAnalytics.queryCsv
- GET /api/analytics/trackedEntities/query/{trackedEntityType}.html — TrackedEntityAnalytics.queryHtml
- GET /api/analytics/trackedEntities/query/{trackedEntityType}.html+css — TrackedEntityAnalytics.queryHtmlCss
- GET /api/analytics/trackedEntities/query/{trackedEntityType}.xls — TrackedEntityAnalytics.queryXls
- GET /api/analytics/trackedEntities/query/{trackedEntityType}.xlsx — TrackedEntityAnalytics.queryXlsx
- GET /api/analytics/trackedEntities/query/{trackedEntityType}.xml — TrackedEntityAnalytics.queryXml
- GET /api/analytics/trackedEntities/query/{trackedEntityType}/explain — TrackedEntityAnalytics.queryExplain

## analytics.csv
- GET /api/analytics.csv — Analytics.getCsv

## analytics.html
- GET /api/analytics.html — Analytics.getHtml

## analytics.html+css
- GET /api/analytics.html+css — Analytics.getHtmlCss

## analytics.jrxml
- GET /api/analytics.jrxml — Analytics.getJrxml

## analytics.xls
- GET /api/analytics.xls — Analytics.getXls

## analytics.xlsx
- GET /api/analytics.xlsx — Analytics.getXlsx

## analyticsTableHooks
- GET /api/analyticsTableHooks/ — AnalyticsTableHook.getObjectList: List all AnalyticsTableHooks
- POST /api/analyticsTableHooks/ — AnalyticsTableHook.postJsonObject
- GET /api/analyticsTableHooks/#getObjectListCsv — AnalyticsTableHook.getObjectListCsv
- GET /api/analyticsTableHooks/gist — AnalyticsTableHook.getObjectListGist+getObjectListGistAsCsv
- GET /api/analyticsTableHooks/gist.csv — AnalyticsTableHook.getObjectListGistAsCsv
- PATCH /api/analyticsTableHooks/sharing — AnalyticsTableHook.bulkSharing
- GET /api/analyticsTableHooks/{uid} — AnalyticsTableHook.getObject: View a AnalyticsTableHook
- PUT /api/analyticsTableHooks/{uid} — AnalyticsTableHook.putJsonObject
- PATCH /api/analyticsTableHooks/{uid} — AnalyticsTableHook.patchObject
- DELETE /api/analyticsTableHooks/{uid} — AnalyticsTableHook.deleteObject: Deletes the AnalyticsTableHook provided by ID.
- GET /api/analyticsTableHooks/{uid}/gist — AnalyticsTableHook.getObjectGist+getObjectGistAsCsv
- GET /api/analyticsTableHooks/{uid}/gist.csv — AnalyticsTableHook.getObjectGistAsCsv
- PUT /api/analyticsTableHooks/{uid}/sharing — AnalyticsTableHook.setSharing
- PUT /api/analyticsTableHooks/{uid}/translations — AnalyticsTableHook.replaceTranslations
- GET /api/analyticsTableHooks/{uid}/{property} — AnalyticsTableHook.getObjectProperty
- POST /api/analyticsTableHooks/{uid}/{property} — AnalyticsTableHook.addCollectionItemsJson
- PUT /api/analyticsTableHooks/{uid}/{property} — AnalyticsTableHook.replaceCollectionItemsJson
- DELETE /api/analyticsTableHooks/{uid}/{property} — AnalyticsTableHook.deleteCollectionItemsJson
- GET /api/analyticsTableHooks/{uid}/{property}/gist — AnalyticsTableHook.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/analyticsTableHooks/{uid}/{property}/gist.csv — AnalyticsTableHook.getObjectPropertyGistAsCsv
- POST /api/analyticsTableHooks/{uid}/{property}/{itemId} — AnalyticsTableHook.addCollectionItem
- DELETE /api/analyticsTableHooks/{uid}/{property}/{itemId} — AnalyticsTableHook.deleteCollectionItem

## apiToken
- GET /api/apiToken/ — ApiToken.getObjectList: List all ApiTokens
- POST /api/apiToken/ — ApiToken.postJsonObject
- GET /api/apiToken/#getObjectListCsv — ApiToken.getObjectListCsv
- GET /api/apiToken/gist — ApiToken.getObjectListGist+getObjectListGistAsCsv
- GET /api/apiToken/gist.csv — ApiToken.getObjectListGistAsCsv
- PATCH /api/apiToken/sharing — ApiToken.bulkSharing
- GET /api/apiToken/{uid} — ApiToken.getObject: View a ApiToken
- PUT /api/apiToken/{uid} — ApiToken.putJsonObject
- PATCH /api/apiToken/{uid} — ApiToken.patchObject
- DELETE /api/apiToken/{uid} — ApiToken.deleteObject: Deletes the ApiToken provided by ID.
- GET /api/apiToken/{uid}/gist — ApiToken.getObjectGist+getObjectGistAsCsv
- GET /api/apiToken/{uid}/gist.csv — ApiToken.getObjectGistAsCsv
- PUT /api/apiToken/{uid}/sharing — ApiToken.setSharing
- PUT /api/apiToken/{uid}/translations — ApiToken.replaceTranslations
- GET /api/apiToken/{uid}/{property} — ApiToken.getObjectProperty
- POST /api/apiToken/{uid}/{property} — ApiToken.addCollectionItemsJson
- PUT /api/apiToken/{uid}/{property} — ApiToken.replaceCollectionItemsJson
- DELETE /api/apiToken/{uid}/{property} — ApiToken.deleteCollectionItemsJson
- GET /api/apiToken/{uid}/{property}/gist — ApiToken.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/apiToken/{uid}/{property}/gist.csv — ApiToken.getObjectPropertyGistAsCsv
- POST /api/apiToken/{uid}/{property}/{itemId} — ApiToken.addCollectionItem
- DELETE /api/apiToken/{uid}/{property}/{itemId} — ApiToken.deleteCollectionItem

## apiTokens
- GET /api/apiTokens/ — ApiToken.getObjectList2: List all ApiTokens
- POST /api/apiTokens/ — ApiToken.postJsonObject2
- GET /api/apiTokens/#getObjectListCsv — ApiToken.getObjectListCsv2
- GET /api/apiTokens/gist — ApiToken.getObjectListGist+getObjectListGistAsCsv2
- GET /api/apiTokens/gist.csv — ApiToken.getObjectListGistAsCsv2
- PATCH /api/apiTokens/sharing — ApiToken.bulkSharing2
- GET /api/apiTokens/{uid} — ApiToken.getObject2: View a ApiToken
- PUT /api/apiTokens/{uid} — ApiToken.putJsonObject2
- PATCH /api/apiTokens/{uid} — ApiToken.patchObject2
- DELETE /api/apiTokens/{uid} — ApiToken.deleteObject2: Deletes the ApiToken provided by ID.
- GET /api/apiTokens/{uid}/gist — ApiToken.getObjectGist+getObjectGistAsCsv2
- GET /api/apiTokens/{uid}/gist.csv — ApiToken.getObjectGistAsCsv2
- PUT /api/apiTokens/{uid}/sharing — ApiToken.setSharing2
- PUT /api/apiTokens/{uid}/translations — ApiToken.replaceTranslations2
- GET /api/apiTokens/{uid}/{property} — ApiToken.getObjectProperty2
- POST /api/apiTokens/{uid}/{property} — ApiToken.addCollectionItemsJson2
- PUT /api/apiTokens/{uid}/{property} — ApiToken.replaceCollectionItemsJson2
- DELETE /api/apiTokens/{uid}/{property} — ApiToken.deleteCollectionItemsJson2
- GET /api/apiTokens/{uid}/{property}/gist — ApiToken.getObjectPropertyGist+getObjectPropertyGistAsCsv2
- GET /api/apiTokens/{uid}/{property}/gist.csv — ApiToken.getObjectPropertyGistAsCsv2
- POST /api/apiTokens/{uid}/{property}/{itemId} — ApiToken.addCollectionItem2
- DELETE /api/apiTokens/{uid}/{property}/{itemId} — ApiToken.deleteCollectionItem2

## appHub
- GET /api/appHub/ — AppHub.listAppHub
- GET /api/appHub/{apiVersion}/** — AppHub.getAppHubApiResponse
- POST /api/appHub/{versionId} — AppHub.installAppFromAppHub

## apps
- GET /api/apps/ — App.getApps
- POST /api/apps/ — App.installApp
- PUT /api/apps/ — App.reloadApps
- POST /api/apps/config — App.setConfig
- GET /api/apps/menu — App.getWebModules
- DELETE /api/apps/{app} — App.deleteApp
- GET /api/apps/{app}/** — App.renderApp

## attributes
- GET /api/attributes/ — Attribute.getObjectList: List all Attributes
- POST /api/attributes/ — Attribute.postJsonObject
- GET /api/attributes/#getObjectListCsv — Attribute.getObjectListCsv
- GET /api/attributes/gist — Attribute.getObjectListGist+getObjectListGistAsCsv
- GET /api/attributes/gist.csv — Attribute.getObjectListGistAsCsv
- PATCH /api/attributes/sharing — Attribute.bulkSharing
- GET /api/attributes/{uid} — Attribute.getObject: View a Attribute
- PUT /api/attributes/{uid} — Attribute.putJsonObject
- PATCH /api/attributes/{uid} — Attribute.patchObject
- DELETE /api/attributes/{uid} — Attribute.deleteObject: Deletes the Attribute provided by ID.
- GET /api/attributes/{uid}/gist — Attribute.getObjectGist+getObjectGistAsCsv
- GET /api/attributes/{uid}/gist.csv — Attribute.getObjectGistAsCsv
- PUT /api/attributes/{uid}/sharing — Attribute.setSharing
- PUT /api/attributes/{uid}/translations — Attribute.replaceTranslations
- GET /api/attributes/{uid}/{property} — Attribute.getObjectProperty
- POST /api/attributes/{uid}/{property} — Attribute.addCollectionItemsJson
- PUT /api/attributes/{uid}/{property} — Attribute.replaceCollectionItemsJson
- DELETE /api/attributes/{uid}/{property} — Attribute.deleteCollectionItemsJson
- GET /api/attributes/{uid}/{property}/gist — Attribute.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/attributes/{uid}/{property}/gist.csv — Attribute.getObjectPropertyGistAsCsv
- POST /api/attributes/{uid}/{property}/{itemId} — Attribute.addCollectionItem
- DELETE /api/attributes/{uid}/{property}/{itemId} — Attribute.deleteCollectionItem

## audits
- GET /api/audits/dataApproval — Audit.getDataApprovalAudit
- GET /api/audits/dataValue — Audit.getAggregateDataValueChangelog
- GET /api/audits/files/{uid} — Audit.getFileAudit
- GET /api/audits/trackedEntity — Audit.getTrackedEntityAudit

## auth
- POST /api/auth/forgotPassword — UserAccount.forgotPassword
- POST /api/auth/invite — UserAccount.invite
- POST /api/auth/login — Authentication.login
- POST /api/auth/passwordReset — UserAccount.resetPassword
- POST /api/auth/registration — UserAccount.registerUser

## authorities
- GET /api/authorities/ — Authorities.getAuthorities

## categories
- GET /api/categories/ — Category.getObjectList: List all Categorys
- POST /api/categories/ — Category.postJsonObject
- GET /api/categories/#getObjectListCsv — Category.getObjectListCsv
- GET /api/categories/gist — Category.getObjectListGist+getObjectListGistAsCsv
- GET /api/categories/gist.csv — Category.getObjectListGistAsCsv
- POST /api/categories/merge — Category.mergeCategories
- PATCH /api/categories/sharing — Category.bulkSharing
- GET /api/categories/{uid} — Category.getObject: View a Category
- PUT /api/categories/{uid} — Category.putJsonObject
- PATCH /api/categories/{uid} — Category.patchObject
- DELETE /api/categories/{uid} — Category.deleteObject: Deletes the Category provided by ID.
- GET /api/categories/{uid}/gist — Category.getObjectGist+getObjectGistAsCsv
- GET /api/categories/{uid}/gist.csv — Category.getObjectGistAsCsv
- PUT /api/categories/{uid}/sharing — Category.setSharing
- PUT /api/categories/{uid}/translations — Category.replaceTranslations
- GET /api/categories/{uid}/{property} — Category.getObjectProperty
- POST /api/categories/{uid}/{property} — Category.addCollectionItemsJson
- PUT /api/categories/{uid}/{property} — Category.replaceCollectionItemsJson
- DELETE /api/categories/{uid}/{property} — Category.deleteCollectionItemsJson
- GET /api/categories/{uid}/{property}/gist — Category.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/categories/{uid}/{property}/gist.csv — Category.getObjectPropertyGistAsCsv
- POST /api/categories/{uid}/{property}/{itemId} — Category.addCollectionItem
- DELETE /api/categories/{uid}/{property}/{itemId} — Category.deleteCollectionItem

## categoryCombos
- GET /api/categoryCombos/ — CategoryCombo.getObjectList: List all CategoryCombos
- POST /api/categoryCombos/ — CategoryCombo.postJsonObject
- GET /api/categoryCombos/#getObjectListCsv — CategoryCombo.getObjectListCsv
- GET /api/categoryCombos/gist — CategoryCombo.getObjectListGist+getObjectListGistAsCsv
- GET /api/categoryCombos/gist.csv — CategoryCombo.getObjectListGistAsCsv
- POST /api/categoryCombos/merge — CategoryCombo.mergeCategoryCombos
- PATCH /api/categoryCombos/sharing — CategoryCombo.bulkSharing
- GET /api/categoryCombos/{uid} — CategoryCombo.getObject: View a CategoryCombo
- PUT /api/categoryCombos/{uid} — CategoryCombo.putJsonObject
- PATCH /api/categoryCombos/{uid} — CategoryCombo.patchObject
- DELETE /api/categoryCombos/{uid} — CategoryCombo.deleteObject: Deletes the CategoryCombo provided by ID.
- GET /api/categoryCombos/{uid}/gist — CategoryCombo.getObjectGist+getObjectGistAsCsv
- GET /api/categoryCombos/{uid}/gist.csv — CategoryCombo.getObjectGistAsCsv
- GET /api/categoryCombos/{uid}/metadata — CategoryCombo.getDataSetWithDependencies
- PUT /api/categoryCombos/{uid}/sharing — CategoryCombo.setSharing
- PUT /api/categoryCombos/{uid}/translations — CategoryCombo.replaceTranslations
- GET /api/categoryCombos/{uid}/{property} — CategoryCombo.getObjectProperty
- POST /api/categoryCombos/{uid}/{property} — CategoryCombo.addCollectionItemsJson
- PUT /api/categoryCombos/{uid}/{property} — CategoryCombo.replaceCollectionItemsJson
- DELETE /api/categoryCombos/{uid}/{property} — CategoryCombo.deleteCollectionItemsJson
- GET /api/categoryCombos/{uid}/{property}/gist — CategoryCombo.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/categoryCombos/{uid}/{property}/gist.csv — CategoryCombo.getObjectPropertyGistAsCsv
- POST /api/categoryCombos/{uid}/{property}/{itemId} — CategoryCombo.addCollectionItem
- DELETE /api/categoryCombos/{uid}/{property}/{itemId} — CategoryCombo.deleteCollectionItem

## categoryOptionCombos
- GET /api/categoryOptionCombos/ — CategoryOptionCombo.getObjectList: List all CategoryOptionCombos
- POST /api/categoryOptionCombos/ — CategoryOptionCombo.postJsonObject: Creating a single CategoryOptionCombo is not allowed.
- GET /api/categoryOptionCombos/#getObjectListCsv — CategoryOptionCombo.getObjectListCsv
- GET /api/categoryOptionCombos/gist — CategoryOptionCombo.getObjectListGist+getObjectListGistAsCsv
- GET /api/categoryOptionCombos/gist.csv — CategoryOptionCombo.getObjectListGistAsCsv
- POST /api/categoryOptionCombos/merge — CategoryOptionCombo.mergeCategoryOptionCombos
- PATCH /api/categoryOptionCombos/sharing — CategoryOptionCombo.bulkSharing
- GET /api/categoryOptionCombos/{uid} — CategoryOptionCombo.getObject: View a CategoryOptionCombo
- PUT /api/categoryOptionCombos/{uid} — CategoryOptionCombo.putJsonObject: Updating a CategoryOptionCombos is restricted, only 3 fields are updatable through the PUT endpoint: - attributeValues - code - ignoreAppro…
- PATCH /api/categoryOptionCombos/{uid} — CategoryOptionCombo.patchObject: Updating a CategoryOptionCombos is restricted, only 3 fields are updatable through the PATCH endpoint: - attributeValues - code - ignoreApp…
- DELETE /api/categoryOptionCombos/{uid} — CategoryOptionCombo.deleteObject: Deletes the CategoryOptionCombo provided by ID.
- GET /api/categoryOptionCombos/{uid}/gist — CategoryOptionCombo.getObjectGist+getObjectGistAsCsv
- GET /api/categoryOptionCombos/{uid}/gist.csv — CategoryOptionCombo.getObjectGistAsCsv
- PUT /api/categoryOptionCombos/{uid}/sharing — CategoryOptionCombo.setSharing
- PUT /api/categoryOptionCombos/{uid}/translations — CategoryOptionCombo.replaceTranslations
- GET /api/categoryOptionCombos/{uid}/{property} — CategoryOptionCombo.getObjectProperty
- POST /api/categoryOptionCombos/{uid}/{property} — CategoryOptionCombo.addCollectionItemsJson
- PUT /api/categoryOptionCombos/{uid}/{property} — CategoryOptionCombo.replaceCollectionItemsJson
- DELETE /api/categoryOptionCombos/{uid}/{property} — CategoryOptionCombo.deleteCollectionItemsJson
- GET /api/categoryOptionCombos/{uid}/{property}/gist — CategoryOptionCombo.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/categoryOptionCombos/{uid}/{property}/gist.csv — CategoryOptionCombo.getObjectPropertyGistAsCsv
- POST /api/categoryOptionCombos/{uid}/{property}/{itemId} — CategoryOptionCombo.addCollectionItem
- DELETE /api/categoryOptionCombos/{uid}/{property}/{itemId} — CategoryOptionCombo.deleteCollectionItem

## categoryOptionGroupSets
- GET /api/categoryOptionGroupSets/ — CategoryOptionGroupSet.getObjectList: List all CategoryOptionGroupSets
- POST /api/categoryOptionGroupSets/ — CategoryOptionGroupSet.postJsonObject
- GET /api/categoryOptionGroupSets/#getObjectListCsv — CategoryOptionGroupSet.getObjectListCsv
- GET /api/categoryOptionGroupSets/gist — CategoryOptionGroupSet.getObjectListGist+getObjectListGistAsCsv
- GET /api/categoryOptionGroupSets/gist.csv — CategoryOptionGroupSet.getObjectListGistAsCsv
- PATCH /api/categoryOptionGroupSets/sharing — CategoryOptionGroupSet.bulkSharing
- GET /api/categoryOptionGroupSets/{uid} — CategoryOptionGroupSet.getObject: View a CategoryOptionGroupSet
- PUT /api/categoryOptionGroupSets/{uid} — CategoryOptionGroupSet.putJsonObject
- PATCH /api/categoryOptionGroupSets/{uid} — CategoryOptionGroupSet.patchObject
- DELETE /api/categoryOptionGroupSets/{uid} — CategoryOptionGroupSet.deleteObject: Deletes the CategoryOptionGroupSet provided by ID.
- GET /api/categoryOptionGroupSets/{uid}/gist — CategoryOptionGroupSet.getObjectGist+getObjectGistAsCsv
- GET /api/categoryOptionGroupSets/{uid}/gist.csv — CategoryOptionGroupSet.getObjectGistAsCsv
- PUT /api/categoryOptionGroupSets/{uid}/sharing — CategoryOptionGroupSet.setSharing
- PUT /api/categoryOptionGroupSets/{uid}/translations — CategoryOptionGroupSet.replaceTranslations
- GET /api/categoryOptionGroupSets/{uid}/{property} — CategoryOptionGroupSet.getObjectProperty
- POST /api/categoryOptionGroupSets/{uid}/{property} — CategoryOptionGroupSet.addCollectionItemsJson
- PUT /api/categoryOptionGroupSets/{uid}/{property} — CategoryOptionGroupSet.replaceCollectionItemsJson
- DELETE /api/categoryOptionGroupSets/{uid}/{property} — CategoryOptionGroupSet.deleteCollectionItemsJson
- GET /api/categoryOptionGroupSets/{uid}/{property}/gist — CategoryOptionGroupSet.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/categoryOptionGroupSets/{uid}/{property}/gist.csv — CategoryOptionGroupSet.getObjectPropertyGistAsCsv
- POST /api/categoryOptionGroupSets/{uid}/{property}/{itemId} — CategoryOptionGroupSet.addCollectionItem
- DELETE /api/categoryOptionGroupSets/{uid}/{property}/{itemId} — CategoryOptionGroupSet.deleteCollectionItem

## categoryOptionGroups
- GET /api/categoryOptionGroups/ — CategoryOptionGroup.getObjectList: List all CategoryOptionGroups
- POST /api/categoryOptionGroups/ — CategoryOptionGroup.postJsonObject
- GET /api/categoryOptionGroups/#getObjectListCsv — CategoryOptionGroup.getObjectListCsv
- GET /api/categoryOptionGroups/gist — CategoryOptionGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/categoryOptionGroups/gist.csv — CategoryOptionGroup.getObjectListGistAsCsv
- PATCH /api/categoryOptionGroups/sharing — CategoryOptionGroup.bulkSharing
- GET /api/categoryOptionGroups/{uid} — CategoryOptionGroup.getObject: View a CategoryOptionGroup
- PUT /api/categoryOptionGroups/{uid} — CategoryOptionGroup.putJsonObject
- PATCH /api/categoryOptionGroups/{uid} — CategoryOptionGroup.patchObject
- DELETE /api/categoryOptionGroups/{uid} — CategoryOptionGroup.deleteObject: Deletes the CategoryOptionGroup provided by ID.
- GET /api/categoryOptionGroups/{uid}/gist — CategoryOptionGroup.getObjectGist+getObjectGistAsCsv
- GET /api/categoryOptionGroups/{uid}/gist.csv — CategoryOptionGroup.getObjectGistAsCsv
- PUT /api/categoryOptionGroups/{uid}/sharing — CategoryOptionGroup.setSharing
- PUT /api/categoryOptionGroups/{uid}/translations — CategoryOptionGroup.replaceTranslations
- GET /api/categoryOptionGroups/{uid}/{property} — CategoryOptionGroup.getObjectProperty
- POST /api/categoryOptionGroups/{uid}/{property} — CategoryOptionGroup.addCollectionItemsJson
- PUT /api/categoryOptionGroups/{uid}/{property} — CategoryOptionGroup.replaceCollectionItemsJson
- DELETE /api/categoryOptionGroups/{uid}/{property} — CategoryOptionGroup.deleteCollectionItemsJson
- GET /api/categoryOptionGroups/{uid}/{property}/gist — CategoryOptionGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/categoryOptionGroups/{uid}/{property}/gist.csv — CategoryOptionGroup.getObjectPropertyGistAsCsv
- POST /api/categoryOptionGroups/{uid}/{property}/{itemId} — CategoryOptionGroup.addCollectionItem
- DELETE /api/categoryOptionGroups/{uid}/{property}/{itemId} — CategoryOptionGroup.deleteCollectionItem

## categoryOptions
- GET /api/categoryOptions/ — CategoryOption.getObjectList: List all CategoryOptions
- POST /api/categoryOptions/ — CategoryOption.postJsonObject
- GET /api/categoryOptions/#getObjectListCsv — CategoryOption.getObjectListCsv
- GET /api/categoryOptions/gist — CategoryOption.getObjectListGist+getObjectListGistAsCsv
- GET /api/categoryOptions/gist.csv — CategoryOption.getObjectListGistAsCsv
- POST /api/categoryOptions/merge — CategoryOption.mergeCategoryOptions
- GET /api/categoryOptions/orgUnits — CategoryOption.getOrgUnitsAssociations
- PATCH /api/categoryOptions/sharing — CategoryOption.bulkSharing
- GET /api/categoryOptions/{uid} — CategoryOption.getObject: View a CategoryOption
- PUT /api/categoryOptions/{uid} — CategoryOption.putJsonObject
- PATCH /api/categoryOptions/{uid} — CategoryOption.patchObject
- DELETE /api/categoryOptions/{uid} — CategoryOption.deleteObject: Deletes the CategoryOption provided by ID.
- GET /api/categoryOptions/{uid}/gist — CategoryOption.getObjectGist+getObjectGistAsCsv
- GET /api/categoryOptions/{uid}/gist.csv — CategoryOption.getObjectGistAsCsv
- PUT /api/categoryOptions/{uid}/sharing — CategoryOption.setSharing
- PUT /api/categoryOptions/{uid}/translations — CategoryOption.replaceTranslations
- GET /api/categoryOptions/{uid}/{property} — CategoryOption.getObjectProperty
- POST /api/categoryOptions/{uid}/{property} — CategoryOption.addCollectionItemsJson
- PUT /api/categoryOptions/{uid}/{property} — CategoryOption.replaceCollectionItemsJson
- DELETE /api/categoryOptions/{uid}/{property} — CategoryOption.deleteCollectionItemsJson
- GET /api/categoryOptions/{uid}/{property}/gist — CategoryOption.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/categoryOptions/{uid}/{property}/gist.csv — CategoryOption.getObjectPropertyGistAsCsv
- POST /api/categoryOptions/{uid}/{property}/{itemId} — CategoryOption.addCollectionItem
- DELETE /api/categoryOptions/{uid}/{property}/{itemId} — CategoryOption.deleteCollectionItem

## cluster
- GET /api/cluster/leader — Cluster.getLeaderInfo

## completeDataSetRegistrations
- GET /api/completeDataSetRegistrations/ — CompleteDataSetRegistration.getCompleteRegistrationsJson+getCompleteRegistrationsXml
- POST /api/completeDataSetRegistrations/ — CompleteDataSetRegistration.postCompleteRegistrationsXml+postCompleteRegistrationsJson
- DELETE /api/completeDataSetRegistrations/ — CompleteDataSetRegistration.deleteCompleteDataSetRegistration

## configuration
- GET /api/configuration/ — Configuration.getConfiguration
- GET /api/configuration/appHubUrl — Configuration.getAppHubUrl
- GET /api/configuration/corsAllowlist — Configuration.getCorsWhitelist
- POST /api/configuration/corsAllowlist — Configuration.setCorsWhitelist
- GET /api/configuration/corsWhitelist — Configuration.getCorsWhitelist2
- POST /api/configuration/corsWhitelist — Configuration.setCorsWhitelist2
- GET /api/configuration/dataOutputPeriodTypes — Configuration.getDataOutputPeriodTypes
- POST /api/configuration/dataOutputPeriodTypes — Configuration.setDataOutputPeriodTypes
- GET /api/configuration/facilityOrgUnitGroupSet — Configuration.getFacilityOrgUnitGroupSet
- POST /api/configuration/facilityOrgUnitGroupSet — Configuration.setFacilityOrgUnitGroupSet
- GET /api/configuration/facilityOrgUnitLevel — Configuration.getFacilityOrgUnitLevel
- POST /api/configuration/facilityOrgUnitLevel — Configuration.setFacilityOrgUnitLevel
- GET /api/configuration/feedbackRecipients — Configuration.getFeedbackRecipients
- POST /api/configuration/feedbackRecipients — Configuration.setFeedbackRecipients
- DELETE /api/configuration/feedbackRecipients — Configuration.removeFeedbackRecipients
- GET /api/configuration/infrastructuralDataElements — Configuration.getInfrastructuralDataElements
- POST /api/configuration/infrastructuralDataElements — Configuration.setInfrastructuralDataElements
- GET /api/configuration/infrastructuralIndicators — Configuration.getInfrastructuralIndicators
- POST /api/configuration/infrastructuralIndicators — Configuration.setInfrastructuralIndicators
- GET /api/configuration/infrastructuralPeriodType — Configuration.getInfrastructuralPeriodType
- POST /api/configuration/infrastructuralPeriodType — Configuration.setInfrastructuralPeriodType
- GET /api/configuration/offlineOrganisationUnitLevel — Configuration.getOfflineOrganisationUnitLevel
- POST /api/configuration/offlineOrganisationUnitLevel — Configuration.setOfflineOrganisationUnitLevel
- DELETE /api/configuration/offlineOrganisationUnitLevel — Configuration.removeOfflineOrganisationUnitLevel
- GET /api/configuration/remoteServerUrl — Configuration.getRemoteServerUrl
- GET /api/configuration/remoteServerUsername — Configuration.getRemoteServerUsername
- GET /api/configuration/selfRegistrationOrgUnit — Configuration.getSelfRegistrationOrgUnit
- POST /api/configuration/selfRegistrationOrgUnit — Configuration.setSelfRegistrationOrgUnit
- DELETE /api/configuration/selfRegistrationOrgUnit — Configuration.removeSelfRegistrationOrgUnit
- GET /api/configuration/selfRegistrationRole — Configuration.getSelfRegistrationRole
- POST /api/configuration/selfRegistrationRole — Configuration.setSelfRegistrationRole
- DELETE /api/configuration/selfRegistrationRole — Configuration.removeSelfRegistrationRole
- GET /api/configuration/systemId — Configuration.getSystemId
- POST /api/configuration/systemId — Configuration.setSystemId
- GET /api/configuration/systemReadOnlyMode — Configuration.getSystemReadOnlyMode
- GET /api/configuration/systemUpdateNotificationRecipients — Configuration.getSystemUpdateNotificationRecipients
- POST /api/configuration/systemUpdateNotificationRecipients — Configuration.setSystemUpdateNotificationRecipients
- DELETE /api/configuration/systemUpdateNotificationRecipients — Configuration.removeSystemUpdateNotificationRecipients
- GET /api/configuration/twoFactorMethods — Configuration.getTwoFactorMethods

## constants
- GET /api/constants/ — Constant.getObjectList: List all Constants
- POST /api/constants/ — Constant.postJsonObject
- GET /api/constants/#getObjectListCsv — Constant.getObjectListCsv
- GET /api/constants/gist — Constant.getObjectListGist+getObjectListGistAsCsv
- GET /api/constants/gist.csv — Constant.getObjectListGistAsCsv
- PATCH /api/constants/sharing — Constant.bulkSharing
- GET /api/constants/{uid} — Constant.getObject: View a Constant
- PUT /api/constants/{uid} — Constant.putJsonObject
- PATCH /api/constants/{uid} — Constant.patchObject
- DELETE /api/constants/{uid} — Constant.deleteObject: Deletes the Constant provided by ID.
- GET /api/constants/{uid}/gist — Constant.getObjectGist+getObjectGistAsCsv
- GET /api/constants/{uid}/gist.csv — Constant.getObjectGistAsCsv
- PUT /api/constants/{uid}/sharing — Constant.setSharing
- PUT /api/constants/{uid}/translations — Constant.replaceTranslations
- GET /api/constants/{uid}/{property} — Constant.getObjectProperty
- POST /api/constants/{uid}/{property} — Constant.addCollectionItemsJson
- PUT /api/constants/{uid}/{property} — Constant.replaceCollectionItemsJson
- DELETE /api/constants/{uid}/{property} — Constant.deleteCollectionItemsJson
- GET /api/constants/{uid}/{property}/gist — Constant.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/constants/{uid}/{property}/gist.csv — Constant.getObjectPropertyGistAsCsv
- POST /api/constants/{uid}/{property}/{itemId} — Constant.addCollectionItem
- DELETE /api/constants/{uid}/{property}/{itemId} — Constant.deleteCollectionItem

## dashboardItems
- GET /api/dashboardItems/ — DashboardItem.getObjectList: List all DashboardItems
- POST /api/dashboardItems/ — DashboardItem.postJsonObject
- GET /api/dashboardItems/#getObjectListCsv — DashboardItem.getObjectListCsv
- GET /api/dashboardItems/gist — DashboardItem.getObjectListGist+getObjectListGistAsCsv
- GET /api/dashboardItems/gist.csv — DashboardItem.getObjectListGistAsCsv
- PATCH /api/dashboardItems/sharing — DashboardItem.bulkSharing
- GET /api/dashboardItems/{uid} — DashboardItem.getObject: View a DashboardItem
- PUT /api/dashboardItems/{uid} — DashboardItem.putJsonObject
- PATCH /api/dashboardItems/{uid} — DashboardItem.patchObject
- DELETE /api/dashboardItems/{uid} — DashboardItem.deleteObject: Deletes the DashboardItem provided by ID.
- GET /api/dashboardItems/{uid}/gist — DashboardItem.getObjectGist+getObjectGistAsCsv
- GET /api/dashboardItems/{uid}/gist.csv — DashboardItem.getObjectGistAsCsv
- PUT /api/dashboardItems/{uid}/shape/{shape} — DashboardItem.putDashboardItemShape
- PUT /api/dashboardItems/{uid}/sharing — DashboardItem.setSharing
- PUT /api/dashboardItems/{uid}/translations — DashboardItem.replaceTranslations
- GET /api/dashboardItems/{uid}/{property} — DashboardItem.getObjectProperty
- POST /api/dashboardItems/{uid}/{property} — DashboardItem.addCollectionItemsJson
- PUT /api/dashboardItems/{uid}/{property} — DashboardItem.replaceCollectionItemsJson
- DELETE /api/dashboardItems/{uid}/{property} — DashboardItem.deleteCollectionItemsJson
- GET /api/dashboardItems/{uid}/{property}/gist — DashboardItem.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dashboardItems/{uid}/{property}/gist.csv — DashboardItem.getObjectPropertyGistAsCsv
- POST /api/dashboardItems/{uid}/{property}/{itemId} — DashboardItem.addCollectionItem
- DELETE /api/dashboardItems/{uid}/{property}/{itemId} — DashboardItem.deleteCollectionItem

## dashboards
- GET /api/dashboards/ — Dashboard.getObjectList: List all Dashboards
- POST /api/dashboards/ — Dashboard.postJsonObject
- GET /api/dashboards/#getObjectListCsv — Dashboard.getObjectListCsv
- POST /api/dashboards/cascadeSharing/{uid} — Dashboard.cascadeSharing
- GET /api/dashboards/gist — Dashboard.getObjectListGist+getObjectListGistAsCsv
- GET /api/dashboards/gist.csv — Dashboard.getObjectListGistAsCsv
- GET /api/dashboards/q — Dashboard.searchNoFilter
- GET /api/dashboards/q/{query} — Dashboard.search
- GET /api/dashboards/search — Dashboard.searchAsParam
- PATCH /api/dashboards/sharing — Dashboard.bulkSharing
- GET /api/dashboards/{uid} — Dashboard.getObject: View a Dashboard
- PUT /api/dashboards/{uid} — Dashboard.putJsonObject
- PATCH /api/dashboards/{uid} — Dashboard.patchObject
- DELETE /api/dashboards/{uid} — Dashboard.deleteObject: Deletes the Dashboard provided by ID.
- POST /api/dashboards/{uid}/favorite — Dashboard.setAsFavorite
- DELETE /api/dashboards/{uid}/favorite — Dashboard.removeAsFavorite
- GET /api/dashboards/{uid}/gist — Dashboard.getObjectGist+getObjectGistAsCsv
- GET /api/dashboards/{uid}/gist.csv — Dashboard.getObjectGistAsCsv
- GET /api/dashboards/{uid}/metadata — Dashboard.getDataSetWithDependencies
- PUT /api/dashboards/{uid}/sharing — Dashboard.setSharing
- PUT /api/dashboards/{uid}/translations — Dashboard.replaceTranslations
- GET /api/dashboards/{uid}/{property} — Dashboard.getObjectProperty
- POST /api/dashboards/{uid}/{property} — Dashboard.addCollectionItemsJson
- PUT /api/dashboards/{uid}/{property} — Dashboard.replaceCollectionItemsJson
- DELETE /api/dashboards/{uid}/{property} — Dashboard.deleteCollectionItemsJson
- GET /api/dashboards/{uid}/{property}/gist — Dashboard.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dashboards/{uid}/{property}/gist.csv — Dashboard.getObjectPropertyGistAsCsv
- POST /api/dashboards/{uid}/{property}/{itemId} — Dashboard.addCollectionItem
- DELETE /api/dashboards/{uid}/{property}/{itemId} — Dashboard.deleteCollectionItem

## dataAnalysis
- GET /api/dataAnalysis/followup — DataAnalysis.performFollowupAnalysis
- POST /api/dataAnalysis/followup — DataAnalysis.performFollowupAnalysis2
- POST /api/dataAnalysis/followup/mark — DataAnalysis.markDataValues
- POST /api/dataAnalysis/minMaxOutlier — DataAnalysis.performMinMaxOutlierAnalysis
- GET /api/dataAnalysis/report.csv — DataAnalysis.getCSVReport
- GET /api/dataAnalysis/report.pdf — DataAnalysis.getPdfReport
- GET /api/dataAnalysis/report.xls — DataAnalysis.getXlsReport
- POST /api/dataAnalysis/stdDevOutlier — DataAnalysis.performStdDevOutlierAnalysis
- POST /api/dataAnalysis/validationRules — DataAnalysis.performValidationRulesAnalysis
- GET /api/dataAnalysis/validationRules/report.csv — DataAnalysis.getValidationRulesCSVReport
- GET /api/dataAnalysis/validationRules/report.pdf — DataAnalysis.getValidationRulesPdfReport
- GET /api/dataAnalysis/validationRules/report.xls — DataAnalysis.getValidationRulesXlsReport
- GET /api/dataAnalysis/validationRulesExpression — DataAnalysis.getValidationRuleExpressionDetials

## dataApprovalLevels
- GET /api/dataApprovalLevels/ — DataApprovalLevel.getObjectList: List all DataApprovalLevels
- POST /api/dataApprovalLevels/ — DataApprovalLevel.postJsonObject
- GET /api/dataApprovalLevels/#getObjectListCsv — DataApprovalLevel.getObjectListCsv
- GET /api/dataApprovalLevels/gist — DataApprovalLevel.getObjectListGist+getObjectListGistAsCsv
- GET /api/dataApprovalLevels/gist.csv — DataApprovalLevel.getObjectListGistAsCsv
- PATCH /api/dataApprovalLevels/sharing — DataApprovalLevel.bulkSharing
- GET /api/dataApprovalLevels/{uid} — DataApprovalLevel.getObject: View a DataApprovalLevel
- PUT /api/dataApprovalLevels/{uid} — DataApprovalLevel.putJsonObject
- PATCH /api/dataApprovalLevels/{uid} — DataApprovalLevel.patchObject
- DELETE /api/dataApprovalLevels/{uid} — DataApprovalLevel.deleteObject: Deletes the DataApprovalLevel provided by ID.
- GET /api/dataApprovalLevels/{uid}/gist — DataApprovalLevel.getObjectGist+getObjectGistAsCsv
- GET /api/dataApprovalLevels/{uid}/gist.csv — DataApprovalLevel.getObjectGistAsCsv
- PUT /api/dataApprovalLevels/{uid}/sharing — DataApprovalLevel.setSharing
- PUT /api/dataApprovalLevels/{uid}/translations — DataApprovalLevel.replaceTranslations
- GET /api/dataApprovalLevels/{uid}/{property} — DataApprovalLevel.getObjectProperty
- POST /api/dataApprovalLevels/{uid}/{property} — DataApprovalLevel.addCollectionItemsJson
- PUT /api/dataApprovalLevels/{uid}/{property} — DataApprovalLevel.replaceCollectionItemsJson
- DELETE /api/dataApprovalLevels/{uid}/{property} — DataApprovalLevel.deleteCollectionItemsJson
- GET /api/dataApprovalLevels/{uid}/{property}/gist — DataApprovalLevel.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dataApprovalLevels/{uid}/{property}/gist.csv — DataApprovalLevel.getObjectPropertyGistAsCsv
- POST /api/dataApprovalLevels/{uid}/{property}/{itemId} — DataApprovalLevel.addCollectionItem
- DELETE /api/dataApprovalLevels/{uid}/{property}/{itemId} — DataApprovalLevel.deleteCollectionItem

## dataApprovalWorkflows
- GET /api/dataApprovalWorkflows/ — DataApprovalWorkflow.getObjectList: List all DataApprovalWorkflows
- POST /api/dataApprovalWorkflows/ — DataApprovalWorkflow.postJsonObject
- GET /api/dataApprovalWorkflows/#getObjectListCsv — DataApprovalWorkflow.getObjectListCsv
- GET /api/dataApprovalWorkflows/gist — DataApprovalWorkflow.getObjectListGist+getObjectListGistAsCsv
- GET /api/dataApprovalWorkflows/gist.csv — DataApprovalWorkflow.getObjectListGistAsCsv
- PATCH /api/dataApprovalWorkflows/sharing — DataApprovalWorkflow.bulkSharing
- GET /api/dataApprovalWorkflows/{uid} — DataApprovalWorkflow.getObject: View a DataApprovalWorkflow
- PUT /api/dataApprovalWorkflows/{uid} — DataApprovalWorkflow.putJsonObject
- PATCH /api/dataApprovalWorkflows/{uid} — DataApprovalWorkflow.patchObject
- DELETE /api/dataApprovalWorkflows/{uid} — DataApprovalWorkflow.deleteObject: Deletes the DataApprovalWorkflow provided by ID.
- GET /api/dataApprovalWorkflows/{uid}/gist — DataApprovalWorkflow.getObjectGist+getObjectGistAsCsv
- GET /api/dataApprovalWorkflows/{uid}/gist.csv — DataApprovalWorkflow.getObjectGistAsCsv
- PUT /api/dataApprovalWorkflows/{uid}/sharing — DataApprovalWorkflow.setSharing
- PUT /api/dataApprovalWorkflows/{uid}/translations — DataApprovalWorkflow.replaceTranslations
- GET /api/dataApprovalWorkflows/{uid}/{property} — DataApprovalWorkflow.getObjectProperty
- POST /api/dataApprovalWorkflows/{uid}/{property} — DataApprovalWorkflow.addCollectionItemsJson
- PUT /api/dataApprovalWorkflows/{uid}/{property} — DataApprovalWorkflow.replaceCollectionItemsJson
- DELETE /api/dataApprovalWorkflows/{uid}/{property} — DataApprovalWorkflow.deleteCollectionItemsJson
- GET /api/dataApprovalWorkflows/{uid}/{property}/gist — DataApprovalWorkflow.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dataApprovalWorkflows/{uid}/{property}/gist.csv — DataApprovalWorkflow.getObjectPropertyGistAsCsv
- POST /api/dataApprovalWorkflows/{uid}/{property}/{itemId} — DataApprovalWorkflow.addCollectionItem
- DELETE /api/dataApprovalWorkflows/{uid}/{property}/{itemId} — DataApprovalWorkflow.deleteCollectionItem

## dataApprovals
- GET /api/dataApprovals/ — DataApproval.getApprovalPermissions
- POST /api/dataApprovals/ — DataApproval.saveApproval
- DELETE /api/dataApprovals/ — DataApproval.removeApproval
- GET /api/dataApprovals/approvals — DataApproval.getMultipleApprovalPermissions
- POST /api/dataApprovals/approvals — DataApproval.saveApprovalBatch
- GET /api/dataApprovals/categoryOptionCombos — DataApproval.getApprovalByCategoryOptionCombos
- POST /api/dataApprovals/dataAcceptances — DataApproval.acceptApproval
- DELETE /api/dataApprovals/dataAcceptances — DataApproval.unacceptApproval
- POST /api/dataApprovals/dataAcceptances/acceptances — DataApproval.saveAcceptanceBatch
- POST /api/dataApprovals/dataAcceptances/unacceptances — DataApproval.removeAcceptancesBatch
- GET /api/dataApprovals/multiple — DataApproval.getMultipleApprovalPermissions2
- GET /api/dataApprovals/status — DataApproval.getApproval
- POST /api/dataApprovals/unapprovals — DataApproval.removeApprovalBatch

## dataElementGroupSets
- GET /api/dataElementGroupSets/ — DataElementGroupSet.getObjectList: List all DataElementGroupSets
- POST /api/dataElementGroupSets/ — DataElementGroupSet.postJsonObject
- GET /api/dataElementGroupSets/#getObjectListCsv — DataElementGroupSet.getObjectListCsv
- GET /api/dataElementGroupSets/gist — DataElementGroupSet.getObjectListGist+getObjectListGistAsCsv
- GET /api/dataElementGroupSets/gist.csv — DataElementGroupSet.getObjectListGistAsCsv
- PATCH /api/dataElementGroupSets/sharing — DataElementGroupSet.bulkSharing
- GET /api/dataElementGroupSets/{uid} — DataElementGroupSet.getObject: View a DataElementGroupSet
- PUT /api/dataElementGroupSets/{uid} — DataElementGroupSet.putJsonObject
- PATCH /api/dataElementGroupSets/{uid} — DataElementGroupSet.patchObject
- DELETE /api/dataElementGroupSets/{uid} — DataElementGroupSet.deleteObject: Deletes the DataElementGroupSet provided by ID.
- GET /api/dataElementGroupSets/{uid}/gist — DataElementGroupSet.getObjectGist+getObjectGistAsCsv
- GET /api/dataElementGroupSets/{uid}/gist.csv — DataElementGroupSet.getObjectGistAsCsv
- PUT /api/dataElementGroupSets/{uid}/sharing — DataElementGroupSet.setSharing
- PUT /api/dataElementGroupSets/{uid}/translations — DataElementGroupSet.replaceTranslations
- GET /api/dataElementGroupSets/{uid}/{property} — DataElementGroupSet.getObjectProperty
- POST /api/dataElementGroupSets/{uid}/{property} — DataElementGroupSet.addCollectionItemsJson
- PUT /api/dataElementGroupSets/{uid}/{property} — DataElementGroupSet.replaceCollectionItemsJson
- DELETE /api/dataElementGroupSets/{uid}/{property} — DataElementGroupSet.deleteCollectionItemsJson
- GET /api/dataElementGroupSets/{uid}/{property}/gist — DataElementGroupSet.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dataElementGroupSets/{uid}/{property}/gist.csv — DataElementGroupSet.getObjectPropertyGistAsCsv
- POST /api/dataElementGroupSets/{uid}/{property}/{itemId} — DataElementGroupSet.addCollectionItem
- DELETE /api/dataElementGroupSets/{uid}/{property}/{itemId} — DataElementGroupSet.deleteCollectionItem

## dataElementGroups
- GET /api/dataElementGroups/ — DataElementGroup.getObjectList: List all DataElementGroups
- POST /api/dataElementGroups/ — DataElementGroup.postJsonObject
- GET /api/dataElementGroups/#getObjectListCsv — DataElementGroup.getObjectListCsv
- GET /api/dataElementGroups/gist — DataElementGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/dataElementGroups/gist.csv — DataElementGroup.getObjectListGistAsCsv
- PATCH /api/dataElementGroups/sharing — DataElementGroup.bulkSharing
- GET /api/dataElementGroups/{uid} — DataElementGroup.getObject: View a DataElementGroup
- PUT /api/dataElementGroups/{uid} — DataElementGroup.putJsonObject
- PATCH /api/dataElementGroups/{uid} — DataElementGroup.patchObject
- DELETE /api/dataElementGroups/{uid} — DataElementGroup.deleteObject: Deletes the DataElementGroup provided by ID.
- GET /api/dataElementGroups/{uid}/gist — DataElementGroup.getObjectGist+getObjectGistAsCsv
- GET /api/dataElementGroups/{uid}/gist.csv — DataElementGroup.getObjectGistAsCsv
- GET /api/dataElementGroups/{uid}/metadata — DataElementGroup.getDataElementGroupWithDependencies
- GET /api/dataElementGroups/{uid}/operands — DataElementGroup.getOperands
- GET /api/dataElementGroups/{uid}/operands/query/{q} — DataElementGroup.getOperandsByQuery
- PUT /api/dataElementGroups/{uid}/sharing — DataElementGroup.setSharing
- PUT /api/dataElementGroups/{uid}/translations — DataElementGroup.replaceTranslations
- GET /api/dataElementGroups/{uid}/{property} — DataElementGroup.getObjectProperty
- POST /api/dataElementGroups/{uid}/{property} — DataElementGroup.addCollectionItemsJson
- PUT /api/dataElementGroups/{uid}/{property} — DataElementGroup.replaceCollectionItemsJson
- DELETE /api/dataElementGroups/{uid}/{property} — DataElementGroup.deleteCollectionItemsJson
- GET /api/dataElementGroups/{uid}/{property}/gist — DataElementGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dataElementGroups/{uid}/{property}/gist.csv — DataElementGroup.getObjectPropertyGistAsCsv
- POST /api/dataElementGroups/{uid}/{property}/{itemId} — DataElementGroup.addCollectionItem
- DELETE /api/dataElementGroups/{uid}/{property}/{itemId} — DataElementGroup.deleteCollectionItem

## dataElementOperands
- GET /api/dataElementOperands/ — DataElementOperand.getObjectList

## dataElements
- GET /api/dataElements/ — DataElement.getObjectList: List all DataElements
- POST /api/dataElements/ — DataElement.postJsonObject
- GET /api/dataElements/#getObjectListCsv — DataElement.getObjectListCsv
- GET /api/dataElements/gist — DataElement.getObjectListGist+getObjectListGistAsCsv
- GET /api/dataElements/gist.csv — DataElement.getObjectListGistAsCsv
- POST /api/dataElements/merge — DataElement.mergeDataElements
- PATCH /api/dataElements/sharing — DataElement.bulkSharing
- GET /api/dataElements/{uid} — DataElement.getObject: View a DataElement
- PUT /api/dataElements/{uid} — DataElement.putJsonObject
- PATCH /api/dataElements/{uid} — DataElement.patchObject
- DELETE /api/dataElements/{uid} — DataElement.deleteObject: Deletes the DataElement provided by ID.
- GET /api/dataElements/{uid}/gist — DataElement.getObjectGist+getObjectGistAsCsv
- GET /api/dataElements/{uid}/gist.csv — DataElement.getObjectGistAsCsv
- PUT /api/dataElements/{uid}/sharing — DataElement.setSharing
- PUT /api/dataElements/{uid}/translations — DataElement.replaceTranslations
- GET /api/dataElements/{uid}/{property} — DataElement.getObjectProperty
- POST /api/dataElements/{uid}/{property} — DataElement.addCollectionItemsJson
- PUT /api/dataElements/{uid}/{property} — DataElement.replaceCollectionItemsJson
- DELETE /api/dataElements/{uid}/{property} — DataElement.deleteCollectionItemsJson
- GET /api/dataElements/{uid}/{property}/gist — DataElement.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dataElements/{uid}/{property}/gist.csv — DataElement.getObjectPropertyGistAsCsv
- POST /api/dataElements/{uid}/{property}/{itemId} — DataElement.addCollectionItem
- DELETE /api/dataElements/{uid}/{property}/{itemId} — DataElement.deleteCollectionItem

## dataEntry
- GET /api/dataEntry/customForms/{uid} — CustomDataEntryForm.getForm
- POST /api/dataEntry/dataSetCompletion — DataSetCompletion.saveDataSetCompletion
- GET /api/dataEntry/dataValueContext — DataValueContext.getChangeLog
- GET /api/dataEntry/dataValues — DataSetValue.getDataValueSet
- GET /api/dataEntry/lockExceptions — DataSetLockException.getLockExceptions
- GET /api/dataEntry/metadata — DataSetMetadata.getMetadata
- POST /api/dataEntry/minMaxValues — MinMaxValue.saveOrUpdateMinMaxValue
- DELETE /api/dataEntry/minMaxValues — MinMaxValue.removeMinMaxValue

## dataEntryForms
- GET /api/dataEntryForms/ — DataEntryForm.getObjectList: List all DataEntryForms
- POST /api/dataEntryForms/ — DataEntryForm.postJsonObject
- GET /api/dataEntryForms/#getObjectListCsv — DataEntryForm.getObjectListCsv
- GET /api/dataEntryForms/gist — DataEntryForm.getObjectListGist+getObjectListGistAsCsv
- GET /api/dataEntryForms/gist.csv — DataEntryForm.getObjectListGistAsCsv
- PATCH /api/dataEntryForms/sharing — DataEntryForm.bulkSharing
- GET /api/dataEntryForms/{uid} — DataEntryForm.getObject: View a DataEntryForm
- PUT /api/dataEntryForms/{uid} — DataEntryForm.putJsonObject
- PATCH /api/dataEntryForms/{uid} — DataEntryForm.patchObject
- DELETE /api/dataEntryForms/{uid} — DataEntryForm.deleteObject: Deletes the DataEntryForm provided by ID.
- GET /api/dataEntryForms/{uid}/gist — DataEntryForm.getObjectGist+getObjectGistAsCsv
- GET /api/dataEntryForms/{uid}/gist.csv — DataEntryForm.getObjectGistAsCsv
- PUT /api/dataEntryForms/{uid}/sharing — DataEntryForm.setSharing
- PUT /api/dataEntryForms/{uid}/translations — DataEntryForm.replaceTranslations
- GET /api/dataEntryForms/{uid}/{property} — DataEntryForm.getObjectProperty
- POST /api/dataEntryForms/{uid}/{property} — DataEntryForm.addCollectionItemsJson
- PUT /api/dataEntryForms/{uid}/{property} — DataEntryForm.replaceCollectionItemsJson
- DELETE /api/dataEntryForms/{uid}/{property} — DataEntryForm.deleteCollectionItemsJson
- GET /api/dataEntryForms/{uid}/{property}/gist — DataEntryForm.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dataEntryForms/{uid}/{property}/gist.csv — DataEntryForm.getObjectPropertyGistAsCsv
- POST /api/dataEntryForms/{uid}/{property}/{itemId} — DataEntryForm.addCollectionItem
- DELETE /api/dataEntryForms/{uid}/{property}/{itemId} — DataEntryForm.deleteCollectionItem

## dataIntegrity
- GET /api/dataIntegrity/ — DataIntegrity.getAvailableChecks
- POST /api/dataIntegrity/ — DataIntegrity.runDataIntegrity
- GET /api/dataIntegrity/details — DataIntegrity.getDetails
- POST /api/dataIntegrity/details — DataIntegrity.runDetailsCheck
- GET /api/dataIntegrity/details/completed — DataIntegrity.getCompletedDetailsChecks
- GET /api/dataIntegrity/details/running — DataIntegrity.getRunningDetailsChecks
- GET /api/dataIntegrity/metrics — DataIntegrity.getSummariesMetrics
- GET /api/dataIntegrity/summary — DataIntegrity.getSummaries
- POST /api/dataIntegrity/summary — DataIntegrity.runSummariesCheck
- GET /api/dataIntegrity/summary/completed — DataIntegrity.getCompletedSummaryChecks
- GET /api/dataIntegrity/summary/running — DataIntegrity.getRunningSummaryChecks
- GET /api/dataIntegrity/{check}/details — DataIntegrity.getDetails2
- GET /api/dataIntegrity/{check}/summary — DataIntegrity.getSummary

## dataItems
- GET /api/dataItems — DataItemQuery.getJson
- GET /api/dataItems.xml — DataItemQuery.getXml

## dataSetNotificationTemplates
- GET /api/dataSetNotificationTemplates/ — DataSetNotificationTemplate.getObjectList: List all DataSetNotificationTemplates
- POST /api/dataSetNotificationTemplates/ — DataSetNotificationTemplate.postJsonObject
- GET /api/dataSetNotificationTemplates/#getObjectListCsv — DataSetNotificationTemplate.getObjectListCsv
- GET /api/dataSetNotificationTemplates/gist — DataSetNotificationTemplate.getObjectListGist+getObjectListGistAsCsv
- GET /api/dataSetNotificationTemplates/gist.csv — DataSetNotificationTemplate.getObjectListGistAsCsv
- PATCH /api/dataSetNotificationTemplates/sharing — DataSetNotificationTemplate.bulkSharing
- GET /api/dataSetNotificationTemplates/{uid} — DataSetNotificationTemplate.getObject: View a DataSetNotificationTemplate
- PUT /api/dataSetNotificationTemplates/{uid} — DataSetNotificationTemplate.putJsonObject
- PATCH /api/dataSetNotificationTemplates/{uid} — DataSetNotificationTemplate.patchObject
- DELETE /api/dataSetNotificationTemplates/{uid} — DataSetNotificationTemplate.deleteObject: Deletes the DataSetNotificationTemplate provided by ID.
- GET /api/dataSetNotificationTemplates/{uid}/gist — DataSetNotificationTemplate.getObjectGist+getObjectGistAsCsv
- GET /api/dataSetNotificationTemplates/{uid}/gist.csv — DataSetNotificationTemplate.getObjectGistAsCsv
- PUT /api/dataSetNotificationTemplates/{uid}/sharing — DataSetNotificationTemplate.setSharing
- PUT /api/dataSetNotificationTemplates/{uid}/translations — DataSetNotificationTemplate.replaceTranslations
- GET /api/dataSetNotificationTemplates/{uid}/{property} — DataSetNotificationTemplate.getObjectProperty
- POST /api/dataSetNotificationTemplates/{uid}/{property} — DataSetNotificationTemplate.addCollectionItemsJson
- PUT /api/dataSetNotificationTemplates/{uid}/{property} — DataSetNotificationTemplate.replaceCollectionItemsJson
- DELETE /api/dataSetNotificationTemplates/{uid}/{property} — DataSetNotificationTemplate.deleteCollectionItemsJson
- GET /api/dataSetNotificationTemplates/{uid}/{property}/gist — DataSetNotificationTemplate.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dataSetNotificationTemplates/{uid}/{property}/gist.csv — DataSetNotificationTemplate.getObjectPropertyGistAsCsv
- POST /api/dataSetNotificationTemplates/{uid}/{property}/{itemId} — DataSetNotificationTemplate.addCollectionItem
- DELETE /api/dataSetNotificationTemplates/{uid}/{property}/{itemId} — DataSetNotificationTemplate.deleteCollectionItem

## dataSetReport
- GET /api/dataSetReport — DataSetReport.getDataSetReportAsJson
- GET /api/dataSetReport/custom — DataSetReport.getCustomDataSetReport

## dataSetReport.pdf
- GET /api/dataSetReport.pdf — DataSetReport.getDataSetReportAsPdf

## dataSetReport.xls
- GET /api/dataSetReport.xls — DataSetReport.getDataSetReportAsExcel

## dataSets
- GET /api/dataSets/ — DataSet.getObjectList: List all DataSets
- POST /api/dataSets/ — DataSet.postJsonObject
- GET /api/dataSets/#getObjectListCsv — DataSet.getObjectListCsv
- GET /api/dataSets/#getStructureDefinition — DataSet.getStructureDefinition
- GET /api/dataSets/gist — DataSet.getObjectListGist+getObjectListGistAsCsv
- GET /api/dataSets/gist.csv — DataSet.getObjectListGistAsCsv
- PATCH /api/dataSets/sharing — DataSet.bulkSharing
- GET /api/dataSets/{uid} — DataSet.getObject: View a DataSet
- PUT /api/dataSets/{uid} — DataSet.putJsonObject
- PATCH /api/dataSets/{uid} — DataSet.patchObject
- DELETE /api/dataSets/{uid} — DataSet.deleteObject: Deletes the DataSet provided by ID.
- GET /api/dataSets/{uid}/categoryCombos — DataSet.getCategoryCombinations
- POST /api/dataSets/{uid}/customDataEntryForm — DataSet.updateCustomDataEntryFormHtml
- PUT /api/dataSets/{uid}/customDataEntryForm — DataSet.updateCustomDataEntryFormHtml2
- GET /api/dataSets/{uid}/dataValueSet — DataSet.getDvs
- GET /api/dataSets/{uid}/form — DataSet.getFormJson
- POST /api/dataSets/{uid}/form — DataSet.updateCustomDataEntryFormHtml+updateCustomDataEntryFormJson
- PUT /api/dataSets/{uid}/form — DataSet.updateCustomDataEntryFormHtml3
- GET /api/dataSets/{uid}/form#getFormXml — DataSet.getFormXml
- GET /api/dataSets/{uid}/gist — DataSet.getObjectGist+getObjectGistAsCsv
- GET /api/dataSets/{uid}/gist.csv — DataSet.getObjectGistAsCsv
- GET /api/dataSets/{uid}/metadata — DataSet.getDataSetWithDependencies
- PUT /api/dataSets/{uid}/sharing — DataSet.setSharing
- PUT /api/dataSets/{uid}/translations — DataSet.replaceTranslations
- GET /api/dataSets/{uid}/version — DataSet.getVersion
- POST /api/dataSets/{uid}/version — DataSet.bumpVersion
- GET /api/dataSets/{uid}/{property} — DataSet.getObjectProperty
- POST /api/dataSets/{uid}/{property} — DataSet.addCollectionItemsJson
- PUT /api/dataSets/{uid}/{property} — DataSet.replaceCollectionItemsJson
- DELETE /api/dataSets/{uid}/{property} — DataSet.deleteCollectionItemsJson
- GET /api/dataSets/{uid}/{property}/gist — DataSet.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dataSets/{uid}/{property}/gist.csv — DataSet.getObjectPropertyGistAsCsv
- POST /api/dataSets/{uid}/{property}/{itemId} — DataSet.addCollectionItem
- DELETE /api/dataSets/{uid}/{property}/{itemId} — DataSet.deleteCollectionItem

## dataStatistics
- GET /api/dataStatistics/ — DataStatistics.getReports
- POST /api/dataStatistics/ — DataStatistics.saveEvent
- GET /api/dataStatistics/favorites — DataStatistics.getTopFavorites
- GET /api/dataStatistics/favorites/{uid} — DataStatistics.getFavoriteStatistics
- POST /api/dataStatistics/snapshot — DataStatistics.saveSnapshot

## dataStore
- GET /api/dataStore/ — Datastore.getNamespaces: Lists names of available namespaces.
- GET /api/dataStore/protections — Datastore.getNamespaceProtection
- GET /api/dataStore/protections#getNamespaceProtections — Datastore.getNamespaceProtections
- GET /api/dataStore/{namespace} — Datastore.getEntries: List all entries in a namespace matching the search criteria.
- DELETE /api/dataStore/{namespace} — Datastore.deleteNamespace: Delete a namespace including all its entries.
- GET /api/dataStore/{namespace}/keys — Datastore.getKeysInNamespace: List all keys in a specific namespace.
- GET /api/dataStore/{namespace}/{key} — Datastore.getEntry
- POST /api/dataStore/{namespace}/{key} — Datastore.addEntry
- PUT /api/dataStore/{namespace}/{key} — Datastore.putEntry
- DELETE /api/dataStore/{namespace}/{key} — Datastore.deleteEntry
- GET /api/dataStore/{namespace}/{key}/metaData — Datastore.getEntryMetaData

## dataSummary
- GET /api/dataSummary/ — DataSummary.getStatistics
- GET /api/dataSummary/metrics — DataSummary.getPrometheusMetrics

## dataValueSets
- GET /api/dataValueSets/ — DataValueSet.getDataValueSet
- POST /api/dataValueSets/ — DataValueSet.postAdxDataValueSet+postDxf2DataValueSet+postAdxDataValueSet+postJsonDataValueSet+postCsvDataValueSet+postPdfDataValueSet

## dataValues
- GET /api/dataValues/ — DataValue.getDataValue
- POST /api/dataValues/ — DataValue.saveDataValue
- DELETE /api/dataValues/ — DataValue.deleteDataValue
- POST /api/dataValues/#saveDataValueWithBody — DataValue.saveDataValueWithBody
- POST /api/dataValues/file — DataValue.saveFileDataValue
- GET /api/dataValues/files — DataValue.getDataValueFile
- PUT /api/dataValues/followup — DataValue.setDataValueFollowUp
- PUT /api/dataValues/followups — DataValue.setDataValuesFollowUp

## deletedObjects
- GET /api/deletedObjects/ — DeletedObject.getDeletedObjects

## dhis-web-apps
- GET /dhis-web-apps/apps-bundle.json — AppBundle.getAppsBundle

## dimensions
- GET /api/dimensions/ — Dimension.getObjectList: List all DimensionalObjects
- POST /api/dimensions/ — Dimension.postJsonObject
- GET /api/dimensions/#getObjectListCsv — Dimension.getObjectListCsv
- GET /api/dimensions/constraints — Dimension.getDimensionConstraints
- GET /api/dimensions/dataSet/{uid} — Dimension.getDimensionsForDataSet
- GET /api/dimensions/gist — Dimension.getObjectListGist+getObjectListGistAsCsv
- GET /api/dimensions/gist.csv — Dimension.getObjectListGistAsCsv
- GET /api/dimensions/recommendations — Dimension.getRecommendedDimensions
- PATCH /api/dimensions/sharing — Dimension.bulkSharing
- GET /api/dimensions/{uid} — Dimension.getObject: View a DimensionalObject
- PUT /api/dimensions/{uid} — Dimension.putJsonObject
- PATCH /api/dimensions/{uid} — Dimension.patchObject
- DELETE /api/dimensions/{uid} — Dimension.deleteObject: Deletes the DimensionalObject provided by ID.
- GET /api/dimensions/{uid}/gist — Dimension.getObjectGist+getObjectGistAsCsv
- GET /api/dimensions/{uid}/gist.csv — Dimension.getObjectGistAsCsv
- GET /api/dimensions/{uid}/items — Dimension.getItems
- PUT /api/dimensions/{uid}/sharing — Dimension.setSharing
- PUT /api/dimensions/{uid}/translations — Dimension.replaceTranslations
- GET /api/dimensions/{uid}/{property} — Dimension.getObjectProperty
- POST /api/dimensions/{uid}/{property} — Dimension.addCollectionItemsJson
- PUT /api/dimensions/{uid}/{property} — Dimension.replaceCollectionItemsJson
- DELETE /api/dimensions/{uid}/{property} — Dimension.deleteCollectionItemsJson
- GET /api/dimensions/{uid}/{property}/gist — Dimension.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/dimensions/{uid}/{property}/gist.csv — Dimension.getObjectPropertyGistAsCsv
- POST /api/dimensions/{uid}/{property}/{itemId} — Dimension.addCollectionItem
- DELETE /api/dimensions/{uid}/{property}/{itemId} — Dimension.deleteCollectionItem

## documents
- GET /api/documents/ — Document.getObjectList: List all Documents
- POST /api/documents/ — Document.postJsonObject
- GET /api/documents/#getObjectListCsv — Document.getObjectListCsv
- GET /api/documents/gist — Document.getObjectListGist+getObjectListGistAsCsv
- GET /api/documents/gist.csv — Document.getObjectListGistAsCsv
- PATCH /api/documents/sharing — Document.bulkSharing
- GET /api/documents/{uid} — Document.getObject: View a Document
- PUT /api/documents/{uid} — Document.putJsonObject
- PATCH /api/documents/{uid} — Document.patchObject
- DELETE /api/documents/{uid} — Document.deleteObject: Deletes the Document provided by ID.
- GET /api/documents/{uid}/data — Document.getDocumentContent
- GET /api/documents/{uid}/gist — Document.getObjectGist+getObjectGistAsCsv
- GET /api/documents/{uid}/gist.csv — Document.getObjectGistAsCsv
- PUT /api/documents/{uid}/sharing — Document.setSharing
- PUT /api/documents/{uid}/translations — Document.replaceTranslations
- GET /api/documents/{uid}/{property} — Document.getObjectProperty
- POST /api/documents/{uid}/{property} — Document.addCollectionItemsJson
- PUT /api/documents/{uid}/{property} — Document.replaceCollectionItemsJson
- DELETE /api/documents/{uid}/{property} — Document.deleteCollectionItemsJson
- GET /api/documents/{uid}/{property}/gist — Document.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/documents/{uid}/{property}/gist.csv — Document.getObjectPropertyGistAsCsv
- POST /api/documents/{uid}/{property}/{itemId} — Document.addCollectionItem
- DELETE /api/documents/{uid}/{property}/{itemId} — Document.deleteCollectionItem

## email
- POST /api/email/notification — Email.sendSystemNotificationEmail
- POST /api/email/notification#sendEmailNotification — Email.sendEmailNotification
- POST /api/email/test — Email.sendTestEmail

## eventFilters
- GET /api/eventFilters/ — EventFilter.getObjectList: List all EventFilters
- POST /api/eventFilters/ — EventFilter.postJsonObject
- GET /api/eventFilters/#getObjectListCsv — EventFilter.getObjectListCsv
- GET /api/eventFilters/gist — EventFilter.getObjectListGist+getObjectListGistAsCsv
- GET /api/eventFilters/gist.csv — EventFilter.getObjectListGistAsCsv
- PATCH /api/eventFilters/sharing — EventFilter.bulkSharing
- GET /api/eventFilters/{uid} — EventFilter.getObject: View a EventFilter
- PUT /api/eventFilters/{uid} — EventFilter.putJsonObject
- PATCH /api/eventFilters/{uid} — EventFilter.patchObject
- DELETE /api/eventFilters/{uid} — EventFilter.deleteObject: Deletes the EventFilter provided by ID.
- GET /api/eventFilters/{uid}/gist — EventFilter.getObjectGist+getObjectGistAsCsv
- GET /api/eventFilters/{uid}/gist.csv — EventFilter.getObjectGistAsCsv
- PUT /api/eventFilters/{uid}/sharing — EventFilter.setSharing
- PUT /api/eventFilters/{uid}/translations — EventFilter.replaceTranslations
- GET /api/eventFilters/{uid}/{property} — EventFilter.getObjectProperty
- POST /api/eventFilters/{uid}/{property} — EventFilter.addCollectionItemsJson
- PUT /api/eventFilters/{uid}/{property} — EventFilter.replaceCollectionItemsJson
- DELETE /api/eventFilters/{uid}/{property} — EventFilter.deleteCollectionItemsJson
- GET /api/eventFilters/{uid}/{property}/gist — EventFilter.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/eventFilters/{uid}/{property}/gist.csv — EventFilter.getObjectPropertyGistAsCsv
- POST /api/eventFilters/{uid}/{property}/{itemId} — EventFilter.addCollectionItem
- DELETE /api/eventFilters/{uid}/{property}/{itemId} — EventFilter.deleteCollectionItem

## eventHooks
- GET /api/eventHooks/ — EventHook.getObjectList: List all EventHooks
- POST /api/eventHooks/ — EventHook.postJsonObject
- GET /api/eventHooks/#getObjectListCsv — EventHook.getObjectListCsv
- GET /api/eventHooks/gist — EventHook.getObjectListGist+getObjectListGistAsCsv
- GET /api/eventHooks/gist.csv — EventHook.getObjectListGistAsCsv
- PATCH /api/eventHooks/sharing — EventHook.bulkSharing
- GET /api/eventHooks/{uid} — EventHook.getObject: View a EventHook
- PUT /api/eventHooks/{uid} — EventHook.putJsonObject
- PATCH /api/eventHooks/{uid} — EventHook.patchObject
- DELETE /api/eventHooks/{uid} — EventHook.deleteObject: Deletes the EventHook provided by ID.
- GET /api/eventHooks/{uid}/gist — EventHook.getObjectGist+getObjectGistAsCsv
- GET /api/eventHooks/{uid}/gist.csv — EventHook.getObjectGistAsCsv
- PUT /api/eventHooks/{uid}/sharing — EventHook.setSharing
- PUT /api/eventHooks/{uid}/translations — EventHook.replaceTranslations
- GET /api/eventHooks/{uid}/{property} — EventHook.getObjectProperty
- POST /api/eventHooks/{uid}/{property} — EventHook.addCollectionItemsJson
- PUT /api/eventHooks/{uid}/{property} — EventHook.replaceCollectionItemsJson
- DELETE /api/eventHooks/{uid}/{property} — EventHook.deleteCollectionItemsJson
- GET /api/eventHooks/{uid}/{property}/gist — EventHook.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/eventHooks/{uid}/{property}/gist.csv — EventHook.getObjectPropertyGistAsCsv
- POST /api/eventHooks/{uid}/{property}/{itemId} — EventHook.addCollectionItem
- DELETE /api/eventHooks/{uid}/{property}/{itemId} — EventHook.deleteCollectionItem

## eventVisualizations
- GET /api/eventVisualizations/ — EventVisualization.getObjectList: List all EventVisualizations
- POST /api/eventVisualizations/ — EventVisualization.postJsonObject
- GET /api/eventVisualizations/#getObjectListCsv — EventVisualization.getObjectListCsv
- GET /api/eventVisualizations/gist — EventVisualization.getObjectListGist+getObjectListGistAsCsv
- GET /api/eventVisualizations/gist.csv — EventVisualization.getObjectListGistAsCsv
- PATCH /api/eventVisualizations/sharing — EventVisualization.bulkSharing
- GET /api/eventVisualizations/{uid} — EventVisualization.getObject: View a EventVisualization
- PUT /api/eventVisualizations/{uid} — EventVisualization.putJsonObject
- PATCH /api/eventVisualizations/{uid} — EventVisualization.patchObject
- DELETE /api/eventVisualizations/{uid} — EventVisualization.deleteObject: Deletes the EventVisualization provided by ID.
- GET /api/eventVisualizations/{uid}/data — EventVisualization.generateChart
- GET /api/eventVisualizations/{uid}/data.png — EventVisualization.generateChart2
- POST /api/eventVisualizations/{uid}/favorite — EventVisualization.setAsFavorite
- DELETE /api/eventVisualizations/{uid}/favorite — EventVisualization.removeAsFavorite
- GET /api/eventVisualizations/{uid}/gist — EventVisualization.getObjectGist+getObjectGistAsCsv
- GET /api/eventVisualizations/{uid}/gist.csv — EventVisualization.getObjectGistAsCsv
- PUT /api/eventVisualizations/{uid}/sharing — EventVisualization.setSharing
- POST /api/eventVisualizations/{uid}/subscriber — EventVisualization.subscribe
- DELETE /api/eventVisualizations/{uid}/subscriber — EventVisualization.unsubscribe
- PUT /api/eventVisualizations/{uid}/translations — EventVisualization.replaceTranslations
- GET /api/eventVisualizations/{uid}/{property} — EventVisualization.getObjectProperty
- POST /api/eventVisualizations/{uid}/{property} — EventVisualization.addCollectionItemsJson
- PUT /api/eventVisualizations/{uid}/{property} — EventVisualization.replaceCollectionItemsJson
- DELETE /api/eventVisualizations/{uid}/{property} — EventVisualization.deleteCollectionItemsJson
- GET /api/eventVisualizations/{uid}/{property}/gist — EventVisualization.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/eventVisualizations/{uid}/{property}/gist.csv — EventVisualization.getObjectPropertyGistAsCsv
- POST /api/eventVisualizations/{uid}/{property}/{itemId} — EventVisualization.addCollectionItem
- DELETE /api/eventVisualizations/{uid}/{property}/{itemId} — EventVisualization.deleteCollectionItem

## expressionDimensionItems
- GET /api/expressionDimensionItems/ — ExpressionDimensionItem.getObjectList: List all ExpressionDimensionItems
- POST /api/expressionDimensionItems/ — ExpressionDimensionItem.postJsonObject
- GET /api/expressionDimensionItems/#getObjectListCsv — ExpressionDimensionItem.getObjectListCsv
- GET /api/expressionDimensionItems/gist — ExpressionDimensionItem.getObjectListGist+getObjectListGistAsCsv
- GET /api/expressionDimensionItems/gist.csv — ExpressionDimensionItem.getObjectListGistAsCsv
- PATCH /api/expressionDimensionItems/sharing — ExpressionDimensionItem.bulkSharing
- GET /api/expressionDimensionItems/{uid} — ExpressionDimensionItem.getObject: View a ExpressionDimensionItem
- PUT /api/expressionDimensionItems/{uid} — ExpressionDimensionItem.putJsonObject
- PATCH /api/expressionDimensionItems/{uid} — ExpressionDimensionItem.patchObject
- DELETE /api/expressionDimensionItems/{uid} — ExpressionDimensionItem.deleteObject: Deletes the ExpressionDimensionItem provided by ID.
- GET /api/expressionDimensionItems/{uid}/gist — ExpressionDimensionItem.getObjectGist+getObjectGistAsCsv
- GET /api/expressionDimensionItems/{uid}/gist.csv — ExpressionDimensionItem.getObjectGistAsCsv
- PUT /api/expressionDimensionItems/{uid}/sharing — ExpressionDimensionItem.setSharing
- PUT /api/expressionDimensionItems/{uid}/translations — ExpressionDimensionItem.replaceTranslations
- GET /api/expressionDimensionItems/{uid}/{property} — ExpressionDimensionItem.getObjectProperty
- POST /api/expressionDimensionItems/{uid}/{property} — ExpressionDimensionItem.addCollectionItemsJson
- PUT /api/expressionDimensionItems/{uid}/{property} — ExpressionDimensionItem.replaceCollectionItemsJson
- DELETE /api/expressionDimensionItems/{uid}/{property} — ExpressionDimensionItem.deleteCollectionItemsJson
- GET /api/expressionDimensionItems/{uid}/{property}/gist — ExpressionDimensionItem.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/expressionDimensionItems/{uid}/{property}/gist.csv — ExpressionDimensionItem.getObjectPropertyGistAsCsv
- POST /api/expressionDimensionItems/{uid}/{property}/{itemId} — ExpressionDimensionItem.addCollectionItem
- DELETE /api/expressionDimensionItems/{uid}/{property}/{itemId} — ExpressionDimensionItem.deleteCollectionItem

## expressions
- GET /api/expressions/description — Expression.getExpressionDescription

## externalMapLayers
- GET /api/externalMapLayers/ — ExternalMapLayer.getObjectList: List all ExternalMapLayers
- POST /api/externalMapLayers/ — ExternalMapLayer.postJsonObject
- GET /api/externalMapLayers/#getObjectListCsv — ExternalMapLayer.getObjectListCsv
- GET /api/externalMapLayers/gist — ExternalMapLayer.getObjectListGist+getObjectListGistAsCsv
- GET /api/externalMapLayers/gist.csv — ExternalMapLayer.getObjectListGistAsCsv
- PATCH /api/externalMapLayers/sharing — ExternalMapLayer.bulkSharing
- GET /api/externalMapLayers/{uid} — ExternalMapLayer.getObject: View a ExternalMapLayer
- PUT /api/externalMapLayers/{uid} — ExternalMapLayer.putJsonObject
- PATCH /api/externalMapLayers/{uid} — ExternalMapLayer.patchObject
- DELETE /api/externalMapLayers/{uid} — ExternalMapLayer.deleteObject: Deletes the ExternalMapLayer provided by ID.
- GET /api/externalMapLayers/{uid}/gist — ExternalMapLayer.getObjectGist+getObjectGistAsCsv
- GET /api/externalMapLayers/{uid}/gist.csv — ExternalMapLayer.getObjectGistAsCsv
- PUT /api/externalMapLayers/{uid}/sharing — ExternalMapLayer.setSharing
- PUT /api/externalMapLayers/{uid}/translations — ExternalMapLayer.replaceTranslations
- GET /api/externalMapLayers/{uid}/{property} — ExternalMapLayer.getObjectProperty
- POST /api/externalMapLayers/{uid}/{property} — ExternalMapLayer.addCollectionItemsJson
- PUT /api/externalMapLayers/{uid}/{property} — ExternalMapLayer.replaceCollectionItemsJson
- DELETE /api/externalMapLayers/{uid}/{property} — ExternalMapLayer.deleteCollectionItemsJson
- GET /api/externalMapLayers/{uid}/{property}/gist — ExternalMapLayer.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/externalMapLayers/{uid}/{property}/gist.csv — ExternalMapLayer.getObjectPropertyGistAsCsv
- POST /api/externalMapLayers/{uid}/{property}/{itemId} — ExternalMapLayer.addCollectionItem
- DELETE /api/externalMapLayers/{uid}/{property}/{itemId} — ExternalMapLayer.deleteCollectionItem

## fileResources
- GET /api/fileResources/ — FileResource.getObjectList
- POST /api/fileResources/ — FileResource.saveFileResource
- GET /api/fileResources/#getObjectListCsv — FileResource.getObjectListCsv
- GET /api/fileResources/gist — FileResource.getObjectListGist+getObjectListGistAsCsv
- GET /api/fileResources/gist.csv — FileResource.getObjectListGistAsCsv
- GET /api/fileResources/owners — FileResource.getFileResourceOwners
- GET /api/fileResources/{uid} — FileResource.getFileResource
- GET /api/fileResources/{uid}#getObject — FileResource.getObject
- GET /api/fileResources/{uid}/data — FileResource.getFileResourceData
- GET /api/fileResources/{uid}/gist — FileResource.getObjectGist+getObjectGistAsCsv
- GET /api/fileResources/{uid}/gist.csv — FileResource.getObjectGistAsCsv
- GET /api/fileResources/{uid}/{property} — FileResource.getObjectProperty
- GET /api/fileResources/{uid}/{property}/gist — FileResource.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/fileResources/{uid}/{property}/gist.csv — FileResource.getObjectPropertyGistAsCsv

## files
- GET /api/files/script — File.getCustomScript
- POST /api/files/script — File.postCustomScript
- DELETE /api/files/script — File.removeCustomScript
- GET /api/files/style — File.getCustomStyle
- POST /api/files/style — File.postCustomStyle
- DELETE /api/files/style — File.removeCustomStyle
- GET /api/files/style/external — File.getCustomStyle2

## filledOrganisationUnitLevels
- GET /api/filledOrganisationUnitLevels/ — FilledOrganisationUnitLevel.getList
- POST /api/filledOrganisationUnitLevels/ — FilledOrganisationUnitLevel.setList

## gateways
- GET /api/gateways/ — SmsGateway.getGateways
- POST /api/gateways/ — SmsGateway.addGateway
- PUT /api/gateways/default/{uid} — SmsGateway.setDefault
- GET /api/gateways/{uid} — SmsGateway.getGatewayConfiguration
- PUT /api/gateways/{uid} — SmsGateway.updateGateway
- DELETE /api/gateways/{uid} — SmsGateway.removeGateway

## geoFeatures
- GET /api/geoFeatures/ — GeoFeature.getGeoFeaturesJson
- GET /api/geoFeatures/#getGeoFeaturesJsonP — GeoFeature.getGeoFeaturesJsonP

## i18n
- POST /api/i18n/ — I18n.postI18n

## icons
- GET /api/icons/ — Icon.getAllIcons
- POST /api/icons/ — Icon.addIcon
- PATCH /api/icons/ — Icon.repairPhantomIcons
- GET /api/icons/{key} — Icon.getIconByKey
- PUT /api/icons/{key} — Icon.updateIcon
- DELETE /api/icons/{key} — Icon.deleteIcon
- GET /api/icons/{key}/icon — Icon.getIconData
- GET /api/icons/{key}/icon.svg — Icon.getIconData2 (deprecated)

## identifiableObjects
- GET /api/identifiableObjects/ — IdentifiableObject.getObjectList: List all IdentifiableObjects
- POST /api/identifiableObjects/ — IdentifiableObject.postJsonObject
- GET /api/identifiableObjects/#getObjectListCsv — IdentifiableObject.getObjectListCsv
- GET /api/identifiableObjects/gist — IdentifiableObject.getObjectListGist+getObjectListGistAsCsv
- GET /api/identifiableObjects/gist.csv — IdentifiableObject.getObjectListGistAsCsv
- PATCH /api/identifiableObjects/sharing — IdentifiableObject.bulkSharing
- GET /api/identifiableObjects/{uid} — IdentifiableObject.getObject: View a IdentifiableObject
- PUT /api/identifiableObjects/{uid} — IdentifiableObject.putJsonObject
- PATCH /api/identifiableObjects/{uid} — IdentifiableObject.patchObject
- DELETE /api/identifiableObjects/{uid} — IdentifiableObject.deleteObject: Deletes the IdentifiableObject provided by ID.
- GET /api/identifiableObjects/{uid}/gist — IdentifiableObject.getObjectGist+getObjectGistAsCsv
- GET /api/identifiableObjects/{uid}/gist.csv — IdentifiableObject.getObjectGistAsCsv
- PUT /api/identifiableObjects/{uid}/sharing — IdentifiableObject.setSharing
- PUT /api/identifiableObjects/{uid}/translations — IdentifiableObject.replaceTranslations
- GET /api/identifiableObjects/{uid}/{property} — IdentifiableObject.getObjectProperty
- POST /api/identifiableObjects/{uid}/{property} — IdentifiableObject.addCollectionItemsJson
- PUT /api/identifiableObjects/{uid}/{property} — IdentifiableObject.replaceCollectionItemsJson
- DELETE /api/identifiableObjects/{uid}/{property} — IdentifiableObject.deleteCollectionItemsJson
- GET /api/identifiableObjects/{uid}/{property}/gist — IdentifiableObject.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/identifiableObjects/{uid}/{property}/gist.csv — IdentifiableObject.getObjectPropertyGistAsCsv
- POST /api/identifiableObjects/{uid}/{property}/{itemId} — IdentifiableObject.addCollectionItem
- DELETE /api/identifiableObjects/{uid}/{property}/{itemId} — IdentifiableObject.deleteCollectionItem

## indicatorGroupSets
- GET /api/indicatorGroupSets/ — IndicatorGroupSet.getObjectList: List all IndicatorGroupSets
- POST /api/indicatorGroupSets/ — IndicatorGroupSet.postJsonObject
- GET /api/indicatorGroupSets/#getObjectListCsv — IndicatorGroupSet.getObjectListCsv
- GET /api/indicatorGroupSets/gist — IndicatorGroupSet.getObjectListGist+getObjectListGistAsCsv
- GET /api/indicatorGroupSets/gist.csv — IndicatorGroupSet.getObjectListGistAsCsv
- PATCH /api/indicatorGroupSets/sharing — IndicatorGroupSet.bulkSharing
- GET /api/indicatorGroupSets/{uid} — IndicatorGroupSet.getObject: View a IndicatorGroupSet
- PUT /api/indicatorGroupSets/{uid} — IndicatorGroupSet.putJsonObject
- PATCH /api/indicatorGroupSets/{uid} — IndicatorGroupSet.patchObject
- DELETE /api/indicatorGroupSets/{uid} — IndicatorGroupSet.deleteObject: Deletes the IndicatorGroupSet provided by ID.
- GET /api/indicatorGroupSets/{uid}/gist — IndicatorGroupSet.getObjectGist+getObjectGistAsCsv
- GET /api/indicatorGroupSets/{uid}/gist.csv — IndicatorGroupSet.getObjectGistAsCsv
- PUT /api/indicatorGroupSets/{uid}/sharing — IndicatorGroupSet.setSharing
- PUT /api/indicatorGroupSets/{uid}/translations — IndicatorGroupSet.replaceTranslations
- GET /api/indicatorGroupSets/{uid}/{property} — IndicatorGroupSet.getObjectProperty
- POST /api/indicatorGroupSets/{uid}/{property} — IndicatorGroupSet.addCollectionItemsJson
- PUT /api/indicatorGroupSets/{uid}/{property} — IndicatorGroupSet.replaceCollectionItemsJson
- DELETE /api/indicatorGroupSets/{uid}/{property} — IndicatorGroupSet.deleteCollectionItemsJson
- GET /api/indicatorGroupSets/{uid}/{property}/gist — IndicatorGroupSet.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/indicatorGroupSets/{uid}/{property}/gist.csv — IndicatorGroupSet.getObjectPropertyGistAsCsv
- POST /api/indicatorGroupSets/{uid}/{property}/{itemId} — IndicatorGroupSet.addCollectionItem
- DELETE /api/indicatorGroupSets/{uid}/{property}/{itemId} — IndicatorGroupSet.deleteCollectionItem

## indicatorGroups
- GET /api/indicatorGroups/ — IndicatorGroup.getObjectList: List all IndicatorGroups
- POST /api/indicatorGroups/ — IndicatorGroup.postJsonObject
- GET /api/indicatorGroups/#getObjectListCsv — IndicatorGroup.getObjectListCsv
- GET /api/indicatorGroups/gist — IndicatorGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/indicatorGroups/gist.csv — IndicatorGroup.getObjectListGistAsCsv
- PATCH /api/indicatorGroups/sharing — IndicatorGroup.bulkSharing
- GET /api/indicatorGroups/{uid} — IndicatorGroup.getObject: View a IndicatorGroup
- PUT /api/indicatorGroups/{uid} — IndicatorGroup.putJsonObject
- PATCH /api/indicatorGroups/{uid} — IndicatorGroup.patchObject
- DELETE /api/indicatorGroups/{uid} — IndicatorGroup.deleteObject: Deletes the IndicatorGroup provided by ID.
- GET /api/indicatorGroups/{uid}/gist — IndicatorGroup.getObjectGist+getObjectGistAsCsv
- GET /api/indicatorGroups/{uid}/gist.csv — IndicatorGroup.getObjectGistAsCsv
- PUT /api/indicatorGroups/{uid}/sharing — IndicatorGroup.setSharing
- PUT /api/indicatorGroups/{uid}/translations — IndicatorGroup.replaceTranslations
- GET /api/indicatorGroups/{uid}/{property} — IndicatorGroup.getObjectProperty
- POST /api/indicatorGroups/{uid}/{property} — IndicatorGroup.addCollectionItemsJson
- PUT /api/indicatorGroups/{uid}/{property} — IndicatorGroup.replaceCollectionItemsJson
- DELETE /api/indicatorGroups/{uid}/{property} — IndicatorGroup.deleteCollectionItemsJson
- GET /api/indicatorGroups/{uid}/{property}/gist — IndicatorGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/indicatorGroups/{uid}/{property}/gist.csv — IndicatorGroup.getObjectPropertyGistAsCsv
- POST /api/indicatorGroups/{uid}/{property}/{itemId} — IndicatorGroup.addCollectionItem
- DELETE /api/indicatorGroups/{uid}/{property}/{itemId} — IndicatorGroup.deleteCollectionItem

## indicatorTypes
- GET /api/indicatorTypes/ — IndicatorType.getObjectList: List all IndicatorTypes
- POST /api/indicatorTypes/ — IndicatorType.postJsonObject
- GET /api/indicatorTypes/#getObjectListCsv — IndicatorType.getObjectListCsv
- GET /api/indicatorTypes/gist — IndicatorType.getObjectListGist+getObjectListGistAsCsv
- GET /api/indicatorTypes/gist.csv — IndicatorType.getObjectListGistAsCsv
- POST /api/indicatorTypes/merge — IndicatorType.mergeIndicatorTypes
- PATCH /api/indicatorTypes/sharing — IndicatorType.bulkSharing
- GET /api/indicatorTypes/{uid} — IndicatorType.getObject: View a IndicatorType
- PUT /api/indicatorTypes/{uid} — IndicatorType.putJsonObject
- PATCH /api/indicatorTypes/{uid} — IndicatorType.patchObject
- DELETE /api/indicatorTypes/{uid} — IndicatorType.deleteObject: Deletes the IndicatorType provided by ID.
- GET /api/indicatorTypes/{uid}/gist — IndicatorType.getObjectGist+getObjectGistAsCsv
- GET /api/indicatorTypes/{uid}/gist.csv — IndicatorType.getObjectGistAsCsv
- PUT /api/indicatorTypes/{uid}/sharing — IndicatorType.setSharing
- PUT /api/indicatorTypes/{uid}/translations — IndicatorType.replaceTranslations
- GET /api/indicatorTypes/{uid}/{property} — IndicatorType.getObjectProperty
- POST /api/indicatorTypes/{uid}/{property} — IndicatorType.addCollectionItemsJson
- PUT /api/indicatorTypes/{uid}/{property} — IndicatorType.replaceCollectionItemsJson
- DELETE /api/indicatorTypes/{uid}/{property} — IndicatorType.deleteCollectionItemsJson
- GET /api/indicatorTypes/{uid}/{property}/gist — IndicatorType.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/indicatorTypes/{uid}/{property}/gist.csv — IndicatorType.getObjectPropertyGistAsCsv
- POST /api/indicatorTypes/{uid}/{property}/{itemId} — IndicatorType.addCollectionItem
- DELETE /api/indicatorTypes/{uid}/{property}/{itemId} — IndicatorType.deleteCollectionItem

## indicators
- GET /api/indicators/ — Indicator.getObjectList: List all Indicators
- POST /api/indicators/ — Indicator.postJsonObject
- GET /api/indicators/#getObjectListCsv — Indicator.getObjectListCsv
- POST /api/indicators/expression/description — Indicator.getExpressionDescription
- GET /api/indicators/gist — Indicator.getObjectListGist+getObjectListGistAsCsv
- GET /api/indicators/gist.csv — Indicator.getObjectListGistAsCsv
- POST /api/indicators/merge — Indicator.mergeIndicators
- PATCH /api/indicators/sharing — Indicator.bulkSharing
- GET /api/indicators/{uid} — Indicator.getObject: View a Indicator
- PUT /api/indicators/{uid} — Indicator.putJsonObject
- PATCH /api/indicators/{uid} — Indicator.patchObject
- DELETE /api/indicators/{uid} — Indicator.deleteObject: Deletes the Indicator provided by ID.
- GET /api/indicators/{uid}/gist — Indicator.getObjectGist+getObjectGistAsCsv
- GET /api/indicators/{uid}/gist.csv — Indicator.getObjectGistAsCsv
- PUT /api/indicators/{uid}/sharing — Indicator.setSharing
- PUT /api/indicators/{uid}/translations — Indicator.replaceTranslations
- GET /api/indicators/{uid}/{property} — Indicator.getObjectProperty
- POST /api/indicators/{uid}/{property} — Indicator.addCollectionItemsJson
- PUT /api/indicators/{uid}/{property} — Indicator.replaceCollectionItemsJson
- DELETE /api/indicators/{uid}/{property} — Indicator.deleteCollectionItemsJson
- GET /api/indicators/{uid}/{property}/gist — Indicator.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/indicators/{uid}/{property}/gist.csv — Indicator.getObjectPropertyGistAsCsv
- POST /api/indicators/{uid}/{property}/{itemId} — Indicator.addCollectionItem
- DELETE /api/indicators/{uid}/{property}/{itemId} — Indicator.deleteCollectionItem

## interpretations
- GET /api/interpretations/ — Interpretation.getObjectList: List all Interpretations
- POST /api/interpretations/ — Interpretation.postJsonObject
- GET /api/interpretations/#getObjectListCsv — Interpretation.getObjectListCsv
- POST /api/interpretations/dataSetReport/{uid} — Interpretation.writeDataSetReportInterpretation
- POST /api/interpretations/eventChart/{uid} — Interpretation.writeEventChartInterpretation (deprecated)
- POST /api/interpretations/eventReport/{uid} — Interpretation.writeEventReportInterpretation (deprecated)
- POST /api/interpretations/eventVisualization/{uid} — Interpretation.writeEventVisualizationInterpretation
- GET /api/interpretations/gist — Interpretation.getObjectListGist+getObjectListGistAsCsv
- GET /api/interpretations/gist.csv — Interpretation.getObjectListGistAsCsv
- POST /api/interpretations/map/{uid} — Interpretation.writeMapInterpretation
- PATCH /api/interpretations/sharing — Interpretation.bulkSharing
- POST /api/interpretations/visualization/{uid} — Interpretation.writeVisualizationInterpretation
- GET /api/interpretations/{uid} — Interpretation.getObject: View a Interpretation
- PUT /api/interpretations/{uid} — Interpretation.updateInterpretation
- PATCH /api/interpretations/{uid} — Interpretation.patchObject
- DELETE /api/interpretations/{uid} — Interpretation.deleteObject: Deletes the Interpretation provided by ID.
- PUT /api/interpretations/{uid}#putJsonObject — Interpretation.putJsonObject
- POST /api/interpretations/{uid}/comments — Interpretation.postComment
- PUT /api/interpretations/{uid}/comments/{cuid} — Interpretation.updateComment
- DELETE /api/interpretations/{uid}/comments/{cuid} — Interpretation.deleteComment
- GET /api/interpretations/{uid}/gist — Interpretation.getObjectGist+getObjectGistAsCsv
- GET /api/interpretations/{uid}/gist.csv — Interpretation.getObjectGistAsCsv
- POST /api/interpretations/{uid}/like — Interpretation.like
- DELETE /api/interpretations/{uid}/like — Interpretation.unlike
- PUT /api/interpretations/{uid}/sharing — Interpretation.setSharing
- PUT /api/interpretations/{uid}/translations — Interpretation.replaceTranslations
- GET /api/interpretations/{uid}/{property} — Interpretation.getObjectProperty
- POST /api/interpretations/{uid}/{property} — Interpretation.addCollectionItemsJson
- PUT /api/interpretations/{uid}/{property} — Interpretation.replaceCollectionItemsJson
- DELETE /api/interpretations/{uid}/{property} — Interpretation.deleteCollectionItemsJson
- GET /api/interpretations/{uid}/{property}/gist — Interpretation.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/interpretations/{uid}/{property}/gist.csv — Interpretation.getObjectPropertyGistAsCsv
- POST /api/interpretations/{uid}/{property}/{itemId} — Interpretation.addCollectionItem
- DELETE /api/interpretations/{uid}/{property}/{itemId} — Interpretation.deleteCollectionItem

## jobConfigurations
- GET /api/jobConfigurations/ — JobConfiguration.getObjectList: List all JobConfigurations
- POST /api/jobConfigurations/ — JobConfiguration.postJsonObject
- GET /api/jobConfigurations/#getObjectListCsv — JobConfiguration.getObjectListCsv
- POST /api/jobConfigurations/clean — JobConfiguration.deleteDoneJobs
- GET /api/jobConfigurations/due — JobConfiguration.getDueJobConfigurations
- GET /api/jobConfigurations/errors — JobConfiguration.getJobRunErrors
- GET /api/jobConfigurations/gist — JobConfiguration.getObjectListGist+getObjectListGistAsCsv
- GET /api/jobConfigurations/gist.csv — JobConfiguration.getObjectListGistAsCsv
- GET /api/jobConfigurations/jobTypes — JobConfiguration.getJobTypeInfo
- GET /api/jobConfigurations/jobTypesExtended — JobConfiguration.getJobTypesExtended
- PATCH /api/jobConfigurations/sharing — JobConfiguration.bulkSharing
- GET /api/jobConfigurations/stale — JobConfiguration.getStaleJobConfigurations
- GET /api/jobConfigurations/{uid} — JobConfiguration.getObject: View a JobConfiguration
- PUT /api/jobConfigurations/{uid} — JobConfiguration.putJsonObject
- PATCH /api/jobConfigurations/{uid} — JobConfiguration.patchObject
- DELETE /api/jobConfigurations/{uid} — JobConfiguration.deleteObject: Deletes the JobConfiguration provided by ID.
- POST /api/jobConfigurations/{uid}/cancel — JobConfiguration.cancelExecution
- POST /api/jobConfigurations/{uid}/disable — JobConfiguration.disable
- POST /api/jobConfigurations/{uid}/enable — JobConfiguration.enable
- GET /api/jobConfigurations/{uid}/errors — JobConfiguration.getJobRunErrors2
- POST /api/jobConfigurations/{uid}/execute — JobConfiguration.executeNow
- GET /api/jobConfigurations/{uid}/gist — JobConfiguration.getObjectGist+getObjectGistAsCsv
- GET /api/jobConfigurations/{uid}/gist.csv — JobConfiguration.getObjectGistAsCsv
- GET /api/jobConfigurations/{uid}/progress — JobConfiguration.getProgress
- GET /api/jobConfigurations/{uid}/progress/errors — JobConfiguration.getErrors
- POST /api/jobConfigurations/{uid}/revert — JobConfiguration.revertExecution
- PUT /api/jobConfigurations/{uid}/sharing — JobConfiguration.setSharing
- PUT /api/jobConfigurations/{uid}/translations — JobConfiguration.replaceTranslations
- GET /api/jobConfigurations/{uid}/{property} — JobConfiguration.getObjectProperty
- POST /api/jobConfigurations/{uid}/{property} — JobConfiguration.addCollectionItemsJson
- PUT /api/jobConfigurations/{uid}/{property} — JobConfiguration.replaceCollectionItemsJson
- DELETE /api/jobConfigurations/{uid}/{property} — JobConfiguration.deleteCollectionItemsJson
- GET /api/jobConfigurations/{uid}/{property}/gist — JobConfiguration.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/jobConfigurations/{uid}/{property}/gist.csv — JobConfiguration.getObjectPropertyGistAsCsv
- POST /api/jobConfigurations/{uid}/{property}/{itemId} — JobConfiguration.addCollectionItem
- DELETE /api/jobConfigurations/{uid}/{property}/{itemId} — JobConfiguration.deleteCollectionItem

## legendSets
- GET /api/legendSets/ — LegendSet.getObjectList: List all LegendSets
- POST /api/legendSets/ — LegendSet.postJsonObject
- GET /api/legendSets/#getObjectListCsv — LegendSet.getObjectListCsv
- GET /api/legendSets/gist — LegendSet.getObjectListGist+getObjectListGistAsCsv
- GET /api/legendSets/gist.csv — LegendSet.getObjectListGistAsCsv
- PATCH /api/legendSets/sharing — LegendSet.bulkSharing
- GET /api/legendSets/{uid} — LegendSet.getObject: View a LegendSet
- PUT /api/legendSets/{uid} — LegendSet.putJsonObject
- PATCH /api/legendSets/{uid} — LegendSet.patchObject
- DELETE /api/legendSets/{uid} — LegendSet.deleteObject: Deletes the LegendSet provided by ID.
- GET /api/legendSets/{uid}/gist — LegendSet.getObjectGist+getObjectGistAsCsv
- GET /api/legendSets/{uid}/gist.csv — LegendSet.getObjectGistAsCsv
- PUT /api/legendSets/{uid}/sharing — LegendSet.setSharing
- PUT /api/legendSets/{uid}/translations — LegendSet.replaceTranslations
- GET /api/legendSets/{uid}/{property} — LegendSet.getObjectProperty
- POST /api/legendSets/{uid}/{property} — LegendSet.addCollectionItemsJson
- PUT /api/legendSets/{uid}/{property} — LegendSet.replaceCollectionItemsJson
- DELETE /api/legendSets/{uid}/{property} — LegendSet.deleteCollectionItemsJson
- GET /api/legendSets/{uid}/{property}/gist — LegendSet.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/legendSets/{uid}/{property}/gist.csv — LegendSet.getObjectPropertyGistAsCsv
- POST /api/legendSets/{uid}/{property}/{itemId} — LegendSet.addCollectionItem
- DELETE /api/legendSets/{uid}/{property}/{itemId} — LegendSet.deleteCollectionItem

## locales
- GET /api/locales/countries — Locale.getAvailableCountries
- GET /api/locales/db — Locale.getDbLocales
- GET /api/locales/dbLocales — Locale.getDbLocalesWithId
- POST /api/locales/dbLocales — Locale.addLocale
- GET /api/locales/dbLocales/{uid} — Locale.getObject
- DELETE /api/locales/dbLocales/{uid} — Locale.delete
- GET /api/locales/languages — Locale.getAvailableLanguages
- GET /api/locales/ui — Locale.getUiLocales

## lockExceptions
- GET /api/lockExceptions/ — LockException.getLockExceptions
- POST /api/lockExceptions/ — LockException.addLockException
- DELETE /api/lockExceptions/ — LockException.deleteLockException
- GET /api/lockExceptions/combinations — LockException.getLockExceptionCombinations
- GET /api/lockExceptions/gist — LockException.getObjectListGist+getObjectListGistAsCsv
- GET /api/lockExceptions/gist.csv — LockException.getObjectListGistAsCsv
- GET /api/lockExceptions/{uid}/gist — LockException.getObjectGist+getObjectGistAsCsv
- GET /api/lockExceptions/{uid}/gist.csv — LockException.getObjectGistAsCsv
- GET /api/lockExceptions/{uid}/{property}/gist — LockException.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/lockExceptions/{uid}/{property}/gist.csv — LockException.getObjectPropertyGistAsCsv

## login
- GET /login/** — LoginApp.getLoginApp

## login.html
- GET /login.html — LoginFallback.getLoginFallback

## loginConfig
- GET /api/loginConfig/ — LoginConfig.getConfig

## maintenance
- POST /api/maintenance/ — Maintenance.performMaintenance
- PUT /api/maintenance/ — Maintenance.performMaintenance2
- POST /api/maintenance/analyticsTablesAnalyze — Maintenance.analyzeAnalyticsTables
- PUT /api/maintenance/analyticsTablesAnalyze — Maintenance.analyzeAnalyticsTables2
- POST /api/maintenance/analyticsTablesClear — Maintenance.clearAnalyticsTables
- PUT /api/maintenance/analyticsTablesClear — Maintenance.clearAnalyticsTables2
- GET /api/maintenance/appReload — Maintenance.appReload
- POST /api/maintenance/cache — Maintenance.clearCache
- PUT /api/maintenance/cache — Maintenance.clearCache2
- POST /api/maintenance/cacheClear — Maintenance.clearCache3
- PUT /api/maintenance/cacheClear — Maintenance.clearCache4
- POST /api/maintenance/categoryOptionComboUpdate — Maintenance.updateCategoryOptionCombos
- PUT /api/maintenance/categoryOptionComboUpdate — Maintenance.updateCategoryOptionCombos2
- POST /api/maintenance/categoryOptionComboUpdate/categoryCombo/{uid} — Maintenance.updateCategoryOptionCombos3
- PUT /api/maintenance/categoryOptionComboUpdate/categoryCombo/{uid} — Maintenance.updateCategoryOptionCombos4
- POST /api/maintenance/dataPruning/dataElements/{uid} — Maintenance.pruneDataByDataElement
- PUT /api/maintenance/dataPruning/dataElements/{uid} — Maintenance.pruneDataByDataElement2
- POST /api/maintenance/dataPruning/organisationUnits/{uid} — Maintenance.pruneDataByOrganisationUnit
- PUT /api/maintenance/dataPruning/organisationUnits/{uid} — Maintenance.pruneDataByOrganisationUnit2
- POST /api/maintenance/expiredInvitationsClear — Maintenance.clearExpiredInvitations
- PUT /api/maintenance/expiredInvitationsClear — Maintenance.clearExpiredInvitations2
- POST /api/maintenance/ouPathsUpdate — Maintenance.forceUpdatePaths
- PUT /api/maintenance/ouPathsUpdate — Maintenance.forceUpdatePaths2
- POST /api/maintenance/periodPruning — Maintenance.prunePeriods
- PUT /api/maintenance/periodPruning — Maintenance.prunePeriods2
- POST /api/maintenance/softDeletedDataValueRemoval — Maintenance.deleteSoftDeletedDataValues
- PUT /api/maintenance/softDeletedDataValueRemoval — Maintenance.deleteSoftDeletedDataValues2
- POST /api/maintenance/softDeletedEnrollmentRemoval — Maintenance.deleteSoftDeletedEnrollments
- PUT /api/maintenance/softDeletedEnrollmentRemoval — Maintenance.deleteSoftDeletedEnrollments2
- POST /api/maintenance/softDeletedEventRemoval — Maintenance.deleteSoftDeletedEvents
- PUT /api/maintenance/softDeletedEventRemoval — Maintenance.deleteSoftDeletedEvents2
- POST /api/maintenance/softDeletedRelationshipRemoval — Maintenance.deleteSoftDeletedRelationships
- PUT /api/maintenance/softDeletedRelationshipRemoval — Maintenance.deleteSoftDeletedRelationships2
- POST /api/maintenance/softDeletedTrackedEntityRemoval — Maintenance.deleteSoftDeletedTrackedEntities
- PUT /api/maintenance/softDeletedTrackedEntityRemoval — Maintenance.deleteSoftDeletedTrackedEntities2
- POST /api/maintenance/sqlViewsCreate — Maintenance.createSqlViews
- PUT /api/maintenance/sqlViewsCreate — Maintenance.createSqlViews2
- POST /api/maintenance/sqlViewsDrop — Maintenance.dropSqlViews
- PUT /api/maintenance/sqlViewsDrop — Maintenance.dropSqlViews2
- POST /api/maintenance/zeroDataValueRemoval — Maintenance.deleteZeroDataValues
- PUT /api/maintenance/zeroDataValueRemoval — Maintenance.deleteZeroDataValues2

## mapViews
- GET /api/mapViews/ — MapView.getObjectList
- GET /api/mapViews/#getObjectListCsv — MapView.getObjectListCsv
- GET /api/mapViews/data — MapView.getMapView
- GET /api/mapViews/data.png — MapView.getMapView2
- GET /api/mapViews/gist — MapView.getObjectListGist+getObjectListGistAsCsv
- GET /api/mapViews/gist.csv — MapView.getObjectListGistAsCsv
- GET /api/mapViews/{uid} — MapView.getObject
- GET /api/mapViews/{uid}/data — MapView.getMapViewData
- GET /api/mapViews/{uid}/data.png — MapView.getMapViewData2
- GET /api/mapViews/{uid}/gist — MapView.getObjectGist+getObjectGistAsCsv
- GET /api/mapViews/{uid}/gist.csv — MapView.getObjectGistAsCsv
- GET /api/mapViews/{uid}/{property} — MapView.getObjectProperty
- GET /api/mapViews/{uid}/{property}/gist — MapView.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/mapViews/{uid}/{property}/gist.csv — MapView.getObjectPropertyGistAsCsv

## maps
- GET /api/maps/ — Map.getObjectList: List all Maps
- POST /api/maps/ — Map.postJsonObject
- GET /api/maps/#getObjectListCsv — Map.getObjectListCsv
- GET /api/maps/gist — Map.getObjectListGist+getObjectListGistAsCsv
- GET /api/maps/gist.csv — Map.getObjectListGistAsCsv
- PATCH /api/maps/sharing — Map.bulkSharing
- GET /api/maps/{uid} — Map.getObject: View a Map
- PUT /api/maps/{uid} — Map.putJsonObject
- PATCH /api/maps/{uid} — Map.patchObject
- DELETE /api/maps/{uid} — Map.deleteObject: Deletes the Map provided by ID.
- GET /api/maps/{uid}/data — Map.getMapData
- GET /api/maps/{uid}/data.png — Map.getMapData2
- POST /api/maps/{uid}/favorite — Map.setAsFavorite
- DELETE /api/maps/{uid}/favorite — Map.removeAsFavorite
- GET /api/maps/{uid}/gist — Map.getObjectGist+getObjectGistAsCsv
- GET /api/maps/{uid}/gist.csv — Map.getObjectGistAsCsv
- PUT /api/maps/{uid}/sharing — Map.setSharing
- POST /api/maps/{uid}/subscriber — Map.subscribe
- DELETE /api/maps/{uid}/subscriber — Map.unsubscribe
- PUT /api/maps/{uid}/translations — Map.replaceTranslations
- GET /api/maps/{uid}/{property} — Map.getObjectProperty
- POST /api/maps/{uid}/{property} — Map.addCollectionItemsJson
- PUT /api/maps/{uid}/{property} — Map.replaceCollectionItemsJson
- DELETE /api/maps/{uid}/{property} — Map.deleteCollectionItemsJson
- GET /api/maps/{uid}/{property}/gist — Map.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/maps/{uid}/{property}/gist.csv — Map.getObjectPropertyGistAsCsv
- POST /api/maps/{uid}/{property}/{itemId} — Map.addCollectionItem
- DELETE /api/maps/{uid}/{property}/{itemId} — Map.deleteCollectionItem

## me
- GET /api/me/ — Me.getCurrentUser
- PUT /api/me/ — Me.updateCurrentUser
- GET /api/me/authorities — Me.getAuthorities
- GET /api/me/authorities/{authority} — Me.hasAuthority
- GET /api/me/authorization — Me.getAuthorities2
- GET /api/me/authorization/{authority} — Me.hasAuthority2
- DELETE /api/me/avatar — Me.removeAvatar
- PUT /api/me/changePassword — Me.changePassword
- GET /api/me/dashboard — Me.getDashboard
- POST /api/me/dashboard/interpretations/read — Me.updateInterpretationsLastRead
- GET /api/me/dataApprovalLevels — Me.getApprovalLevels
- GET /api/me/dataApprovalWorkflows — Me.getCurrentUserDataApprovalWorkflows
- GET /api/me/settings — Me.getSettings
- GET /api/me/settings/{key} — Me.getSetting
- POST /api/me/validatePassword — Me.validatePasswordText
- POST /api/me/verifyPassword — Me.verifyPasswordText+verifyPasswordJson

## menu
- POST /api/menu/ — Menu.saveMenuOrder

## messageConversations
- GET /api/messageConversations/ — MessageConversation.getObjectList: List all MessageConversations
- POST /api/messageConversations/ — MessageConversation.postJsonObject
- DELETE /api/messageConversations/ — MessageConversation.removeUserFromMessageConversations
- GET /api/messageConversations/#getObjectListCsv — MessageConversation.getObjectListCsv
- POST /api/messageConversations/feedback — MessageConversation.postMessageConversationFeedback
- POST /api/messageConversations/followup — MessageConversation.markMessageConversationFollowup
- GET /api/messageConversations/gist — MessageConversation.getObjectListGist+getObjectListGistAsCsv
- GET /api/messageConversations/gist.csv — MessageConversation.getObjectListGistAsCsv
- POST /api/messageConversations/read — MessageConversation.markMessageConversationsRead
- PATCH /api/messageConversations/sharing — MessageConversation.bulkSharing
- POST /api/messageConversations/unfollowup — MessageConversation.unmarkMessageConversationFollowup
- POST /api/messageConversations/unread — MessageConversation.markMessageConversationsUnread
- DELETE /api/messageConversations/{mc-uid}/{user-uid} — MessageConversation.removeUserFromMessageConversation
- GET /api/messageConversations/{mcUid}/{msgUid}/attachments/{fileUid} — MessageConversation.getAttachment
- GET /api/messageConversations/{uid} — MessageConversation.getObject: View a MessageConversation
- POST /api/messageConversations/{uid} — MessageConversation.postMessageConversationReply
- PUT /api/messageConversations/{uid} — MessageConversation.putJsonObject
- PATCH /api/messageConversations/{uid} — MessageConversation.patchObject
- DELETE /api/messageConversations/{uid} — MessageConversation.deleteObject: Deletes the MessageConversation provided by ID.
- POST /api/messageConversations/{uid}/assign — MessageConversation.setUserAssigned
- DELETE /api/messageConversations/{uid}/assign — MessageConversation.removeUserAssigned
- GET /api/messageConversations/{uid}/gist — MessageConversation.getObjectGist+getObjectGistAsCsv
- GET /api/messageConversations/{uid}/gist.csv — MessageConversation.getObjectGistAsCsv
- POST /api/messageConversations/{uid}/priority — MessageConversation.setMessagePriority
- POST /api/messageConversations/{uid}/read — MessageConversation.markMessageConversationRead
- POST /api/messageConversations/{uid}/recipients — MessageConversation.addRecipientsToMessageConversation
- PUT /api/messageConversations/{uid}/sharing — MessageConversation.setSharing
- POST /api/messageConversations/{uid}/status — MessageConversation.setMessageStatus
- PUT /api/messageConversations/{uid}/translations — MessageConversation.replaceTranslations
- POST /api/messageConversations/{uid}/unread — MessageConversation.markMessageConversationUnread
- GET /api/messageConversations/{uid}/{property} — MessageConversation.getObjectProperty
- POST /api/messageConversations/{uid}/{property} — MessageConversation.addCollectionItemsJson
- PUT /api/messageConversations/{uid}/{property} — MessageConversation.replaceCollectionItemsJson
- DELETE /api/messageConversations/{uid}/{property} — MessageConversation.deleteCollectionItemsJson
- GET /api/messageConversations/{uid}/{property}/gist — MessageConversation.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/messageConversations/{uid}/{property}/gist.csv — MessageConversation.getObjectPropertyGistAsCsv
- POST /api/messageConversations/{uid}/{property}/{itemId} — MessageConversation.addCollectionItem
- DELETE /api/messageConversations/{uid}/{property}/{itemId} — MessageConversation.deleteCollectionItem

## messages
- GET /api/messages/ — ProgramMessage.getProgramMessages: Get program messages matching given query criteria.
- POST /api/messages/ — ProgramMessage.sendMessages: Send event or enrollment messages.
- GET /api/messages/#getObjectList — ProgramMessage.getObjectList: List all ProgramMessages
- GET /api/messages/#getObjectListCsv — ProgramMessage.getObjectListCsv
- POST /api/messages/#postJsonObject — ProgramMessage.postJsonObject
- GET /api/messages/gist — ProgramMessage.getObjectListGist+getObjectListGistAsCsv
- GET /api/messages/gist.csv — ProgramMessage.getObjectListGistAsCsv
- GET /api/messages/scheduled/sent — ProgramMessage.getScheduledSentMessage: Get all of those scheduled messages which were sent successfully.
- PATCH /api/messages/sharing — ProgramMessage.bulkSharing
- GET /api/messages/{uid} — ProgramMessage.getObject: View a ProgramMessage
- PUT /api/messages/{uid} — ProgramMessage.putJsonObject
- PATCH /api/messages/{uid} — ProgramMessage.patchObject
- DELETE /api/messages/{uid} — ProgramMessage.deleteObject: Deletes the ProgramMessage provided by ID.
- GET /api/messages/{uid}/gist — ProgramMessage.getObjectGist+getObjectGistAsCsv
- GET /api/messages/{uid}/gist.csv — ProgramMessage.getObjectGistAsCsv
- PUT /api/messages/{uid}/sharing — ProgramMessage.setSharing
- PUT /api/messages/{uid}/translations — ProgramMessage.replaceTranslations
- GET /api/messages/{uid}/{property} — ProgramMessage.getObjectProperty
- POST /api/messages/{uid}/{property} — ProgramMessage.addCollectionItemsJson
- PUT /api/messages/{uid}/{property} — ProgramMessage.replaceCollectionItemsJson
- DELETE /api/messages/{uid}/{property} — ProgramMessage.deleteCollectionItemsJson
- GET /api/messages/{uid}/{property}/gist — ProgramMessage.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/messages/{uid}/{property}/gist.csv — ProgramMessage.getObjectPropertyGistAsCsv
- POST /api/messages/{uid}/{property}/{itemId} — ProgramMessage.addCollectionItem
- DELETE /api/messages/{uid}/{property}/{itemId} — ProgramMessage.deleteCollectionItem

## metadata
- GET /api/metadata/ — MetadataImportExport.getMetadata
- POST /api/metadata/ — MetadataImportExport.postJsonMetadata+postCsvMetadata
- GET /api/metadata/csvImportClasses — MetadataImportExport.getCsvImportClasses
- POST /api/metadata/gml — MetadataImportExport.postGmlMetadata
- GET /api/metadata/proposals/ — MetadataWorkflow.getProposals
- POST /api/metadata/proposals/ — MetadataWorkflow.proposeProposal
- GET /api/metadata/proposals/gist — MetadataWorkflow.getObjectListGist+getObjectListGistAsCsv
- GET /api/metadata/proposals/gist.csv — MetadataWorkflow.getObjectListGistAsCsv
- GET /api/metadata/proposals/{uid} — MetadataWorkflow.getProposal
- POST /api/metadata/proposals/{uid} — MetadataWorkflow.acceptProposal
- PUT /api/metadata/proposals/{uid} — MetadataWorkflow.adjustProposal
- PATCH /api/metadata/proposals/{uid} — MetadataWorkflow.opposeProposal
- DELETE /api/metadata/proposals/{uid} — MetadataWorkflow.rejectProposal
- GET /api/metadata/proposals/{uid}/gist — MetadataWorkflow.getObjectGist+getObjectGistAsCsv
- GET /api/metadata/proposals/{uid}/gist.csv — MetadataWorkflow.getObjectGistAsCsv
- GET /api/metadata/proposals/{uid}/{property}/gist — MetadataWorkflow.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/metadata/proposals/{uid}/{property}/gist.csv — MetadataWorkflow.getObjectPropertyGistAsCsv
- PATCH /api/metadata/sharing — MetadataImportExport.bulkSharing
- GET /api/metadata/sync/ — MetadataSync.metadataSync
- GET /api/metadata/version — MetadataVersion.getMetaDataVersion
- POST /api/metadata/version/create — MetadataVersion.createSystemVersion
- GET /api/metadata/version/history — MetadataVersion.getMetaDataVersionHistory
- GET /api/metadata/version/{versionName}/data — MetadataVersion.downloadVersion
- GET /api/metadata/version/{versionName}/data.gz — MetadataVersion.downloadGZipVersion
- GET /api/metadata/versions — MetadataVersion.getAllVersion

## metrics
- GET /api/metrics — PrometheusScrapeEndpoint.scrape

## minMaxDataElements
- GET /api/minMaxDataElements/ — MinMaxDataElement.getObjectList
- POST /api/minMaxDataElements/ — MinMaxDataElement.postJsonObject
- DELETE /api/minMaxDataElements/ — MinMaxDataElement.deleteObject
- POST /api/minMaxDataElements/delete — MinMaxDataElement.bulkDeleteJson
- POST /api/minMaxDataElements/delete#bulkDeleteCsv — MinMaxDataElement.bulkDeleteCsv
- POST /api/minMaxDataElements/upsert — MinMaxDataElement.bulkPostJson
- POST /api/minMaxDataElements/upsert#bulkPostCsv — MinMaxDataElement.bulkPostCsv

## minMaxValues
- POST /api/minMaxValues/ — MinMaxValueGeneration.generateMinMaxValue
- DELETE /api/minMaxValues/{ou} — MinMaxValueGeneration.removeMinMaxValue

## oAuth2AuthorizationConsents
- GET /api/oAuth2AuthorizationConsents/ — OAuth2AuthorizationConsent.getObjectList
- GET /api/oAuth2AuthorizationConsents/#getObjectListCsv — OAuth2AuthorizationConsent.getObjectListCsv
- GET /api/oAuth2AuthorizationConsents/gist — OAuth2AuthorizationConsent.getObjectListGist+getObjectListGistAsCsv
- GET /api/oAuth2AuthorizationConsents/gist.csv — OAuth2AuthorizationConsent.getObjectListGistAsCsv
- GET /api/oAuth2AuthorizationConsents/{uid} — OAuth2AuthorizationConsent.getObject
- GET /api/oAuth2AuthorizationConsents/{uid}/gist — OAuth2AuthorizationConsent.getObjectGist+getObjectGistAsCsv
- GET /api/oAuth2AuthorizationConsents/{uid}/gist.csv — OAuth2AuthorizationConsent.getObjectGistAsCsv
- GET /api/oAuth2AuthorizationConsents/{uid}/{property} — OAuth2AuthorizationConsent.getObjectProperty
- GET /api/oAuth2AuthorizationConsents/{uid}/{property}/gist — OAuth2AuthorizationConsent.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/oAuth2AuthorizationConsents/{uid}/{property}/gist.csv — OAuth2AuthorizationConsent.getObjectPropertyGistAsCsv

## oAuth2Authorizations
- GET /api/oAuth2Authorizations/ — OAuth2Authorization.getObjectList
- GET /api/oAuth2Authorizations/#getObjectListCsv — OAuth2Authorization.getObjectListCsv
- GET /api/oAuth2Authorizations/gist — OAuth2Authorization.getObjectListGist+getObjectListGistAsCsv
- GET /api/oAuth2Authorizations/gist.csv — OAuth2Authorization.getObjectListGistAsCsv
- GET /api/oAuth2Authorizations/{uid} — OAuth2Authorization.getObject
- GET /api/oAuth2Authorizations/{uid}/gist — OAuth2Authorization.getObjectGist+getObjectGistAsCsv
- GET /api/oAuth2Authorizations/{uid}/gist.csv — OAuth2Authorization.getObjectGistAsCsv
- GET /api/oAuth2Authorizations/{uid}/{property} — OAuth2Authorization.getObjectProperty
- GET /api/oAuth2Authorizations/{uid}/{property}/gist — OAuth2Authorization.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/oAuth2Authorizations/{uid}/{property}/gist.csv — OAuth2Authorization.getObjectPropertyGistAsCsv

## oAuth2Clients
- GET /api/oAuth2Clients/ — OAuth2Client.getObjectList: List all Dhis2OAuth2Clients
- POST /api/oAuth2Clients/ — OAuth2Client.postJsonObject
- GET /api/oAuth2Clients/#getObjectListCsv — OAuth2Client.getObjectListCsv
- GET /api/oAuth2Clients/gist — OAuth2Client.getObjectListGist+getObjectListGistAsCsv
- GET /api/oAuth2Clients/gist.csv — OAuth2Client.getObjectListGistAsCsv
- PATCH /api/oAuth2Clients/sharing — OAuth2Client.bulkSharing
- GET /api/oAuth2Clients/{uid} — OAuth2Client.getObject: View a Dhis2OAuth2Client
- PUT /api/oAuth2Clients/{uid} — OAuth2Client.putJsonObject
- PATCH /api/oAuth2Clients/{uid} — OAuth2Client.patchObject
- DELETE /api/oAuth2Clients/{uid} — OAuth2Client.deleteObject: Deletes the Dhis2OAuth2Client provided by ID.
- GET /api/oAuth2Clients/{uid}/gist — OAuth2Client.getObjectGist+getObjectGistAsCsv
- GET /api/oAuth2Clients/{uid}/gist.csv — OAuth2Client.getObjectGistAsCsv
- PUT /api/oAuth2Clients/{uid}/sharing — OAuth2Client.setSharing
- PUT /api/oAuth2Clients/{uid}/translations — OAuth2Client.replaceTranslations
- GET /api/oAuth2Clients/{uid}/{property} — OAuth2Client.getObjectProperty
- POST /api/oAuth2Clients/{uid}/{property} — OAuth2Client.addCollectionItemsJson
- PUT /api/oAuth2Clients/{uid}/{property} — OAuth2Client.replaceCollectionItemsJson
- DELETE /api/oAuth2Clients/{uid}/{property} — OAuth2Client.deleteCollectionItemsJson
- GET /api/oAuth2Clients/{uid}/{property}/gist — OAuth2Client.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/oAuth2Clients/{uid}/{property}/gist.csv — OAuth2Client.getObjectPropertyGistAsCsv
- POST /api/oAuth2Clients/{uid}/{property}/{itemId} — OAuth2Client.addCollectionItem
- DELETE /api/oAuth2Clients/{uid}/{property}/{itemId} — OAuth2Client.deleteCollectionItem

## openapi
- GET /api/openapi.json — OpenApi.getOpenApiJson
- GET /api/openapi/openapi.html — OpenApi.getOpenApiHtml2: The HTML to browse (view) the DHIS2 API specification based on OpenAPI JSON either in its entirety or scoped to the path(s) or domain(s) re…
- GET /api/openapi/openapi.json — OpenApi.getOpenApiJson2
- GET /api/openapi/openapi.yaml — OpenApi.getOpenApiYaml2
- GET /api/{path}/openapi.json — OpenApi.getPathOpenApiJson

## openapi.html
- GET /api/openapi.html — OpenApi.getOpenApiHtml: The HTML to browse (view) the DHIS2 API specification based on OpenAPI JSON either in its entirety or scoped to the path(s) or domain(s) re…
- GET /api/{path}/openapi.html — OpenApi.getPathOpenApiHtml: The HTML to browse (view) the DHIS2 API specification based on OpenAPI JSON for the path

## openapi.yaml
- GET /api/openapi.yaml — OpenApi.getOpenApiYaml
- GET /api/{path}/openapi.yaml — OpenApi.getPathOpenApiYaml

## optionGroupSets
- GET /api/optionGroupSets/ — OptionGroupSet.getObjectList: List all OptionGroupSets
- POST /api/optionGroupSets/ — OptionGroupSet.postJsonObject
- GET /api/optionGroupSets/#getObjectListCsv — OptionGroupSet.getObjectListCsv
- GET /api/optionGroupSets/gist — OptionGroupSet.getObjectListGist+getObjectListGistAsCsv
- GET /api/optionGroupSets/gist.csv — OptionGroupSet.getObjectListGistAsCsv
- PATCH /api/optionGroupSets/sharing — OptionGroupSet.bulkSharing
- GET /api/optionGroupSets/{uid} — OptionGroupSet.getObject: View a OptionGroupSet
- PUT /api/optionGroupSets/{uid} — OptionGroupSet.putJsonObject
- PATCH /api/optionGroupSets/{uid} — OptionGroupSet.patchObject
- DELETE /api/optionGroupSets/{uid} — OptionGroupSet.deleteObject: Deletes the OptionGroupSet provided by ID.
- GET /api/optionGroupSets/{uid}/gist — OptionGroupSet.getObjectGist+getObjectGistAsCsv
- GET /api/optionGroupSets/{uid}/gist.csv — OptionGroupSet.getObjectGistAsCsv
- PUT /api/optionGroupSets/{uid}/sharing — OptionGroupSet.setSharing
- PUT /api/optionGroupSets/{uid}/translations — OptionGroupSet.replaceTranslations
- GET /api/optionGroupSets/{uid}/{property} — OptionGroupSet.getObjectProperty
- POST /api/optionGroupSets/{uid}/{property} — OptionGroupSet.addCollectionItemsJson
- PUT /api/optionGroupSets/{uid}/{property} — OptionGroupSet.replaceCollectionItemsJson
- DELETE /api/optionGroupSets/{uid}/{property} — OptionGroupSet.deleteCollectionItemsJson
- GET /api/optionGroupSets/{uid}/{property}/gist — OptionGroupSet.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/optionGroupSets/{uid}/{property}/gist.csv — OptionGroupSet.getObjectPropertyGistAsCsv
- POST /api/optionGroupSets/{uid}/{property}/{itemId} — OptionGroupSet.addCollectionItem
- DELETE /api/optionGroupSets/{uid}/{property}/{itemId} — OptionGroupSet.deleteCollectionItem

## optionGroups
- GET /api/optionGroups/ — OptionGroup.getObjectList: List all OptionGroups
- POST /api/optionGroups/ — OptionGroup.postJsonObject
- GET /api/optionGroups/#getObjectListCsv — OptionGroup.getObjectListCsv
- GET /api/optionGroups/gist — OptionGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/optionGroups/gist.csv — OptionGroup.getObjectListGistAsCsv
- PATCH /api/optionGroups/sharing — OptionGroup.bulkSharing
- GET /api/optionGroups/{uid} — OptionGroup.getObject: View a OptionGroup
- PUT /api/optionGroups/{uid} — OptionGroup.putJsonObject
- PATCH /api/optionGroups/{uid} — OptionGroup.patchObject
- DELETE /api/optionGroups/{uid} — OptionGroup.deleteObject: Deletes the OptionGroup provided by ID.
- GET /api/optionGroups/{uid}/gist — OptionGroup.getObjectGist+getObjectGistAsCsv
- GET /api/optionGroups/{uid}/gist.csv — OptionGroup.getObjectGistAsCsv
- PUT /api/optionGroups/{uid}/sharing — OptionGroup.setSharing
- PUT /api/optionGroups/{uid}/translations — OptionGroup.replaceTranslations
- GET /api/optionGroups/{uid}/{property} — OptionGroup.getObjectProperty
- POST /api/optionGroups/{uid}/{property} — OptionGroup.addCollectionItemsJson
- PUT /api/optionGroups/{uid}/{property} — OptionGroup.replaceCollectionItemsJson
- DELETE /api/optionGroups/{uid}/{property} — OptionGroup.deleteCollectionItemsJson
- GET /api/optionGroups/{uid}/{property}/gist — OptionGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/optionGroups/{uid}/{property}/gist.csv — OptionGroup.getObjectPropertyGistAsCsv
- POST /api/optionGroups/{uid}/{property}/{itemId} — OptionGroup.addCollectionItem
- DELETE /api/optionGroups/{uid}/{property}/{itemId} — OptionGroup.deleteCollectionItem

## optionSets
- GET /api/optionSets/ — OptionSet.getObjectList: List all OptionSets
- POST /api/optionSets/ — OptionSet.postJsonObject
- GET /api/optionSets/#getObjectListCsv — OptionSet.getObjectListCsv
- GET /api/optionSets/gist — OptionSet.getObjectListGist+getObjectListGistAsCsv
- GET /api/optionSets/gist.csv — OptionSet.getObjectListGistAsCsv
- PATCH /api/optionSets/sharing — OptionSet.bulkSharing
- GET /api/optionSets/{uid} — OptionSet.getObject: View a OptionSet
- PUT /api/optionSets/{uid} — OptionSet.putJsonObject
- PATCH /api/optionSets/{uid} — OptionSet.patchObject
- DELETE /api/optionSets/{uid} — OptionSet.deleteObject: Deletes the OptionSet provided by ID.
- GET /api/optionSets/{uid}/gist — OptionSet.getObjectGist+getObjectGistAsCsv
- GET /api/optionSets/{uid}/gist.csv — OptionSet.getObjectGistAsCsv
- GET /api/optionSets/{uid}/metadata — OptionSet.getOptionSetWithDependencies
- PUT /api/optionSets/{uid}/sharing — OptionSet.setSharing
- PUT /api/optionSets/{uid}/translations — OptionSet.replaceTranslations
- GET /api/optionSets/{uid}/{property} — OptionSet.getObjectProperty
- POST /api/optionSets/{uid}/{property} — OptionSet.addCollectionItemsJson
- PUT /api/optionSets/{uid}/{property} — OptionSet.replaceCollectionItemsJson
- DELETE /api/optionSets/{uid}/{property} — OptionSet.deleteCollectionItemsJson
- GET /api/optionSets/{uid}/{property}/gist — OptionSet.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/optionSets/{uid}/{property}/gist.csv — OptionSet.getObjectPropertyGistAsCsv
- POST /api/optionSets/{uid}/{property}/{itemId} — OptionSet.addCollectionItem
- DELETE /api/optionSets/{uid}/{property}/{itemId} — OptionSet.deleteCollectionItem

## options
- GET /api/options/ — Option.getObjectList: List all Options
- POST /api/options/ — Option.postJsonObject
- GET /api/options/#getObjectListCsv — Option.getObjectListCsv
- GET /api/options/gist — Option.getObjectListGist+getObjectListGistAsCsv
- GET /api/options/gist.csv — Option.getObjectListGistAsCsv
- PATCH /api/options/sharing — Option.bulkSharing
- GET /api/options/{uid} — Option.getObject: View a Option
- PUT /api/options/{uid} — Option.putJsonObject
- PATCH /api/options/{uid} — Option.patchObject
- DELETE /api/options/{uid} — Option.deleteObject: Deletes the Option provided by ID.
- GET /api/options/{uid}/gist — Option.getObjectGist+getObjectGistAsCsv
- GET /api/options/{uid}/gist.csv — Option.getObjectGistAsCsv
- PUT /api/options/{uid}/sharing — Option.setSharing
- PUT /api/options/{uid}/translations — Option.replaceTranslations
- GET /api/options/{uid}/{property} — Option.getObjectProperty
- POST /api/options/{uid}/{property} — Option.addCollectionItemsJson
- PUT /api/options/{uid}/{property} — Option.replaceCollectionItemsJson
- DELETE /api/options/{uid}/{property} — Option.deleteCollectionItemsJson
- GET /api/options/{uid}/{property}/gist — Option.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/options/{uid}/{property}/gist.csv — Option.getObjectPropertyGistAsCsv
- POST /api/options/{uid}/{property}/{itemId} — Option.addCollectionItem
- DELETE /api/options/{uid}/{property}/{itemId} — Option.deleteCollectionItem

## orgUnitAnalytics
- GET /api/orgUnitAnalytics — OrgUnitAnalytics.getJson

## orgUnitAnalytics.csv
- GET /api/orgUnitAnalytics.csv — OrgUnitAnalytics.getCsv

## orgUnitAnalytics.pdf
- GET /api/orgUnitAnalytics.pdf — OrgUnitAnalytics.getPdf

## orgUnitAnalytics.xls
- GET /api/orgUnitAnalytics.xls — OrgUnitAnalytics.getXls

## organisationUnitGroupSets
- GET /api/organisationUnitGroupSets/ — OrganisationUnitGroupSet.getObjectList: List all OrganisationUnitGroupSets
- POST /api/organisationUnitGroupSets/ — OrganisationUnitGroupSet.postJsonObject
- GET /api/organisationUnitGroupSets/#getObjectListCsv — OrganisationUnitGroupSet.getObjectListCsv
- GET /api/organisationUnitGroupSets/gist — OrganisationUnitGroupSet.getObjectListGist+getObjectListGistAsCsv
- GET /api/organisationUnitGroupSets/gist.csv — OrganisationUnitGroupSet.getObjectListGistAsCsv
- PATCH /api/organisationUnitGroupSets/sharing — OrganisationUnitGroupSet.bulkSharing
- GET /api/organisationUnitGroupSets/{uid} — OrganisationUnitGroupSet.getObject: View a OrganisationUnitGroupSet
- PUT /api/organisationUnitGroupSets/{uid} — OrganisationUnitGroupSet.putJsonObject
- PATCH /api/organisationUnitGroupSets/{uid} — OrganisationUnitGroupSet.patchObject
- DELETE /api/organisationUnitGroupSets/{uid} — OrganisationUnitGroupSet.deleteObject: Deletes the OrganisationUnitGroupSet provided by ID.
- GET /api/organisationUnitGroupSets/{uid}/gist — OrganisationUnitGroupSet.getObjectGist+getObjectGistAsCsv
- GET /api/organisationUnitGroupSets/{uid}/gist.csv — OrganisationUnitGroupSet.getObjectGistAsCsv
- PUT /api/organisationUnitGroupSets/{uid}/sharing — OrganisationUnitGroupSet.setSharing
- PUT /api/organisationUnitGroupSets/{uid}/translations — OrganisationUnitGroupSet.replaceTranslations
- GET /api/organisationUnitGroupSets/{uid}/{property} — OrganisationUnitGroupSet.getObjectProperty
- POST /api/organisationUnitGroupSets/{uid}/{property} — OrganisationUnitGroupSet.addCollectionItemsJson
- PUT /api/organisationUnitGroupSets/{uid}/{property} — OrganisationUnitGroupSet.replaceCollectionItemsJson
- DELETE /api/organisationUnitGroupSets/{uid}/{property} — OrganisationUnitGroupSet.deleteCollectionItemsJson
- GET /api/organisationUnitGroupSets/{uid}/{property}/gist — OrganisationUnitGroupSet.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/organisationUnitGroupSets/{uid}/{property}/gist.csv — OrganisationUnitGroupSet.getObjectPropertyGistAsCsv
- POST /api/organisationUnitGroupSets/{uid}/{property}/{itemId} — OrganisationUnitGroupSet.addCollectionItem
- DELETE /api/organisationUnitGroupSets/{uid}/{property}/{itemId} — OrganisationUnitGroupSet.deleteCollectionItem

## organisationUnitGroups
- GET /api/organisationUnitGroups/ — OrganisationUnitGroup.getObjectList: List all OrganisationUnitGroups
- POST /api/organisationUnitGroups/ — OrganisationUnitGroup.postJsonObject
- GET /api/organisationUnitGroups/#getObjectListCsv — OrganisationUnitGroup.getObjectListCsv
- GET /api/organisationUnitGroups/gist — OrganisationUnitGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/organisationUnitGroups/gist.csv — OrganisationUnitGroup.getObjectListGistAsCsv
- PATCH /api/organisationUnitGroups/sharing — OrganisationUnitGroup.bulkSharing
- GET /api/organisationUnitGroups/{uid} — OrganisationUnitGroup.getObject: View a OrganisationUnitGroup
- PUT /api/organisationUnitGroups/{uid} — OrganisationUnitGroup.putJsonObject
- PATCH /api/organisationUnitGroups/{uid} — OrganisationUnitGroup.patchObject
- DELETE /api/organisationUnitGroups/{uid} — OrganisationUnitGroup.deleteObject: Deletes the OrganisationUnitGroup provided by ID.
- GET /api/organisationUnitGroups/{uid}/gist — OrganisationUnitGroup.getObjectGist+getObjectGistAsCsv
- GET /api/organisationUnitGroups/{uid}/gist.csv — OrganisationUnitGroup.getObjectGistAsCsv
- PUT /api/organisationUnitGroups/{uid}/sharing — OrganisationUnitGroup.setSharing
- PUT /api/organisationUnitGroups/{uid}/translations — OrganisationUnitGroup.replaceTranslations
- GET /api/organisationUnitGroups/{uid}/{property} — OrganisationUnitGroup.getObjectProperty
- POST /api/organisationUnitGroups/{uid}/{property} — OrganisationUnitGroup.addCollectionItemsJson
- PUT /api/organisationUnitGroups/{uid}/{property} — OrganisationUnitGroup.replaceCollectionItemsJson
- DELETE /api/organisationUnitGroups/{uid}/{property} — OrganisationUnitGroup.deleteCollectionItemsJson
- GET /api/organisationUnitGroups/{uid}/{property}/gist — OrganisationUnitGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/organisationUnitGroups/{uid}/{property}/gist.csv — OrganisationUnitGroup.getObjectPropertyGistAsCsv
- POST /api/organisationUnitGroups/{uid}/{property}/{itemId} — OrganisationUnitGroup.addCollectionItem
- DELETE /api/organisationUnitGroups/{uid}/{property}/{itemId} — OrganisationUnitGroup.deleteCollectionItem

## organisationUnitLevels
- GET /api/organisationUnitLevels/ — OrganisationUnitLevel.getObjectList: List all OrganisationUnitLevels
- POST /api/organisationUnitLevels/ — OrganisationUnitLevel.postJsonObject
- GET /api/organisationUnitLevels/#getObjectListCsv — OrganisationUnitLevel.getObjectListCsv
- GET /api/organisationUnitLevels/gist — OrganisationUnitLevel.getObjectListGist+getObjectListGistAsCsv
- GET /api/organisationUnitLevels/gist.csv — OrganisationUnitLevel.getObjectListGistAsCsv
- PATCH /api/organisationUnitLevels/sharing — OrganisationUnitLevel.bulkSharing
- GET /api/organisationUnitLevels/{uid} — OrganisationUnitLevel.getObject: View a OrganisationUnitLevel
- PUT /api/organisationUnitLevels/{uid} — OrganisationUnitLevel.putJsonObject
- PATCH /api/organisationUnitLevels/{uid} — OrganisationUnitLevel.patchObject
- DELETE /api/organisationUnitLevels/{uid} — OrganisationUnitLevel.deleteObject: Deletes the OrganisationUnitLevel provided by ID.
- GET /api/organisationUnitLevels/{uid}/gist — OrganisationUnitLevel.getObjectGist+getObjectGistAsCsv
- GET /api/organisationUnitLevels/{uid}/gist.csv — OrganisationUnitLevel.getObjectGistAsCsv
- PUT /api/organisationUnitLevels/{uid}/sharing — OrganisationUnitLevel.setSharing
- PUT /api/organisationUnitLevels/{uid}/translations — OrganisationUnitLevel.replaceTranslations
- GET /api/organisationUnitLevels/{uid}/{property} — OrganisationUnitLevel.getObjectProperty
- POST /api/organisationUnitLevels/{uid}/{property} — OrganisationUnitLevel.addCollectionItemsJson
- PUT /api/organisationUnitLevels/{uid}/{property} — OrganisationUnitLevel.replaceCollectionItemsJson
- DELETE /api/organisationUnitLevels/{uid}/{property} — OrganisationUnitLevel.deleteCollectionItemsJson
- GET /api/organisationUnitLevels/{uid}/{property}/gist — OrganisationUnitLevel.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/organisationUnitLevels/{uid}/{property}/gist.csv — OrganisationUnitLevel.getObjectPropertyGistAsCsv
- POST /api/organisationUnitLevels/{uid}/{property}/{itemId} — OrganisationUnitLevel.addCollectionItem
- DELETE /api/organisationUnitLevels/{uid}/{property}/{itemId} — OrganisationUnitLevel.deleteCollectionItem

## organisationUnitLocations
- GET /api/organisationUnitLocations/locationWithinOrgUnitBoundary — OrganisationUnitLocation.checkLocationWithinOrgUnit
- GET /api/organisationUnitLocations/orgUnitByLocation — OrganisationUnitLocation.getParentByLocation
- GET /api/organisationUnitLocations/withinRange — OrganisationUnitLocation.getEntitiesWithinRange

## organisationUnitProfile
- GET /api/organisationUnitProfile/ — OrganisationUnitProfile.getProfile
- POST /api/organisationUnitProfile/ — OrganisationUnitProfile.saveProfile
- GET /api/organisationUnitProfile/{uid}/data — OrganisationUnitProfile.getProfileData

## organisationUnits
- GET /api/organisationUnits/ — OrganisationUnit.getObjectList: List all OrganisationUnits
- POST /api/organisationUnits/ — OrganisationUnit.postJsonObject
- GET /api/organisationUnits/#getGeoJson — OrganisationUnit.getGeoJson
- GET /api/organisationUnits/#getObjectListCsv — OrganisationUnit.getObjectListCsv
- GET /api/organisationUnits/.geojson — OrganisationUnit.getGeoJson2
- POST /api/organisationUnits/geometry — GeoJsonImport.postImport
- DELETE /api/organisationUnits/geometry — GeoJsonImport.deleteImport
- GET /api/organisationUnits/gist — OrganisationUnit.getObjectListGist+getObjectListGistAsCsv
- GET /api/organisationUnits/gist.csv — OrganisationUnit.getObjectListGistAsCsv
- POST /api/organisationUnits/merge — OrganisationUnit.mergeOrgUnits
- PATCH /api/organisationUnits/sharing — OrganisationUnit.bulkSharing
- POST /api/organisationUnits/split — OrganisationUnit.splitOrgUnits
- GET /api/organisationUnits/{uid} — OrganisationUnit.getIncludeChildren+getObjectWithLevel+getIncludeDescendants+getIncludeAncestors
- PUT /api/organisationUnits/{uid} — OrganisationUnit.putJsonObject
- PATCH /api/organisationUnits/{uid} — OrganisationUnit.patchObject
- DELETE /api/organisationUnits/{uid} — OrganisationUnit.deleteObject: Deletes the OrganisationUnit provided by ID.
- GET /api/organisationUnits/{uid}#getObject — OrganisationUnit.getObject: View a OrganisationUnit
- GET /api/organisationUnits/{uid}/ancestors — OrganisationUnit.getAncestors
- GET /api/organisationUnits/{uid}/children — OrganisationUnit.getChildren+getChildrenWithLevel
- GET /api/organisationUnits/{uid}/descendants — OrganisationUnit.getDescendants
- POST /api/organisationUnits/{uid}/geometry — GeoJsonImport.postImportSingle
- DELETE /api/organisationUnits/{uid}/geometry — GeoJsonImport.deleteImportSingle
- GET /api/organisationUnits/{uid}/gist — OrganisationUnit.getObjectGist+getObjectGistAsCsv
- GET /api/organisationUnits/{uid}/gist.csv — OrganisationUnit.getObjectGistAsCsv
- GET /api/organisationUnits/{uid}/parents — OrganisationUnit.getParents
- PUT /api/organisationUnits/{uid}/sharing — OrganisationUnit.setSharing
- PUT /api/organisationUnits/{uid}/translations — OrganisationUnit.replaceTranslations
- GET /api/organisationUnits/{uid}/{property} — OrganisationUnit.getObjectProperty
- POST /api/organisationUnits/{uid}/{property} — OrganisationUnit.addCollectionItemsJson
- PUT /api/organisationUnits/{uid}/{property} — OrganisationUnit.replaceCollectionItemsJson
- DELETE /api/organisationUnits/{uid}/{property} — OrganisationUnit.deleteCollectionItemsJson
- GET /api/organisationUnits/{uid}/{property}/gist — OrganisationUnit.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/organisationUnits/{uid}/{property}/gist.csv — OrganisationUnit.getObjectPropertyGistAsCsv
- POST /api/organisationUnits/{uid}/{property}/{itemId} — OrganisationUnit.addCollectionItem
- DELETE /api/organisationUnits/{uid}/{property}/{itemId} — OrganisationUnit.deleteCollectionItem

## outlierDetection
- GET /api/outlierDetection — OutlierDetection.getOutliersJson

## outlierDetection.csv
- GET /api/outlierDetection.csv — OutlierDetection.getOutliersCsv

## pdfForm
- POST /api/pdfForm/dataSet — PdfForm.sendFormPdfDataSet
- GET /api/pdfForm/dataSet/{dataSetUid} — PdfForm.getFormPdfDataSet

## periodTypes
- GET /api/periodTypes/ — PeriodType.getPeriodTypes
- PUT /api/periodTypes/ — PeriodType.putPeriodType
- GET /api/periodTypes/relativePeriodTypes — PeriodType.getRelativePeriodTypes

## ping
- GET /api/ping — Ping.ping

## potentialDuplicates
- GET /api/potentialDuplicates/ — Deduplication.getPotentialDuplicates
- POST /api/potentialDuplicates/ — Deduplication.postPotentialDuplicate
- GET /api/potentialDuplicates/{uid} — Deduplication.getPotentialDuplicateById
- PUT /api/potentialDuplicates/{uid} — Deduplication.updatePotentialDuplicate
- POST /api/potentialDuplicates/{uid}/merge — Deduplication.mergePotentialDuplicate

## predictions
- POST /api/predictions/ — Prediction.runPredictors
- PUT /api/predictions/ — Prediction.runPredictors2

## predictorGroups
- GET /api/predictorGroups/ — PredictorGroup.getObjectList: List all PredictorGroups
- POST /api/predictorGroups/ — PredictorGroup.postJsonObject
- GET /api/predictorGroups/#getObjectListCsv — PredictorGroup.getObjectListCsv
- GET /api/predictorGroups/gist — PredictorGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/predictorGroups/gist.csv — PredictorGroup.getObjectListGistAsCsv
- PATCH /api/predictorGroups/sharing — PredictorGroup.bulkSharing
- GET /api/predictorGroups/{uid} — PredictorGroup.getObject: View a PredictorGroup
- PUT /api/predictorGroups/{uid} — PredictorGroup.putJsonObject
- PATCH /api/predictorGroups/{uid} — PredictorGroup.patchObject
- DELETE /api/predictorGroups/{uid} — PredictorGroup.deleteObject: Deletes the PredictorGroup provided by ID.
- GET /api/predictorGroups/{uid}/gist — PredictorGroup.getObjectGist+getObjectGistAsCsv
- GET /api/predictorGroups/{uid}/gist.csv — PredictorGroup.getObjectGistAsCsv
- POST /api/predictorGroups/{uid}/run — PredictorGroup.runPredictorGroup
- PUT /api/predictorGroups/{uid}/run — PredictorGroup.runPredictorGroup2
- PUT /api/predictorGroups/{uid}/sharing — PredictorGroup.setSharing
- PUT /api/predictorGroups/{uid}/translations — PredictorGroup.replaceTranslations
- GET /api/predictorGroups/{uid}/{property} — PredictorGroup.getObjectProperty
- POST /api/predictorGroups/{uid}/{property} — PredictorGroup.addCollectionItemsJson
- PUT /api/predictorGroups/{uid}/{property} — PredictorGroup.replaceCollectionItemsJson
- DELETE /api/predictorGroups/{uid}/{property} — PredictorGroup.deleteCollectionItemsJson
- GET /api/predictorGroups/{uid}/{property}/gist — PredictorGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/predictorGroups/{uid}/{property}/gist.csv — PredictorGroup.getObjectPropertyGistAsCsv
- POST /api/predictorGroups/{uid}/{property}/{itemId} — PredictorGroup.addCollectionItem
- DELETE /api/predictorGroups/{uid}/{property}/{itemId} — PredictorGroup.deleteCollectionItem

## predictors
- GET /api/predictors/ — Predictor.getObjectList: List all Predictors
- POST /api/predictors/ — Predictor.postJsonObject
- GET /api/predictors/#getObjectListCsv — Predictor.getObjectListCsv
- POST /api/predictors/expression/description — Predictor.getExpressionDescription
- GET /api/predictors/gist — Predictor.getObjectListGist+getObjectListGistAsCsv
- GET /api/predictors/gist.csv — Predictor.getObjectListGistAsCsv
- POST /api/predictors/run — Predictor.runPredictors
- PUT /api/predictors/run — Predictor.runPredictors2
- PATCH /api/predictors/sharing — Predictor.bulkSharing
- POST /api/predictors/skipTest/description — Predictor.getSkipTestDescription
- GET /api/predictors/{uid} — Predictor.getObject: View a Predictor
- PUT /api/predictors/{uid} — Predictor.putJsonObject
- PATCH /api/predictors/{uid} — Predictor.patchObject
- DELETE /api/predictors/{uid} — Predictor.deleteObject: Deletes the Predictor provided by ID.
- GET /api/predictors/{uid}/gist — Predictor.getObjectGist+getObjectGistAsCsv
- GET /api/predictors/{uid}/gist.csv — Predictor.getObjectGistAsCsv
- POST /api/predictors/{uid}/run — Predictor.runPredictor
- PUT /api/predictors/{uid}/run — Predictor.runPredictor2
- PUT /api/predictors/{uid}/sharing — Predictor.setSharing
- PUT /api/predictors/{uid}/translations — Predictor.replaceTranslations
- GET /api/predictors/{uid}/{property} — Predictor.getObjectProperty
- POST /api/predictors/{uid}/{property} — Predictor.addCollectionItemsJson
- PUT /api/predictors/{uid}/{property} — Predictor.replaceCollectionItemsJson
- DELETE /api/predictors/{uid}/{property} — Predictor.deleteCollectionItemsJson
- GET /api/predictors/{uid}/{property}/gist — Predictor.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/predictors/{uid}/{property}/gist.csv — Predictor.getObjectPropertyGistAsCsv
- POST /api/predictors/{uid}/{property}/{itemId} — Predictor.addCollectionItem
- DELETE /api/predictors/{uid}/{property}/{itemId} — Predictor.deleteCollectionItem

## programDataElements
- GET /api/programDataElements/ — ProgramDataElement.getObjectList

## programIndicatorGroups
- GET /api/programIndicatorGroups/ — ProgramIndicatorGroup.getObjectList: List all ProgramIndicatorGroups
- POST /api/programIndicatorGroups/ — ProgramIndicatorGroup.postJsonObject
- GET /api/programIndicatorGroups/#getObjectListCsv — ProgramIndicatorGroup.getObjectListCsv
- GET /api/programIndicatorGroups/gist — ProgramIndicatorGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/programIndicatorGroups/gist.csv — ProgramIndicatorGroup.getObjectListGistAsCsv
- PATCH /api/programIndicatorGroups/sharing — ProgramIndicatorGroup.bulkSharing
- GET /api/programIndicatorGroups/{uid} — ProgramIndicatorGroup.getObject: View a ProgramIndicatorGroup
- PUT /api/programIndicatorGroups/{uid} — ProgramIndicatorGroup.putJsonObject
- PATCH /api/programIndicatorGroups/{uid} — ProgramIndicatorGroup.patchObject
- DELETE /api/programIndicatorGroups/{uid} — ProgramIndicatorGroup.deleteObject: Deletes the ProgramIndicatorGroup provided by ID.
- GET /api/programIndicatorGroups/{uid}/gist — ProgramIndicatorGroup.getObjectGist+getObjectGistAsCsv
- GET /api/programIndicatorGroups/{uid}/gist.csv — ProgramIndicatorGroup.getObjectGistAsCsv
- PUT /api/programIndicatorGroups/{uid}/sharing — ProgramIndicatorGroup.setSharing
- PUT /api/programIndicatorGroups/{uid}/translations — ProgramIndicatorGroup.replaceTranslations
- GET /api/programIndicatorGroups/{uid}/{property} — ProgramIndicatorGroup.getObjectProperty
- POST /api/programIndicatorGroups/{uid}/{property} — ProgramIndicatorGroup.addCollectionItemsJson
- PUT /api/programIndicatorGroups/{uid}/{property} — ProgramIndicatorGroup.replaceCollectionItemsJson
- DELETE /api/programIndicatorGroups/{uid}/{property} — ProgramIndicatorGroup.deleteCollectionItemsJson
- GET /api/programIndicatorGroups/{uid}/{property}/gist — ProgramIndicatorGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programIndicatorGroups/{uid}/{property}/gist.csv — ProgramIndicatorGroup.getObjectPropertyGistAsCsv
- POST /api/programIndicatorGroups/{uid}/{property}/{itemId} — ProgramIndicatorGroup.addCollectionItem
- DELETE /api/programIndicatorGroups/{uid}/{property}/{itemId} — ProgramIndicatorGroup.deleteCollectionItem

## programIndicators
- GET /api/programIndicators/ — ProgramIndicator.getObjectList: List all ProgramIndicators
- POST /api/programIndicators/ — ProgramIndicator.postJsonObject
- GET /api/programIndicators/#getObjectListCsv — ProgramIndicator.getObjectListCsv
- POST /api/programIndicators/expression/description — ProgramIndicator.getExpressionDescription
- POST /api/programIndicators/filter/description — ProgramIndicator.validateFilter
- GET /api/programIndicators/gist — ProgramIndicator.getObjectListGist+getObjectListGistAsCsv
- GET /api/programIndicators/gist.csv — ProgramIndicator.getObjectListGistAsCsv
- PATCH /api/programIndicators/sharing — ProgramIndicator.bulkSharing
- GET /api/programIndicators/{uid} — ProgramIndicator.getObject: View a ProgramIndicator
- PUT /api/programIndicators/{uid} — ProgramIndicator.putJsonObject
- PATCH /api/programIndicators/{uid} — ProgramIndicator.patchObject
- DELETE /api/programIndicators/{uid} — ProgramIndicator.deleteObject: Deletes the ProgramIndicator provided by ID.
- GET /api/programIndicators/{uid}/gist — ProgramIndicator.getObjectGist+getObjectGistAsCsv
- GET /api/programIndicators/{uid}/gist.csv — ProgramIndicator.getObjectGistAsCsv
- PUT /api/programIndicators/{uid}/sharing — ProgramIndicator.setSharing
- PUT /api/programIndicators/{uid}/translations — ProgramIndicator.replaceTranslations
- GET /api/programIndicators/{uid}/{property} — ProgramIndicator.getObjectProperty
- POST /api/programIndicators/{uid}/{property} — ProgramIndicator.addCollectionItemsJson
- PUT /api/programIndicators/{uid}/{property} — ProgramIndicator.replaceCollectionItemsJson
- DELETE /api/programIndicators/{uid}/{property} — ProgramIndicator.deleteCollectionItemsJson
- GET /api/programIndicators/{uid}/{property}/gist — ProgramIndicator.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programIndicators/{uid}/{property}/gist.csv — ProgramIndicator.getObjectPropertyGistAsCsv
- POST /api/programIndicators/{uid}/{property}/{itemId} — ProgramIndicator.addCollectionItem
- DELETE /api/programIndicators/{uid}/{property}/{itemId} — ProgramIndicator.deleteCollectionItem

## programNotificationInstances
- GET /api/programNotificationInstances/ — ProgramNotificationInstance.getScheduledMessage

## programNotificationTemplates
- GET /api/programNotificationTemplates/ — ProgramNotificationTemplate.getObjectList: List all ProgramNotificationTemplates
- POST /api/programNotificationTemplates/ — ProgramNotificationTemplate.postJsonObject
- GET /api/programNotificationTemplates/#getObjectListCsv — ProgramNotificationTemplate.getObjectListCsv
- GET /api/programNotificationTemplates/filter — ProgramNotificationTemplate.getProgramNotificationTemplates
- GET /api/programNotificationTemplates/gist — ProgramNotificationTemplate.getObjectListGist+getObjectListGistAsCsv
- GET /api/programNotificationTemplates/gist.csv — ProgramNotificationTemplate.getObjectListGistAsCsv
- PATCH /api/programNotificationTemplates/sharing — ProgramNotificationTemplate.bulkSharing
- GET /api/programNotificationTemplates/{uid} — ProgramNotificationTemplate.getObject: View a ProgramNotificationTemplate
- PUT /api/programNotificationTemplates/{uid} — ProgramNotificationTemplate.putJsonObject
- PATCH /api/programNotificationTemplates/{uid} — ProgramNotificationTemplate.patchObject
- DELETE /api/programNotificationTemplates/{uid} — ProgramNotificationTemplate.deleteObject: Deletes the ProgramNotificationTemplate provided by ID.
- GET /api/programNotificationTemplates/{uid}/gist — ProgramNotificationTemplate.getObjectGist+getObjectGistAsCsv
- GET /api/programNotificationTemplates/{uid}/gist.csv — ProgramNotificationTemplate.getObjectGistAsCsv
- PUT /api/programNotificationTemplates/{uid}/sharing — ProgramNotificationTemplate.setSharing
- PUT /api/programNotificationTemplates/{uid}/translations — ProgramNotificationTemplate.replaceTranslations
- GET /api/programNotificationTemplates/{uid}/{property} — ProgramNotificationTemplate.getObjectProperty
- POST /api/programNotificationTemplates/{uid}/{property} — ProgramNotificationTemplate.addCollectionItemsJson
- PUT /api/programNotificationTemplates/{uid}/{property} — ProgramNotificationTemplate.replaceCollectionItemsJson
- DELETE /api/programNotificationTemplates/{uid}/{property} — ProgramNotificationTemplate.deleteCollectionItemsJson
- GET /api/programNotificationTemplates/{uid}/{property}/gist — ProgramNotificationTemplate.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programNotificationTemplates/{uid}/{property}/gist.csv — ProgramNotificationTemplate.getObjectPropertyGistAsCsv
- POST /api/programNotificationTemplates/{uid}/{property}/{itemId} — ProgramNotificationTemplate.addCollectionItem
- DELETE /api/programNotificationTemplates/{uid}/{property}/{itemId} — ProgramNotificationTemplate.deleteCollectionItem

## programRuleActions
- GET /api/programRuleActions/ — ProgramRuleAction.getObjectList: List all ProgramRuleActions
- POST /api/programRuleActions/ — ProgramRuleAction.postJsonObject
- GET /api/programRuleActions/#getObjectListCsv — ProgramRuleAction.getObjectListCsv
- POST /api/programRuleActions/data/expression/description — ProgramRuleAction.getDataExpressionDescription
- GET /api/programRuleActions/gist — ProgramRuleAction.getObjectListGist+getObjectListGistAsCsv
- GET /api/programRuleActions/gist.csv — ProgramRuleAction.getObjectListGistAsCsv
- PATCH /api/programRuleActions/sharing — ProgramRuleAction.bulkSharing
- GET /api/programRuleActions/{uid} — ProgramRuleAction.getObject: View a ProgramRuleAction
- PUT /api/programRuleActions/{uid} — ProgramRuleAction.putJsonObject
- PATCH /api/programRuleActions/{uid} — ProgramRuleAction.patchObject
- DELETE /api/programRuleActions/{uid} — ProgramRuleAction.deleteObject: Deletes the ProgramRuleAction provided by ID.
- GET /api/programRuleActions/{uid}/gist — ProgramRuleAction.getObjectGist+getObjectGistAsCsv
- GET /api/programRuleActions/{uid}/gist.csv — ProgramRuleAction.getObjectGistAsCsv
- PUT /api/programRuleActions/{uid}/sharing — ProgramRuleAction.setSharing
- PUT /api/programRuleActions/{uid}/translations — ProgramRuleAction.replaceTranslations
- GET /api/programRuleActions/{uid}/{property} — ProgramRuleAction.getObjectProperty
- POST /api/programRuleActions/{uid}/{property} — ProgramRuleAction.addCollectionItemsJson
- PUT /api/programRuleActions/{uid}/{property} — ProgramRuleAction.replaceCollectionItemsJson
- DELETE /api/programRuleActions/{uid}/{property} — ProgramRuleAction.deleteCollectionItemsJson
- GET /api/programRuleActions/{uid}/{property}/gist — ProgramRuleAction.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programRuleActions/{uid}/{property}/gist.csv — ProgramRuleAction.getObjectPropertyGistAsCsv
- POST /api/programRuleActions/{uid}/{property}/{itemId} — ProgramRuleAction.addCollectionItem
- DELETE /api/programRuleActions/{uid}/{property}/{itemId} — ProgramRuleAction.deleteCollectionItem

## programRuleVariables
- GET /api/programRuleVariables/ — ProgramRuleVariable.getObjectList: List all ProgramRuleVariables
- POST /api/programRuleVariables/ — ProgramRuleVariable.postJsonObject
- GET /api/programRuleVariables/#getObjectListCsv — ProgramRuleVariable.getObjectListCsv
- GET /api/programRuleVariables/gist — ProgramRuleVariable.getObjectListGist+getObjectListGistAsCsv
- GET /api/programRuleVariables/gist.csv — ProgramRuleVariable.getObjectListGistAsCsv
- PATCH /api/programRuleVariables/sharing — ProgramRuleVariable.bulkSharing
- GET /api/programRuleVariables/{uid} — ProgramRuleVariable.getObject: View a ProgramRuleVariable
- PUT /api/programRuleVariables/{uid} — ProgramRuleVariable.putJsonObject
- PATCH /api/programRuleVariables/{uid} — ProgramRuleVariable.patchObject
- DELETE /api/programRuleVariables/{uid} — ProgramRuleVariable.deleteObject: Deletes the ProgramRuleVariable provided by ID.
- GET /api/programRuleVariables/{uid}/gist — ProgramRuleVariable.getObjectGist+getObjectGistAsCsv
- GET /api/programRuleVariables/{uid}/gist.csv — ProgramRuleVariable.getObjectGistAsCsv
- PUT /api/programRuleVariables/{uid}/sharing — ProgramRuleVariable.setSharing
- PUT /api/programRuleVariables/{uid}/translations — ProgramRuleVariable.replaceTranslations
- GET /api/programRuleVariables/{uid}/{property} — ProgramRuleVariable.getObjectProperty
- POST /api/programRuleVariables/{uid}/{property} — ProgramRuleVariable.addCollectionItemsJson
- PUT /api/programRuleVariables/{uid}/{property} — ProgramRuleVariable.replaceCollectionItemsJson
- DELETE /api/programRuleVariables/{uid}/{property} — ProgramRuleVariable.deleteCollectionItemsJson
- GET /api/programRuleVariables/{uid}/{property}/gist — ProgramRuleVariable.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programRuleVariables/{uid}/{property}/gist.csv — ProgramRuleVariable.getObjectPropertyGistAsCsv
- POST /api/programRuleVariables/{uid}/{property}/{itemId} — ProgramRuleVariable.addCollectionItem
- DELETE /api/programRuleVariables/{uid}/{property}/{itemId} — ProgramRuleVariable.deleteCollectionItem

## programRules
- GET /api/programRules/ — ProgramRule.getObjectList: List all ProgramRules
- POST /api/programRules/ — ProgramRule.postJsonObject
- GET /api/programRules/#getObjectListCsv — ProgramRule.getObjectListCsv
- POST /api/programRules/condition/description — ProgramRule.validateCondition
- GET /api/programRules/gist — ProgramRule.getObjectListGist+getObjectListGistAsCsv
- GET /api/programRules/gist.csv — ProgramRule.getObjectListGistAsCsv
- PATCH /api/programRules/sharing — ProgramRule.bulkSharing
- GET /api/programRules/{uid} — ProgramRule.getObject: View a ProgramRule
- PUT /api/programRules/{uid} — ProgramRule.putJsonObject
- PATCH /api/programRules/{uid} — ProgramRule.patchObject
- DELETE /api/programRules/{uid} — ProgramRule.deleteObject: Deletes the ProgramRule provided by ID.
- GET /api/programRules/{uid}/gist — ProgramRule.getObjectGist+getObjectGistAsCsv
- GET /api/programRules/{uid}/gist.csv — ProgramRule.getObjectGistAsCsv
- PUT /api/programRules/{uid}/sharing — ProgramRule.setSharing
- PUT /api/programRules/{uid}/translations — ProgramRule.replaceTranslations
- GET /api/programRules/{uid}/{property} — ProgramRule.getObjectProperty
- POST /api/programRules/{uid}/{property} — ProgramRule.addCollectionItemsJson
- PUT /api/programRules/{uid}/{property} — ProgramRule.replaceCollectionItemsJson
- DELETE /api/programRules/{uid}/{property} — ProgramRule.deleteCollectionItemsJson
- GET /api/programRules/{uid}/{property}/gist — ProgramRule.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programRules/{uid}/{property}/gist.csv — ProgramRule.getObjectPropertyGistAsCsv
- POST /api/programRules/{uid}/{property}/{itemId} — ProgramRule.addCollectionItem
- DELETE /api/programRules/{uid}/{property}/{itemId} — ProgramRule.deleteCollectionItem

## programSections
- GET /api/programSections/ — ProgramSection.getObjectList: List all ProgramSections
- POST /api/programSections/ — ProgramSection.postJsonObject
- GET /api/programSections/#getObjectListCsv — ProgramSection.getObjectListCsv
- GET /api/programSections/gist — ProgramSection.getObjectListGist+getObjectListGistAsCsv
- GET /api/programSections/gist.csv — ProgramSection.getObjectListGistAsCsv
- PATCH /api/programSections/sharing — ProgramSection.bulkSharing
- GET /api/programSections/{uid} — ProgramSection.getObject: View a ProgramSection
- PUT /api/programSections/{uid} — ProgramSection.putJsonObject
- PATCH /api/programSections/{uid} — ProgramSection.patchObject
- DELETE /api/programSections/{uid} — ProgramSection.deleteObject: Deletes the ProgramSection provided by ID.
- GET /api/programSections/{uid}/gist — ProgramSection.getObjectGist+getObjectGistAsCsv
- GET /api/programSections/{uid}/gist.csv — ProgramSection.getObjectGistAsCsv
- PUT /api/programSections/{uid}/sharing — ProgramSection.setSharing
- PUT /api/programSections/{uid}/translations — ProgramSection.replaceTranslations
- GET /api/programSections/{uid}/{property} — ProgramSection.getObjectProperty
- POST /api/programSections/{uid}/{property} — ProgramSection.addCollectionItemsJson
- PUT /api/programSections/{uid}/{property} — ProgramSection.replaceCollectionItemsJson
- DELETE /api/programSections/{uid}/{property} — ProgramSection.deleteCollectionItemsJson
- GET /api/programSections/{uid}/{property}/gist — ProgramSection.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programSections/{uid}/{property}/gist.csv — ProgramSection.getObjectPropertyGistAsCsv
- POST /api/programSections/{uid}/{property}/{itemId} — ProgramSection.addCollectionItem
- DELETE /api/programSections/{uid}/{property}/{itemId} — ProgramSection.deleteCollectionItem

## programStageSections
- GET /api/programStageSections/ — ProgramStageSection.getObjectList: List all ProgramStageSections
- POST /api/programStageSections/ — ProgramStageSection.postJsonObject
- GET /api/programStageSections/#getObjectListCsv — ProgramStageSection.getObjectListCsv
- GET /api/programStageSections/gist — ProgramStageSection.getObjectListGist+getObjectListGistAsCsv
- GET /api/programStageSections/gist.csv — ProgramStageSection.getObjectListGistAsCsv
- PATCH /api/programStageSections/sharing — ProgramStageSection.bulkSharing
- GET /api/programStageSections/{uid} — ProgramStageSection.getObject: View a ProgramStageSection
- PUT /api/programStageSections/{uid} — ProgramStageSection.putJsonObject
- PATCH /api/programStageSections/{uid} — ProgramStageSection.patchObject
- DELETE /api/programStageSections/{uid} — ProgramStageSection.deleteObject: Deletes the ProgramStageSection provided by ID.
- GET /api/programStageSections/{uid}/gist — ProgramStageSection.getObjectGist+getObjectGistAsCsv
- GET /api/programStageSections/{uid}/gist.csv — ProgramStageSection.getObjectGistAsCsv
- PUT /api/programStageSections/{uid}/sharing — ProgramStageSection.setSharing
- PUT /api/programStageSections/{uid}/translations — ProgramStageSection.replaceTranslations
- GET /api/programStageSections/{uid}/{property} — ProgramStageSection.getObjectProperty
- POST /api/programStageSections/{uid}/{property} — ProgramStageSection.addCollectionItemsJson
- PUT /api/programStageSections/{uid}/{property} — ProgramStageSection.replaceCollectionItemsJson
- DELETE /api/programStageSections/{uid}/{property} — ProgramStageSection.deleteCollectionItemsJson
- GET /api/programStageSections/{uid}/{property}/gist — ProgramStageSection.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programStageSections/{uid}/{property}/gist.csv — ProgramStageSection.getObjectPropertyGistAsCsv
- POST /api/programStageSections/{uid}/{property}/{itemId} — ProgramStageSection.addCollectionItem
- DELETE /api/programStageSections/{uid}/{property}/{itemId} — ProgramStageSection.deleteCollectionItem

## programStageWorkingLists
- GET /api/programStageWorkingLists/ — ProgramStageWorkingList.getObjectList: List all ProgramStageWorkingLists
- POST /api/programStageWorkingLists/ — ProgramStageWorkingList.postJsonObject
- GET /api/programStageWorkingLists/#getObjectListCsv — ProgramStageWorkingList.getObjectListCsv
- GET /api/programStageWorkingLists/gist — ProgramStageWorkingList.getObjectListGist+getObjectListGistAsCsv
- GET /api/programStageWorkingLists/gist.csv — ProgramStageWorkingList.getObjectListGistAsCsv
- PATCH /api/programStageWorkingLists/sharing — ProgramStageWorkingList.bulkSharing
- GET /api/programStageWorkingLists/{uid} — ProgramStageWorkingList.getObject: View a ProgramStageWorkingList
- PUT /api/programStageWorkingLists/{uid} — ProgramStageWorkingList.putJsonObject
- PATCH /api/programStageWorkingLists/{uid} — ProgramStageWorkingList.patchObject
- DELETE /api/programStageWorkingLists/{uid} — ProgramStageWorkingList.deleteObject: Deletes the ProgramStageWorkingList provided by ID.
- GET /api/programStageWorkingLists/{uid}/gist — ProgramStageWorkingList.getObjectGist+getObjectGistAsCsv
- GET /api/programStageWorkingLists/{uid}/gist.csv — ProgramStageWorkingList.getObjectGistAsCsv
- PUT /api/programStageWorkingLists/{uid}/sharing — ProgramStageWorkingList.setSharing
- PUT /api/programStageWorkingLists/{uid}/translations — ProgramStageWorkingList.replaceTranslations
- GET /api/programStageWorkingLists/{uid}/{property} — ProgramStageWorkingList.getObjectProperty
- POST /api/programStageWorkingLists/{uid}/{property} — ProgramStageWorkingList.addCollectionItemsJson
- PUT /api/programStageWorkingLists/{uid}/{property} — ProgramStageWorkingList.replaceCollectionItemsJson
- DELETE /api/programStageWorkingLists/{uid}/{property} — ProgramStageWorkingList.deleteCollectionItemsJson
- GET /api/programStageWorkingLists/{uid}/{property}/gist — ProgramStageWorkingList.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programStageWorkingLists/{uid}/{property}/gist.csv — ProgramStageWorkingList.getObjectPropertyGistAsCsv
- POST /api/programStageWorkingLists/{uid}/{property}/{itemId} — ProgramStageWorkingList.addCollectionItem
- DELETE /api/programStageWorkingLists/{uid}/{property}/{itemId} — ProgramStageWorkingList.deleteCollectionItem

## programStages
- GET /api/programStages/ — ProgramStage.getObjectList: List all ProgramStages
- POST /api/programStages/ — ProgramStage.postJsonObject
- GET /api/programStages/#getObjectListCsv — ProgramStage.getObjectListCsv
- GET /api/programStages/gist — ProgramStage.getObjectListGist+getObjectListGistAsCsv
- GET /api/programStages/gist.csv — ProgramStage.getObjectListGistAsCsv
- PATCH /api/programStages/sharing — ProgramStage.bulkSharing
- GET /api/programStages/{uid} — ProgramStage.getObject: View a ProgramStage
- PUT /api/programStages/{uid} — ProgramStage.putJsonObject
- PATCH /api/programStages/{uid} — ProgramStage.patchObject
- DELETE /api/programStages/{uid} — ProgramStage.deleteObject: Deletes the ProgramStage provided by ID.
- GET /api/programStages/{uid}/gist — ProgramStage.getObjectGist+getObjectGistAsCsv
- GET /api/programStages/{uid}/gist.csv — ProgramStage.getObjectGistAsCsv
- PUT /api/programStages/{uid}/sharing — ProgramStage.setSharing
- PUT /api/programStages/{uid}/translations — ProgramStage.replaceTranslations
- GET /api/programStages/{uid}/{property} — ProgramStage.getObjectProperty
- POST /api/programStages/{uid}/{property} — ProgramStage.addCollectionItemsJson
- PUT /api/programStages/{uid}/{property} — ProgramStage.replaceCollectionItemsJson
- DELETE /api/programStages/{uid}/{property} — ProgramStage.deleteCollectionItemsJson
- GET /api/programStages/{uid}/{property}/gist — ProgramStage.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programStages/{uid}/{property}/gist.csv — ProgramStage.getObjectPropertyGistAsCsv
- POST /api/programStages/{uid}/{property}/{itemId} — ProgramStage.addCollectionItem
- DELETE /api/programStages/{uid}/{property}/{itemId} — ProgramStage.deleteCollectionItem

## programs
- GET /api/programs/ — Program.getObjectList: List all Programs
- POST /api/programs/ — Program.postJsonObject
- GET /api/programs/#getObjectListCsv — Program.getObjectListCsv
- GET /api/programs/gist — Program.getObjectListGist+getObjectListGistAsCsv
- GET /api/programs/gist.csv — Program.getObjectListGistAsCsv
- GET /api/programs/orgUnits — Program.getOrgUnitsAssociations
- PATCH /api/programs/sharing — Program.bulkSharing
- GET /api/programs/{uid} — Program.getObject: View a Program
- PUT /api/programs/{uid} — Program.putJsonObject
- PATCH /api/programs/{uid} — Program.patchObject
- DELETE /api/programs/{uid} — Program.deleteObject: Deletes the Program provided by ID.
- POST /api/programs/{uid}/copy — Program.copyProgram
- GET /api/programs/{uid}/gist — Program.getObjectGist+getObjectGistAsCsv
- GET /api/programs/{uid}/gist.csv — Program.getObjectGistAsCsv
- GET /api/programs/{uid}/metadata — Program.getProgramWithDependencies
- PUT /api/programs/{uid}/sharing — Program.setSharing
- PUT /api/programs/{uid}/translations — Program.replaceTranslations
- GET /api/programs/{uid}/{property} — Program.getObjectProperty
- POST /api/programs/{uid}/{property} — Program.addCollectionItemsJson
- PUT /api/programs/{uid}/{property} — Program.replaceCollectionItemsJson
- DELETE /api/programs/{uid}/{property} — Program.deleteCollectionItemsJson
- GET /api/programs/{uid}/{property}/gist — Program.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/programs/{uid}/{property}/gist.csv — Program.getObjectPropertyGistAsCsv
- POST /api/programs/{uid}/{property}/{itemId} — Program.addCollectionItem
- DELETE /api/programs/{uid}/{property}/{itemId} — Program.deleteCollectionItem

## publicKeys
- GET /api/publicKeys/{clientId}/jwks.json — PublicKeys.getKeys

## query
- POST /api/query/alias — Query.postQueryAlias
- POST /api/query/alias/redirect — Query.redirectQueryAlias
- GET /api/query/alias/{hash} — Query.getQueryAlias

## relationshipTypes
- GET /api/relationshipTypes/ — RelationshipType.getObjectList: List all RelationshipTypes
- POST /api/relationshipTypes/ — RelationshipType.postJsonObject
- GET /api/relationshipTypes/#getObjectListCsv — RelationshipType.getObjectListCsv
- GET /api/relationshipTypes/gist — RelationshipType.getObjectListGist+getObjectListGistAsCsv
- GET /api/relationshipTypes/gist.csv — RelationshipType.getObjectListGistAsCsv
- PATCH /api/relationshipTypes/sharing — RelationshipType.bulkSharing
- GET /api/relationshipTypes/{uid} — RelationshipType.getObject: View a RelationshipType
- PUT /api/relationshipTypes/{uid} — RelationshipType.putJsonObject
- PATCH /api/relationshipTypes/{uid} — RelationshipType.patchObject
- DELETE /api/relationshipTypes/{uid} — RelationshipType.deleteObject: Deletes the RelationshipType provided by ID.
- GET /api/relationshipTypes/{uid}/gist — RelationshipType.getObjectGist+getObjectGistAsCsv
- GET /api/relationshipTypes/{uid}/gist.csv — RelationshipType.getObjectGistAsCsv
- PUT /api/relationshipTypes/{uid}/sharing — RelationshipType.setSharing
- PUT /api/relationshipTypes/{uid}/translations — RelationshipType.replaceTranslations
- GET /api/relationshipTypes/{uid}/{property} — RelationshipType.getObjectProperty
- POST /api/relationshipTypes/{uid}/{property} — RelationshipType.addCollectionItemsJson
- PUT /api/relationshipTypes/{uid}/{property} — RelationshipType.replaceCollectionItemsJson
- DELETE /api/relationshipTypes/{uid}/{property} — RelationshipType.deleteCollectionItemsJson
- GET /api/relationshipTypes/{uid}/{property}/gist — RelationshipType.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/relationshipTypes/{uid}/{property}/gist.csv — RelationshipType.getObjectPropertyGistAsCsv
- POST /api/relationshipTypes/{uid}/{property}/{itemId} — RelationshipType.addCollectionItem
- DELETE /api/relationshipTypes/{uid}/{property}/{itemId} — RelationshipType.deleteCollectionItem

## relativePeriods
- GET /api/relativePeriods/{relativePeriod} — RelativePeriods.getRelativePeriods

## reportTemplate
- GET /api/reportTemplate.xml — ReportTemplate.getReportDesignJrxml

## reportTemplate.html
- GET /api/reportTemplate.html — ReportTemplate.getReportDesignHtml

## reports
- GET /api/reports/ — Report.getObjectList: List all Reports
- POST /api/reports/ — Report.postJsonObject
- GET /api/reports/#getObjectListCsv — Report.getObjectListCsv
- GET /api/reports/gist — Report.getObjectListGist+getObjectListGistAsCsv
- GET /api/reports/gist.csv — Report.getObjectListGistAsCsv
- GET /api/reports/jasperReports/img — Report.getJasperImage
- PATCH /api/reports/sharing — Report.bulkSharing
- GET /api/reports/{uid} — Report.getObject: View a Report
- PUT /api/reports/{uid} — Report.putJsonObject
- PATCH /api/reports/{uid} — Report.patchObject
- DELETE /api/reports/{uid} — Report.deleteObject: Deletes the Report provided by ID.
- GET /api/reports/{uid}/data — Report.getReportAsPdf
- GET /api/reports/{uid}/data.html — Report.getReportAsHtml
- GET /api/reports/{uid}/data.pdf — Report.getReportAsPdf2
- GET /api/reports/{uid}/data.xls — Report.getReportAsXls
- GET /api/reports/{uid}/design — Report.getReportDesign
- PUT /api/reports/{uid}/design — Report.updateReportDesign
- GET /api/reports/{uid}/gist — Report.getObjectGist+getObjectGistAsCsv
- GET /api/reports/{uid}/gist.csv — Report.getObjectGistAsCsv
- PUT /api/reports/{uid}/sharing — Report.setSharing
- PUT /api/reports/{uid}/translations — Report.replaceTranslations
- GET /api/reports/{uid}/{property} — Report.getObjectProperty
- POST /api/reports/{uid}/{property} — Report.addCollectionItemsJson
- PUT /api/reports/{uid}/{property} — Report.replaceCollectionItemsJson
- DELETE /api/reports/{uid}/{property} — Report.deleteCollectionItemsJson
- GET /api/reports/{uid}/{property}/gist — Report.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/reports/{uid}/{property}/gist.csv — Report.getObjectPropertyGistAsCsv
- POST /api/reports/{uid}/{property}/{itemId} — Report.addCollectionItem
- DELETE /api/reports/{uid}/{property}/{itemId} — Report.deleteCollectionItem

## resourceTables
- POST /api/resourceTables/ — ResourceTable.resourceTables
- PUT /api/resourceTables/ — ResourceTable.resourceTables2
- POST /api/resourceTables/analytics — ResourceTable.analytics
- PUT /api/resourceTables/analytics — ResourceTable.analytics2
- POST /api/resourceTables/monitoring — ResourceTable.monitoring
- PUT /api/resourceTables/monitoring — ResourceTable.monitoring2

## resources
- GET /api/resources — Index.getResources

## routes
- GET /api/routes/ — Route.getObjectList: List all Routes
- POST /api/routes/ — Route.postJsonObject
- GET /api/routes/#getObjectListCsv — Route.getObjectListCsv
- POST /api/routes/addCollectionItem__disabled — Route.addCollectionItem
- POST /api/routes/deleteCollectionItem__disabled — Route.deleteCollectionItem
- GET /api/routes/gist — Route.getObjectListGist+getObjectListGistAsCsv
- GET /api/routes/gist.csv — Route.getObjectListGistAsCsv
- PATCH /api/routes/sharing — Route.bulkSharing
- GET /api/routes/{id}/run — Route.run
- POST /api/routes/{id}/run — Route.run2
- PUT /api/routes/{id}/run — Route.run3
- PATCH /api/routes/{id}/run — Route.run4
- DELETE /api/routes/{id}/run — Route.run5
- GET /api/routes/{id}/run/** — Route.runWithSubpath
- POST /api/routes/{id}/run/** — Route.runWithSubpath2
- PUT /api/routes/{id}/run/** — Route.runWithSubpath3
- PATCH /api/routes/{id}/run/** — Route.runWithSubpath4
- DELETE /api/routes/{id}/run/** — Route.runWithSubpath5
- GET /api/routes/{uid} — Route.getObject: View a Route
- PUT /api/routes/{uid} — Route.putJsonObject
- PATCH /api/routes/{uid} — Route.patchObject
- DELETE /api/routes/{uid} — Route.deleteObject: Deletes the Route provided by ID.
- GET /api/routes/{uid}/gist — Route.getObjectGist+getObjectGistAsCsv
- GET /api/routes/{uid}/gist.csv — Route.getObjectGistAsCsv
- PUT /api/routes/{uid}/sharing — Route.setSharing
- PUT /api/routes/{uid}/translations — Route.replaceTranslations
- GET /api/routes/{uid}/{property} — Route.getObjectProperty
- POST /api/routes/{uid}/{property} — Route.addCollectionItemsJson
- PUT /api/routes/{uid}/{property} — Route.replaceCollectionItemsJson
- DELETE /api/routes/{uid}/{property} — Route.deleteCollectionItemsJson
- GET /api/routes/{uid}/{property}/gist — Route.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/routes/{uid}/{property}/gist.csv — Route.getObjectPropertyGistAsCsv
- POST /api/routes/{uid}/{property}/{itemId} — Route.addCollectionItem2
- DELETE /api/routes/{uid}/{property}/{itemId} — Route.deleteCollectionItem2

## scheduler
- GET /api/scheduler/ — JobScheduler.getSchedulerEntries: Details the scheduler list entries.
- GET /api/scheduler/queueable — JobScheduler.getQueueableJobs: Details of the jobs that can be added to a queue.
- GET /api/scheduler/queues — JobScheduler.getQueueNames: List all names of queues.
- GET /api/scheduler/queues/{name} — JobScheduler.getQueue: Show CRON expression and sequence of the named queue.
- POST /api/scheduler/queues/{name} — JobScheduler.createQueue: Create a new queue with CRON expression and sequence.
- PUT /api/scheduler/queues/{name} — JobScheduler.updateQueue: Update a queue CRON expression and/or sequence.
- DELETE /api/scheduler/queues/{name} — JobScheduler.deleteQueue: Delete a queue by name.

## scheduling
- POST /api/scheduling/cancel/{type} — Scheduling.requestCancellation
- GET /api/scheduling/completed — Scheduling.getCompletedProgressTypes
- GET /api/scheduling/completed/{type} — Scheduling.getCompletedProgress
- GET /api/scheduling/running — Scheduling.getRunningProgressTypes
- GET /api/scheduling/running/types — Scheduling.getRunningProgressTypesOnly
- GET /api/scheduling/running/{type} — Scheduling.getRunningProgress

## schemas
- GET /api/schemas/ — Schema.getSchemas
- GET /api/schemas/{type} — Schema.getSchema
- POST /api/schemas/{type} — Schema.validateSchema
- PUT /api/schemas/{type} — Schema.validateSchema2
- GET /api/schemas/{type}/{property} — Schema.getSchemaProperty

## sections
- GET /api/sections/ — Section.getObjectList: List all Sections
- POST /api/sections/ — Section.postJsonObject
- GET /api/sections/#getObjectListCsv — Section.getObjectListCsv
- GET /api/sections/gist — Section.getObjectListGist+getObjectListGistAsCsv
- GET /api/sections/gist.csv — Section.getObjectListGistAsCsv
- PATCH /api/sections/sharing — Section.bulkSharing
- GET /api/sections/{uid} — Section.getObject: View a Section
- PUT /api/sections/{uid} — Section.putJsonObject
- PATCH /api/sections/{uid} — Section.patchObject
- DELETE /api/sections/{uid} — Section.deleteObject: Deletes the Section provided by ID.
- GET /api/sections/{uid}/gist — Section.getObjectGist+getObjectGistAsCsv
- GET /api/sections/{uid}/gist.csv — Section.getObjectGistAsCsv
- PUT /api/sections/{uid}/sharing — Section.setSharing
- PUT /api/sections/{uid}/translations — Section.replaceTranslations
- GET /api/sections/{uid}/{property} — Section.getObjectProperty
- POST /api/sections/{uid}/{property} — Section.addCollectionItemsJson
- PUT /api/sections/{uid}/{property} — Section.replaceCollectionItemsJson
- DELETE /api/sections/{uid}/{property} — Section.deleteCollectionItemsJson
- GET /api/sections/{uid}/{property}/gist — Section.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/sections/{uid}/{property}/gist.csv — Section.getObjectPropertyGistAsCsv
- POST /api/sections/{uid}/{property}/{itemId} — Section.addCollectionItem
- DELETE /api/sections/{uid}/{property}/{itemId} — Section.deleteCollectionItem

## sessions
- GET /api/sessions/ — Session.listAllSessions
- DELETE /api/sessions/ — Session.invalidateAllSessions
- DELETE /api/sessions/{username} — Session.invalidateSessions

## sharing
- GET /api/sharing/ — Sharing.getSharing
- POST /api/sharing/ — Sharing.postSharing
- PUT /api/sharing/ — Sharing.putSharing
- GET /api/sharing/search — Sharing.searchUserGroups

## sms
- GET /api/sms/inbound/ — SmsInbound.getObjectList: List all IncomingSmss
- POST /api/sms/inbound/ — SmsInbound.receiveSMSMessage
- DELETE /api/sms/inbound/ — SmsInbound.deleteInboundMessages
- GET /api/sms/inbound/#getObjectListCsv — SmsInbound.getObjectListCsv
- POST /api/sms/inbound/#postJsonObject — SmsInbound.postJsonObject
- GET /api/sms/inbound/gist — SmsInbound.getObjectListGist+getObjectListGistAsCsv
- GET /api/sms/inbound/gist.csv — SmsInbound.getObjectListGistAsCsv
- POST /api/sms/inbound/import — SmsInbound.importUnparsedSMSMessages
- PATCH /api/sms/inbound/sharing — SmsInbound.bulkSharing
- GET /api/sms/inbound/{uid} — SmsInbound.getObject: View a IncomingSms
- PUT /api/sms/inbound/{uid} — SmsInbound.putJsonObject
- PATCH /api/sms/inbound/{uid} — SmsInbound.patchObject
- DELETE /api/sms/inbound/{uid} — SmsInbound.deleteObject+deleteInboundMessage: Deletes the IncomingSms provided by ID.
- GET /api/sms/inbound/{uid}/gist — SmsInbound.getObjectGist+getObjectGistAsCsv
- GET /api/sms/inbound/{uid}/gist.csv — SmsInbound.getObjectGistAsCsv
- PUT /api/sms/inbound/{uid}/sharing — SmsInbound.setSharing
- PUT /api/sms/inbound/{uid}/translations — SmsInbound.replaceTranslations
- GET /api/sms/inbound/{uid}/{property} — SmsInbound.getObjectProperty
- POST /api/sms/inbound/{uid}/{property} — SmsInbound.addCollectionItemsJson
- PUT /api/sms/inbound/{uid}/{property} — SmsInbound.replaceCollectionItemsJson
- DELETE /api/sms/inbound/{uid}/{property} — SmsInbound.deleteCollectionItemsJson
- GET /api/sms/inbound/{uid}/{property}/gist — SmsInbound.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/sms/inbound/{uid}/{property}/gist.csv — SmsInbound.getObjectPropertyGistAsCsv
- POST /api/sms/inbound/{uid}/{property}/{itemId} — SmsInbound.addCollectionItem
- DELETE /api/sms/inbound/{uid}/{property}/{itemId} — SmsInbound.deleteCollectionItem
- GET /api/sms/outbound/ — SmsOutbound.getObjectList: List all OutboundSmss
- POST /api/sms/outbound/ — SmsOutbound.sendSMSMessage
- DELETE /api/sms/outbound/ — SmsOutbound.deleteOutboundMessages
- GET /api/sms/outbound/#getObjectListCsv — SmsOutbound.getObjectListCsv
- POST /api/sms/outbound/#postJsonObject — SmsOutbound.postJsonObject
- GET /api/sms/outbound/gist — SmsOutbound.getObjectListGist+getObjectListGistAsCsv
- GET /api/sms/outbound/gist.csv — SmsOutbound.getObjectListGistAsCsv
- PATCH /api/sms/outbound/sharing — SmsOutbound.bulkSharing
- GET /api/sms/outbound/{uid} — SmsOutbound.getObject: View a OutboundSms
- PUT /api/sms/outbound/{uid} — SmsOutbound.putJsonObject
- PATCH /api/sms/outbound/{uid} — SmsOutbound.patchObject
- DELETE /api/sms/outbound/{uid} — SmsOutbound.deleteObject+deleteOutboundMessage: Deletes the OutboundSms provided by ID.
- GET /api/sms/outbound/{uid}/gist — SmsOutbound.getObjectGist+getObjectGistAsCsv
- GET /api/sms/outbound/{uid}/gist.csv — SmsOutbound.getObjectGistAsCsv
- PUT /api/sms/outbound/{uid}/sharing — SmsOutbound.setSharing
- PUT /api/sms/outbound/{uid}/translations — SmsOutbound.replaceTranslations
- GET /api/sms/outbound/{uid}/{property} — SmsOutbound.getObjectProperty
- POST /api/sms/outbound/{uid}/{property} — SmsOutbound.addCollectionItemsJson
- PUT /api/sms/outbound/{uid}/{property} — SmsOutbound.replaceCollectionItemsJson
- DELETE /api/sms/outbound/{uid}/{property} — SmsOutbound.deleteCollectionItemsJson
- GET /api/sms/outbound/{uid}/{property}/gist — SmsOutbound.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/sms/outbound/{uid}/{property}/gist.csv — SmsOutbound.getObjectPropertyGistAsCsv
- POST /api/sms/outbound/{uid}/{property}/{itemId} — SmsOutbound.addCollectionItem
- DELETE /api/sms/outbound/{uid}/{property}/{itemId} — SmsOutbound.deleteCollectionItem

## smsCommands
- GET /api/smsCommands/ — SmsCommand.getObjectList: List all SMSCommands
- POST /api/smsCommands/ — SmsCommand.postJsonObject
- GET /api/smsCommands/#getObjectListCsv — SmsCommand.getObjectListCsv
- GET /api/smsCommands/gist — SmsCommand.getObjectListGist+getObjectListGistAsCsv
- GET /api/smsCommands/gist.csv — SmsCommand.getObjectListGistAsCsv
- PATCH /api/smsCommands/sharing — SmsCommand.bulkSharing
- GET /api/smsCommands/{uid} — SmsCommand.getObject: View a SMSCommand
- PUT /api/smsCommands/{uid} — SmsCommand.putJsonObject
- PATCH /api/smsCommands/{uid} — SmsCommand.patchObject
- DELETE /api/smsCommands/{uid} — SmsCommand.deleteObject: Deletes the SMSCommand provided by ID.
- GET /api/smsCommands/{uid}/gist — SmsCommand.getObjectGist+getObjectGistAsCsv
- GET /api/smsCommands/{uid}/gist.csv — SmsCommand.getObjectGistAsCsv
- PUT /api/smsCommands/{uid}/sharing — SmsCommand.setSharing
- PUT /api/smsCommands/{uid}/translations — SmsCommand.replaceTranslations
- GET /api/smsCommands/{uid}/{property} — SmsCommand.getObjectProperty
- POST /api/smsCommands/{uid}/{property} — SmsCommand.addCollectionItemsJson
- PUT /api/smsCommands/{uid}/{property} — SmsCommand.replaceCollectionItemsJson
- DELETE /api/smsCommands/{uid}/{property} — SmsCommand.deleteCollectionItemsJson
- GET /api/smsCommands/{uid}/{property}/gist — SmsCommand.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/smsCommands/{uid}/{property}/gist.csv — SmsCommand.getObjectPropertyGistAsCsv
- POST /api/smsCommands/{uid}/{property}/{itemId} — SmsCommand.addCollectionItem
- DELETE /api/smsCommands/{uid}/{property}/{itemId} — SmsCommand.deleteCollectionItem

## sqlViews
- GET /api/sqlViews/ — SqlView.getObjectList: List all SqlViews
- POST /api/sqlViews/ — SqlView.postJsonObject
- GET /api/sqlViews/#getObjectListCsv — SqlView.getObjectListCsv
- GET /api/sqlViews/gist — SqlView.getObjectListGist+getObjectListGistAsCsv
- GET /api/sqlViews/gist.csv — SqlView.getObjectListGistAsCsv
- PATCH /api/sqlViews/sharing — SqlView.bulkSharing
- GET /api/sqlViews/{uid} — SqlView.getObject: View a SqlView
- PUT /api/sqlViews/{uid} — SqlView.putJsonObject
- PATCH /api/sqlViews/{uid} — SqlView.patchObject
- DELETE /api/sqlViews/{uid} — SqlView.deleteObject: Deletes the SqlView provided by ID.
- GET /api/sqlViews/{uid}/data — SqlView.getViewJson
- GET /api/sqlViews/{uid}/data.csv — SqlView.getViewCsv
- GET /api/sqlViews/{uid}/data.html — SqlView.getViewHtml
- GET /api/sqlViews/{uid}/data.html+css — SqlView.getViewHtmlCss
- GET /api/sqlViews/{uid}/data.pdf — SqlView.getViewPdf
- GET /api/sqlViews/{uid}/data.xls — SqlView.getViewXls
- GET /api/sqlViews/{uid}/data.xml — SqlView.getViewXml
- POST /api/sqlViews/{uid}/execute — SqlView.executeView
- GET /api/sqlViews/{uid}/gist — SqlView.getObjectGist+getObjectGistAsCsv
- GET /api/sqlViews/{uid}/gist.csv — SqlView.getObjectGistAsCsv
- POST /api/sqlViews/{uid}/refresh — SqlView.refreshMaterializedView
- PUT /api/sqlViews/{uid}/sharing — SqlView.setSharing
- PUT /api/sqlViews/{uid}/translations — SqlView.replaceTranslations
- GET /api/sqlViews/{uid}/{property} — SqlView.getObjectProperty
- POST /api/sqlViews/{uid}/{property} — SqlView.addCollectionItemsJson
- PUT /api/sqlViews/{uid}/{property} — SqlView.replaceCollectionItemsJson
- DELETE /api/sqlViews/{uid}/{property} — SqlView.deleteCollectionItemsJson
- GET /api/sqlViews/{uid}/{property}/gist — SqlView.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/sqlViews/{uid}/{property}/gist.csv — SqlView.getObjectPropertyGistAsCsv
- POST /api/sqlViews/{uid}/{property}/{itemId} — SqlView.addCollectionItem
- DELETE /api/sqlViews/{uid}/{property}/{itemId} — SqlView.deleteCollectionItem

## staticConfiguration
- GET /api/staticConfiguration/renderingOptions — StaticRenderingConfiguration.getMapping

## staticContent
- GET /api/staticContent/{key} — StaticContent.getStaticImages+getStaticContent
- POST /api/staticContent/{key} — StaticContent.updateStaticContent

## svg.pdf
- POST /api/svg.pdf — SvgConversion.toPdf

## svg.png
- POST /api/svg.png — SvgConversion.toPng

## synchronization
- GET /api/synchronization/availability — Synchronization.remoteServerAvailable
- POST /api/synchronization/dataPush — Synchronization.execute
- POST /api/synchronization/metadataPull — Synchronization.importMetaData
- GET /api/synchronization/metadataRepo — Synchronization.getMetadataRepoIndex

## system
- GET /api/system/flags — System.getFlags
- GET /api/system/id — System.getUid+getUidCsv
- GET /api/system/info — System.getSystemInfo
- GET /api/system/objectCounts — System.getObjectCounts
- GET /api/system/ping — System.ping
- GET /api/system/styles — System.getStyles
- GET /api/system/taskSummaries/{jobType} — System.getTaskSummaryExtendedJson
- GET /api/system/taskSummaries/{jobType}/{jobId} — System.getTaskSummaryJson
- GET /api/system/tasks — System.getTasksAllJobTypes
- DELETE /api/system/tasks — System.deleteNotifications
- GET /api/system/tasks/{jobType} — System.getTasksByJobType
- DELETE /api/system/tasks/{jobType} — System.deleteNotificationsByJobType
- GET /api/system/tasks/{jobType}/{jobId} — System.getTaskJsonByUid
- DELETE /api/system/tasks/{jobType}/{jobId} — System.deleteNotificationsByJobId
- GET /api/system/uid — System.getUid+getUidCsv2
- GET /api/system/uuid — System.getUuid

## systemSettings
- GET /api/systemSettings/ — SystemSettings.getSystemSettingsJson
- POST /api/systemSettings/ — SystemSettings.putSystemSettingsJson
- DELETE /api/systemSettings/ — SystemSettings.removeSystemSetting
- GET /api/systemSettings/{key} — SystemSettings.getSystemSettingTranslation
- POST /api/systemSettings/{key} — SystemSettings.putSystemSettingTranslation
- DELETE /api/systemSettings/{key} — SystemSettings.removeSystemSetting2
- GET /api/systemSettings/{key}#getSystemSettingJson — SystemSettings.getSystemSettingJson
- GET /api/systemSettings/{key}#getSystemSettingPlain — SystemSettings.getSystemSettingPlain
- POST /api/systemSettings/{key}#putSystemSettingJson — SystemSettings.putSystemSettingJson
- POST /api/systemSettings/{key}#putSystemSettingPlain — SystemSettings.putSystemSettingPlain
- POST /api/systemSettings/{key}#putSystemSettingPlainBody — SystemSettings.putSystemSettingPlainBody
- POST /api/systemSettings/{key}#putSystemSettingTranslationBody — SystemSettings.putSystemSettingTranslationBody
- DELETE /api/systemSettings/{key}#removeSystemSettingTranslation — SystemSettings.removeSystemSettingTranslation

## systemUpdates
- GET /api/systemUpdates/ — SystemUpdateNotify.checkForSystemUpdates

## tokens
- GET /api/tokens/google — Token.getEarthEngineToken

## trackedEntityAttributes
- GET /api/trackedEntityAttributes/ — TrackedEntityAttribute.getObjectList: List all TrackedEntityAttributes
- POST /api/trackedEntityAttributes/ — TrackedEntityAttribute.postJsonObject
- GET /api/trackedEntityAttributes/#getObjectListCsv — TrackedEntityAttribute.getObjectListCsv
- GET /api/trackedEntityAttributes/gist — TrackedEntityAttribute.getObjectListGist+getObjectListGistAsCsv
- GET /api/trackedEntityAttributes/gist.csv — TrackedEntityAttribute.getObjectListGistAsCsv
- PATCH /api/trackedEntityAttributes/sharing — TrackedEntityAttribute.bulkSharing
- GET /api/trackedEntityAttributes/{id}/generate — TrackedEntityAttribute.legacyQueryTrackedEntityInstancesJson
- GET /api/trackedEntityAttributes/{id}/generateAndReserve — TrackedEntityAttribute.generateAndReserveValues
- GET /api/trackedEntityAttributes/{id}/requiredValues — TrackedEntityAttribute.getRequiredValues
- GET /api/trackedEntityAttributes/{uid} — TrackedEntityAttribute.getObject: View a TrackedEntityAttribute
- PUT /api/trackedEntityAttributes/{uid} — TrackedEntityAttribute.putJsonObject
- PATCH /api/trackedEntityAttributes/{uid} — TrackedEntityAttribute.patchObject
- DELETE /api/trackedEntityAttributes/{uid} — TrackedEntityAttribute.deleteObject: Deletes the TrackedEntityAttribute provided by ID.
- GET /api/trackedEntityAttributes/{uid}/gist — TrackedEntityAttribute.getObjectGist+getObjectGistAsCsv
- GET /api/trackedEntityAttributes/{uid}/gist.csv — TrackedEntityAttribute.getObjectGistAsCsv
- PUT /api/trackedEntityAttributes/{uid}/sharing — TrackedEntityAttribute.setSharing
- PUT /api/trackedEntityAttributes/{uid}/translations — TrackedEntityAttribute.replaceTranslations
- GET /api/trackedEntityAttributes/{uid}/{property} — TrackedEntityAttribute.getObjectProperty
- POST /api/trackedEntityAttributes/{uid}/{property} — TrackedEntityAttribute.addCollectionItemsJson
- PUT /api/trackedEntityAttributes/{uid}/{property} — TrackedEntityAttribute.replaceCollectionItemsJson
- DELETE /api/trackedEntityAttributes/{uid}/{property} — TrackedEntityAttribute.deleteCollectionItemsJson
- GET /api/trackedEntityAttributes/{uid}/{property}/gist — TrackedEntityAttribute.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/trackedEntityAttributes/{uid}/{property}/gist.csv — TrackedEntityAttribute.getObjectPropertyGistAsCsv
- POST /api/trackedEntityAttributes/{uid}/{property}/{itemId} — TrackedEntityAttribute.addCollectionItem
- DELETE /api/trackedEntityAttributes/{uid}/{property}/{itemId} — TrackedEntityAttribute.deleteCollectionItem

## trackedEntityInstanceFilters
- GET /api/trackedEntityInstanceFilters/ — TrackedEntityFilter.getObjectList: List all TrackedEntityFilters
- POST /api/trackedEntityInstanceFilters/ — TrackedEntityFilter.postJsonObject
- GET /api/trackedEntityInstanceFilters/#getObjectListCsv — TrackedEntityFilter.getObjectListCsv
- GET /api/trackedEntityInstanceFilters/gist — TrackedEntityFilter.getObjectListGist+getObjectListGistAsCsv
- GET /api/trackedEntityInstanceFilters/gist.csv — TrackedEntityFilter.getObjectListGistAsCsv
- PATCH /api/trackedEntityInstanceFilters/sharing — TrackedEntityFilter.bulkSharing
- GET /api/trackedEntityInstanceFilters/{uid} — TrackedEntityFilter.getObject: View a TrackedEntityFilter
- PUT /api/trackedEntityInstanceFilters/{uid} — TrackedEntityFilter.putJsonObject
- PATCH /api/trackedEntityInstanceFilters/{uid} — TrackedEntityFilter.patchObject
- DELETE /api/trackedEntityInstanceFilters/{uid} — TrackedEntityFilter.deleteObject: Deletes the TrackedEntityFilter provided by ID.
- GET /api/trackedEntityInstanceFilters/{uid}/gist — TrackedEntityFilter.getObjectGist+getObjectGistAsCsv
- GET /api/trackedEntityInstanceFilters/{uid}/gist.csv — TrackedEntityFilter.getObjectGistAsCsv
- PUT /api/trackedEntityInstanceFilters/{uid}/sharing — TrackedEntityFilter.setSharing
- PUT /api/trackedEntityInstanceFilters/{uid}/translations — TrackedEntityFilter.replaceTranslations
- GET /api/trackedEntityInstanceFilters/{uid}/{property} — TrackedEntityFilter.getObjectProperty
- POST /api/trackedEntityInstanceFilters/{uid}/{property} — TrackedEntityFilter.addCollectionItemsJson
- PUT /api/trackedEntityInstanceFilters/{uid}/{property} — TrackedEntityFilter.replaceCollectionItemsJson
- DELETE /api/trackedEntityInstanceFilters/{uid}/{property} — TrackedEntityFilter.deleteCollectionItemsJson
- GET /api/trackedEntityInstanceFilters/{uid}/{property}/gist — TrackedEntityFilter.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/trackedEntityInstanceFilters/{uid}/{property}/gist.csv — TrackedEntityFilter.getObjectPropertyGistAsCsv
- POST /api/trackedEntityInstanceFilters/{uid}/{property}/{itemId} — TrackedEntityFilter.addCollectionItem
- DELETE /api/trackedEntityInstanceFilters/{uid}/{property}/{itemId} — TrackedEntityFilter.deleteCollectionItem

## trackedEntityTypes
- GET /api/trackedEntityTypes/ — TrackedEntityType.getObjectList: List all TrackedEntityTypes
- POST /api/trackedEntityTypes/ — TrackedEntityType.postJsonObject
- GET /api/trackedEntityTypes/#getObjectListCsv — TrackedEntityType.getObjectListCsv
- GET /api/trackedEntityTypes/gist — TrackedEntityType.getObjectListGist+getObjectListGistAsCsv
- GET /api/trackedEntityTypes/gist.csv — TrackedEntityType.getObjectListGistAsCsv
- PATCH /api/trackedEntityTypes/sharing — TrackedEntityType.bulkSharing
- GET /api/trackedEntityTypes/{uid} — TrackedEntityType.getObject: View a TrackedEntityType
- PUT /api/trackedEntityTypes/{uid} — TrackedEntityType.putJsonObject
- PATCH /api/trackedEntityTypes/{uid} — TrackedEntityType.patchObject
- DELETE /api/trackedEntityTypes/{uid} — TrackedEntityType.deleteObject: Deletes the TrackedEntityType provided by ID.
- GET /api/trackedEntityTypes/{uid}/gist — TrackedEntityType.getObjectGist+getObjectGistAsCsv
- GET /api/trackedEntityTypes/{uid}/gist.csv — TrackedEntityType.getObjectGistAsCsv
- PUT /api/trackedEntityTypes/{uid}/sharing — TrackedEntityType.setSharing
- PUT /api/trackedEntityTypes/{uid}/translations — TrackedEntityType.replaceTranslations
- GET /api/trackedEntityTypes/{uid}/{property} — TrackedEntityType.getObjectProperty
- POST /api/trackedEntityTypes/{uid}/{property} — TrackedEntityType.addCollectionItemsJson
- PUT /api/trackedEntityTypes/{uid}/{property} — TrackedEntityType.replaceCollectionItemsJson
- DELETE /api/trackedEntityTypes/{uid}/{property} — TrackedEntityType.deleteCollectionItemsJson
- GET /api/trackedEntityTypes/{uid}/{property}/gist — TrackedEntityType.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/trackedEntityTypes/{uid}/{property}/gist.csv — TrackedEntityType.getObjectPropertyGistAsCsv
- POST /api/trackedEntityTypes/{uid}/{property}/{itemId} — TrackedEntityType.addCollectionItem
- DELETE /api/trackedEntityTypes/{uid}/{property}/{itemId} — TrackedEntityType.deleteCollectionItem

## tracker
- POST /api/tracker/ — TrackerImport.importCsv: Import tracker data.
- POST /api/tracker/#importJson — TrackerImport.importJson: Import tracker data.
- GET /api/tracker/enrollments/ — EnrollmentsExport.getEnrollments: Get enrollments matching given query parameters.
- GET /api/tracker/enrollments/{uid} — EnrollmentsExport.getEnrollmentByUid: Get an enrollment with given UID.
- POST /api/tracker/enrollments/{uid}/note — TrackerImport.addNoteToEnrollment
- GET /api/tracker/events/ — EventsExport.getEvents+getEventsAsJsonCompressed: Get events matching given query parameters.
- GET /api/tracker/events/#getEventsAsCsv — EventsExport.getEventsAsCsv
- GET /api/tracker/events/#getEventsAsCsvGZip — EventsExport.getEventsAsCsvGZip
- GET /api/tracker/events/#getEventsAsCsvZip — EventsExport.getEventsAsCsvZip
- GET /api/tracker/events/{event}/changeLogs — EventsExport.getEventChangeLogsByUid: Get the change logs of all data elements belonging to the specified event UID.
- GET /api/tracker/events/{event}/dataValues/{dataElement}/file — EventsExport.getEventDataValueFile: Get an event data value file or image for specified event and data element UID.
- GET /api/tracker/events/{event}/dataValues/{dataElement}/image — EventsExport.getEventDataValueImage: Get an event data value image for specified event and data element UID.
- GET /api/tracker/events/{uid} — EventsExport.getEventByUid: Get an event with the specified UID.
- POST /api/tracker/events/{uid}/note — TrackerImport.addNoteToEvent
- GET /api/tracker/jobs/{uid} — TrackerImport.getJob
- GET /api/tracker/jobs/{uid}/report — TrackerImport.getJobReport
- POST /api/tracker/ownership/override — TrackerOwnership.grantTemporaryAccess
- PUT /api/tracker/ownership/transfer — TrackerOwnership.updateTrackerProgramOwner
- GET /api/tracker/relationships/ — RelationshipsExport.getRelationships: Get relationships matching the specified query parameters.
- GET /api/tracker/relationships/{uid} — RelationshipsExport.getRelationshipByUid: Get a relationship with the specified UID.
- GET /api/tracker/singleEvents/ — SingleEventsExport.getEvents+getEventsAsJsonCompressed
- GET /api/tracker/singleEvents/#getEventsAsCsv — SingleEventsExport.getEventsAsCsv
- GET /api/tracker/singleEvents/#getEventsAsCsvGZip — SingleEventsExport.getEventsAsCsvGZip
- GET /api/tracker/singleEvents/#getEventsAsCsvZip — SingleEventsExport.getEventsAsCsvZip
- GET /api/tracker/singleEvents/{event}/changeLogs — SingleEventsExport.getEventChangeLogsByUid
- GET /api/tracker/singleEvents/{event}/dataValues/{dataElement}/file — SingleEventsExport.getEventDataValueFile
- GET /api/tracker/singleEvents/{event}/dataValues/{dataElement}/image — SingleEventsExport.getEventDataValueImage
- GET /api/tracker/singleEvents/{uid} — SingleEventsExport.getEventByUid
- GET /api/tracker/trackedEntities/ — TrackedEntitiesExport.getTrackedEntities: Get tracked entities matching given query parameters.
- GET /api/tracker/trackedEntities/#getTrackedEntitiesAsCsv — TrackedEntitiesExport.getTrackedEntitiesAsCsv
- GET /api/tracker/trackedEntities/#getTrackedEntitiesAsCsvGZip — TrackedEntitiesExport.getTrackedEntitiesAsCsvGZip
- GET /api/tracker/trackedEntities/#getTrackedEntitiesAsCsvZip — TrackedEntitiesExport.getTrackedEntitiesAsCsvZip
- GET /api/tracker/trackedEntities/{trackedEntity}/attributes/{attribute}/file — TrackedEntitiesExport.getAttributeValueFile: Get a tracked entity attribute value file or image for a given tracked entity and tracked entity attribute UID.
- GET /api/tracker/trackedEntities/{trackedEntity}/attributes/{attribute}/image — TrackedEntitiesExport.getAttributeValueImage: Get an event data value image for a given event and data element UID.
- GET /api/tracker/trackedEntities/{trackedEntity}/changeLogs — TrackedEntitiesExport.getTrackedEntityChangeLog
- GET /api/tracker/trackedEntities/{uid} — TrackedEntitiesExport.getTrackedEntityByUid: Get a tracked entity with a given UID.
- GET /api/tracker/trackedEntities/{uid}#getTrackedEntityByUidAsCsv — TrackedEntitiesExport.getTrackedEntityByUidAsCsv
- GET /api/tracker/trackerEvents/ — TrackerEventsExport.getEvents+getEventsAsJsonCompressed
- GET /api/tracker/trackerEvents/#getEventsAsCsv — TrackerEventsExport.getEventsAsCsv
- GET /api/tracker/trackerEvents/#getEventsAsCsvGZip — TrackerEventsExport.getEventsAsCsvGZip
- GET /api/tracker/trackerEvents/#getEventsAsCsvZip — TrackerEventsExport.getEventsAsCsvZip
- GET /api/tracker/trackerEvents/{event}/changeLogs — TrackerEventsExport.getEventChangeLogsByUid
- GET /api/tracker/trackerEvents/{event}/dataValues/{dataElement}/file — TrackerEventsExport.getEventDataValueFile
- GET /api/tracker/trackerEvents/{event}/dataValues/{dataElement}/image — TrackerEventsExport.getEventDataValueImage
- GET /api/tracker/trackerEvents/{uid} — TrackerEventsExport.getEventByUid

## userDataStore
- GET /api/userDataStore/ — UserDatastore.getNamespaces
- GET /api/userDataStore/{namespace} — UserDatastore.getEntries
- DELETE /api/userDataStore/{namespace} — UserDatastore.deleteNamespace
- GET /api/userDataStore/{namespace}#getKeysInNamespaceLegacy — UserDatastore.getKeysInNamespaceLegacy
- GET /api/userDataStore/{namespace}/keys — UserDatastore.getKeysInNamespace
- GET /api/userDataStore/{namespace}/{key} — UserDatastore.getEntry
- POST /api/userDataStore/{namespace}/{key} — UserDatastore.addEntry
- PUT /api/userDataStore/{namespace}/{key} — UserDatastore.putUserValue
- DELETE /api/userDataStore/{namespace}/{key} — UserDatastore.deleteEntry

## userGroups
- GET /api/userGroups/ — UserGroup.getObjectList: List all UserGroups
- POST /api/userGroups/ — UserGroup.postJsonObject
- GET /api/userGroups/#getObjectListCsv — UserGroup.getObjectListCsv
- GET /api/userGroups/gist — UserGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/userGroups/gist.csv — UserGroup.getObjectListGistAsCsv
- PATCH /api/userGroups/sharing — UserGroup.bulkSharing
- GET /api/userGroups/{uid} — UserGroup.getObject: View a UserGroup
- PUT /api/userGroups/{uid} — UserGroup.putJsonObject
- PATCH /api/userGroups/{uid} — UserGroup.patchObject
- DELETE /api/userGroups/{uid} — UserGroup.deleteObject: Deletes the UserGroup provided by ID.
- GET /api/userGroups/{uid}/gist — UserGroup.getObjectGist+getObjectGistAsCsv
- GET /api/userGroups/{uid}/gist.csv — UserGroup.getObjectGistAsCsv
- PUT /api/userGroups/{uid}/sharing — UserGroup.setSharing
- PUT /api/userGroups/{uid}/translations — UserGroup.replaceTranslations
- GET /api/userGroups/{uid}/{property} — UserGroup.getObjectProperty
- POST /api/userGroups/{uid}/{property} — UserGroup.addCollectionItemsJson
- PUT /api/userGroups/{uid}/{property} — UserGroup.replaceCollectionItemsJson
- DELETE /api/userGroups/{uid}/{property} — UserGroup.deleteCollectionItemsJson
- GET /api/userGroups/{uid}/{property}/gist — UserGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/userGroups/{uid}/{property}/gist.csv — UserGroup.getObjectPropertyGistAsCsv
- POST /api/userGroups/{uid}/{property}/{itemId} — UserGroup.addCollectionItem
- DELETE /api/userGroups/{uid}/{property}/{itemId} — UserGroup.deleteCollectionItem

## userLookup
- GET /api/userLookup/ — UserLookup.lookUpUsers
- GET /api/userLookup/feedbackRecipients — UserLookup.lookUpFeedbackRecipients
- GET /api/userLookup/{id} — UserLookup.lookUpUser

## userRoles
- GET /api/userRoles/ — UserRole.getObjectList: List all UserRoles
- POST /api/userRoles/ — UserRole.postJsonObject
- GET /api/userRoles/#getObjectListCsv — UserRole.getObjectListCsv
- GET /api/userRoles/gist — UserRole.getObjectListGist+getObjectListGistAsCsv
- GET /api/userRoles/gist.csv — UserRole.getObjectListGistAsCsv
- PATCH /api/userRoles/sharing — UserRole.bulkSharing
- POST /api/userRoles/{id}/users/{userId} — UserRole.addUserToRole
- PUT /api/userRoles/{id}/users/{userId} — UserRole.addUserToRole2
- DELETE /api/userRoles/{id}/users/{userId} — UserRole.removeUserFromRole
- GET /api/userRoles/{uid} — UserRole.getObject: View a UserRole
- PUT /api/userRoles/{uid} — UserRole.putJsonObject
- PATCH /api/userRoles/{uid} — UserRole.patchObject
- DELETE /api/userRoles/{uid} — UserRole.deleteObject: Deletes the UserRole provided by ID.
- GET /api/userRoles/{uid}/gist — UserRole.getObjectGist+getObjectGistAsCsv
- GET /api/userRoles/{uid}/gist.csv — UserRole.getObjectGistAsCsv
- PUT /api/userRoles/{uid}/sharing — UserRole.setSharing
- PUT /api/userRoles/{uid}/translations — UserRole.replaceTranslations
- GET /api/userRoles/{uid}/{property} — UserRole.getObjectProperty
- POST /api/userRoles/{uid}/{property} — UserRole.addCollectionItemsJson
- PUT /api/userRoles/{uid}/{property} — UserRole.replaceCollectionItemsJson
- DELETE /api/userRoles/{uid}/{property} — UserRole.deleteCollectionItemsJson
- GET /api/userRoles/{uid}/{property}/gist — UserRole.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/userRoles/{uid}/{property}/gist.csv — UserRole.getObjectPropertyGistAsCsv
- POST /api/userRoles/{uid}/{property}/{itemId} — UserRole.addCollectionItem
- DELETE /api/userRoles/{uid}/{property}/{itemId} — UserRole.deleteCollectionItem

## userSettings
- GET /api/userSettings/ — UserSettings.getAllUserSettings
- GET /api/userSettings/{key} — UserSettings.getUserSettingByKey
- POST /api/userSettings/{key} — UserSettings.putUserSettingByKey
- DELETE /api/userSettings/{key} — UserSettings.deleteUserSettingByKey

## users
- GET /api/users/ — User.getObjectList: List all Users
- POST /api/users/ — User.postJsonObject
- GET /api/users/#getObjectListCsv — User.getObjectListCsv
- GET /api/users/gist — User.getObjectListGist+getObjectListGistAsCsv
- GET /api/users/gist.csv — User.getObjectListGistAsCsv
- POST /api/users/invite — User.postJsonInvite+postXmlInvite
- POST /api/users/invites — User.postJsonInvites+postXmlInvites
- PATCH /api/users/sharing — User.bulkSharing
- GET /api/users/twoFactor/ — UserTwoFactorAudit.getList
- GET /api/users/twoFactor/summary — UserTwoFactorAudit.getSummary
- POST /api/users/{id}/invite — User.resendInvite
- POST /api/users/{id}/reset — User.resetToInvite
- GET /api/users/{uid} — User.getObject: View a User
- PUT /api/users/{uid} — User.putJsonObject
- PATCH /api/users/{uid} — User.patchObject
- DELETE /api/users/{uid} — User.deleteObject: Deletes the User provided by ID.
- POST /api/users/{uid}/disabled — User.disableUser
- POST /api/users/{uid}/enabled — User.enableUser
- POST /api/users/{uid}/expired — User.expireUser
- GET /api/users/{uid}/gist — User.getObjectGist+getObjectGistAsCsv
- GET /api/users/{uid}/gist.csv — User.getObjectGistAsCsv
- POST /api/users/{uid}/replica — User.replicateUser
- PUT /api/users/{uid}/sharing — User.setSharing
- PUT /api/users/{uid}/translations — User.replaceTranslations
- POST /api/users/{uid}/twoFA/disabled — User.disableTwoFa
- POST /api/users/{uid}/unexpired — User.unexpireUser
- GET /api/users/{uid}/{property} — User.getObjectProperty
- POST /api/users/{uid}/{property} — User.addCollectionItemsJson
- PUT /api/users/{uid}/{property} — User.replaceCollectionItemsJson
- DELETE /api/users/{uid}/{property} — User.deleteCollectionItemsJson
- GET /api/users/{uid}/{property}/gist — User.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/users/{uid}/{property}/gist.csv — User.getObjectPropertyGistAsCsv
- POST /api/users/{uid}/{property}/{itemId} — User.addCollectionItem
- DELETE /api/users/{uid}/{property}/{itemId} — User.deleteCollectionItem

## validation
- GET /api/validation/dataSet/{ds} — Validation.validate
- POST /api/validation/sendNotifications — Validation.runValidationNotificationsTask
- PUT /api/validation/sendNotifications — Validation.runValidationNotificationsTask2

## validationNotificationTemplates
- GET /api/validationNotificationTemplates/ — ValidationNotificationTemplate.getObjectList: List all ValidationNotificationTemplates
- POST /api/validationNotificationTemplates/ — ValidationNotificationTemplate.postJsonObject
- GET /api/validationNotificationTemplates/#getObjectListCsv — ValidationNotificationTemplate.getObjectListCsv
- GET /api/validationNotificationTemplates/gist — ValidationNotificationTemplate.getObjectListGist+getObjectListGistAsCsv
- GET /api/validationNotificationTemplates/gist.csv — ValidationNotificationTemplate.getObjectListGistAsCsv
- PATCH /api/validationNotificationTemplates/sharing — ValidationNotificationTemplate.bulkSharing
- GET /api/validationNotificationTemplates/{uid} — ValidationNotificationTemplate.getObject: View a ValidationNotificationTemplate
- PUT /api/validationNotificationTemplates/{uid} — ValidationNotificationTemplate.putJsonObject
- PATCH /api/validationNotificationTemplates/{uid} — ValidationNotificationTemplate.patchObject
- DELETE /api/validationNotificationTemplates/{uid} — ValidationNotificationTemplate.deleteObject: Deletes the ValidationNotificationTemplate provided by ID.
- GET /api/validationNotificationTemplates/{uid}/gist — ValidationNotificationTemplate.getObjectGist+getObjectGistAsCsv
- GET /api/validationNotificationTemplates/{uid}/gist.csv — ValidationNotificationTemplate.getObjectGistAsCsv
- PUT /api/validationNotificationTemplates/{uid}/sharing — ValidationNotificationTemplate.setSharing
- PUT /api/validationNotificationTemplates/{uid}/translations — ValidationNotificationTemplate.replaceTranslations
- GET /api/validationNotificationTemplates/{uid}/{property} — ValidationNotificationTemplate.getObjectProperty
- POST /api/validationNotificationTemplates/{uid}/{property} — ValidationNotificationTemplate.addCollectionItemsJson
- PUT /api/validationNotificationTemplates/{uid}/{property} — ValidationNotificationTemplate.replaceCollectionItemsJson
- DELETE /api/validationNotificationTemplates/{uid}/{property} — ValidationNotificationTemplate.deleteCollectionItemsJson
- GET /api/validationNotificationTemplates/{uid}/{property}/gist — ValidationNotificationTemplate.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/validationNotificationTemplates/{uid}/{property}/gist.csv — ValidationNotificationTemplate.getObjectPropertyGistAsCsv
- POST /api/validationNotificationTemplates/{uid}/{property}/{itemId} — ValidationNotificationTemplate.addCollectionItem
- DELETE /api/validationNotificationTemplates/{uid}/{property}/{itemId} — ValidationNotificationTemplate.deleteCollectionItem

## validationResults
- GET /api/validationResults/ — ValidationResult.getObjectList
- DELETE /api/validationResults/ — ValidationResult.deleteValidationResults
- GET /api/validationResults/{id} — ValidationResult.getObject
- DELETE /api/validationResults/{id} — ValidationResult.delete

## validationRuleGroups
- GET /api/validationRuleGroups/ — ValidationRuleGroup.getObjectList: List all ValidationRuleGroups
- POST /api/validationRuleGroups/ — ValidationRuleGroup.postJsonObject
- GET /api/validationRuleGroups/#getObjectListCsv — ValidationRuleGroup.getObjectListCsv
- GET /api/validationRuleGroups/gist — ValidationRuleGroup.getObjectListGist+getObjectListGistAsCsv
- GET /api/validationRuleGroups/gist.csv — ValidationRuleGroup.getObjectListGistAsCsv
- PATCH /api/validationRuleGroups/sharing — ValidationRuleGroup.bulkSharing
- GET /api/validationRuleGroups/{uid} — ValidationRuleGroup.getObject: View a ValidationRuleGroup
- PUT /api/validationRuleGroups/{uid} — ValidationRuleGroup.putJsonObject
- PATCH /api/validationRuleGroups/{uid} — ValidationRuleGroup.patchObject
- DELETE /api/validationRuleGroups/{uid} — ValidationRuleGroup.deleteObject: Deletes the ValidationRuleGroup provided by ID.
- GET /api/validationRuleGroups/{uid}/gist — ValidationRuleGroup.getObjectGist+getObjectGistAsCsv
- GET /api/validationRuleGroups/{uid}/gist.csv — ValidationRuleGroup.getObjectGistAsCsv
- PUT /api/validationRuleGroups/{uid}/sharing — ValidationRuleGroup.setSharing
- PUT /api/validationRuleGroups/{uid}/translations — ValidationRuleGroup.replaceTranslations
- GET /api/validationRuleGroups/{uid}/{property} — ValidationRuleGroup.getObjectProperty
- POST /api/validationRuleGroups/{uid}/{property} — ValidationRuleGroup.addCollectionItemsJson
- PUT /api/validationRuleGroups/{uid}/{property} — ValidationRuleGroup.replaceCollectionItemsJson
- DELETE /api/validationRuleGroups/{uid}/{property} — ValidationRuleGroup.deleteCollectionItemsJson
- GET /api/validationRuleGroups/{uid}/{property}/gist — ValidationRuleGroup.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/validationRuleGroups/{uid}/{property}/gist.csv — ValidationRuleGroup.getObjectPropertyGistAsCsv
- POST /api/validationRuleGroups/{uid}/{property}/{itemId} — ValidationRuleGroup.addCollectionItem
- DELETE /api/validationRuleGroups/{uid}/{property}/{itemId} — ValidationRuleGroup.deleteCollectionItem

## validationRules
- GET /api/validationRules/ — ValidationRule.getObjectList: List all ValidationRules
- POST /api/validationRules/ — ValidationRule.postJsonObject
- GET /api/validationRules/#getObjectListCsv — ValidationRule.getObjectListCsv
- POST /api/validationRules/expression/description — ValidationRule.getExpressionDescription
- GET /api/validationRules/gist — ValidationRule.getObjectListGist+getObjectListGistAsCsv
- GET /api/validationRules/gist.csv — ValidationRule.getObjectListGistAsCsv
- PATCH /api/validationRules/sharing — ValidationRule.bulkSharing
- GET /api/validationRules/{uid} — ValidationRule.getObject: View a ValidationRule
- PUT /api/validationRules/{uid} — ValidationRule.putJsonObject
- PATCH /api/validationRules/{uid} — ValidationRule.patchObject
- DELETE /api/validationRules/{uid} — ValidationRule.deleteObject: Deletes the ValidationRule provided by ID.
- GET /api/validationRules/{uid}/gist — ValidationRule.getObjectGist+getObjectGistAsCsv
- GET /api/validationRules/{uid}/gist.csv — ValidationRule.getObjectGistAsCsv
- PUT /api/validationRules/{uid}/sharing — ValidationRule.setSharing
- PUT /api/validationRules/{uid}/translations — ValidationRule.replaceTranslations
- GET /api/validationRules/{uid}/{property} — ValidationRule.getObjectProperty
- POST /api/validationRules/{uid}/{property} — ValidationRule.addCollectionItemsJson
- PUT /api/validationRules/{uid}/{property} — ValidationRule.replaceCollectionItemsJson
- DELETE /api/validationRules/{uid}/{property} — ValidationRule.deleteCollectionItemsJson
- GET /api/validationRules/{uid}/{property}/gist — ValidationRule.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/validationRules/{uid}/{property}/gist.csv — ValidationRule.getObjectPropertyGistAsCsv
- POST /api/validationRules/{uid}/{property}/{itemId} — ValidationRule.addCollectionItem
- DELETE /api/validationRules/{uid}/{property}/{itemId} — ValidationRule.deleteCollectionItem

## visualizations
- GET /api/visualizations/ — Visualization.getObjectList: List all Visualizations
- POST /api/visualizations/ — Visualization.postJsonObject
- GET /api/visualizations/#getObjectListCsv — Visualization.getObjectListCsv
- GET /api/visualizations/data — VisualizationData.getVisualizationChartData
- GET /api/visualizations/data.png — VisualizationData.getVisualizationChartData2
- GET /api/visualizations/gist — Visualization.getObjectListGist+getObjectListGistAsCsv
- GET /api/visualizations/gist.csv — Visualization.getObjectListGistAsCsv
- GET /api/visualizations/history/data — VisualizationData.getVisualizationChartHistory
- GET /api/visualizations/history/data.png — VisualizationData.getVisualizationChartHistory2
- PATCH /api/visualizations/sharing — Visualization.bulkSharing
- GET /api/visualizations/{uid} — Visualization.getObject: View a Visualization
- PUT /api/visualizations/{uid} — Visualization.putJsonObject
- PATCH /api/visualizations/{uid} — Visualization.patchObject
- DELETE /api/visualizations/{uid} — Visualization.deleteObject: Deletes the Visualization provided by ID.
- GET /api/visualizations/{uid}/data — VisualizationData.getVisualizationData
- GET /api/visualizations/{uid}/data.csv — VisualizationData.getVisualizationDataCsv
- GET /api/visualizations/{uid}/data.html — VisualizationData.getVisualizationDataHtml
- GET /api/visualizations/{uid}/data.html+css — VisualizationData.getVisualizationDataHtmlCss
- GET /api/visualizations/{uid}/data.pdf — VisualizationData.getVisualizationDataPdf
- GET /api/visualizations/{uid}/data.png — VisualizationData.getVisualizationData2
- GET /api/visualizations/{uid}/data.xls — VisualizationData.getVisualizationDataXls
- GET /api/visualizations/{uid}/data.xml — VisualizationData.getVisualizationDataXml
- POST /api/visualizations/{uid}/favorite — Visualization.setAsFavorite
- DELETE /api/visualizations/{uid}/favorite — Visualization.removeAsFavorite
- GET /api/visualizations/{uid}/gist — Visualization.getObjectGist+getObjectGistAsCsv
- GET /api/visualizations/{uid}/gist.csv — Visualization.getObjectGistAsCsv
- PUT /api/visualizations/{uid}/sharing — Visualization.setSharing
- POST /api/visualizations/{uid}/subscriber — Visualization.subscribe
- DELETE /api/visualizations/{uid}/subscriber — Visualization.unsubscribe
- PUT /api/visualizations/{uid}/translations — Visualization.replaceTranslations
- GET /api/visualizations/{uid}/{property} — Visualization.getObjectProperty
- POST /api/visualizations/{uid}/{property} — Visualization.addCollectionItemsJson
- PUT /api/visualizations/{uid}/{property} — Visualization.replaceCollectionItemsJson
- DELETE /api/visualizations/{uid}/{property} — Visualization.deleteCollectionItemsJson
- GET /api/visualizations/{uid}/{property}/gist — Visualization.getObjectPropertyGist+getObjectPropertyGistAsCsv
- GET /api/visualizations/{uid}/{property}/gist.csv — Visualization.getObjectPropertyGistAsCsv
- POST /api/visualizations/{uid}/{property}/{itemId} — Visualization.addCollectionItem
- DELETE /api/visualizations/{uid}/{property}/{itemId} — Visualization.deleteCollectionItem
