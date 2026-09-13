# Mailchimp Marketing API (mailchimp) v3.0.91

<!-- derived from openapi.json by `pnpm specs index mailchimp` — do not edit by hand -->

base: https://server.api.mailchimp.com/3.0 | auth: http/basic | 298 operations in 30 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Surveys
- POST /lists/{list_id}/surveys/{survey_id}/actions/publish — postListsIdSurveysIdActionsPublish: Publish a Survey
- POST /lists/{list_id}/surveys/{survey_id}/actions/unpublish — postListsIdSurveysIdActionsUnpublish: Unpublish a Survey
- POST /lists/{list_id}/surveys/{survey_id}/actions/create-email — postListsIdSurveysIdActionsCreateEmail: Create a Survey Campaign

## accountExport
- GET /account-exports/{export_id} — getAccountExportId: Get account export info

## accountExports
- GET /account-exports — getAccountExports: List account exports
- POST /account-exports — postAccountExport: Add export

## activityFeed
- GET /activity-feed/chimp-chatter — getActivityFeedChimpChatter: Get latest chimp chatter

## audiences
- GET /audiences/{audience_id}/contacts — getAudienceContactList: Get Contacts
- POST /audiences/{audience_id}/contacts — createAudienceContact: Add Contact
- GET /audiences/{audience_id}/contacts/{contact_id} — getAudienceContact: Get Contact
- PATCH /audiences/{audience_id}/contacts/{contact_id} — patchAudienceContact: Update Contact

## authorizedApps
- GET /authorized-apps — getAuthorizedApps: List authorized apps
- GET /authorized-apps/{app_id} — getAuthorizedAppsId: Get authorized app info

## automations
- GET /automations — getAutomations: List automations
- POST /automations — postAutomations: Add automation
- GET /automations/{workflow_id} — getAutomationsId: Get automation info
- POST /automations/{workflow_id}/actions/pause-all-emails — postAutomationsIdActionsPauseAllEmails: Pause automation emails
- POST /automations/{workflow_id}/actions/start-all-emails — postAutomationsIdActionsStartAllEmails: Start automation emails
- POST /automations/{workflow_id}/actions/archive — archiveAutomations: Archive automation
- GET /automations/{workflow_id}/emails — getAutomationsIdEmails: List automated emails
- GET /automations/{workflow_id}/emails/{workflow_email_id} — getAutomationsIdEmailsId: Get workflow email info
- PATCH /automations/{workflow_id}/emails/{workflow_email_id} — patchAutomationEmailWorkflowId: Update workflow email
- DELETE /automations/{workflow_id}/emails/{workflow_email_id} — deleteAutomationsIdEmailsId: Delete workflow email
- GET /automations/{workflow_id}/emails/{workflow_email_id}/queue — getAutomationsIdEmailsIdQueue: List automated email subscribers
- POST /automations/{workflow_id}/emails/{workflow_email_id}/queue — postAutomationsIdEmailsIdQueue: Add subscriber to workflow email
- GET /automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash} — getAutomationsIdEmailsIdQueueId: Get automated email subscriber
- POST /automations/{workflow_id}/emails/{workflow_email_id}/actions/pause — postAutomationsIdEmailsIdActionsPause: Pause automated email
- POST /automations/{workflow_id}/emails/{workflow_email_id}/actions/start — postAutomationsIdEmailsIdActionsStart: Start automated email
- GET /automations/{workflow_id}/removed-subscribers — getAutomationsIdRemovedSubscribers: List subscribers removed from workflow
- POST /automations/{workflow_id}/removed-subscribers — postAutomationsIdRemovedSubscribers: Remove subscriber from workflow
- GET /automations/{workflow_id}/removed-subscribers/{subscriber_hash} — getAutomationsIdRemovedSubscribersId: Get subscriber removed from workflow

