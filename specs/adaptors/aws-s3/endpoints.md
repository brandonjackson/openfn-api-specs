# Amazon Simple Storage Service (aws-s3) v2006-03-01

<!-- derived from openapi.json by `pnpm specs index aws-s3` — do not edit by hand -->

base: https://s3.{region}.amazonaws.com, https://s3.amazonaws.com | auth: apiKey (header Authorization) | 112 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## (root)
- GET / — ListBuckets: This operation is not supported for directory buckets.
- GET /#x-id=ListDirectoryBuckets — ListDirectoryBuckets: Returns a list of all Amazon S3 directory buckets owned by the authenticated sender of the request.

## WriteGetObjectResponse
- POST /WriteGetObjectResponse — WriteGetObjectResponse: This operation is not supported for directory buckets.

## {Bucket}
- GET /{Bucket} — ListObjects: This operation is not supported for directory buckets.
- PUT /{Bucket} — CreateBucket: This action creates an Amazon S3 bucket.
- DELETE /{Bucket} — DeleteBucket: Deletes the S3 bucket.
- HEAD /{Bucket} — HeadBucket: You can use this operation to determine if a bucket exists and if you have permission to access it.
- GET /{Bucket}#abac — GetBucketAbac: Returns the attribute-based access control (ABAC) property of the general purpose bucket.
- PUT /{Bucket}#abac — PutBucketAbac: Sets the attribute-based access control (ABAC) property of the general purpose bucket.
- GET /{Bucket}#accelerate — GetBucketAccelerateConfiguration: This operation is not supported for directory buckets.
- PUT /{Bucket}#accelerate — PutBucketAccelerateConfiguration: This operation is not supported for directory buckets.
- GET /{Bucket}#acl — GetBucketAcl: This operation is not supported for directory buckets.
- PUT /{Bucket}#acl — PutBucketAcl: End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs).
- GET /{Bucket}#analytics — ListBucketAnalyticsConfigurations: This operation is not supported for directory buckets.
- PUT /{Bucket}#analytics — PutBucketAnalyticsConfiguration: This operation is not supported for directory buckets.
- DELETE /{Bucket}#analytics — DeleteBucketAnalyticsConfiguration: This operation is not supported for directory buckets.
- GET /{Bucket}#analytics&id — GetBucketAnalyticsConfiguration: This operation is not supported for directory buckets.
- GET /{Bucket}#cors — GetBucketCors: This operation is not supported for directory buckets.
- PUT /{Bucket}#cors — PutBucketCors: This operation is not supported for directory buckets.
- DELETE /{Bucket}#cors — DeleteBucketCors: This operation is not supported for directory buckets.
- POST /{Bucket}#delete — DeleteObjects: This operation enables you to delete multiple objects from a bucket using a single HTTP request.
- GET /{Bucket}#encryption — GetBucketEncryption: Returns the default encryption configuration for an Amazon S3 bucket.
- PUT /{Bucket}#encryption — PutBucketEncryption: This operation configures default encryption and Amazon S3 Bucket Keys for an existing bucket.
- DELETE /{Bucket}#encryption — DeleteBucketEncryption: This implementation of the DELETE action resets the default encryption for the bucket as server-side encryption with Amazon S3 managed keys…
- GET /{Bucket}#intelligent-tiering — ListBucketIntelligentTieringConfigurations: This operation is not supported for directory buckets.
- PUT /{Bucket}#intelligent-tiering — PutBucketIntelligentTieringConfiguration: This operation is not supported for directory buckets.
- DELETE /{Bucket}#intelligent-tiering — DeleteBucketIntelligentTieringConfiguration: This operation is not supported for directory buckets.
- GET /{Bucket}#intelligent-tiering&id — GetBucketIntelligentTieringConfiguration: This operation is not supported for directory buckets.
- GET /{Bucket}#inventory — ListBucketInventoryConfigurations: Returns a list of S3 Inventory configurations for the bucket.
- PUT /{Bucket}#inventory — PutBucketInventoryConfiguration: This implementation of the PUT action adds an S3 Inventory configuration (identified by the inventory ID) to the bucket.
- DELETE /{Bucket}#inventory — DeleteBucketInventoryConfiguration: Deletes an S3 Inventory configuration (identified by the inventory ID) from the bucket.
- GET /{Bucket}#inventory&id — GetBucketInventoryConfiguration: Returns an S3 Inventory configuration (identified by the inventory configuration ID) from the bucket.
- GET /{Bucket}#lifecycle — GetBucketLifecycleConfiguration: Returns the lifecycle configuration information set on the bucket.
- PUT /{Bucket}#lifecycle — PutBucketLifecycleConfiguration: Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration.
- DELETE /{Bucket}#lifecycle — DeleteBucketLifecycle: Deletes the lifecycle configuration from the specified bucket.
- GET /{Bucket}#list-type=2 — ListObjectsV2: Returns some or all (up to 1,000) of the objects in a bucket with each request.
- GET /{Bucket}#location — GetBucketLocation: Using the GetBucketLocation operation is no longer a best practice.
- GET /{Bucket}#logging — GetBucketLogging: This operation is not supported for directory buckets.
- PUT /{Bucket}#logging — PutBucketLogging: End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs).
- PUT /{Bucket}#metadataAnnotationTable — UpdateBucketMetadataAnnotationTableConfiguration: Updates the annotation table configuration for an Amazon S3 bucket's metadata configuration.
- GET /{Bucket}#metadataConfiguration — GetBucketMetadataConfiguration: Retrieves the S3 Metadata configuration for a general purpose bucket.
- POST /{Bucket}#metadataConfiguration — CreateBucketMetadataConfiguration: Creates an S3 Metadata V2 metadata configuration for a general purpose bucket.
- DELETE /{Bucket}#metadataConfiguration — DeleteBucketMetadataConfiguration: Deletes an S3 Metadata configuration from a general purpose bucket.
- PUT /{Bucket}#metadataInventoryTable — UpdateBucketMetadataInventoryTableConfiguration: Enables or disables a live inventory table for an S3 Metadata configuration on a general purpose bucket.
- PUT /{Bucket}#metadataJournalTable — UpdateBucketMetadataJournalTableConfiguration: Enables or disables journal table record expiration for an S3 Metadata configuration on a general purpose bucket.
- GET /{Bucket}#metadataTable — GetBucketMetadataTableConfiguration: We recommend that you retrieve your S3 Metadata configurations by using the V2 GetBucketMetadataConfiguration API operation.
- POST /{Bucket}#metadataTable — CreateBucketMetadataTableConfiguration: We recommend that you create your S3 Metadata configurations by using the V2 CreateBucketMetadataConfiguration API operation.
- DELETE /{Bucket}#metadataTable — DeleteBucketMetadataTableConfiguration: We recommend that you delete your S3 Metadata configurations by using the V2 DeleteBucketMetadataConfiguration API operation.
- GET /{Bucket}#metrics — ListBucketMetricsConfigurations: Lists the metrics configurations for the bucket.
- PUT /{Bucket}#metrics — PutBucketMetricsConfiguration: Sets a metrics configuration (specified by the metrics configuration ID) for the bucket.
- DELETE /{Bucket}#metrics — DeleteBucketMetricsConfiguration: Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket.
- GET /{Bucket}#metrics&id — GetBucketMetricsConfiguration: Gets a metrics configuration (specified by the metrics configuration ID) from the bucket.
- GET /{Bucket}#notification — GetBucketNotificationConfiguration: This operation is not supported for directory buckets.
- PUT /{Bucket}#notification — PutBucketNotificationConfiguration: This operation is not supported for directory buckets.
- GET /{Bucket}#object-lock — GetObjectLockConfiguration: This operation is not supported for directory buckets.
- PUT /{Bucket}#object-lock — PutObjectLockConfiguration: This operation is not supported for directory buckets.
- GET /{Bucket}#ownershipControls — GetBucketOwnershipControls: This operation is not supported for directory buckets.
- PUT /{Bucket}#ownershipControls — PutBucketOwnershipControls: This operation is not supported for directory buckets.
- DELETE /{Bucket}#ownershipControls — DeleteBucketOwnershipControls: This operation is not supported for directory buckets.
- GET /{Bucket}#policy — GetBucketPolicy: Returns the policy of a specified bucket.
- PUT /{Bucket}#policy — PutBucketPolicy: Applies an Amazon S3 bucket policy to an Amazon S3 bucket.
- DELETE /{Bucket}#policy — DeleteBucketPolicy: Deletes the policy of a specified bucket.
- GET /{Bucket}#policyStatus — GetBucketPolicyStatus: This operation is not supported for directory buckets.
- GET /{Bucket}#publicAccessBlock — GetPublicAccessBlock: This operation is not supported for directory buckets.
- PUT /{Bucket}#publicAccessBlock — PutPublicAccessBlock: This operation is not supported for directory buckets.
- DELETE /{Bucket}#publicAccessBlock — DeletePublicAccessBlock: This operation is not supported for directory buckets.
- GET /{Bucket}#replication — GetBucketReplication: This operation is not supported for directory buckets.
- PUT /{Bucket}#replication — PutBucketReplication: This operation is not supported for directory buckets.
- DELETE /{Bucket}#replication — DeleteBucketReplication: This operation is not supported for directory buckets.
- GET /{Bucket}#requestPayment — GetBucketRequestPayment: This operation is not supported for directory buckets.
- PUT /{Bucket}#requestPayment — PutBucketRequestPayment: This operation is not supported for directory buckets.
- GET /{Bucket}#session — CreateSession: Creates a session that establishes temporary security credentials to support fast authentication and authorization for the Zonal endpoint A…
- GET /{Bucket}#tagging — GetBucketTagging: This operation is not supported for directory buckets.
- PUT /{Bucket}#tagging — PutBucketTagging: This operation is not supported for directory buckets.
- DELETE /{Bucket}#tagging — DeleteBucketTagging: This operation is not supported for directory buckets.
- GET /{Bucket}#uploads — ListMultipartUploads: This operation lists in-progress multipart uploads in a bucket.
- GET /{Bucket}#versioning — GetBucketVersioning: This operation is not supported for directory buckets.
- PUT /{Bucket}#versioning — PutBucketVersioning: This operation is not supported for directory buckets.
- GET /{Bucket}#versions — ListObjectVersions: This operation is not supported for directory buckets.
- GET /{Bucket}#website — GetBucketWebsite: This operation is not supported for directory buckets.
- PUT /{Bucket}#website — PutBucketWebsite: This operation is not supported for directory buckets.
- DELETE /{Bucket}#website — DeleteBucketWebsite: This operation is not supported for directory buckets.
- GET /{Bucket}/{Key} — GetObject: Retrieves an object from Amazon S3.
- POST /{Bucket}/{Key} — CompleteMultipartUpload: Completes a multipart upload by assembling previously uploaded parts.
- PUT /{Bucket}/{Key} — PutObject: End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs).
- DELETE /{Bucket}/{Key} — DeleteObject: Removes an object from a bucket.
- HEAD /{Bucket}/{Key} — HeadObject: The HEAD operation retrieves metadata from an object without returning the object itself.
- GET /{Bucket}/{Key}#acl — GetObjectAcl: This operation is not supported for directory buckets.
- PUT /{Bucket}/{Key}#acl — PutObjectAcl: End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs).
- GET /{Bucket}/{Key}#annotation — ListObjectAnnotations: Lists the annotations attached to an Amazon S3 object.
- PUT /{Bucket}/{Key}#annotation — PutObjectAnnotation: Attaches an annotation to an Amazon S3 object.
- DELETE /{Bucket}/{Key}#annotation — DeleteObjectAnnotation: Deletes a specific annotation from an Amazon S3 object.
- GET /{Bucket}/{Key}#annotation&annotationName — GetObjectAnnotation: Retrieves an annotation from an Amazon S3 object.
- GET /{Bucket}/{Key}#attributes — GetObjectAttributes: Retrieves all of the metadata from an object without returning the object itself.
- PUT /{Bucket}/{Key}#encryption — UpdateObjectEncryption: This operation is not supported for directory buckets or Amazon S3 on Outposts buckets.
- GET /{Bucket}/{Key}#legal-hold — GetObjectLegalHold: This operation is not supported for directory buckets.
- PUT /{Bucket}/{Key}#legal-hold — PutObjectLegalHold: This operation is not supported for directory buckets.
- PUT /{Bucket}/{Key}#partNumber&uploadId — UploadPart: Uploads a part in a multipart upload.
- PUT /{Bucket}/{Key}#partNumber&uploadId&x-amz-copy-source — UploadPartCopy: Uploads a part by copying data from an existing object as data source.
- PUT /{Bucket}/{Key}#renameObject — RenameObject: Renames an existing object in a directory bucket that uses the S3 Express One Zone storage class.
- POST /{Bucket}/{Key}#restore — RestoreObject: This operation is not supported for directory buckets.
- GET /{Bucket}/{Key}#retention — GetObjectRetention: This operation is not supported for directory buckets.
- PUT /{Bucket}/{Key}#retention — PutObjectRetention: This operation is not supported for directory buckets.
- POST /{Bucket}/{Key}#select&select-type=2 — SelectObjectContent: This operation is not supported for directory buckets.
- GET /{Bucket}/{Key}#tagging — GetObjectTagging: This operation is not supported for directory buckets.
- PUT /{Bucket}/{Key}#tagging — PutObjectTagging: This operation is not supported for directory buckets.
- DELETE /{Bucket}/{Key}#tagging — DeleteObjectTagging: This operation is not supported for directory buckets.
- GET /{Bucket}/{Key}#torrent — GetObjectTorrent: This operation is not supported for directory buckets.
- GET /{Bucket}/{Key}#uploadId — ListParts: Lists the parts that have been uploaded for a specific multipart upload.
- DELETE /{Bucket}/{Key}#uploadId — AbortMultipartUpload: This operation aborts a multipart upload.
- POST /{Bucket}/{Key}#uploads — CreateMultipartUpload: End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs).
- PUT /{Bucket}/{Key}#x-amz-copy-source — CopyObject: Creates a copy of an object that is already stored in Amazon S3.
