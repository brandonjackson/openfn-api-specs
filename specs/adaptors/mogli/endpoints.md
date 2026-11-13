# Mogli SMS for Salesforce (Apex REST and Mogli Message sObject) (mogli) vMogli_SMS/v1

<!-- derived from openapi.json by `pnpm specs index mogli` — do not edit by hand -->

base: https://{instance}.my.salesforce.com | auth: http/bearer | 9 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Login
- POST /services/Soap/u/{apiVersion} — soapLogin: Log in to Salesforce (SOAP partner login)

## Mogli Message
- POST /services/data/v{apiVersion}/sobjects/Mogli_SMS__SMS__c — createMogliMessage: Create a Mogli Message record
- GET /services/data/v{apiVersion}/sobjects/Mogli_SMS__SMS__c/describe — describeMogliMessage: Describe the Mogli Message object
- GET /services/data/v{apiVersion}/sobjects/Mogli_SMS__SMS__c/{id} — getMogliMessage: Get a Mogli Message record
- PATCH /services/data/v{apiVersion}/sobjects/Mogli_SMS__SMS__c/{id} — updateMogliMessage: Update a Mogli Message record
- DELETE /services/data/v{apiVersion}/sobjects/Mogli_SMS__SMS__c/{id} — deleteMogliMessage: Delete a Mogli Message record
- GET /services/data/v{apiVersion}/query — queryMogliMessages: Query Mogli Message records with SOQL

## Mogli SMS Apex REST
- POST /services/apexrest/Mogli_SMS/v1/sms — createInboundSms: Record an inbound SMS in Mogli
- PUT /services/apexrest/Mogli_SMS/v1/sms — updateSmsStatus: Update a Mogli message's status
