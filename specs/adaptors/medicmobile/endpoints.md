# Apache CouchDB HTTP API (medicmobile) v3.5

<!-- derived from openapi.json by `pnpm specs index medicmobile` — do not edit by hand -->

base: {server}, http://localhost:5984 | auth: http/basic, apiKey (cookie AuthSession) | 135 operations in 19 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Attachments
- GET /{db}/{docid}/{attname} — getAttachment: Returns the file attachment associated with the document.
- PUT /{db}/{docid}/{attname} — putAttachment: Uploads the supplied content as an attachment to the specified document.
- DELETE /{db}/{docid}/{attname} — deleteAttachment: Deletes the attachment with filename {attname} of the specified doc.
- HEAD /{db}/{docid}/{attname} — checkAttachmentExists: Returns the HTTP headers containing a minimal amount of information about the specified attachment.

## Authentication
- GET /_session — getSession: Returns information about the authenticated user, including a User Context Object, the authentication method and database that were used, and a list of confi...
- POST /_session — createSession: Initiates new session for specified user credentials by providing Cookie value.
- DELETE /_session — deleteSession: Closes user’s session by instructing the browser to clear the cookie.

## Changes
- GET /{db}/_changes — getChanges: Returns a sorted list of changes made to documents in the database, in time order of application.
- POST /{db}/_changes — postChanges: Requests the database changes feed in the same way as GET /{db}/_changes does, but is widely used with ?filter=_doc_ids or ?filter=_selector query parameters...

## Configuration
- GET /_node/{node-name}/_config — getNodeConfig: Returns the entire CouchDB server configuration as a JSON structure.
- POST /_node/{node-name}/_config/_reload — reloadNodeConfig: Reloads the configuration from disk.
- GET /_node/{node-name}/_config/{section} — getNodeConfigSection: Gets the configuration structure for a single section.
- GET /_node/{node-name}/_config/{section}/{key} — getNodeConfigValue: Gets a single configuration value from within a specific configuration section.
- PUT /_node/{node-name}/_config/{section}/{key} — setNodeConfigValue: Updates a configuration value.
- DELETE /_node/{node-name}/_config/{section}/{key} — deleteNodeConfigValue: Deletes a configuration value.

## Databases
- GET /{db} — getDatabase: Gets information about the specified database.
- PUT /{db} — createDatabase: Creates a new database.
- DELETE /{db} — deleteDatabase: Deletes the specified database, and all the documents and attachments contained within it.
- HEAD /{db} — checkDatabaseExists: Returns the HTTP Headers containing a minimal amount of information about the specified database.
- POST /{db}/_compact — compactDatabase: Request compaction of the specified database.
- POST /{db}/_compact/{ddoc} — compactDesignDocViews: Compacts the view indexes associated with the specified design document.
- POST /{db}/_ensure_full_commit — ensureFullCommit: Before 3.0 this was used to commit recent changes to the database in case the delayed_commits=true option was set.
- POST /{db}/_missing_revs — getMissingRevs: With given a list of document revisions, returns the document revisions that do not exist in the database.
- POST /{db}/_nouveau_cleanup — cleanupNouveauIndexes: Requests deletion of unreachable search (Nouveau) indexes of the specified database.
- POST /{db}/_purge — purgeDocuments: A database purge permanently removes the references to documents in the database.
- GET /{db}/_purged_infos — getPurgedInfos: Get a list of purged document IDs and revisions stored in the database.
- GET /{db}/_purged_infos_limit — getPurgedInfosLimit: Gets the current purged_infos_limit (purged documents limit) setting, the maximum number of historical purges (purged document Ids with their revisions) that...
- PUT /{db}/_purged_infos_limit — setPurgedInfosLimit: Sets the maximum number of purges (requested purged Ids with their revisions) that will be tracked in the database, even after compaction has occurred.
- POST /{db}/_revs_diff — getRevsDiff: Given a set of document/revision IDs, returns the subset of those that do not correspond to revisions stored in the database.
- GET /{db}/_revs_limit — getRevsLimit: Gets the current revs_limit (revision limit) setting.
- PUT /{db}/_revs_limit — setRevsLimit: Sets the maximum number of document revisions that will be tracked by CouchDB, even after compaction has occurred.
- POST /{db}/_search_cleanup — cleanupSearchIndexes: Requests deletion of unreachable search (Clouseau) indexes of the specified database.
- POST /{db}/_view_cleanup — cleanupViews: Removes view index files that are no longer required by CouchDB as a result of changed views within design documents.

