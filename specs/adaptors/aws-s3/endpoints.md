# Amazon Simple Storage Service (aws-s3) v2006-03-01

<!-- derived from openapi.json by `pnpm specs index aws-s3` — do not edit by hand -->

base: https://s3.{region}.amazonaws.com | auth: apiKey (header Authorization) | 112 operations in 15 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Access control
- GET /{Bucket}/{Key}#acl — GetObjectAcl: Returns the access control list (ACL) of an object.
- PUT /{Bucket}/{Key}#acl — PutObjectAcl: Uses the acl subresource to set the access control list (ACL) permissions for a new or existing object in an S3 bucket.
- GET /{Bucket}#ownershipControls — GetBucketOwnershipControls: Retrieves OwnershipControls for an Amazon S3 bucket.
- PUT /{Bucket}#ownershipControls — PutBucketOwnershipControls: Creates or modifies OwnershipControls for an Amazon S3 bucket.
- DELETE /{Bucket}#ownershipControls — DeleteBucketOwnershipControls: Removes OwnershipControls for an Amazon S3 bucket.
- GET /{Bucket}#policy — GetBucketPolicy: Returns the policy of a specified bucket.
- PUT /{Bucket}#policy — PutBucketPolicy: Applies an Amazon S3 bucket policy to an Amazon S3 bucket.
- DELETE /{Bucket}#policy — DeleteBucketPolicy: Deletes the policy of a specified bucket.
- GET /{Bucket}#publicAccessBlock — GetPublicAccessBlock: Retrieves the PublicAccessBlock configuration for an Amazon S3 bucket.
- PUT /{Bucket}#publicAccessBlock — PutPublicAccessBlock: Creates or modifies the PublicAccessBlock configuration for an Amazon S3 bucket.
- DELETE /{Bucket}#publicAccessBlock — DeletePublicAccessBlock: Removes the PublicAccessBlock configuration for an Amazon S3 bucket.
- GET /{Bucket}#abac — GetBucketAbac: Returns the attribute-based access control (ABAC) property of the general purpose bucket.
- PUT /{Bucket}#abac — PutBucketAbac: Sets the attribute-based access control (ABAC) property of the general purpose bucket.
- GET /{Bucket}#acl — GetBucketAcl: This implementation of the GET action uses the acl subresource to return the access control list (ACL) of a bucket.
- PUT /{Bucket}#acl — PutBucketAcl: Sets the permissions on an existing bucket using access control lists (ACL).
- GET /{Bucket}#policyStatus — GetBucketPolicyStatus: Retrieves the policy status for an Amazon S3 bucket, indicating whether the bucket is public.

## Analytics, metrics and inventory
- GET /{Bucket}#analytics&id — GetBucketAnalyticsConfiguration: This implementation of the GET action returns an analytics configuration (identified by the analytics configuration ID) from the bucket.
- GET /{Bucket}#inventory&id — GetBucketInventoryConfiguration: Returns an S3 Inventory configuration (identified by the inventory configuration ID) from the bucket.
- GET /{Bucket}#metrics&id — GetBucketMetricsConfiguration: Gets a metrics configuration (specified by the metrics configuration ID) from the bucket.
- GET /{Bucket}#analytics — ListBucketAnalyticsConfigurations: Lists the analytics configurations for the bucket.
- PUT /{Bucket}#analytics — PutBucketAnalyticsConfiguration: Sets an analytics configuration for the bucket (specified by the analytics configuration ID).
- DELETE /{Bucket}#analytics — DeleteBucketAnalyticsConfiguration: Deletes an analytics configuration for the bucket (specified by the analytics configuration ID).
- GET /{Bucket}#inventory — ListBucketInventoryConfigurations: Returns a list of S3 Inventory configurations for the bucket.
- PUT /{Bucket}#inventory — PutBucketInventoryConfiguration: This implementation of the PUT action adds an S3 Inventory configuration (identified by the inventory ID) to the bucket.
- DELETE /{Bucket}#inventory — DeleteBucketInventoryConfiguration: Deletes an S3 Inventory configuration (identified by the inventory ID) from the bucket.
- GET /{Bucket}#metrics — ListBucketMetricsConfigurations: Lists the metrics configurations for the bucket.
- PUT /{Bucket}#metrics — PutBucketMetricsConfiguration: Sets a metrics configuration (specified by the metrics configuration ID) for the bucket.
- DELETE /{Bucket}#metrics — DeleteBucketMetricsConfiguration: Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket.

