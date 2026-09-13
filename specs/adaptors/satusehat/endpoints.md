# SatuSehat Platform API (satusehat) v1.0

<!-- derived from openapi.json by `pnpm specs index satusehat` — do not edit by hand -->

base: https://api-satusehat.kemkes.go.id, https://api-satusehat-stg.dto.kemkes.go.id | auth: http/bearer | 152 operations in 33 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## AllergyIntolerance
- GET /fhir-r4/v1/AllergyIntolerance — searchAllergyIntolerance: Search AllergyIntolerance resources
- POST /fhir-r4/v1/AllergyIntolerance — createAllergyIntolerance: Create a AllergyIntolerance
- GET /fhir-r4/v1/AllergyIntolerance/{id} — readAllergyIntolerance: Read one AllergyIntolerance by id
- PUT /fhir-r4/v1/AllergyIntolerance/{id} — updateAllergyIntolerance: Update a AllergyIntolerance
- PATCH /fhir-r4/v1/AllergyIntolerance/{id} — patchAllergyIntolerance: Patch a AllergyIntolerance

## Appointment
- GET /fhir-r4/v1/Appointment — searchAppointment: Search Appointment resources
- POST /fhir-r4/v1/Appointment — createAppointment: Create a Appointment
- GET /fhir-r4/v1/Appointment/{id} — readAppointment: Read one Appointment by id
- PUT /fhir-r4/v1/Appointment/{id} — updateAppointment: Update a Appointment
- PATCH /fhir-r4/v1/Appointment/{id} — patchAppointment: Patch a Appointment

## AppointmentResponse
- GET /fhir-r4/v1/AppointmentResponse — searchAppointmentResponse: Search AppointmentResponse resources
- POST /fhir-r4/v1/AppointmentResponse — createAppointmentResponse: Create a AppointmentResponse
- GET /fhir-r4/v1/AppointmentResponse/{id} — readAppointmentResponse: Read one AppointmentResponse by id
- PUT /fhir-r4/v1/AppointmentResponse/{id} — updateAppointmentResponse: Update a AppointmentResponse
- PATCH /fhir-r4/v1/AppointmentResponse/{id} — patchAppointmentResponse: Patch a AppointmentResponse

## Authentication
- POST /oauth2/v1/accesstoken — getAccessToken: Exchange client credentials for a bearer token

## CarePlan
- GET /fhir-r4/v1/CarePlan — searchCarePlan: Search CarePlan resources
- POST /fhir-r4/v1/CarePlan — createCarePlan: Create a CarePlan
- GET /fhir-r4/v1/CarePlan/{id} — readCarePlan: Read one CarePlan by id
- PUT /fhir-r4/v1/CarePlan/{id} — updateCarePlan: Update a CarePlan
- PATCH /fhir-r4/v1/CarePlan/{id} — patchCarePlan: Patch a CarePlan

## ClinicalImpression
- GET /fhir-r4/v1/ClinicalImpression — searchClinicalImpression: Search ClinicalImpression resources
- POST /fhir-r4/v1/ClinicalImpression — createClinicalImpression: Create a ClinicalImpression
- GET /fhir-r4/v1/ClinicalImpression/{id} — readClinicalImpression: Read one ClinicalImpression by id
- PUT /fhir-r4/v1/ClinicalImpression/{id} — updateClinicalImpression: Update a ClinicalImpression
- PATCH /fhir-r4/v1/ClinicalImpression/{id} — patchClinicalImpression: Patch a ClinicalImpression

## Composition
- GET /fhir-r4/v1/Composition — searchComposition: Search Composition resources
- POST /fhir-r4/v1/Composition — createComposition: Create a Composition
- GET /fhir-r4/v1/Composition/{id} — readComposition: Read one Composition by id
- PUT /fhir-r4/v1/Composition/{id} — updateComposition: Update a Composition
- PATCH /fhir-r4/v1/Composition/{id} — patchComposition: Patch a Composition

## Condition
- GET /fhir-r4/v1/Condition — searchCondition: Search Condition resources
- POST /fhir-r4/v1/Condition — createCondition: Create a Condition
- GET /fhir-r4/v1/Condition/{id} — readCondition: Read one Condition by id
- PUT /fhir-r4/v1/Condition/{id} — updateCondition: Update a Condition
- PATCH /fhir-r4/v1/Condition/{id} — patchCondition: Patch a Condition

