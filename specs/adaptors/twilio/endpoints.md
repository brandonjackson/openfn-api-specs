# Twilio - Api (twilio) v1.0.0

<!-- derived from openapi.json by `pnpm specs index twilio` — do not edit by hand -->

base: https://api.twilio.com | auth: http/basic | 197 operations in 75 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Api20100401Account
- GET /2010-04-01/Accounts.json — ListAccount: Retrieves a collection of Accounts belonging to the account used to make the request
- POST /2010-04-01/Accounts.json — CreateAccount: Create a new Twilio Subaccount from the account making the request
- GET /2010-04-01/Accounts/{Sid}.json — FetchAccount: Fetch the account specified by the provided Account Sid
- POST /2010-04-01/Accounts/{Sid}.json — UpdateAccount: Modify the properties of a given Account

## Api20100401AddOnResult
- GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json — FetchRecordingAddOnResult: Fetch an instance of an AddOnResult
- DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json — DeleteRecordingAddOnResult: Delete a result and purge all associated Payloads
- GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json — ListRecordingAddOnResult: Retrieve a list of results belonging to the recording

## Api20100401Address
- GET /2010-04-01/Accounts/{AccountSid}/Addresses.json — ListAddress
- POST /2010-04-01/Accounts/{AccountSid}/Addresses.json — CreateAddress
- GET /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json — FetchAddress
- POST /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json — UpdateAddress
- DELETE /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json — DeleteAddress

## Api20100401AllTime
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/AllTime.json — ListUsageRecordAllTime

## Api20100401Application
- GET /2010-04-01/Accounts/{AccountSid}/Applications.json — ListApplication: Retrieve a list of applications representing an application within the requesting account
- POST /2010-04-01/Accounts/{AccountSid}/Applications.json — CreateApplication: Create a new application within your account
- GET /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json — FetchApplication: Fetch the application specified by the provided sid
- POST /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json — UpdateApplication: Updates the application's properties
- DELETE /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json — DeleteApplication: Delete the application by the specified application sid

## Api20100401AssignedAddOn
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json — FetchIncomingPhoneNumberAssignedAddOn: Fetch an instance of an Add-on installation currently assigned to this Number.
- DELETE /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json — DeleteIncomingPhoneNumberAssignedAddOn: Remove the assignment of an Add-on installation from the Number specified.
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json — ListIncomingPhoneNumberAssignedAddOn: Retrieve a list of Add-on installations currently assigned to this Number.
- POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json — CreateIncomingPhoneNumberAssignedAddOn: Assign an Add-on installation to the Number specified.

## Api20100401AssignedAddOnExtension
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json — FetchIncomingPhoneNumberAssignedAddOnExtension: Fetch an instance of an Extension for the Assigned Add-on.
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json — ListIncomingPhoneNumberAssignedAddOnExtension: Retrieve a list of Extensions for the Assigned Add-on.

## Api20100401AuthCallsCredentialListMapping
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json — ListSipAuthCallsCredentialListMapping: Retrieve a list of credential list mappings belonging to the domain used in the request
- POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json — CreateSipAuthCallsCredentialListMapping: Create a new credential list mapping resource
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json — FetchSipAuthCallsCredentialListMapping: Fetch a specific instance of a credential list mapping
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json — DeleteSipAuthCallsCredentialListMapping: Delete a credential list mapping from the requested domain

## Api20100401AuthCallsIpAccessControlListMapping
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json — ListSipAuthCallsIpAccessControlListMapping: Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
- POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json — CreateSipAuthCallsIpAccessControlListMapping: Create a new IP Access Control List mapping
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json — FetchSipAuthCallsIpAccessControlListMapping: Fetch a specific instance of an IP Access Control List mapping
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json — DeleteSipAuthCallsIpAccessControlListMapping: Delete an IP Access Control List mapping from the requested domain

## Api20100401AuthRegistrationsCredentialListMapping
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json — ListSipAuthRegistrationsCredentialListMapping: Retrieve a list of credential list mappings belonging to the domain used in the request
- POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json — CreateSipAuthRegistrationsCredentialListMapping: Create a new credential list mapping resource
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json — FetchSipAuthRegistrationsCredentialListMapping: Fetch a specific instance of a credential list mapping
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json — DeleteSipAuthRegistrationsCredentialListMapping: Delete a credential list mapping from the requested domain

## Api20100401AuthorizedConnectApp
- GET /2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json — FetchAuthorizedConnectApp: Fetch an instance of an authorized-connect-app
- GET /2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json — ListAuthorizedConnectApp: Retrieve a list of authorized-connect-apps belonging to the account used to make the request

## Api20100401AvailablePhoneNumberCountry
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json — ListAvailablePhoneNumberCountry
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json — FetchAvailablePhoneNumberCountry

