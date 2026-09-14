# Microsoft Graph API (curated subset: directory, files, mail, calendar, Teams, Planner) (msgraph) vv1.0

<!-- derived from openapi.json by `pnpm specs index msgraph` — do not edit by hand -->

base: https://graph.microsoft.com/v1.0 | auth: not declared | 2605 operations in 191 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## applications.appManagementPolicy
- GET /applications/{application-id}/appManagementPolicies — applications.ListAppManagementPolicies: Get appManagementPolicies from applications
- DELETE /applications/{application-id}/appManagementPolicies/{appManagementPolicy-id}/$ref — applications.appManagementPolicies.DeleteRefAppManagementPolicy: Remove appliesTo
- GET /applications/{application-id}/appManagementPolicies/$count — applications.appManagementPolicies.GetCount-3aad: Get the number of the resource
- GET /applications/{application-id}/appManagementPolicies/$ref — applications.ListRefAppManagementPolicies: Get ref of appManagementPolicies from applications
- POST /applications/{application-id}/appManagementPolicies/$ref — applications.CreateRefAppManagementPolicies: Assign appliesTo
- DELETE /applications/{application-id}/appManagementPolicies/$ref — applications.DeleteRefAppManagementPolicies: Remove appliesTo

## applications.application
- GET /applications — applications.application.ListApplication: List applications
- POST /applications — applications.application.CreateApplication: Create application
- GET /applications/{application-id} — applications.application.GetApplication: Get application
- PATCH /applications/{application-id} — applications.application.UpdateApplication: Upsert application
- DELETE /applications/{application-id} — applications.application.DeleteApplication: Delete application
- GET /applications/{application-id}/logo — applications.application.GetLogo: Get logo for application from applications
- PUT /applications/{application-id}/logo — applications.application.UpdateLogo: Update logo for application in applications
- DELETE /applications/{application-id}/logo — applications.application.DeleteLogo: Delete logo for application in applications
- GET /applications/$count — applications.GetCount-8398: Get the number of the resource

## applications.application.Actions
- POST /applications/{application-id}/addKey — applications.application.addKey: Invoke action addKey
- POST /applications/{application-id}/addPassword — applications.application.addPassword: Invoke action addPassword
- POST /applications/{application-id}/checkMemberGroups — applications.application.checkMemberGroups: Invoke action checkMemberGroups
- POST /applications/{application-id}/checkMemberObjects — applications.application.checkMemberObjects: Invoke action checkMemberObjects
- POST /applications/{application-id}/getMemberGroups — applications.application.getMemberGroups: Invoke action getMemberGroups
- POST /applications/{application-id}/getMemberObjects — applications.application.getMemberObjects: Invoke action getMemberObjects
- POST /applications/{application-id}/removeKey — applications.application.removeKey: Invoke action removeKey
- POST /applications/{application-id}/removePassword — applications.application.removePassword: Invoke action removePassword
- POST /applications/{application-id}/restore — applications.application.restore: Invoke action restore
- POST /applications/{application-id}/setVerifiedPublisher — applications.application.setVerifiedPublisher: Invoke action setVerifiedPublisher
- POST /applications/{application-id}/unsetVerifiedPublisher — applications.application.unsetVerifiedPublisher: Invoke action unsetVerifiedPublisher
- POST /applications/getAvailableExtensionProperties — applications.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /applications/getByIds — applications.getByIds: Invoke action getByIds
- POST /applications/validateProperties — applications.validateProperties: Invoke action validateProperties

## applications.application.Functions
- GET /applications/delta() — applications.delta: Invoke function delta

## applications.directoryObject
- GET /applications/{application-id}/createdOnBehalfOf — applications.GetCreatedOnBehalfOf: Get createdOnBehalfOf from applications
- GET /applications/{application-id}/owners — applications.ListOwners: List owners of an application
- DELETE /applications/{application-id}/owners/{directoryObject-id}/$ref — applications.owners.DeleteRefDirectoryObject: Remove application owner
- GET /applications/{application-id}/owners/{directoryObject-id}/graph.appRoleAssignment — applications.GetOwners.AsAppRoleAssignment: Get the item of type microsoft.graph.directoryObject as microsoft.graph.appRoleAssignment
- GET /applications/{application-id}/owners/{directoryObject-id}/graph.endpoint — applications.GetOwners.AsEndpoint: Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint
- GET /applications/{application-id}/owners/{directoryObject-id}/graph.servicePrincipal — applications.GetOwners.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /applications/{application-id}/owners/{directoryObject-id}/graph.user — applications.GetOwners.AsUser: Get the item of type microsoft.graph.directoryObject as microsoft.graph.user
- GET /applications/{application-id}/owners/$count — applications.owners.GetCount-2b88: Get the number of the resource
- GET /applications/{application-id}/owners/$ref — applications.ListRefOwners: List owners of an application
- POST /applications/{application-id}/owners/$ref — applications.CreateRefOwners: Add owner
- DELETE /applications/{application-id}/owners/$ref — applications.DeleteRefOwners: Remove application owner
- GET /applications/{application-id}/owners/graph.appRoleAssignment — applications.ListOwners.AsAppRoleAssignment: Get the items of type microsoft.graph.appRoleAssignment in the microsoft.graph.directoryObject collection
- GET /applications/{application-id}/owners/graph.appRoleAssignment/$count — applications.Owners.GetCount.AsAppRoleAssignment-eb25: Get the number of the resource
- GET /applications/{application-id}/owners/graph.endpoint — applications.ListOwners.AsEndpoint: Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection
- GET /applications/{application-id}/owners/graph.endpoint/$count — applications.Owners.GetCount.AsEndpoint-0426: Get the number of the resource
- GET /applications/{application-id}/owners/graph.servicePrincipal — applications.ListOwners.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /applications/{application-id}/owners/graph.servicePrincipal/$count — applications.Owners.GetCount.AsServicePrincipal-0959: Get the number of the resource
- GET /applications/{application-id}/owners/graph.user — applications.ListOwners.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /applications/{application-id}/owners/graph.user/$count — applications.Owners.GetCount.AsUser-c674: Get the number of the resource

## applications.extensionProperty
- GET /applications/{application-id}/extensionProperties — applications.ListExtensionProperties: List extensionProperties (directory extensions)
- POST /applications/{application-id}/extensionProperties — applications.CreateExtensionProperties: Create extensionProperty (directory extension)
- GET /applications/{application-id}/extensionProperties/{extensionProperty-id} — applications.GetExtensionProperties: Get extensionProperty (directory extension)
- PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id} — applications.UpdateExtensionProperties: Update the navigation property extensionProperties in applications
- DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id} — applications.DeleteExtensionProperties: Delete extensionProperty (directory extension)
- GET /applications/{application-id}/extensionProperties/$count — applications.extensionProperties.GetCount-3535: Get the number of the resource

## applications.federatedIdentityCredential
- GET /applications/{application-id}/federatedIdentityCredentials — applications.ListFederatedIdentityCredentials: List federatedIdentityCredential objects
- POST /applications/{application-id}/federatedIdentityCredentials — applications.CreateFederatedIdentityCredentials: Create federatedIdentityCredential
- GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id} — applications.GetFederatedIdentityCredentials: Get federatedIdentityCredential
- PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id} — applications.UpdateFederatedIdentityCredentials: Upsert federatedIdentityCredential
- DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id} — applications.DeleteFederatedIdentityCredentials: Delete federatedIdentityCredential
- GET /applications/{application-id}/federatedIdentityCredentials(name='{name}') — applications.federatedIdentityCredentials.GetByName: Get federatedIdentityCredential
- PATCH /applications/{application-id}/federatedIdentityCredentials(name='{name}') — applications.federatedIdentityCredentials.UpdateByName: Upsert federatedIdentityCredential
- DELETE /applications/{application-id}/federatedIdentityCredentials(name='{name}') — applications.federatedIdentityCredentials.DeleteByName: Delete federatedIdentityCredential
- GET /applications/{application-id}/federatedIdentityCredentials/$count — applications.federatedIdentityCredentials.GetCount-d653: Get the number of the resource

## applications.homeRealmDiscoveryPolicy
- GET /applications/{application-id}/homeRealmDiscoveryPolicies — applications.ListHomeRealmDiscoveryPolicies: Get homeRealmDiscoveryPolicies from applications
- GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id} — applications.GetHomeRealmDiscoveryPolicies: Get homeRealmDiscoveryPolicies from applications
- GET /applications/{application-id}/homeRealmDiscoveryPolicies/$count — applications.homeRealmDiscoveryPolicies.GetCount-1662: Get the number of the resource

## applications.synchronization
- GET /applications/{application-id}/synchronization — applications.GetSynchronization: Get synchronization from applications
- PUT /applications/{application-id}/synchronization — applications.SetSynchronization: Update the navigation property synchronization in applications
- DELETE /applications/{application-id}/synchronization — applications.DeleteSynchronization: Delete navigation property synchronization for applications
- GET /applications/{application-id}/synchronization/jobs — applications.synchronization.ListJobs: Get jobs from applications
- POST /applications/{application-id}/synchronization/jobs — applications.synchronization.CreateJobs: Create new navigation property to jobs for applications
- GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id} — applications.synchronization.GetJobs: Get jobs from applications
- PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id} — applications.synchronization.UpdateJobs: Update the navigation property jobs in applications
- DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id} — applications.synchronization.DeleteJobs: Delete navigation property jobs for applications
- GET /applications/{application-id}/synchronization/jobs/$count — applications.synchronization.jobs.GetCount-30ed: Get the number of the resource
- POST /applications/{application-id}/synchronization/jobs/validateCredentials — applications.application.synchronization.jobs.validateCredentials: Invoke action validateCredentials
- POST /applications/{application-id}/synchronization/acquireAccessToken — applications.application.synchronization.acquireAccessToken: Invoke action acquireAccessToken
- PUT /applications/{application-id}/synchronization/secrets — applications.synchronization.SetSecrets: Update property secrets value.
- GET /applications/{application-id}/synchronization/secrets/$count — applications.synchronization.Secrets.GetCount-26f1: Get the number of the resource
- GET /applications/{application-id}/synchronization/templates — applications.synchronization.ListTemplates: Get templates from applications
- POST /applications/{application-id}/synchronization/templates — applications.synchronization.CreateTemplates: Create new navigation property to templates for applications
- GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id} — applications.synchronization.GetTemplates: Get templates from applications
- PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id} — applications.synchronization.UpdateTemplates: Update synchronizationTemplate
- DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id} — applications.synchronization.DeleteTemplates: Delete navigation property templates for applications
- GET /applications/{application-id}/synchronization/templates/$count — applications.synchronization.templates.GetCount-738a: Get the number of the resource

## applications.tokenIssuancePolicy
- GET /applications/{application-id}/tokenIssuancePolicies — applications.ListTokenIssuancePolicies: List assigned tokenIssuancePolicies
- DELETE /applications/{application-id}/tokenIssuancePolicies/{tokenIssuancePolicy-id}/$ref — applications.tokenIssuancePolicies.DeleteRefTokenIssuancePolicy: Remove tokenIssuancePolicy
- GET /applications/{application-id}/tokenIssuancePolicies/$count — applications.tokenIssuancePolicies.GetCount-4be5: Get the number of the resource
- GET /applications/{application-id}/tokenIssuancePolicies/$ref — applications.ListRefTokenIssuancePolicies: List assigned tokenIssuancePolicies
- POST /applications/{application-id}/tokenIssuancePolicies/$ref — applications.CreateRefTokenIssuancePolicies: Assign tokenIssuancePolicy
- DELETE /applications/{application-id}/tokenIssuancePolicies/$ref — applications.DeleteRefTokenIssuancePolicies: Remove tokenIssuancePolicy

## applications.tokenLifetimePolicy
- GET /applications/{application-id}/tokenLifetimePolicies — applications.ListTokenLifetimePolicies: List assigned tokenLifetimePolicies
- DELETE /applications/{application-id}/tokenLifetimePolicies/{tokenLifetimePolicy-id}/$ref — applications.tokenLifetimePolicies.DeleteRefTokenLifetimePolicy: Remove tokenLifetimePolicy
- GET /applications/{application-id}/tokenLifetimePolicies/$count — applications.tokenLifetimePolicies.GetCount-5de4: Get the number of the resource
- GET /applications/{application-id}/tokenLifetimePolicies/$ref — applications.ListRefTokenLifetimePolicies: List assigned tokenLifetimePolicies
- POST /applications/{application-id}/tokenLifetimePolicies/$ref — applications.CreateRefTokenLifetimePolicies: Assign tokenLifetimePolicy
- DELETE /applications/{application-id}/tokenLifetimePolicies/$ref — applications.DeleteRefTokenLifetimePolicies: Remove tokenLifetimePolicy

## chats.chat
- GET /chats — chats.chat.ListChat: List chats
- POST /chats — chats.chat.CreateChat: Create chat
- GET /chats/{chat-id} — chats.chat.GetChat: Get chat
- PATCH /chats/{chat-id} — chats.chat.UpdateChat: Update chat
- DELETE /chats/{chat-id} — chats.chat.DeleteChat: Delete chat
- GET /chats/$count — chats.GetCount-61c7: Get the number of the resource

## chats.chat.Actions
- POST /chats/{chat-id}/completeMigration — chats.chat.completeMigration: Invoke action completeMigration
- POST /chats/{chat-id}/hideForUser — chats.chat.hideForUser: Invoke action hideForUser
- POST /chats/{chat-id}/markChatReadForUser — chats.chat.markChatReadForUser: Invoke action markChatReadForUser
- POST /chats/{chat-id}/markChatUnreadForUser — chats.chat.markChatUnreadForUser: Invoke action markChatUnreadForUser
- POST /chats/{chat-id}/removeAllAccessForUser — chats.chat.removeAllAccessForUser: Invoke action removeAllAccessForUser
- POST /chats/{chat-id}/sendActivityNotification — chats.chat.sendActivityNotification: Invoke action sendActivityNotification
- POST /chats/{chat-id}/startMigration — chats.chat.startMigration: Invoke action startMigration
- POST /chats/{chat-id}/unhideForUser — chats.chat.unhideForUser: Invoke action unhideForUser

## chats.chat.Functions
- GET /chats/getAllMessages() — chats.getAllMessages: Invoke function getAllMessages
- GET /chats/getAllRetainedMessages() — chats.getAllRetainedMessages: Invoke function getAllRetainedMessages

## chats.chatMessage
- GET /chats/{chat-id}/messages — chats.ListMessages: List messages in a chat
- POST /chats/{chat-id}/messages — chats.CreateMessages: Send message in a chat
- GET /chats/{chat-id}/messages/{chatMessage-id} — chats.GetMessages: Get chatMessage in a channel or chat
- PATCH /chats/{chat-id}/messages/{chatMessage-id} — chats.UpdateMessages: Update the navigation property messages in chats
- DELETE /chats/{chat-id}/messages/{chatMessage-id} — chats.DeleteMessages: Delete navigation property messages for chats
- GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents — chats.messages.ListHostedContents: List hostedContents
- POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents — chats.messages.CreateHostedContents: Create new navigation property to hostedContents for chats
- POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction — chats.chat.messages.chatMessage.setReaction: Invoke action setReaction
- POST /chats/{chat-id}/messages/{chatMessage-id}/softDelete — chats.chat.messages.chatMessage.softDelete: Invoke action softDelete
- POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete — chats.chat.messages.chatMessage.undoSoftDelete: Invoke action undoSoftDelete
- POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction — chats.chat.messages.chatMessage.unsetReaction: Invoke action unsetReaction
- GET /chats/{chat-id}/messages/{chatMessage-id}/replies — chats.messages.ListReplies: Get replies from chats
- POST /chats/{chat-id}/messages/{chatMessage-id}/replies — chats.messages.CreateReplies: Create new navigation property to replies for chats
- GET /chats/{chat-id}/messages/$count — chats.messages.GetCount-3dde: Get the number of the resource
- GET /chats/{chat-id}/messages/delta() — chats.chat.messages.delta: Invoke function delta
- POST /chats/{chat-id}/messages/replyWithQuote — chats.chat.messages.replyWithQuote: Invoke action replyWithQuote

## chats.chatMessageInfo
- GET /chats/{chat-id}/lastMessagePreview — chats.GetLastMessagePreview: Get lastMessagePreview from chats
- PATCH /chats/{chat-id}/lastMessagePreview — chats.UpdateLastMessagePreview: Update the navigation property lastMessagePreview in chats
- DELETE /chats/{chat-id}/lastMessagePreview — chats.DeleteLastMessagePreview: Delete navigation property lastMessagePreview for chats

## chats.conversationMember
- GET /chats/{chat-id}/members — chats.ListMembers: List conversationMembers
- POST /chats/{chat-id}/members — chats.CreateMembers: Add member to a chat
- GET /chats/{chat-id}/members/{conversationMember-id} — chats.GetMembers: Get conversationMember in a chat
- PATCH /chats/{chat-id}/members/{conversationMember-id} — chats.UpdateMembers: Update the navigation property members in chats
- DELETE /chats/{chat-id}/members/{conversationMember-id} — chats.DeleteMembers: Remove member from chat
- GET /chats/{chat-id}/members/$count — chats.members.GetCount-9627: Get the number of the resource
- POST /chats/{chat-id}/members/add — chats.chat.members.add: Invoke action add
- POST /chats/{chat-id}/members/remove — chats.chat.members.remove: Invoke action remove

## chats.pinnedChatMessageInfo
- GET /chats/{chat-id}/pinnedMessages — chats.ListPinnedMessages: List pinnedChatMessages in a chat
- POST /chats/{chat-id}/pinnedMessages — chats.CreatePinnedMessages: Pin a message in a chat
- GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id} — chats.GetPinnedMessages: Get pinnedMessages from chats
- PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id} — chats.UpdatePinnedMessages: Update the navigation property pinnedMessages in chats
- DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id} — chats.DeletePinnedMessages: Unpin a message from a chat
- GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message — chats.pinnedMessages.GetMessage: Get message from chats
- GET /chats/{chat-id}/pinnedMessages/$count — chats.pinnedMessages.GetCount-ad15: Get the number of the resource

## chats.resourceSpecificPermissionGrant
- GET /chats/{chat-id}/permissionGrants — chats.ListPermissionGrants: List permissionGrants of a chat
- POST /chats/{chat-id}/permissionGrants — chats.CreatePermissionGrants: Create new navigation property to permissionGrants for chats
- GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — chats.GetPermissionGrants: Get permissionGrants from chats
- PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — chats.UpdatePermissionGrants: Update the navigation property permissionGrants in chats
- DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — chats.DeletePermissionGrants: Delete navigation property permissionGrants for chats
- GET /chats/{chat-id}/permissionGrants/$count — chats.permissionGrants.GetCount-7597: Get the number of the resource

## chats.targetedChatMessage
- GET /chats/{chat-id}/targetedMessages — chats.ListTargetedMessages: Get targetedMessages from chats
- POST /chats/{chat-id}/targetedMessages — chats.CreateTargetedMessages: Create new navigation property to targetedMessages for chats
- GET /chats/{chat-id}/targetedMessages/{targetedChatMessage-id} — chats.GetTargetedMessages: Get targetedMessages from chats
- PATCH /chats/{chat-id}/targetedMessages/{targetedChatMessage-id} — chats.UpdateTargetedMessages: Update the navigation property targetedMessages in chats
- DELETE /chats/{chat-id}/targetedMessages/{targetedChatMessage-id} — chats.DeleteTargetedMessages: Delete navigation property targetedMessages for chats
- GET /chats/{chat-id}/targetedMessages/{targetedChatMessage-id}/hostedContents — chats.targetedMessages.ListHostedContents: Get hostedContents from chats
- POST /chats/{chat-id}/targetedMessages/{targetedChatMessage-id}/hostedContents — chats.targetedMessages.CreateHostedContents: Create new navigation property to hostedContents for chats
- GET /chats/{chat-id}/targetedMessages/{targetedChatMessage-id}/replies — chats.targetedMessages.ListReplies: Get replies from chats
- POST /chats/{chat-id}/targetedMessages/{targetedChatMessage-id}/replies — chats.targetedMessages.CreateReplies: Create new navigation property to replies for chats
- GET /chats/{chat-id}/targetedMessages/$count — chats.targetedMessages.GetCount-cb07: Get the number of the resource

## chats.teamsAppInstallation
- GET /chats/{chat-id}/installedApps — chats.ListInstalledApps: List apps in chat
- POST /chats/{chat-id}/installedApps — chats.CreateInstalledApps: Add app to chat
- GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id} — chats.GetInstalledApps: Get installed app in chat
- PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id} — chats.UpdateInstalledApps: Update the navigation property installedApps in chats
- DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id} — chats.DeleteInstalledApps: Uninstall app in a chat
- POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade — chats.chat.installedApps.teamsAppInstallation.upgrade: Invoke action upgrade
- GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp — chats.installedApps.GetTeamsApp: Get teamsApp from chats
- GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition — chats.installedApps.GetTeamsAppDefinition: Get teamsAppDefinition from chats
- GET /chats/{chat-id}/installedApps/$count — chats.installedApps.GetCount-3987: Get the number of the resource

## chats.teamsTab
- GET /chats/{chat-id}/tabs — chats.ListTabs: List tabs in chat
- POST /chats/{chat-id}/tabs — chats.CreateTabs: Add tab to chat
- GET /chats/{chat-id}/tabs/{teamsTab-id} — chats.GetTabs: Get tab in chat
- PATCH /chats/{chat-id}/tabs/{teamsTab-id} — chats.UpdateTabs: Update tab in chat
- DELETE /chats/{chat-id}/tabs/{teamsTab-id} — chats.DeleteTabs: Delete tab from chat
- GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp — chats.tabs.GetTeamsApp: Get teamsApp from chats
- GET /chats/{chat-id}/tabs/$count — chats.tabs.GetCount-b645: Get the number of the resource

## contacts.directoryObject
- GET /contacts/{orgContact-id}/directReports — contacts.ListDirectReports: List directReports
- GET /contacts/{orgContact-id}/directReports/{directoryObject-id} — contacts.GetDirectReports: Get directReports from contacts
- GET /contacts/{orgContact-id}/directReports/{directoryObject-id}/graph.orgContact — contacts.GetDirectReports.AsOrgContact: Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact
- GET /contacts/{orgContact-id}/directReports/{directoryObject-id}/graph.user — contacts.GetDirectReports.AsUser: Get the item of type microsoft.graph.directoryObject as microsoft.graph.user
- GET /contacts/{orgContact-id}/directReports/$count — contacts.directReports.GetCount-94c4: Get the number of the resource
- GET /contacts/{orgContact-id}/directReports/graph.orgContact — contacts.ListDirectReports.AsOrgContact: Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection
- GET /contacts/{orgContact-id}/directReports/graph.orgContact/$count — contacts.DirectReports.GetCount.AsOrgContact-315a: Get the number of the resource
- GET /contacts/{orgContact-id}/directReports/graph.user — contacts.ListDirectReports.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /contacts/{orgContact-id}/directReports/graph.user/$count — contacts.DirectReports.GetCount.AsUser-5746: Get the number of the resource
- GET /contacts/{orgContact-id}/manager — contacts.GetManager: Get manager
- GET /contacts/{orgContact-id}/memberOf — contacts.ListMemberOf: List memberOf
- GET /contacts/{orgContact-id}/memberOf/{directoryObject-id} — contacts.GetMemberOf: Get memberOf from contacts
- GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}/graph.administrativeUnit — contacts.GetMemberOf.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}/graph.group — contacts.GetMemberOf.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /contacts/{orgContact-id}/memberOf/$count — contacts.memberOf.GetCount-46e4: Get the number of the resource
- GET /contacts/{orgContact-id}/memberOf/graph.administrativeUnit — contacts.ListMemberOf.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /contacts/{orgContact-id}/memberOf/graph.administrativeUnit/$count — contacts.MemberOf.GetCount.AsAdministrativeUnit-db20: Get the number of the resource
- GET /contacts/{orgContact-id}/memberOf/graph.group — contacts.ListMemberOf.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /contacts/{orgContact-id}/memberOf/graph.group/$count — contacts.MemberOf.GetCount.AsGroup-df93: Get the number of the resource
- GET /contacts/{orgContact-id}/transitiveMemberOf — contacts.ListTransitiveMemberOf: List transitiveMemberOf
- GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id} — contacts.GetTransitiveMemberOf: Get transitiveMemberOf from contacts
- GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}/graph.administrativeUnit — contacts.GetTransitiveMemberOf.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}/graph.group — contacts.GetTransitiveMemberOf.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /contacts/{orgContact-id}/transitiveMemberOf/$count — contacts.transitiveMemberOf.GetCount-d749: Get the number of the resource
- GET /contacts/{orgContact-id}/transitiveMemberOf/graph.administrativeUnit — contacts.ListTransitiveMemberOf.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /contacts/{orgContact-id}/transitiveMemberOf/graph.administrativeUnit/$count — contacts.TransitiveMemberOf.GetCount.AsAdministrativeUnit-d6cb: Get the number of the resource
- GET /contacts/{orgContact-id}/transitiveMemberOf/graph.group — contacts.ListTransitiveMemberOf.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /contacts/{orgContact-id}/transitiveMemberOf/graph.group/$count — contacts.TransitiveMemberOf.GetCount.AsGroup-e1a5: Get the number of the resource

## contacts.onPremisesSyncBehavior
- GET /contacts/{orgContact-id}/onPremisesSyncBehavior — contacts.GetOnPremisesSyncBehavior: Get onPremisesSyncBehavior from contacts
- PATCH /contacts/{orgContact-id}/onPremisesSyncBehavior — contacts.UpdateOnPremisesSyncBehavior: Update the navigation property onPremisesSyncBehavior in contacts
- DELETE /contacts/{orgContact-id}/onPremisesSyncBehavior — contacts.DeleteOnPremisesSyncBehavior: Delete navigation property onPremisesSyncBehavior for contacts

## contacts.orgContact
- GET /contacts — contacts.orgContact.ListOrgContact: List orgContacts
- GET /contacts/{orgContact-id} — contacts.orgContact.GetOrgContact: Get orgContact
- PATCH /contacts/{orgContact-id} — contacts.orgContact.UpdateOrgContact: Update entity in contacts
- DELETE /contacts/{orgContact-id} — contacts.orgContact.DeleteOrgContact: Delete entity from contacts
- GET /contacts/$count — contacts.GetCount-60f9: Get the number of the resource

## contacts.orgContact.Actions
- POST /contacts/{orgContact-id}/checkMemberGroups — contacts.orgContact.checkMemberGroups: Invoke action checkMemberGroups
- POST /contacts/{orgContact-id}/checkMemberObjects — contacts.orgContact.checkMemberObjects: Invoke action checkMemberObjects
- POST /contacts/{orgContact-id}/getMemberGroups — contacts.orgContact.getMemberGroups: Invoke action getMemberGroups
- POST /contacts/{orgContact-id}/getMemberObjects — contacts.orgContact.getMemberObjects: Invoke action getMemberObjects
- POST /contacts/{orgContact-id}/restore — contacts.orgContact.restore: Invoke action restore
- POST /contacts/{orgContact-id}/retryServiceProvisioning — contacts.orgContact.retryServiceProvisioning: Invoke action retryServiceProvisioning
- POST /contacts/getAvailableExtensionProperties — contacts.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /contacts/getByIds — contacts.getByIds: Invoke action getByIds
- POST /contacts/validateProperties — contacts.validateProperties: Invoke action validateProperties

## contacts.orgContact.Functions
- GET /contacts/delta() — contacts.delta: Invoke function delta

## contacts.serviceProvisioningError
- GET /contacts/{orgContact-id}/serviceProvisioningErrors — contacts.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /contacts/{orgContact-id}/serviceProvisioningErrors/$count — contacts.ServiceProvisioningErrors.GetCount-33c2: Get the number of the resource

## directory.administrativeUnit
- GET /directory/administrativeUnits — directory.ListAdministrativeUnits: List administrativeUnits
- POST /directory/administrativeUnits — directory.CreateAdministrativeUnits: Create administrativeUnit
- GET /directory/administrativeUnits/{administrativeUnit-id} — directory.GetAdministrativeUnits: Get administrativeUnit
- PATCH /directory/administrativeUnits/{administrativeUnit-id} — directory.UpdateAdministrativeUnits: Update administrativeUnit
- DELETE /directory/administrativeUnits/{administrativeUnit-id} — directory.DeleteAdministrativeUnits: Delete administrativeUnit
- GET /directory/administrativeUnits/{administrativeUnit-id}/extensions — directory.administrativeUnits.ListExtensions: Get extensions from directory
- POST /directory/administrativeUnits/{administrativeUnit-id}/extensions — directory.administrativeUnits.CreateExtensions: Create new navigation property to extensions for directory
- GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id} — directory.administrativeUnits.GetExtensions: Get extensions from directory
- PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id} — directory.administrativeUnits.UpdateExtensions: Update the navigation property extensions in directory
- DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id} — directory.administrativeUnits.DeleteExtensions: Delete navigation property extensions for directory
- GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/$count — directory.administrativeUnits.extensions.GetCount-48cb: Get the number of the resource
- GET /directory/administrativeUnits/{administrativeUnit-id}/members — directory.administrativeUnits.ListMembers: List members
- POST /directory/administrativeUnits/{administrativeUnit-id}/members — directory.administrativeUnits.CreateMembers: Add a member
- GET /directory/administrativeUnits/{administrativeUnit-id}/members/$count — directory.administrativeUnits.members.GetCount-777a: Get the number of the resource
- GET /directory/administrativeUnits/{administrativeUnit-id}/members/$ref — directory.administrativeUnits.ListRefMembers: List members
- POST /directory/administrativeUnits/{administrativeUnit-id}/members/$ref — directory.administrativeUnits.CreateRefMembers: Add a member
- DELETE /directory/administrativeUnits/{administrativeUnit-id}/members/$ref — directory.administrativeUnits.DeleteRefMembers: Remove a member
- GET /directory/administrativeUnits/{administrativeUnit-id}/members/graph.application — directory.administrativeUnits.ListMembers.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /directory/administrativeUnits/{administrativeUnit-id}/members/graph.device — directory.administrativeUnits.ListMembers.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /directory/administrativeUnits/{administrativeUnit-id}/members/graph.group — directory.administrativeUnits.ListMembers.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /directory/administrativeUnits/{administrativeUnit-id}/members/graph.orgContact — directory.administrativeUnits.ListMembers.AsOrgContact: Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection
- GET /directory/administrativeUnits/{administrativeUnit-id}/members/graph.servicePrincipal — directory.administrativeUnits.ListMembers.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /directory/administrativeUnits/{administrativeUnit-id}/members/graph.user — directory.administrativeUnits.ListMembers.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers — directory.administrativeUnits.ListScopedRoleMembers: List scopedRoleMembers
- POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers — directory.administrativeUnits.CreateScopedRoleMembers: Add a scopedRoleMember
- GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id} — directory.administrativeUnits.GetScopedRoleMembers: Get a scopedRoleMember
- PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id} — directory.administrativeUnits.UpdateScopedRoleMembers: Update the navigation property scopedRoleMembers in directory
- DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id} — directory.administrativeUnits.DeleteScopedRoleMembers: Remove a scopedRoleMember
- GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/$count — directory.administrativeUnits.scopedRoleMembers.GetCount-cb3a: Get the number of the resource
- GET /directory/administrativeUnits/$count — directory.administrativeUnits.GetCount-a5a1: Get the number of the resource
- GET /directory/administrativeUnits/delta() — directory.administrativeUnits.delta: Invoke function delta

## directory.attributeSet
- GET /directory/attributeSets — directory.ListAttributeSets: List attributeSets
- POST /directory/attributeSets — directory.CreateAttributeSets: Create attributeSet
- GET /directory/attributeSets/{attributeSet-id} — directory.GetAttributeSets: Get attributeSet
- PATCH /directory/attributeSets/{attributeSet-id} — directory.UpdateAttributeSets: Update attributeSet
- DELETE /directory/attributeSets/{attributeSet-id} — directory.DeleteAttributeSets: Delete navigation property attributeSets for directory
- GET /directory/attributeSets/$count — directory.attributeSets.GetCount-147b: Get the number of the resource

## directory.companySubscription
- GET /directory/subscriptions — directory.ListSubscriptions: List subscriptions
- POST /directory/subscriptions — directory.CreateSubscriptions: Create new navigation property to subscriptions for directory
- GET /directory/subscriptions/{companySubscription-id} — directory.GetSubscriptions: Get companySubscription
- PATCH /directory/subscriptions/{companySubscription-id} — directory.UpdateSubscriptions: Update the navigation property subscriptions in directory
- DELETE /directory/subscriptions/{companySubscription-id} — directory.DeleteSubscriptions: Delete navigation property subscriptions for directory
- GET /directory/subscriptions(commerceSubscriptionId='{commerceSubscriptionId}') — directory.subscriptions.GetByCommerceSubscriptionId: Get companySubscription
- PATCH /directory/subscriptions(commerceSubscriptionId='{commerceSubscriptionId}') — directory.subscriptions.UpdateByCommerceSubscriptionId: Update the navigation property subscriptions in directory
- DELETE /directory/subscriptions(commerceSubscriptionId='{commerceSubscriptionId}') — directory.subscriptions.DeleteByCommerceSubscriptionId: Delete navigation property subscriptions for directory
- GET /directory/subscriptions/$count — directory.subscriptions.GetCount-06e4: Get the number of the resource

## directory.customSecurityAttributeDefinition
- GET /directory/customSecurityAttributeDefinitions — directory.ListCustomSecurityAttributeDefinitions: List customSecurityAttributeDefinitions
- POST /directory/customSecurityAttributeDefinitions — directory.CreateCustomSecurityAttributeDefinitions: Create customSecurityAttributeDefinition
- GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id} — directory.GetCustomSecurityAttributeDefinitions: Get customSecurityAttributeDefinition
- PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id} — directory.UpdateCustomSecurityAttributeDefinitions: Update customSecurityAttributeDefinition
- DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id} — directory.DeleteCustomSecurityAttributeDefinitions: Delete navigation property customSecurityAttributeDefinitions for directory
- GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues — directory.customSecurityAttributeDefinitions.ListAllowedValues: List allowedValues
- POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues — directory.customSecurityAttributeDefinitions.CreateAllowedValues: Create allowedValue
- GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id} — directory.customSecurityAttributeDefinitions.GetAllowedValues: Get allowedValue
- PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id} — directory.customSecurityAttributeDefinitions.UpdateAllowedValues: Update allowedValue
- DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id} — directory.customSecurityAttributeDefinitions.DeleteAllowedValues: Delete navigation property allowedValues for directory
- GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/$count — directory.customSecurityAttributeDefinitions.allowedValues.GetCount-c982: Get the number of the resource
- GET /directory/customSecurityAttributeDefinitions/$count — directory.customSecurityAttributeDefinitions.GetCount-ae4b: Get the number of the resource

## directory.deviceLocalCredentialInfo
- GET /directory/deviceLocalCredentials — directory.ListDeviceLocalCredentials: List deviceLocalCredentialInfo
- POST /directory/deviceLocalCredentials — directory.CreateDeviceLocalCredentials: Create new navigation property to deviceLocalCredentials for directory
- GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id} — directory.GetDeviceLocalCredentials: Get deviceLocalCredentialInfo
- PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id} — directory.UpdateDeviceLocalCredentials: Update the navigation property deviceLocalCredentials in directory
- DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id} — directory.DeleteDeviceLocalCredentials: Delete navigation property deviceLocalCredentials for directory
- GET /directory/deviceLocalCredentials/$count — directory.deviceLocalCredentials.GetCount-43fe: Get the number of the resource

## directory.directory
- GET /directory — directory.directory.GetDirectory: Get directory
- PATCH /directory — directory.directory.UpdateDirectory: Update directory

## directory.directoryObject
- GET /directory/deletedItems — directory.ListDeletedItems: Get deleted item (directory object)
- GET /directory/deletedItems/{directoryObject-id} — directory.GetDeletedItems: Get deleted item (directory object)
- DELETE /directory/deletedItems/{directoryObject-id} — directory.DeleteDeletedItems: Permanently delete item (directory object)
- GET /directory/deletedItems/{directoryObject-id}/graph.administrativeUnit — directory.GetDeletedItems.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /directory/deletedItems/{directoryObject-id}/graph.application — directory.GetDeletedItems.AsApplication: Get the item of type microsoft.graph.directoryObject as microsoft.graph.application
- POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups — directory.deletedItems.directoryObject.checkMemberGroups: Invoke action checkMemberGroups
- POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects — directory.deletedItems.directoryObject.checkMemberObjects: Invoke action checkMemberObjects
- GET /directory/deletedItems/{directoryObject-id}/graph.device — directory.GetDeletedItems.AsDevice: Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
- POST /directory/deletedItems/{directoryObject-id}/getMemberGroups — directory.deletedItems.directoryObject.getMemberGroups: Invoke action getMemberGroups
- POST /directory/deletedItems/{directoryObject-id}/getMemberObjects — directory.deletedItems.directoryObject.getMemberObjects: Invoke action getMemberObjects
- GET /directory/deletedItems/{directoryObject-id}/graph.group — directory.GetDeletedItems.AsGroup: List deletedItems (directory objects)
- POST /directory/deletedItems/{directoryObject-id}/restore — directory.deletedItems.directoryObject.restore: Invoke action restore
- GET /directory/deletedItems/{directoryObject-id}/graph.servicePrincipal — directory.GetDeletedItems.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /directory/deletedItems/{directoryObject-id}/graph.user — directory.GetDeletedItems.AsUser: Get the item of type microsoft.graph.directoryObject as microsoft.graph.user
- GET /directory/deletedItems/$count — directory.deletedItems.GetCount-665f: Get the number of the resource
- GET /directory/deletedItems/graph.administrativeUnit — directory.ListDeletedItems.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /directory/deletedItems/graph.administrativeUnit/$count — directory.DeletedItems.GetCount.AsAdministrativeUnit-0f56: Get the number of the resource
- GET /directory/deletedItems/graph.application — directory.ListDeletedItems.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /directory/deletedItems/graph.application/$count — directory.DeletedItems.GetCount.AsApplication-09ac: Get the number of the resource
- GET /directory/deletedItems/graph.device — directory.ListDeletedItems.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /directory/deletedItems/graph.device/$count — directory.DeletedItems.GetCount.AsDevice-6f35: Get the number of the resource
- POST /directory/deletedItems/getAvailableExtensionProperties — directory.deletedItems.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /directory/deletedItems/getByIds — directory.deletedItems.getByIds: Invoke action getByIds
- GET /directory/deletedItems/graph.group — directory.ListDeletedItems.AsGroup: List deletedItems (directory objects)
- GET /directory/deletedItems/graph.group/$count — directory.DeletedItems.GetCount.AsGroup-255d: Get the number of the resource
- GET /directory/deletedItems/graph.servicePrincipal — directory.ListDeletedItems.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /directory/deletedItems/graph.servicePrincipal/$count — directory.DeletedItems.GetCount.AsServicePrincipal-6632: Get the number of the resource
- GET /directory/deletedItems/graph.user — directory.ListDeletedItems.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /directory/deletedItems/graph.user/$count — directory.DeletedItems.GetCount.AsUser-bc15: Get the number of the resource
- POST /directory/deletedItems/validateProperties — directory.deletedItems.validateProperties: Invoke action validateProperties

