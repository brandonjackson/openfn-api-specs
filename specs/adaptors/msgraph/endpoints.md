# Microsoft Graph v1.0 (OpenFn msgraph subset) (msgraph) v1.0.0

<!-- derived from openapi.json by `pnpm specs index msgraph` — do not edit by hand -->

base: https://graph.microsoft.com/v1.0 | auth: not declared | 17 operations in 6 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## applications
- POST /applications — createApplication: Create a resource (adaptor create()). Modeled on applications.

## drives
- GET /drives/{drive-id} — getDrive: Get a drive by id (getDrive with owner=drive)
- GET /drives/{drive-id}/items/{item-id} — getDriveItem: Get driveItem metadata by id (getFolder/getFile with metadata:true)
- GET /drives/{drive-id}/items/{item-id}/children — listDriveItemChildren: List the children of a folder driveItem (getFolder default)
- GET /drives/{drive-id}/items/{item-id}/content — getDriveItemContent: Download the contents of a file driveItem (getFile default)
- GET /drives/{drive-id}/root:/{item-path} — getDriveItemByPath: Get a driveItem by path (getFolder/getFile with a path starting with '/')
- GET /drives/{drive-id}/items/{item-id}/workbook/worksheets — listWorksheets: List worksheets of an Excel workbook driveItem
- POST /drives/{drive-id}/items/{item-id}:/{filename}:/createUploadSession — createDriveUploadSession: Create an upload session for a large file in a drive (uploadFile with driveId)

## groups
- GET /groups/{group-id} — getGroup: Get a group
- GET /groups/{group-id}/drive — getGroupDrive: Get the default drive of a group (getDrive with owner=groups)

## me
- GET /me — getMe: Get the signed-in user

## sites
- GET /sites/root — getRootSite: Get the tenant root SharePoint site
- GET /sites/{site-id} — getSite: Get a SharePoint site
- GET /sites/{site-id}/lists — listSiteLists: List a site's lists (adaptor get('sites/root/lists') example)
- GET /sites/{site-id}/drive — getSiteDrive: Get the default document library (drive) of a site (getDrive with owner=sites)
- POST /sites/{site-id}/drive/items/{item-id}:/{filename}:/createUploadSession — createSiteDriveUploadSession: Create an upload session for a large file in a site drive (uploadFile with siteId)

## users
- GET /users/{user-id} — getUser: Get a user