## batchWebhooks
- GET /batch-webhooks — getBatchWebhooks: List batch webhooks
- POST /batch-webhooks — postBatchWebhooks: Add batch webhook
- GET /batch-webhooks/{batch_webhook_id} — getBatchWebhook: Get batch webhook info
- PATCH /batch-webhooks/{batch_webhook_id} — patchBatchWebhooks: Update batch webhook
- DELETE /batch-webhooks/{batch_webhook_id} — deleteBatchWebhookId: Delete batch webhook

## batches
- GET /batches — getBatches: List batch requests
- POST /batches — postBatches: Start batch operation
- GET /batches/{batch_id} — getBatchesId: Get batch operation status
- DELETE /batches/{batch_id} — deleteBatchesId: Delete batch request

## campaignFolders
- GET /campaign-folders — getCampaignFolders: List campaign folders
- POST /campaign-folders — postCampaignFolders: Add campaign folder
- GET /campaign-folders/{folder_id} — getCampaignFoldersId: Get campaign folder
- PATCH /campaign-folders/{folder_id} — patchCampaignFoldersId: Update campaign folder
- DELETE /campaign-folders/{folder_id} — deleteCampaignFoldersId: Delete campaign folder

## campaigns
- GET /campaigns — getCampaigns: List campaigns
- POST /campaigns — postCampaigns: Add campaign
- GET /campaigns/{campaign_id} — getCampaignsId: Get campaign info
- PATCH /campaigns/{campaign_id} — patchCampaignsId: Update campaign settings
- DELETE /campaigns/{campaign_id} — deleteCampaignsId: Delete campaign
- POST /campaigns/{campaign_id}/actions/cancel-send — postCampaignsIdActionsCancelSend: Cancel campaign
- POST /campaigns/{campaign_id}/actions/replicate — postCampaignsIdActionsReplicate: Replicate campaign
- POST /campaigns/{campaign_id}/actions/send — postCampaignsIdActionsSend: Send campaign
- POST /campaigns/{campaign_id}/actions/schedule — postCampaignsIdActionsSchedule: Schedule campaign
- POST /campaigns/{campaign_id}/actions/unschedule — postCampaignsIdActionsUnschedule: Unschedule campaign
- POST /campaigns/{campaign_id}/actions/test — postCampaignsIdActionsTest: Send test email
- POST /campaigns/{campaign_id}/actions/pause — postCampaignsIdActionsPause: Pause rss campaign
- POST /campaigns/{campaign_id}/actions/resume — postCampaignsIdActionsResume: Resume rss campaign
- POST /campaigns/{campaign_id}/actions/create-resend — postCampaignsIdActionsCreateResend: Resend campaign
- GET /campaigns/{campaign_id}/content — getCampaignsIdContent: Get campaign content
- PUT /campaigns/{campaign_id}/content — putCampaignsIdContent: Set campaign content
- GET /campaigns/{campaign_id}/feedback — getCampaignsIdFeedback: List campaign feedback
- POST /campaigns/{campaign_id}/feedback — postCampaignsIdFeedback: Add campaign feedback
- GET /campaigns/{campaign_id}/feedback/{feedback_id} — getCampaignsIdFeedbackId: Get campaign feedback message
- PATCH /campaigns/{campaign_id}/feedback/{feedback_id} — patchCampaignsIdFeedbackId: Update campaign feedback message
- DELETE /campaigns/{campaign_id}/feedback/{feedback_id} — deleteCampaignsIdFeedbackId: Delete campaign feedback message
- GET /campaigns/{campaign_id}/send-checklist — getCampaignsIdSendChecklist: Get campaign send checklist

## connectedSites
- GET /connected-sites — getConnectedSites: List connected sites
- POST /connected-sites — postConnectedSites: Add connected site
- GET /connected-sites/{connected_site_id} — getConnectedSitesId: Get connected site
- DELETE /connected-sites/{connected_site_id} — deleteConnectedSitesId: Delete connected site
- POST /connected-sites/{connected_site_id}/actions/verify-script-installation — postConnectedSitesIdActionsVerifyScriptInstallation: Verify connected site script
- POST /connected-sites/{connected_site_id}/actions/enable-pixel — postConnectedSitesIdActionsEnablePixel: Enable pixel for connected site
- POST /connected-sites/{connected_site_id}/actions/disable-pixel — postConnectedSitesIdActionsDisablePixel: Disable pixel for connected site