## directory.identityProviderBase
- GET /directory/federationConfigurations — directory.ListFederationConfigurations: Get federationConfigurations from directory
- POST /directory/federationConfigurations — directory.CreateFederationConfigurations: Create new navigation property to federationConfigurations for directory
- GET /directory/federationConfigurations/{identityProviderBase-id} — directory.GetFederationConfigurations: Get federationConfigurations from directory
- PATCH /directory/federationConfigurations/{identityProviderBase-id} — directory.UpdateFederationConfigurations: Update the navigation property federationConfigurations in directory
- DELETE /directory/federationConfigurations/{identityProviderBase-id} — directory.DeleteFederationConfigurations: Delete samlOrWsFedExternalDomainFederation
- GET /directory/federationConfigurations/$count — directory.federationConfigurations.GetCount-1592: Get the number of the resource
- GET /directory/federationConfigurations/availableProviderTypes() — directory.federationConfigurations.availableProviderTypes: Invoke function availableProviderTypes

## directory.onPremisesDirectorySynchronization
- GET /directory/onPremisesSynchronization — directory.ListOnPremisesSynchronization: Get onPremisesDirectorySynchronization
- POST /directory/onPremisesSynchronization — directory.CreateOnPremisesSynchronization: Create new navigation property to onPremisesSynchronization for directory
- GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id} — directory.GetOnPremisesSynchronization: Get onPremisesDirectorySynchronization
- PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id} — directory.UpdateOnPremisesSynchronization: Update onPremisesDirectorySynchronization
- DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id} — directory.DeleteOnPremisesSynchronization: Delete navigation property onPremisesSynchronization for directory
- GET /directory/onPremisesSynchronization/$count — directory.onPremisesSynchronization.GetCount-df9d: Get the number of the resource

## directory.publicKeyInfrastructureRoot
- GET /directory/publicKeyInfrastructure — directory.GetPublicKeyInfrastructure: Get publicKeyInfrastructure from directory
- PATCH /directory/publicKeyInfrastructure — directory.UpdatePublicKeyInfrastructure: Update the navigation property publicKeyInfrastructure in directory
- DELETE /directory/publicKeyInfrastructure — directory.DeletePublicKeyInfrastructure: Delete navigation property publicKeyInfrastructure for directory
- GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations — directory.publicKeyInfrastructure.ListCertificateBasedAuthConfigurations: List certificateBasedAuthPki objects
- POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations — directory.publicKeyInfrastructure.CreateCertificateBasedAuthConfigurations: Create certificateBasedAuthPki
- GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id} — directory.publicKeyInfrastructure.GetCertificateBasedAuthConfigurations: Get certificateBasedAuthPki
- PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id} — directory.publicKeyInfrastructure.UpdateCertificateBasedAuthConfigurations: Update certificateBasedAuthPki
- DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id} — directory.publicKeyInfrastructure.DeleteCertificateBasedAuthConfigurations: Delete certificateBasedAuthPki
- GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities — directory.publicKeyInfrastructure.certificateBasedAuthConfigurations.ListCertificateAuthorities: List certificateAuthorityDetail objects
- POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities — directory.publicKeyInfrastructure.certificateBasedAuthConfigurations.CreateCertificateAuthorities: Create certificateAuthorityDetail
- POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload — directory.publicKeyInfrastructure.certificateBasedAuthConfigurations.certificateBasedAuthPki.upload: Invoke action upload
- GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/$count — directory.publicKeyInfrastructure.certificateBasedAuthConfigurations.GetCount-4154: Get the number of the resource

## directory.recovery
- GET /directory/recovery — directory.GetRecovery: Get recovery from directory
- PATCH /directory/recovery — directory.UpdateRecovery: Update the navigation property recovery in directory
- DELETE /directory/recovery — directory.DeleteRecovery: Delete navigation property recovery for directory
- GET /directory/recovery/jobs — directory.recovery.ListJobs: List jobs
- POST /directory/recovery/jobs — directory.recovery.CreateJobs: Create new navigation property to jobs for directory
- GET /directory/recovery/jobs/{recoveryJobBase-id} — directory.recovery.GetJobs: Get jobs from directory
- PATCH /directory/recovery/jobs/{recoveryJobBase-id} — directory.recovery.UpdateJobs: Update the navigation property jobs in directory
- DELETE /directory/recovery/jobs/{recoveryJobBase-id} — directory.recovery.DeleteJobs: Delete navigation property jobs for directory
- POST /directory/recovery/jobs/{recoveryJobBase-id}/microsoft.graph.entraRecoveryServices.cancel — directory.recovery.jobs.recoveryJobBase.cancel: Invoke action cancel
- GET /directory/recovery/jobs/$count — directory.recovery.jobs.GetCount-4cb0: Get the number of the resource
- GET /directory/recovery/snapshots — directory.recovery.ListSnapshots: List snapshots
- POST /directory/recovery/snapshots — directory.recovery.CreateSnapshots: Create new navigation property to snapshots for directory
- GET /directory/recovery/snapshots/{snapshot-id} — directory.recovery.GetSnapshots: Get snapshots from directory
- PATCH /directory/recovery/snapshots/{snapshot-id} — directory.recovery.UpdateSnapshots: Update the navigation property snapshots in directory
- DELETE /directory/recovery/snapshots/{snapshot-id} — directory.recovery.DeleteSnapshots: Delete navigation property snapshots for directory
- GET /directory/recovery/snapshots/{snapshot-id}/recoveryJobs — directory.recovery.snapshots.ListRecoveryJobs: Get recoveryJobs from directory
- GET /directory/recovery/snapshots/{snapshot-id}/recoveryPreviewJobs — directory.recovery.snapshots.ListRecoveryPreviewJobs: Get recoveryPreviewJobs from directory
- GET /directory/recovery/snapshots/$count — directory.recovery.snapshots.GetCount-cd9b: Get the number of the resource

## directory.remoteTenantGroup
- GET /directory/remoteTenantGroups — directory.ListRemoteTenantGroups: List remoteTenantGroup objects (deprecated)
- POST /directory/remoteTenantGroups — directory.CreateRemoteTenantGroups: Create new navigation property to remoteTenantGroups for directory (deprecated)
- GET /directory/remoteTenantGroups/{remoteTenantGroup-id} — directory.GetRemoteTenantGroups: Get remoteTenantGroup (deprecated)
- PATCH /directory/remoteTenantGroups/{remoteTenantGroup-id} — directory.UpdateRemoteTenantGroups: Update the navigation property remoteTenantGroups in directory (deprecated)
- DELETE /directory/remoteTenantGroups/{remoteTenantGroup-id} — directory.DeleteRemoteTenantGroups: Delete navigation property remoteTenantGroups for directory (deprecated)
- GET /directory/remoteTenantGroups/$count — directory.remoteTenantGroups.GetCount-3a55: Get the number of the resource (deprecated)

## directoryObjects.directoryObject
- GET /directoryObjects — directoryObjects.directoryObject.ListDirectoryObject: Get entities from directoryObjects
- POST /directoryObjects — directoryObjects.directoryObject.CreateDirectoryObject: Add new entity to directoryObjects
- GET /directoryObjects/{directoryObject-id} — directoryObjects.directoryObject.GetDirectoryObject: Get directoryObject
- PATCH /directoryObjects/{directoryObject-id} — directoryObjects.directoryObject.UpdateDirectoryObject: Update entity in directoryObjects
- DELETE /directoryObjects/{directoryObject-id} — directoryObjects.directoryObject.DeleteDirectoryObject: Delete directoryObject
- GET /directoryObjects/$count — directoryObjects.GetCount-3210: Get the number of the resource

## directoryObjects.directoryObject.Actions
- POST /directoryObjects/{directoryObject-id}/checkMemberGroups — directoryObjects.directoryObject.checkMemberGroups: Invoke action checkMemberGroups
- POST /directoryObjects/{directoryObject-id}/checkMemberObjects — directoryObjects.directoryObject.checkMemberObjects: Invoke action checkMemberObjects
- POST /directoryObjects/{directoryObject-id}/getMemberGroups — directoryObjects.directoryObject.getMemberGroups: Invoke action getMemberGroups
- POST /directoryObjects/{directoryObject-id}/getMemberObjects — directoryObjects.directoryObject.getMemberObjects: Invoke action getMemberObjects
- POST /directoryObjects/{directoryObject-id}/restore — directoryObjects.directoryObject.restore: Invoke action restore
- POST /directoryObjects/getAvailableExtensionProperties — directoryObjects.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /directoryObjects/getByIds — directoryObjects.getByIds: Invoke action getByIds
- POST /directoryObjects/validateProperties — directoryObjects.validateProperties: Invoke action validateProperties

## directoryObjects.directoryObject.Functions
- GET /directoryObjects/delta() — directoryObjects.delta: Invoke function delta

## directoryRoles.directoryObject
- GET /directoryRoles/{directoryRole-id}/members — directoryRoles.ListMembers: List members of a directory role
- DELETE /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/$ref — directoryRoles.members.DeleteRefDirectoryObject: Remove directory role member
- GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/graph.application — directoryRoles.GetMembers.AsApplication: Get the item of type microsoft.graph.directoryObject as microsoft.graph.application
- GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/graph.device — directoryRoles.GetMembers.AsDevice: Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
- GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/graph.group — directoryRoles.GetMembers.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/graph.orgContact — directoryRoles.GetMembers.AsOrgContact: Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact
- GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/graph.servicePrincipal — directoryRoles.GetMembers.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/graph.user — directoryRoles.GetMembers.AsUser: Get the item of type microsoft.graph.directoryObject as microsoft.graph.user
- GET /directoryRoles/{directoryRole-id}/members/$count — directoryRoles.members.GetCount-5361: Get the number of the resource
- GET /directoryRoles/{directoryRole-id}/members/$ref — directoryRoles.ListRefMembers: List members of a directory role
- POST /directoryRoles/{directoryRole-id}/members/$ref — directoryRoles.CreateRefMembers: Add directory role member
- DELETE /directoryRoles/{directoryRole-id}/members/$ref — directoryRoles.DeleteRefMembers: Remove directory role member
- GET /directoryRoles/{directoryRole-id}/members/graph.application — directoryRoles.ListMembers.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /directoryRoles/{directoryRole-id}/members/graph.application/$count — directoryRoles.Members.GetCount.AsApplication-290c: Get the number of the resource
- GET /directoryRoles/{directoryRole-id}/members/graph.device — directoryRoles.ListMembers.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /directoryRoles/{directoryRole-id}/members/graph.device/$count — directoryRoles.Members.GetCount.AsDevice-e712: Get the number of the resource
- GET /directoryRoles/{directoryRole-id}/members/graph.group — directoryRoles.ListMembers.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /directoryRoles/{directoryRole-id}/members/graph.group/$count — directoryRoles.Members.GetCount.AsGroup-b36f: Get the number of the resource
- GET /directoryRoles/{directoryRole-id}/members/graph.orgContact — directoryRoles.ListMembers.AsOrgContact: Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection
- GET /directoryRoles/{directoryRole-id}/members/graph.orgContact/$count — directoryRoles.Members.GetCount.AsOrgContact-3e36: Get the number of the resource
- GET /directoryRoles/{directoryRole-id}/members/graph.servicePrincipal — directoryRoles.ListMembers.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /directoryRoles/{directoryRole-id}/members/graph.servicePrincipal/$count — directoryRoles.Members.GetCount.AsServicePrincipal-b8f5: Get the number of the resource
- GET /directoryRoles/{directoryRole-id}/members/graph.user — directoryRoles.ListMembers.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /directoryRoles/{directoryRole-id}/members/graph.user/$count — directoryRoles.Members.GetCount.AsUser-af1f: Get the number of the resource

## directoryRoles.directoryRole
- GET /directoryRoles — directoryRoles.directoryRole.ListDirectoryRole: List directoryRoles
- POST /directoryRoles — directoryRoles.directoryRole.CreateDirectoryRole: Activate directoryRole
- GET /directoryRoles/{directoryRole-id} — directoryRoles.directoryRole.GetDirectoryRole: Get directoryRole
- PATCH /directoryRoles/{directoryRole-id} — directoryRoles.directoryRole.UpdateDirectoryRole: Update entity in directoryRoles
- DELETE /directoryRoles/{directoryRole-id} — directoryRoles.directoryRole.DeleteDirectoryRole: Delete entity from directoryRoles
- GET /directoryRoles/$count — directoryRoles.GetCount-ad68: Get the number of the resource

## directoryRoles.directoryRole.Actions
- POST /directoryRoles/{directoryRole-id}/checkMemberGroups — directoryRoles.directoryRole.checkMemberGroups: Invoke action checkMemberGroups
- POST /directoryRoles/{directoryRole-id}/checkMemberObjects — directoryRoles.directoryRole.checkMemberObjects: Invoke action checkMemberObjects
- POST /directoryRoles/{directoryRole-id}/getMemberGroups — directoryRoles.directoryRole.getMemberGroups: Invoke action getMemberGroups
- POST /directoryRoles/{directoryRole-id}/getMemberObjects — directoryRoles.directoryRole.getMemberObjects: Invoke action getMemberObjects
- POST /directoryRoles/{directoryRole-id}/restore — directoryRoles.directoryRole.restore: Invoke action restore
- POST /directoryRoles/getAvailableExtensionProperties — directoryRoles.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /directoryRoles/getByIds — directoryRoles.getByIds: Invoke action getByIds
- POST /directoryRoles/validateProperties — directoryRoles.validateProperties: Invoke action validateProperties

## directoryRoles.directoryRole.Functions
- GET /directoryRoles/delta() — directoryRoles.delta: Invoke function delta

## directoryRoles.scopedRoleMembership
- GET /directoryRoles/{directoryRole-id}/scopedMembers — directoryRoles.ListScopedMembers: List scopedMembers for a directory role
- POST /directoryRoles/{directoryRole-id}/scopedMembers — directoryRoles.CreateScopedMembers: Create new navigation property to scopedMembers for directoryRoles
- GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id} — directoryRoles.GetScopedMembers: Get scopedMembers from directoryRoles
- PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id} — directoryRoles.UpdateScopedMembers: Update the navigation property scopedMembers in directoryRoles
- DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id} — directoryRoles.DeleteScopedMembers: Delete navigation property scopedMembers for directoryRoles
- GET /directoryRoles/{directoryRole-id}/scopedMembers/$count — directoryRoles.scopedMembers.GetCount-b2b2: Get the number of the resource

## domains.directoryObject
- GET /domains/{domain-id}/domainNameReferences — domains.ListDomainNameReferences: List domainNameReferences
- GET /domains/{domain-id}/domainNameReferences/{directoryObject-id} — domains.GetDomainNameReferences: Get domainNameReferences from domains
- GET /domains/{domain-id}/domainNameReferences/$count — domains.domainNameReferences.GetCount-a205: Get the number of the resource

## domains.domain
- GET /domains — domains.domain.ListDomain: List domains
- POST /domains — domains.domain.CreateDomain: Create domain
- GET /domains/{domain-id} — domains.domain.GetDomain: Get domain
- PATCH /domains/{domain-id} — domains.domain.UpdateDomain: Update domain
- DELETE /domains/{domain-id} — domains.domain.DeleteDomain: Delete domain
- GET /domains/{domain-id}/rootDomain — domains.GetRootDomain: Get rootDomain
- GET /domains/$count — domains.GetCount-3c31: Get the number of the resource

## domains.domain.Actions
- POST /domains/{domain-id}/forceDelete — domains.domain.forceDelete: Invoke action forceDelete
- POST /domains/{domain-id}/promote — domains.domain.promote: Invoke action promote
- POST /domains/{domain-id}/verify — domains.domain.verify: Invoke action verify

## domains.domainDnsRecord
- GET /domains/{domain-id}/serviceConfigurationRecords — domains.ListServiceConfigurationRecords: List serviceConfigurationRecords
- POST /domains/{domain-id}/serviceConfigurationRecords — domains.CreateServiceConfigurationRecords: Create new navigation property to serviceConfigurationRecords for domains
- GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id} — domains.GetServiceConfigurationRecords: Get serviceConfigurationRecords from domains
- PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id} — domains.UpdateServiceConfigurationRecords: Update the navigation property serviceConfigurationRecords in domains
- DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id} — domains.DeleteServiceConfigurationRecords: Delete navigation property serviceConfigurationRecords for domains
- GET /domains/{domain-id}/serviceConfigurationRecords/$count — domains.serviceConfigurationRecords.GetCount-999b: Get the number of the resource
- GET /domains/{domain-id}/verificationDnsRecords — domains.ListVerificationDnsRecords: List verificationDnsRecords
- POST /domains/{domain-id}/verificationDnsRecords — domains.CreateVerificationDnsRecords: Create new navigation property to verificationDnsRecords for domains
- GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id} — domains.GetVerificationDnsRecords: Get verificationDnsRecords from domains
- PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id} — domains.UpdateVerificationDnsRecords: Update the navigation property verificationDnsRecords in domains
- DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id} — domains.DeleteVerificationDnsRecords: Delete navigation property verificationDnsRecords for domains
- GET /domains/{domain-id}/verificationDnsRecords/$count — domains.verificationDnsRecords.GetCount-d5a7: Get the number of the resource

## domains.internalDomainFederation
- GET /domains/{domain-id}/federationConfiguration — domains.ListFederationConfiguration: List internalDomainFederations
- POST /domains/{domain-id}/federationConfiguration — domains.CreateFederationConfiguration: Create internalDomainFederation
- GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id} — domains.GetFederationConfiguration: Get internalDomainFederation
- PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id} — domains.UpdateFederationConfiguration: Update internalDomainFederation
- DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id} — domains.DeleteFederationConfiguration: Delete internalDomainFederation
- GET /domains/{domain-id}/federationConfiguration/$count — domains.federationConfiguration.GetCount-9087: Get the number of the resource

## drives.drive
- GET /drives — drives.drive.ListDrive: Get entities from drives
- POST /drives — drives.drive.CreateDrive: Add new entity to drives
- GET /drives/{drive-id} — drives.drive.GetDrive: Get entity from drives by key
- PATCH /drives/{drive-id} — drives.drive.UpdateDrive: Update entity in drives
- DELETE /drives/{drive-id} — drives.drive.DeleteDrive: Delete entity from drives

## drives.drive.Functions
- GET /drives/{drive-id}/recent() — drives.drive.recent: Invoke function recent (deprecated)
- GET /drives/{drive-id}/search(q='{q}') — drives.drive.search: Invoke function search
- GET /drives/{drive-id}/sharedWithMe() — drives.drive.sharedWithMe: Invoke function sharedWithMe (deprecated)

## drives.driveItem
- GET /drives/{drive-id}/bundles — drives.ListBundles: Get bundles from drives
- POST /drives/{drive-id}/bundles — drives.CreateBundles: Create new navigation property to bundles for drives
- GET /drives/{drive-id}/bundles/{driveItem-id} — drives.GetBundles: Get bundles from drives
- GET /drives/{drive-id}/bundles/{driveItem-id}/content — drives.GetBundlesContent: Get content for the navigation property bundles from drives
- PUT /drives/{drive-id}/bundles/{driveItem-id}/content — drives.UpdateBundlesContent: Update content for the navigation property bundles in drives
- DELETE /drives/{drive-id}/bundles/{driveItem-id}/content — drives.DeleteBundlesContent: Delete content for the navigation property bundles in drives
- GET /drives/{drive-id}/bundles/$count — drives.bundles.GetCount-c935: Get the number of the resource
- GET /drives/{drive-id}/following — drives.ListFollowing: Get following from drives
- GET /drives/{drive-id}/following/{driveItem-id} — drives.GetFollowing: Get following from drives
- GET /drives/{drive-id}/following/{driveItem-id}/content — drives.GetFollowingContent: Get content for the navigation property following from drives
- PUT /drives/{drive-id}/following/{driveItem-id}/content — drives.UpdateFollowingContent: Update content for the navigation property following in drives
- DELETE /drives/{drive-id}/following/{driveItem-id}/content — drives.DeleteFollowingContent: Delete content for the navigation property following in drives
- GET /drives/{drive-id}/following/$count — drives.following.GetCount-16f3: Get the number of the resource
- GET /drives/{drive-id}/items — drives.ListItems: drive: sharedWithMe (deprecated)
- POST /drives/{drive-id}/items — drives.CreateItems: Create new navigation property to items for drives
- GET /drives/{drive-id}/items/{driveItem-id} — drives.GetItems: Get items from drives
- PATCH /drives/{drive-id}/items/{driveItem-id} — drives.UpdateItems: Update the navigation property items in drives
- DELETE /drives/{drive-id}/items/{driveItem-id} — drives.DeleteItems: Delete navigation property items for drives
- GET /drives/{drive-id}/items/{driveItem-id}/analytics — drives.items.GetAnalytics: Get analytics from drives
- PATCH /drives/{drive-id}/items/{driveItem-id}/analytics — drives.items.UpdateAnalytics: Update the navigation property analytics in drives
- DELETE /drives/{drive-id}/items/{driveItem-id}/analytics — drives.items.DeleteAnalytics: Delete navigation property analytics for drives
- GET /drives/{drive-id}/items/{driveItem-id}/children — drives.items.ListChildren: List children of a driveItem
- POST /drives/{drive-id}/items/{driveItem-id}/children — drives.items.CreateChildren: Create new navigation property to children for drives
- GET /drives/{drive-id}/items/{driveItem-id}/content — drives.GetItemsContent: Get content for the navigation property items from drives
- PUT /drives/{drive-id}/items/{driveItem-id}/content — drives.UpdateItemsContent: Update content for the navigation property items in drives
- DELETE /drives/{drive-id}/items/{driveItem-id}/content — drives.DeleteItemsContent: Delete content for the navigation property items in drives
- GET /drives/{drive-id}/items/{driveItem-id}/createdByUser — drives.items.GetCreatedByUser: Get createdByUser from drives
- GET /drives/{drive-id}/items/{driveItem-id}/lastModifiedByUser — drives.items.GetLastModifiedByUser: Get lastModifiedByUser from drives
- GET /drives/{drive-id}/items/{driveItem-id}/listItem — drives.items.GetListItem: Get listItem from drives
- POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel — drives.drive.items.driveItem.assignSensitivityLabel: Invoke action assignSensitivityLabel
- POST /drives/{drive-id}/items/{driveItem-id}/checkin — drives.drive.items.driveItem.checkin: Invoke action checkin
- POST /drives/{drive-id}/items/{driveItem-id}/checkout — drives.drive.items.driveItem.checkout: Invoke action checkout
- POST /drives/{drive-id}/items/{driveItem-id}/copy — drives.drive.items.driveItem.copy: Invoke action copy
- POST /drives/{drive-id}/items/{driveItem-id}/createLink — drives.drive.items.driveItem.createLink: Invoke action createLink
- POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession — drives.drive.items.driveItem.createUploadSession: Invoke action createUploadSession
- GET /drives/{drive-id}/items/{driveItem-id}/delta() — drives.drive.items.driveItem.delta-fa14: Invoke function delta
- GET /drives/{drive-id}/items/{driveItem-id}/delta(token='{token}') — drives.drive.items.driveItem.delta-9846: Invoke function delta
- POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout — drives.drive.items.driveItem.discardCheckout: Invoke action discardCheckout
- POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels — drives.drive.items.driveItem.extractSensitivityLabels: Invoke action extractSensitivityLabels
- POST /drives/{drive-id}/items/{driveItem-id}/follow — drives.drive.items.driveItem.follow: Invoke action follow
- GET /drives/{drive-id}/items/{driveItem-id}/getActivitiesByInterval() — drives.drive.items.driveItem.getActivitiesByInterval-4c35: Invoke function getActivitiesByInterval
- GET /drives/{drive-id}/items/{driveItem-id}/getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}') — drives.drive.items.driveItem.getActivitiesByInterval-ad27: Invoke function getActivitiesByInterval
- POST /drives/{drive-id}/items/{driveItem-id}/invite — drives.drive.items.driveItem.invite: Invoke action invite
- POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete — drives.drive.items.driveItem.permanentDelete: Invoke action permanentDelete
- POST /drives/{drive-id}/items/{driveItem-id}/preview — drives.drive.items.driveItem.preview: Invoke action preview
- POST /drives/{drive-id}/items/{driveItem-id}/restore — drives.drive.items.driveItem.restore: Invoke action restore
- GET /drives/{drive-id}/items/{driveItem-id}/search(q='{q}') — drives.drive.items.driveItem.search: Invoke function search
- POST /drives/{drive-id}/items/{driveItem-id}/unfollow — drives.drive.items.driveItem.unfollow: Invoke action unfollow
- POST /drives/{drive-id}/items/{driveItem-id}/validatePermission — drives.drive.items.driveItem.validatePermission: Invoke action validatePermission
- GET /drives/{drive-id}/items/{driveItem-id}/permissions — drives.items.ListPermissions: Get permissions from drives
- POST /drives/{drive-id}/items/{driveItem-id}/permissions — drives.items.CreatePermissions: Create new navigation property to permissions for drives
- GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel — drives.items.GetRetentionLabel: driveItem: getRetentionLabel
- PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel — drives.items.UpdateRetentionLabel: driveItem: lockOrUnlockRecord
- DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel — drives.items.DeleteRetentionLabel: driveItem: removeRetentionLabel
- GET /drives/{drive-id}/items/{driveItem-id}/subscriptions — drives.items.ListSubscriptions: Get subscriptions from drives
- POST /drives/{drive-id}/items/{driveItem-id}/subscriptions — drives.items.CreateSubscriptions: Create new navigation property to subscriptions for drives
- GET /drives/{drive-id}/items/{driveItem-id}/thumbnails — drives.items.ListThumbnails: Get thumbnails from drives
- POST /drives/{drive-id}/items/{driveItem-id}/thumbnails — drives.items.CreateThumbnails: Create new navigation property to thumbnails for drives
- GET /drives/{drive-id}/items/{driveItem-id}/versions — drives.items.ListVersions: Get versions from drives
- POST /drives/{drive-id}/items/{driveItem-id}/versions — drives.items.CreateVersions: Create new navigation property to versions for drives
- GET /drives/{drive-id}/items/{driveItem-id}/workbook — drives.items.GetWorkbook: Get workbook from drives
- PATCH /drives/{drive-id}/items/{driveItem-id}/workbook — drives.items.UpdateWorkbook: Update the navigation property workbook in drives
- DELETE /drives/{drive-id}/items/{driveItem-id}/workbook — drives.items.DeleteWorkbook: Delete navigation property workbook for drives
- GET /drives/{drive-id}/items/$count — drives.items.GetCount-9c16: Get the number of the resource
- GET /drives/{drive-id}/root — drives.GetRoot: Get root from drives
- GET /drives/{drive-id}/root/content — drives.GetRootContent: Get content for the navigation property root from drives
- PUT /drives/{drive-id}/root/content — drives.UpdateRootContent: Update content for the navigation property root in drives
- DELETE /drives/{drive-id}/root/content — drives.DeleteRootContent: Delete content for the navigation property root in drives
- GET /drives/{drive-id}/special — drives.ListSpecial: Get special from drives
- GET /drives/{drive-id}/special/{driveItem-id} — drives.GetSpecial: Get special from drives
- GET /drives/{drive-id}/special/{driveItem-id}/content — drives.GetSpecialContent: Get content for the navigation property special from drives
- PUT /drives/{drive-id}/special/{driveItem-id}/content — drives.UpdateSpecialContent: Update content for the navigation property special in drives
- DELETE /drives/{drive-id}/special/{driveItem-id}/content — drives.DeleteSpecialContent: Delete content for the navigation property special in drives
- GET /drives/{drive-id}/special/$count — drives.special.GetCount-6a2e: Get the number of the resource

## drives.list
- GET /drives/{drive-id}/list — drives.GetList: Get list from drives
- PATCH /drives/{drive-id}/list — drives.UpdateList: Update the navigation property list in drives
- DELETE /drives/{drive-id}/list — drives.DeleteList: Delete navigation property list for drives
- GET /drives/{drive-id}/list/columns — drives.list.ListColumns: Get columns from drives
- POST /drives/{drive-id}/list/columns — drives.list.CreateColumns: Create new navigation property to columns for drives
- GET /drives/{drive-id}/list/columns/{columnDefinition-id} — drives.list.GetColumns: Get columns from drives
- PATCH /drives/{drive-id}/list/columns/{columnDefinition-id} — drives.list.UpdateColumns: Update the navigation property columns in drives
- DELETE /drives/{drive-id}/list/columns/{columnDefinition-id} — drives.list.DeleteColumns: Delete navigation property columns for drives
- GET /drives/{drive-id}/list/columns/$count — drives.list.columns.GetCount-5e2e: Get the number of the resource
- GET /drives/{drive-id}/list/contentTypes — drives.list.ListContentTypes: Get contentTypes from drives
- POST /drives/{drive-id}/list/contentTypes — drives.list.CreateContentTypes: Create new navigation property to contentTypes for drives
- GET /drives/{drive-id}/list/contentTypes/{contentType-id} — drives.list.GetContentTypes: Get contentTypes from drives
- PATCH /drives/{drive-id}/list/contentTypes/{contentType-id} — drives.list.UpdateContentTypes: Update the navigation property contentTypes in drives
- DELETE /drives/{drive-id}/list/contentTypes/{contentType-id} — drives.list.DeleteContentTypes: Delete navigation property contentTypes for drives
- GET /drives/{drive-id}/list/contentTypes/$count — drives.list.contentTypes.GetCount-5838: Get the number of the resource
- POST /drives/{drive-id}/list/contentTypes/addCopy — drives.drive.list.contentTypes.addCopy: Invoke action addCopy
- POST /drives/{drive-id}/list/contentTypes/addCopyFromContentTypeHub — drives.drive.list.contentTypes.addCopyFromContentTypeHub: Invoke action addCopyFromContentTypeHub
- GET /drives/{drive-id}/list/contentTypes/getCompatibleHubContentTypes() — drives.drive.list.contentTypes.getCompatibleHubContentTypes: Invoke function getCompatibleHubContentTypes
- GET /drives/{drive-id}/list/createdByUser — drives.list.GetCreatedByUser: Get createdByUser from drives
- GET /drives/{drive-id}/list/createdByUser/mailboxSettings — drives.list.createdByUser.GetMailboxSettings: Get mailboxSettings property value
- PATCH /drives/{drive-id}/list/createdByUser/mailboxSettings — drives.list.createdByUser.UpdateMailboxSettings: Update property mailboxSettings value.
- GET /drives/{drive-id}/list/createdByUser/serviceProvisioningErrors — drives.list.createdByUser.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /drives/{drive-id}/list/drive — drives.list.GetDrive: Get drive from drives
- GET /drives/{drive-id}/list/items — drives.list.ListItems: Get items from drives
- POST /drives/{drive-id}/list/items — drives.list.CreateItems: Create new navigation property to items for drives
- GET /drives/{drive-id}/list/items/{listItem-id} — drives.list.GetItems: Get items from drives
- PATCH /drives/{drive-id}/list/items/{listItem-id} — drives.list.UpdateItems: Update the navigation property items in drives
- DELETE /drives/{drive-id}/list/items/{listItem-id} — drives.list.DeleteItems: Delete navigation property items for drives
- GET /drives/{drive-id}/list/items/$count — drives.list.items.GetCount-e46a: Get the number of the resource
- GET /drives/{drive-id}/list/items/delta() — drives.drive.list.items.delta-fa14: Invoke function delta
- GET /drives/{drive-id}/list/items/delta(token='{token}') — drives.drive.list.items.delta-9846: Invoke function delta
- GET /drives/{drive-id}/list/lastModifiedByUser — drives.list.GetLastModifiedByUser: Get lastModifiedByUser from drives
- GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings — drives.list.lastModifiedByUser.GetMailboxSettings: Get mailboxSettings property value
- PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings — drives.list.lastModifiedByUser.UpdateMailboxSettings: Update property mailboxSettings value.
- GET /drives/{drive-id}/list/lastModifiedByUser/serviceProvisioningErrors — drives.list.lastModifiedByUser.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /drives/{drive-id}/list/operations — drives.list.ListOperations: Get operations from drives
- POST /drives/{drive-id}/list/operations — drives.list.CreateOperations: Create new navigation property to operations for drives
- GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id} — drives.list.GetOperations: Get operations from drives
- PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id} — drives.list.UpdateOperations: Update the navigation property operations in drives
- DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id} — drives.list.DeleteOperations: Delete navigation property operations for drives
- GET /drives/{drive-id}/list/operations/$count — drives.list.operations.GetCount-e8e7: Get the number of the resource
- GET /drives/{drive-id}/list/permissions — drives.list.ListPermissions: Get permissions from drives
- POST /drives/{drive-id}/list/permissions — drives.list.CreatePermissions: Create new navigation property to permissions for drives
- GET /drives/{drive-id}/list/permissions/{permission-id} — drives.list.GetPermissions: Get permissions from drives
- PATCH /drives/{drive-id}/list/permissions/{permission-id} — drives.list.UpdatePermissions: Update the navigation property permissions in drives
- DELETE /drives/{drive-id}/list/permissions/{permission-id} — drives.list.DeletePermissions: Delete navigation property permissions for drives
- GET /drives/{drive-id}/list/permissions/$count — drives.list.permissions.GetCount-1e72: Get the number of the resource
- GET /drives/{drive-id}/list/subscriptions — drives.list.ListSubscriptions: Get subscriptions from drives
- POST /drives/{drive-id}/list/subscriptions — drives.list.CreateSubscriptions: Create new navigation property to subscriptions for drives
- GET /drives/{drive-id}/list/subscriptions/{subscription-id} — drives.list.GetSubscriptions: Get subscriptions from drives
- PATCH /drives/{drive-id}/list/subscriptions/{subscription-id} — drives.list.UpdateSubscriptions: Update the navigation property subscriptions in drives
- DELETE /drives/{drive-id}/list/subscriptions/{subscription-id} — drives.list.DeleteSubscriptions: Delete navigation property subscriptions for drives
- GET /drives/{drive-id}/list/subscriptions/$count — drives.list.subscriptions.GetCount-59f5: Get the number of the resource

## drives.user
- GET /drives/{drive-id}/createdByUser — drives.GetCreatedByUser: Get createdByUser from drives
- GET /drives/{drive-id}/createdByUser/mailboxSettings — drives.createdByUser.GetMailboxSettings: Get mailboxSettings property value
- PATCH /drives/{drive-id}/createdByUser/mailboxSettings — drives.createdByUser.UpdateMailboxSettings: Update property mailboxSettings value.
- GET /drives/{drive-id}/createdByUser/serviceProvisioningErrors — drives.createdByUser.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /drives/{drive-id}/createdByUser/serviceProvisioningErrors/$count — drives.createdByUser.ServiceProvisioningErrors.GetCount-37a0: Get the number of the resource
- GET /drives/{drive-id}/lastModifiedByUser — drives.GetLastModifiedByUser: Get lastModifiedByUser from drives
- GET /drives/{drive-id}/lastModifiedByUser/mailboxSettings — drives.lastModifiedByUser.GetMailboxSettings: Get mailboxSettings property value
- PATCH /drives/{drive-id}/lastModifiedByUser/mailboxSettings — drives.lastModifiedByUser.UpdateMailboxSettings: Update property mailboxSettings value.
- GET /drives/{drive-id}/lastModifiedByUser/serviceProvisioningErrors — drives.lastModifiedByUser.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /drives/{drive-id}/lastModifiedByUser/serviceProvisioningErrors/$count — drives.lastModifiedByUser.ServiceProvisioningErrors.GetCount-54d5: Get the number of the resource

## groups.appRoleAssignment
- GET /groups/{group-id}/appRoleAssignments — groups.ListAppRoleAssignments: List appRoleAssignments granted to a group
- POST /groups/{group-id}/appRoleAssignments — groups.CreateAppRoleAssignments: Grant an appRoleAssignment to a group
- GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id} — groups.GetAppRoleAssignments: Get appRoleAssignments from groups
- PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id} — groups.UpdateAppRoleAssignments: Update the navigation property appRoleAssignments in groups
- DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id} — groups.DeleteAppRoleAssignments: Delete appRoleAssignment
- GET /groups/{group-id}/appRoleAssignments/$count — groups.appRoleAssignments.GetCount-ce16: Get the number of the resource

## groups.calendar
- GET /groups/{group-id}/calendar — groups.GetCalendar: Get calendar from groups
- GET /groups/{group-id}/calendar/calendarPermissions — groups.calendar.ListCalendarPermissions: Get calendarPermissions from groups
- POST /groups/{group-id}/calendar/calendarPermissions — groups.calendar.CreateCalendarPermissions: Create new navigation property to calendarPermissions for groups
- GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id} — groups.calendar.GetCalendarPermissions: Get calendarPermissions from groups
- PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id} — groups.calendar.UpdateCalendarPermissions: Update the navigation property calendarPermissions in groups
- DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id} — groups.calendar.DeleteCalendarPermissions: Delete navigation property calendarPermissions for groups
- GET /groups/{group-id}/calendar/calendarPermissions/$count — groups.calendar.calendarPermissions.GetCount-b54a: Get the number of the resource
- GET /groups/{group-id}/calendar/calendarView — groups.calendar.ListCalendarView: Get calendarView from groups
- GET /groups/{group-id}/calendar/calendarView/delta() — groups.group.calendar.calendarView.delta: Invoke function delta
- GET /groups/{group-id}/calendar/events — groups.calendar.ListEvents: Get events from groups
- POST /groups/{group-id}/calendar/events — groups.calendar.CreateEvents: Create new navigation property to events for groups
- GET /groups/{group-id}/calendar/events/{event-id} — groups.calendar.GetEvents: Get events from groups
- PATCH /groups/{group-id}/calendar/events/{event-id} — groups.calendar.UpdateEvents: Update event
- DELETE /groups/{group-id}/calendar/events/{event-id} — groups.calendar.DeleteEvents: Delete navigation property events for groups
- GET /groups/{group-id}/calendar/events/$count — groups.calendar.events.GetCount-b856: Get the number of the resource
- GET /groups/{group-id}/calendar/events/delta() — groups.group.calendar.events.delta: Invoke function delta
- GET /groups/{group-id}/calendar/allowedCalendarSharingRoles(User='{User}') — groups.group.calendar.allowedCalendarSharingRoles: Invoke function allowedCalendarSharingRoles
- POST /groups/{group-id}/calendar/getSchedule — groups.group.calendar.getSchedule: Invoke action getSchedule
- POST /groups/{group-id}/calendar/permanentDelete — groups.group.calendar.permanentDelete: Invoke action permanentDelete

## groups.conversation
- GET /groups/{group-id}/conversations — groups.ListConversations: List conversations
- POST /groups/{group-id}/conversations — groups.CreateConversations: Create conversation
- GET /groups/{group-id}/conversations/{conversation-id} — groups.GetConversations: Get conversation
- DELETE /groups/{group-id}/conversations/{conversation-id} — groups.DeleteConversations: Delete conversation
- GET /groups/{group-id}/conversations/{conversation-id}/threads — groups.conversations.ListThreads: List threads
- POST /groups/{group-id}/conversations/{conversation-id}/threads — groups.conversations.CreateThreads: Create thread
- GET /groups/{group-id}/conversations/$count — groups.conversations.GetCount-c7df: Get the number of the resource

