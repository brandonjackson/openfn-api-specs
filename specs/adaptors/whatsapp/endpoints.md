# Meta Graph API - Application Connected Client Businesses (whatsapp) vv23.0

<!-- derived from openapi.json by `pnpm specs index whatsapp` — do not edit by hand -->

base: https://graph.facebook.com, https://graph.facebook.com, https://graph.facebook.com, https://graph.facebook.com | auth: http/bearer (JWT) | 113 operations in 55 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Application Business Connections
- GET /{Version}/{Application-ID}/connected_client_businesses — getConnectedClientBusinesses: Get Connected Client Businesses

## Assigned WhatsApp Business Accounts
- GET /{Version}/{User-ID}/assigned_whatsapp_business_accounts — getAssignedWhatsAppBusinessAccounts: Get Assigned WhatsApp Business Accounts

## Billing
- GET /{Version}/{Business-ID}/extendedcredits — getCreditLines: Get credit lines

## Block Users
- GET /{Version}/{Phone-Number-ID}/block_users — getBlockedUsers: Get blocked users
- POST /{Version}/{Phone-Number-ID}/block_users — blockUserS: Block user(s)
- DELETE /{Version}/{Phone-Number-ID}/block_users — unblockUserS: Unblock user(s)

## Business Compliance
- GET /{Version}/{Phone-Number-ID}/business_compliance_info — getBusinessComplianceInfo: Get Business Compliance Information
- POST /{Version}/{Phone-Number-ID}/business_compliance_info — updateBusinessComplianceInfo: Update Business Compliance Information

## Business Encryption
- POST /{Version}/{Phone-Number-ID}/whatsapp_business_encryption — setBusinessEncryptionPublicKey: Set Business Encryption Public Key

## Business Phone Numbers
- POST /{Version}/{Business-ID}/add_phone_numbers — addPhoneNumbers: Add Phone Number to Business Account

## Business Portfolio
- GET /{Version}/{Business-ID} — getBusinessPortfolioSpecificFields: Get Business Portfolio (Specific Fields)

## Call Permissions
- GET /{Version}/{Phone-Number-ID}/call_permissions — checkCallPermissions: Check Call Permissions

## Calls
- POST /{Version}/{Phone-Number-ID}/calls — manageCalls: Manage Calls

## Client WhatsApp Business Accounts
- GET /{Version}/{Business-ID}/client_whatsapp_business_accounts — getClientWhatsAppBusinessAccounts: Get Client WhatsApp Business Accounts

## Commerce Settings
- GET /{Version}/{Phone-Number-ID}/whatsapp_commerce_settings — getCommerceSettings: Get commerce settings
- POST /{Version}/{Phone-Number-ID}/whatsapp_commerce_settings — setOrUpdateCommerceSettings: Set or update commerce settings

## Conversational Automation
- POST /{Version}/{Phone-Number-ID}/conversational_automation — configureConversationalAutomation: Configure Conversational Automation

## Encrypted Messages
- POST /{Version}/{Phone-Number-ID}/messages_encrypted — sendEncryptedMessage: Send Encrypted Message

## Flows
- GET /{Version}/{Phone-Number-ID}/whatsapp_business_encryption — getBusinessEncryptionPublicKey: Get Business Encryption Public Key
- GET /{Version}/{WABA-ID}/flows — listFlows: List Flows
- POST /{Version}/{WABA-ID}/flows — createFlow: Create Flow
- POST /{Version}/{WABA-ID}/migrate_flows — migrateFlows: Migrate Flows
- GET /{Version}/{Flow-ID} — getFlow: Get Flow
- POST /{Version}/{Flow-ID} — updateFlowMetadata: Update Flow Metadata
- DELETE /{Version}/{Flow-ID} — deleteFlow: Delete Flow
- GET /{Version}/{Flow-ID}/assets — listAssetsGetFlowJsonUrl: List Assets (Get Flow JSON URL)
- POST /{Version}/{Flow-ID}/assets — updateFlowJson: Update Flow JSON
- POST /{Version}/{Flow-ID}/publish — publishFlow: Publish Flow
- POST /{Version}/{Flow-ID}/deprecate — deprecateFlow: Deprecate Flow
- POST /{Version}/{WABA-ID}/message_templates — createAuthenticationTemplateWOtpCopyCodeButton: Create authentication template w/ OTP copy code button

