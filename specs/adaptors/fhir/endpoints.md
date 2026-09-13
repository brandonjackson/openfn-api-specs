# HL7 FHIR R4 RESTful API (fhir) v4.0.1

<!-- derived from openapi.json by `pnpm specs index fhir` — do not edit by hand -->

base: {baseUrl}/{apiPath}, https://hapi.fhir.org/baseR4 | auth: http/bearer, http/basic | 1872 operations in 147 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Account
- GET /Account — searchAccounts: search-type: search for Account resources
- POST /Account — createAccount: create: create a new Account
- PUT /Account — updateMatchingAccounts: conditional update: update the Account matching the search parameters
- DELETE /Account — deleteMatchingAccounts: conditional delete: delete the Account resources matching the search parameters
- POST /Account/_search — searchAccountsByPost: search-type: search for Account resources via POST
- GET /Account/{id} — getAccount: read: read the current state of an Account
- PUT /Account/{id} — updateAccount: update: update an Account, or create it with a client-assigned id
- PATCH /Account/{id} — patchAccount: patch: apply a patch document to an Account
- DELETE /Account/{id} — deleteAccount: delete: delete an Account
- GET /Account/_history — getAccountTypeHistory: history-type: retrieve the change history for all Account resources
- GET /Account/{id}/_history — getAccountHistory: history-instance: retrieve the change history of one Account
- GET /Account/{id}/_history/{vid} — getAccountVersion: vread: read a specific version of an Account

## ActivityDefinition
- GET /ActivityDefinition — searchActivityDefinitions: search-type: search for ActivityDefinition resources
- POST /ActivityDefinition — createActivityDefinition: create: create a new ActivityDefinition
- PUT /ActivityDefinition — updateMatchingActivityDefinitions: conditional update: update the ActivityDefinition matching the search parameters
- DELETE /ActivityDefinition — deleteMatchingActivityDefinitions: conditional delete: delete the ActivityDefinition resources matching the search parameters
- POST /ActivityDefinition/_search — searchActivityDefinitionsByPost: search-type: search for ActivityDefinition resources via POST
- GET /ActivityDefinition/{id} — getActivityDefinition: read: read the current state of an ActivityDefinition
- PUT /ActivityDefinition/{id} — updateActivityDefinition: update: update an ActivityDefinition, or create it with a client-assigned id
- PATCH /ActivityDefinition/{id} — patchActivityDefinition: patch: apply a patch document to an ActivityDefinition
- DELETE /ActivityDefinition/{id} — deleteActivityDefinition: delete: delete an ActivityDefinition
- GET /ActivityDefinition/_history — getActivityDefinitionTypeHistory: history-type: retrieve the change history for all ActivityDefinition resources
- GET /ActivityDefinition/{id}/_history — getActivityDefinitionHistory: history-instance: retrieve the change history of one ActivityDefinition
- GET /ActivityDefinition/{id}/_history/{vid} — getActivityDefinitionVersion: vread: read a specific version of an ActivityDefinition
- GET /ActivityDefinition/$apply — getActivityDefinitionApply: $apply: Apply (on the ActivityDefinition resource type) — GET form
- POST /ActivityDefinition/$apply — runActivityDefinitionApply: $apply: Apply (on the ActivityDefinition resource type)
- GET /ActivityDefinition/{id}/$apply — getActivityDefinitionApplyById: $apply: Apply (on one ActivityDefinition instance) — GET form
- POST /ActivityDefinition/{id}/$apply — runActivityDefinitionApplyById: $apply: Apply (on one ActivityDefinition instance)
- GET /ActivityDefinition/{id}/$data-requirements — getActivityDefinitionDataRequirementsById: $data-requirements: Data Requirements (on one ActivityDefinition instance) — GET form
- POST /ActivityDefinition/{id}/$data-requirements — runActivityDefinitionDataRequirementsById: $data-requirements: Data Requirements (on one ActivityDefinition instance)

## AdverseEvent
- GET /AdverseEvent — searchAdverseEvents: search-type: search for AdverseEvent resources
- POST /AdverseEvent — createAdverseEvent: create: create a new AdverseEvent
- PUT /AdverseEvent — updateMatchingAdverseEvents: conditional update: update the AdverseEvent matching the search parameters
- DELETE /AdverseEvent — deleteMatchingAdverseEvents: conditional delete: delete the AdverseEvent resources matching the search parameters
- POST /AdverseEvent/_search — searchAdverseEventsByPost: search-type: search for AdverseEvent resources via POST
- GET /AdverseEvent/{id} — getAdverseEvent: read: read the current state of an AdverseEvent
- PUT /AdverseEvent/{id} — updateAdverseEvent: update: update an AdverseEvent, or create it with a client-assigned id
- PATCH /AdverseEvent/{id} — patchAdverseEvent: patch: apply a patch document to an AdverseEvent
- DELETE /AdverseEvent/{id} — deleteAdverseEvent: delete: delete an AdverseEvent
- GET /AdverseEvent/_history — getAdverseEventTypeHistory: history-type: retrieve the change history for all AdverseEvent resources
- GET /AdverseEvent/{id}/_history — getAdverseEventHistory: history-instance: retrieve the change history of one AdverseEvent
- GET /AdverseEvent/{id}/_history/{vid} — getAdverseEventVersion: vread: read a specific version of an AdverseEvent

## AllergyIntolerance
- GET /AllergyIntolerance — searchAllergyIntolerances: search-type: search for AllergyIntolerance resources
- POST /AllergyIntolerance — createAllergyIntolerance: create: create a new AllergyIntolerance
- PUT /AllergyIntolerance — updateMatchingAllergyIntolerances: conditional update: update the AllergyIntolerance matching the search parameters
- DELETE /AllergyIntolerance — deleteMatchingAllergyIntolerances: conditional delete: delete the AllergyIntolerance resources matching the search parameters
- POST /AllergyIntolerance/_search — searchAllergyIntolerancesByPost: search-type: search for AllergyIntolerance resources via POST
- GET /AllergyIntolerance/{id} — getAllergyIntolerance: read: read the current state of an AllergyIntolerance
- PUT /AllergyIntolerance/{id} — updateAllergyIntolerance: update: update an AllergyIntolerance, or create it with a client-assigned id
- PATCH /AllergyIntolerance/{id} — patchAllergyIntolerance: patch: apply a patch document to an AllergyIntolerance
- DELETE /AllergyIntolerance/{id} — deleteAllergyIntolerance: delete: delete an AllergyIntolerance
- GET /AllergyIntolerance/_history — getAllergyIntoleranceTypeHistory: history-type: retrieve the change history for all AllergyIntolerance resources
- GET /AllergyIntolerance/{id}/_history — getAllergyIntoleranceHistory: history-instance: retrieve the change history of one AllergyIntolerance
- GET /AllergyIntolerance/{id}/_history/{vid} — getAllergyIntoleranceVersion: vread: read a specific version of an AllergyIntolerance

## Appointment
- GET /Appointment — searchAppointments: search-type: search for Appointment resources
- POST /Appointment — createAppointment: create: create a new Appointment
- PUT /Appointment — updateMatchingAppointments: conditional update: update the Appointment matching the search parameters
- DELETE /Appointment — deleteMatchingAppointments: conditional delete: delete the Appointment resources matching the search parameters
- POST /Appointment/_search — searchAppointmentsByPost: search-type: search for Appointment resources via POST
- GET /Appointment/{id} — getAppointment: read: read the current state of an Appointment
- PUT /Appointment/{id} — updateAppointment: update: update an Appointment, or create it with a client-assigned id
- PATCH /Appointment/{id} — patchAppointment: patch: apply a patch document to an Appointment
- DELETE /Appointment/{id} — deleteAppointment: delete: delete an Appointment
- GET /Appointment/_history — getAppointmentTypeHistory: history-type: retrieve the change history for all Appointment resources
- GET /Appointment/{id}/_history — getAppointmentHistory: history-instance: retrieve the change history of one Appointment
- GET /Appointment/{id}/_history/{vid} — getAppointmentVersion: vread: read a specific version of an Appointment

## AppointmentResponse
- GET /AppointmentResponse — searchAppointmentResponses: search-type: search for AppointmentResponse resources
- POST /AppointmentResponse — createAppointmentResponse: create: create a new AppointmentResponse
- PUT /AppointmentResponse — updateMatchingAppointmentResponses: conditional update: update the AppointmentResponse matching the search parameters
- DELETE /AppointmentResponse — deleteMatchingAppointmentResponses: conditional delete: delete the AppointmentResponse resources matching the search parameters
- POST /AppointmentResponse/_search — searchAppointmentResponsesByPost: search-type: search for AppointmentResponse resources via POST
- GET /AppointmentResponse/{id} — getAppointmentResponse: read: read the current state of an AppointmentResponse
- PUT /AppointmentResponse/{id} — updateAppointmentResponse: update: update an AppointmentResponse, or create it with a client-assigned id
- PATCH /AppointmentResponse/{id} — patchAppointmentResponse: patch: apply a patch document to an AppointmentResponse
- DELETE /AppointmentResponse/{id} — deleteAppointmentResponse: delete: delete an AppointmentResponse
- GET /AppointmentResponse/_history — getAppointmentResponseTypeHistory: history-type: retrieve the change history for all AppointmentResponse resources
- GET /AppointmentResponse/{id}/_history — getAppointmentResponseHistory: history-instance: retrieve the change history of one AppointmentResponse
- GET /AppointmentResponse/{id}/_history/{vid} — getAppointmentResponseVersion: vread: read a specific version of an AppointmentResponse

## AuditEvent
- GET /AuditEvent — searchAuditEvents: search-type: search for AuditEvent resources
- POST /AuditEvent — createAuditEvent: create: create a new AuditEvent
- PUT /AuditEvent — updateMatchingAuditEvents: conditional update: update the AuditEvent matching the search parameters
- DELETE /AuditEvent — deleteMatchingAuditEvents: conditional delete: delete the AuditEvent resources matching the search parameters
- POST /AuditEvent/_search — searchAuditEventsByPost: search-type: search for AuditEvent resources via POST
- GET /AuditEvent/{id} — getAuditEvent: read: read the current state of an AuditEvent
- PUT /AuditEvent/{id} — updateAuditEvent: update: update an AuditEvent, or create it with a client-assigned id
- PATCH /AuditEvent/{id} — patchAuditEvent: patch: apply a patch document to an AuditEvent
- DELETE /AuditEvent/{id} — deleteAuditEvent: delete: delete an AuditEvent
- GET /AuditEvent/_history — getAuditEventTypeHistory: history-type: retrieve the change history for all AuditEvent resources
- GET /AuditEvent/{id}/_history — getAuditEventHistory: history-instance: retrieve the change history of one AuditEvent
- GET /AuditEvent/{id}/_history/{vid} — getAuditEventVersion: vread: read a specific version of an AuditEvent

## Basic
- GET /Basic — searchBasics: search-type: search for Basic resources
- POST /Basic — createBasic: create: create a new Basic
- PUT /Basic — updateMatchingBasics: conditional update: update the Basic matching the search parameters
- DELETE /Basic — deleteMatchingBasics: conditional delete: delete the Basic resources matching the search parameters
- POST /Basic/_search — searchBasicsByPost: search-type: search for Basic resources via POST
- GET /Basic/{id} — getBasic: read: read the current state of a Basic
- PUT /Basic/{id} — updateBasic: update: update a Basic, or create it with a client-assigned id
- PATCH /Basic/{id} — patchBasic: patch: apply a patch document to a Basic
- DELETE /Basic/{id} — deleteBasic: delete: delete a Basic
- GET /Basic/_history — getBasicTypeHistory: history-type: retrieve the change history for all Basic resources
- GET /Basic/{id}/_history — getBasicHistory: history-instance: retrieve the change history of one Basic
- GET /Basic/{id}/_history/{vid} — getBasicVersion: vread: read a specific version of a Basic

## Binary
- GET /Binary — searchBinaries: search-type: search for Binary resources
- POST /Binary — createBinary: create: create a new Binary
- PUT /Binary — updateMatchingBinaries: conditional update: update the Binary matching the search parameters
- DELETE /Binary — deleteMatchingBinaries: conditional delete: delete the Binary resources matching the search parameters
- POST /Binary/_search — searchBinariesByPost: search-type: search for Binary resources via POST
- GET /Binary/{id} — getBinary: read: read the current state of a Binary
- PUT /Binary/{id} — updateBinary: update: update a Binary, or create it with a client-assigned id
- PATCH /Binary/{id} — patchBinary: patch: apply a patch document to a Binary
- DELETE /Binary/{id} — deleteBinary: delete: delete a Binary
- GET /Binary/_history — getBinaryTypeHistory: history-type: retrieve the change history for all Binary resources
- GET /Binary/{id}/_history — getBinaryHistory: history-instance: retrieve the change history of one Binary
- GET /Binary/{id}/_history/{vid} — getBinaryVersion: vread: read a specific version of a Binary

## BiologicallyDerivedProduct
- GET /BiologicallyDerivedProduct — searchBiologicallyDerivedProducts: search-type: search for BiologicallyDerivedProduct resources
- POST /BiologicallyDerivedProduct — createBiologicallyDerivedProduct: create: create a new BiologicallyDerivedProduct
- PUT /BiologicallyDerivedProduct — updateMatchingBiologicallyDerivedProducts: conditional update: update the BiologicallyDerivedProduct matching the search parameters
- DELETE /BiologicallyDerivedProduct — deleteMatchingBiologicallyDerivedProducts: conditional delete: delete the BiologicallyDerivedProduct resources matching the search parameters
- POST /BiologicallyDerivedProduct/_search — searchBiologicallyDerivedProductsByPost: search-type: search for BiologicallyDerivedProduct resources via POST
- GET /BiologicallyDerivedProduct/{id} — getBiologicallyDerivedProduct: read: read the current state of a BiologicallyDerivedProduct
- PUT /BiologicallyDerivedProduct/{id} — updateBiologicallyDerivedProduct: update: update a BiologicallyDerivedProduct, or create it with a client-assigned id
- PATCH /BiologicallyDerivedProduct/{id} — patchBiologicallyDerivedProduct: patch: apply a patch document to a BiologicallyDerivedProduct
- DELETE /BiologicallyDerivedProduct/{id} — deleteBiologicallyDerivedProduct: delete: delete a BiologicallyDerivedProduct
- GET /BiologicallyDerivedProduct/_history — getBiologicallyDerivedProductTypeHistory: history-type: retrieve the change history for all BiologicallyDerivedProduct resources
- GET /BiologicallyDerivedProduct/{id}/_history — getBiologicallyDerivedProductHistory: history-instance: retrieve the change history of one BiologicallyDerivedProduct
- GET /BiologicallyDerivedProduct/{id}/_history/{vid} — getBiologicallyDerivedProductVersion: vread: read a specific version of a BiologicallyDerivedProduct

## BodyStructure
- GET /BodyStructure — searchBodyStructures: search-type: search for BodyStructure resources
- POST /BodyStructure — createBodyStructure: create: create a new BodyStructure
- PUT /BodyStructure — updateMatchingBodyStructures: conditional update: update the BodyStructure matching the search parameters
- DELETE /BodyStructure — deleteMatchingBodyStructures: conditional delete: delete the BodyStructure resources matching the search parameters
- POST /BodyStructure/_search — searchBodyStructuresByPost: search-type: search for BodyStructure resources via POST
- GET /BodyStructure/{id} — getBodyStructure: read: read the current state of a BodyStructure
- PUT /BodyStructure/{id} — updateBodyStructure: update: update a BodyStructure, or create it with a client-assigned id
- PATCH /BodyStructure/{id} — patchBodyStructure: patch: apply a patch document to a BodyStructure
- DELETE /BodyStructure/{id} — deleteBodyStructure: delete: delete a BodyStructure
- GET /BodyStructure/_history — getBodyStructureTypeHistory: history-type: retrieve the change history for all BodyStructure resources
- GET /BodyStructure/{id}/_history — getBodyStructureHistory: history-instance: retrieve the change history of one BodyStructure
- GET /BodyStructure/{id}/_history/{vid} — getBodyStructureVersion: vread: read a specific version of a BodyStructure

## Bundle
- GET /Bundle — searchBundles: search-type: search for Bundle resources
- POST /Bundle — createBundle: create: create a new Bundle
- PUT /Bundle — updateMatchingBundles: conditional update: update the Bundle matching the search parameters
- DELETE /Bundle — deleteMatchingBundles: conditional delete: delete the Bundle resources matching the search parameters
- POST /Bundle/_search — searchBundlesByPost: search-type: search for Bundle resources via POST
- GET /Bundle/{id} — getBundle: read: read the current state of a Bundle
- PUT /Bundle/{id} — updateBundle: update: update a Bundle, or create it with a client-assigned id
- PATCH /Bundle/{id} — patchBundle: patch: apply a patch document to a Bundle
- DELETE /Bundle/{id} — deleteBundle: delete: delete a Bundle
- GET /Bundle/_history — getBundleTypeHistory: history-type: retrieve the change history for all Bundle resources
- GET /Bundle/{id}/_history — getBundleHistory: history-instance: retrieve the change history of one Bundle
- GET /Bundle/{id}/_history/{vid} — getBundleVersion: vread: read a specific version of a Bundle

## CapabilityStatement
- GET /CapabilityStatement — searchCapabilityStatements: search-type: search for CapabilityStatement resources
- POST /CapabilityStatement — createCapabilityStatement: create: create a new CapabilityStatement
- PUT /CapabilityStatement — updateMatchingCapabilityStatements: conditional update: update the CapabilityStatement matching the search parameters
- DELETE /CapabilityStatement — deleteMatchingCapabilityStatements: conditional delete: delete the CapabilityStatement resources matching the search parameters
- POST /CapabilityStatement/_search — searchCapabilityStatementsByPost: search-type: search for CapabilityStatement resources via POST
- GET /CapabilityStatement/{id} — getCapabilityStatement: read: read the current state of a CapabilityStatement
- PUT /CapabilityStatement/{id} — updateCapabilityStatement: update: update a CapabilityStatement, or create it with a client-assigned id
- PATCH /CapabilityStatement/{id} — patchCapabilityStatement: patch: apply a patch document to a CapabilityStatement
- DELETE /CapabilityStatement/{id} — deleteCapabilityStatement: delete: delete a CapabilityStatement
- GET /CapabilityStatement/_history — getCapabilityStatementTypeHistory: history-type: retrieve the change history for all CapabilityStatement resources
- GET /CapabilityStatement/{id}/_history — getCapabilityStatementHistory: history-instance: retrieve the change history of one CapabilityStatement
- GET /CapabilityStatement/{id}/_history/{vid} — getCapabilityStatementVersion: vread: read a specific version of a CapabilityStatement
- GET /CapabilityStatement/$conforms — getCapabilityStatementConforms: $conforms: Test if a server implements a client's required operations (on the CapabilityStatement resource type) — GET form
- POST /CapabilityStatement/$conforms — runCapabilityStatementConforms: $conforms: Test if a server implements a client's required operations (on the CapabilityStatement resource type)
- GET /CapabilityStatement/$implements — getCapabilityStatementImplements: $implements: Test if a server implements a client's required operations (on the CapabilityStatement resource type) — GET form
- POST /CapabilityStatement/$implements — runCapabilityStatementImplements: $implements: Test if a server implements a client's required operations (on the CapabilityStatement resource type)
- GET /CapabilityStatement/{id}/$implements — getCapabilityStatementImplementsById: $implements: Test if a server implements a client's required operations (on one CapabilityStatement instance) — GET form
- POST /CapabilityStatement/{id}/$implements — runCapabilityStatementImplementsById: $implements: Test if a server implements a client's required operations (on one CapabilityStatement instance)
- GET /CapabilityStatement/$subset — getCapabilityStatementSubset: $subset: Fetch a subset of the CapabilityStatement resource (on the CapabilityStatement resource type) — GET form
- POST /CapabilityStatement/$subset — runCapabilityStatementSubset: $subset: Fetch a subset of the CapabilityStatement resource (on the CapabilityStatement resource type)
- GET /CapabilityStatement/{id}/$subset — getCapabilityStatementSubsetById: $subset: Fetch a subset of the CapabilityStatement resource (on one CapabilityStatement instance) — GET form
- POST /CapabilityStatement/{id}/$subset — runCapabilityStatementSubsetById: $subset: Fetch a subset of the CapabilityStatement resource (on one CapabilityStatement instance)

## CarePlan
- GET /CarePlan — searchCarePlans: search-type: search for CarePlan resources
- POST /CarePlan — createCarePlan: create: create a new CarePlan
- PUT /CarePlan — updateMatchingCarePlans: conditional update: update the CarePlan matching the search parameters
- DELETE /CarePlan — deleteMatchingCarePlans: conditional delete: delete the CarePlan resources matching the search parameters
- POST /CarePlan/_search — searchCarePlansByPost: search-type: search for CarePlan resources via POST
- GET /CarePlan/{id} — getCarePlan: read: read the current state of a CarePlan
- PUT /CarePlan/{id} — updateCarePlan: update: update a CarePlan, or create it with a client-assigned id
- PATCH /CarePlan/{id} — patchCarePlan: patch: apply a patch document to a CarePlan
- DELETE /CarePlan/{id} — deleteCarePlan: delete: delete a CarePlan
- GET /CarePlan/_history — getCarePlanTypeHistory: history-type: retrieve the change history for all CarePlan resources
- GET /CarePlan/{id}/_history — getCarePlanHistory: history-instance: retrieve the change history of one CarePlan
- GET /CarePlan/{id}/_history/{vid} — getCarePlanVersion: vread: read a specific version of a CarePlan

## CareTeam
- GET /CareTeam — searchCareTeams: search-type: search for CareTeam resources
- POST /CareTeam — createCareTeam: create: create a new CareTeam
- PUT /CareTeam — updateMatchingCareTeams: conditional update: update the CareTeam matching the search parameters
- DELETE /CareTeam — deleteMatchingCareTeams: conditional delete: delete the CareTeam resources matching the search parameters
- POST /CareTeam/_search — searchCareTeamsByPost: search-type: search for CareTeam resources via POST
- GET /CareTeam/{id} — getCareTeam: read: read the current state of a CareTeam
- PUT /CareTeam/{id} — updateCareTeam: update: update a CareTeam, or create it with a client-assigned id
- PATCH /CareTeam/{id} — patchCareTeam: patch: apply a patch document to a CareTeam
- DELETE /CareTeam/{id} — deleteCareTeam: delete: delete a CareTeam
- GET /CareTeam/_history — getCareTeamTypeHistory: history-type: retrieve the change history for all CareTeam resources
- GET /CareTeam/{id}/_history — getCareTeamHistory: history-instance: retrieve the change history of one CareTeam
- GET /CareTeam/{id}/_history/{vid} — getCareTeamVersion: vread: read a specific version of a CareTeam

## CatalogEntry
- GET /CatalogEntry — searchCatalogEntries: search-type: search for CatalogEntry resources
- POST /CatalogEntry — createCatalogEntry: create: create a new CatalogEntry
- PUT /CatalogEntry — updateMatchingCatalogEntries: conditional update: update the CatalogEntry matching the search parameters
- DELETE /CatalogEntry — deleteMatchingCatalogEntries: conditional delete: delete the CatalogEntry resources matching the search parameters
- POST /CatalogEntry/_search — searchCatalogEntriesByPost: search-type: search for CatalogEntry resources via POST
- GET /CatalogEntry/{id} — getCatalogEntry: read: read the current state of a CatalogEntry
- PUT /CatalogEntry/{id} — updateCatalogEntry: update: update a CatalogEntry, or create it with a client-assigned id
- PATCH /CatalogEntry/{id} — patchCatalogEntry: patch: apply a patch document to a CatalogEntry
- DELETE /CatalogEntry/{id} — deleteCatalogEntry: delete: delete a CatalogEntry
- GET /CatalogEntry/_history — getCatalogEntryTypeHistory: history-type: retrieve the change history for all CatalogEntry resources
- GET /CatalogEntry/{id}/_history — getCatalogEntryHistory: history-instance: retrieve the change history of one CatalogEntry
- GET /CatalogEntry/{id}/_history/{vid} — getCatalogEntryVersion: vread: read a specific version of a CatalogEntry

## ChargeItem
- GET /ChargeItem — searchChargeItems: search-type: search for ChargeItem resources
- POST /ChargeItem — createChargeItem: create: create a new ChargeItem
- PUT /ChargeItem — updateMatchingChargeItems: conditional update: update the ChargeItem matching the search parameters
- DELETE /ChargeItem — deleteMatchingChargeItems: conditional delete: delete the ChargeItem resources matching the search parameters
- POST /ChargeItem/_search — searchChargeItemsByPost: search-type: search for ChargeItem resources via POST
- GET /ChargeItem/{id} — getChargeItem: read: read the current state of a ChargeItem
- PUT /ChargeItem/{id} — updateChargeItem: update: update a ChargeItem, or create it with a client-assigned id
- PATCH /ChargeItem/{id} — patchChargeItem: patch: apply a patch document to a ChargeItem
- DELETE /ChargeItem/{id} — deleteChargeItem: delete: delete a ChargeItem
- GET /ChargeItem/_history — getChargeItemTypeHistory: history-type: retrieve the change history for all ChargeItem resources
- GET /ChargeItem/{id}/_history — getChargeItemHistory: history-instance: retrieve the change history of one ChargeItem
- GET /ChargeItem/{id}/_history/{vid} — getChargeItemVersion: vread: read a specific version of a ChargeItem

## ChargeItemDefinition
- GET /ChargeItemDefinition — searchChargeItemDefinitions: search-type: search for ChargeItemDefinition resources
- POST /ChargeItemDefinition — createChargeItemDefinition: create: create a new ChargeItemDefinition
- PUT /ChargeItemDefinition — updateMatchingChargeItemDefinitions: conditional update: update the ChargeItemDefinition matching the search parameters
- DELETE /ChargeItemDefinition — deleteMatchingChargeItemDefinitions: conditional delete: delete the ChargeItemDefinition resources matching the search parameters
- POST /ChargeItemDefinition/_search — searchChargeItemDefinitionsByPost: search-type: search for ChargeItemDefinition resources via POST
- GET /ChargeItemDefinition/{id} — getChargeItemDefinition: read: read the current state of a ChargeItemDefinition
- PUT /ChargeItemDefinition/{id} — updateChargeItemDefinition: update: update a ChargeItemDefinition, or create it with a client-assigned id
- PATCH /ChargeItemDefinition/{id} — patchChargeItemDefinition: patch: apply a patch document to a ChargeItemDefinition
- DELETE /ChargeItemDefinition/{id} — deleteChargeItemDefinition: delete: delete a ChargeItemDefinition
- GET /ChargeItemDefinition/_history — getChargeItemDefinitionTypeHistory: history-type: retrieve the change history for all ChargeItemDefinition resources
- GET /ChargeItemDefinition/{id}/_history — getChargeItemDefinitionHistory: history-instance: retrieve the change history of one ChargeItemDefinition
- GET /ChargeItemDefinition/{id}/_history/{vid} — getChargeItemDefinitionVersion: vread: read a specific version of a ChargeItemDefinition
- POST /ChargeItemDefinition/{id}/$apply — runChargeItemDefinitionApplyById: $apply: Apply (on one ChargeItemDefinition instance)

