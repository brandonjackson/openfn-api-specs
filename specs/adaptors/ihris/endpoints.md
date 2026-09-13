# iHRIS API (ihris) v5.1.5

<!-- derived from openapi.json by `pnpm specs index ihris` — do not edit by hand -->

base: https://{host}, http://localhost:3000 | auth: apiKey (cookie connect.sid) | 168 operations in 9 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## apps
- POST /apps/install — installApp: Install an iHRIS app package.
- GET /apps/installed — listInstalledApps: List installed apps and their manifests.
- DELETE /apps/uninstall/{name} — uninstallApp: Uninstall an app by name.

## auth
- GET /auth — getSession: Whether the caller has a live session.
- POST /auth/change-password — changePassword: Change the signed-in user's password.
- GET /auth/google — startGoogleLogin: Begin Google OAuth sign-in.
- GET /auth/google/callback — completeGoogleLogin: Google OAuth callback.
- POST /auth/login — login: Log in and open a session.
- GET /auth/logout — logout: End the session.
- POST /auth/password-reset-request — requestPasswordReset: Email a password-reset link to a user.
- POST /auth/reset-password — resetPassword: Set a new password from a reset link.
- POST /auth/signup — signup: Self-register a user.
- GET /auth/test — getAuthTest: Echo the authenticated principal (diagnostics).
- POST /auth/token — createToken: Exchange credentials for a token.
- GET /test — getTest: Echo user, protocol and TLS state (diagnostics).

## config
- GET /config/app — getAppConfig: Fetch the app-level configuration.
- GET /config/getParameters — getConfigParameters: Fetch the iHRIS Parameters resources.
- GET /config/getUserManual — getUserManual: Fetch the configured user-manual link.
- GET /config/page/{page} — getPageConfig: Fetch the configuration of a page.
- GET /config/page/{page}/{type} — getPageConfigByType: Fetch the configuration of a page for one resource type.
- GET /config/questionnaire/{questionnaire}/{page} — getQuestionnaireConfig: Fetch a questionnaire rendered for a page.
- GET /config/reload — reloadConfig: Reload the configuration from the FHIR store.
- GET /config/report/es/{report} — getEsReportConfig: Fetch an Elasticsearch-backed report definition.
- GET /config/report/{report} — getReportConfig: Fetch a report definition.
- GET /config/site — getSiteConfig: Fetch the site configuration (menus, branding, locales).

