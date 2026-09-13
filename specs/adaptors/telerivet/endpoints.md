# Telerivet API (telerivet) v1.9.9

<!-- derived from openapi.json by `pnpm specs index telerivet` — do not edit by hand -->

base: https://api.telerivet.com | auth: http/basic, oauth2 (authorizationCode, deviceAuthorization) | 168 operations in 18 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## AirtimeTransaction
- GET /v1/projects/{project_id}/airtime_stats — Project_getAirtimeStats: Get historical airtime transaction statistics
- GET /v1/projects/{project_id}/airtime_transactions — Project_queryAirtimeTransactions: Query airtime transactions
- GET /v1/projects/{project_id}/airtime_transactions/{id} — Project_getAirtimeTransactionById: Get airtime transaction by ID

## Campaign
- GET /v1/projects/{project_id}/campaigns — Project_queryCampaigns: Query campaigns
- POST /v1/projects/{project_id}/campaigns — Project_createCampaign: Create a campaign
- GET /v1/projects/{project_id}/campaigns/{id} — Project_getCampaignById: Get campaign by ID
- POST /v1/projects/{project_id}/campaigns/{id} — Campaign_save: Update campaign details
- DELETE /v1/projects/{project_id}/campaigns/{id} — Campaign_delete: Delete a campaign
- POST /v1/projects/{project_id}/campaigns/{id}/send — Campaign_send: Send or schedule a campaign
- POST /v1/projects/{project_id}/campaigns/{id}/unschedule — Campaign_unschedule: Unschedule a campaign

## Contact
- GET /v1/projects/{project_id}/contact_fields — Project_getContactFields: Get custom contact fields
- POST /v1/projects/{project_id}/contact_fields — Project_updateContactFields: Update custom contact fields
- GET /v1/projects/{project_id}/contact_stats — Project_getContactStats: Get historical contact statistics
- GET /v1/projects/{project_id}/contacts — Project_queryContacts: Query contacts
- POST /v1/projects/{project_id}/contacts — Project_getOrCreateContact: Create, update, or retrieve a contact
- GET /v1/projects/{project_id}/contacts/{id} — Project_getContactById: Get contact by ID
- POST /v1/projects/{project_id}/contacts/{id} — Contact_save: Update contact details
- DELETE /v1/projects/{project_id}/contacts/{id} — Contact_delete: Delete a contact
- GET /v1/projects/{project_id}/contacts/{id}/groups — Contact_queryGroups: Query groups for a contact
- GET /v1/projects/{project_id}/contacts/{id}/messages — Contact_queryMessages: Query messages sent or received by a contact
- GET /v1/projects/{project_id}/contacts/{id}/rows — Contact_queryDataRows: Query data rows for a contact
- GET /v1/projects/{project_id}/contacts/{id}/scheduled — Contact_queryScheduledMessages: Query scheduled messages for a contact
- GET /v1/projects/{project_id}/contacts/{id}/states — Contact_queryServiceStates: Query service states for a contact
- PUT /v1/projects/{project_id}/groups/{group_id}/contacts/{contact_id} — Contact_addToGroup: Add contact to a group
- DELETE /v1/projects/{project_id}/groups/{group_id}/contacts/{contact_id} — Contact_removeFromGroup: Remove contact from a group
- POST /v1/projects/{project_id}/import_contacts — Project_importContacts: Import contacts

## Dashboard
- GET /v1/projects/{project_id}/dashboards — Project_queryDashboards: Query dashboards
- POST /v1/projects/{project_id}/dashboards — Project_createDashboard: Create a dashboard
- GET /v1/projects/{project_id}/dashboards/{id} — Project_getDashboardById: Get dashboard by ID
- POST /v1/projects/{project_id}/dashboards/{id} — Dashboard_save: Update dashboard details
- DELETE /v1/projects/{project_id}/dashboards/{id} — Dashboard_delete: Delete a dashboard
- GET /v1/projects/{project_id}/dashboards/{id}/cards — Dashboard_queryCards: Query cards on a dashboard
- POST /v1/projects/{project_id}/dashboards/{id}/cards — Dashboard_createCard: Add a card to a dashboard
- GET /v1/projects/{project_id}/dashboards/{id}/cards/{card_id} — Dashboard_getCardById: Get dashboard card by ID
- POST /v1/projects/{project_id}/dashboards/{dashboard_id}/cards/{id} — DashboardCard_save: Update dashboard card
- DELETE /v1/projects/{project_id}/dashboards/{dashboard_id}/cards/{id} — DashboardCard_delete: Delete a dashboard card