## Design Documents
- GET /{db}/_design/{ddoc} — getDesignDoc: Returns the contents of the design document specified with the name of the design document and from the specified database from the URL.
- PUT /{db}/_design/{ddoc} — putDesignDoc: The PUT method creates a new named design document, or creates a new revision of the existing design document.
- DELETE /{db}/_design/{ddoc} — deleteDesignDoc: Deletes the specified document from the database.
- HEAD /{db}/_design/{ddoc} — checkDesignDocExists: Returns the HTTP Headers containing a minimal amount of information about the specified design document.
- GET /{db}/_design/{ddoc}/_info — getDesignDocInfo: Obtains information about the specified design document, including the index, index size and current status of the design document and associated index infor...
- GET /{db}/_design/{ddoc}/{attname} — getDesignDocAttachment: Returns the file attachment associated with the design document.
- PUT /{db}/_design/{ddoc}/{attname} — putDesignDocAttachment: Uploads the supplied content as an attachment to the specified design document.
- DELETE /{db}/_design/{ddoc}/{attname} — deleteDesignDocAttachment: Deletes the attachment of the specified design document.
- HEAD /{db}/_design/{ddoc}/{attname} — checkDesignDocAttachmentExists: Returns the HTTP headers containing a minimal amount of information about the specified attachment.
- GET /{db}/_design_docs — listDesignDocs: Returns a JSON structure of all of the design documents in a given database.
- POST /{db}/_design_docs — queryDesignDocs: POST _design_docs functionality supports identical parameters and behavior as specified in the GET /{db}/_design_docs API but allows for the query string par...
- POST /{db}/_design_docs/queries — queryDesignDocsMulti: Querying with specified keys will return design documents only.

## Documents
- POST /{db} — createDocumentInDatabase: Creates a new document in the specified database, using the supplied JSON document structure.
- GET /{db}/_all_docs — listAllDocs: Executes the built-in _all_docs view, returning all of the documents in the database.
- POST /{db}/_all_docs — queryAllDocs: POST _all_docs functionality supports identical parameters and behavior as specified in the GET /{db}/_all_docs API but allows for the query string parameter...
- POST /{db}/_all_docs/queries — queryAllDocsMulti: Executes multiple specified built-in view queries of all documents in this database.
- POST /{db}/_bulk_docs — bulkDocs: The bulk document API allows you to create and update multiple documents at the same time within a single request.
- POST /{db}/_bulk_get — bulkGetDocs: This method can be called to query several documents in bulk.
- GET /{db}/{docid} — getDocument: Returns document by the specified docid from the specified db.
- PUT /{db}/{docid} — putDocument: The PUT method creates a new named document, or creates a new revision of the existing document.
- DELETE /{db}/{docid} — deleteDocument: Marks the specified document as deleted by adding a field _deleted with the value true.
- HEAD /{db}/{docid} — checkDocumentExists: Returns the HTTP Headers containing a minimal amount of information about the specified document.

## Local Documents
- GET /{db}/_local/{docid} — getLocalDoc: Gets the specified local document.
- PUT /{db}/_local/{docid} — putLocalDoc: Stores the specified local document.
- DELETE /{db}/_local/{docid} — deleteLocalDoc: Deletes the specified local document.
- GET /{db}/_local_docs — listLocalDocs: Returns a JSON structure of all of the local documents in a given database.
- POST /{db}/_local_docs — queryLocalDocs: POST /{db}/_local_docs functionality supports identical parameters and behavior as specified in the GET /{db}/_local_docs API but allows for the query string...
- POST /{db}/_local_docs/queries — queryLocalDocsMulti: Querying with specified keys will return local documents only.

## Mango Queries
- POST /{db}/_explain — explainQuery: Shows which index is being used by the query.
- POST /{db}/_find — findDocuments: Find documents using a declarative JSON querying syntax.
- GET /{db}/_index — listIndexes: When you make a GET request to /{db}/_index, you get a list of all indexes in the database.
- POST /{db}/_index — createIndex: Create a new index on a database
- POST /{db}/_index/_bulk_delete — bulkDeleteIndexes: Delete several Mango indexes in one request.
- DELETE /{db}/_index/{design_doc}/json/{name} — deleteIndex: Delete a Mango index.

