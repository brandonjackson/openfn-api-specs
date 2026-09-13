# Microsoft Dynamics 365 / Dataverse Web API (subset) (dynamics) v9.2

<!-- derived from openapi.json by `pnpm specs index dynamics` — do not edit by hand -->

base: https://org.api.crm.dynamics.com/api/data/v9.2 | auth: not declared | 8 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## accounts
- GET /accounts — queryAccounts: Query accounts
- POST /accounts — createAccount: Create an account

## accounts({accountid})
- PATCH /accounts({accountid}) — updateAccount: Update an account
- DELETE /accounts({accountid}) — deleteAccount: Delete an account

## contacts
- GET /contacts — queryContacts: Query contacts
- POST /contacts — createContact: Create a contact

## contacts({contactid})
- PATCH /contacts({contactid}) — updateContact: Update a contact
- DELETE /contacts({contactid}) — deleteContact: Delete a contact