## Claim
- GET /Claim — searchClaims: search-type: search for Claim resources
- POST /Claim — createClaim: create: create a new Claim
- PUT /Claim — updateMatchingClaims: conditional update: update the Claim matching the search parameters
- DELETE /Claim — deleteMatchingClaims: conditional delete: delete the Claim resources matching the search parameters
- POST /Claim/_search — searchClaimsByPost: search-type: search for Claim resources via POST
- GET /Claim/{id} — getClaim: read: read the current state of a Claim
- PUT /Claim/{id} — updateClaim: update: update a Claim, or create it with a client-assigned id
- PATCH /Claim/{id} — patchClaim: patch: apply a patch document to a Claim
- DELETE /Claim/{id} — deleteClaim: delete: delete a Claim
- GET /Claim/_history — getClaimTypeHistory: history-type: retrieve the change history for all Claim resources
- GET /Claim/{id}/_history — getClaimHistory: history-instance: retrieve the change history of one Claim
- GET /Claim/{id}/_history/{vid} — getClaimVersion: vread: read a specific version of a Claim
- POST /Claim/$submit — runClaimSubmit: $submit: Submit a Claim resource for adjudication (on the Claim resource type)

## ClaimResponse
- GET /ClaimResponse — searchClaimResponses: search-type: search for ClaimResponse resources
- POST /ClaimResponse — createClaimResponse: create: create a new ClaimResponse
- PUT /ClaimResponse — updateMatchingClaimResponses: conditional update: update the ClaimResponse matching the search parameters
- DELETE /ClaimResponse — deleteMatchingClaimResponses: conditional delete: delete the ClaimResponse resources matching the search parameters
- POST /ClaimResponse/_search — searchClaimResponsesByPost: search-type: search for ClaimResponse resources via POST
- GET /ClaimResponse/{id} — getClaimResponse: read: read the current state of a ClaimResponse
- PUT /ClaimResponse/{id} — updateClaimResponse: update: update a ClaimResponse, or create it with a client-assigned id
- PATCH /ClaimResponse/{id} — patchClaimResponse: patch: apply a patch document to a ClaimResponse
- DELETE /ClaimResponse/{id} — deleteClaimResponse: delete: delete a ClaimResponse
- GET /ClaimResponse/_history — getClaimResponseTypeHistory: history-type: retrieve the change history for all ClaimResponse resources
- GET /ClaimResponse/{id}/_history — getClaimResponseHistory: history-instance: retrieve the change history of one ClaimResponse
- GET /ClaimResponse/{id}/_history/{vid} — getClaimResponseVersion: vread: read a specific version of a ClaimResponse

## ClinicalImpression
- GET /ClinicalImpression — searchClinicalImpressions: search-type: search for ClinicalImpression resources
- POST /ClinicalImpression — createClinicalImpression: create: create a new ClinicalImpression
- PUT /ClinicalImpression — updateMatchingClinicalImpressions: conditional update: update the ClinicalImpression matching the search parameters
- DELETE /ClinicalImpression — deleteMatchingClinicalImpressions: conditional delete: delete the ClinicalImpression resources matching the search parameters
- POST /ClinicalImpression/_search — searchClinicalImpressionsByPost: search-type: search for ClinicalImpression resources via POST
- GET /ClinicalImpression/{id} — getClinicalImpression: read: read the current state of a ClinicalImpression
- PUT /ClinicalImpression/{id} — updateClinicalImpression: update: update a ClinicalImpression, or create it with a client-assigned id
- PATCH /ClinicalImpression/{id} — patchClinicalImpression: patch: apply a patch document to a ClinicalImpression
- DELETE /ClinicalImpression/{id} — deleteClinicalImpression: delete: delete a ClinicalImpression
- GET /ClinicalImpression/_history — getClinicalImpressionTypeHistory: history-type: retrieve the change history for all ClinicalImpression resources
- GET /ClinicalImpression/{id}/_history — getClinicalImpressionHistory: history-instance: retrieve the change history of one ClinicalImpression
- GET /ClinicalImpression/{id}/_history/{vid} — getClinicalImpressionVersion: vread: read a specific version of a ClinicalImpression

## CodeSystem
- GET /CodeSystem — searchCodeSystems: search-type: search for CodeSystem resources
- POST /CodeSystem — createCodeSystem: create: create a new CodeSystem
- PUT /CodeSystem — updateMatchingCodeSystems: conditional update: update the CodeSystem matching the search parameters
- DELETE /CodeSystem — deleteMatchingCodeSystems: conditional delete: delete the CodeSystem resources matching the search parameters
- POST /CodeSystem/_search — searchCodeSystemsByPost: search-type: search for CodeSystem resources via POST
- GET /CodeSystem/{id} — getCodeSystem: read: read the current state of a CodeSystem
- PUT /CodeSystem/{id} — updateCodeSystem: update: update a CodeSystem, or create it with a client-assigned id
- PATCH /CodeSystem/{id} — patchCodeSystem: patch: apply a patch document to a CodeSystem
- DELETE /CodeSystem/{id} — deleteCodeSystem: delete: delete a CodeSystem
- GET /CodeSystem/_history — getCodeSystemTypeHistory: history-type: retrieve the change history for all CodeSystem resources
- GET /CodeSystem/{id}/_history — getCodeSystemHistory: history-instance: retrieve the change history of one CodeSystem
- GET /CodeSystem/{id}/_history/{vid} — getCodeSystemVersion: vread: read a specific version of a CodeSystem
- GET /CodeSystem/$find-matches — getCodeSystemFindMatches: $find-matches: Finding codes based on supplied properties (on the CodeSystem resource type) — GET form
- POST /CodeSystem/$find-matches — runCodeSystemFindMatches: $find-matches: Finding codes based on supplied properties (on the CodeSystem resource type)
- GET /CodeSystem/{id}/$find-matches — getCodeSystemFindMatchesById: $find-matches: Finding codes based on supplied properties (on one CodeSystem instance) — GET form
- POST /CodeSystem/{id}/$find-matches — runCodeSystemFindMatchesById: $find-matches: Finding codes based on supplied properties (on one CodeSystem instance)
- GET /CodeSystem/$lookup — getCodeSystemLookup: $lookup: Concept Look Up & Decomposition (on the CodeSystem resource type) — GET form
- POST /CodeSystem/$lookup — runCodeSystemLookup: $lookup: Concept Look Up & Decomposition (on the CodeSystem resource type)
- GET /CodeSystem/$subsumes — getCodeSystemSubsumes: $subsumes: Subsumption Testing (on the CodeSystem resource type) — GET form
- POST /CodeSystem/$subsumes — runCodeSystemSubsumes: $subsumes: Subsumption Testing (on the CodeSystem resource type)
- GET /CodeSystem/{id}/$subsumes — getCodeSystemSubsumesById: $subsumes: Subsumption Testing (on one CodeSystem instance) — GET form
- POST /CodeSystem/{id}/$subsumes — runCodeSystemSubsumesById: $subsumes: Subsumption Testing (on one CodeSystem instance)
- GET /CodeSystem/$validate-code — getCodeSystemValidateCode: $validate-code: Code System based Validation (on the CodeSystem resource type) — GET form
- POST /CodeSystem/$validate-code — runCodeSystemValidateCode: $validate-code: Code System based Validation (on the CodeSystem resource type)
- GET /CodeSystem/{id}/$validate-code — getCodeSystemValidateCodeById: $validate-code: Code System based Validation (on one CodeSystem instance) — GET form
- POST /CodeSystem/{id}/$validate-code — runCodeSystemValidateCodeById: $validate-code: Code System based Validation (on one CodeSystem instance)

## Communication
- GET /Communication — searchCommunications: search-type: search for Communication resources
- POST /Communication — createCommunication: create: create a new Communication
- PUT /Communication — updateMatchingCommunications: conditional update: update the Communication matching the search parameters
- DELETE /Communication — deleteMatchingCommunications: conditional delete: delete the Communication resources matching the search parameters
- POST /Communication/_search — searchCommunicationsByPost: search-type: search for Communication resources via POST
- GET /Communication/{id} — getCommunication: read: read the current state of a Communication
- PUT /Communication/{id} — updateCommunication: update: update a Communication, or create it with a client-assigned id
- PATCH /Communication/{id} — patchCommunication: patch: apply a patch document to a Communication
- DELETE /Communication/{id} — deleteCommunication: delete: delete a Communication
- GET /Communication/_history — getCommunicationTypeHistory: history-type: retrieve the change history for all Communication resources
- GET /Communication/{id}/_history — getCommunicationHistory: history-instance: retrieve the change history of one Communication
- GET /Communication/{id}/_history/{vid} — getCommunicationVersion: vread: read a specific version of a Communication

## CommunicationRequest
- GET /CommunicationRequest — searchCommunicationRequests: search-type: search for CommunicationRequest resources
- POST /CommunicationRequest — createCommunicationRequest: create: create a new CommunicationRequest
- PUT /CommunicationRequest — updateMatchingCommunicationRequests: conditional update: update the CommunicationRequest matching the search parameters
- DELETE /CommunicationRequest — deleteMatchingCommunicationRequests: conditional delete: delete the CommunicationRequest resources matching the search parameters
- POST /CommunicationRequest/_search — searchCommunicationRequestsByPost: search-type: search for CommunicationRequest resources via POST
- GET /CommunicationRequest/{id} — getCommunicationRequest: read: read the current state of a CommunicationRequest
- PUT /CommunicationRequest/{id} — updateCommunicationRequest: update: update a CommunicationRequest, or create it with a client-assigned id
- PATCH /CommunicationRequest/{id} — patchCommunicationRequest: patch: apply a patch document to a CommunicationRequest
- DELETE /CommunicationRequest/{id} — deleteCommunicationRequest: delete: delete a CommunicationRequest
- GET /CommunicationRequest/_history — getCommunicationRequestTypeHistory: history-type: retrieve the change history for all CommunicationRequest resources
- GET /CommunicationRequest/{id}/_history — getCommunicationRequestHistory: history-instance: retrieve the change history of one CommunicationRequest
- GET /CommunicationRequest/{id}/_history/{vid} — getCommunicationRequestVersion: vread: read a specific version of a CommunicationRequest

## CompartmentDefinition
- GET /CompartmentDefinition — searchCompartmentDefinitions: search-type: search for CompartmentDefinition resources
- POST /CompartmentDefinition — createCompartmentDefinition: create: create a new CompartmentDefinition
- PUT /CompartmentDefinition — updateMatchingCompartmentDefinitions: conditional update: update the CompartmentDefinition matching the search parameters
- DELETE /CompartmentDefinition — deleteMatchingCompartmentDefinitions: conditional delete: delete the CompartmentDefinition resources matching the search parameters
- POST /CompartmentDefinition/_search — searchCompartmentDefinitionsByPost: search-type: search for CompartmentDefinition resources via POST
- GET /CompartmentDefinition/{id} — getCompartmentDefinition: read: read the current state of a CompartmentDefinition
- PUT /CompartmentDefinition/{id} — updateCompartmentDefinition: update: update a CompartmentDefinition, or create it with a client-assigned id
- PATCH /CompartmentDefinition/{id} — patchCompartmentDefinition: patch: apply a patch document to a CompartmentDefinition
- DELETE /CompartmentDefinition/{id} — deleteCompartmentDefinition: delete: delete a CompartmentDefinition
- GET /CompartmentDefinition/_history — getCompartmentDefinitionTypeHistory: history-type: retrieve the change history for all CompartmentDefinition resources
- GET /CompartmentDefinition/{id}/_history — getCompartmentDefinitionHistory: history-instance: retrieve the change history of one CompartmentDefinition
- GET /CompartmentDefinition/{id}/_history/{vid} — getCompartmentDefinitionVersion: vread: read a specific version of a CompartmentDefinition

## Composition
- GET /Composition — searchCompositions: search-type: search for Composition resources
- POST /Composition — createComposition: create: create a new Composition
- PUT /Composition — updateMatchingCompositions: conditional update: update the Composition matching the search parameters
- DELETE /Composition — deleteMatchingCompositions: conditional delete: delete the Composition resources matching the search parameters
- POST /Composition/_search — searchCompositionsByPost: search-type: search for Composition resources via POST
- GET /Composition/{id} — getComposition: read: read the current state of a Composition
- PUT /Composition/{id} — updateComposition: update: update a Composition, or create it with a client-assigned id
- PATCH /Composition/{id} — patchComposition: patch: apply a patch document to a Composition
- DELETE /Composition/{id} — deleteComposition: delete: delete a Composition
- GET /Composition/_history — getCompositionTypeHistory: history-type: retrieve the change history for all Composition resources
- GET /Composition/{id}/_history — getCompositionHistory: history-instance: retrieve the change history of one Composition
- GET /Composition/{id}/_history/{vid} — getCompositionVersion: vread: read a specific version of a Composition
- GET /Composition/$document — getCompositionDocument: $document: Generate a Document (on the Composition resource type) — GET form
- POST /Composition/$document — runCompositionDocument: $document: Generate a Document (on the Composition resource type)
- GET /Composition/{id}/$document — getCompositionDocumentById: $document: Generate a Document (on one Composition instance) — GET form
- POST /Composition/{id}/$document — runCompositionDocumentById: $document: Generate a Document (on one Composition instance)

## ConceptMap
- GET /ConceptMap — searchConceptMaps: search-type: search for ConceptMap resources
- POST /ConceptMap — createConceptMap: create: create a new ConceptMap
- PUT /ConceptMap — updateMatchingConceptMaps: conditional update: update the ConceptMap matching the search parameters
- DELETE /ConceptMap — deleteMatchingConceptMaps: conditional delete: delete the ConceptMap resources matching the search parameters
- POST /ConceptMap/_search — searchConceptMapsByPost: search-type: search for ConceptMap resources via POST
- GET /ConceptMap/{id} — getConceptMap: read: read the current state of a ConceptMap
- PUT /ConceptMap/{id} — updateConceptMap: update: update a ConceptMap, or create it with a client-assigned id
- PATCH /ConceptMap/{id} — patchConceptMap: patch: apply a patch document to a ConceptMap
- DELETE /ConceptMap/{id} — deleteConceptMap: delete: delete a ConceptMap
- GET /ConceptMap/_history — getConceptMapTypeHistory: history-type: retrieve the change history for all ConceptMap resources
- GET /ConceptMap/{id}/_history — getConceptMapHistory: history-instance: retrieve the change history of one ConceptMap
- GET /ConceptMap/{id}/_history/{vid} — getConceptMapVersion: vread: read a specific version of a ConceptMap
- GET /ConceptMap/$translate — getConceptMapTranslate: $translate: Concept Translation (on the ConceptMap resource type) — GET form
- POST /ConceptMap/$translate — runConceptMapTranslate: $translate: Concept Translation (on the ConceptMap resource type)
- GET /ConceptMap/{id}/$translate — getConceptMapTranslateById: $translate: Concept Translation (on one ConceptMap instance) — GET form
- POST /ConceptMap/{id}/$translate — runConceptMapTranslateById: $translate: Concept Translation (on one ConceptMap instance)

## Condition
- GET /Condition — searchConditions: search-type: search for Condition resources
- POST /Condition — createCondition: create: create a new Condition
- PUT /Condition — updateMatchingConditions: conditional update: update the Condition matching the search parameters
- DELETE /Condition — deleteMatchingConditions: conditional delete: delete the Condition resources matching the search parameters
- POST /Condition/_search — searchConditionsByPost: search-type: search for Condition resources via POST
- GET /Condition/{id} — getCondition: read: read the current state of a Condition
- PUT /Condition/{id} — updateCondition: update: update a Condition, or create it with a client-assigned id
- PATCH /Condition/{id} — patchCondition: patch: apply a patch document to a Condition
- DELETE /Condition/{id} — deleteCondition: delete: delete a Condition
- GET /Condition/_history — getConditionTypeHistory: history-type: retrieve the change history for all Condition resources
- GET /Condition/{id}/_history — getConditionHistory: history-instance: retrieve the change history of one Condition
- GET /Condition/{id}/_history/{vid} — getConditionVersion: vread: read a specific version of a Condition

## Consent
- GET /Consent — searchConsents: search-type: search for Consent resources
- POST /Consent — createConsent: create: create a new Consent
- PUT /Consent — updateMatchingConsents: conditional update: update the Consent matching the search parameters
- DELETE /Consent — deleteMatchingConsents: conditional delete: delete the Consent resources matching the search parameters
- POST /Consent/_search — searchConsentsByPost: search-type: search for Consent resources via POST
- GET /Consent/{id} — getConsent: read: read the current state of a Consent
- PUT /Consent/{id} — updateConsent: update: update a Consent, or create it with a client-assigned id
- PATCH /Consent/{id} — patchConsent: patch: apply a patch document to a Consent
- DELETE /Consent/{id} — deleteConsent: delete: delete a Consent
- GET /Consent/_history — getConsentTypeHistory: history-type: retrieve the change history for all Consent resources
- GET /Consent/{id}/_history — getConsentHistory: history-instance: retrieve the change history of one Consent
- GET /Consent/{id}/_history/{vid} — getConsentVersion: vread: read a specific version of a Consent

## Contract
- GET /Contract — searchContracts: search-type: search for Contract resources
- POST /Contract — createContract: create: create a new Contract
- PUT /Contract — updateMatchingContracts: conditional update: update the Contract matching the search parameters
- DELETE /Contract — deleteMatchingContracts: conditional delete: delete the Contract resources matching the search parameters
- POST /Contract/_search — searchContractsByPost: search-type: search for Contract resources via POST
- GET /Contract/{id} — getContract: read: read the current state of a Contract
- PUT /Contract/{id} — updateContract: update: update a Contract, or create it with a client-assigned id
- PATCH /Contract/{id} — patchContract: patch: apply a patch document to a Contract
- DELETE /Contract/{id} — deleteContract: delete: delete a Contract
- GET /Contract/_history — getContractTypeHistory: history-type: retrieve the change history for all Contract resources
- GET /Contract/{id}/_history — getContractHistory: history-instance: retrieve the change history of one Contract
- GET /Contract/{id}/_history/{vid} — getContractVersion: vread: read a specific version of a Contract

## Coverage
- GET /Coverage — searchCoverages: search-type: search for Coverage resources
- POST /Coverage — createCoverage: create: create a new Coverage
- PUT /Coverage — updateMatchingCoverages: conditional update: update the Coverage matching the search parameters
- DELETE /Coverage — deleteMatchingCoverages: conditional delete: delete the Coverage resources matching the search parameters
- POST /Coverage/_search — searchCoveragesByPost: search-type: search for Coverage resources via POST
- GET /Coverage/{id} — getCoverage: read: read the current state of a Coverage
- PUT /Coverage/{id} — updateCoverage: update: update a Coverage, or create it with a client-assigned id
- PATCH /Coverage/{id} — patchCoverage: patch: apply a patch document to a Coverage
- DELETE /Coverage/{id} — deleteCoverage: delete: delete a Coverage
- GET /Coverage/_history — getCoverageTypeHistory: history-type: retrieve the change history for all Coverage resources
- GET /Coverage/{id}/_history — getCoverageHistory: history-instance: retrieve the change history of one Coverage
- GET /Coverage/{id}/_history/{vid} — getCoverageVersion: vread: read a specific version of a Coverage

## CoverageEligibilityRequest
- GET /CoverageEligibilityRequest — searchCoverageEligibilityRequests: search-type: search for CoverageEligibilityRequest resources
- POST /CoverageEligibilityRequest — createCoverageEligibilityRequest: create: create a new CoverageEligibilityRequest
- PUT /CoverageEligibilityRequest — updateMatchingCoverageEligibilityRequests: conditional update: update the CoverageEligibilityRequest matching the search parameters
- DELETE /CoverageEligibilityRequest — deleteMatchingCoverageEligibilityRequests: conditional delete: delete the CoverageEligibilityRequest resources matching the search parameters
- POST /CoverageEligibilityRequest/_search — searchCoverageEligibilityRequestsByPost: search-type: search for CoverageEligibilityRequest resources via POST
- GET /CoverageEligibilityRequest/{id} — getCoverageEligibilityRequest: read: read the current state of a CoverageEligibilityRequest
- PUT /CoverageEligibilityRequest/{id} — updateCoverageEligibilityRequest: update: update a CoverageEligibilityRequest, or create it with a client-assigned id
- PATCH /CoverageEligibilityRequest/{id} — patchCoverageEligibilityRequest: patch: apply a patch document to a CoverageEligibilityRequest
- DELETE /CoverageEligibilityRequest/{id} — deleteCoverageEligibilityRequest: delete: delete a CoverageEligibilityRequest
- GET /CoverageEligibilityRequest/_history — getCoverageEligibilityRequestTypeHistory: history-type: retrieve the change history for all CoverageEligibilityRequest resources
- GET /CoverageEligibilityRequest/{id}/_history — getCoverageEligibilityRequestHistory: history-instance: retrieve the change history of one CoverageEligibilityRequest
- GET /CoverageEligibilityRequest/{id}/_history/{vid} — getCoverageEligibilityRequestVersion: vread: read a specific version of a CoverageEligibilityRequest
- POST /CoverageEligibilityRequest/$submit — runCoverageEligibilityRequestSubmit: $submit: Submit an EligibilityRequest resource for assessment (on the CoverageEligibilityRequest resource type)

## CoverageEligibilityResponse
- GET /CoverageEligibilityResponse — searchCoverageEligibilityResponses: search-type: search for CoverageEligibilityResponse resources
- POST /CoverageEligibilityResponse — createCoverageEligibilityResponse: create: create a new CoverageEligibilityResponse
- PUT /CoverageEligibilityResponse — updateMatchingCoverageEligibilityResponses: conditional update: update the CoverageEligibilityResponse matching the search parameters
- DELETE /CoverageEligibilityResponse — deleteMatchingCoverageEligibilityResponses: conditional delete: delete the CoverageEligibilityResponse resources matching the search parameters
- POST /CoverageEligibilityResponse/_search — searchCoverageEligibilityResponsesByPost: search-type: search for CoverageEligibilityResponse resources via POST
- GET /CoverageEligibilityResponse/{id} — getCoverageEligibilityResponse: read: read the current state of a CoverageEligibilityResponse
- PUT /CoverageEligibilityResponse/{id} — updateCoverageEligibilityResponse: update: update a CoverageEligibilityResponse, or create it with a client-assigned id
- PATCH /CoverageEligibilityResponse/{id} — patchCoverageEligibilityResponse: patch: apply a patch document to a CoverageEligibilityResponse
- DELETE /CoverageEligibilityResponse/{id} — deleteCoverageEligibilityResponse: delete: delete a CoverageEligibilityResponse
- GET /CoverageEligibilityResponse/_history — getCoverageEligibilityResponseTypeHistory: history-type: retrieve the change history for all CoverageEligibilityResponse resources
- GET /CoverageEligibilityResponse/{id}/_history — getCoverageEligibilityResponseHistory: history-instance: retrieve the change history of one CoverageEligibilityResponse
- GET /CoverageEligibilityResponse/{id}/_history/{vid} — getCoverageEligibilityResponseVersion: vread: read a specific version of a CoverageEligibilityResponse

## DetectedIssue
- GET /DetectedIssue — searchDetectedIssues: search-type: search for DetectedIssue resources
- POST /DetectedIssue — createDetectedIssue: create: create a new DetectedIssue
- PUT /DetectedIssue — updateMatchingDetectedIssues: conditional update: update the DetectedIssue matching the search parameters
- DELETE /DetectedIssue — deleteMatchingDetectedIssues: conditional delete: delete the DetectedIssue resources matching the search parameters
- POST /DetectedIssue/_search — searchDetectedIssuesByPost: search-type: search for DetectedIssue resources via POST
- GET /DetectedIssue/{id} — getDetectedIssue: read: read the current state of a DetectedIssue
- PUT /DetectedIssue/{id} — updateDetectedIssue: update: update a DetectedIssue, or create it with a client-assigned id
- PATCH /DetectedIssue/{id} — patchDetectedIssue: patch: apply a patch document to a DetectedIssue
- DELETE /DetectedIssue/{id} — deleteDetectedIssue: delete: delete a DetectedIssue
- GET /DetectedIssue/_history — getDetectedIssueTypeHistory: history-type: retrieve the change history for all DetectedIssue resources
- GET /DetectedIssue/{id}/_history — getDetectedIssueHistory: history-instance: retrieve the change history of one DetectedIssue
- GET /DetectedIssue/{id}/_history/{vid} — getDetectedIssueVersion: vread: read a specific version of a DetectedIssue

## Device
- GET /Device — searchDevices: search-type: search for Device resources
- POST /Device — createDevice: create: create a new Device
- PUT /Device — updateMatchingDevices: conditional update: update the Device matching the search parameters
- DELETE /Device — deleteMatchingDevices: conditional delete: delete the Device resources matching the search parameters
- POST /Device/_search — searchDevicesByPost: search-type: search for Device resources via POST
- GET /Device/{id} — getDevice: read: read the current state of a Device
- PUT /Device/{id} — updateDevice: update: update a Device, or create it with a client-assigned id
- PATCH /Device/{id} — patchDevice: patch: apply a patch document to a Device
- DELETE /Device/{id} — deleteDevice: delete: delete a Device
- GET /Device/_history — getDeviceTypeHistory: history-type: retrieve the change history for all Device resources
- GET /Device/{id}/_history — getDeviceHistory: history-instance: retrieve the change history of one Device
- GET /Device/{id}/_history/{vid} — getDeviceVersion: vread: read a specific version of a Device

## DeviceDefinition
- GET /DeviceDefinition — searchDeviceDefinitions: search-type: search for DeviceDefinition resources
- POST /DeviceDefinition — createDeviceDefinition: create: create a new DeviceDefinition
- PUT /DeviceDefinition — updateMatchingDeviceDefinitions: conditional update: update the DeviceDefinition matching the search parameters
- DELETE /DeviceDefinition — deleteMatchingDeviceDefinitions: conditional delete: delete the DeviceDefinition resources matching the search parameters
- POST /DeviceDefinition/_search — searchDeviceDefinitionsByPost: search-type: search for DeviceDefinition resources via POST
- GET /DeviceDefinition/{id} — getDeviceDefinition: read: read the current state of a DeviceDefinition
- PUT /DeviceDefinition/{id} — updateDeviceDefinition: update: update a DeviceDefinition, or create it with a client-assigned id
- PATCH /DeviceDefinition/{id} — patchDeviceDefinition: patch: apply a patch document to a DeviceDefinition
- DELETE /DeviceDefinition/{id} — deleteDeviceDefinition: delete: delete a DeviceDefinition
- GET /DeviceDefinition/_history — getDeviceDefinitionTypeHistory: history-type: retrieve the change history for all DeviceDefinition resources
- GET /DeviceDefinition/{id}/_history — getDeviceDefinitionHistory: history-instance: retrieve the change history of one DeviceDefinition
- GET /DeviceDefinition/{id}/_history/{vid} — getDeviceDefinitionVersion: vread: read a specific version of a DeviceDefinition