## Nodes
- GET /_node/{node-name} — getNode: The /_node/{node-name} endpoint can be used to confirm the Erlang node name of the server that processes the request.
- GET /_node/{node-name}/_prometheus — getNodePrometheusMetrics: The _prometheus resource returns a text/plain response that consolidates our /_node/{node-name}/_stats, and /_node/{node-name}/_system endpoints.
- POST /_node/{node-name}/_restart — restartNode: This API is to facilitate integration testing only it is not meant to be used in production
- GET /_node/{node-name}/_smoosh/status — getNodeSmooshStatus: This prints the state of each channel, how many jobs they are currently running and how many jobs are enqueued (as well as the lowest and highest priority of...
- GET /_node/{node-name}/_stats — getNodeStats: The _stats resource returns a JSON object containing the statistics for the running server.
- GET /_node/{node-name}/_system — getNodeSystem: The _system resource returns a JSON object containing various system-level statistics for the running server.
- GET /_node/{node-name}/_versions — getNodeVersions: The _versions resource returns a JSON object containing various system-level information for the running server.

## Partitioned Databases
- GET /{db}/_partition/{partition_id} — getPartition: This endpoint returns information describing the provided partition.
- GET /{db}/_partition/{partition_id}/_all_docs — listPartitionDocs: This endpoint is a convenience endpoint for automatically setting bounds on the provided partition range.
- GET /{db}/_partition/{partition_id}/_design/{ddoc}/_view/{view} — queryPartitionView: This endpoint is responsible for executing a partitioned query.
- POST /{db}/_partition/{partition_id}/_explain — explainPartitionQuery: This endpoint shows which index is being used by the query.
- POST /{db}/_partition/{partition_id}/_find — findPartitionDocuments: This endpoint is responsible for finding a partition query by its ID.

## Render Functions
- GET /{db}/_design/{ddoc}/_list/{func}/{other-ddoc}/{view} — listOtherView: Apply a list function against a view from another design document.
- POST /{db}/_design/{ddoc}/_list/{func}/{other-ddoc}/{view} — listOtherViewByPost: Applies list function for the view function from the other design document.
- GET /{db}/_design/{ddoc}/_list/{func}/{view} — listView: Apply a list function against a view.
- POST /{db}/_design/{ddoc}/_list/{func}/{view} — listViewByPost: Applies list function for the view function from the same design document.
- GET /{db}/_design/{ddoc}/_rewrite/{path} — rewriteGet: Rewrite handler (GET): route the request through the design document’s rewrite rules.
- POST /{db}/_design/{ddoc}/_rewrite/{path} — rewritePost: Rewrite handler (POST): route the request through the design document’s rewrite rules.
- PUT /{db}/_design/{ddoc}/_rewrite/{path} — rewritePut: Rewrite handler (PUT): route the request through the design document’s rewrite rules.
- DELETE /{db}/_design/{ddoc}/_rewrite/{path} — rewriteDelete: Rewrite handler (DELETE): route the request through the design document’s rewrite rules.
- GET /{db}/_design/{ddoc}/_show/{func} — showNull: Apply a show function against null (no document).
- POST /{db}/_design/{ddoc}/_show/{func} — showNullByPost: Applies show function for null document.
- GET /{db}/_design/{ddoc}/_show/{func}/{docid} — showDocument: Apply a show function against the specified document.
- POST /{db}/_design/{ddoc}/_show/{func}/{docid} — showDocumentByPost: Applies show function for the specified document.
- POST /{db}/_design/{ddoc}/_update/{func} — updateNull: Executes update function on server side for null document.
- PUT /{db}/_design/{ddoc}/_update/{func}/{docid} — updateDocumentWithFunction: Executes update function on server side for the specified document.

## Replication Scheduler
- GET /_scheduler/docs — listSchedulerDocs: List of replication document states.
- GET /_scheduler/docs/{replicator_db} — listSchedulerDocsInDb: Get information about replication documents from a replicator database.
- GET /_scheduler/docs/{replicator_db}/{docid} — getSchedulerDoc: The info field of a scheduler doc:
- GET /_scheduler/jobs — listSchedulerJobs: List of replication jobs.

## Resharding
- GET /_reshard — getReshardSummary: Returns a count of completed, failed, running, stopped, and total jobs along with the state of resharding on the cluster.
- GET /_reshard/jobs — listReshardJobs: List the resharding jobs.
- POST /_reshard/jobs — createReshardJobs: Depending on what fields are specified in the request, one or more resharding jobs will be created.
- GET /_reshard/jobs/{jobid} — getReshardJob: Get information about the resharding job identified by jobid.
- DELETE /_reshard/jobs/{jobid} — deleteReshardJob: If the job is running, stop the job and then remove it.
- GET /_reshard/jobs/{jobid}/state — getReshardJobState: Returns the running state of a resharding job identified by jobid.
- PUT /_reshard/jobs/{jobid}/state — setReshardJobState: Change the state of a particular resharding job identified by jobid.
- GET /_reshard/state — getReshardState: Returns the resharding state and optional information about the state.
- PUT /_reshard/state — setReshardState: Change the resharding state on the cluster.

## Search
- GET /{db}/_design/{ddoc}/_nouveau/{index} — searchNouveauIndex: Executes a nouveau request against the named index in the specified design document.
- GET /{db}/_design/{ddoc}/_nouveau_info/{index} — getNouveauIndexInfo: Return metadata for the specified Nouveau index.
- GET /{db}/_design/{ddoc}/_search/{index} — searchIndex: Executes a search request against the named index in the specified design document.
- GET /{db}/_design/{ddoc}/_search_info/{index} — getSearchIndexInfo: Return metadata for the specified search index.

## Security
- GET /{db}/_security — getSecurity: Returns the current security object from the specified database.
- PUT /{db}/_security — setSecurity: Sets the security object for the given database.

## Server
- GET / — getServerInfo: Accessing the root of a CouchDB instance returns meta information about the instance.
- GET /_active_tasks — listActiveTasks: List of running tasks, including the task type, name, status and process ID.
- GET /_all_dbs — listAllDatabases: Returns a list of all the databases in the CouchDB instance.
- GET /_cluster_setup — getClusterSetupState: Returns the status of the node or cluster, per the cluster setup wizard.
- POST /_cluster_setup — configureCluster: Configure a node as a single (standalone) node, as part of a cluster, or finalise a cluster.
- GET /_db_updates — getDbUpdates: Returns a list of all database events in the CouchDB instance.
- GET /_dbs_info — listDatabasesInfo: Returns a list of all the databases information in the CouchDB instance.
- POST /_dbs_info — getDatabasesInfo: Returns information of a list of the specified databases in the CouchDB instance.
- GET /_membership — getMembership: Displays the nodes that are part of the cluster as cluster_nodes.
- POST /_nouveau_analyze — analyzeNouveauText: Tests the results of Lucene analyzer tokenization on sample text.
- POST /_replicate — replicate: Request, configure, or stop, a replication operation.
- POST /_search_analyze — analyzeSearchText: Tests the results of Lucene analyzer tokenization on sample text.
- GET /_up — getUp: Confirms that the server is up, running, and ready to respond to requests.
- GET /_utils — redirectToFauxton: Accesses the built-in Fauxton administration interface for CouchDB.
- GET /_utils/ — getFauxton: Access the built-in Fauxton administration interface.
- GET /_uuids — getUuids: Requests one or more Universally Unique Identifiers (UUIDs) from the CouchDB instance.
- GET /favicon.ico — getFavicon: Binary content for the favicon.ico site icon.

## Shards
- GET /{db}/_shards — getShards: The response will contain a list of database shards.
- GET /{db}/_shards/{docid} — getDocumentShard: Returns information about the specific shard into which a given document has been stored, along with information about the nodes on which that shard has a re...
- POST /{db}/_sync_shards — syncShards: For the given database, force-starts internal shard synchronization for all replicas of all database shards.

## Views
- GET /{db}/_design/{ddoc}/_view/{view} — queryView: Executes the specified view function from the specified design document.
- POST /{db}/_design/{ddoc}/_view/{view} — queryViewByPost: Executes the specified view function from the specified design document.
- POST /{db}/_design/{ddoc}/_view/{view}/queries — queryViewMulti: Executes multiple specified view queries against the view function from the specified design document.
