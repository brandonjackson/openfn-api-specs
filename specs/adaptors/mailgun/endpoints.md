# Mailgun API (mailgun) v3.0.0

<!-- derived from openapi.json by `pnpm specs index mailgun` — do not edit by hand -->

base: https://api.mailgun.net, https://api.eu.mailgun.net | auth: http/basic | 265 operations in 40 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Account Management
- PUT /v5/accounts — put-v5-accounts: Update variable account settings
- GET /v5/accounts/http_signing_key — get-v5-accounts-http_signing_key: Get webhook signing key saved on the account
- POST /v5/accounts/http_signing_key — post-v5-accounts-http_signing_key: Create or regenerate webhook signing key on an account
- GET /v5/sandbox/auth_recipients — get-v5-sandbox-auth_recipients: Get authorized email recipients for a sandbox domain
- POST /v5/sandbox/auth_recipients — post-v5-sandbox-auth_recipients: Add authorized email recipient for a sandbox domain
- DELETE /v5/sandbox/auth_recipients/{email} — delete-v5-sandbox-auth_recipients-email: Remove an authorized sandbox domain email recipient
- POST /v5/accounts/resend_activation_email — post-v5-accounts-resend_activation_email: Resend account activation email to the account owner
- PUT /v5/accounts/features — put-v5-accounts-features: Update account feature

## Account Templates
- GET /v4/templates — GET-v4-templates: Get account-level templates
- POST /v4/templates — POST-v4-templates: Create an account-level template
- DELETE /v4/templates — DELETE-v4-templates: Delete all account-level templates
- GET /v4/templates/{template_name}/versions — GET-v4-templates--template-name--versions: Get all account-level template versions
- POST /v4/templates/{template_name}/versions — POST-v4-templates--template-name--versions: Create an account-level template version
- GET /v4/templates/{template_name} — GET-v4-templates--template-name-: Get an account-level template
- PUT /v4/templates/{template_name} — PUT-v4-templates--template-name-: Update an account-level template
- DELETE /v4/templates/{template_name} — DELETE-v4-templates--template-name-: Delete an account-level template
- GET /v4/templates/{template_name}/versions/{version_name} — GET-v4-templates--template-name--versions--version-name-: Get an account-level template version
- PUT /v4/templates/{template_name}/versions/{version_name} — PUT-v4-templates--template-name--versions--version-name-: Update an account-level template version
- DELETE /v4/templates/{template_name}/versions/{version_name} — DELETE-v4-templates--template-name--versions--version-name-: Delete an account-level template version
- PUT /v4/templates/{template_name}/copy — PUT-v4-templates--template-name--copy: Copy a template
- PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name} — PUT-v4-templates--template-name--versions--version-name--copy--new-version-name-: Copy an account-level template version
- PUT /v4/templates/{template_name}/rename/{new_template_name} — PUT-v4-templates--template-name--rename--new-template-name-: Rename a template

## Account Webhooks
- GET /v1/webhooks — GET-v1-webhooks: List account-level webhooks
- POST /v1/webhooks — POST-v1-webhooks: Create an account-level webhook
- DELETE /v1/webhooks — DELETE-v1-webhooks: Delete account-level webhooks
- GET /v1/webhooks/{webhook_id} — GET-v1-webhooks--webhook-id-: Get account-level webhook by ID
- PUT /v1/webhooks/{webhook_id} — PUT-v1-webhooks--webhook-id-: Update an account-level webhook
- DELETE /v1/webhooks/{webhook_id} — DELETE-v1-webhooks--webhook-id-: Delete account-level webhook by ID