## fhir
- POST /fhir — submitBundle: Submit a transaction or batch Bundle.
- GET /fhir/$short-name — getShortName: Resolve the short display name of a resource.
- GET /fhir/AuditEvent — searchAuditEvent: Search AuditEvent resources.
- POST /fhir/AuditEvent — createAuditEvent: Create a AuditEvent resource.
- GET /fhir/AuditEvent/{id} — getAuditEvent: Read a AuditEvent by id.
- PUT /fhir/AuditEvent/{id} — updateAuditEvent: Update (or create with a client-supplied id) a AuditEvent.
- DELETE /fhir/AuditEvent/{id} — deleteAuditEvent: Delete a AuditEvent by id.
- GET /fhir/Basic — searchBasic: Search Basic resources.
- POST /fhir/Basic — createBasic: Create a Basic resource.
- GET /fhir/Basic/{id} — getBasic: Read a Basic by id.
- PUT /fhir/Basic/{id} — updateBasic: Update (or create with a client-supplied id) a Basic.
- DELETE /fhir/Basic/{id} — deleteBasic: Delete a Basic by id.
- GET /fhir/CodeSystem — searchCodeSystem: Search CodeSystem resources.
- POST /fhir/CodeSystem — createCodeSystem: Create a CodeSystem resource.
- GET /fhir/CodeSystem/$lookup — lookupCodeSystemCode: Look a code up in a CodeSystem.
- GET /fhir/CodeSystem/{id} — getCodeSystem: Read a CodeSystem by id.
- PUT /fhir/CodeSystem/{id} — updateCodeSystem: Update (or create with a client-supplied id) a CodeSystem.
- DELETE /fhir/CodeSystem/{id} — deleteCodeSystem: Delete a CodeSystem by id.
- PATCH /fhir/CodeSystem/{id}/{code} — patchCodeSystemConcept: Update one concept of a CodeSystem.
- GET /fhir/DocumentReference — searchDocumentReference: Search DocumentReference resources.
- POST /fhir/DocumentReference — createDocumentReference: Create a DocumentReference resource.
- GET /fhir/DocumentReference/{id} — getDocumentReference: Read a DocumentReference by id.
- PUT /fhir/DocumentReference/{id} — updateDocumentReference: Update (or create with a client-supplied id) a DocumentReference.
- DELETE /fhir/DocumentReference/{id} — deleteDocumentReference: Delete a DocumentReference by id.
- GET /fhir/DocumentReference/{id}/$html — getDocumentReferenceHtml: Render a DocumentReference as HTML.
- GET /fhir/GraphDefinition — searchGraphDefinition: Search GraphDefinition resources.
- POST /fhir/GraphDefinition — createGraphDefinition: Create a GraphDefinition resource.
- GET /fhir/GraphDefinition/{id} — getGraphDefinition: Read a GraphDefinition by id.
- PUT /fhir/GraphDefinition/{id} — updateGraphDefinition: Update (or create with a client-supplied id) a GraphDefinition.
- DELETE /fhir/GraphDefinition/{id} — deleteGraphDefinition: Delete a GraphDefinition by id.
- GET /fhir/Group — searchGroup: Search Group resources.
- POST /fhir/Group — createGroup: Create a Group resource.
- GET /fhir/Group/{id} — getGroup: Read a Group by id.
- PUT /fhir/Group/{id} — updateGroup: Update (or create with a client-supplied id) a Group.
- DELETE /fhir/Group/{id} — deleteGroup: Delete a Group by id.
- GET /fhir/Library — searchLibrary: Search Library resources.
- POST /fhir/Library — createLibrary: Create a Library resource.
- GET /fhir/Library/{id} — getLibrary: Read a Library by id.
- PUT /fhir/Library/{id} — updateLibrary: Update (or create with a client-supplied id) a Library.
- DELETE /fhir/Library/{id} — deleteLibrary: Delete a Library by id.
- GET /fhir/Location — searchLocation: Search Location resources.
- POST /fhir/Location — createLocation: Create a Location resource.
- GET /fhir/Location/{id} — getLocation: Read a Location by id.
- PUT /fhir/Location/{id} — updateLocation: Update (or create with a client-supplied id) a Location.
- DELETE /fhir/Location/{id} — deleteLocation: Delete a Location by id.
- GET /fhir/Organization — searchOrganization: Search Organization resources.
- POST /fhir/Organization — createOrganization: Create a Organization resource.
- GET /fhir/Organization/{id} — getOrganization: Read a Organization by id.
- PUT /fhir/Organization/{id} — updateOrganization: Update (or create with a client-supplied id) a Organization.
- DELETE /fhir/Organization/{id} — deleteOrganization: Delete a Organization by id.
- GET /fhir/Parameters — searchParameters: Search Parameters resources.
- POST /fhir/Parameters — createParameters: Create a Parameters resource.
- GET /fhir/Parameters/{id} — getParameters: Read a Parameters by id.
- PUT /fhir/Parameters/{id} — updateParameters: Update (or create with a client-supplied id) a Parameters.
- DELETE /fhir/Parameters/{id} — deleteParameters: Delete a Parameters by id.
- GET /fhir/Person — searchPerson: Search Person resources.
- POST /fhir/Person — createPerson: Create a Person resource.
- GET /fhir/Person/{id} — getPerson: Read a Person by id.
- PUT /fhir/Person/{id} — updatePerson: Update (or create with a client-supplied id) a Person.
- DELETE /fhir/Person/{id} — deletePerson: Delete a Person by id.
- GET /fhir/Practitioner — searchPractitioner: Search Practitioner resources.
- POST /fhir/Practitioner — createPractitioner: Create a Practitioner resource.
- GET /fhir/Practitioner/{id} — getPractitioner: Read a Practitioner by id.
- PUT /fhir/Practitioner/{id} — updatePractitioner: Update (or create with a client-supplied id) a Practitioner.
- DELETE /fhir/Practitioner/{id} — deletePractitioner: Delete a Practitioner by id.
- GET /fhir/PractitionerRole — searchPractitionerRole: Search PractitionerRole resources.
- POST /fhir/PractitionerRole — createPractitionerRole: Create a PractitionerRole resource.
- GET /fhir/PractitionerRole/{id} — getPractitionerRole: Read a PractitionerRole by id.
- PUT /fhir/PractitionerRole/{id} — updatePractitionerRole: Update (or create with a client-supplied id) a PractitionerRole.
- DELETE /fhir/PractitionerRole/{id} — deletePractitionerRole: Delete a PractitionerRole by id.
- GET /fhir/Questionnaire — searchQuestionnaire: Search Questionnaire resources.
- POST /fhir/Questionnaire — createQuestionnaire: Create a Questionnaire resource.
- GET /fhir/Questionnaire/{id} — getQuestionnaire: Read a Questionnaire by id.
- PUT /fhir/Questionnaire/{id} — updateQuestionnaire: Update (or create with a client-supplied id) a Questionnaire.
- DELETE /fhir/Questionnaire/{id} — deleteQuestionnaire: Delete a Questionnaire by id.
- GET /fhir/QuestionnaireResponse — searchQuestionnaireResponse: Search QuestionnaireResponse resources.
- POST /fhir/QuestionnaireResponse — submitQuestionnaireResponse: Submit a QuestionnaireResponse, running the iHRIS workflow attached to it.
- GET /fhir/QuestionnaireResponse/{id} — getQuestionnaireResponse: Read a QuestionnaireResponse by id.
- PUT /fhir/QuestionnaireResponse/{id} — updateQuestionnaireResponse: Update a QuestionnaireResponse.
- DELETE /fhir/QuestionnaireResponse/{id} — deleteQuestionnaireResponse: Delete a QuestionnaireResponse by id.
- GET /fhir/StructureDefinition — searchStructureDefinition: Search StructureDefinition resources.
- POST /fhir/StructureDefinition — createStructureDefinition: Create a StructureDefinition resource.
- GET /fhir/StructureDefinition/{id} — getStructureDefinition: Read a StructureDefinition by id.
- PUT /fhir/StructureDefinition/{id} — updateStructureDefinition: Update (or create with a client-supplied id) a StructureDefinition.
- DELETE /fhir/StructureDefinition/{id} — deleteStructureDefinition: Delete a StructureDefinition by id.
- GET /fhir/ValueSet — searchValueSet: Search ValueSet resources.
- POST /fhir/ValueSet — createValueSet: Create a ValueSet resource.
- GET /fhir/ValueSet/{id} — getValueSet: Read a ValueSet by id.
- PUT /fhir/ValueSet/{id} — updateValueSet: Update (or create with a client-supplied id) a ValueSet.
- DELETE /fhir/ValueSet/{id} — deleteValueSet: Delete a ValueSet by id.
- GET /fhir/ValueSet/{id}/$expand — expandValueSet: Expand a ValueSet.
- GET /fhir/metadata — getCapabilityStatement: Fetch the CapabilityStatement of the FHIR server behind iHRIS.
- GET /fhir/vRead/{resource}/{id}/{version} — vReadResource: Read a specific version of a FHIR resource.
- GET /fhir/{resource} — searchResource: Search any FHIR resource type.
- POST /fhir/{resource} — createResource: Create any FHIR resource.
- GET /fhir/{resource}/{id} — getResource: Read any FHIR resource by id.
- PUT /fhir/{resource}/{id} — updateResource: Update any FHIR resource by id.
- DELETE /fhir/{resource}/{id} — deleteResource: Delete any FHIR resource by id.

