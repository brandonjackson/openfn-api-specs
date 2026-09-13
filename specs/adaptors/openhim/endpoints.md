# OpenHIM Core API (openhim) v8.5.x

<!-- derived from openapi.json by `pnpm specs index openhim` — do not edit by hand -->

base: https://{host}:{port}, http://localhost:8080 | auth: http/basic, apiKey (cookie koa.sess), apiKey (header auth-token) | 97 operations in 20 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Apps
- GET /apps — listApps: List console portal applications
- POST /apps — createApp: Register a console portal application
- GET /apps/{appId} — getApp: Read an application
- PUT /apps/{appId} — updateApp: Update an application
- DELETE /apps/{appId} — deleteApp: Delete an application
- GET /importmaps — getImportMap: ES module import map for the registered apps

## Audits
- GET /audits — listAudits: List ATNA audit records
- POST /audits — createAudit: Store an ATNA audit record
- GET /audits/{auditId} — getAudit: Read an audit record
- GET /audits-filter-options — getAuditFilterOptions: Distinct codes present in the audit repository

## Authentication
- POST /authenticate/local — authenticateLocal: Authenticate with a username and password
- POST /authenticate/openid — authenticateOpenid: Authenticate through an OpenID Connect provider
- GET /authenticate/{username} — getAuthenticationSalt: Fetch the password salt and timestamp for token authentication (deprecated)
- GET /authentication/types — listAuthenticationTypes: List the authentication types this server enables
- GET /logout — logout: End the current session
- GET /me — getMe: The currently authenticated user
- GET /password-reset-request/{email} — requestPasswordReset: Send a password-reset email to a user
- GET /token/{token} — getUserByToken: Look up the user a password-reset token belongs to
- PUT /token/{token} — setPasswordByToken: Set a password using a reset token

## Channels
- GET /channels — listChannels: List channels
- POST /channels — createChannel: Create a channel
- GET /channels/{channelId} — getChannel: Read a channel
- PUT /channels/{channelId} — updateChannel: Update a channel
- DELETE /channels/{channelId} — deleteChannel: Delete a channel
- GET /channels/{channelId}/audits — listChannelAudits: List the change history of a channel
- POST /channels/{channelId}/trigger — triggerChannel: Trigger a polling channel immediately

## Clients
- GET /clients — listClients: List clients
- POST /clients — createClient: Register a client
- GET /clients/{clientId} — getClient: Read a client
- PUT /clients/{clientId} — updateClient: Update a client
- DELETE /clients/{clientId} — deleteClient: Delete a client
- GET /clients/{clientId}/{property} — getClientProperty: Read one property of a client
- GET /clients/domain/{clientDomain} — getClientByDomain: Find a client by its domain

## ContactGroups
- GET /groups — listContactGroups: List contact groups
- POST /groups — createContactGroup: Create a contact group
- GET /groups/{contactGroupId} — getContactGroup: Read a contact group
- PUT /groups/{contactGroupId} — updateContactGroup: Update a contact group
- DELETE /groups/{contactGroupId} — deleteContactGroup: Delete a contact group

## Events
- GET /events/{receivedTime} — listEvents: Transaction events since a timestamp

## Heartbeat
- GET /heartbeat — getHeartbeat: Server and mediator uptime
- GET /about — getAbout: Core version and server timezone

## Keystore
- GET /keystore/cert — getServerCertificate: Read the server certificate
- POST /keystore/cert — setServerCertificate: Set the server certificate
- POST /keystore/key — setServerKey: Set the server private key
- POST /keystore/passphrase — setServerPassphrase: Set the private key passphrase
- GET /keystore/ca — listTrustedCertificates: List trusted CA certificates
- POST /keystore/ca/cert — addTrustedCertificate: Add a trusted CA certificate
- GET /keystore/ca/{certId} — getTrustedCertificate: Read a trusted CA certificate
- DELETE /keystore/ca/{certId} — deleteTrustedCertificate: Remove a trusted CA certificate
- GET /keystore/validity — getKeystoreValidity: Check that the server certificate and key match
- POST /certificates — generateCertificate: Generate a certificate or signing request

## Logs
- GET /logs — listLogs: Read server logs

## Mediators
- GET /mediators — listMediators: List registered mediators
- POST /mediators — registerMediator: Register or update a mediator
- GET /mediators/{uuid} — getMediator: Read a mediator
- DELETE /mediators/{urn} — deleteMediator: Remove a mediator
- POST /mediators/{urn}/heartbeat — sendMediatorHeartbeat: Send a mediator heartbeat
- PUT /mediators/{urn}/config — setMediatorConfig: Set a mediator's configuration
- POST /mediators/{urn}/channels — loadMediatorDefaultChannels: Install a mediator's default channels

## Metadata
- GET /metadata — exportMetadata: Export all configuration metadata
- POST /metadata — importMetadata: Import configuration metadata
- POST /metadata/validate — validateMetadata: Check metadata for conflicts without importing it

## Metrics
- GET /metrics — getMetrics: Overall transaction metrics
- GET /metrics/channels — getMetricsByChannel: Transaction metrics grouped by channel
- GET /metrics/channels/{channelID} — getMetricsForChannel: Transaction metrics for one channel
- GET /metrics/timeseries/{timeSeries} — getMetricsTimeSeries: Overall metrics as a time series
- GET /metrics/timeseries/{timeSeries}/channels — getMetricsTimeSeriesByChannel: Metrics as a time series, grouped by channel
- GET /metrics/timeseries/{timeSeries}/channels/{channelID} — getMetricsTimeSeriesForChannel: Metrics as a time series for one channel

## Roles
- GET /roles — listRoles: List roles
- POST /roles — createRole: Create a role
- GET /roles/{name} — getRole: Read a role
- PUT /roles/{name} — updateRole: Update a role
- DELETE /roles/{name} — deleteRole: Delete a role

## Router
- POST /chw/encounter — createEncounter: Post a community-health-worker encounter (sample channel route)

## Server
- POST /restart — restartServer: Restart the OpenHIM Core server

## Tasks
- GET /tasks — listTasks: List rerun tasks
- POST /tasks — createTask: Create a rerun task
- GET /tasks/{taskId} — getTask: Read a rerun task
- PUT /tasks/{taskId} — updateTask: Update a rerun task (pause, resume or cancel)
- DELETE /tasks/{taskId} — deleteTask: Delete a rerun task

## Transactions
- GET /transactions — listTransactions: List transactions
- POST /transactions — createTransaction: Record a transaction
- GET /transactions/{transactionId} — getTransaction: Read a transaction
- PUT /transactions/{transactionId} — updateTransaction: Update a transaction
- DELETE /transactions/{transactionId} — deleteTransaction: Delete a transaction
- GET /transactions/clients/{clientId} — listTransactionsByClient: List the transactions of one client
- POST /bulkrerun — bulkRerunTransactions: Create rerun tasks for every transaction matching a filter

## Users
- GET /users — listUsers: List users
- POST /users — createUser: Create a user
- GET /users/{email} — getUser: Read a user
- PUT /users/{email} — updateUser: Update a user
- DELETE /users/{email} — deleteUser: Delete a user

## Visualizers
- GET /visualizers — listVisualizers: List visualisers
- POST /visualizers — createVisualizer: Create a visualiser
- GET /visualizers/{visualizerId} — getVisualizer: Read a visualiser
- PUT /visualizers/{visualizerId} — updateVisualizer: Update a visualiser
- DELETE /visualizers/{visualizerId} — deleteVisualizer: Delete a visualiser
