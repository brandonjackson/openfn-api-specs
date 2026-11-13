# Zoho Analytics API (v1) (zoho) v1.0

<!-- derived from openapi.json by `pnpm specs index zoho` — do not edit by hand -->

base: https://{host}, https://reportsapi.zoho.com | auth: apiKey (header Authorization), apiKey (query authtoken) | 77 operations in 12 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Data
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=ADDROW — addRow: Add a row to a table
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=DELETE — deleteRows: Delete rows from a table
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=UPDATE — updateRows: Update rows in a table
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=IMPORT — importData: Import data into a table
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=EXPORT — exportData: Export data from a view
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=EXPORT — exportSqlQuery: Run a CloudSQL SELECT query over a workspace

## Embed
- GET /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=GETVIEWURL — getViewUrl: Get a view's URL
- GET /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=GETEMBEDURL — getEmbedUrl: Get a signed embed URL for a view

## Groups
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=CREATEGROUP — createGroup: Create a user group
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=UPDATEGROUPINFO — updateGroup: Update a group's name or description
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=DELETEGROUP — deleteGroups: Delete groups
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=GROUPINFO — listGroups: Get group details
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=ADDGROUPMEMBERS — addGroupMembers: Add members to a group
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=REMOVEGROUPMEMBERS — removeGroupMembers: Remove members from a group

## Metadata
- GET /api/{ownerEmail}#ZOHO_ACTION=DATABASEMETADATA&ZOHO_METADATA=ZOHO_CATALOG_LIST — listCatalogs: List workspaces (catalog list)
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=DATABASEMETADATA — getCatalogInfo: Get the tables and reports of a workspace (catalog info)
- GET /api/{ownerEmail}#ZOHO_ACTION=DATABASEMETADATA&ZOHO_METADATA=ZOHO_DATATYPES — listDataTypes: List supported data types
- GET /api/{ownerEmail}#ZOHO_ACTION=DATABASEMETADATA&ZOHO_METADATA=ZOHO_TABLETYPES — listTableTypes: List view (table) types
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=FOLDERLIST — listFolders: List folders in a workspace
- GET /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=GETDATABASENAME — getWorkspaceName: Get a workspace name from its ID
- GET /api/{ownerEmail}#ZOHO_ACTION=GETDATABASEID — getWorkspaceId: Get a workspace ID from its name
- GET /api/{ownerEmail}#ZOHO_ACTION=ISDBEXIST — workspaceExists: Check whether a workspace exists
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=GETCOPYDBKEY — getWorkspaceCopyKey: Get a workspace's copy key
- GET /api/{ownerEmail}#ZOHO_ACTION=GETVIEWNAME — getViewName: Get a view name from its ID
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=ISVIEWEXIST — viewExists: Check whether a view exists
- GET /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=ISCOLUMNEXIST — columnExists: Check whether a column exists
- GET /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=GETINFO — getViewIds: Get the view ID and workspace ID of a view
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=GETVIEWINFO — getViewInfo: Get view details from its ID
- GET /api/{ownerEmail}#ZOHO_ACTION=RECENTITEMS — listRecentItems: List recently accessed views
- GET /api/{ownerEmail}#ZOHO_ACTION=GETDASHBOARDS — listDashboards: List dashboards

## OAuth
- POST /oauth/v2/token#grant_type=authorization_code — generateTokens: Exchange a grant code for access and refresh tokens
- POST /oauth/v2/token#grant_type=refresh_token — refreshAccessToken: Get a new access token from a refresh token
- POST /oauth/v2/token/revoke — revokeRefreshToken: Revoke a refresh token

## SSO
- POST /sso#operation=signup — ssoSignUp: White-label SSO: sign up a user
- POST /sso#operation=signin — ssoSignIn: White-label SSO: sign in a user

