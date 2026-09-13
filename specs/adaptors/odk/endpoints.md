# ODK Central API (odk)

<!-- derived from openapi.json by `pnpm specs index odk` — do not edit by hand -->

base: / | auth: not declared | 186 operations in 34 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Actor Properties
- GET /v1/projects/{projectId}/actor-properties — listActorProperties: Listing Actor Property Names
- POST /v1/projects/{projectId}/actor-properties — createActorProperty: Registering an Actor Property Name

## App User Authentication
- GET /v1/key/{appUser}/example3 — useAppUserAuthentication: Using App User Authentication

## App Users
- GET /v1/projects/{projectId}/app-users — listAllAppUsers: Listing all App Users
- POST /v1/projects/{projectId}/app-users — createAppUser: Creating a new App User
- GET /v1/projects/{projectId}/app-users/{id} — getAppUser: Getting App User Details
- PATCH /v1/projects/{projectId}/app-users/{id} — patchAppUser: Setting Actor Property Values on an App User
- DELETE /v1/projects/{projectId}/app-users/{id} — deleteAppUser: Deleting an App User

## Assignments
- GET /v1/assignments — listAllAssignments: Listing all Assignments
- GET /v1/assignments/{roleId} — listAllActorsAssignedSomeRole: Listing all Actors assigned some Role
- POST /v1/assignments/{roleId}/{actorId} — assignActorToServerwideRole: Assigning an Actor to a server-wide Role
- DELETE /v1/assignments/{roleId}/{actorId} — stripRoleAssignmentFromActor: Stripping an Role Assignment from an Actor

## Attachments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/attachments — listExpectedSubmissionAttachments: Listing expected Submission Attachments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/attachments/{filename} — downloadAttachment: Downloading an Attachment
- POST /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/attachments/{filename} — uploadAttachment: Uploading an Attachment
- DELETE /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/attachments/{filename} — clearSubmissionAttachment: Clearing a Submission Attachment

## Comments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/comments — listComments: Listing Comments
- POST /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/comments — postComments: Posting Comments

## Dataset Management
- GET /v1/projects/{projectId}/datasets — listDatasets: Listing Datasets
- POST /v1/projects/{projectId}/datasets — createDatasets: Creating Datasets
- GET /v1/projects/{projectId}/datasets/{name} — datasetMetadata: Dataset Metadata
- PATCH /v1/projects/{projectId}/datasets/{name} — updateDatasetMetadata: Update Dataset Access Filters and Metadata
- DELETE /v1/projects/{projectId}/datasets/{name} — deleteDataset: Deleting a Dataset
- POST /v1/projects/{projectId}/datasets/{name}/properties — addProperties: Adding Properties
- DELETE /v1/projects/{projectId}/datasets/{name}/properties/{propertyName} — deleteProperty: Deleting a Property
- GET /v1/projects/{projectId}/datasets/{name}/entities.csv — downloadDataset: Download Dataset
- GET /v1/projects/{projectId}/trash/datasets/{datasetId}/entities.csv — downloadDeletedDatasetEntities: Downloading Deleted Dataset Entities

## Direct Backup
- POST /v1/backup — useEncryptionPassphrase: Using an Encryption Passphrase

## Draft Form
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft — getDraftFormDetails: Getting Draft Form Details
- POST /v1/projects/{projectId}/forms/{xmlFormId}/draft — createDraftForm: Creating a Draft Form
- DELETE /v1/projects/{projectId}/forms/{xmlFormId}/draft — deleteDraftForm: Deleting a Draft Form
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft.xml — retrieveDraftFormXml: Retrieving Draft Form XML
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft.xlsx — retrieveDraftFormXls: Retrieving Draft Form XLS(X)
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/attachments — listExpectedDraftFormAttachments: Listing expected Draft Form Attachments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/attachments/{filename} — downloadDraftFormAttachment: Downloading a Draft Form Attachment
- POST /v1/projects/{projectId}/forms/{xmlFormId}/draft/attachments/{filename} — uploadDraftFormAttachment: Uploading a Draft Form Attachment
- PATCH /v1/projects/{projectId}/forms/{xmlFormId}/draft/attachments/{filename} — linkDatasetToDraftFormAttachment: Linking a Dataset to a Draft Form Attachment
- DELETE /v1/projects/{projectId}/forms/{xmlFormId}/draft/attachments/{filename} — clearDraftFormAttachment: Clearing a Draft Form Attachment
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/fields — getDraftFormSchemaFields: Getting Draft Form Schema Fields
- POST /v1/projects/{projectId}/forms/{xmlFormId}/draft/publish — publishDraftForm: Publishing a Draft Form