## contacts
- GET /audiences — getAudienceContacts: Get a list of audiences
- GET /audiences/{audience_id} — getAudienceId: Get audience info
- POST /audiences/{audience_id}/contacts/{contact_id}/actions/archive — postAudiencesContactsActionsArchive: Archive Contact
- POST /audiences/{audience_id}/contacts/{contact_id}/actions/forget — postAudiencesContactsActionsForget: Forget Contact

## conversations
- GET /conversations — getConversations: List conversations (deprecated)
- GET /conversations/{conversation_id} — getConversationsId: Get conversation (deprecated)
- GET /conversations/{conversation_id}/messages — getConversationsIdMessages: List messages (deprecated)
- GET /conversations/{conversation_id}/messages/{message_id} — getConversationsIdMessagesId: Get message (deprecated)

## customerJourneys
- POST /customer-journeys/journeys/{journey_id}/steps/{step_id}/actions/trigger — postCustomerJourneysJourneysIdStepsIdActionsTrigger: Customer Journeys API trigger for a contact

## ecommerce
- GET /ecommerce/orders — getEcommerceOrders: List account orders
- GET /ecommerce/stores — getEcommerceStores: List stores
- POST /ecommerce/stores — postEcommerceStores: Add store
- GET /ecommerce/stores/{store_id} — getEcommerceStoresId: Get store info
- PATCH /ecommerce/stores/{store_id} — patchEcommerceStoresId: Update store
- DELETE /ecommerce/stores/{store_id} — deleteEcommerceStoresId: Delete store
- GET /ecommerce/stores/{store_id}/carts — getEcommerceStoresIdCarts: List carts
- POST /ecommerce/stores/{store_id}/carts — postEcommerceStoresIdCarts: Add cart
- GET /ecommerce/stores/{store_id}/carts/{cart_id} — getEcommerceStoresIdCartsId: Get cart info
- PATCH /ecommerce/stores/{store_id}/carts/{cart_id} — patchEcommerceStoresIdCartsId: Update cart
- DELETE /ecommerce/stores/{store_id}/carts/{cart_id} — deleteEcommerceStoresIdCartsId: Delete cart
- GET /ecommerce/stores/{store_id}/carts/{cart_id}/lines — getEcommerceStoresIdCartsIdLines: List cart line items
- POST /ecommerce/stores/{store_id}/carts/{cart_id}/lines — postEcommerceStoresIdCartsIdLines: Add cart line item
- GET /ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id} — getEcommerceStoresIdCartsIdLinesId: Get cart line item
- PATCH /ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id} — patchEcommerceStoresIdCartsIdLinesId: Update cart line item
- DELETE /ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id} — deleteEcommerceStoresIdCartsLinesId: Delete cart line item
- GET /ecommerce/stores/{store_id}/customers — getEcommerceStoresIdCustomers: List customers
- POST /ecommerce/stores/{store_id}/customers — postEcommerceStoresIdCustomers: Add customer
- GET /ecommerce/stores/{store_id}/customers/{customer_id} — getEcommerceStoresIdCustomersId: Get customer info
- PUT /ecommerce/stores/{store_id}/customers/{customer_id} — putEcommerceStoresIdCustomersId: Add or update customer
- PATCH /ecommerce/stores/{store_id}/customers/{customer_id} — patchEcommerceStoresIdCustomersId: Update customer
- DELETE /ecommerce/stores/{store_id}/customers/{customer_id} — deleteEcommerceStoresIdCustomersId: Delete customer
- GET /ecommerce/stores/{store_id}/promo-rules — getEcommerceStoresIdPromorules: List promo rules
- POST /ecommerce/stores/{store_id}/promo-rules — postEcommerceStoresIdPromorules: Add promo rule
- GET /ecommerce/stores/{store_id}/promo-rules/{promo_rule_id} — getEcommerceStoresIdPromorulesId: Get promo rule
- PATCH /ecommerce/stores/{store_id}/promo-rules/{promo_rule_id} — patchEcommerceStoresIdPromorulesId: Update promo rule
- DELETE /ecommerce/stores/{store_id}/promo-rules/{promo_rule_id} — deleteEcommerceStoresIdPromorulesId: Delete promo rule
- GET /ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes — getEcommerceStoresIdPromocodes: List promo codes
- POST /ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes — postEcommerceStoresIdPromocodes: Add promo code
- GET /ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id} — getEcommerceStoresIdPromocodesId: Get promo code
- PATCH /ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id} — patchEcommerceStoresIdPromocodesId: Update promo code
- DELETE /ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id} — deleteEcommerceStoresIdPromocodesId: Delete promo code
- GET /ecommerce/stores/{store_id}/orders — getEcommerceStoresIdOrders: List orders
- POST /ecommerce/stores/{store_id}/orders — postEcommerceStoresIdOrders: Add order
- GET /ecommerce/stores/{store_id}/orders/{order_id} — getEcommerceStoresIdOrdersId: Get order info
- PUT /ecommerce/stores/{store_id}/orders/{order_id} — putEcommerceStoresIdOrdersId: Add or update order
- PATCH /ecommerce/stores/{store_id}/orders/{order_id} — patchEcommerceStoresIdOrdersId: Update order
- DELETE /ecommerce/stores/{store_id}/orders/{order_id} — deleteEcommerceStoresIdOrdersId: Delete order
- GET /ecommerce/stores/{store_id}/orders/{order_id}/lines — getEcommerceStoresIdOrdersIdLines: List order line items
- POST /ecommerce/stores/{store_id}/orders/{order_id}/lines — postEcommerceStoresIdOrdersIdLines: Add order line item
- GET /ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id} — getEcommerceStoresIdOrdersIdLinesId: Get order line item
- PATCH /ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id} — patchEcommerceStoresIdOrdersIdLinesId: Update order line item
- DELETE /ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id} — deleteEcommerceStoresIdOrdersIdLinesId: Delete order line item
- GET /ecommerce/stores/{store_id}/products — getEcommerceStoresIdProducts: List product
- POST /ecommerce/stores/{store_id}/products — postEcommerceStoresIdProducts: Add product
- GET /ecommerce/stores/{store_id}/products/{product_id} — getEcommerceStoresIdProductsId: Get product info
- PUT /ecommerce/stores/{store_id}/products/{product_id} — putEcommerceStoresIdProductsId: Create or update product
- PATCH /ecommerce/stores/{store_id}/products/{product_id} — patchEcommerceStoresIdProductsId: Update product
- DELETE /ecommerce/stores/{store_id}/products/{product_id} — deleteEcommerceStoresIdProductsId: Delete product
- GET /ecommerce/stores/{store_id}/products/{product_id}/variants — getEcommerceStoresIdProductsIdVariants: List product variants
- POST /ecommerce/stores/{store_id}/products/{product_id}/variants — postEcommerceStoresIdProductsIdVariants: Add product variant
- GET /ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id} — getEcommerceStoresIdProductsIdVariantsId: Get product variant info
- PUT /ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id} — putEcommerceStoresIdProductsIdVariantsId: Add or update product variant
- PATCH /ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id} — patchEcommerceStoresIdProductsIdVariantsId: Update product variant
- DELETE /ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id} — deleteEcommerceStoresIdProductsIdVariantsId: Delete product variant
- GET /ecommerce/stores/{store_id}/products/{product_id}/images — getEcommerceStoresIdProductsIdImages: List product images
- POST /ecommerce/stores/{store_id}/products/{product_id}/images — postEcommerceStoresIdProductsIdImages: Add product image
- GET /ecommerce/stores/{store_id}/products/{product_id}/images/{image_id} — getEcommerceStoresIdProductsIdImagesId: Get product image info
- PATCH /ecommerce/stores/{store_id}/products/{product_id}/images/{image_id} — patchEcommerceStoresIdProductsIdImagesId: Update product image
- DELETE /ecommerce/stores/{store_id}/products/{product_id}/images/{image_id} — deleteEcommerceStoresIdProductsIdImagesId: Delete product image