## Alerts
- GET /v1/alerts/events — GET-v1-alerts-events: List events
- POST /v1/alerts/settings/events — POST-v1-alerts-settings-events: Add Alert
- PUT /v1/alerts/settings/events/{id} — PUT-v1-alerts-settings-events--id-: Update Alert
- DELETE /v1/alerts/settings/events/{id} — DELETE-v1-alerts-settings-events--id-: Remove Alert
- GET /v1/alerts/settings — GET-v1-alerts-settings: List Alerts
- PUT /v1/alerts/settings/slack — PUT-v1-alerts-settings-slack: Update Slack settings
- DELETE /v1/alerts/settings/slack — DELETE-v1-alerts-settings-slack: Delete Slack settings
- PUT /v1/alerts/settings/webhooks/signing_key — PUT-v1-alerts-settings-webhooks-signing-key: Reset Webhook Signing Key
- POST /v1/alerts/webhooks/test — POST-v1-alerts-webhooks-test: Test webhook
- POST /v1/alerts/email/test — POST-v1-alerts-email-test: Test message
- POST /v1/alerts/slack/test — POST-v1-alerts-slack-test: Test message
- DELETE /v1/alerts/slack/oauth — DELETE-v1-alerts-slack-oauth: Revoke Slack access token
- GET /v1/alerts/slack/channels/{id} — GET-v1-alerts-slack-channels--id-: Get Slack channel
- GET /v1/alerts/slack/channels — GET-v1-alerts-slack-channels: List Slack channels

## Allowlist
- POST /v3/{domain_name}/whitelists/import — POST-v3--domainID--whitelists-import: Import allowlist
- GET /v3/{domain_name}/whitelists/{value} — GET-v3--domainID--whitelists--value-: Lookup allowlist record
- DELETE /v3/{domain_name}/whitelists/{value} — DELETE-v3--domainID--whitelists--value-: Remove entry from allowlist
- GET /v3/{domain_name}/whitelists — GET-v3--domainID--whitelists: List allowlist records for domain
- POST /v3/{domain_name}/whitelists — POST-v3--domainID--whitelists: Add allowlist record
- DELETE /v3/{domain_name}/whitelists — DELETE-v3--domainID--whitelists: Clear allowlist

## Bounce Classification
- GET /v1/bounce-classification/stats — GET-v1-bounce-classification-stats: List statistics, ordered by total bounces (deprecated)
- GET /v1/bounce-classification/domains — GET-v1-bounce-classification-domains: List domains statistic per account (deprecated)
- GET /v1/bounce-classification/domains/{domain}/entities — GET-v1-bounce-classification-domains--domain--entities: List statistic per domain (deprecated)
- GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules — GET-v1-bounce-classification-domains--domain--entities--entity-id--rules: List statistic per entity (deprecated)
- GET /v1/bounce-classification/domains/{domain}/events — GET-v1-bounce-classification-domains--domain--events: List Bounce Logs (deprecated)
- GET /v1/bounce-classification/config/entities — GET-v1-bounce-classification-config-entities: List entities (deprecated)
- GET /v1/bounce-classification/config/rules — GET-v1-bounce-classification-config-rules: List rules (deprecated)
- POST /v2/bounce-classification/metrics — POST-v2-bounce-classification-metrics: List statistic v2

## Bounces
- POST /v3/{domain_name}/bounces/import — POST-v3--domainID--bounces-import: Import list of bounces
- GET /v3/{domain_name}/bounces/{address} — GET-v3--domainID--bounces--address-: Lookup bounce record
- DELETE /v3/{domain_name}/bounces/{address} — DELETE-v3--domainID--bounces--address-: Remove bounce
- GET /v3/{domain_name}/bounces — GET-v3--domainID--bounces: List all bounces
- POST /v3/{domain_name}/bounces — POST-v3--domainID--bounces: Add bounces
- DELETE /v3/{domain_name}/bounces — DELETE-v3--domainID--bounces: Clear all bounces

## Complaints
- POST /v3/{domain_name}/complaints/import — POST-v3--domainID--complaints-import: Import complaint list
- GET /v3/{domain_name}/complaints/{address} — GET-v3--domainID--complaints--address-: Lookup complaint record
- DELETE /v3/{domain_name}/complaints/{address} — DELETE-v3--domainID--complaints--address-: Remove complaint
- GET /v3/{domain_name}/complaints — GET-v3--domainID--complaints: List all complaints
- POST /v3/{domain_name}/complaints — POST-v3--domainID--complaints: Add complaints
- DELETE /v3/{domain_name}/complaints — DELETE-v3--domainID--complaints: Clear all complaints