## DeviceMetric
- GET /DeviceMetric — searchDeviceMetrics: search-type: search for DeviceMetric resources
- POST /DeviceMetric — createDeviceMetric: create: create a new DeviceMetric
- PUT /DeviceMetric — updateMatchingDeviceMetrics: conditional update: update the DeviceMetric matching the search parameters
- DELETE /DeviceMetric — deleteMatchingDeviceMetrics: conditional delete: delete the DeviceMetric resources matching the search parameters
- POST /DeviceMetric/_search — searchDeviceMetricsByPost: search-type: search for DeviceMetric resources via POST
- GET /DeviceMetric/{id} — getDeviceMetric: read: read the current state of a DeviceMetric
- PUT /DeviceMetric/{id} — updateDeviceMetric: update: update a DeviceMetric, or create it with a client-assigned id
- PATCH /DeviceMetric/{id} — patchDeviceMetric: patch: apply a patch document to a DeviceMetric
- DELETE /DeviceMetric/{id} — deleteDeviceMetric: delete: delete a DeviceMetric
- GET /DeviceMetric/_history — getDeviceMetricTypeHistory: history-type: retrieve the change history for all DeviceMetric resources
- GET /DeviceMetric/{id}/_history — getDeviceMetricHistory: history-instance: retrieve the change history of one DeviceMetric
- GET /DeviceMetric/{id}/_history/{vid} — getDeviceMetricVersion: vread: read a specific version of a DeviceMetric

## DeviceRequest
- GET /DeviceRequest — searchDeviceRequests: search-type: search for DeviceRequest resources
- POST /DeviceRequest — createDeviceRequest: create: create a new DeviceRequest
- PUT /DeviceRequest — updateMatchingDeviceRequests: conditional update: update the DeviceRequest matching the search parameters
- DELETE /DeviceRequest — deleteMatchingDeviceRequests: conditional delete: delete the DeviceRequest resources matching the search parameters
- POST /DeviceRequest/_search — searchDeviceRequestsByPost: search-type: search for DeviceRequest resources via POST
- GET /DeviceRequest/{id} — getDeviceRequest: read: read the current state of a DeviceRequest
- PUT /DeviceRequest/{id} — updateDeviceRequest: update: update a DeviceRequest, or create it with a client-assigned id
- PATCH /DeviceRequest/{id} — patchDeviceRequest: patch: apply a patch document to a DeviceRequest
- DELETE /DeviceRequest/{id} — deleteDeviceRequest: delete: delete a DeviceRequest
- GET /DeviceRequest/_history — getDeviceRequestTypeHistory: history-type: retrieve the change history for all DeviceRequest resources
- GET /DeviceRequest/{id}/_history — getDeviceRequestHistory: history-instance: retrieve the change history of one DeviceRequest
- GET /DeviceRequest/{id}/_history/{vid} — getDeviceRequestVersion: vread: read a specific version of a DeviceRequest

## DeviceUseStatement
- GET /DeviceUseStatement — searchDeviceUseStatements: search-type: search for DeviceUseStatement resources
- POST /DeviceUseStatement — createDeviceUseStatement: create: create a new DeviceUseStatement
- PUT /DeviceUseStatement — updateMatchingDeviceUseStatements: conditional update: update the DeviceUseStatement matching the search parameters
- DELETE /DeviceUseStatement — deleteMatchingDeviceUseStatements: conditional delete: delete the DeviceUseStatement resources matching the search parameters
- POST /DeviceUseStatement/_search — searchDeviceUseStatementsByPost: search-type: search for DeviceUseStatement resources via POST
- GET /DeviceUseStatement/{id} — getDeviceUseStatement: read: read the current state of a DeviceUseStatement
- PUT /DeviceUseStatement/{id} — updateDeviceUseStatement: update: update a DeviceUseStatement, or create it with a client-assigned id
- PATCH /DeviceUseStatement/{id} — patchDeviceUseStatement: patch: apply a patch document to a DeviceUseStatement
- DELETE /DeviceUseStatement/{id} — deleteDeviceUseStatement: delete: delete a DeviceUseStatement
- GET /DeviceUseStatement/_history — getDeviceUseStatementTypeHistory: history-type: retrieve the change history for all DeviceUseStatement resources
- GET /DeviceUseStatement/{id}/_history — getDeviceUseStatementHistory: history-instance: retrieve the change history of one DeviceUseStatement
- GET /DeviceUseStatement/{id}/_history/{vid} — getDeviceUseStatementVersion: vread: read a specific version of a DeviceUseStatement

## DiagnosticReport
- GET /DiagnosticReport — searchDiagnosticReports: search-type: search for DiagnosticReport resources
- POST /DiagnosticReport — createDiagnosticReport: create: create a new DiagnosticReport
- PUT /DiagnosticReport — updateMatchingDiagnosticReports: conditional update: update the DiagnosticReport matching the search parameters
- DELETE /DiagnosticReport — deleteMatchingDiagnosticReports: conditional delete: delete the DiagnosticReport resources matching the search parameters
- POST /DiagnosticReport/_search — searchDiagnosticReportsByPost: search-type: search for DiagnosticReport resources via POST
- GET /DiagnosticReport/{id} — getDiagnosticReport: read: read the current state of a DiagnosticReport
- PUT /DiagnosticReport/{id} — updateDiagnosticReport: update: update a DiagnosticReport, or create it with a client-assigned id
- PATCH /DiagnosticReport/{id} — patchDiagnosticReport: patch: apply a patch document to a DiagnosticReport
- DELETE /DiagnosticReport/{id} — deleteDiagnosticReport: delete: delete a DiagnosticReport
- GET /DiagnosticReport/_history — getDiagnosticReportTypeHistory: history-type: retrieve the change history for all DiagnosticReport resources
- GET /DiagnosticReport/{id}/_history — getDiagnosticReportHistory: history-instance: retrieve the change history of one DiagnosticReport
- GET /DiagnosticReport/{id}/_history/{vid} — getDiagnosticReportVersion: vread: read a specific version of a DiagnosticReport

## DocumentManifest
- GET /DocumentManifest — searchDocumentManifests: search-type: search for DocumentManifest resources
- POST /DocumentManifest — createDocumentManifest: create: create a new DocumentManifest
- PUT /DocumentManifest — updateMatchingDocumentManifests: conditional update: update the DocumentManifest matching the search parameters
- DELETE /DocumentManifest — deleteMatchingDocumentManifests: conditional delete: delete the DocumentManifest resources matching the search parameters
- POST /DocumentManifest/_search — searchDocumentManifestsByPost: search-type: search for DocumentManifest resources via POST
- GET /DocumentManifest/{id} — getDocumentManifest: read: read the current state of a DocumentManifest
- PUT /DocumentManifest/{id} — updateDocumentManifest: update: update a DocumentManifest, or create it with a client-assigned id
- PATCH /DocumentManifest/{id} — patchDocumentManifest: patch: apply a patch document to a DocumentManifest
- DELETE /DocumentManifest/{id} — deleteDocumentManifest: delete: delete a DocumentManifest
- GET /DocumentManifest/_history — getDocumentManifestTypeHistory: history-type: retrieve the change history for all DocumentManifest resources
- GET /DocumentManifest/{id}/_history — getDocumentManifestHistory: history-instance: retrieve the change history of one DocumentManifest
- GET /DocumentManifest/{id}/_history/{vid} — getDocumentManifestVersion: vread: read a specific version of a DocumentManifest

## DocumentReference
- GET /DocumentReference — searchDocumentReferences: search-type: search for DocumentReference resources
- POST /DocumentReference — createDocumentReference: create: create a new DocumentReference
- PUT /DocumentReference — updateMatchingDocumentReferences: conditional update: update the DocumentReference matching the search parameters
- DELETE /DocumentReference — deleteMatchingDocumentReferences: conditional delete: delete the DocumentReference resources matching the search parameters
- POST /DocumentReference/_search — searchDocumentReferencesByPost: search-type: search for DocumentReference resources via POST
- GET /DocumentReference/{id} — getDocumentReference: read: read the current state of a DocumentReference
- PUT /DocumentReference/{id} — updateDocumentReference: update: update a DocumentReference, or create it with a client-assigned id
- PATCH /DocumentReference/{id} — patchDocumentReference: patch: apply a patch document to a DocumentReference
- DELETE /DocumentReference/{id} — deleteDocumentReference: delete: delete a DocumentReference
- GET /DocumentReference/_history — getDocumentReferenceTypeHistory: history-type: retrieve the change history for all DocumentReference resources
- GET /DocumentReference/{id}/_history — getDocumentReferenceHistory: history-instance: retrieve the change history of one DocumentReference
- GET /DocumentReference/{id}/_history/{vid} — getDocumentReferenceVersion: vread: read a specific version of a DocumentReference

## EffectEvidenceSynthesis
- GET /EffectEvidenceSynthesis — searchEffectEvidenceSynthesises: search-type: search for EffectEvidenceSynthesis resources
- POST /EffectEvidenceSynthesis — createEffectEvidenceSynthesis: create: create a new EffectEvidenceSynthesis
- PUT /EffectEvidenceSynthesis — updateMatchingEffectEvidenceSynthesises: conditional update: update the EffectEvidenceSynthesis matching the search parameters
- DELETE /EffectEvidenceSynthesis — deleteMatchingEffectEvidenceSynthesises: conditional delete: delete the EffectEvidenceSynthesis resources matching the search parameters
- POST /EffectEvidenceSynthesis/_search — searchEffectEvidenceSynthesisesByPost: search-type: search for EffectEvidenceSynthesis resources via POST
- GET /EffectEvidenceSynthesis/{id} — getEffectEvidenceSynthesis: read: read the current state of an EffectEvidenceSynthesis
- PUT /EffectEvidenceSynthesis/{id} — updateEffectEvidenceSynthesis: update: update an EffectEvidenceSynthesis, or create it with a client-assigned id
- PATCH /EffectEvidenceSynthesis/{id} — patchEffectEvidenceSynthesis: patch: apply a patch document to an EffectEvidenceSynthesis
- DELETE /EffectEvidenceSynthesis/{id} — deleteEffectEvidenceSynthesis: delete: delete an EffectEvidenceSynthesis
- GET /EffectEvidenceSynthesis/_history — getEffectEvidenceSynthesisTypeHistory: history-type: retrieve the change history for all EffectEvidenceSynthesis resources
- GET /EffectEvidenceSynthesis/{id}/_history — getEffectEvidenceSynthesisHistory: history-instance: retrieve the change history of one EffectEvidenceSynthesis
- GET /EffectEvidenceSynthesis/{id}/_history/{vid} — getEffectEvidenceSynthesisVersion: vread: read a specific version of an EffectEvidenceSynthesis

## Encounter
- GET /Encounter — searchEncounters: search-type: search for Encounter resources
- POST /Encounter — createEncounter: create: create a new Encounter
- PUT /Encounter — updateMatchingEncounters: conditional update: update the Encounter matching the search parameters
- DELETE /Encounter — deleteMatchingEncounters: conditional delete: delete the Encounter resources matching the search parameters
- POST /Encounter/_search — searchEncountersByPost: search-type: search for Encounter resources via POST
- GET /Encounter/{id} — getEncounter: read: read the current state of an Encounter
- PUT /Encounter/{id} — updateEncounter: update: update an Encounter, or create it with a client-assigned id
- PATCH /Encounter/{id} — patchEncounter: patch: apply a patch document to an Encounter
- DELETE /Encounter/{id} — deleteEncounter: delete: delete an Encounter
- GET /Encounter/_history — getEncounterTypeHistory: history-type: retrieve the change history for all Encounter resources
- GET /Encounter/{id}/_history — getEncounterHistory: history-instance: retrieve the change history of one Encounter
- GET /Encounter/{id}/_history/{vid} — getEncounterVersion: vread: read a specific version of an Encounter
- GET /Encounter/{id}/$everything — getEncounterEverythingById: $everything: Fetch Encounter Record (on one Encounter instance) — GET form
- POST /Encounter/{id}/$everything — runEncounterEverythingById: $everything: Fetch Encounter Record (on one Encounter instance)

## Endpoint
- GET /Endpoint — searchEndpoints: search-type: search for Endpoint resources
- POST /Endpoint — createEndpoint: create: create a new Endpoint
- PUT /Endpoint — updateMatchingEndpoints: conditional update: update the Endpoint matching the search parameters
- DELETE /Endpoint — deleteMatchingEndpoints: conditional delete: delete the Endpoint resources matching the search parameters
- POST /Endpoint/_search — searchEndpointsByPost: search-type: search for Endpoint resources via POST
- GET /Endpoint/{id} — getEndpoint: read: read the current state of an Endpoint
- PUT /Endpoint/{id} — updateEndpoint: update: update an Endpoint, or create it with a client-assigned id
- PATCH /Endpoint/{id} — patchEndpoint: patch: apply a patch document to an Endpoint
- DELETE /Endpoint/{id} — deleteEndpoint: delete: delete an Endpoint
- GET /Endpoint/_history — getEndpointTypeHistory: history-type: retrieve the change history for all Endpoint resources
- GET /Endpoint/{id}/_history — getEndpointHistory: history-instance: retrieve the change history of one Endpoint
- GET /Endpoint/{id}/_history/{vid} — getEndpointVersion: vread: read a specific version of an Endpoint

## EnrollmentRequest
- GET /EnrollmentRequest — searchEnrollmentRequests: search-type: search for EnrollmentRequest resources
- POST /EnrollmentRequest — createEnrollmentRequest: create: create a new EnrollmentRequest
- PUT /EnrollmentRequest — updateMatchingEnrollmentRequests: conditional update: update the EnrollmentRequest matching the search parameters
- DELETE /EnrollmentRequest — deleteMatchingEnrollmentRequests: conditional delete: delete the EnrollmentRequest resources matching the search parameters
- POST /EnrollmentRequest/_search — searchEnrollmentRequestsByPost: search-type: search for EnrollmentRequest resources via POST
- GET /EnrollmentRequest/{id} — getEnrollmentRequest: read: read the current state of an EnrollmentRequest
- PUT /EnrollmentRequest/{id} — updateEnrollmentRequest: update: update an EnrollmentRequest, or create it with a client-assigned id
- PATCH /EnrollmentRequest/{id} — patchEnrollmentRequest: patch: apply a patch document to an EnrollmentRequest
- DELETE /EnrollmentRequest/{id} — deleteEnrollmentRequest: delete: delete an EnrollmentRequest
- GET /EnrollmentRequest/_history — getEnrollmentRequestTypeHistory: history-type: retrieve the change history for all EnrollmentRequest resources
- GET /EnrollmentRequest/{id}/_history — getEnrollmentRequestHistory: history-instance: retrieve the change history of one EnrollmentRequest
- GET /EnrollmentRequest/{id}/_history/{vid} — getEnrollmentRequestVersion: vread: read a specific version of an EnrollmentRequest

## EnrollmentResponse
- GET /EnrollmentResponse — searchEnrollmentResponses: search-type: search for EnrollmentResponse resources
- POST /EnrollmentResponse — createEnrollmentResponse: create: create a new EnrollmentResponse
- PUT /EnrollmentResponse — updateMatchingEnrollmentResponses: conditional update: update the EnrollmentResponse matching the search parameters
- DELETE /EnrollmentResponse — deleteMatchingEnrollmentResponses: conditional delete: delete the EnrollmentResponse resources matching the search parameters
- POST /EnrollmentResponse/_search — searchEnrollmentResponsesByPost: search-type: search for EnrollmentResponse resources via POST
- GET /EnrollmentResponse/{id} — getEnrollmentResponse: read: read the current state of an EnrollmentResponse
- PUT /EnrollmentResponse/{id} — updateEnrollmentResponse: update: update an EnrollmentResponse, or create it with a client-assigned id
- PATCH /EnrollmentResponse/{id} — patchEnrollmentResponse: patch: apply a patch document to an EnrollmentResponse
- DELETE /EnrollmentResponse/{id} — deleteEnrollmentResponse: delete: delete an EnrollmentResponse
- GET /EnrollmentResponse/_history — getEnrollmentResponseTypeHistory: history-type: retrieve the change history for all EnrollmentResponse resources
- GET /EnrollmentResponse/{id}/_history — getEnrollmentResponseHistory: history-instance: retrieve the change history of one EnrollmentResponse
- GET /EnrollmentResponse/{id}/_history/{vid} — getEnrollmentResponseVersion: vread: read a specific version of an EnrollmentResponse

## EpisodeOfCare
- GET /EpisodeOfCare — searchEpisodeOfCares: search-type: search for EpisodeOfCare resources
- POST /EpisodeOfCare — createEpisodeOfCare: create: create a new EpisodeOfCare
- PUT /EpisodeOfCare — updateMatchingEpisodeOfCares: conditional update: update the EpisodeOfCare matching the search parameters
- DELETE /EpisodeOfCare — deleteMatchingEpisodeOfCares: conditional delete: delete the EpisodeOfCare resources matching the search parameters
- POST /EpisodeOfCare/_search — searchEpisodeOfCaresByPost: search-type: search for EpisodeOfCare resources via POST
- GET /EpisodeOfCare/{id} — getEpisodeOfCare: read: read the current state of an EpisodeOfCare
- PUT /EpisodeOfCare/{id} — updateEpisodeOfCare: update: update an EpisodeOfCare, or create it with a client-assigned id
- PATCH /EpisodeOfCare/{id} — patchEpisodeOfCare: patch: apply a patch document to an EpisodeOfCare
- DELETE /EpisodeOfCare/{id} — deleteEpisodeOfCare: delete: delete an EpisodeOfCare
- GET /EpisodeOfCare/_history — getEpisodeOfCareTypeHistory: history-type: retrieve the change history for all EpisodeOfCare resources
- GET /EpisodeOfCare/{id}/_history — getEpisodeOfCareHistory: history-instance: retrieve the change history of one EpisodeOfCare
- GET /EpisodeOfCare/{id}/_history/{vid} — getEpisodeOfCareVersion: vread: read a specific version of an EpisodeOfCare

## EventDefinition
- GET /EventDefinition — searchEventDefinitions: search-type: search for EventDefinition resources
- POST /EventDefinition — createEventDefinition: create: create a new EventDefinition
- PUT /EventDefinition — updateMatchingEventDefinitions: conditional update: update the EventDefinition matching the search parameters
- DELETE /EventDefinition — deleteMatchingEventDefinitions: conditional delete: delete the EventDefinition resources matching the search parameters
- POST /EventDefinition/_search — searchEventDefinitionsByPost: search-type: search for EventDefinition resources via POST
- GET /EventDefinition/{id} — getEventDefinition: read: read the current state of an EventDefinition
- PUT /EventDefinition/{id} — updateEventDefinition: update: update an EventDefinition, or create it with a client-assigned id
- PATCH /EventDefinition/{id} — patchEventDefinition: patch: apply a patch document to an EventDefinition
- DELETE /EventDefinition/{id} — deleteEventDefinition: delete: delete an EventDefinition
- GET /EventDefinition/_history — getEventDefinitionTypeHistory: history-type: retrieve the change history for all EventDefinition resources
- GET /EventDefinition/{id}/_history — getEventDefinitionHistory: history-instance: retrieve the change history of one EventDefinition
- GET /EventDefinition/{id}/_history/{vid} — getEventDefinitionVersion: vread: read a specific version of an EventDefinition

## Evidence
- GET /Evidence — searchEvidences: search-type: search for Evidence resources
- POST /Evidence — createEvidence: create: create a new Evidence
- PUT /Evidence — updateMatchingEvidences: conditional update: update the Evidence matching the search parameters
- DELETE /Evidence — deleteMatchingEvidences: conditional delete: delete the Evidence resources matching the search parameters
- POST /Evidence/_search — searchEvidencesByPost: search-type: search for Evidence resources via POST
- GET /Evidence/{id} — getEvidence: read: read the current state of an Evidence
- PUT /Evidence/{id} — updateEvidence: update: update an Evidence, or create it with a client-assigned id
- PATCH /Evidence/{id} — patchEvidence: patch: apply a patch document to an Evidence
- DELETE /Evidence/{id} — deleteEvidence: delete: delete an Evidence
- GET /Evidence/_history — getEvidenceTypeHistory: history-type: retrieve the change history for all Evidence resources
- GET /Evidence/{id}/_history — getEvidenceHistory: history-instance: retrieve the change history of one Evidence
- GET /Evidence/{id}/_history/{vid} — getEvidenceVersion: vread: read a specific version of an Evidence

## EvidenceVariable
- GET /EvidenceVariable — searchEvidenceVariables: search-type: search for EvidenceVariable resources
- POST /EvidenceVariable — createEvidenceVariable: create: create a new EvidenceVariable
- PUT /EvidenceVariable — updateMatchingEvidenceVariables: conditional update: update the EvidenceVariable matching the search parameters
- DELETE /EvidenceVariable — deleteMatchingEvidenceVariables: conditional delete: delete the EvidenceVariable resources matching the search parameters
- POST /EvidenceVariable/_search — searchEvidenceVariablesByPost: search-type: search for EvidenceVariable resources via POST
- GET /EvidenceVariable/{id} — getEvidenceVariable: read: read the current state of an EvidenceVariable
- PUT /EvidenceVariable/{id} — updateEvidenceVariable: update: update an EvidenceVariable, or create it with a client-assigned id
- PATCH /EvidenceVariable/{id} — patchEvidenceVariable: patch: apply a patch document to an EvidenceVariable
- DELETE /EvidenceVariable/{id} — deleteEvidenceVariable: delete: delete an EvidenceVariable
- GET /EvidenceVariable/_history — getEvidenceVariableTypeHistory: history-type: retrieve the change history for all EvidenceVariable resources
- GET /EvidenceVariable/{id}/_history — getEvidenceVariableHistory: history-instance: retrieve the change history of one EvidenceVariable
- GET /EvidenceVariable/{id}/_history/{vid} — getEvidenceVariableVersion: vread: read a specific version of an EvidenceVariable

## ExampleScenario
- GET /ExampleScenario — searchExampleScenarios: search-type: search for ExampleScenario resources
- POST /ExampleScenario — createExampleScenario: create: create a new ExampleScenario
- PUT /ExampleScenario — updateMatchingExampleScenarios: conditional update: update the ExampleScenario matching the search parameters
- DELETE /ExampleScenario — deleteMatchingExampleScenarios: conditional delete: delete the ExampleScenario resources matching the search parameters
- POST /ExampleScenario/_search — searchExampleScenariosByPost: search-type: search for ExampleScenario resources via POST
- GET /ExampleScenario/{id} — getExampleScenario: read: read the current state of an ExampleScenario
- PUT /ExampleScenario/{id} — updateExampleScenario: update: update an ExampleScenario, or create it with a client-assigned id
- PATCH /ExampleScenario/{id} — patchExampleScenario: patch: apply a patch document to an ExampleScenario
- DELETE /ExampleScenario/{id} — deleteExampleScenario: delete: delete an ExampleScenario
- GET /ExampleScenario/_history — getExampleScenarioTypeHistory: history-type: retrieve the change history for all ExampleScenario resources
- GET /ExampleScenario/{id}/_history — getExampleScenarioHistory: history-instance: retrieve the change history of one ExampleScenario
- GET /ExampleScenario/{id}/_history/{vid} — getExampleScenarioVersion: vread: read a specific version of an ExampleScenario

## ExplanationOfBenefit
- GET /ExplanationOfBenefit — searchExplanationOfBenefits: search-type: search for ExplanationOfBenefit resources
- POST /ExplanationOfBenefit — createExplanationOfBenefit: create: create a new ExplanationOfBenefit
- PUT /ExplanationOfBenefit — updateMatchingExplanationOfBenefits: conditional update: update the ExplanationOfBenefit matching the search parameters
- DELETE /ExplanationOfBenefit — deleteMatchingExplanationOfBenefits: conditional delete: delete the ExplanationOfBenefit resources matching the search parameters
- POST /ExplanationOfBenefit/_search — searchExplanationOfBenefitsByPost: search-type: search for ExplanationOfBenefit resources via POST
- GET /ExplanationOfBenefit/{id} — getExplanationOfBenefit: read: read the current state of an ExplanationOfBenefit
- PUT /ExplanationOfBenefit/{id} — updateExplanationOfBenefit: update: update an ExplanationOfBenefit, or create it with a client-assigned id
- PATCH /ExplanationOfBenefit/{id} — patchExplanationOfBenefit: patch: apply a patch document to an ExplanationOfBenefit
- DELETE /ExplanationOfBenefit/{id} — deleteExplanationOfBenefit: delete: delete an ExplanationOfBenefit
- GET /ExplanationOfBenefit/_history — getExplanationOfBenefitTypeHistory: history-type: retrieve the change history for all ExplanationOfBenefit resources
- GET /ExplanationOfBenefit/{id}/_history — getExplanationOfBenefitHistory: history-instance: retrieve the change history of one ExplanationOfBenefit
- GET /ExplanationOfBenefit/{id}/_history/{vid} — getExplanationOfBenefitVersion: vread: read a specific version of an ExplanationOfBenefit

## FamilyMemberHistory
- GET /FamilyMemberHistory — searchFamilyMemberHistories: search-type: search for FamilyMemberHistory resources
- POST /FamilyMemberHistory — createFamilyMemberHistory: create: create a new FamilyMemberHistory
- PUT /FamilyMemberHistory — updateMatchingFamilyMemberHistories: conditional update: update the FamilyMemberHistory matching the search parameters
- DELETE /FamilyMemberHistory — deleteMatchingFamilyMemberHistories: conditional delete: delete the FamilyMemberHistory resources matching the search parameters
- POST /FamilyMemberHistory/_search — searchFamilyMemberHistoriesByPost: search-type: search for FamilyMemberHistory resources via POST
- GET /FamilyMemberHistory/{id} — getFamilyMemberHistory: read: read the current state of a FamilyMemberHistory
- PUT /FamilyMemberHistory/{id} — updateFamilyMemberHistory: update: update a FamilyMemberHistory, or create it with a client-assigned id
- PATCH /FamilyMemberHistory/{id} — patchFamilyMemberHistory: patch: apply a patch document to a FamilyMemberHistory
- DELETE /FamilyMemberHistory/{id} — deleteFamilyMemberHistory: delete: delete a FamilyMemberHistory
- GET /FamilyMemberHistory/_history — getFamilyMemberHistoryTypeHistory: history-type: retrieve the change history for all FamilyMemberHistory resources
- GET /FamilyMemberHistory/{id}/_history — getFamilyMemberHistoryHistory: history-instance: retrieve the change history of one FamilyMemberHistory
- GET /FamilyMemberHistory/{id}/_history/{vid} — getFamilyMemberHistoryVersion: vread: read a specific version of a FamilyMemberHistory

## Flag
- GET /Flag — searchFlags: search-type: search for Flag resources
- POST /Flag — createFlag: create: create a new Flag
- PUT /Flag — updateMatchingFlags: conditional update: update the Flag matching the search parameters
- DELETE /Flag — deleteMatchingFlags: conditional delete: delete the Flag resources matching the search parameters
- POST /Flag/_search — searchFlagsByPost: search-type: search for Flag resources via POST
- GET /Flag/{id} — getFlag: read: read the current state of a Flag
- PUT /Flag/{id} — updateFlag: update: update a Flag, or create it with a client-assigned id
- PATCH /Flag/{id} — patchFlag: patch: apply a patch document to a Flag
- DELETE /Flag/{id} — deleteFlag: delete: delete a Flag
- GET /Flag/_history — getFlagTypeHistory: history-type: retrieve the change history for all Flag resources
- GET /Flag/{id}/_history — getFlagHistory: history-instance: retrieve the change history of one Flag
- GET /Flag/{id}/_history/{vid} — getFlagVersion: vread: read a specific version of a Flag

