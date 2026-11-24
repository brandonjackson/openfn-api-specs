# RapidPro / TextIt REST API v2 (rapidpro) v2.0

<!-- derived from openapi.json by `pnpm specs index rapidpro` — do not edit by hand -->

base: https://app.rapidpro.io | auth: apiKey (header Authorization) | 49 operations in 29 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## archives
- GET /api/v2/archives.json — listArchives: List data archives

## articles
- GET /api/v2/articles.json — listArticles: List helpdesk sections and articles
- POST /api/v2/articles.json — writeArticle: Create or update a helpdesk section or article
- DELETE /api/v2/articles.json — deleteArticle: Delete a helpdesk section or article

## boundaries
- GET /api/v2/boundaries.json — listBoundaries: List administrative boundaries

## broadcasts
- GET /api/v2/broadcasts.json — listBroadcasts: List broadcasts
- POST /api/v2/broadcasts.json — sendBroadcast: Send a message to contacts, groups, and/or URNs

## campaign_events
- GET /api/v2/campaign_events.json — listCampaignEvents: List campaign events
- POST /api/v2/campaign_events.json — writeCampaignEvent: Create or update a campaign event
- DELETE /api/v2/campaign_events.json — deleteCampaignEvent: Delete a campaign event

## campaigns
- GET /api/v2/campaigns.json — listCampaigns: List campaigns
- POST /api/v2/campaigns.json — writeCampaign: Create or update a campaign

## channel_events
- GET /api/v2/channel_events.json — listChannelEvents: List channel events (deprecated)

## channels
- GET /api/v2/channels.json — listChannels: List channels

## contact_actions
- POST /api/v2/contact_actions.json — bulkContactAction: Perform an action on contacts in bulk

## contacts
- GET /api/v2/contacts.json — listContacts: List contacts
- POST /api/v2/contacts.json — addContact: Create or upsert a contact (upsert when a urn query param is supplied)
- DELETE /api/v2/contacts.json — deleteContact: Delete a contact

## definitions
- GET /api/v2/definitions.json — exportDefinitions: Export flow and campaign definitions (deprecated)

## fields
- GET /api/v2/fields.json — listFields: List contact fields
- POST /api/v2/fields.json — writeField: Create or update a contact field

## flow_starts
- GET /api/v2/flow_starts.json — listFlowStarts: List flow starts
- POST /api/v2/flow_starts.json — startFlow: Start a flow for a set of contacts, groups, or URNs

## flows
- GET /api/v2/flows.json — listFlows: List flows

## globals
- GET /api/v2/globals.json — listGlobals: List globals
- POST /api/v2/globals.json — writeGlobal: Create or update a global

## groups
- GET /api/v2/groups.json — listGroups: List contact groups
- POST /api/v2/groups.json — writeGroup: Create or rename a contact group
- DELETE /api/v2/groups.json — deleteGroup: Delete a contact group

## labels
- GET /api/v2/labels.json — listLabels: List message labels
- POST /api/v2/labels.json — writeLabel: Create or rename a message label
- DELETE /api/v2/labels.json — deleteLabel: Delete a message label

## media
- POST /api/v2/media.json — uploadMedia: Upload a media file for use as an attachment

## message_actions
- POST /api/v2/message_actions.json — bulkMessageAction: Perform an action on messages in bulk

## messages
- GET /api/v2/messages.json — listMessages: List messages
- POST /api/v2/messages.json — sendMessage: Send a message to a contact

## resthook_events
- GET /api/v2/resthook_events.json — listResthookEvents: List recent resthook events

## resthook_subscribers
- GET /api/v2/resthook_subscribers.json — listResthookSubscribers: List resthook subscribers
- POST /api/v2/resthook_subscribers.json — createResthookSubscriber: Subscribe a URL to a resthook
- DELETE /api/v2/resthook_subscribers.json — deleteResthookSubscriber: Remove a resthook subscription

## resthooks
- GET /api/v2/resthooks.json — listResthooks: List resthooks

## runs
- GET /api/v2/runs.json — listRuns: List flow runs

## ticket_actions
- POST /api/v2/ticket_actions.json — bulkTicketAction: Perform an action on tickets in bulk

## tickets
- GET /api/v2/tickets.json — listTickets: List tickets

## topics
- GET /api/v2/topics.json — listTopics: List ticket topics
- POST /api/v2/topics.json — writeTopic: Create or rename a ticket topic

## users
- GET /api/v2/users.json — listUsers: List workspace users

## workspace
- GET /api/v2/org.json — getOrg: View the current workspace (deprecated alias) (deprecated)
- GET /api/v2/workspace.json — getWorkspace: View the current workspace
