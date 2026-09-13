# LAMISPlus EMR API (lamisplus) v3

<!-- derived from openapi.json by `pnpm specs index lamisplus` — do not edit by hand -->

base: https://lamisplus.example.org | auth: http/bearer (JWT) | 106 operations in 24 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## analytics
- GET /api/v1/core/analytics/metrics/compare — compareMetrics: Compare metrics between periods
- GET /api/v1/core/analytics/metrics/daily — getDailyMetrics: Daily metrics
- GET /api/v1/core/analytics/metrics/drill-down/lga — getMetricsByLga: Drill metrics down to LGA (local government area)
- GET /api/v1/core/analytics/metrics/drill-down/tenant — getMetricsByTenant: Drill metrics down to tenant
- GET /api/v1/core/analytics/metrics/range — getMetricsInRange: Metrics for a date range

## appointments
- GET /plugin/appointments/appointments — listAppointments: List appointments
- GET /plugin/appointments/ping — pingAppointments: Liveness check for the appointments plugin

## audit
- GET /api/audit/available-dates — listAuditDates: List the dates audit events exist for
- GET /api/audit/events — listAuditEvents: List audit events
- GET /api/audit/events/range — listAuditEventsInRange: List audit events in a date range
- GET /api/audit/queue-stats — getAuditQueueStats: Audit queue statistics

## auth
- GET /core/api/v1/auth/forgot-password/methods — getForgotPasswordMethods: List the password-recovery methods available
- GET /core/api/v1/auth/forgot-password/question — getForgotPasswordQuestion: Get the security question for password recovery
- POST /core/api/v1/auth/login — login: Sign in and obtain an access token
- GET /core/api/v1/auth/mfa/status — getMfaStatus: Report multi-factor authentication status

## codesets
- GET /core/api/v1/codeset-groups/groups — listCodesetGroups: List every codeset group
- GET /core/api/v1/codeset-groups/groups/list — listCodesetGroupMembers: List the members of a named codeset group
- GET /core/api/v1/codesets — listCodesets: Page the codesets

## consultation
- GET /plugin/ehr/api/v1/consultation/general-dashboard — getConsultationDashboard: Outpatient consultation dashboard

## ehr-dashboard
- GET /plugin/ehr/api/dashboard/patient-by-age-group — getPatientsByAgeGroup: Patient counts by age group
- GET /plugin/ehr/api/dashboard/patient-summary — getPatientSummary: Patient summary counters

## encounters
- GET /plugin/ehr/api/v1/encounter — listEncounters: Page the encounters
- GET /plugin/ehr/api/v1/scheduled-admissions — listScheduledAdmissions: List the scheduled admissions the inpatient worklist is built from

## facilities
- GET /api/v1/facilities — listFacilities: List facilities
- GET /api/v1/facilities/count — countFacilities: Count facilities
- GET /api/v1/facilities/current — getCurrentFacility: Describe the session's facility
- GET /api/v1/facilities/primary — getPrimaryFacility: Describe the tenant's primary facility

## inpatient
- GET /plugin/inpatient/api/v1/admissions — listAdmissions: Page the admissions
- GET /plugin/inpatient/api/v1/beds — listBeds: Page the beds
- GET /plugin/inpatient/api/v1/discharges — listDischarges: Page the discharges
- POST /plugin/inpatient/api/v1/discharges — createDischarge: Discharge an admitted patient
- GET /plugin/inpatient/api/v1/discharges/discharged — listDischargedPatients: List the patients already discharged
- GET /plugin/inpatient/api/v1/wards — listWards: Page the wards

## laboratory
- GET /plugin/ehr/api/lab-order-result/api/lab-results — listLabResults: List laboratory results
- GET /plugin/ehr/api/lab-order-result/hepatitis-eligibles — listHepatitisEligiblePatients: List the patients eligible for hepatitis screening
- GET /plugin/ehr/api/lab-order-result/lab-eligibles — listLabEligiblePatients: List the patients eligible for laboratory testing
- GET /plugin/ehr/api/lab-order-samples/laboratory-stats — getLaboratoryStats: Laboratory statistics
- GET /plugin/ehr/api/lab-order-samples/sample — listLabOrderSamples: List laboratory order samples
- GET /plugin/ehr/api/v1/lab-orders — listLabOrders: Page the laboratory orders
- GET /plugin/ehr/api/v1/lab-sample-types — listLabSampleTypes: List the specimen types
- GET /plugin/ehr/api/v1/lab-test — listLabTests: List the lab tests that can be ordered
- GET /plugin/ehr/api/v1/lab-test_group — listLabTestGroups: List the lab test groups

## organisation-units
- GET /core/api/v1/organisation-units — listOrganisationUnits: List organisation units
- GET /core/api/v1/organisation-units/facilities/search — searchFacilities: Search facilities
- GET /core/api/v1/organisation-units/tenant-facilities — listTenantFacilities: List the facilities this tenant owns
- GET /levels/without-subset — listOrganisationUnitLevels: List organisation-unit levels excluding subsets
- GET /tenants/assigned-facilities — listAssignedFacilities: List the facilities assigned to the signed-in user

## patients
- GET /plugin/ehr/api/v1/patient — getPatients: Page the patient register
- POST /plugin/ehr/api/v1/patient — createPatient: Register a patient
- GET /plugin/ehr/api/v1/patient/{id} — getPatientById: Fetch one patient

