# Azure Blob Storage (azure-storage) v2021-12-02

<!-- derived from openapi.json by `pnpm specs index azure-storage` — do not edit by hand -->

base: {url} | auth: not declared | 69 operations in 8 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## appendblob
- PUT /{containerName}/{blob}#comp=appendblock — AppendBlob_AppendBlock: The Append Block operation commits a new block of data to the end of an existing append blob.
- PUT /{containerName}/{blob}#comp=appendblock&fromUrl — AppendBlob_AppendBlockFromUrl: The Append Block operation commits a new block of data to the end of an existing append blob where the contents are read from a source url.
- PUT /{containerName}/{blob}#comp=seal — AppendBlob_Seal: The Seal operation seals the Append Blob to make it read-only.

## blob
- GET /{containerName}/{blob} — Blob_Download: The Download operation reads or downloads a blob from the system, including its metadata and properties.
- DELETE /{containerName}/{blob} — Blob_Delete: If the storage account's soft delete feature is disabled then, when a blob is deleted, it is permanently removed from the storage account.
- HEAD /{containerName}/{blob} — Blob_GetProperties: The Get Properties operation returns all user-defined metadata, standard HTTP properties, and system properties for the blob.
- PUT /{containerName}/{blob}#PageBlob — PageBlob_Create: The Create operation creates a new page blob.
- PUT /{containerName}/{blob}#AppendBlob — AppendBlob_Create: The Create Append Blob operation creates a new append blob.
- PUT /{containerName}/{blob}#BlockBlob — BlockBlob_Upload: The Upload Block Blob operation updates the content of an existing block blob.
- PUT /{containerName}/{blob}#BlockBlob&fromUrl — BlockBlob_PutBlobFromUrl: The Put Blob from URL operation creates a new Block Blob where the contents of the blob are read from a given URL.
- PUT /{containerName}/{blob}#comp=undelete — Blob_Undelete: Undelete a blob that was previously soft deleted
- PUT /{containerName}/{blob}#comp=expiry — Blob_SetExpiry: Sets the time a blob will expire and be deleted.
- PUT /{containerName}/{blob}#comp=properties&SetHTTPHeaders — Blob_SetHTTPHeaders: The Set HTTP Headers operation sets system properties on the blob
- PUT /{containerName}/{blob}#comp=immutabilityPolicies — Blob_SetImmutabilityPolicy: The Set Immutability Policy operation sets the immutability policy on the blob
- DELETE /{containerName}/{blob}#comp=immutabilityPolicies — Blob_DeleteImmutabilityPolicy: The Delete Immutability Policy operation deletes the immutability policy on the blob
- PUT /{containerName}/{blob}#comp=legalhold — Blob_SetLegalHold: The Set Legal Hold operation sets a legal hold on the blob.
- PUT /{containerName}/{blob}#comp=metadata — Blob_SetMetadata: The Set Blob Metadata operation sets user-defined metadata for the specified blob as one or more name-value pairs
- PUT /{containerName}/{blob}#comp=lease&acquire — Blob_AcquireLease: [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete operations
- PUT /{containerName}/{blob}#comp=lease&release — Blob_ReleaseLease: [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete operations
- PUT /{containerName}/{blob}#comp=lease&renew — Blob_RenewLease: [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete operations
- PUT /{containerName}/{blob}#comp=lease&change — Blob_ChangeLease: [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete operations
- PUT /{containerName}/{blob}#comp=lease&break — Blob_BreakLease: [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete operations
- PUT /{containerName}/{blob}#comp=snapshot — Blob_CreateSnapshot: The Create Snapshot operation creates a read-only snapshot of a blob
- PUT /{containerName}/{blob}#comp=copy — Blob_StartCopyFromURL: The Start Copy From URL operation copies a blob or an internet resource to a new blob.
- PUT /{containerName}/{blob}#comp=copy&sync — Blob_CopyFromURL: The Copy From URL operation copies a blob or an internet resource to a new blob.
- PUT /{containerName}/{blob}#comp=copy&copyid — Blob_AbortCopyFromURL: The Abort Copy From URL operation aborts a pending Copy From URL operation, and leaves a destination blob with zero length and full metadat…
- GET /{containerName}/{blob}#restype=account&comp=properties — Blob_GetAccountInfo: Returns the sku name and account kind
- POST /{containerName}/{blob}#comp=query — Blob_Query: The Query operation enables users to select/project on blob data by providing simple query expressions.
- GET /{containerName}/{blob}#comp=tags — Blob_GetTags: The Get Tags operation enables users to get the tags associated with a blob.
- PUT /{containerName}/{blob}#comp=tags — Blob_SetTags: The Set Tags operation enables users to set tags on a blob.

## blobs
- PUT /{containerName}/{blob}#comp=tier — Blob_SetTier: The Set Tier operation sets the tier on a blob.

