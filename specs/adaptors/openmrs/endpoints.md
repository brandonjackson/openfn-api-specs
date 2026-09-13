# OpenMRS API Docs (openmrs) v2.5.14

<!-- derived from openapi.json by `pnpm specs index openmrs` — do not edit by hand -->

base: https://demo.standard.mybahmni.in/openmrs/ws/rest/v1 | auth: http/basic | 554 operations in 99 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## administrationlinks
- GET /administrationlinks — getAllAdministrationLinkses: Fetch all non-retired
- GET /administrationlinks/{uuid} — getAdministrationLinks: Fetch by uuid

## admissionLocation
- GET /admissionLocation — getAllAdmissionLocations: Fetch all non-retired admissionLocation resources or perform search
- POST /admissionLocation — createAdmissionLocation: Create with properties in request
- GET /admissionLocation/{uuid} — getAdmissionLocation: Fetch by uuid
- POST /admissionLocation/{uuid} — updateAdmissionLocation: Edit with given uuid, only modifying properties in request
- DELETE /admissionLocation/{uuid} — deleteAdmissionLocation: Delete or purge resource by uuid

## alert
- GET /alert — getAllAlerts: Fetch all non-retired alert resources or perform search
- POST /alert — createAlert: Create with properties in request
- GET /alert/{uuid} — getAlert: Fetch by uuid
- POST /alert/{uuid} — updateAlert: Edit with given uuid, only modifying properties in request
- DELETE /alert/{uuid} — deleteAlert: Delete or purge resource by uuid
- GET /alert/{parent-uuid}/recipient — getAllAlertRecipients: Fetch all non-retired recipient subresources
- POST /alert/{parent-uuid}/recipient — createAlertRecipient: Create recipient subresource with properties in request
- GET /alert/{parent-uuid}/recipient/{uuid} — getAlertRecipient: Fetch recipient subresources by uuid
- POST /alert/{parent-uuid}/recipient/{uuid} — updateAlertRecipient: edit recipient subresource with given uuid, only modifying properties in request
- DELETE /alert/{parent-uuid}/recipient/{uuid} — deleteAlertRecipient: Delete or purge resource by uuid

## app
- GET /app — getAllApps: Fetch all non-retired
- GET /app/{uuid} — getApp: Fetch by uuid

## apptemplate
- GET /apptemplate — getAllAppTemplates: Fetch all non-retired
- GET /apptemplate/{uuid} — getAppTemplate: Fetch by uuid

## bahmniconceptanswer
- GET /bahmniconceptanswer — getAllBahmniConceptAnswers: Search for bahmniconceptanswer

## bahmniorderset
- GET /bahmniorderset — getAllBahmniOrderSets: Fetch all non-retired bahmniorderset resources or perform search
- POST /bahmniorderset — createBahmniOrderSet: Create with properties in request
- GET /bahmniorderset/{uuid} — getBahmniOrderSet: Fetch by uuid
- POST /bahmniorderset/{uuid} — updateBahmniOrderSet: Edit with given uuid, only modifying properties in request
- DELETE /bahmniorderset/{uuid} — deleteBahmniOrderSet: Delete or purge resource by uuid
- GET /bahmniorderset/{parent-uuid}/bahmniordersetmember — getAllBahmniOrderSetMemberSubs: Fetch all non-retired bahmniordersetmember subresources
- POST /bahmniorderset/{parent-uuid}/bahmniordersetmember — createBahmniOrderSetMemberSub: Create bahmniordersetmember subresource with properties in request
- GET /bahmniorderset/{parent-uuid}/bahmniordersetmember/{uuid} — getBahmniOrderSetMemberSub: Fetch bahmniordersetmember subresources by uuid
- POST /bahmniorderset/{parent-uuid}/bahmniordersetmember/{uuid} — updateBahmniOrderSetMemberSub: edit bahmniordersetmember subresource with given uuid, only modifying properties in request
- DELETE /bahmniorderset/{parent-uuid}/bahmniordersetmember/{uuid} — deleteBahmniOrderSetMemberSub: Delete or purge resource by uuid

## bahmniprogramenrollment
- GET /bahmniprogramenrollment — getAllBahmniProgramEnrollments: Search for bahmniprogramenrollment
- POST /bahmniprogramenrollment — createBahmniProgramEnrollment: Create with properties in request
- GET /bahmniprogramenrollment/{uuid} — getBahmniProgramEnrollment: Fetch by uuid
- POST /bahmniprogramenrollment/{uuid} — updateBahmniProgramEnrollment: Edit with given uuid, only modifying properties in request
- DELETE /bahmniprogramenrollment/{uuid} — deleteBahmniProgramEnrollment: Delete or purge resource by uuid

## bed
- GET /bed — getAllBeds: Fetch all non-retired bed resources or perform search
- POST /bed — createBed: Create with properties in request
- GET /bed/{uuid} — getBed: Fetch by uuid
- POST /bed/{uuid} — updateBed: Edit with given uuid, only modifying properties in request
- DELETE /bed/{uuid} — deleteBed: Delete or purge resource by uuid

## bedPatientAssignment
- GET /bedPatientAssignment — getAllBedPatientAssignments: Search for bedPatientAssignment
- GET /bedPatientAssignment/{uuid} — getBedPatientAssignment: Fetch by uuid
- DELETE /bedPatientAssignment/{uuid} — deleteBedPatientAssignment: Delete or purge resource by uuid

## bedTag
- GET /bedTag — getAllBedTags: Fetch all non-retired bedTag resources or perform search
- POST /bedTag — createBedTag: Create with properties in request
- GET /bedTag/{uuid} — getBedTag: Fetch by uuid
- POST /bedTag/{uuid} — updateBedTag: Edit with given uuid, only modifying properties in request
- DELETE /bedTag/{uuid} — deleteBedTag: Delete or purge resource by uuid

## bedTagMap
- GET /bedTagMap — getAllBedTagMaps: Search for bedTagMap
- POST /bedTagMap — createBedTagMap: Create with properties in request
- GET /bedTagMap/{uuid} — getBedTagMap: Fetch by uuid
- POST /bedTagMap/{uuid} — updateBedTagMap: Edit with given uuid, only modifying properties in request
- DELETE /bedTagMap/{uuid} — deleteBedTagMap: Delete or purge resource by uuid

## beds
- GET /beds — getAllBedDetailses: Search for beds
- GET /beds/{uuid} — getBedDetails: Fetch by uuid
- DELETE /beds/{uuid} — deleteBedDetails: Delete or purge resource by uuid

## bedtype
- GET /bedtype — getAllBedTypes: Fetch all non-retired bedtype resources or perform search
- POST /bedtype — createBedType: Create with properties in request
- GET /bedtype/{uuid} — getBedType: Fetch by uuid
- POST /bedtype/{uuid} — updateBedType: Edit with given uuid, only modifying properties in request
- DELETE /bedtype/{uuid} — deleteBedType: Delete or purge resource by uuid

## caresetting
- GET /caresetting — getAllCareSettings: Fetch all non-retired caresetting resources or perform search
- GET /caresetting/{uuid} — getCareSetting: Fetch by uuid
- DELETE /caresetting/{uuid} — deleteCareSetting: Delete or purge resource by uuid