## Individual QR Code
- GET /{Version}/{Phone-Number-ID}/message_qrdls/{QR-Code-ID} — getIndividualQrCode: Get Individual Message QR Code
- DELETE /{Version}/{Phone-Number-ID}/message_qrdls/{QR-Code-ID} — deleteIndividualQrCode: Delete Individual Message QR Code

## MM Lite Onboarding
- POST /{Version}/{Business-ID}/onboard_partners_to_mm_lite — onboardPartnersToMMLite: Onboard Partners to MM Lite

## Marketing Messages
- POST /{Version}/{Phone-Number-ID}/marketing_messages — sendMarketingMessage: Send Marketing Template Message

## Media
- POST /{Version}/{Phone-Number-ID}/media — uploadImage: Upload Image
- GET /{Version}/{Media-ID} — retrieveMediaUrl: Retrieve Media URL
- DELETE /{Version}/{Media-ID} — deleteMedia: Delete Media
- GET /{Version}/{Media-URL} — downloadMedia: Download Media

## Message History
- GET /{Version}/{Phone-Number-ID}/message_history — getMessageHistory: Get WhatsApp Business Account Message History

## Message History Events
- GET /{Version}/{Message-History-ID}/events — getMessageHistoryEvents: Get WhatsApp Message History Events

## Messages
- POST /{Version}/{Phone-Number-ID}/messages — sendMessage: Send Message.

## Migration Intent
- GET /{Version}/{Migration-Intent-ID} — getMigrationIntentDetails: Get Migration Intent Details

## Multi-Partner Solutions
- POST /{Version}/{Application-ID}/whatsapp_business_solution — createWhatsAppBusinessSolution: Create Multi-Partner Solution
- GET /{Version}/{Application-ID}/whatsapp_business_solutions — getApplicationWhatsAppBusinessSolutions: Get Multi-Partner Solutions for Application
- GET /{Version}/{Solution-ID}/access_token — getSolutionAccessToken: Get Multi-Partner Solution Access Token
- POST /{Version}/{Solution-ID}/accept — acceptWhatsAppBusinessSolution: Accept Multi-Partner Solution Invitation
- GET /{Version}/{Solution-ID} — getSolutionDetails: Get Multi-Partner Solution Details
- POST /{Version}/{Solution-ID}/reject_deactivation_request — rejectSolutionDeactivationRequest: Reject Multi-Partner Solution Deactivation Request
- POST /{Version}/{Solution-ID}/reject — rejectSolutionRequest: Reject Multi-Partner Solution Request
- POST /{Version}/{Solution-ID}/send_deactivation_request — sendSolutionDeactivationRequest: Send Multi-Partner Solution Deactivation Request
- GET /{Version}/{WABA-ID}/solutions — listWabaSolutions: List Multi-Partner Solutions for WABA

## OBO Mobility Intent
- GET /{Version}/{OBO-Mobility-Intent-ID} — getOBOMobilityIntent: Get OBO Mobility Intent Details
- POST /{Version}/{WABA-ID}/obo_mobility_intent — createOBOMobilityIntent: Create OBO Mobility Intent
- POST /{Version}/{WABA-ID}/set_obo_mobility_intent — setOBOMobilityIntent: Set OBO Mobility Intent

## Official Business Account
- GET /{Version}/{Phone-Number-ID}/official_business_account — getOfficialBusinessAccountStatus: Get Official Business Account Status
- POST /{Version}/{Phone-Number-ID}/official_business_account — GraphWhatsAppBusinessAccountToNumberCurrentStatusOfficialBusinessAccountPost: Update Official Business Account Status

## Owned WhatsApp Business Accounts
- GET /{Version}/{Business-ID}/owned_whatsapp_business_accounts — getOwnedWhatsAppBusinessAccounts: Get Owned WhatsApp Business Accounts