## Draft Submissions
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions — listAllSubmissionsOnDraftForm: Listing all Submissions on a Draft Form
- POST /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions — createSubmissionForDraftForm: Creating a Submission
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions.csv.zip — exportDraftFormSubmissionsToCsv: Exporting Form Submissions to CSV
- POST /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions.csv.zip — exportDraftFormSubmissionsToCsvViaPost: Exporting Form Submissions to CSV via POST
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions/keys — listDraftFormEncryptionKeys: Listing Encryption Keys
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions/{instanceId} — getSubmissionDetails: Getting Submission details
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions/{instanceId}.xml — retrieveDraftFormSubmissionXml: Retrieving Submission XML
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions/{instanceId}/attachments — listDraftFormSubmissionAttachments: Listing expected Submission Attachments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions/{instanceId}/attachments/{filename} — downloadDraftFormSubmissionAttachment: Downloading an Attachment
- POST /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions/{instanceId}/attachments/{filename} — uploadTestDraftFormAttachment: Uploading an Attachment
- DELETE /v1/projects/{projectId}/forms/{xmlFormId}/draft/submissions/{instanceId}/attachments/{filename} — clearDraftFormSubmissionAttachment: Clearing a Submission Attachment

## Draft Testing
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft.svc — serviceDocumentForDataset: Service Document
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft.svc/$metadata — getDraftFormMetadata: Metadata Document
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft.svc/{table} — getDraftFormDataDocument: Data Document

## Draft Testing Endpoints
- GET /v1/test/{token}/projects/{projectId}/forms/{xmlFormId}/draft/formList — openrosaListDraftForms: OpenRosa Form Listing API
- POST /v1/test/{token}/projects/{projectId}/forms/{xmlFormId}/draft/submission — openrosaSubmitToDraftForm: OpenRosa Form Submission API
- GET /v1/test/{token}/projects/{projectId}/forms/{xmlFormId}/draft/manifest — openrosaGetDraftFormManifest: OpenRosa Form Manifest API
- GET /v1/test/{token}/projects/{projectId}/forms/{xmlFormId}/draft/attachments/{filename} — downloadTestDraftFormAttachment: Downloading a Form Attachment

## Entity Management
- GET /v1/projects/{projectId}/datasets/{name}/entities — entitiesMetadata: Entities Metadata
- POST /v1/projects/{projectId}/datasets/{name}/entities — createEntity: Creating Entities
- GET /v1/projects/{projectId}/datasets/{name}/entities.geojson — getEntitiesGeodata: Entities Geodata
- GET /v1/projects/{projectId}/datasets/{name}/entities/creators — entitiesCreators: Entities Creators
- GET /v1/projects/{projectId}/datasets/{name}/entities/{uuid} — getEntityDetails: Getting Entity Details
- PATCH /v1/projects/{projectId}/datasets/{name}/entities/{uuid} — updateEntity: Updating an Entity
- DELETE /v1/projects/{projectId}/datasets/{name}/entities/{uuid} — deleteEntity: Deleting an Entity
- POST /v1/projects/{projectId}/datasets/{name}/entities/{uuid}/restore — restoreDeletedEntity: Restoring a deleted Entity
- GET /v1/projects/{projectId}/datasets/{name}/entities/{uuid}/versions — listEntityVersions: Listing Versions
- GET /v1/projects/{projectId}/datasets/{name}/entities/{uuid}/diffs — getChangesBetweenEntityVersions: Getting changes between Versions
- GET /v1/projects/{projectId}/datasets/{name}/entities/{uuid}/audits — entityAuditLog: Entity Audit Log
- GET /v1/projects/{projectId}/datasets/{name}/entities/{uuid}/geojson — getEntityGeoJson: Entity GeoJSON representation
- POST /v1/projects/{projectId}/datasets/{name}/entities/bulk-delete — deleteEntities: Bulk Deleting Entities
- POST /v1/projects/{projectId}/datasets/{name}/entities/bulk-restore — restoreEntities: Bulk Restoring Entities

