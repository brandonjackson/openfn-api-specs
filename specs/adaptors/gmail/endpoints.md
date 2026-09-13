# Gmail API (gmail) vv1

<!-- derived from openapi.json by `pnpm specs index gmail` — do not edit by hand -->

base: https://gmail.googleapis.com | auth: not declared | 79 operations in 15 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## users
- POST /gmail/v1/users/{userId}/watch — gmail.users.watch: Set up or update a push notification watch on the given user mailbox.
- GET /gmail/v1/users/{userId}/profile — gmail.users.getProfile: Gets the current user's Gmail profile.
- POST /gmail/v1/users/{userId}/stop — gmail.users.stop: Turn off push notification delivery for the given user mailbox.

## users.drafts
- POST /gmail/v1/users/{userId}/drafts/send — gmail.users.drafts.send: Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
- GET /gmail/v1/users/{userId}/drafts/{id} — gmail.users.drafts.get: Gets the specified draft.
- PUT /gmail/v1/users/{userId}/drafts/{id} — gmail.users.drafts.update: Replaces a draft's content.
- DELETE /gmail/v1/users/{userId}/drafts/{id} — gmail.users.drafts.delete: Immediately and permanently deletes the specified draft.
- GET /gmail/v1/users/{userId}/drafts — gmail.users.drafts.list: Lists the drafts in the user's mailbox.
- POST /gmail/v1/users/{userId}/drafts — gmail.users.drafts.create: Creates a draft with the `DRAFT` label.

## users.history
- GET /gmail/v1/users/{userId}/history — gmail.users.history.list: Lists the history of all changes to the given mailbox.

## users.labels
- GET /gmail/v1/users/{userId}/labels — gmail.users.labels.list: Lists all labels in the user's mailbox.
- POST /gmail/v1/users/{userId}/labels — gmail.users.labels.create: Creates a label.
- GET /gmail/v1/users/{userId}/labels/{id} — gmail.users.labels.get: Gets the specified label.
- PUT /gmail/v1/users/{userId}/labels/{id} — gmail.users.labels.update: Updates the specified label.
- PATCH /gmail/v1/users/{userId}/labels/{id} — gmail.users.labels.patch: Patch the specified label.
- DELETE /gmail/v1/users/{userId}/labels/{id} — gmail.users.labels.delete: Immediately and permanently deletes the specified label and removes it from any messages and threads that it's applied to.

## users.messages
- GET /gmail/v1/users/{userId}/messages/{id} — gmail.users.messages.get: Gets the specified message.
- DELETE /gmail/v1/users/{userId}/messages/{id} — gmail.users.messages.delete: Immediately and permanently deletes the specified message.
- POST /gmail/v1/users/{userId}/messages/import — gmail.users.messages.import: Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP.
- POST /gmail/v1/users/{userId}/messages/{id}/untrash — gmail.users.messages.untrash: Removes the specified message from the trash.
- POST /gmail/v1/users/{userId}/messages/batchModify — gmail.users.messages.batchModify: Modifies the labels and the Classification Label values on the specified messages.
- GET /gmail/v1/users/{userId}/messages — gmail.users.messages.list: Lists the messages in the user's mailbox.
- POST /gmail/v1/users/{userId}/messages — gmail.users.messages.insert: Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification.
- POST /gmail/v1/users/{userId}/messages/send — gmail.users.messages.send: Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.
- POST /gmail/v1/users/{userId}/messages/{id}/trash — gmail.users.messages.trash: Moves the specified message to the trash.
- POST /gmail/v1/users/{userId}/messages/{id}/modify — gmail.users.messages.modify: Modifies the labels and the Classification Label values on the specified message.
- POST /gmail/v1/users/{userId}/messages/batchDelete — gmail.users.messages.batchDelete: Deletes many messages by message ID.

## users.messages.attachments
- GET /gmail/v1/users/{userId}/messages/{messageId}/attachments/{id} — gmail.users.messages.attachments.get: Gets the specified message attachment.

## users.settings
- GET /gmail/v1/users/{userId}/settings/imap — gmail.users.settings.getImap: Gets IMAP settings.
- PUT /gmail/v1/users/{userId}/settings/imap — gmail.users.settings.updateImap: Updates IMAP settings.
- GET /gmail/v1/users/{userId}/settings/vacation — gmail.users.settings.getVacation: Gets vacation responder settings.
- PUT /gmail/v1/users/{userId}/settings/vacation — gmail.users.settings.updateVacation: Updates vacation responder settings.
- GET /gmail/v1/users/{userId}/settings/language — gmail.users.settings.getLanguage: Gets language settings.
- PUT /gmail/v1/users/{userId}/settings/language — gmail.users.settings.updateLanguage: Updates language settings.
- GET /gmail/v1/users/{userId}/settings/pop — gmail.users.settings.getPop: Gets POP settings.
- PUT /gmail/v1/users/{userId}/settings/pop — gmail.users.settings.updatePop: Updates POP settings.
- GET /gmail/v1/users/{userId}/settings/autoForwarding — gmail.users.settings.getAutoForwarding: Gets the auto-forwarding setting for the specified account.
- PUT /gmail/v1/users/{userId}/settings/autoForwarding — gmail.users.settings.updateAutoForwarding: Updates the auto-forwarding setting for the specified account.

