# Open mSupply GraphQL API (msupply adaptor subset) (msupply) v2024-10-01

<!-- derived from openapi.json by `pnpm specs index msupply` — do not edit by hand -->

base: https://demo-open.msupply.org | auth: http/bearer (JWT) | 5 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## auth
- POST /graphql#authToken — authToken: Authenticate and obtain a bearer token

## graphql
- POST /graphql — query: Execute an arbitrary GraphQL query or mutation

## items
- POST /graphql#itemsWithStats — getItemsWithStats: Get the list of items in the catalogue with stats

## outbound-shipments
- POST /graphql#insertOutboundShipment — insertOutboundShipment: Create an outbound shipment
- POST /graphql#batchOutboundShipment — upsertOutboundShipment: Update / batch-mutate an outbound shipment