## cohort
- GET /cohort — getAllCohorts: Fetch all non-retired cohort resources or perform search
- POST /cohort — createCohort: Create with properties in request
- GET /cohort/{uuid} — getCohort: Fetch by uuid
- POST /cohort/{uuid} — updateCohort: Edit with given uuid, only modifying properties in request
- DELETE /cohort/{uuid} — deleteCohort: Delete or purge resource by uuid
- GET /cohort/{parent-uuid}/membership — getAllCohortMemberships: Fetch all non-retired membership subresources
- POST /cohort/{parent-uuid}/membership — createCohortMembership: Create membership subresource with properties in request
- GET /cohort/{parent-uuid}/membership/{uuid} — getCohortMembership: Fetch membership subresources by uuid
- POST /cohort/{parent-uuid}/membership/{uuid} — updateCohortMembership: edit membership subresource with given uuid, only modifying properties in request
- DELETE /cohort/{parent-uuid}/membership/{uuid} — deleteCohortMembership: Delete or purge resource by uuid

## concept
- GET /concept — getAllBahmniConcepts: Fetch all non-retired concept resources or perform search
- POST /concept — createBahmniConcept: Create with properties in request
- GET /concept/{uuid} — getBahmniConcept: Fetch by uuid
- POST /concept/{uuid} — updateBahmniConcept: Edit with given uuid, only modifying properties in request
- DELETE /concept/{uuid} — deleteBahmniConcept: Delete or purge resource by uuid
- GET /concept/{parent-uuid}/name — getAllConceptNames: Fetch all non-retired name subresources
- POST /concept/{parent-uuid}/name — createConceptName: Create name subresource with properties in request
- GET /concept/{parent-uuid}/name/{uuid} — getConceptName: Fetch name subresources by uuid
- POST /concept/{parent-uuid}/name/{uuid} — updateConceptName: edit name subresource with given uuid, only modifying properties in request
- DELETE /concept/{parent-uuid}/name/{uuid} — deleteConceptName: Delete or purge resource by uuid
- GET /concept/{parent-uuid}/attribute — getAllConceptAttributes: Fetch all non-retired attribute subresources
- POST /concept/{parent-uuid}/attribute — createConceptAttribute: Create attribute subresource with properties in request
- GET /concept/{parent-uuid}/attribute/{uuid} — getConceptAttribute: Fetch attribute subresources by uuid
- POST /concept/{parent-uuid}/attribute/{uuid} — updateConceptAttribute: edit attribute subresource with given uuid, only modifying properties in request
- DELETE /concept/{parent-uuid}/attribute/{uuid} — deleteConceptAttribute: Delete or purge resource by uuid
- GET /concept/{parent-uuid}/description — getAllConceptDescriptions: Fetch all non-retired description subresources
- POST /concept/{parent-uuid}/description — createConceptDescription: Create description subresource with properties in request
- GET /concept/{parent-uuid}/description/{uuid} — getConceptDescription: Fetch description subresources by uuid
- POST /concept/{parent-uuid}/description/{uuid} — updateConceptDescription: edit description subresource with given uuid, only modifying properties in request
- DELETE /concept/{parent-uuid}/description/{uuid} — deleteConceptDescription: Delete or purge resource by uuid
- GET /concept/{parent-uuid}/mapping — getAllConceptMaps: Fetch all non-retired mapping subresources
- POST /concept/{parent-uuid}/mapping — createConceptMap: Create mapping subresource with properties in request
- GET /concept/{parent-uuid}/mapping/{uuid} — getConceptMap: Fetch mapping subresources by uuid
- POST /concept/{parent-uuid}/mapping/{uuid} — updateConceptMap: edit mapping subresource with given uuid, only modifying properties in request
- DELETE /concept/{parent-uuid}/mapping/{uuid} — deleteConceptMap: Delete or purge resource by uuid

## conceptattributetype
- GET /conceptattributetype — getAllConceptAttributeTypes: Fetch all non-retired conceptattributetype resources or perform search
- POST /conceptattributetype — createConceptAttributeType: Create with properties in request
- GET /conceptattributetype/{uuid} — getConceptAttributeType: Fetch by uuid
- POST /conceptattributetype/{uuid} — updateConceptAttributeType: Edit with given uuid, only modifying properties in request
- DELETE /conceptattributetype/{uuid} — deleteConceptAttributeType: Delete or purge resource by uuid

## conceptclass
- GET /conceptclass — getAllConceptClasses: Fetch all non-retired conceptclass resources or perform search
- POST /conceptclass — createConceptClass: Create with properties in request
- GET /conceptclass/{uuid} — getConceptClass: Fetch by uuid
- POST /conceptclass/{uuid} — updateConceptClass: Edit with given uuid, only modifying properties in request
- DELETE /conceptclass/{uuid} — deleteConceptClass: Delete or purge resource by uuid

## conceptdatatype
- GET /conceptdatatype — getAllConceptDatatypes: Fetch all non-retired conceptdatatype resources or perform search
- GET /conceptdatatype/{uuid} — getConceptDatatype: Fetch by uuid
- DELETE /conceptdatatype/{uuid} — deleteConceptDatatype: Delete or purge resource by uuid

## conceptmaptype
- GET /conceptmaptype — getAllConceptMapTypes: Fetch all non-retired conceptmaptype resources or perform search
- POST /conceptmaptype — createConceptMapType: Create with properties in request
- GET /conceptmaptype/{uuid} — getConceptMapType: Fetch by uuid
- POST /conceptmaptype/{uuid} — updateConceptMapType: Edit with given uuid, only modifying properties in request
- DELETE /conceptmaptype/{uuid} — deleteConceptMapType: Delete or purge resource by uuid

## conceptproposal
- GET /conceptproposal — getAllConceptProposals: Fetch all non-retired conceptproposal resources or perform search
- POST /conceptproposal — createConceptProposal: Create with properties in request
- GET /conceptproposal/{uuid} — getConceptProposal: Fetch by uuid
- POST /conceptproposal/{uuid} — updateConceptProposal: Edit with given uuid, only modifying properties in request
- DELETE /conceptproposal/{uuid} — deleteConceptProposal: Delete or purge resource by uuid

## conceptreferenceterm
- GET /conceptreferenceterm — getAllConceptReferenceTerms: Fetch all non-retired conceptreferenceterm resources or perform search
- POST /conceptreferenceterm — createConceptReferenceTerm: Create with properties in request
- GET /conceptreferenceterm/{uuid} — getConceptReferenceTerm: Fetch by uuid
- POST /conceptreferenceterm/{uuid} — updateConceptReferenceTerm: Edit with given uuid, only modifying properties in request
- DELETE /conceptreferenceterm/{uuid} — deleteConceptReferenceTerm: Delete or purge resource by uuid

## conceptreferencetermmap
- GET /conceptreferencetermmap — getAllConceptReferenceTermMaps: Search for conceptreferencetermmap
- POST /conceptreferencetermmap — createConceptReferenceTermMap: Create with properties in request
- GET /conceptreferencetermmap/{uuid} — getConceptReferenceTermMap: Fetch by uuid
- POST /conceptreferencetermmap/{uuid} — updateConceptReferenceTermMap: Edit with given uuid, only modifying properties in request
- DELETE /conceptreferencetermmap/{uuid} — deleteConceptReferenceTermMap: Delete or purge resource by uuid

