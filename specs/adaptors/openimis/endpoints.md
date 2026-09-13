# openIMIS FHIR R4 API (openimis) vR4

<!-- derived from openapi.json by `pnpm specs index openimis` — do not edit by hand -->

base: https://demo.openimis.org/api/api_fhir_r4, {host}/api/api_fhir_r4 | auth: http/bearer (JWT) | 136 operations in 22 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## ActivityDefinition
- GET /ActivityDefinition/ — searchActivityDefinition: Search ActivityDefinition resources
- POST /ActivityDefinition/ — createActivityDefinition: Create an ActivityDefinition
- GET /ActivityDefinition/{id}/ — getActivityDefinition: Read one ActivityDefinition
- PUT /ActivityDefinition/{id}/ — updateActivityDefinition: Replace an ActivityDefinition
- PATCH /ActivityDefinition/{id}/ — patchActivityDefinition: Partially update an ActivityDefinition
- DELETE /ActivityDefinition/{id}/ — deleteActivityDefinition: Delete an ActivityDefinition

## Claim
- GET /Claim/ — searchClaim: Search Claim resources
- POST /Claim/ — createClaim: Create a Claim
- GET /Claim/{id}/ — getClaim: Read one Claim
- PUT /Claim/{id}/ — updateClaim: Replace a Claim
- PATCH /Claim/{id}/ — patchClaim: Partially update a Claim
- DELETE /Claim/{id}/ — deleteClaim: Delete a Claim

## ClaimResponse
- GET /ClaimResponse/ — searchClaimResponse: Search ClaimResponse resources
- POST /ClaimResponse/ — createClaimResponse: Create a ClaimResponse
- GET /ClaimResponse/{id}/ — getClaimResponse: Read one ClaimResponse
- PUT /ClaimResponse/{id}/ — updateClaimResponse: Replace a ClaimResponse
- PATCH /ClaimResponse/{id}/ — patchClaimResponse: Partially update a ClaimResponse
- DELETE /ClaimResponse/{id}/ — deleteClaimResponse: Delete a ClaimResponse

## CodeSystem
- GET /CodeSystem/organization-hf-legal-form/ — getCodeSystemOrganizationHfLegalForm: Get the organization-hf-legal-form CodeSystem
- GET /CodeSystem/organization-hf-level/ — getCodeSystemOrganizationHfLevel: Get the organization-hf-level CodeSystem
- GET /CodeSystem/organization-ph-legal-form/ — getCodeSystemOrganizationPhLegalForm: Get the organization-ph-legal-form CodeSystem
- GET /CodeSystem/organization-ph-activity/ — getCodeSystemOrganizationPhActivity: Get the organization-ph-activity CodeSystem
- GET /CodeSystem/patient-education-level/ — getCodeSystemPatientEducationLevel: Get the patient-education-level CodeSystem
- GET /CodeSystem/patient-profession/ — getCodeSystemPatientProfession: Get the patient-profession CodeSystem
- GET /CodeSystem/patient-identification-type/ — getCodeSystemPatientIdentificationType: Get the patient-identification-type CodeSystem
- GET /CodeSystem/patient-contact-relationship/ — getCodeSystemPatientContactRelationship: Get the patient-contact-relationship CodeSystem
- GET /CodeSystem/group-type/ — getCodeSystemGroupType: Get the group-type CodeSystem
- GET /CodeSystem/group-confirmation-type/ — getCodeSystemGroupConfirmationType: Get the group-confirmation-type CodeSystem
- GET /CodeSystem/medical-item/ — getCodeSystemMedicalItem: Get the medical-item CodeSystem
- GET /CodeSystem/medical-service/ — getCodeSystemMedicalService: Get the medical-service CodeSystem
- GET /CodeSystem/diagnosis/ — getCodeSystemDiagnosis: Get the diagnosis CodeSystem

## Communication
- GET /Communication/ — searchCommunication: Search Communication resources
- POST /Communication/ — createCommunication: Create a Communication
- GET /Communication/{id}/ — getCommunication: Read one Communication
- PUT /Communication/{id}/ — updateCommunication: Replace a Communication
- PATCH /Communication/{id}/ — patchCommunication: Partially update a Communication
- DELETE /Communication/{id}/ — deleteCommunication: Delete a Communication