## facebookAds
- GET /facebook-ads — getAllFacebookAds: List facebook ads
- GET /facebook-ads/{outreach_id} — getFacebookAdsId: Get facebook ad info

## fileManager
- GET /file-manager/files — getFileManagerFiles: List stored files
- POST /file-manager/files — postFileManagerFiles: Add file
- GET /file-manager/files/{file_id} — getFileManagerFilesId: Get file
- PATCH /file-manager/files/{file_id} — patchFileManagerFilesId: Update file
- DELETE /file-manager/files/{file_id} — deleteFileManagerFilesId: Delete file
- GET /file-manager/folders — getFileManagerFolders: List folders
- POST /file-manager/folders — postFileManagerFolders: Add folder
- GET /file-manager/folders/{folder_id} — getFileManagerFoldersId: Get folder
- PATCH /file-manager/folders/{folder_id} — patchFileManagerFoldersId: Update folder
- DELETE /file-manager/folders/{folder_id} — deleteFileManagerFoldersId: Delete folder
- GET /file-manager/folders/{folder_id}/files — getFileManagerFoldersFiles: List stored files

## landingPages
- GET /landing-pages — getAllLandingPages: List landing pages
- POST /landing-pages — postAllLandingPages: Add landing page
- GET /landing-pages/{page_id} — getLandingPageId: Get landing page info
- PATCH /landing-pages/{page_id} — patchLandingPageId: Update landing page
- DELETE /landing-pages/{page_id} — deleteLandingPageId: Delete landing page
- POST /landing-pages/{page_id}/actions/publish — postLandingPageIdActionsPublish: Publish landing page
- POST /landing-pages/{page_id}/actions/unpublish — postLandingPageIdActionsUnpublish: Unpublish landing page
- GET /landing-pages/{page_id}/content — getLandingPageIdContent: Get landing page content

