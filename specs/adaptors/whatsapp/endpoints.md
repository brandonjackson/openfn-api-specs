# WhatsApp Business Platform API (whatsapp) v26.0

<!-- derived from openapi.json by `pnpm specs index whatsapp` — do not edit by hand -->

base: https://graph.facebook.com/{version} | auth: http/bearer | 106 operations in 14 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Application
- GET /{application-id}/connected_client_businesses — getConnectedClientBusinesses: Get Connected Client Businesses
- POST /{application-id}/whatsapp_business_solution — createMultiPartnerSolution: Create Multi-Partner Solution
- GET /{application-id}/whatsapp_business_solutions — getMultiPartnerSolutionsForApplication: Get Multi-Partner Solutions for Application

## Business
- GET /{business-id} — getBusinessPortfolio: Get Business Portfolio
- POST /{business-id}/add_phone_numbers — addPhoneNumberToBusinessAccount: Add Phone Number to Business Account
- GET /{business-id}/client_whatsapp_business_accounts — getClientWhatsAppBusinessAccounts: Get Client WhatsApp Business Accounts
- POST /{business-id}/onboard_partners_to_mm_lite — onboardPartnersToMMLite: Onboard Partners to MM Lite
- GET /{business-id}/owned_whatsapp_business_accounts — getOwnedWhatsAppBusinessAccounts: Get Owned WhatsApp Business Accounts
- GET /{business-id}/preverified_numbers — getPreVerifiedPhoneNumbers: Get Pre-Verified Phone Numbers
- POST /{business-id}/share_preverified_numbers — sharePreVerifiedPhoneNumberWithAnotherBusiness: Share Pre-Verified Phone Number with Another Business
- GET /{business-id}/whatsapp_business_accounts — getWhatsAppBusinessAccounts: Get WhatsApp Business Accounts
- POST /{business-id}/whatsapp_business_accounts — createWhatsAppBusinessAccount: Create WhatsApp Business Account

## Flows
- GET /{flow-id} — getFlow: Get Flow
- POST /{flow-id} — updateFlow: Update Flow metadata
- DELETE /{flow-id} — deleteFlow: Delete Flow
- GET /{flow-id}/assets — listFlowAssets: List Flow assets
- POST /{flow-id}/assets — uploadFlowJson: Upload Flow JSON
- POST /{flow-id}/deprecate — deprecateFlow: Deprecate Flow
- POST /{flow-id}/publish — publishFlow: Publish Flow
- GET /{waba-id}/flows — listFlows: List Flows
- POST /{waba-id}/flows — createFlow: Create Flow

## Groups
- GET /{group-id} — getGroupInfo: Get Group Info
- POST /{group-id} — updateGroupSettings: Update Group Settings
- DELETE /{group-id} — deleteGroup: Delete Group
- POST /{group-id}/invite_link — createGroupInviteLink: Create Group Invite Link
- DELETE /{group-id}/invite_link — deleteGroupInviteLink: Delete Group Invite Link
- GET /{group-id}/join_requests — getJoinRequests: Get Join Requests
- POST /{group-id}/join_requests — approveJoinRequests: Approve Join Requests
- DELETE /{group-id}/join_requests — rejectJoinRequests: Reject Join Requests
- POST /{group-id}/participants — addGroupParticipants: Add Group Participants
- DELETE /{group-id}/participants — removeGroupParticipants: Remove Group Participants

## Media
- GET /{media-id} — retrieveMediaURL: Retrieve Media URL
- DELETE /{media-id} — deleteMedia: Delete Media
- GET /{media-url} — downloadMedia: Download Media

## Message History
- GET /{message-history-id}/events — getWhatsAppMessageHistoryEvents: Get WhatsApp Message History Events

## User
- GET /{user-id}/assigned_whatsapp_business_accounts — getAssignedWhatsAppBusinessAccounts: Get Assigned WhatsApp Business Accounts

## WhatsApp Account Number
- GET /{whatsapp-account-number-id} — getWhatsAppAccountNumberDetails: Get WhatsApp Account Number Details