## Goal
- GET /Goal — searchGoals: search-type: search for Goal resources
- POST /Goal — createGoal: create: create a new Goal
- PUT /Goal — updateMatchingGoals: conditional update: update the Goal matching the search parameters
- DELETE /Goal — deleteMatchingGoals: conditional delete: delete the Goal resources matching the search parameters
- POST /Goal/_search — searchGoalsByPost: search-type: search for Goal resources via POST
- GET /Goal/{id} — getGoal: read: read the current state of a Goal
- PUT /Goal/{id} — updateGoal: update: update a Goal, or create it with a client-assigned id
- PATCH /Goal/{id} — patchGoal: patch: apply a patch document to a Goal
- DELETE /Goal/{id} — deleteGoal: delete: delete a Goal
- GET /Goal/_history — getGoalTypeHistory: history-type: retrieve the change history for all Goal resources
- GET /Goal/{id}/_history — getGoalHistory: history-instance: retrieve the change history of one Goal
- GET /Goal/{id}/_history/{vid} — getGoalVersion: vread: read a specific version of a Goal

## GraphDefinition
- GET /GraphDefinition — searchGraphDefinitions: search-type: search for GraphDefinition resources
- POST /GraphDefinition — createGraphDefinition: create: create a new GraphDefinition
- PUT /GraphDefinition — updateMatchingGraphDefinitions: conditional update: update the GraphDefinition matching the search parameters
- DELETE /GraphDefinition — deleteMatchingGraphDefinitions: conditional delete: delete the GraphDefinition resources matching the search parameters
- POST /GraphDefinition/_search — searchGraphDefinitionsByPost: search-type: search for GraphDefinition resources via POST
- GET /GraphDefinition/{id} — getGraphDefinition: read: read the current state of a GraphDefinition
- PUT /GraphDefinition/{id} — updateGraphDefinition: update: update a GraphDefinition, or create it with a client-assigned id
- PATCH /GraphDefinition/{id} — patchGraphDefinition: patch: apply a patch document to a GraphDefinition
- DELETE /GraphDefinition/{id} — deleteGraphDefinition: delete: delete a GraphDefinition
- GET /GraphDefinition/_history — getGraphDefinitionTypeHistory: history-type: retrieve the change history for all GraphDefinition resources
- GET /GraphDefinition/{id}/_history — getGraphDefinitionHistory: history-instance: retrieve the change history of one GraphDefinition
- GET /GraphDefinition/{id}/_history/{vid} — getGraphDefinitionVersion: vread: read a specific version of a GraphDefinition

## Group
- GET /Group — searchGroups: search-type: search for Group resources
- POST /Group — createGroup: create: create a new Group
- PUT /Group — updateMatchingGroups: conditional update: update the Group matching the search parameters
- DELETE /Group — deleteMatchingGroups: conditional delete: delete the Group resources matching the search parameters
- POST /Group/_search — searchGroupsByPost: search-type: search for Group resources via POST
- GET /Group/{id} — getGroup: read: read the current state of a Group
- PUT /Group/{id} — updateGroup: update: update a Group, or create it with a client-assigned id
- PATCH /Group/{id} — patchGroup: patch: apply a patch document to a Group
- DELETE /Group/{id} — deleteGroup: delete: delete a Group
- GET /Group/_history — getGroupTypeHistory: history-type: retrieve the change history for all Group resources
- GET /Group/{id}/_history — getGroupHistory: history-instance: retrieve the change history of one Group
- GET /Group/{id}/_history/{vid} — getGroupVersion: vread: read a specific version of a Group
- GET /Group/{id}/$everything — getGroupEverythingById: $everything: Fetch a group of Patient Records (on one Group instance) — GET form
- POST /Group/{id}/$everything — runGroupEverythingById: $everything: Fetch a group of Patient Records (on one Group instance)

## GuidanceResponse
- GET /GuidanceResponse — searchGuidanceResponses: search-type: search for GuidanceResponse resources
- POST /GuidanceResponse — createGuidanceResponse: create: create a new GuidanceResponse
- PUT /GuidanceResponse — updateMatchingGuidanceResponses: conditional update: update the GuidanceResponse matching the search parameters
- DELETE /GuidanceResponse — deleteMatchingGuidanceResponses: conditional delete: delete the GuidanceResponse resources matching the search parameters
- POST /GuidanceResponse/_search — searchGuidanceResponsesByPost: search-type: search for GuidanceResponse resources via POST
- GET /GuidanceResponse/{id} — getGuidanceResponse: read: read the current state of a GuidanceResponse
- PUT /GuidanceResponse/{id} — updateGuidanceResponse: update: update a GuidanceResponse, or create it with a client-assigned id
- PATCH /GuidanceResponse/{id} — patchGuidanceResponse: patch: apply a patch document to a GuidanceResponse
- DELETE /GuidanceResponse/{id} — deleteGuidanceResponse: delete: delete a GuidanceResponse
- GET /GuidanceResponse/_history — getGuidanceResponseTypeHistory: history-type: retrieve the change history for all GuidanceResponse resources
- GET /GuidanceResponse/{id}/_history — getGuidanceResponseHistory: history-instance: retrieve the change history of one GuidanceResponse
- GET /GuidanceResponse/{id}/_history/{vid} — getGuidanceResponseVersion: vread: read a specific version of a GuidanceResponse

## HealthcareService
- GET /HealthcareService — searchHealthcareServices: search-type: search for HealthcareService resources
- POST /HealthcareService — createHealthcareService: create: create a new HealthcareService
- PUT /HealthcareService — updateMatchingHealthcareServices: conditional update: update the HealthcareService matching the search parameters
- DELETE /HealthcareService — deleteMatchingHealthcareServices: conditional delete: delete the HealthcareService resources matching the search parameters
- POST /HealthcareService/_search — searchHealthcareServicesByPost: search-type: search for HealthcareService resources via POST
- GET /HealthcareService/{id} — getHealthcareService: read: read the current state of a HealthcareService
- PUT /HealthcareService/{id} — updateHealthcareService: update: update a HealthcareService, or create it with a client-assigned id
- PATCH /HealthcareService/{id} — patchHealthcareService: patch: apply a patch document to a HealthcareService
- DELETE /HealthcareService/{id} — deleteHealthcareService: delete: delete a HealthcareService
- GET /HealthcareService/_history — getHealthcareServiceTypeHistory: history-type: retrieve the change history for all HealthcareService resources
- GET /HealthcareService/{id}/_history — getHealthcareServiceHistory: history-instance: retrieve the change history of one HealthcareService
- GET /HealthcareService/{id}/_history/{vid} — getHealthcareServiceVersion: vread: read a specific version of a HealthcareService

## ImagingStudy
- GET /ImagingStudy — searchImagingStudies: search-type: search for ImagingStudy resources
- POST /ImagingStudy — createImagingStudy: create: create a new ImagingStudy
- PUT /ImagingStudy — updateMatchingImagingStudies: conditional update: update the ImagingStudy matching the search parameters
- DELETE /ImagingStudy — deleteMatchingImagingStudies: conditional delete: delete the ImagingStudy resources matching the search parameters
- POST /ImagingStudy/_search — searchImagingStudiesByPost: search-type: search for ImagingStudy resources via POST
- GET /ImagingStudy/{id} — getImagingStudy: read: read the current state of an ImagingStudy
- PUT /ImagingStudy/{id} — updateImagingStudy: update: update an ImagingStudy, or create it with a client-assigned id
- PATCH /ImagingStudy/{id} — patchImagingStudy: patch: apply a patch document to an ImagingStudy
- DELETE /ImagingStudy/{id} — deleteImagingStudy: delete: delete an ImagingStudy
- GET /ImagingStudy/_history — getImagingStudyTypeHistory: history-type: retrieve the change history for all ImagingStudy resources
- GET /ImagingStudy/{id}/_history — getImagingStudyHistory: history-instance: retrieve the change history of one ImagingStudy
- GET /ImagingStudy/{id}/_history/{vid} — getImagingStudyVersion: vread: read a specific version of an ImagingStudy

## Immunization
- GET /Immunization — searchImmunizations: search-type: search for Immunization resources
- POST /Immunization — createImmunization: create: create a new Immunization
- PUT /Immunization — updateMatchingImmunizations: conditional update: update the Immunization matching the search parameters
- DELETE /Immunization — deleteMatchingImmunizations: conditional delete: delete the Immunization resources matching the search parameters
- POST /Immunization/_search — searchImmunizationsByPost: search-type: search for Immunization resources via POST
- GET /Immunization/{id} — getImmunization: read: read the current state of an Immunization
- PUT /Immunization/{id} — updateImmunization: update: update an Immunization, or create it with a client-assigned id
- PATCH /Immunization/{id} — patchImmunization: patch: apply a patch document to an Immunization
- DELETE /Immunization/{id} — deleteImmunization: delete: delete an Immunization
- GET /Immunization/_history — getImmunizationTypeHistory: history-type: retrieve the change history for all Immunization resources
- GET /Immunization/{id}/_history — getImmunizationHistory: history-instance: retrieve the change history of one Immunization
- GET /Immunization/{id}/_history/{vid} — getImmunizationVersion: vread: read a specific version of an Immunization

## ImmunizationEvaluation
- GET /ImmunizationEvaluation — searchImmunizationEvaluations: search-type: search for ImmunizationEvaluation resources
- POST /ImmunizationEvaluation — createImmunizationEvaluation: create: create a new ImmunizationEvaluation
- PUT /ImmunizationEvaluation — updateMatchingImmunizationEvaluations: conditional update: update the ImmunizationEvaluation matching the search parameters
- DELETE /ImmunizationEvaluation — deleteMatchingImmunizationEvaluations: conditional delete: delete the ImmunizationEvaluation resources matching the search parameters
- POST /ImmunizationEvaluation/_search — searchImmunizationEvaluationsByPost: search-type: search for ImmunizationEvaluation resources via POST
- GET /ImmunizationEvaluation/{id} — getImmunizationEvaluation: read: read the current state of an ImmunizationEvaluation
- PUT /ImmunizationEvaluation/{id} — updateImmunizationEvaluation: update: update an ImmunizationEvaluation, or create it with a client-assigned id
- PATCH /ImmunizationEvaluation/{id} — patchImmunizationEvaluation: patch: apply a patch document to an ImmunizationEvaluation
- DELETE /ImmunizationEvaluation/{id} — deleteImmunizationEvaluation: delete: delete an ImmunizationEvaluation
- GET /ImmunizationEvaluation/_history — getImmunizationEvaluationTypeHistory: history-type: retrieve the change history for all ImmunizationEvaluation resources
- GET /ImmunizationEvaluation/{id}/_history — getImmunizationEvaluationHistory: history-instance: retrieve the change history of one ImmunizationEvaluation
- GET /ImmunizationEvaluation/{id}/_history/{vid} — getImmunizationEvaluationVersion: vread: read a specific version of an ImmunizationEvaluation

## ImmunizationRecommendation
- GET /ImmunizationRecommendation — searchImmunizationRecommendations: search-type: search for ImmunizationRecommendation resources
- POST /ImmunizationRecommendation — createImmunizationRecommendation: create: create a new ImmunizationRecommendation
- PUT /ImmunizationRecommendation — updateMatchingImmunizationRecommendations: conditional update: update the ImmunizationRecommendation matching the search parameters
- DELETE /ImmunizationRecommendation — deleteMatchingImmunizationRecommendations: conditional delete: delete the ImmunizationRecommendation resources matching the search parameters
- POST /ImmunizationRecommendation/_search — searchImmunizationRecommendationsByPost: search-type: search for ImmunizationRecommendation resources via POST
- GET /ImmunizationRecommendation/{id} — getImmunizationRecommendation: read: read the current state of an ImmunizationRecommendation
- PUT /ImmunizationRecommendation/{id} — updateImmunizationRecommendation: update: update an ImmunizationRecommendation, or create it with a client-assigned id
- PATCH /ImmunizationRecommendation/{id} — patchImmunizationRecommendation: patch: apply a patch document to an ImmunizationRecommendation
- DELETE /ImmunizationRecommendation/{id} — deleteImmunizationRecommendation: delete: delete an ImmunizationRecommendation
- GET /ImmunizationRecommendation/_history — getImmunizationRecommendationTypeHistory: history-type: retrieve the change history for all ImmunizationRecommendation resources
- GET /ImmunizationRecommendation/{id}/_history — getImmunizationRecommendationHistory: history-instance: retrieve the change history of one ImmunizationRecommendation
- GET /ImmunizationRecommendation/{id}/_history/{vid} — getImmunizationRecommendationVersion: vread: read a specific version of an ImmunizationRecommendation

## ImplementationGuide
- GET /ImplementationGuide — searchImplementationGuides: search-type: search for ImplementationGuide resources
- POST /ImplementationGuide — createImplementationGuide: create: create a new ImplementationGuide
- PUT /ImplementationGuide — updateMatchingImplementationGuides: conditional update: update the ImplementationGuide matching the search parameters
- DELETE /ImplementationGuide — deleteMatchingImplementationGuides: conditional delete: delete the ImplementationGuide resources matching the search parameters
- POST /ImplementationGuide/_search — searchImplementationGuidesByPost: search-type: search for ImplementationGuide resources via POST
- GET /ImplementationGuide/{id} — getImplementationGuide: read: read the current state of an ImplementationGuide
- PUT /ImplementationGuide/{id} — updateImplementationGuide: update: update an ImplementationGuide, or create it with a client-assigned id
- PATCH /ImplementationGuide/{id} — patchImplementationGuide: patch: apply a patch document to an ImplementationGuide
- DELETE /ImplementationGuide/{id} — deleteImplementationGuide: delete: delete an ImplementationGuide
- GET /ImplementationGuide/_history — getImplementationGuideTypeHistory: history-type: retrieve the change history for all ImplementationGuide resources
- GET /ImplementationGuide/{id}/_history — getImplementationGuideHistory: history-instance: retrieve the change history of one ImplementationGuide
- GET /ImplementationGuide/{id}/_history/{vid} — getImplementationGuideVersion: vread: read a specific version of an ImplementationGuide

## InsurancePlan
- GET /InsurancePlan — searchInsurancePlans: search-type: search for InsurancePlan resources
- POST /InsurancePlan — createInsurancePlan: create: create a new InsurancePlan
- PUT /InsurancePlan — updateMatchingInsurancePlans: conditional update: update the InsurancePlan matching the search parameters
- DELETE /InsurancePlan — deleteMatchingInsurancePlans: conditional delete: delete the InsurancePlan resources matching the search parameters
- POST /InsurancePlan/_search — searchInsurancePlansByPost: search-type: search for InsurancePlan resources via POST
- GET /InsurancePlan/{id} — getInsurancePlan: read: read the current state of an InsurancePlan
- PUT /InsurancePlan/{id} — updateInsurancePlan: update: update an InsurancePlan, or create it with a client-assigned id
- PATCH /InsurancePlan/{id} — patchInsurancePlan: patch: apply a patch document to an InsurancePlan
- DELETE /InsurancePlan/{id} — deleteInsurancePlan: delete: delete an InsurancePlan
- GET /InsurancePlan/_history — getInsurancePlanTypeHistory: history-type: retrieve the change history for all InsurancePlan resources
- GET /InsurancePlan/{id}/_history — getInsurancePlanHistory: history-instance: retrieve the change history of one InsurancePlan
- GET /InsurancePlan/{id}/_history/{vid} — getInsurancePlanVersion: vread: read a specific version of an InsurancePlan

## Invoice
- GET /Invoice — searchInvoices: search-type: search for Invoice resources
- POST /Invoice — createInvoice: create: create a new Invoice
- PUT /Invoice — updateMatchingInvoices: conditional update: update the Invoice matching the search parameters
- DELETE /Invoice — deleteMatchingInvoices: conditional delete: delete the Invoice resources matching the search parameters
- POST /Invoice/_search — searchInvoicesByPost: search-type: search for Invoice resources via POST
- GET /Invoice/{id} — getInvoice: read: read the current state of an Invoice
- PUT /Invoice/{id} — updateInvoice: update: update an Invoice, or create it with a client-assigned id
- PATCH /Invoice/{id} — patchInvoice: patch: apply a patch document to an Invoice
- DELETE /Invoice/{id} — deleteInvoice: delete: delete an Invoice
- GET /Invoice/_history — getInvoiceTypeHistory: history-type: retrieve the change history for all Invoice resources
- GET /Invoice/{id}/_history — getInvoiceHistory: history-instance: retrieve the change history of one Invoice
- GET /Invoice/{id}/_history/{vid} — getInvoiceVersion: vread: read a specific version of an Invoice

## Library
- GET /Library — searchLibraries: search-type: search for Library resources
- POST /Library — createLibrary: create: create a new Library
- PUT /Library — updateMatchingLibraries: conditional update: update the Library matching the search parameters
- DELETE /Library — deleteMatchingLibraries: conditional delete: delete the Library resources matching the search parameters
- POST /Library/_search — searchLibrariesByPost: search-type: search for Library resources via POST
- GET /Library/{id} — getLibrary: read: read the current state of a Library
- PUT /Library/{id} — updateLibrary: update: update a Library, or create it with a client-assigned id
- PATCH /Library/{id} — patchLibrary: patch: apply a patch document to a Library
- DELETE /Library/{id} — deleteLibrary: delete: delete a Library
- GET /Library/_history — getLibraryTypeHistory: history-type: retrieve the change history for all Library resources
- GET /Library/{id}/_history — getLibraryHistory: history-instance: retrieve the change history of one Library
- GET /Library/{id}/_history/{vid} — getLibraryVersion: vread: read a specific version of a Library
- GET /Library/{id}/$data-requirements — getLibraryDataRequirementsById: $data-requirements: Data Requirements (on one Library instance) — GET form
- POST /Library/{id}/$data-requirements — runLibraryDataRequirementsById: $data-requirements: Data Requirements (on one Library instance)

## Linkage
- GET /Linkage — searchLinkages: search-type: search for Linkage resources
- POST /Linkage — createLinkage: create: create a new Linkage
- PUT /Linkage — updateMatchingLinkages: conditional update: update the Linkage matching the search parameters
- DELETE /Linkage — deleteMatchingLinkages: conditional delete: delete the Linkage resources matching the search parameters
- POST /Linkage/_search — searchLinkagesByPost: search-type: search for Linkage resources via POST
- GET /Linkage/{id} — getLinkage: read: read the current state of a Linkage
- PUT /Linkage/{id} — updateLinkage: update: update a Linkage, or create it with a client-assigned id
- PATCH /Linkage/{id} — patchLinkage: patch: apply a patch document to a Linkage
- DELETE /Linkage/{id} — deleteLinkage: delete: delete a Linkage
- GET /Linkage/_history — getLinkageTypeHistory: history-type: retrieve the change history for all Linkage resources
- GET /Linkage/{id}/_history — getLinkageHistory: history-instance: retrieve the change history of one Linkage
- GET /Linkage/{id}/_history/{vid} — getLinkageVersion: vread: read a specific version of a Linkage

## List
- GET /List — searchLists: search-type: search for List resources
- POST /List — createList: create: create a new List
- PUT /List — updateMatchingLists: conditional update: update the List matching the search parameters
- DELETE /List — deleteMatchingLists: conditional delete: delete the List resources matching the search parameters
- POST /List/_search — searchListsByPost: search-type: search for List resources via POST
- GET /List/{id} — getList: read: read the current state of a List
- PUT /List/{id} — updateList: update: update a List, or create it with a client-assigned id
- PATCH /List/{id} — patchList: patch: apply a patch document to a List
- DELETE /List/{id} — deleteList: delete: delete a List
- GET /List/_history — getListTypeHistory: history-type: retrieve the change history for all List resources
- GET /List/{id}/_history — getListHistory: history-instance: retrieve the change history of one List
- GET /List/{id}/_history/{vid} — getListVersion: vread: read a specific version of a List
- GET /List/$find — getListFind: $find: Find a functional list (on the List resource type) — GET form
- POST /List/$find — runListFind: $find: Find a functional list (on the List resource type)

## Location
- GET /Location — searchLocations: search-type: search for Location resources
- POST /Location — createLocation: create: create a new Location
- PUT /Location — updateMatchingLocations: conditional update: update the Location matching the search parameters
- DELETE /Location — deleteMatchingLocations: conditional delete: delete the Location resources matching the search parameters
- POST /Location/_search — searchLocationsByPost: search-type: search for Location resources via POST
- GET /Location/{id} — getLocation: read: read the current state of a Location
- PUT /Location/{id} — updateLocation: update: update a Location, or create it with a client-assigned id
- PATCH /Location/{id} — patchLocation: patch: apply a patch document to a Location
- DELETE /Location/{id} — deleteLocation: delete: delete a Location
- GET /Location/_history — getLocationTypeHistory: history-type: retrieve the change history for all Location resources
- GET /Location/{id}/_history — getLocationHistory: history-instance: retrieve the change history of one Location
- GET /Location/{id}/_history/{vid} — getLocationVersion: vread: read a specific version of a Location

## Measure
- GET /Measure — searchMeasures: search-type: search for Measure resources
- POST /Measure — createMeasure: create: create a new Measure
- PUT /Measure — updateMatchingMeasures: conditional update: update the Measure matching the search parameters
- DELETE /Measure — deleteMatchingMeasures: conditional delete: delete the Measure resources matching the search parameters
- POST /Measure/_search — searchMeasuresByPost: search-type: search for Measure resources via POST
- GET /Measure/{id} — getMeasure: read: read the current state of a Measure
- PUT /Measure/{id} — updateMeasure: update: update a Measure, or create it with a client-assigned id
- PATCH /Measure/{id} — patchMeasure: patch: apply a patch document to a Measure
- DELETE /Measure/{id} — deleteMeasure: delete: delete a Measure
- GET /Measure/_history — getMeasureTypeHistory: history-type: retrieve the change history for all Measure resources
- GET /Measure/{id}/_history — getMeasureHistory: history-instance: retrieve the change history of one Measure
- GET /Measure/{id}/_history/{vid} — getMeasureVersion: vread: read a specific version of a Measure
- GET /Measure/$care-gaps — getMeasureCareGaps: $care-gaps: Care Gaps (on the Measure resource type) — GET form
- POST /Measure/$care-gaps — runMeasureCareGaps: $care-gaps: Care Gaps (on the Measure resource type)
- GET /Measure/$collect-data — getMeasureCollectData: $collect-data: Collect Data (on the Measure resource type) — GET form
- POST /Measure/$collect-data — runMeasureCollectData: $collect-data: Collect Data (on the Measure resource type)
- GET /Measure/{id}/$collect-data — getMeasureCollectDataById: $collect-data: Collect Data (on one Measure instance) — GET form
- POST /Measure/{id}/$collect-data — runMeasureCollectDataById: $collect-data: Collect Data (on one Measure instance)
- GET /Measure/{id}/$data-requirements — getMeasureDataRequirementsById: $data-requirements: Data Requirements (on one Measure instance) — GET form
- POST /Measure/{id}/$data-requirements — runMeasureDataRequirementsById: $data-requirements: Data Requirements (on one Measure instance)
- GET /Measure/$evaluate-measure — getMeasureEvaluateMeasure: $evaluate-measure: Evaluate Measure (on the Measure resource type) — GET form
- POST /Measure/$evaluate-measure — runMeasureEvaluateMeasure: $evaluate-measure: Evaluate Measure (on the Measure resource type)
- GET /Measure/{id}/$evaluate-measure — getMeasureEvaluateMeasureById: $evaluate-measure: Evaluate Measure (on one Measure instance) — GET form
- POST /Measure/{id}/$evaluate-measure — runMeasureEvaluateMeasureById: $evaluate-measure: Evaluate Measure (on one Measure instance)
- POST /Measure/$submit-data — runMeasureSubmitData: $submit-data: Submit Data (on the Measure resource type)
- POST /Measure/{id}/$submit-data — runMeasureSubmitDataById: $submit-data: Submit Data (on one Measure instance)

## MeasureReport
- GET /MeasureReport — searchMeasureReports: search-type: search for MeasureReport resources
- POST /MeasureReport — createMeasureReport: create: create a new MeasureReport
- PUT /MeasureReport — updateMatchingMeasureReports: conditional update: update the MeasureReport matching the search parameters
- DELETE /MeasureReport — deleteMatchingMeasureReports: conditional delete: delete the MeasureReport resources matching the search parameters
- POST /MeasureReport/_search — searchMeasureReportsByPost: search-type: search for MeasureReport resources via POST
- GET /MeasureReport/{id} — getMeasureReport: read: read the current state of a MeasureReport
- PUT /MeasureReport/{id} — updateMeasureReport: update: update a MeasureReport, or create it with a client-assigned id
- PATCH /MeasureReport/{id} — patchMeasureReport: patch: apply a patch document to a MeasureReport
- DELETE /MeasureReport/{id} — deleteMeasureReport: delete: delete a MeasureReport
- GET /MeasureReport/_history — getMeasureReportTypeHistory: history-type: retrieve the change history for all MeasureReport resources
- GET /MeasureReport/{id}/_history — getMeasureReportHistory: history-instance: retrieve the change history of one MeasureReport
- GET /MeasureReport/{id}/_history/{vid} — getMeasureReportVersion: vread: read a specific version of a MeasureReport

## Media
- GET /Media — searchMedias: search-type: search for Media resources
- POST /Media — createMedia: create: create a new Media
- PUT /Media — updateMatchingMedias: conditional update: update the Media matching the search parameters
- DELETE /Media — deleteMatchingMedias: conditional delete: delete the Media resources matching the search parameters
- POST /Media/_search — searchMediasByPost: search-type: search for Media resources via POST
- GET /Media/{id} — getMedia: read: read the current state of a Media
- PUT /Media/{id} — updateMedia: update: update a Media, or create it with a client-assigned id
- PATCH /Media/{id} — patchMedia: patch: apply a patch document to a Media
- DELETE /Media/{id} — deleteMedia: delete: delete a Media
- GET /Media/_history — getMediaTypeHistory: history-type: retrieve the change history for all Media resources
- GET /Media/{id}/_history — getMediaHistory: history-instance: retrieve the change history of one Media
- GET /Media/{id}/_history/{vid} — getMediaVersion: vread: read a specific version of a Media

## Medication
- GET /Medication — searchMedications: search-type: search for Medication resources
- POST /Medication — createMedication: create: create a new Medication
- PUT /Medication — updateMatchingMedications: conditional update: update the Medication matching the search parameters
- DELETE /Medication — deleteMatchingMedications: conditional delete: delete the Medication resources matching the search parameters
- POST /Medication/_search — searchMedicationsByPost: search-type: search for Medication resources via POST
- GET /Medication/{id} — getMedication: read: read the current state of a Medication
- PUT /Medication/{id} — updateMedication: update: update a Medication, or create it with a client-assigned id
- PATCH /Medication/{id} — patchMedication: patch: apply a patch document to a Medication
- DELETE /Medication/{id} — deleteMedication: delete: delete a Medication
- GET /Medication/_history — getMedicationTypeHistory: history-type: retrieve the change history for all Medication resources
- GET /Medication/{id}/_history — getMedicationHistory: history-instance: retrieve the change history of one Medication
- GET /Medication/{id}/_history/{vid} — getMedicationVersion: vread: read a specific version of a Medication