## Credentials
- GET /v3/domains/{domain_name}/credentials — GET-v3-domains--domain-name--credentials: List Mailgun SMTP credential metadata for a given domain
- POST /v3/domains/{domain_name}/credentials — POST-v3-domains--domain-name--credentials: Create Mailgun SMTP credentials for a given domain
- DELETE /v3/domains/{domain_name}/credentials — DELETE-v3-domains--domain-name--credentials: Delete all Mailgun SMTP credentials for a domain
- PUT /v3/domains/{domain_name}/credentials/{spec} — PUT-v3-domains--domain-name--credentials--spec-: Update Mailgun SMTP credentials
- DELETE /v3/domains/{domain_name}/credentials/{spec} — DELETE-v3-domains--domain-name--credentials--spec-: Delete Mailgun SMTP credentials

## Custom Message Limit
- GET /v5/accounts/limit/custom/monthly — get-v5-accounts-limit-custom-monthly: Get current custom sending limit
- PUT /v5/accounts/limit/custom/monthly — put-v5-accounts-limit-custom-monthly: Set a custom sending limit
- DELETE /v5/accounts/limit/custom/monthly — delete-v5-accounts-limit-custom-monthly: Delete a custom sending limit
- PUT /v5/accounts/limit/custom/enable — put-v5-accounts-limit-custom-enable: Re-enable account disabled for hitting send limit

## DKIM Security
- PUT /v1/dkim_management/domains/{name}/rotation — PUT-v1-dkim-management-domains--name--rotation: Update Automatic Sender Security DKIM key rotation for a domain
- POST /v1/dkim_management/domains/{name}/rotate — POST-v1-dkim-management-domains--name--rotate: Rotate Automatic Sender Security DKIM key for a domain

## Delegated DIPPs
- GET /v5/accounts/subaccounts/ip_pools/all — GET-v5-accounts-subaccounts-ip-pools-all: List DIPPs delegated to subaccounts

## Domain Keys
- GET /v1/dkim/keys — GET-v1-dkim-keys: List keys for all domains
- POST /v1/dkim/keys — POST-v1-dkim-keys: Create a domain key
- DELETE /v1/dkim/keys — DELETE-v1-dkim-keys: Delete a domain key
- PUT /v4/domains/{authority_name}/keys/{selector}/activate — PUT-v4-domains--authority-name--keys--selector--activate: Activate a domain key
- GET /v4/domains/{authority_name}/keys — GET-v4-domains--authority-name--keys: List domain keys
- PUT /v4/domains/{authority_name}/keys/{selector}/deactivate — PUT-v4-domains--authority-name--keys--selector--deactivate: Deactivate a domain key
- PUT /v3/domains/{name}/dkim_authority — PUT-v3-domains--name--dkim-authority: Update DKIM authority
- PUT /v3/domains/{name}/dkim_selector — PUT-v3-domains--name--dkim-selector: Update a DKIM selector

## Domain Templates
- GET /v3/{domain_name}/templates — GET-v3--domain-name--templates: Get templates
- POST /v3/{domain_name}/templates — POST-v3--domain-name--templates: Create a template
- DELETE /v3/{domain_name}/templates — DELETE-v3--domain-name--templates: Delete all templates
- GET /v3/{domain_name}/templates/{template_name}/versions — GET-v3--domain-name--templates--template-name--versions: Get all template versions
- POST /v3/{domain_name}/templates/{template_name}/versions — POST-v3--domain-name--templates--template-name--versions: Create a template version
- GET /v3/{domain_name}/templates/{template_name} — GET-v3--domain-name--templates--template-name-: Get template
- PUT /v3/{domain_name}/templates/{template_name} — PUT-v3--domain-name--templates--template-name-: Update template
- DELETE /v3/{domain_name}/templates/{template_name} — DELETE-v3--domain-name--templates--template-name-: Delete a template
- GET /v3/{domain_name}/templates/{template_name}/versions/{version_name} — GET-v3--domain-name--templates--template-name--versions--version-name-: Get a version
- PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name} — PUT-v3--domain-name--templates--template-name--versions--version-name-: Update a version
- DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name} — DELETE-v3--domain-name--templates--template-name--versions--version-name-: Delete a version
- PUT /v3/{domain_name}/templates/{template_name}/copy — PUT-v3--domain-name--templates--template-name--copy: Copy a template
- PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name} — PUT-v3--domain-name--templates--template-name--versions--version-name--copy--new-version-name-: Copy a version
- PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name} — PUT-v3--domain-name--templates--template-name--rename--new-template-name-: Rename a template

