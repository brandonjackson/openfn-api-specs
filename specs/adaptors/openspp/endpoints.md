# OpenSPP API (openspp) v2.0.0

<!-- derived from openapi.json by `pnpm specs index openspp` — do not edit by hand -->

base: https://{host} | auth: http/bearer (JWT) | 112 operations in 26 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Aggregation
- POST /api/v2/spp/aggregation/compute — computeAggregation: Compute population aggregation
- GET /api/v2/spp/aggregation/dimensions — listDimensions: List available dimensions

## Batch
- POST /api/v2/spp/$batch — processBundle: Process a transaction or batch bundle

## Bulk Operations
- POST /api/v2/spp/$bulk/export — bulkExport: Bulk export multiple resources by identifier

## ChangeRequest
- GET /api/v2/spp/ChangeRequest — searchChangeRequests: Search for change requests
- POST /api/v2/spp/ChangeRequest — createChangeRequest: Create a new change request
- GET /api/v2/spp/ChangeRequest/$types — listChangeRequestTypes: List all active Change Request types
- GET /api/v2/spp/ChangeRequest/$types/{code} — getChangeRequestTypeSchema: Get the full field schema for a Change Request type
- GET /api/v2/spp/ChangeRequest/{p1}/{p2}/{p3} — readChangeRequest: Read a change request by reference
- PUT /api/v2/spp/ChangeRequest/{p1}/{p2}/{p3} — updateChangeRequest: Update change request detail data
- POST /api/v2/spp/ChangeRequest/{p1}/{p2}/{p3}/$submit — submitChangeRequest: Submit change request for approval
- POST /api/v2/spp/ChangeRequest/{p1}/{p2}/{p3}/$approve — approveChangeRequest: Approve a pending change request
- POST /api/v2/spp/ChangeRequest/{p1}/{p2}/{p3}/$reject — rejectChangeRequest: Reject a pending change request
- POST /api/v2/spp/ChangeRequest/{p1}/{p2}/{p3}/$request-revision — requestRevisionChangeRequest: Request revision on a pending change request
- POST /api/v2/spp/ChangeRequest/{p1}/{p2}/{p3}/$apply — applyChangeRequest: Apply an approved change request
- POST /api/v2/spp/ChangeRequest/{p1}/{p2}/{p3}/$reset — resetChangeRequest: Reset a rejected/revision CR to draft

## Consent
- GET /api/v2/spp/Consent/{consent_id} — getConsentStatus: Get consent status
- DELETE /api/v2/spp/Consent/{consent_id} — deleteConsent: Revoke consent (DELETE method)
- POST /api/v2/spp/Consent/{consent_id}/$revoke — revokeConsent: Revoke consent
- GET /api/v2/spp/Consent/{consent_id}/$receipt — getConsentReceipt: Get consent receipt
- GET /api/v2/spp/Consent/{consent_id}/$history — getConsentHistory: Get consent history
- GET /api/v2/spp/Consent/{consent_id}/$access-summary — getAccessSummary: Get access summary

## Cycle
- GET /api/v2/spp/Cycle/{identifier} — readCycle: Read Cycle by identifier
- GET /api/v2/spp/Cycle — searchCycles: Search for cycles

## Data
- POST /api/v2/spp/Data/push — pushValues: Push variable values
- GET /api/v2/spp/Data/pull — pullValues: Pull variable values
- POST /api/v2/spp/Data/invalidate — invalidateValues: Invalidate cached values
- GET /api/v2/spp/Data/variables — listVariables: List available variables

## Entitlement
- GET /api/v2/spp/Entitlement/{identifier} — readEntitlement: Read Entitlement by identifier (code)
- GET /api/v2/spp/Entitlement — searchEntitlements: Search for entitlements