## Phone Number Management
- POST /{Version}/{Phone-Number-ID}/deregister — deregisterPhoneNumber: Deregister WhatsApp Business Phone Number
- GET /{Version}/{WABA-ID}/phone_numbers — getWhatsAppBusinessAccountPhoneNumbers: Get WhatsApp Business Account Phone Numbers
- POST /{Version}/{WABA-ID}/phone_numbers — createWhatsAppBusinessAccountPhoneNumber: Create WhatsApp Business Account Phone Number

## Phone Number Registration
- POST /{Version}/{Phone-Number-ID}/register — registerWhatsAppBusinessPhoneNumber: Register WhatsApp Business Phone Number

## Phone Number Verification
- POST /{Version}/{Phone-Number-ID}/request_code — requestVerificationCode: Request Phone Number Verification Code
- POST /{Version}/{Phone-Number-ID}/verify_code — verifyPhoneNumberCode: Verify Phone Number Verification Code

## Phone Numbers
- GET /{Version}/{Phone-Number-ID} — getPhoneNumberById: Retrieve WhatsApp Business Phone Number Information
- POST /{Version}/{Phone-Number-ID} — updatePhoneNumberStatus: Update WhatsApp Business Account Phone Number Status and Configuration

## Pre-Verified Phone Number Partners
- GET /{Version}/{Pre-Verified-Phone-Number-ID}/partners — getPreVerifiedPhoneNumberPartners: Get Pre-Verified Phone Number Partners

## Pre-Verified Phone Number Sharing
- POST /{Version}/{Business-ID}/share_preverified_numbers — sharePreVerifiedPhoneNumber: Share Pre-Verified Phone Number with Another Business

## Pre-Verified Phone Numbers
- GET /{Version}/{Business-ID}/preverified_numbers — getPreVerifiedPhoneNumbers: Get Pre-Verified Phone Numbers
- GET /{Version}/{Pre-Verified-Phone-Number-ID} — getPreVerifiedPhoneNumberDetails: Get Pre-Verified Phone Number Details
- DELETE /{Version}/{Pre-Verified-Phone-Number-ID} — deletePreVerifiedPhoneNumber: Delete Pre-Verified Phone Number
- POST /{Version}/{Pre-Verified-Phone-Number-ID}/request_code — requestPreVerifiedPhoneNumberCode: Request Verification Code for Pre-Verified Phone Number
- POST /{Version}/{Pre-Verified-Phone-Number-ID}/verify_code — verifyPreVerifiedPhoneNumberCode: Verify OTP Code for Pre-Verified Phone Number

## QR Code Collection
- GET /{Version}/{Phone-Number-ID}/message_qrdls — listAllQrCodes: List All Message QR Codes
- POST /{Version}/{Phone-Number-ID}/message_qrdls — createOrUpdateQrCode: Create or Update Message QR Code

## Schedule Management
- GET /{Version}/{WABA-ID}/schedules — getWhatsAppBusinessAccountSchedules: Get WhatsApp Business Account Schedules
- POST /{Version}/{WABA-ID}/schedules — createWhatsAppBusinessAccountSchedule: Create WhatsApp Business Account Schedule

## Settings
- GET /{Version}/{Phone-Number-ID}/settings — getPhoneNumberSettings: Get phone number settings
- POST /{Version}/{Phone-Number-ID}/settings — updatePhoneNumberSettings: Update phone number settings

## Solution Migration
- POST /{Version}/{WABA-ID}/set_solution_migration_intent — setSolutionMigrationIntent: Set Solution Migration Intent

## Templates
- GET /{Version}/{TEMPLATE_ID} — getTemplateByIdDefaultFields: Get template by ID (default fields)
- POST /{Version}/{TEMPLATE_ID} — editTemplate: Edit template
- GET /{Version}/{WABA-ID}/message_templates — getTemplateByNameDefaultFields: Get template by name (default fields)
- DELETE /{Version}/{WABA-ID}/message_templates — deleteTemplateByName: Delete template by name

