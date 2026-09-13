# Amazon Simple Storage Service (aws-s3) v2006-03-01

<!-- derived from openapi.json by `pnpm specs index aws-s3` — do not edit by hand -->

base: http://s3{dash-or-dot}{region}.amazonaws.com, https://s3{dash-or-dot}{region}.amazonaws.com, http://s3.amazonaws.com, https://s3.amazonaws.com, http://s3.{region}.amazonaws.com, https://s3.{region}.amazonaws.com, http://s3.{region}.amazonaws.com.cn, https://s3.{region}.amazonaws.com.cn | auth: apiKey (header Authorization) | 97 operations in 3 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## (root)
- GET / — ListBuckets: Returns a list of all buckets owned by the authenticated sender of the request.

## WriteGetObjectResponse
- POST /WriteGetObjectResponse#x-amz-request-route&x-amz-request-token — WriteGetObjectResponse: Passes transformed objects to a GetObject operation when using Object Lambda access points.

## {Bucket}
- GET /{Bucket}/{Key}#uploadId — ListParts: Lists the parts that have been uploaded for a specific multipart upload.
- POST /{Bucket}/{Key}#uploadId — CompleteMultipartUpload: Completes a multipart upload by assembling previously uploaded parts.
- DELETE /{Bucket}/{Key}#uploadId — AbortMultipartUpload: This action aborts a multipart upload.
- PUT /{Bucket}/{Key}#x-amz-copy-source — CopyObject: Creates a copy of an object that is already stored in Amazon S3.
- GET /{Bucket} — ListObjects: Returns some or all (up to 1,000) of the objects in a bucket.
- PUT /{Bucket} — CreateBucket: Creates a new S3 bucket.
- DELETE /{Bucket} — DeleteBucket: Deletes the S3 bucket.
- HEAD /{Bucket} — HeadBucket: This action is useful to determine if a bucket exists and you have permission to access it.
- POST /{Bucket}/{Key}#uploads — CreateMultipartUpload: This action initiates a multipart upload and returns an upload ID.
- GET /{Bucket}#analytics&id — GetBucketAnalyticsConfiguration: This implementation of the GET action returns an analytics configuration (identified by the analytics configuration ID) from the bucket.
- PUT /{Bucket}#analytics&id — PutBucketAnalyticsConfiguration: Sets an analytics configuration for the bucket (specified by the analytics configuration ID).
- DELETE /{Bucket}#analytics&id — DeleteBucketAnalyticsConfiguration: Deletes an analytics configuration for the bucket (specified by the analytics configuration ID).
- GET /{Bucket}#cors — GetBucketCors: Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the bucket.
- PUT /{Bucket}#cors — PutBucketCors: Sets the cors configuration for your bucket.
- DELETE /{Bucket}#cors — DeleteBucketCors: Deletes the cors configuration information set for the bucket.
- GET /{Bucket}#encryption — GetBucketEncryption: Returns the default encryption configuration for an Amazon S3 bucket.
- PUT /{Bucket}#encryption — PutBucketEncryption: This action uses the encryption subresource to configure default encryption and Amazon S3 Bucket Key for an existing bucket.
- DELETE /{Bucket}#encryption — DeleteBucketEncryption: This implementation of the DELETE action removes default encryption from the bucket.
- GET /{Bucket}#intelligent-tiering&id — GetBucketIntelligentTieringConfiguration: Gets the S3 Intelligent-Tiering configuration from the specified bucket.
- PUT /{Bucket}#intelligent-tiering&id — PutBucketIntelligentTieringConfiguration: Puts a S3 Intelligent-Tiering configuration to the specified bucket.
- DELETE /{Bucket}#intelligent-tiering&id — DeleteBucketIntelligentTieringConfiguration: Deletes the S3 Intelligent-Tiering configuration from the specified bucket.
- GET /{Bucket}#inventory&id — GetBucketInventoryConfiguration: Returns an inventory configuration (identified by the inventory configuration ID) from the bucket.
- PUT /{Bucket}#inventory&id — PutBucketInventoryConfiguration: This implementation of the PUT action adds an inventory configuration (identified by the inventory ID) to the bucket.
- DELETE /{Bucket}#inventory&id — DeleteBucketInventoryConfiguration: Deletes an inventory configuration (identified by the inventory ID) from the bucket.
- GET /{Bucket}#lifecycle — GetBucketLifecycleConfiguration: Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a comb…
- PUT /{Bucket}#lifecycle — PutBucketLifecycleConfiguration: Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration.
- DELETE /{Bucket}#lifecycle — DeleteBucketLifecycle: Deletes the lifecycle configuration from the specified bucket.
- GET /{Bucket}#metrics&id — GetBucketMetricsConfiguration: Gets a metrics configuration (specified by the metrics configuration ID) from the bucket.
- PUT /{Bucket}#metrics&id — PutBucketMetricsConfiguration: Sets a metrics configuration (specified by the metrics configuration ID) for the bucket.
- DELETE /{Bucket}#metrics&id — DeleteBucketMetricsConfiguration: Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket.
- GET /{Bucket}#ownershipControls — GetBucketOwnershipControls: Retrieves OwnershipControls for an Amazon S3 bucket.
- PUT /{Bucket}#ownershipControls — PutBucketOwnershipControls: Creates or modifies OwnershipControls for an Amazon S3 bucket.
- DELETE /{Bucket}#ownershipControls — DeleteBucketOwnershipControls: Removes OwnershipControls for an Amazon S3 bucket.
- GET /{Bucket}#policy — GetBucketPolicy: Returns the policy of a specified bucket.
- PUT /{Bucket}#policy — PutBucketPolicy: Applies an Amazon S3 bucket policy to an Amazon S3 bucket.
- DELETE /{Bucket}#policy — DeleteBucketPolicy: This implementation of the DELETE action uses the policy subresource to delete the policy of a specified bucket.
- GET /{Bucket}#replication — GetBucketReplication: Returns the replication configuration of a bucket.
- PUT /{Bucket}#replication — PutBucketReplication: Creates a replication configuration or replaces an existing one.
- DELETE /{Bucket}#replication — DeleteBucketReplication: Deletes the replication configuration from the bucket.
- GET /{Bucket}#tagging — GetBucketTagging: Returns the tag set associated with the bucket.
- PUT /{Bucket}#tagging — PutBucketTagging: Sets the tags for a bucket.
- DELETE /{Bucket}#tagging — DeleteBucketTagging: Deletes the tags from the bucket.
- GET /{Bucket}#website — GetBucketWebsite: Returns the website configuration for a bucket.
- PUT /{Bucket}#website — PutBucketWebsite: Sets the configuration of the website that is specified in the website subresource.
- DELETE /{Bucket}#website — DeleteBucketWebsite: This action removes the website configuration for a bucket.
- GET /{Bucket}/{Key} — GetObject: Retrieves objects from Amazon S3.
- PUT /{Bucket}/{Key} — PutObject: Adds an object to a bucket.
- DELETE /{Bucket}/{Key} — DeleteObject: Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object.
- HEAD /{Bucket}/{Key} — HeadObject: The HEAD action retrieves metadata from an object without returning the object itself.
- GET /{Bucket}/{Key}#tagging — GetObjectTagging: Returns the tag-set of an object.
- PUT /{Bucket}/{Key}#tagging — PutObjectTagging: Sets the supplied tag-set to an object that already exists in a bucket.
- DELETE /{Bucket}/{Key}#tagging — DeleteObjectTagging: Removes the entire tag set from the specified object.
- POST /{Bucket}#delete — DeleteObjects: This action enables you to delete multiple objects from a bucket using a single HTTP request.
- GET /{Bucket}#publicAccessBlock — GetPublicAccessBlock: Retrieves the PublicAccessBlock configuration for an Amazon S3 bucket.
- PUT /{Bucket}#publicAccessBlock — PutPublicAccessBlock: Creates or modifies the PublicAccessBlock configuration for an Amazon S3 bucket.
- DELETE /{Bucket}#publicAccessBlock — DeletePublicAccessBlock: Removes the PublicAccessBlock configuration for an Amazon S3 bucket.
- GET /{Bucket}#accelerate — GetBucketAccelerateConfiguration: This implementation of the GET action uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is eithe…
- PUT /{Bucket}#accelerate — PutBucketAccelerateConfiguration: Sets the accelerate configuration of an existing bucket.
- GET /{Bucket}#acl — GetBucketAcl: This implementation of the GET action uses the acl subresource to return the access control list (ACL) of a bucket.
- PUT /{Bucket}#acl — PutBucketAcl: Sets the permissions on an existing bucket using access control lists (ACL).
- GET /{Bucket}#lifecycle&deprecated! — GetBucketLifecycle: For an updated version of this API, see GetBucketLifecycleConfiguration. (deprecated)
- PUT /{Bucket}#lifecycle&deprecated! — PutBucketLifecycle: For an updated version of this API, see PutBucketLifecycleConfiguration. (deprecated)
- GET /{Bucket}#location — GetBucketLocation: Returns the Region the bucket resides in.
- GET /{Bucket}#logging — GetBucketLogging: Returns the logging status of a bucket and the permissions users have to view and modify that status.
- PUT /{Bucket}#logging — PutBucketLogging: Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters.
- GET /{Bucket}#notification — GetBucketNotificationConfiguration: Returns the notification configuration of a bucket.
- PUT /{Bucket}#notification — PutBucketNotificationConfiguration: Enables notifications of specified events for a bucket.
- GET /{Bucket}#notification&deprecated! — GetBucketNotification: No longer used, see GetBucketNotificationConfiguration. (deprecated)
- PUT /{Bucket}#notification&deprecated! — PutBucketNotification: No longer used, see the PutBucketNotificationConfiguration operation. (deprecated)
- GET /{Bucket}#policyStatus — GetBucketPolicyStatus: Retrieves the policy status for an Amazon S3 bucket, indicating whether the bucket is public.
- GET /{Bucket}#requestPayment — GetBucketRequestPayment: Returns the request payment configuration of a bucket.
- PUT /{Bucket}#requestPayment — PutBucketRequestPayment: Sets the request payment configuration for a bucket.
- GET /{Bucket}#versioning — GetBucketVersioning: Returns the versioning state of a bucket.
- PUT /{Bucket}#versioning — PutBucketVersioning: Sets the versioning state of an existing bucket.
- GET /{Bucket}/{Key}#acl — GetObjectAcl: Returns the access control list (ACL) of an object.
- PUT /{Bucket}/{Key}#acl — PutObjectAcl: Uses the acl subresource to set the access control list (ACL) permissions for a new or existing object in an S3 bucket.
- GET /{Bucket}/{Key}#attributes&x-amz-object-attributes — GetObjectAttributes: Retrieves all the metadata from an object without returning the object itself.
- GET /{Bucket}/{Key}#legal-hold — GetObjectLegalHold: Gets an object's current legal hold status.
- PUT /{Bucket}/{Key}#legal-hold — PutObjectLegalHold: Applies a legal hold configuration to the specified object.
- GET /{Bucket}#object-lock — GetObjectLockConfiguration: Gets the Object Lock configuration for a bucket.
- PUT /{Bucket}#object-lock — PutObjectLockConfiguration: Places an Object Lock configuration on the specified bucket.
- GET /{Bucket}/{Key}#retention — GetObjectRetention: Retrieves an object's retention settings.
- PUT /{Bucket}/{Key}#retention — PutObjectRetention: Places an Object Retention configuration on an object.
- GET /{Bucket}/{Key}#torrent — GetObjectTorrent: Returns torrent files from a bucket.
- GET /{Bucket}#analytics — ListBucketAnalyticsConfigurations: Lists the analytics configurations for the bucket.
- GET /{Bucket}#intelligent-tiering — ListBucketIntelligentTieringConfigurations: Lists the S3 Intelligent-Tiering configuration from the specified bucket.
- GET /{Bucket}#inventory — ListBucketInventoryConfigurations: Returns a list of inventory configurations for the bucket.
- GET /{Bucket}#metrics — ListBucketMetricsConfigurations: Lists the metrics configurations for the bucket.
- GET /{Bucket}#uploads — ListMultipartUploads: This action lists in-progress multipart uploads.
- GET /{Bucket}#versions — ListObjectVersions: Returns metadata about all versions of the objects in a bucket.
- GET /{Bucket}#list-type=2 — ListObjectsV2: Returns some or all (up to 1,000) of the objects in a bucket with each request.
- POST /{Bucket}/{Key}#restore — RestoreObject: Restores an archived copy of an object back into Amazon S3 This action is not supported by Amazon S3 on Outposts.
- POST /{Bucket}/{Key}#select&select-type=2 — SelectObjectContent: This action filters the contents of an Amazon S3 object based on a simple structured query language (SQL) statement.
- PUT /{Bucket}/{Key}#partNumber&uploadId — UploadPart: Uploads a part in a multipart upload.
- PUT /{Bucket}/{Key}#x-amz-copy-source&partNumber&uploadId — UploadPartCopy: Uploads a part by copying data from an existing object as data source.