## MedicationAdministration
- GET /MedicationAdministration — searchMedicationAdministrations: search-type: search for MedicationAdministration resources
- POST /MedicationAdministration — createMedicationAdministration: create: create a new MedicationAdministration
- PUT /MedicationAdministration — updateMatchingMedicationAdministrations: conditional update: update the MedicationAdministration matching the search parameters
- DELETE /MedicationAdministration — deleteMatchingMedicationAdministrations: conditional delete: delete the MedicationAdministration resources matching the search parameters
- POST /MedicationAdministration/_search — searchMedicationAdministrationsByPost: search-type: search for MedicationAdministration resources via POST
- GET /MedicationAdministration/{id} — getMedicationAdministration: read: read the current state of a MedicationAdministration
- PUT /MedicationAdministration/{id} — updateMedicationAdministration: update: update a MedicationAdministration, or create it with a client-assigned id
- PATCH /MedicationAdministration/{id} — patchMedicationAdministration: patch: apply a patch document to a MedicationAdministration
- DELETE /MedicationAdministration/{id} — deleteMedicationAdministration: delete: delete a MedicationAdministration
- GET /MedicationAdministration/_history — getMedicationAdministrationTypeHistory: history-type: retrieve the change history for all MedicationAdministration resources
- GET /MedicationAdministration/{id}/_history — getMedicationAdministrationHistory: history-instance: retrieve the change history of one MedicationAdministration
- GET /MedicationAdministration/{id}/_history/{vid} — getMedicationAdministrationVersion: vread: read a specific version of a MedicationAdministration

## MedicationDispense
- GET /MedicationDispense — searchMedicationDispenses: search-type: search for MedicationDispense resources
- POST /MedicationDispense — createMedicationDispense: create: create a new MedicationDispense
- PUT /MedicationDispense — updateMatchingMedicationDispenses: conditional update: update the MedicationDispense matching the search parameters
- DELETE /MedicationDispense — deleteMatchingMedicationDispenses: conditional delete: delete the MedicationDispense resources matching the search parameters
- POST /MedicationDispense/_search — searchMedicationDispensesByPost: search-type: search for MedicationDispense resources via POST
- GET /MedicationDispense/{id} — getMedicationDispense: read: read the current state of a MedicationDispense
- PUT /MedicationDispense/{id} — updateMedicationDispense: update: update a MedicationDispense, or create it with a client-assigned id
- PATCH /MedicationDispense/{id} — patchMedicationDispense: patch: apply a patch document to a MedicationDispense
- DELETE /MedicationDispense/{id} — deleteMedicationDispense: delete: delete a MedicationDispense
- GET /MedicationDispense/_history — getMedicationDispenseTypeHistory: history-type: retrieve the change history for all MedicationDispense resources
- GET /MedicationDispense/{id}/_history — getMedicationDispenseHistory: history-instance: retrieve the change history of one MedicationDispense
- GET /MedicationDispense/{id}/_history/{vid} — getMedicationDispenseVersion: vread: read a specific version of a MedicationDispense

## MedicationKnowledge
- GET /MedicationKnowledge — searchMedicationKnowledges: search-type: search for MedicationKnowledge resources
- POST /MedicationKnowledge — createMedicationKnowledge: create: create a new MedicationKnowledge
- PUT /MedicationKnowledge — updateMatchingMedicationKnowledges: conditional update: update the MedicationKnowledge matching the search parameters
- DELETE /MedicationKnowledge — deleteMatchingMedicationKnowledges: conditional delete: delete the MedicationKnowledge resources matching the search parameters
- POST /MedicationKnowledge/_search — searchMedicationKnowledgesByPost: search-type: search for MedicationKnowledge resources via POST
- GET /MedicationKnowledge/{id} — getMedicationKnowledge: read: read the current state of a MedicationKnowledge
- PUT /MedicationKnowledge/{id} — updateMedicationKnowledge: update: update a MedicationKnowledge, or create it with a client-assigned id
- PATCH /MedicationKnowledge/{id} — patchMedicationKnowledge: patch: apply a patch document to a MedicationKnowledge
- DELETE /MedicationKnowledge/{id} — deleteMedicationKnowledge: delete: delete a MedicationKnowledge
- GET /MedicationKnowledge/_history — getMedicationKnowledgeTypeHistory: history-type: retrieve the change history for all MedicationKnowledge resources
- GET /MedicationKnowledge/{id}/_history — getMedicationKnowledgeHistory: history-instance: retrieve the change history of one MedicationKnowledge
- GET /MedicationKnowledge/{id}/_history/{vid} — getMedicationKnowledgeVersion: vread: read a specific version of a MedicationKnowledge

## MedicationRequest
- GET /MedicationRequest — searchMedicationRequests: search-type: search for MedicationRequest resources
- POST /MedicationRequest — createMedicationRequest: create: create a new MedicationRequest
- PUT /MedicationRequest — updateMatchingMedicationRequests: conditional update: update the MedicationRequest matching the search parameters
- DELETE /MedicationRequest — deleteMatchingMedicationRequests: conditional delete: delete the MedicationRequest resources matching the search parameters
- POST /MedicationRequest/_search — searchMedicationRequestsByPost: search-type: search for MedicationRequest resources via POST
- GET /MedicationRequest/{id} — getMedicationRequest: read: read the current state of a MedicationRequest
- PUT /MedicationRequest/{id} — updateMedicationRequest: update: update a MedicationRequest, or create it with a client-assigned id
- PATCH /MedicationRequest/{id} — patchMedicationRequest: patch: apply a patch document to a MedicationRequest
- DELETE /MedicationRequest/{id} — deleteMedicationRequest: delete: delete a MedicationRequest
- GET /MedicationRequest/_history — getMedicationRequestTypeHistory: history-type: retrieve the change history for all MedicationRequest resources
- GET /MedicationRequest/{id}/_history — getMedicationRequestHistory: history-instance: retrieve the change history of one MedicationRequest
- GET /MedicationRequest/{id}/_history/{vid} — getMedicationRequestVersion: vread: read a specific version of a MedicationRequest

## MedicationStatement
- GET /MedicationStatement — searchMedicationStatements: search-type: search for MedicationStatement resources
- POST /MedicationStatement — createMedicationStatement: create: create a new MedicationStatement
- PUT /MedicationStatement — updateMatchingMedicationStatements: conditional update: update the MedicationStatement matching the search parameters
- DELETE /MedicationStatement — deleteMatchingMedicationStatements: conditional delete: delete the MedicationStatement resources matching the search parameters
- POST /MedicationStatement/_search — searchMedicationStatementsByPost: search-type: search for MedicationStatement resources via POST
- GET /MedicationStatement/{id} — getMedicationStatement: read: read the current state of a MedicationStatement
- PUT /MedicationStatement/{id} — updateMedicationStatement: update: update a MedicationStatement, or create it with a client-assigned id
- PATCH /MedicationStatement/{id} — patchMedicationStatement: patch: apply a patch document to a MedicationStatement
- DELETE /MedicationStatement/{id} — deleteMedicationStatement: delete: delete a MedicationStatement
- GET /MedicationStatement/_history — getMedicationStatementTypeHistory: history-type: retrieve the change history for all MedicationStatement resources
- GET /MedicationStatement/{id}/_history — getMedicationStatementHistory: history-instance: retrieve the change history of one MedicationStatement
- GET /MedicationStatement/{id}/_history/{vid} — getMedicationStatementVersion: vread: read a specific version of a MedicationStatement

## MedicinalProduct
- GET /MedicinalProduct — searchMedicinalProducts: search-type: search for MedicinalProduct resources
- POST /MedicinalProduct — createMedicinalProduct: create: create a new MedicinalProduct
- PUT /MedicinalProduct — updateMatchingMedicinalProducts: conditional update: update the MedicinalProduct matching the search parameters
- DELETE /MedicinalProduct — deleteMatchingMedicinalProducts: conditional delete: delete the MedicinalProduct resources matching the search parameters
- POST /MedicinalProduct/_search — searchMedicinalProductsByPost: search-type: search for MedicinalProduct resources via POST
- GET /MedicinalProduct/{id} — getMedicinalProduct: read: read the current state of a MedicinalProduct
- PUT /MedicinalProduct/{id} — updateMedicinalProduct: update: update a MedicinalProduct, or create it with a client-assigned id
- PATCH /MedicinalProduct/{id} — patchMedicinalProduct: patch: apply a patch document to a MedicinalProduct
- DELETE /MedicinalProduct/{id} — deleteMedicinalProduct: delete: delete a MedicinalProduct
- GET /MedicinalProduct/_history — getMedicinalProductTypeHistory: history-type: retrieve the change history for all MedicinalProduct resources
- GET /MedicinalProduct/{id}/_history — getMedicinalProductHistory: history-instance: retrieve the change history of one MedicinalProduct
- GET /MedicinalProduct/{id}/_history/{vid} — getMedicinalProductVersion: vread: read a specific version of a MedicinalProduct
- GET /MedicinalProduct/$everything — getMedicinalProductEverything: $everything: Fetch Product Record (on the MedicinalProduct resource type) — GET form
- POST /MedicinalProduct/$everything — runMedicinalProductEverything: $everything: Fetch Product Record (on the MedicinalProduct resource type)
- GET /MedicinalProduct/{id}/$everything — getMedicinalProductEverythingById: $everything: Fetch Product Record (on one MedicinalProduct instance) — GET form
- POST /MedicinalProduct/{id}/$everything — runMedicinalProductEverythingById: $everything: Fetch Product Record (on one MedicinalProduct instance)

## MedicinalProductAuthorization
- GET /MedicinalProductAuthorization — searchMedicinalProductAuthorizations: search-type: search for MedicinalProductAuthorization resources
- POST /MedicinalProductAuthorization — createMedicinalProductAuthorization: create: create a new MedicinalProductAuthorization
- PUT /MedicinalProductAuthorization — updateMatchingMedicinalProductAuthorizations: conditional update: update the MedicinalProductAuthorization matching the search parameters
- DELETE /MedicinalProductAuthorization — deleteMatchingMedicinalProductAuthorizations: conditional delete: delete the MedicinalProductAuthorization resources matching the search parameters
- POST /MedicinalProductAuthorization/_search — searchMedicinalProductAuthorizationsByPost: search-type: search for MedicinalProductAuthorization resources via POST
- GET /MedicinalProductAuthorization/{id} — getMedicinalProductAuthorization: read: read the current state of a MedicinalProductAuthorization
- PUT /MedicinalProductAuthorization/{id} — updateMedicinalProductAuthorization: update: update a MedicinalProductAuthorization, or create it with a client-assigned id
- PATCH /MedicinalProductAuthorization/{id} — patchMedicinalProductAuthorization: patch: apply a patch document to a MedicinalProductAuthorization
- DELETE /MedicinalProductAuthorization/{id} — deleteMedicinalProductAuthorization: delete: delete a MedicinalProductAuthorization
- GET /MedicinalProductAuthorization/_history — getMedicinalProductAuthorizationTypeHistory: history-type: retrieve the change history for all MedicinalProductAuthorization resources
- GET /MedicinalProductAuthorization/{id}/_history — getMedicinalProductAuthorizationHistory: history-instance: retrieve the change history of one MedicinalProductAuthorization
- GET /MedicinalProductAuthorization/{id}/_history/{vid} — getMedicinalProductAuthorizationVersion: vread: read a specific version of a MedicinalProductAuthorization

## MedicinalProductContraindication
- GET /MedicinalProductContraindication — searchMedicinalProductContraindications: search-type: search for MedicinalProductContraindication resources
- POST /MedicinalProductContraindication — createMedicinalProductContraindication: create: create a new MedicinalProductContraindication
- PUT /MedicinalProductContraindication — updateMatchingMedicinalProductContraindications: conditional update: update the MedicinalProductContraindication matching the search parameters
- DELETE /MedicinalProductContraindication — deleteMatchingMedicinalProductContraindications: conditional delete: delete the MedicinalProductContraindication resources matching the search parameters
- POST /MedicinalProductContraindication/_search — searchMedicinalProductContraindicationsByPost: search-type: search for MedicinalProductContraindication resources via POST
- GET /MedicinalProductContraindication/{id} — getMedicinalProductContraindication: read: read the current state of a MedicinalProductContraindication
- PUT /MedicinalProductContraindication/{id} — updateMedicinalProductContraindication: update: update a MedicinalProductContraindication, or create it with a client-assigned id
- PATCH /MedicinalProductContraindication/{id} — patchMedicinalProductContraindication: patch: apply a patch document to a MedicinalProductContraindication
- DELETE /MedicinalProductContraindication/{id} — deleteMedicinalProductContraindication: delete: delete a MedicinalProductContraindication
- GET /MedicinalProductContraindication/_history — getMedicinalProductContraindicationTypeHistory: history-type: retrieve the change history for all MedicinalProductContraindication resources
- GET /MedicinalProductContraindication/{id}/_history — getMedicinalProductContraindicationHistory: history-instance: retrieve the change history of one MedicinalProductContraindication
- GET /MedicinalProductContraindication/{id}/_history/{vid} — getMedicinalProductContraindicationVersion: vread: read a specific version of a MedicinalProductContraindication

## MedicinalProductIndication
- GET /MedicinalProductIndication — searchMedicinalProductIndications: search-type: search for MedicinalProductIndication resources
- POST /MedicinalProductIndication — createMedicinalProductIndication: create: create a new MedicinalProductIndication
- PUT /MedicinalProductIndication — updateMatchingMedicinalProductIndications: conditional update: update the MedicinalProductIndication matching the search parameters
- DELETE /MedicinalProductIndication — deleteMatchingMedicinalProductIndications: conditional delete: delete the MedicinalProductIndication resources matching the search parameters
- POST /MedicinalProductIndication/_search — searchMedicinalProductIndicationsByPost: search-type: search for MedicinalProductIndication resources via POST
- GET /MedicinalProductIndication/{id} — getMedicinalProductIndication: read: read the current state of a MedicinalProductIndication
- PUT /MedicinalProductIndication/{id} — updateMedicinalProductIndication: update: update a MedicinalProductIndication, or create it with a client-assigned id
- PATCH /MedicinalProductIndication/{id} — patchMedicinalProductIndication: patch: apply a patch document to a MedicinalProductIndication
- DELETE /MedicinalProductIndication/{id} — deleteMedicinalProductIndication: delete: delete a MedicinalProductIndication
- GET /MedicinalProductIndication/_history — getMedicinalProductIndicationTypeHistory: history-type: retrieve the change history for all MedicinalProductIndication resources
- GET /MedicinalProductIndication/{id}/_history — getMedicinalProductIndicationHistory: history-instance: retrieve the change history of one MedicinalProductIndication
- GET /MedicinalProductIndication/{id}/_history/{vid} — getMedicinalProductIndicationVersion: vread: read a specific version of a MedicinalProductIndication

## MedicinalProductIngredient
- GET /MedicinalProductIngredient — searchMedicinalProductIngredients: search-type: search for MedicinalProductIngredient resources
- POST /MedicinalProductIngredient — createMedicinalProductIngredient: create: create a new MedicinalProductIngredient
- PUT /MedicinalProductIngredient — updateMatchingMedicinalProductIngredients: conditional update: update the MedicinalProductIngredient matching the search parameters
- DELETE /MedicinalProductIngredient — deleteMatchingMedicinalProductIngredients: conditional delete: delete the MedicinalProductIngredient resources matching the search parameters
- POST /MedicinalProductIngredient/_search — searchMedicinalProductIngredientsByPost: search-type: search for MedicinalProductIngredient resources via POST
- GET /MedicinalProductIngredient/{id} — getMedicinalProductIngredient: read: read the current state of a MedicinalProductIngredient
- PUT /MedicinalProductIngredient/{id} — updateMedicinalProductIngredient: update: update a MedicinalProductIngredient, or create it with a client-assigned id
- PATCH /MedicinalProductIngredient/{id} — patchMedicinalProductIngredient: patch: apply a patch document to a MedicinalProductIngredient
- DELETE /MedicinalProductIngredient/{id} — deleteMedicinalProductIngredient: delete: delete a MedicinalProductIngredient
- GET /MedicinalProductIngredient/_history — getMedicinalProductIngredientTypeHistory: history-type: retrieve the change history for all MedicinalProductIngredient resources
- GET /MedicinalProductIngredient/{id}/_history — getMedicinalProductIngredientHistory: history-instance: retrieve the change history of one MedicinalProductIngredient
- GET /MedicinalProductIngredient/{id}/_history/{vid} — getMedicinalProductIngredientVersion: vread: read a specific version of a MedicinalProductIngredient

## MedicinalProductInteraction
- GET /MedicinalProductInteraction — searchMedicinalProductInteractions: search-type: search for MedicinalProductInteraction resources
- POST /MedicinalProductInteraction — createMedicinalProductInteraction: create: create a new MedicinalProductInteraction
- PUT /MedicinalProductInteraction — updateMatchingMedicinalProductInteractions: conditional update: update the MedicinalProductInteraction matching the search parameters
- DELETE /MedicinalProductInteraction — deleteMatchingMedicinalProductInteractions: conditional delete: delete the MedicinalProductInteraction resources matching the search parameters
- POST /MedicinalProductInteraction/_search — searchMedicinalProductInteractionsByPost: search-type: search for MedicinalProductInteraction resources via POST
- GET /MedicinalProductInteraction/{id} — getMedicinalProductInteraction: read: read the current state of a MedicinalProductInteraction
- PUT /MedicinalProductInteraction/{id} — updateMedicinalProductInteraction: update: update a MedicinalProductInteraction, or create it with a client-assigned id
- PATCH /MedicinalProductInteraction/{id} — patchMedicinalProductInteraction: patch: apply a patch document to a MedicinalProductInteraction
- DELETE /MedicinalProductInteraction/{id} — deleteMedicinalProductInteraction: delete: delete a MedicinalProductInteraction
- GET /MedicinalProductInteraction/_history — getMedicinalProductInteractionTypeHistory: history-type: retrieve the change history for all MedicinalProductInteraction resources
- GET /MedicinalProductInteraction/{id}/_history — getMedicinalProductInteractionHistory: history-instance: retrieve the change history of one MedicinalProductInteraction
- GET /MedicinalProductInteraction/{id}/_history/{vid} — getMedicinalProductInteractionVersion: vread: read a specific version of a MedicinalProductInteraction

## MedicinalProductManufactured
- GET /MedicinalProductManufactured — searchMedicinalProductManufactureds: search-type: search for MedicinalProductManufactured resources
- POST /MedicinalProductManufactured — createMedicinalProductManufactured: create: create a new MedicinalProductManufactured
- PUT /MedicinalProductManufactured — updateMatchingMedicinalProductManufactureds: conditional update: update the MedicinalProductManufactured matching the search parameters
- DELETE /MedicinalProductManufactured — deleteMatchingMedicinalProductManufactureds: conditional delete: delete the MedicinalProductManufactured resources matching the search parameters
- POST /MedicinalProductManufactured/_search — searchMedicinalProductManufacturedsByPost: search-type: search for MedicinalProductManufactured resources via POST
- GET /MedicinalProductManufactured/{id} — getMedicinalProductManufactured: read: read the current state of a MedicinalProductManufactured
- PUT /MedicinalProductManufactured/{id} — updateMedicinalProductManufactured: update: update a MedicinalProductManufactured, or create it with a client-assigned id
- PATCH /MedicinalProductManufactured/{id} — patchMedicinalProductManufactured: patch: apply a patch document to a MedicinalProductManufactured
- DELETE /MedicinalProductManufactured/{id} — deleteMedicinalProductManufactured: delete: delete a MedicinalProductManufactured
- GET /MedicinalProductManufactured/_history — getMedicinalProductManufacturedTypeHistory: history-type: retrieve the change history for all MedicinalProductManufactured resources
- GET /MedicinalProductManufactured/{id}/_history — getMedicinalProductManufacturedHistory: history-instance: retrieve the change history of one MedicinalProductManufactured
- GET /MedicinalProductManufactured/{id}/_history/{vid} — getMedicinalProductManufacturedVersion: vread: read a specific version of a MedicinalProductManufactured

## MedicinalProductPackaged
- GET /MedicinalProductPackaged — searchMedicinalProductPackageds: search-type: search for MedicinalProductPackaged resources
- POST /MedicinalProductPackaged — createMedicinalProductPackaged: create: create a new MedicinalProductPackaged
- PUT /MedicinalProductPackaged — updateMatchingMedicinalProductPackageds: conditional update: update the MedicinalProductPackaged matching the search parameters
- DELETE /MedicinalProductPackaged — deleteMatchingMedicinalProductPackageds: conditional delete: delete the MedicinalProductPackaged resources matching the search parameters
- POST /MedicinalProductPackaged/_search — searchMedicinalProductPackagedsByPost: search-type: search for MedicinalProductPackaged resources via POST
- GET /MedicinalProductPackaged/{id} — getMedicinalProductPackaged: read: read the current state of a MedicinalProductPackaged
- PUT /MedicinalProductPackaged/{id} — updateMedicinalProductPackaged: update: update a MedicinalProductPackaged, or create it with a client-assigned id
- PATCH /MedicinalProductPackaged/{id} — patchMedicinalProductPackaged: patch: apply a patch document to a MedicinalProductPackaged
- DELETE /MedicinalProductPackaged/{id} — deleteMedicinalProductPackaged: delete: delete a MedicinalProductPackaged
- GET /MedicinalProductPackaged/_history — getMedicinalProductPackagedTypeHistory: history-type: retrieve the change history for all MedicinalProductPackaged resources
- GET /MedicinalProductPackaged/{id}/_history — getMedicinalProductPackagedHistory: history-instance: retrieve the change history of one MedicinalProductPackaged
- GET /MedicinalProductPackaged/{id}/_history/{vid} — getMedicinalProductPackagedVersion: vread: read a specific version of a MedicinalProductPackaged

## MedicinalProductPharmaceutical
- GET /MedicinalProductPharmaceutical — searchMedicinalProductPharmaceuticals: search-type: search for MedicinalProductPharmaceutical resources
- POST /MedicinalProductPharmaceutical — createMedicinalProductPharmaceutical: create: create a new MedicinalProductPharmaceutical
- PUT /MedicinalProductPharmaceutical — updateMatchingMedicinalProductPharmaceuticals: conditional update: update the MedicinalProductPharmaceutical matching the search parameters
- DELETE /MedicinalProductPharmaceutical — deleteMatchingMedicinalProductPharmaceuticals: conditional delete: delete the MedicinalProductPharmaceutical resources matching the search parameters
- POST /MedicinalProductPharmaceutical/_search — searchMedicinalProductPharmaceuticalsByPost: search-type: search for MedicinalProductPharmaceutical resources via POST
- GET /MedicinalProductPharmaceutical/{id} — getMedicinalProductPharmaceutical: read: read the current state of a MedicinalProductPharmaceutical
- PUT /MedicinalProductPharmaceutical/{id} — updateMedicinalProductPharmaceutical: update: update a MedicinalProductPharmaceutical, or create it with a client-assigned id
- PATCH /MedicinalProductPharmaceutical/{id} — patchMedicinalProductPharmaceutical: patch: apply a patch document to a MedicinalProductPharmaceutical
- DELETE /MedicinalProductPharmaceutical/{id} — deleteMedicinalProductPharmaceutical: delete: delete a MedicinalProductPharmaceutical
- GET /MedicinalProductPharmaceutical/_history — getMedicinalProductPharmaceuticalTypeHistory: history-type: retrieve the change history for all MedicinalProductPharmaceutical resources
- GET /MedicinalProductPharmaceutical/{id}/_history — getMedicinalProductPharmaceuticalHistory: history-instance: retrieve the change history of one MedicinalProductPharmaceutical
- GET /MedicinalProductPharmaceutical/{id}/_history/{vid} — getMedicinalProductPharmaceuticalVersion: vread: read a specific version of a MedicinalProductPharmaceutical

## MedicinalProductUndesirableEffect
- GET /MedicinalProductUndesirableEffect — searchMedicinalProductUndesirableEffects: search-type: search for MedicinalProductUndesirableEffect resources
- POST /MedicinalProductUndesirableEffect — createMedicinalProductUndesirableEffect: create: create a new MedicinalProductUndesirableEffect
- PUT /MedicinalProductUndesirableEffect — updateMatchingMedicinalProductUndesirableEffects: conditional update: update the MedicinalProductUndesirableEffect matching the search parameters
- DELETE /MedicinalProductUndesirableEffect — deleteMatchingMedicinalProductUndesirableEffects: conditional delete: delete the MedicinalProductUndesirableEffect resources matching the search parameters
- POST /MedicinalProductUndesirableEffect/_search — searchMedicinalProductUndesirableEffectsByPost: search-type: search for MedicinalProductUndesirableEffect resources via POST
- GET /MedicinalProductUndesirableEffect/{id} — getMedicinalProductUndesirableEffect: read: read the current state of a MedicinalProductUndesirableEffect
- PUT /MedicinalProductUndesirableEffect/{id} — updateMedicinalProductUndesirableEffect: update: update a MedicinalProductUndesirableEffect, or create it with a client-assigned id
- PATCH /MedicinalProductUndesirableEffect/{id} — patchMedicinalProductUndesirableEffect: patch: apply a patch document to a MedicinalProductUndesirableEffect
- DELETE /MedicinalProductUndesirableEffect/{id} — deleteMedicinalProductUndesirableEffect: delete: delete a MedicinalProductUndesirableEffect
- GET /MedicinalProductUndesirableEffect/_history — getMedicinalProductUndesirableEffectTypeHistory: history-type: retrieve the change history for all MedicinalProductUndesirableEffect resources
- GET /MedicinalProductUndesirableEffect/{id}/_history — getMedicinalProductUndesirableEffectHistory: history-instance: retrieve the change history of one MedicinalProductUndesirableEffect
- GET /MedicinalProductUndesirableEffect/{id}/_history/{vid} — getMedicinalProductUndesirableEffectVersion: vread: read a specific version of a MedicinalProductUndesirableEffect

## MessageDefinition
- GET /MessageDefinition — searchMessageDefinitions: search-type: search for MessageDefinition resources
- POST /MessageDefinition — createMessageDefinition: create: create a new MessageDefinition
- PUT /MessageDefinition — updateMatchingMessageDefinitions: conditional update: update the MessageDefinition matching the search parameters
- DELETE /MessageDefinition — deleteMatchingMessageDefinitions: conditional delete: delete the MessageDefinition resources matching the search parameters
- POST /MessageDefinition/_search — searchMessageDefinitionsByPost: search-type: search for MessageDefinition resources via POST
- GET /MessageDefinition/{id} — getMessageDefinition: read: read the current state of a MessageDefinition
- PUT /MessageDefinition/{id} — updateMessageDefinition: update: update a MessageDefinition, or create it with a client-assigned id
- PATCH /MessageDefinition/{id} — patchMessageDefinition: patch: apply a patch document to a MessageDefinition
- DELETE /MessageDefinition/{id} — deleteMessageDefinition: delete: delete a MessageDefinition
- GET /MessageDefinition/_history — getMessageDefinitionTypeHistory: history-type: retrieve the change history for all MessageDefinition resources
- GET /MessageDefinition/{id}/_history — getMessageDefinitionHistory: history-instance: retrieve the change history of one MessageDefinition
- GET /MessageDefinition/{id}/_history/{vid} — getMessageDefinitionVersion: vread: read a specific version of a MessageDefinition