## mhero
- POST /mhero/add-group — addMheroGroup: Create an mHero contact group.
- POST /mhero/cancel-message-schedule — cancelMheroSchedule: Cancel a scheduled mHero message.
- GET /mhero/clearProgress — clearMheroProgress: Clear the stored mHero job progress.
- GET /mhero/getProgress — getMheroProgress: Progress of the running mHero job.
- PUT /mhero/optout — optOutMheroContact: Opt a contact out of mHero messaging.
- POST /mhero/send-message — sendMheroMessage: Send (or schedule) an mHero message to contacts.
- POST /mhero/subscribe-contact-groups — subscribeMheroContacts: Subscribe contacts to RapidPro groups.
- PUT /mhero/undoOptout — undoMheroOptOut: Undo an mHero opt-out.
- POST /mhero/unsubscribe-contact-groups — unsubscribeMheroContacts: Unsubscribe contacts from groups.
- GET /mhero/workflows — listMheroWorkflows: List the RapidPro workflows available to mHero.

## reporting
- GET /es/cache/{index} — cacheEsIndex: Rebuild the cache of a report index.
- GET /es/cache/{index}/{cacheTime} — cacheEsIndexSince: Rebuild a report index cache from a point in time.
- POST /es/export/{format}/{index} — exportEsIndex: Export a report index as a file (csv, xlsx, ...).
- GET /es/indices — listEsIndices: List the report indices and their record counts.
- GET /es/listFields/{index} — listEsFields: List the fields of a report index.
- GET /es/populateFilter/{index}/{field} — listEsFilterValues: List the distinct values of a report field.
- GET /es/{index} — runEsQuery: Query a report index.
- POST /es/{index} — postEsQuery: Query a report index with a body.
- GET /es/{index}/{operation} — runEsOperation: Run an operation (search, aggregate, ...) on a report index.
- POST /es/{index}/{operation} — postEsOperation: Run an operation on a report index with a body.

