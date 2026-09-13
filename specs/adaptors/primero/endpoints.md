# Primero API v2 (mock subset) (primero) v2.0

<!-- derived from openapi.json by `pnpm specs index primero` — do not edit by hand -->

base: https://primero.example.org | auth: not declared | 11 operations in 5 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## cases
- GET /api/v2/cases — getCases: Query cases
- POST /api/v2/cases — createCase: Create a case
- GET /api/v2/cases/{id} — getCase: Get a case by id
- PATCH /api/v2/cases/{id} — updateCase: Update a case
- GET /api/v2/cases/{caseId}/referrals — getReferrals: List referrals for a case
- POST /api/v2/cases/referrals — createReferrals: Bulk refer one or more cases
- PATCH /api/v2/cases/{caseId}/referrals/{id} — updateReferral: Update a single referral for a case

## forms
- GET /api/v2/forms — getForms: List form sections

## locations
- GET /api/v2/locations — getLocations: List locations

## lookups
- GET /api/v2/lookups — getLookups: List lookups

## tokens
- POST /api/v2/tokens — createToken: Authenticate and obtain a session token