## Bucket configuration
- GET /{Bucket}#cors — GetBucketCors: Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the bucket.
- PUT /{Bucket}#cors — PutBucketCors: Sets the cors configuration for your bucket.
- DELETE /{Bucket}#cors — DeleteBucketCors: Deletes the cors configuration information set for the bucket.
- GET /{Bucket}#website — GetBucketWebsite: Returns the website configuration for a bucket.
- PUT /{Bucket}#website — PutBucketWebsite: Sets the configuration of the website that is specified in the website subresource.
- DELETE /{Bucket}#website — DeleteBucketWebsite: This action removes the website configuration for a bucket.
- GET /{Bucket}#accelerate — GetBucketAccelerateConfiguration: This implementation of the GET action uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is eithe…
- PUT /{Bucket}#accelerate — PutBucketAccelerateConfiguration: Sets the accelerate configuration of an existing bucket.
- GET /{Bucket}#requestPayment — GetBucketRequestPayment: Returns the request payment configuration of a bucket.
- PUT /{Bucket}#requestPayment — PutBucketRequestPayment: Sets the request payment configuration for a bucket.

## Buckets
- GET /{Bucket}#session — CreateSession: Creates a session that establishes temporary security credentials to support fast authentication and authorization for the Zonal endpoint A…
- GET /{Bucket}#location — GetBucketLocation: Returns the Region the bucket resides in.
- PUT /{Bucket} — CreateBucket: Creates a new S3 bucket.
- DELETE /{Bucket} — DeleteBucket: Deletes the S3 bucket.
- HEAD /{Bucket} — HeadBucket: You can use this operation to determine if a bucket exists and if you have permission to access it.
- GET /#x-id=ListBuckets — ListBuckets: Returns a list of all buckets owned by the authenticated sender of the request.
- GET /#x-id=ListDirectoryBuckets — ListDirectoryBuckets: Returns a list of all Amazon S3 directory buckets owned by the authenticated sender of the request.

## Encryption
- PUT /{Bucket}/{Key}#encryption — UpdateObjectEncryption: Updates the server-side encryption type of an existing encrypted object in a general purpose bucket.
- GET /{Bucket}#encryption — GetBucketEncryption: Returns the default encryption configuration for an Amazon S3 bucket.
- PUT /{Bucket}#encryption — PutBucketEncryption: This operation configures default encryption and Amazon S3 Bucket Keys for an existing bucket.
- DELETE /{Bucket}#encryption — DeleteBucketEncryption: This implementation of the DELETE action resets the default encryption for the bucket as server-side encryption with Amazon S3 managed keys…

## Lifecycle and tiering
- GET /{Bucket}#intelligent-tiering&id — GetBucketIntelligentTieringConfiguration: Gets the S3 Intelligent-Tiering configuration from the specified bucket.
- GET /{Bucket}#intelligent-tiering — ListBucketIntelligentTieringConfigurations: Lists the S3 Intelligent-Tiering configuration from the specified bucket.
- PUT /{Bucket}#intelligent-tiering — PutBucketIntelligentTieringConfiguration: Puts a S3 Intelligent-Tiering configuration to the specified bucket.
- DELETE /{Bucket}#intelligent-tiering — DeleteBucketIntelligentTieringConfiguration: Deletes the S3 Intelligent-Tiering configuration from the specified bucket.
- GET /{Bucket}#lifecycle — GetBucketLifecycleConfiguration: Returns the lifecycle configuration information set on the bucket.
- PUT /{Bucket}#lifecycle — PutBucketLifecycleConfiguration: Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration.
- DELETE /{Bucket}#lifecycle — DeleteBucketLifecycle: Deletes the lifecycle configuration from the specified bucket.