## MessageHeader
- GET /MessageHeader — searchMessageHeaders: search-type: search for MessageHeader resources
- POST /MessageHeader — createMessageHeader: create: create a new MessageHeader
- PUT /MessageHeader — updateMatchingMessageHeaders: conditional update: update the MessageHeader matching the search parameters
- DELETE /MessageHeader — deleteMatchingMessageHeaders: conditional delete: delete the MessageHeader resources matching the search parameters
- POST /MessageHeader/_search — searchMessageHeadersByPost: search-type: search for MessageHeader resources via POST
- GET /MessageHeader/{id} — getMessageHeader: read: read the current state of a MessageHeader
- PUT /MessageHeader/{id} — updateMessageHeader: update: update a MessageHeader, or create it with a client-assigned id
- PATCH /MessageHeader/{id} — patchMessageHeader: patch: apply a patch document to a MessageHeader
- DELETE /MessageHeader/{id} — deleteMessageHeader: delete: delete a MessageHeader
- GET /MessageHeader/_history — getMessageHeaderTypeHistory: history-type: retrieve the change history for all MessageHeader resources
- GET /MessageHeader/{id}/_history — getMessageHeaderHistory: history-instance: retrieve the change history of one MessageHeader
- GET /MessageHeader/{id}/_history/{vid} — getMessageHeaderVersion: vread: read a specific version of a MessageHeader

## MolecularSequence
- GET /MolecularSequence — searchMolecularSequences: search-type: search for MolecularSequence resources
- POST /MolecularSequence — createMolecularSequence: create: create a new MolecularSequence
- PUT /MolecularSequence — updateMatchingMolecularSequences: conditional update: update the MolecularSequence matching the search parameters
- DELETE /MolecularSequence — deleteMatchingMolecularSequences: conditional delete: delete the MolecularSequence resources matching the search parameters
- POST /MolecularSequence/_search — searchMolecularSequencesByPost: search-type: search for MolecularSequence resources via POST
- GET /MolecularSequence/{id} — getMolecularSequence: read: read the current state of a MolecularSequence
- PUT /MolecularSequence/{id} — updateMolecularSequence: update: update a MolecularSequence, or create it with a client-assigned id
- PATCH /MolecularSequence/{id} — patchMolecularSequence: patch: apply a patch document to a MolecularSequence
- DELETE /MolecularSequence/{id} — deleteMolecularSequence: delete: delete a MolecularSequence
- GET /MolecularSequence/_history — getMolecularSequenceTypeHistory: history-type: retrieve the change history for all MolecularSequence resources
- GET /MolecularSequence/{id}/_history — getMolecularSequenceHistory: history-instance: retrieve the change history of one MolecularSequence
- GET /MolecularSequence/{id}/_history/{vid} — getMolecularSequenceVersion: vread: read a specific version of a MolecularSequence

## NamingSystem
- GET /NamingSystem — searchNamingSystems: search-type: search for NamingSystem resources
- POST /NamingSystem — createNamingSystem: create: create a new NamingSystem
- PUT /NamingSystem — updateMatchingNamingSystems: conditional update: update the NamingSystem matching the search parameters
- DELETE /NamingSystem — deleteMatchingNamingSystems: conditional delete: delete the NamingSystem resources matching the search parameters
- POST /NamingSystem/_search — searchNamingSystemsByPost: search-type: search for NamingSystem resources via POST
- GET /NamingSystem/{id} — getNamingSystem: read: read the current state of a NamingSystem
- PUT /NamingSystem/{id} — updateNamingSystem: update: update a NamingSystem, or create it with a client-assigned id
- PATCH /NamingSystem/{id} — patchNamingSystem: patch: apply a patch document to a NamingSystem
- DELETE /NamingSystem/{id} — deleteNamingSystem: delete: delete a NamingSystem
- GET /NamingSystem/_history — getNamingSystemTypeHistory: history-type: retrieve the change history for all NamingSystem resources
- GET /NamingSystem/{id}/_history — getNamingSystemHistory: history-instance: retrieve the change history of one NamingSystem
- GET /NamingSystem/{id}/_history/{vid} — getNamingSystemVersion: vread: read a specific version of a NamingSystem
- GET /NamingSystem/$preferred-id — getNamingSystemPreferredId: $preferred-id: Fetch Preferred it (on the NamingSystem resource type) — GET form
- POST /NamingSystem/$preferred-id — runNamingSystemPreferredId: $preferred-id: Fetch Preferred it (on the NamingSystem resource type)

## NutritionOrder
- GET /NutritionOrder — searchNutritionOrders: search-type: search for NutritionOrder resources
- POST /NutritionOrder — createNutritionOrder: create: create a new NutritionOrder
- PUT /NutritionOrder — updateMatchingNutritionOrders: conditional update: update the NutritionOrder matching the search parameters
- DELETE /NutritionOrder — deleteMatchingNutritionOrders: conditional delete: delete the NutritionOrder resources matching the search parameters
- POST /NutritionOrder/_search — searchNutritionOrdersByPost: search-type: search for NutritionOrder resources via POST
- GET /NutritionOrder/{id} — getNutritionOrder: read: read the current state of a NutritionOrder
- PUT /NutritionOrder/{id} — updateNutritionOrder: update: update a NutritionOrder, or create it with a client-assigned id
- PATCH /NutritionOrder/{id} — patchNutritionOrder: patch: apply a patch document to a NutritionOrder
- DELETE /NutritionOrder/{id} — deleteNutritionOrder: delete: delete a NutritionOrder
- GET /NutritionOrder/_history — getNutritionOrderTypeHistory: history-type: retrieve the change history for all NutritionOrder resources
- GET /NutritionOrder/{id}/_history — getNutritionOrderHistory: history-instance: retrieve the change history of one NutritionOrder
- GET /NutritionOrder/{id}/_history/{vid} — getNutritionOrderVersion: vread: read a specific version of a NutritionOrder

## Observation
- GET /Observation — searchObservations: search-type: search for Observation resources
- POST /Observation — createObservation: create: create a new Observation
- PUT /Observation — updateMatchingObservations: conditional update: update the Observation matching the search parameters
- DELETE /Observation — deleteMatchingObservations: conditional delete: delete the Observation resources matching the search parameters
- POST /Observation/_search — searchObservationsByPost: search-type: search for Observation resources via POST
- GET /Observation/{id} — getObservation: read: read the current state of an Observation
- PUT /Observation/{id} — updateObservation: update: update an Observation, or create it with a client-assigned id
- PATCH /Observation/{id} — patchObservation: patch: apply a patch document to an Observation
- DELETE /Observation/{id} — deleteObservation: delete: delete an Observation
- GET /Observation/_history — getObservationTypeHistory: history-type: retrieve the change history for all Observation resources
- GET /Observation/{id}/_history — getObservationHistory: history-instance: retrieve the change history of one Observation
- GET /Observation/{id}/_history/{vid} — getObservationVersion: vread: read a specific version of an Observation
- GET /Observation/$lastn — getObservationLastn: $lastn: Last N Observations Query (on the Observation resource type) — GET form
- POST /Observation/$lastn — runObservationLastn: $lastn: Last N Observations Query (on the Observation resource type)
- GET /Observation/$stats — getObservationStats: $stats: Observation Statistics (on the Observation resource type) — GET form
- POST /Observation/$stats — runObservationStats: $stats: Observation Statistics (on the Observation resource type)

## ObservationDefinition
- GET /ObservationDefinition — searchObservationDefinitions: search-type: search for ObservationDefinition resources
- POST /ObservationDefinition — createObservationDefinition: create: create a new ObservationDefinition
- PUT /ObservationDefinition — updateMatchingObservationDefinitions: conditional update: update the ObservationDefinition matching the search parameters
- DELETE /ObservationDefinition — deleteMatchingObservationDefinitions: conditional delete: delete the ObservationDefinition resources matching the search parameters
- POST /ObservationDefinition/_search — searchObservationDefinitionsByPost: search-type: search for ObservationDefinition resources via POST
- GET /ObservationDefinition/{id} — getObservationDefinition: read: read the current state of an ObservationDefinition
- PUT /ObservationDefinition/{id} — updateObservationDefinition: update: update an ObservationDefinition, or create it with a client-assigned id
- PATCH /ObservationDefinition/{id} — patchObservationDefinition: patch: apply a patch document to an ObservationDefinition
- DELETE /ObservationDefinition/{id} — deleteObservationDefinition: delete: delete an ObservationDefinition
- GET /ObservationDefinition/_history — getObservationDefinitionTypeHistory: history-type: retrieve the change history for all ObservationDefinition resources
- GET /ObservationDefinition/{id}/_history — getObservationDefinitionHistory: history-instance: retrieve the change history of one ObservationDefinition
- GET /ObservationDefinition/{id}/_history/{vid} — getObservationDefinitionVersion: vread: read a specific version of an ObservationDefinition

## OperationDefinition
- GET /OperationDefinition — searchOperationDefinitions: search-type: search for OperationDefinition resources
- POST /OperationDefinition — createOperationDefinition: create: create a new OperationDefinition
- PUT /OperationDefinition — updateMatchingOperationDefinitions: conditional update: update the OperationDefinition matching the search parameters
- DELETE /OperationDefinition — deleteMatchingOperationDefinitions: conditional delete: delete the OperationDefinition resources matching the search parameters
- POST /OperationDefinition/_search — searchOperationDefinitionsByPost: search-type: search for OperationDefinition resources via POST
- GET /OperationDefinition/{id} — getOperationDefinition: read: read the current state of an OperationDefinition
- PUT /OperationDefinition/{id} — updateOperationDefinition: update: update an OperationDefinition, or create it with a client-assigned id
- PATCH /OperationDefinition/{id} — patchOperationDefinition: patch: apply a patch document to an OperationDefinition
- DELETE /OperationDefinition/{id} — deleteOperationDefinition: delete: delete an OperationDefinition
- GET /OperationDefinition/_history — getOperationDefinitionTypeHistory: history-type: retrieve the change history for all OperationDefinition resources
- GET /OperationDefinition/{id}/_history — getOperationDefinitionHistory: history-instance: retrieve the change history of one OperationDefinition
- GET /OperationDefinition/{id}/_history/{vid} — getOperationDefinitionVersion: vread: read a specific version of an OperationDefinition

## OperationOutcome
- GET /OperationOutcome — searchOperationOutcomes: search-type: search for OperationOutcome resources
- POST /OperationOutcome — createOperationOutcome: create: create a new OperationOutcome
- PUT /OperationOutcome — updateMatchingOperationOutcomes: conditional update: update the OperationOutcome matching the search parameters
- DELETE /OperationOutcome — deleteMatchingOperationOutcomes: conditional delete: delete the OperationOutcome resources matching the search parameters
- POST /OperationOutcome/_search — searchOperationOutcomesByPost: search-type: search for OperationOutcome resources via POST
- GET /OperationOutcome/{id} — getOperationOutcome: read: read the current state of an OperationOutcome
- PUT /OperationOutcome/{id} — updateOperationOutcome: update: update an OperationOutcome, or create it with a client-assigned id
- PATCH /OperationOutcome/{id} — patchOperationOutcome: patch: apply a patch document to an OperationOutcome
- DELETE /OperationOutcome/{id} — deleteOperationOutcome: delete: delete an OperationOutcome
- GET /OperationOutcome/_history — getOperationOutcomeTypeHistory: history-type: retrieve the change history for all OperationOutcome resources
- GET /OperationOutcome/{id}/_history — getOperationOutcomeHistory: history-instance: retrieve the change history of one OperationOutcome
- GET /OperationOutcome/{id}/_history/{vid} — getOperationOutcomeVersion: vread: read a specific version of an OperationOutcome

## Organization
- GET /Organization — searchOrganizations: search-type: search for Organization resources
- POST /Organization — createOrganization: create: create a new Organization
- PUT /Organization — updateMatchingOrganizations: conditional update: update the Organization matching the search parameters
- DELETE /Organization — deleteMatchingOrganizations: conditional delete: delete the Organization resources matching the search parameters
- POST /Organization/_search — searchOrganizationsByPost: search-type: search for Organization resources via POST
- GET /Organization/{id} — getOrganization: read: read the current state of an Organization
- PUT /Organization/{id} — updateOrganization: update: update an Organization, or create it with a client-assigned id
- PATCH /Organization/{id} — patchOrganization: patch: apply a patch document to an Organization
- DELETE /Organization/{id} — deleteOrganization: delete: delete an Organization
- GET /Organization/_history — getOrganizationTypeHistory: history-type: retrieve the change history for all Organization resources
- GET /Organization/{id}/_history — getOrganizationHistory: history-instance: retrieve the change history of one Organization
- GET /Organization/{id}/_history/{vid} — getOrganizationVersion: vread: read a specific version of an Organization

## OrganizationAffiliation
- GET /OrganizationAffiliation — searchOrganizationAffiliations: search-type: search for OrganizationAffiliation resources
- POST /OrganizationAffiliation — createOrganizationAffiliation: create: create a new OrganizationAffiliation
- PUT /OrganizationAffiliation — updateMatchingOrganizationAffiliations: conditional update: update the OrganizationAffiliation matching the search parameters
- DELETE /OrganizationAffiliation — deleteMatchingOrganizationAffiliations: conditional delete: delete the OrganizationAffiliation resources matching the search parameters
- POST /OrganizationAffiliation/_search — searchOrganizationAffiliationsByPost: search-type: search for OrganizationAffiliation resources via POST
- GET /OrganizationAffiliation/{id} — getOrganizationAffiliation: read: read the current state of an OrganizationAffiliation
- PUT /OrganizationAffiliation/{id} — updateOrganizationAffiliation: update: update an OrganizationAffiliation, or create it with a client-assigned id
- PATCH /OrganizationAffiliation/{id} — patchOrganizationAffiliation: patch: apply a patch document to an OrganizationAffiliation
- DELETE /OrganizationAffiliation/{id} — deleteOrganizationAffiliation: delete: delete an OrganizationAffiliation
- GET /OrganizationAffiliation/_history — getOrganizationAffiliationTypeHistory: history-type: retrieve the change history for all OrganizationAffiliation resources
- GET /OrganizationAffiliation/{id}/_history — getOrganizationAffiliationHistory: history-instance: retrieve the change history of one OrganizationAffiliation
- GET /OrganizationAffiliation/{id}/_history/{vid} — getOrganizationAffiliationVersion: vread: read a specific version of an OrganizationAffiliation

## Patient
- GET /Patient — searchPatients: search-type: search for Patient resources
- POST /Patient — createPatient: create: create a new Patient
- PUT /Patient — updateMatchingPatients: conditional update: update the Patient matching the search parameters
- DELETE /Patient — deleteMatchingPatients: conditional delete: delete the Patient resources matching the search parameters
- POST /Patient/_search — searchPatientsByPost: search-type: search for Patient resources via POST
- GET /Patient/{id} — getPatient: read: read the current state of a Patient
- PUT /Patient/{id} — updatePatient: update: update a Patient, or create it with a client-assigned id
- PATCH /Patient/{id} — patchPatient: patch: apply a patch document to a Patient
- DELETE /Patient/{id} — deletePatient: delete: delete a Patient
- GET /Patient/_history — getPatientTypeHistory: history-type: retrieve the change history for all Patient resources
- GET /Patient/{id}/_history — getPatientHistory: history-instance: retrieve the change history of one Patient
- GET /Patient/{id}/_history/{vid} — getPatientVersion: vread: read a specific version of a Patient
- GET /Patient/$everything — getPatientEverything: $everything: Fetch Patient Record (on the Patient resource type) — GET form
- POST /Patient/$everything — runPatientEverything: $everything: Fetch Patient Record (on the Patient resource type)
- GET /Patient/{id}/$everything — getPatientEverythingById: $everything: Fetch Patient Record (on one Patient instance) — GET form
- POST /Patient/{id}/$everything — runPatientEverythingById: $everything: Fetch Patient Record (on one Patient instance)
- POST /Patient/$match — runPatientMatch: $match: Find patient matches using MPI based logic (on the Patient resource type)

## PaymentNotice
- GET /PaymentNotice — searchPaymentNotices: search-type: search for PaymentNotice resources
- POST /PaymentNotice — createPaymentNotice: create: create a new PaymentNotice
- PUT /PaymentNotice — updateMatchingPaymentNotices: conditional update: update the PaymentNotice matching the search parameters
- DELETE /PaymentNotice — deleteMatchingPaymentNotices: conditional delete: delete the PaymentNotice resources matching the search parameters
- POST /PaymentNotice/_search — searchPaymentNoticesByPost: search-type: search for PaymentNotice resources via POST
- GET /PaymentNotice/{id} — getPaymentNotice: read: read the current state of a PaymentNotice
- PUT /PaymentNotice/{id} — updatePaymentNotice: update: update a PaymentNotice, or create it with a client-assigned id
- PATCH /PaymentNotice/{id} — patchPaymentNotice: patch: apply a patch document to a PaymentNotice
- DELETE /PaymentNotice/{id} — deletePaymentNotice: delete: delete a PaymentNotice
- GET /PaymentNotice/_history — getPaymentNoticeTypeHistory: history-type: retrieve the change history for all PaymentNotice resources
- GET /PaymentNotice/{id}/_history — getPaymentNoticeHistory: history-instance: retrieve the change history of one PaymentNotice
- GET /PaymentNotice/{id}/_history/{vid} — getPaymentNoticeVersion: vread: read a specific version of a PaymentNotice

## PaymentReconciliation
- GET /PaymentReconciliation — searchPaymentReconciliations: search-type: search for PaymentReconciliation resources
- POST /PaymentReconciliation — createPaymentReconciliation: create: create a new PaymentReconciliation
- PUT /PaymentReconciliation — updateMatchingPaymentReconciliations: conditional update: update the PaymentReconciliation matching the search parameters
- DELETE /PaymentReconciliation — deleteMatchingPaymentReconciliations: conditional delete: delete the PaymentReconciliation resources matching the search parameters
- POST /PaymentReconciliation/_search — searchPaymentReconciliationsByPost: search-type: search for PaymentReconciliation resources via POST
- GET /PaymentReconciliation/{id} — getPaymentReconciliation: read: read the current state of a PaymentReconciliation
- PUT /PaymentReconciliation/{id} — updatePaymentReconciliation: update: update a PaymentReconciliation, or create it with a client-assigned id
- PATCH /PaymentReconciliation/{id} — patchPaymentReconciliation: patch: apply a patch document to a PaymentReconciliation
- DELETE /PaymentReconciliation/{id} — deletePaymentReconciliation: delete: delete a PaymentReconciliation
- GET /PaymentReconciliation/_history — getPaymentReconciliationTypeHistory: history-type: retrieve the change history for all PaymentReconciliation resources
- GET /PaymentReconciliation/{id}/_history — getPaymentReconciliationHistory: history-instance: retrieve the change history of one PaymentReconciliation
- GET /PaymentReconciliation/{id}/_history/{vid} — getPaymentReconciliationVersion: vread: read a specific version of a PaymentReconciliation

## Person
- GET /Person — searchPersons: search-type: search for Person resources
- POST /Person — createPerson: create: create a new Person
- PUT /Person — updateMatchingPersons: conditional update: update the Person matching the search parameters
- DELETE /Person — deleteMatchingPersons: conditional delete: delete the Person resources matching the search parameters
- POST /Person/_search — searchPersonsByPost: search-type: search for Person resources via POST
- GET /Person/{id} — getPerson: read: read the current state of a Person
- PUT /Person/{id} — updatePerson: update: update a Person, or create it with a client-assigned id
- PATCH /Person/{id} — patchPerson: patch: apply a patch document to a Person
- DELETE /Person/{id} — deletePerson: delete: delete a Person
- GET /Person/_history — getPersonTypeHistory: history-type: retrieve the change history for all Person resources
- GET /Person/{id}/_history — getPersonHistory: history-instance: retrieve the change history of one Person
- GET /Person/{id}/_history/{vid} — getPersonVersion: vread: read a specific version of a Person

## PlanDefinition
- GET /PlanDefinition — searchPlanDefinitions: search-type: search for PlanDefinition resources
- POST /PlanDefinition — createPlanDefinition: create: create a new PlanDefinition
- PUT /PlanDefinition — updateMatchingPlanDefinitions: conditional update: update the PlanDefinition matching the search parameters
- DELETE /PlanDefinition — deleteMatchingPlanDefinitions: conditional delete: delete the PlanDefinition resources matching the search parameters
- POST /PlanDefinition/_search — searchPlanDefinitionsByPost: search-type: search for PlanDefinition resources via POST
- GET /PlanDefinition/{id} — getPlanDefinition: read: read the current state of a PlanDefinition
- PUT /PlanDefinition/{id} — updatePlanDefinition: update: update a PlanDefinition, or create it with a client-assigned id
- PATCH /PlanDefinition/{id} — patchPlanDefinition: patch: apply a patch document to a PlanDefinition
- DELETE /PlanDefinition/{id} — deletePlanDefinition: delete: delete a PlanDefinition
- GET /PlanDefinition/_history — getPlanDefinitionTypeHistory: history-type: retrieve the change history for all PlanDefinition resources
- GET /PlanDefinition/{id}/_history — getPlanDefinitionHistory: history-instance: retrieve the change history of one PlanDefinition
- GET /PlanDefinition/{id}/_history/{vid} — getPlanDefinitionVersion: vread: read a specific version of a PlanDefinition
- GET /PlanDefinition/$apply — getPlanDefinitionApply: $apply: Apply (on the PlanDefinition resource type) — GET form
- POST /PlanDefinition/$apply — runPlanDefinitionApply: $apply: Apply (on the PlanDefinition resource type)
- GET /PlanDefinition/{id}/$apply — getPlanDefinitionApplyById: $apply: Apply (on one PlanDefinition instance) — GET form
- POST /PlanDefinition/{id}/$apply — runPlanDefinitionApplyById: $apply: Apply (on one PlanDefinition instance)
- GET /PlanDefinition/{id}/$data-requirements — getPlanDefinitionDataRequirementsById: $data-requirements: Data Requirements (on one PlanDefinition instance) — GET form
- POST /PlanDefinition/{id}/$data-requirements — runPlanDefinitionDataRequirementsById: $data-requirements: Data Requirements (on one PlanDefinition instance)

## Practitioner
- GET /Practitioner — searchPractitioners: search-type: search for Practitioner resources
- POST /Practitioner — createPractitioner: create: create a new Practitioner
- PUT /Practitioner — updateMatchingPractitioners: conditional update: update the Practitioner matching the search parameters
- DELETE /Practitioner — deleteMatchingPractitioners: conditional delete: delete the Practitioner resources matching the search parameters
- POST /Practitioner/_search — searchPractitionersByPost: search-type: search for Practitioner resources via POST
- GET /Practitioner/{id} — getPractitioner: read: read the current state of a Practitioner
- PUT /Practitioner/{id} — updatePractitioner: update: update a Practitioner, or create it with a client-assigned id
- PATCH /Practitioner/{id} — patchPractitioner: patch: apply a patch document to a Practitioner
- DELETE /Practitioner/{id} — deletePractitioner: delete: delete a Practitioner
- GET /Practitioner/_history — getPractitionerTypeHistory: history-type: retrieve the change history for all Practitioner resources
- GET /Practitioner/{id}/_history — getPractitionerHistory: history-instance: retrieve the change history of one Practitioner
- GET /Practitioner/{id}/_history/{vid} — getPractitionerVersion: vread: read a specific version of a Practitioner

## PractitionerRole
- GET /PractitionerRole — searchPractitionerRoles: search-type: search for PractitionerRole resources
- POST /PractitionerRole — createPractitionerRole: create: create a new PractitionerRole
- PUT /PractitionerRole — updateMatchingPractitionerRoles: conditional update: update the PractitionerRole matching the search parameters
- DELETE /PractitionerRole — deleteMatchingPractitionerRoles: conditional delete: delete the PractitionerRole resources matching the search parameters
- POST /PractitionerRole/_search — searchPractitionerRolesByPost: search-type: search for PractitionerRole resources via POST
- GET /PractitionerRole/{id} — getPractitionerRole: read: read the current state of a PractitionerRole
- PUT /PractitionerRole/{id} — updatePractitionerRole: update: update a PractitionerRole, or create it with a client-assigned id
- PATCH /PractitionerRole/{id} — patchPractitionerRole: patch: apply a patch document to a PractitionerRole
- DELETE /PractitionerRole/{id} — deletePractitionerRole: delete: delete a PractitionerRole
- GET /PractitionerRole/_history — getPractitionerRoleTypeHistory: history-type: retrieve the change history for all PractitionerRole resources
- GET /PractitionerRole/{id}/_history — getPractitionerRoleHistory: history-instance: retrieve the change history of one PractitionerRole
- GET /PractitionerRole/{id}/_history/{vid} — getPractitionerRoleVersion: vread: read a specific version of a PractitionerRole

## Procedure
- GET /Procedure — searchProcedures: search-type: search for Procedure resources
- POST /Procedure — createProcedure: create: create a new Procedure
- PUT /Procedure — updateMatchingProcedures: conditional update: update the Procedure matching the search parameters
- DELETE /Procedure — deleteMatchingProcedures: conditional delete: delete the Procedure resources matching the search parameters
- POST /Procedure/_search — searchProceduresByPost: search-type: search for Procedure resources via POST
- GET /Procedure/{id} — getProcedure: read: read the current state of a Procedure
- PUT /Procedure/{id} — updateProcedure: update: update a Procedure, or create it with a client-assigned id
- PATCH /Procedure/{id} — patchProcedure: patch: apply a patch document to a Procedure
- DELETE /Procedure/{id} — deleteProcedure: delete: delete a Procedure
- GET /Procedure/_history — getProcedureTypeHistory: history-type: retrieve the change history for all Procedure resources
- GET /Procedure/{id}/_history — getProcedureHistory: history-instance: retrieve the change history of one Procedure
- GET /Procedure/{id}/_history/{vid} — getProcedureVersion: vread: read a specific version of a Procedure

## Provenance
- GET /Provenance — searchProvenances: search-type: search for Provenance resources
- POST /Provenance — createProvenance: create: create a new Provenance
- PUT /Provenance — updateMatchingProvenances: conditional update: update the Provenance matching the search parameters
- DELETE /Provenance — deleteMatchingProvenances: conditional delete: delete the Provenance resources matching the search parameters
- POST /Provenance/_search — searchProvenancesByPost: search-type: search for Provenance resources via POST
- GET /Provenance/{id} — getProvenance: read: read the current state of a Provenance
- PUT /Provenance/{id} — updateProvenance: update: update a Provenance, or create it with a client-assigned id
- PATCH /Provenance/{id} — patchProvenance: patch: apply a patch document to a Provenance
- DELETE /Provenance/{id} — deleteProvenance: delete: delete a Provenance
- GET /Provenance/_history — getProvenanceTypeHistory: history-type: retrieve the change history for all Provenance resources
- GET /Provenance/{id}/_history — getProvenanceHistory: history-instance: retrieve the change history of one Provenance
- GET /Provenance/{id}/_history/{vid} — getProvenanceVersion: vread: read a specific version of a Provenance

## Questionnaire
- GET /Questionnaire — searchQuestionnaires: search-type: search for Questionnaire resources
- POST /Questionnaire — createQuestionnaire: create: create a new Questionnaire
- PUT /Questionnaire — updateMatchingQuestionnaires: conditional update: update the Questionnaire matching the search parameters
- DELETE /Questionnaire — deleteMatchingQuestionnaires: conditional delete: delete the Questionnaire resources matching the search parameters
- POST /Questionnaire/_search — searchQuestionnairesByPost: search-type: search for Questionnaire resources via POST
- GET /Questionnaire/{id} — getQuestionnaire: read: read the current state of a Questionnaire
- PUT /Questionnaire/{id} — updateQuestionnaire: update: update a Questionnaire, or create it with a client-assigned id
- PATCH /Questionnaire/{id} — patchQuestionnaire: patch: apply a patch document to a Questionnaire
- DELETE /Questionnaire/{id} — deleteQuestionnaire: delete: delete a Questionnaire
- GET /Questionnaire/_history — getQuestionnaireTypeHistory: history-type: retrieve the change history for all Questionnaire resources
- GET /Questionnaire/{id}/_history — getQuestionnaireHistory: history-instance: retrieve the change history of one Questionnaire
- GET /Questionnaire/{id}/_history/{vid} — getQuestionnaireVersion: vread: read a specific version of a Questionnaire