## lists
- GET /lists — getLists: Get lists info
- POST /lists — postLists: Add list
- GET /lists/{list_id} — getListsId: Get list info
- POST /lists/{list_id} — postListsId: Batch subscribe or unsubscribe
- PATCH /lists/{list_id} — patchListsId: Update lists
- DELETE /lists/{list_id} — deleteListsId: Delete list
- GET /lists/{list_id}/abuse-reports — getListsIdAbuseReports: List abuse reports
- GET /lists/{list_id}/abuse-reports/{report_id} — getListsIdAbuseReportsId: Get abuse report
- GET /lists/{list_id}/activity — getListsIdActivity: List recent activity
- GET /lists/{list_id}/clients — getListsIdClients: List top email clients
- GET /lists/{list_id}/growth-history — getListsIdGrowthHistory: List growth history data
- GET /lists/{list_id}/growth-history/{month} — getListsIdGrowthHistoryId: Get growth history by month
- GET /lists/{list_id}/interest-categories — getListsIdInterestCategories: List interest categories
- POST /lists/{list_id}/interest-categories — postListsIdInterestCategories: Add interest category
- GET /lists/{list_id}/interest-categories/{interest_category_id} — getListsIdInterestCategoriesId: Get interest category info
- PATCH /lists/{list_id}/interest-categories/{interest_category_id} — patchListsIdInterestCategoriesId: Update interest category
- DELETE /lists/{list_id}/interest-categories/{interest_category_id} — deleteListsIdInterestCategoriesId: Delete interest category
- GET /lists/{list_id}/interest-categories/{interest_category_id}/interests — getListsIdInterestCategoriesIdInterests: List interests in category
- POST /lists/{list_id}/interest-categories/{interest_category_id}/interests — postListsIdInterestCategoriesIdInterests: Add interest in category
- GET /lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id} — getListsIdInterestCategoriesIdInterestsId: Get interest in category
- PATCH /lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id} — patchListsIdInterestCategoriesIdInterestsId: Update interest in category
- DELETE /lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id} — deleteListsIdInterestCategoriesIdInterestsId: Delete interest in category
- GET /lists/{list_id}/segments — previewASegment: List segments
- POST /lists/{list_id}/segments — postListsIdSegments: Add segment
- GET /lists/{list_id}/segments/{segment_id} — getListsIdSegmentsId: Get segment info
- POST /lists/{list_id}/segments/{segment_id} — postListsIdSegmentsId: Batch add or remove members
- PATCH /lists/{list_id}/segments/{segment_id} — patchListsIdSegmentsId: Update segment
- DELETE /lists/{list_id}/segments/{segment_id} — deleteListsIdSegmentsId: Delete segment
- GET /lists/{list_id}/segments/{segment_id}/members — getListsIdSegmentsIdMembers: List members in segment
- POST /lists/{list_id}/segments/{segment_id}/members — postListsIdSegmentsIdMembers: Add member to segment
- DELETE /lists/{list_id}/segments/{segment_id}/members/{subscriber_hash} — deleteListsIdSegmentsIdMembersId: Remove list member from segment
- GET /lists/{list_id}/tag-search — searchTagsByName: Search for tags on a list by name.
- GET /lists/{list_id}/members — getListsIdMembers: List members info
- POST /lists/{list_id}/members — postListsIdMembers: Add member to list
- GET /lists/{list_id}/members/{subscriber_hash} — getListsIdMembersId: Get member info
- PUT /lists/{list_id}/members/{subscriber_hash} — putListsIdMembersId: Add or update list member
- PATCH /lists/{list_id}/members/{subscriber_hash} — patchListsIdMembersId: Update list member
- DELETE /lists/{list_id}/members/{subscriber_hash} — deleteListsIdMembersId: Archive list member
- GET /lists/{list_id}/members/{subscriber_hash}/activity — getListsIdMembersIdActivity: View recent activity 50
- GET /lists/{list_id}/members/{subscriber_hash}/activity-feed — getListsIdMembersIdActivityFeed: View recent activity
- GET /lists/{list_id}/members/{subscriber_hash}/tags — getListMemberTags: List member tags
- POST /lists/{list_id}/members/{subscriber_hash}/tags — postListMemberTags: Add or remove member tags
- GET /lists/{list_id}/members/{subscriber_hash}/events — getListsIdMembersIdEvents: List member events
- POST /lists/{list_id}/members/{subscriber_hash}/events — postListMemberEvents: Add event
- GET /lists/{list_id}/members/{subscriber_hash}/goals — getListsIdMembersIdGoals: List member goal events
- GET /lists/{list_id}/members/{subscriber_hash}/notes — getListsIdMembersIdNotes: List recent member notes
- POST /lists/{list_id}/members/{subscriber_hash}/notes — postListsIdMembersIdNotes: Add member note
- GET /lists/{list_id}/members/{subscriber_hash}/notes/{note_id} — getListsIdMembersIdNotesId: Get member note
- PATCH /lists/{list_id}/members/{subscriber_hash}/notes/{note_id} — patchListsIdMembersIdNotesId: Update note
- DELETE /lists/{list_id}/members/{subscriber_hash}/notes/{note_id} — deleteListsIdMembersIdNotesId: Delete note
- POST /lists/{list_id}/members/{subscriber_hash}/actions/delete-permanent — postListsIdMembersHashActionsDeletePermanent: Delete list member
- GET /lists/{list_id}/merge-fields — getListsIdMergeFields: List merge fields
- POST /lists/{list_id}/merge-fields — postListsIdMergeFields: Add merge field
- GET /lists/{list_id}/merge-fields/{merge_id} — getListsIdMergeFieldsId: Get merge field
- PATCH /lists/{list_id}/merge-fields/{merge_id} — patchListsIdMergeFieldsId: Update merge field
- DELETE /lists/{list_id}/merge-fields/{merge_id} — deleteListsIdMergeFieldsId: Delete merge field
- GET /lists/{list_id}/webhooks — getListsIdWebhooks: List webhooks
- POST /lists/{list_id}/webhooks — postListsIdWebhooks: Add webhook
- GET /lists/{list_id}/webhooks/{webhook_id} — getListsIdWebhooksId: Get webhook info
- PATCH /lists/{list_id}/webhooks/{webhook_id} — patchListsIdWebhooksId: Update webhook
- DELETE /lists/{list_id}/webhooks/{webhook_id} — deleteListsIdWebhooksId: Delete webhook
- GET /lists/{list_id}/signup-forms — getListsIdSignupForms: List signup forms
- POST /lists/{list_id}/signup-forms — postListsIdSignupForms: Customize signup form
- GET /lists/{list_id}/locations — getListsIdLocations: List locations
- GET /lists/{list_id}/surveys — getListsIdSurveys: Get information about all surveys for a list
- POST /lists/{list_id}/surveys — postListsIdSurveys: Create survey
- GET /lists/{list_id}/surveys/{survey_id} — getListsIdSurveysId: Get survey
- PATCH /lists/{list_id}/surveys/{survey_id} — patchListsIdSurveysId: Update survey
- DELETE /lists/{list_id}/surveys/{survey_id} — deleteListsIdSurveysId: Delete survey
- POST /lists/{list_id}/surveys/{survey_id}/actions/replicate — postListsIdSurveysIdActionsReplicate: Replicate survey