## DataTable
- POST /v1/projects/{project_id}/create_table — Project_createDataTable: Create a data table
- GET /v1/projects/{project_id}/data_table_stats — Project_getDataTableStats: Get historical data table statistics
- GET /v1/projects/{project_id}/tables — Project_queryDataTables: Query data tables
- POST /v1/projects/{project_id}/tables — Project_getOrCreateDataTable: Create or retrieve a data table by name
- GET /v1/projects/{project_id}/tables/{id} — Project_getDataTableById: Get data table by ID
- POST /v1/projects/{project_id}/tables/{id} — DataTable_save: Update table details
- DELETE /v1/projects/{project_id}/tables/{id} — DataTable_delete: Delete a data table
- GET /v1/projects/{project_id}/tables/{id}/count_rows_by_value — DataTable_countRowsByValue: Count rows by value
- GET /v1/projects/{project_id}/tables/{id}/fields — DataTable_getFields: Get fields in data table
- POST /v1/projects/{project_id}/tables/{id}/fields — DataTable_updateFields: Update fields in data table
- POST /v1/projects/{project_id}/tables/{id}/import_rows — DataTable_importRows: Import data rows
- GET /v1/projects/{project_id}/tables/{id}/rows — DataTable_queryRows: Query rows in a data table
- POST /v1/projects/{project_id}/tables/{id}/rows — DataTable_createRow: Add new data row
- GET /v1/projects/{project_id}/tables/{id}/rows/{row_id} — DataTable_getRowById: Get data row by ID
- POST /v1/projects/{project_id}/tables/{table_id}/rows/{id} — DataRow_save: Update data row
- DELETE /v1/projects/{project_id}/tables/{table_id}/rows/{id} — DataRow_delete: Delete data row
- GET /v1/projects/{project_id}/tables/{id}/views — DataTable_queryViews: Query views of a data table
- POST /v1/projects/{project_id}/tables/{id}/views — DataTable_createView: Create a data table view
- GET /v1/projects/{project_id}/tables/{id}/views/{view_id} — DataTable_getViewById: Get data table view by ID
- POST /v1/projects/{project_id}/tables/{table_id}/views/{id} — DataView_save: Update view details
- DELETE /v1/projects/{project_id}/tables/{table_id}/views/{id} — DataView_delete: Delete a data table view
- GET /v1/projects/{project_id}/tables/{table_id}/views/{id}/rows — DataView_queryRows: Query rows in a data table view

## Group
- POST /v1/projects/{project_id}/create_group — Project_createGroup: Create a group
- GET /v1/projects/{project_id}/groups — Project_queryGroups: Query groups
- POST /v1/projects/{project_id}/groups — Project_getOrCreateGroup: Create or retrieve a group by name
- GET /v1/projects/{project_id}/groups/{id} — Project_getGroupById: Get group by ID
- POST /v1/projects/{project_id}/groups/{id} — Group_save: Update group details
- DELETE /v1/projects/{project_id}/groups/{id} — Group_delete: Delete a group
- GET /v1/projects/{project_id}/groups/{id}/contacts — Group_queryContacts: Query contacts in a group
- GET /v1/projects/{project_id}/groups/{id}/scheduled — Group_queryScheduledMessages: Query scheduled messages to a group

## Label
- GET /v1/projects/{project_id}/labels — Project_queryLabels: Query labels
- POST /v1/projects/{project_id}/labels — Project_getOrCreateLabel: Create or retrieve a label by name
- GET /v1/projects/{project_id}/labels/{id} — Project_getLabelById: Get label by ID
- POST /v1/projects/{project_id}/labels/{id} — Label_save: Update label details
- DELETE /v1/projects/{project_id}/labels/{id} — Label_delete: Delete a label
- GET /v1/projects/{project_id}/labels/{id}/messages — Label_queryMessages: Query messages with a label