## QuestionnaireResponse
- GET /QuestionnaireResponse — searchQuestionnaireResponses: search-type: search for QuestionnaireResponse resources
- POST /QuestionnaireResponse — createQuestionnaireResponse: create: create a new QuestionnaireResponse
- PUT /QuestionnaireResponse — updateMatchingQuestionnaireResponses: conditional update: update the QuestionnaireResponse matching the search parameters
- DELETE /QuestionnaireResponse — deleteMatchingQuestionnaireResponses: conditional delete: delete the QuestionnaireResponse resources matching the search parameters
- POST /QuestionnaireResponse/_search — searchQuestionnaireResponsesByPost: search-type: search for QuestionnaireResponse resources via POST
- GET /QuestionnaireResponse/{id} — getQuestionnaireResponse: read: read the current state of a QuestionnaireResponse
- PUT /QuestionnaireResponse/{id} — updateQuestionnaireResponse: update: update a QuestionnaireResponse, or create it with a client-assigned id
- PATCH /QuestionnaireResponse/{id} — patchQuestionnaireResponse: patch: apply a patch document to a QuestionnaireResponse
- DELETE /QuestionnaireResponse/{id} — deleteQuestionnaireResponse: delete: delete a QuestionnaireResponse
- GET /QuestionnaireResponse/_history — getQuestionnaireResponseTypeHistory: history-type: retrieve the change history for all QuestionnaireResponse resources
- GET /QuestionnaireResponse/{id}/_history — getQuestionnaireResponseHistory: history-instance: retrieve the change history of one QuestionnaireResponse
- GET /QuestionnaireResponse/{id}/_history/{vid} — getQuestionnaireResponseVersion: vread: read a specific version of a QuestionnaireResponse

## RelatedPerson
- GET /RelatedPerson — searchRelatedPersons: search-type: search for RelatedPerson resources
- POST /RelatedPerson — createRelatedPerson: create: create a new RelatedPerson
- PUT /RelatedPerson — updateMatchingRelatedPersons: conditional update: update the RelatedPerson matching the search parameters
- DELETE /RelatedPerson — deleteMatchingRelatedPersons: conditional delete: delete the RelatedPerson resources matching the search parameters
- POST /RelatedPerson/_search — searchRelatedPersonsByPost: search-type: search for RelatedPerson resources via POST
- GET /RelatedPerson/{id} — getRelatedPerson: read: read the current state of a RelatedPerson
- PUT /RelatedPerson/{id} — updateRelatedPerson: update: update a RelatedPerson, or create it with a client-assigned id
- PATCH /RelatedPerson/{id} — patchRelatedPerson: patch: apply a patch document to a RelatedPerson
- DELETE /RelatedPerson/{id} — deleteRelatedPerson: delete: delete a RelatedPerson
- GET /RelatedPerson/_history — getRelatedPersonTypeHistory: history-type: retrieve the change history for all RelatedPerson resources
- GET /RelatedPerson/{id}/_history — getRelatedPersonHistory: history-instance: retrieve the change history of one RelatedPerson
- GET /RelatedPerson/{id}/_history/{vid} — getRelatedPersonVersion: vread: read a specific version of a RelatedPerson

## RequestGroup
- GET /RequestGroup — searchRequestGroups: search-type: search for RequestGroup resources
- POST /RequestGroup — createRequestGroup: create: create a new RequestGroup
- PUT /RequestGroup — updateMatchingRequestGroups: conditional update: update the RequestGroup matching the search parameters
- DELETE /RequestGroup — deleteMatchingRequestGroups: conditional delete: delete the RequestGroup resources matching the search parameters
- POST /RequestGroup/_search — searchRequestGroupsByPost: search-type: search for RequestGroup resources via POST
- GET /RequestGroup/{id} — getRequestGroup: read: read the current state of a RequestGroup
- PUT /RequestGroup/{id} — updateRequestGroup: update: update a RequestGroup, or create it with a client-assigned id
- PATCH /RequestGroup/{id} — patchRequestGroup: patch: apply a patch document to a RequestGroup
- DELETE /RequestGroup/{id} — deleteRequestGroup: delete: delete a RequestGroup
- GET /RequestGroup/_history — getRequestGroupTypeHistory: history-type: retrieve the change history for all RequestGroup resources
- GET /RequestGroup/{id}/_history — getRequestGroupHistory: history-instance: retrieve the change history of one RequestGroup
- GET /RequestGroup/{id}/_history/{vid} — getRequestGroupVersion: vread: read a specific version of a RequestGroup

## ResearchDefinition
- GET /ResearchDefinition — searchResearchDefinitions: search-type: search for ResearchDefinition resources
- POST /ResearchDefinition — createResearchDefinition: create: create a new ResearchDefinition
- PUT /ResearchDefinition — updateMatchingResearchDefinitions: conditional update: update the ResearchDefinition matching the search parameters
- DELETE /ResearchDefinition — deleteMatchingResearchDefinitions: conditional delete: delete the ResearchDefinition resources matching the search parameters
- POST /ResearchDefinition/_search — searchResearchDefinitionsByPost: search-type: search for ResearchDefinition resources via POST
- GET /ResearchDefinition/{id} — getResearchDefinition: read: read the current state of a ResearchDefinition
- PUT /ResearchDefinition/{id} — updateResearchDefinition: update: update a ResearchDefinition, or create it with a client-assigned id
- PATCH /ResearchDefinition/{id} — patchResearchDefinition: patch: apply a patch document to a ResearchDefinition
- DELETE /ResearchDefinition/{id} — deleteResearchDefinition: delete: delete a ResearchDefinition
- GET /ResearchDefinition/_history — getResearchDefinitionTypeHistory: history-type: retrieve the change history for all ResearchDefinition resources
- GET /ResearchDefinition/{id}/_history — getResearchDefinitionHistory: history-instance: retrieve the change history of one ResearchDefinition
- GET /ResearchDefinition/{id}/_history/{vid} — getResearchDefinitionVersion: vread: read a specific version of a ResearchDefinition

## ResearchElementDefinition
- GET /ResearchElementDefinition — searchResearchElementDefinitions: search-type: search for ResearchElementDefinition resources
- POST /ResearchElementDefinition — createResearchElementDefinition: create: create a new ResearchElementDefinition
- PUT /ResearchElementDefinition — updateMatchingResearchElementDefinitions: conditional update: update the ResearchElementDefinition matching the search parameters
- DELETE /ResearchElementDefinition — deleteMatchingResearchElementDefinitions: conditional delete: delete the ResearchElementDefinition resources matching the search parameters
- POST /ResearchElementDefinition/_search — searchResearchElementDefinitionsByPost: search-type: search for ResearchElementDefinition resources via POST
- GET /ResearchElementDefinition/{id} — getResearchElementDefinition: read: read the current state of a ResearchElementDefinition
- PUT /ResearchElementDefinition/{id} — updateResearchElementDefinition: update: update a ResearchElementDefinition, or create it with a client-assigned id
- PATCH /ResearchElementDefinition/{id} — patchResearchElementDefinition: patch: apply a patch document to a ResearchElementDefinition
- DELETE /ResearchElementDefinition/{id} — deleteResearchElementDefinition: delete: delete a ResearchElementDefinition
- GET /ResearchElementDefinition/_history — getResearchElementDefinitionTypeHistory: history-type: retrieve the change history for all ResearchElementDefinition resources
- GET /ResearchElementDefinition/{id}/_history — getResearchElementDefinitionHistory: history-instance: retrieve the change history of one ResearchElementDefinition
- GET /ResearchElementDefinition/{id}/_history/{vid} — getResearchElementDefinitionVersion: vread: read a specific version of a ResearchElementDefinition

## ResearchStudy
- GET /ResearchStudy — searchResearchStudies: search-type: search for ResearchStudy resources
- POST /ResearchStudy — createResearchStudy: create: create a new ResearchStudy
- PUT /ResearchStudy — updateMatchingResearchStudies: conditional update: update the ResearchStudy matching the search parameters
- DELETE /ResearchStudy — deleteMatchingResearchStudies: conditional delete: delete the ResearchStudy resources matching the search parameters
- POST /ResearchStudy/_search — searchResearchStudiesByPost: search-type: search for ResearchStudy resources via POST
- GET /ResearchStudy/{id} — getResearchStudy: read: read the current state of a ResearchStudy
- PUT /ResearchStudy/{id} — updateResearchStudy: update: update a ResearchStudy, or create it with a client-assigned id
- PATCH /ResearchStudy/{id} — patchResearchStudy: patch: apply a patch document to a ResearchStudy
- DELETE /ResearchStudy/{id} — deleteResearchStudy: delete: delete a ResearchStudy
- GET /ResearchStudy/_history — getResearchStudyTypeHistory: history-type: retrieve the change history for all ResearchStudy resources
- GET /ResearchStudy/{id}/_history — getResearchStudyHistory: history-instance: retrieve the change history of one ResearchStudy
- GET /ResearchStudy/{id}/_history/{vid} — getResearchStudyVersion: vread: read a specific version of a ResearchStudy

## ResearchSubject
- GET /ResearchSubject — searchResearchSubjects: search-type: search for ResearchSubject resources
- POST /ResearchSubject — createResearchSubject: create: create a new ResearchSubject
- PUT /ResearchSubject — updateMatchingResearchSubjects: conditional update: update the ResearchSubject matching the search parameters
- DELETE /ResearchSubject — deleteMatchingResearchSubjects: conditional delete: delete the ResearchSubject resources matching the search parameters
- POST /ResearchSubject/_search — searchResearchSubjectsByPost: search-type: search for ResearchSubject resources via POST
- GET /ResearchSubject/{id} — getResearchSubject: read: read the current state of a ResearchSubject
- PUT /ResearchSubject/{id} — updateResearchSubject: update: update a ResearchSubject, or create it with a client-assigned id
- PATCH /ResearchSubject/{id} — patchResearchSubject: patch: apply a patch document to a ResearchSubject
- DELETE /ResearchSubject/{id} — deleteResearchSubject: delete: delete a ResearchSubject
- GET /ResearchSubject/_history — getResearchSubjectTypeHistory: history-type: retrieve the change history for all ResearchSubject resources
- GET /ResearchSubject/{id}/_history — getResearchSubjectHistory: history-instance: retrieve the change history of one ResearchSubject
- GET /ResearchSubject/{id}/_history/{vid} — getResearchSubjectVersion: vread: read a specific version of a ResearchSubject

## Resource
- GET /{resourceType}/{id}/$graph — getResourceGraphById: $graph: Return a graph of resources (on one resource instance of any type) — GET form
- POST /{resourceType}/{id}/$graph — runResourceGraphById: $graph: Return a graph of resources (on one resource instance of any type)
- GET /{resourceType}/{id}/$graphql — getResourceGraphqlById: $graphql: Execute a graphql statement (on one resource instance of any type) — GET form
- POST /{resourceType}/{id}/$graphql — runResourceGraphqlById: $graphql: Execute a graphql statement (on one resource instance of any type)
- POST /{resourceType}/{id}/$meta-add — runResourceMetaAddById: $meta-add: Add profiles, tags, and security labels to a resource (on one resource instance of any type)
- POST /{resourceType}/{id}/$meta-delete — runResourceMetaDeleteById: $meta-delete: Delete profiles, tags, and security labels for a resource (on one resource instance of any type)
- GET /{resourceType}/$meta — getResourceMeta: $meta: Access a list of profiles, tags, and security labels (on any resource type) — GET form
- POST /{resourceType}/$meta — runResourceMeta: $meta: Access a list of profiles, tags, and security labels (on any resource type)
- GET /{resourceType}/{id}/$meta — getResourceMetaById: $meta: Access a list of profiles, tags, and security labels (on one resource instance of any type) — GET form
- POST /{resourceType}/{id}/$meta — runResourceMetaById: $meta: Access a list of profiles, tags, and security labels (on one resource instance of any type)
- GET /{resourceType}/$validate — getResourceValidate: $validate: Validate a resource (on any resource type) — GET form
- POST /{resourceType}/$validate — runResourceValidate: $validate: Validate a resource (on any resource type)
- GET /{resourceType}/{id}/$validate — getResourceValidateById: $validate: Validate a resource (on one resource instance of any type) — GET form
- POST /{resourceType}/{id}/$validate — runResourceValidateById: $validate: Validate a resource (on one resource instance of any type)

## RiskAssessment
- GET /RiskAssessment — searchRiskAssessments: search-type: search for RiskAssessment resources
- POST /RiskAssessment — createRiskAssessment: create: create a new RiskAssessment
- PUT /RiskAssessment — updateMatchingRiskAssessments: conditional update: update the RiskAssessment matching the search parameters
- DELETE /RiskAssessment — deleteMatchingRiskAssessments: conditional delete: delete the RiskAssessment resources matching the search parameters
- POST /RiskAssessment/_search — searchRiskAssessmentsByPost: search-type: search for RiskAssessment resources via POST
- GET /RiskAssessment/{id} — getRiskAssessment: read: read the current state of a RiskAssessment
- PUT /RiskAssessment/{id} — updateRiskAssessment: update: update a RiskAssessment, or create it with a client-assigned id
- PATCH /RiskAssessment/{id} — patchRiskAssessment: patch: apply a patch document to a RiskAssessment
- DELETE /RiskAssessment/{id} — deleteRiskAssessment: delete: delete a RiskAssessment
- GET /RiskAssessment/_history — getRiskAssessmentTypeHistory: history-type: retrieve the change history for all RiskAssessment resources
- GET /RiskAssessment/{id}/_history — getRiskAssessmentHistory: history-instance: retrieve the change history of one RiskAssessment
- GET /RiskAssessment/{id}/_history/{vid} — getRiskAssessmentVersion: vread: read a specific version of a RiskAssessment

## RiskEvidenceSynthesis
- GET /RiskEvidenceSynthesis — searchRiskEvidenceSynthesises: search-type: search for RiskEvidenceSynthesis resources
- POST /RiskEvidenceSynthesis — createRiskEvidenceSynthesis: create: create a new RiskEvidenceSynthesis
- PUT /RiskEvidenceSynthesis — updateMatchingRiskEvidenceSynthesises: conditional update: update the RiskEvidenceSynthesis matching the search parameters
- DELETE /RiskEvidenceSynthesis — deleteMatchingRiskEvidenceSynthesises: conditional delete: delete the RiskEvidenceSynthesis resources matching the search parameters
- POST /RiskEvidenceSynthesis/_search — searchRiskEvidenceSynthesisesByPost: search-type: search for RiskEvidenceSynthesis resources via POST
- GET /RiskEvidenceSynthesis/{id} — getRiskEvidenceSynthesis: read: read the current state of a RiskEvidenceSynthesis
- PUT /RiskEvidenceSynthesis/{id} — updateRiskEvidenceSynthesis: update: update a RiskEvidenceSynthesis, or create it with a client-assigned id
- PATCH /RiskEvidenceSynthesis/{id} — patchRiskEvidenceSynthesis: patch: apply a patch document to a RiskEvidenceSynthesis
- DELETE /RiskEvidenceSynthesis/{id} — deleteRiskEvidenceSynthesis: delete: delete a RiskEvidenceSynthesis
- GET /RiskEvidenceSynthesis/_history — getRiskEvidenceSynthesisTypeHistory: history-type: retrieve the change history for all RiskEvidenceSynthesis resources
- GET /RiskEvidenceSynthesis/{id}/_history — getRiskEvidenceSynthesisHistory: history-instance: retrieve the change history of one RiskEvidenceSynthesis
- GET /RiskEvidenceSynthesis/{id}/_history/{vid} — getRiskEvidenceSynthesisVersion: vread: read a specific version of a RiskEvidenceSynthesis

## Schedule
- GET /Schedule — searchSchedules: search-type: search for Schedule resources
- POST /Schedule — createSchedule: create: create a new Schedule
- PUT /Schedule — updateMatchingSchedules: conditional update: update the Schedule matching the search parameters
- DELETE /Schedule — deleteMatchingSchedules: conditional delete: delete the Schedule resources matching the search parameters
- POST /Schedule/_search — searchSchedulesByPost: search-type: search for Schedule resources via POST
- GET /Schedule/{id} — getSchedule: read: read the current state of a Schedule
- PUT /Schedule/{id} — updateSchedule: update: update a Schedule, or create it with a client-assigned id
- PATCH /Schedule/{id} — patchSchedule: patch: apply a patch document to a Schedule
- DELETE /Schedule/{id} — deleteSchedule: delete: delete a Schedule
- GET /Schedule/_history — getScheduleTypeHistory: history-type: retrieve the change history for all Schedule resources
- GET /Schedule/{id}/_history — getScheduleHistory: history-instance: retrieve the change history of one Schedule
- GET /Schedule/{id}/_history/{vid} — getScheduleVersion: vread: read a specific version of a Schedule

## SearchParameter
- GET /SearchParameter — searchSearchParameters: search-type: search for SearchParameter resources
- POST /SearchParameter — createSearchParameter: create: create a new SearchParameter
- PUT /SearchParameter — updateMatchingSearchParameters: conditional update: update the SearchParameter matching the search parameters
- DELETE /SearchParameter — deleteMatchingSearchParameters: conditional delete: delete the SearchParameter resources matching the search parameters
- POST /SearchParameter/_search — searchSearchParametersByPost: search-type: search for SearchParameter resources via POST
- GET /SearchParameter/{id} — getSearchParameter: read: read the current state of a SearchParameter
- PUT /SearchParameter/{id} — updateSearchParameter: update: update a SearchParameter, or create it with a client-assigned id
- PATCH /SearchParameter/{id} — patchSearchParameter: patch: apply a patch document to a SearchParameter
- DELETE /SearchParameter/{id} — deleteSearchParameter: delete: delete a SearchParameter
- GET /SearchParameter/_history — getSearchParameterTypeHistory: history-type: retrieve the change history for all SearchParameter resources
- GET /SearchParameter/{id}/_history — getSearchParameterHistory: history-instance: retrieve the change history of one SearchParameter
- GET /SearchParameter/{id}/_history/{vid} — getSearchParameterVersion: vread: read a specific version of a SearchParameter

## ServiceRequest
- GET /ServiceRequest — searchServiceRequests: search-type: search for ServiceRequest resources
- POST /ServiceRequest — createServiceRequest: create: create a new ServiceRequest
- PUT /ServiceRequest — updateMatchingServiceRequests: conditional update: update the ServiceRequest matching the search parameters
- DELETE /ServiceRequest — deleteMatchingServiceRequests: conditional delete: delete the ServiceRequest resources matching the search parameters
- POST /ServiceRequest/_search — searchServiceRequestsByPost: search-type: search for ServiceRequest resources via POST
- GET /ServiceRequest/{id} — getServiceRequest: read: read the current state of a ServiceRequest
- PUT /ServiceRequest/{id} — updateServiceRequest: update: update a ServiceRequest, or create it with a client-assigned id
- PATCH /ServiceRequest/{id} — patchServiceRequest: patch: apply a patch document to a ServiceRequest
- DELETE /ServiceRequest/{id} — deleteServiceRequest: delete: delete a ServiceRequest
- GET /ServiceRequest/_history — getServiceRequestTypeHistory: history-type: retrieve the change history for all ServiceRequest resources
- GET /ServiceRequest/{id}/_history — getServiceRequestHistory: history-instance: retrieve the change history of one ServiceRequest
- GET /ServiceRequest/{id}/_history/{vid} — getServiceRequestVersion: vread: read a specific version of a ServiceRequest

## Slot
- GET /Slot — searchSlots: search-type: search for Slot resources
- POST /Slot — createSlot: create: create a new Slot
- PUT /Slot — updateMatchingSlots: conditional update: update the Slot matching the search parameters
- DELETE /Slot — deleteMatchingSlots: conditional delete: delete the Slot resources matching the search parameters
- POST /Slot/_search — searchSlotsByPost: search-type: search for Slot resources via POST
- GET /Slot/{id} — getSlot: read: read the current state of a Slot
- PUT /Slot/{id} — updateSlot: update: update a Slot, or create it with a client-assigned id
- PATCH /Slot/{id} — patchSlot: patch: apply a patch document to a Slot
- DELETE /Slot/{id} — deleteSlot: delete: delete a Slot
- GET /Slot/_history — getSlotTypeHistory: history-type: retrieve the change history for all Slot resources
- GET /Slot/{id}/_history — getSlotHistory: history-instance: retrieve the change history of one Slot
- GET /Slot/{id}/_history/{vid} — getSlotVersion: vread: read a specific version of a Slot

## Specimen
- GET /Specimen — searchSpecimens: search-type: search for Specimen resources
- POST /Specimen — createSpecimen: create: create a new Specimen
- PUT /Specimen — updateMatchingSpecimens: conditional update: update the Specimen matching the search parameters
- DELETE /Specimen — deleteMatchingSpecimens: conditional delete: delete the Specimen resources matching the search parameters
- POST /Specimen/_search — searchSpecimensByPost: search-type: search for Specimen resources via POST
- GET /Specimen/{id} — getSpecimen: read: read the current state of a Specimen
- PUT /Specimen/{id} — updateSpecimen: update: update a Specimen, or create it with a client-assigned id
- PATCH /Specimen/{id} — patchSpecimen: patch: apply a patch document to a Specimen
- DELETE /Specimen/{id} — deleteSpecimen: delete: delete a Specimen
- GET /Specimen/_history — getSpecimenTypeHistory: history-type: retrieve the change history for all Specimen resources
- GET /Specimen/{id}/_history — getSpecimenHistory: history-instance: retrieve the change history of one Specimen
- GET /Specimen/{id}/_history/{vid} — getSpecimenVersion: vread: read a specific version of a Specimen

## SpecimenDefinition
- GET /SpecimenDefinition — searchSpecimenDefinitions: search-type: search for SpecimenDefinition resources
- POST /SpecimenDefinition — createSpecimenDefinition: create: create a new SpecimenDefinition
- PUT /SpecimenDefinition — updateMatchingSpecimenDefinitions: conditional update: update the SpecimenDefinition matching the search parameters
- DELETE /SpecimenDefinition — deleteMatchingSpecimenDefinitions: conditional delete: delete the SpecimenDefinition resources matching the search parameters
- POST /SpecimenDefinition/_search — searchSpecimenDefinitionsByPost: search-type: search for SpecimenDefinition resources via POST
- GET /SpecimenDefinition/{id} — getSpecimenDefinition: read: read the current state of a SpecimenDefinition
- PUT /SpecimenDefinition/{id} — updateSpecimenDefinition: update: update a SpecimenDefinition, or create it with a client-assigned id
- PATCH /SpecimenDefinition/{id} — patchSpecimenDefinition: patch: apply a patch document to a SpecimenDefinition
- DELETE /SpecimenDefinition/{id} — deleteSpecimenDefinition: delete: delete a SpecimenDefinition
- GET /SpecimenDefinition/_history — getSpecimenDefinitionTypeHistory: history-type: retrieve the change history for all SpecimenDefinition resources
- GET /SpecimenDefinition/{id}/_history — getSpecimenDefinitionHistory: history-instance: retrieve the change history of one SpecimenDefinition
- GET /SpecimenDefinition/{id}/_history/{vid} — getSpecimenDefinitionVersion: vread: read a specific version of a SpecimenDefinition

## StructureDefinition
- GET /StructureDefinition — searchStructureDefinitions: search-type: search for StructureDefinition resources
- POST /StructureDefinition — createStructureDefinition: create: create a new StructureDefinition
- PUT /StructureDefinition — updateMatchingStructureDefinitions: conditional update: update the StructureDefinition matching the search parameters
- DELETE /StructureDefinition — deleteMatchingStructureDefinitions: conditional delete: delete the StructureDefinition resources matching the search parameters
- POST /StructureDefinition/_search — searchStructureDefinitionsByPost: search-type: search for StructureDefinition resources via POST
- GET /StructureDefinition/{id} — getStructureDefinition: read: read the current state of a StructureDefinition
- PUT /StructureDefinition/{id} — updateStructureDefinition: update: update a StructureDefinition, or create it with a client-assigned id
- PATCH /StructureDefinition/{id} — patchStructureDefinition: patch: apply a patch document to a StructureDefinition
- DELETE /StructureDefinition/{id} — deleteStructureDefinition: delete: delete a StructureDefinition
- GET /StructureDefinition/_history — getStructureDefinitionTypeHistory: history-type: retrieve the change history for all StructureDefinition resources
- GET /StructureDefinition/{id}/_history — getStructureDefinitionHistory: history-instance: retrieve the change history of one StructureDefinition
- GET /StructureDefinition/{id}/_history/{vid} — getStructureDefinitionVersion: vread: read a specific version of a StructureDefinition
- GET /StructureDefinition/$questionnaire — getStructureDefinitionQuestionnaire: $questionnaire: Build Questionnaire (on the StructureDefinition resource type) — GET form
- POST /StructureDefinition/$questionnaire — runStructureDefinitionQuestionnaire: $questionnaire: Build Questionnaire (on the StructureDefinition resource type)
- GET /StructureDefinition/{id}/$questionnaire — getStructureDefinitionQuestionnaireById: $questionnaire: Build Questionnaire (on one StructureDefinition instance) — GET form
- POST /StructureDefinition/{id}/$questionnaire — runStructureDefinitionQuestionnaireById: $questionnaire: Build Questionnaire (on one StructureDefinition instance)
- GET /StructureDefinition/$snapshot — getStructureDefinitionSnapshot: $snapshot: Generate Snapshot (on the StructureDefinition resource type) — GET form
- POST /StructureDefinition/$snapshot — runStructureDefinitionSnapshot: $snapshot: Generate Snapshot (on the StructureDefinition resource type)
- GET /StructureDefinition/{id}/$snapshot — getStructureDefinitionSnapshotById: $snapshot: Generate Snapshot (on one StructureDefinition instance) — GET form
- POST /StructureDefinition/{id}/$snapshot — runStructureDefinitionSnapshotById: $snapshot: Generate Snapshot (on one StructureDefinition instance)

## StructureMap
- GET /StructureMap — searchStructureMaps: search-type: search for StructureMap resources
- POST /StructureMap — createStructureMap: create: create a new StructureMap
- PUT /StructureMap — updateMatchingStructureMaps: conditional update: update the StructureMap matching the search parameters
- DELETE /StructureMap — deleteMatchingStructureMaps: conditional delete: delete the StructureMap resources matching the search parameters
- POST /StructureMap/_search — searchStructureMapsByPost: search-type: search for StructureMap resources via POST
- GET /StructureMap/{id} — getStructureMap: read: read the current state of a StructureMap
- PUT /StructureMap/{id} — updateStructureMap: update: update a StructureMap, or create it with a client-assigned id
- PATCH /StructureMap/{id} — patchStructureMap: patch: apply a patch document to a StructureMap
- DELETE /StructureMap/{id} — deleteStructureMap: delete: delete a StructureMap
- GET /StructureMap/_history — getStructureMapTypeHistory: history-type: retrieve the change history for all StructureMap resources
- GET /StructureMap/{id}/_history — getStructureMapHistory: history-instance: retrieve the change history of one StructureMap
- GET /StructureMap/{id}/_history/{vid} — getStructureMapVersion: vread: read a specific version of a StructureMap
- POST /StructureMap/$transform — runStructureMapTransform: $transform: Model Instance Transformation (on the StructureMap resource type)
- POST /StructureMap/{id}/$transform — runStructureMapTransformById: $transform: Model Instance Transformation (on one StructureMap instance)