## ping
- GET /ping — getPing: Ping

## reporting
- GET /reporting/facebook-ads — getReportingFacebookAds: List facebook ads reports
- GET /reporting/facebook-ads/{outreach_id} — getReportingFacebookAdsId: Get facebook ad report
- GET /reporting/facebook-ads/{outreach_id}/ecommerce-product-activity — getReportingFacebookAdsIdEcommerceProductActivity: List facebook ecommerce report
- GET /reporting/landing-pages/{outreach_id} — getReportingLandingPagesId: Get landing page report
- GET /reporting/landing-pages — getReportingLandingPages: List landing pages reports
- GET /reporting/surveys — getReportingSurveys: List survey reports
- GET /reporting/surveys/{survey_id} — getReportingSurveysId: Get survey report
- GET /reporting/surveys/{survey_id}/questions — getReportingSurveysIdQuestions: List survey question reports
- GET /reporting/surveys/{survey_id}/questions/{question_id} — getReportingSurveysIdQuestionsId: Get survey question report
- GET /reporting/surveys/{survey_id}/questions/{question_id}/answers — getReportingSurveysIdQuestionsIdAnswers: List answers for question
- GET /reporting/surveys/{survey_id}/responses — getReportingSurveysIdResponses: List survey responses
- GET /reporting/surveys/{survey_id}/responses/{response_id} — getReportingSurveysIdResponsesId: Get survey response