## reporting-sql
- POST /fhir2sql/export/{format}/{index} — exportSqlReport: Export a SQL report as a file.
- GET /fhir2sql/listFields/{index} — listSqlFields: List the fields of a SQL report table.
- GET /fhir2sql/populateFilter/{table}/{field} — listSqlFilterValues: List the distinct values of a SQL report field.
- POST /fhir2sql/reportData/{table}/{operation} — getSqlReportData: Fetch rows (or an aggregate) from a SQL report table.
- GET /fhir2sql/reports-list — listSqlReports: List the SQL report definitions.
- POST /fhir2sql/run-sql — runSql: Run a configured SQL report.

## tasks-and-roles
- POST /taskAndRole/saveRole — saveRole: Create a role (a FHIR Basic ihris-role resource).
- POST /taskAndRole/saveTask — saveTask: Create or update an iHRIS task.
- PUT /taskAndRole/updateRole — updateRole: Update a role.

## translator
- POST /translator/addLanguage/{locale} — addTranslatorLanguage: Add a locale to the site.
- GET /translator/codeSystemTranslations/{locale}/{id} — getCodeSystemTranslations: Fetch the translations of one CodeSystem.
- GET /translator/export/{locale} — exportLocale: Export a locale for offline translation.
- GET /translator/extractTexts/{locale} — extractTexts: Extract translatable strings for a locale.
- GET /translator/getLocale/{locale} — getLocale: Fetch one locale file.
- GET /translator/getLocales — listLocales: List the installed locale files.
- GET /translator/getTranslatedLanguages — listTranslatedLanguages: List locales that already have translations.
- GET /translator/getTranslations/{locale} — getTranslations: Fetch the translations of a locale.
- POST /translator/import/{locale} — importLocale: Import a translated locale file.
- GET /translator/languages — listTranslatorLanguages: List the languages the translator supports.
- GET /translator/translate/{from}/{to} — translateLocale: Machine-translate a locale.
- GET /translator/translate/{from}/{to}/{type} — translateLocaleType: Machine-translate one kind of text in a locale.
- GET /translator/translateAllCodeSystem/{locale} — translateAllCodeSystems: Machine-translate every CodeSystem into a locale.
- GET /translator/translationCount/{from}/{to} — countTranslations: Count the strings to translate between two locales.
- PUT /translator/update — updateTranslations: Save edited translations.
- PUT /translator/updateCodeSystem — updateCodeSystemTranslations: Save edited CodeSystem translations.