## CommunicationRequest
- GET /CommunicationRequest/ — searchCommunicationRequest: Search CommunicationRequest resources
- POST /CommunicationRequest/ — createCommunicationRequest: Create a CommunicationRequest
- GET /CommunicationRequest/{id}/ — getCommunicationRequest: Read one CommunicationRequest
- PUT /CommunicationRequest/{id}/ — updateCommunicationRequest: Replace a CommunicationRequest
- PATCH /CommunicationRequest/{id}/ — patchCommunicationRequest: Partially update a CommunicationRequest
- DELETE /CommunicationRequest/{id}/ — deleteCommunicationRequest: Delete a CommunicationRequest

## Contract
- GET /Contract/ — searchContract: Search Contract resources
- POST /Contract/ — createContract: Create a Contract
- GET /Contract/{id}/ — getContract: Read one Contract
- PUT /Contract/{id}/ — updateContract: Replace a Contract
- PATCH /Contract/{id}/ — patchContract: Partially update a Contract
- DELETE /Contract/{id}/ — deleteContract: Delete a Contract

## Coverage
- GET /Coverage/ — searchCoverage: Search Coverage resources
- POST /Coverage/ — createCoverage: Create a Coverage
- GET /Coverage/{id}/ — getCoverage: Read one Coverage
- PUT /Coverage/{id}/ — updateCoverage: Replace a Coverage
- PATCH /Coverage/{id}/ — patchCoverage: Partially update a Coverage
- DELETE /Coverage/{id}/ — deleteCoverage: Delete a Coverage

## CoverageEligibilityRequest
- POST /CoverageEligibilityRequest/ — createCoverageEligibilityRequest: Create a CoverageEligibilityRequest
- PUT /CoverageEligibilityRequest/{id}/ — updateCoverageEligibilityRequest: Replace a CoverageEligibilityRequest
- PATCH /CoverageEligibilityRequest/{id}/ — patchCoverageEligibilityRequest: Partially update a CoverageEligibilityRequest
- DELETE /CoverageEligibilityRequest/{id}/ — deleteCoverageEligibilityRequest: Delete a CoverageEligibilityRequest

## Group
- GET /Group/ — searchGroup: Search Group resources
- POST /Group/ — createGroup: Create a Group
- GET /Group/{id}/ — getGroup: Read one Group
- PUT /Group/{id}/ — updateGroup: Replace a Group
- PATCH /Group/{id}/ — patchGroup: Partially update a Group
- DELETE /Group/{id}/ — deleteGroup: Delete a Group

## InsurancePlan
- GET /InsurancePlan/ — searchInsurancePlan: Search InsurancePlan resources
- POST /InsurancePlan/ — createInsurancePlan: Create an InsurancePlan
- GET /InsurancePlan/{id}/ — getInsurancePlan: Read one InsurancePlan
- PUT /InsurancePlan/{id}/ — updateInsurancePlan: Replace an InsurancePlan
- PATCH /InsurancePlan/{id}/ — patchInsurancePlan: Partially update an InsurancePlan
- DELETE /InsurancePlan/{id}/ — deleteInsurancePlan: Delete an InsurancePlan

## Invoice
- GET /Invoice/ — searchInvoice: Search Invoice resources
- POST /Invoice/ — createInvoice: Create an Invoice
- GET /Invoice/{id}/ — getInvoice: Read one Invoice
- PUT /Invoice/{id}/ — updateInvoice: Replace an Invoice
- PATCH /Invoice/{id}/ — patchInvoice: Partially update an Invoice
- DELETE /Invoice/{id}/ — deleteInvoice: Delete an Invoice

## Location
- GET /Location/ — searchLocation: Search Location resources
- POST /Location/ — createLocation: Create a Location
- GET /Location/{id}/ — getLocation: Read one Location
- PUT /Location/{id}/ — updateLocation: Replace a Location
- PATCH /Location/{id}/ — patchLocation: Partially update a Location
- DELETE /Location/{id}/ — deleteLocation: Delete a Location

## Medication
- GET /Medication/ — searchMedication: Search Medication resources
- POST /Medication/ — createMedication: Create a Medication
- GET /Medication/{id}/ — getMedication: Read one Medication
- PUT /Medication/{id}/ — updateMedication: Replace a Medication
- PATCH /Medication/{id}/ — patchMedication: Partially update a Medication
- DELETE /Medication/{id}/ — deleteMedication: Delete a Medication