## DiagnosticReport
- GET /fhir-r4/v1/DiagnosticReport — searchDiagnosticReport: Search DiagnosticReport resources
- POST /fhir-r4/v1/DiagnosticReport — createDiagnosticReport: Create a DiagnosticReport
- GET /fhir-r4/v1/DiagnosticReport/{id} — readDiagnosticReport: Read one DiagnosticReport by id
- PUT /fhir-r4/v1/DiagnosticReport/{id} — updateDiagnosticReport: Update a DiagnosticReport
- PATCH /fhir-r4/v1/DiagnosticReport/{id} — patchDiagnosticReport: Patch a DiagnosticReport

## Encounter
- GET /fhir-r4/v1/Encounter — searchEncounter: Search Encounter resources
- POST /fhir-r4/v1/Encounter — createEncounter: Create a Encounter
- GET /fhir-r4/v1/Encounter/{id} — readEncounter: Read one Encounter by id
- PUT /fhir-r4/v1/Encounter/{id} — updateEncounter: Update a Encounter
- PATCH /fhir-r4/v1/Encounter/{id} — patchEncounter: Patch a Encounter

## EpisodeOfCare
- GET /fhir-r4/v1/EpisodeOfCare — searchEpisodeOfCare: Search EpisodeOfCare resources
- POST /fhir-r4/v1/EpisodeOfCare — createEpisodeOfCare: Create a EpisodeOfCare
- GET /fhir-r4/v1/EpisodeOfCare/{id} — readEpisodeOfCare: Read one EpisodeOfCare by id
- PUT /fhir-r4/v1/EpisodeOfCare/{id} — updateEpisodeOfCare: Update a EpisodeOfCare
- PATCH /fhir-r4/v1/EpisodeOfCare/{id} — patchEpisodeOfCare: Patch a EpisodeOfCare

## FamilyMemberHistory
- GET /fhir-r4/v1/FamilyMemberHistory — searchFamilyMemberHistory: Search FamilyMemberHistory resources
- POST /fhir-r4/v1/FamilyMemberHistory — createFamilyMemberHistory: Create a FamilyMemberHistory
- GET /fhir-r4/v1/FamilyMemberHistory/{id} — readFamilyMemberHistory: Read one FamilyMemberHistory by id
- PUT /fhir-r4/v1/FamilyMemberHistory/{id} — updateFamilyMemberHistory: Update a FamilyMemberHistory
- PATCH /fhir-r4/v1/FamilyMemberHistory/{id} — patchFamilyMemberHistory: Patch a FamilyMemberHistory

## HealthcareService
- GET /fhir-r4/v1/HealthcareService — searchHealthcareService: Search HealthcareService resources
- POST /fhir-r4/v1/HealthcareService — createHealthcareService: Create a HealthcareService
- GET /fhir-r4/v1/HealthcareService/{id} — readHealthcareService: Read one HealthcareService by id
- PUT /fhir-r4/v1/HealthcareService/{id} — updateHealthcareService: Update a HealthcareService
- PATCH /fhir-r4/v1/HealthcareService/{id} — patchHealthcareService: Patch a HealthcareService

## ImagingStudy
- GET /fhir-r4/v1/ImagingStudy — searchImagingStudy: Search ImagingStudy resources
- POST /fhir-r4/v1/ImagingStudy — createImagingStudy: Create a ImagingStudy
- PUT /fhir-r4/v1/ImagingStudy/{id} — updateImagingStudy: Update a ImagingStudy

## Immunization
- GET /fhir-r4/v1/Immunization — searchImmunization: Search Immunization resources
- POST /fhir-r4/v1/Immunization — createImmunization: Create a Immunization
- GET /fhir-r4/v1/Immunization/{id} — readImmunization: Read one Immunization by id
- PUT /fhir-r4/v1/Immunization/{id} — updateImmunization: Update a Immunization
- PATCH /fhir-r4/v1/Immunization/{id} — patchImmunization: Patch a Immunization