## Sharing
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=SHARE — shareViews: Share views with users
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=REMOVESHARE — removeSharing: Remove sharing from users
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=ADDDBOWNER — addWorkspaceAdmins: Add workspace administrators
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=REMOVEDBOWNER — removeWorkspaceAdmins: Remove workspace administrators
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=GETSHAREINFO — getShareInfo: Get a workspace's sharing information

## Slideshows
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=CREATESLIDESHOW — createSlideshow: Create a slideshow
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=UPDATESLIDESHOW — updateSlideshow: Update a slideshow
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=DELETESLIDESHOW — deleteSlideshows: Delete slideshows
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=GETSLIDELIST — listSlideshows: List slideshows
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=GETSLIDEINFO — getSlideshow: Get a slideshow's details
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=GETSLIDEURL — getSlideshowUrl: Get a slideshow's access URL

## Tables
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=CREATETABLE — createTable: Create a table from a JSON design
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=ADDCOLUMN — addColumn: Add a column to a table
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=ADDLOOKUP — addLookup: Make a column a lookup to another table
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=REMOVELOOKUP — removeLookup: Remove a lookup from a column
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=DELETECOLUMN — deleteColumn: Delete a column
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=HIDECOLUMN — hideColumns: Hide columns
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=SHOWCOLUMN — showColumns: Show hidden columns
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=RENAMECOLUMN — renameColumn: Rename a column
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=COPYFORMULA — copyFormulas: Copy formula columns to a table in another workspace

## Users
- GET /api/{ownerEmail}#ZOHO_ACTION=GETUSERS — listUsers: List the account's users
- POST /api/{ownerEmail}#ZOHO_ACTION=ADDUSER — addUsers: Add users to the account
- POST /api/{ownerEmail}#ZOHO_ACTION=REMOVEUSER — removeUsers: Remove users from the account
- POST /api/{ownerEmail}#ZOHO_ACTION=ACTIVATEUSER — activateUsers: Activate users
- POST /api/{ownerEmail}#ZOHO_ACTION=DEACTIVATEUSER — deactivateUsers: Deactivate users
- POST /api/{ownerEmail}#ZOHO_ACTION=CHANGEUSERROLE — changeUserRole: Change users' role
- GET /api/{ownerEmail}#ZOHO_ACTION=GETUSERPLANDETAILS — getPlanInfo: Get the account's plan details

## Views
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=AUTOGENREPORTS — autogenerateReports: Auto-generate reports for a table or column
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=SAVEAS — saveViewAs: Copy a view within the workspace (Save As)
- POST /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=CREATESIMILARVIEWS — createSimilarViews: Create views like a reference table's for this table
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=DELETEVIEW — deleteView: Delete a view
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=RENAMEVIEW — renameView: Rename a view
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=COPYREPORTS — copyReports: Copy reports to another workspace
- GET /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=VIEWLIST — listViews: List views in a workspace
- GET /api/{ownerEmail}/{workspaceName}/{viewName}#ZOHO_ACTION=VIEWMETADATA — getViewMetadata: Get a view's metadata

## Workspaces
- POST /api/{ownerEmail}#ZOHO_ACTION=CREATEBLANKDB — createWorkspace: Create a blank workspace
- POST /api/{ownerEmail}/{workspaceName}#ZOHO_ACTION=COPYDATABASE — copyWorkspace: Copy a workspace
- POST /api/{ownerEmail}#ZOHO_ACTION=DELETEDATABASE — deleteWorkspace: Delete a workspace
- POST /api/{ownerEmail}#ZOHO_ACTION=ENABLEDOMAINDB — enableDomainWorkspace: Enable a workspace on a white-label domain
- POST /api/{ownerEmail}#ZOHO_ACTION=DISABLEDOMAINDB — disableDomainWorkspace: Disable a workspace on a white-label domain
- GET /api/{ownerEmail}#ZOHO_ACTION=MYWORKSPACELIST — listMyWorkspaces: List workspaces you own
- GET /api/{ownerEmail}#ZOHO_ACTION=SHAREDWORKSPACELIST — listSharedWorkspaces: List workspaces shared with you