## Form Assignments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/assignments — listAllFormAssignments: Listing all Form Assignments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/assignments/{roleId} — listAllActorsAssignedSomeFormRole: Listing all Actors assigned some Form Role
- POST /v1/projects/{projectId}/forms/{xmlFormId}/assignments/{roleId}/{actorId} — assignActorToFormRole: Assigning an Actor to a Form Role
- DELETE /v1/projects/{projectId}/forms/{xmlFormId}/assignments/{roleId}/{actorId} — revokeFormRoleAssignmentFromActor: Revoking a Form Role Assignment from an Actor

## Forms
- GET /v1/projects/{projectId}/forms — listAllForms: List all Forms
- POST /v1/projects/{projectId}/forms — createForm: Creating a new Form

## HTTPS Basic Authentication
- GET /v1/example2 — useBasicAuthentication: Using Basic Authentication

## Individual Form
- GET /v1/projects/{projectId}/forms/{xmlFormId} — getFormDetails: Getting Form Details
- PATCH /v1/projects/{projectId}/forms/{xmlFormId} — modifyForm: Modifying a Form
- DELETE /v1/projects/{projectId}/forms/{xmlFormId} — deleteForm: Deleting a Form
- GET /v1/form-links/{formLinkId}/form — getFormDetailsByFormlinkid: Getting Form Details by formLinkId
- GET /v1/projects/{projectId}/forms/{xmlFormId}.xml — retrieveFormXml: Retrieving Form XML
- GET /v1/projects/{projectId}/forms/{xmlFormId}.xlsx — retrieveFormXls: Retrieving Form XLS(X)
- GET /v1/projects/{projectId}/forms/{xmlFormId}/attachments — listFormAttachments: Listing Form Attachments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/attachments/{filename} — downloadFormAttachment: Downloading a Form Attachment
- GET /v1/projects/{projectId}/forms/{xmlFormId}/fields — getFormSchemaFields: Getting Form Schema Fields
- POST /v1/projects/{projectId}/forms/{id}/restore — restoreForm: Restoring a Form

## OData Dataset Service
- GET /v1/projects/{projectId}/datasets/{name}.svc — serviceDocumentForDatasets: Service Document
- GET /v1/projects/{projectId}/datasets/{name}.svc/$metadata — metadataDocumentForDataset: Metadata Document
- GET /v1/projects/{projectId}/datasets/{name}.svc/Entities — dataDocumentForDataset: Data Document

## OData Form Service
- GET /v1/projects/{projectId}/forms/{xmlFormId}.svc — serviceDocument: Service Document
- GET /v1/projects/{projectId}/forms/{xmlFormId}.svc/$metadata — metadataDocument: Metadata Document
- GET /v1/projects/{projectId}/forms/{xmlFormId}.svc/{table} — dataDocument: Data Document
- GET /dl/projects{projectId}/forms/{xmlFormId}/submissions/{instanceId}/attachments/{filename} — dataDownloadPath: Data Download Path

## OpenRosa Endpoints
- GET /v1/projects/{projectId}/formList — openrosaListForms: OpenRosa Form Listing API
- POST /v1/projects/{projectId}/submission — openrosaSubmitForm: OpenRosa Form Submission API
- GET /v1/projects/{projectId}/forms/{xmlFormId}/manifest — openrosaGetFormManifest: OpenRosa Form Manifest API
- GET /v1/projects/{projectId}/datasets/{name}/integrity — openrosaCheckDatasetIntegrity: OpenRosa Dataset Integrity API

## Project Assignments
- GET /v1/projects/{projectId}/assignments — listAllProjectAssignments: Listing all Project Assignments
- GET /v1/projects/{projectId}/assignments/{roleId} — listAllActorsAssignedSomeProjectRole: Listing all Actors assigned some Project Role
- POST /v1/projects/{projectId}/assignments/{roleId}/{actorId} — assignActorToProjectRole: Assigning an Actor to a Project Role
- DELETE /v1/projects/{projectId}/assignments/{roleId}/{actorId} — revokeProjectRoleAssignmentFromActor: Revoking a Project Role Assignment from an Actor
- GET /v1/projects/{projectId}/assignments/forms — getProjectFormAssignments: Seeing all Form Assignments within a Project
- GET /v1/projects/{projectId}/assignments/forms/{roleId} — getRoleSpecificProjectFormAssignments: Seeing Role-specific Form Assignments within a Project

