# Google Drive API (googledrive) vv3

<!-- derived from openapi.json by `pnpm specs index googledrive` — do not edit by hand -->

base: https://www.googleapis.com/drive/v3 | auth: not declared | 64 operations in 14 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## about
- GET /about — drive.about.get: Gets information about the user, the user's Drive, and system capabilities.

## accessproposals
- GET /files/{fileId}/accessproposals/{proposalId} — drive.accessproposals.get: Retrieves an access proposal by ID.
- POST /files/{fileId}/accessproposals/{proposalId}:resolve — drive.accessproposals.resolve: Approves or denies an access proposal.
- GET /files/{fileId}/accessproposals — drive.accessproposals.list: List the access proposals on a file.

## approvals
- POST /files/{fileId}/approvals:start — drive.approvals.start: Starts an approval on a file.
- POST /files/{fileId}/approvals/{approvalId}:cancel — drive.approvals.cancel: Cancels an approval.
- POST /files/{fileId}/approvals/{approvalId}:reassign — drive.approvals.reassign: Reassigns the reviewers on an approval.
- GET /files/{fileId}/approvals — drive.approvals.list: Lists the approvals on a file.
- POST /files/{fileId}/approvals/{approvalId}:decline — drive.approvals.decline: Declines an approval.
- POST /files/{fileId}/approvals/{approvalId}:comment — drive.approvals.comment: Comments on an approval.
- POST /files/{fileId}/approvals/{approvalId}:approve — drive.approvals.approve: Approves an approval.
- GET /files/{fileId}/approvals/{approvalId} — drive.approvals.get: Gets an approval by ID.

## apps
- GET /apps — drive.apps.list: Lists a user's installed apps.
- GET /apps/{appId} — drive.apps.get: Gets a specific app.

## changes
- POST /changes/watch — drive.changes.watch: Subscribes to changes for a user.
- GET /changes/startPageToken — drive.changes.getStartPageToken: Gets the starting pageToken for listing future changes.
- GET /changes — drive.changes.list: Lists the changes for a user or shared drive.

## channels
- POST /channels/stop — drive.channels.stop: Stops watching resources through this channel.

## comments
- GET /files/{fileId}/comments — drive.comments.list: Lists a file's comments.
- POST /files/{fileId}/comments — drive.comments.create: Creates a comment on a file.
- GET /files/{fileId}/comments/{commentId} — drive.comments.get: Gets a comment by ID.
- PATCH /files/{fileId}/comments/{commentId} — drive.comments.update: Updates a comment with patch semantics.
- DELETE /files/{fileId}/comments/{commentId} — drive.comments.delete: Deletes a comment.

## drives
- GET /drives — drive.drives.list: Lists the user's shared drives.
- POST /drives — drive.drives.create: Creates a shared drive.
- GET /drives/{driveId} — drive.drives.get: Gets a shared drive's metadata by ID.
- PATCH /drives/{driveId} — drive.drives.update: Updates the metadata for a shared drive.
- DELETE /drives/{driveId} — drive.drives.delete: Permanently deletes a shared drive for which the user is an `organizer`.
- POST /drives/{driveId}/hide — drive.drives.hide: Hides a shared drive from the default view.
- POST /drives/{driveId}/unhide — drive.drives.unhide: Restores a shared drive to the default view.

## files
- GET /files/{fileId}/export — drive.files.export: Exports a Google Workspace document to the requested MIME type and returns exported byte content.
- POST /files/{fileId}/modifyLabels — drive.files.modifyLabels: Modifies the set of labels applied to a file.
- GET /files/generateCseToken — drive.files.generateCseToken: Generates a CSE token which can be used to create or update CSE files.
- GET /files/{fileId} — drive.files.get: Gets a file's metadata or content by ID.
- PATCH /files/{fileId} — drive.files.update: Updates a file's metadata, content, or both.
- DELETE /files/{fileId} — drive.files.delete: Permanently deletes a file owned by the user without moving it to the trash.
- GET /files — drive.files.list: Lists the user's files.
- POST /files — drive.files.create: Creates a file.
- POST /files/{fileId}/copy — drive.files.copy: Creates a copy of a file and applies any requested updates with patch semantics.
- GET /files/{fileId}/listLabels — drive.files.listLabels: Lists the labels on a file.
- DELETE /files/trash — drive.files.emptyTrash: Permanently deletes all of the user's trashed files.
- POST /files/{fileId}/download — drive.files.download: Downloads the content of a file.
- GET /files/generateIds — drive.files.generateIds: Generates a set of file IDs which can be provided in create or copy requests.
- POST /files/{fileId}/watch — drive.files.watch: Subscribes to changes to a file.

## operations
- GET /operations/{name} — drive.operations.get: Gets the latest state of a long-running operation.

## permissions
- GET /files/{fileId}/permissions — drive.permissions.list: Lists a file's or shared drive's permissions.
- POST /files/{fileId}/permissions — drive.permissions.create: Creates a permission for a file or shared drive.
- GET /files/{fileId}/permissions/{permissionId} — drive.permissions.get: Gets a permission by ID.
- PATCH /files/{fileId}/permissions/{permissionId} — drive.permissions.update: Updates a permission with patch semantics.
- DELETE /files/{fileId}/permissions/{permissionId} — drive.permissions.delete: Deletes a permission.

## replies
- GET /files/{fileId}/comments/{commentId}/replies — drive.replies.list: Lists a comment's replies.
- POST /files/{fileId}/comments/{commentId}/replies — drive.replies.create: Creates a reply to a comment.
- GET /files/{fileId}/comments/{commentId}/replies/{replyId} — drive.replies.get: Gets a reply by ID.
- PATCH /files/{fileId}/comments/{commentId}/replies/{replyId} — drive.replies.update: Updates a reply with patch semantics.
- DELETE /files/{fileId}/comments/{commentId}/replies/{replyId} — drive.replies.delete: Deletes a reply.

## revisions
- GET /files/{fileId}/revisions/{revisionId} — drive.revisions.get: Gets a revision's metadata or content by ID.
- PATCH /files/{fileId}/revisions/{revisionId} — drive.revisions.update: Updates a revision with patch semantics.
- DELETE /files/{fileId}/revisions/{revisionId} — drive.revisions.delete: Permanently deletes a file version.
- GET /files/{fileId}/revisions — drive.revisions.list: Lists a file's revisions.

## teamdrives
- GET /teamdrives/{teamDriveId} — drive.teamdrives.get: Deprecated: Use `drives.get` instead.
- PATCH /teamdrives/{teamDriveId} — drive.teamdrives.update: Deprecated: Use `drives.update` instead.
- DELETE /teamdrives/{teamDriveId} — drive.teamdrives.delete: Deprecated: Use `drives.delete` instead.
- GET /teamdrives — drive.teamdrives.list: Deprecated: Use `drives.list` instead.
- POST /teamdrives — drive.teamdrives.create: Deprecated: Use `drives.create` instead.
