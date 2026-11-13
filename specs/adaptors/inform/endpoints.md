# Ona Data API (onadata) as deployed by UNICEF Inform (inform) vv1 (+v2 resources)

<!-- derived from openapi.json by `pnpm specs index inform` — do not edit by hand -->

base: https://data.inform.unicef.org, https://api.ona.io | auth: apiKey (header Authorization), apiKey (header Authorization), http/basic, http/bearer | 194 operations in 26 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Authentication
- GET /api/v1 — getApiRoot: API root: list the v1 endpoints
- GET /o/authorize/ — authorizeOAuth: OAuth 2.0 authorization endpoint (Authorization Code + PKCE S256)
- POST /o/token/ — createOAuthToken: Exchange an authorization code (or refresh token) for an access token

## Charts
- GET /api/v1/charts — listChartEndpoints: List chart endpoints for forms the user can read
- GET /api/v1/charts/{pk} — getFormChartFields: Chart field endpoints for one form (fields=all for every chart)
- GET /api/v1/charts/{pk}.{format} — getFieldChart: Chart data for one field (html or json)

## Data
- GET /api/v1/data — listDataEndpoints: List the data endpoints (forms) the user can read
- GET /api/v1/data/public — listPublicDataEndpoints: List public data endpoints
- GET /api/v1/data/{pk} — listSubmissions: List the submissions of a form
- DELETE /api/v1/data/{pk} — deleteSubmissions: Delete several submissions (instance_ids) or all submissions of a form
- GET /api/v1/data/{pk}.{format} — exportSubmissions: Submissions of a form as json, xml, csv, geojson or osm
- GET /api/v1/data/{pk}/{dataid} — getSubmission: Get one submission
- DELETE /api/v1/data/{pk}/{dataid} — deleteSubmission: Delete one submission
- GET /api/v1/data/{pk}/{dataid}.{format} — exportSubmission: One submission as geojson or osm
- GET /api/v1/data/{pk}/{dataid}/enketo — getSubmissionEditLink: Get an Enketo URL to edit a submission
- GET /api/v1/data/{pk}/{dataid}/history — getSubmissionHistory: Edit history of a submission
- POST /api/v1/data/{pk}/{dataid}/labels — addSubmissionLabels: Tag a submission
- DELETE /api/v1/data/{pk}/{dataid}/labels/{label} — removeSubmissionLabel: Remove a tag from a submission
- GET /api/v1/data.{format} — listDataEndpointsFormat: Data endpoint list with a format suffix (e.g. data.csv)

## DataViews
- GET /api/v1/dataviews — listDataViews: List filtered datasets (DataViews)
- POST /api/v1/dataviews — createDataView: Create a filtered dataset
- GET /api/v1/dataviews/{pk} — getDataView: Get a filtered dataset
- PUT /api/v1/dataviews/{pk} — replaceDataView: Update a filtered dataset
- PATCH /api/v1/dataviews/{pk} — updateDataView: Partially update a filtered dataset
- DELETE /api/v1/dataviews/{pk} — deleteDataView: Delete a filtered dataset
- GET /api/v1/dataviews/{pk}/data — listDataViewData: Records of a filtered dataset (count=true for just the count)
- GET /api/v1/dataviews/{pk}/data.{format} — exportDataViewData: Export a filtered dataset synchronously (csv, xls, ...)
- GET /api/v1/dataviews/{pk}/export_async — exportDataViewAsync: Start (or poll with job_uuid) an asynchronous export of a filtered dataset
- GET /api/v1/dataviews/{pk}/charts — listDataViewCharts: Chart field endpoints of a filtered dataset
- GET /api/v1/dataviews/{pk}/charts.{format} — getDataViewFieldChart: Chart data for one field of a filtered dataset