## Domain Tracking
- GET /v3/domains/{name}/tracking — GET-v3-domains--name--tracking: Get tracking settings
- PUT /v3/domains/{name}/tracking/click — PUT-v3-domains--name--tracking-click: Update click tracking settings
- PUT /v3/domains/{name}/tracking/open — PUT-v3-domains--name--tracking-open: Update open tracking settings
- PUT /v3/domains/{name}/tracking/unsubscribe — PUT-v3-domains--name--tracking-unsubscribe: Update unsubscribe tracking settings
- GET /v2/x509/{domain}/status — GET-v2-x509--domain--status: Tracking Certificate: Get certificate and status
- POST /v2/x509/{domain} — POST-v2-x509--domain-: Tracking Certificate: Generate
- PUT /v2/x509/{domain} — PUT-v2-x509--domain-: Tracking Certificate: Regenerate expired certificate

## Domain Webhooks
- GET /v3/domains/{domain}/webhooks — GET-v3-domains--domain--webhooks: Get domain webhooks
- POST /v3/domains/{domain}/webhooks — POST-v3-domains--domain--webhooks: Create a domain webhook
- GET /v3/domains/{domain_name}/webhooks/{webhook_name} — GET-v3-domains--domain-name--webhooks--webhook-name-: Get domain webhooks by type
- PUT /v3/domains/{domain_name}/webhooks/{webhook_name} — PUT-v3-domains--domain-name--webhooks--webhook-name-: Update domain webhook
- DELETE /v3/domains/{domain_name}/webhooks/{webhook_name} — DELETE-v3-domains--domain-name--webhooks--webhook-name-: Delete domain webhooks by type
- POST /v4/domains/{domain}/webhooks — POST-v4-domains--domain--webhooks: Create domain webhooks (v4)
- PUT /v4/domains/{domain}/webhooks — PUT-v4-domains--domain--webhooks: Update domain webhooks (v4)
- DELETE /v4/domains/{domain}/webhooks — DELETE-v4-domains--domain--webhooks: Delete domain webhooks (v4)

## Domains
- GET /v4/domains — GET-v4-domains: Get domains
- POST /v4/domains — POST-v4-domains: Create a domain
- GET /v4/domains/{name} — GET-v4-domains--name-: Get domain details
- PUT /v4/domains/{name} — PUT-v4-domains--name-: Update domain
- PUT /v4/domains/{name}/verify — PUT-v4-domains--name--verify: Verify Domain
- DELETE /v3/domains/{name} — DELETE-v3-domains--name-: Delete a domain