## Logging and notifications
- GET /{Bucket}#logging — GetBucketLogging: Returns the logging status of a bucket and the permissions users have to view and modify that status.
- PUT /{Bucket}#logging — PutBucketLogging: Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters.
- GET /{Bucket}#notification — GetBucketNotificationConfiguration: Returns the notification configuration of a bucket.
- PUT /{Bucket}#notification — PutBucketNotificationConfiguration: Enables notifications of specified events for a bucket.

## Metadata tables
- GET /{Bucket}#metadataConfiguration — GetBucketMetadataConfiguration: Retrieves the S3 Metadata configuration for a general purpose bucket.
- POST /{Bucket}#metadataConfiguration — CreateBucketMetadataConfiguration: Creates an S3 Metadata V2 metadata configuration for a general purpose bucket.
- DELETE /{Bucket}#metadataConfiguration — DeleteBucketMetadataConfiguration: Deletes an S3 Metadata configuration from a general purpose bucket.
- GET /{Bucket}#metadataTable — GetBucketMetadataTableConfiguration: Retrieves the V1 S3 Metadata configuration for a general purpose bucket.
- POST /{Bucket}#metadataTable — CreateBucketMetadataTableConfiguration: Creates a V1 S3 Metadata configuration for a general purpose bucket.
- DELETE /{Bucket}#metadataTable — DeleteBucketMetadataTableConfiguration: Deletes a V1 S3 Metadata configuration from a general purpose bucket.
- PUT /{Bucket}#metadataAnnotationTable — UpdateBucketMetadataAnnotationTableConfiguration: Updates the annotation table configuration for an Amazon S3 bucket's metadata configuration.
- PUT /{Bucket}#metadataInventoryTable — UpdateBucketMetadataInventoryTableConfiguration: Enables or disables a live inventory table for an S3 Metadata configuration on a general purpose bucket.
- PUT /{Bucket}#metadataJournalTable — UpdateBucketMetadataJournalTableConfiguration: Enables or disables journal table record expiration for an S3 Metadata configuration on a general purpose bucket.

## Multipart uploads
- PUT /{Bucket}/{Key}#partNumber&uploadId&x-amz-copy-source — UploadPartCopy: Uploads a part by copying data from an existing object as data source.
- PUT /{Bucket}/{Key}#partNumber&uploadId — UploadPart: Uploads a part in a multipart upload.
- GET /{Bucket}/{Key}#uploadId — ListParts: Lists the parts that have been uploaded for a specific multipart upload.
- DELETE /{Bucket}/{Key}#uploadId — AbortMultipartUpload: This operation aborts a multipart upload.
- POST /{Bucket}/{Key}#uploads — CreateMultipartUpload: This action initiates a multipart upload and returns an upload ID.
- POST /{Bucket}/{Key} — CompleteMultipartUpload: Completes a multipart upload by assembling previously uploaded parts.
- GET /{Bucket}#uploads — ListMultipartUploads: This operation lists in-progress multipart uploads in a bucket.

## Object Lock
- GET /{Bucket}/{Key}#legal-hold — GetObjectLegalHold: Gets an object's current legal hold status.
- PUT /{Bucket}/{Key}#legal-hold — PutObjectLegalHold: Applies a legal hold configuration to the specified object.
- GET /{Bucket}/{Key}#retention — GetObjectRetention: Retrieves an object's retention settings.
- PUT /{Bucket}/{Key}#retention — PutObjectRetention: Places an Object Retention configuration on an object.
- GET /{Bucket}#object-lock — GetObjectLockConfiguration: Gets the Object Lock configuration for a bucket.
- PUT /{Bucket}#object-lock — PutObjectLockConfiguration: Places an Object Lock configuration on the specified bucket.