## conceptsearch
- GET /conceptsearch — getAllConceptSearches: Search for conceptsearch

## conceptsource
- GET /conceptsource — getAllConceptSources: Fetch all non-retired conceptsource resources or perform search
- POST /conceptsource — createConceptSource: Create with properties in request
- GET /conceptsource/{uuid} — getConceptSource: Fetch by uuid
- POST /conceptsource/{uuid} — updateConceptSource: Edit with given uuid, only modifying properties in request
- DELETE /conceptsource/{uuid} — deleteConceptSource: Delete or purge resource by uuid

## conceptstateconversion
- GET /conceptstateconversion — getAllConceptStateConversions: Fetch all non-retired conceptstateconversion resources or perform search
- POST /conceptstateconversion — createConceptStateConversion: Create with properties in request
- GET /conceptstateconversion/{uuid} — getConceptStateConversion: Fetch by uuid
- POST /conceptstateconversion/{uuid} — updateConceptStateConversion: Edit with given uuid, only modifying properties in request
- DELETE /conceptstateconversion/{uuid} — deleteConceptStateConversion: Delete or purge resource by uuid

## conceptstopword
- GET /conceptstopword — getAllConceptStopwords: Fetch all non-retired conceptstopword resources or perform search
- POST /conceptstopword — createConceptStopword: Create with properties in request
- GET /conceptstopword/{uuid} — getConceptStopword: Fetch by uuid
- POST /conceptstopword/{uuid} — updateConceptStopword: Edit with given uuid, only modifying properties in request
- DELETE /conceptstopword/{uuid} — deleteConceptStopword: Delete or purge resource by uuid

## condition
- GET /condition — getAllConditions: Search for condition
- POST /condition — createCondition: Create with properties in request
- GET /condition/{uuid} — getCondition: Fetch by uuid
- POST /condition/{uuid} — updateCondition: Edit with given uuid, only modifying properties in request
- DELETE /condition/{uuid} — deleteCondition: Delete or purge resource by uuid

## customdatatype
- GET /customdatatype — getAllCustomDatatypes: Fetch all non-retired customdatatype resources or perform search
- GET /customdatatype/{uuid} — getCustomDatatype: Fetch by uuid
- DELETE /customdatatype/{uuid} — deleteCustomDatatype: Delete or purge resource by uuid
- GET /customdatatype/{parent-uuid}/handlers — getAllCustomDatatypeHandlers: Fetch all non-retired handlers subresources

## databasechange
- GET /databasechange — getAllDatabaseChanges: Fetch all non-retired
- GET /databasechange/{uuid} — getDatabaseChange: Fetch by uuid

## drug
- GET /drug — getAllBahmniDrugs: Fetch all non-retired drug resources or perform search
- POST /drug — createBahmniDrug: Create with properties in request
- GET /drug/{uuid} — getBahmniDrug: Fetch by uuid
- POST /drug/{uuid} — updateBahmniDrug: Edit with given uuid, only modifying properties in request
- DELETE /drug/{uuid} — deleteBahmniDrug: Delete or purge resource by uuid
- GET /drug/{parent-uuid}/ingredient — getAllDrugIngredients: Fetch all non-retired ingredient subresources
- POST /drug/{parent-uuid}/ingredient — createDrugIngredient: Create ingredient subresource with properties in request
- GET /drug/{parent-uuid}/ingredient/{uuid} — getDrugIngredient: Fetch ingredient subresources by uuid
- POST /drug/{parent-uuid}/ingredient/{uuid} — updateDrugIngredient: edit ingredient subresource with given uuid, only modifying properties in request
- DELETE /drug/{parent-uuid}/ingredient/{uuid} — deleteDrugIngredient: Delete or purge resource by uuid

## drugreferencemap
- GET /drugreferencemap — getAllDrugReferenceMaps: Search for drugreferencemap
- POST /drugreferencemap — createDrugReferenceMap: Create with properties in request
- GET /drugreferencemap/{uuid} — getDrugReferenceMap: Fetch by uuid
- POST /drugreferencemap/{uuid} — updateDrugReferenceMap: Edit with given uuid, only modifying properties in request
- DELETE /drugreferencemap/{uuid} — deleteDrugReferenceMap: Delete or purge resource by uuid

## encounter
- GET /encounter — getAllBahmniEncounters: Search for encounter
- POST /encounter — createBahmniEncounter: Create with properties in request
- GET /encounter/{uuid} — getBahmniEncounter: Fetch by uuid
- POST /encounter/{uuid} — updateBahmniEncounter: Edit with given uuid, only modifying properties in request
- DELETE /encounter/{uuid} — deleteBahmniEncounter: Delete or purge resource by uuid
- GET /encounter/{parent-uuid}/encounterprovider — getAllEncounterProviders: Fetch all non-retired encounterprovider subresources
- POST /encounter/{parent-uuid}/encounterprovider — createEncounterProvider: Create encounterprovider subresource with properties in request
- GET /encounter/{parent-uuid}/encounterprovider/{uuid} — getEncounterProvider: Fetch encounterprovider subresources by uuid
- POST /encounter/{parent-uuid}/encounterprovider/{uuid} — updateEncounterProvider: edit encounterprovider subresource with given uuid, only modifying properties in request
- DELETE /encounter/{parent-uuid}/encounterprovider/{uuid} — deleteEncounterProvider: Delete or purge resource by uuid

## encounterrole
- GET /encounterrole — getAllEncounterRoles: Fetch all non-retired encounterrole resources or perform search
- POST /encounterrole — createEncounterRole: Create with properties in request
- GET /encounterrole/{uuid} — getEncounterRole: Fetch by uuid
- POST /encounterrole/{uuid} — updateEncounterRole: Edit with given uuid, only modifying properties in request
- DELETE /encounterrole/{uuid} — deleteEncounterRole: Delete or purge resource by uuid

## encountertype
- GET /encountertype — getAllEncounterTypes: Fetch all non-retired encountertype resources or perform search
- POST /encountertype — createEncounterType: Create with properties in request
- GET /encountertype/{uuid} — getEncounterType: Fetch by uuid
- POST /encountertype/{uuid} — updateEncounterType: Edit with given uuid, only modifying properties in request
- DELETE /encountertype/{uuid} — deleteEncounterType: Delete or purge resource by uuid

## entitymapping
- GET /entitymapping — getAllEntityMappings: Search for entitymapping
- GET /entitymapping/{uuid} — getEntityMapping: Fetch by uuid
- DELETE /entitymapping/{uuid} — deleteEntityMapping: Delete or purge resource by uuid

## extension
- GET /extension — getAllExtensions: Search for extension
- GET /extension/{uuid} — getExtension: Fetch by uuid

