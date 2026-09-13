# MinIO S3-Compatible Object Store (synthesized) (minio) v1.0.0

<!-- derived from openapi.json by `pnpm specs index minio` — do not edit by hand -->

base: http://localhost:9000 | auth: not declared | 6 operations in 2 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## tagging
- GET /{bucketName}/{objectName}/tagging — getObjectTags: Get tags on an object
- PUT /{bucketName}/{objectName}/tagging — setObjectTags: Set tags on an object

## {bucketName}
- GET /{bucketName} — listObjects: List objects in a bucket
- PUT /{bucketName} — createBucket: Create a new bucket
- GET /{bucketName}/{objectName} — getObject: Get an object
- PUT /{bucketName}/{objectName} — putObject: Upload an object