## groups.conversationThread
- GET /groups/{group-id}/threads — groups.ListThreads: List threads
- POST /groups/{group-id}/threads — groups.CreateThreads: Create conversation thread
- GET /groups/{group-id}/threads/{conversationThread-id} — groups.GetThreads: Get conversationThread
- PATCH /groups/{group-id}/threads/{conversationThread-id} — groups.UpdateThreads: Update conversation thread
- DELETE /groups/{group-id}/threads/{conversationThread-id} — groups.DeleteThreads: Delete conversationThread
- POST /groups/{group-id}/threads/{conversationThread-id}/reply — groups.group.threads.conversationThread.reply: Invoke action reply
- GET /groups/{group-id}/threads/{conversationThread-id}/posts — groups.threads.ListPosts: List posts
- GET /groups/{group-id}/threads/$count — groups.threads.GetCount-22d8: Get the number of the resource

## groups.directoryObject
- GET /groups/{group-id}/acceptedSenders — groups.ListAcceptedSenders: List acceptedSenders
- DELETE /groups/{group-id}/acceptedSenders/{directoryObject-id}/$ref — groups.acceptedSenders.DeleteRefDirectoryObject: Remove acceptedSender
- GET /groups/{group-id}/acceptedSenders/$count — groups.acceptedSenders.GetCount-576b: Get the number of the resource
- GET /groups/{group-id}/acceptedSenders/$ref — groups.ListRefAcceptedSenders: List acceptedSenders
- POST /groups/{group-id}/acceptedSenders/$ref — groups.CreateRefAcceptedSenders: Create acceptedSender
- DELETE /groups/{group-id}/acceptedSenders/$ref — groups.DeleteRefAcceptedSenders: Remove acceptedSender
- GET /groups/{group-id}/createdOnBehalfOf — groups.GetCreatedOnBehalfOf: Get createdOnBehalfOf from groups
- GET /groups/{group-id}/memberOf — groups.ListMemberOf: List group memberships
- GET /groups/{group-id}/memberOf/{directoryObject-id} — groups.GetMemberOf: Get memberOf from groups
- GET /groups/{group-id}/memberOf/{directoryObject-id}/graph.administrativeUnit — groups.GetMemberOf.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /groups/{group-id}/memberOf/{directoryObject-id}/graph.group — groups.GetMemberOf.AsGroup: List group memberships
- GET /groups/{group-id}/memberOf/$count — groups.memberOf.GetCount-e9c5: Get the number of the resource
- GET /groups/{group-id}/memberOf/graph.administrativeUnit — groups.ListMemberOf.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/memberOf/graph.administrativeUnit/$count — groups.MemberOf.GetCount.AsAdministrativeUnit-4c17: Get the number of the resource
- GET /groups/{group-id}/memberOf/graph.group — groups.ListMemberOf.AsGroup: List group memberships
- GET /groups/{group-id}/memberOf/graph.group/$count — groups.MemberOf.GetCount.AsGroup-6572: Get the number of the resource
- GET /groups/{group-id}/members — groups.ListMembers: List group members
- DELETE /groups/{group-id}/members/{directoryObject-id}/$ref — groups.members.DeleteRefDirectoryObject: Remove member
- GET /groups/{group-id}/members/{directoryObject-id}/graph.application — groups.GetMembers.AsApplication: Get the item of type microsoft.graph.directoryObject as microsoft.graph.application
- GET /groups/{group-id}/members/{directoryObject-id}/graph.device — groups.GetMembers.AsDevice: Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
- GET /groups/{group-id}/members/{directoryObject-id}/graph.group — groups.GetMembers.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /groups/{group-id}/members/{directoryObject-id}/graph.orgContact — groups.GetMembers.AsOrgContact: Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact
- GET /groups/{group-id}/members/{directoryObject-id}/graph.servicePrincipal — groups.GetMembers.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /groups/{group-id}/members/{directoryObject-id}/graph.user — groups.GetMembers.AsUser: List group members
- GET /groups/{group-id}/members/$count — groups.members.GetCount-e1e6: Get the number of the resource
- GET /groups/{group-id}/members/$ref — groups.ListRefMembers: List group members
- POST /groups/{group-id}/members/$ref — groups.CreateRefMembers: Add members
- DELETE /groups/{group-id}/members/$ref — groups.DeleteRefMembers: Remove member
- GET /groups/{group-id}/members/graph.application — groups.ListMembers.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/members/graph.application/$count — groups.Members.GetCount.AsApplication-2734: Get the number of the resource
- GET /groups/{group-id}/members/graph.device — groups.ListMembers.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/members/graph.device/$count — groups.Members.GetCount.AsDevice-e7a3: Get the number of the resource
- GET /groups/{group-id}/members/graph.group — groups.ListMembers.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/members/graph.group/$count — groups.Members.GetCount.AsGroup-86be: Get the number of the resource
- GET /groups/{group-id}/members/graph.orgContact — groups.ListMembers.AsOrgContact: Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/members/graph.orgContact/$count — groups.Members.GetCount.AsOrgContact-9781: Get the number of the resource
- GET /groups/{group-id}/members/graph.servicePrincipal — groups.ListMembers.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/members/graph.servicePrincipal/$count — groups.Members.GetCount.AsServicePrincipal-c922: Get the number of the resource
- GET /groups/{group-id}/members/graph.user — groups.ListMembers.AsUser: List group members
- GET /groups/{group-id}/members/graph.user/$count — groups.Members.GetCount.AsUser-b36e: Get the number of the resource
- GET /groups/{group-id}/membersWithLicenseErrors — groups.ListMembersWithLicenseErrors: Get membersWithLicenseErrors from groups
- GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id} — groups.GetMembersWithLicenseErrors: Get membersWithLicenseErrors from groups
- GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/graph.application — groups.GetMembersWithLicenseErrors.AsApplication: Get the item of type microsoft.graph.directoryObject as microsoft.graph.application
- GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/graph.device — groups.GetMembersWithLicenseErrors.AsDevice: Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
- GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/graph.group — groups.GetMembersWithLicenseErrors.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/graph.orgContact — groups.GetMembersWithLicenseErrors.AsOrgContact: Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact
- GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/graph.servicePrincipal — groups.GetMembersWithLicenseErrors.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/graph.user — groups.GetMembersWithLicenseErrors.AsUser: Get the item of type microsoft.graph.directoryObject as microsoft.graph.user
- GET /groups/{group-id}/membersWithLicenseErrors/$count — groups.membersWithLicenseErrors.GetCount-3ebc: Get the number of the resource
- GET /groups/{group-id}/membersWithLicenseErrors/graph.application — groups.ListMembersWithLicenseErrors.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/membersWithLicenseErrors/graph.application/$count — groups.MembersWithLicenseErrors.GetCount.AsApplication-85ba: Get the number of the resource
- GET /groups/{group-id}/membersWithLicenseErrors/graph.device — groups.ListMembersWithLicenseErrors.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/membersWithLicenseErrors/graph.device/$count — groups.MembersWithLicenseErrors.GetCount.AsDevice-5960: Get the number of the resource
- GET /groups/{group-id}/membersWithLicenseErrors/graph.group — groups.ListMembersWithLicenseErrors.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/membersWithLicenseErrors/graph.group/$count — groups.MembersWithLicenseErrors.GetCount.AsGroup-bee4: Get the number of the resource
- GET /groups/{group-id}/membersWithLicenseErrors/graph.orgContact — groups.ListMembersWithLicenseErrors.AsOrgContact: Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/membersWithLicenseErrors/graph.orgContact/$count — groups.MembersWithLicenseErrors.GetCount.AsOrgContact-7eba: Get the number of the resource
- GET /groups/{group-id}/membersWithLicenseErrors/graph.servicePrincipal — groups.ListMembersWithLicenseErrors.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/membersWithLicenseErrors/graph.servicePrincipal/$count — groups.MembersWithLicenseErrors.GetCount.AsServicePrincipal-0062: Get the number of the resource
- GET /groups/{group-id}/membersWithLicenseErrors/graph.user — groups.ListMembersWithLicenseErrors.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/membersWithLicenseErrors/graph.user/$count — groups.MembersWithLicenseErrors.GetCount.AsUser-0a9e: Get the number of the resource
- GET /groups/{group-id}/owners — groups.ListOwners: List group owners
- DELETE /groups/{group-id}/owners/{directoryObject-id}/$ref — groups.owners.DeleteRefDirectoryObject: Remove group owner
- GET /groups/{group-id}/owners/{directoryObject-id}/graph.application — groups.GetOwners.AsApplication: Get the item of type microsoft.graph.directoryObject as microsoft.graph.application
- GET /groups/{group-id}/owners/{directoryObject-id}/graph.device — groups.GetOwners.AsDevice: Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
- GET /groups/{group-id}/owners/{directoryObject-id}/graph.group — groups.GetOwners.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /groups/{group-id}/owners/{directoryObject-id}/graph.orgContact — groups.GetOwners.AsOrgContact: Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact
- GET /groups/{group-id}/owners/{directoryObject-id}/graph.servicePrincipal — groups.GetOwners.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /groups/{group-id}/owners/{directoryObject-id}/graph.user — groups.GetOwners.AsUser: Get the item of type microsoft.graph.directoryObject as microsoft.graph.user
- GET /groups/{group-id}/owners/$count — groups.owners.GetCount-9fe3: Get the number of the resource
- GET /groups/{group-id}/owners/$ref — groups.ListRefOwners: List group owners
- POST /groups/{group-id}/owners/$ref — groups.CreateRefOwners: Add owners
- DELETE /groups/{group-id}/owners/$ref — groups.DeleteRefOwners: Remove group owner
- GET /groups/{group-id}/owners/graph.application — groups.ListOwners.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/owners/graph.application/$count — groups.Owners.GetCount.AsApplication-bd83: Get the number of the resource
- GET /groups/{group-id}/owners/graph.device — groups.ListOwners.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/owners/graph.device/$count — groups.Owners.GetCount.AsDevice-2b5b: Get the number of the resource
- GET /groups/{group-id}/owners/graph.group — groups.ListOwners.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/owners/graph.group/$count — groups.Owners.GetCount.AsGroup-a694: Get the number of the resource
- GET /groups/{group-id}/owners/graph.orgContact — groups.ListOwners.AsOrgContact: Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/owners/graph.orgContact/$count — groups.Owners.GetCount.AsOrgContact-b70b: Get the number of the resource
- GET /groups/{group-id}/owners/graph.servicePrincipal — groups.ListOwners.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/owners/graph.servicePrincipal/$count — groups.Owners.GetCount.AsServicePrincipal-8498: Get the number of the resource
- GET /groups/{group-id}/owners/graph.user — groups.ListOwners.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/owners/graph.user/$count — groups.Owners.GetCount.AsUser-1c87: Get the number of the resource
- GET /groups/{group-id}/rejectedSenders — groups.ListRejectedSenders: List rejectedSenders
- DELETE /groups/{group-id}/rejectedSenders/{directoryObject-id}/$ref — groups.rejectedSenders.DeleteRefDirectoryObject: Remove rejectedSender
- GET /groups/{group-id}/rejectedSenders/$count — groups.rejectedSenders.GetCount-b188: Get the number of the resource
- GET /groups/{group-id}/rejectedSenders/$ref — groups.ListRefRejectedSenders: List rejectedSenders
- POST /groups/{group-id}/rejectedSenders/$ref — groups.CreateRefRejectedSenders: Create rejectedSender
- DELETE /groups/{group-id}/rejectedSenders/$ref — groups.DeleteRefRejectedSenders: Remove rejectedSender
- GET /groups/{group-id}/transitiveMemberOf — groups.ListTransitiveMemberOf: List group transitive memberOf
- GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id} — groups.GetTransitiveMemberOf: Get transitiveMemberOf from groups
- GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}/graph.administrativeUnit — groups.GetTransitiveMemberOf.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}/graph.group — groups.GetTransitiveMemberOf.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /groups/{group-id}/transitiveMemberOf/$count — groups.transitiveMemberOf.GetCount-c756: Get the number of the resource
- GET /groups/{group-id}/transitiveMemberOf/graph.administrativeUnit — groups.ListTransitiveMemberOf.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/transitiveMemberOf/graph.administrativeUnit/$count — groups.TransitiveMemberOf.GetCount.AsAdministrativeUnit-af58: Get the number of the resource
- GET /groups/{group-id}/transitiveMemberOf/graph.group — groups.ListTransitiveMemberOf.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/transitiveMemberOf/graph.group/$count — groups.TransitiveMemberOf.GetCount.AsGroup-4a46: Get the number of the resource
- GET /groups/{group-id}/transitiveMembers — groups.ListTransitiveMembers: List group transitive members
- GET /groups/{group-id}/transitiveMembers/{directoryObject-id} — groups.GetTransitiveMembers: Get transitiveMembers from groups
- GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/graph.application — groups.GetTransitiveMembers.AsApplication: Get the item of type microsoft.graph.directoryObject as microsoft.graph.application
- GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/graph.device — groups.GetTransitiveMembers.AsDevice: Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
- GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/graph.group — groups.GetTransitiveMembers.AsGroup: List group transitive members
- GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/graph.orgContact — groups.GetTransitiveMembers.AsOrgContact: Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact
- GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/graph.servicePrincipal — groups.GetTransitiveMembers.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/graph.user — groups.GetTransitiveMembers.AsUser: List group transitive members
- GET /groups/{group-id}/transitiveMembers/$count — groups.transitiveMembers.GetCount-1996: Get the number of the resource
- GET /groups/{group-id}/transitiveMembers/graph.application — groups.ListTransitiveMembers.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/transitiveMembers/graph.application/$count — groups.TransitiveMembers.GetCount.AsApplication-eafb: Get the number of the resource
- GET /groups/{group-id}/transitiveMembers/graph.device — groups.ListTransitiveMembers.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/transitiveMembers/graph.device/$count — groups.TransitiveMembers.GetCount.AsDevice-0e55: Get the number of the resource
- GET /groups/{group-id}/transitiveMembers/graph.group — groups.ListTransitiveMembers.AsGroup: List group transitive members
- GET /groups/{group-id}/transitiveMembers/graph.group/$count — groups.TransitiveMembers.GetCount.AsGroup-d4d7: Get the number of the resource
- GET /groups/{group-id}/transitiveMembers/graph.orgContact — groups.ListTransitiveMembers.AsOrgContact: Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/transitiveMembers/graph.orgContact/$count — groups.TransitiveMembers.GetCount.AsOrgContact-a89e: Get the number of the resource
- GET /groups/{group-id}/transitiveMembers/graph.servicePrincipal — groups.ListTransitiveMembers.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /groups/{group-id}/transitiveMembers/graph.servicePrincipal/$count — groups.TransitiveMembers.GetCount.AsServicePrincipal-102f: Get the number of the resource
- GET /groups/{group-id}/transitiveMembers/graph.user — groups.ListTransitiveMembers.AsUser: List group transitive members
- GET /groups/{group-id}/transitiveMembers/graph.user/$count — groups.TransitiveMembers.GetCount.AsUser-c600: Get the number of the resource

## groups.drive
- GET /groups/{group-id}/drive — groups.GetDrive: Get drive from groups
- GET /groups/{group-id}/drives — groups.ListDrives: Get drives from groups
- GET /groups/{group-id}/drives/{drive-id} — groups.GetDrives: Get drives from groups
- GET /groups/{group-id}/drives/$count — groups.drives.GetCount-9ca4: Get the number of the resource

## groups.event
- GET /groups/{group-id}/calendarView — groups.ListCalendarView: List group calendarView
- GET /groups/{group-id}/calendarView/delta() — groups.group.calendarView.delta: Invoke function delta
- GET /groups/{group-id}/events — groups.ListEvents: List events
- POST /groups/{group-id}/events — groups.CreateEvents: Create event
- GET /groups/{group-id}/events/{event-id} — groups.GetEvents: Get event
- PATCH /groups/{group-id}/events/{event-id} — groups.UpdateEvents: Update the navigation property events in groups
- DELETE /groups/{group-id}/events/{event-id} — groups.DeleteEvents: Delete event
- GET /groups/{group-id}/events/{event-id}/attachments — groups.events.ListAttachments: Get attachments from groups
- POST /groups/{group-id}/events/{event-id}/attachments — groups.events.CreateAttachments: Create new navigation property to attachments for groups
- GET /groups/{group-id}/events/{event-id}/calendar — groups.events.GetCalendar: Get calendar from groups
- GET /groups/{group-id}/events/{event-id}/extensions — groups.events.ListExtensions: Get open extension
- POST /groups/{group-id}/events/{event-id}/extensions — groups.events.CreateExtensions: Create open extension
- GET /groups/{group-id}/events/{event-id}/instances — groups.events.ListInstances: Get instances from groups
- POST /groups/{group-id}/events/{event-id}/accept — groups.group.events.event.accept: Invoke action accept
- POST /groups/{group-id}/events/{event-id}/cancel — groups.group.events.event.cancel: Invoke action cancel
- POST /groups/{group-id}/events/{event-id}/decline — groups.group.events.event.decline: Invoke action decline
- POST /groups/{group-id}/events/{event-id}/dismissReminder — groups.group.events.event.dismissReminder: Invoke action dismissReminder
- POST /groups/{group-id}/events/{event-id}/forward — groups.group.events.event.forward: Invoke action forward
- POST /groups/{group-id}/events/{event-id}/permanentDelete — groups.group.events.event.permanentDelete: Invoke action permanentDelete
- POST /groups/{group-id}/events/{event-id}/snoozeReminder — groups.group.events.event.snoozeReminder: Invoke action snoozeReminder
- POST /groups/{group-id}/events/{event-id}/tentativelyAccept — groups.group.events.event.tentativelyAccept: Invoke action tentativelyAccept
- GET /groups/{group-id}/events/$count — groups.events.GetCount-ab92: Get the number of the resource
- GET /groups/{group-id}/events/delta() — groups.group.events.delta: Invoke function delta

## groups.extension
- GET /groups/{group-id}/extensions — groups.ListExtensions: Get extensions from groups
- POST /groups/{group-id}/extensions — groups.CreateExtensions: Create new navigation property to extensions for groups
- GET /groups/{group-id}/extensions/{extension-id} — groups.GetExtensions: Get extensions from groups
- PATCH /groups/{group-id}/extensions/{extension-id} — groups.UpdateExtensions: Update the navigation property extensions in groups
- DELETE /groups/{group-id}/extensions/{extension-id} — groups.DeleteExtensions: Delete navigation property extensions for groups
- GET /groups/{group-id}/extensions/$count — groups.extensions.GetCount-e2e0: Get the number of the resource

## groups.group
- GET /groups — groups.group.ListGroup: List groups
- POST /groups — groups.group.CreateGroup: Create group
- GET /groups/{group-id} — groups.group.GetGroup: Get group
- PATCH /groups/{group-id} — groups.group.UpdateGroup: Upsert group
- DELETE /groups/{group-id} — groups.group.DeleteGroup: Delete group
- GET /groups/$count — groups.GetCount-044a: Get the number of the resource

## groups.group.Actions
- POST /groups/{group-id}/addFavorite — groups.group.addFavorite: Invoke action addFavorite
- POST /groups/{group-id}/assignLicense — groups.group.assignLicense: Invoke action assignLicense
- POST /groups/{group-id}/checkGrantedPermissionsForApp — groups.group.checkGrantedPermissionsForApp: Invoke action checkGrantedPermissionsForApp
- POST /groups/{group-id}/checkMemberGroups — groups.group.checkMemberGroups: Invoke action checkMemberGroups
- POST /groups/{group-id}/checkMemberObjects — groups.group.checkMemberObjects: Invoke action checkMemberObjects
- POST /groups/{group-id}/getMemberGroups — groups.group.getMemberGroups: Invoke action getMemberGroups
- POST /groups/{group-id}/getMemberObjects — groups.group.getMemberObjects: Invoke action getMemberObjects
- POST /groups/{group-id}/removeFavorite — groups.group.removeFavorite: Invoke action removeFavorite
- POST /groups/{group-id}/renew — groups.group.renew: Invoke action renew
- POST /groups/{group-id}/resetUnseenCount — groups.group.resetUnseenCount: Invoke action resetUnseenCount
- POST /groups/{group-id}/restore — groups.group.restore: Invoke action restore
- POST /groups/{group-id}/retryServiceProvisioning — groups.group.retryServiceProvisioning: Invoke action retryServiceProvisioning
- POST /groups/{group-id}/subscribeByMail — groups.group.subscribeByMail: Invoke action subscribeByMail
- POST /groups/{group-id}/unsubscribeByMail — groups.group.unsubscribeByMail: Invoke action unsubscribeByMail
- POST /groups/{group-id}/validateProperties — groups.group.validateProperties: Invoke action validateProperties
- POST /groups/getAvailableExtensionProperties — groups.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /groups/getByIds — groups.getByIds: Invoke action getByIds
- POST /groups/validateProperties — groups.validateProperties: Invoke action validateProperties

## groups.group.Functions
- GET /groups/delta() — groups.delta: Invoke function delta

## groups.groupLifecyclePolicy
- GET /groups/{group-id}/groupLifecyclePolicies — groups.ListGroupLifecyclePolicies: List groupLifecyclePolicies
- POST /groups/{group-id}/groupLifecyclePolicies — groups.CreateGroupLifecyclePolicies: Create new navigation property to groupLifecyclePolicies for groups
- GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id} — groups.GetGroupLifecyclePolicies: Get groupLifecyclePolicies from groups
- PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id} — groups.UpdateGroupLifecyclePolicies: Update the navigation property groupLifecyclePolicies in groups
- DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id} — groups.DeleteGroupLifecyclePolicies: Delete navigation property groupLifecyclePolicies for groups
- POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup — groups.group.groupLifecyclePolicies.groupLifecyclePolicy.addGroup: Invoke action addGroup
- POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup — groups.group.groupLifecyclePolicies.groupLifecyclePolicy.removeGroup: Invoke action removeGroup
- GET /groups/{group-id}/groupLifecyclePolicies/$count — groups.groupLifecyclePolicies.GetCount-ba70: Get the number of the resource

## groups.groupSetting
- GET /groups/{group-id}/settings — groups.ListSettings: List settings
- POST /groups/{group-id}/settings — groups.CreateSettings: Create settings
- GET /groups/{group-id}/settings/{groupSetting-id} — groups.GetSettings: Get groupSetting
- PATCH /groups/{group-id}/settings/{groupSetting-id} — groups.UpdateSettings: Update groupSetting
- DELETE /groups/{group-id}/settings/{groupSetting-id} — groups.DeleteSettings: Delete navigation property settings for groups
- GET /groups/{group-id}/settings/$count — groups.settings.GetCount-7641: Get the number of the resource

## groups.onPremisesSyncBehavior
- GET /groups/{group-id}/onPremisesSyncBehavior — groups.GetOnPremisesSyncBehavior: Get onPremisesSyncBehavior from groups
- PATCH /groups/{group-id}/onPremisesSyncBehavior — groups.UpdateOnPremisesSyncBehavior: Update the navigation property onPremisesSyncBehavior in groups
- DELETE /groups/{group-id}/onPremisesSyncBehavior — groups.DeleteOnPremisesSyncBehavior: Delete navigation property onPremisesSyncBehavior for groups

## groups.onenote
- GET /groups/{group-id}/onenote — groups.GetOnenote: Get onenote from groups
- PATCH /groups/{group-id}/onenote — groups.UpdateOnenote: Update the navigation property onenote in groups
- DELETE /groups/{group-id}/onenote — groups.DeleteOnenote: Delete navigation property onenote for groups
- GET /groups/{group-id}/onenote/notebooks — groups.onenote.ListNotebooks: Get notebooks from groups
- POST /groups/{group-id}/onenote/notebooks — groups.onenote.CreateNotebooks: Create new navigation property to notebooks for groups
- GET /groups/{group-id}/onenote/notebooks/{notebook-id} — groups.onenote.GetNotebooks: Get notebooks from groups
- PATCH /groups/{group-id}/onenote/notebooks/{notebook-id} — groups.onenote.UpdateNotebooks: Update the navigation property notebooks in groups
- DELETE /groups/{group-id}/onenote/notebooks/{notebook-id} — groups.onenote.DeleteNotebooks: Delete navigation property notebooks for groups
- GET /groups/{group-id}/onenote/notebooks/$count — groups.onenote.notebooks.GetCount-4d2a: Get the number of the resource
- POST /groups/{group-id}/onenote/notebooks/getNotebookFromWebUrl — groups.group.onenote.notebooks.getNotebookFromWebUrl: Invoke action getNotebookFromWebUrl
- GET /groups/{group-id}/onenote/notebooks/getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks}) — groups.group.onenote.notebooks.getRecentNotebooks: Invoke function getRecentNotebooks
- GET /groups/{group-id}/onenote/operations — groups.onenote.ListOperations: Get operations from groups
- POST /groups/{group-id}/onenote/operations — groups.onenote.CreateOperations: Create new navigation property to operations for groups
- GET /groups/{group-id}/onenote/operations/{onenoteOperation-id} — groups.onenote.GetOperations: Get operations from groups
- PATCH /groups/{group-id}/onenote/operations/{onenoteOperation-id} — groups.onenote.UpdateOperations: Update the navigation property operations in groups
- DELETE /groups/{group-id}/onenote/operations/{onenoteOperation-id} — groups.onenote.DeleteOperations: Delete navigation property operations for groups
- GET /groups/{group-id}/onenote/operations/$count — groups.onenote.operations.GetCount-b2ab: Get the number of the resource
- GET /groups/{group-id}/onenote/pages — groups.onenote.ListPages: Get pages from groups
- POST /groups/{group-id}/onenote/pages — groups.onenote.CreatePages: Create new navigation property to pages for groups
- GET /groups/{group-id}/onenote/pages/{onenotePage-id} — groups.onenote.GetPages: Get pages from groups
- PATCH /groups/{group-id}/onenote/pages/{onenotePage-id} — groups.onenote.UpdatePages: Update the navigation property pages in groups
- DELETE /groups/{group-id}/onenote/pages/{onenotePage-id} — groups.onenote.DeletePages: Delete navigation property pages for groups
- GET /groups/{group-id}/onenote/pages/$count — groups.onenote.pages.GetCount-8bf6: Get the number of the resource
- GET /groups/{group-id}/onenote/resources — groups.onenote.ListResources: Get resources from groups
- POST /groups/{group-id}/onenote/resources — groups.onenote.CreateResources: Create new navigation property to resources for groups
- GET /groups/{group-id}/onenote/resources/{onenoteResource-id} — groups.onenote.GetResources: Get resources from groups
- PATCH /groups/{group-id}/onenote/resources/{onenoteResource-id} — groups.onenote.UpdateResources: Update the navigation property resources in groups
- DELETE /groups/{group-id}/onenote/resources/{onenoteResource-id} — groups.onenote.DeleteResources: Delete navigation property resources for groups
- GET /groups/{group-id}/onenote/resources/$count — groups.onenote.resources.GetCount-b07f: Get the number of the resource
- GET /groups/{group-id}/onenote/sectionGroups — groups.onenote.ListSectionGroups: Get sectionGroups from groups
- POST /groups/{group-id}/onenote/sectionGroups — groups.onenote.CreateSectionGroups: Create new navigation property to sectionGroups for groups
- GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id} — groups.onenote.GetSectionGroups: Get sectionGroups from groups
- PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id} — groups.onenote.UpdateSectionGroups: Update the navigation property sectionGroups in groups
- DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id} — groups.onenote.DeleteSectionGroups: Delete navigation property sectionGroups for groups
- GET /groups/{group-id}/onenote/sectionGroups/$count — groups.onenote.sectionGroups.GetCount-17b9: Get the number of the resource
- GET /groups/{group-id}/onenote/sections — groups.onenote.ListSections: Get sections from groups
- POST /groups/{group-id}/onenote/sections — groups.onenote.CreateSections: Create new navigation property to sections for groups
- GET /groups/{group-id}/onenote/sections/{onenoteSection-id} — groups.onenote.GetSections: Get sections from groups
- PATCH /groups/{group-id}/onenote/sections/{onenoteSection-id} — groups.onenote.UpdateSections: Update the navigation property sections in groups
- DELETE /groups/{group-id}/onenote/sections/{onenoteSection-id} — groups.onenote.DeleteSections: Delete navigation property sections for groups
- GET /groups/{group-id}/onenote/sections/$count — groups.onenote.sections.GetCount-0122: Get the number of the resource

## groups.plannerGroup
- GET /groups/{group-id}/planner — groups.GetPlanner: Get planner from groups
- PATCH /groups/{group-id}/planner — groups.UpdatePlanner: Update the navigation property planner in groups
- DELETE /groups/{group-id}/planner — groups.DeletePlanner: Delete navigation property planner for groups
- GET /groups/{group-id}/planner/plans — groups.planner.ListPlans: List plans
- POST /groups/{group-id}/planner/plans — groups.planner.CreatePlans: Create new navigation property to plans for groups
- GET /groups/{group-id}/planner/plans/{plannerPlan-id} — groups.planner.GetPlans: Get plans from groups
- PATCH /groups/{group-id}/planner/plans/{plannerPlan-id} — groups.planner.UpdatePlans: Update the navigation property plans in groups
- DELETE /groups/{group-id}/planner/plans/{plannerPlan-id} — groups.planner.DeletePlans: Delete navigation property plans for groups
- GET /groups/{group-id}/planner/plans/$count — groups.planner.plans.GetCount-dff1: Get the number of the resource

## groups.profilePhoto
- GET /groups/{group-id}/photo — groups.GetPhoto: Get photo from groups
- PATCH /groups/{group-id}/photo — groups.UpdatePhoto: Update the navigation property photo in groups
- DELETE /groups/{group-id}/photo — groups.DeletePhoto: Delete navigation property photo for groups
- GET /groups/{group-id}/photo/$value — groups.GetPhotoContent: Get media content for the navigation property photo from groups
- PUT /groups/{group-id}/photo/$value — groups.UpdatePhotoContent: Update media content for the navigation property photo in groups
- DELETE /groups/{group-id}/photo/$value — groups.DeletePhotoContent: Delete media content for the navigation property photo in groups
- GET /groups/{group-id}/photos — groups.ListPhotos: List photos
- GET /groups/{group-id}/photos/{profilePhoto-id} — groups.GetPhotos: Get photos from groups
- GET /groups/{group-id}/photos/{profilePhoto-id}/$value — groups.GetPhotosContent: List photos
- PUT /groups/{group-id}/photos/{profilePhoto-id}/$value — groups.UpdatePhotosContent: Update media content for the navigation property photos in groups
- DELETE /groups/{group-id}/photos/{profilePhoto-id}/$value — groups.DeletePhotosContent: Delete media content for the navigation property photos in groups

## groups.resourceSpecificPermissionGrant
- GET /groups/{group-id}/permissionGrants — groups.ListPermissionGrants: List permissionGrants of a group
- POST /groups/{group-id}/permissionGrants — groups.CreatePermissionGrants: Create new navigation property to permissionGrants for groups
- GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — groups.GetPermissionGrants: Get permissionGrants from groups
- PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — groups.UpdatePermissionGrants: Update the navigation property permissionGrants in groups
- DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — groups.DeletePermissionGrants: Delete navigation property permissionGrants for groups
- GET /groups/{group-id}/permissionGrants/$count — groups.permissionGrants.GetCount-76af: Get the number of the resource

## groups.serviceProvisioningError
- GET /groups/{group-id}/serviceProvisioningErrors — groups.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /groups/{group-id}/serviceProvisioningErrors/$count — groups.ServiceProvisioningErrors.GetCount-e58f: Get the number of the resource

## groups.site
- GET /groups/{group-id}/sites — groups.ListSites: Get sites from groups
- GET /groups/{group-id}/sites/{site-id} — groups.GetSites: Get sites from groups
- PATCH /groups/{group-id}/sites/{site-id} — groups.UpdateSites: Update the navigation property sites in groups
- GET /groups/{group-id}/sites/{site-id}/analytics — groups.sites.GetAnalytics: Get analytics from groups
- PATCH /groups/{group-id}/sites/{site-id}/analytics — groups.sites.UpdateAnalytics: Update the navigation property analytics in groups
- DELETE /groups/{group-id}/sites/{site-id}/analytics — groups.sites.DeleteAnalytics: Delete navigation property analytics for groups
- GET /groups/{group-id}/sites/{site-id}/columns — groups.sites.ListColumns: Get columns from groups
- POST /groups/{group-id}/sites/{site-id}/columns — groups.sites.CreateColumns: Create new navigation property to columns for groups
- GET /groups/{group-id}/sites/{site-id}/contentTypes — groups.sites.ListContentTypes: Get contentTypes from groups
- POST /groups/{group-id}/sites/{site-id}/contentTypes — groups.sites.CreateContentTypes: Create new navigation property to contentTypes for groups
- GET /groups/{group-id}/sites/{site-id}/createdByUser — groups.sites.GetCreatedByUser: Get createdByUser from groups
- GET /groups/{group-id}/sites/{site-id}/drive — groups.sites.GetDrive: Get drive from groups
- GET /groups/{group-id}/sites/{site-id}/drives — groups.sites.ListDrives: Get drives from groups
- GET /groups/{group-id}/sites/{site-id}/externalColumns — groups.sites.ListExternalColumns: Get externalColumns from groups
- GET /groups/{group-id}/sites/{site-id}/items — groups.sites.ListItems: Get items from groups
- GET /groups/{group-id}/sites/{site-id}/lastModifiedByUser — groups.sites.GetLastModifiedByUser: Get lastModifiedByUser from groups
- GET /groups/{group-id}/sites/{site-id}/lists — groups.sites.ListLists: Get lists from groups
- POST /groups/{group-id}/sites/{site-id}/lists — groups.sites.CreateLists: Create new navigation property to lists for groups
- GET /groups/{group-id}/sites/{site-id}/getActivitiesByInterval() — groups.group.sites.site.getActivitiesByInterval-4c35: Invoke function getActivitiesByInterval
- GET /groups/{group-id}/sites/{site-id}/getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}') — groups.group.sites.site.getActivitiesByInterval-ad27: Invoke function getActivitiesByInterval
- GET /groups/{group-id}/sites/{site-id}/getApplicableContentTypesForList(listId='{listId}') — groups.group.sites.site.getApplicableContentTypesForList: Invoke function getApplicableContentTypesForList
- GET /groups/{group-id}/sites/{site-id}/getByPath(path='{path}') — groups.group.sites.site.getByPath: Invoke function getByPath
- GET /groups/{group-id}/sites/{site-id}/onenote — groups.sites.GetOnenote: Get onenote from groups
- PATCH /groups/{group-id}/sites/{site-id}/onenote — groups.sites.UpdateOnenote: Update the navigation property onenote in groups
- DELETE /groups/{group-id}/sites/{site-id}/onenote — groups.sites.DeleteOnenote: Delete navigation property onenote for groups
- GET /groups/{group-id}/sites/{site-id}/operations — groups.sites.ListOperations: Get operations from groups
- POST /groups/{group-id}/sites/{site-id}/operations — groups.sites.CreateOperations: Create new navigation property to operations for groups
- GET /groups/{group-id}/sites/{site-id}/pages — groups.sites.ListPages: Get pages from groups
- POST /groups/{group-id}/sites/{site-id}/pages — groups.sites.CreatePages: Create new navigation property to pages for groups
- GET /groups/{group-id}/sites/{site-id}/permissions — groups.sites.ListPermissions: Get permissions from groups
- POST /groups/{group-id}/sites/{site-id}/permissions — groups.sites.CreatePermissions: Create new navigation property to permissions for groups
- GET /groups/{group-id}/sites/{site-id}/sites — groups.sites.ListSites: Get sites from groups
- GET /groups/{group-id}/sites/{site-id}/termStore — groups.sites.GetTermStore: Get termStore from groups
- PATCH /groups/{group-id}/sites/{site-id}/termStore — groups.sites.UpdateTermStore: Update the navigation property termStore in groups
- DELETE /groups/{group-id}/sites/{site-id}/termStore — groups.sites.DeleteTermStore: Delete navigation property termStore for groups
- GET /groups/{group-id}/sites/{site-id}/termStores — groups.sites.ListTermStores: Get termStores from groups
- POST /groups/{group-id}/sites/{site-id}/termStores — groups.sites.CreateTermStores: Create new navigation property to termStores for groups
- GET /groups/{group-id}/sites/$count — groups.sites.GetCount-9a08: Get the number of the resource
- POST /groups/{group-id}/sites/add — groups.group.sites.add: Invoke action add
- GET /groups/{group-id}/sites/delta() — groups.group.sites.delta: Invoke function delta
- GET /groups/{group-id}/sites/getAllSites() — groups.group.sites.getAllSites: Invoke function getAllSites
- POST /groups/{group-id}/sites/remove — groups.group.sites.remove: Invoke action remove