## WhatsApp Business Account
- GET /{business-id}/extendedcredits — getExtendedCreditLines: Get Extended Credit Lines
- GET /{message-template-id} — getMessageTemplateByID: Get Message Template by ID
- POST /{message-template-id} — editMessageTemplate: Edit Message Template
- GET /{migration-intent-id} — getMigrationIntentDetails: Get Migration Intent Details
- POST /{phone-number-id}/conversational_automation — configureConversationalAutomation: Configure Conversational Automation
- GET /{waba-id} — getWhatsAppBusinessAccountDetails: Get WhatsApp Business Account Details
- POST /{waba-id} — updateWhatsAppBusinessAccount: Update WhatsApp Business Account
- GET /{waba-id}/activities — getWhatsAppBusinessAccountActivities: Get WhatsApp Business Account Activities
- GET /{waba-id}/assigned_users — listAssignedUsers: List Assigned Users
- POST /{waba-id}/assigned_users — addUserToWhatsAppBusinessAccount: Add User to WhatsApp Business Account
- DELETE /{waba-id}/assigned_users — removeUserFromWhatsAppBusinessAccount: Remove User from WhatsApp Business Account
- GET /{waba-id}/message_templates — listMessageTemplates: List Message Templates
- POST /{waba-id}/message_templates — createMessageTemplate: Create Message Template
- DELETE /{waba-id}/message_templates — deleteMessageTemplates: Delete Message Templates
- GET /{waba-id}/phone_numbers — getWhatsAppBusinessAccountPhoneNumbers: Get WhatsApp Business Account Phone Numbers
- POST /{waba-id}/phone_numbers — createWhatsAppBusinessAccountPhoneNumber: Create WhatsApp Business Account Phone Number
- GET /{waba-id}/schedules — getWhatsAppBusinessAccountSchedules: Get WhatsApp Business Account Schedules
- POST /{waba-id}/schedules — createWhatsAppBusinessAccountSchedule: Create WhatsApp Business Account Schedule
- GET /{waba-id}/solutions — listMultiPartnerSolutionsForWABA: List Multi-Partner Solutions for WABA
- GET /{waba-id}/subscribed_apps — getAllSubscriptionsForAWABA: Get All Subscriptions for a WABA
- POST /{waba-id}/subscribed_apps — subscribeToWABAWebhooks: Subscribe to WABA Webhooks
- DELETE /{waba-id}/subscribed_apps — unsubscribeFromWABAWebhooks: Unsubscribe from WABA Webhooks

## WhatsApp Business Bot
- GET /{waba-bot-id} — getWhatsAppBusinessBotDetails: Get WhatsApp Business Bot Details

