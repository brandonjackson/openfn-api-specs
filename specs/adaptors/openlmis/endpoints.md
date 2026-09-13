# OpenLMIS API (mock subset) (openlmis) v3.x

<!-- derived from openapi.json by `pnpm specs index openlmis` — do not edit by hand -->

base: https://demo.openlmis.org/api | auth: not declared | 26 operations in 14 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## facilities
- GET /facilities — listFacilities: List/search facilities
- POST /facilities — createFacility: Create a facility
- GET /facilities/{id} — getFacility: Get a facility by id
- PUT /facilities/{id} — updateFacility: Create or update a facility

## facilityTypes
- GET /facilityTypes — listFacilityTypes: List facility types

## geographicZones
- GET /geographicZones — listGeographicZones: List/search geographic zones

## lots
- GET /lots — listLots: List/search lots

## orderables
- GET /orderables — listOrderables: List/search orderables (products)
- POST /orderables — createOrderable: Create an orderable
- GET /orderables/{id} — getOrderable: Get an orderable by id

## orders
- GET /orders — listOrders: List/search orders (fulfillment)
- POST /orders — createOrder: Create an order
- GET /orders/{id} — getOrder: Get an order by id

## processingPeriods
- GET /processingPeriods — listProcessingPeriods: List/search processing periods

## programs
- GET /programs — listPrograms: List/search programs
- POST /programs — createProgram: Create a program
- GET /programs/{id} — getProgram: Get a program by id
- PUT /programs/{id} — updateProgram: Update a program

## requisitions
- GET /requisitions/{id} — getRequisition: Get a requisition by id
- GET /requisitions/search — searchRequisitions: Search requisitions

## stockCardSummaries
- GET /stockCardSummaries — listStockCardSummaries: List stock card summaries (stock on hand)

## stockEvents
- POST /stockEvents — createStockEvent: Submit a stock event (stock management)

## supervisoryNodes
- GET /supervisoryNodes — listSupervisoryNodes: List supervisory nodes

## supplyLines
- GET /supplyLines — listSupplyLines: List/search supply lines

## users
- GET /users — listUsers: List/search users
- GET /users/{id} — getUser: Get a user by id