## Message
- GET /v1/organizations/{organization_id}/message_stats — Organization_getMessageStats: Get historical message statistics for all projects in organization
- GET /v1/projects/{project_id}/broadcasts — Project_queryBroadcasts: Query broadcasts
- GET /v1/projects/{project_id}/broadcasts/{id} — Project_getBroadcastById: Get broadcast by ID
- POST /v1/projects/{project_id}/broadcasts/{id}/cancel — Broadcast_cancel: Cancel sending a broadcast
- PUT /v1/projects/{project_id}/labels/{label_id}/messages/{message_id} — Message_addLabel: Add a label to a message
- DELETE /v1/projects/{project_id}/labels/{label_id}/messages/{message_id} — Message_removeLabel: Remove a label from a message
- GET /v1/projects/{project_id}/message_fields — Project_getMessageFields: Get custom message fields
- POST /v1/projects/{project_id}/message_fields — Project_updateMessageFields: Update custom message fields
- GET /v1/projects/{project_id}/message_stats — Project_getMessageStats: Get historical message statistics
- GET /v1/projects/{project_id}/messages — Project_queryMessages: Query messages
- POST /v1/projects/{project_id}/messages/receive — Project_receiveMessage: Add an incoming message
- POST /v1/projects/{project_id}/messages/send — Project_sendMessage: Send a message
- GET /v1/projects/{project_id}/messages/{id} — Project_getMessageById: Get message by ID
- POST /v1/projects/{project_id}/messages/{id} — Message_save: Update message details
- DELETE /v1/projects/{project_id}/messages/{id} — Message_delete: Delete a message
- POST /v1/projects/{project_id}/messages/{id}/cancel — Message_cancel: Cancel sending a message
- POST /v1/projects/{project_id}/messages/{id}/resend — Message_resend: Resend a message
- POST /v1/projects/{project_id}/messages/{id}/send_read_receipt — Message_sendReadReceipt: Send a read receipt
- POST /v1/projects/{project_id}/messages/{id}/send_typing_indicator — Message_sendTypingIndicator: Send a typing indicator
- POST /v1/projects/{project_id}/send_broadcast — Project_sendBroadcast: Send a message to a group
- POST /v1/projects/{project_id}/send_multi — Project_sendMulti: Send multiple messages

## MessageTemplate
- GET /v1/projects/{project_id}/message_templates — Project_queryMessageTemplates: Query message templates
- POST /v1/projects/{project_id}/message_templates — Project_createMessageTemplate: Create a message template
- GET /v1/projects/{project_id}/message_templates/{id} — Project_getMessageTemplateById: Get message template by ID
- POST /v1/projects/{project_id}/message_templates/{id} — MessageTemplate_save: Update message template
- DELETE /v1/projects/{project_id}/message_templates/{id} — MessageTemplate_delete: Delete a message template

## Organization
- GET /v1/organizations — API_queryOrganizations: Query organizations
- GET /v1/organizations/{organization_id} — API_getOrganizationById: Get organization by ID
- POST /v1/organizations/{organization_id} — Organization_save: Update organization settings
- GET /v1/organizations/{organization_id}/billing — Organization_getBillingDetails: Get billing details
- GET /v1/organizations/{organization_id}/projects — Organization_queryProjects: Query projects in organization
- GET /v1/organizations/{organization_id}/usage/{usage_type} — Organization_getUsage: Get current usage
- GET /v1/organizations/{organization_id}/usage_history — Organization_getUsageHistory: Get usage history

## Phone
- GET /v1/projects/{project_id}/phones — Project_queryPhones: Query basic routes
- POST /v1/projects/{project_id}/phones — Project_createPhone: Create a basic route
- GET /v1/projects/{project_id}/phones/{id} — Project_getPhoneById: Get basic route by ID
- POST /v1/projects/{project_id}/phones/{id} — Phone_save: Update basic route
- GET /v1/projects/{project_id}/phones/{id}/messages — Phone_queryMessages: Query messages for a basic route
- POST /v1/projects/{project_id}/phones/{id}/reset_sent_message_count — Phone_resetSentMessageCount: Reset sent message count
- GET /v1/projects/{project_id}/route_list — Project_getRouteList: Get route list
- GET /v1/projects/{project_id}/routes — Project_queryRoutes: Query custom routes
- POST /v1/projects/{project_id}/routes — Project_createRoute: Create a custom route
- GET /v1/projects/{project_id}/routes/{id} — Project_getRouteById: Get custom route by ID
- POST /v1/projects/{project_id}/routes/{id} — Route_save: Update custom route

## Project
- POST /v1/organizations/{organization_id}/projects — Organization_createProject: Create a project
- GET /v1/projects — API_queryProjects: Query projects
- GET /v1/projects/{project_id} — API_getProjectById: Get project by ID
- POST /v1/projects/{project_id} — Project_save: Update project details
- GET /v1/projects/{project_id}/users — Project_getUsers: Get user accounts