## field
- GET /field — getAllFields: Fetch all non-retired field resources or perform search
- POST /field — createField: Create with properties in request
- GET /field/{uuid} — getField: Fetch by uuid
- POST /field/{uuid} — updateField: Edit with given uuid, only modifying properties in request
- DELETE /field/{uuid} — deleteField: Delete or purge resource by uuid
- GET /field/{parent-uuid}/answer — getAllFieldAnswers: Fetch all non-retired answer subresources
- POST /field/{parent-uuid}/answer — createFieldAnswer: Create answer subresource with properties in request
- GET /field/{parent-uuid}/answer/{uuid} — getFieldAnswer: Fetch answer subresources by uuid
- POST /field/{parent-uuid}/answer/{uuid} — updateFieldAnswer: edit answer subresource with given uuid, only modifying properties in request
- DELETE /field/{parent-uuid}/answer/{uuid} — deleteFieldAnswer: Delete or purge resource by uuid

## fieldtype
- GET /fieldtype — getAllFieldTypes: Fetch all non-retired fieldtype resources or perform search
- POST /fieldtype — createFieldType: Create with properties in request
- GET /fieldtype/{uuid} — getFieldType: Fetch by uuid
- POST /fieldtype/{uuid} — updateFieldType: Edit with given uuid, only modifying properties in request
- DELETE /fieldtype/{uuid} — deleteFieldType: Delete or purge resource by uuid

## form
- GET /form — getAllForms: Fetch all non-retired form resources or perform search
- POST /form — createForm: Create with properties in request
- GET /form/{uuid} — getForm: Fetch by uuid
- POST /form/{uuid} — updateForm: Edit with given uuid, only modifying properties in request
- DELETE /form/{uuid} — deleteForm: Delete or purge resource by uuid
- GET /form/{parent-uuid}/resource — getAllFormResources: Fetch all non-retired resource subresources
- POST /form/{parent-uuid}/resource — createFormResource: Create resource subresource with properties in request
- GET /form/{parent-uuid}/resource/{uuid} — getFormResource: Fetch resource subresources by uuid
- POST /form/{parent-uuid}/resource/{uuid} — updateFormResource: edit resource subresource with given uuid, only modifying properties in request
- DELETE /form/{parent-uuid}/resource/{uuid} — deleteFormResource: Delete or purge resource by uuid
- GET /form/{parent-uuid}/formfield — getAllFormFields: Fetch all non-retired formfield subresources
- POST /form/{parent-uuid}/formfield — createFormField: Create formfield subresource with properties in request
- GET /form/{parent-uuid}/formfield/{uuid} — getFormField: Fetch formfield subresources by uuid
- POST /form/{parent-uuid}/formfield/{uuid} — updateFormField: edit formfield subresource with given uuid, only modifying properties in request
- DELETE /form/{parent-uuid}/formfield/{uuid} — deleteFormField: Delete or purge resource by uuid

## hl7
- GET /hl7 — getAllHL7Messages: Search for hl7
- POST /hl7 — createHL7Message: Create with properties in request

## hl7source
- GET /hl7source — getAllHL7Sources: Search for hl7source
- POST /hl7source — createHL7Source: Create with properties in request
- GET /hl7source/{uuid} — getHL7Source: Fetch by uuid
- POST /hl7source/{uuid} — updateHL7Source: Edit with given uuid, only modifying properties in request
- DELETE /hl7source/{uuid} — deleteHL7Source: Delete or purge resource by uuid

## idgen/autogenerationoption
- GET /idgen/autogenerationoption — getAllAutoGenerationOptions: Fetch all non-retired idgen/autogenerationoption resources or perform search
- POST /idgen/autogenerationoption — createAutoGenerationOption: Create with properties in request
- GET /idgen/autogenerationoption/{uuid} — getAutoGenerationOption: Fetch by uuid
- POST /idgen/autogenerationoption/{uuid} — updateAutoGenerationOption: Edit with given uuid, only modifying properties in request
- DELETE /idgen/autogenerationoption/{uuid} — deleteAutoGenerationOption: Delete or purge resource by uuid

## idgen/identifiersource
- GET /idgen/identifiersource — getAllIdentifierSources: Fetch all non-retired idgen/identifiersource resources or perform search
- POST /idgen/identifiersource — createIdentifierSource: Create with properties in request
- GET /idgen/identifiersource/{uuid} — getIdentifierSource: Fetch by uuid
- POST /idgen/identifiersource/{uuid} — updateIdentifierSource: Edit with given uuid, only modifying properties in request
- DELETE /idgen/identifiersource/{uuid} — deleteIdentifierSource: Delete or purge resource by uuid

## idgen/logentry
- GET /idgen/logentry — getAllLogEntries: Fetch all non-retired idgen/logentry resources or perform search
- GET /idgen/logentry/{uuid} — getLogEntry: Fetch by uuid
- DELETE /idgen/logentry/{uuid} — deleteLogEntry: Delete or purge resource by uuid

## location
- GET /location — getAllLocations: Fetch all non-retired location resources or perform search
- POST /location — createLocation: Create with properties in request
- GET /location/{uuid} — getLocation: Fetch by uuid
- POST /location/{uuid} — updateLocation: Edit with given uuid, only modifying properties in request
- DELETE /location/{uuid} — deleteLocation: Delete or purge resource by uuid
- GET /location/{parent-uuid}/attribute — getAllLocationAttributes: Fetch all non-retired attribute resources or perform search
- POST /location/{parent-uuid}/attribute — createLocationAttribute: Create attribute subresource with properties in request
- GET /location/{parent-uuid}/attribute/{uuid} — getLocationAttribute: Fetch attribute subresources by uuid
- POST /location/{parent-uuid}/attribute/{uuid} — updateLocationAttribute: edit attribute subresource with given uuid, only modifying properties in request
- DELETE /location/{parent-uuid}/attribute/{uuid} — deleteLocationAttribute: Delete or purge resource by uuid

## locationattributetype
- GET /locationattributetype — getAllLocationAttributeTypes: Fetch all non-retired locationattributetype resources or perform search
- POST /locationattributetype — createLocationAttributeType: Create with properties in request
- GET /locationattributetype/{uuid} — getLocationAttributeType: Fetch by uuid
- POST /locationattributetype/{uuid} — updateLocationAttributeType: Edit with given uuid, only modifying properties in request
- DELETE /locationattributetype/{uuid} — deleteLocationAttributeType: Delete or purge resource by uuid

## locationtag
- GET /locationtag — getAllLocationTags: Fetch all non-retired locationtag resources or perform search
- POST /locationtag — createLocationTag: Create with properties in request
- GET /locationtag/{uuid} — getLocationTag: Fetch by uuid
- POST /locationtag/{uuid} — updateLocationTag: Edit with given uuid, only modifying properties in request
- DELETE /locationtag/{uuid} — deleteLocationTag: Delete or purge resource by uuid