## Organization
- GET /Organization/ — searchOrganization: Search Organization resources
- POST /Organization/ — createOrganization: Create an Organization
- GET /Organization/{id}/ — getOrganization: Read one Organization
- PUT /Organization/{id}/ — updateOrganization: Replace an Organization
- PATCH /Organization/{id}/ — patchOrganization: Partially update an Organization
- DELETE /Organization/{id}/ — deleteOrganization: Delete an Organization

## Patient
- GET /Patient/ — searchPatient: Search Patient resources
- POST /Patient/ — createPatient: Create a Patient
- GET /Patient/{id}/ — getPatient: Read one Patient
- PUT /Patient/{id}/ — updatePatient: Replace a Patient
- PATCH /Patient/{id}/ — patchPatient: Partially update a Patient
- DELETE /Patient/{id}/ — deletePatient: Delete a Patient

## PaymentNotice
- GET /PaymentNotice/ — searchPaymentNotice: Search PaymentNotice resources
- POST /PaymentNotice/ — createPaymentNotice: Create a PaymentNotice
- GET /PaymentNotice/{id}/ — getPaymentNotice: Read one PaymentNotice
- PUT /PaymentNotice/{id}/ — updatePaymentNotice: Replace a PaymentNotice
- PATCH /PaymentNotice/{id}/ — patchPaymentNotice: Partially update a PaymentNotice
- DELETE /PaymentNotice/{id}/ — deletePaymentNotice: Delete a PaymentNotice

## Practitioner
- GET /Practitioner/ — searchPractitioner: Search Practitioner resources
- POST /Practitioner/ — createPractitioner: Create a Practitioner
- GET /Practitioner/{id}/ — getPractitioner: Read one Practitioner
- PUT /Practitioner/{id}/ — updatePractitioner: Replace a Practitioner
- PATCH /Practitioner/{id}/ — patchPractitioner: Partially update a Practitioner
- DELETE /Practitioner/{id}/ — deletePractitioner: Delete a Practitioner

## PractitionerRole
- GET /PractitionerRole/ — searchPractitionerRole: Search PractitionerRole resources
- POST /PractitionerRole/ — createPractitionerRole: Create a PractitionerRole
- GET /PractitionerRole/{id}/ — getPractitionerRole: Read one PractitionerRole
- PUT /PractitionerRole/{id}/ — updatePractitionerRole: Replace a PractitionerRole
- PATCH /PractitionerRole/{id}/ — patchPractitionerRole: Partially update a PractitionerRole
- DELETE /PractitionerRole/{id}/ — deletePractitionerRole: Delete a PractitionerRole

## Subscription
- GET /Subscription/ — searchSubscription: Search Subscription resources
- POST /Subscription/ — createSubscription: Create a Subscription
- GET /Subscription/{id}/ — getSubscription: Read one Subscription
- PUT /Subscription/{id}/ — updateSubscription: Replace a Subscription
- PATCH /Subscription/{id}/ — patchSubscription: Partially update a Subscription
- DELETE /Subscription/{id}/ — deleteSubscription: Delete a Subscription

## ValueSet
- GET /ValueSet/items-pricelist/ — searchValueSetItemsPricelist: Search the items-pricelist ValueSet
- POST /ValueSet/items-pricelist/ — createValueSetItemsPricelist: Create a items-pricelist ValueSet entry
- GET /ValueSet/items-pricelist/{id}/ — getValueSetItemsPricelist: Read one items-pricelist ValueSet entry
- PUT /ValueSet/items-pricelist/{id}/ — updateValueSetItemsPricelist: Replace a items-pricelist ValueSet entry
- PATCH /ValueSet/items-pricelist/{id}/ — patchValueSetItemsPricelist: Partially update a items-pricelist ValueSet entry
- GET /ValueSet/services-pricelist/ — searchValueSetServicesPricelist: Search the services-pricelist ValueSet
- POST /ValueSet/services-pricelist/ — createValueSetServicesPricelist: Create a services-pricelist ValueSet entry
- GET /ValueSet/services-pricelist/{id}/ — getValueSetServicesPricelist: Read one services-pricelist ValueSet entry
- PUT /ValueSet/services-pricelist/{id}/ — updateValueSetServicesPricelist: Replace a services-pricelist ValueSet entry
- PATCH /ValueSet/services-pricelist/{id}/ — patchValueSetServicesPricelist: Partially update a services-pricelist ValueSet entry

## login
- POST /login/ — login: Authenticate and obtain a bearer token