## Projects
- GET /v1/projects — listProjects: Listing Projects
- POST /v1/projects — createProject: Creating a Project
- GET /v1/projects/{id} — getProjectDetails: Getting Project Details
- PUT /v1/projects/{id} — deepUpdateProjectAndFormDetails: Deep Updating Project and Form Details
- PATCH /v1/projects/{id} — updateProjectDetails: Updating Project Details
- DELETE /v1/projects/{id} — deleteProject: Deleting a Project
- POST /v1/projects/{id}/key — enableProjectManagedEncryption: Enabling Project Managed Encryption

## Public Access Links
- GET /v1/projects/{projectId}/forms/{xmlFormId}/public-links — listAllLinks: Listing all Links
- POST /v1/projects/{projectId}/forms/{xmlFormId}/public-links — createLink: Creating a Link
- GET /v1/projects/{projectId}/forms/{xmlFormId}/public-links/{linkId} — getLink: Getting Link Details
- PATCH /v1/projects/{projectId}/forms/{xmlFormId}/public-links/{linkId} — patchLink: Setting Actor Property Values on a Link
- DELETE /v1/projects/{projectId}/forms/{xmlFormId}/public-links/{linkId} — deleteLink: Deleting a Link

## Published Form Versions
- GET /v1/projects/{projectId}/forms/{xmlFormId}/versions — listPublishedFormVersions: Listing Published Form Versions
- GET /v1/projects/{projectId}/forms/{xmlFormId}/versions/{version} — getFormVersionDetails: Getting Form Version Details
- GET /v1/projects/{projectId}/forms/{xmlFormId}/versions/{version}.xml — retrieveFormVersionXml: Retrieving Form Version XML
- GET /v1/projects/{projectId}/forms/{xmlFormId}/versions/{version}.xlsx — retrieveFormVersionXls: Retrieving Form Version XLS(X)
- GET /v1/projects/{projectId}/forms/{xmlFormId}/versions/{version}/attachments — listFormVersionAttachments: Listing Form Version Attachments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/versions/{version}/attachments/{filename} — downloadFormVersionAttachment: Downloading a Form Version Attachment
- GET /v1/projects/{projectId}/forms/{xmlFormId}/versions/{version}/fields — getFormVersionSchemaFields: Getting Form Version Schema Fields

## Related Datasets
- GET /v1/projects/{projectId}/forms/{xmlFormId}/dataset-diff — publishedFormRelatedDatasets: Published Form Related Datasets
- GET /v1/projects/{projectId}/forms/{xmlFormId}/draft/dataset-diff — draftFormDatasetDiff: Draft Form Dataset Diff

## Roles
- GET /v1/roles — listAllRoles: Listing all Roles
- GET /v1/roles/{id} — getRoleDetails: Getting Role Details

## Server Audit Logs
- GET /v1/audits — getAuditLogEntries: Getting Audit Log Entries

## Session Authentication
- POST /v1/sessions — logIn: Logging in
- GET /v1/example1 — sessionAuthentication: Using the session
- DELETE /v1/sessions/{token} — revokeAppUser: Logging out / Revoking an App User
- DELETE /v1/sessions/current — logOutCurrentSession: Logging out current session

## Submission Versions
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/versions — listVersions: Listing Versions
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/versions/{versionId} — getVersionDetails: Getting Version Details
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/versions/{versionId}.xml — getVersionXml: Getting Version XML
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/versions/{versionId}.geojson — getVersionGeoJson: Getting Version GeoJSON
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/versions/{versionId}/attachments — listVersionExpectedAttachments: Listing Version expected Attachments
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/versions/{versionId}/attachments/{filename} — downloadVersionedAttachment: Downloading a Version's Attachment
- DELETE /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/versions/{versionId}/attachments/{filename} — clearVersionedAttachment: Clearing a Submission Version's Attachment
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/diffs — getChangesBetweenVersions: Getting changes between Versions