## blockblob
- PUT /{containerName}/{blob}#comp=block — BlockBlob_StageBlock: The Stage Block operation creates a new block to be committed as part of a blob
- PUT /{containerName}/{blob}#comp=block&fromURL — BlockBlob_StageBlockFromURL: The Stage Block operation creates a new block to be committed as part of a blob where the contents are read from a URL.
- GET /{containerName}/{blob}#comp=blocklist — BlockBlob_GetBlockList: The Get Block List operation retrieves the list of blocks that have been uploaded as part of a block blob
- PUT /{containerName}/{blob}#comp=blocklist — BlockBlob_CommitBlockList: The Commit Block List operation writes a blob by specifying the list of block IDs that make up the blob.

## container
- GET /{containerName}#restype=container — Container_GetProperties: returns all user-defined metadata and system properties for the specified container.
- PUT /{containerName}#restype=container — Container_Create: creates a new container under the specified account.
- DELETE /{containerName}#restype=container — Container_Delete: operation marks the specified container for deletion.
- PUT /{containerName}#restype=container&comp=metadata — Container_SetMetadata: operation sets one or more user-defined name-value pairs for the specified container.
- GET /{containerName}#restype=container&comp=acl — Container_GetAccessPolicy: gets the permissions for the specified container.
- PUT /{containerName}#restype=container&comp=acl — Container_SetAccessPolicy: sets the permissions for the specified container.
- PUT /{containerName}#restype=container&comp=undelete — Container_Restore: Restores a previously-deleted container.
- PUT /{containerName}#restype=container&comp=rename — Container_Rename: Renames an existing container.
- POST /{containerName}#restype=container&comp=batch — Container_SubmitBatch: The Batch operation allows multiple API calls to be embedded into a single HTTP request.
- GET /{containerName}#restype=container&comp=blobs — Container_FilterBlobs: The Filter Blobs operation enables callers to list blobs in a container whose tags match a given search expression.
- PUT /{containerName}#comp=lease&restype=container&acquire — Container_AcquireLease: [Update] establishes and manages a lock on a container for delete operations.
- PUT /{containerName}#comp=lease&restype=container&release — Container_ReleaseLease: [Update] establishes and manages a lock on a container for delete operations.
- PUT /{containerName}#comp=lease&restype=container&renew — Container_RenewLease: [Update] establishes and manages a lock on a container for delete operations.
- PUT /{containerName}#comp=lease&restype=container&break — Container_BreakLease: [Update] establishes and manages a lock on a container for delete operations.
- PUT /{containerName}#comp=lease&restype=container&change — Container_ChangeLease: [Update] establishes and manages a lock on a container for delete operations.
- GET /{containerName}#restype=account&comp=properties — Container_GetAccountInfo: Returns the sku name and account kind

## containers
- GET /{containerName}#restype=container&comp=list&flat — Container_ListBlobFlatSegment: [Update] The List Blobs operation returns a list of the blobs under the specified container
- GET /{containerName}#restype=container&comp=list&hierarchy — Container_ListBlobHierarchySegment: [Update] The List Blobs operation returns a list of the blobs under the specified container

## pageblob
- PUT /{containerName}/{blob}#comp=page&update — PageBlob_UploadPages: The Upload Pages operation writes a range of pages to a page blob
- PUT /{containerName}/{blob}#comp=page&clear — PageBlob_ClearPages: The Clear Pages operation clears a set of pages from a page blob
- PUT /{containerName}/{blob}#comp=page&update&fromUrl — PageBlob_UploadPagesFromURL: The Upload Pages operation writes a range of pages to a page blob where the contents are read from a URL
- GET /{containerName}/{blob}#comp=pagelist — PageBlob_GetPageRanges: The Get Page Ranges operation returns the list of valid page ranges for a page blob or snapshot of a page blob
- GET /{containerName}/{blob}#comp=pagelist&diff — PageBlob_GetPageRangesDiff: The Get Page Ranges Diff operation returns the list of valid page ranges for a page blob that were changed between target blob and previous…
- PUT /{containerName}/{blob}#comp=properties&Resize — PageBlob_Resize: Resize the Blob
- PUT /{containerName}/{blob}#comp=properties&UpdateSequenceNumber — PageBlob_UpdateSequenceNumber: Update the sequence number of the blob
- PUT /{containerName}/{blob}#comp=incrementalcopy — PageBlob_CopyIncremental: The Copy Incremental operation copies a snapshot of the source page blob to a destination page blob.

## service
- GET /#restype=service&comp=properties — Service_GetProperties: gets the properties of a storage account's Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing…
- PUT /#restype=service&comp=properties — Service_SetProperties: Sets properties for a storage account's Blob service endpoint, including properties for Storage Analytics and CORS (Cross-Origin Resource S…
- GET /#restype=service&comp=stats — Service_GetStatistics: Retrieves statistics related to replication for the Blob service.
- GET /#comp=list — Service_ListContainersSegment: The List Containers Segment operation returns a list of the containers under the specified account
- POST /#restype=service&comp=userdelegationkey — Service_GetUserDelegationKey: Retrieves a user delegation key for the Blob service.
- GET /#restype=account&comp=properties — Service_GetAccountInfo: Returns the sku name and account kind
- POST /#comp=batch — Service_SubmitBatch: The Batch operation allows multiple API calls to be embedded into a single HTTP request.
- GET /#comp=blobs — Service_FilterBlobs: The Filter Blobs operation enables callers to list blobs across all containers whose tags match a given search expression.
