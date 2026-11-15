# Sunbird RC (sunbird-rc) v1.0.0

<!-- derived from openapi.json by `pnpm specs index sunbird-rc` — do not edit by hand -->

base: https://sunbirdrc.dev/api/v1, https://{registryHost} | auth: apiKey (header Token) | 70 operations in 14 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Credential Schemas
- GET /credential-schema — getCredentialSchemas: Get credential schema by tags
- POST /credential-schema — createCredentialSchema: Create credential schema
- GET /credential-schema/{id} — getCredentialSchema: Get credential schema by id
- PUT /credential-schema/{id} — updateCredentialSchema: Update credential schema by id

## Health
- GET /health — AppController_checkHealth

## Identity
- POST /did/generate — DidController_generateDID: Generate a new DID
- GET /did/resolve/{id} — DidController_resolveDID: Resolve a DID ID

## Issuing
- POST /credentials/issue — credentialIssue: Credential claim API
- GET /credentials/{id} — getCredentialsById: Get credentials by id
- DELETE /credentials/{id} — revokeCredentialsById: Revoke credentials by id
- POST /credentials/search — searchCredentials: Search credentials by issuer and subject

## Registry
- GET /api/v1/{entityName} — registryListOwnEntities: List the caller's records
- POST /api/v1/{entityName} — registryCreateEntity: Create a record
- GET /api/v1/{entityName}/{entityId} — registryGetEntity: Read a record
- PUT /api/v1/{entityName}/{entityId} — registryUpdateEntity: Replace a record
- PATCH /api/v1/{entityName}/{entityId} — registryPatchEntity: Patch a record (owner/system fields)
- DELETE /api/v1/{entityName}/{entityId} — registryDeleteEntity: Delete a record
- GET /api/v1/{entityName}/search — registrySearchEntitiesByQuery: Search records
- POST /api/v1/{entityName}/search — registrySearchEntities: Search records
- POST /api/v1/{entityName}/invite — registryInviteEntity: Invite (create a record and its owner account)
- GET /api/v1/{entityName}/sign — registrySignedEntityByToken: Get the caller's record as a signed credential
- POST /api/v1/{entityName}/{entityId}/revoke — registryRevokeCredential: Revoke a record's credential
- GET /api/v1/{entityName}/{entityId}/attestationProperties — registryGetAttestationProperties: Read a record for attestation (deprecated)
- GET /api/v1/{entityName}/{entityId}/attestation/{attestationName}/{attestationId} — registryGetAttestation: Read an attestation
- PUT /api/v1/{entityName}/{entityId}/attestation/{attestationName}/{attestationId} — registryUpdateAttestation: Update an attestation (attestor callback)
- POST /api/v1/system/{property}/{propertyId} — registryUpdateSystemProperty: Update a system property (internal callback)
- POST /api/v1/{entityName}/{entityId}/{property} — registryAddProperty: Add an item to a record property (array field)
- POST /api/v1/{entityName}/{entityId}/{property}/{propertyId} — registryAddNestedProperty: Add to a nested record property
- PUT /api/v1/{entityName}/{entityId}/{property}/{propertyId} — registryUpdateProperty: Update a record property item
- GET /partner/api/v1/{entityName} — registryPartnerListEntities: List records (partner/service account)

## Registry (legacy)
- POST /add — registryLegacyAdd: Add a record (legacy envelope API) (deprecated)
- POST /read — registryLegacyRead: Read a record (legacy) (deprecated)
- POST /update — registryLegacyUpdate: Update a record (legacy) (deprecated)
- POST /delete — registryLegacyDelete: Delete a record (legacy) (deprecated)
- POST /search — registryLegacySearch: Search records (legacy) (deprecated)
- GET /registers — registryLegacyListRegisters: List registers (legacy) (deprecated)
- GET /registry/{entity} — registryLegacyListEntity: List an entity type (legacy) (deprecated)

## Registry attestation policies
- POST /api/v1/{entityName}/attestationPolicy — registryCreateAttestationPolicy: Create an attestation policy
- GET /api/v1/{entityName}/attestationPolicies — registryListAttestationPolicies: List attestation policies
- PUT /api/v1/{entityName}/attestationPolicy/{policyId} — registryUpdateAttestationPolicy: Update an attestation policy
- DELETE /api/v1/{entityName}/attestationPolicy/{policyId} — registryDeleteAttestationPolicy: Delete an attestation policy
- PUT /api/v1/{entityName}/attestationPolicy/{policyId}/{status} — registrySetAttestationPolicyStatus: Activate or deactivate an attestation policy

## Registry claims
- GET /api/v1/{entityName}/claims — registryListClaims: List claims for the attestor
- GET /api/v1/{entityName}/claims/{claimId} — registryGetClaim: Read a claim
- POST /api/v1/{entityName}/claims/{claimId}/attest — registryAttestClaim: Grant or deny a claim
- POST /api/v1/send — registrySendForAttestation: Raise a claim (send a property for attestation)
- PUT /api/v1/send — registrySendForAttestationPut: Raise a claim (send a property for attestation)

## Registry documents
- POST /api/v1/{entityName}/{entityId}/{property}/documents — registryUploadDocuments: Upload documents to a record property
- DELETE /api/v1/{entityName}/{entityId}/{property}/documents — registryDeleteDocuments: Delete documents from a record property
- GET /api/v1/{entityName}/{entityId}/{property}/documents/{documentId} — registryGetDocument: Download a document
- PUT /api/v1/{entityName}/{entityId}/{property}/documents/{documentId} — registryReplaceDocument: Replace a document
- DELETE /api/v1/{entityName}/{entityId}/{property}/documents/{documentId} — registryDeleteDocument: Delete a document

## Registry utils
- GET /api/v1/templates/{fileName} — registryGetTemplate: Get a certificate template file
- POST /api/v1/verify — registryVerifyCertificate: Verify a signed certificate
- GET /api/docs/swagger.json — registrySwaggerDoc: The deployment's generated Swagger 2.0 for its registered entities
- GET /api/docs/user/swagger.json — registryUserSwaggerDoc: Generated Swagger for user-facing entities
- GET /api/docs/{file}.json — registryEntitySchemaDoc: An entity's resolved JSON schema
- GET /utils/keys/{id} — registryGetSigningKey: Get a signing public key
- GET /utils/sign/health — registrySignHealth: Signature service health
- GET /audit — registryAuditGet: Query the audit log
- POST /audit — registryAudit: Query the audit log

## Rendering Templates
- GET /template — getRenderingTemplatesBySchemaId: Get rendering templates by schema id
- POST /template — createRenderingTemplates: Create redenring templates
- GET /template/{id} — getRenderingTemplates: Get rendering templates by id
- PUT /template/{id} — updateRenderingTemplates: Update rendering templates by id
- DELETE /template/{id} — deleteRenderingTemplates: Delete rendering templates by id

## Revocation
- GET /credentials/revocation-list — Complete list of revoked credentials (Need to be discussed)

## Utils
- POST /utils/sign — VcController_sign: Sign an unsigned VC
- POST /utils/verify — VcController_verify: Verify a signed VC

## Verifying
- GET /credentials/{id}/verify — Verifies a verifiableCredential and returns a verificationResult in the response body.