## Dynamic IP Pools
- POST /v3/domains/{name}/dynamic_pools — POST-v3-domains--name--dynamic-pools: Enroll domain
- DELETE /v3/domains/{name}/dynamic_pools — DELETE-v3-domains--name--dynamic-pools: Remove domain from dynamic IP pools
- GET /v3/domains/dynamic_pools/assignable — GET-v3-domains-dynamic-pools-assignable: List assignable domains
- POST /v3/domains/all/dynamic_pools/enroll — POST-v3-domains-all-dynamic-pools-enroll: Enroll all account domains
- GET /v3/dynamic_pools — GET-v3-dynamic-pools: List all Dynamic IP pools
- POST /v3/dynamic_pools/all — POST-v3-dynamic-pools-all: Initialize/set IPs for all pools
- DELETE /v3/dynamic_pools/all — DELETE-v3-dynamic-pools-all: Remove all dynamic IP pools
- POST /v3/dynamic_pools/{pool_name}/{ip} — POST-v3-dynamic-pools--pool-name---ip-: Add IP to Dynamic IP Pool
- PATCH /v3/dynamic_pools/{pool_name} — PATCH-v3-dynamic-pools--pool-name-: Update pool IPs
- GET /v1/dynamic_pools/domains — GET-v1-dynamic-pools-domains: List all domains assigned to dynamic IP pools
- GET /v1/dynamic_pools/domains/{name}/preview — GET-v1-dynamic-pools-domains--name--preview: Preview domain assignment
- GET /v1/dynamic_pools/domains/{name}/history — GET-v1-dynamic-pools-domains--name--history: List domain history
- PUT /v1/dynamic_pools/domains/{name}/override — PUT-v1-dynamic-pools-domains--name--override: Override domain assignment
- DELETE /v1/dynamic_pools/domains/{name}/override — DELETE-v1-dynamic-pools-domains--name--override: Remove override
- GET /v1/dynamic_pools/history — GET-v1-dynamic-pools-history: List account history

## Events
- GET /v3/{domain_name}/events — get-v3-domain_name-events: Retrieves a paginated list of events

## Forwards
- GET /v3/forwards/{id} — GET-v3-forwards--id-: Get a single forward rule by ID
- PUT /v3/forwards/{id} — PUT-v3-forwards--id-: Update a single forward rule by ID
- DELETE /v3/forwards/{id} — DELETE-v3-forwards--id-: Delete a single forward rule by ID
- GET /v3/forwards — GET-v3-forwards: List forward rules
- POST /v3/forwards — POST-v3-forwards: Create a forward rule

## IP Address Warmup
- GET /v3/ip_warmups — GET-v3-ip-warmups: Retrieves the list of in-flight IP address warmup statuses.
- GET /v3/ip_warmups/{addr} — GET-v3-ip-warmups--addr-: Retrieves the status of an in-flight IP warmup
- POST /v3/ip_warmups/{addr} — POST-v3-ip-warmups--addr-: Creates a warmup plan for an IP Address
- DELETE /v3/ip_warmups/{addr} — DELETE-v3-ip-warmups--addr-: Cancels the warmup plan for an IP address

## IP Allowlist
- GET /v2/ip_whitelist — GET-v2-ip-whitelist: List Mailgun account IP allowlist entries
- POST /v2/ip_whitelist — POST-v2-ip-whitelist: Add Mailgun account IP allowlist entry
- PUT /v2/ip_whitelist — PUT-v2-ip-whitelist: Update individual Mailgun account IP allowlist entry's description
- DELETE /v2/ip_whitelist — DELETE-v2-ip-whitelist: Delete Mailgun account IP allowlist entry

## IP Pools
- GET /v3/ip_pools — GET-v3-ip-pools: List dedicated IP pools of the account
- POST /v3/ip_pools — POST-v3-ip-pools: Add a new DIPP to the account
- GET /v3/ip_pools/{pool_id} — GET-v3-ip-pools--pool-id-: Get DIPP details
- PATCH /v3/ip_pools/{pool_id} — PATCH-v3-ip-pools--pool-id-: Edit DIPP
- DELETE /v3/ip_pools/{pool_id} — DELETE-v3-ip-pools--pool-id-: Delete the DIPP
- GET /v3/ip_pools/{pool_id}/domains — GET-v3-ip-pools--pool-id--domains: Get domains linked to DIPP
- PUT /v3/ip_pools/{pool_id}/ips/{ip} — PUT-v3-ip-pools--pool-id--ips--ip-: Add an IP to a DIPP
- DELETE /v3/ip_pools/{pool_id}/ips/{ip} — DELETE-v3-ip-pools--pool-id--ips--ip-: Remove an IP from a DIPP
- POST /v3/ip_pools/{pool_id}/ips.json — POST-v3-ip-pools--pool-id--ips-json: Add multiple IPs to the DIPP
- PUT /v3/ip_pools/{pool_id}/delegate — PUT-v3-ip-pools--pool-id--delegate: Delegate DIPP to Subaccount
- DELETE /v3/ip_pools/{pool_id}/delegate — DELETE-v3-ip-pools--pool-id--delegate: Revoke DIPP from Subaccount