## Entities
- GET /api/v2/entity-lists — listEntityLists: List EntityLists (max 1000 without pagination)
- POST /api/v2/entity-lists — createEntityList: Create an EntityList in a project
- GET /api/v2/entity-lists/{entity_list_id} — getEntityList: Get EntityList details
- DELETE /api/v2/entity-lists/{entity_list_id} — deleteEntityList: Delete an EntityList
- GET /api/v2/entity-lists/{entity_list_id}.csv — downloadEntityListCsv: Download an EntityList as CSV
- GET /api/v2/entity-lists/{entity_list_id}/download — downloadEntityList: Download an EntityList as CSV
- POST /api/v2/entity-lists/{entity_list_id}/properties — createEntityListProperty: Add a property to an EntityList
- GET /api/v2/entity-lists/{entity_list_id}/entities — listEntities: List Entities of an EntityList
- POST /api/v2/entity-lists/{entity_list_id}/entities — createEntity: Create an Entity
- DELETE /api/v2/entity-lists/{entity_list_id}/entities — deleteEntities: Delete Entities (entity_ids in body)
- GET /api/v2/entity-lists/{entity_list_id}/entities/{entity_id} — getEntity: Get an Entity
- PATCH /api/v2/entity-lists/{entity_list_id}/entities/{entity_id} — updateEntity: Update an Entity's label and/or data
- GET /api/v2/entity-lists/{entity_list_id}/import-entities — getImportEntitiesStatus: Check an Entities import task
- POST /api/v2/entity-lists/{entity_list_id}/import-entities — importEntities: Import Entities from a CSV file (async)

## Exports
- GET /api/v1/export — listExports: List data exports (optionally for one form)
- GET /api/v1/export/google_auth — completeGoogleAuth: Finish the Google Sheets export authorization

## Flow Results
- GET /api/v1/flow-results/packages — listFlowResultsPackages: List Flow Results packages (FLOIP, JSON:API; experimental)
- POST /api/v1/flow-results/packages — createFlowResultsPackage: Publish a Flow Results package as a form (experimental)
- GET /api/v1/flow-results/packages/{uuid} — getFlowResultsPackage: Get a Flow Results package descriptor
- GET /api/v1/flow-results/packages/{uuid}/responses — listFlowResultsResponses: Get the responses of a Flow Results package
- POST /api/v1/flow-results/packages/{uuid}/responses — createFlowResultsResponses: Push Flow Results responses

## Forms
- GET /api/v1/forms — listForms: List forms
- POST /api/v1/forms — publishForm: Publish an XLSForm (file, URL, Dropbox URL) or a FLOIP results data package
- GET /api/v1/forms/public — listPublicForms: List public forms
- GET /api/v1/forms/{pk} — getForm: Get form information
- PUT /api/v1/forms/{pk} — replaceForm: Set form information (uuid, description, downloadable, owner, public, public_data, title required)
- PATCH /api/v1/forms/{pk} — updateForm: Partially update a form, or replace its XLSForm (xls_file / xls_url / dropbox_xls_url) when it has no submissions
- DELETE /api/v1/forms/{pk} — deleteForm: Delete a form
- GET /api/v1/forms/{pk}.{format} — exportFormData: Export a form's submitted data as a file (csv, xls, xlsx, csvzip, savzip)
- GET /api/v1/forms/{pk}/form.{format} — getFormDefinition: Get the form definition as JSON, XML (XForm) or XLS
- GET /api/v1/forms/{pk}/versions — listFormVersions: List all retrievable XLSForm versions
- GET /api/v1/forms/{pk}/versions/{version_id} — getFormVersion: JSON definition of one form version
- GET /api/v1/forms/{pk}/versions/{version_id}.{format} — getFormVersionDefinition: XML (or other) definition of one form version
- POST /api/v1/forms/{pk}/clone — cloneForm: Clone a form to another user account (optionally into a project)
- GET /api/v1/forms/{pk}/csv_import — getCsvImportStatus: Check CSV import progress
- POST /api/v1/forms/{pk}/csv_import — importCsvData: Import CSV data into an existing form
- GET /api/v1/forms/{pk}/import — getImportStatus: Check XLS/XLSX/CSV import progress
- POST /api/v1/forms/{pk}/import — importData: Import XLS, XLSX or CSV data into an existing form
- GET /api/v1/forms/{pk}/delete_async — getDeleteFormAsyncStatus: Check asynchronous form deletion progress
- POST /api/v1/forms/{pk}/delete_async — deleteFormAsync: Delete a form asynchronously
- GET /api/v1/forms/{pk}/enketo — getFormEnketoLinks: Get Enketo web-form, preview and single-submit links
- GET /api/v1/forms/{pk}/export_async — exportFormDataAsync: Start an asynchronous export (or poll it with job_uuid); format=gsheets for Google Sheets
- GET /api/v1/forms/{pk}/labels — listFormLabels: List a form's tags
- POST /api/v1/forms/{pk}/labels — addFormLabels: Tag a form
- DELETE /api/v1/forms/{pk}/labels/{label} — removeFormLabel: Remove a tag from a form
- POST /api/v1/forms/{pk}/share — shareForm: Share a form with one or more usernames (role)
- GET /api/v1/forms/create_async — getPublishFormAsyncStatus: Check asynchronous XLSForm upload progress
- POST /api/v1/forms/create_async — publishFormAsync: Publish an XLSForm asynchronously
- POST /api/v1/forms/survey_preview — createSurveyPreview: Convert an XLSForm draft (body) to XForm for preview
- GET /api/v1/forms/survey_preview.xml — getSurveyPreview: Fetch the generated preview XForm
- GET /api/v1/forms.{format} — listFormsFormat: List forms with a format suffix (e.g. forms.json, paginated)