## reports
- GET /reports — getReports: List campaign reports
- GET /reports/{campaign_id} — getReportsId: Get campaign report
- GET /reports/{campaign_id}/abuse-reports — getReportsIdAbuseReportsId: List abuse reports
- GET /reports/{campaign_id}/abuse-reports/{report_id} — getReportsIdAbuseReportsIdId: Get abuse report
- GET /reports/{campaign_id}/advice — getReportsIdAdvice: List campaign feedback
- GET /reports/{campaign_id}/click-details — getReportsIdClickDetails: List campaign details
- GET /reports/{campaign_id}/click-details/{link_id} — getReportsIdClickDetailsId: Get campaign link details
- GET /reports/{campaign_id}/click-details/{link_id}/members — getReportsIdClickDetailsIdMembers: List clicked link subscribers
- GET /reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash} — getReportsIdClickDetailsIdMembersId: Get clicked link subscriber
- GET /reports/{campaign_id}/open-details — getReportsIdOpenDetails: List campaign open details
- GET /reports/{campaign_id}/open-details/{subscriber_hash} — getReportsIdOpenDetailsIdMembersId: Get opened campaign subscriber
- GET /reports/{campaign_id}/domain-performance — getReportsIdDomainPerformance: List domain performance stats
- GET /reports/{campaign_id}/eepurl — getReportsIdEepurl: List EepURL activity
- GET /reports/{campaign_id}/email-activity — getReportsIdEmailActivity: List email activity
- GET /reports/{campaign_id}/email-activity/{subscriber_hash} — getReportsIdEmailActivityId: Get subscriber email activity
- GET /reports/{campaign_id}/locations — getReportsIdLocations: List top open activities
- GET /reports/{campaign_id}/sent-to — getReportsIdSentTo: List campaign recipients
- GET /reports/{campaign_id}/sent-to/{subscriber_hash} — getReportsIdSentToId: Get campaign recipient info
- GET /reports/{campaign_id}/sub-reports — getReportsIdSubReportsId: List child campaign reports
- GET /reports/{campaign_id}/unsubscribed — getReportsIdUnsubscribed: List unsubscribed members
- GET /reports/{campaign_id}/unsubscribed/{subscriber_hash} — getReportsIdUnsubscribedId: Get unsubscribed member
- GET /reports/{campaign_id}/ecommerce-product-activity — getReportsIdEcommerceProductActivity: List campaign product activity