## KFA
- GET /kfa/farmalkes-price-jkn — listFarmalkesPricesJkn: JKN reference prices for KFA products
- GET /kfa-v2/products — getKfaProduct: Look up one KFA product
- GET /kfa-v2/products/all — listKfaProducts: List KFA products
- POST /kfa-v3/alkes/products — searchKfaAlkesProducts: Search KFA v3 medical-device products
- POST /kfa-v3/alkes/template — searchKfaAlkesTemplates: Search KFA v3 medical-device templates

## KYC
- POST /kyc/v1/generate-url — generateKycUrl: Generate a KYC validation URL
- POST /kyc/v1/challenge-code — requestKycChallengeCode: Request a patient verification challenge code

## Location
- GET /fhir-r4/v1/Location — searchLocation: Search Location resources
- POST /fhir-r4/v1/Location — createLocation: Create a Location
- GET /fhir-r4/v1/Location/{id} — readLocation: Read one Location by id
- PUT /fhir-r4/v1/Location/{id} — updateLocation: Update a Location
- PATCH /fhir-r4/v1/Location/{id} — patchLocation: Patch a Location

## MasterData
- GET /masterdata/v1/mastersaranaindex/mastersarana — listMasterSarana: List healthcare facilities (Master Sarana Index)
- GET /masterdata/v1/provinces — listProvinceV1: List provinsi (master wilayah v1)
- GET /masterdata/v2/provinces — listProvinceV2: List provinsi (master wilayah v2)
- GET /masterdata/v1/cities — listCityV1: List kabupaten/kota (master wilayah v1)
- GET /masterdata/v2/cities — listCityV2: List kabupaten/kota (master wilayah v2)
- GET /masterdata/v1/districts — listDistrictV1: List kecamatan (master wilayah v1)
- GET /masterdata/v2/districts — listDistrictV2: List kecamatan (master wilayah v2)
- GET /masterdata/v1/sub-districts — listSubDistrictV1: List kelurahan/desa (master wilayah v1)
- GET /masterdata/v2/sub-districts — listSubDistrictV2: List kelurahan/desa (master wilayah v2)

## Medication
- GET /fhir-r4/v1/Medication/{id} — readMedication: Read one Medication by id
- PUT /fhir-r4/v1/Medication/{id} — updateMedication: Update a Medication
- PATCH /fhir-r4/v1/Medication/{id} — patchMedication: Patch a Medication
- POST /fhir-r4/v1/Medication — createMedication: Create a Medication

## MedicationDispense
- GET /fhir-r4/v1/MedicationDispense — searchMedicationDispense: Search MedicationDispense resources
- POST /fhir-r4/v1/MedicationDispense — createMedicationDispense: Create a MedicationDispense
- GET /fhir-r4/v1/MedicationDispense/{id} — readMedicationDispense: Read one MedicationDispense by id
- PUT /fhir-r4/v1/MedicationDispense/{id} — updateMedicationDispense: Update a MedicationDispense
- PATCH /fhir-r4/v1/MedicationDispense/{id} — patchMedicationDispense: Patch a MedicationDispense

## MedicationRequest
- GET /fhir-r4/v1/MedicationRequest — searchMedicationRequest: Search MedicationRequest resources
- POST /fhir-r4/v1/MedicationRequest — createMedicationRequest: Create a MedicationRequest
- GET /fhir-r4/v1/MedicationRequest/{id} — readMedicationRequest: Read one MedicationRequest by id
- PUT /fhir-r4/v1/MedicationRequest/{id} — updateMedicationRequest: Update a MedicationRequest
- PATCH /fhir-r4/v1/MedicationRequest/{id} — patchMedicationRequest: Patch a MedicationRequest

## Observation
- GET /fhir-r4/v1/Observation — searchObservation: Search Observation resources
- POST /fhir-r4/v1/Observation — createObservation: Create a Observation
- GET /fhir-r4/v1/Observation/{id} — readObservation: Read one Observation by id
- PUT /fhir-r4/v1/Observation/{id} — updateObservation: Update a Observation
- PATCH /fhir-r4/v1/Observation/{id} — patchObservation: Patch a Observation

## Organization
- GET /fhir-r4/v1/Organization — searchOrganization: Search Organization resources
- POST /fhir-r4/v1/Organization — createOrganization: Create a Organization
- GET /fhir-r4/v1/Organization/{id} — readOrganization: Read one Organization by id
- PUT /fhir-r4/v1/Organization/{id} — updateOrganization: Update a Organization
- PATCH /fhir-r4/v1/Organization/{id} — patchOrganization: Patch a Organization