## Object annotations
- GET /{Bucket}/{Key}#annotation&annotationName — GetObjectAnnotation: Retrieves an annotation from an Amazon S3 object.
- GET /{Bucket}/{Key}#annotation — ListObjectAnnotations: Lists the annotations attached to an Amazon S3 object.
- PUT /{Bucket}/{Key}#annotation — PutObjectAnnotation: Attaches an annotation to an Amazon S3 object.
- DELETE /{Bucket}/{Key}#annotation — DeleteObjectAnnotation: Deletes a specific annotation from an Amazon S3 object.

## Objects
- POST /{Bucket}/{Key}#select&select-type=2 — SelectObjectContent: This action filters the contents of an Amazon S3 object based on a simple structured query language (SQL) statement.
- PUT /{Bucket}/{Key}#x-amz-copy-source — CopyObject: Creates a copy of an object that is already stored in Amazon S3.
- GET /{Bucket}/{Key}#attributes — GetObjectAttributes: Retrieves all of the metadata from an object without returning the object itself.
- GET /{Bucket}/{Key}#torrent — GetObjectTorrent: Returns torrent files from a bucket.
- PUT /{Bucket}/{Key}#renameObject — RenameObject: Renames an existing object in a directory bucket that uses the S3 Express One Zone storage class.
- POST /{Bucket}/{Key}#restore — RestoreObject: Restores an archived copy of an object back into Amazon S3 This functionality is not supported for Amazon S3 on Outposts.
- GET /{Bucket}/{Key} — GetObject: Retrieves an object from Amazon S3.
- PUT /{Bucket}/{Key} — PutObject: Adds an object to a bucket.
- DELETE /{Bucket}/{Key} — DeleteObject: Removes an object from a bucket.
- HEAD /{Bucket}/{Key} — HeadObject: The HEAD operation retrieves metadata from an object without returning the object itself.
- POST /{Bucket}#delete — DeleteObjects: This operation enables you to delete multiple objects from a bucket using a single HTTP request.
- GET /{Bucket}#list-type=2 — ListObjectsV2: Returns some or all (up to 1,000) of the objects in a bucket with each request.
- GET /{Bucket}#versions — ListObjectVersions: Returns metadata about all versions of the objects in a bucket.
- GET /{Bucket} — ListObjects: Returns some or all (up to 1,000) of the objects in a bucket.
- POST /WriteGetObjectResponse — WriteGetObjectResponse: Passes transformed objects to a GetObject operation when using Object Lambda access points.

## Replication
- GET /{Bucket}#replication — GetBucketReplication: Returns the replication configuration of a bucket.
- PUT /{Bucket}#replication — PutBucketReplication: Creates a replication configuration or replaces an existing one.
- DELETE /{Bucket}#replication — DeleteBucketReplication: Deletes the replication configuration from the bucket.

## Tagging
- GET /{Bucket}/{Key}#tagging — GetObjectTagging: Returns the tag-set of an object.
- PUT /{Bucket}/{Key}#tagging — PutObjectTagging: Sets the supplied tag-set to an object that already exists in a bucket.
- DELETE /{Bucket}/{Key}#tagging — DeleteObjectTagging: Removes the entire tag set from the specified object.
- GET /{Bucket}#tagging — GetBucketTagging: Returns the tag set associated with the general purpose bucket.
- PUT /{Bucket}#tagging — PutBucketTagging: Sets the tags for a general purpose bucket if attribute based access control (ABAC) is not enabled for the bucket.
- DELETE /{Bucket}#tagging — DeleteBucketTagging: Deletes tags from the general purpose bucket if attribute based access control (ABAC) is not enabled for the bucket.

## Versioning
- GET /{Bucket}#versioning — GetBucketVersioning: Returns the versioning state of a bucket.
- PUT /{Bucket}#versioning — PutBucketVersioning: Sets the versioning state of an existing bucket.