## pharmacy
- GET /plugin/ehr/api/v1/drug — listDrugs: Page the drug catalogue
- GET /plugin/ehr/api/v1/drug-dispensing/drug-order-and-dispensing-monthly-summary — getDispensingMonthlySummary: Monthly drug order and dispensing summary
- GET /plugin/ehr/api/v1/drug-orders/prescription-order-information — getPrescriptionOrderInformation: Summarise prescription orders

## plugins
- GET /api/admin/plugins/monitoring/health — getPluginMonitoringHealth: Plugin monitoring health
- GET /api/admin/plugins/monitoring/summary — getPluginMonitoringSummary: Plugin monitoring summary
- GET /api/debug/plugin-registry — getPluginRegistry: Dump the plugin registry (debug)
- GET /api/menus/api/v1/core/plugin/get_all — listPluginMenus: List the menu entries every plugin contributes
- GET /api/v1/core/plugins/usage/facility — getPluginUsageByFacility: Plugin usage for the current facility
- GET /api/v1/core/plugins/usage/region — getPluginUsageByRegion: Plugin usage by region
- GET /api/v1/core/plugins/usage/tenant — getPluginUsageByTenant: Plugin usage by tenant
- GET /api/v1/local/plugin-sync/status — getLocalPluginSyncStatus: Report the local plugin-sync status
- GET /api/v1/plugin-sync/check — checkPluginSync: Check for plugin updates to sync
- GET /core/api/v1/plugin/admin/all — listPluginsForAdmin: List plugins for administration
- GET /core/api/v1/plugin/all — listAllPlugins: List every plugin known to the platform
- GET /core/api/v1/plugin/manifest — getPluginManifest: Read the plugin manifest
- GET /core/api/v1/plugin/marketplace/available — listMarketplacePlugins: List the plugins available in the marketplace
- GET /core/api/v1/plugin/my-plugins — listMyPlugins: List the plugins enabled for this facility
- GET /plugin-manifest.json — getStaticPluginManifest: Fetch the static plugin manifest document
- GET /plugins/health — getPluginsHealth: Report plugin health

## public-health
- GET /plugin/pbh/api/v1/family-planning — listFamilyPlanningEnrolments: List the family planning enrolments
- GET /plugin/pbh/api/v1/hepatitis_enrollment — listHepatitisEnrolments: List the viral hepatitis enrolments
- GET /plugin/pbh/api/v1/hepatitis_followup — listHepatitisFollowUps: List the viral hepatitis follow-ups
- GET /plugin/pbh/api/v1/hts/encounters/register — listHtsRegister: List the HIV testing services register
- GET /plugin/pbh/api/v1/hts/encounters/waiting — listHtsWaiting: List the clients waiting for HIV testing services

## reports
- GET /plugin/reports/ping — pingReports: Liveness check for the reports plugin
- GET /plugin/reports/reports — listReports: List the reports that can be run

## roles
- GET /api/permissions/api/v1/core/permissions — listCorePermissions: List core permissions (permissions service route)
- GET /core/api/v1/roles — listRoles: List the assignable roles
- GET /core/api/v1/roles/details — listRoleDetails: List roles with their detail
- GET /core/api/v1/roles/permissions — listPermissions: List the permissions roles are built from
- GET /core/api/v1/roles/tenant/roles — listTenantRoles: List the roles defined for the tenant

## service-points
- GET /plugin/ehr/api/v1/service-locations — listServiceLocations: List the facility's service locations
- GET /plugin/ehr/api/v1/service-points — listServicePoints: List the service points patients are posted to

## super-admin
- GET /core/api/v1/super-admin/all-users — listAllUsers: List every user
- GET /core/api/v1/super-admin/dashboard/stats — getSuperAdminDashboardStats: Platform dashboard statistics
- GET /core/api/v1/super-admin/plugins/usage — getSuperAdminPluginUsage: Plugin usage across tenants
- GET /core/api/v1/super-admin/tenants — listTenants: List tenants
- GET /core/api/v1/super-admin/users — listSuperAdminUsers: List users across tenants

## system
- GET /api/admin/cache/health — getCacheHealth: Cache health
- GET /api/admin/cache/stats — getCacheStats: Cache statistics
- GET /api/admin/cache/stats/text — getCacheStatsText: Cache statistics as plain text
- GET /api/devices/my-devices — listMyDevices: List the devices registered to this user
- GET /api/v1/core/health — getHealth: Overall platform health
- GET /api/v1/core/health/plugins — getPluginHealth: Per-plugin health
- GET /api/v1/core/health/uptime — getUptime: Platform uptime
- GET /redoc.html — getApiDocs: The deployment's own API reference page

## triage
- GET /plugin/ehr/api/v1/triage/patients-attended-to — listPatientsAttendedTo: List the patients triage has attended to
- GET /plugin/ehr/api/v1/triage/patients-in-waiting — listPatientsInWaiting: List the patients waiting for triage
- GET /plugin/ehr/api/v1/triage/triage-view — getTriageView: The triage worklist view

## users
- GET /core/api/v1/user-settings — getUserSettings: Settings of the signed-in user
- GET /core/api/v1/users — listUsers: Page the users of the current tenant
- GET /core/api/v1/users/get-tenant-users — listTenantUsers: List every user of the tenant (tenant-wide privilege required)
- GET /core/api/v1/users/me — getCurrentUser: Describe the signed-in user
- GET /core/api/v1/users/system-dashboard — getUserSystemDashboard: User-facing system dashboard counters
- GET /core/api/v1/users/tenants — listUserTenants: List the tenants the signed-in user belongs to (tenant-wide privilege required)

## visits
- GET /plugin/ehr/api/v1/visit/active — listActiveVisits: List the currently active visits
