# Messenger Platform API (Meta Graph API) (facebook) vv26.0

<!-- derived from openapi.json by `pnpm specs index facebook` — do not edit by hand -->

base: https://graph.facebook.com/{version} | auth: apiKey (query access_token), http/bearer | 41 operations in 28 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Add a label to a thread for a Messenger page
- POST /{thread_label_id}/label — postThreadLabelIdLabel: Associate a thread label
- DELETE /{thread_label_id}/label — deleteThreadLabelIdLabel: Remove a thread label

## Business messaging feature status
- POST /{id}/business_messaging_feature_status — postIdBusinessMessagingFeatureStatus: Check business messaging feature status

## Conversation routing: Extend thread control API
- POST /{page_id}/extend_thread_control — extendThreadControl: Extend thread control

## Conversation routing: Pass thread control API
- POST /{page_id}/pass_thread_control — passThreadControl: Pass thread control to another app

## Conversation routing: Release thread control API
- POST /{page_id}/release_thread_control — releaseThreadControl: Release thread control

## Conversation routing: Request thread control API
- POST /{page_id}/request_thread_control — requestThreadControl: Request thread control

## Conversation routing: Take thread control API
- POST /{page_id}/take_thread_control — takeThreadControl: Take thread control

## Manage custom labels for a page
- GET /{id}/custom_labels — getIdCustomLabels: Manage custom labels for a page
- POST /{id}/custom_labels — postIdCustomLabels: Manage custom labels for a page

## Manage custom user settings for a Messenger page
- GET /{page_id}/custom_user_settings — getPageIdCustomUserSettings: Retrieve custom user settings
- POST /{page_id}/custom_user_settings — postPageIdCustomUserSettings: Update custom user settings
- DELETE /{page_id}/custom_user_settings — deletePageIdCustomUserSettings: Delete custom user settings

## Messaging Insights
- GET /{page_id}/insights — getMessagingInsights: Get Page messaging insights

## Messenger Message Attachments
- GET /{message_id}/attachments — listMessageAttachments: List a message's attachments

## Messenger Message Reactions
- GET /{message_id}/reactions — listMessageReactions: List a message's reactions

## Messenger Message Shares
- GET /{message_id}/shares — listMessageShares: List a message's shares

## Messenger Page Conversations
- GET /{conversation_id} — getConversation: Get a conversation and its messages
- GET /{message_id} — getMessage: Get a message
- GET /{page_id}/conversations — listPageConversations: List a Page's conversations

## Messenger Platform Message Attachments Upload API
- POST /{page_id}/message_attachments — uploadMessageAttachment: Upload a reusable attachment

## Messenger Platform Send API
- POST /me/messages — sendMessageAsMe: Send a message (Page token, me)
- POST /{page_id}/messages — sendMessage: Send a message from a Page

## Messenger/IGv2 Page Moderate Conversations
- POST /{page_id}/moderate_conversations — postPageIdModerateConversations: Moderate page conversations

## Page Calls
- POST /{page_id}/calls — postPageIdCalls: Create or update a page call action

## Page Messaging Feature Review
- GET /{page_id}/messaging_feature_review — getPageIdMessagingFeatureReview: Retrieve messaging feature review status

## Page Messenger Call Permissions
- GET /{page_id}/messenger_call_permissions — getPageIdMessengerCallPermissions: Retrieve messenger call permissions

## Page Messenger Call Settings
- GET /{page_id}/messenger_call_settings — getPageIdMessengerCallSettings: Retrieve messenger call settings
- POST /{page_id}/messenger_call_settings — postPageIdMessengerCallSettings: Update messenger call settings

## Page Messenger Profile
- GET /{page_id}/messenger_profile — getPageIdMessengerProfile: Retrieve messenger profile settings
- POST /{page_id}/messenger_profile — postPageIdMessengerProfile: Update messenger profile settings
- DELETE /{page_id}/messenger_profile — deletePageIdMessengerProfile: Delete messenger profile settings

## Page Status API
- GET /{page_id}/page_status — getPageIdPageStatus: Retrieve page status

## Page Thread Owner
- GET /{page_id}/thread_owner — getThreadOwner: Get the app that owns a thread

## Retrieve a Messenger bot persona
- GET /{persona_id} — getPersonaId: Retrieve a persona
- DELETE /{persona_id} — deletePersonaId: Delete a persona

## Retrieve a thread label for a Messenger page
- GET /{thread_label_id} — getThreadLabelId: Retrieve a thread label
- DELETE /{thread_label_id} — deleteThreadLabelId: Delete a thread label

## Retrieve personas for a Messenger page
- GET /{page_id}/personas — getPageIdPersonas: List page personas
- POST /{page_id}/personas — postPageIdPersonas: Create a page persona

## User Profile
- GET /{psid} — getUserProfile: Get a user's profile (User Profile API)
