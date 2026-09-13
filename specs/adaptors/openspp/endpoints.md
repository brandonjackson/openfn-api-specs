# OpenSPP API (openspp) v2.0

<!-- derived from openapi.json by `pnpm specs index openspp` — do not edit by hand -->

base: https://{host} | auth: http/bearer (JWT) | 33 operations in 14 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Cycle
- GET /api/v2/spp/Cycle — searchCycles: Search programme cycles
- GET /api/v2/spp/Cycle/{identifier} — getCycle: Read one cycle

## Data
- POST /api/v2/spp/Data/push — pushData: Push variable values
- GET /api/v2/spp/Data/pull — pullData: Pull variable values
- POST /api/v2/spp/Data/invalidate — invalidateData: Invalidate cached variable values
- GET /api/v2/spp/Data/variables — listVariables: List available variables

## Entitlement
- GET /api/v2/spp/Entitlement — searchEntitlements: Search entitlements
- GET /api/v2/spp/Entitlement/{identifier} — getEntitlement: Read one entitlement

## Group
- GET /api/v2/spp/Group — searchGroups: Search group registrants
- POST /api/v2/spp/Group — createGroup: Create a group registrant
- GET /api/v2/spp/Group/{identifier} — getGroup: Read one group registrant

## Individual
- GET /api/v2/spp/Individual — searchIndividuals: Search individual registrants
- POST /api/v2/spp/Individual — createIndividual: Create an individual registrant
- GET /api/v2/spp/Individual/{identifier} — getIndividual: Read one individual registrant

## Product
- GET /api/v2/spp/Product — searchProducts: Search products
- GET /api/v2/spp/Product/{identifier} — getProduct: Read one product
- GET /api/v2/spp/ProductCategory — listProductCategories: List product categories
- GET /api/v2/spp/UnitOfMeasure — listUnitsOfMeasure: List units of measure

## Program
- GET /api/v2/spp/Program — searchPrograms: Search programmes
- GET /api/v2/spp/Program/{identifier} — getProgram: Read one programme

## ProgramMembership
- GET /api/v2/spp/ProgramMembership — searchProgramMemberships: Search programme enrolments
- POST /api/v2/spp/ProgramMembership — createProgramMembership: Enrol a registrant in a programme

## ServicePoint
- GET /api/v2/spp/ServicePoint — searchServicePoints: Search service points
- GET /api/v2/spp/ServicePoint/{identifier} — getServicePoint: Read one service point

## Vocabulary
- GET /api/v2/spp/Vocabulary — listVocabularies: List vocabularies
- GET /api/v2/spp/Vocabulary/{namespace_uri}/codes — listVocabularyCodes: List the codes of one vocabulary

## auth
- POST /api/v2/spp/token — getToken: OAuth 2.0 client-credentials token

## discovery
- GET /api/v2/spp/metadata — getMetadata: Capability statement
- GET /api/v2/spp/openapi.json — getOpenapiSchema: This deployment's generated OpenAPI schema

## jsonrpc
- POST /web/session/authenticate — authenticateSession: Authenticate a session (JSON-RPC)
- POST /jsonrpc — callJsonRpc: Call a model method (execute_kw, JSON-RPC)

## xmlrpc
- POST /xmlrpc/2/common — callCommon: XML-RPC common service (version / authenticate / login)
- POST /xmlrpc/2/object — callObject: XML-RPC object service (execute_kw)