## Subscription
- GET /Subscription — searchSubscriptions: search-type: search for Subscription resources
- POST /Subscription — createSubscription: create: create a new Subscription
- PUT /Subscription — updateMatchingSubscriptions: conditional update: update the Subscription matching the search parameters
- DELETE /Subscription — deleteMatchingSubscriptions: conditional delete: delete the Subscription resources matching the search parameters
- POST /Subscription/_search — searchSubscriptionsByPost: search-type: search for Subscription resources via POST
- GET /Subscription/{id} — getSubscription: read: read the current state of a Subscription
- PUT /Subscription/{id} — updateSubscription: update: update a Subscription, or create it with a client-assigned id
- PATCH /Subscription/{id} — patchSubscription: patch: apply a patch document to a Subscription
- DELETE /Subscription/{id} — deleteSubscription: delete: delete a Subscription
- GET /Subscription/_history — getSubscriptionTypeHistory: history-type: retrieve the change history for all Subscription resources
- GET /Subscription/{id}/_history — getSubscriptionHistory: history-instance: retrieve the change history of one Subscription
- GET /Subscription/{id}/_history/{vid} — getSubscriptionVersion: vread: read a specific version of a Subscription

## Substance
- GET /Substance — searchSubstances: search-type: search for Substance resources
- POST /Substance — createSubstance: create: create a new Substance
- PUT /Substance — updateMatchingSubstances: conditional update: update the Substance matching the search parameters
- DELETE /Substance — deleteMatchingSubstances: conditional delete: delete the Substance resources matching the search parameters
- POST /Substance/_search — searchSubstancesByPost: search-type: search for Substance resources via POST
- GET /Substance/{id} — getSubstance: read: read the current state of a Substance
- PUT /Substance/{id} — updateSubstance: update: update a Substance, or create it with a client-assigned id
- PATCH /Substance/{id} — patchSubstance: patch: apply a patch document to a Substance
- DELETE /Substance/{id} — deleteSubstance: delete: delete a Substance
- GET /Substance/_history — getSubstanceTypeHistory: history-type: retrieve the change history for all Substance resources
- GET /Substance/{id}/_history — getSubstanceHistory: history-instance: retrieve the change history of one Substance
- GET /Substance/{id}/_history/{vid} — getSubstanceVersion: vread: read a specific version of a Substance

## SubstanceNucleicAcid
- GET /SubstanceNucleicAcid — searchSubstanceNucleicAcids: search-type: search for SubstanceNucleicAcid resources
- POST /SubstanceNucleicAcid — createSubstanceNucleicAcid: create: create a new SubstanceNucleicAcid
- PUT /SubstanceNucleicAcid — updateMatchingSubstanceNucleicAcids: conditional update: update the SubstanceNucleicAcid matching the search parameters
- DELETE /SubstanceNucleicAcid — deleteMatchingSubstanceNucleicAcids: conditional delete: delete the SubstanceNucleicAcid resources matching the search parameters
- POST /SubstanceNucleicAcid/_search — searchSubstanceNucleicAcidsByPost: search-type: search for SubstanceNucleicAcid resources via POST
- GET /SubstanceNucleicAcid/{id} — getSubstanceNucleicAcid: read: read the current state of a SubstanceNucleicAcid
- PUT /SubstanceNucleicAcid/{id} — updateSubstanceNucleicAcid: update: update a SubstanceNucleicAcid, or create it with a client-assigned id
- PATCH /SubstanceNucleicAcid/{id} — patchSubstanceNucleicAcid: patch: apply a patch document to a SubstanceNucleicAcid
- DELETE /SubstanceNucleicAcid/{id} — deleteSubstanceNucleicAcid: delete: delete a SubstanceNucleicAcid
- GET /SubstanceNucleicAcid/_history — getSubstanceNucleicAcidTypeHistory: history-type: retrieve the change history for all SubstanceNucleicAcid resources
- GET /SubstanceNucleicAcid/{id}/_history — getSubstanceNucleicAcidHistory: history-instance: retrieve the change history of one SubstanceNucleicAcid
- GET /SubstanceNucleicAcid/{id}/_history/{vid} — getSubstanceNucleicAcidVersion: vread: read a specific version of a SubstanceNucleicAcid

## SubstancePolymer
- GET /SubstancePolymer — searchSubstancePolymers: search-type: search for SubstancePolymer resources
- POST /SubstancePolymer — createSubstancePolymer: create: create a new SubstancePolymer
- PUT /SubstancePolymer — updateMatchingSubstancePolymers: conditional update: update the SubstancePolymer matching the search parameters
- DELETE /SubstancePolymer — deleteMatchingSubstancePolymers: conditional delete: delete the SubstancePolymer resources matching the search parameters
- POST /SubstancePolymer/_search — searchSubstancePolymersByPost: search-type: search for SubstancePolymer resources via POST
- GET /SubstancePolymer/{id} — getSubstancePolymer: read: read the current state of a SubstancePolymer
- PUT /SubstancePolymer/{id} — updateSubstancePolymer: update: update a SubstancePolymer, or create it with a client-assigned id
- PATCH /SubstancePolymer/{id} — patchSubstancePolymer: patch: apply a patch document to a SubstancePolymer
- DELETE /SubstancePolymer/{id} — deleteSubstancePolymer: delete: delete a SubstancePolymer
- GET /SubstancePolymer/_history — getSubstancePolymerTypeHistory: history-type: retrieve the change history for all SubstancePolymer resources
- GET /SubstancePolymer/{id}/_history — getSubstancePolymerHistory: history-instance: retrieve the change history of one SubstancePolymer
- GET /SubstancePolymer/{id}/_history/{vid} — getSubstancePolymerVersion: vread: read a specific version of a SubstancePolymer

## SubstanceProtein
- GET /SubstanceProtein — searchSubstanceProteins: search-type: search for SubstanceProtein resources
- POST /SubstanceProtein — createSubstanceProtein: create: create a new SubstanceProtein
- PUT /SubstanceProtein — updateMatchingSubstanceProteins: conditional update: update the SubstanceProtein matching the search parameters
- DELETE /SubstanceProtein — deleteMatchingSubstanceProteins: conditional delete: delete the SubstanceProtein resources matching the search parameters
- POST /SubstanceProtein/_search — searchSubstanceProteinsByPost: search-type: search for SubstanceProtein resources via POST
- GET /SubstanceProtein/{id} — getSubstanceProtein: read: read the current state of a SubstanceProtein
- PUT /SubstanceProtein/{id} — updateSubstanceProtein: update: update a SubstanceProtein, or create it with a client-assigned id
- PATCH /SubstanceProtein/{id} — patchSubstanceProtein: patch: apply a patch document to a SubstanceProtein
- DELETE /SubstanceProtein/{id} — deleteSubstanceProtein: delete: delete a SubstanceProtein
- GET /SubstanceProtein/_history — getSubstanceProteinTypeHistory: history-type: retrieve the change history for all SubstanceProtein resources
- GET /SubstanceProtein/{id}/_history — getSubstanceProteinHistory: history-instance: retrieve the change history of one SubstanceProtein
- GET /SubstanceProtein/{id}/_history/{vid} — getSubstanceProteinVersion: vread: read a specific version of a SubstanceProtein

## SubstanceReferenceInformation
- GET /SubstanceReferenceInformation — searchSubstanceReferenceInformations: search-type: search for SubstanceReferenceInformation resources
- POST /SubstanceReferenceInformation — createSubstanceReferenceInformation: create: create a new SubstanceReferenceInformation
- PUT /SubstanceReferenceInformation — updateMatchingSubstanceReferenceInformations: conditional update: update the SubstanceReferenceInformation matching the search parameters
- DELETE /SubstanceReferenceInformation — deleteMatchingSubstanceReferenceInformations: conditional delete: delete the SubstanceReferenceInformation resources matching the search parameters
- POST /SubstanceReferenceInformation/_search — searchSubstanceReferenceInformationsByPost: search-type: search for SubstanceReferenceInformation resources via POST
- GET /SubstanceReferenceInformation/{id} — getSubstanceReferenceInformation: read: read the current state of a SubstanceReferenceInformation
- PUT /SubstanceReferenceInformation/{id} — updateSubstanceReferenceInformation: update: update a SubstanceReferenceInformation, or create it with a client-assigned id
- PATCH /SubstanceReferenceInformation/{id} — patchSubstanceReferenceInformation: patch: apply a patch document to a SubstanceReferenceInformation
- DELETE /SubstanceReferenceInformation/{id} — deleteSubstanceReferenceInformation: delete: delete a SubstanceReferenceInformation
- GET /SubstanceReferenceInformation/_history — getSubstanceReferenceInformationTypeHistory: history-type: retrieve the change history for all SubstanceReferenceInformation resources
- GET /SubstanceReferenceInformation/{id}/_history — getSubstanceReferenceInformationHistory: history-instance: retrieve the change history of one SubstanceReferenceInformation
- GET /SubstanceReferenceInformation/{id}/_history/{vid} — getSubstanceReferenceInformationVersion: vread: read a specific version of a SubstanceReferenceInformation

## SubstanceSourceMaterial
- GET /SubstanceSourceMaterial — searchSubstanceSourceMaterials: search-type: search for SubstanceSourceMaterial resources
- POST /SubstanceSourceMaterial — createSubstanceSourceMaterial: create: create a new SubstanceSourceMaterial
- PUT /SubstanceSourceMaterial — updateMatchingSubstanceSourceMaterials: conditional update: update the SubstanceSourceMaterial matching the search parameters
- DELETE /SubstanceSourceMaterial — deleteMatchingSubstanceSourceMaterials: conditional delete: delete the SubstanceSourceMaterial resources matching the search parameters
- POST /SubstanceSourceMaterial/_search — searchSubstanceSourceMaterialsByPost: search-type: search for SubstanceSourceMaterial resources via POST
- GET /SubstanceSourceMaterial/{id} — getSubstanceSourceMaterial: read: read the current state of a SubstanceSourceMaterial
- PUT /SubstanceSourceMaterial/{id} — updateSubstanceSourceMaterial: update: update a SubstanceSourceMaterial, or create it with a client-assigned id
- PATCH /SubstanceSourceMaterial/{id} — patchSubstanceSourceMaterial: patch: apply a patch document to a SubstanceSourceMaterial
- DELETE /SubstanceSourceMaterial/{id} — deleteSubstanceSourceMaterial: delete: delete a SubstanceSourceMaterial
- GET /SubstanceSourceMaterial/_history — getSubstanceSourceMaterialTypeHistory: history-type: retrieve the change history for all SubstanceSourceMaterial resources
- GET /SubstanceSourceMaterial/{id}/_history — getSubstanceSourceMaterialHistory: history-instance: retrieve the change history of one SubstanceSourceMaterial
- GET /SubstanceSourceMaterial/{id}/_history/{vid} — getSubstanceSourceMaterialVersion: vread: read a specific version of a SubstanceSourceMaterial

## SubstanceSpecification
- GET /SubstanceSpecification — searchSubstanceSpecifications: search-type: search for SubstanceSpecification resources
- POST /SubstanceSpecification — createSubstanceSpecification: create: create a new SubstanceSpecification
- PUT /SubstanceSpecification — updateMatchingSubstanceSpecifications: conditional update: update the SubstanceSpecification matching the search parameters
- DELETE /SubstanceSpecification — deleteMatchingSubstanceSpecifications: conditional delete: delete the SubstanceSpecification resources matching the search parameters
- POST /SubstanceSpecification/_search — searchSubstanceSpecificationsByPost: search-type: search for SubstanceSpecification resources via POST
- GET /SubstanceSpecification/{id} — getSubstanceSpecification: read: read the current state of a SubstanceSpecification
- PUT /SubstanceSpecification/{id} — updateSubstanceSpecification: update: update a SubstanceSpecification, or create it with a client-assigned id
- PATCH /SubstanceSpecification/{id} — patchSubstanceSpecification: patch: apply a patch document to a SubstanceSpecification
- DELETE /SubstanceSpecification/{id} — deleteSubstanceSpecification: delete: delete a SubstanceSpecification
- GET /SubstanceSpecification/_history — getSubstanceSpecificationTypeHistory: history-type: retrieve the change history for all SubstanceSpecification resources
- GET /SubstanceSpecification/{id}/_history — getSubstanceSpecificationHistory: history-instance: retrieve the change history of one SubstanceSpecification
- GET /SubstanceSpecification/{id}/_history/{vid} — getSubstanceSpecificationVersion: vread: read a specific version of a SubstanceSpecification

## SupplyDelivery
- GET /SupplyDelivery — searchSupplyDeliveries: search-type: search for SupplyDelivery resources
- POST /SupplyDelivery — createSupplyDelivery: create: create a new SupplyDelivery
- PUT /SupplyDelivery — updateMatchingSupplyDeliveries: conditional update: update the SupplyDelivery matching the search parameters
- DELETE /SupplyDelivery — deleteMatchingSupplyDeliveries: conditional delete: delete the SupplyDelivery resources matching the search parameters
- POST /SupplyDelivery/_search — searchSupplyDeliveriesByPost: search-type: search for SupplyDelivery resources via POST
- GET /SupplyDelivery/{id} — getSupplyDelivery: read: read the current state of a SupplyDelivery
- PUT /SupplyDelivery/{id} — updateSupplyDelivery: update: update a SupplyDelivery, or create it with a client-assigned id
- PATCH /SupplyDelivery/{id} — patchSupplyDelivery: patch: apply a patch document to a SupplyDelivery
- DELETE /SupplyDelivery/{id} — deleteSupplyDelivery: delete: delete a SupplyDelivery
- GET /SupplyDelivery/_history — getSupplyDeliveryTypeHistory: history-type: retrieve the change history for all SupplyDelivery resources
- GET /SupplyDelivery/{id}/_history — getSupplyDeliveryHistory: history-instance: retrieve the change history of one SupplyDelivery
- GET /SupplyDelivery/{id}/_history/{vid} — getSupplyDeliveryVersion: vread: read a specific version of a SupplyDelivery

## SupplyRequest
- GET /SupplyRequest — searchSupplyRequests: search-type: search for SupplyRequest resources
- POST /SupplyRequest — createSupplyRequest: create: create a new SupplyRequest
- PUT /SupplyRequest — updateMatchingSupplyRequests: conditional update: update the SupplyRequest matching the search parameters
- DELETE /SupplyRequest — deleteMatchingSupplyRequests: conditional delete: delete the SupplyRequest resources matching the search parameters
- POST /SupplyRequest/_search — searchSupplyRequestsByPost: search-type: search for SupplyRequest resources via POST
- GET /SupplyRequest/{id} — getSupplyRequest: read: read the current state of a SupplyRequest
- PUT /SupplyRequest/{id} — updateSupplyRequest: update: update a SupplyRequest, or create it with a client-assigned id
- PATCH /SupplyRequest/{id} — patchSupplyRequest: patch: apply a patch document to a SupplyRequest
- DELETE /SupplyRequest/{id} — deleteSupplyRequest: delete: delete a SupplyRequest
- GET /SupplyRequest/_history — getSupplyRequestTypeHistory: history-type: retrieve the change history for all SupplyRequest resources
- GET /SupplyRequest/{id}/_history — getSupplyRequestHistory: history-instance: retrieve the change history of one SupplyRequest
- GET /SupplyRequest/{id}/_history/{vid} — getSupplyRequestVersion: vread: read a specific version of a SupplyRequest

## System
- GET /metadata — getServerCapabilities: capabilities: retrieve the server CapabilityStatement
- GET / — searchAll: search-system: search across all resource types
- POST / — createTransactionBundle: transaction/batch: submit a Bundle of interactions to the base endpoint
- POST /_search — searchAllByPost: search-system: search across all resource types via POST
- GET /_history — getSystemHistory: history-system: retrieve the change history across all resources
- GET /$versions — getSystemVersions: $versions: Discover what versions a server supports (on the whole server) — GET form
- POST /$versions — runSystemVersions: $versions: Discover what versions a server supports (on the whole server)
- POST /$closure — runSystemClosure: $closure: Closure Table Maintenance (on the whole server)
- GET /$data-requirements — getSystemDataRequirements: $data-requirements: Data Requirements (on the whole server) — GET form
- POST /$data-requirements — runSystemDataRequirements: $data-requirements: Data Requirements (on the whole server)
- POST /$process-message — runSystemProcessMessage: $process-message: Process Message (on the whole server)
- POST /$convert — runSystemConvert: $convert: Convert from one form to another (on the whole server)
- GET /$graphql — getSystemGraphql: $graphql: Execute a graphql statement (on the whole server) — GET form
- POST /$graphql — runSystemGraphql: $graphql: Execute a graphql statement (on the whole server)
- GET /$meta — getSystemMeta: $meta: Access a list of profiles, tags, and security labels (on the whole server) — GET form
- POST /$meta — runSystemMeta: $meta: Access a list of profiles, tags, and security labels (on the whole server)

## Task
- GET /Task — searchTasks: search-type: search for Task resources
- POST /Task — createTask: create: create a new Task
- PUT /Task — updateMatchingTasks: conditional update: update the Task matching the search parameters
- DELETE /Task — deleteMatchingTasks: conditional delete: delete the Task resources matching the search parameters
- POST /Task/_search — searchTasksByPost: search-type: search for Task resources via POST
- GET /Task/{id} — getTask: read: read the current state of a Task
- PUT /Task/{id} — updateTask: update: update a Task, or create it with a client-assigned id
- PATCH /Task/{id} — patchTask: patch: apply a patch document to a Task
- DELETE /Task/{id} — deleteTask: delete: delete a Task
- GET /Task/_history — getTaskTypeHistory: history-type: retrieve the change history for all Task resources
- GET /Task/{id}/_history — getTaskHistory: history-instance: retrieve the change history of one Task
- GET /Task/{id}/_history/{vid} — getTaskVersion: vread: read a specific version of a Task

## TerminologyCapabilities
- GET /TerminologyCapabilities — searchTerminologyCapabilitieses: search-type: search for TerminologyCapabilities resources
- POST /TerminologyCapabilities — createTerminologyCapabilities: create: create a new TerminologyCapabilities
- PUT /TerminologyCapabilities — updateMatchingTerminologyCapabilitieses: conditional update: update the TerminologyCapabilities matching the search parameters
- DELETE /TerminologyCapabilities — deleteMatchingTerminologyCapabilitieses: conditional delete: delete the TerminologyCapabilities resources matching the search parameters
- POST /TerminologyCapabilities/_search — searchTerminologyCapabilitiesesByPost: search-type: search for TerminologyCapabilities resources via POST
- GET /TerminologyCapabilities/{id} — getTerminologyCapabilities: read: read the current state of a TerminologyCapabilities
- PUT /TerminologyCapabilities/{id} — updateTerminologyCapabilities: update: update a TerminologyCapabilities, or create it with a client-assigned id
- PATCH /TerminologyCapabilities/{id} — patchTerminologyCapabilities: patch: apply a patch document to a TerminologyCapabilities
- DELETE /TerminologyCapabilities/{id} — deleteTerminologyCapabilities: delete: delete a TerminologyCapabilities
- GET /TerminologyCapabilities/_history — getTerminologyCapabilitiesTypeHistory: history-type: retrieve the change history for all TerminologyCapabilities resources
- GET /TerminologyCapabilities/{id}/_history — getTerminologyCapabilitiesHistory: history-instance: retrieve the change history of one TerminologyCapabilities
- GET /TerminologyCapabilities/{id}/_history/{vid} — getTerminologyCapabilitiesVersion: vread: read a specific version of a TerminologyCapabilities

## TestReport
- GET /TestReport — searchTestReports: search-type: search for TestReport resources
- POST /TestReport — createTestReport: create: create a new TestReport
- PUT /TestReport — updateMatchingTestReports: conditional update: update the TestReport matching the search parameters
- DELETE /TestReport — deleteMatchingTestReports: conditional delete: delete the TestReport resources matching the search parameters
- POST /TestReport/_search — searchTestReportsByPost: search-type: search for TestReport resources via POST
- GET /TestReport/{id} — getTestReport: read: read the current state of a TestReport
- PUT /TestReport/{id} — updateTestReport: update: update a TestReport, or create it with a client-assigned id
- PATCH /TestReport/{id} — patchTestReport: patch: apply a patch document to a TestReport
- DELETE /TestReport/{id} — deleteTestReport: delete: delete a TestReport
- GET /TestReport/_history — getTestReportTypeHistory: history-type: retrieve the change history for all TestReport resources
- GET /TestReport/{id}/_history — getTestReportHistory: history-instance: retrieve the change history of one TestReport
- GET /TestReport/{id}/_history/{vid} — getTestReportVersion: vread: read a specific version of a TestReport

## TestScript
- GET /TestScript — searchTestScripts: search-type: search for TestScript resources
- POST /TestScript — createTestScript: create: create a new TestScript
- PUT /TestScript — updateMatchingTestScripts: conditional update: update the TestScript matching the search parameters
- DELETE /TestScript — deleteMatchingTestScripts: conditional delete: delete the TestScript resources matching the search parameters
- POST /TestScript/_search — searchTestScriptsByPost: search-type: search for TestScript resources via POST
- GET /TestScript/{id} — getTestScript: read: read the current state of a TestScript
- PUT /TestScript/{id} — updateTestScript: update: update a TestScript, or create it with a client-assigned id
- PATCH /TestScript/{id} — patchTestScript: patch: apply a patch document to a TestScript
- DELETE /TestScript/{id} — deleteTestScript: delete: delete a TestScript
- GET /TestScript/_history — getTestScriptTypeHistory: history-type: retrieve the change history for all TestScript resources
- GET /TestScript/{id}/_history — getTestScriptHistory: history-instance: retrieve the change history of one TestScript
- GET /TestScript/{id}/_history/{vid} — getTestScriptVersion: vread: read a specific version of a TestScript

## ValueSet
- GET /ValueSet — searchValueSets: search-type: search for ValueSet resources
- POST /ValueSet — createValueSet: create: create a new ValueSet
- PUT /ValueSet — updateMatchingValueSets: conditional update: update the ValueSet matching the search parameters
- DELETE /ValueSet — deleteMatchingValueSets: conditional delete: delete the ValueSet resources matching the search parameters
- POST /ValueSet/_search — searchValueSetsByPost: search-type: search for ValueSet resources via POST
- GET /ValueSet/{id} — getValueSet: read: read the current state of a ValueSet
- PUT /ValueSet/{id} — updateValueSet: update: update a ValueSet, or create it with a client-assigned id
- PATCH /ValueSet/{id} — patchValueSet: patch: apply a patch document to a ValueSet
- DELETE /ValueSet/{id} — deleteValueSet: delete: delete a ValueSet
- GET /ValueSet/_history — getValueSetTypeHistory: history-type: retrieve the change history for all ValueSet resources
- GET /ValueSet/{id}/_history — getValueSetHistory: history-instance: retrieve the change history of one ValueSet
- GET /ValueSet/{id}/_history/{vid} — getValueSetVersion: vread: read a specific version of a ValueSet
- GET /ValueSet/$expand — getValueSetExpand: $expand: Value Set Expansion (on the ValueSet resource type) — GET form
- POST /ValueSet/$expand — runValueSetExpand: $expand: Value Set Expansion (on the ValueSet resource type)
- GET /ValueSet/{id}/$expand — getValueSetExpandById: $expand: Value Set Expansion (on one ValueSet instance) — GET form
- POST /ValueSet/{id}/$expand — runValueSetExpandById: $expand: Value Set Expansion (on one ValueSet instance)
- GET /ValueSet/$validate-code — getValueSetValidateCode: $validate-code: Value Set based Validation (on the ValueSet resource type) — GET form
- POST /ValueSet/$validate-code — runValueSetValidateCode: $validate-code: Value Set based Validation (on the ValueSet resource type)
- GET /ValueSet/{id}/$validate-code — getValueSetValidateCodeById: $validate-code: Value Set based Validation (on one ValueSet instance) — GET form
- POST /ValueSet/{id}/$validate-code — runValueSetValidateCodeById: $validate-code: Value Set based Validation (on one ValueSet instance)

## VerificationResult
- GET /VerificationResult — searchVerificationResults: search-type: search for VerificationResult resources
- POST /VerificationResult — createVerificationResult: create: create a new VerificationResult
- PUT /VerificationResult — updateMatchingVerificationResults: conditional update: update the VerificationResult matching the search parameters
- DELETE /VerificationResult — deleteMatchingVerificationResults: conditional delete: delete the VerificationResult resources matching the search parameters
- POST /VerificationResult/_search — searchVerificationResultsByPost: search-type: search for VerificationResult resources via POST
- GET /VerificationResult/{id} — getVerificationResult: read: read the current state of a VerificationResult
- PUT /VerificationResult/{id} — updateVerificationResult: update: update a VerificationResult, or create it with a client-assigned id
- PATCH /VerificationResult/{id} — patchVerificationResult: patch: apply a patch document to a VerificationResult
- DELETE /VerificationResult/{id} — deleteVerificationResult: delete: delete a VerificationResult
- GET /VerificationResult/_history — getVerificationResultTypeHistory: history-type: retrieve the change history for all VerificationResult resources
- GET /VerificationResult/{id}/_history — getVerificationResultHistory: history-instance: retrieve the change history of one VerificationResult
- GET /VerificationResult/{id}/_history/{vid} — getVerificationResultVersion: vread: read a specific version of a VerificationResult

## VisionPrescription
- GET /VisionPrescription — searchVisionPrescriptions: search-type: search for VisionPrescription resources
- POST /VisionPrescription — createVisionPrescription: create: create a new VisionPrescription
- PUT /VisionPrescription — updateMatchingVisionPrescriptions: conditional update: update the VisionPrescription matching the search parameters
- DELETE /VisionPrescription — deleteMatchingVisionPrescriptions: conditional delete: delete the VisionPrescription resources matching the search parameters
- POST /VisionPrescription/_search — searchVisionPrescriptionsByPost: search-type: search for VisionPrescription resources via POST
- GET /VisionPrescription/{id} — getVisionPrescription: read: read the current state of a VisionPrescription
- PUT /VisionPrescription/{id} — updateVisionPrescription: update: update a VisionPrescription, or create it with a client-assigned id
- PATCH /VisionPrescription/{id} — patchVisionPrescription: patch: apply a patch document to a VisionPrescription
- DELETE /VisionPrescription/{id} — deleteVisionPrescription: delete: delete a VisionPrescription
- GET /VisionPrescription/_history — getVisionPrescriptionTypeHistory: history-type: retrieve the change history for all VisionPrescription resources
- GET /VisionPrescription/{id}/_history — getVisionPrescriptionHistory: history-instance: retrieve the change history of one VisionPrescription
- GET /VisionPrescription/{id}/_history/{vid} — getVisionPrescriptionVersion: vread: read a specific version of a VisionPrescription
