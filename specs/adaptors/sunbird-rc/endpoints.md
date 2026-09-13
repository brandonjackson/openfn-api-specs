# Sunbird RC - Issuance APIs (sunbird-rc) v1.0.0

<!-- derived from openapi.json by `pnpm specs index sunbird-rc` — do not edit by hand -->

base: https://sunbirdrc.dev/api/v1 | auth: apiKey (header Token) | 6 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Issuing
- POST /credentials/issue — credentialIssue: Credential claim API
- GET /credentials/{id} — getCredentialsById: Get credentials by id
- DELETE /credentials/{id} — revokeCredentialsById: Revoke credentials by id
- POST /credentials/search — searchCredentials: Search credentials by issuer and subject

## Revocation
- GET /credentials/revocation-list — Complete list of revoked credentials (Need to be discussed)

## Verifying
- GET /credentials/{id}/verify — Verifies a verifiableCredential and returns a verificationResult in the response body.