## Webhook Subscriptions
- GET /{Version}/{WABA-ID}/subscribed_apps — getAllSubscriptionsForAWaba: Get All Subscriptions for a WABA
- POST /{Version}/{WABA-ID}/subscribed_apps — subscribeToWabaWebhooks: Subscribe to WABA Webhooks
- DELETE /{Version}/{WABA-ID}/subscribed_apps — unsubscribeFromWabaWebhooks: Unsubscribe from WABA Webhooks

## WhatsApp Account Numbers
- GET /{Version}/{WhatsApp-Account-Number-ID} — getWhatsAppAccountNumberDetails: Get WhatsApp Account Number Details

## WhatsApp Business Account
- GET /{Version}/{WABA-ID} — getWhatsAppBusinessAccountDetails: Get WhatsApp Business Account Details
- POST /{Version}/{WABA-ID} — updateWhatsAppBusinessAccount: Update WhatsApp Business Account

## WhatsApp Business Account Activities
- GET /{Version}/{WABA-ID}/activities — getWhatsAppBusinessAccountActivities: Get WhatsApp Business Account Activities

## WhatsApp Business Account On-Behalf Requests
- GET /{Version}/{WABA-ID}/in_progress_onbehalf_request — getInProgressOnBehalfRequests: Get In-Progress On-Behalf Requests

## WhatsApp Business Account Users
- GET /{Version}/{WhatsApp-Business-Account-ID}/assigned_users — getAssignedUsers: List Assigned Users
- POST /{Version}/{WhatsApp-Business-Account-ID}/assigned_users — addAssignedUser: Add User to WhatsApp Business Account
- DELETE /{Version}/{WhatsApp-Business-Account-ID}/assigned_users — removeAssignedUser: Remove User from WhatsApp Business Account

## WhatsApp Business Bot
- GET /{Version}/{WABA-Bot-ID} — getWhatsAppBusinessBotDetails: Get WhatsApp Business Bot Details

## WhatsApp Business Profile
- GET /{Version}/{Phone-Number-ID}/whatsapp_business_profile — getWhatsAppBusinessProfile: Get WhatsApp Business Profile
- POST /{Version}/{Phone-Number-ID}/whatsapp_business_profile — updateWhatsAppBusinessProfileInformation: Update WhatsApp Business Profile

## WhatsApp Business Profiles
- GET /{Version}/{WhatsApp-Business-Profile-ID} — getWhatsAppBusinessProfileDetails: Get WhatsApp Business Profile Details
- POST /{Version}/{WhatsApp-Business-Profile-ID} — updateWhatsAppBusinessProfile: Update WhatsApp Business Profile

## WhatsApp Business Solution Management
- POST /{Version}/{Solution-ID}/accept_deactivation_request — acceptWhatsAppBusinessSolutionDeactivationRequest: Accept WhatsApp Business Solution Deactivation Request

## groups
- GET /{Version}/{Phone-Number-ID}/groups — getActiveGroups: Get Active Groups
- POST /{Version}/{Phone-Number-ID}/groups — createGroup: Create Group

## invite_link
- POST /{Version}/{group_id}/invite_link — createGroupInviteLink: Create Group Invite Link
- DELETE /{Version}/{group_id}/invite_link — deleteGroupInviteLink: Delete Group Invite Link

## join_requests
- GET /{Version}/{group_id}/join_requests — getJoinRequests: Get Join Requests
- POST /{Version}/{group_id}/join_requests — approveJoinRequests: Approve Join Requests
- DELETE /{Version}/{group_id}/join_requests — rejectJoinRequests: Reject Join Requests

## participants
- POST /{Version}/{group_id}/participants — addGroupParticipants: Add Group Participants
- DELETE /{Version}/{group_id}/participants — removeGroupParticipants: Remove Group Participants

## whatsapp
- POST /whatsapp/webhooks — Receive incoming WhatsApp messages

## {Version}
- GET /{Version}/{group_id} — getGroupInfo: Get Group Info
- POST /{Version}/{group_id} — updateGroupSettings: Update Group Settings
- DELETE /{Version}/{group_id} — deleteGroup: Delete Group
