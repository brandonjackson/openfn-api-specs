# UNHCR PRIMES Interoperability Gateway (PING) API (ping) vv2/v3 (as called by the adaptor)

<!-- derived from openapi.json by `pnpm specs index ping` — do not edit by hand -->

base: {baseUrl} | auth: http/bearer, apiKey (header Ocp-Apim-Subscription-Key) | 3 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Auth
- POST /primespingb2cuat.onmicrosoft.com/b2c_1_msawe-primes-ping-test-apim-rpocuf/oauth2/v2.0/token — requestToken: Get an access token (Azure AD B2C, resource-owner password grant)

## Ingestion
- POST /api/ingestion/v2/{partnerId}/data — ingestData: Ingest records into PRIMES (e.g. update intervention records)

## Retrieval
- POST /primes/fetch/paging/v3/retrievedatawithpaging — retrieveDataWithPaging: Retrieve shared PRIMES data, paged (v3)
