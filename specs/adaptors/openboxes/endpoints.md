# OpenBoxes API (mock subset) (openboxes) v0.9.0

<!-- derived from openapi.json by `pnpm specs index openboxes` — do not edit by hand -->

base: https://demo.openboxes.com/openboxes/api | auth: not declared | 13 operations in 5 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## categories
- GET /categories — listCategories: List product categories

## generic
- GET /generic/{resource} — listGenericResource: List records of a domain class via the generic API
- POST /generic/{resource} — createGenericResource: Create/update a record of a domain class via the generic API

## locations
- GET /locations — listLocations: List locations
- POST /locations — createLocation: Create a location
- GET /locations/{id} — getLocation: Get a location

## products
- GET /products — listProducts: List products
- POST /products — createProduct: Create a product
- GET /products/{id} — getProduct: Get a product
- GET /products/{id}/availableItems — getProductAvailableItems: Get available inventory items for a product

## stockMovements
- GET /stockMovements — listStockMovements: List stock movements
- POST /stockMovements — createStockMovement: Create a stock movement
- GET /stockMovements/{id} — getStockMovement: Get a stock movement