## Api20100401Balance
- GET /2010-04-01/Accounts/{AccountSid}/Balance.json — FetchBalance: Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information

## Api20100401Call
- GET /2010-04-01/Accounts/{AccountSid}/Calls.json — ListCall: Retrieves a collection of calls made to and from your account
- POST /2010-04-01/Accounts/{AccountSid}/Calls.json — CreateCall: Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
- GET /2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json — FetchCall: Fetch the call specified by the provided Call SID
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json — UpdateCall: Initiates a call redirect or terminates a call
- DELETE /2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json — DeleteCall: Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.

## Api20100401CallNotification
- GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json — FetchCallNotification
- GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json — ListCallNotification

## Api20100401CallRecording
- GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json — ListCallRecording: Retrieve a list of recordings belonging to the call used to make the request
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json — CreateCallRecording: Create a recording for the call
- GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json — FetchCallRecording: Fetch an instance of a recording for a call
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json — UpdateCallRecording: Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
- DELETE /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json — DeleteCallRecording: Delete a recording from your account

## Api20100401CallTranscription
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions.json — CreateRealtimeTranscription: Create a Transcription
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions/{Sid}.json — UpdateRealtimeTranscription: Stop a Transcription using either the SID of the Transcription resource or the `name` used when creating the resource

## Api20100401Conference
- GET /2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json — FetchConference: Fetch an instance of a conference
- POST /2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json — UpdateConference
- GET /2010-04-01/Accounts/{AccountSid}/Conferences.json — ListConference: Retrieve a list of conferences belonging to the account used to make the request

## Api20100401ConferenceRecording
- GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json — ListConferenceRecording: Retrieve a list of recordings belonging to the call used to make the request
- GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json — FetchConferenceRecording: Fetch an instance of a recording for a call
- POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json — UpdateConferenceRecording: Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
- DELETE /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json — DeleteConferenceRecording: Delete a recording from your account

## Api20100401ConnectApp
- GET /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json — FetchConnectApp: Fetch an instance of a connect-app
- POST /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json — UpdateConnectApp: Update a connect-app with the specified parameters
- DELETE /2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json — DeleteConnectApp: Delete an instance of a connect-app
- GET /2010-04-01/Accounts/{AccountSid}/ConnectApps.json — ListConnectApp: Retrieve a list of connect-apps belonging to the account used to make the request

## Api20100401Credential
- GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json — ListSipCredential: Retrieve a list of credentials.
- POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json — CreateSipCredential: Create a new credential resource.
- GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json — FetchSipCredential: Fetch a single credential.
- POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json — UpdateSipCredential: Update a credential resource.
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json — DeleteSipCredential: Delete a credential resource.

## Api20100401CredentialList
- GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json — ListSipCredentialList: Get All Credential Lists
- POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json — CreateSipCredentialList: Create a Credential List
- GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json — FetchSipCredentialList: Get a Credential List
- POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json — UpdateSipCredentialList: Update a Credential List
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json — DeleteSipCredentialList: Delete a Credential List

## Api20100401CredentialListMapping
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json — ListSipCredentialListMapping: Read multiple CredentialListMapping resources from an account.
- POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json — CreateSipCredentialListMapping: Create a CredentialListMapping resource for an account.
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json — FetchSipCredentialListMapping: Fetch a single CredentialListMapping resource from an account.
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json — DeleteSipCredentialListMapping: Delete a CredentialListMapping resource from an account.

## Api20100401Daily
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Daily.json — ListUsageRecordDaily

## Api20100401Data
- GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{PayloadSid}/Data.json — FetchRecordingAddOnResultPayloadData: Fetch an instance of a result payload

## Api20100401DependentPhoneNumber
- GET /2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json — ListDependentPhoneNumber

## Api20100401Domain
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains.json — ListSipDomain: Retrieve a list of domains belonging to the account used to make the request
- POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains.json — CreateSipDomain: Create a new Domain
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json — FetchSipDomain: Fetch an instance of a Domain
- POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json — UpdateSipDomain: Update the attributes of a domain
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json — DeleteSipDomain: Delete an instance of a Domain

## Api20100401Event
- GET /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Events.json — ListCallEvent: Retrieve a list of all events for a call.

## Api20100401Feedback
- POST /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json — CreateMessageFeedback: Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message

## Api20100401IncomingPhoneNumber
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json — FetchIncomingPhoneNumber: Fetch an incoming-phone-number belonging to the account used to make the request.
- POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json — UpdateIncomingPhoneNumber: Update an incoming-phone-number instance.
- DELETE /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json — DeleteIncomingPhoneNumber: Delete a phone-numbers belonging to the account used to make the request.
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json — ListIncomingPhoneNumber: Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
- POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json — CreateIncomingPhoneNumber: Purchase a phone-number for the account.