## root
- GET / — getRoot: List api root resources

## searchCampaigns
- GET /search-campaigns — getSearchCampaigns: Search campaigns

## searchMembers
- GET /search-members — getSearchMembers: Search members

## sms-campaigns
- GET /sms-campaigns — getSmsCampaigns: List SMS campaigns
- POST /sms-campaigns — postSmsCampaigns: Add SMS campaign
- GET /sms-campaigns/{sms_campaign_id} — getSmsCampaignsId: Get SMS campaign info
- PATCH /sms-campaigns/{sms_campaign_id} — patchSmsCampaignsId: Update SMS campaign settings
- DELETE /sms-campaigns/{sms_campaign_id} — deleteSmsCampaignsId: Delete SMS campaign
- POST /sms-campaigns/{sms_campaign_id}/actions/send — postSmsCampaignsIdActionsSend: Send SMS campaign
- POST /sms-campaigns/{sms_campaign_id}/actions/schedule — postSmsCampaignsIdActionsSchedule: Schedule SMS campaign
- POST /sms-campaigns/{sms_campaign_id}/actions/cancel-send — postSmsCampaignsIdActionsCancelSend: Cancel SMS campaign send
- GET /sms-campaigns/{sms_campaign_id}/content — getSmsCampaignsIdContent: Get SMS campaign content
- PUT /sms-campaigns/{sms_campaign_id}/content — putSmsCampaignsIdContent: Set SMS campaign content

## templateFolders
- GET /template-folders — getTemplateFolders: List template folders
- POST /template-folders — postTemplateFolders: Add template folder
- GET /template-folders/{folder_id} — getTemplateFoldersId: Get template folder
- PATCH /template-folders/{folder_id} — patchTemplateFoldersId: Update template folder
- DELETE /template-folders/{folder_id} — deleteTemplateFoldersId: Delete template folder

## templates
- GET /templates — getTemplates: List templates
- POST /templates — postTemplates: Add template
- GET /templates/{template_id} — getTemplatesId: Get template info
- PATCH /templates/{template_id} — patchTemplatesId: Update template
- DELETE /templates/{template_id} — deleteTemplatesId: Delete template
- GET /templates/{template_id}/default-content — getTemplatesIdDefaultContent: View default content

## verifiedDomains
- GET /verified-domains/{domain_name} — getVerifiedDomain: Get domain info
- DELETE /verified-domains/{domain_name} — deleteVerifiedDomain: Delete domain
- POST /verified-domains/{domain_name}/actions/verify — verifyDomain: Verify domain
- GET /verified-domains — getVerifiedDomains: List sending domains
- POST /verified-domains — createVerifiedDomain: Add domain to account