## IPs
- GET /v3/ips/domain/{name} — GET-v3-ips-domain--name-: Get the dedicated IP pool used for spillover for a domain
- PATCH /v3/ips/domain/{name} — PATCH-v3-ips-domain--name-: Set or modify the dediciated IP pool used for spillover for a domain
- DELETE /v3/domains/{name}/ips/{ip} — DELETE-v3-domains--name--ips--ip-: Remove an IP from the domain pool, unlink a DIPP or remove the domain pool
- DELETE /v3/domains/{name}/pool/{ip} — DELETE-v3-domains--name--pool--ip-: Remove an IP from the domain pool, unlink a DIPP or remove the domain pool
- GET /v3/ips/account/settings — GET-v3-ips-account-settings: Get DIPP spillover settings for an account
- PATCH /v3/ips/account/settings — PATCH-v3-ips-account-settings: Set or Modify the dedicated IP pool used for IP spillover
- GET /v3/ips — GET-v3-ips: List account IPs
- GET /v3/ips/{ip} — GET-v3-ips--ip-: Get details about account IP
- GET /v3/ips/{ip}/domains — GET-v3-ips--ip--domains: Get all domains of an account where a specific IP is assigned
- POST /v3/ips/{ip}/domains — POST-v3-ips--ip--domains: Assign an IP to all account domains
- DELETE /v3/ips/{ip}/domains — DELETE-v3-ips--ip--domains: Remove an IP from all account domains
- POST /v3/ips/{addr}/ip_band — POST-v3-ips--addr--ip-band: Place account IP into a dedicated IP band
- GET /v3/ips/request/new — GET-v3-ips-request-new: Return the number of IPs available to the account per its billing plan
- POST /v3/ips/request/new — POST-v3-ips-request-new: Add a new dedicated IP to the account
- GET /v3/ips/details/all — GET-v3-ips-details-all: List account IPs - detailed view
- PATCH /v3/ips/subaccounts — PATCH-v3-ips-subaccounts: Update subaccount IP assignments

## Keys
- GET /v1/keys — GET-v1-keys: List Mailgun API keys
- POST /v1/keys — POST-v1-keys: Create Mailgun API key
- DELETE /v1/keys/{key_id} — DELETE-v1-keys--key-id-: Delete Mailgun API key
- POST /v1/keys/public — POST-v1-keys-public: Regenerate Mailgun Public API key

## Limits
- GET /v1/thresholds/limits — GET-v1-thresholds-limits: List limit thresholds for an account
- POST /v1/thresholds/limits — POST-v1-thresholds-limits: Create a limit threshold for an account
- GET /v1/thresholds/limits/{name} — GET-v1-thresholds-limits--name-: Get a limit threshold for an account
- PUT /v1/thresholds/limits/{name} — PUT-v1-thresholds-limits--name-: Update a limit threshold for an account
- DELETE /v1/thresholds/limits/{name} — DELETE-v1-thresholds-limits--name-: Delete a limit threshold for an account

## Logs
- POST /v1/analytics/logs — POST-v1-analytics-logs: List logs