## groups.team
- GET /groups/{group-id}/team — groups.GetTeam: Get team from groups
- PUT /groups/{group-id}/team — groups.SetTeam: Create team from group
- DELETE /groups/{group-id}/team — groups.DeleteTeam: Delete navigation property team for groups
- GET /groups/{group-id}/team/allChannels — groups.team.ListAllChannels: Get allChannels from groups
- GET /groups/{group-id}/team/allChannels/{channel-id} — groups.team.GetAllChannels: Get allChannels from groups
- GET /groups/{group-id}/team/allChannels/$count — groups.team.allChannels.GetCount-4fa6: Get the number of the resource
- GET /groups/{group-id}/team/channels — groups.team.ListChannels: Get channels from groups
- POST /groups/{group-id}/team/channels — groups.team.CreateChannels: Create new navigation property to channels for groups
- GET /groups/{group-id}/team/channels/{channel-id} — groups.team.GetChannels: Get channels from groups
- PATCH /groups/{group-id}/team/channels/{channel-id} — groups.team.UpdateChannels: Update the navigation property channels in groups
- DELETE /groups/{group-id}/team/channels/{channel-id} — groups.team.DeleteChannels: Delete navigation property channels for groups
- GET /groups/{group-id}/team/channels/$count — groups.team.channels.GetCount-dcc7: Get the number of the resource
- GET /groups/{group-id}/team/channels/getAllMessages() — groups.group.team.channels.getAllMessages: Invoke function getAllMessages
- GET /groups/{group-id}/team/channels/getAllRetainedMessages() — groups.group.team.channels.getAllRetainedMessages: Invoke function getAllRetainedMessages
- GET /groups/{group-id}/team/group — groups.team.GetGroup: Get group from groups
- GET /groups/{group-id}/team/group/serviceProvisioningErrors — groups.team.group.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /groups/{group-id}/team/incomingChannels — groups.team.ListIncomingChannels: Get incomingChannels from groups
- GET /groups/{group-id}/team/incomingChannels/{channel-id} — groups.team.GetIncomingChannels: Get incomingChannels from groups
- GET /groups/{group-id}/team/incomingChannels/$count — groups.team.incomingChannels.GetCount-d4b9: Get the number of the resource
- GET /groups/{group-id}/team/installedApps — groups.team.ListInstalledApps: Get installedApps from groups
- POST /groups/{group-id}/team/installedApps — groups.team.CreateInstalledApps: Create new navigation property to installedApps for groups
- GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id} — groups.team.GetInstalledApps: Get installedApps from groups
- PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id} — groups.team.UpdateInstalledApps: Update the navigation property installedApps in groups
- DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id} — groups.team.DeleteInstalledApps: Delete navigation property installedApps for groups
- GET /groups/{group-id}/team/installedApps/$count — groups.team.installedApps.GetCount-83d4: Get the number of the resource
- GET /groups/{group-id}/team/members — groups.team.ListMembers: Get members from groups
- POST /groups/{group-id}/team/members — groups.team.CreateMembers: Create new navigation property to members for groups
- GET /groups/{group-id}/team/members/{conversationMember-id} — groups.team.GetMembers: Get members from groups
- PATCH /groups/{group-id}/team/members/{conversationMember-id} — groups.team.UpdateMembers: Update the navigation property members in groups
- DELETE /groups/{group-id}/team/members/{conversationMember-id} — groups.team.DeleteMembers: Delete navigation property members for groups
- GET /groups/{group-id}/team/members/$count — groups.team.members.GetCount-a0b1: Get the number of the resource
- POST /groups/{group-id}/team/members/add — groups.group.team.members.add: Invoke action add
- POST /groups/{group-id}/team/members/remove — groups.group.team.members.remove: Invoke action remove
- POST /groups/{group-id}/team/archive — groups.group.team.archive: Invoke action archive
- POST /groups/{group-id}/team/clone — groups.group.team.clone: Invoke action clone
- POST /groups/{group-id}/team/completeMigration — groups.group.team.completeMigration: Invoke action completeMigration
- POST /groups/{group-id}/team/sendActivityNotification — groups.group.team.sendActivityNotification: Invoke action sendActivityNotification
- POST /groups/{group-id}/team/unarchive — groups.group.team.unarchive: Invoke action unarchive
- GET /groups/{group-id}/team/operations — groups.team.ListOperations: Get operations from groups
- POST /groups/{group-id}/team/operations — groups.team.CreateOperations: Create new navigation property to operations for groups
- GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id} — groups.team.GetOperations: Get operations from groups
- PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id} — groups.team.UpdateOperations: Update the navigation property operations in groups
- DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id} — groups.team.DeleteOperations: Delete navigation property operations for groups
- GET /groups/{group-id}/team/operations/$count — groups.team.operations.GetCount-6921: Get the number of the resource
- GET /groups/{group-id}/team/permissionGrants — groups.team.ListPermissionGrants: Get permissionGrants from groups
- POST /groups/{group-id}/team/permissionGrants — groups.team.CreatePermissionGrants: Create new navigation property to permissionGrants for groups
- GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id} — groups.team.GetPermissionGrants: Get permissionGrants from groups
- PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id} — groups.team.UpdatePermissionGrants: Update the navigation property permissionGrants in groups
- DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id} — groups.team.DeletePermissionGrants: Delete navigation property permissionGrants for groups
- GET /groups/{group-id}/team/permissionGrants/$count — groups.team.permissionGrants.GetCount-5668: Get the number of the resource
- GET /groups/{group-id}/team/photo — groups.team.GetPhoto: Get photo from groups
- PATCH /groups/{group-id}/team/photo — groups.team.UpdatePhoto: Update the navigation property photo in groups
- GET /groups/{group-id}/team/photo/$value — groups.team.GetPhotoContent: Get media content for the navigation property photo from groups
- PUT /groups/{group-id}/team/photo/$value — groups.team.UpdatePhotoContent: Update media content for the navigation property photo in groups
- DELETE /groups/{group-id}/team/photo/$value — groups.team.DeletePhotoContent: Delete media content for the navigation property photo in groups
- GET /groups/{group-id}/team/primaryChannel — groups.team.GetPrimaryChannel: Get primaryChannel from groups
- PATCH /groups/{group-id}/team/primaryChannel — groups.team.UpdatePrimaryChannel: Update the navigation property primaryChannel in groups
- DELETE /groups/{group-id}/team/primaryChannel — groups.team.DeletePrimaryChannel: Delete navigation property primaryChannel for groups
- GET /groups/{group-id}/team/primaryChannel/allMembers — groups.team.primaryChannel.ListAllMembers: Get allMembers from groups
- POST /groups/{group-id}/team/primaryChannel/allMembers — groups.team.primaryChannel.CreateAllMembers: Create new navigation property to allMembers for groups
- GET /groups/{group-id}/team/primaryChannel/enabledApps — groups.team.primaryChannel.ListEnabledApps: Get enabledApps from groups
- GET /groups/{group-id}/team/primaryChannel/filesFolder — groups.team.primaryChannel.GetFilesFolder: Get filesFolder from groups
- GET /groups/{group-id}/team/primaryChannel/members — groups.team.primaryChannel.ListMembers: Get members from groups
- POST /groups/{group-id}/team/primaryChannel/members — groups.team.primaryChannel.CreateMembers: Create new navigation property to members for groups
- GET /groups/{group-id}/team/primaryChannel/messages — groups.team.primaryChannel.ListMessages: Get messages from groups
- POST /groups/{group-id}/team/primaryChannel/messages — groups.team.primaryChannel.CreateMessages: Create new navigation property to messages for groups
- POST /groups/{group-id}/team/primaryChannel/archive — groups.group.team.primaryChannel.archive: Invoke action archive
- POST /groups/{group-id}/team/primaryChannel/completeMigration — groups.group.team.primaryChannel.completeMigration: Invoke action completeMigration
- GET /groups/{group-id}/team/primaryChannel/doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName') — groups.group.team.primaryChannel.doesUserHaveAccess: Invoke function doesUserHaveAccess
- POST /groups/{group-id}/team/primaryChannel/provisionEmail — groups.group.team.primaryChannel.provisionEmail: Invoke action provisionEmail
- POST /groups/{group-id}/team/primaryChannel/removeEmail — groups.group.team.primaryChannel.removeEmail: Invoke action removeEmail
- POST /groups/{group-id}/team/primaryChannel/startMigration — groups.group.team.primaryChannel.startMigration: Invoke action startMigration
- POST /groups/{group-id}/team/primaryChannel/unarchive — groups.group.team.primaryChannel.unarchive: Invoke action unarchive
- GET /groups/{group-id}/team/primaryChannel/sharedWithTeams — groups.team.primaryChannel.ListSharedWithTeams: Get sharedWithTeams from groups
- POST /groups/{group-id}/team/primaryChannel/sharedWithTeams — groups.team.primaryChannel.CreateSharedWithTeams: Create new navigation property to sharedWithTeams for groups
- GET /groups/{group-id}/team/primaryChannel/tabs — groups.team.primaryChannel.ListTabs: Get tabs from groups
- POST /groups/{group-id}/team/primaryChannel/tabs — groups.team.primaryChannel.CreateTabs: Create new navigation property to tabs for groups
- GET /groups/{group-id}/team/schedule — groups.team.GetSchedule: Get schedule from groups
- PUT /groups/{group-id}/team/schedule — groups.team.SetSchedule: Update the navigation property schedule in groups
- DELETE /groups/{group-id}/team/schedule — groups.team.DeleteSchedule: Delete navigation property schedule for groups
- GET /groups/{group-id}/team/schedule/dayNotes — groups.team.schedule.ListDayNotes: Get dayNotes from groups
- POST /groups/{group-id}/team/schedule/dayNotes — groups.team.schedule.CreateDayNotes: Create new navigation property to dayNotes for groups
- POST /groups/{group-id}/team/schedule/share — groups.group.team.schedule.share: Invoke action share
- GET /groups/{group-id}/team/schedule/offerShiftRequests — groups.team.schedule.ListOfferShiftRequests: Get offerShiftRequests from groups
- POST /groups/{group-id}/team/schedule/offerShiftRequests — groups.team.schedule.CreateOfferShiftRequests: Create new navigation property to offerShiftRequests for groups
- GET /groups/{group-id}/team/schedule/openShiftChangeRequests — groups.team.schedule.ListOpenShiftChangeRequests: Get openShiftChangeRequests from groups
- POST /groups/{group-id}/team/schedule/openShiftChangeRequests — groups.team.schedule.CreateOpenShiftChangeRequests: Create new navigation property to openShiftChangeRequests for groups
- GET /groups/{group-id}/team/schedule/openShifts — groups.team.schedule.ListOpenShifts: Get openShifts from groups
- POST /groups/{group-id}/team/schedule/openShifts — groups.team.schedule.CreateOpenShifts: Create new navigation property to openShifts for groups
- GET /groups/{group-id}/team/schedule/schedulingGroups — groups.team.schedule.ListSchedulingGroups: Get schedulingGroups from groups
- POST /groups/{group-id}/team/schedule/schedulingGroups — groups.team.schedule.CreateSchedulingGroups: Create new navigation property to schedulingGroups for groups
- GET /groups/{group-id}/team/schedule/shifts — groups.team.schedule.ListShifts: Get shifts from groups
- POST /groups/{group-id}/team/schedule/shifts — groups.team.schedule.CreateShifts: Create new navigation property to shifts for groups
- GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests — groups.team.schedule.ListSwapShiftsChangeRequests: Get swapShiftsChangeRequests from groups
- POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests — groups.team.schedule.CreateSwapShiftsChangeRequests: Create new navigation property to swapShiftsChangeRequests for groups
- GET /groups/{group-id}/team/schedule/timeCards — groups.team.schedule.ListTimeCards: Get timeCards from groups
- POST /groups/{group-id}/team/schedule/timeCards — groups.team.schedule.CreateTimeCards: Create new navigation property to timeCards for groups
- GET /groups/{group-id}/team/schedule/timeOffReasons — groups.team.schedule.ListTimeOffReasons: Get timeOffReasons from groups
- POST /groups/{group-id}/team/schedule/timeOffReasons — groups.team.schedule.CreateTimeOffReasons: Create new navigation property to timeOffReasons for groups
- GET /groups/{group-id}/team/schedule/timeOffRequests — groups.team.schedule.ListTimeOffRequests: Get timeOffRequests from groups
- POST /groups/{group-id}/team/schedule/timeOffRequests — groups.team.schedule.CreateTimeOffRequests: Create new navigation property to timeOffRequests for groups
- GET /groups/{group-id}/team/schedule/timesOff — groups.team.schedule.ListTimesOff: Get timesOff from groups
- POST /groups/{group-id}/team/schedule/timesOff — groups.team.schedule.CreateTimesOff: Create new navigation property to timesOff for groups
- GET /groups/{group-id}/team/tags — groups.team.ListTags: Get tags from groups
- POST /groups/{group-id}/team/tags — groups.team.CreateTags: Create new navigation property to tags for groups
- GET /groups/{group-id}/team/tags/{teamworkTag-id} — groups.team.GetTags: Get tags from groups
- PATCH /groups/{group-id}/team/tags/{teamworkTag-id} — groups.team.UpdateTags: Update the navigation property tags in groups
- DELETE /groups/{group-id}/team/tags/{teamworkTag-id} — groups.team.DeleteTags: Delete navigation property tags for groups
- GET /groups/{group-id}/team/tags/$count — groups.team.tags.GetCount-a8f7: Get the number of the resource
- GET /groups/{group-id}/team/template — groups.team.GetTemplate: Get template from groups

## invitations.directoryObject
- GET /invitations/invitedUserSponsors — invitations.ListInvitedUserSponsors: Get invitedUserSponsors from invitations
- GET /invitations/invitedUserSponsors/{directoryObject-id} — invitations.GetInvitedUserSponsors: Get invitedUserSponsors from invitations
- GET /invitations/invitedUserSponsors/$count — invitations.invitedUserSponsors.GetCount-648d: Get the number of the resource

## invitations.invitation
- GET /invitations — invitations.invitation.ListInvitation: Get entities from invitations
- POST /invitations — invitations.invitation.CreateInvitation: Create invitation
- GET /invitations/$count — invitations.GetCount-8ff1: Get the number of the resource

## invitations.user
- GET /invitations/invitedUser — invitations.GetInvitedUser: Get invitedUser from invitations
- GET /invitations/invitedUser/mailboxSettings — invitations.invitedUser.GetMailboxSettings: Get mailboxSettings property value
- PATCH /invitations/invitedUser/mailboxSettings — invitations.invitedUser.UpdateMailboxSettings: Update property mailboxSettings value.
- GET /invitations/invitedUser/serviceProvisioningErrors — invitations.invitedUser.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /invitations/invitedUser/serviceProvisioningErrors/$count — invitations.invitedUser.ServiceProvisioningErrors.GetCount-df29: Get the number of the resource

## me.user
- GET /me — me.user.GetUser: Get a user
- PATCH /me — me.user.UpdateUser: Update user

## organization.certificateBasedAuthConfiguration
- GET /organization/{organization-id}/certificateBasedAuthConfiguration — organization.ListCertificateBasedAuthConfiguration: List certificateBasedAuthConfigurations
- POST /organization/{organization-id}/certificateBasedAuthConfiguration — organization.CreateCertificateBasedAuthConfiguration: Create certificateBasedAuthConfiguration
- GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id} — organization.GetCertificateBasedAuthConfiguration: Get certificateBasedAuthConfiguration
- DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id} — organization.DeleteCertificateBasedAuthConfiguration: Delete certificateBasedAuthConfiguration
- GET /organization/{organization-id}/certificateBasedAuthConfiguration/$count — organization.certificateBasedAuthConfiguration.GetCount-8262: Get the number of the resource

## organization.extension
- GET /organization/{organization-id}/extensions — organization.ListExtensions: Get extensions from organization
- POST /organization/{organization-id}/extensions — organization.CreateExtensions: Create new navigation property to extensions for organization
- GET /organization/{organization-id}/extensions/{extension-id} — organization.GetExtensions: Get extensions from organization
- PATCH /organization/{organization-id}/extensions/{extension-id} — organization.UpdateExtensions: Update the navigation property extensions in organization
- DELETE /organization/{organization-id}/extensions/{extension-id} — organization.DeleteExtensions: Delete navigation property extensions for organization
- GET /organization/{organization-id}/extensions/$count — organization.extensions.GetCount-bee2: Get the number of the resource

## organization.organization
- GET /organization — organization.organization.ListOrganization: List organizations
- POST /organization — organization.organization.CreateOrganization: Add new entity to organization
- GET /organization/{organization-id} — organization.organization.GetOrganization: Get organization
- PATCH /organization/{organization-id} — organization.organization.UpdateOrganization: Update organization
- DELETE /organization/{organization-id} — organization.organization.DeleteOrganization: Delete entity from organization
- GET /organization/$count — organization.GetCount-9453: Get the number of the resource

## organization.organization.Actions
- POST /organization/{organization-id}/checkMemberGroups — organization.organization.checkMemberGroups: Invoke action checkMemberGroups
- POST /organization/{organization-id}/checkMemberObjects — organization.organization.checkMemberObjects: Invoke action checkMemberObjects
- POST /organization/{organization-id}/getMemberGroups — organization.organization.getMemberGroups: Invoke action getMemberGroups
- POST /organization/{organization-id}/getMemberObjects — organization.organization.getMemberObjects: Invoke action getMemberObjects
- POST /organization/{organization-id}/restore — organization.organization.restore: Invoke action restore
- POST /organization/{organization-id}/setMobileDeviceManagementAuthority — organization.organization.setMobileDeviceManagementAuthority: Invoke action setMobileDeviceManagementAuthority
- POST /organization/getAvailableExtensionProperties — organization.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /organization/getByIds — organization.getByIds: Invoke action getByIds
- POST /organization/validateProperties — organization.validateProperties: Invoke action validateProperties

## organization.organization.Functions
- GET /organization/delta() — organization.delta: Invoke function delta

## organization.organizationalBranding
- GET /organization/{organization-id}/branding — organization.GetBranding: Get organizationalBranding
- PATCH /organization/{organization-id}/branding — organization.UpdateBranding: Update organizationalBranding
- DELETE /organization/{organization-id}/branding — organization.DeleteBranding: Delete organizationalBranding
- GET /organization/{organization-id}/branding/backgroundImage — organization.GetBrandingBackgroundImage: Get backgroundImage for the navigation property branding from organization
- PUT /organization/{organization-id}/branding/backgroundImage — organization.UpdateBrandingBackgroundImage: Update backgroundImage for the navigation property branding in organization
- DELETE /organization/{organization-id}/branding/backgroundImage — organization.DeleteBrandingBackgroundImage: Delete backgroundImage for the navigation property branding in organization
- GET /organization/{organization-id}/branding/bannerLogo — organization.GetBrandingBannerLogo: Get bannerLogo for the navigation property branding from organization
- PUT /organization/{organization-id}/branding/bannerLogo — organization.UpdateBrandingBannerLogo: Update bannerLogo for the navigation property branding in organization
- DELETE /organization/{organization-id}/branding/bannerLogo — organization.DeleteBrandingBannerLogo: Delete bannerLogo for the navigation property branding in organization
- GET /organization/{organization-id}/branding/customCSS — organization.GetBrandingCustomCSS: Get customCSS for the navigation property branding from organization
- PUT /organization/{organization-id}/branding/customCSS — organization.UpdateBrandingCustomCSS: Update customCSS for the navigation property branding in organization
- DELETE /organization/{organization-id}/branding/customCSS — organization.DeleteBrandingCustomCSS: Delete customCSS for the navigation property branding in organization
- GET /organization/{organization-id}/branding/favicon — organization.GetBrandingFavicon: Get favicon for the navigation property branding from organization
- PUT /organization/{organization-id}/branding/favicon — organization.UpdateBrandingFavicon: Update favicon for the navigation property branding in organization
- DELETE /organization/{organization-id}/branding/favicon — organization.DeleteBrandingFavicon: Delete favicon for the navigation property branding in organization
- GET /organization/{organization-id}/branding/headerLogo — organization.GetBrandingHeaderLogo: Get headerLogo for the navigation property branding from organization
- PUT /organization/{organization-id}/branding/headerLogo — organization.UpdateBrandingHeaderLogo: Update headerLogo for the navigation property branding in organization
- DELETE /organization/{organization-id}/branding/headerLogo — organization.DeleteBrandingHeaderLogo: Delete headerLogo for the navigation property branding in organization
- GET /organization/{organization-id}/branding/localizations — organization.branding.ListLocalizations: List localizations
- POST /organization/{organization-id}/branding/localizations — organization.branding.CreateLocalizations: Create organizationalBrandingLocalization
- GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id} — organization.branding.GetLocalizations: Get organizationalBrandingLocalization
- PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id} — organization.branding.UpdateLocalizations: Update organizationalBrandingLocalization
- DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id} — organization.branding.DeleteLocalizations: Delete organizationalBrandingLocalization
- GET /organization/{organization-id}/branding/localizations/$count — organization.branding.localizations.GetCount-e39f: Get the number of the resource
- GET /organization/{organization-id}/branding/squareLogo — organization.GetBrandingSquareLogo: Get squareLogo for the navigation property branding from organization
- PUT /organization/{organization-id}/branding/squareLogo — organization.UpdateBrandingSquareLogo: Update squareLogo for the navigation property branding in organization
- DELETE /organization/{organization-id}/branding/squareLogo — organization.DeleteBrandingSquareLogo: Delete squareLogo for the navigation property branding in organization
- GET /organization/{organization-id}/branding/squareLogoDark — organization.GetBrandingSquareLogoDark: Get squareLogoDark for the navigation property branding from organization
- PUT /organization/{organization-id}/branding/squareLogoDark — organization.UpdateBrandingSquareLogoDark: Update squareLogoDark for the navigation property branding in organization
- DELETE /organization/{organization-id}/branding/squareLogoDark — organization.DeleteBrandingSquareLogoDark: Delete squareLogoDark for the navigation property branding in organization

## planner.planner
- GET /planner — planner.planner.GetPlanner: Get planner
- PATCH /planner — planner.planner.UpdatePlanner: Update planner

## planner.plannerBucket
- GET /planner/buckets — planner.ListBuckets: List buckets
- POST /planner/buckets — planner.CreateBuckets: Create plannerBucket
- GET /planner/buckets/{plannerBucket-id} — planner.GetBuckets: Get plannerBucket
- PATCH /planner/buckets/{plannerBucket-id} — planner.UpdateBuckets: Update plannerbucket
- DELETE /planner/buckets/{plannerBucket-id} — planner.DeleteBuckets: Delete plannerBucket
- GET /planner/buckets/{plannerBucket-id}/tasks — planner.buckets.ListTasks: List tasks
- POST /planner/buckets/{plannerBucket-id}/tasks — planner.buckets.CreateTasks: Create new navigation property to tasks for planner
- GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id} — planner.buckets.GetTasks: Get tasks from planner
- PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id} — planner.buckets.UpdateTasks: Update the navigation property tasks in planner
- DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id} — planner.buckets.DeleteTasks: Delete navigation property tasks for planner
- GET /planner/buckets/{plannerBucket-id}/tasks/$count — planner.buckets.tasks.GetCount-145a: Get the number of the resource
- GET /planner/buckets/$count — planner.buckets.GetCount-9ddb: Get the number of the resource

## planner.plannerPlan
- GET /planner/plans — planner.ListPlans: List plans
- POST /planner/plans — planner.CreatePlans: Create plannerPlan
- GET /planner/plans/{plannerPlan-id} — planner.GetPlans: Get plannerPlan
- PATCH /planner/plans/{plannerPlan-id} — planner.UpdatePlans: Update plannerPlan
- DELETE /planner/plans/{plannerPlan-id} — planner.DeletePlans: Delete plannerPlan
- GET /planner/plans/{plannerPlan-id}/buckets — planner.plans.ListBuckets: List buckets
- POST /planner/plans/{plannerPlan-id}/buckets — planner.plans.CreateBuckets: Create new navigation property to buckets for planner
- GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id} — planner.plans.GetBuckets: Get buckets from planner
- PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id} — planner.plans.UpdateBuckets: Update the navigation property buckets in planner
- DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id} — planner.plans.DeleteBuckets: Delete navigation property buckets for planner
- GET /planner/plans/{plannerPlan-id}/buckets/$count — planner.plans.buckets.GetCount-240a: Get the number of the resource
- GET /planner/plans/{plannerPlan-id}/details — planner.plans.GetDetails: Get plannerPlanDetails
- PATCH /planner/plans/{plannerPlan-id}/details — planner.plans.UpdateDetails: Update plannerplandetails
- DELETE /planner/plans/{plannerPlan-id}/details — planner.plans.DeleteDetails: Delete navigation property details for planner
- GET /planner/plans/{plannerPlan-id}/tasks — planner.plans.ListTasks: List tasks
- POST /planner/plans/{plannerPlan-id}/tasks — planner.plans.CreateTasks: Create new navigation property to tasks for planner
- GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id} — planner.plans.GetTasks: Get tasks from planner
- PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id} — planner.plans.UpdateTasks: Update the navigation property tasks in planner
- DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id} — planner.plans.DeleteTasks: Delete navigation property tasks for planner
- GET /planner/plans/{plannerPlan-id}/tasks/$count — planner.plans.tasks.GetCount-09d1: Get the number of the resource
- GET /planner/plans/$count — planner.plans.GetCount-e322: Get the number of the resource

## planner.plannerTask
- GET /planner/tasks — planner.ListTasks: List plannerTask objects
- POST /planner/tasks — planner.CreateTasks: Create plannerTask
- GET /planner/tasks/{plannerTask-id} — planner.GetTasks: Get plannerTask
- PATCH /planner/tasks/{plannerTask-id} — planner.UpdateTasks: Update plannerTask
- DELETE /planner/tasks/{plannerTask-id} — planner.DeleteTasks: Delete plannerTask
- GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat — planner.tasks.GetAssignedToTaskBoardFormat: Get plannerAssignedToTaskBoardTaskFormat
- PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat — planner.tasks.UpdateAssignedToTaskBoardFormat: Update plannerAssignedToTaskBoardTaskFormat
- DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat — planner.tasks.DeleteAssignedToTaskBoardFormat: Delete navigation property assignedToTaskBoardFormat for planner
- GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat — planner.tasks.GetBucketTaskBoardFormat: Get plannerBucketTaskBoardTaskFormat
- PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat — planner.tasks.UpdateBucketTaskBoardFormat: Update plannerBucketTaskBoardTaskFormat
- DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat — planner.tasks.DeleteBucketTaskBoardFormat: Delete navigation property bucketTaskBoardFormat for planner
- GET /planner/tasks/{plannerTask-id}/details — planner.tasks.GetDetails: Get plannerTaskDetails
- PATCH /planner/tasks/{plannerTask-id}/details — planner.tasks.UpdateDetails: Update plannertaskdetails
- DELETE /planner/tasks/{plannerTask-id}/details — planner.tasks.DeleteDetails: Delete navigation property details for planner
- GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat — planner.tasks.GetProgressTaskBoardFormat: Get plannerProgressTaskBoardTaskFormat
- PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat — planner.tasks.UpdateProgressTaskBoardFormat: Update plannerProgressTaskBoardTaskFormat
- DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat — planner.tasks.DeleteProgressTaskBoardFormat: Delete navigation property progressTaskBoardFormat for planner
- GET /planner/tasks/$count — planner.tasks.GetCount-bfd2: Get the number of the resource

## servicePrincipals.appManagementPolicy
- GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies — servicePrincipals.ListAppManagementPolicies: Get appManagementPolicies from servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id} — servicePrincipals.GetAppManagementPolicies: Get appManagementPolicies from servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/$count — servicePrincipals.appManagementPolicies.GetCount-5cee: Get the number of the resource

## servicePrincipals.appRoleAssignment
- GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo — servicePrincipals.ListAppRoleAssignedTo: Get appRoleAssignment
- POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo — servicePrincipals.CreateAppRoleAssignedTo: Grant an appRoleAssignment for a service principal
- GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id} — servicePrincipals.GetAppRoleAssignedTo: Get appRoleAssignment
- PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id} — servicePrincipals.UpdateAppRoleAssignedTo: Update the navigation property appRoleAssignedTo in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id} — servicePrincipals.DeleteAppRoleAssignedTo: Delete appRoleAssignedTo
- GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/$count — servicePrincipals.appRoleAssignedTo.GetCount-705c: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments — servicePrincipals.ListAppRoleAssignments: Get appRoleAssignment
- POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments — servicePrincipals.CreateAppRoleAssignments: Grant an appRoleAssignment to a service principal
- GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id} — servicePrincipals.GetAppRoleAssignments: Get appRoleAssignment
- PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id} — servicePrincipals.UpdateAppRoleAssignments: Update the navigation property appRoleAssignments in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id} — servicePrincipals.DeleteAppRoleAssignments: Delete appRoleAssignment
- GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/$count — servicePrincipals.appRoleAssignments.GetCount-4e95: Get the number of the resource

## servicePrincipals.claimsMappingPolicy
- GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies — servicePrincipals.ListClaimsMappingPolicies: List assigned claimsMappingPolicy
- DELETE /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies/{claimsMappingPolicy-id}/$ref — servicePrincipals.claimsMappingPolicies.DeleteRefClaimsMappingPolicy: Remove claimsMappingPolicy
- GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies/$count — servicePrincipals.claimsMappingPolicies.GetCount-832a: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies/$ref — servicePrincipals.ListRefClaimsMappingPolicies: List assigned claimsMappingPolicy
- POST /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies/$ref — servicePrincipals.CreateRefClaimsMappingPolicies: Assign claimsMappingPolicy
- DELETE /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies/$ref — servicePrincipals.DeleteRefClaimsMappingPolicies: Remove claimsMappingPolicy

## servicePrincipals.delegatedPermissionClassification
- GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications — servicePrincipals.ListDelegatedPermissionClassifications: List delegatedPermissionClassifications collection of servicePrincipal
- POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications — servicePrincipals.CreateDelegatedPermissionClassifications: Create delegatedPermissionClassification
- GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id} — servicePrincipals.GetDelegatedPermissionClassifications: Get delegatedPermissionClassifications from servicePrincipals
- PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id} — servicePrincipals.UpdateDelegatedPermissionClassifications: Update the navigation property delegatedPermissionClassifications in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id} — servicePrincipals.DeleteDelegatedPermissionClassifications: Delete delegatedPermissionClassification
- GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/$count — servicePrincipals.delegatedPermissionClassifications.GetCount-31f9: Get the number of the resource

## servicePrincipals.directoryObject
- GET /servicePrincipals/{servicePrincipal-id}/createdObjects — servicePrincipals.ListCreatedObjects: servicePrincipal: List createdObjects
- GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id} — servicePrincipals.GetCreatedObjects: Get createdObjects from servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}/graph.servicePrincipal — servicePrincipals.GetCreatedObjects.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /servicePrincipals/{servicePrincipal-id}/createdObjects/$count — servicePrincipals.createdObjects.GetCount-0714: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/createdObjects/graph.servicePrincipal — servicePrincipals.ListCreatedObjects.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/createdObjects/graph.servicePrincipal/$count — servicePrincipals.CreatedObjects.GetCount.AsServicePrincipal-768a: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/memberOf — servicePrincipals.ListMemberOf: List servicePrincipal memberOf
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id} — servicePrincipals.GetMemberOf: Get memberOf from servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}/graph.administrativeUnit — servicePrincipals.GetMemberOf.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}/graph.directoryRole — servicePrincipals.GetMemberOf.AsDirectoryRole: Get the item of type microsoft.graph.directoryObject as microsoft.graph.directoryRole
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}/graph.group — servicePrincipals.GetMemberOf.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/$count — servicePrincipals.memberOf.GetCount-be11: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/graph.administrativeUnit — servicePrincipals.ListMemberOf.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/graph.administrativeUnit/$count — servicePrincipals.MemberOf.GetCount.AsAdministrativeUnit-472e: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/graph.directoryRole — servicePrincipals.ListMemberOf.AsDirectoryRole: Get the items of type microsoft.graph.directoryRole in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/graph.directoryRole/$count — servicePrincipals.MemberOf.GetCount.AsDirectoryRole-fa4e: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/graph.group — servicePrincipals.ListMemberOf.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/memberOf/graph.group/$count — servicePrincipals.MemberOf.GetCount.AsGroup-96d9: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects — servicePrincipals.ListOwnedObjects: servicePrincipals: List ownedObjects
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id} — servicePrincipals.GetOwnedObjects: Get ownedObjects from servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}/graph.application — servicePrincipals.GetOwnedObjects.AsApplication: Get the item of type microsoft.graph.directoryObject as microsoft.graph.application
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}/graph.appRoleAssignment — servicePrincipals.GetOwnedObjects.AsAppRoleAssignment: Get the item of type microsoft.graph.directoryObject as microsoft.graph.appRoleAssignment
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}/graph.endpoint — servicePrincipals.GetOwnedObjects.AsEndpoint: Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}/graph.group — servicePrincipals.GetOwnedObjects.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}/graph.servicePrincipal — servicePrincipals.GetOwnedObjects.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/$count — servicePrincipals.ownedObjects.GetCount-7ae7: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.application — servicePrincipals.ListOwnedObjects.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.application/$count — servicePrincipals.OwnedObjects.GetCount.AsApplication-2b95: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.appRoleAssignment — servicePrincipals.ListOwnedObjects.AsAppRoleAssignment: Get the items of type microsoft.graph.appRoleAssignment in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.appRoleAssignment/$count — servicePrincipals.OwnedObjects.GetCount.AsAppRoleAssignment-793c: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.endpoint — servicePrincipals.ListOwnedObjects.AsEndpoint: Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.endpoint/$count — servicePrincipals.OwnedObjects.GetCount.AsEndpoint-4594: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.group — servicePrincipals.ListOwnedObjects.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.group/$count — servicePrincipals.OwnedObjects.GetCount.AsGroup-fc2e: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.servicePrincipal — servicePrincipals.ListOwnedObjects.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/graph.servicePrincipal/$count — servicePrincipals.OwnedObjects.GetCount.AsServicePrincipal-19c0: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/owners — servicePrincipals.ListOwners: Get owners from servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/owners/{directoryObject-id}/$ref — servicePrincipals.owners.DeleteRefDirectoryObject: Remove service principal owner
- GET /servicePrincipals/{servicePrincipal-id}/owners/{directoryObject-id}/graph.appRoleAssignment — servicePrincipals.GetOwners.AsAppRoleAssignment: Get the item of type microsoft.graph.directoryObject as microsoft.graph.appRoleAssignment
- GET /servicePrincipals/{servicePrincipal-id}/owners/{directoryObject-id}/graph.endpoint — servicePrincipals.GetOwners.AsEndpoint: Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint
- GET /servicePrincipals/{servicePrincipal-id}/owners/{directoryObject-id}/graph.servicePrincipal — servicePrincipals.GetOwners.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /servicePrincipals/{servicePrincipal-id}/owners/{directoryObject-id}/graph.user — servicePrincipals.GetOwners.AsUser: Get the item of type microsoft.graph.directoryObject as microsoft.graph.user
- GET /servicePrincipals/{servicePrincipal-id}/owners/$count — servicePrincipals.owners.GetCount-ec9a: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/owners/$ref — servicePrincipals.ListRefOwners: Get ref of owners from servicePrincipals
- POST /servicePrincipals/{servicePrincipal-id}/owners/$ref — servicePrincipals.CreateRefOwners: servicePrincipal: Add owner
- DELETE /servicePrincipals/{servicePrincipal-id}/owners/$ref — servicePrincipals.DeleteRefOwners: Remove service principal owner
- GET /servicePrincipals/{servicePrincipal-id}/owners/graph.appRoleAssignment — servicePrincipals.ListOwners.AsAppRoleAssignment: Get the items of type microsoft.graph.appRoleAssignment in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/owners/graph.appRoleAssignment/$count — servicePrincipals.Owners.GetCount.AsAppRoleAssignment-abce: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/owners/graph.endpoint — servicePrincipals.ListOwners.AsEndpoint: Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/owners/graph.endpoint/$count — servicePrincipals.Owners.GetCount.AsEndpoint-9454: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/owners/graph.servicePrincipal — servicePrincipals.ListOwners.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/owners/graph.servicePrincipal/$count — servicePrincipals.Owners.GetCount.AsServicePrincipal-c35b: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/owners/graph.user — servicePrincipals.ListOwners.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/owners/graph.user/$count — servicePrincipals.Owners.GetCount.AsUser-aab7: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf — servicePrincipals.ListTransitiveMemberOf: List servicePrincipal transitive memberOf
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id} — servicePrincipals.GetTransitiveMemberOf: Get transitiveMemberOf from servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}/graph.administrativeUnit — servicePrincipals.GetTransitiveMemberOf.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}/graph.directoryRole — servicePrincipals.GetTransitiveMemberOf.AsDirectoryRole: Get the item of type microsoft.graph.directoryObject as microsoft.graph.directoryRole
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}/graph.group — servicePrincipals.GetTransitiveMemberOf.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/$count — servicePrincipals.transitiveMemberOf.GetCount-4794: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/graph.administrativeUnit — servicePrincipals.ListTransitiveMemberOf.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/graph.administrativeUnit/$count — servicePrincipals.TransitiveMemberOf.GetCount.AsAdministrativeUnit-4450: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/graph.directoryRole — servicePrincipals.ListTransitiveMemberOf.AsDirectoryRole: Get the items of type microsoft.graph.directoryRole in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/graph.directoryRole/$count — servicePrincipals.TransitiveMemberOf.GetCount.AsDirectoryRole-8951: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/graph.group — servicePrincipals.ListTransitiveMemberOf.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/graph.group/$count — servicePrincipals.TransitiveMemberOf.GetCount.AsGroup-e005: Get the number of the resource

## servicePrincipals.endpoint
- GET /servicePrincipals/{servicePrincipal-id}/endpoints — servicePrincipals.ListEndpoints: Get endpoints from servicePrincipals
- POST /servicePrincipals/{servicePrincipal-id}/endpoints — servicePrincipals.CreateEndpoints: Create new navigation property to endpoints for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id} — servicePrincipals.GetEndpoints: Get endpoints from servicePrincipals
- PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id} — servicePrincipals.UpdateEndpoints: Update the navigation property endpoints in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id} — servicePrincipals.DeleteEndpoints: Delete navigation property endpoints for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/endpoints/$count — servicePrincipals.endpoints.GetCount-c0e0: Get the number of the resource

## servicePrincipals.federatedIdentityCredential
- GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials — servicePrincipals.ListFederatedIdentityCredentials: Get federatedIdentityCredentials from servicePrincipals
- POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials — servicePrincipals.CreateFederatedIdentityCredentials: Create new navigation property to federatedIdentityCredentials for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id} — servicePrincipals.GetFederatedIdentityCredentials: Get federatedIdentityCredentials from servicePrincipals
- PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id} — servicePrincipals.UpdateFederatedIdentityCredentials: Update the navigation property federatedIdentityCredentials in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id} — servicePrincipals.DeleteFederatedIdentityCredentials: Delete navigation property federatedIdentityCredentials for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials(name='{name}') — servicePrincipals.federatedIdentityCredentials.GetByName: Get federatedIdentityCredentials from servicePrincipals
- PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials(name='{name}') — servicePrincipals.federatedIdentityCredentials.UpdateByName: Update the navigation property federatedIdentityCredentials in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials(name='{name}') — servicePrincipals.federatedIdentityCredentials.DeleteByName: Delete navigation property federatedIdentityCredentials for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/$count — servicePrincipals.federatedIdentityCredentials.GetCount-d9cd: Get the number of the resource

## servicePrincipals.homeRealmDiscoveryPolicy
- GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies — servicePrincipals.ListHomeRealmDiscoveryPolicies: List assigned homeRealmDiscoveryPolicy
- DELETE /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/$ref — servicePrincipals.homeRealmDiscoveryPolicies.DeleteRefHomeRealmDiscoveryPolicy: Remove homeRealmDiscoveryPolicy
- GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies/$count — servicePrincipals.homeRealmDiscoveryPolicies.GetCount-d161: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies/$ref — servicePrincipals.ListRefHomeRealmDiscoveryPolicies: List assigned homeRealmDiscoveryPolicy
- POST /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies/$ref — servicePrincipals.CreateRefHomeRealmDiscoveryPolicies: Assign homeRealmDiscoveryPolicy
- DELETE /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies/$ref — servicePrincipals.DeleteRefHomeRealmDiscoveryPolicies: Remove homeRealmDiscoveryPolicy

## servicePrincipals.oAuth2PermissionGrant
- GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants — servicePrincipals.ListOauth2PermissionGrants: List oauth2PermissionGrants granted to a service principal
- GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id} — servicePrincipals.GetOauth2PermissionGrants: Get oauth2PermissionGrants from servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/oauth2PermissionGrants/$count — servicePrincipals.oauth2PermissionGrants.GetCount-f9dc: Get the number of the resource