## metadatamapping/metadataset
- GET /metadatamapping/metadataset — getAllMetadataSets: Fetch all non-retired metadatamapping/metadataset resources or perform search
- POST /metadatamapping/metadataset — createMetadataSet: Create with properties in request
- GET /metadatamapping/metadataset/{uuid} — getMetadataSet: Fetch by uuid
- POST /metadatamapping/metadataset/{uuid} — updateMetadataSet: Edit with given uuid, only modifying properties in request
- DELETE /metadatamapping/metadataset/{uuid} — deleteMetadataSet: Delete or purge resource by uuid
- GET /metadatamapping/metadataset/{parent-uuid}/members — getAllMetadataSetMembers: Fetch all non-retired members subresources
- POST /metadatamapping/metadataset/{parent-uuid}/members — createMetadataSetMember: Create members subresource with properties in request
- GET /metadatamapping/metadataset/{parent-uuid}/members/{uuid} — getMetadataSetMember: Fetch members subresources by uuid
- POST /metadatamapping/metadataset/{parent-uuid}/members/{uuid} — updateMetadataSetMember: edit members subresource with given uuid, only modifying properties in request
- DELETE /metadatamapping/metadataset/{parent-uuid}/members/{uuid} — deleteMetadataSetMember: Delete or purge resource by uuid

## metadatamapping/source
- GET /metadatamapping/source — getAllMetadataSources: Fetch all non-retired metadatamapping/source resources or perform search
- POST /metadatamapping/source — createMetadataSource: Create with properties in request
- GET /metadatamapping/source/{uuid} — getMetadataSource: Fetch by uuid
- POST /metadatamapping/source/{uuid} — updateMetadataSource: Edit with given uuid, only modifying properties in request
- DELETE /metadatamapping/source/{uuid} — deleteMetadataSource: Delete or purge resource by uuid

## metadatamapping/termmapping
- GET /metadatamapping/termmapping — getAllMetadataTermMappings: Fetch all non-retired metadatamapping/termmapping resources or perform search
- POST /metadatamapping/termmapping — createMetadataTermMapping: Create with properties in request
- GET /metadatamapping/termmapping/{uuid} — getMetadataTermMapping: Fetch by uuid
- POST /metadatamapping/termmapping/{uuid} — updateMetadataTermMapping: Edit with given uuid, only modifying properties in request
- DELETE /metadatamapping/termmapping/{uuid} — deleteMetadataTermMapping: Delete or purge resource by uuid

## module
- GET /module — getAllModules: Fetch all non-retired
- GET /module/{uuid} — getModule: Fetch by uuid

## moduleaction
- POST /moduleaction — createModuleAction: Create with properties in request

## obs
- GET /obs — getAllBahmniObses: Search for obs
- POST /obs — createBahmniObs: Create with properties in request
- GET /obs/{uuid} — getBahmniObs: Fetch by uuid
- POST /obs/{uuid} — updateBahmniObs: Edit with given uuid, only modifying properties in request
- DELETE /obs/{uuid} — deleteBahmniObs: Delete or purge resource by uuid

## obstree
- GET /obstree — getAllObsTrees: Search for obstree

## openconceptlab/import
- GET /openconceptlab/import — getAllImports: Fetch all non-retired openconceptlab/import resources or perform search
- POST /openconceptlab/import — createImport: Create with properties in request
- GET /openconceptlab/import/{uuid} — getImport: Fetch by uuid
- DELETE /openconceptlab/import/{uuid} — deleteImport: Delete or purge resource by uuid
- GET /openconceptlab/import/{parent-uuid}/item — getAllItems: Fetch all non-retired item resources or perform search
- GET /openconceptlab/import/{parent-uuid}/item/{uuid} — getItem: Fetch item subresources by uuid
- DELETE /openconceptlab/import/{parent-uuid}/item/{uuid} — deleteItem: Delete or purge resource by uuid

## openconceptlab/importaction
- GET /openconceptlab/importaction — getAllImportActions: Search for openconceptlab/importaction
- POST /openconceptlab/importaction — createImportAction: Create with properties in request

## openconceptlab/subscription
- GET /openconceptlab/subscription — getAllSubscriptions: Fetch all non-retired openconceptlab/subscription resources or perform search
- POST /openconceptlab/subscription — createSubscription: Create with properties in request
- GET /openconceptlab/subscription/{uuid} — getSubscription: Fetch by uuid
- POST /openconceptlab/subscription/{uuid} — updateSubscription: Edit with given uuid, only modifying properties in request
- DELETE /openconceptlab/subscription/{uuid} — deleteSubscription: Delete or purge resource by uuid

## order
- GET /order — getAllBahmniOrders: Search for order
- POST /order — createBahmniOrder: Create with properties in request
- GET /order/{uuid} — getBahmniOrder: Fetch by uuid
- DELETE /order/{uuid} — deleteBahmniOrder: Delete or purge resource by uuid
- GET /order/{parent-uuid}/fulfillerdetails — getAllFulfillerDetailses: Fetch all non-retired fulfillerdetails subresources
- POST /order/{parent-uuid}/fulfillerdetails — createFulfillerDetails: Create fulfillerdetails subresource with properties in request

## orderfrequency
- GET /orderfrequency — getAllOrderFrequencies: Fetch all non-retired orderfrequency resources or perform search
- POST /orderfrequency — createOrderFrequency: Create with properties in request
- GET /orderfrequency/{uuid} — getOrderFrequency: Fetch by uuid
- POST /orderfrequency/{uuid} — updateOrderFrequency: Edit with given uuid, only modifying properties in request
- DELETE /orderfrequency/{uuid} — deleteOrderFrequency: Delete or purge resource by uuid

## ordergroup
- GET /ordergroup — getAllOrderGroups: Search for ordergroup
- POST /ordergroup — createOrderGroup: Create with properties in request
- GET /ordergroup/{uuid} — getOrderGroup: Fetch by uuid
- POST /ordergroup/{uuid} — updateOrderGroup: Edit with given uuid, only modifying properties in request
- DELETE /ordergroup/{uuid} — deleteOrderGroup: Delete or purge resource by uuid

## ordertype
- GET /ordertype — getAllOrderTypes: Fetch all non-retired ordertype resources or perform search
- POST /ordertype — createOrderType: Create with properties in request
- GET /ordertype/{uuid} — getOrderType: Fetch by uuid
- POST /ordertype/{uuid} — updateOrderType: Edit with given uuid, only modifying properties in request
- DELETE /ordertype/{uuid} — deleteOrderType: Delete or purge resource by uuid

## patient
- GET /patient — getAllPatients: Search for patient
- POST /patient — createPatient: Create with properties in request
- GET /patient/{uuid} — getPatient: Fetch by uuid
- POST /patient/{uuid} — updatePatient: Edit with given uuid, only modifying properties in request
- DELETE /patient/{uuid} — deletePatient: Delete or purge resource by uuid
- GET /patient/{parent-uuid}/identifier — getAllPatientIdentifiers: Fetch all non-retired identifier subresources
- POST /patient/{parent-uuid}/identifier — createPatientIdentifier: Create identifier subresource with properties in request
- GET /patient/{parent-uuid}/identifier/{uuid} — getPatientIdentifier: Fetch identifier subresources by uuid
- POST /patient/{parent-uuid}/identifier/{uuid} — updatePatientIdentifier: edit identifier subresource with given uuid, only modifying properties in request
- DELETE /patient/{parent-uuid}/identifier/{uuid} — deletePatientIdentifier: Delete or purge resource by uuid
- GET /patient/{parent-uuid}/allergy — getAllPatientAllergies: Fetch all non-retired allergy subresources
- POST /patient/{parent-uuid}/allergy — createPatientAllergy: Create allergy subresource with properties in request
- GET /patient/{parent-uuid}/allergy/{uuid} — getPatientAllergy: Fetch allergy subresources by uuid
- POST /patient/{parent-uuid}/allergy/{uuid} — updatePatientAllergy: edit allergy subresource with given uuid, only modifying properties in request
- DELETE /patient/{parent-uuid}/allergy/{uuid} — deletePatientAllergy: Delete or purge resource by uuid