## WhatsApp Business Phone Number
- GET /{phone-number-id} — retrieveWhatsAppBusinessPhoneNumberInformation: Retrieve WhatsApp Business Phone Number Information
- POST /{phone-number-id} — updateWhatsAppBusinessAccountPhoneNumberStatusAndConfiguration: Update WhatsApp Business Account Phone Number Status and Configuration
- GET /{phone-number-id}/block_users — getBlockedUsers: Get blocked users
- POST /{phone-number-id}/block_users — blockUsers: Block user(s)
- DELETE /{phone-number-id}/block_users — unblockUsers: Unblock user(s)
- GET /{phone-number-id}/business_compliance_info — getBusinessComplianceInformation: Get Business Compliance Information
- POST /{phone-number-id}/business_compliance_info — updateBusinessComplianceInformation: Update Business Compliance Information
- GET /{phone-number-id}/call_permissions — checkCallPermissions: Check Call Permissions
- POST /{phone-number-id}/calls — manageCalls: Manage Calls
- POST /{phone-number-id}/deregister — deregisterWhatsAppBusinessPhoneNumber: Deregister WhatsApp Business Phone Number
- GET /{phone-number-id}/groups — getActiveGroups: Get Active Groups
- POST /{phone-number-id}/groups — createGroup: Create Group
- POST /{phone-number-id}/marketing_messages — sendMarketingTemplateMessage: Send Marketing Template Message
- POST /{phone-number-id}/media — uploadMedia: Upload media
- GET /{phone-number-id}/message_qrdls — listAllMessageQRCodes: List All Message QR Codes
- POST /{phone-number-id}/message_qrdls — createOrUpdateMessageQRCode: Create or Update Message QR Code
- GET /{phone-number-id}/message_qrdls/{qr-code-id} — getIndividualMessageQRCode: Get Individual Message QR Code
- DELETE /{phone-number-id}/message_qrdls/{qr-code-id} — deleteIndividualMessageQRCode: Delete Individual Message QR Code
- POST /{phone-number-id}/messages — sendMessage: Send Message
- GET /{phone-number-id}/official_business_account — getOfficialBusinessAccountStatus: Get Official Business Account Status
- POST /{phone-number-id}/official_business_account — updateOfficialBusinessAccountStatus: Update Official Business Account Status
- POST /{phone-number-id}/register — registerWhatsAppBusinessPhoneNumber: Register WhatsApp Business Phone Number
- POST /{phone-number-id}/request_code — requestPhoneNumberVerificationCode: Request Phone Number Verification Code
- GET /{phone-number-id}/settings — getPhoneNumberSettings: Get phone number settings
- POST /{phone-number-id}/settings — updatePhoneNumberSettings: Update phone number settings
- POST /{phone-number-id}/verify_code — verifyPhoneNumberVerificationCode: Verify Phone Number Verification Code
- GET /{phone-number-id}/whatsapp_business_encryption — getBusinessEncryptionPublicKey: Get Business Encryption Public Key
- POST /{phone-number-id}/whatsapp_business_encryption — setBusinessEncryptionPublicKey: Set Business Encryption Public Key
- GET /{phone-number-id}/whatsapp_business_profile — getWhatsAppBusinessProfile: Get WhatsApp Business Profile
- POST /{phone-number-id}/whatsapp_business_profile — updateWhatsAppBusinessProfile: Update WhatsApp Business Profile
- GET /{phone-number-id}/whatsapp_commerce_settings — getCommerceSettings: Get commerce settings
- POST /{phone-number-id}/whatsapp_commerce_settings — setOrUpdateCommerceSettings: Set or update commerce settings

## WhatsApp Business Pre-Verified Phone Number
- GET /{pre-verified-phone-number-id} — getPreVerifiedPhoneNumberDetails: Get Pre-Verified Phone Number Details
- DELETE /{pre-verified-phone-number-id} — deletePreVerifiedPhoneNumber: Delete Pre-Verified Phone Number
- GET /{pre-verified-phone-number-id}/partners — getPreVerifiedPhoneNumberPartners: Get Pre-Verified Phone Number Partners
- POST /{pre-verified-phone-number-id}/request_code — requestVerificationCodeForPreVerifiedPhoneNumber: Request Verification Code for Pre-Verified Phone Number
- POST /{pre-verified-phone-number-id}/verify_code — verifyOTPCodeForPreVerifiedPhoneNumber: Verify OTP Code for Pre-Verified Phone Number

## WhatsApp Business Profile
- GET /{whatsapp-business-profile-id} — getWhatsAppBusinessProfileDetails: Get WhatsApp Business Profile Details
- POST /{whatsapp-business-profile-id} — updateWhatsAppBusinessProfileNode: Update WhatsApp Business Profile

## WhatsApp Business Solution
- GET /{solution-id} — getMultiPartnerSolutionDetails: Get Multi-Partner Solution Details
- POST /{solution-id}/accept — acceptMultiPartnerSolutionInvitation: Accept Multi-Partner Solution Invitation
- POST /{solution-id}/accept_deactivation_request — acceptWhatsAppBusinessSolutionDeactivationRequest: Accept WhatsApp Business Solution Deactivation Request
- GET /{solution-id}/access_token — getMultiPartnerSolutionAccessToken: Get Multi-Partner Solution Access Token
- POST /{solution-id}/reject — rejectMultiPartnerSolutionRequest: Reject Multi-Partner Solution Request
- POST /{solution-id}/reject_deactivation_request — rejectMultiPartnerSolutionDeactivationRequest: Reject Multi-Partner Solution Deactivation Request
- POST /{solution-id}/send_deactivation_request — sendMultiPartnerSolutionDeactivationRequest: Send Multi-Partner Solution Deactivation Request