## Media
- GET /api/v1/media — listAttachments: List attachments
- GET /api/v1/media/count — countAttachments: Count attachments for a form
- GET /api/v1/media/{pk} — getAttachment: Get attachment details
- GET /api/v1/media/{pk}.{format} — downloadAttachment: Download an attachment's file (optionally a resized image)
- GET /api/v1/files/{pk} — downloadAttachmentFile: Download an attachment file (redirects to storage)
- GET /api/v1/media.{format} — listAttachmentsFormat: List attachments with a format suffix (e.g. media.json?page=1&page_size=4)

## Merged Datasets
- GET /api/v1/merged-datasets — listMergedDatasets: List merged datasets
- POST /api/v1/merged-datasets — createMergedDataset: Create a merged dataset from two or more forms
- GET /api/v1/merged-datasets/{pk} — getMergedDataset: Get a merged dataset
- PUT /api/v1/merged-datasets/{pk} — replaceMergedDataset: Update a merged dataset
- PATCH /api/v1/merged-datasets/{pk} — updateMergedDataset: Partially update a merged dataset
- DELETE /api/v1/merged-datasets/{pk} — deleteMergedDataset: Delete a merged dataset
- GET /api/v1/merged-datasets/{pk}/data — listMergedDatasetData: Records of a merged dataset

## Messaging
- GET /api/v1/messaging — listMessages: List events/messages for a target (e.g. a form)

## Metadata
- GET /api/v1/metadata — listMetadata: List form metadata
- POST /api/v1/metadata — createMetadata: Add form metadata (media files, source, supporting docs, data licence, enketo links, textit/google sheet settings, ...)
- GET /api/v1/metadata/{pk} — getMetadata: Get one metadata item
- DELETE /api/v1/metadata/{pk} — deleteMetadata: Delete one metadata item
- GET /api/v1/metadata/{pk}.{format} — downloadMetadataFile: Download a metadata media file
- POST /api/v1/metadata.{format} — createMetadataFormat: Add form metadata, format-suffixed route (metadata.json)

## Notes
- GET /api/v1/notes — listNotes: List notes
- POST /api/v1/notes — createNote: Add a note to a submission (optionally to one field)
- DELETE /api/v1/notes/{pk} — deleteNote: Delete a note

## Open Data
- GET /api/v2/open-data/{uuid}/schema — getOpenDataSchema: Tableau Web Data Connector schema for an open-data dataset
- GET /api/v2/open-data/{uuid}/data — getOpenData: Flattened records of an open-data dataset (Tableau)