## GIS
- GET /api/v2/spp/gis/export/geopackage — exportGeopackage: Export layers as GeoPackage
- GET /api/v2/spp/gis/geofences — listGeofences: List geofences
- POST /api/v2/spp/gis/geofences — createGeofence: Create geofence
- GET /api/v2/spp/gis/geofences/{geofence_id} — getGeofence: Get geofence
- DELETE /api/v2/spp/gis/geofences/{geofence_id} — deleteGeofence: Archive geofence
- POST /api/v2/spp/gis/query/proximity — queryProximity: Query statistics by proximity to reference points
- POST /api/v2/spp/gis/query/statistics — queryStatistics: Query statistics for polygon
- POST /api/v2/spp/gis/query/statistics/batch — queryStatisticsBatch: Batch query statistics for multiple polygons
- GET /api/v2/spp/gis/statistics — listStatistics: List published GIS statistics

## GIS - OGC API Features
- GET /api/v2/spp/gis/ogc — getLandingPage: OGC API landing page
- GET /api/v2/spp/gis/ogc/conformance — getConformance: OGC conformance classes
- GET /api/v2/spp/gis/ogc/collections — getCollections: List feature collections
- GET /api/v2/spp/gis/ogc/collections/{collection_id} — getCollection: Collection metadata
- GET /api/v2/spp/gis/ogc/collections/{collection_id}/items — getCollectionItems: Feature items
- GET /api/v2/spp/gis/ogc/collections/{collection_id}/items/{feature_id} — getCollectionItem: Single feature
- GET /api/v2/spp/gis/ogc/collections/{collection_id}/qml — getCollectionQml: QGIS style file (OpenSPP extension)

## Group
- GET /api/v2/spp/Group/{identifier} — readGroup: Read Group by external identifier
- PUT /api/v2/spp/Group/{identifier} — updateGroup: Update Group (full replacement)
- PATCH /api/v2/spp/Group/{identifier} — patchGroup: Partially update Group (JSON Merge Patch - RFC 7396)
- GET /api/v2/spp/Group — searchGroups: Search for groups
- POST /api/v2/spp/Group — createGroup: Create new Group
- POST /api/v2/spp/Group/{identifier}/$add-member — addMember: Add a member to a group
- POST /api/v2/spp/Group/{identifier}/$remove-member — removeMember: Remove a member from a group
- PATCH /api/v2/spp/Group/{identifier}/member/{individual_identifier} — updateMember: Update a member's role or dates in a group
- POST /api/v2/spp/Group/$merge — mergeGroups: Merge two groups into one
- POST /api/v2/spp/Group/{identifier}/$split — splitGroup: Split a group by moving some members to a new group
- GET /api/v2/spp/Group/{identifier}/membership-history — getMembershipHistory: Get membership change history for a group
- GET /api/v2/spp/Group/_filters — getGroupFilters: Get Group Filters
- POST /api/v2/spp/Group/_search — advancedGroupSearch: Advanced Group Search

## Individual
- GET /api/v2/spp/Individual/{identifier} — readIndividual: Read Individual by external identifier
- PUT /api/v2/spp/Individual/{identifier} — updateIndividual: Update Individual (full replacement)
- PATCH /api/v2/spp/Individual/{identifier} — patchIndividual: Partially update Individual (JSON Merge Patch - RFC 7396)
- GET /api/v2/spp/Individual — searchIndividuals: Search for individuals
- POST /api/v2/spp/Individual — createIndividual: Create new Individual
- GET /api/v2/spp/Individual/{identifier}/groups — getIndividualGroups: Get all groups an individual belongs to (reverse lookup)
- GET /api/v2/spp/Individual/_filters — getIndividualFilters: Get Individual Filters
- POST /api/v2/spp/Individual/_search — advancedIndividualSearch: Advanced Individual Search

## Metadata
- GET /api/v2/spp/metadata — getMetadata: Get API capability information

## OAuth
- POST /api/v2/spp/oauth/token — getToken: OAuth 2.0 client-credentials token

## Product
- GET /api/v2/spp/Product/{identifier} — readProduct: Read Product by identifier
- GET /api/v2/spp/Product — searchProducts: Search for products

## ProductCategory
- GET /api/v2/spp/ProductCategory/{identifier} — readProductCategory: Read Product Category by identifier
- GET /api/v2/spp/ProductCategory — searchProductCategories: Search for product categories