## Mailing Lists
- GET /v3/lists — get-v3-lists: Get mailing lists
- POST /v3/lists — post-v3-lists: Create a mailing list
- GET /v3/lists/{list_address}/members — get-lists-string:list_address-members: Get mailing lists members
- POST /v3/lists/{list_address}/members — post-lists-string:list_address-members: Create a mailing list member
- POST /v3/lists/{list_address}/members.json — post-lists-list_address-members.json: Bulk upload members to a mailing list (JSON)
- POST /v3/lists/{list_address}/members.csv — post-lists-list_address-members.csv: Bulk upload members to a mailing list (CSV)
- GET /v3/lists/{list_address}/members/{member_address} — get-lists-list_address-members-member_address: Get a member
- PUT /v3/lists/{list_address}/members/{member_address} — put-lists-list_address-members-member_address: Update a mailing list member
- DELETE /v3/lists/{list_address}/members/{member_address} — delete-lists-list_address-members-member_address: Delete a member
- GET /v3/lists/{list_address} — get-v3-lists-address: Get a mailing list by address
- PUT /v3/lists/{list_address} — put-v3-lists-address: Update a mailing list
- DELETE /v3/lists/{list_address} — delete-v3-lists-address: Delete a mailing list
- GET /v3/lists/pages — get-v3-lists-pages: Get mailing lists by page
- GET /v3/lists/{list_address}/members/pages — get-lists-list_address-members-pages: Get members by page

## Messages
- POST /v3/{domain_name}/messages — POST-v3--domain-name--messages: Send an email
- POST /v3/{domain_name}/messages.mime — POST-v3--domain-name--messages-mime: Send an email in MIME format
- GET /v3/domains/{domain_name}/messages/{storage_key} — GET-v3-domains--domain-name--messages--storage-key-: Retrieve a stored email
- POST /v3/domains/{domain_name}/messages/{storage_key} — POST-v3-domains--domain-name--messages--storage-key-: Resend an email
- GET /v3/domains/{name}/sending_queues — GET-v3-domains--name--sending-queues: Get messages queue status
- DELETE /v3/{domain_name}/envelopes — DELETE-v3--domain-name--envelopes: Delete scheduled and undelivered mail

## Metrics
- POST /v1/analytics/metrics — POST-v1-analytics-metrics: Query account metrics
- POST /v1/analytics/usage/metrics — POST-v1-analytics-usage-metrics: Query account usage metrics

## Routes
- GET /v3/routes — get-v3-routes: Get all routes
- POST /v3/routes — post-v3-routes: Create a route
- GET /v3/routes/{id} — get-v3-routes-id: Get a route
- PUT /v3/routes/{id} — put-v3-routes-id: Update a route
- DELETE /v3/routes/{id} — delete-v3-routes-id: Delete a route
- GET /v3/routes/match — get-v3-routes-match: Match address to route

## Send Alerts
- GET /v1/thresholds/alerts/send — GET-v1-thresholds-alerts-send: List send alerts
- POST /v1/thresholds/alerts/send — POST-v1-thresholds-alerts-send: Create a send alert for an account
- GET /v1/thresholds/alerts/send/{name} — GET-v1-thresholds-alerts-send--name-: Get a send alert
- PUT /v1/thresholds/alerts/send/{name} — PUT-v1-thresholds-alerts-send--name-: Update a send alert
- DELETE /v1/thresholds/alerts/send/{name} — DELETE-v1-thresholds-alerts-send--name-: Delete a send alert
- GET /v1/thresholds/hits — GET-v1-thresholds-hits: List account hits

## Stats
- GET /v3/stats/total — GET-v3-stats-total: Totals for entire account (deprecated)
- GET /v3/{domain}/stats/total — GET-v3--domain--stats-total: Totals for entire domain (deprecated)
- GET /v3/stats/total/domains — GET-v3-stats-total-domains: Totals for account domains for a single time resolution (deprecated)
- GET /v3/stats/filter — GET-v3-stats-filter: Filtered/grouped totals for entire account (deprecated)
- GET /v3/{domain}/aggregates/providers — GET-v3--domain--aggregates-providers: Aggregate counts by ESP (deprecated)
- GET /v3/{domain}/aggregates/devices — GET-v3--domain--aggregates-devices: Aggregate counts by devices triggering events (deprecated)
- GET /v3/{domain}/aggregates/countries — GET-v3--domain--aggregates-countries: Aggregate counts by country (deprecated)