## servicePrincipals.remoteDesktopSecurityConfiguration
- GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration — servicePrincipals.GetRemoteDesktopSecurityConfiguration: Get remoteDesktopSecurityConfiguration
- PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration — servicePrincipals.UpdateRemoteDesktopSecurityConfiguration: Update remoteDesktopSecurityConfiguration
- DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration — servicePrincipals.DeleteRemoteDesktopSecurityConfiguration: Delete remoteDesktopSecurityConfiguration
- GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps — servicePrincipals.remoteDesktopSecurityConfiguration.ListApprovedClientApps: List approvedClientApp objects
- POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps — servicePrincipals.remoteDesktopSecurityConfiguration.CreateApprovedClientApps: Create approvedClientApp
- GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id} — servicePrincipals.remoteDesktopSecurityConfiguration.GetApprovedClientApps: Get approvedClientApp
- PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id} — servicePrincipals.remoteDesktopSecurityConfiguration.UpdateApprovedClientApps: Update approvedClientApp
- DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id} — servicePrincipals.remoteDesktopSecurityConfiguration.DeleteApprovedClientApps: Delete approvedClientApp
- GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/$count — servicePrincipals.remoteDesktopSecurityConfiguration.approvedClientApps.GetCount-bea1: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups — servicePrincipals.remoteDesktopSecurityConfiguration.ListTargetDeviceGroups: List targetDeviceGroups
- POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups — servicePrincipals.remoteDesktopSecurityConfiguration.CreateTargetDeviceGroups: Create targetDeviceGroup
- GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id} — servicePrincipals.remoteDesktopSecurityConfiguration.GetTargetDeviceGroups: Get targetDeviceGroup
- PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id} — servicePrincipals.remoteDesktopSecurityConfiguration.UpdateTargetDeviceGroups: Update targetDeviceGroup
- DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id} — servicePrincipals.remoteDesktopSecurityConfiguration.DeleteTargetDeviceGroups: Delete targetDeviceGroup
- GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/$count — servicePrincipals.remoteDesktopSecurityConfiguration.targetDeviceGroups.GetCount-51f5: Get the number of the resource

## servicePrincipals.servicePrincipal
- GET /servicePrincipals — servicePrincipals.servicePrincipal.ListServicePrincipal: List servicePrincipals
- POST /servicePrincipals — servicePrincipals.servicePrincipal.CreateServicePrincipal: Create servicePrincipal
- GET /servicePrincipals/{servicePrincipal-id} — servicePrincipals.servicePrincipal.GetServicePrincipal: Get servicePrincipal
- PATCH /servicePrincipals/{servicePrincipal-id} — servicePrincipals.servicePrincipal.UpdateServicePrincipal: Upsert servicePrincipal
- DELETE /servicePrincipals/{servicePrincipal-id} — servicePrincipals.servicePrincipal.DeleteServicePrincipal: Delete servicePrincipal
- GET /servicePrincipals/$count — servicePrincipals.GetCount-da6d: Get the number of the resource

## servicePrincipals.servicePrincipal.Actions
- POST /servicePrincipals/{servicePrincipal-id}/addKey — servicePrincipals.servicePrincipal.addKey: Invoke action addKey
- POST /servicePrincipals/{servicePrincipal-id}/addPassword — servicePrincipals.servicePrincipal.addPassword: Invoke action addPassword
- POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate — servicePrincipals.servicePrincipal.addTokenSigningCertificate: Invoke action addTokenSigningCertificate
- POST /servicePrincipals/{servicePrincipal-id}/checkMemberGroups — servicePrincipals.servicePrincipal.checkMemberGroups: Invoke action checkMemberGroups
- POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects — servicePrincipals.servicePrincipal.checkMemberObjects: Invoke action checkMemberObjects
- POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups — servicePrincipals.servicePrincipal.getMemberGroups: Invoke action getMemberGroups
- POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects — servicePrincipals.servicePrincipal.getMemberObjects: Invoke action getMemberObjects
- POST /servicePrincipals/{servicePrincipal-id}/removeKey — servicePrincipals.servicePrincipal.removeKey: Invoke action removeKey
- POST /servicePrincipals/{servicePrincipal-id}/removePassword — servicePrincipals.servicePrincipal.removePassword: Invoke action removePassword
- POST /servicePrincipals/{servicePrincipal-id}/restore — servicePrincipals.servicePrincipal.restore: Invoke action restore
- POST /servicePrincipals/getAvailableExtensionProperties — servicePrincipals.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /servicePrincipals/getByIds — servicePrincipals.getByIds: Invoke action getByIds
- POST /servicePrincipals/validateProperties — servicePrincipals.validateProperties: Invoke action validateProperties

## servicePrincipals.servicePrincipal.Functions
- GET /servicePrincipals/delta() — servicePrincipals.delta: Invoke function delta

## servicePrincipals.synchronization
- GET /servicePrincipals/{servicePrincipal-id}/synchronization — servicePrincipals.GetSynchronization: Get synchronization from servicePrincipals
- PUT /servicePrincipals/{servicePrincipal-id}/synchronization — servicePrincipals.SetSynchronization: Update the navigation property synchronization in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/synchronization — servicePrincipals.DeleteSynchronization: Delete navigation property synchronization for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs — servicePrincipals.synchronization.ListJobs: List synchronization jobs
- POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs — servicePrincipals.synchronization.CreateJobs: Create synchronizationJob
- GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id} — servicePrincipals.synchronization.GetJobs: Get synchronizationJob
- PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id} — servicePrincipals.synchronization.UpdateJobs: Update the navigation property jobs in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id} — servicePrincipals.synchronization.DeleteJobs: Delete synchronizationJob
- GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/$count — servicePrincipals.synchronization.jobs.GetCount-5eba: Get the number of the resource
- POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials — servicePrincipals.servicePrincipal.synchronization.jobs.validateCredentials: Invoke action validateCredentials
- POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken — servicePrincipals.servicePrincipal.synchronization.acquireAccessToken: Invoke action acquireAccessToken
- PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets — servicePrincipals.synchronization.SetSecrets: Add synchronization secrets
- GET /servicePrincipals/{servicePrincipal-id}/synchronization/secrets/$count — servicePrincipals.synchronization.Secrets.GetCount-65c9: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates — servicePrincipals.synchronization.ListTemplates: List existing synchronization templates
- POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates — servicePrincipals.synchronization.CreateTemplates: Create new navigation property to templates for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id} — servicePrincipals.synchronization.GetTemplates: Get templates from servicePrincipals
- PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id} — servicePrincipals.synchronization.UpdateTemplates: Update the navigation property templates in servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id} — servicePrincipals.synchronization.DeleteTemplates: Delete navigation property templates for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/$count — servicePrincipals.synchronization.templates.GetCount-1c9d: Get the number of the resource

## servicePrincipals.tokenIssuancePolicy
- GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies — servicePrincipals.ListTokenIssuancePolicies: Get tokenIssuancePolicies from servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies/{tokenIssuancePolicy-id}/$ref — servicePrincipals.tokenIssuancePolicies.DeleteRefTokenIssuancePolicy: Delete ref of navigation property tokenIssuancePolicies for servicePrincipals
- GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies/$count — servicePrincipals.tokenIssuancePolicies.GetCount-578b: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies/$ref — servicePrincipals.ListRefTokenIssuancePolicies: Get ref of tokenIssuancePolicies from servicePrincipals
- POST /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies/$ref — servicePrincipals.CreateRefTokenIssuancePolicies: Create new navigation property ref to tokenIssuancePolicies for servicePrincipals
- DELETE /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies/$ref — servicePrincipals.DeleteRefTokenIssuancePolicies: Delete ref of navigation property tokenIssuancePolicies for servicePrincipals

## servicePrincipals.tokenLifetimePolicy
- GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies — servicePrincipals.ListTokenLifetimePolicies: List assigned tokenLifetimePolicies
- DELETE /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies/{tokenLifetimePolicy-id}/$ref — servicePrincipals.tokenLifetimePolicies.DeleteRefTokenLifetimePolicy: Remove tokenLifetimePolicies
- GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies/$count — servicePrincipals.tokenLifetimePolicies.GetCount-4121: Get the number of the resource
- GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies/$ref — servicePrincipals.ListRefTokenLifetimePolicies: List assigned tokenLifetimePolicies
- POST /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies/$ref — servicePrincipals.CreateRefTokenLifetimePolicies: Add tokenLifetimePolicy
- DELETE /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies/$ref — servicePrincipals.DeleteRefTokenLifetimePolicies: Remove tokenLifetimePolicies

## sites.baseItem
- GET /sites/{site-id}/items — sites.ListItems: Get items from sites
- GET /sites/{site-id}/items/{baseItem-id} — sites.GetItems: Get items from sites
- GET /sites/{site-id}/items/$count — sites.items.GetCount-1b67: Get the number of the resource
- GET /sites/{site-id}/getByPath(path='{path}')/items — sites.getByPath.ListItems: Get items from sites

## sites.baseSitePage
- GET /sites/{site-id}/getByPath(path='{path}')/pages — sites.getByPath.ListPages: Get pages from sites
- POST /sites/{site-id}/getByPath(path='{path}')/pages — sites.getByPath.CreatePages: Create new navigation property to pages for sites
- GET /sites/{site-id}/pages — sites.ListPages: List baseSitePages
- POST /sites/{site-id}/pages — sites.CreatePages: Create a page in the site pages list of a site
- GET /sites/{site-id}/pages/{baseSitePage-id} — sites.GetPages: Get baseSitePage
- PATCH /sites/{site-id}/pages/{baseSitePage-id} — sites.UpdatePages: Update the navigation property pages in sites
- DELETE /sites/{site-id}/pages/{baseSitePage-id} — sites.DeletePages: Delete baseSitePage
- GET /sites/{site-id}/pages/{baseSitePage-id}/createdByUser — sites.pages.GetCreatedByUser: Get createdByUser from sites
- GET /sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser — sites.pages.GetLastModifiedByUser: Get lastModifiedByUser from sites
- GET /sites/{site-id}/pages/{baseSitePage-id}/graph.sitePage — sites.GetPages.AsSitePage: Get SitePage
- GET /sites/{site-id}/pages/$count — sites.pages.GetCount-3155: Get the number of the resource
- GET /sites/{site-id}/pages/graph.sitePage — sites.ListPages.AsSitePage: Get SitePage
- GET /sites/{site-id}/pages/graph.sitePage/$count — sites.Pages.GetCount.AsSitePage-c4ed: Get the number of the resource

## sites.columnDefinition
- GET /sites/{site-id}/columns — sites.ListColumns: List columns in a site
- POST /sites/{site-id}/columns — sites.CreateColumns: Create a columnDefinition in a site
- GET /sites/{site-id}/columns/{columnDefinition-id} — sites.GetColumns: Get columns from sites
- PATCH /sites/{site-id}/columns/{columnDefinition-id} — sites.UpdateColumns: Update the navigation property columns in sites
- DELETE /sites/{site-id}/columns/{columnDefinition-id} — sites.DeleteColumns: Delete navigation property columns for sites
- GET /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn — sites.columns.GetSourceColumn: Get sourceColumn from sites
- GET /sites/{site-id}/columns/$count — sites.columns.GetCount-a8bb: Get the number of the resource
- GET /sites/{site-id}/externalColumns — sites.ListExternalColumns: Get externalColumns from sites
- GET /sites/{site-id}/externalColumns/{columnDefinition-id} — sites.GetExternalColumns: Get externalColumns from sites
- GET /sites/{site-id}/externalColumns/$count — sites.externalColumns.GetCount-3855: Get the number of the resource
- GET /sites/{site-id}/getByPath(path='{path}')/columns — sites.getByPath.ListColumns: Get columns from sites
- POST /sites/{site-id}/getByPath(path='{path}')/columns — sites.getByPath.CreateColumns: Create new navigation property to columns for sites
- GET /sites/{site-id}/getByPath(path='{path}')/externalColumns — sites.getByPath.ListExternalColumns: Get externalColumns from sites

## sites.contentType
- GET /sites/{site-id}/contentTypes — sites.ListContentTypes: List contentTypes in a site
- POST /sites/{site-id}/contentTypes — sites.CreateContentTypes: Create a content type
- GET /sites/{site-id}/contentTypes/{contentType-id} — sites.GetContentTypes: Get contentType
- PATCH /sites/{site-id}/contentTypes/{contentType-id} — sites.UpdateContentTypes: Update contentType
- DELETE /sites/{site-id}/contentTypes/{contentType-id} — sites.DeleteContentTypes: Delete contentType
- GET /sites/{site-id}/contentTypes/{contentType-id}/base — sites.contentTypes.GetBase: Get base from sites
- GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes — sites.contentTypes.ListBaseTypes: Get baseTypes from sites
- GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks — sites.contentTypes.ListColumnLinks: Get columnLinks from sites
- POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks — sites.contentTypes.CreateColumnLinks: Create new navigation property to columnLinks for sites
- GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions — sites.contentTypes.ListColumnPositions: Get columnPositions from sites
- GET /sites/{site-id}/contentTypes/{contentType-id}/columns — sites.contentTypes.ListColumns: List columnDefinitions in a content type
- POST /sites/{site-id}/contentTypes/{contentType-id}/columns — sites.contentTypes.CreateColumns: Create a columnDefinition in a content type
- POST /sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites — sites.site.contentTypes.contentType.associateWithHubSites: Invoke action associateWithHubSites
- POST /sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation — sites.site.contentTypes.contentType.copyToDefaultContentLocation: Invoke action copyToDefaultContentLocation
- GET /sites/{site-id}/contentTypes/{contentType-id}/isPublished() — sites.site.contentTypes.contentType.isPublished: Invoke function isPublished
- POST /sites/{site-id}/contentTypes/{contentType-id}/publish — sites.site.contentTypes.contentType.publish: Invoke action publish
- POST /sites/{site-id}/contentTypes/{contentType-id}/unpublish — sites.site.contentTypes.contentType.unpublish: Invoke action unpublish
- GET /sites/{site-id}/contentTypes/$count — sites.contentTypes.GetCount-50aa: Get the number of the resource
- POST /sites/{site-id}/contentTypes/addCopy — sites.site.contentTypes.addCopy: Invoke action addCopy
- POST /sites/{site-id}/contentTypes/addCopyFromContentTypeHub — sites.site.contentTypes.addCopyFromContentTypeHub: Invoke action addCopyFromContentTypeHub
- GET /sites/{site-id}/contentTypes/getCompatibleHubContentTypes() — sites.site.contentTypes.getCompatibleHubContentTypes: Invoke function getCompatibleHubContentTypes
- GET /sites/{site-id}/getByPath(path='{path}')/contentTypes — sites.getByPath.ListContentTypes: Get contentTypes from sites
- POST /sites/{site-id}/getByPath(path='{path}')/contentTypes — sites.getByPath.CreateContentTypes: Create new navigation property to contentTypes for sites

## sites.drive
- GET /sites/{site-id}/drive — sites.GetDrive: Get drive from sites
- GET /sites/{site-id}/drives — sites.ListDrives: Get drives from sites
- GET /sites/{site-id}/drives/{drive-id} — sites.GetDrives: Get drives from sites
- GET /sites/{site-id}/drives/$count — sites.drives.GetCount-5071: Get the number of the resource
- GET /sites/{site-id}/getByPath(path='{path}')/drive — sites.getByPath.GetDrive: Get drive from sites
- GET /sites/{site-id}/getByPath(path='{path}')/drives — sites.getByPath.ListDrives: Get drives from sites

## sites.itemAnalytics
- GET /sites/{site-id}/analytics — sites.GetAnalytics: Get analytics from sites
- PATCH /sites/{site-id}/analytics — sites.UpdateAnalytics: Update the navigation property analytics in sites
- DELETE /sites/{site-id}/analytics — sites.DeleteAnalytics: Delete navigation property analytics for sites
- GET /sites/{site-id}/analytics/allTime — sites.analytics.GetAllTime: Get allTime from sites
- GET /sites/{site-id}/analytics/itemActivityStats — sites.analytics.ListItemActivityStats: Get itemActivityStats from sites
- POST /sites/{site-id}/analytics/itemActivityStats — sites.analytics.CreateItemActivityStats: Create new navigation property to itemActivityStats for sites
- GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id} — sites.analytics.GetItemActivityStats: Get itemActivityStats from sites
- PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id} — sites.analytics.UpdateItemActivityStats: Update the navigation property itemActivityStats in sites
- DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id} — sites.analytics.DeleteItemActivityStats: Delete navigation property itemActivityStats for sites
- GET /sites/{site-id}/analytics/itemActivityStats/$count — sites.analytics.itemActivityStats.GetCount-c4ac: Get the number of the resource
- GET /sites/{site-id}/analytics/lastSevenDays — sites.analytics.GetLastSevenDays: Get lastSevenDays from sites
- GET /sites/{site-id}/getByPath(path='{path}')/analytics — sites.getByPath.GetAnalytics: Get analytics from sites
- PATCH /sites/{site-id}/getByPath(path='{path}')/analytics — sites.getByPath.UpdateAnalytics: Update the navigation property analytics in sites
- DELETE /sites/{site-id}/getByPath(path='{path}')/analytics — sites.getByPath.DeleteAnalytics: Delete navigation property analytics for sites

## sites.list
- GET /sites/{site-id}/lists — sites.ListLists: Get lists in a site
- POST /sites/{site-id}/lists — sites.CreateLists: Create a new list
- GET /sites/{site-id}/lists/{list-id} — sites.GetLists: Get metadata for a list
- PATCH /sites/{site-id}/lists/{list-id} — sites.UpdateLists: Update the navigation property lists in sites
- DELETE /sites/{site-id}/lists/{list-id} — sites.DeleteLists: Delete navigation property lists for sites
- GET /sites/{site-id}/lists/{list-id}/columns — sites.lists.ListColumns: List columnDefinitions in a list
- POST /sites/{site-id}/lists/{list-id}/columns — sites.lists.CreateColumns: Create a columnDefinition in a list
- GET /sites/{site-id}/lists/{list-id}/contentTypes — sites.lists.ListContentTypes: List contentTypes in a list
- POST /sites/{site-id}/lists/{list-id}/contentTypes — sites.lists.CreateContentTypes: Create new navigation property to contentTypes for sites
- GET /sites/{site-id}/lists/{list-id}/createdByUser — sites.lists.GetCreatedByUser: Get createdByUser from sites
- GET /sites/{site-id}/lists/{list-id}/drive — sites.lists.GetDrive: Get drive from sites
- GET /sites/{site-id}/lists/{list-id}/items — sites.lists.ListItems: List items
- POST /sites/{site-id}/lists/{list-id}/items — sites.lists.CreateItems: Create a new item in a list
- GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser — sites.lists.GetLastModifiedByUser: Get lastModifiedByUser from sites
- GET /sites/{site-id}/lists/{list-id}/operations — sites.lists.ListOperations: Get operations from sites
- POST /sites/{site-id}/lists/{list-id}/operations — sites.lists.CreateOperations: Create new navigation property to operations for sites
- GET /sites/{site-id}/lists/{list-id}/permissions — sites.lists.ListPermissions: List permissions on a list
- POST /sites/{site-id}/lists/{list-id}/permissions — sites.lists.CreatePermissions: Create permission on a list
- GET /sites/{site-id}/lists/{list-id}/subscriptions — sites.lists.ListSubscriptions: Get subscriptions from sites
- POST /sites/{site-id}/lists/{list-id}/subscriptions — sites.lists.CreateSubscriptions: Create new navigation property to subscriptions for sites
- GET /sites/{site-id}/lists/$count — sites.lists.GetCount-e06a: Get the number of the resource
- GET /sites/{site-id}/getByPath(path='{path}')/lists — sites.getByPath.ListLists: Get lists from sites
- POST /sites/{site-id}/getByPath(path='{path}')/lists — sites.getByPath.CreateLists: Create new navigation property to lists for sites

## sites.onenote
- GET /sites/{site-id}/getByPath(path='{path}')/onenote — sites.getByPath.GetOnenote: Get onenote from sites
- PATCH /sites/{site-id}/getByPath(path='{path}')/onenote — sites.getByPath.UpdateOnenote: Update the navigation property onenote in sites
- DELETE /sites/{site-id}/getByPath(path='{path}')/onenote — sites.getByPath.DeleteOnenote: Delete navigation property onenote for sites
- GET /sites/{site-id}/onenote — sites.GetOnenote: Get onenote from sites
- PATCH /sites/{site-id}/onenote — sites.UpdateOnenote: Update the navigation property onenote in sites
- DELETE /sites/{site-id}/onenote — sites.DeleteOnenote: Delete navigation property onenote for sites
- GET /sites/{site-id}/onenote/notebooks — sites.onenote.ListNotebooks: Get notebooks from sites
- POST /sites/{site-id}/onenote/notebooks — sites.onenote.CreateNotebooks: Create new navigation property to notebooks for sites
- GET /sites/{site-id}/onenote/notebooks/{notebook-id} — sites.onenote.GetNotebooks: Get notebooks from sites
- PATCH /sites/{site-id}/onenote/notebooks/{notebook-id} — sites.onenote.UpdateNotebooks: Update the navigation property notebooks in sites
- DELETE /sites/{site-id}/onenote/notebooks/{notebook-id} — sites.onenote.DeleteNotebooks: Delete navigation property notebooks for sites
- GET /sites/{site-id}/onenote/notebooks/$count — sites.onenote.notebooks.GetCount-fb6b: Get the number of the resource
- POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl — sites.site.onenote.notebooks.getNotebookFromWebUrl: Invoke action getNotebookFromWebUrl
- GET /sites/{site-id}/onenote/notebooks/getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks}) — sites.site.onenote.notebooks.getRecentNotebooks: Invoke function getRecentNotebooks
- GET /sites/{site-id}/onenote/operations — sites.onenote.ListOperations: Get operations from sites
- POST /sites/{site-id}/onenote/operations — sites.onenote.CreateOperations: Create new navigation property to operations for sites
- GET /sites/{site-id}/onenote/operations/{onenoteOperation-id} — sites.onenote.GetOperations: Get operations from sites
- PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id} — sites.onenote.UpdateOperations: Update the navigation property operations in sites
- DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id} — sites.onenote.DeleteOperations: Delete navigation property operations for sites
- GET /sites/{site-id}/onenote/operations/$count — sites.onenote.operations.GetCount-eadd: Get the number of the resource
- GET /sites/{site-id}/onenote/pages — sites.onenote.ListPages: Get pages from sites
- POST /sites/{site-id}/onenote/pages — sites.onenote.CreatePages: Create new navigation property to pages for sites
- GET /sites/{site-id}/onenote/pages/{onenotePage-id} — sites.onenote.GetPages: Get pages from sites
- PATCH /sites/{site-id}/onenote/pages/{onenotePage-id} — sites.onenote.UpdatePages: Update the navigation property pages in sites
- DELETE /sites/{site-id}/onenote/pages/{onenotePage-id} — sites.onenote.DeletePages: Delete navigation property pages for sites
- GET /sites/{site-id}/onenote/pages/$count — sites.onenote.pages.GetCount-bfb1: Get the number of the resource
- GET /sites/{site-id}/onenote/resources — sites.onenote.ListResources: Get resources from sites
- POST /sites/{site-id}/onenote/resources — sites.onenote.CreateResources: Create new navigation property to resources for sites
- GET /sites/{site-id}/onenote/resources/{onenoteResource-id} — sites.onenote.GetResources: Get resources from sites
- PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id} — sites.onenote.UpdateResources: Update the navigation property resources in sites
- DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id} — sites.onenote.DeleteResources: Delete navigation property resources for sites
- GET /sites/{site-id}/onenote/resources/$count — sites.onenote.resources.GetCount-476e: Get the number of the resource
- GET /sites/{site-id}/onenote/sectionGroups — sites.onenote.ListSectionGroups: Get sectionGroups from sites
- POST /sites/{site-id}/onenote/sectionGroups — sites.onenote.CreateSectionGroups: Create new navigation property to sectionGroups for sites
- GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id} — sites.onenote.GetSectionGroups: Get sectionGroups from sites
- PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id} — sites.onenote.UpdateSectionGroups: Update the navigation property sectionGroups in sites
- DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id} — sites.onenote.DeleteSectionGroups: Delete navigation property sectionGroups for sites
- GET /sites/{site-id}/onenote/sectionGroups/$count — sites.onenote.sectionGroups.GetCount-2fdb: Get the number of the resource
- GET /sites/{site-id}/onenote/sections — sites.onenote.ListSections: Get sections from sites
- POST /sites/{site-id}/onenote/sections — sites.onenote.CreateSections: Create new navigation property to sections for sites
- GET /sites/{site-id}/onenote/sections/{onenoteSection-id} — sites.onenote.GetSections: Get sections from sites
- PATCH /sites/{site-id}/onenote/sections/{onenoteSection-id} — sites.onenote.UpdateSections: Update the navigation property sections in sites
- DELETE /sites/{site-id}/onenote/sections/{onenoteSection-id} — sites.onenote.DeleteSections: Delete navigation property sections for sites
- GET /sites/{site-id}/onenote/sections/$count — sites.onenote.sections.GetCount-5061: Get the number of the resource

## sites.permission
- GET /sites/{site-id}/getByPath(path='{path}')/permissions — sites.getByPath.ListPermissions: Get permissions from sites
- POST /sites/{site-id}/getByPath(path='{path}')/permissions — sites.getByPath.CreatePermissions: Create new navigation property to permissions for sites
- GET /sites/{site-id}/permissions — sites.ListPermissions: List permissions
- POST /sites/{site-id}/permissions — sites.CreatePermissions: Create permission
- GET /sites/{site-id}/permissions/{permission-id} — sites.GetPermissions: Get permission
- PATCH /sites/{site-id}/permissions/{permission-id} — sites.UpdatePermissions: Update permission
- DELETE /sites/{site-id}/permissions/{permission-id} — sites.DeletePermissions: Delete permission
- POST /sites/{site-id}/permissions/{permission-id}/grant — sites.site.permissions.permission.grant: Invoke action grant
- GET /sites/{site-id}/permissions/$count — sites.permissions.GetCount-511e: Get the number of the resource

## sites.richLongRunningOperation
- GET /sites/{site-id}/getByPath(path='{path}')/operations — sites.getByPath.ListOperations: Get operations from sites
- POST /sites/{site-id}/getByPath(path='{path}')/operations — sites.getByPath.CreateOperations: Create new navigation property to operations for sites
- GET /sites/{site-id}/operations — sites.ListOperations: List operations on a site
- POST /sites/{site-id}/operations — sites.CreateOperations: Create new navigation property to operations for sites
- GET /sites/{site-id}/operations/{richLongRunningOperation-id} — sites.GetOperations: Get richLongRunningOperation
- PATCH /sites/{site-id}/operations/{richLongRunningOperation-id} — sites.UpdateOperations: Update the navigation property operations in sites
- DELETE /sites/{site-id}/operations/{richLongRunningOperation-id} — sites.DeleteOperations: Delete navigation property operations for sites
- GET /sites/{site-id}/operations/$count — sites.operations.GetCount-71b0: Get the number of the resource

## sites.site
- GET /sites — sites.site.ListSite: List sites
- GET /sites/{site-id} — sites.site.GetSite: Get a site resource
- PATCH /sites/{site-id} — sites.site.UpdateSite: Update entity in sites
- GET /sites/{site-id}/getByPath(path='{path}')/sites — sites.getByPath.ListSites: Get sites from sites
- GET /sites/{site-id}/sites — sites.ListSites: List subsites for a site
- GET /sites/{site-id}/sites/{site-id1} — sites.GetSites: Get sites from sites
- GET /sites/{site-id}/sites/$count — sites.sites.GetCount-f499: Get the number of the resource
- GET /sites/$count — sites.GetCount-6254: Get the number of the resource

## sites.site.Actions
- POST /sites/add — sites.add: Invoke action add
- POST /sites/remove — sites.remove: Invoke action remove

## sites.site.Functions
- GET /sites/{site-id}/getActivitiesByInterval() — sites.site.getActivitiesByInterval-4c35: Invoke function getActivitiesByInterval
- GET /sites/{site-id}/getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}') — sites.site.getActivitiesByInterval-ad27: Invoke function getActivitiesByInterval
- GET /sites/{site-id}/getApplicableContentTypesForList(listId='{listId}') — sites.site.getApplicableContentTypesForList: Invoke function getApplicableContentTypesForList
- GET /sites/{site-id}/getByPath(path='{path}') — sites.site.getByPath: Invoke function getByPath
- GET /sites/{site-id}/getByPath(path='{path}')/getActivitiesByInterval() — sites.site.getByPath.getActivitiesByInterval-4c35: Invoke function getActivitiesByInterval
- GET /sites/{site-id}/getByPath(path='{path}')/getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}') — sites.site.getByPath.getActivitiesByInterval-ad27: Invoke function getActivitiesByInterval
- GET /sites/{site-id}/getByPath(path='{path}')/getApplicableContentTypesForList(listId='{listId}') — sites.site.getByPath.getApplicableContentTypesForList: Invoke function getApplicableContentTypesForList
- GET /sites/delta() — sites.delta: Invoke function delta
- GET /sites/getAllSites() — sites.getAllSites: Invoke function getAllSites

## sites.store
- GET /sites/{site-id}/getByPath(path='{path}')/termStore — sites.getByPath.GetTermStore: Get termStore from sites
- PATCH /sites/{site-id}/getByPath(path='{path}')/termStore — sites.getByPath.UpdateTermStore: Update the navigation property termStore in sites
- DELETE /sites/{site-id}/getByPath(path='{path}')/termStore — sites.getByPath.DeleteTermStore: Delete navigation property termStore for sites
- GET /sites/{site-id}/getByPath(path='{path}')/termStores — sites.getByPath.ListTermStores: Get termStores from sites
- POST /sites/{site-id}/getByPath(path='{path}')/termStores — sites.getByPath.CreateTermStores: Create new navigation property to termStores for sites
- GET /sites/{site-id}/termStore — sites.GetTermStore: Get store
- PATCH /sites/{site-id}/termStore — sites.UpdateTermStore: Update store
- DELETE /sites/{site-id}/termStore — sites.DeleteTermStore: Delete navigation property termStore for sites
- GET /sites/{site-id}/termStore/groups — sites.termStore.ListGroups: List termStore groups
- POST /sites/{site-id}/termStore/groups — sites.termStore.CreateGroups: Create termStore group
- GET /sites/{site-id}/termStore/groups/{group-id} — sites.termStore.GetGroups: Get group
- PATCH /sites/{site-id}/termStore/groups/{group-id} — sites.termStore.UpdateGroups: Update the navigation property groups in sites
- DELETE /sites/{site-id}/termStore/groups/{group-id} — sites.termStore.DeleteGroups: Delete group
- GET /sites/{site-id}/termStore/groups/$count — sites.termStore.groups.GetCount-f00a: Get the number of the resource
- GET /sites/{site-id}/termStore/sets — sites.termStore.ListSets: Get set
- POST /sites/{site-id}/termStore/sets — sites.termStore.CreateSets: Create termStore set
- GET /sites/{site-id}/termStore/sets/{set-id} — sites.termStore.GetSets: Get set
- PATCH /sites/{site-id}/termStore/sets/{set-id} — sites.termStore.UpdateSets: Update set
- DELETE /sites/{site-id}/termStore/sets/{set-id} — sites.termStore.DeleteSets: Delete set
- GET /sites/{site-id}/termStore/sets/$count — sites.termStore.sets.GetCount-dbcc: Get the number of the resource
- GET /sites/{site-id}/termStores — sites.ListTermStores: Get termStores from sites
- POST /sites/{site-id}/termStores — sites.CreateTermStores: Create new navigation property to termStores for sites
- GET /sites/{site-id}/termStores/{store-id} — sites.GetTermStores: Get termStores from sites
- PATCH /sites/{site-id}/termStores/{store-id} — sites.UpdateTermStores: Update the navigation property termStores in sites
- DELETE /sites/{site-id}/termStores/{store-id} — sites.DeleteTermStores: Delete navigation property termStores for sites
- GET /sites/{site-id}/termStores/{store-id}/groups — sites.termStores.ListGroups: Get groups from sites
- POST /sites/{site-id}/termStores/{store-id}/groups — sites.termStores.CreateGroups: Create new navigation property to groups for sites
- GET /sites/{site-id}/termStores/{store-id}/sets — sites.termStores.ListSets: Get sets from sites
- POST /sites/{site-id}/termStores/{store-id}/sets — sites.termStores.CreateSets: Create new navigation property to sets for sites
- GET /sites/{site-id}/termStores/$count — sites.termStores.GetCount-00cb: Get the number of the resource

## sites.user
- GET /sites/{site-id}/createdByUser — sites.GetCreatedByUser: Get createdByUser from sites
- GET /sites/{site-id}/createdByUser/mailboxSettings — sites.createdByUser.GetMailboxSettings: Get mailboxSettings property value
- PATCH /sites/{site-id}/createdByUser/mailboxSettings — sites.createdByUser.UpdateMailboxSettings: Update property mailboxSettings value.
- GET /sites/{site-id}/createdByUser/serviceProvisioningErrors — sites.createdByUser.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /sites/{site-id}/createdByUser/serviceProvisioningErrors/$count — sites.createdByUser.ServiceProvisioningErrors.GetCount-c398: Get the number of the resource
- GET /sites/{site-id}/lastModifiedByUser — sites.GetLastModifiedByUser: Get lastModifiedByUser from sites
- GET /sites/{site-id}/lastModifiedByUser/mailboxSettings — sites.lastModifiedByUser.GetMailboxSettings: Get mailboxSettings property value
- PATCH /sites/{site-id}/lastModifiedByUser/mailboxSettings — sites.lastModifiedByUser.UpdateMailboxSettings: Update property mailboxSettings value.
- GET /sites/{site-id}/lastModifiedByUser/serviceProvisioningErrors — sites.lastModifiedByUser.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /sites/{site-id}/lastModifiedByUser/serviceProvisioningErrors/$count — sites.lastModifiedByUser.ServiceProvisioningErrors.GetCount-4573: Get the number of the resource
- GET /sites/{site-id}/getByPath(path='{path}')/createdByUser — sites.getByPath.GetCreatedByUser: Get createdByUser from sites
- GET /sites/{site-id}/getByPath(path='{path}')/lastModifiedByUser — sites.getByPath.GetLastModifiedByUser: Get lastModifiedByUser from sites