## patientdiagnoses
- GET /patientdiagnoses — getAllDiagnoses: Search for patientdiagnoses
- POST /patientdiagnoses — createDiagnosis: Create with properties in request
- GET /patientdiagnoses/{uuid} — getDiagnosis: Fetch by uuid
- POST /patientdiagnoses/{uuid} — updateDiagnosis: Edit with given uuid, only modifying properties in request
- DELETE /patientdiagnoses/{uuid} — deleteDiagnosis: Delete or purge resource by uuid

## patientidentifiertype
- GET /patientidentifiertype — getAllPatientIdentifierTypes: Fetch all non-retired patientidentifiertype resources or perform search
- POST /patientidentifiertype — createPatientIdentifierType: Create with properties in request
- GET /patientidentifiertype/{uuid} — getPatientIdentifierType: Fetch by uuid
- POST /patientidentifiertype/{uuid} — updatePatientIdentifierType: Edit with given uuid, only modifying properties in request
- DELETE /patientidentifiertype/{uuid} — deletePatientIdentifierType: Delete or purge resource by uuid

## patientprofile
- GET /patientprofile — getAllPatientProfiles: Search for patientprofile
- POST /patientprofile — createPatientProfile: Create with properties in request
- POST /patientprofile/{uuid} — updatePatientProfile: Edit with given uuid, only modifying properties in request

## person
- GET /person — getAllPersons: Search for person
- POST /person — createPerson: Create with properties in request
- GET /person/{uuid} — getPerson: Fetch by uuid
- POST /person/{uuid} — updatePerson: Edit with given uuid, only modifying properties in request
- DELETE /person/{uuid} — deletePerson: Delete or purge resource by uuid
- GET /person/{parent-uuid}/attribute — getAllPersonAttributes: Fetch all non-retired attribute subresources
- POST /person/{parent-uuid}/attribute — createPersonAttribute: Create attribute subresource with properties in request
- GET /person/{parent-uuid}/attribute/{uuid} — getPersonAttribute: Fetch attribute subresources by uuid
- POST /person/{parent-uuid}/attribute/{uuid} — updatePersonAttribute: edit attribute subresource with given uuid, only modifying properties in request
- DELETE /person/{parent-uuid}/attribute/{uuid} — deletePersonAttribute: Delete or purge resource by uuid
- GET /person/{parent-uuid}/address — getAllPersonAddresses: Fetch all non-retired address subresources
- POST /person/{parent-uuid}/address — createPersonAddress: Create address subresource with properties in request
- GET /person/{parent-uuid}/address/{uuid} — getPersonAddress: Fetch address subresources by uuid
- POST /person/{parent-uuid}/address/{uuid} — updatePersonAddress: edit address subresource with given uuid, only modifying properties in request
- DELETE /person/{parent-uuid}/address/{uuid} — deletePersonAddress: Delete or purge resource by uuid
- GET /person/{parent-uuid}/name — getAllPersonNames: Fetch all non-retired name subresources
- POST /person/{parent-uuid}/name — createPersonName: Create name subresource with properties in request
- GET /person/{parent-uuid}/name/{uuid} — getPersonName: Fetch name subresources by uuid
- POST /person/{parent-uuid}/name/{uuid} — updatePersonName: edit name subresource with given uuid, only modifying properties in request
- DELETE /person/{parent-uuid}/name/{uuid} — deletePersonName: Delete or purge resource by uuid

## personattributetype
- GET /personattributetype — getAllPersonAttributeTypes: Fetch all non-retired personattributetype resources or perform search
- POST /personattributetype — createPersonAttributeType: Create with properties in request
- GET /personattributetype/{uuid} — getPersonAttributeType: Fetch by uuid
- POST /personattributetype/{uuid} — updatePersonAttributeType: Edit with given uuid, only modifying properties in request
- DELETE /personattributetype/{uuid} — deletePersonAttributeType: Delete or purge resource by uuid

## personimage
- GET /personimage — getAllPersonImages: Search for personimage
- POST /personimage — createPersonImage: Create with properties in request
- GET /personimage/{uuid} — getPersonImage: Fetch by uuid
- POST /personimage/{uuid} — updatePersonImage: Edit with given uuid, only modifying properties in request
- DELETE /personimage/{uuid} — deletePersonImage: Delete or purge resource by uuid

## privilege
- GET /privilege — getAllPrivileges: Fetch all non-retired privilege resources or perform search
- POST /privilege — createPrivilege: Create with properties in request
- GET /privilege/{uuid} — getPrivilege: Fetch by uuid
- POST /privilege/{uuid} — updatePrivilege: Edit with given uuid, only modifying properties in request
- DELETE /privilege/{uuid} — deletePrivilege: Delete or purge resource by uuid

## program
- GET /program — getAllPrograms: Fetch all non-retired program resources or perform search
- POST /program — createProgram: Create with properties in request
- GET /program/{uuid} — getProgram: Fetch by uuid
- POST /program/{uuid} — updateProgram: Edit with given uuid, only modifying properties in request
- DELETE /program/{uuid} — deleteProgram: Delete or purge resource by uuid

## programattributetype
- GET /programattributetype — getAllProgramAttributeTypes: Fetch all non-retired programattributetype resources or perform search
- POST /programattributetype — createProgramAttributeType: Create with properties in request
- GET /programattributetype/{uuid} — getProgramAttributeType: Fetch by uuid
- POST /programattributetype/{uuid} — updateProgramAttributeType: Edit with given uuid, only modifying properties in request
- DELETE /programattributetype/{uuid} — deleteProgramAttributeType: Delete or purge resource by uuid

## programenrollment
- POST /programenrollment/{parent-uuid}/state — createPatientState: Create state subresource with properties in request
- GET /programenrollment/{parent-uuid}/state/{uuid} — getPatientState: Fetch state subresources by uuid
- POST /programenrollment/{parent-uuid}/state/{uuid} — updatePatientState: edit state subresource with given uuid, only modifying properties in request
- DELETE /programenrollment/{parent-uuid}/state/{uuid} — deletePatientState: Delete or purge resource by uuid
- GET /programenrollment/{parent-uuid}/attribute — getAllPatientProgramAttributes: Fetch all non-retired attribute subresources
- POST /programenrollment/{parent-uuid}/attribute — createPatientProgramAttribute: Create attribute subresource with properties in request
- GET /programenrollment/{parent-uuid}/attribute/{uuid} — getPatientProgramAttribute: Fetch attribute subresources by uuid
- POST /programenrollment/{parent-uuid}/attribute/{uuid} — updatePatientProgramAttribute: edit attribute subresource with given uuid, only modifying properties in request
- DELETE /programenrollment/{parent-uuid}/attribute/{uuid} — deletePatientProgramAttribute: Delete or purge resource by uuid