## Program
- GET /api/v2/spp/Program/{identifier} — readProgram: Read Program by external identifier
- GET /api/v2/spp/Program — searchPrograms: Search for programs
- GET /api/v2/spp/Program/_filters — getProgramFilters: Get Program Filters
- POST /api/v2/spp/Program/_search — advancedProgramSearch: Advanced Program Search

## ProgramMembership
- GET /api/v2/spp/ProgramMembership/{identifier} — readProgramMembership: Read ProgramMembership by beneficiary identifier and, optionally, program
- PUT /api/v2/spp/ProgramMembership/{identifier} — updateProgramMembership: Update ProgramMembership (full replacement)
- GET /api/v2/spp/ProgramMembership — searchProgramMemberships: Search for program memberships
- POST /api/v2/spp/ProgramMembership — createProgramMembership: Create new ProgramMembership (enrollment)
- GET /api/v2/spp/ProgramMembership/_filters — getProgramMembershipFilters: Get ProgramMembership Filters
- POST /api/v2/spp/ProgramMembership/_search — advancedProgramMembershipSearch: Advanced ProgramMembership Search

## ServicePoint
- GET /api/v2/spp/ServicePoint/{identifier} — readServicePoint: Read Service Point by identifier
- GET /api/v2/spp/ServicePoint — searchServicePoints: Search for service points

## Simulation
- GET /api/v2/spp/simulation/scenarios — listScenarios: List simulation scenarios
- POST /api/v2/spp/simulation/scenarios — createScenario: Create a simulation scenario
- GET /api/v2/spp/simulation/scenarios/{scenario_id} — getScenario: Get a simulation scenario
- PUT /api/v2/spp/simulation/scenarios/{scenario_id} — updateScenario: Update a simulation scenario
- DELETE /api/v2/spp/simulation/scenarios/{scenario_id} — archiveScenario: Archive a simulation scenario
- POST /api/v2/spp/simulation/scenarios/{scenario_id}/ready — markScenarioReady: Mark scenario as ready
- POST /api/v2/spp/simulation/scenarios/{scenario_id}/run — runSimulation: Run a simulation
- POST /api/v2/spp/simulation/scenarios/{scenario_id}/convert-to-program — convertToProgram: Convert scenario to program
- GET /api/v2/spp/simulation/runs — listRuns: List simulation runs
- GET /api/v2/spp/simulation/runs/{run_id} — getRun: Get a simulation run
- POST /api/v2/spp/simulation/comparisons — createComparison: Create a comparison
- GET /api/v2/spp/simulation/comparisons/{comparison_id} — getComparison: Get a comparison
- GET /api/v2/spp/simulation/templates — listTemplates: List scenario templates

## Studio
- GET /api/v2/spp/Studio/fields — listStudioFields: List Studio custom fields
- GET /api/v2/spp/Studio/fields/{technical_name}/schema — getFieldSchema: Get JSON Schema for a Studio field
- GET /api/v2/spp/Studio/variables — listStudioVariables: List available variables
- GET /api/v2/spp/Studio/variables/{resource_type}/{identifier} — getSubjectVariables: Get variable values for a subject

## UnitOfMeasure
- GET /api/v2/spp/UnitOfMeasure/{identifier} — readUom: Read Unit of Measure by identifier
- GET /api/v2/spp/UnitOfMeasure — searchUoms: Search for units of measure

## Vocabulary
- GET /api/v2/spp/Vocabulary — listVocabularies: List vocabularies
- GET /api/v2/spp/Vocabulary/{namespace_uri}/codes — getVocabularyCodes: Get vocabulary codes
- GET /api/v2/spp/Vocabulary/{namespace_uri} — getVocabulary: Get vocabulary details

## discovery
- GET /api/v2/spp/openapi.json — getOpenapiSchema: This deployment's generated OpenAPI schema

## jsonrpc
- POST /web/session/authenticate — authenticateSession: Authenticate a session (JSON-RPC)
- POST /jsonrpc — callJsonRpc: Call a model method (execute_kw, JSON-RPC)

## xmlrpc
- POST /xmlrpc/2/common — callCommon: XML-RPC common service (version / authenticate / login)
- POST /xmlrpc/2/object — callObject: XML-RPC object service (execute_kw)
