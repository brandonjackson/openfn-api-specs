# Beyonic API (beyonic) vv6

<!-- derived from openapi.json by `pnpm specs index beyonic` — do not edit by hand -->

base: https://api.beyonic.com/api, https://api.beyonic.com/api/{version} | auth: apiKey (header Authorization) | 27 operations in 11 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Accounts
- GET /accounts — listAccounts: List accounts
- GET /accounts/{id} — getAccount: Retrieve an account

## Banks
- GET /banks — listBanks: List banks

## Collection Requests
- GET /collectionrequests — listCollectionRequests: List collection requests
- POST /collectionrequests — createCollectionRequest: Create a collection request
- GET /collectionrequests/{id} — getCollectionRequest: Retrieve a collection request

## Collections
- GET /collections — listCollections: List collections
- GET /collections/{id} — getCollection: Retrieve a collection

## Contacts
- GET /contacts — listContacts: List contacts
- POST /contacts — createContact: Create a contact
- GET /contacts/{id} — getContact: Retrieve a contact

## Currencies
- GET /currencies — listCurrencies: List currencies
- GET /currencies/{id} — getCurrency: Retrieve a currency

## Events
- GET /events — listEvents: List events
- GET /events/{id} — getEvent: Retrieve an event

## Networks
- GET /networks — listNetworks: List networks
- GET /networks/{id} — getNetwork: Retrieve a network

## Payments
- GET /payments — listPayments: List payments
- POST /payments — createPayment: Create a payment
- GET /payments/{id} — getPayment: Retrieve a payment

## Transactions
- GET /transactions — listTransactions: List transactions
- GET /transactions/{id} — getTransaction: Retrieve a transaction

## Webhooks
- GET /webhooks — listWebhooks: List webhooks
- POST /webhooks — createWebhook: Create a webhook
- GET /webhooks/{id} — getWebhook: Retrieve a webhook
- PUT /webhooks/{id} — updateWebhook: Update a webhook
- DELETE /webhooks/{id} — deleteWebhook: Delete a webhook