## provider
- GET /provider — getAllProviders: Fetch all non-retired provider resources or perform search
- POST /provider — createProvider: Create with properties in request
- GET /provider/{uuid} — getProvider: Fetch by uuid
- POST /provider/{uuid} — updateProvider: Edit with given uuid, only modifying properties in request
- DELETE /provider/{uuid} — deleteProvider: Delete or purge resource by uuid
- GET /provider/{parent-uuid}/attribute — getAllProviderAttributes: Fetch all non-retired attribute subresources
- POST /provider/{parent-uuid}/attribute — createProviderAttribute: Create attribute subresource with properties in request
- GET /provider/{parent-uuid}/attribute/{uuid} — getProviderAttribute: Fetch attribute subresources by uuid
- POST /provider/{parent-uuid}/attribute/{uuid} — updateProviderAttribute: edit attribute subresource with given uuid, only modifying properties in request
- DELETE /provider/{parent-uuid}/attribute/{uuid} — deleteProviderAttribute: Delete or purge resource by uuid

## providerattributetype
- GET /providerattributetype — getAllProviderAttributeTypes: Fetch all non-retired providerattributetype resources or perform search
- POST /providerattributetype — createProviderAttributeType: Create with properties in request
- GET /providerattributetype/{uuid} — getProviderAttributeType: Fetch by uuid
- POST /providerattributetype/{uuid} — updateProviderAttributeType: Edit with given uuid, only modifying properties in request
- DELETE /providerattributetype/{uuid} — deleteProviderAttributeType: Delete or purge resource by uuid

## relationship
- GET /relationship — getAllRelationships: Fetch all non-retired relationship resources or perform search
- POST /relationship — createRelationship: Create with properties in request
- GET /relationship/{uuid} — getRelationship: Fetch by uuid
- POST /relationship/{uuid} — updateRelationship: Edit with given uuid, only modifying properties in request
- DELETE /relationship/{uuid} — deleteRelationship: Delete or purge resource by uuid

## relationshiptype
- GET /relationshiptype — getAllRelationShipTypes: Fetch all non-retired relationshiptype resources or perform search
- POST /relationshiptype — createRelationShipType: Create with properties in request
- GET /relationshiptype/{uuid} — getRelationShipType: Fetch by uuid
- POST /relationshiptype/{uuid} — updateRelationShipType: Edit with given uuid, only modifying properties in request
- DELETE /relationshiptype/{uuid} — deleteRelationShipType: Delete or purge resource by uuid

## reportingrest/cohort
- GET /reportingrest/cohort — getAllEvaluatedCohorts: Search for reportingrest/cohort
- POST /reportingrest/cohort — createEvaluatedCohort: Create with properties in request
- GET /reportingrest/cohort/{uuid} — getEvaluatedCohort: Fetch by uuid
- POST /reportingrest/cohort/{uuid} — updateEvaluatedCohort: Edit with given uuid, only modifying properties in request
- DELETE /reportingrest/cohort/{uuid} — deleteEvaluatedCohort: Delete or purge resource by uuid

## reportingrest/cohortDefinition
- GET /reportingrest/cohortDefinition — getAllCohortDefinitions: Fetch all non-retired reportingrest/cohortDefinition resources or perform search
- POST /reportingrest/cohortDefinition — createCohortDefinition: Create with properties in request
- GET /reportingrest/cohortDefinition/{uuid} — getCohortDefinition: Fetch by uuid
- POST /reportingrest/cohortDefinition/{uuid} — updateCohortDefinition: Edit with given uuid, only modifying properties in request
- DELETE /reportingrest/cohortDefinition/{uuid} — deleteCohortDefinition: Delete or purge resource by uuid

## reportingrest/dataSet
- GET /reportingrest/dataSet — getAllEvaluatedDataSets: Search for reportingrest/dataSet
- POST /reportingrest/dataSet — createEvaluatedDataSet: Create with properties in request
- GET /reportingrest/dataSet/{uuid} — getEvaluatedDataSet: Fetch by uuid
- POST /reportingrest/dataSet/{uuid} — updateEvaluatedDataSet: Edit with given uuid, only modifying properties in request
- DELETE /reportingrest/dataSet/{uuid} — deleteEvaluatedDataSet: Delete or purge resource by uuid

## reportingrest/dataSetDefinition
- GET /reportingrest/dataSetDefinition — getAllDataSetDefinitions: Fetch all non-retired reportingrest/dataSetDefinition resources or perform search
- POST /reportingrest/dataSetDefinition — createDataSetDefinition: Create with properties in request
- GET /reportingrest/dataSetDefinition/{uuid} — getDataSetDefinition: Fetch by uuid
- POST /reportingrest/dataSetDefinition/{uuid} — updateDataSetDefinition: Edit with given uuid, only modifying properties in request
- DELETE /reportingrest/dataSetDefinition/{uuid} — deleteDataSetDefinition: Delete or purge resource by uuid

## reportingrest/reportDefinition
- GET /reportingrest/reportDefinition — getAllReportDefinitions: Fetch all non-retired reportingrest/reportDefinition resources or perform search
- POST /reportingrest/reportDefinition — createReportDefinition: Create with properties in request
- GET /reportingrest/reportDefinition/{uuid} — getReportDefinition: Fetch by uuid
- POST /reportingrest/reportDefinition/{uuid} — updateReportDefinition: Edit with given uuid, only modifying properties in request
- DELETE /reportingrest/reportDefinition/{uuid} — deleteReportDefinition: Delete or purge resource by uuid

## reportingrest/reportRequest
- GET /reportingrest/reportRequest — getAllReportRequests: Search for reportingrest/reportRequest
- POST /reportingrest/reportRequest — createReportRequest: Create with properties in request
- GET /reportingrest/reportRequest/{uuid} — getReportRequest: Fetch by uuid
- POST /reportingrest/reportRequest/{uuid} — updateReportRequest: Edit with given uuid, only modifying properties in request
- DELETE /reportingrest/reportRequest/{uuid} — deleteReportRequest: Delete or purge resource by uuid

## reportingrest/reportdata
- GET /reportingrest/reportdata — getAllEvaluatedReportDefinitions: Search for reportingrest/reportdata
- POST /reportingrest/reportdata — createEvaluatedReportDefinition: Create with properties in request
- GET /reportingrest/reportdata/{uuid} — getEvaluatedReportDefinition: Fetch by uuid
- POST /reportingrest/reportdata/{uuid} — updateEvaluatedReportDefinition: Edit with given uuid, only modifying properties in request
- DELETE /reportingrest/reportdata/{uuid} — deleteEvaluatedReportDefinition: Delete or purge resource by uuid

## role
- GET /role — getAllRoles: Fetch all non-retired role resources or perform search
- POST /role — createRole: Create with properties in request
- GET /role/{uuid} — getRole: Fetch by uuid
- POST /role/{uuid} — updateRole: Edit with given uuid, only modifying properties in request
- DELETE /role/{uuid} — deleteRole: Delete or purge resource by uuid

## serverlog
- GET /serverlog — getAllServerLogs: Fetch all non-retired
- GET /serverlog/{uuid} — getServerLog: Fetch by uuid