## OpenRosa
- GET /formList — getFormList: OpenRosa form list (xforms XML) for the authenticated user
- GET /{username}/{pk}/formList — getUserFormFormList: OpenRosa form list for one form of a user
- GET /projects/{pk}/formList — getProjectFormList: OpenRosa form list of a project
- GET /enketo/{pk}/formList — getEnketoFormList: Form list used by Enketo for one form
- GET /enketo-preview/{pk}/formList — getEnketoPreviewFormList: Form list used by Enketo preview for one form
- GET /forms/{pk}/formList — getFormFormList: Form list for one form
- GET /{username}/forms/{pk}/form.xml — downloadXForm: Download a form's XForm (downloadUrl in the form list)
- GET /{username}/xformsManifest/{pk} — getXFormManifest: Form media manifest (manifestUrl in the form list)

## Organizations
- GET /api/v1/orgs — listOrganizations: List organizations
- POST /api/v1/orgs — createOrganization: Create an organization
- GET /api/v1/orgs/{username} — getOrganization: Get an organization
- PATCH /api/v1/orgs/{username} — updateOrganization: Partially update an organization
- GET /api/v1/orgs/{username}/members — listOrganizationMembers: List organization members
- POST /api/v1/orgs/{username}/members — addOrganizationMember: Add a member (optionally with a role)
- PUT /api/v1/orgs/{username}/members — setOrganizationMemberRole: Change a member's role
- DELETE /api/v1/orgs/{username}/members — removeOrganizationMember: Remove a member
- POST /api/v1/orgs/{username}/rotate-key — rotateOrganizationKey: Rotate the organization's encryption key
- GET /api/v2/orgs — listOrganizationsV2: List organizations (v2, paginated, filterable)
- GET /api/v2/orgs/{username} — getOrganizationV2: Get an organization (v2)
- GET /api/v2/orgs/{username}/members — listOrganizationMembersV2: List members with roles (v2)
- POST /api/v2/orgs/{username}/members — addOrganizationMemberV2: Add a member (v2)
- PUT /api/v2/orgs/{username}/members — setOrganizationMemberRoleV2: Change a member's role (v2)
- PATCH /api/v2/orgs/{username}/members — updateOrganizationMemberV2: Update a member (v2)

## Profiles
- GET /api/v1/profiles — listProfiles: List user profiles
- POST /api/v1/profiles — createProfile: Register a new user profile
- GET /api/v1/profiles/{username} — getProfile: Get a user profile (by username or pk)
- PATCH /api/v1/profiles/{username} — updateProfile: Partially update a user profile (also used for organization profile fields)
- POST /api/v1/profiles/{username}/change_password — changePassword: Change the user's password (one docs example spells the path /api/v1/profile/...)
- GET /api/v1/profiles/{username}/monthly_submissions — getMonthlySubmissions: Count of the user's public/private submissions this month
- POST /api/v1/profiles/send_verification_email — sendVerificationEmail: (Re)send the account verification email
- GET /api/v1/profiles/verify_email — verifyEmail: Verify an email address with a verification key

## Projects
- GET /api/v1/projects — listProjects: List projects
- POST /api/v1/projects — createProject: Create a project
- GET /api/v1/projects/{pk} — getProject: Get a project
- PUT /api/v1/projects/{pk} — replaceProject: Update a project (all fields)
- PATCH /api/v1/projects/{pk} — updateProject: Partially update a project (e.g. metadata)
- GET /api/v1/projects/{pk}/forms — listProjectForms: List the forms in a project
- POST /api/v1/projects/{pk}/forms — publishProjectForm: Publish an XLSForm into a project (or move an existing form into it)
- GET /api/v1/projects/{pk}/labels — listProjectLabels: List a project's tags
- POST /api/v1/projects/{pk}/labels — addProjectLabels: Tag a project
- DELETE /api/v1/projects/{pk}/labels/{label} — removeProjectLabel: Remove a tag from a project
- POST /api/v1/projects/{pk}/share — shareProject: Share a project with users (role)
- PUT /api/v1/projects/{pk}/share — unshareProject: Remove a user's access (remove=true)
- GET /api/v1/projects/{pk}/star — listProjectStargazers: Users who starred the project
- POST /api/v1/projects/{pk}/star — starProject: Star a project
- DELETE /api/v1/projects/{pk}/star — unstarProject: Remove a star
- GET /api/v1/projects/{pk}/invitations — listProjectInvitations: List project invitations
- POST /api/v1/projects/{pk}/invitations — createProjectInvitation: Invite someone (by email) to a project
- PUT /api/v1/projects/{pk}/invitations — updateProjectInvitation: Update a pending invitation (email/role; invitation id in body)
- POST /api/v1/projects/{pk}/resend-invitation — resendProjectInvitation: Resend an invitation
- POST /api/v1/projects/{pk}/revoke-invitation — revokeProjectInvitation: Revoke an invitation
- GET /api/v2/projects — listProjectsV2: List projects (v2: slimmer payload, search/ordering/filters)
- GET /api/v2/projects/{pk} — getProjectV2: Get a project (v2; users/teams moved to sub-resources)
- GET /api/v2/projects/{pk}/users — listProjectUsersV2: Users with access to a project and their roles
- GET /api/v2/projects/{pk}/teams — listProjectTeamsV2: Teams with access to a project and their roles