## teams.channel
- GET /teams/{team-id}/allChannels — teams.ListAllChannels: List allChannels
- GET /teams/{team-id}/allChannels/{channel-id} — teams.GetAllChannels: Get allChannels from teams
- GET /teams/{team-id}/allChannels/$count — teams.allChannels.GetCount-f86a: Get the number of the resource
- GET /teams/{team-id}/channels — teams.ListChannels: List channels
- POST /teams/{team-id}/channels — teams.CreateChannels: Create channel
- GET /teams/{team-id}/channels/{channel-id} — teams.GetChannels: Get channel
- PATCH /teams/{team-id}/channels/{channel-id} — teams.UpdateChannels: Patch channel
- DELETE /teams/{team-id}/channels/{channel-id} — teams.DeleteChannels: Delete channel
- GET /teams/{team-id}/channels/{channel-id}/allMembers — teams.channels.ListAllMembers: List allMembers
- POST /teams/{team-id}/channels/{channel-id}/allMembers — teams.channels.CreateAllMembers: Create new navigation property to allMembers for teams
- GET /teams/{team-id}/channels/{channel-id}/enabledApps — teams.channels.ListEnabledApps: List enabledApps
- GET /teams/{team-id}/channels/{channel-id}/filesFolder — teams.channels.GetFilesFolder: Get filesFolder
- GET /teams/{team-id}/channels/{channel-id}/members — teams.channels.ListMembers: List members of a channel
- POST /teams/{team-id}/channels/{channel-id}/members — teams.channels.CreateMembers: Add member to channel
- GET /teams/{team-id}/channels/{channel-id}/messages — teams.channels.ListMessages: List channel messages
- POST /teams/{team-id}/channels/{channel-id}/messages — teams.channels.CreateMessages: Send chatMessage in channel
- POST /teams/{team-id}/channels/{channel-id}/archive — teams.team.channels.channel.archive: Invoke action archive
- POST /teams/{team-id}/channels/{channel-id}/completeMigration — teams.team.channels.channel.completeMigration: Invoke action completeMigration
- GET /teams/{team-id}/channels/{channel-id}/doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName') — teams.team.channels.channel.doesUserHaveAccess: Invoke function doesUserHaveAccess
- POST /teams/{team-id}/channels/{channel-id}/provisionEmail — teams.team.channels.channel.provisionEmail: Invoke action provisionEmail
- POST /teams/{team-id}/channels/{channel-id}/removeEmail — teams.team.channels.channel.removeEmail: Invoke action removeEmail
- POST /teams/{team-id}/channels/{channel-id}/startMigration — teams.team.channels.channel.startMigration: Invoke action startMigration
- POST /teams/{team-id}/channels/{channel-id}/unarchive — teams.team.channels.channel.unarchive: Invoke action unarchive
- GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams — teams.channels.ListSharedWithTeams: List sharedWithChannelTeamInfo
- POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams — teams.channels.CreateSharedWithTeams: Create new navigation property to sharedWithTeams for teams
- GET /teams/{team-id}/channels/{channel-id}/tabs — teams.channels.ListTabs: List tabs in channel
- POST /teams/{team-id}/channels/{channel-id}/tabs — teams.channels.CreateTabs: Add tab to channel
- GET /teams/{team-id}/channels/$count — teams.channels.GetCount-1a82: Get the number of the resource
- GET /teams/{team-id}/channels/getAllMessages() — teams.team.channels.getAllMessages: Invoke function getAllMessages
- GET /teams/{team-id}/channels/getAllRetainedMessages() — teams.team.channels.getAllRetainedMessages: Invoke function getAllRetainedMessages
- GET /teams/{team-id}/incomingChannels — teams.ListIncomingChannels: List incomingChannels
- GET /teams/{team-id}/incomingChannels/{channel-id} — teams.GetIncomingChannels: Get incomingChannels from teams
- GET /teams/{team-id}/incomingChannels/$count — teams.incomingChannels.GetCount-728b: Get the number of the resource
- GET /teams/{team-id}/primaryChannel — teams.GetPrimaryChannel: Get primaryChannel
- PATCH /teams/{team-id}/primaryChannel — teams.UpdatePrimaryChannel: Update the navigation property primaryChannel in teams
- DELETE /teams/{team-id}/primaryChannel — teams.DeletePrimaryChannel: Delete navigation property primaryChannel for teams
- GET /teams/{team-id}/primaryChannel/allMembers — teams.primaryChannel.ListAllMembers: Get allMembers from teams
- POST /teams/{team-id}/primaryChannel/allMembers — teams.primaryChannel.CreateAllMembers: Create new navigation property to allMembers for teams
- GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id} — teams.primaryChannel.GetAllMembers: Get allMembers from teams
- PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id} — teams.primaryChannel.UpdateAllMembers: Update the navigation property allMembers in teams
- DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id} — teams.primaryChannel.DeleteAllMembers: Delete navigation property allMembers for teams
- GET /teams/{team-id}/primaryChannel/allMembers/$count — teams.primaryChannel.allMembers.GetCount-4cdd: Get the number of the resource
- POST /teams/{team-id}/primaryChannel/allMembers/add — teams.team.primaryChannel.allMembers.add: Invoke action add
- POST /teams/{team-id}/primaryChannel/allMembers/remove — teams.team.primaryChannel.allMembers.remove: Invoke action remove
- GET /teams/{team-id}/primaryChannel/enabledApps — teams.primaryChannel.ListEnabledApps: Get enabledApps from teams
- GET /teams/{team-id}/primaryChannel/enabledApps/{teamsApp-id} — teams.primaryChannel.GetEnabledApps: Get enabledApps from teams
- GET /teams/{team-id}/primaryChannel/enabledApps/$count — teams.primaryChannel.enabledApps.GetCount-412b: Get the number of the resource
- GET /teams/{team-id}/primaryChannel/filesFolder — teams.primaryChannel.GetFilesFolder: Get filesFolder from teams
- GET /teams/{team-id}/primaryChannel/filesFolder/content — teams.primaryChannel.GetFilesFolderContent: Get content for the navigation property filesFolder from teams
- PUT /teams/{team-id}/primaryChannel/filesFolder/content — teams.primaryChannel.UpdateFilesFolderContent: Update content for the navigation property filesFolder in teams
- DELETE /teams/{team-id}/primaryChannel/filesFolder/content — teams.primaryChannel.DeleteFilesFolderContent: Delete content for the navigation property filesFolder in teams
- GET /teams/{team-id}/primaryChannel/members — teams.primaryChannel.ListMembers: Get members from teams
- POST /teams/{team-id}/primaryChannel/members — teams.primaryChannel.CreateMembers: Create new navigation property to members for teams
- GET /teams/{team-id}/primaryChannel/members/{conversationMember-id} — teams.primaryChannel.GetMembers: Get members from teams
- PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id} — teams.primaryChannel.UpdateMembers: Update the navigation property members in teams
- DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id} — teams.primaryChannel.DeleteMembers: Delete navigation property members for teams
- GET /teams/{team-id}/primaryChannel/members/$count — teams.primaryChannel.members.GetCount-8411: Get the number of the resource
- POST /teams/{team-id}/primaryChannel/members/add — teams.team.primaryChannel.members.add: Invoke action add
- POST /teams/{team-id}/primaryChannel/members/remove — teams.team.primaryChannel.members.remove: Invoke action remove
- GET /teams/{team-id}/primaryChannel/messages — teams.primaryChannel.ListMessages: Get messages from teams
- POST /teams/{team-id}/primaryChannel/messages — teams.primaryChannel.CreateMessages: Create new navigation property to messages for teams
- GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id} — teams.primaryChannel.GetMessages: Get messages from teams
- PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id} — teams.primaryChannel.UpdateMessages: Update the navigation property messages in teams
- DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id} — teams.primaryChannel.DeleteMessages: Delete navigation property messages for teams
- GET /teams/{team-id}/primaryChannel/messages/$count — teams.primaryChannel.messages.GetCount-d90b: Get the number of the resource
- GET /teams/{team-id}/primaryChannel/messages/delta() — teams.team.primaryChannel.messages.delta: Invoke function delta
- POST /teams/{team-id}/primaryChannel/messages/replyWithQuote — teams.team.primaryChannel.messages.replyWithQuote: Invoke action replyWithQuote
- POST /teams/{team-id}/primaryChannel/archive — teams.team.primaryChannel.archive: Invoke action archive
- POST /teams/{team-id}/primaryChannel/completeMigration — teams.team.primaryChannel.completeMigration: Invoke action completeMigration
- GET /teams/{team-id}/primaryChannel/doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName') — teams.team.primaryChannel.doesUserHaveAccess: Invoke function doesUserHaveAccess
- POST /teams/{team-id}/primaryChannel/provisionEmail — teams.team.primaryChannel.provisionEmail: Invoke action provisionEmail
- POST /teams/{team-id}/primaryChannel/removeEmail — teams.team.primaryChannel.removeEmail: Invoke action removeEmail
- POST /teams/{team-id}/primaryChannel/startMigration — teams.team.primaryChannel.startMigration: Invoke action startMigration
- POST /teams/{team-id}/primaryChannel/unarchive — teams.team.primaryChannel.unarchive: Invoke action unarchive
- GET /teams/{team-id}/primaryChannel/sharedWithTeams — teams.primaryChannel.ListSharedWithTeams: Get sharedWithTeams from teams
- POST /teams/{team-id}/primaryChannel/sharedWithTeams — teams.primaryChannel.CreateSharedWithTeams: Create new navigation property to sharedWithTeams for teams
- GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id} — teams.primaryChannel.GetSharedWithTeams: Get sharedWithTeams from teams
- PATCH /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id} — teams.primaryChannel.UpdateSharedWithTeams: Update the navigation property sharedWithTeams in teams
- DELETE /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id} — teams.primaryChannel.DeleteSharedWithTeams: Delete navigation property sharedWithTeams for teams
- GET /teams/{team-id}/primaryChannel/sharedWithTeams/$count — teams.primaryChannel.sharedWithTeams.GetCount-9fea: Get the number of the resource
- GET /teams/{team-id}/primaryChannel/tabs — teams.primaryChannel.ListTabs: Get tabs from teams
- POST /teams/{team-id}/primaryChannel/tabs — teams.primaryChannel.CreateTabs: Create new navigation property to tabs for teams
- GET /teams/{team-id}/primaryChannel/tabs/{teamsTab-id} — teams.primaryChannel.GetTabs: Get tabs from teams
- PATCH /teams/{team-id}/primaryChannel/tabs/{teamsTab-id} — teams.primaryChannel.UpdateTabs: Update the navigation property tabs in teams
- DELETE /teams/{team-id}/primaryChannel/tabs/{teamsTab-id} — teams.primaryChannel.DeleteTabs: Delete navigation property tabs for teams
- GET /teams/{team-id}/primaryChannel/tabs/$count — teams.primaryChannel.tabs.GetCount-8cf3: Get the number of the resource

## teams.conversationMember
- GET /teams/{team-id}/members — teams.ListMembers: List members of team
- POST /teams/{team-id}/members — teams.CreateMembers: Add member to team
- GET /teams/{team-id}/members/{conversationMember-id} — teams.GetMembers: Get member of team
- PATCH /teams/{team-id}/members/{conversationMember-id} — teams.UpdateMembers: Update member in team
- DELETE /teams/{team-id}/members/{conversationMember-id} — teams.DeleteMembers: Remove member from team
- GET /teams/{team-id}/members/$count — teams.members.GetCount-717b: Get the number of the resource
- POST /teams/{team-id}/members/add — teams.team.members.add: Invoke action add
- POST /teams/{team-id}/members/remove — teams.team.members.remove: Invoke action remove

## teams.group
- GET /teams/{team-id}/group — teams.GetGroup: Get group from teams
- GET /teams/{team-id}/group/serviceProvisioningErrors — teams.group.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /teams/{team-id}/group/serviceProvisioningErrors/$count — teams.group.ServiceProvisioningErrors.GetCount-f5fe: Get the number of the resource

## teams.profilePhoto
- GET /teams/{team-id}/photo — teams.GetPhoto: Get profilePhoto
- PATCH /teams/{team-id}/photo — teams.UpdatePhoto: Update profilePhoto
- GET /teams/{team-id}/photo/$value — teams.GetPhotoContent: Get profilePhoto
- PUT /teams/{team-id}/photo/$value — teams.UpdatePhotoContent: Update profilePhoto
- DELETE /teams/{team-id}/photo/$value — teams.DeletePhotoContent: Delete media content for the navigation property photo in teams

## teams.resourceSpecificPermissionGrant
- GET /teams/{team-id}/permissionGrants — teams.ListPermissionGrants: List permissionGrants of a team
- POST /teams/{team-id}/permissionGrants — teams.CreatePermissionGrants: Create new navigation property to permissionGrants for teams
- GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — teams.GetPermissionGrants: Get permissionGrants from teams
- PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — teams.UpdatePermissionGrants: Update the navigation property permissionGrants in teams
- DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — teams.DeletePermissionGrants: Delete navigation property permissionGrants for teams
- GET /teams/{team-id}/permissionGrants/$count — teams.permissionGrants.GetCount-34e2: Get the number of the resource

## teams.schedule
- GET /teams/{team-id}/schedule — teams.GetSchedule: Get schedule
- PUT /teams/{team-id}/schedule — teams.SetSchedule: Create or replace schedule
- DELETE /teams/{team-id}/schedule — teams.DeleteSchedule: Delete navigation property schedule for teams
- GET /teams/{team-id}/schedule/dayNotes — teams.schedule.ListDayNotes: Get dayNotes from teams
- POST /teams/{team-id}/schedule/dayNotes — teams.schedule.CreateDayNotes: Create new navigation property to dayNotes for teams
- GET /teams/{team-id}/schedule/dayNotes/{dayNote-id} — teams.schedule.GetDayNotes: Get dayNotes from teams
- PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id} — teams.schedule.UpdateDayNotes: Update the navigation property dayNotes in teams
- DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id} — teams.schedule.DeleteDayNotes: Delete navigation property dayNotes for teams
- GET /teams/{team-id}/schedule/dayNotes/$count — teams.schedule.dayNotes.GetCount-2cfa: Get the number of the resource
- POST /teams/{team-id}/schedule/share — teams.team.schedule.share: Invoke action share
- GET /teams/{team-id}/schedule/offerShiftRequests — teams.schedule.ListOfferShiftRequests: List offerShiftRequest
- POST /teams/{team-id}/schedule/offerShiftRequests — teams.schedule.CreateOfferShiftRequests: Create offerShiftRequest
- GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id} — teams.schedule.GetOfferShiftRequests: Get offerShiftRequest
- PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id} — teams.schedule.UpdateOfferShiftRequests: Update the navigation property offerShiftRequests in teams
- DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id} — teams.schedule.DeleteOfferShiftRequests: Delete navigation property offerShiftRequests for teams
- GET /teams/{team-id}/schedule/offerShiftRequests/$count — teams.schedule.offerShiftRequests.GetCount-9c52: Get the number of the resource
- GET /teams/{team-id}/schedule/openShiftChangeRequests — teams.schedule.ListOpenShiftChangeRequests: List openShiftChangeRequests
- POST /teams/{team-id}/schedule/openShiftChangeRequests — teams.schedule.CreateOpenShiftChangeRequests: Create openShiftChangeRequest
- GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id} — teams.schedule.GetOpenShiftChangeRequests: Get openShiftChangeRequest
- PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id} — teams.schedule.UpdateOpenShiftChangeRequests: Update the navigation property openShiftChangeRequests in teams
- DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id} — teams.schedule.DeleteOpenShiftChangeRequests: Delete navigation property openShiftChangeRequests for teams
- GET /teams/{team-id}/schedule/openShiftChangeRequests/$count — teams.schedule.openShiftChangeRequests.GetCount-179b: Get the number of the resource
- GET /teams/{team-id}/schedule/openShifts — teams.schedule.ListOpenShifts: List openShifts
- POST /teams/{team-id}/schedule/openShifts — teams.schedule.CreateOpenShifts: Create openShift
- GET /teams/{team-id}/schedule/openShifts/{openShift-id} — teams.schedule.GetOpenShifts: Get openShift
- PATCH /teams/{team-id}/schedule/openShifts/{openShift-id} — teams.schedule.UpdateOpenShifts: Update openShift
- DELETE /teams/{team-id}/schedule/openShifts/{openShift-id} — teams.schedule.DeleteOpenShifts: Delete openShift
- GET /teams/{team-id}/schedule/openShifts/$count — teams.schedule.openShifts.GetCount-bdbd: Get the number of the resource
- GET /teams/{team-id}/schedule/schedulingGroups — teams.schedule.ListSchedulingGroups: List scheduleGroups
- POST /teams/{team-id}/schedule/schedulingGroups — teams.schedule.CreateSchedulingGroups: Create schedulingGroup
- GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id} — teams.schedule.GetSchedulingGroups: Get schedulingGroup
- PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id} — teams.schedule.UpdateSchedulingGroups: Replace schedulingGroup
- DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id} — teams.schedule.DeleteSchedulingGroups: Delete schedulingGroup
- GET /teams/{team-id}/schedule/schedulingGroups/$count — teams.schedule.schedulingGroups.GetCount-256b: Get the number of the resource
- GET /teams/{team-id}/schedule/shifts — teams.schedule.ListShifts: List shifts
- POST /teams/{team-id}/schedule/shifts — teams.schedule.CreateShifts: Create shift
- GET /teams/{team-id}/schedule/shifts/{shift-id} — teams.schedule.GetShifts: Get shift
- PATCH /teams/{team-id}/schedule/shifts/{shift-id} — teams.schedule.UpdateShifts: Replace shift
- DELETE /teams/{team-id}/schedule/shifts/{shift-id} — teams.schedule.DeleteShifts: Delete shift
- GET /teams/{team-id}/schedule/shifts/$count — teams.schedule.shifts.GetCount-97aa: Get the number of the resource
- GET /teams/{team-id}/schedule/swapShiftsChangeRequests — teams.schedule.ListSwapShiftsChangeRequests: List swapShiftsChangeRequest
- POST /teams/{team-id}/schedule/swapShiftsChangeRequests — teams.schedule.CreateSwapShiftsChangeRequests: Create swapShiftsChangeRequest
- GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id} — teams.schedule.GetSwapShiftsChangeRequests: Get swapShiftsChangeRequest
- PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id} — teams.schedule.UpdateSwapShiftsChangeRequests: Update the navigation property swapShiftsChangeRequests in teams
- DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id} — teams.schedule.DeleteSwapShiftsChangeRequests: Delete navigation property swapShiftsChangeRequests for teams
- GET /teams/{team-id}/schedule/swapShiftsChangeRequests/$count — teams.schedule.swapShiftsChangeRequests.GetCount-9390: Get the number of the resource
- GET /teams/{team-id}/schedule/timeCards — teams.schedule.ListTimeCards: List timeCard
- POST /teams/{team-id}/schedule/timeCards — teams.schedule.CreateTimeCards: Create timeCard
- GET /teams/{team-id}/schedule/timeCards/{timeCard-id} — teams.schedule.GetTimeCards: Get timeCards from teams
- PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id} — teams.schedule.UpdateTimeCards: Update the navigation property timeCards in teams
- DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id} — teams.schedule.DeleteTimeCards: Delete timeCard
- GET /teams/{team-id}/schedule/timeCards/$count — teams.schedule.timeCards.GetCount-2ea4: Get the number of the resource
- POST /teams/{team-id}/schedule/timeCards/clockIn — teams.team.schedule.timeCards.clockIn: Invoke action clockIn
- GET /teams/{team-id}/schedule/timeOffReasons — teams.schedule.ListTimeOffReasons: List timeOffReasons
- POST /teams/{team-id}/schedule/timeOffReasons — teams.schedule.CreateTimeOffReasons: Create timeOffReason
- GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id} — teams.schedule.GetTimeOffReasons: Get timeOffReason
- PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id} — teams.schedule.UpdateTimeOffReasons: Replace timeOffReason
- DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id} — teams.schedule.DeleteTimeOffReasons: Delete timeOffReason
- GET /teams/{team-id}/schedule/timeOffReasons/$count — teams.schedule.timeOffReasons.GetCount-4024: Get the number of the resource
- GET /teams/{team-id}/schedule/timeOffRequests — teams.schedule.ListTimeOffRequests: List timeOffRequest
- POST /teams/{team-id}/schedule/timeOffRequests — teams.schedule.CreateTimeOffRequests: Create timeOffRequest
- GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id} — teams.schedule.GetTimeOffRequests: Get timeOffRequest
- PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id} — teams.schedule.UpdateTimeOffRequests: Update the navigation property timeOffRequests in teams
- DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id} — teams.schedule.DeleteTimeOffRequests: Delete timeOffRequest
- GET /teams/{team-id}/schedule/timeOffRequests/$count — teams.schedule.timeOffRequests.GetCount-9411: Get the number of the resource
- GET /teams/{team-id}/schedule/timesOff — teams.schedule.ListTimesOff: List timesOff
- POST /teams/{team-id}/schedule/timesOff — teams.schedule.CreateTimesOff: Create timeOff
- GET /teams/{team-id}/schedule/timesOff/{timeOff-id} — teams.schedule.GetTimesOff: Get timeOff
- PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id} — teams.schedule.UpdateTimesOff: Replace timeOff
- DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id} — teams.schedule.DeleteTimesOff: Delete timeOff
- GET /teams/{team-id}/schedule/timesOff/$count — teams.schedule.timesOff.GetCount-16b4: Get the number of the resource

## teams.team
- GET /teams — teams.team.ListTeam: List teams
- POST /teams — teams.team.CreateTeam: Create team
- GET /teams/{team-id} — teams.team.GetTeam: Get team
- PATCH /teams/{team-id} — teams.team.UpdateTeam: Update team
- DELETE /teams/{team-id} — teams.team.DeleteTeam: Delete entity from teams
- GET /teams/$count — teams.GetCount-ff25: Get the number of the resource

## teams.team.Actions
- POST /teams/{team-id}/archive — teams.team.archive: Invoke action archive
- POST /teams/{team-id}/clone — teams.team.clone: Invoke action clone
- POST /teams/{team-id}/completeMigration — teams.team.completeMigration: Invoke action completeMigration
- POST /teams/{team-id}/sendActivityNotification — teams.team.sendActivityNotification: Invoke action sendActivityNotification
- POST /teams/{team-id}/unarchive — teams.team.unarchive: Invoke action unarchive

## teams.team.Functions
- GET /teams/getAllMessages() — teams.getAllMessages: Invoke function getAllMessages

## teams.teamsAppInstallation
- GET /teams/{team-id}/installedApps — teams.ListInstalledApps: List apps in team
- POST /teams/{team-id}/installedApps — teams.CreateInstalledApps: Add app to team
- GET /teams/{team-id}/installedApps/{teamsAppInstallation-id} — teams.GetInstalledApps: Get installed app in team
- PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id} — teams.UpdateInstalledApps: Update the navigation property installedApps in teams
- DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id} — teams.DeleteInstalledApps: Remove app from team
- POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade — teams.team.installedApps.teamsAppInstallation.upgrade: Invoke action upgrade
- GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp — teams.installedApps.GetTeamsApp: Get teamsApp from teams
- GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition — teams.installedApps.GetTeamsAppDefinition: Get teamsAppDefinition from teams
- GET /teams/{team-id}/installedApps/$count — teams.installedApps.GetCount-d47b: Get the number of the resource

## teams.teamsAsyncOperation
- GET /teams/{team-id}/operations — teams.ListOperations: Get operations from teams
- POST /teams/{team-id}/operations — teams.CreateOperations: Create new navigation property to operations for teams
- GET /teams/{team-id}/operations/{teamsAsyncOperation-id} — teams.GetOperations: Get operations from teams
- PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id} — teams.UpdateOperations: Update the navigation property operations in teams
- DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id} — teams.DeleteOperations: Delete navigation property operations for teams
- GET /teams/{team-id}/operations/$count — teams.operations.GetCount-66af: Get the number of the resource

## teams.teamsTemplate
- GET /teams/{team-id}/template — teams.GetTemplate: Get template from teams

## teams.teamworkTag
- GET /teams/{team-id}/tags — teams.ListTags: List teamworkTags
- POST /teams/{team-id}/tags — teams.CreateTags: Create teamworkTag
- GET /teams/{team-id}/tags/{teamworkTag-id} — teams.GetTags: Get teamworkTag
- PATCH /teams/{team-id}/tags/{teamworkTag-id} — teams.UpdateTags: Update teamworkTag
- DELETE /teams/{team-id}/tags/{teamworkTag-id} — teams.DeleteTags: Delete teamworkTag
- GET /teams/{team-id}/tags/{teamworkTag-id}/members — teams.tags.ListMembers: List members in a teamworkTag
- POST /teams/{team-id}/tags/{teamworkTag-id}/members — teams.tags.CreateMembers: Create teamworkTagMember
- GET /teams/{team-id}/tags/$count — teams.tags.GetCount-db00: Get the number of the resource

## teamwork.deletedChat
- GET /teamwork/deletedChats — teamwork.ListDeletedChats: Get deletedChat
- POST /teamwork/deletedChats — teamwork.CreateDeletedChats: Create new navigation property to deletedChats for teamwork
- GET /teamwork/deletedChats/{deletedChat-id} — teamwork.GetDeletedChats: Get deletedChat
- PATCH /teamwork/deletedChats/{deletedChat-id} — teamwork.UpdateDeletedChats: Update the navigation property deletedChats in teamwork
- DELETE /teamwork/deletedChats/{deletedChat-id} — teamwork.DeleteDeletedChats: Delete navigation property deletedChats for teamwork
- POST /teamwork/deletedChats/{deletedChat-id}/undoDelete — teamwork.deletedChats.deletedChat.undoDelete: Invoke action undoDelete
- GET /teamwork/deletedChats/$count — teamwork.deletedChats.GetCount-fc09: Get the number of the resource

## teamwork.deletedTeam
- GET /teamwork/deletedTeams — teamwork.ListDeletedTeams: List deletedTeams
- POST /teamwork/deletedTeams — teamwork.CreateDeletedTeams: Create new navigation property to deletedTeams for teamwork
- GET /teamwork/deletedTeams/{deletedTeam-id} — teamwork.GetDeletedTeams: Get deletedTeams from teamwork
- PATCH /teamwork/deletedTeams/{deletedTeam-id} — teamwork.UpdateDeletedTeams: Update the navigation property deletedTeams in teamwork
- DELETE /teamwork/deletedTeams/{deletedTeam-id} — teamwork.DeleteDeletedTeams: Delete navigation property deletedTeams for teamwork
- GET /teamwork/deletedTeams/{deletedTeam-id}/channels — teamwork.deletedTeams.ListChannels: Get channels from teamwork
- POST /teamwork/deletedTeams/{deletedTeam-id}/channels — teamwork.deletedTeams.CreateChannels: Create new navigation property to channels for teamwork
- GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id} — teamwork.deletedTeams.GetChannels: Get channels from teamwork
- PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id} — teamwork.deletedTeams.UpdateChannels: Update the navigation property channels in teamwork
- DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id} — teamwork.deletedTeams.DeleteChannels: Delete navigation property channels for teamwork
- GET /teamwork/deletedTeams/{deletedTeam-id}/channels/$count — teamwork.deletedTeams.channels.GetCount-1c02: Get the number of the resource
- GET /teamwork/deletedTeams/{deletedTeam-id}/channels/getAllMessages() — teamwork.deletedTeams.deletedTeam.channels.getAllMessages: Invoke function getAllMessages
- GET /teamwork/deletedTeams/{deletedTeam-id}/channels/getAllRetainedMessages() — teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages: Invoke function getAllRetainedMessages
- GET /teamwork/deletedTeams/$count — teamwork.deletedTeams.GetCount-c07f: Get the number of the resource
- GET /teamwork/deletedTeams/getAllMessages() — teamwork.deletedTeams.getAllMessages: Invoke function getAllMessages

## teamwork.teamsAppSettings
- GET /teamwork/teamsAppSettings — teamwork.GetTeamsAppSettings: Get teamsAppSettings
- PATCH /teamwork/teamsAppSettings — teamwork.UpdateTeamsAppSettings: Update teamsAppSettings
- DELETE /teamwork/teamsAppSettings — teamwork.DeleteTeamsAppSettings: Delete navigation property teamsAppSettings for teamwork

## teamwork.teamwork
- GET /teamwork — teamwork.teamwork.GetTeamwork: Get teamwork
- PATCH /teamwork — teamwork.teamwork.UpdateTeamwork: Update teamwork

## teamwork.teamwork.Actions
- POST /teamwork/sendActivityNotificationToRecipients — teamwork.sendActivityNotificationToRecipients: Invoke action sendActivityNotificationToRecipients

## teamwork.workforceIntegration
- GET /teamwork/workforceIntegrations — teamwork.ListWorkforceIntegrations: List workforceIntegrations
- POST /teamwork/workforceIntegrations — teamwork.CreateWorkforceIntegrations: Create workforceIntegration
- GET /teamwork/workforceIntegrations/{workforceIntegration-id} — teamwork.GetWorkforceIntegrations: Get workforceIntegration
- PATCH /teamwork/workforceIntegrations/{workforceIntegration-id} — teamwork.UpdateWorkforceIntegrations: Update workforceIntegration
- DELETE /teamwork/workforceIntegrations/{workforceIntegration-id} — teamwork.DeleteWorkforceIntegrations: Delete workforceIntegration
- GET /teamwork/workforceIntegrations/$count — teamwork.workforceIntegrations.GetCount-5b5b: Get the number of the resource

## users.adhocCall
- GET /users/{user-id}/adhocCalls — users.ListAdhocCalls: Get adhocCalls from users
- POST /users/{user-id}/adhocCalls — users.CreateAdhocCalls: Create new navigation property to adhocCalls for users
- GET /users/{user-id}/adhocCalls/{adhocCall-id} — users.GetAdhocCalls: Get adhocCalls from users
- PATCH /users/{user-id}/adhocCalls/{adhocCall-id} — users.UpdateAdhocCalls: Update the navigation property adhocCalls in users
- DELETE /users/{user-id}/adhocCalls/{adhocCall-id} — users.DeleteAdhocCalls: Delete navigation property adhocCalls for users
- GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings — users.adhocCalls.ListRecordings: Get callRecording
- POST /users/{user-id}/adhocCalls/{adhocCall-id}/recordings — users.adhocCalls.CreateRecordings: Create new navigation property to recordings for users
- GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts — users.adhocCalls.ListTranscripts: Get callTranscript
- POST /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts — users.adhocCalls.CreateTranscripts: Create new navigation property to transcripts for users
- GET /users/{user-id}/adhocCalls/$count — users.adhocCalls.GetCount-0e82: Get the number of the resource
- GET /users/{user-id}/adhocCalls/getAllRecordings(userId='@userId',startDateTime=@startDateTime,endDateTime=@endDateTime) — users.user.adhocCalls.getAllRecordings: Invoke function getAllRecordings
- GET /users/{user-id}/adhocCalls/getAllTranscripts(userId='@userId',startDateTime=@startDateTime,endDateTime=@endDateTime) — users.user.adhocCalls.getAllTranscripts: Invoke function getAllTranscripts

## users.agreementAcceptance
- GET /users/{user-id}/agreementAcceptances — users.ListAgreementAcceptances: Get agreementAcceptances from users
- GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id} — users.GetAgreementAcceptances: Get agreementAcceptances from users
- GET /users/{user-id}/agreementAcceptances/$count — users.agreementAcceptances.GetCount-b659: Get the number of the resource

## users.appRoleAssignment
- GET /users/{user-id}/appRoleAssignments — users.ListAppRoleAssignments: List appRoleAssignments (for agentUser)
- POST /users/{user-id}/appRoleAssignments — users.CreateAppRoleAssignments: Create appRoleAssignment (for agentUser)
- GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id} — users.GetAppRoleAssignments: Get appRoleAssignments from users
- PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id} — users.UpdateAppRoleAssignments: Update the navigation property appRoleAssignments in users
- DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id} — users.DeleteAppRoleAssignments: Delete appRoleAssignment
- GET /users/{user-id}/appRoleAssignments/$count — users.appRoleAssignments.GetCount-d180: Get the number of the resource

## users.authentication
- GET /users/{user-id}/authentication — users.GetAuthentication: Get authentication from users
- PATCH /users/{user-id}/authentication — users.UpdateAuthentication: Update the navigation property authentication in users
- DELETE /users/{user-id}/authentication — users.DeleteAuthentication: Delete navigation property authentication for users
- GET /users/{user-id}/authentication/emailMethods — users.authentication.ListEmailMethods: Get emailMethods from users
- POST /users/{user-id}/authentication/emailMethods — users.authentication.CreateEmailMethods: Create emailMethod
- GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id} — users.authentication.GetEmailMethods: Get emailMethods from users
- PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id} — users.authentication.UpdateEmailMethods: Update emailAuthenticationMethod
- DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id} — users.authentication.DeleteEmailMethods: Delete emailAuthenticationMethod
- GET /users/{user-id}/authentication/emailMethods/$count — users.authentication.emailMethods.GetCount-6f5c: Get the number of the resource
- GET /users/{user-id}/authentication/externalAuthenticationMethods — users.authentication.ListExternalAuthenticationMethods: Get externalAuthenticationMethods from users
- POST /users/{user-id}/authentication/externalAuthenticationMethods — users.authentication.CreateExternalAuthenticationMethods: Create externalAuthenticationMethod
- GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id} — users.authentication.GetExternalAuthenticationMethods: Get externalAuthenticationMethods from users
- PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id} — users.authentication.UpdateExternalAuthenticationMethods: Update the navigation property externalAuthenticationMethods in users
- DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id} — users.authentication.DeleteExternalAuthenticationMethods: Delete externalAuthenticationMethod
- GET /users/{user-id}/authentication/externalAuthenticationMethods/$count — users.authentication.externalAuthenticationMethods.GetCount-d9e5: Get the number of the resource
- GET /users/{user-id}/authentication/fido2Methods — users.authentication.ListFido2Methods: Get fido2Methods from users
- GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id} — users.authentication.GetFido2Methods: Get fido2Methods from users
- DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id} — users.authentication.DeleteFido2Methods: Delete fido2AuthenticationMethod
- GET /users/{user-id}/authentication/fido2Methods/$count — users.authentication.fido2Methods.GetCount-9673: Get the number of the resource
- GET /users/{user-id}/authentication/fido2Methods/creationOptions() — users.user.authentication.fido2Methods.creationOptions: Invoke function creationOptions
- GET /users/{user-id}/authentication/methods — users.authentication.ListMethods: Get methods from users
- POST /users/{user-id}/authentication/methods — users.authentication.CreateMethods: Create new navigation property to methods for users
- GET /users/{user-id}/authentication/methods/{authenticationMethod-id} — users.authentication.GetMethods: Get methods from users
- PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id} — users.authentication.UpdateMethods: Update the navigation property methods in users
- GET /users/{user-id}/authentication/methods/$count — users.authentication.methods.GetCount-0da1: Get the number of the resource
- GET /users/{user-id}/authentication/microsoftAuthenticatorMethods — users.authentication.ListMicrosoftAuthenticatorMethods: List microsoftAuthenticatorAuthenticationMethods
- GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id} — users.authentication.GetMicrosoftAuthenticatorMethods: Get microsoftAuthenticatorAuthenticationMethod
- DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id} — users.authentication.DeleteMicrosoftAuthenticatorMethods: Delete microsoftAuthenticatorAuthenticationMethod
- GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/$count — users.authentication.microsoftAuthenticatorMethods.GetCount-af8c: Get the number of the resource
- GET /users/{user-id}/authentication/operations — users.authentication.ListOperations: Get longRunningOperation
- POST /users/{user-id}/authentication/operations — users.authentication.CreateOperations: Create new navigation property to operations for users
- GET /users/{user-id}/authentication/operations/{longRunningOperation-id} — users.authentication.GetOperations: Get longRunningOperation
- PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id} — users.authentication.UpdateOperations: Update the navigation property operations in users
- DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id} — users.authentication.DeleteOperations: Delete navigation property operations for users
- GET /users/{user-id}/authentication/operations/$count — users.authentication.operations.GetCount-40a4: Get the number of the resource
- GET /users/{user-id}/authentication/passwordMethods — users.authentication.ListPasswordMethods: Get passwordMethods from users
- POST /users/{user-id}/authentication/passwordMethods — users.authentication.CreatePasswordMethods: Create new navigation property to passwordMethods for users
- GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id} — users.authentication.GetPasswordMethods: Get passwordMethods from users
- GET /users/{user-id}/authentication/passwordMethods/$count — users.authentication.passwordMethods.GetCount-ec55: Get the number of the resource
- GET /users/{user-id}/authentication/phoneMethods — users.authentication.ListPhoneMethods: Get phoneMethods from users
- POST /users/{user-id}/authentication/phoneMethods — users.authentication.CreatePhoneMethods: Create phoneMethod
- GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id} — users.authentication.GetPhoneMethods: Get phoneMethods from users
- PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id} — users.authentication.UpdatePhoneMethods: Update phoneAuthenticationMethod
- DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id} — users.authentication.DeletePhoneMethods: Delete navigation property phoneMethods for users
- GET /users/{user-id}/authentication/phoneMethods/$count — users.authentication.phoneMethods.GetCount-2ea0: Get the number of the resource
- GET /users/{user-id}/authentication/platformCredentialMethods — users.authentication.ListPlatformCredentialMethods: Get platformCredentialMethods from users
- GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id} — users.authentication.GetPlatformCredentialMethods: Get platformCredentialMethods from users
- DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id} — users.authentication.DeletePlatformCredentialMethods: Delete platformCredentialAuthenticationMethod
- GET /users/{user-id}/authentication/platformCredentialMethods/$count — users.authentication.platformCredentialMethods.GetCount-66e6: Get the number of the resource
- GET /users/{user-id}/authentication/softwareOathMethods — users.authentication.ListSoftwareOathMethods: Get softwareOathMethods from users
- GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id} — users.authentication.GetSoftwareOathMethods: Get softwareOathMethods from users
- DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id} — users.authentication.DeleteSoftwareOathMethods: Delete softwareOathAuthenticationMethod
- GET /users/{user-id}/authentication/softwareOathMethods/$count — users.authentication.softwareOathMethods.GetCount-0ccd: Get the number of the resource
- GET /users/{user-id}/authentication/temporaryAccessPassMethods — users.authentication.ListTemporaryAccessPassMethods: List temporaryAccessPassMethods
- POST /users/{user-id}/authentication/temporaryAccessPassMethods — users.authentication.CreateTemporaryAccessPassMethods: Create temporaryAccessPassMethod
- GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id} — users.authentication.GetTemporaryAccessPassMethods: Get temporaryAccessPassAuthenticationMethod
- DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id} — users.authentication.DeleteTemporaryAccessPassMethods: Delete temporaryAccessPassAuthenticationMethod
- GET /users/{user-id}/authentication/temporaryAccessPassMethods/$count — users.authentication.temporaryAccessPassMethods.GetCount-3b4c: Get the number of the resource
- GET /users/{user-id}/authentication/windowsHelloForBusinessMethods — users.authentication.ListWindowsHelloForBusinessMethods: List windowsHelloForBusinessAuthenticationMethods
- GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id} — users.authentication.GetWindowsHelloForBusinessMethods: Get windowsHelloForBusinessAuthenticationMethod
- DELETE /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id} — users.authentication.DeleteWindowsHelloForBusinessMethods: Delete windowsHelloForBusinessAuthenticationMethod
- GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/$count — users.authentication.windowsHelloForBusinessMethods.GetCount-0479: Get the number of the resource

## users.calendar
- GET /users/{user-id}/calendar — users.GetCalendar: Get calendar from users
- PATCH /users/{user-id}/calendar — users.UpdateCalendar: Update the navigation property calendar in users
- GET /users/{user-id}/calendar/calendarPermissions — users.calendar.ListCalendarPermissions: List calendarPermissions
- POST /users/{user-id}/calendar/calendarPermissions — users.calendar.CreateCalendarPermissions: Create new navigation property to calendarPermissions for users
- GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id} — users.calendar.GetCalendarPermissions: Get calendarPermission
- PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id} — users.calendar.UpdateCalendarPermissions: Update calendarPermission
- DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id} — users.calendar.DeleteCalendarPermissions: Delete calendarPermission
- GET /users/{user-id}/calendar/calendarPermissions/$count — users.calendar.calendarPermissions.GetCount-b877: Get the number of the resource
- GET /users/{user-id}/calendar/calendarView — users.calendar.ListCalendarView: Get calendarView from users
- GET /users/{user-id}/calendar/calendarView/delta() — users.user.calendar.calendarView.delta: Invoke function delta
- GET /users/{user-id}/calendar/events — users.calendar.ListEvents: Get events from users
- POST /users/{user-id}/calendar/events — users.calendar.CreateEvents: Create new navigation property to events for users
- GET /users/{user-id}/calendar/events/{event-id} — users.calendar.GetEvents: Get events from users
- PATCH /users/{user-id}/calendar/events/{event-id} — users.calendar.UpdateEvents: Update the navigation property events in users
- DELETE /users/{user-id}/calendar/events/{event-id} — users.calendar.DeleteEvents: Delete navigation property events for users
- GET /users/{user-id}/calendar/events/$count — users.calendar.events.GetCount-1a22: Get the number of the resource
- GET /users/{user-id}/calendar/events/delta() — users.user.calendar.events.delta: Invoke function delta
- GET /users/{user-id}/calendar/allowedCalendarSharingRoles(User='{User}') — users.user.calendar.allowedCalendarSharingRoles: Invoke function allowedCalendarSharingRoles
- POST /users/{user-id}/calendar/getSchedule — users.user.calendar.getSchedule: Invoke action getSchedule
- POST /users/{user-id}/calendar/permanentDelete — users.user.calendar.permanentDelete: Invoke action permanentDelete
- GET /users/{user-id}/calendars — users.ListCalendars: Get calendars from users
- POST /users/{user-id}/calendars — users.CreateCalendars: Create new navigation property to calendars for users
- GET /users/{user-id}/calendars/{calendar-id} — users.GetCalendars: Get calendars from users
- PATCH /users/{user-id}/calendars/{calendar-id} — users.UpdateCalendars: Update the navigation property calendars in users
- DELETE /users/{user-id}/calendars/{calendar-id} — users.DeleteCalendars: Delete navigation property calendars for users
- GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions — users.calendars.ListCalendarPermissions: Get calendarPermissions from users
- POST /users/{user-id}/calendars/{calendar-id}/calendarPermissions — users.calendars.CreateCalendarPermissions: Create new navigation property to calendarPermissions for users
- GET /users/{user-id}/calendars/{calendar-id}/calendarView — users.calendars.ListCalendarView: Get calendarView from users
- GET /users/{user-id}/calendars/{calendar-id}/events — users.calendars.ListEvents: Get events from users
- POST /users/{user-id}/calendars/{calendar-id}/events — users.calendars.CreateEvents: Create new navigation property to events for users
- GET /users/{user-id}/calendars/{calendar-id}/allowedCalendarSharingRoles(User='{User}') — users.user.calendars.calendar.allowedCalendarSharingRoles: Invoke function allowedCalendarSharingRoles
- POST /users/{user-id}/calendars/{calendar-id}/getSchedule — users.user.calendars.calendar.getSchedule: Invoke action getSchedule
- POST /users/{user-id}/calendars/{calendar-id}/permanentDelete — users.user.calendars.calendar.permanentDelete: Invoke action permanentDelete
- GET /users/{user-id}/calendars/$count — users.calendars.GetCount-a1b5: Get the number of the resource

## users.calendarGroup
- GET /users/{user-id}/calendarGroups — users.ListCalendarGroups: Get calendarGroups from users
- POST /users/{user-id}/calendarGroups — users.CreateCalendarGroups: Create new navigation property to calendarGroups for users
- GET /users/{user-id}/calendarGroups/{calendarGroup-id} — users.GetCalendarGroups: Get calendarGroups from users
- PATCH /users/{user-id}/calendarGroups/{calendarGroup-id} — users.UpdateCalendarGroups: Update the navigation property calendarGroups in users
- DELETE /users/{user-id}/calendarGroups/{calendarGroup-id} — users.DeleteCalendarGroups: Delete navigation property calendarGroups for users
- GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars — users.calendarGroups.ListCalendars: Get calendars from users
- POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars — users.calendarGroups.CreateCalendars: Create new navigation property to calendars for users
- GET /users/{user-id}/calendarGroups/$count — users.calendarGroups.GetCount-ee80: Get the number of the resource