## Api20100401IncomingPhoneNumberLocal
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json — ListIncomingPhoneNumberLocal
- POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json — CreateIncomingPhoneNumberLocal

## Api20100401IncomingPhoneNumberMobile
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json — ListIncomingPhoneNumberMobile
- POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json — CreateIncomingPhoneNumberMobile

## Api20100401IncomingPhoneNumberTollFree
- GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json — ListIncomingPhoneNumberTollFree
- POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json — CreateIncomingPhoneNumberTollFree

## Api20100401IpAccessControlList
- GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json — ListSipIpAccessControlList: Retrieve a list of IpAccessControlLists that belong to the account used to make the request
- POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json — CreateSipIpAccessControlList: Create a new IpAccessControlList resource
- GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json — FetchSipIpAccessControlList: Fetch a specific instance of an IpAccessControlList
- POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json — UpdateSipIpAccessControlList: Rename an IpAccessControlList
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json — DeleteSipIpAccessControlList: Delete an IpAccessControlList from the requested account

## Api20100401IpAccessControlListMapping
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json — FetchSipIpAccessControlListMapping: Fetch an IpAccessControlListMapping resource.
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json — DeleteSipIpAccessControlListMapping: Delete an IpAccessControlListMapping resource.
- GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json — ListSipIpAccessControlListMapping: Retrieve a list of IpAccessControlListMapping resources.
- POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json — CreateSipIpAccessControlListMapping: Create a new IpAccessControlListMapping resource.

## Api20100401Key
- GET /2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json — FetchKey
- POST /2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json — UpdateKey
- DELETE /2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json — DeleteKey
- GET /2010-04-01/Accounts/{AccountSid}/Keys.json — ListKey

## Api20100401LastMonth
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/LastMonth.json — ListUsageRecordLastMonth

## Api20100401Local
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Local.json — ListAvailablePhoneNumberLocal

## Api20100401MachineToMachine
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/MachineToMachine.json — ListAvailablePhoneNumberMachineToMachine

## Api20100401Media
- GET /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json — ListMedia: Read a list of Media resources associated with a specific Message resource

## Api20100401MediaInstance
- GET /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json — FetchMedia: Fetch a single Media resource associated with a specific Message resource
- DELETE /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json — DeleteMedia: Delete the Media resource.

## Api20100401Member
- GET /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json — FetchMember: Fetch a specific member from the queue
- POST /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json — UpdateMember: Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
- GET /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json — ListMember: Retrieve the members of the queue

## Api20100401Message
- GET /2010-04-01/Accounts/{AccountSid}/Messages.json — ListMessage: Retrieve a list of Message resources associated with a Twilio Account
- POST /2010-04-01/Accounts/{AccountSid}/Messages.json — CreateMessage: Send a message
- GET /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json — FetchMessage: Fetch a specific Message
- POST /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json — UpdateMessage: Update a Message resource (used to redact Message `body` text and to cancel not-yet-sent messages)
- DELETE /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json — DeleteMessage: Deletes a Message resource from your account

## Api20100401Mobile
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Mobile.json — ListAvailablePhoneNumberMobile

## Api20100401Monthly
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Monthly.json — ListUsageRecordMonthly

## Api20100401National
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json — ListAvailablePhoneNumberNational

## Api20100401NewKey
- POST /2010-04-01/Accounts/{AccountSid}/Keys.json — CreateNewKey

## Api20100401NewSigningKey
- POST /2010-04-01/Accounts/{AccountSid}/SigningKeys.json — CreateNewSigningKey: Create a new Signing Key for the account making the request.

## Api20100401Notification
- GET /2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json — FetchNotification: Fetch a notification belonging to the account used to make the request
- GET /2010-04-01/Accounts/{AccountSid}/Notifications.json — ListNotification: Retrieve a list of notifications belonging to the account used to make the request

## Api20100401OutgoingCallerId
- GET /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json — FetchOutgoingCallerId: Fetch an outgoing-caller-id belonging to the account used to make the request
- POST /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json — UpdateOutgoingCallerId: Updates the caller-id
- DELETE /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json — DeleteOutgoingCallerId: Delete the caller-id specified from the account
- GET /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json — ListOutgoingCallerId: Retrieve a list of outgoing-caller-ids belonging to the account used to make the request

## Api20100401Participant
- GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json — FetchParticipant: Fetch an instance of a participant
- POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json — UpdateParticipant: Update the properties of the participant
- DELETE /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json — DeleteParticipant: Kick a participant from a given conference
- GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json — ListParticipant: Retrieve a list of participants belonging to the account used to make the request
- POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json — CreateParticipant