## Submissions
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions — listAllSubmissions: Listing all Submissions on a Form
- POST /v1/projects/{projectId}/forms/{xmlFormId}/submissions — createSubmission: Creating a Submission
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions.geojson — getSubmissionsGeodata: Retrieving Submissions Geodata
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId} — getSubmissionMetadata: Getting Submission metadata
- PUT /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId} — updateSubmissionData: Updating Submission Data
- PATCH /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId} — updateSubmissionMetadata: Updating Submission metadata
- DELETE /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId} — deleteSubmission: Deleting a Submission
- POST /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/restore — restoreDeletedSubmission: Restoring a deleted Submission
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}.xml — retrieveSubmissionXml: Retrieving Submission XML
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}.geojson — getSubmissionGeoJson: Retrieving GeoJSON of a single Submission
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/edit — getEnketoEditUrl: Getting an Enketo Edit URL
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions.csv.zip — exportFormSubmissionsToCsv: Exporting Form Submissions to CSV
- POST /v1/projects/{projectId}/forms/{xmlFormId}/submissions.csv.zip — exportFormSubmissionsToCsvViaPost: Exporting Form Submissions to CSV via POST
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions.csv — exportRootDataToPlainCsv: Exporting Root Data to Plain CSV
- POST /v1/projects/{projectId}/forms/{xmlFormId}/submissions.csv — exportRootDataToPlainCsvViaPost: Exporting Root Data to Plain CSV via POST
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/{instanceId}/audits — retrieveAuditLogs: Retrieving Audit Logs
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/keys — listEncryptionKeys: Listing Encryption Keys
- GET /v1/projects/{projectId}/forms/{xmlFormId}/submissions/submitters — listSubmitters: Listing Submitters

## System Configuration
- GET /v1/config/analytics — getTheCurrentConfiguration: Getting the current Usage Reporting configuration
- POST /v1/config/analytics — setConfiguration: Setting new configuration for Usage Reporting
- DELETE /v1/config/analytics — unsetTheCurrentConfiguration: Unsetting the current Usage Reporting configuration
- GET /v1/config/login-appearance — getLoginAppearance: Getting the title and description configured for the login page
- POST /v1/config/login-appearance — setLoginAppearance: Setting a new title and description for the login page
- DELETE /v1/config/login-appearance — unsetLoginAppearance: Unsetting the title and description configured for the login page
- GET /v1/config/logo — getLogo: Getting the logo configured for the server
- POST /v1/config/logo — setLogo: Setting a new logo for the server
- DELETE /v1/config/logo — unsetLogo: Unsetting the logo configured for the server
- GET /v1/config/hero-image — getHeroImage: Getting the hero image configured for the server
- POST /v1/config/hero-image — setHeroImage: Setting a new hero image for the server
- DELETE /v1/config/hero-image — unsetHeroImage: Unsetting the hero image configured for the server
- GET /v1/config/public — getPublicConfig: Getting all public configuration

## Usage Report Preview
- GET /v1/analytics/preview — getTheUsageReportPreview: Getting the Usage Report preview

## User Preferences
- PUT /v1/user-preferences/project/{projectId}/{propertyName} — setProjectUserPreference: Setting a project preference
- DELETE /v1/user-preferences/project/{projectId}/{propertyName} — deleteProjectUserPreference: Deleting a project preference
- PUT /v1/user-preferences/site/{propertyName} — setSiteUserPreference: Setting a sitewide preference
- DELETE /v1/user-preferences/site/{propertyName} — deleteSiteUserPreference: Deleting a sitewide preference

## Users
- GET /v1/users — listAllUsers: Listing all Users
- POST /v1/users — createNewUser: Creating a new User
- GET /v1/users/{actorId} — getUserDetails: Getting User details
- PATCH /v1/users/{actorId} — modifyUser: Modifying a User
- DELETE /v1/users/{actorId} — deleteUser: Deleting a User
- GET /v1/users/current — getAuthenticatedUserDetails: Getting authenticated User details
- PUT /v1/users/{actorId}/password — setUserPassword: Directly updating a user password
- POST /v1/users/reset/initiate — initatePasswordReset: Initating a password reset