## Patient
- GET /fhir-r4/v1/Patient — searchPatient: Search Patient resources
- POST /fhir-r4/v1/Patient — createPatient: Create a Patient
- GET /fhir-r4/v1/Patient/{id} — readPatient: Read one Patient by id
- PATCH /fhir-r4/v1/Patient/{id} — patchPatient: Patch a Patient

## Practitioner
- GET /fhir-r4/v1/Practitioner — searchPractitioner: Search Practitioner resources
- GET /fhir-r4/v1/Practitioner/{id} — readPractitioner: Read one Practitioner by id

## PractitionerRole
- GET /fhir-r4/v1/PractitionerRole — searchPractitionerRole: Search PractitionerRole resources
- POST /fhir-r4/v1/PractitionerRole — createPractitionerRole: Create a PractitionerRole
- GET /fhir-r4/v1/PractitionerRole/{id} — readPractitionerRole: Read one PractitionerRole by id
- PUT /fhir-r4/v1/PractitionerRole/{id} — updatePractitionerRole: Update a PractitionerRole
- PATCH /fhir-r4/v1/PractitionerRole/{id} — patchPractitionerRole: Patch a PractitionerRole

## Procedure
- GET /fhir-r4/v1/Procedure — searchProcedure: Search Procedure resources
- POST /fhir-r4/v1/Procedure — createProcedure: Create a Procedure
- GET /fhir-r4/v1/Procedure/{id} — readProcedure: Read one Procedure by id
- PUT /fhir-r4/v1/Procedure/{id} — updateProcedure: Update a Procedure
- PATCH /fhir-r4/v1/Procedure/{id} — patchProcedure: Patch a Procedure

## QuestionnaireResponse
- GET /fhir-r4/v1/QuestionnaireResponse — searchQuestionnaireResponse: Search QuestionnaireResponse resources
- POST /fhir-r4/v1/QuestionnaireResponse — createQuestionnaireResponse: Create a QuestionnaireResponse
- GET /fhir-r4/v1/QuestionnaireResponse/{id} — readQuestionnaireResponse: Read one QuestionnaireResponse by id
- PUT /fhir-r4/v1/QuestionnaireResponse/{id} — updateQuestionnaireResponse: Update a QuestionnaireResponse

## RelatedPerson
- GET /fhir-r4/v1/RelatedPerson — searchRelatedPerson: Search RelatedPerson resources
- POST /fhir-r4/v1/RelatedPerson — createRelatedPerson: Create a RelatedPerson
- PUT /fhir-r4/v1/RelatedPerson/{id} — updateRelatedPerson: Update a RelatedPerson
- PATCH /fhir-r4/v1/RelatedPerson/{id} — patchRelatedPerson: Patch a RelatedPerson

## ServiceRequest
- GET /fhir-r4/v1/ServiceRequest — searchServiceRequest: Search ServiceRequest resources
- POST /fhir-r4/v1/ServiceRequest — createServiceRequest: Create a ServiceRequest
- GET /fhir-r4/v1/ServiceRequest/{id} — readServiceRequest: Read one ServiceRequest by id
- PUT /fhir-r4/v1/ServiceRequest/{id} — updateServiceRequest: Update a ServiceRequest
- PATCH /fhir-r4/v1/ServiceRequest/{id} — patchServiceRequest: Patch a ServiceRequest

## Slot
- GET /fhir-r4/v1/Slot/{id} — readSlot: Read one Slot by id
- PUT /fhir-r4/v1/Slot/{id} — updateSlot: Update a Slot
- PATCH /fhir-r4/v1/Slot/{id} — patchSlot: Patch a Slot
- POST /fhir-r4/v1/Slot — createSlot: Create a Slot

## Specimen
- GET /fhir-r4/v1/Specimen — searchSpecimen: Search Specimen resources
- POST /fhir-r4/v1/Specimen — createSpecimen: Create a Specimen
- GET /fhir-r4/v1/Specimen/{id} — readSpecimen: Read one Specimen by id
- PUT /fhir-r4/v1/Specimen/{id} — updateSpecimen: Update a Specimen
- PATCH /fhir-r4/v1/Specimen/{id} — patchSpecimen: Patch a Specimen