## Api20100401Payload
- GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json — FetchRecordingAddOnResultPayload: Fetch an instance of a result payload
- DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json — DeleteRecordingAddOnResultPayload: Delete a payload from the result along with all associated Data
- GET /2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json — ListRecordingAddOnResultPayload: Retrieve a list of payloads belonging to the AddOnResult

## Api20100401Payment
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json — CreatePayments: create an instance of payments. This will start a new payments session
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json — UpdatePayments: update an instance of payments with different phases of payment flows.

## Api20100401Queue
- GET /2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json — FetchQueue: Fetch an instance of a queue identified by the QueueSid
- POST /2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json — UpdateQueue: Update the queue with the new parameters
- DELETE /2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json — DeleteQueue: Remove an empty queue
- GET /2010-04-01/Accounts/{AccountSid}/Queues.json — ListQueue: Retrieve a list of queues belonging to the account used to make the request
- POST /2010-04-01/Accounts/{AccountSid}/Queues.json — CreateQueue: Create a queue

## Api20100401Record
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records.json — ListUsageRecord: Retrieve a list of usage-records belonging to the account used to make the request

## Api20100401Recording
- GET /2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json — FetchRecording: Fetch an instance of a recording
- DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json — DeleteRecording: Delete a recording from your account
- GET /2010-04-01/Accounts/{AccountSid}/Recordings.json — ListRecording: Retrieve a list of recordings belonging to the account used to make the request

## Api20100401RecordingTranscription
- GET /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json — FetchRecordingTranscription
- DELETE /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json — DeleteRecordingTranscription
- GET /2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json — ListRecordingTranscription

## Api20100401SharedCost
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/SharedCost.json — ListAvailablePhoneNumberSharedCost

## Api20100401ShortCode
- GET /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json — FetchShortCode: Fetch an instance of a short code
- POST /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json — UpdateShortCode: Update a short code with the following parameters
- GET /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json — ListShortCode: Retrieve a list of short-codes belonging to the account used to make the request

## Api20100401SigningKey
- GET /2010-04-01/Accounts/{AccountSid}/SigningKeys.json — ListSigningKey
- GET /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json — FetchSigningKey
- POST /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json — UpdateSigningKey
- DELETE /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json — DeleteSigningKey

## Api20100401SipIpAddress
- GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json — ListSipIpAddress: Read multiple IpAddress resources.
- POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json — CreateSipIpAddress: Create a new IpAddress resource.
- GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json — FetchSipIpAddress: Read one IpAddress resource.
- POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json — UpdateSipIpAddress: Update an IpAddress resource.
- DELETE /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json — DeleteSipIpAddress: Delete an IpAddress resource.

## Api20100401Siprec
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json — CreateSiprec: Create a Siprec
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json — UpdateSiprec: Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource

## Api20100401Stream
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json — CreateStream: Create a Stream
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json — UpdateStream: Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource

## Api20100401ThisMonth
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/ThisMonth.json — ListUsageRecordThisMonth

## Api20100401Today
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Today.json — ListUsageRecordToday

## Api20100401Token
- POST /2010-04-01/Accounts/{AccountSid}/Tokens.json — CreateToken: Create a new token for ICE servers

## Api20100401TollFree
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/TollFree.json — ListAvailablePhoneNumberTollFree

## Api20100401Transcription
- GET /2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json — FetchTranscription: Fetch an instance of a Transcription
- DELETE /2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json — DeleteTranscription: Delete a transcription from the account used to make the request
- GET /2010-04-01/Accounts/{AccountSid}/Transcriptions.json — ListTranscription: Retrieve a list of transcriptions belonging to the account used to make the request

## Api20100401Trigger
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json — FetchUsageTrigger: Fetch and instance of a usage-trigger
- POST /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json — UpdateUsageTrigger: Update an instance of a usage trigger
- DELETE /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json — DeleteUsageTrigger
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json — ListUsageTrigger: Retrieve a list of usage-triggers belonging to the account used to make the request
- POST /2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json — CreateUsageTrigger: Create a new UsageTrigger

## Api20100401UserDefinedMessage
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json — CreateUserDefinedMessage: Create a new User Defined Message for the given Call SID.

## Api20100401UserDefinedMessageSubscription
- POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json — CreateUserDefinedMessageSubscription: Subscribe to User Defined Messages for a given Call SID.
- DELETE /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json — DeleteUserDefinedMessageSubscription: Delete a specific User Defined Message Subscription.

## Api20100401ValidationRequest
- POST /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json — CreateValidationRequest

## Api20100401Voip
- GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Voip.json — ListAvailablePhoneNumberVoip

## Api20100401Yearly
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Yearly.json — ListUsageRecordYearly

## Api20100401Yesterday
- GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Yesterday.json — ListUsageRecordYesterday