## users.settings.cse.identities
- GET /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress} — gmail.users.settings.cse.identities.get: Retrieves a client-side encryption identity configuration.
- DELETE /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress} — gmail.users.settings.cse.identities.delete: Deletes a client-side encryption identity.
- PATCH /gmail/v1/users/{userId}/settings/cse/identities/{emailAddress} — gmail.users.settings.cse.identities.patch: Associates a different key pair with an existing client-side encryption identity.
- GET /gmail/v1/users/{userId}/settings/cse/identities — gmail.users.settings.cse.identities.list: Lists the client-side encrypted identities for an authenticated user.
- POST /gmail/v1/users/{userId}/settings/cse/identities — gmail.users.settings.cse.identities.create: Creates and configures a client-side encryption identity that's authorized to send mail from the user account.

## users.settings.cse.keypairs
- POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable — gmail.users.settings.cse.keypairs.enable: Turns on a client-side encryption key pair that was turned off.
- GET /gmail/v1/users/{userId}/settings/cse/keypairs — gmail.users.settings.cse.keypairs.list: Lists client-side encryption key pairs for an authenticated user.
- POST /gmail/v1/users/{userId}/settings/cse/keypairs — gmail.users.settings.cse.keypairs.create: Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user.
- GET /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId} — gmail.users.settings.cse.keypairs.get: Retrieves an existing client-side encryption key pair.
- POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable — gmail.users.settings.cse.keypairs.disable: Turns off a client-side encryption key pair.
- POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate — gmail.users.settings.cse.keypairs.obliterate: Deletes a client-side encryption key pair permanently and immediately.

## users.settings.delegates
- GET /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} — gmail.users.settings.delegates.get: Gets the specified delegate.
- DELETE /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} — gmail.users.settings.delegates.delete: Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for usin…
- GET /gmail/v1/users/{userId}/settings/delegates — gmail.users.settings.delegates.list: Lists the delegates for the specified account.
- POST /gmail/v1/users/{userId}/settings/delegates — gmail.users.settings.delegates.create: Adds a delegate with its verification status set directly to `accepted`, without sending any verification email.

## users.settings.filters
- GET /gmail/v1/users/{userId}/settings/filters/{id} — gmail.users.settings.filters.get: Gets a filter.
- DELETE /gmail/v1/users/{userId}/settings/filters/{id} — gmail.users.settings.filters.delete: Immediately and permanently deletes the specified filter.
- GET /gmail/v1/users/{userId}/settings/filters — gmail.users.settings.filters.list: Lists the message filters of a Gmail user.
- POST /gmail/v1/users/{userId}/settings/filters — gmail.users.settings.filters.create: Creates a filter.

## users.settings.forwardingAddresses
- GET /gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail} — gmail.users.settings.forwardingAddresses.get: Gets the specified forwarding address.
- DELETE /gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail} — gmail.users.settings.forwardingAddresses.delete: Deletes the specified forwarding address and revokes any verification that may have been required.
- GET /gmail/v1/users/{userId}/settings/forwardingAddresses — gmail.users.settings.forwardingAddresses.list: Lists the forwarding addresses for the specified account.
- POST /gmail/v1/users/{userId}/settings/forwardingAddresses — gmail.users.settings.forwardingAddresses.create: Creates a forwarding address.

## users.settings.sendAs
- GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail} — gmail.users.settings.sendAs.get: Gets the specified send-as alias.
- PUT /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail} — gmail.users.settings.sendAs.update: Updates a send-as alias.
- PATCH /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail} — gmail.users.settings.sendAs.patch: Patch the specified send-as alias.
- DELETE /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail} — gmail.users.settings.sendAs.delete: Deletes the specified send-as alias.
- POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify — gmail.users.settings.sendAs.verify: Sends a verification email to the specified send-as alias address.
- GET /gmail/v1/users/{userId}/settings/sendAs — gmail.users.settings.sendAs.list: Lists the send-as aliases for the specified account.
- POST /gmail/v1/users/{userId}/settings/sendAs — gmail.users.settings.sendAs.create: Creates a custom "from" send-as alias.

## users.settings.sendAs.smimeInfo
- GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo — gmail.users.settings.sendAs.smimeInfo.list: Lists S/MIME configs for the specified send-as alias.
- POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo — gmail.users.settings.sendAs.smimeInfo.insert: Insert (upload) the given S/MIME config for the specified send-as alias.
- GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id} — gmail.users.settings.sendAs.smimeInfo.get: Gets the specified S/MIME config for the specified send-as alias.
- DELETE /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id} — gmail.users.settings.sendAs.smimeInfo.delete: Deletes the specified S/MIME config for the specified send-as alias.
- POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault — gmail.users.settings.sendAs.smimeInfo.setDefault: Sets the default S/MIME config for the specified send-as alias.

## users.threads
- GET /gmail/v1/users/{userId}/threads/{id} — gmail.users.threads.get: Gets the specified thread.
- DELETE /gmail/v1/users/{userId}/threads/{id} — gmail.users.threads.delete: Immediately and permanently deletes the specified thread.
- POST /gmail/v1/users/{userId}/threads/{id}/modify — gmail.users.threads.modify: Modifies the labels applied to the thread.
- POST /gmail/v1/users/{userId}/threads/{id}/trash — gmail.users.threads.trash: Moves the specified thread to the trash.
- POST /gmail/v1/users/{userId}/threads/{id}/untrash — gmail.users.threads.untrash: Removes the specified thread from the trash.
- GET /gmail/v1/users/{userId}/threads — gmail.users.threads.list: Lists the threads in the user's mailbox.