## Subaccounts
- GET /v5/accounts/subaccounts/{subaccount_id} — get-v5-accounts-subaccounts-subaccount_id: Get a single subaccount
- GET /v5/accounts/subaccounts — get-v5-accounts-subaccounts: List all subaccounts
- POST /v5/accounts/subaccounts — post-v5-accounts-subaccounts: Create a subaccount
- DELETE /v5/accounts/subaccounts — delete-v5-accounts-subaccounts-subaccount_id: Delete a subaccount
- POST /v5/accounts/subaccounts/{subaccount_id}/disable — post-v5-accounts-subaccounts-subaccount_id-disable: Disable a subaccount
- POST /v5/accounts/subaccounts/{subaccount_id}/enable — post-v5-accounts-subaccounts-subaccount_id-enable: Enable a subaccount
- GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly — get-v5-accounts-subaccounts-subaccount_id-limit-custom-monthly: Get current custom sending limit
- PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly — put-v5-accounts-subaccounts-subaccount_id-limit-custom-monthly: Set a custom sending limit
- DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly — delete-v5-accounts-subaccounts-subaccount_id-limit-custom-monthly: Delete a custom sending limit
- PUT /v5/accounts/subaccounts/{subaccount_id}/features — put-v5-accounts-subaccounts-subaccount_id-features: Update subaccount feature

## Tags
- GET /v3/{domain}/tags — GET-v3--domain--tags: List all tags (deprecated)
- GET /v3/{domain}/tag — GET-v3--domain--tag: Get a tag (deprecated)
- PUT /v3/{domain}/tag — PUT-v3--domain--tag: Update tag (deprecated)
- DELETE /v3/{domain}/tag — DELETE-v3--domain--tag: Delete tag (deprecated)
- GET /v3/{domain}/tag/stats/aggregates — GET-v3--domain--tag-stats-aggregates: Get aggregate stat types by tag (deprecated)
- GET /v3/{domain}/tag/stats — GET-v3--domain--tag-stats: Get stats by tag (deprecated)
- GET /v3/domains/{domain}/limits/tag — GET-v3-domains--domain--limits-tag: Get tag limits (deprecated)

## Tags New
- POST /v1/analytics/tags — POST-v1-analytics-tags: Post query to list account tags or search for single tag
- PUT /v1/analytics/tags — PUT-v1-analytics-tags: Update account tag
- DELETE /v1/analytics/tags — DELETE-v1-analytics-tags: Delete account tag
- GET /v1/analytics/tags/limits — GET-v1-analytics-tags-limits: Get account tag limit information

## Unsubscribe
- POST /v3/{domain_name}/unsubscribes/import — POST-v3--domainID--unsubscribes-import: Import unsubscribe list
- GET /v3/{domain_name}/unsubscribes/{address} — GET-v3--domainID--unsubscribes--address-: Lookup unsubscribe record
- DELETE /v3/{domain_name}/unsubscribes/{address} — DELETE-v3--domainID--unsubscribes--address-: Remove unsubscribe
- GET /v3/{domain_name}/unsubscribes — GET-v3--domainID--unsubscribes: List all unsubscribes
- POST /v3/{domain_name}/unsubscribes — POST-v3--domainID--unsubscribes: Add unsubscribes
- DELETE /v3/{domain_name}/unsubscribes — DELETE-v3--domainID--unsubscribes: Clear all unsubscribes

## Users
- GET /v5/users — get-v5-users: Get users on an account
- GET /v5/users/{user_id} — get-v5-users-user_id: Get a user's details
- GET /v5/users/me — get-v5-users-me: Get one's own user details

## openapi-scout_other
- GET /v3/domains/{domain}/tag/devices — GET-v3-domains--domain--tag-devices: List of supported devices (deprecated)
- GET /v3/domains/{domain}/tag/providers — GET-v3-domains--domain--tag-providers: List of supported providers (deprecated)
- GET /v3/domains/{domain}/tag/countries — GET-v3-domains--domain--tag-countries: List of supported country codes (deprecated)

## openapi-tower_other
- PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool — PUT-v5-accounts-subaccounts--subaccountId--ip-pool: Delegate a DIPP to a subaccount (deprecated)
- DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool — DELETE-v5-accounts-subaccounts--subaccountId--ip-pool: Revoke a DIPP delegated to a subaccount (deprecated)
