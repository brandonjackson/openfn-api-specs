# Divoc (divoc) v1.0.0

<!-- derived from openapi.json by `pnpm specs index divoc` — do not edit by hand -->

base: https://divoc.xiv.in/divoc/api | auth: oauth2 (authorizationCode) | 23 operations in 11 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## certificateRevoked
- POST /v1/certificate/revoked — certificateRevoked: Check if given certificate is revoked

## certificates
- GET /v1/certificates — getCertificate: Get certificate json

## certification
- POST /v1/certify — certify: Certify the one or more vaccination
- DELETE /v1/certificates/{preEnrollmentCode} — revokeCertificate: Revoke certificates for given preEnrollmentCode and dose(s)
- POST /v1/bulkCertify — bulkCertify: Upload certification csv for bulk ingestion
- GET /v1/certify/uploads — getCertifyUploads: Get all file uploads for certification for given facility admin
- GET /v1/certify/uploads/{uploadId}/errors — getCertifyUploadErrors: Get all the error rows associated with given uploadId
- PUT /v1/certificate — updateCertificate: Update existing certificate request
- PUT /v3/certificate — updateCertificateV3: Update existing certificate request
- POST /v2/certify — certifyV2: Certify the one or more vaccination
- POST /v3/certify — certifyV3: Certify the one or more vaccination

## configuration
- GET /v1/divoc/configuration — getConfiguration: Get Meta information about the application flow
- GET /v1/programs/current — getCurrentPrograms: Get active vaccination programs
- GET /v1/vaccinators — getVaccinators: Get active vaccinators mapped for the facility

## events
- POST /v1/events — events: Send events for monitoring / tracking purpose.

## identity
- POST /v1/identity/verify — postV1IdentityVerify: Validate identity if the person

## login
- POST /authorize — postAuthorize: Establish token

## ping
- GET /v1/ping — getV1Ping: Server heartbeat operation

## reportSideEffects
- POST /v1/report-side-effects — createReportedSideEffects: Create reported side effects

## sideEffects
- GET /v1/sideEffects — getSideEffectsMetadata: Get Side Effects Metadata

## vaccination
- GET /v1/users/me — getLoggedInUserInfo: Get User information
- GET /v1/preEnrollments/{preEnrollmentCode} — getPreEnrollment: Get pre enrollment information
- GET /v1/preEnrollments — getPreEnrollmentsForFacility: Get all pre enrollments applicable to assigned facility