## specimen
- GET /specimen — getAllSpecimens: Search for specimen
- POST /specimen — createSpecimen: Create with properties in request
- GET /specimen/{uuid} — getSpecimen: Fetch by uuid
- POST /specimen/{uuid} — updateSpecimen: Edit with given uuid, only modifying properties in request
- DELETE /specimen/{uuid} — deleteSpecimen: Delete or purge resource by uuid

## surgicalAppointment
- GET /surgicalAppointment — getAllSurgicalAppointments: Search for surgicalAppointment
- POST /surgicalAppointment — createSurgicalAppointment: Create with properties in request
- GET /surgicalAppointment/{uuid} — getSurgicalAppointment: Fetch by uuid
- POST /surgicalAppointment/{uuid} — updateSurgicalAppointment: Edit with given uuid, only modifying properties in request
- DELETE /surgicalAppointment/{uuid} — deleteSurgicalAppointment: Delete or purge resource by uuid
- GET /surgicalAppointment/{parent-uuid}/attribute — getAllSurgicalAppointmentAttributes: Fetch all non-retired attribute subresources
- GET /surgicalAppointment/{parent-uuid}/attribute/{uuid} — getSurgicalAppointmentAttribute: Fetch attribute subresources by uuid
- POST /surgicalAppointment/{parent-uuid}/attribute/{uuid} — updateSurgicalAppointmentAttribute: edit attribute subresource with given uuid, only modifying properties in request
- DELETE /surgicalAppointment/{parent-uuid}/attribute/{uuid} — deleteSurgicalAppointmentAttribute: Delete or purge resource by uuid

## surgicalAppointmentAttributeType
- GET /surgicalAppointmentAttributeType — getAllSurgicalAppointmentAttributeTypes: Fetch all non-retired surgicalAppointmentAttributeType resources or perform search
- GET /surgicalAppointmentAttributeType/{uuid} — getSurgicalAppointmentAttributeType: Fetch by uuid
- POST /surgicalAppointmentAttributeType/{uuid} — updateSurgicalAppointmentAttributeType: Edit with given uuid, only modifying properties in request
- DELETE /surgicalAppointmentAttributeType/{uuid} — deleteSurgicalAppointmentAttributeType: Delete or purge resource by uuid

## surgicalBlock
- GET /surgicalBlock — getAllSurgicalBlocks: Search for surgicalBlock
- POST /surgicalBlock — createSurgicalBlock: Create with properties in request
- GET /surgicalBlock/{uuid} — getSurgicalBlock: Fetch by uuid
- POST /surgicalBlock/{uuid} — updateSurgicalBlock: Edit with given uuid, only modifying properties in request
- DELETE /surgicalBlock/{uuid} — deleteSurgicalBlock: Delete or purge resource by uuid

## systemsetting
- GET /systemsetting — getAllSystemSettings: Fetch all non-retired systemsetting resources or perform search
- POST /systemsetting — createSystemSetting: Create with properties in request
- GET /systemsetting/{uuid} — getSystemSetting: Fetch by uuid
- POST /systemsetting/{uuid} — updateSystemSetting: Edit with given uuid, only modifying properties in request
- DELETE /systemsetting/{uuid} — deleteSystemSetting: Delete or purge resource by uuid

## taskaction
- POST /taskaction — createTaskAction: Create with properties in request
- GET /taskaction/{uuid} — getTaskAction: Fetch by uuid

## taskdefinition
- GET /taskdefinition — getAllTaskDefinitions: Fetch all non-retired taskdefinition resources or perform search
- POST /taskdefinition — createTaskDefinition: Create with properties in request
- GET /taskdefinition/{uuid} — getTaskDefinition: Fetch by uuid
- POST /taskdefinition/{uuid} — updateTaskDefinition: Edit with given uuid, only modifying properties in request
- DELETE /taskdefinition/{uuid} — deleteTaskDefinition: Delete or purge resource by uuid

## user
- GET /user — getAllUsers: Fetch all non-retired user resources or perform search
- POST /user — createUser: Create with properties in request
- GET /user/{uuid} — getUser: Fetch by uuid
- POST /user/{uuid} — updateUser: Edit with given uuid, only modifying properties in request
- DELETE /user/{uuid} — deleteUser: Delete or purge resource by uuid

## visit
- GET /visit — getAllVisits: Fetch all non-retired visit resources or perform search
- POST /visit — createVisit: Create with properties in request
- GET /visit/{uuid} — getVisit: Fetch by uuid
- POST /visit/{uuid} — updateVisit: Edit with given uuid, only modifying properties in request
- DELETE /visit/{uuid} — deleteVisit: Delete or purge resource by uuid
- GET /visit/{parent-uuid}/attribute — getAllVisitAttributes: Fetch all non-retired attribute subresources
- POST /visit/{parent-uuid}/attribute — createVisitAttribute: Create attribute subresource with properties in request
- GET /visit/{parent-uuid}/attribute/{uuid} — getVisitAttribute: Fetch attribute subresources by uuid
- POST /visit/{parent-uuid}/attribute/{uuid} — updateVisitAttribute: edit attribute subresource with given uuid, only modifying properties in request
- DELETE /visit/{parent-uuid}/attribute/{uuid} — deleteVisitAttribute: Delete or purge resource by uuid

## visitattributetype
- GET /visitattributetype — getAllVisitAttributeTypes: Fetch all non-retired visitattributetype resources or perform search
- POST /visitattributetype — createVisitAttributeType: Create with properties in request
- GET /visitattributetype/{uuid} — getVisitAttributeType: Fetch by uuid
- POST /visitattributetype/{uuid} — updateVisitAttributeType: Edit with given uuid, only modifying properties in request
- DELETE /visitattributetype/{uuid} — deleteVisitAttributeType: Delete or purge resource by uuid

## visittype
- GET /visittype — getAllVisitTypes: Fetch all non-retired visittype resources or perform search
- POST /visittype — createVisitType: Create with properties in request
- GET /visittype/{uuid} — getVisitType: Fetch by uuid
- POST /visittype/{uuid} — updateVisitType: Edit with given uuid, only modifying properties in request
- DELETE /visittype/{uuid} — deleteVisitType: Delete or purge resource by uuid

## workflow
- GET /workflow — getAllProgramWorkflows: Search for workflow
- POST /workflow — createProgramWorkflow: Create with properties in request
- GET /workflow/{uuid} — getProgramWorkflow: Fetch by uuid
- POST /workflow/{uuid} — updateProgramWorkflow: Edit with given uuid, only modifying properties in request
- DELETE /workflow/{uuid} — deleteProgramWorkflow: Delete or purge resource by uuid
- GET /workflow/{parent-uuid}/state — getAllProgramWorkflowStates: Fetch all non-retired state subresources
- POST /workflow/{parent-uuid}/state — createProgramWorkflowState: Create state subresource with properties in request
- GET /workflow/{parent-uuid}/state/{uuid} — getProgramWorkflowState: Fetch state subresources by uuid
- POST /workflow/{parent-uuid}/state/{uuid} — updateProgramWorkflowState: edit state subresource with given uuid, only modifying properties in request
- DELETE /workflow/{parent-uuid}/state/{uuid} — deleteProgramWorkflowState: Delete or purge resource by uuid