## ScheduledMessage
- GET /v1/projects/{project_id}/relative_scheduled — Project_queryRelativeScheduledMessages: Query relative scheduled messages
- POST /v1/projects/{project_id}/relative_scheduled — Project_createRelativeScheduledMessage: Create relative scheduled message
- GET /v1/projects/{project_id}/relative_scheduled/{id} — Project_getRelativeScheduledMessageById: Get relative scheduled message by ID
- POST /v1/projects/{project_id}/relative_scheduled/{id} — RelativeScheduledMessage_save: Update relative scheduled message
- DELETE /v1/projects/{project_id}/relative_scheduled/{id} — RelativeScheduledMessage_delete: Delete relative scheduled message
- GET /v1/projects/{project_id}/scheduled — Project_queryScheduledMessages: Query scheduled messages
- POST /v1/projects/{project_id}/scheduled — Project_scheduleMessage: Schedule a message
- GET /v1/projects/{project_id}/scheduled/{id} — Project_getScheduledMessageById: Get scheduled message by ID
- POST /v1/projects/{project_id}/scheduled/{id} — ScheduledMessage_save: Update scheduled message
- DELETE /v1/projects/{project_id}/scheduled/{id} — ScheduledMessage_delete: Cancel a scheduled message

## Service
- GET /v1/projects/{project_id}/scheduled_services — Project_queryScheduledServices: Query scheduled services
- POST /v1/projects/{project_id}/scheduled_services — Project_scheduleService: Schedule a service
- GET /v1/projects/{project_id}/scheduled_services/{id} — Project_getScheduledServiceById: Get scheduled service by ID
- POST /v1/projects/{project_id}/scheduled_services/{id} — ScheduledService_save: Update scheduled service
- DELETE /v1/projects/{project_id}/scheduled_services/{id} — ScheduledService_delete: Delete a scheduled service
- GET /v1/projects/{project_id}/service_logs — Project_queryServiceLogs: Query service logs
- GET /v1/projects/{project_id}/services — Project_queryServices: Query services
- POST /v1/projects/{project_id}/services — Project_createService: Create a service
- GET /v1/projects/{project_id}/services/{id} — Project_getServiceById: Get service by ID
- POST /v1/projects/{project_id}/services/{id} — Service_save: Update service details
- DELETE /v1/projects/{project_id}/services/{id} — Service_delete: Delete a service
- GET /v1/projects/{project_id}/services/{id}/config — Service_getConfig: Get service configuration
- POST /v1/projects/{project_id}/services/{id}/config — Service_setConfig: Update service configuration
- POST /v1/projects/{project_id}/services/{id}/invoke — Service_invoke: Invoke a service
- GET /v1/projects/{project_id}/services/{id}/states — Service_queryContactStates: Query contacts' states for a service
- GET /v1/projects/{project_id}/services/{id}/states/{contact_id} — Service_getContactState: Get a contact's state for a service
- POST /v1/projects/{project_id}/services/{id}/states/{contact_id} — Service_setContactState: Update a contact's state for a service
- DELETE /v1/projects/{project_id}/services/{id}/states/{contact_id} — Service_resetContactState: Reset a contact's state for a service

## Solution
- GET /v1/projects/{project_id}/solutions — Project_querySolutions: Query solutions
- POST /v1/projects/{project_id}/solutions — Project_createSolution: Create a solution
- GET /v1/projects/{project_id}/solutions/{id} — Project_getSolutionById: Get solution by ID
- POST /v1/projects/{project_id}/solutions/{id} — Solution_save: Update solution details
- DELETE /v1/projects/{project_id}/solutions/{id} — Solution_delete: Delete a solution

## StoredFile
- GET /v1/projects/{project_id}/files — Project_queryFiles: Query stored files
- POST /v1/projects/{project_id}/files — Project_uploadFile: Upload a file
- GET /v1/projects/{project_id}/files/{id} — Project_getFileById: Get stored file by ID
- POST /v1/projects/{project_id}/files/{id} — StoredFile_save: Update stored file details
- DELETE /v1/projects/{project_id}/files/{id} — StoredFile_delete: Delete a stored file

## Task
- GET /v1/projects/{project_id}/tasks — Project_queryTasks: Query tasks
- POST /v1/projects/{project_id}/tasks — Project_createTask: Create a task
- GET /v1/projects/{project_id}/tasks/{id} — Project_getTaskById: Get task by ID
- POST /v1/projects/{project_id}/tasks/{id}/cancel — Task_cancel: Cancel a task

## Webhook
- GET /v1/projects/{project_id}/webhooks — Project_queryWebhooks: Query webhooks
- POST /v1/projects/{project_id}/webhooks — Project_createWebhook: Create a new webhook
- GET /v1/projects/{project_id}/webhooks/{id} — Project_getWebhookById: Get webhook by ID
- POST /v1/projects/{project_id}/webhooks/{id} — Webhook_save: Update webhook
- DELETE /v1/projects/{project_id}/webhooks/{id} — Webhook_delete: Delete a webhook