## REST Services
- GET /api/v1/restservices — listRestServices: List REST services (webhooks: generic JSON/XML POST, TextIt, Google Sheets)
- POST /api/v1/restservices — createRestService: Add a REST service to a form
- GET /api/v1/restservices/{pk} — getRestService: Get a REST service
- PATCH /api/v1/restservices/{pk} — updateRestService: Partially update a REST service
- DELETE /api/v1/restservices/{pk} — deleteRestService: Delete a REST service

## Stats
- GET /api/v1/stats/{pk} — getFormStats: Summary statistics (mean, median, mode, min, max, range) of numeric fields
- GET /api/v1/stats/submissions/{pk} — getSubmissionStats: Submission counts grouped by a field
- GET /api/v1/stats/messaging — getMessagingStats: Event/message counts grouped by period

## Submission Reviews
- GET /api/v1/submissionreview.json — listSubmissionReviews: List submission reviews
- POST /api/v1/submissionreview.json — createSubmissionReview: Review one submission, or bulk-review a list
- GET /api/v1/submissionreview/{pk}.json — getSubmissionReview: Get a submission review
- PUT /api/v1/submissionreview/{pk}.json — updateSubmissionReview: Update a submission review
- DELETE /api/v1/submissionreview/{pk}.json — deleteSubmissionReview: Delete a submission review

## Submissions
- POST /api/v1/submissions — createSubmission: Submit data: an XML submission file or a JSON submission
- POST /{username}/{pk}/submission — createFloipSubmission: Submit FLOIP flow results responses to a form
- POST /projects/{pk}/submission — createProjectSubmission: Project-scoped submission endpoint (for forms in organization accounts)

## Teams
- GET /api/v1/teams — listTeams: List teams
- POST /api/v1/teams — createTeam: Create a team
- GET /api/v1/teams/{pk} — getTeam: Get a team
- GET /api/v1/teams/{pk}/members — listTeamMembers: List team members
- POST /api/v1/teams/{pk}/members — addTeamMember: Add a user to a team
- POST /api/v1/teams/{pk}/share — shareProjectWithTeam: Share a project with a team (role)

## User
- GET /api/v1/user — getCurrentUser: Retrieve the authenticated user's profile (with api_token and temp_token)
- DELETE /api/v1/user/expire — expireTempToken: Expire the temporary token
- GET /api/v1/user/{username}/starred — listStarredProjects: Projects the user has starred

## Users
- GET /api/v1/users — listUsers: List users
- GET /api/v1/users/{username} — getUser: Get a user

## Widgets
- GET /api/v1/widgets — listWidgets: List widgets (filter by form, dataview, or share key)
- POST /api/v1/widgets — createWidget: Create a widget
- GET /api/v1/widgets/{pk} — getWidget: Get a widget (data=true to include data)
- PUT /api/v1/widgets/{pk} — replaceWidget: Update a widget
- PATCH /api/v1/widgets/{pk} — updateWidget: Partially update a widget
- DELETE /api/v1/widgets/{pk} — deleteWidget: Delete a widget