## users.chat
- GET /users/{user-id}/chats — users.ListChats: List chats
- POST /users/{user-id}/chats — users.CreateChats: Create new navigation property to chats for users
- GET /users/{user-id}/chats/{chat-id} — users.GetChats: Get chat
- PATCH /users/{user-id}/chats/{chat-id} — users.UpdateChats: Update the navigation property chats in users
- DELETE /users/{user-id}/chats/{chat-id} — users.DeleteChats: Delete navigation property chats for users
- GET /users/{user-id}/chats/{chat-id}/installedApps — users.chats.ListInstalledApps: Get installedApps from users
- POST /users/{user-id}/chats/{chat-id}/installedApps — users.chats.CreateInstalledApps: Create new navigation property to installedApps for users
- GET /users/{user-id}/chats/{chat-id}/lastMessagePreview — users.chats.GetLastMessagePreview: Get lastMessagePreview from users
- PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview — users.chats.UpdateLastMessagePreview: Update the navigation property lastMessagePreview in users
- DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview — users.chats.DeleteLastMessagePreview: Delete navigation property lastMessagePreview for users
- GET /users/{user-id}/chats/{chat-id}/members — users.chats.ListMembers: Get members from users
- POST /users/{user-id}/chats/{chat-id}/members — users.chats.CreateMembers: Create new navigation property to members for users
- GET /users/{user-id}/chats/{chat-id}/messages — users.chats.ListMessages: Get messages from users
- POST /users/{user-id}/chats/{chat-id}/messages — users.chats.CreateMessages: Create new navigation property to messages for users
- POST /users/{user-id}/chats/{chat-id}/completeMigration — users.user.chats.chat.completeMigration: Invoke action completeMigration
- POST /users/{user-id}/chats/{chat-id}/hideForUser — users.user.chats.chat.hideForUser: Invoke action hideForUser
- POST /users/{user-id}/chats/{chat-id}/markChatReadForUser — users.user.chats.chat.markChatReadForUser: Invoke action markChatReadForUser
- POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser — users.user.chats.chat.markChatUnreadForUser: Invoke action markChatUnreadForUser
- POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser — users.user.chats.chat.removeAllAccessForUser: Invoke action removeAllAccessForUser
- POST /users/{user-id}/chats/{chat-id}/sendActivityNotification — users.user.chats.chat.sendActivityNotification: Invoke action sendActivityNotification
- POST /users/{user-id}/chats/{chat-id}/startMigration — users.user.chats.chat.startMigration: Invoke action startMigration
- POST /users/{user-id}/chats/{chat-id}/unhideForUser — users.user.chats.chat.unhideForUser: Invoke action unhideForUser
- GET /users/{user-id}/chats/{chat-id}/permissionGrants — users.chats.ListPermissionGrants: Get permissionGrants from users
- POST /users/{user-id}/chats/{chat-id}/permissionGrants — users.chats.CreatePermissionGrants: Create new navigation property to permissionGrants for users
- GET /users/{user-id}/chats/{chat-id}/pinnedMessages — users.chats.ListPinnedMessages: Get pinnedMessages from users
- POST /users/{user-id}/chats/{chat-id}/pinnedMessages — users.chats.CreatePinnedMessages: Create new navigation property to pinnedMessages for users
- GET /users/{user-id}/chats/{chat-id}/tabs — users.chats.ListTabs: Get tabs from users
- POST /users/{user-id}/chats/{chat-id}/tabs — users.chats.CreateTabs: Create new navigation property to tabs for users
- GET /users/{user-id}/chats/{chat-id}/targetedMessages — users.chats.ListTargetedMessages: Get targetedMessages from users
- POST /users/{user-id}/chats/{chat-id}/targetedMessages — users.chats.CreateTargetedMessages: Create new navigation property to targetedMessages for users
- GET /users/{user-id}/chats/$count — users.chats.GetCount-38c2: Get the number of the resource
- GET /users/{user-id}/chats/getAllMessages() — users.user.chats.getAllMessages: Invoke function getAllMessages
- GET /users/{user-id}/chats/getAllRetainedMessages() — users.user.chats.getAllRetainedMessages: Invoke function getAllRetainedMessages

## users.cloudClipboardRoot
- GET /users/{user-id}/cloudClipboard — users.GetCloudClipboard: Get cloudClipboard from users
- PATCH /users/{user-id}/cloudClipboard — users.UpdateCloudClipboard: Update the navigation property cloudClipboard in users
- DELETE /users/{user-id}/cloudClipboard — users.DeleteCloudClipboard: Delete navigation property cloudClipboard for users
- GET /users/{user-id}/cloudClipboard/items — users.cloudClipboard.ListItems: Get items from users
- POST /users/{user-id}/cloudClipboard/items — users.cloudClipboard.CreateItems: Create new navigation property to items for users
- GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id} — users.cloudClipboard.GetItems: Get items from users
- PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id} — users.cloudClipboard.UpdateItems: Update the navigation property items in users
- DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id} — users.cloudClipboard.DeleteItems: Delete navigation property items for users
- GET /users/{user-id}/cloudClipboard/items/$count — users.cloudClipboard.items.GetCount-1146: Get the number of the resource

## users.cloudPC
- GET /users/{user-id}/cloudPCs — users.ListCloudPCs: Get cloudPCs from users
- POST /users/{user-id}/cloudPCs — users.CreateCloudPCs: Create new navigation property to cloudPCs for users
- GET /users/{user-id}/cloudPCs/{cloudPC-id} — users.GetCloudPCs: Get cloudPCs from users
- PATCH /users/{user-id}/cloudPCs/{cloudPC-id} — users.UpdateCloudPCs: Update the navigation property cloudPCs in users
- DELETE /users/{user-id}/cloudPCs/{cloudPC-id} — users.DeleteCloudPCs: Delete navigation property cloudPCs for users
- POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod — users.user.cloudPCs.cloudPC.endGracePeriod: Invoke action endGracePeriod
- POST /users/{user-id}/cloudPCs/{cloudPC-id}/reboot — users.user.cloudPCs.cloudPC.reboot: Invoke action reboot
- POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename — users.user.cloudPCs.cloudPC.rename: Invoke action rename
- POST /users/{user-id}/cloudPCs/{cloudPC-id}/reprovision — users.user.cloudPCs.cloudPC.reprovision: Invoke action reprovision
- POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize — users.user.cloudPCs.cloudPC.resize: Invoke action resize
- POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore — users.user.cloudPCs.cloudPC.restore: Invoke action restore
- GET /users/{user-id}/cloudPCs/{cloudPC-id}/retrieveCloudPcLaunchDetail() — users.user.cloudPCs.cloudPC.retrieveCloudPcLaunchDetail: Invoke function retrieveCloudPcLaunchDetail
- POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot — users.user.cloudPCs.cloudPC.troubleshoot: Invoke action troubleshoot
- GET /users/{user-id}/cloudPCs/$count — users.cloudPCs.GetCount-a4ef: Get the number of the resource

## users.contact
- GET /users/{user-id}/contacts — users.ListContacts: Get contacts from users
- POST /users/{user-id}/contacts — users.CreateContacts: Create new navigation property to contacts for users
- GET /users/{user-id}/contacts/{contact-id} — users.GetContacts: Get contacts from users
- PATCH /users/{user-id}/contacts/{contact-id} — users.UpdateContacts: Update the navigation property contacts in users
- DELETE /users/{user-id}/contacts/{contact-id} — users.DeleteContacts: Delete navigation property contacts for users
- GET /users/{user-id}/contacts/{contact-id}/extensions — users.contacts.ListExtensions: Get extensions from users
- POST /users/{user-id}/contacts/{contact-id}/extensions — users.contacts.CreateExtensions: Create new navigation property to extensions for users
- POST /users/{user-id}/contacts/{contact-id}/permanentDelete — users.user.contacts.contact.permanentDelete: Invoke action permanentDelete
- GET /users/{user-id}/contacts/{contact-id}/photo — users.contacts.GetPhoto: Get photo from users
- PATCH /users/{user-id}/contacts/{contact-id}/photo — users.contacts.UpdatePhoto: Update the navigation property photo in users
- GET /users/{user-id}/contacts/$count — users.contacts.GetCount-4943: Get the number of the resource
- GET /users/{user-id}/contacts/delta() — users.user.contacts.delta: Invoke function delta

## users.contactFolder
- GET /users/{user-id}/contactFolders — users.ListContactFolders: Get contactFolders from users
- POST /users/{user-id}/contactFolders — users.CreateContactFolders: Create new navigation property to contactFolders for users
- GET /users/{user-id}/contactFolders/{contactFolder-id} — users.GetContactFolders: Get contactFolders from users
- PATCH /users/{user-id}/contactFolders/{contactFolder-id} — users.UpdateContactFolders: Update the navigation property contactFolders in users
- DELETE /users/{user-id}/contactFolders/{contactFolder-id} — users.DeleteContactFolders: Delete navigation property contactFolders for users
- GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders — users.contactFolders.ListChildFolders: Get childFolders from users
- POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders — users.contactFolders.CreateChildFolders: Create new navigation property to childFolders for users
- GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts — users.contactFolders.ListContacts: Get contacts from users
- POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts — users.contactFolders.CreateContacts: Create new navigation property to contacts for users
- POST /users/{user-id}/contactFolders/{contactFolder-id}/permanentDelete — users.user.contactFolders.contactFolder.permanentDelete: Invoke action permanentDelete
- GET /users/{user-id}/contactFolders/$count — users.contactFolders.GetCount-72bb: Get the number of the resource
- GET /users/{user-id}/contactFolders/delta() — users.user.contactFolders.delta: Invoke function delta

## users.deviceManagementTroubleshootingEvent
- GET /users/{user-id}/deviceManagementTroubleshootingEvents — users.ListDeviceManagementTroubleshootingEvents: Get deviceManagementTroubleshootingEvents from users
- POST /users/{user-id}/deviceManagementTroubleshootingEvents — users.CreateDeviceManagementTroubleshootingEvents: Create new navigation property to deviceManagementTroubleshootingEvents for users
- GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id} — users.GetDeviceManagementTroubleshootingEvents: Get deviceManagementTroubleshootingEvents from users
- PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id} — users.UpdateDeviceManagementTroubleshootingEvents: Update the navigation property deviceManagementTroubleshootingEvents in users
- DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id} — users.DeleteDeviceManagementTroubleshootingEvents: Delete navigation property deviceManagementTroubleshootingEvents for users
- GET /users/{user-id}/deviceManagementTroubleshootingEvents/$count — users.deviceManagementTroubleshootingEvents.GetCount-3623: Get the number of the resource

## users.directoryObject
- GET /users/{user-id}/createdObjects — users.ListCreatedObjects: Get createdObjects from users
- GET /users/{user-id}/createdObjects/{directoryObject-id} — users.GetCreatedObjects: Get createdObjects from users
- GET /users/{user-id}/createdObjects/{directoryObject-id}/graph.servicePrincipal — users.GetCreatedObjects.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /users/{user-id}/createdObjects/$count — users.createdObjects.GetCount-c0ed: Get the number of the resource
- GET /users/{user-id}/createdObjects/graph.servicePrincipal — users.ListCreatedObjects.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/createdObjects/graph.servicePrincipal/$count — users.CreatedObjects.GetCount.AsServicePrincipal-1751: Get the number of the resource
- GET /users/{user-id}/directReports — users.ListDirectReports: List directReports (for agentUser)
- GET /users/{user-id}/directReports/{directoryObject-id} — users.GetDirectReports: Get directReports from users
- GET /users/{user-id}/directReports/{directoryObject-id}/graph.orgContact — users.GetDirectReports.AsOrgContact: Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact
- GET /users/{user-id}/directReports/{directoryObject-id}/graph.user — users.GetDirectReports.AsUser: Get the item of type microsoft.graph.directoryObject as microsoft.graph.user
- GET /users/{user-id}/directReports/$count — users.directReports.GetCount-0678: Get the number of the resource
- GET /users/{user-id}/directReports/graph.orgContact — users.ListDirectReports.AsOrgContact: Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/directReports/graph.orgContact/$count — users.DirectReports.GetCount.AsOrgContact-88c4: Get the number of the resource
- GET /users/{user-id}/directReports/graph.user — users.ListDirectReports.AsUser: Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/directReports/graph.user/$count — users.DirectReports.GetCount.AsUser-c9c7: Get the number of the resource
- GET /users/{user-id}/manager — users.GetManager: List manager (for agentUser)
- GET /users/{user-id}/manager/$ref — users.GetRefManager: List manager (for agentUser)
- PUT /users/{user-id}/manager/$ref — users.UpdateRefManager: Assign manager
- DELETE /users/{user-id}/manager/$ref — users.DeleteRefManager: Remove manager (for agentUser)
- GET /users/{user-id}/memberOf — users.ListMemberOf: List agentUser direct memberships
- GET /users/{user-id}/memberOf/{directoryObject-id} — users.GetMemberOf: Get memberOf from users
- GET /users/{user-id}/memberOf/{directoryObject-id}/graph.administrativeUnit — users.GetMemberOf.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /users/{user-id}/memberOf/{directoryObject-id}/graph.directoryRole — users.GetMemberOf.AsDirectoryRole: Get the item of type microsoft.graph.directoryObject as microsoft.graph.directoryRole
- GET /users/{user-id}/memberOf/{directoryObject-id}/graph.group — users.GetMemberOf.AsGroup: List a user's direct memberships
- GET /users/{user-id}/memberOf/$count — users.memberOf.GetCount-fc20: Get the number of the resource
- GET /users/{user-id}/memberOf/graph.administrativeUnit — users.ListMemberOf.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/memberOf/graph.administrativeUnit/$count — users.MemberOf.GetCount.AsAdministrativeUnit-88a9: Get the number of the resource
- GET /users/{user-id}/memberOf/graph.directoryRole — users.ListMemberOf.AsDirectoryRole: Get the items of type microsoft.graph.directoryRole in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/memberOf/graph.directoryRole/$count — users.MemberOf.GetCount.AsDirectoryRole-b036: Get the number of the resource
- GET /users/{user-id}/memberOf/graph.group — users.ListMemberOf.AsGroup: List a user's direct memberships
- GET /users/{user-id}/memberOf/graph.group/$count — users.MemberOf.GetCount.AsGroup-48c0: Get the number of the resource
- GET /users/{user-id}/ownedDevices — users.ListOwnedDevices: Get ownedDevices from users
- GET /users/{user-id}/ownedDevices/{directoryObject-id} — users.GetOwnedDevices: Get ownedDevices from users
- GET /users/{user-id}/ownedDevices/{directoryObject-id}/graph.appRoleAssignment — users.GetOwnedDevices.AsAppRoleAssignment: Get the item of type microsoft.graph.directoryObject as microsoft.graph.appRoleAssignment
- GET /users/{user-id}/ownedDevices/{directoryObject-id}/graph.device — users.GetOwnedDevices.AsDevice: Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
- GET /users/{user-id}/ownedDevices/{directoryObject-id}/graph.endpoint — users.GetOwnedDevices.AsEndpoint: Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint
- GET /users/{user-id}/ownedDevices/$count — users.ownedDevices.GetCount-e76d: Get the number of the resource
- GET /users/{user-id}/ownedDevices/graph.appRoleAssignment — users.ListOwnedDevices.AsAppRoleAssignment: Get the items of type microsoft.graph.appRoleAssignment in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/ownedDevices/graph.appRoleAssignment/$count — users.OwnedDevices.GetCount.AsAppRoleAssignment-59f6: Get the number of the resource
- GET /users/{user-id}/ownedDevices/graph.device — users.ListOwnedDevices.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/ownedDevices/graph.device/$count — users.OwnedDevices.GetCount.AsDevice-64a9: Get the number of the resource
- GET /users/{user-id}/ownedDevices/graph.endpoint — users.ListOwnedDevices.AsEndpoint: Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/ownedDevices/graph.endpoint/$count — users.OwnedDevices.GetCount.AsEndpoint-bd17: Get the number of the resource
- GET /users/{user-id}/ownedObjects — users.ListOwnedObjects: List ownedObjects (for agentUser)
- GET /users/{user-id}/ownedObjects/{directoryObject-id} — users.GetOwnedObjects: Get ownedObjects from users
- GET /users/{user-id}/ownedObjects/{directoryObject-id}/graph.application — users.GetOwnedObjects.AsApplication: Get the item of type microsoft.graph.directoryObject as microsoft.graph.application
- GET /users/{user-id}/ownedObjects/{directoryObject-id}/graph.group — users.GetOwnedObjects.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /users/{user-id}/ownedObjects/{directoryObject-id}/graph.servicePrincipal — users.GetOwnedObjects.AsServicePrincipal: Get the item of type microsoft.graph.directoryObject as microsoft.graph.servicePrincipal
- GET /users/{user-id}/ownedObjects/$count — users.ownedObjects.GetCount-2c09: Get the number of the resource
- GET /users/{user-id}/ownedObjects/graph.application — users.ListOwnedObjects.AsApplication: Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/ownedObjects/graph.application/$count — users.OwnedObjects.GetCount.AsApplication-1b6d: Get the number of the resource
- GET /users/{user-id}/ownedObjects/graph.group — users.ListOwnedObjects.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/ownedObjects/graph.group/$count — users.OwnedObjects.GetCount.AsGroup-7af3: Get the number of the resource
- GET /users/{user-id}/ownedObjects/graph.servicePrincipal — users.ListOwnedObjects.AsServicePrincipal: Get the items of type microsoft.graph.servicePrincipal in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/ownedObjects/graph.servicePrincipal/$count — users.OwnedObjects.GetCount.AsServicePrincipal-370f: Get the number of the resource
- GET /users/{user-id}/registeredDevices — users.ListRegisteredDevices: Get registeredDevices from users
- GET /users/{user-id}/registeredDevices/{directoryObject-id} — users.GetRegisteredDevices: Get registeredDevices from users
- GET /users/{user-id}/registeredDevices/{directoryObject-id}/graph.appRoleAssignment — users.GetRegisteredDevices.AsAppRoleAssignment: Get the item of type microsoft.graph.directoryObject as microsoft.graph.appRoleAssignment
- GET /users/{user-id}/registeredDevices/{directoryObject-id}/graph.device — users.GetRegisteredDevices.AsDevice: Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
- GET /users/{user-id}/registeredDevices/{directoryObject-id}/graph.endpoint — users.GetRegisteredDevices.AsEndpoint: Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint
- GET /users/{user-id}/registeredDevices/$count — users.registeredDevices.GetCount-0403: Get the number of the resource
- GET /users/{user-id}/registeredDevices/graph.appRoleAssignment — users.ListRegisteredDevices.AsAppRoleAssignment: Get the items of type microsoft.graph.appRoleAssignment in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/registeredDevices/graph.appRoleAssignment/$count — users.RegisteredDevices.GetCount.AsAppRoleAssignment-cd2d: Get the number of the resource
- GET /users/{user-id}/registeredDevices/graph.device — users.ListRegisteredDevices.AsDevice: Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/registeredDevices/graph.device/$count — users.RegisteredDevices.GetCount.AsDevice-16e2: Get the number of the resource
- GET /users/{user-id}/registeredDevices/graph.endpoint — users.ListRegisteredDevices.AsEndpoint: Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/registeredDevices/graph.endpoint/$count — users.RegisteredDevices.GetCount.AsEndpoint-87c6: Get the number of the resource
- GET /users/{user-id}/sponsorOf — users.ListSponsorOf: List sponsorOf
- GET /users/{user-id}/sponsorOf/{directoryObject-id} — users.GetSponsorOf: Get sponsorOf from users
- GET /users/{user-id}/sponsorOf/$count — users.sponsorOf.GetCount-f17d: Get the number of the resource
- GET /users/{user-id}/sponsors — users.ListSponsors: List sponsors (for agentUser)
- DELETE /users/{user-id}/sponsors/{directoryObject-id}/$ref — users.sponsors.DeleteRefDirectoryObject: Remove sponsor (for agentUser)
- GET /users/{user-id}/sponsors/$count — users.sponsors.GetCount-f3b9: Get the number of the resource
- GET /users/{user-id}/sponsors/$ref — users.ListRefSponsors: List sponsors (for agentUser)
- POST /users/{user-id}/sponsors/$ref — users.CreateRefSponsors: Add sponsors (for agentUser)
- DELETE /users/{user-id}/sponsors/$ref — users.DeleteRefSponsors: Remove sponsor (for agentUser)
- GET /users/{user-id}/transitiveMemberOf — users.ListTransitiveMemberOf: List transitiveMemberOf
- GET /users/{user-id}/transitiveMemberOf/{directoryObject-id} — users.GetTransitiveMemberOf: Get transitiveMemberOf from users
- GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}/graph.administrativeUnit — users.GetTransitiveMemberOf.AsAdministrativeUnit: Get the item of type microsoft.graph.directoryObject as microsoft.graph.administrativeUnit
- GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}/graph.directoryRole — users.GetTransitiveMemberOf.AsDirectoryRole: Get the item of type microsoft.graph.directoryObject as microsoft.graph.directoryRole
- GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}/graph.group — users.GetTransitiveMemberOf.AsGroup: Get the item of type microsoft.graph.directoryObject as microsoft.graph.group
- GET /users/{user-id}/transitiveMemberOf/$count — users.transitiveMemberOf.GetCount-b904: Get the number of the resource
- GET /users/{user-id}/transitiveMemberOf/graph.administrativeUnit — users.ListTransitiveMemberOf.AsAdministrativeUnit: Get the items of type microsoft.graph.administrativeUnit in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/transitiveMemberOf/graph.administrativeUnit/$count — users.TransitiveMemberOf.GetCount.AsAdministrativeUnit-9c79: Get the number of the resource
- GET /users/{user-id}/transitiveMemberOf/graph.directoryRole — users.ListTransitiveMemberOf.AsDirectoryRole: Get the items of type microsoft.graph.directoryRole in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/transitiveMemberOf/graph.directoryRole/$count — users.TransitiveMemberOf.GetCount.AsDirectoryRole-462d: Get the number of the resource
- GET /users/{user-id}/transitiveMemberOf/graph.group — users.ListTransitiveMemberOf.AsGroup: Get the items of type microsoft.graph.group in the microsoft.graph.directoryObject collection
- GET /users/{user-id}/transitiveMemberOf/graph.group/$count — users.TransitiveMemberOf.GetCount.AsGroup-062f: Get the number of the resource

## users.drive
- GET /users/{user-id}/drive — users.GetDrive: Get drive from users
- GET /users/{user-id}/drives — users.ListDrives: Get drives from users
- GET /users/{user-id}/drives/{drive-id} — users.GetDrives: Get drives from users
- GET /users/{user-id}/drives/$count — users.drives.GetCount-7cd7: Get the number of the resource

## users.employeeExperienceUser
- GET /users/{user-id}/employeeExperience — users.GetEmployeeExperience: Get employeeExperience from users
- PATCH /users/{user-id}/employeeExperience — users.UpdateEmployeeExperience: Update the navigation property employeeExperience in users
- DELETE /users/{user-id}/employeeExperience — users.DeleteEmployeeExperience: Delete navigation property employeeExperience for users
- GET /users/{user-id}/employeeExperience/assignedRoles — users.employeeExperience.ListAssignedRoles: List assignedRoles
- POST /users/{user-id}/employeeExperience/assignedRoles — users.employeeExperience.CreateAssignedRoles: Create new navigation property to assignedRoles for users
- GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id} — users.employeeExperience.GetAssignedRoles: Get assignedRoles from users
- PATCH /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id} — users.employeeExperience.UpdateAssignedRoles: Update the navigation property assignedRoles in users
- DELETE /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id} — users.employeeExperience.DeleteAssignedRoles: Delete navigation property assignedRoles for users
- GET /users/{user-id}/employeeExperience/assignedRoles/$count — users.employeeExperience.assignedRoles.GetCount-6f8f: Get the number of the resource
- GET /users/{user-id}/employeeExperience/learningCourseActivities — users.employeeExperience.ListLearningCourseActivities: List learningCourseActivities
- GET /users/{user-id}/employeeExperience/learningCourseActivities/{learningCourseActivity-id} — users.employeeExperience.GetLearningCourseActivities: Get learningCourseActivity
- GET /users/{user-id}/employeeExperience/learningCourseActivities(externalcourseActivityId='{externalcourseActivityId}') — users.employeeExperience.learningCourseActivities.GetByExternalcourseActivityId: Get learningCourseActivity
- GET /users/{user-id}/employeeExperience/learningCourseActivities/$count — users.employeeExperience.learningCourseActivities.GetCount-dbc7: Get the number of the resource

## users.event
- GET /users/{user-id}/calendarView — users.ListCalendarView: Get calendarView from users
- GET /users/{user-id}/calendarView/delta() — users.user.calendarView.delta: Invoke function delta
- GET /users/{user-id}/events — users.ListEvents: Get events from users
- POST /users/{user-id}/events — users.CreateEvents: Create new navigation property to events for users
- GET /users/{user-id}/events/{event-id} — users.GetEvents: Get events from users
- PATCH /users/{user-id}/events/{event-id} — users.UpdateEvents: Update the navigation property events in users
- DELETE /users/{user-id}/events/{event-id} — users.DeleteEvents: Delete navigation property events for users
- GET /users/{user-id}/events/{event-id}/attachments — users.events.ListAttachments: Get attachments from users
- POST /users/{user-id}/events/{event-id}/attachments — users.events.CreateAttachments: Create new navigation property to attachments for users
- GET /users/{user-id}/events/{event-id}/calendar — users.events.GetCalendar: Get calendar from users
- GET /users/{user-id}/events/{event-id}/extensions — users.events.ListExtensions: Get extensions from users
- POST /users/{user-id}/events/{event-id}/extensions — users.events.CreateExtensions: Create new navigation property to extensions for users
- GET /users/{user-id}/events/{event-id}/instances — users.events.ListInstances: Get instances from users
- POST /users/{user-id}/events/{event-id}/accept — users.user.events.event.accept: Invoke action accept
- POST /users/{user-id}/events/{event-id}/cancel — users.user.events.event.cancel: Invoke action cancel
- POST /users/{user-id}/events/{event-id}/decline — users.user.events.event.decline: Invoke action decline
- POST /users/{user-id}/events/{event-id}/dismissReminder — users.user.events.event.dismissReminder: Invoke action dismissReminder
- POST /users/{user-id}/events/{event-id}/forward — users.user.events.event.forward: Invoke action forward
- POST /users/{user-id}/events/{event-id}/permanentDelete — users.user.events.event.permanentDelete: Invoke action permanentDelete
- POST /users/{user-id}/events/{event-id}/snoozeReminder — users.user.events.event.snoozeReminder: Invoke action snoozeReminder
- POST /users/{user-id}/events/{event-id}/tentativelyAccept — users.user.events.event.tentativelyAccept: Invoke action tentativelyAccept
- GET /users/{user-id}/events/$count — users.events.GetCount-d443: Get the number of the resource
- GET /users/{user-id}/events/delta() — users.user.events.delta: Invoke function delta

## users.extension
- GET /users/{user-id}/extensions — users.ListExtensions: Get extensions from users
- POST /users/{user-id}/extensions — users.CreateExtensions: Create new navigation property to extensions for users
- GET /users/{user-id}/extensions/{extension-id} — users.GetExtensions: Get extensions from users
- PATCH /users/{user-id}/extensions/{extension-id} — users.UpdateExtensions: Update the navigation property extensions in users
- DELETE /users/{user-id}/extensions/{extension-id} — users.DeleteExtensions: Delete navigation property extensions for users
- GET /users/{user-id}/extensions/$count — users.extensions.GetCount-4b1c: Get the number of the resource

## users.inferenceClassification
- GET /users/{user-id}/inferenceClassification — users.GetInferenceClassification: Get inferenceClassification from users
- PATCH /users/{user-id}/inferenceClassification — users.UpdateInferenceClassification: Update the navigation property inferenceClassification in users
- GET /users/{user-id}/inferenceClassification/overrides — users.inferenceClassification.ListOverrides: Get overrides from users
- POST /users/{user-id}/inferenceClassification/overrides — users.inferenceClassification.CreateOverrides: Create new navigation property to overrides for users
- GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id} — users.inferenceClassification.GetOverrides: Get overrides from users
- PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id} — users.inferenceClassification.UpdateOverrides: Update the navigation property overrides in users
- DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id} — users.inferenceClassification.DeleteOverrides: Delete navigation property overrides for users
- GET /users/{user-id}/inferenceClassification/overrides/$count — users.inferenceClassification.overrides.GetCount-f355: Get the number of the resource

## users.itemInsights
- GET /users/{user-id}/insights — users.GetInsights: Get insights from users
- PATCH /users/{user-id}/insights — users.UpdateInsights: Update the navigation property insights in users
- DELETE /users/{user-id}/insights — users.DeleteInsights: Delete navigation property insights for users
- GET /users/{user-id}/insights/shared — users.insights.ListShared: Get shared from users (deprecated)
- POST /users/{user-id}/insights/shared — users.insights.CreateShared: Create new navigation property to shared for users (deprecated)
- GET /users/{user-id}/insights/shared/{sharedInsight-id} — users.insights.GetShared: Get shared from users (deprecated)
- PATCH /users/{user-id}/insights/shared/{sharedInsight-id} — users.insights.UpdateShared: Update the navigation property shared in users (deprecated)
- DELETE /users/{user-id}/insights/shared/{sharedInsight-id} — users.insights.DeleteShared: Delete navigation property shared for users (deprecated)
- GET /users/{user-id}/insights/shared/$count — users.insights.shared.GetCount-bfe2: Get the number of the resource (deprecated)
- GET /users/{user-id}/insights/trending — users.insights.ListTrending: Get trending from users
- POST /users/{user-id}/insights/trending — users.insights.CreateTrending: Create new navigation property to trending for users
- GET /users/{user-id}/insights/trending/{trending-id} — users.insights.GetTrending: Get trending from users
- PATCH /users/{user-id}/insights/trending/{trending-id} — users.insights.UpdateTrending: Update the navigation property trending in users
- DELETE /users/{user-id}/insights/trending/{trending-id} — users.insights.DeleteTrending: Delete navigation property trending for users
- GET /users/{user-id}/insights/trending/$count — users.insights.trending.GetCount-9a67: Get the number of the resource
- GET /users/{user-id}/insights/used — users.insights.ListUsed: Get used from users (deprecated)
- POST /users/{user-id}/insights/used — users.insights.CreateUsed: Create new navigation property to used for users (deprecated)
- GET /users/{user-id}/insights/used/{usedInsight-id} — users.insights.GetUsed: Get used from users (deprecated)
- PATCH /users/{user-id}/insights/used/{usedInsight-id} — users.insights.UpdateUsed: Update the navigation property used in users (deprecated)
- DELETE /users/{user-id}/insights/used/{usedInsight-id} — users.insights.DeleteUsed: Delete navigation property used for users (deprecated)
- GET /users/{user-id}/insights/used/$count — users.insights.used.GetCount-d5af: Get the number of the resource (deprecated)

## users.licenseDetails
- GET /users/{user-id}/licenseDetails — users.ListLicenseDetails: Get licenseDetails from users
- POST /users/{user-id}/licenseDetails — users.CreateLicenseDetails: Create new navigation property to licenseDetails for users
- GET /users/{user-id}/licenseDetails/{licenseDetails-id} — users.GetLicenseDetails: Get licenseDetails from users
- PATCH /users/{user-id}/licenseDetails/{licenseDetails-id} — users.UpdateLicenseDetails: Update the navigation property licenseDetails in users
- DELETE /users/{user-id}/licenseDetails/{licenseDetails-id} — users.DeleteLicenseDetails: Delete navigation property licenseDetails for users
- GET /users/{user-id}/licenseDetails/$count — users.licenseDetails.GetCount-a83d: Get the number of the resource
- GET /users/{user-id}/licenseDetails/getTeamsLicensingDetails() — users.user.licenseDetails.getTeamsLicensingDetails: Invoke function getTeamsLicensingDetails

## users.mailFolder
- GET /users/{user-id}/mailFolders — users.ListMailFolders: Get mailFolders from users
- POST /users/{user-id}/mailFolders — users.CreateMailFolders: Create new navigation property to mailFolders for users
- GET /users/{user-id}/mailFolders/{mailFolder-id} — users.GetMailFolders: Get mailFolders from users
- PATCH /users/{user-id}/mailFolders/{mailFolder-id} — users.UpdateMailFolders: Update the navigation property mailFolders in users
- DELETE /users/{user-id}/mailFolders/{mailFolder-id} — users.DeleteMailFolders: Delete navigation property mailFolders for users
- GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders — users.mailFolders.ListChildFolders: Get childFolders from users
- POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders — users.mailFolders.CreateChildFolders: Create new navigation property to childFolders for users
- GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules — users.mailFolders.ListMessageRules: Get messageRules from users
- POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules — users.mailFolders.CreateMessageRules: Create new navigation property to messageRules for users
- GET /users/{user-id}/mailFolders/{mailFolder-id}/messages — users.mailFolders.ListMessages: Get messages from users
- POST /users/{user-id}/mailFolders/{mailFolder-id}/messages — users.mailFolders.CreateMessages: Create new navigation property to messages for users
- POST /users/{user-id}/mailFolders/{mailFolder-id}/copy — users.user.mailFolders.mailFolder.copy: Invoke action copy
- POST /users/{user-id}/mailFolders/{mailFolder-id}/move — users.user.mailFolders.mailFolder.move: Invoke action move
- POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete — users.user.mailFolders.mailFolder.permanentDelete: Invoke action permanentDelete
- GET /users/{user-id}/mailFolders/$count — users.mailFolders.GetCount-7dc9: Get the number of the resource
- GET /users/{user-id}/mailFolders/delta() — users.user.mailFolders.delta: Invoke function delta

## users.mailboxSettings
- GET /users/{user-id}/mailboxSettings — users.GetMailboxSettings: Get mailboxSettings property value
- PATCH /users/{user-id}/mailboxSettings — users.UpdateMailboxSettings: Update property mailboxSettings value.

## users.managedAppRegistration
- GET /users/{user-id}/managedAppRegistrations — users.ListManagedAppRegistrations: Get managedAppRegistrations from users
- GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id} — users.GetManagedAppRegistrations: Get managedAppRegistrations from users
- GET /users/{user-id}/managedAppRegistrations/$count — users.managedAppRegistrations.GetCount-9add: Get the number of the resource

## users.managedDevice
- GET /users/{user-id}/managedDevices — users.ListManagedDevices: Get managedDevices from users
- POST /users/{user-id}/managedDevices — users.CreateManagedDevices: Create new navigation property to managedDevices for users
- GET /users/{user-id}/managedDevices/{managedDevice-id} — users.GetManagedDevices: Get managedDevices from users
- PATCH /users/{user-id}/managedDevices/{managedDevice-id} — users.UpdateManagedDevices: Update the navigation property managedDevices in users
- DELETE /users/{user-id}/managedDevices/{managedDevice-id} — users.DeleteManagedDevices: Delete navigation property managedDevices for users
- GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory — users.managedDevices.GetDeviceCategory: Get deviceCategory from users
- PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory — users.managedDevices.UpdateDeviceCategory: Update the navigation property deviceCategory in users
- DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory — users.managedDevices.DeleteDeviceCategory: Delete navigation property deviceCategory for users
- GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates — users.managedDevices.ListDeviceCompliancePolicyStates: Get deviceCompliancePolicyStates from users
- POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates — users.managedDevices.CreateDeviceCompliancePolicyStates: Create new navigation property to deviceCompliancePolicyStates for users
- GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates — users.managedDevices.ListDeviceConfigurationStates: Get deviceConfigurationStates from users
- POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates — users.managedDevices.CreateDeviceConfigurationStates: Create new navigation property to deviceConfigurationStates for users
- GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests — users.managedDevices.ListLogCollectionRequests: Get logCollectionRequests from users
- POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests — users.managedDevices.CreateLogCollectionRequests: Create new navigation property to logCollectionRequests for users
- POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock — users.user.managedDevices.managedDevice.bypassActivationLock: Invoke action bypassActivationLock
- POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice — users.user.managedDevices.managedDevice.cleanWindowsDevice: Invoke action cleanWindowsDevice
- POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice — users.user.managedDevices.managedDevice.deleteUserFromSharedAppleDevice: Invoke action deleteUserFromSharedAppleDevice
- POST /users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode — users.user.managedDevices.managedDevice.disableLostMode: Invoke action disableLostMode
- POST /users/{user-id}/managedDevices/{managedDevice-id}/locateDevice — users.user.managedDevices.managedDevice.locateDevice: Invoke action locateDevice
- POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser — users.user.managedDevices.managedDevice.logoutSharedAppleDeviceActiveUser: Invoke action logoutSharedAppleDeviceActiveUser
- POST /users/{user-id}/managedDevices/{managedDevice-id}/rebootNow — users.user.managedDevices.managedDevice.rebootNow: Invoke action rebootNow
- POST /users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode — users.user.managedDevices.managedDevice.recoverPasscode: Invoke action recoverPasscode
- POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock — users.user.managedDevices.managedDevice.remoteLock: Invoke action remoteLock
- POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance — users.user.managedDevices.managedDevice.requestRemoteAssistance: Invoke action requestRemoteAssistance
- POST /users/{user-id}/managedDevices/{managedDevice-id}/resetPasscode — users.user.managedDevices.managedDevice.resetPasscode: Invoke action resetPasscode
- POST /users/{user-id}/managedDevices/{managedDevice-id}/retire — users.user.managedDevices.managedDevice.retire: Invoke action retire
- POST /users/{user-id}/managedDevices/{managedDevice-id}/shutDown — users.user.managedDevices.managedDevice.shutDown: Invoke action shutDown
- POST /users/{user-id}/managedDevices/{managedDevice-id}/syncDevice — users.user.managedDevices.managedDevice.syncDevice: Invoke action syncDevice
- POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount — users.user.managedDevices.managedDevice.updateWindowsDeviceAccount: Invoke action updateWindowsDeviceAccount
- POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderScan — users.user.managedDevices.managedDevice.windowsDefenderScan: Invoke action windowsDefenderScan
- POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures — users.user.managedDevices.managedDevice.windowsDefenderUpdateSignatures: Invoke action windowsDefenderUpdateSignatures
- POST /users/{user-id}/managedDevices/{managedDevice-id}/wipe — users.user.managedDevices.managedDevice.wipe: Invoke action wipe
- GET /users/{user-id}/managedDevices/{managedDevice-id}/users — users.managedDevices.ListUsers: Get users from users
- GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState — users.managedDevices.GetWindowsProtectionState: Get windowsProtectionState from users
- PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState — users.managedDevices.UpdateWindowsProtectionState: Update the navigation property windowsProtectionState in users
- DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState — users.managedDevices.DeleteWindowsProtectionState: Delete navigation property windowsProtectionState for users
- GET /users/{user-id}/managedDevices/$count — users.managedDevices.GetCount-9db6: Get the number of the resource

## users.message
- GET /users/{user-id}/messages — users.ListMessages: Get messages from users
- POST /users/{user-id}/messages — users.CreateMessages: Create new navigation property to messages for users
- GET /users/{user-id}/messages/{message-id} — users.GetMessages: Get messages from users
- PATCH /users/{user-id}/messages/{message-id} — users.UpdateMessages: Update the navigation property messages in users
- DELETE /users/{user-id}/messages/{message-id} — users.DeleteMessages: Delete navigation property messages for users
- GET /users/{user-id}/messages/{message-id}/$value — users.GetMessagesContent: Get media content for the navigation property messages from users
- PUT /users/{user-id}/messages/{message-id}/$value — users.UpdateMessagesContent: Update media content for the navigation property messages in users
- DELETE /users/{user-id}/messages/{message-id}/$value — users.DeleteMessagesContent: Delete media content for the navigation property messages in users
- GET /users/{user-id}/messages/{message-id}/attachments — users.messages.ListAttachments: Get attachments from users
- POST /users/{user-id}/messages/{message-id}/attachments — users.messages.CreateAttachments: Create new navigation property to attachments for users
- GET /users/{user-id}/messages/{message-id}/extensions — users.messages.ListExtensions: Get extensions from users
- POST /users/{user-id}/messages/{message-id}/extensions — users.messages.CreateExtensions: Create new navigation property to extensions for users
- POST /users/{user-id}/messages/{message-id}/copy — users.user.messages.message.copy: Invoke action copy
- POST /users/{user-id}/messages/{message-id}/createForward — users.user.messages.message.createForward: Invoke action createForward
- POST /users/{user-id}/messages/{message-id}/createReply — users.user.messages.message.createReply: Invoke action createReply
- POST /users/{user-id}/messages/{message-id}/createReplyAll — users.user.messages.message.createReplyAll: Invoke action createReplyAll
- POST /users/{user-id}/messages/{message-id}/forward — users.user.messages.message.forward: Invoke action forward
- POST /users/{user-id}/messages/{message-id}/move — users.user.messages.message.move: Invoke action move
- POST /users/{user-id}/messages/{message-id}/permanentDelete — users.user.messages.message.permanentDelete: Invoke action permanentDelete
- POST /users/{user-id}/messages/{message-id}/reply — users.user.messages.message.reply: Invoke action reply
- POST /users/{user-id}/messages/{message-id}/replyAll — users.user.messages.message.replyAll: Invoke action replyAll
- POST /users/{user-id}/messages/{message-id}/send — users.user.messages.message.send: Invoke action send
- GET /users/{user-id}/messages/$count — users.messages.GetCount-0f52: Get the number of the resource
- GET /users/{user-id}/messages/delta() — users.user.messages.delta: Invoke function delta

## users.oAuth2PermissionGrant
- GET /users/{user-id}/oauth2PermissionGrants — users.ListOauth2PermissionGrants: List a user's oauth2PermissionGrants
- GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id} — users.GetOauth2PermissionGrants: Get oauth2PermissionGrants from users
- GET /users/{user-id}/oauth2PermissionGrants/$count — users.oauth2PermissionGrants.GetCount-fb7b: Get the number of the resource

## users.onPremisesSyncBehavior
- GET /users/{user-id}/onPremisesSyncBehavior — users.GetOnPremisesSyncBehavior: Get onPremisesSyncBehavior from users
- PATCH /users/{user-id}/onPremisesSyncBehavior — users.UpdateOnPremisesSyncBehavior: Update the navigation property onPremisesSyncBehavior in users
- DELETE /users/{user-id}/onPremisesSyncBehavior — users.DeleteOnPremisesSyncBehavior: Delete navigation property onPremisesSyncBehavior for users

## users.onenote
- GET /users/{user-id}/onenote — users.GetOnenote: Get onenote from users
- PATCH /users/{user-id}/onenote — users.UpdateOnenote: Update the navigation property onenote in users
- DELETE /users/{user-id}/onenote — users.DeleteOnenote: Delete navigation property onenote for users
- GET /users/{user-id}/onenote/notebooks — users.onenote.ListNotebooks: Get notebooks from users
- POST /users/{user-id}/onenote/notebooks — users.onenote.CreateNotebooks: Create new navigation property to notebooks for users
- GET /users/{user-id}/onenote/notebooks/{notebook-id} — users.onenote.GetNotebooks: Get notebooks from users
- PATCH /users/{user-id}/onenote/notebooks/{notebook-id} — users.onenote.UpdateNotebooks: Update the navigation property notebooks in users
- DELETE /users/{user-id}/onenote/notebooks/{notebook-id} — users.onenote.DeleteNotebooks: Delete navigation property notebooks for users
- GET /users/{user-id}/onenote/notebooks/$count — users.onenote.notebooks.GetCount-af06: Get the number of the resource
- POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl — users.user.onenote.notebooks.getNotebookFromWebUrl: Invoke action getNotebookFromWebUrl
- GET /users/{user-id}/onenote/notebooks/getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks}) — users.user.onenote.notebooks.getRecentNotebooks: Invoke function getRecentNotebooks
- GET /users/{user-id}/onenote/operations — users.onenote.ListOperations: Get operations from users
- POST /users/{user-id}/onenote/operations — users.onenote.CreateOperations: Create new navigation property to operations for users
- GET /users/{user-id}/onenote/operations/{onenoteOperation-id} — users.onenote.GetOperations: Get operations from users
- PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id} — users.onenote.UpdateOperations: Update the navigation property operations in users
- DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id} — users.onenote.DeleteOperations: Delete navigation property operations for users
- GET /users/{user-id}/onenote/operations/$count — users.onenote.operations.GetCount-adfa: Get the number of the resource
- GET /users/{user-id}/onenote/pages — users.onenote.ListPages: Get pages from users
- POST /users/{user-id}/onenote/pages — users.onenote.CreatePages: Create new navigation property to pages for users
- GET /users/{user-id}/onenote/pages/{onenotePage-id} — users.onenote.GetPages: Get pages from users
- PATCH /users/{user-id}/onenote/pages/{onenotePage-id} — users.onenote.UpdatePages: Update the navigation property pages in users
- DELETE /users/{user-id}/onenote/pages/{onenotePage-id} — users.onenote.DeletePages: Delete navigation property pages for users
- GET /users/{user-id}/onenote/pages/$count — users.onenote.pages.GetCount-b080: Get the number of the resource
- GET /users/{user-id}/onenote/resources — users.onenote.ListResources: Get resources from users
- POST /users/{user-id}/onenote/resources — users.onenote.CreateResources: Create new navigation property to resources for users
- GET /users/{user-id}/onenote/resources/{onenoteResource-id} — users.onenote.GetResources: Get resources from users
- PATCH /users/{user-id}/onenote/resources/{onenoteResource-id} — users.onenote.UpdateResources: Update the navigation property resources in users
- DELETE /users/{user-id}/onenote/resources/{onenoteResource-id} — users.onenote.DeleteResources: Delete navigation property resources for users
- GET /users/{user-id}/onenote/resources/$count — users.onenote.resources.GetCount-dba6: Get the number of the resource
- GET /users/{user-id}/onenote/sectionGroups — users.onenote.ListSectionGroups: Get sectionGroups from users
- POST /users/{user-id}/onenote/sectionGroups — users.onenote.CreateSectionGroups: Create new navigation property to sectionGroups for users
- GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id} — users.onenote.GetSectionGroups: Get sectionGroups from users
- PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id} — users.onenote.UpdateSectionGroups: Update the navigation property sectionGroups in users
- DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id} — users.onenote.DeleteSectionGroups: Delete navigation property sectionGroups for users
- GET /users/{user-id}/onenote/sectionGroups/$count — users.onenote.sectionGroups.GetCount-497a: Get the number of the resource
- GET /users/{user-id}/onenote/sections — users.onenote.ListSections: Get sections from users
- POST /users/{user-id}/onenote/sections — users.onenote.CreateSections: Create new navigation property to sections for users
- GET /users/{user-id}/onenote/sections/{onenoteSection-id} — users.onenote.GetSections: Get sections from users
- PATCH /users/{user-id}/onenote/sections/{onenoteSection-id} — users.onenote.UpdateSections: Update the navigation property sections in users
- DELETE /users/{user-id}/onenote/sections/{onenoteSection-id} — users.onenote.DeleteSections: Delete navigation property sections for users
- GET /users/{user-id}/onenote/sections/$count — users.onenote.sections.GetCount-8b0b: Get the number of the resource

## users.onlineMeeting
- GET /users/{user-id}/onlineMeetings — users.ListOnlineMeetings: Get onlineMeetings from users
- POST /users/{user-id}/onlineMeetings — users.CreateOnlineMeetings: Create new navigation property to onlineMeetings for users
- GET /users/{user-id}/onlineMeetings/{onlineMeeting-id} — users.GetOnlineMeetings: Get onlineMeetings from users
- PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id} — users.UpdateOnlineMeetings: Update the navigation property onlineMeetings in users
- DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id} — users.DeleteOnlineMeetings: Delete navigation property onlineMeetings for users
- GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports — users.onlineMeetings.ListAttendanceReports: Get attendanceReports from users
- POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports — users.onlineMeetings.CreateAttendanceReports: Create new navigation property to attendanceReports for users
- GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport — users.GetOnlineMeetingsAttendeeReport: Get attendeeReport for the navigation property onlineMeetings from users
- PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport — users.UpdateOnlineMeetingsAttendeeReport: Update attendeeReport for the navigation property onlineMeetings in users
- DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport — users.DeleteOnlineMeetingsAttendeeReport: Delete attendeeReport for the navigation property onlineMeetings in users
- GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/getVirtualAppointmentJoinWebUrl() — users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl: Invoke function getVirtualAppointmentJoinWebUrl
- POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms — users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms: Invoke action sendVirtualAppointmentReminderSms
- POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms — users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms: Invoke action sendVirtualAppointmentSms
- GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings — users.onlineMeetings.ListRecordings: Get callRecording
- POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings — users.onlineMeetings.CreateRecordings: Create new navigation property to recordings for users
- GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts — users.onlineMeetings.ListTranscripts: List transcripts
- POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts — users.onlineMeetings.CreateTranscripts: Create new navigation property to transcripts for users
- GET /users/{user-id}/onlineMeetings/$count — users.onlineMeetings.GetCount-1fc7: Get the number of the resource
- POST /users/{user-id}/onlineMeetings/createOrGet — users.user.onlineMeetings.createOrGet: Invoke action createOrGet
- GET /users/{user-id}/onlineMeetings/getAllRecordings(meetingOrganizerUserId='@meetingOrganizerUserId',startDateTime=@startDateTime,endDateTime=@endDateTime) — users.user.onlineMeetings.getAllRecordings: Invoke function getAllRecordings
- GET /users/{user-id}/onlineMeetings/getAllTranscripts(meetingOrganizerUserId='@meetingOrganizerUserId',startDateTime=@startDateTime,endDateTime=@endDateTime) — users.user.onlineMeetings.getAllTranscripts: Invoke function getAllTranscripts

## users.outlookUser
- GET /users/{user-id}/outlook — users.GetOutlook: Get outlook from users
- GET /users/{user-id}/outlook/masterCategories — users.outlook.ListMasterCategories: Get masterCategories from users
- POST /users/{user-id}/outlook/masterCategories — users.outlook.CreateMasterCategories: Create new navigation property to masterCategories for users
- GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id} — users.outlook.GetMasterCategories: Get masterCategories from users
- PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id} — users.outlook.UpdateMasterCategories: Update the navigation property masterCategories in users
- DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id} — users.outlook.DeleteMasterCategories: Delete navigation property masterCategories for users
- GET /users/{user-id}/outlook/masterCategories/$count — users.outlook.masterCategories.GetCount-8560: Get the number of the resource
- GET /users/{user-id}/outlook/supportedLanguages() — users.user.outlook.supportedLanguages: Invoke function supportedLanguages
- GET /users/{user-id}/outlook/supportedTimeZones() — users.user.outlook.supportedTimeZones-5c4f: Invoke function supportedTimeZones
- GET /users/{user-id}/outlook/supportedTimeZones(TimeZoneStandard='{TimeZoneStandard}') — users.user.outlook.supportedTimeZones-0d20: Invoke function supportedTimeZones

## users.person
- GET /users/{user-id}/people — users.ListPeople: Get people from users
- GET /users/{user-id}/people/{person-id} — users.GetPeople: Get people from users
- GET /users/{user-id}/people/$count — users.people.GetCount-d516: Get the number of the resource

## users.plannerUser
- GET /users/{user-id}/planner — users.GetPlanner: Get planner from users
- PATCH /users/{user-id}/planner — users.UpdatePlanner: Update the navigation property planner in users
- DELETE /users/{user-id}/planner — users.DeletePlanner: Delete navigation property planner for users
- GET /users/{user-id}/planner/plans — users.planner.ListPlans: Get plans from users
- POST /users/{user-id}/planner/plans — users.planner.CreatePlans: Create new navigation property to plans for users
- GET /users/{user-id}/planner/plans/{plannerPlan-id} — users.planner.GetPlans: Get plans from users
- PATCH /users/{user-id}/planner/plans/{plannerPlan-id} — users.planner.UpdatePlans: Update the navigation property plans in users
- DELETE /users/{user-id}/planner/plans/{plannerPlan-id} — users.planner.DeletePlans: Delete navigation property plans for users
- GET /users/{user-id}/planner/plans/$count — users.planner.plans.GetCount-b724: Get the number of the resource
- GET /users/{user-id}/planner/tasks — users.planner.ListTasks: Get tasks from users
- POST /users/{user-id}/planner/tasks — users.planner.CreateTasks: Create new navigation property to tasks for users
- GET /users/{user-id}/planner/tasks/{plannerTask-id} — users.planner.GetTasks: Get tasks from users
- PATCH /users/{user-id}/planner/tasks/{plannerTask-id} — users.planner.UpdateTasks: Update the navigation property tasks in users
- DELETE /users/{user-id}/planner/tasks/{plannerTask-id} — users.planner.DeleteTasks: Delete navigation property tasks for users
- GET /users/{user-id}/planner/tasks/$count — users.planner.tasks.GetCount-8740: Get the number of the resource

## users.presence
- GET /users/{user-id}/presence — users.GetPresence: Get presence
- PATCH /users/{user-id}/presence — users.UpdatePresence: Update the navigation property presence in users
- DELETE /users/{user-id}/presence — users.DeletePresence: Delete navigation property presence for users
- POST /users/{user-id}/presence/clearAutomaticLocation — users.user.presence.clearAutomaticLocation: Invoke action clearAutomaticLocation
- POST /users/{user-id}/presence/clearLocation — users.user.presence.clearLocation: Invoke action clearLocation
- POST /users/{user-id}/presence/clearPresence — users.user.presence.clearPresence: Invoke action clearPresence
- POST /users/{user-id}/presence/clearUserPreferredPresence — users.user.presence.clearUserPreferredPresence: Invoke action clearUserPreferredPresence
- POST /users/{user-id}/presence/setAutomaticLocation — users.user.presence.setAutomaticLocation: Invoke action setAutomaticLocation
- POST /users/{user-id}/presence/setManualLocation — users.user.presence.setManualLocation: Invoke action setManualLocation
- POST /users/{user-id}/presence/setPresence — users.user.presence.setPresence: Invoke action setPresence
- POST /users/{user-id}/presence/setStatusMessage — users.user.presence.setStatusMessage: Invoke action setStatusMessage
- POST /users/{user-id}/presence/setUserPreferredPresence — users.user.presence.setUserPreferredPresence: Invoke action setUserPreferredPresence

## users.profilePhoto
- GET /users/{user-id}/photo — users.GetPhoto: Get photo from users
- PATCH /users/{user-id}/photo — users.UpdatePhoto: Update the navigation property photo in users
- DELETE /users/{user-id}/photo — users.DeletePhoto: Delete navigation property photo for users
- GET /users/{user-id}/photo/$value — users.GetPhotoContent: Get media content for the navigation property photo from users
- PUT /users/{user-id}/photo/$value — users.UpdatePhotoContent: Update media content for the navigation property photo in users
- DELETE /users/{user-id}/photo/$value — users.DeletePhotoContent: Delete media content for the navigation property photo in users
- GET /users/{user-id}/photos — users.ListPhotos: Get photos from users
- GET /users/{user-id}/photos/{profilePhoto-id} — users.GetPhotos: Get photos from users
- GET /users/{user-id}/photos/{profilePhoto-id}/$value — users.GetPhotosContent: Get media content for the navigation property photos from users
- PUT /users/{user-id}/photos/{profilePhoto-id}/$value — users.UpdatePhotosContent: Update media content for the navigation property photos in users
- DELETE /users/{user-id}/photos/{profilePhoto-id}/$value — users.DeletePhotosContent: Delete media content for the navigation property photos in users

## users.resourceSpecificPermissionGrant
- GET /users/{user-id}/permissionGrants — users.ListPermissionGrants: List permissionGrants of a user
- POST /users/{user-id}/permissionGrants — users.CreatePermissionGrants: Create new navigation property to permissionGrants for users
- GET /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — users.GetPermissionGrants: Get permissionGrants from users
- PATCH /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — users.UpdatePermissionGrants: Update the navigation property permissionGrants in users
- DELETE /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id} — users.DeletePermissionGrants: Delete navigation property permissionGrants for users
- GET /users/{user-id}/permissionGrants/$count — users.permissionGrants.GetCount-07aa: Get the number of the resource

## users.scopedRoleMembership
- GET /users/{user-id}/scopedRoleMemberOf — users.ListScopedRoleMemberOf: Get scopedRoleMemberOf from users
- POST /users/{user-id}/scopedRoleMemberOf — users.CreateScopedRoleMemberOf: Create new navigation property to scopedRoleMemberOf for users
- GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id} — users.GetScopedRoleMemberOf: Get scopedRoleMemberOf from users
- PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id} — users.UpdateScopedRoleMemberOf: Update the navigation property scopedRoleMemberOf in users
- DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id} — users.DeleteScopedRoleMemberOf: Delete navigation property scopedRoleMemberOf for users
- GET /users/{user-id}/scopedRoleMemberOf/$count — users.scopedRoleMemberOf.GetCount-0e30: Get the number of the resource

## users.serviceProvisioningError
- GET /users/{user-id}/serviceProvisioningErrors — users.ListServiceProvisioningErrors: Get serviceProvisioningErrors property value
- GET /users/{user-id}/serviceProvisioningErrors/$count — users.ServiceProvisioningErrors.GetCount-bccc: Get the number of the resource

## users.site
- GET /users/{user-id}/followedSites — users.ListFollowedSites: Get followedSites from users
- GET /users/{user-id}/followedSites/{site-id} — users.GetFollowedSites: Get followedSites from users
- GET /users/{user-id}/followedSites/$count — users.followedSites.GetCount-40c9: Get the number of the resource
- POST /users/{user-id}/followedSites/add — users.user.followedSites.add: Invoke action add
- POST /users/{user-id}/followedSites/remove — users.user.followedSites.remove: Invoke action remove

## users.team
- GET /users/{user-id}/joinedTeams — users.ListJoinedTeams: Get joinedTeams from users
- POST /users/{user-id}/joinedTeams — users.CreateJoinedTeams: Create new navigation property to joinedTeams for users
- GET /users/{user-id}/joinedTeams/{team-id} — users.GetJoinedTeams: Get joinedTeams from users
- PATCH /users/{user-id}/joinedTeams/{team-id} — users.UpdateJoinedTeams: Update the navigation property joinedTeams in users
- DELETE /users/{user-id}/joinedTeams/{team-id} — users.DeleteJoinedTeams: Delete navigation property joinedTeams for users
- GET /users/{user-id}/joinedTeams/{team-id}/allChannels — users.joinedTeams.ListAllChannels: Get allChannels from users
- GET /users/{user-id}/joinedTeams/{team-id}/channels — users.joinedTeams.ListChannels: Get channels from users
- POST /users/{user-id}/joinedTeams/{team-id}/channels — users.joinedTeams.CreateChannels: Create new navigation property to channels for users
- GET /users/{user-id}/joinedTeams/{team-id}/group — users.joinedTeams.GetGroup: Get group from users
- GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels — users.joinedTeams.ListIncomingChannels: Get incomingChannels from users
- GET /users/{user-id}/joinedTeams/{team-id}/installedApps — users.joinedTeams.ListInstalledApps: Get installedApps from users
- POST /users/{user-id}/joinedTeams/{team-id}/installedApps — users.joinedTeams.CreateInstalledApps: Create new navigation property to installedApps for users
- GET /users/{user-id}/joinedTeams/{team-id}/members — users.joinedTeams.ListMembers: Get members from users
- POST /users/{user-id}/joinedTeams/{team-id}/members — users.joinedTeams.CreateMembers: Create new navigation property to members for users
- POST /users/{user-id}/joinedTeams/{team-id}/archive — users.user.joinedTeams.team.archive: Invoke action archive
- POST /users/{user-id}/joinedTeams/{team-id}/clone — users.user.joinedTeams.team.clone: Invoke action clone
- POST /users/{user-id}/joinedTeams/{team-id}/completeMigration — users.user.joinedTeams.team.completeMigration: Invoke action completeMigration
- POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification — users.user.joinedTeams.team.sendActivityNotification: Invoke action sendActivityNotification
- POST /users/{user-id}/joinedTeams/{team-id}/unarchive — users.user.joinedTeams.team.unarchive: Invoke action unarchive
- GET /users/{user-id}/joinedTeams/{team-id}/operations — users.joinedTeams.ListOperations: Get operations from users
- POST /users/{user-id}/joinedTeams/{team-id}/operations — users.joinedTeams.CreateOperations: Create new navigation property to operations for users
- GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants — users.joinedTeams.ListPermissionGrants: Get permissionGrants from users
- POST /users/{user-id}/joinedTeams/{team-id}/permissionGrants — users.joinedTeams.CreatePermissionGrants: Create new navigation property to permissionGrants for users
- GET /users/{user-id}/joinedTeams/{team-id}/photo — users.joinedTeams.GetPhoto: Get photo from users
- PATCH /users/{user-id}/joinedTeams/{team-id}/photo — users.joinedTeams.UpdatePhoto: Update the navigation property photo in users
- GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel — users.joinedTeams.GetPrimaryChannel: Get primaryChannel from users
- PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel — users.joinedTeams.UpdatePrimaryChannel: Update the navigation property primaryChannel in users
- DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel — users.joinedTeams.DeletePrimaryChannel: Delete navigation property primaryChannel for users
- GET /users/{user-id}/joinedTeams/{team-id}/schedule — users.joinedTeams.GetSchedule: Get schedule from users
- PUT /users/{user-id}/joinedTeams/{team-id}/schedule — users.joinedTeams.SetSchedule: Update the navigation property schedule in users
- DELETE /users/{user-id}/joinedTeams/{team-id}/schedule — users.joinedTeams.DeleteSchedule: Delete navigation property schedule for users
- GET /users/{user-id}/joinedTeams/{team-id}/tags — users.joinedTeams.ListTags: Get tags from users
- POST /users/{user-id}/joinedTeams/{team-id}/tags — users.joinedTeams.CreateTags: Create new navigation property to tags for users
- GET /users/{user-id}/joinedTeams/{team-id}/template — users.joinedTeams.GetTemplate: Get template from users
- GET /users/{user-id}/joinedTeams/$count — users.joinedTeams.GetCount-0d57: Get the number of the resource
- GET /users/{user-id}/joinedTeams/getAllMessages() — users.user.joinedTeams.getAllMessages: Invoke function getAllMessages

## users.todo
- GET /users/{user-id}/todo — users.GetTodo: Get todo from users
- PATCH /users/{user-id}/todo — users.UpdateTodo: Update the navigation property todo in users
- DELETE /users/{user-id}/todo — users.DeleteTodo: Delete navigation property todo for users
- GET /users/{user-id}/todo/lists — users.todo.ListLists: Get lists from users
- POST /users/{user-id}/todo/lists — users.todo.CreateLists: Create new navigation property to lists for users
- GET /users/{user-id}/todo/lists/{todoTaskList-id} — users.todo.GetLists: Get lists from users
- PATCH /users/{user-id}/todo/lists/{todoTaskList-id} — users.todo.UpdateLists: Update the navigation property lists in users
- DELETE /users/{user-id}/todo/lists/{todoTaskList-id} — users.todo.DeleteLists: Delete navigation property lists for users
- GET /users/{user-id}/todo/lists/$count — users.todo.lists.GetCount-47c4: Get the number of the resource
- GET /users/{user-id}/todo/lists/delta() — users.user.todo.lists.delta: Invoke function delta

## users.user
- GET /users — users.user.ListUser: List users
- POST /users — users.user.CreateUser: Create User
- GET /users/{user-id} — users.user.GetUser: Get a user
- PATCH /users/{user-id} — users.user.UpdateUser: Update user
- DELETE /users/{user-id} — users.user.DeleteUser: Delete a user
- GET /users/$count — users.GetCount-ee47: Get the number of the resource

## users.user.Actions
- POST /users/{user-id}/assignLicense — users.user.assignLicense: Invoke action assignLicense
- POST /users/{user-id}/changePassword — users.user.changePassword: Invoke action changePassword
- POST /users/{user-id}/checkMemberGroups — users.user.checkMemberGroups: Invoke action checkMemberGroups
- POST /users/{user-id}/checkMemberObjects — users.user.checkMemberObjects: Invoke action checkMemberObjects
- POST /users/{user-id}/exportPersonalData — users.user.exportPersonalData: Invoke action exportPersonalData
- POST /users/{user-id}/findMeetingTimes — users.user.findMeetingTimes: Invoke action findMeetingTimes
- POST /users/{user-id}/getMailTips — users.user.getMailTips: Invoke action getMailTips
- POST /users/{user-id}/getMemberGroups — users.user.getMemberGroups: Invoke action getMemberGroups
- POST /users/{user-id}/getMemberObjects — users.user.getMemberObjects: Invoke action getMemberObjects
- POST /users/{user-id}/removeAllDevicesFromManagement — users.user.removeAllDevicesFromManagement: Invoke action removeAllDevicesFromManagement
- POST /users/{user-id}/reprocessLicenseAssignment — users.user.reprocessLicenseAssignment: Invoke action reprocessLicenseAssignment
- POST /users/{user-id}/restore — users.user.restore: Invoke action restore
- POST /users/{user-id}/retryServiceProvisioning — users.user.retryServiceProvisioning: Invoke action retryServiceProvisioning
- POST /users/{user-id}/revokeSignInSessions — users.user.revokeSignInSessions: Invoke action revokeSignInSessions
- POST /users/{user-id}/sendMail — users.user.sendMail: Invoke action sendMail
- POST /users/{user-id}/translateExchangeIds — users.user.translateExchangeIds: Invoke action translateExchangeIds
- POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag — users.user.wipeManagedAppRegistrationsByDeviceTag: Invoke action wipeManagedAppRegistrationsByDeviceTag
- POST /users/getAvailableExtensionProperties — users.getAvailableExtensionProperties: Invoke action getAvailableExtensionProperties
- POST /users/getByIds — users.getByIds: Invoke action getByIds
- POST /users/validateProperties — users.validateProperties: Invoke action validateProperties

## users.user.Functions
- GET /users/{user-id}/exportDeviceAndAppManagementData() — users.user.exportDeviceAndAppManagementData-1a02: Invoke function exportDeviceAndAppManagementData
- GET /users/{user-id}/exportDeviceAndAppManagementData(skip={skip},top={top}) — users.user.exportDeviceAndAppManagementData-fd7c: Invoke function exportDeviceAndAppManagementData
- GET /users/{user-id}/getManagedAppDiagnosticStatuses() — users.user.getManagedAppDiagnosticStatuses: Invoke function getManagedAppDiagnosticStatuses
- GET /users/{user-id}/getManagedAppPolicies() — users.user.getManagedAppPolicies: Invoke function getManagedAppPolicies
- GET /users/{user-id}/getManagedDevicesWithAppFailures() — users.user.getManagedDevicesWithAppFailures: Invoke function getManagedDevicesWithAppFailures
- GET /users/{user-id}/reminderView(StartDateTime='{StartDateTime}',EndDateTime='{EndDateTime}') — users.user.reminderView: Invoke function reminderView
- GET /users/delta() — users.delta: Invoke function delta

## users.userActivity
- GET /users/{user-id}/activities — users.ListActivities: Get activities from users
- POST /users/{user-id}/activities — users.CreateActivities: Create new navigation property to activities for users
- GET /users/{user-id}/activities/{userActivity-id} — users.GetActivities: Get activities from users
- PATCH /users/{user-id}/activities/{userActivity-id} — users.UpdateActivities: Update the navigation property activities in users
- DELETE /users/{user-id}/activities/{userActivity-id} — users.DeleteActivities: Delete navigation property activities for users
- GET /users/{user-id}/activities/{userActivity-id}/historyItems — users.activities.ListHistoryItems: Get historyItems from users
- POST /users/{user-id}/activities/{userActivity-id}/historyItems — users.activities.CreateHistoryItems: Create new navigation property to historyItems for users
- GET /users/{user-id}/activities/$count — users.activities.GetCount-39cc: Get the number of the resource
- GET /users/{user-id}/activities/recent() — users.user.activities.recent: Invoke function recent

## users.userDataSecurityAndGovernance
- GET /users/{user-id}/dataSecurityAndGovernance — users.GetDataSecurityAndGovernance: Get dataSecurityAndGovernance from users
- PATCH /users/{user-id}/dataSecurityAndGovernance — users.UpdateDataSecurityAndGovernance: Update the navigation property dataSecurityAndGovernance in users
- DELETE /users/{user-id}/dataSecurityAndGovernance — users.DeleteDataSecurityAndGovernance: Delete navigation property dataSecurityAndGovernance for users
- GET /users/{user-id}/dataSecurityAndGovernance/activities — users.dataSecurityAndGovernance.GetActivities: Get activities from users
- PATCH /users/{user-id}/dataSecurityAndGovernance/activities — users.dataSecurityAndGovernance.UpdateActivities: Update the navigation property activities in users
- DELETE /users/{user-id}/dataSecurityAndGovernance/activities — users.dataSecurityAndGovernance.DeleteActivities: Delete navigation property activities for users
- GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities — users.dataSecurityAndGovernance.activities.ListContentActivities: Get contentActivities from users
- POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities — users.dataSecurityAndGovernance.activities.CreateContentActivities: Create new navigation property to contentActivities for users
- POST /users/{user-id}/dataSecurityAndGovernance/processContent — users.user.dataSecurityAndGovernance.processContent: Invoke action processContent
- GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes — users.dataSecurityAndGovernance.GetProtectionScopes: Get protectionScopes from users
- PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes — users.dataSecurityAndGovernance.UpdateProtectionScopes: Update the navigation property protectionScopes in users
- DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes — users.dataSecurityAndGovernance.DeleteProtectionScopes: Delete navigation property protectionScopes for users
- POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute — users.user.dataSecurityAndGovernance.protectionScopes.compute: Invoke action compute
- GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels — users.dataSecurityAndGovernance.ListSensitivityLabels: Get sensitivityLabels from users
- POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels — users.dataSecurityAndGovernance.CreateSensitivityLabels: Create new navigation property to sensitivityLabels for users
- GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id} — users.dataSecurityAndGovernance.GetSensitivityLabels: Get sensitivityLabels from users
- PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id} — users.dataSecurityAndGovernance.UpdateSensitivityLabels: Update the navigation property sensitivityLabels in users
- DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id} — users.dataSecurityAndGovernance.DeleteSensitivityLabels: Delete navigation property sensitivityLabels for users
- GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/$count — users.dataSecurityAndGovernance.sensitivityLabels.GetCount-8e86: Get the number of the resource
- GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeInheritance(labelIds={labelIds},locale='{locale}',contentFormats={contentFormats}) — users.user.dataSecurityAndGovernance.sensitivityLabels.computeInheritance: Invoke function computeInheritance
- POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance — users.user.dataSecurityAndGovernance.sensitivityLabels.computeRightsAndInheritance: Invoke action computeRightsAndInheritance

## users.userSettings
- GET /users/{user-id}/settings — users.GetSettings: Get settings from users
- PATCH /users/{user-id}/settings — users.UpdateSettings: Update the navigation property settings in users
- DELETE /users/{user-id}/settings — users.DeleteSettings: Delete navigation property settings for users
- GET /users/{user-id}/settings/exchange — users.settings.GetExchange: List Exchange settings
- GET /users/{user-id}/settings/itemInsights — users.settings.GetItemInsights: Get itemInsights from users
- PATCH /users/{user-id}/settings/itemInsights — users.settings.UpdateItemInsights: Update userInsightsSettings
- DELETE /users/{user-id}/settings/itemInsights — users.settings.DeleteItemInsights: Delete navigation property itemInsights for users
- GET /users/{user-id}/settings/shiftPreferences — users.settings.GetShiftPreferences: Get shiftPreferences
- PATCH /users/{user-id}/settings/shiftPreferences — users.settings.UpdateShiftPreferences: Update shiftPreferences
- DELETE /users/{user-id}/settings/shiftPreferences — users.settings.DeleteShiftPreferences: Delete navigation property shiftPreferences for users
- GET /users/{user-id}/settings/storage — users.settings.GetStorage: Get storage from users
- PATCH /users/{user-id}/settings/storage — users.settings.UpdateStorage: Update the navigation property storage in users
- DELETE /users/{user-id}/settings/storage — users.settings.DeleteStorage: Delete navigation property storage for users
- GET /users/{user-id}/settings/storage/quota — users.settings.storage.GetQuota: Get quota from users
- PATCH /users/{user-id}/settings/storage/quota — users.settings.storage.UpdateQuota: Update the navigation property quota in users
- DELETE /users/{user-id}/settings/storage/quota — users.settings.storage.DeleteQuota: Delete navigation property quota for users
- GET /users/{user-id}/settings/windows — users.settings.ListWindows: Get windows from users
- POST /users/{user-id}/settings/windows — users.settings.CreateWindows: Create new navigation property to windows for users
- GET /users/{user-id}/settings/windows/{windowsSetting-id} — users.settings.GetWindows: Get windows from users
- PATCH /users/{user-id}/settings/windows/{windowsSetting-id} — users.settings.UpdateWindows: Update the navigation property windows in users
- DELETE /users/{user-id}/settings/windows/{windowsSetting-id} — users.settings.DeleteWindows: Delete navigation property windows for users
- GET /users/{user-id}/settings/windows/$count — users.settings.windows.GetCount-855b: Get the number of the resource
- GET /users/{user-id}/settings/workHoursAndLocations — users.settings.GetWorkHoursAndLocations: Get workHoursAndLocations from users
- PATCH /users/{user-id}/settings/workHoursAndLocations — users.settings.UpdateWorkHoursAndLocations: Update the navigation property workHoursAndLocations in users
- GET /users/{user-id}/settings/workHoursAndLocations/occurrencesView(startDateTime='{startDateTime}',endDateTime='{endDateTime}') — users.user.settings.workHoursAndLocations.occurrencesView: Invoke function occurrencesView
- GET /users/{user-id}/settings/workHoursAndLocations/occurrences — users.settings.workHoursAndLocations.ListOccurrences: Get occurrences from users
- POST /users/{user-id}/settings/workHoursAndLocations/occurrences — users.settings.workHoursAndLocations.CreateOccurrences: Create new navigation property to occurrences for users
- GET /users/{user-id}/settings/workHoursAndLocations/recurrences — users.settings.workHoursAndLocations.ListRecurrences: Get recurrences from users
- POST /users/{user-id}/settings/workHoursAndLocations/recurrences — users.settings.workHoursAndLocations.CreateRecurrences: Create new navigation property to recurrences for users

## users.userSolutionRoot
- GET /users/{user-id}/solutions — users.GetSolutions: Get solutions from users
- PATCH /users/{user-id}/solutions — users.UpdateSolutions: Update the navigation property solutions in users
- DELETE /users/{user-id}/solutions — users.DeleteSolutions: Delete navigation property solutions for users
- GET /users/{user-id}/solutions/workingTimeSchedule — users.solutions.GetWorkingTimeSchedule: Get workingTimeSchedule from users
- PATCH /users/{user-id}/solutions/workingTimeSchedule — users.solutions.UpdateWorkingTimeSchedule: Update the navigation property workingTimeSchedule in users
- DELETE /users/{user-id}/solutions/workingTimeSchedule — users.solutions.DeleteWorkingTimeSchedule: Delete navigation property workingTimeSchedule for users
- POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime — users.user.solutions.workingTimeSchedule.endWorkingTime: Invoke action endWorkingTime
- POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime — users.user.solutions.workingTimeSchedule.startWorkingTime: Invoke action startWorkingTime

## users.userTeamwork
- GET /users/{user-id}/teamwork — users.GetTeamwork: Get userTeamwork
- PATCH /users/{user-id}/teamwork — users.UpdateTeamwork: Update the navigation property teamwork in users
- DELETE /users/{user-id}/teamwork — users.DeleteTeamwork: Delete navigation property teamwork for users
- GET /users/{user-id}/teamwork/associatedTeams — users.teamwork.ListAssociatedTeams: Get associatedTeams from users
- POST /users/{user-id}/teamwork/associatedTeams — users.teamwork.CreateAssociatedTeams: Create new navigation property to associatedTeams for users
- GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id} — users.teamwork.GetAssociatedTeams: Get associatedTeams from users
- PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id} — users.teamwork.UpdateAssociatedTeams: Update the navigation property associatedTeams in users
- DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id} — users.teamwork.DeleteAssociatedTeams: Delete navigation property associatedTeams for users
- GET /users/{user-id}/teamwork/associatedTeams/$count — users.teamwork.associatedTeams.GetCount-97ef: Get the number of the resource
- GET /users/{user-id}/teamwork/installedApps — users.teamwork.ListInstalledApps: List apps installed for user
- POST /users/{user-id}/teamwork/installedApps — users.teamwork.CreateInstalledApps: Install app for user
- GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id} — users.teamwork.GetInstalledApps: Get installed app for user
- PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id} — users.teamwork.UpdateInstalledApps: Update the navigation property installedApps in users
- DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id} — users.teamwork.DeleteInstalledApps: Uninstall app for user
- GET /users/{user-id}/teamwork/installedApps/$count — users.teamwork.installedApps.GetCount-0292: Get the number of the resource
- POST /users/{user-id}/teamwork/deleteTargetedMessage — users.user.teamwork.deleteTargetedMessage: Invoke action deleteTargetedMessage
- GET /users/{user-id}/teamwork/getAllRetainedTargetedMessages() — users.user.teamwork.getAllRetainedTargetedMessages: Invoke function getAllRetainedTargetedMessages
- GET /users/{user-id}/teamwork/getAllTargetedMessages() — users.user.teamwork.getAllTargetedMessages: Invoke function getAllTargetedMessages
- POST /users/{user-id}/teamwork/sendActivityNotification — users.user.teamwork.sendActivityNotification: Invoke action sendActivityNotification
