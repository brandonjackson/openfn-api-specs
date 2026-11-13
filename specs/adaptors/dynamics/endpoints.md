# Microsoft Dataverse Web API (dynamics) v9.2

<!-- derived from openapi.json by `pnpm specs index dynamics` — do not edit by hand -->

base: https://{org}.{region}.dynamics.com/api/data/v9.2 | auth: oauth2 (clientCredentials, authorizationCode) | 3304 operations in 606 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Actions
- POST /AddAppComponents — addAppComponents: AddAppComponents action
- POST /AddCertificateCredential — addCertificateCredential: AddCertificateCredential action
- POST /AddComponentsToSolutionAsync — addComponentsToSolutionAsync: AddComponentsToSolutionAsync action
- POST /AddComponentToSolutionAsync — addComponentToSolutionAsync: AddComponentToSolutionAsync action
- POST /AddSolutionComponent — addSolutionComponent: AddSolutionComponent action
- POST /AIClassify — aIClassify: AIClassify action
- POST /AIExtract — aIExtract: AIExtract action
- POST /AIModelPublish — aIModelPublish: AIModelPublish action
- POST /AIReply — aIReply: AIReply action
- POST /AISentiment — aISentiment: AISentiment action
- POST /AISummarize — aISummarize: AISummarize action
- POST /AISummarizeRecord — aISummarizeRecord: AISummarizeRecord action
- POST /AITranslate — aITranslate: AITranslate action
- POST /AlmHandler — almHandler: AlmHandler action
- POST /AnalyzeSentiment — analyzeSentiment: AnalyzeSentiment action
- POST /AppendRelatedParty — appendRelatedParty: AppendRelatedParty action
- POST /ApplyRecordCreationAndUpdateRule — applyRecordCreationAndUpdateRule: ApplyRecordCreationAndUpdateRule action
- POST /AutoMapEntity — autoMapEntity: AutoMapEntity action
- POST /BackgroundSendEmail — backgroundSendEmail: BackgroundSendEmail action
- POST /BatchGetFlowMachineStatus — batchGetFlowMachineStatus: BatchGetFlowMachineStatus action
- POST /BeginMachineImageProvisioning — beginMachineImageProvisioning: BeginMachineImageProvisioning action
- POST /Book — book: Book action
- POST /BulkDelete — bulkDelete: BulkDelete action
- POST /BulkDetectDuplicates — bulkDetectDuplicates: BulkDetectDuplicates action
- POST /BulkRemoveActiveCustomizationsAsync — bulkRemoveActiveCustomizationsAsync: BulkRemoveActiveCustomizationsAsync action
- POST /BulkRetain — bulkRetain: BulkRetain action
- POST /CalculatePrice — calculatePrice: CalculatePrice action
- POST /CanBeReferenced — canBeReferenced: CanBeReferenced action
- POST /CanBeReferencing — canBeReferencing: CanBeReferencing action
- POST /CanManyToMany — canManyToMany: CanManyToMany action
- POST /CardCreateClone — cardCreateClone: CardCreateClone action
- POST /CardGetFullJson — cardGetFullJson: CardGetFullJson action
- POST /cascadeAsync_SuccessAPI — cascadeAsync_SuccessAPI: cascadeAsync_SuccessAPI action
- POST /CategorizeText — categorizeText: CategorizeText action
- POST /CloneAsPatch — cloneAsPatch: CloneAsPatch action
- POST /CloneAsSolution — cloneAsSolution: CloneAsSolution action
- POST /CommitAnnotationBlocksUpload — commitAnnotationBlocksUpload: CommitAnnotationBlocksUpload action
- POST /CommitAttachmentBlocksUpload — commitAttachmentBlocksUpload: CommitAttachmentBlocksUpload action
- POST /CommitFileBlocksUpload — commitFileBlocksUpload: CommitFileBlocksUpload action
- POST /CommitToGit — commitToGit: CommitToGit action
- POST /CompoundUpdateDuplicateDetectionRule — compoundUpdateDuplicateDetectionRule: CompoundUpdateDuplicateDetectionRule action
- POST /ConnectToGit — connectToGit: ConnectToGit action
- POST /CreateAndSendNewEmail — createAndSendNewEmail: CreateAndSendNewEmail action
- POST /CreateAsyncJobToRevokeInheritedAccess — createAsyncJobToRevokeInheritedAccess: CreateAsyncJobToRevokeInheritedAccess action
- POST /CreateCustomerRelationships — createCustomerRelationships: CreateCustomerRelationships action
- POST /CreateHostedFlowMachineGroup — createHostedFlowMachineGroup: CreateHostedFlowMachineGroup action
- POST /CreateInstance — createInstance: CreateInstance action
- POST /CreateKnowledgeArticleTranslation — createKnowledgeArticleTranslation: CreateKnowledgeArticleTranslation action
- POST /CreateKnowledgeArticleVersion — createKnowledgeArticleVersion: CreateKnowledgeArticleVersion action
- POST /{entitySetName}/Microsoft.Dynamics.CRM.CreateMultiple — createMultipleBound: CreateMultiple action
- POST /CreateNPSUserRating — createNPSUserRating: CreateNPSUserRating action
- POST /CreatePolymorphicLookupAttribute — createPolymorphicLookupAttribute: CreatePolymorphicLookupAttribute action
- POST /CreateRpaBox — createRpaBox: CreateRpaBox action
- POST /CreateVirtualConnectorTable — createVirtualConnectorTable: CreateVirtualConnectorTable action
- POST /DeactivateEntityKey — deactivateEntityKey: DeactivateEntityKey action
- POST /DeleteAndPromote — deleteAndPromote: DeleteAndPromote action
- POST /DeleteAndPromoteAsync — deleteAndPromoteAsync: DeleteAndPromoteAsync action
- POST /DeleteAuditData — deleteAuditData: DeleteAuditData action
- POST /DeleteFile — deleteFile: DeleteFile action
- POST /{entitySetName}/Microsoft.Dynamics.CRM.DeleteMultiple — deleteMultipleBound: DeleteMultiple action
- POST /DeleteOpenInstances — deleteOpenInstances: DeleteOpenInstances action
- POST /DeleteOptionValue — deleteOptionValue: DeleteOptionValue action
- POST /DeleteRecordChangeHistory — deleteRecordChangeHistory: DeleteRecordChangeHistory action
- POST /DeprovisionLanguage — deprovisionLanguage: DeprovisionLanguage action
- POST /DetectLanguage — detectLanguage: DetectLanguage action
- POST /DisconnectFromGit — disconnectFromGit: DisconnectFromGit action
- POST /DiscoverFabricAISkills — discoverFabricAISkills: DiscoverFabricAISkills action
- POST /DiscoverFabricWorkspaces — discoverFabricWorkspaces: DiscoverFabricWorkspaces action
- POST /DownloadBlock — downloadBlock: DownloadBlock action
- POST /DownloadSolutionExportData — downloadSolutionExportData: DownloadSolutionExportData action
- POST /EmptyRecycleBin — emptyRecycleBin: EmptyRecycleBin action
- POST /ExportRetainedData — exportRetainedData: ExportRetainedData action
- POST /ExportSolution — exportSolution: ExportSolution action
- POST /ExportSolutionAsync — exportSolutionAsync: ExportSolutionAsync action
- POST /ExportSolutionFromGit — exportSolutionFromGit: ExportSolutionFromGit action
- POST /ExportSolutionFromGitAsync — exportSolutionFromGitAsync: ExportSolutionFromGitAsync action
- POST /ExtractKeyPhrases — extractKeyPhrases: ExtractKeyPhrases action
- POST /ExtractTextEntities — extractTextEntities: ExtractTextEntities action
- POST /FormPredict — formPredict: FormPredict action
- POST /FullTextSearchKnowledgeArticle — fullTextSearchKnowledgeArticle: FullTextSearchKnowledgeArticle action
- POST /GenerateSharedLink — generateSharedLink: GenerateSharedLink action
- POST /GetAuditStorageDetails — getAuditStorageDetails: GetAuditStorageDetails action
- POST /GetAutoNumberSeed — getAutoNumberSeed: GetAutoNumberSeed action
- POST /GetCertificateCredential — getCertificateCredential: GetCertificateCredential action
- POST /GetEntityLinkChatConfig — getEntityLinkChatConfig: GetEntityLinkChatConfig action
- POST /GetJobStatus — getJobStatus: GetJobStatus action
- POST /GetLinkedChats — getLinkedChats: GetLinkedChats action
- POST /GetNextAutoNumberValue — getNextAutoNumberValue: GetNextAutoNumberValue action
- POST /GetOrCreateSharedWorkspace — getOrCreateSharedWorkspace: GetOrCreateSharedWorkspace action
- POST /GetTrackingTokenEmail — getTrackingTokenEmail: GetTrackingTokenEmail action
- POST /GrantAccess — grantAccess: GrantAccess action
- POST /GrantDelegatedAccess — grantDelegatedAccess: GrantDelegatedAccess action
- POST /ImmediateBook — immediateBook: ImmediateBook action
- POST /ImportCardTypeSchema — importCardTypeSchema: ImportCardTypeSchema action
- POST /ImportFieldTranslation — importFieldTranslation: ImportFieldTranslation action
- POST /ImportMappingsImportMap — importMappingsImportMap: ImportMappingsImportMap action
- POST /ImportSolution — importSolution: ImportSolution action
- POST /ImportSolutionAsync — importSolutionAsync: ImportSolutionAsync action
- POST /ImportTranslation — importTranslation: ImportTranslation action
- POST /ImportTranslationAsync — importTranslationAsync: ImportTranslationAsync action
- POST /InitializeAnnotationBlocksDownload — initializeAnnotationBlocksDownload: InitializeAnnotationBlocksDownload action
- POST /InitializeAnnotationBlocksUpload — initializeAnnotationBlocksUpload: InitializeAnnotationBlocksUpload action
- POST /InitializeAttachmentBlocksDownload — initializeAttachmentBlocksDownload: InitializeAttachmentBlocksDownload action
- POST /InitializeAttachmentBlocksUpload — initializeAttachmentBlocksUpload: InitializeAttachmentBlocksUpload action
- POST /InitializeFileBlocksDownload — initializeFileBlocksDownload: InitializeFileBlocksDownload action
- POST /InitializeFileBlocksUpload — initializeFileBlocksUpload: InitializeFileBlocksUpload action
- POST /InsertOptionValue — insertOptionValue: InsertOptionValue action
- POST /InsertStatusValue — insertStatusValue: InsertStatusValue action
- POST /InstallSampleData — installSampleData: InstallSampleData action
- POST /InstantiateTemplate — instantiateTemplate: InstantiateTemplate action
- POST /IsPaiEnabled — isPaiEnabled: IsPaiEnabled action
- POST /IsPmEnabled — isPmEnabled: IsPmEnabled action
- POST /JoinLinkedChat — joinLinkedChat: JoinLinkedChat action
- POST /Merge — merge: Merge action
- POST /ModifyAccess — modifyAccess: ModifyAccess action
- POST /msdyn_checkKnowledgeManagementAgent — msdyn_checkKnowledgeManagementAgent: msdyn_checkKnowledgeManagementAgent action
- POST /msdyn_DeleteCalendar — msdyn_DeleteCalendar: msdyn_DeleteCalendar action
- POST /msdyn_FixSLARelationshipsOnTargetEntities — msdyn_FixSLARelationshipsOnTargetEntities: msdyn_FixSLARelationshipsOnTargetEntities action
- POST /msdyn_GetKAObjectFromTemplate — msdyn_GetKAObjectFromTemplate: msdyn_GetKAObjectFromTemplate action
- POST /msdyn_knowledgeHarvestAgentTriggerForMCP — msdyn_knowledgeHarvestAgentTriggerForMCP: msdyn_knowledgeHarvestAgentTriggerForMCP action
- POST /msdyn_LoadCalendars — msdyn_LoadCalendars: msdyn_LoadCalendars action
- POST /msdyn_ManageSLAInstances — msdyn_ManageSLAInstances: msdyn_ManageSLAInstances action
- POST /msdyn_MigrateSlaProactiveRun — msdyn_MigrateSlaProactiveRun: msdyn_MigrateSlaProactiveRun action
- POST /msdyn_SaveCalendar — msdyn_SaveCalendar: msdyn_SaveCalendar action
- POST /msdyn_SendEmailFromTemplate — msdyn_SendEmailFromTemplate: msdyn_SendEmailFromTemplate action
- POST /msdyn_SLACustomTimeCalculationTemplate — msdyn_SLACustomTimeCalculationTemplate: msdyn_SLACustomTimeCalculationTemplate action
- POST /msdyn_SLATimeCalculation — msdyn_SLATimeCalculation: msdyn_SLATimeCalculation action
- POST /msdyn_TriggerIntegratedSearchAnalytics — msdyn_TriggerIntegratedSearchAnalytics: msdyn_TriggerIntegratedSearchAnalytics action
- POST /msdyn_triggerRecurringHarvestRuns — msdyn_triggerRecurringHarvestRuns: msdyn_triggerRecurringHarvestRuns action
- POST /msft_LabelAttributeMapping — msft_LabelAttributeMapping: msft_LabelAttributeMapping action
- POST /NotifyEnvironmentVariableSecretChange — notifyEnvironmentVariableSecretChange: NotifyEnvironmentVariableSecretChange action
- POST /OnBackgroundOperationComplete — onBackgroundOperationComplete: OnBackgroundOperationComplete action
- POST /OnExternalCreated — onExternalCreated: OnExternalCreated action
- POST /OnExternalDeleted — onExternalDeleted: OnExternalDeleted action
- POST /OnExternalUpdated — onExternalUpdated: OnExternalUpdated action
- POST /OrderOption — orderOption: OrderOption action
- POST /pm_CreateProcess — pm_CreateProcess: pm_CreateProcess action
- POST /pm_RefreshProcessMiningLicensingCapacity — pm_RefreshProcessMiningLicensingCapacity: pm_RefreshProcessMiningLicensingCapacity action
- POST /ProvisionDelegation — provisionDelegation: ProvisionDelegation action
- POST /ProvisionLanguage — provisionLanguage: ProvisionLanguage action
- POST /ProvisionLanguageAsync — provisionLanguageAsync: ProvisionLanguageAsync action
- POST /PublishAllXml — publishAllXml: PublishAllXml action
- POST /PublishAllXmlAsync — publishAllXmlAsync: PublishAllXmlAsync action
- POST /PublishXml — publishXml: PublishXml action
- POST /PullChangesFromGit — pullChangesFromGit: PullChangesFromGit action
- POST /PullChangesFromGitAsync — pullChangesFromGitAsync: PullChangesFromGitAsync action
- POST /PurgeRetainedContent — purgeRetainedContent: PurgeRetainedContent action
- POST /PvaGetFeatureControlSet — pvaGetFeatureControlSet: PvaGetFeatureControlSet action
- POST /PvaGetMaxDatabaseVersion — pvaGetMaxDatabaseVersion: PvaGetMaxDatabaseVersion action
- POST /PvaGetUserBots — pvaGetUserBots: PvaGetUserBots action
- POST /PvaStartConversation — pvaStartConversation: PvaStartConversation action
- POST /QueryDvUnstructuredData — queryDvUnstructuredData: QueryDvUnstructuredData action
- POST /QueryExpressionToFetchXml — queryExpressionToFetchXml: QueryExpressionToFetchXml action
- POST /QuerySalesforceUnstructuredData — querySalesforceUnstructuredData: QuerySalesforceUnstructuredData action
- POST /QueryZendeskUnstructuredArticles — queryZendeskUnstructuredArticles: QueryZendeskUnstructuredArticles action
- POST /QuestionAnalytics — questionAnalytics: QuestionAnalytics action
- POST /QueueUpdateRibbonClientMetadata — queueUpdateRibbonClientMetadata: QueueUpdateRibbonClientMetadata action
- POST /ReactivateEntityKey — reactivateEntityKey: ReactivateEntityKey action
- POST /ReassignObjectsOwner — reassignObjectsOwner: ReassignObjectsOwner action
- POST /RecognizeText — recognizeText: RecognizeText action
- POST /RefreshChangesFromGit — refreshChangesFromGit: RefreshChangesFromGit action
- POST /RefreshRpaLicensingCapacity — refreshRpaLicensingCapacity: RefreshRpaLicensingCapacity action
- POST /RegisterFlowMachine — registerFlowMachine: RegisterFlowMachine action
- POST /RemoveActiveCustomization — removeActiveCustomization: RemoveActiveCustomization action
- POST /RemoveAppComponents — removeAppComponents: RemoveAppComponents action
- POST /RemoveCertificateCredential — removeCertificateCredential: RemoveCertificateCredential action
- POST /RemoveParent — removeParent: RemoveParent action
- POST /RemoveSolutionComponent — removeSolutionComponent: RemoveSolutionComponent action
- POST /Reschedule — reschedule: Reschedule action
- POST /ResetUserFilters — resetUserFilters: ResetUserFilters action
- POST /Restore — restore: Restore action
- POST /Retain — retain: Retain action
- POST /RetrieveAppsWithDelegatedAccessPermissions — retrieveAppsWithDelegatedAccessPermissions: RetrieveAppsWithDelegatedAccessPermissions action
- POST /RetrieveEnvironmentVariableSecretValue — retrieveEnvironmentVariableSecretValue: RetrieveEnvironmentVariableSecretValue action
- POST /RevokeAccess — revokeAccess: RevokeAccess action
- POST /RevokeSharedLink — revokeSharedLink: RevokeSharedLink action
- POST /RollbackRetain — rollbackRetain: RollbackRetain action
- POST /RouteTo — routeTo: RouteTo action
- POST /SaveSettingValue — saveSettingValue: SaveSettingValue action
- POST /searchautocomplete — searchautocomplete: searchautocomplete action
- POST /searchquery — searchquery: searchquery action
- POST /searchsuggest — searchsuggest: searchsuggest action
- POST /SendAppNotification — sendAppNotification: SendAppNotification action
- POST /SendBulkMail — sendBulkMail: SendBulkMail action
- POST /SendEmailFromTemplate — sendEmailFromTemplate: SendEmailFromTemplate action
- POST /SendFax — sendFax: SendFax action
- POST /SendTemplate — sendTemplate: SendTemplate action
- POST /SetAutoNumberSeed — setAutoNumberSeed: SetAutoNumberSeed action
- POST /SetDataEncryptionKey — setDataEncryptionKey: SetDataEncryptionKey action
- POST /SetFeatureStatus — setFeatureStatus: SetFeatureStatus action
- POST /SetLocLabels — setLocLabels: SetLocLabels action
- POST /SetPreferredSolution — setPreferredSolution: SetPreferredSolution action
- POST /SetProcess — setProcess: SetProcess action
- POST /SetReportRelated — setReportRelated: SetReportRelated action
- POST /SetupAiConnection — setupAiConnection: SetupAiConnection action
- POST /StageAndUpgrade — stageAndUpgrade: StageAndUpgrade action
- POST /StageAndUpgradeAsync — stageAndUpgradeAsync: StageAndUpgradeAsync action
- POST /StageSolution — stageSolution: StageSolution action
- POST /SubstituteForAttribute — substituteForAttribute: SubstituteForAttribute action
- POST /SubstituteForComponent — substituteForComponent: SubstituteForComponent action
- POST /SummarizeRecord — summarizeRecord: SummarizeRecord action
- POST /SyncBulkOperation — syncBulkOperation: SyncBulkOperation action
- POST /TransformImport — transformImport: TransformImport action
- POST /UninstallSampleData — uninstallSampleData: UninstallSampleData action
- POST /UninstallSolution — uninstallSolution: UninstallSolution action
- POST /UninstallSolutionAsync — uninstallSolutionAsync: UninstallSolutionAsync action
- POST /UnpublishDuplicateRule — unpublishDuplicateRule: UnpublishDuplicateRule action
- POST /UpdateFeatureConfig — updateFeatureConfig: UpdateFeatureConfig action
- POST /{entitySetName}/Microsoft.Dynamics.CRM.UpdateMultiple — updateMultipleBound: UpdateMultiple action
- POST /UpdateOptionValue — updateOptionValue: UpdateOptionValue action
- POST /UpdateSolutionComponent — updateSolutionComponent: UpdateSolutionComponent action
- POST /UpdateStateValue — updateStateValue: UpdateStateValue action
- POST /UploadBlock — uploadBlock: UploadBlock action
- POST /UpsertCompositeDataSource — upsertCompositeDataSource: UpsertCompositeDataSource action
- POST /UpsertEnvironmentVariable — upsertEnvironmentVariable: UpsertEnvironmentVariable action
- POST /{entitySetName}/Microsoft.Dynamics.CRM.UpsertMultiple — upsertMultipleBound: UpsertMultiple action
- POST /Validate — validate: Validate action
- POST /ValidateAIConfiguration — validateAIConfiguration: ValidateAIConfiguration action
- POST /ValidateRetentionConfig — validateRetentionConfig: ValidateRetentionConfig action
- POST /ValidateUnpublished — validateUnpublished: ValidateUnpublished action

## Functions
- GET /CalculateRollupField(Target=@Target,FieldName=@FieldName) — calculateRollupField: CalculateRollupField function
- GET /CheckIncomingEmail(MessageId=@MessageId,Subject=@Subject,From=@From,To=@To,Cc=@Cc,Bcc=@Bcc,ExtraProperties=@ExtraProperties) — checkIncomingEmail: CheckIncomingEmail function
- GET /CheckPromoteEmail(MessageId=@MessageId,Subject=@Subject,DirectionCode=@DirectionCode) — checkPromoteEmail: CheckPromoteEmail function
- GET /ExecuteCosmosSqlQuery(QueryText=@QueryText,EntityLogicalName=@EntityLogicalName,QueryParameters=@QueryParameters,PageSize=@PageSize,PagingCookie=@PagingCookie,PartitionId=@PartitionId) — executeCosmosSqlQuery: ExecuteCosmosSqlQuery function
- GET /ExportFieldTranslation() — exportFieldTranslation: ExportFieldTranslation function
- GET /FetchXmlToQueryExpression(FetchXml=@FetchXml) — fetchXmlToQueryExpression: FetchXmlToQueryExpression function
- GET /FormatAddress(Line1=@Line1,City=@City,StateOrProvince=@StateOrProvince,PostalCode=@PostalCode,Country=@Country) — formatAddress: FormatAddress function
- GET /GetComponentManagedIdentityFIC(ComponentName=@ComponentName,ComponentId=@ComponentId) — getComponentManagedIdentityFIC: GetComponentManagedIdentityFIC function
- GET /GetFileSasUrl(Target=@Target,FileAttributeName=@FileAttributeName,DataSource=@DataSource) — getFileSasUrl: GetFileSasUrl function
- GET /GetHostedRpaCapacity() — getHostedRpaCapacity: GetHostedRpaCapacity function
- GET /GetPreferredSolution() — getPreferredSolution: GetPreferredSolution function
- GET /GetTimeZoneCodeByLocalizedName(LocalizedStandardName=@LocalizedStandardName,LocaleId=@LocaleId) — getTimeZoneCodeByLocalizedName: GetTimeZoneCodeByLocalizedName function
- GET /GetValidManyToMany() — getValidManyToMany: GetValidManyToMany function
- GET /GetValidReferencedEntities(ReferencingEntityName=@ReferencingEntityName) — getValidReferencedEntities: GetValidReferencedEntities function
- GET /GetValidReferencingEntities(ReferencedEntityName=@ReferencedEntityName) — getValidReferencingEntities: GetValidReferencingEntities function
- GET /IncrementKnowledgeArticleViewCount(Source=@Source,ViewDate=@ViewDate,Location=@Location,Count=@Count) — incrementKnowledgeArticleViewCount: IncrementKnowledgeArticleViewCount function
- GET /InitializeFrom(EntityMoniker=@EntityMoniker,SkipParentalRelationshipMapping=@SkipParentalRelationshipMapping,TargetEntityName=@TargetEntityName,TargetFieldType=@TargetFieldType,RetrieveConsumableRecord=@RetrieveConsumableRecord) — initializeFrom: InitializeFrom function
- GET /IsComponentCustomizable(ComponentId=@ComponentId,ComponentType=@ComponentType) — isComponentCustomizable: IsComponentCustomizable function
- GET /IsDataEncryptionActive() — isDataEncryptionActive: IsDataEncryptionActive function
- GET /IsValidStateTransition(Entity=@Entity,NewState=@NewState,NewStatus=@NewStatus) — isValidStateTransition: IsValidStateTransition function
- GET /LocalTimeFromUtcTime(TimeZoneCode=@TimeZoneCode,UtcTime=@UtcTime) — localTimeFromUtcTime: LocalTimeFromUtcTime function
- GET /PreferredSolutionUsedBy(SolutionId=@SolutionId) — preferredSolutionUsedBy: PreferredSolutionUsedBy function
- GET /QuerySchedule(ResourceId=@ResourceId,Start=@Start,End=@End,TimeCodes=@TimeCodes) — querySchedule: QuerySchedule function
- GET /ResetInheritedAccess(FetchXml=@FetchXml) — resetInheritedAccess: ResetInheritedAccess function
- GET /RetrieveAadUserPrivileges(DirectoryObjectId=@DirectoryObjectId) — retrieveAadUserPrivileges: RetrieveAadUserPrivileges function
- GET /RetrieveAadUserRoles(DirectoryObjectId=@DirectoryObjectId) — retrieveAadUserRoles: RetrieveAadUserRoles function
- GET /RetrieveAadUserSetOfPrivilegesByIds(DirectoryObjectId=@DirectoryObjectId,PrivilegeIds=@PrivilegeIds) — retrieveAadUserSetOfPrivilegesByIds: RetrieveAadUserSetOfPrivilegesByIds function
- GET /RetrieveAadUserSetOfPrivilegesByNames(DirectoryObjectId=@DirectoryObjectId,PrivilegeNames=@PrivilegeNames) — retrieveAadUserSetOfPrivilegesByNames: RetrieveAadUserSetOfPrivilegesByNames function
- GET /RetrieveAccessOrigin(ObjectId=@ObjectId,LogicalName=@LogicalName,PrincipalId=@PrincipalId) — retrieveAccessOrigin: RetrieveAccessOrigin function
- GET /RetrieveActivePath(ProcessInstanceId=@ProcessInstanceId) — retrieveActivePath: RetrieveActivePath function
- GET /RetrieveAllCompositeDataSources(ParentSchemaName=@ParentSchemaName) — retrieveAllCompositeDataSources: RetrieveAllCompositeDataSources function
- GET /RetrieveAllEntities(EntityFilters=@EntityFilters,RetrieveAsIfPublished=@RetrieveAsIfPublished) — retrieveAllEntities: RetrieveAllEntities function
- GET /RetrieveAnalyticsStoreDetails() — retrieveAnalyticsStoreDetails: RetrieveAnalyticsStoreDetails function
- GET /RetrieveAppComponents(AppModuleId=@AppModuleId) — retrieveAppComponents: RetrieveAppComponents function
- GET /RetrieveApplicationRibbon() — retrieveApplicationRibbon: RetrieveApplicationRibbon function
- GET /RetrieveAttributeChangeHistory(Target=@Target,AttributeLogicalName=@AttributeLogicalName,PagingInfo=@PagingInfo) — retrieveAttributeChangeHistory: RetrieveAttributeChangeHistory function
- GET /RetrieveAuditPartitionList() — retrieveAuditPartitionList: RetrieveAuditPartitionList function
- GET /RetrieveAvailableLanguages() — retrieveAvailableLanguages: RetrieveAvailableLanguages function
- GET /RetrieveCascadeAssignAsyncJobId(ParentEntityId=@ParentEntityId) — retrieveCascadeAssignAsyncJobId: RetrieveCascadeAssignAsyncJobId function
- GET /RetrieveCascadeDeleteAsyncJobId(ParentEntityIds=@ParentEntityIds) — retrieveCascadeDeleteAsyncJobId: RetrieveCascadeDeleteAsyncJobId function
- GET /RetrieveCompositeDataSource(ParentSchemaName=@ParentSchemaName,ChildSchemaName=@ChildSchemaName) — retrieveCompositeDataSource: RetrieveCompositeDataSource function
- GET /RetrieveCurrentOrganization(AccessType=@AccessType) — retrieveCurrentOrganization: RetrieveCurrentOrganization function
- GET /RetrieveDataEncryptionKey() — retrieveDataEncryptionKey: RetrieveDataEncryptionKey function
- GET /RetrieveDependenciesForDelete(ObjectId=@ObjectId,ComponentType=@ComponentType) — retrieveDependenciesForDelete: RetrieveDependenciesForDelete function
- GET /RetrieveDependenciesForUninstall(SolutionUniqueName=@SolutionUniqueName) — retrieveDependenciesForUninstall: RetrieveDependenciesForUninstall function
- GET /RetrieveDependentComponents(ObjectId=@ObjectId,ComponentType=@ComponentType) — retrieveDependentComponents: RetrieveDependentComponents function
- GET /RetrieveDeploymentLicenseType() — retrieveDeploymentLicenseType: RetrieveDeploymentLicenseType function
- GET /RetrieveDeprovisionedLanguages() — retrieveDeprovisionedLanguages: RetrieveDeprovisionedLanguages function
- GET /RetrieveDuplicates(BusinessEntity=@BusinessEntity,MatchingEntityName=@MatchingEntityName,PagingInfo=@PagingInfo) — retrieveDuplicates: RetrieveDuplicates function
- GET /RetrieveEntity(EntityFilters=@EntityFilters,LogicalName=@LogicalName,MetadataId=@MetadataId,RetrieveAsIfPublished=@RetrieveAsIfPublished) — retrieveEntity: RetrieveEntity function
- GET /RetrieveEntityRibbon(EntityName=@EntityName,RibbonLocationFilter=@RibbonLocationFilter) — retrieveEntityRibbon: RetrieveEntityRibbon function
- GET /RetrieveEnvironmentVariables(SchemaNames=@SchemaNames) — retrieveEnvironmentVariables: RetrieveEnvironmentVariables function
- GET /RetrieveEnvironmentVariableValue(DefinitionSchemaName=@DefinitionSchemaName) — retrieveEnvironmentVariableValue: RetrieveEnvironmentVariableValue function
- GET /RetrieveExchangeAppointments(StartDate=@StartDate,EndDate=@EndDate) — retrieveExchangeAppointments: RetrieveExchangeAppointments function
- GET /RetrieveExchangeRate(TransactionCurrencyId=@TransactionCurrencyId) — retrieveExchangeRate: RetrieveExchangeRate function
- GET /RetrieveFinanceAndOperationsIntegrationDetails() — retrieveFinanceAndOperationsIntegrationDetails: RetrieveFinanceAndOperationsIntegrationDetails function
- GET /RetrieveFormattedImportJobResults(ImportJobId=@ImportJobId) — retrieveFormattedImportJobResults: RetrieveFormattedImportJobResults function
- GET /RetrieveInstalledLanguagePacks() — retrieveInstalledLanguagePacks: RetrieveInstalledLanguagePacks function
- GET /RetrieveInstalledLanguagePackVersion(Language=@Language) — retrieveInstalledLanguagePackVersion: RetrieveInstalledLanguagePackVersion function
- GET /RetrieveLicenseInfo(AccessMode=@AccessMode) — retrieveLicenseInfo: RetrieveLicenseInfo function
- GET /RetrieveLocLabels(EntityMoniker=@EntityMoniker,AttributeName=@AttributeName,IncludeUnpublished=@IncludeUnpublished) — retrieveLocLabels: RetrieveLocLabels function
- GET /RetrieveMailboxTrackingFolders(MailboxId=@MailboxId) — retrieveMailboxTrackingFolders: RetrieveMailboxTrackingFolders function
- GET /RetrieveMaskedAttributesForEntity(EntityLogicalName=@EntityLogicalName) — retrieveMaskedAttributesForEntity: RetrieveMaskedAttributesForEntity function
- GET /RetrieveMetadataChanges(Query=@Query,DeletedMetadataFilters=@DeletedMetadataFilters,ClientVersionStamp=@ClientVersionStamp,AppModuleId=@AppModuleId,RetrieveAllSettings=@RetrieveAllSettings) — retrieveMetadataChanges: RetrieveMetadataChanges function
- GET /RetrieveMissingComponents(CustomizationFile=@CustomizationFile) — retrieveMissingComponents: RetrieveMissingComponents function
- GET /RetrieveMissingDependencies(SolutionUniqueName=@SolutionUniqueName) — retrieveMissingDependencies: RetrieveMissingDependencies function
- GET /RetrieveOrganizationInfo() — retrieveOrganizationInfo: RetrieveOrganizationInfo function
- GET /RetrieveOrganizationResources() — retrieveOrganizationResources: RetrieveOrganizationResources function
- GET /RetrieveParsedDataImportFile(ImportFileId=@ImportFileId,PagingInfo=@PagingInfo) — retrieveParsedDataImportFile: RetrieveParsedDataImportFile function
- GET /RetrieveProcessInstances(EntityId=@EntityId,EntityLogicalName=@EntityLogicalName) — retrieveProcessInstances: RetrieveProcessInstances function
- GET /RetrieveProvisionedLanguagePackVersion(Language=@Language) — retrieveProvisionedLanguagePackVersion: RetrieveProvisionedLanguagePackVersion function
- GET /RetrieveProvisionedLanguages() — retrieveProvisionedLanguages: RetrieveProvisionedLanguages function
- GET /RetrieveRecordChangeHistory(Target=@Target,PagingInfo=@PagingInfo) — retrieveRecordChangeHistory: RetrieveRecordChangeHistory function
- GET /RetrieveRequiredComponents(ObjectId=@ObjectId,ComponentType=@ComponentType) — retrieveRequiredComponents: RetrieveRequiredComponents function
- GET /RetrieveRolePrivilegesRole(RoleId=@RoleId) — retrieveRolePrivilegesRole: RetrieveRolePrivilegesRole function
- GET /RetrieveSetting(AppUniqueName=@AppUniqueName,SettingName=@SettingName) — retrieveSetting: RetrieveSetting function
- GET /RetrieveSharedLinks(Target=@Target) — retrieveSharedLinks: RetrieveSharedLinks function
- GET /RetrieveSharedPrincipalsAndAccess(Target=@Target) — retrieveSharedPrincipalsAndAccess: RetrieveSharedPrincipalsAndAccess function
- GET /RetrieveTimestamp() — retrieveTimestamp: RetrieveTimestamp function
- GET /RetrieveTotalRecordCount(EntityNames=@EntityNames) — retrieveTotalRecordCount: RetrieveTotalRecordCount function
- GET /RetrieveVersion() — retrieveVersion: RetrieveVersion function
- GET /Rollup(Target=@Target,Query=@Query,RollupType=@RollupType) — rollup: Rollup function
- GET /Search(AppointmentRequest=@AppointmentRequest) — search: Search function
- GET /searchstatistics() — searchstatistics: searchstatistics function
- GET /searchstatus() — searchstatus: searchstatus function
- GET /ValidateApp(AppModuleId=@AppModuleId) — validateApp: ValidateApp function
- GET /ValidateFetchXmlExpression(FetchXml=@FetchXml) — validateFetchXmlExpression: ValidateFetchXmlExpression function
- GET /ValidateRecurrenceRule(Target=@Target) — validateRecurrenceRule: ValidateRecurrenceRule function
- GET /WhoAmI() — whoAmI: WhoAmI function

## Metadata
- GET /EntityDefinitions — listEntityDefinitions: List EntityDefinitions
- POST /EntityDefinitions — createEntityDefinition: Create a definition in EntityDefinitions
- GET /EntityDefinitions({MetadataId}) — getEntityDefinition: Retrieve a definition from EntityDefinitions
- PUT /EntityDefinitions({MetadataId}) — updateEntityDefinition: Update a definition in EntityDefinitions
- DELETE /EntityDefinitions({MetadataId}) — deleteEntityDefinition: Delete a definition from EntityDefinitions
- GET /RelationshipDefinitions — listRelationshipDefinitions: List RelationshipDefinitions
- POST /RelationshipDefinitions — createRelationshipDefinition: Create a definition in RelationshipDefinitions
- GET /RelationshipDefinitions({MetadataId}) — getRelationshipDefinition: Retrieve a definition from RelationshipDefinitions
- PUT /RelationshipDefinitions({MetadataId}) — updateRelationshipDefinition: Update a definition in RelationshipDefinitions
- DELETE /RelationshipDefinitions({MetadataId}) — deleteRelationshipDefinition: Delete a definition from RelationshipDefinitions
- GET /GlobalOptionSetDefinitions — listGlobalOptionSetDefinitions: List GlobalOptionSetDefinitions
- POST /GlobalOptionSetDefinitions — createGlobalOptionSetDefinition: Create a definition in GlobalOptionSetDefinitions
- GET /GlobalOptionSetDefinitions({MetadataId}) — getGlobalOptionSetDefinition: Retrieve a definition from GlobalOptionSetDefinitions
- PUT /GlobalOptionSetDefinitions({MetadataId}) — updateGlobalOptionSetDefinition: Update a definition in GlobalOptionSetDefinitions
- DELETE /GlobalOptionSetDefinitions({MetadataId}) — deleteGlobalOptionSetDefinition: Delete a definition from GlobalOptionSetDefinitions
- GET /EntityDefinitions(LogicalName='{logicalName}')/Attributes — listEntityAttributes: List a table's column definitions

## OData
- GET /$metadata — getMetadata: Get the CSDL $metadata document
- POST /$batch — executeBatch: Execute a batch of requests

## aaduser
- GET /aadusers — listAadusers: List aadusers
- POST /aadusers — createAaduser: Create an aaduser
- GET /aadusers({aaduserid}) — getAaduser: Retrieve an aaduser
- PATCH /aadusers({aaduserid}) — updateAaduser: Update (or upsert) an aaduser
- DELETE /aadusers({aaduserid}) — deleteAaduser: Delete an aaduser

## account
- GET /accounts — listAccounts: List accounts
- POST /accounts — createAccount: Create an account
- GET /accounts({accountid}) — getAccount: Retrieve an account
- PATCH /accounts({accountid}) — updateAccount: Update (or upsert) an account
- DELETE /accounts({accountid}) — deleteAccount: Delete an account

## aciviewmapper
- GET /aciviewmappers — listAciviewmappers: List aciviewmappers
- POST /aciviewmappers — createAciviewmapper: Create an aciviewmapper
- GET /aciviewmappers({aciviewmapperid}) — getAciviewmapper: Retrieve an aciviewmapper
- PATCH /aciviewmappers({aciviewmapperid}) — updateAciviewmapper: Update (or upsert) an aciviewmapper
- DELETE /aciviewmappers({aciviewmapperid}) — deleteAciviewmapper: Delete an aciviewmapper

## actioncard
- GET /actioncards — listActioncards: List actioncards
- POST /actioncards — createActioncard: Create an actioncard
- GET /actioncards({actioncardid}) — getActioncard: Retrieve an actioncard
- PATCH /actioncards({actioncardid}) — updateActioncard: Update (or upsert) an actioncard
- DELETE /actioncards({actioncardid}) — deleteActioncard: Delete an actioncard

## actioncarduserstate
- GET /actioncarduserstates — listActioncarduserstates: List actioncarduserstates
- POST /actioncarduserstates — createActioncarduserstate: Create an actioncarduserstate
- GET /actioncarduserstates({actioncarduserstateid}) — getActioncarduserstate: Retrieve an actioncarduserstate
- PATCH /actioncarduserstates({actioncarduserstateid}) — updateActioncarduserstate: Update (or upsert) an actioncarduserstate
- DELETE /actioncarduserstates({actioncarduserstateid}) — deleteActioncarduserstate: Delete an actioncarduserstate

## activityfileattachment
- GET /activityfileattachments — listActivityfileattachments: List activityfileattachments
- POST /activityfileattachments — createActivityfileattachment: Create an activityfileattachment
- GET /activityfileattachments({activityfileattachmentid}) — getActivityfileattachment: Retrieve an activityfileattachment
- PATCH /activityfileattachments({activityfileattachmentid}) — updateActivityfileattachment: Update (or upsert) an activityfileattachment
- DELETE /activityfileattachments({activityfileattachmentid}) — deleteActivityfileattachment: Delete an activityfileattachment

## activitymimeattachment
- GET /activitymimeattachments — listActivitymimeattachments: List activitymimeattachments
- POST /activitymimeattachments — createActivitymimeattachment: Create an activitymimeattachment
- GET /activitymimeattachments({activitymimeattachmentid}) — getActivitymimeattachment: Retrieve an activitymimeattachment
- PATCH /activitymimeattachments({activitymimeattachmentid}) — updateActivitymimeattachment: Update (or upsert) an activitymimeattachment
- DELETE /activitymimeattachments({activitymimeattachmentid}) — deleteActivitymimeattachment: Delete an activitymimeattachment

## activityparty
- GET /activityparties — listActivityparties: List activityparties

## activitypointer
- GET /activitypointers — listActivitypointers: List activitypointers
- GET /activitypointers({activityid}) — getActivitypointer: Retrieve an activitypointer
- GET /activitypointers/Microsoft.Dynamics.CRM.RetrieveTimelineWallRecords(FetchXml=@FetchXml,Target=@Target,RollupType=@RollupType) — retrieveTimelineWallRecordsOnActivitypointer: RetrieveTimelineWallRecords function

## adx_externalidentity
- GET /adx_externalidentities — listAdx_externalidentities: List adx_externalidentities
- POST /adx_externalidentities — createAdx_externalidentity: Create an adx_externalidentity
- GET /adx_externalidentities({adx_externalidentityid}) — getAdx_externalidentity: Retrieve an adx_externalidentity
- PATCH /adx_externalidentities({adx_externalidentityid}) — updateAdx_externalidentity: Update (or upsert) an adx_externalidentity
- DELETE /adx_externalidentities({adx_externalidentityid}) — deleteAdx_externalidentity: Delete an adx_externalidentity

## adx_invitation
- GET /adx_invitations — listAdx_invitations: List adx_invitations
- POST /adx_invitations — createAdx_invitation: Create an adx_invitation
- GET /adx_invitations({adx_invitationid}) — getAdx_invitation: Retrieve an adx_invitation
- PATCH /adx_invitations({adx_invitationid}) — updateAdx_invitation: Update (or upsert) an adx_invitation
- DELETE /adx_invitations({adx_invitationid}) — deleteAdx_invitation: Delete an adx_invitation

## adx_inviteredemption
- GET /adx_inviteredemptions — listAdx_inviteredemptions: List adx_inviteredemptions
- POST /adx_inviteredemptions — createAdx_inviteredemption: Create an adx_inviteredemption
- GET /adx_inviteredemptions({activityid}) — getAdx_inviteredemption: Retrieve an adx_inviteredemption
- PATCH /adx_inviteredemptions({activityid}) — updateAdx_inviteredemption: Update (or upsert) an adx_inviteredemption
- DELETE /adx_inviteredemptions({activityid}) — deleteAdx_inviteredemption: Delete an adx_inviteredemption

## adx_portalcomment
- GET /adx_portalcomments — listAdx_portalcomments: List adx_portalcomments
- POST /adx_portalcomments — createAdx_portalcomment: Create an adx_portalcomment
- GET /adx_portalcomments({activityid}) — getAdx_portalcomment: Retrieve an adx_portalcomment
- PATCH /adx_portalcomments({activityid}) — updateAdx_portalcomment: Update (or upsert) an adx_portalcomment
- DELETE /adx_portalcomments({activityid}) — deleteAdx_portalcomment: Delete an adx_portalcomment

## adx_setting
- GET /adx_settings — listAdx_settings: List adx_settings
- POST /adx_settings — createAdx_setting: Create an adx_setting
- GET /adx_settings({adx_settingid}) — getAdx_setting: Retrieve an adx_setting
- PATCH /adx_settings({adx_settingid}) — updateAdx_setting: Update (or upsert) an adx_setting
- DELETE /adx_settings({adx_settingid}) — deleteAdx_setting: Delete an adx_setting

## adx_webformsession
- GET /adx_webformsessions — listAdx_webformsessions: List adx_webformsessions
- POST /adx_webformsessions — createAdx_webformsession: Create an adx_webformsession
- GET /adx_webformsessions({adx_webformsessionid}) — getAdx_webformsession: Retrieve an adx_webformsession
- PATCH /adx_webformsessions({adx_webformsessionid}) — updateAdx_webformsession: Update (or upsert) an adx_webformsession
- DELETE /adx_webformsessions({adx_webformsessionid}) — deleteAdx_webformsession: Delete an adx_webformsession

## agentfeeditem
- GET /agentfeeditems — listAgentfeeditems: List agentfeeditems
- POST /agentfeeditems — createAgentfeeditem: Create an agentfeeditem
- GET /agentfeeditems({agentfeeditemid}) — getAgentfeeditem: Retrieve an agentfeeditem
- PATCH /agentfeeditems({agentfeeditemid}) — updateAgentfeeditem: Update (or upsert) an agentfeeditem
- DELETE /agentfeeditems({agentfeeditemid}) — deleteAgentfeeditem: Delete an agentfeeditem

## agenticscenario
- GET /agenticscenarios — listAgenticscenarios: List agenticscenarios
- POST /agenticscenarios — createAgenticscenario: Create an agenticscenario
- GET /agenticscenarios({agenticscenarioid}) — getAgenticscenario: Retrieve an agenticscenario
- PATCH /agenticscenarios({agenticscenarioid}) — updateAgenticscenario: Update (or upsert) an agenticscenario
- DELETE /agenticscenarios({agenticscenarioid}) — deleteAgenticscenario: Delete an agenticscenario

## agentprompt
- GET /agentprompts — listAgentprompts: List agentprompts
- POST /agentprompts — createAgentprompt: Create an agentprompt
- GET /agentprompts({agentpromptid}) — getAgentprompt: Retrieve an agentprompt
- PATCH /agentprompts({agentpromptid}) — updateAgentprompt: Update (or upsert) an agentprompt
- DELETE /agentprompts({agentpromptid}) — deleteAgentprompt: Delete an agentprompt

## agentrule
- GET /agentrules — listAgentrules: List agentrules
- POST /agentrules — createAgentrule: Create an agentrule
- GET /agentrules({agentruleid}) — getAgentrule: Retrieve an agentrule
- PATCH /agentrules({agentruleid}) — updateAgentrule: Update (or upsert) an agentrule
- DELETE /agentrules({agentruleid}) — deleteAgentrule: Delete an agentrule

## aicopilot
- GET /aicopilots — listAicopilots: List aicopilots
- POST /aicopilots — createAicopilot: Create an aicopilot
- GET /aicopilots({aicopilotid}) — getAicopilot: Retrieve an aicopilot
- PATCH /aicopilots({aicopilotid}) — updateAicopilot: Update (or upsert) an aicopilot
- DELETE /aicopilots({aicopilotid}) — deleteAicopilot: Delete an aicopilot

## aicopilot_aiplugin
- GET /aicopilot_aipluginset — listAicopilot_aipluginset: List aicopilot_aipluginset

## aiplugin
- GET /aiplugins — listAiplugins: List aiplugins
- POST /aiplugins — createAiplugin: Create an aiplugin
- GET /aiplugins({aipluginid}) — getAiplugin: Retrieve an aiplugin
- PATCH /aiplugins({aipluginid}) — updateAiplugin: Update (or upsert) an aiplugin
- DELETE /aiplugins({aipluginid}) — deleteAiplugin: Delete an aiplugin
- GET /aiplugins({aipluginid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAiplugin: RetrieveUnpublished function
- GET /aiplugins/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAiplugin: RetrieveUnpublishedMultiple function

## aipluginauth
- GET /aipluginauths — listAipluginauths: List aipluginauths
- POST /aipluginauths — createAipluginauth: Create an aipluginauth
- GET /aipluginauths({aipluginauthid}) — getAipluginauth: Retrieve an aipluginauth
- PATCH /aipluginauths({aipluginauthid}) — updateAipluginauth: Update (or upsert) an aipluginauth
- DELETE /aipluginauths({aipluginauthid}) — deleteAipluginauth: Delete an aipluginauth

## aipluginconversationstarter
- GET /aipluginconversationstarters — listAipluginconversationstarters: List aipluginconversationstarters
- POST /aipluginconversationstarters — createAipluginconversationstarter: Create an aipluginconversationstarter
- GET /aipluginconversationstarters({aipluginconversationstarterid}) — getAipluginconversationstarter: Retrieve an aipluginconversationstarter
- PATCH /aipluginconversationstarters({aipluginconversationstarterid}) — updateAipluginconversationstarter: Update (or upsert) an aipluginconversationstarter
- DELETE /aipluginconversationstarters({aipluginconversationstarterid}) — deleteAipluginconversationstarter: Delete an aipluginconversationstarter
- GET /aipluginconversationstarters({aipluginconversationstarterid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAipluginconversationstarter: RetrieveUnpublished function
- GET /aipluginconversationstarters/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAipluginconversationstarter: RetrieveUnpublishedMultiple function

## aipluginconversationstartermapping
- GET /aipluginconversationstartermappings — listAipluginconversationstartermappings: List aipluginconversationstartermappings
- POST /aipluginconversationstartermappings — createAipluginconversationstartermapping: Create an aipluginconversationstartermapping
- GET /aipluginconversationstartermappings({aipluginconversationstartermappingid}) — getAipluginconversationstartermapping: Retrieve an aipluginconversationstartermapping
- PATCH /aipluginconversationstartermappings({aipluginconversationstartermappingid}) — updateAipluginconversationstartermapping: Update (or upsert) an aipluginconversationstartermapping
- DELETE /aipluginconversationstartermappings({aipluginconversationstartermappingid}) — deleteAipluginconversationstartermapping: Delete an aipluginconversationstartermapping
- GET /aipluginconversationstartermappings({aipluginconversationstartermappingid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAipluginconversationstartermapping: RetrieveUnpublished function
- GET /aipluginconversationstartermappings/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAipluginconversationstartermapping: RetrieveUnpublishedMultiple function

## aipluginexternalschema
- GET /aipluginexternalschemas — listAipluginexternalschemas: List aipluginexternalschemas
- POST /aipluginexternalschemas — createAipluginexternalschema: Create an aipluginexternalschema
- GET /aipluginexternalschemas({aipluginexternalschemaid}) — getAipluginexternalschema: Retrieve an aipluginexternalschema
- PATCH /aipluginexternalschemas({aipluginexternalschemaid}) — updateAipluginexternalschema: Update (or upsert) an aipluginexternalschema
- DELETE /aipluginexternalschemas({aipluginexternalschemaid}) — deleteAipluginexternalschema: Delete an aipluginexternalschema

## aipluginexternalschemaproperty
- GET /aipluginexternalschemaproperties — listAipluginexternalschemaproperties: List aipluginexternalschemaproperties
- POST /aipluginexternalschemaproperties — createAipluginexternalschemaproperty: Create an aipluginexternalschemaproperty
- GET /aipluginexternalschemaproperties({aipluginexternalschemapropertyid}) — getAipluginexternalschemaproperty: Retrieve an aipluginexternalschemaproperty
- PATCH /aipluginexternalschemaproperties({aipluginexternalschemapropertyid}) — updateAipluginexternalschemaproperty: Update (or upsert) an aipluginexternalschemaproperty
- DELETE /aipluginexternalschemaproperties({aipluginexternalschemapropertyid}) — deleteAipluginexternalschemaproperty: Delete an aipluginexternalschemaproperty

## aiplugingovernance
- GET /aiplugingovernances — listAiplugingovernances: List aiplugingovernances
- POST /aiplugingovernances — createAiplugingovernance: Create an aiplugingovernance
- GET /aiplugingovernances({aiplugingovernanceid}) — getAiplugingovernance: Retrieve an aiplugingovernance
- PATCH /aiplugingovernances({aiplugingovernanceid}) — updateAiplugingovernance: Update (or upsert) an aiplugingovernance
- DELETE /aiplugingovernances({aiplugingovernanceid}) — deleteAiplugingovernance: Delete an aiplugingovernance

## aiplugingovernanceext
- GET /aiplugingovernancesext — listAiplugingovernancesext: List aiplugingovernancesext
- POST /aiplugingovernancesext — createAiplugingovernanceext: Create an aiplugingovernanceext
- GET /aiplugingovernancesext({aiplugingovernanceextid}) — getAiplugingovernanceext: Retrieve an aiplugingovernanceext
- PATCH /aiplugingovernancesext({aiplugingovernanceextid}) — updateAiplugingovernanceext: Update (or upsert) an aiplugingovernanceext
- DELETE /aiplugingovernancesext({aiplugingovernanceextid}) — deleteAiplugingovernanceext: Delete an aiplugingovernanceext

## aiplugininstance
- GET /aiplugininstances — listAiplugininstances: List aiplugininstances
- POST /aiplugininstances — createAiplugininstance: Create an aiplugininstance
- GET /aiplugininstances({aiplugininstanceid}) — getAiplugininstance: Retrieve an aiplugininstance
- PATCH /aiplugininstances({aiplugininstanceid}) — updateAiplugininstance: Update (or upsert) an aiplugininstance
- DELETE /aiplugininstances({aiplugininstanceid}) — deleteAiplugininstance: Delete an aiplugininstance

## aipluginoperation
- GET /aipluginoperations — listAipluginoperations: List aipluginoperations
- POST /aipluginoperations — createAipluginoperation: Create an aipluginoperation
- GET /aipluginoperations({aipluginoperationid}) — getAipluginoperation: Retrieve an aipluginoperation
- PATCH /aipluginoperations({aipluginoperationid}) — updateAipluginoperation: Update (or upsert) an aipluginoperation
- DELETE /aipluginoperations({aipluginoperationid}) — deleteAipluginoperation: Delete an aipluginoperation
- GET /aipluginoperations({aipluginoperationid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAipluginoperation: RetrieveUnpublished function
- GET /aipluginoperations/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAipluginoperation: RetrieveUnpublishedMultiple function

## aipluginoperationparameter
- GET /aipluginoperationparameters — listAipluginoperationparameters: List aipluginoperationparameters
- POST /aipluginoperationparameters — createAipluginoperationparameter: Create an aipluginoperationparameter
- GET /aipluginoperationparameters({aipluginoperationparameterid}) — getAipluginoperationparameter: Retrieve an aipluginoperationparameter
- PATCH /aipluginoperationparameters({aipluginoperationparameterid}) — updateAipluginoperationparameter: Update (or upsert) an aipluginoperationparameter
- DELETE /aipluginoperationparameters({aipluginoperationparameterid}) — deleteAipluginoperationparameter: Delete an aipluginoperationparameter
- GET /aipluginoperationparameters({aipluginoperationparameterid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAipluginoperationparameter: RetrieveUnpublished function
- GET /aipluginoperationparameters/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAipluginoperationparameter: RetrieveUnpublishedMultiple function

## aipluginoperationresponsetemplate
- GET /aipluginoperationresponsetemplates — listAipluginoperationresponsetemplates: List aipluginoperationresponsetemplates
- POST /aipluginoperationresponsetemplates — createAipluginoperationresponsetemplate: Create an aipluginoperationresponsetemplate
- GET /aipluginoperationresponsetemplates({aipluginoperationresponsetemplateid}) — getAipluginoperationresponsetemplate: Retrieve an aipluginoperationresponsetemplate
- PATCH /aipluginoperationresponsetemplates({aipluginoperationresponsetemplateid}) — updateAipluginoperationresponsetemplate: Update (or upsert) an aipluginoperationresponsetemplate
- DELETE /aipluginoperationresponsetemplates({aipluginoperationresponsetemplateid}) — deleteAipluginoperationresponsetemplate: Delete an aipluginoperationresponsetemplate
- GET /aipluginoperationresponsetemplates({aipluginoperationresponsetemplateid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAipluginoperationresponsetemplate: RetrieveUnpublished function
- GET /aipluginoperationresponsetemplates/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAipluginoperationresponsetemplate: RetrieveUnpublishedMultiple function

## aiplugintitle
- GET /aiplugintitles — listAiplugintitles: List aiplugintitles
- POST /aiplugintitles — createAiplugintitle: Create an aiplugintitle
- GET /aiplugintitles({aiplugintitleid}) — getAiplugintitle: Retrieve an aiplugintitle
- PATCH /aiplugintitles({aiplugintitleid}) — updateAiplugintitle: Update (or upsert) an aiplugintitle
- DELETE /aiplugintitles({aiplugintitleid}) — deleteAiplugintitle: Delete an aiplugintitle
- GET /aiplugintitles({aiplugintitleid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAiplugintitle: RetrieveUnpublished function
- GET /aiplugintitles/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAiplugintitle: RetrieveUnpublishedMultiple function

## aipluginusersetting
- GET /aipluginusersettings — listAipluginusersettings: List aipluginusersettings
- POST /aipluginusersettings — createAipluginusersetting: Create an aipluginusersetting
- GET /aipluginusersettings({aipluginusersettingid}) — getAipluginusersetting: Retrieve an aipluginusersetting
- PATCH /aipluginusersettings({aipluginusersettingid}) — updateAipluginusersetting: Update (or upsert) an aipluginusersetting
- DELETE /aipluginusersettings({aipluginusersettingid}) — deleteAipluginusersetting: Delete an aipluginusersetting

## allowedmcpclient
- GET /allowedmcpclients — listAllowedmcpclients: List allowedmcpclients
- POST /allowedmcpclients — createAllowedmcpclient: Create an allowedmcpclient
- GET /allowedmcpclients({allowedmcpclientid}) — getAllowedmcpclient: Retrieve an allowedmcpclient
- PATCH /allowedmcpclients({allowedmcpclientid}) — updateAllowedmcpclient: Update (or upsert) an allowedmcpclient
- DELETE /allowedmcpclients({allowedmcpclientid}) — deleteAllowedmcpclient: Delete an allowedmcpclient

## annotation
- GET /annotations — listAnnotations: List annotations
- POST /annotations — createAnnotation: Create an annotation
- GET /annotations({annotationid}) — getAnnotation: Retrieve an annotation
- PATCH /annotations({annotationid}) — updateAnnotation: Update (or upsert) an annotation
- DELETE /annotations({annotationid}) — deleteAnnotation: Delete an annotation

## annualfiscalcalendar
- GET /annualfiscalcalendars — listAnnualfiscalcalendars: List annualfiscalcalendars
- POST /annualfiscalcalendars — createAnnualfiscalcalendar: Create an annualfiscalcalendar
- GET /annualfiscalcalendars({userfiscalcalendarid}) — getAnnualfiscalcalendar: Retrieve an annualfiscalcalendar
- PATCH /annualfiscalcalendars({userfiscalcalendarid}) — updateAnnualfiscalcalendar: Update (or upsert) an annualfiscalcalendar
- DELETE /annualfiscalcalendars({userfiscalcalendarid}) — deleteAnnualfiscalcalendar: Delete an annualfiscalcalendar

## anyprivilegeentity
- GET /anyprivilegeentities — listAnyprivilegeentities: List anyprivilegeentities
- POST /anyprivilegeentities — createAnyprivilegeentity: Create an anyprivilegeentity
- GET /anyprivilegeentities({anyprivilegeentityid}) — getAnyprivilegeentity: Retrieve an anyprivilegeentity
- PATCH /anyprivilegeentities({anyprivilegeentityid}) — updateAnyprivilegeentity: Update (or upsert) an anyprivilegeentity
- DELETE /anyprivilegeentities({anyprivilegeentityid}) — deleteAnyprivilegeentity: Delete an anyprivilegeentity

## appaction
- GET /appactions — listAppactions: List appactions
- POST /appactions — createAppaction: Create an appaction
- GET /appactions({appactionid}) — getAppaction: Retrieve an appaction
- PATCH /appactions({appactionid}) — updateAppaction: Update (or upsert) an appaction
- DELETE /appactions({appactionid}) — deleteAppaction: Delete an appaction

## appaction_appactionrule_classicrules
- GET /appaction_appactionrule_classicrulesset — listAppaction_appactionrule_classicrulesset: List appaction_appactionrule_classicrulesset

## appactionmigration
- GET /appactionmigrations — listAppactionmigrations: List appactionmigrations
- POST /appactionmigrations — createAppactionmigration: Create an appactionmigration
- GET /appactionmigrations({appactionmigrationid}) — getAppactionmigration: Retrieve an appactionmigration
- PATCH /appactionmigrations({appactionmigrationid}) — updateAppactionmigration: Update (or upsert) an appactionmigration
- DELETE /appactionmigrations({appactionmigrationid}) — deleteAppactionmigration: Delete an appactionmigration

## appactionrule
- GET /appactionrules — listAppactionrules: List appactionrules
- POST /appactionrules — createAppactionrule: Create an appactionrule
- GET /appactionrules({appactionruleid}) — getAppactionrule: Retrieve an appactionrule
- PATCH /appactionrules({appactionruleid}) — updateAppactionrule: Update (or upsert) an appactionrule
- DELETE /appactionrules({appactionruleid}) — deleteAppactionrule: Delete an appactionrule

## appactionrule_webresource_scripts
- GET /appactionrule_webresource_scriptsset — listAppactionrule_webresource_scriptsset: List appactionrule_webresource_scriptsset

## appconfig
- GET /appconfigs — listAppconfigs: List appconfigs
- POST /appconfigs — createAppconfig: Create an appconfig
- GET /appconfigs({appconfigid}) — getAppconfig: Retrieve an appconfig
- PATCH /appconfigs({appconfigid}) — updateAppconfig: Update (or upsert) an appconfig
- DELETE /appconfigs({appconfigid}) — deleteAppconfig: Delete an appconfig
- GET /appconfigs({appconfigid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAppconfig: RetrieveUnpublished function
- GET /appconfigs/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAppconfig: RetrieveUnpublishedMultiple function

## appconfiginstance
- GET /appconfiginstances — listAppconfiginstances: List appconfiginstances
- POST /appconfiginstances — createAppconfiginstance: Create an appconfiginstance
- GET /appconfiginstances({appconfiginstanceid}) — getAppconfiginstance: Retrieve an appconfiginstance
- PATCH /appconfiginstances({appconfiginstanceid}) — updateAppconfiginstance: Update (or upsert) an appconfiginstance
- DELETE /appconfiginstances({appconfiginstanceid}) — deleteAppconfiginstance: Delete an appconfiginstance
- GET /appconfiginstances({appconfiginstanceid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAppconfiginstance: RetrieveUnpublished function
- GET /appconfiginstances/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAppconfiginstance: RetrieveUnpublishedMultiple function

## appconfigmaster
- GET /appconfigmasters — listAppconfigmasters: List appconfigmasters
- GET /appconfigmasters({appconfigmasterid}) — getAppconfigmaster: Retrieve an appconfigmaster

## application
- GET /applications — listApplications: List applications
- POST /applications — createApplication: Create an application
- GET /applications({applicationid}) — getApplication: Retrieve an application
- PATCH /applications({applicationid}) — updateApplication: Update (or upsert) an application
- DELETE /applications({applicationid}) — deleteApplication: Delete an application

## applicationroles
- GET /applicationrolesset — listApplicationrolesset: List applicationrolesset

## applicationuser
- GET /applicationusers — listApplicationusers: List applicationusers
- POST /applicationusers — createApplicationuser: Create an applicationuser
- GET /applicationusers({applicationuserid}) — getApplicationuser: Retrieve an applicationuser
- PATCH /applicationusers({applicationuserid}) — updateApplicationuser: Update (or upsert) an applicationuser
- DELETE /applicationusers({applicationuserid}) — deleteApplicationuser: Delete an applicationuser

## applicationuserprofile
- GET /applicationuserprofileset — listApplicationuserprofileset: List applicationuserprofileset
- DELETE /applicationuserprofileset({applicationuserprofileid}) — deleteApplicationuserprofile: Delete an applicationuserprofile

## applicationuserrole
- GET /applicationuserroleset — listApplicationuserroleset: List applicationuserroleset
- DELETE /applicationuserroleset({applicationuserroleid}) — deleteApplicationuserrole: Delete an applicationuserrole

## appmodule
- GET /appmodules — listAppmodules: List appmodules
- POST /appmodules — createAppmodule: Create an appmodule
- GET /appmodules({appmoduleid}) — getAppmodule: Retrieve an appmodule
- PATCH /appmodules({appmoduleid}) — updateAppmodule: Update (or upsert) an appmodule
- DELETE /appmodules({appmoduleid}) — deleteAppmodule: Delete an appmodule
- GET /appmodules({appmoduleid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnAppmodule: RetrieveUnpublished function
- GET /appmodules/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnAppmodule: RetrieveUnpublishedMultiple function

## appmodulecomponent
- GET /appmodulecomponents — listAppmodulecomponents: List appmodulecomponents
- GET /appmodulecomponents({appmodulecomponentid}) — getAppmodulecomponent: Retrieve an appmodulecomponent

## appmoduleroles
- GET /appmodulerolescollection — listAppmodulerolescollection: List appmodulerolescollection

## appnotification
- GET /appnotifications — listAppnotifications: List appnotifications
- POST /appnotifications — createAppnotification: Create an appnotification
- GET /appnotifications({appnotificationid}) — getAppnotification: Retrieve an appnotification
- PATCH /appnotifications({appnotificationid}) — updateAppnotification: Update (or upsert) an appnotification
- DELETE /appnotifications({appnotificationid}) — deleteAppnotification: Delete an appnotification

## appnotificationsignal
- GET /appnotificationsignals — listAppnotificationsignals: List appnotificationsignals
- POST /appnotificationsignals — createAppnotificationsignal: Create an appnotificationsignal
- GET /appnotificationsignals({appnotificationsignalid}) — getAppnotificationsignal: Retrieve an appnotificationsignal
- PATCH /appnotificationsignals({appnotificationsignalid}) — updateAppnotificationsignal: Update (or upsert) an appnotificationsignal
- DELETE /appnotificationsignals({appnotificationsignalid}) — deleteAppnotificationsignal: Delete an appnotificationsignal

## appointment
- GET /appointments — listAppointments: List appointments
- POST /appointments — createAppointment: Create an appointment
- GET /appointments({activityid}) — getAppointment: Retrieve an appointment
- PATCH /appointments({activityid}) — updateAppointment: Update (or upsert) an appointment
- DELETE /appointments({activityid}) — deleteAppointment: Delete an appointment
- POST /appointments({activityid})/Microsoft.Dynamics.CRM.AddRecurrence — addRecurrenceOnAppointment: AddRecurrence action

## approvalprocess
- GET /approvalprocesses — listApprovalprocesses: List approvalprocesses
- POST /approvalprocesses — createApprovalprocess: Create an approvalprocess
- GET /approvalprocesses({approvalprocessid}) — getApprovalprocess: Retrieve an approvalprocess
- PATCH /approvalprocesses({approvalprocessid}) — updateApprovalprocess: Update (or upsert) an approvalprocess
- DELETE /approvalprocesses({approvalprocessid}) — deleteApprovalprocess: Delete an approvalprocess

## approvalstageapproval
- GET /approvalstageapprovals — listApprovalstageapprovals: List approvalstageapprovals
- POST /approvalstageapprovals — createApprovalstageapproval: Create an approvalstageapproval
- GET /approvalstageapprovals({approvalstageapprovalid}) — getApprovalstageapproval: Retrieve an approvalstageapproval
- PATCH /approvalstageapprovals({approvalstageapprovalid}) — updateApprovalstageapproval: Update (or upsert) an approvalstageapproval
- DELETE /approvalstageapprovals({approvalstageapprovalid}) — deleteApprovalstageapproval: Delete an approvalstageapproval

## approvalstagecondition
- GET /approvalstageconditions — listApprovalstageconditions: List approvalstageconditions
- POST /approvalstageconditions — createApprovalstagecondition: Create an approvalstagecondition
- GET /approvalstageconditions({approvalstageconditionid}) — getApprovalstagecondition: Retrieve an approvalstagecondition
- PATCH /approvalstageconditions({approvalstageconditionid}) — updateApprovalstagecondition: Update (or upsert) an approvalstagecondition
- DELETE /approvalstageconditions({approvalstageconditionid}) — deleteApprovalstagecondition: Delete an approvalstagecondition

## approvalstageintelligent
- GET /approvalstageintelligents — listApprovalstageintelligents: List approvalstageintelligents
- POST /approvalstageintelligents — createApprovalstageintelligent: Create an approvalstageintelligent
- GET /approvalstageintelligents({approvalstageintelligentid}) — getApprovalstageintelligent: Retrieve an approvalstageintelligent
- PATCH /approvalstageintelligents({approvalstageintelligentid}) — updateApprovalstageintelligent: Update (or upsert) an approvalstageintelligent
- DELETE /approvalstageintelligents({approvalstageintelligentid}) — deleteApprovalstageintelligent: Delete an approvalstageintelligent

## approvalstageorder
- GET /approvalstageorders — listApprovalstageorders: List approvalstageorders
- POST /approvalstageorders — createApprovalstageorder: Create an approvalstageorder
- GET /approvalstageorders({approvalstageorderid}) — getApprovalstageorder: Retrieve an approvalstageorder
- PATCH /approvalstageorders({approvalstageorderid}) — updateApprovalstageorder: Update (or upsert) an approvalstageorder
- DELETE /approvalstageorders({approvalstageorderid}) — deleteApprovalstageorder: Delete an approvalstageorder

## asyncoperation
- GET /asyncoperations — listAsyncoperations: List asyncoperations
- POST /asyncoperations — createAsyncoperation: Create an asyncoperation
- GET /asyncoperations({asyncoperationid}) — getAsyncoperation: Retrieve an asyncoperation
- PATCH /asyncoperations({asyncoperationid}) — updateAsyncoperation: Update (or upsert) an asyncoperation
- DELETE /asyncoperations({asyncoperationid}) — deleteAsyncoperation: Delete an asyncoperation

## athenareconciliationinfo
- GET /athenareconciliationinfos — listAthenareconciliationinfos: List athenareconciliationinfos
- POST /athenareconciliationinfos — createAthenareconciliationinfo: Create an athenareconciliationinfo
- GET /athenareconciliationinfos({athenareconciliationinfoid}) — getAthenareconciliationinfo: Retrieve an athenareconciliationinfo
- PATCH /athenareconciliationinfos({athenareconciliationinfoid}) — updateAthenareconciliationinfo: Update (or upsert) an athenareconciliationinfo
- DELETE /athenareconciliationinfos({athenareconciliationinfoid}) — deleteAthenareconciliationinfo: Delete an athenareconciliationinfo

## attribute
- GET /attributes — listAttributes: List attributes

## attributeclusterconfig
- GET /attributeclusterconfigs — listAttributeclusterconfigs: List attributeclusterconfigs
- POST /attributeclusterconfigs — createAttributeclusterconfig: Create an attributeclusterconfig
- GET /attributeclusterconfigs({attributeclusterconfigid}) — getAttributeclusterconfig: Retrieve an attributeclusterconfig
- PATCH /attributeclusterconfigs({attributeclusterconfigid}) — updateAttributeclusterconfig: Update (or upsert) an attributeclusterconfig
- DELETE /attributeclusterconfigs({attributeclusterconfigid}) — deleteAttributeclusterconfig: Delete an attributeclusterconfig

## attributeimageconfig
- GET /attributeimageconfigs — listAttributeimageconfigs: List attributeimageconfigs
- POST /attributeimageconfigs — createAttributeimageconfig: Create an attributeimageconfig
- GET /attributeimageconfigs({attributeimageconfigid}) — getAttributeimageconfig: Retrieve an attributeimageconfig
- PATCH /attributeimageconfigs({attributeimageconfigid}) — updateAttributeimageconfig: Update (or upsert) an attributeimageconfig
- DELETE /attributeimageconfigs({attributeimageconfigid}) — deleteAttributeimageconfig: Delete an attributeimageconfig

## attributemaskingrule
- GET /attributemaskingrules — listAttributemaskingrules: List attributemaskingrules
- POST /attributemaskingrules — createAttributemaskingrule: Create an attributemaskingrule
- GET /attributemaskingrules({attributemaskingruleid}) — getAttributemaskingrule: Retrieve an attributemaskingrule
- PATCH /attributemaskingrules({attributemaskingruleid}) — updateAttributemaskingrule: Update (or upsert) an attributemaskingrule
- DELETE /attributemaskingrules({attributemaskingruleid}) — deleteAttributemaskingrule: Delete an attributemaskingrule

## audit
- GET /audits — listAudits: List audits
- GET /audits({auditid}) — getAudit: Retrieve an audit
- GET /audits({auditid})/Microsoft.Dynamics.CRM.RetrieveAuditDetails() — retrieveAuditDetailsOnAudit: RetrieveAuditDetails function

## backgroundoperation
- GET /backgroundoperations — listBackgroundoperations: List backgroundoperations
- POST /backgroundoperations — createBackgroundoperation: Create a backgroundoperation
- GET /backgroundoperations({backgroundoperationid}) — getBackgroundoperation: Retrieve a backgroundoperation
- PATCH /backgroundoperations({backgroundoperationid}) — updateBackgroundoperation: Update (or upsert) a backgroundoperation
- DELETE /backgroundoperations({backgroundoperationid}) — deleteBackgroundoperation: Delete a backgroundoperation

## bot
- GET /bots — listBots: List bots
- POST /bots — createBot: Create a bot
- GET /bots({botid}) — getBot: Retrieve a bot
- PATCH /bots({botid}) — updateBot: Update (or upsert) a bot
- DELETE /bots({botid}) — deleteBot: Delete a bot
- POST /bots({botid})/Microsoft.Dynamics.CRM.PvaAuthorize — pvaAuthorizeOnBot: PvaAuthorize action
- POST /bots({botid})/Microsoft.Dynamics.CRM.PvaCreateBotComponents — pvaCreateBotComponentsOnBot: PvaCreateBotComponents action
- POST /bots({botid})/Microsoft.Dynamics.CRM.PvaCreateContentSnapshot — pvaCreateContentSnapshotOnBot: PvaCreateContentSnapshot action
- POST /bots({botid})/Microsoft.Dynamics.CRM.PvaDeleteBot — pvaDeleteBotOnBot: PvaDeleteBot action
- POST /bots({botid})/Microsoft.Dynamics.CRM.PvaGetDirectLineEndpoint — pvaGetDirectLineEndpointOnBot: PvaGetDirectLineEndpoint action
- POST /bots({botid})/Microsoft.Dynamics.CRM.PvaProvision — pvaProvisionOnBot: PvaProvision action
- POST /bots({botid})/Microsoft.Dynamics.CRM.PvaPublish — pvaPublishOnBot: PvaPublish action
- POST /bots({botid})/Microsoft.Dynamics.CRM.PvaPublishStatus — pvaPublishStatusOnBot: PvaPublishStatus action

## bot_botcomponent
- GET /bot_botcomponentset — listBot_botcomponentset: List bot_botcomponentset
- POST /bot_botcomponentset — createBot_botcomponent: Create a bot_botcomponent
- PATCH /bot_botcomponentset({bot_botcomponentid}) — updateBot_botcomponent: Update (or upsert) a bot_botcomponent
- DELETE /bot_botcomponentset({bot_botcomponentid}) — deleteBot_botcomponent: Delete a bot_botcomponent

## bot_botcomponentcollection
- GET /bot_botcomponentcollectionset — listBot_botcomponentcollectionset: List bot_botcomponentcollectionset
- POST /bot_botcomponentcollectionset — createBot_botcomponentcollection: Create a bot_botcomponentcollection
- DELETE /bot_botcomponentcollectionset({bot_botcomponentcollectionid}) — deleteBot_botcomponentcollection: Delete a bot_botcomponentcollection

## bot_environmentvariabledefinition
- GET /bot_environmentvariabledefinitionset — listBot_environmentvariabledefinitionset: List bot_environmentvariabledefinitionset

## botcomponent
- GET /botcomponents — listBotcomponents: List botcomponents
- POST /botcomponents — createBotcomponent: Create a botcomponent
- GET /botcomponents({botcomponentid}) — getBotcomponent: Retrieve a botcomponent
- PATCH /botcomponents({botcomponentid}) — updateBotcomponent: Update (or upsert) a botcomponent
- DELETE /botcomponents({botcomponentid}) — deleteBotcomponent: Delete a botcomponent

## botcomponent_aipluginoperation
- GET /botcomponent_aipluginoperationset — listBotcomponent_aipluginoperationset: List botcomponent_aipluginoperationset
- POST /botcomponent_aipluginoperationset — createBotcomponent_aipluginoperation: Create a botcomponent_aipluginoperation
- DELETE /botcomponent_aipluginoperationset({botcomponent_aipluginoperationid}) — deleteBotcomponent_aipluginoperation: Delete a botcomponent_aipluginoperation

## botcomponent_botcomponent
- GET /botcomponent_botcomponentset — listBotcomponent_botcomponentset: List botcomponent_botcomponentset

## botcomponent_connectionreference
- GET /botcomponent_connectionreferenceset — listBotcomponent_connectionreferenceset: List botcomponent_connectionreferenceset
- POST /botcomponent_connectionreferenceset — createBotcomponent_connectionreference: Create a botcomponent_connectionreference
- PATCH /botcomponent_connectionreferenceset({botcomponent_connectionreferenceid}) — updateBotcomponent_connectionreference: Update (or upsert) a botcomponent_connectionreference
- DELETE /botcomponent_connectionreferenceset({botcomponent_connectionreferenceid}) — deleteBotcomponent_connectionreference: Delete a botcomponent_connectionreference

## botcomponent_dvtablesearch
- GET /botcomponent_dvtablesearchset — listBotcomponent_dvtablesearchset: List botcomponent_dvtablesearchset
- POST /botcomponent_dvtablesearchset — createBotcomponent_dvtablesearch: Create a botcomponent_dvtablesearch
- DELETE /botcomponent_dvtablesearchset({botcomponent_dvtablesearchid}) — deleteBotcomponent_dvtablesearch: Delete a botcomponent_dvtablesearch

## botcomponent_environmentvariabledefinition
- GET /botcomponent_environmentvariabledefinitionset — listBotcomponent_environmentvariabledefinitionset: List botcomponent_environmentvariabledefinitionset
- POST /botcomponent_environmentvariabledefinitionset — createBotcomponent_environmentvariabledefinition: Create a botcomponent_environmentvariabledefinition
- PATCH /botcomponent_environmentvariabledefinitionset({botcomponent_environmentvariabledefinitionid}) — updateBotcomponent_environmentvariabledefinition: Update (or upsert) a botcomponent_environmentvariabledefinition
- DELETE /botcomponent_environmentvariabledefinitionset({botcomponent_environmentvariabledefinitionid}) — deleteBotcomponent_environmentvariabledefinition: Delete a botcomponent_environmentvariabledefinition

## botcomponent_msdyn_aimodel
- GET /botcomponent_msdyn_aimodelset — listBotcomponent_msdyn_aimodelset: List botcomponent_msdyn_aimodelset
- POST /botcomponent_msdyn_aimodelset — createBotcomponent_msdyn_aimodel: Create a botcomponent_msdyn_aimodel
- DELETE /botcomponent_msdyn_aimodelset({botcomponent_msdyn_aimodelid}) — deleteBotcomponent_msdyn_aimodel: Delete a botcomponent_msdyn_aimodel

## botcomponent_workflow
- GET /botcomponent_workflowset — listBotcomponent_workflowset: List botcomponent_workflowset
- POST /botcomponent_workflowset — createBotcomponent_workflow: Create a botcomponent_workflow
- PATCH /botcomponent_workflowset({botcomponent_workflowid}) — updateBotcomponent_workflow: Update (or upsert) a botcomponent_workflow
- DELETE /botcomponent_workflowset({botcomponent_workflowid}) — deleteBotcomponent_workflow: Delete a botcomponent_workflow

## botcomponentcollection
- GET /botcomponentcollections — listBotcomponentcollections: List botcomponentcollections
- POST /botcomponentcollections — createBotcomponentcollection: Create a botcomponentcollection
- GET /botcomponentcollections({botcomponentcollectionid}) — getBotcomponentcollection: Retrieve a botcomponentcollection
- PATCH /botcomponentcollections({botcomponentcollectionid}) — updateBotcomponentcollection: Update (or upsert) a botcomponentcollection
- DELETE /botcomponentcollections({botcomponentcollectionid}) — deleteBotcomponentcollection: Delete a botcomponentcollection
- POST /botcomponentcollections({botcomponentcollectionid})/Microsoft.Dynamics.CRM.PvaComponentCollectionAuthorize — pvaComponentCollectionAuthorizeOnBotcomponentcollection: PvaComponentCollectionAuthorize action
- POST /botcomponentcollections({botcomponentcollectionid})/Microsoft.Dynamics.CRM.PvaDeleteBotComponentCollection — pvaDeleteBotComponentCollectionOnBotcomponentcollection: PvaDeleteBotComponentCollection action

## bulkdeletefailure
- GET /bulkdeletefailures — listBulkdeletefailures: List bulkdeletefailures
- GET /bulkdeletefailures({bulkdeletefailureid}) — getBulkdeletefailure: Retrieve a bulkdeletefailure

## bulkdeleteoperation
- GET /bulkdeleteoperations — listBulkdeleteoperations: List bulkdeleteoperations
- GET /bulkdeleteoperations({bulkdeleteoperationid}) — getBulkdeleteoperation: Retrieve a bulkdeleteoperation
- DELETE /bulkdeleteoperations({bulkdeleteoperationid}) — deleteBulkdeleteoperation: Delete a bulkdeleteoperation

## businessprocess
- GET /businessprocesses — listBusinessprocesses: List businessprocesses
- POST /businessprocesses — createBusinessprocess: Create a businessprocess
- GET /businessprocesses({businessprocessid}) — getBusinessprocess: Retrieve a businessprocess
- PATCH /businessprocesses({businessprocessid}) — updateBusinessprocess: Update (or upsert) a businessprocess
- DELETE /businessprocesses({businessprocessid}) — deleteBusinessprocess: Delete a businessprocess
- POST /businessprocesses({businessprocessid})/Microsoft.Dynamics.CRM.GetRunMap — getRunMapOnBusinessprocess: GetRunMap action

## businessprocesslinkedartifact
- GET /businessprocesslinkedartifacts — listBusinessprocesslinkedartifacts: List businessprocesslinkedartifacts
- POST /businessprocesslinkedartifacts — createBusinessprocesslinkedartifact: Create a businessprocesslinkedartifact
- GET /businessprocesslinkedartifacts({businessprocesslinkedartifactid}) — getBusinessprocesslinkedartifact: Retrieve a businessprocesslinkedartifact
- PATCH /businessprocesslinkedartifacts({businessprocesslinkedartifactid}) — updateBusinessprocesslinkedartifact: Update (or upsert) a businessprocesslinkedartifact
- DELETE /businessprocesslinkedartifacts({businessprocesslinkedartifactid}) — deleteBusinessprocesslinkedartifact: Delete a businessprocesslinkedartifact

## businessunit
- GET /businessunits — listBusinessunits: List businessunits
- POST /businessunits — createBusinessunit: Create a businessunit
- GET /businessunits({businessunitid}) — getBusinessunit: Retrieve a businessunit
- PATCH /businessunits({businessunitid}) — updateBusinessunit: Update (or upsert) a businessunit
- DELETE /businessunits({businessunitid}) — deleteBusinessunit: Delete a businessunit
- GET /businessunits({businessunitid})/Microsoft.Dynamics.CRM.RetrieveBusinessHierarchyBusinessUnit() — retrieveBusinessHierarchyBusinessUnitOnBusinessunit: RetrieveBusinessHierarchyBusinessUnit function

## businessunitnewsarticle
- GET /businessunitnewsarticles — listBusinessunitnewsarticles: List businessunitnewsarticles
- POST /businessunitnewsarticles — createBusinessunitnewsarticle: Create a businessunitnewsarticle
- GET /businessunitnewsarticles({businessunitnewsarticleid}) — getBusinessunitnewsarticle: Retrieve a businessunitnewsarticle
- PATCH /businessunitnewsarticles({businessunitnewsarticleid}) — updateBusinessunitnewsarticle: Update (or upsert) a businessunitnewsarticle
- DELETE /businessunitnewsarticles({businessunitnewsarticleid}) — deleteBusinessunitnewsarticle: Delete a businessunitnewsarticle

## calendar
- GET /calendars — listCalendars: List calendars
- POST /calendars — createCalendar: Create a calendar
- GET /calendars({calendarid}) — getCalendar: Retrieve a calendar
- PATCH /calendars({calendarid}) — updateCalendar: Update (or upsert) a calendar
- DELETE /calendars({calendarid}) — deleteCalendar: Delete a calendar
- GET /calendars({calendarid})/Microsoft.Dynamics.CRM.ExpandCalendar(Start=@Start,End=@End) — expandCalendarOnCalendar: ExpandCalendar function

## callbackregistration
- GET /callbackregistrations — listCallbackregistrations: List callbackregistrations
- POST /callbackregistrations — createCallbackregistration: Create a callbackregistration
- GET /callbackregistrations({callbackregistrationid}) — getCallbackregistration: Retrieve a callbackregistration
- PATCH /callbackregistrations({callbackregistrationid}) — updateCallbackregistration: Update (or upsert) a callbackregistration
- DELETE /callbackregistrations({callbackregistrationid}) — deleteCallbackregistration: Delete a callbackregistration

## canvasapp
- GET /canvasapps — listCanvasapps: List canvasapps
- POST /canvasapps — createCanvasapp: Create a canvasapp
- GET /canvasapps({canvasappid}) — getCanvasapp: Retrieve a canvasapp
- PATCH /canvasapps({canvasappid}) — updateCanvasapp: Update (or upsert) a canvasapp
- DELETE /canvasapps({canvasappid}) — deleteCanvasapp: Delete a canvasapp

## card
- GET /cards — listCards: List cards
- POST /cards — createCard: Create a card
- GET /cards({cardid}) — getCard: Retrieve a card
- PATCH /cards({cardid}) — updateCard: Update (or upsert) a card
- DELETE /cards({cardid}) — deleteCard: Delete a card

## cardentityconnections
- GET /cardentityconnectionsset — listCardentityconnectionsset: List cardentityconnectionsset

## cardstateitem
- GET /cardstateitems — listCardstateitems: List cardstateitems
- POST /cardstateitems — createCardstateitem: Create a cardstateitem
- GET /cardstateitems({cardstateitemid}) — getCardstateitem: Retrieve a cardstateitem
- PATCH /cardstateitems({cardstateitemid}) — updateCardstateitem: Update (or upsert) a cardstateitem
- DELETE /cardstateitems({cardstateitemid}) — deleteCardstateitem: Delete a cardstateitem

## catalog
- GET /catalogs — listCatalogs: List catalogs
- POST /catalogs — createCatalog: Create a catalog
- GET /catalogs({catalogid}) — getCatalog: Retrieve a catalog
- PATCH /catalogs({catalogid}) — updateCatalog: Update (or upsert) a catalog
- DELETE /catalogs({catalogid}) — deleteCatalog: Delete a catalog

## catalogassignment
- GET /catalogassignments — listCatalogassignments: List catalogassignments
- POST /catalogassignments — createCatalogassignment: Create a catalogassignment
- GET /catalogassignments({catalogassignmentid}) — getCatalogassignment: Retrieve a catalogassignment
- PATCH /catalogassignments({catalogassignmentid}) — updateCatalogassignment: Update (or upsert) a catalogassignment
- DELETE /catalogassignments({catalogassignmentid}) — deleteCatalogassignment: Delete a catalogassignment

## category
- GET /categories — listCategories: List categories
- POST /categories — createCategory: Create a category
- GET /categories({categoryid}) — getCategory: Retrieve a category
- PATCH /categories({categoryid}) — updateCategory: Update (or upsert) a category
- DELETE /categories({categoryid}) — deleteCategory: Delete a category

## certificatecredential
- GET /certificatecredentials — listCertificatecredentials: List certificatecredentials
- POST /certificatecredentials — createCertificatecredential: Create a certificatecredential
- GET /certificatecredentials({certificatecredentialid}) — getCertificatecredential: Retrieve a certificatecredential
- PATCH /certificatecredentials({certificatecredentialid}) — updateCertificatecredential: Update (or upsert) a certificatecredential
- DELETE /certificatecredentials({certificatecredentialid}) — deleteCertificatecredential: Delete a certificatecredential

## chat
- GET /chats — listChats: List chats
- POST /chats — createChat: Create a chat
- GET /chats({activityid}) — getChat: Retrieve a chat
- PATCH /chats({activityid}) — updateChat: Update (or upsert) a chat
- DELETE /chats({activityid}) — deleteChat: Delete a chat

## columnmapping
- GET /columnmappings — listColumnmappings: List columnmappings
- POST /columnmappings — createColumnmapping: Create a columnmapping
- GET /columnmappings({columnmappingid}) — getColumnmapping: Retrieve a columnmapping
- DELETE /columnmappings({columnmappingid}) — deleteColumnmapping: Delete a columnmapping

## componentchangesetversion
- GET /componentchangesetversions — listComponentchangesetversions: List componentchangesetversions
- POST /componentchangesetversions — createComponentchangesetversion: Create a componentchangesetversion
- GET /componentchangesetversions({componentchangesetversionid}) — getComponentchangesetversion: Retrieve a componentchangesetversion
- PATCH /componentchangesetversions({componentchangesetversionid}) — updateComponentchangesetversion: Update (or upsert) a componentchangesetversion
- DELETE /componentchangesetversions({componentchangesetversionid}) — deleteComponentchangesetversion: Delete a componentchangesetversion

## componentversion
- GET /componentversions — listComponentversions: List componentversions
- POST /componentversions — createComponentversion: Create a componentversion
- GET /componentversions({componentversionid}) — getComponentversion: Retrieve a componentversion
- PATCH /componentversions({componentversionid}) — updateComponentversion: Update (or upsert) a componentversion
- DELETE /componentversions({componentversionid}) — deleteComponentversion: Delete a componentversion

## componentversiondatasource
- GET /componentversiondatasources — listComponentversiondatasources: List componentversiondatasources
- POST /componentversiondatasources — createComponentversiondatasource: Create a componentversiondatasource
- GET /componentversiondatasources({componentversiondatasourceid}) — getComponentversiondatasource: Retrieve a componentversiondatasource
- PATCH /componentversiondatasources({componentversiondatasourceid}) — updateComponentversiondatasource: Update (or upsert) a componentversiondatasource
- DELETE /componentversiondatasources({componentversiondatasourceid}) — deleteComponentversiondatasource: Delete a componentversiondatasource

## componentversionnrddatasource
- GET /componentversionnrddatasourceset — listComponentversionnrddatasourceset: List componentversionnrddatasourceset
- POST /componentversionnrddatasourceset — createComponentversionnrddatasource: Create a componentversionnrddatasource
- GET /componentversionnrddatasourceset({componentversionnrddatasourceid}) — getComponentversionnrddatasource: Retrieve a componentversionnrddatasource
- PATCH /componentversionnrddatasourceset({componentversionnrddatasourceid}) — updateComponentversionnrddatasource: Update (or upsert) a componentversionnrddatasource
- DELETE /componentversionnrddatasourceset({componentversionnrddatasourceid}) — deleteComponentversionnrddatasource: Delete a componentversionnrddatasource

## computeruseagent
- GET /computeruseagents — listComputeruseagents: List computeruseagents
- POST /computeruseagents — createComputeruseagent: Create a computeruseagent
- GET /computeruseagents({computeruseagentid}) — getComputeruseagent: Retrieve a computeruseagent
- PATCH /computeruseagents({computeruseagentid}) — updateComputeruseagent: Update (or upsert) a computeruseagent
- DELETE /computeruseagents({computeruseagentid}) — deleteComputeruseagent: Delete a computeruseagent
- GET /computeruseagents({computeruseagentid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnComputeruseagent: RetrieveUnpublished function
- GET /computeruseagents/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnComputeruseagent: RetrieveUnpublishedMultiple function

## connection
- GET /connections — listConnections: List connections
- POST /connections — createConnection: Create a connection
- GET /connections({connectionid}) — getConnection: Retrieve a connection
- PATCH /connections({connectionid}) — updateConnection: Update (or upsert) a connection
- DELETE /connections({connectionid}) — deleteConnection: Delete a connection

## connectioninstance
- GET /connectioninstances — listConnectioninstances: List connectioninstances
- POST /connectioninstances — createConnectioninstance: Create a connectioninstance
- GET /connectioninstances({connectioninstanceid}) — getConnectioninstance: Retrieve a connectioninstance
- PATCH /connectioninstances({connectioninstanceid}) — updateConnectioninstance: Update (or upsert) a connectioninstance
- DELETE /connectioninstances({connectioninstanceid}) — deleteConnectioninstance: Delete a connectioninstance

## connectionreference
- GET /connectionreferences — listConnectionreferences: List connectionreferences
- POST /connectionreferences — createConnectionreference: Create a connectionreference
- GET /connectionreferences({connectionreferenceid}) — getConnectionreference: Retrieve a connectionreference
- PATCH /connectionreferences({connectionreferenceid}) — updateConnectionreference: Update (or upsert) a connectionreference
- DELETE /connectionreferences({connectionreferenceid}) — deleteConnectionreference: Delete a connectionreference
- POST /connectionreferences({connectionreferenceid})/Microsoft.Dynamics.CRM.PvaShareConnection — pvaShareConnectionOnConnectionreference: PvaShareConnection action

## connectionrole
- GET /connectionroles — listConnectionroles: List connectionroles
- POST /connectionroles — createConnectionrole: Create a connectionrole
- GET /connectionroles({connectionroleid}) — getConnectionrole: Retrieve a connectionrole
- PATCH /connectionroles({connectionroleid}) — updateConnectionrole: Update (or upsert) a connectionrole
- DELETE /connectionroles({connectionroleid}) — deleteConnectionrole: Delete a connectionrole

## connectionroleassociation
- GET /connectionroleassociations — listConnectionroleassociations: List connectionroleassociations

## connector
- GET /connectors — listConnectors: List connectors
- POST /connectors — createConnector: Create a connector
- GET /connectors({connectorid}) — getConnector: Retrieve a connector
- PATCH /connectors({connectorid}) — updateConnector: Update (or upsert) a connector
- DELETE /connectors({connectorid}) — deleteConnector: Delete a connector

## contact
- GET /contacts — listContacts: List contacts
- POST /contacts — createContact: Create a contact
- GET /contacts({contactid}) — getContact: Retrieve a contact
- PATCH /contacts({contactid}) — updateContact: Update (or upsert) a contact
- DELETE /contacts({contactid}) — deleteContact: Delete a contact

## controlconfiguration
- GET /controlconfigurations — listControlconfigurations: List controlconfigurations
- POST /controlconfigurations — createControlconfiguration: Create a controlconfiguration
- GET /controlconfigurations({controlconfigurationid}) — getControlconfiguration: Retrieve a controlconfiguration
- PATCH /controlconfigurations({controlconfigurationid}) — updateControlconfiguration: Update (or upsert) a controlconfiguration
- DELETE /controlconfigurations({controlconfigurationid}) — deleteControlconfiguration: Delete a controlconfiguration

## conversationtranscript
- GET /conversationtranscripts — listConversationtranscripts: List conversationtranscripts
- POST /conversationtranscripts — createConversationtranscript: Create a conversationtranscript
- GET /conversationtranscripts({conversationtranscriptid}) — getConversationtranscript: Retrieve a conversationtranscript
- PATCH /conversationtranscripts({conversationtranscriptid}) — updateConversationtranscript: Update (or upsert) a conversationtranscript
- DELETE /conversationtranscripts({conversationtranscriptid}) — deleteConversationtranscript: Delete a conversationtranscript

## copilotexamplequestion
- GET /copilotexamplequestions — listCopilotexamplequestions: List copilotexamplequestions
- POST /copilotexamplequestions — createCopilotexamplequestion: Create a copilotexamplequestion
- GET /copilotexamplequestions({copilotexamplequestionid}) — getCopilotexamplequestion: Retrieve a copilotexamplequestion
- PATCH /copilotexamplequestions({copilotexamplequestionid}) — updateCopilotexamplequestion: Update (or upsert) a copilotexamplequestion
- DELETE /copilotexamplequestions({copilotexamplequestionid}) — deleteCopilotexamplequestion: Delete a copilotexamplequestion

## copilotglossaryterm
- GET /copilotglossaryterms — listCopilotglossaryterms: List copilotglossaryterms
- POST /copilotglossaryterms — createCopilotglossaryterm: Create a copilotglossaryterm
- GET /copilotglossaryterms({copilotglossarytermid}) — getCopilotglossaryterm: Retrieve a copilotglossaryterm
- PATCH /copilotglossaryterms({copilotglossarytermid}) — updateCopilotglossaryterm: Update (or upsert) a copilotglossaryterm
- DELETE /copilotglossaryterms({copilotglossarytermid}) — deleteCopilotglossaryterm: Delete a copilotglossaryterm

## copilotsynonyms
- GET /copilotsynonyms — listCopilotsynonyms: List copilotsynonyms
- POST /copilotsynonyms — createCopilotsynonyms: Create a copilotsynonyms
- GET /copilotsynonyms({copilotsynonymsid}) — getCopilotsynonyms: Retrieve a copilotsynonyms
- PATCH /copilotsynonyms({copilotsynonymsid}) — updateCopilotsynonyms: Update (or upsert) a copilotsynonyms
- DELETE /copilotsynonyms({copilotsynonymsid}) — deleteCopilotsynonyms: Delete a copilotsynonyms

## credential
- GET /credentials — listCredentials: List credentials
- POST /credentials — createCredential: Create a credential
- GET /credentials({credentialid}) — getCredential: Retrieve a credential
- PATCH /credentials({credentialid}) — updateCredential: Update (or upsert) a credential
- DELETE /credentials({credentialid}) — deleteCredential: Delete a credential
- GET /credentials({credentialid})/Microsoft.Dynamics.CRM.ListCredentialDependencies() — listCredentialDependenciesOnCredential: ListCredentialDependencies function

## customapi
- GET /customapis — listCustomapis: List customapis
- POST /customapis — createCustomapi: Create a customapi
- GET /customapis({customapiid}) — getCustomapi: Retrieve a customapi
- PATCH /customapis({customapiid}) — updateCustomapi: Update (or upsert) a customapi
- DELETE /customapis({customapiid}) — deleteCustomapi: Delete a customapi

## customapirequestparameter
- GET /customapirequestparameters — listCustomapirequestparameters: List customapirequestparameters
- POST /customapirequestparameters — createCustomapirequestparameter: Create a customapirequestparameter
- GET /customapirequestparameters({customapirequestparameterid}) — getCustomapirequestparameter: Retrieve a customapirequestparameter
- PATCH /customapirequestparameters({customapirequestparameterid}) — updateCustomapirequestparameter: Update (or upsert) a customapirequestparameter
- DELETE /customapirequestparameters({customapirequestparameterid}) — deleteCustomapirequestparameter: Delete a customapirequestparameter

## customapiresponseproperty
- GET /customapiresponseproperties — listCustomapiresponseproperties: List customapiresponseproperties
- POST /customapiresponseproperties — createCustomapiresponseproperty: Create a customapiresponseproperty
- GET /customapiresponseproperties({customapiresponsepropertyid}) — getCustomapiresponseproperty: Retrieve a customapiresponseproperty
- PATCH /customapiresponseproperties({customapiresponsepropertyid}) — updateCustomapiresponseproperty: Update (or upsert) a customapiresponseproperty
- DELETE /customapiresponseproperties({customapiresponsepropertyid}) — deleteCustomapiresponseproperty: Delete a customapiresponseproperty

## customcontrol
- GET /customcontrols — listCustomcontrols: List customcontrols
- POST /customcontrols — createCustomcontrol: Create a customcontrol
- GET /customcontrols({customcontrolid}) — getCustomcontrol: Retrieve a customcontrol
- PATCH /customcontrols({customcontrolid}) — updateCustomcontrol: Update (or upsert) a customcontrol
- DELETE /customcontrols({customcontrolid}) — deleteCustomcontrol: Delete a customcontrol

## customcontroldefaultconfig
- GET /customcontroldefaultconfigs — listCustomcontroldefaultconfigs: List customcontroldefaultconfigs
- POST /customcontroldefaultconfigs — createCustomcontroldefaultconfig: Create a customcontroldefaultconfig
- GET /customcontroldefaultconfigs({customcontroldefaultconfigid}) — getCustomcontroldefaultconfig: Retrieve a customcontroldefaultconfig
- PATCH /customcontroldefaultconfigs({customcontroldefaultconfigid}) — updateCustomcontroldefaultconfig: Update (or upsert) a customcontroldefaultconfig
- DELETE /customcontroldefaultconfigs({customcontroldefaultconfigid}) — deleteCustomcontroldefaultconfig: Delete a customcontroldefaultconfig
- GET /customcontroldefaultconfigs({customcontroldefaultconfigid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnCustomcontroldefaultconfig: RetrieveUnpublished function
- GET /customcontroldefaultconfigs/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnCustomcontroldefaultconfig: RetrieveUnpublishedMultiple function

## customcontrolresource
- GET /customcontrolresources — listCustomcontrolresources: List customcontrolresources
- POST /customcontrolresources — createCustomcontrolresource: Create a customcontrolresource
- GET /customcontrolresources({customcontrolresourceid}) — getCustomcontrolresource: Retrieve a customcontrolresource
- PATCH /customcontrolresources({customcontrolresourceid}) — updateCustomcontrolresource: Update (or upsert) a customcontrolresource
- DELETE /customcontrolresources({customcontrolresourceid}) — deleteCustomcontrolresource: Delete a customcontrolresource

## customeraddress
- GET /customeraddresses — listCustomeraddresses: List customeraddresses
- POST /customeraddresses — createCustomeraddress: Create a customeraddress
- GET /customeraddresses({customeraddressid}) — getCustomeraddress: Retrieve a customeraddress
- PATCH /customeraddresses({customeraddressid}) — updateCustomeraddress: Update (or upsert) a customeraddress
- DELETE /customeraddresses({customeraddressid}) — deleteCustomeraddress: Delete a customeraddress

## datalakefolder
- GET /datalakefolders — listDatalakefolders: List datalakefolders
- POST /datalakefolders — createDatalakefolder: Create a datalakefolder
- GET /datalakefolders({datalakefolderid}) — getDatalakefolder: Retrieve a datalakefolder
- PATCH /datalakefolders({datalakefolderid}) — updateDatalakefolder: Update (or upsert) a datalakefolder
- DELETE /datalakefolders({datalakefolderid}) — deleteDatalakefolder: Delete a datalakefolder

## datalakefolderpermission
- GET /datalakefolderpermissions — listDatalakefolderpermissions: List datalakefolderpermissions
- POST /datalakefolderpermissions — createDatalakefolderpermission: Create a datalakefolderpermission
- GET /datalakefolderpermissions({datalakefolderpermissionid}) — getDatalakefolderpermission: Retrieve a datalakefolderpermission
- PATCH /datalakefolderpermissions({datalakefolderpermissionid}) — updateDatalakefolderpermission: Update (or upsert) a datalakefolderpermission
- DELETE /datalakefolderpermissions({datalakefolderpermissionid}) — deleteDatalakefolderpermission: Delete a datalakefolderpermission

## datalakeworkspace
- GET /datalakeworkspaces — listDatalakeworkspaces: List datalakeworkspaces
- POST /datalakeworkspaces — createDatalakeworkspace: Create a datalakeworkspace
- GET /datalakeworkspaces({datalakeworkspaceid}) — getDatalakeworkspace: Retrieve a datalakeworkspace
- PATCH /datalakeworkspaces({datalakeworkspaceid}) — updateDatalakeworkspace: Update (or upsert) a datalakeworkspace
- DELETE /datalakeworkspaces({datalakeworkspaceid}) — deleteDatalakeworkspace: Delete a datalakeworkspace

## datalakeworkspacepermission
- GET /datalakeworkspacepermissions — listDatalakeworkspacepermissions: List datalakeworkspacepermissions
- POST /datalakeworkspacepermissions — createDatalakeworkspacepermission: Create a datalakeworkspacepermission
- GET /datalakeworkspacepermissions({datalakeworkspacepermissionid}) — getDatalakeworkspacepermission: Retrieve a datalakeworkspacepermission
- PATCH /datalakeworkspacepermissions({datalakeworkspacepermissionid}) — updateDatalakeworkspacepermission: Update (or upsert) a datalakeworkspacepermission
- DELETE /datalakeworkspacepermissions({datalakeworkspacepermissionid}) — deleteDatalakeworkspacepermission: Delete a datalakeworkspacepermission

## dataperformance
- GET /dataperformances — listDataperformances: List dataperformances
- GET /dataperformances({dataperformanceid}) — getDataperformance: Retrieve a dataperformance

## dataprocessingconfiguration
- GET /dataprocessingconfigurations — listDataprocessingconfigurations: List dataprocessingconfigurations
- POST /dataprocessingconfigurations — createDataprocessingconfiguration: Create a dataprocessingconfiguration
- GET /dataprocessingconfigurations({dataprocessingconfigurationid}) — getDataprocessingconfiguration: Retrieve a dataprocessingconfiguration
- PATCH /dataprocessingconfigurations({dataprocessingconfigurationid}) — updateDataprocessingconfiguration: Update (or upsert) a dataprocessingconfiguration
- DELETE /dataprocessingconfigurations({dataprocessingconfigurationid}) — deleteDataprocessingconfiguration: Delete a dataprocessingconfiguration

## delegatedauthorization
- GET /delegatedauthorizations — listDelegatedauthorizations: List delegatedauthorizations
- POST /delegatedauthorizations — createDelegatedauthorization: Create a delegatedauthorization
- GET /delegatedauthorizations({delegatedauthorizationid}) — getDelegatedauthorization: Retrieve a delegatedauthorization
- PATCH /delegatedauthorizations({delegatedauthorizationid}) — updateDelegatedauthorization: Update (or upsert) a delegatedauthorization
- DELETE /delegatedauthorizations({delegatedauthorizationid}) — deleteDelegatedauthorization: Delete a delegatedauthorization

## dependency
- GET /dependencies — listDependencies: List dependencies
- GET /dependencies({dependencyid}) — getDependency: Retrieve a dependency

## desktopflowbinary
- GET /desktopflowbinaries — listDesktopflowbinaries: List desktopflowbinaries
- POST /desktopflowbinaries — createDesktopflowbinary: Create a desktopflowbinary
- GET /desktopflowbinaries({desktopflowbinaryid}) — getDesktopflowbinary: Retrieve a desktopflowbinary
- PATCH /desktopflowbinaries({desktopflowbinaryid}) — updateDesktopflowbinary: Update (or upsert) a desktopflowbinary
- DELETE /desktopflowbinaries({desktopflowbinaryid}) — deleteDesktopflowbinary: Delete a desktopflowbinary
- GET /desktopflowbinaries({desktopflowbinaryid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnDesktopflowbinary: RetrieveUnpublished function
- GET /desktopflowbinaries/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnDesktopflowbinary: RetrieveUnpublishedMultiple function

## desktopflowmodule
- GET /desktopflowmodules — listDesktopflowmodules: List desktopflowmodules
- POST /desktopflowmodules — createDesktopflowmodule: Create a desktopflowmodule
- GET /desktopflowmodules({desktopflowmoduleid}) — getDesktopflowmodule: Retrieve a desktopflowmodule
- PATCH /desktopflowmodules({desktopflowmoduleid}) — updateDesktopflowmodule: Update (or upsert) a desktopflowmodule
- DELETE /desktopflowmodules({desktopflowmoduleid}) — deleteDesktopflowmodule: Delete a desktopflowmodule
- POST /desktopflowmodules({desktopflowmoduleid})/Microsoft.Dynamics.CRM.AddRequiredUIElementCollectionComponentsToSolutions — addRequiredUIElementCollectionComponentsToSolutionsOnDesktopflowmodule: AddRequiredUIElementCollectionComponentsToSolutions action
- POST /desktopflowmodules({desktopflowmoduleid})/Microsoft.Dynamics.CRM.SaveAsDesktopFlowModule — saveAsDesktopFlowModuleOnDesktopflowmodule: SaveAsDesktopFlowModule action

## displaystring
- GET /displaystrings — listDisplaystrings: List displaystrings
- GET /displaystrings({displaystringid}) — getDisplaystring: Retrieve a displaystring
- PATCH /displaystrings({displaystringid}) — updateDisplaystring: Update (or upsert) a displaystring

## documenttemplate
- GET /documenttemplates — listDocumenttemplates: List documenttemplates
- POST /documenttemplates — createDocumenttemplate: Create a documenttemplate
- GET /documenttemplates({documenttemplateid}) — getDocumenttemplate: Retrieve a documenttemplate
- PATCH /documenttemplates({documenttemplateid}) — updateDocumenttemplate: Update (or upsert) a documenttemplate
- DELETE /documenttemplates({documenttemplateid}) — deleteDocumenttemplate: Delete a documenttemplate

## duplicaterecord
- GET /duplicaterecords — listDuplicaterecords: List duplicaterecords
- GET /duplicaterecords({duplicateid}) — getDuplicaterecord: Retrieve a duplicaterecord

## duplicaterule
- GET /duplicaterules — listDuplicaterules: List duplicaterules
- POST /duplicaterules — createDuplicaterule: Create a duplicaterule
- GET /duplicaterules({duplicateruleid}) — getDuplicaterule: Retrieve a duplicaterule
- PATCH /duplicaterules({duplicateruleid}) — updateDuplicaterule: Update (or upsert) a duplicaterule
- DELETE /duplicaterules({duplicateruleid}) — deleteDuplicaterule: Delete a duplicaterule
- POST /duplicaterules({duplicateruleid})/Microsoft.Dynamics.CRM.PublishDuplicateRule — publishDuplicateRuleOnDuplicaterule: PublishDuplicateRule action

## duplicaterulecondition
- GET /duplicateruleconditions — listDuplicateruleconditions: List duplicateruleconditions
- POST /duplicateruleconditions — createDuplicaterulecondition: Create a duplicaterulecondition
- GET /duplicateruleconditions({duplicateruleconditionid}) — getDuplicaterulecondition: Retrieve a duplicaterulecondition
- PATCH /duplicateruleconditions({duplicateruleconditionid}) — updateDuplicaterulecondition: Update (or upsert) a duplicaterulecondition
- DELETE /duplicateruleconditions({duplicateruleconditionid}) — deleteDuplicaterulecondition: Delete a duplicaterulecondition

## dvfilesearch
- GET /dvfilesearchs — listDvfilesearchs: List dvfilesearchs
- POST /dvfilesearchs — createDvfilesearch: Create a dvfilesearch
- GET /dvfilesearchs({dvfilesearchid}) — getDvfilesearch: Retrieve a dvfilesearch
- PATCH /dvfilesearchs({dvfilesearchid}) — updateDvfilesearch: Update (or upsert) a dvfilesearch
- DELETE /dvfilesearchs({dvfilesearchid}) — deleteDvfilesearch: Delete a dvfilesearch

## dvfilesearchattribute
- GET /dvfilesearchattributes — listDvfilesearchattributes: List dvfilesearchattributes
- POST /dvfilesearchattributes — createDvfilesearchattribute: Create a dvfilesearchattribute
- GET /dvfilesearchattributes({dvfilesearchattributeid}) — getDvfilesearchattribute: Retrieve a dvfilesearchattribute
- PATCH /dvfilesearchattributes({dvfilesearchattributeid}) — updateDvfilesearchattribute: Update (or upsert) a dvfilesearchattribute
- DELETE /dvfilesearchattributes({dvfilesearchattributeid}) — deleteDvfilesearchattribute: Delete a dvfilesearchattribute

## dvfilesearchentity
- GET /dvfilesearchentities — listDvfilesearchentities: List dvfilesearchentities
- POST /dvfilesearchentities — createDvfilesearchentity: Create a dvfilesearchentity
- GET /dvfilesearchentities({dvfilesearchentityid}) — getDvfilesearchentity: Retrieve a dvfilesearchentity
- PATCH /dvfilesearchentities({dvfilesearchentityid}) — updateDvfilesearchentity: Update (or upsert) a dvfilesearchentity
- DELETE /dvfilesearchentities({dvfilesearchentityid}) — deleteDvfilesearchentity: Delete a dvfilesearchentity

## dvtablesearch
- GET /dvtablesearchs — listDvtablesearchs: List dvtablesearchs
- POST /dvtablesearchs — createDvtablesearch: Create a dvtablesearch
- GET /dvtablesearchs({dvtablesearchid}) — getDvtablesearch: Retrieve a dvtablesearch
- PATCH /dvtablesearchs({dvtablesearchid}) — updateDvtablesearch: Update (or upsert) a dvtablesearch
- DELETE /dvtablesearchs({dvtablesearchid}) — deleteDvtablesearch: Delete a dvtablesearch

## dvtablesearchattribute
- GET /dvtablesearchattributes — listDvtablesearchattributes: List dvtablesearchattributes
- POST /dvtablesearchattributes — createDvtablesearchattribute: Create a dvtablesearchattribute
- GET /dvtablesearchattributes({dvtablesearchattributeid}) — getDvtablesearchattribute: Retrieve a dvtablesearchattribute
- PATCH /dvtablesearchattributes({dvtablesearchattributeid}) — updateDvtablesearchattribute: Update (or upsert) a dvtablesearchattribute
- DELETE /dvtablesearchattributes({dvtablesearchattributeid}) — deleteDvtablesearchattribute: Delete a dvtablesearchattribute

## dvtablesearchentity
- GET /dvtablesearchentities — listDvtablesearchentities: List dvtablesearchentities
- POST /dvtablesearchentities — createDvtablesearchentity: Create a dvtablesearchentity
- GET /dvtablesearchentities({dvtablesearchentityid}) — getDvtablesearchentity: Retrieve a dvtablesearchentity
- PATCH /dvtablesearchentities({dvtablesearchentityid}) — updateDvtablesearchentity: Update (or upsert) a dvtablesearchentity
- DELETE /dvtablesearchentities({dvtablesearchentityid}) — deleteDvtablesearchentity: Delete a dvtablesearchentity

## elasticfileattachment
- GET /elasticfileattachments — listElasticfileattachments: List elasticfileattachments
- POST /elasticfileattachments — createElasticfileattachment: Create an elasticfileattachment
- GET /elasticfileattachments({elasticfileattachmentid}) — getElasticfileattachment: Retrieve an elasticfileattachment
- PATCH /elasticfileattachments({elasticfileattachmentid}) — updateElasticfileattachment: Update (or upsert) an elasticfileattachment
- DELETE /elasticfileattachments({elasticfileattachmentid}) — deleteElasticfileattachment: Delete an elasticfileattachment

## email
- GET /emails — listEmails: List emails
- POST /emails — createEmail: Create an email
- GET /emails({activityid}) — getEmail: Retrieve an email
- PATCH /emails({activityid}) — updateEmail: Update (or upsert) an email
- DELETE /emails({activityid}) — deleteEmail: Delete an email
- POST /emails({activityid})/Microsoft.Dynamics.CRM.DeliverImmediatePromoteEmail — deliverImmediatePromoteEmailOnEmail: DeliverImmediatePromoteEmail action
- POST /emails/Microsoft.Dynamics.CRM.DeliverIncomingEmail — deliverIncomingEmailOnEmail: DeliverIncomingEmail action
- POST /emails({activityid})/Microsoft.Dynamics.CRM.DeliverPromoteEmail — deliverPromoteEmailOnEmail: DeliverPromoteEmail action
- POST /emails({activityid})/Microsoft.Dynamics.CRM.SendEmail — sendEmailOnEmail: SendEmail action

## emailaddressconfiguration
- GET /emailaddressconfigurations — listEmailaddressconfigurations: List emailaddressconfigurations
- POST /emailaddressconfigurations — createEmailaddressconfiguration: Create an emailaddressconfiguration
- GET /emailaddressconfigurations({emailaddressconfigurationid}) — getEmailaddressconfiguration: Retrieve an emailaddressconfiguration
- PATCH /emailaddressconfigurations({emailaddressconfigurationid}) — updateEmailaddressconfiguration: Update (or upsert) an emailaddressconfiguration
- DELETE /emailaddressconfigurations({emailaddressconfigurationid}) — deleteEmailaddressconfiguration: Delete an emailaddressconfiguration

## emailserverprofile
- GET /emailserverprofiles — listEmailserverprofiles: List emailserverprofiles
- POST /emailserverprofiles — createEmailserverprofile: Create an emailserverprofile
- GET /emailserverprofiles({emailserverprofileid}) — getEmailserverprofile: Retrieve an emailserverprofile
- PATCH /emailserverprofiles({emailserverprofileid}) — updateEmailserverprofile: Update (or upsert) an emailserverprofile
- DELETE /emailserverprofiles({emailserverprofileid}) — deleteEmailserverprofile: Delete an emailserverprofile

## entity
- GET /entities — listEntities: List entities

## entityanalyticsconfig
- GET /entityanalyticsconfigs — listEntityanalyticsconfigs: List entityanalyticsconfigs
- POST /entityanalyticsconfigs — createEntityanalyticsconfig: Create an entityanalyticsconfig
- GET /entityanalyticsconfigs({entityanalyticsconfigid}) — getEntityanalyticsconfig: Retrieve an entityanalyticsconfig
- PATCH /entityanalyticsconfigs({entityanalyticsconfigid}) — updateEntityanalyticsconfig: Update (or upsert) an entityanalyticsconfig
- DELETE /entityanalyticsconfigs({entityanalyticsconfigid}) — deleteEntityanalyticsconfig: Delete an entityanalyticsconfig

## entityclusterconfig
- GET /entityclusterconfigs — listEntityclusterconfigs: List entityclusterconfigs
- POST /entityclusterconfigs — createEntityclusterconfig: Create an entityclusterconfig
- GET /entityclusterconfigs({entityclusterconfigid}) — getEntityclusterconfig: Retrieve an entityclusterconfig
- PATCH /entityclusterconfigs({entityclusterconfigid}) — updateEntityclusterconfig: Update (or upsert) an entityclusterconfig
- DELETE /entityclusterconfigs({entityclusterconfigid}) — deleteEntityclusterconfig: Delete an entityclusterconfig

## entitydataprovider
- GET /entitydataproviders — listEntitydataproviders: List entitydataproviders
- POST /entitydataproviders — createEntitydataprovider: Create an entitydataprovider
- GET /entitydataproviders({entitydataproviderid}) — getEntitydataprovider: Retrieve an entitydataprovider
- PATCH /entitydataproviders({entitydataproviderid}) — updateEntitydataprovider: Update (or upsert) an entitydataprovider
- DELETE /entitydataproviders({entitydataproviderid}) — deleteEntitydataprovider: Delete an entitydataprovider

## entityimageconfig
- GET /entityimageconfigs — listEntityimageconfigs: List entityimageconfigs
- POST /entityimageconfigs — createEntityimageconfig: Create an entityimageconfig
- GET /entityimageconfigs({entityimageconfigid}) — getEntityimageconfig: Retrieve an entityimageconfig
- PATCH /entityimageconfigs({entityimageconfigid}) — updateEntityimageconfig: Update (or upsert) an entityimageconfig
- DELETE /entityimageconfigs({entityimageconfigid}) — deleteEntityimageconfig: Delete an entityimageconfig

## entitykey
- GET /entitykeys — listEntitykeys: List entitykeys

## entityrecordfilter
- GET /entityrecordfilters — listEntityrecordfilters: List entityrecordfilters
- POST /entityrecordfilters — createEntityrecordfilter: Create an entityrecordfilter
- GET /entityrecordfilters({entityrecordfilterid}) — getEntityrecordfilter: Retrieve an entityrecordfilter
- PATCH /entityrecordfilters({entityrecordfilterid}) — updateEntityrecordfilter: Update (or upsert) an entityrecordfilter
- DELETE /entityrecordfilters({entityrecordfilterid}) — deleteEntityrecordfilter: Delete an entityrecordfilter

## entityrelationship
- GET /entityrelationships — listEntityrelationships: List entityrelationships

## environmentvariabledefinition
- GET /environmentvariabledefinitions — listEnvironmentvariabledefinitions: List environmentvariabledefinitions
- POST /environmentvariabledefinitions — createEnvironmentvariabledefinition: Create an environmentvariabledefinition
- GET /environmentvariabledefinitions({environmentvariabledefinitionid}) — getEnvironmentvariabledefinition: Retrieve an environmentvariabledefinition
- PATCH /environmentvariabledefinitions({environmentvariabledefinitionid}) — updateEnvironmentvariabledefinition: Update (or upsert) an environmentvariabledefinition
- DELETE /environmentvariabledefinitions({environmentvariabledefinitionid}) — deleteEnvironmentvariabledefinition: Delete an environmentvariabledefinition

## environmentvariablevalue
- GET /environmentvariablevalues — listEnvironmentvariablevalues: List environmentvariablevalues
- POST /environmentvariablevalues — createEnvironmentvariablevalue: Create an environmentvariablevalue
- GET /environmentvariablevalues({environmentvariablevalueid}) — getEnvironmentvariablevalue: Retrieve an environmentvariablevalue
- PATCH /environmentvariablevalues({environmentvariablevalueid}) — updateEnvironmentvariablevalue: Update (or upsert) an environmentvariablevalue
- DELETE /environmentvariablevalues({environmentvariablevalueid}) — deleteEnvironmentvariablevalue: Delete an environmentvariablevalue

## eventexpanderbreadcrumb
- GET /eventexpanderbreadcrumbs — listEventexpanderbreadcrumbs: List eventexpanderbreadcrumbs
- POST /eventexpanderbreadcrumbs — createEventexpanderbreadcrumb: Create an eventexpanderbreadcrumb
- GET /eventexpanderbreadcrumbs({eventexpanderbreadcrumbid}) — getEventexpanderbreadcrumb: Retrieve an eventexpanderbreadcrumb
- PATCH /eventexpanderbreadcrumbs({eventexpanderbreadcrumbid}) — updateEventexpanderbreadcrumb: Update (or upsert) an eventexpanderbreadcrumb
- DELETE /eventexpanderbreadcrumbs({eventexpanderbreadcrumbid}) — deleteEventexpanderbreadcrumb: Delete an eventexpanderbreadcrumb

## exchangesyncidmapping
- GET /exchangesyncidmappings — listExchangesyncidmappings: List exchangesyncidmappings
- POST /exchangesyncidmappings — createExchangesyncidmapping: Create an exchangesyncidmapping
- GET /exchangesyncidmappings({exchangesyncidmappingid}) — getExchangesyncidmapping: Retrieve an exchangesyncidmapping
- PATCH /exchangesyncidmappings({exchangesyncidmappingid}) — updateExchangesyncidmapping: Update (or upsert) an exchangesyncidmapping
- DELETE /exchangesyncidmappings({exchangesyncidmappingid}) — deleteExchangesyncidmapping: Delete an exchangesyncidmapping

## expiredprocess
- GET /expiredprocesses — listExpiredprocesses: List expiredprocesses
- POST /expiredprocesses — createExpiredprocess: Create an expiredprocess
- GET /expiredprocesses({businessprocessflowinstanceid}) — getExpiredprocess: Retrieve an expiredprocess
- PATCH /expiredprocesses({businessprocessflowinstanceid}) — updateExpiredprocess: Update (or upsert) an expiredprocess
- DELETE /expiredprocesses({businessprocessflowinstanceid}) — deleteExpiredprocess: Delete an expiredprocess

## exportedexcel
- GET /exportedexcels — listExportedexcels: List exportedexcels
- POST /exportedexcels — createExportedexcel: Create an exportedexcel
- GET /exportedexcels({exportedexcelid}) — getExportedexcel: Retrieve an exportedexcel
- PATCH /exportedexcels({exportedexcelid}) — updateExportedexcel: Update (or upsert) an exportedexcel
- DELETE /exportedexcels({exportedexcelid}) — deleteExportedexcel: Delete an exportedexcel

## exportsolutionupload
- GET /exportsolutionuploads — listExportsolutionuploads: List exportsolutionuploads
- POST /exportsolutionuploads — createExportsolutionupload: Create an exportsolutionupload
- GET /exportsolutionuploads({exportsolutionuploadid}) — getExportsolutionupload: Retrieve an exportsolutionupload
- PATCH /exportsolutionuploads({exportsolutionuploadid}) — updateExportsolutionupload: Update (or upsert) an exportsolutionupload
- DELETE /exportsolutionuploads({exportsolutionuploadid}) — deleteExportsolutionupload: Delete an exportsolutionupload

## fabricaiskill
- GET /fabricaiskills — listFabricaiskills: List fabricaiskills
- POST /fabricaiskills — createFabricaiskill: Create a fabricaiskill
- GET /fabricaiskills({fabricaiskillid}) — getFabricaiskill: Retrieve a fabricaiskill
- PATCH /fabricaiskills({fabricaiskillid}) — updateFabricaiskill: Update (or upsert) a fabricaiskill
- DELETE /fabricaiskills({fabricaiskillid}) — deleteFabricaiskill: Delete a fabricaiskill

## fax
- GET /faxes — listFaxes: List faxes
- POST /faxes — createFax: Create a fax
- GET /faxes({activityid}) — getFax: Retrieve a fax
- PATCH /faxes({activityid}) — updateFax: Update (or upsert) a fax
- DELETE /faxes({activityid}) — deleteFax: Delete a fax

## featurecontrolsetting
- GET /featurecontrolsettings — listFeaturecontrolsettings: List featurecontrolsettings
- POST /featurecontrolsettings — createFeaturecontrolsetting: Create a featurecontrolsetting
- GET /featurecontrolsettings({featurecontrolsettingid}) — getFeaturecontrolsetting: Retrieve a featurecontrolsetting
- PATCH /featurecontrolsettings({featurecontrolsettingid}) — updateFeaturecontrolsetting: Update (or upsert) a featurecontrolsetting
- DELETE /featurecontrolsettings({featurecontrolsettingid}) — deleteFeaturecontrolsetting: Delete a featurecontrolsetting

## federatedknowledgeconfiguration
- GET /federatedknowledgeconfigurations — listFederatedknowledgeconfigurations: List federatedknowledgeconfigurations
- POST /federatedknowledgeconfigurations — createFederatedknowledgeconfiguration: Create a federatedknowledgeconfiguration
- GET /federatedknowledgeconfigurations({federatedknowledgeconfigurationid}) — getFederatedknowledgeconfiguration: Retrieve a federatedknowledgeconfiguration
- PATCH /federatedknowledgeconfigurations({federatedknowledgeconfigurationid}) — updateFederatedknowledgeconfiguration: Update (or upsert) a federatedknowledgeconfiguration
- DELETE /federatedknowledgeconfigurations({federatedknowledgeconfigurationid}) — deleteFederatedknowledgeconfiguration: Delete a federatedknowledgeconfiguration

## federatedknowledgeentityconfiguration
- GET /federatedknowledgeentityconfigurations — listFederatedknowledgeentityconfigurations: List federatedknowledgeentityconfigurations
- POST /federatedknowledgeentityconfigurations — createFederatedknowledgeentityconfiguration: Create a federatedknowledgeentityconfiguration
- GET /federatedknowledgeentityconfigurations({federatedknowledgeentityconfigurationid}) — getFederatedknowledgeentityconfiguration: Retrieve a federatedknowledgeentityconfiguration
- PATCH /federatedknowledgeentityconfigurations({federatedknowledgeentityconfigurationid}) — updateFederatedknowledgeentityconfiguration: Update (or upsert) a federatedknowledgeentityconfiguration
- DELETE /federatedknowledgeentityconfigurations({federatedknowledgeentityconfigurationid}) — deleteFederatedknowledgeentityconfiguration: Delete a federatedknowledgeentityconfiguration

## feedback
- GET /feedback — listFeedback: List feedback
- POST /feedback — createFeedback: Create a feedback
- GET /feedback({feedbackid}) — getFeedback: Retrieve a feedback
- PATCH /feedback({feedbackid}) — updateFeedback: Update (or upsert) a feedback
- DELETE /feedback({feedbackid}) — deleteFeedback: Delete a feedback

## fieldpermission
- GET /fieldpermissions — listFieldpermissions: List fieldpermissions
- POST /fieldpermissions — createFieldpermission: Create a fieldpermission
- GET /fieldpermissions({fieldpermissionid}) — getFieldpermission: Retrieve a fieldpermission
- PATCH /fieldpermissions({fieldpermissionid}) — updateFieldpermission: Update (or upsert) a fieldpermission
- DELETE /fieldpermissions({fieldpermissionid}) — deleteFieldpermission: Delete a fieldpermission

## fieldsecurityprofile
- GET /fieldsecurityprofiles — listFieldsecurityprofiles: List fieldsecurityprofiles
- POST /fieldsecurityprofiles — createFieldsecurityprofile: Create a fieldsecurityprofile
- GET /fieldsecurityprofiles({fieldsecurityprofileid}) — getFieldsecurityprofile: Retrieve a fieldsecurityprofile
- PATCH /fieldsecurityprofiles({fieldsecurityprofileid}) — updateFieldsecurityprofile: Update (or upsert) a fieldsecurityprofile
- DELETE /fieldsecurityprofiles({fieldsecurityprofileid}) — deleteFieldsecurityprofile: Delete a fieldsecurityprofile

## fixedmonthlyfiscalcalendar
- GET /fixedmonthlyfiscalcalendars — listFixedmonthlyfiscalcalendars: List fixedmonthlyfiscalcalendars
- POST /fixedmonthlyfiscalcalendars — createFixedmonthlyfiscalcalendar: Create a fixedmonthlyfiscalcalendar
- GET /fixedmonthlyfiscalcalendars({userfiscalcalendarid}) — getFixedmonthlyfiscalcalendar: Retrieve a fixedmonthlyfiscalcalendar
- PATCH /fixedmonthlyfiscalcalendars({userfiscalcalendarid}) — updateFixedmonthlyfiscalcalendar: Update (or upsert) a fixedmonthlyfiscalcalendar
- DELETE /fixedmonthlyfiscalcalendars({userfiscalcalendarid}) — deleteFixedmonthlyfiscalcalendar: Delete a fixedmonthlyfiscalcalendar

## flowaggregation
- GET /flowaggregations — listFlowaggregations: List flowaggregations
- POST /flowaggregations — createFlowaggregation: Create a flowaggregation
- GET /flowaggregations({flowaggregationid}) — getFlowaggregation: Retrieve a flowaggregation
- PATCH /flowaggregations({flowaggregationid}) — updateFlowaggregation: Update (or upsert) a flowaggregation
- DELETE /flowaggregations({flowaggregationid}) — deleteFlowaggregation: Delete a flowaggregation

## flowcapacityassignment
- GET /flowcapacityassignments — listFlowcapacityassignments: List flowcapacityassignments
- POST /flowcapacityassignments — createFlowcapacityassignment: Create a flowcapacityassignment
- GET /flowcapacityassignments({flowcapacityassignmentid}) — getFlowcapacityassignment: Retrieve a flowcapacityassignment
- PATCH /flowcapacityassignments({flowcapacityassignmentid}) — updateFlowcapacityassignment: Update (or upsert) a flowcapacityassignment
- DELETE /flowcapacityassignments({flowcapacityassignmentid}) — deleteFlowcapacityassignment: Delete a flowcapacityassignment

## flowcredentialapplication
- GET /flowcredentialapplications — listFlowcredentialapplications: List flowcredentialapplications
- POST /flowcredentialapplications — createFlowcredentialapplication: Create a flowcredentialapplication
- GET /flowcredentialapplications({flowcredentialapplicationid}) — getFlowcredentialapplication: Retrieve a flowcredentialapplication
- PATCH /flowcredentialapplications({flowcredentialapplicationid}) — updateFlowcredentialapplication: Update (or upsert) a flowcredentialapplication
- DELETE /flowcredentialapplications({flowcredentialapplicationid}) — deleteFlowcredentialapplication: Delete a flowcredentialapplication

## flowevent
- GET /flowevents — listFlowevents: List flowevents
- POST /flowevents — createFlowevent: Create a flowevent
- GET /flowevents({floweventid}) — getFlowevent: Retrieve a flowevent
- PATCH /flowevents({floweventid}) — updateFlowevent: Update (or upsert) a flowevent
- DELETE /flowevents({floweventid}) — deleteFlowevent: Delete a flowevent

## flowgroup
- GET /flowgroups — listFlowgroups: List flowgroups
- POST /flowgroups — createFlowgroup: Create a flowgroup
- GET /flowgroups({flowgroupid}) — getFlowgroup: Retrieve a flowgroup
- PATCH /flowgroups({flowgroupid}) — updateFlowgroup: Update (or upsert) a flowgroup
- DELETE /flowgroups({flowgroupid}) — deleteFlowgroup: Delete a flowgroup
- POST /flowgroups({flowgroupid})/Microsoft.Dynamics.CRM.RemoveFlowFromFlowGroup — removeFlowFromFlowGroupOnFlowgroup: RemoveFlowFromFlowGroup action
- GET /flowgroups({flowgroupid})/Microsoft.Dynamics.CRM.ListFlowsInFlowGroup() — listFlowsInFlowGroupOnFlowgroup: ListFlowsInFlowGroup function

## flowlog
- GET /flowlogs — listFlowlogs: List flowlogs
- POST /flowlogs — createFlowlog: Create a flowlog
- GET /flowlogs({flowlogid}) — getFlowlog: Retrieve a flowlog
- PATCH /flowlogs({flowlogid}) — updateFlowlog: Update (or upsert) a flowlog
- DELETE /flowlogs({flowlogid}) — deleteFlowlog: Delete a flowlog

## flowmachine
- GET /flowmachines — listFlowmachines: List flowmachines
- POST /flowmachines — createFlowmachine: Create a flowmachine
- GET /flowmachines({flowmachineid}) — getFlowmachine: Retrieve a flowmachine
- PATCH /flowmachines({flowmachineid}) — updateFlowmachine: Update (or upsert) a flowmachine
- DELETE /flowmachines({flowmachineid}) — deleteFlowmachine: Delete a flowmachine
- POST /flowmachines({flowmachineid})/Microsoft.Dynamics.CRM.LeaveGroup — leaveGroupOnFlowmachine: LeaveGroup action
- POST /flowmachines({flowmachineid})/Microsoft.Dynamics.CRM.RestartHostedMachine — restartHostedMachineOnFlowmachine: RestartHostedMachine action

## flowmachinegroup
- GET /flowmachinegroups — listFlowmachinegroups: List flowmachinegroups
- POST /flowmachinegroups — createFlowmachinegroup: Create a flowmachinegroup
- GET /flowmachinegroups({flowmachinegroupid}) — getFlowmachinegroup: Retrieve a flowmachinegroup
- PATCH /flowmachinegroups({flowmachinegroupid}) — updateFlowmachinegroup: Update (or upsert) a flowmachinegroup
- DELETE /flowmachinegroups({flowmachinegroupid}) — deleteFlowmachinegroup: Delete a flowmachinegroup
- POST /flowmachinegroups({flowmachinegroupid})/Microsoft.Dynamics.CRM.CreateFlowCredentialApplication — createFlowCredentialApplicationOnFlowmachinegroup: CreateFlowCredentialApplication action
- POST /flowmachinegroups({flowmachinegroupid})/Microsoft.Dynamics.CRM.DeleteFlowMachineGroup — deleteFlowMachineGroupOnFlowmachinegroup: DeleteFlowMachineGroup action
- POST /flowmachinegroups({flowmachinegroupid})/Microsoft.Dynamics.CRM.GetPublicKey — getPublicKeyOnFlowmachinegroup: GetPublicKey action
- POST /flowmachinegroups({flowmachinegroupid})/Microsoft.Dynamics.CRM.RotateGroupKey — rotateGroupKeyOnFlowmachinegroup: RotateGroupKey action
- POST /flowmachinegroups({flowmachinegroupid})/Microsoft.Dynamics.CRM.UpdateAccountCredentials — updateAccountCredentialsOnFlowmachinegroup: UpdateAccountCredentials action

## flowmachineimage
- GET /flowmachineimages — listFlowmachineimages: List flowmachineimages
- POST /flowmachineimages — createFlowmachineimage: Create a flowmachineimage
- GET /flowmachineimages({flowmachineimageid}) — getFlowmachineimage: Retrieve a flowmachineimage
- PATCH /flowmachineimages({flowmachineimageid}) — updateFlowmachineimage: Update (or upsert) a flowmachineimage
- DELETE /flowmachineimages({flowmachineimageid}) — deleteFlowmachineimage: Delete a flowmachineimage

## flowmachineimageversion
- GET /flowmachineimageversions — listFlowmachineimageversions: List flowmachineimageversions
- POST /flowmachineimageversions — createFlowmachineimageversion: Create a flowmachineimageversion
- GET /flowmachineimageversions({flowmachineimageversionid}) — getFlowmachineimageversion: Retrieve a flowmachineimageversion
- PATCH /flowmachineimageversions({flowmachineimageversionid}) — updateFlowmachineimageversion: Update (or upsert) a flowmachineimageversion
- DELETE /flowmachineimageversions({flowmachineimageversionid}) — deleteFlowmachineimageversion: Delete a flowmachineimageversion

## flowmachinenetwork
- GET /flowmachinenetworks — listFlowmachinenetworks: List flowmachinenetworks
- POST /flowmachinenetworks — createFlowmachinenetwork: Create a flowmachinenetwork
- GET /flowmachinenetworks({flowmachinenetworkid}) — getFlowmachinenetwork: Retrieve a flowmachinenetwork
- PATCH /flowmachinenetworks({flowmachinenetworkid}) — updateFlowmachinenetwork: Update (or upsert) a flowmachinenetwork
- DELETE /flowmachinenetworks({flowmachinenetworkid}) — deleteFlowmachinenetwork: Delete a flowmachinenetwork
- POST /flowmachinenetworks/Microsoft.Dynamics.CRM.CreateFlowMachineNetwork — createFlowMachineNetworkOnFlowmachinenetwork: CreateFlowMachineNetwork action
- POST /flowmachinenetworks({flowmachinenetworkid})/Microsoft.Dynamics.CRM.UpdateFlowMachineNetwork — updateFlowMachineNetworkOnFlowmachinenetwork: UpdateFlowMachineNetwork action

## flowrun
- GET /flowruns — listFlowruns: List flowruns
- POST /flowruns — createFlowrun: Create a flowrun
- GET /flowruns({flowrunid}) — getFlowrun: Retrieve a flowrun
- PATCH /flowruns({flowrunid}) — updateFlowrun: Update (or upsert) a flowrun
- DELETE /flowruns({flowrunid}) — deleteFlowrun: Delete a flowrun

## flowsession
- GET /flowsessions — listFlowsessions: List flowsessions
- POST /flowsessions — createFlowsession: Create a flowsession
- GET /flowsessions({flowsessionid}) — getFlowsession: Retrieve a flowsession
- PATCH /flowsessions({flowsessionid}) — updateFlowsession: Update (or upsert) a flowsession
- DELETE /flowsessions({flowsessionid}) — deleteFlowsession: Delete a flowsession
- POST /flowsessions({flowsessionid})/Microsoft.Dynamics.CRM.CancelDesktopFlowRun — cancelDesktopFlowRunOnFlowsession: CancelDesktopFlowRun action
- POST /flowsessions({flowsessionid})/Microsoft.Dynamics.CRM.TriggerDesktopFlowRunCallback — triggerDesktopFlowRunCallbackOnFlowsession: TriggerDesktopFlowRunCallback action

## flowsessionbinary
- GET /flowsessionbinaries — listFlowsessionbinaries: List flowsessionbinaries
- POST /flowsessionbinaries — createFlowsessionbinary: Create a flowsessionbinary
- GET /flowsessionbinaries({flowsessionbinaryid}) — getFlowsessionbinary: Retrieve a flowsessionbinary
- PATCH /flowsessionbinaries({flowsessionbinaryid}) — updateFlowsessionbinary: Update (or upsert) a flowsessionbinary
- DELETE /flowsessionbinaries({flowsessionbinaryid}) — deleteFlowsessionbinary: Delete a flowsessionbinary

## flowtestsession
- GET /flowtestsessions — listFlowtestsessions: List flowtestsessions
- POST /flowtestsessions — createFlowtestsession: Create a flowtestsession
- GET /flowtestsessions({flowtestsessionid}) — getFlowtestsession: Retrieve a flowtestsession
- PATCH /flowtestsessions({flowtestsessionid}) — updateFlowtestsession: Update (or upsert) a flowtestsession
- DELETE /flowtestsessions({flowtestsessionid}) — deleteFlowtestsession: Delete a flowtestsession

## flowtrigger
- GET /flowtriggers — listFlowtriggers: List flowtriggers
- POST /flowtriggers — createFlowtrigger: Create a flowtrigger
- GET /flowtriggers({flowtriggerid}) — getFlowtrigger: Retrieve a flowtrigger
- PATCH /flowtriggers({flowtriggerid}) — updateFlowtrigger: Update (or upsert) a flowtrigger
- DELETE /flowtriggers({flowtriggerid}) — deleteFlowtrigger: Delete a flowtrigger
- GET /flowtriggers/Microsoft.Dynamics.CRM.GetNextRuns(connectionReferenceIds=@connectionReferenceIds,workflowIds=@workflowIds,runCount=@runCount,startTime=@startTime,triggerIds=@triggerIds) — getNextRunsOnFlowtrigger: GetNextRuns function
- GET /flowtriggers({flowtriggerid})/Microsoft.Dynamics.CRM.GetNextRunsForFlowTrigger() — getNextRunsForFlowTriggerOnFlowtrigger: GetNextRunsForFlowTrigger function

## flowtriggerinstance
- GET /flowtriggerinstances — listFlowtriggerinstances: List flowtriggerinstances
- POST /flowtriggerinstances — createFlowtriggerinstance: Create a flowtriggerinstance
- GET /flowtriggerinstances({flowtriggerinstanceid}) — getFlowtriggerinstance: Retrieve a flowtriggerinstance
- PATCH /flowtriggerinstances({flowtriggerinstanceid}) — updateFlowtriggerinstance: Update (or upsert) a flowtriggerinstance
- DELETE /flowtriggerinstances({flowtriggerinstanceid}) — deleteFlowtriggerinstance: Delete a flowtriggerinstance

## fxexpression
- GET /fxexpressions — listFxexpressions: List fxexpressions
- POST /fxexpressions — createFxexpression: Create a fxexpression
- GET /fxexpressions({fxexpressionid}) — getFxexpression: Retrieve a fxexpression
- PATCH /fxexpressions({fxexpressionid}) — updateFxexpression: Update (or upsert) a fxexpression
- DELETE /fxexpressions({fxexpressionid}) — deleteFxexpression: Delete a fxexpression

## gitbranch
- GET /gitbranches — listGitbranches: List gitbranches
- POST /gitbranches — createGitbranch: Create a gitbranch
- GET /gitbranches({gitbranchid}) — getGitbranch: Retrieve a gitbranch
- PATCH /gitbranches({gitbranchid}) — updateGitbranch: Update (or upsert) a gitbranch
- DELETE /gitbranches({gitbranchid}) — deleteGitbranch: Delete a gitbranch

## gitconfigurationretrievaldatasource
- GET /gitconfigurationretrievaldatasources — listGitconfigurationretrievaldatasources: List gitconfigurationretrievaldatasources
- POST /gitconfigurationretrievaldatasources — createGitconfigurationretrievaldatasource: Create a gitconfigurationretrievaldatasource
- GET /gitconfigurationretrievaldatasources({gitconfigurationretrievaldatasourceid}) — getGitconfigurationretrievaldatasource: Retrieve a gitconfigurationretrievaldatasource
- PATCH /gitconfigurationretrievaldatasources({gitconfigurationretrievaldatasourceid}) — updateGitconfigurationretrievaldatasource: Update (or upsert) a gitconfigurationretrievaldatasource
- DELETE /gitconfigurationretrievaldatasources({gitconfigurationretrievaldatasourceid}) — deleteGitconfigurationretrievaldatasource: Delete a gitconfigurationretrievaldatasource

## githubappconfig
- GET /githubappconfigs — listGithubappconfigs: List githubappconfigs
- POST /githubappconfigs — createGithubappconfig: Create a githubappconfig
- GET /githubappconfigs({githubappconfigid}) — getGithubappconfig: Retrieve a githubappconfig
- PATCH /githubappconfigs({githubappconfigid}) — updateGithubappconfig: Update (or upsert) a githubappconfig
- DELETE /githubappconfigs({githubappconfigid}) — deleteGithubappconfig: Delete a githubappconfig

## gitorganization
- GET /gitorganizations — listGitorganizations: List gitorganizations
- POST /gitorganizations — createGitorganization: Create a gitorganization
- GET /gitorganizations({gitorganizationid}) — getGitorganization: Retrieve a gitorganization
- PATCH /gitorganizations({gitorganizationid}) — updateGitorganization: Update (or upsert) a gitorganization
- DELETE /gitorganizations({gitorganizationid}) — deleteGitorganization: Delete a gitorganization

## gitproject
- GET /gitprojects — listGitprojects: List gitprojects
- POST /gitprojects — createGitproject: Create a gitproject
- GET /gitprojects({gitprojectid}) — getGitproject: Retrieve a gitproject
- PATCH /gitprojects({gitprojectid}) — updateGitproject: Update (or upsert) a gitproject
- DELETE /gitprojects({gitprojectid}) — deleteGitproject: Delete a gitproject

## gitrepository
- GET /gitrepositories — listGitrepositories: List gitrepositories
- POST /gitrepositories — createGitrepository: Create a gitrepository
- GET /gitrepositories({gitrepositoryid}) — getGitrepository: Retrieve a gitrepository
- PATCH /gitrepositories({gitrepositoryid}) — updateGitrepository: Update (or upsert) a gitrepository
- DELETE /gitrepositories({gitrepositoryid}) — deleteGitrepository: Delete a gitrepository

## goal
- GET /goals — listGoals: List goals
- POST /goals — createGoal: Create a goal
- GET /goals({goalid}) — getGoal: Retrieve a goal
- PATCH /goals({goalid}) — updateGoal: Update (or upsert) a goal
- DELETE /goals({goalid}) — deleteGoal: Delete a goal
- POST /goals({goalid})/Microsoft.Dynamics.CRM.Recalculate — recalculateOnGoal: Recalculate action

## goalrollupquery
- GET /goalrollupqueries — listGoalrollupqueries: List goalrollupqueries
- POST /goalrollupqueries — createGoalrollupquery: Create a goalrollupquery
- GET /goalrollupqueries({goalrollupqueryid}) — getGoalrollupquery: Retrieve a goalrollupquery
- PATCH /goalrollupqueries({goalrollupqueryid}) — updateGoalrollupquery: Update (or upsert) a goalrollupquery
- DELETE /goalrollupqueries({goalrollupqueryid}) — deleteGoalrollupquery: Delete a goalrollupquery

## governanceconfiguration
- GET /governanceconfigurations — listGovernanceconfigurations: List governanceconfigurations
- POST /governanceconfigurations — createGovernanceconfiguration: Create a governanceconfiguration
- GET /governanceconfigurations({governanceconfigurationid}) — getGovernanceconfiguration: Retrieve a governanceconfiguration
- PATCH /governanceconfigurations({governanceconfigurationid}) — updateGovernanceconfiguration: Update (or upsert) a governanceconfiguration
- DELETE /governanceconfigurations({governanceconfigurationid}) — deleteGovernanceconfiguration: Delete a governanceconfiguration

## import
- GET /imports — listImports: List imports
- POST /imports — createImport: Create an import
- GET /imports({importid}) — getImport: Retrieve an import
- PATCH /imports({importid}) — updateImport: Update (or upsert) an import
- DELETE /imports({importid}) — deleteImport: Delete an import
- POST /imports({importid})/Microsoft.Dynamics.CRM.ImportRecordsImport — importRecordsImportOnImport: ImportRecordsImport action
- POST /imports({importid})/Microsoft.Dynamics.CRM.ParseImport — parseImportOnImport: ParseImport action

## importentitymapping
- GET /importentitymappings — listImportentitymappings: List importentitymappings
- POST /importentitymappings — createImportentitymapping: Create an importentitymapping
- GET /importentitymappings({importentitymappingid}) — getImportentitymapping: Retrieve an importentitymapping
- DELETE /importentitymappings({importentitymappingid}) — deleteImportentitymapping: Delete an importentitymapping

## importfile
- GET /importfiles — listImportfiles: List importfiles
- POST /importfiles — createImportfile: Create an importfile
- GET /importfiles({importfileid}) — getImportfile: Retrieve an importfile
- PATCH /importfiles({importfileid}) — updateImportfile: Update (or upsert) an importfile
- DELETE /importfiles({importfileid}) — deleteImportfile: Delete an importfile
- GET /importfiles({importfileid})/Microsoft.Dynamics.CRM.GetDistinctValuesImportFile(columnNumber=@columnNumber,pageNumber=@pageNumber,recordsPerPage=@recordsPerPage) — getDistinctValuesImportFileOnImportfile: GetDistinctValuesImportFile function
- GET /importfiles({importfileid})/Microsoft.Dynamics.CRM.GetHeaderColumnsImportFile() — getHeaderColumnsImportFileOnImportfile: GetHeaderColumnsImportFile function

## importjob
- GET /importjobs — listImportjobs: List importjobs
- POST /importjobs — createImportjob: Create an importjob
- GET /importjobs({importjobid}) — getImportjob: Retrieve an importjob
- PATCH /importjobs({importjobid}) — updateImportjob: Update (or upsert) an importjob
- DELETE /importjobs({importjobid}) — deleteImportjob: Delete an importjob

## importlog
- GET /importlogs — listImportlogs: List importlogs
- GET /importlogs({importlogid}) — getImportlog: Retrieve an importlog

## importmap
- GET /importmaps — listImportmaps: List importmaps
- POST /importmaps — createImportmap: Create an importmap
- GET /importmaps({importmapid}) — getImportmap: Retrieve an importmap
- PATCH /importmaps({importmapid}) — updateImportmap: Update (or upsert) an importmap
- DELETE /importmaps({importmapid}) — deleteImportmap: Delete an importmap
- POST /importmaps({importmapid})/Microsoft.Dynamics.CRM.ExportMappingsImportMap — exportMappingsImportMapOnImportmap: ExportMappingsImportMap action

## indexedtrait
- GET /indexedtraits — listIndexedtraits: List indexedtraits
- POST /indexedtraits — createIndexedtrait: Create an indexedtrait
- GET /indexedtraits({indexedtraitid}) — getIndexedtrait: Retrieve an indexedtrait
- PATCH /indexedtraits({indexedtraitid}) — updateIndexedtrait: Update (or upsert) an indexedtrait
- DELETE /indexedtraits({indexedtraitid}) — deleteIndexedtrait: Delete an indexedtrait

## interactionforemail
- GET /interactionforemails — listInteractionforemails: List interactionforemails
- DELETE /interactionforemails({interactionforemailid}) — deleteInteractionforemail: Delete an interactionforemail

## invaliddependency
- GET /invaliddependencies — listInvaliddependencies: List invaliddependencies
- GET /invaliddependencies({invaliddependencyid}) — getInvaliddependency: Retrieve an invaliddependency

## kbarticle
- GET /kbarticles — listKbarticles: List kbarticles
- POST /kbarticles — createKbarticle: Create a kbarticle
- GET /kbarticles({kbarticleid}) — getKbarticle: Retrieve a kbarticle
- PATCH /kbarticles({kbarticleid}) — updateKbarticle: Update (or upsert) a kbarticle
- DELETE /kbarticles({kbarticleid}) — deleteKbarticle: Delete a kbarticle
- GET /kbarticles/Microsoft.Dynamics.CRM.SearchByBodyKbArticle(SearchText=@SearchText,Subject=@Subject,UseInflection=@UseInflection) — searchByBodyKbArticleOnKbarticle: SearchByBodyKbArticle function
- GET /kbarticles/Microsoft.Dynamics.CRM.SearchByKeywordsKbArticle(SearchText=@SearchText,Subject=@Subject,UseInflection=@UseInflection) — searchByKeywordsKbArticleOnKbarticle: SearchByKeywordsKbArticle function
- GET /kbarticles/Microsoft.Dynamics.CRM.SearchByTitleKbArticle(SearchText=@SearchText,Subject=@Subject,UseInflection=@UseInflection) — searchByTitleKbArticleOnKbarticle: SearchByTitleKbArticle function

## kbarticlecomment
- GET /kbarticlecomments — listKbarticlecomments: List kbarticlecomments
- POST /kbarticlecomments — createKbarticlecomment: Create a kbarticlecomment
- GET /kbarticlecomments({kbarticlecommentid}) — getKbarticlecomment: Retrieve a kbarticlecomment
- PATCH /kbarticlecomments({kbarticlecommentid}) — updateKbarticlecomment: Update (or upsert) a kbarticlecomment
- DELETE /kbarticlecomments({kbarticlecommentid}) — deleteKbarticlecomment: Delete a kbarticlecomment

## kbarticletemplate
- GET /kbarticletemplates — listKbarticletemplates: List kbarticletemplates
- POST /kbarticletemplates — createKbarticletemplate: Create a kbarticletemplate
- GET /kbarticletemplates({kbarticletemplateid}) — getKbarticletemplate: Retrieve a kbarticletemplate
- PATCH /kbarticletemplates({kbarticletemplateid}) — updateKbarticletemplate: Update (or upsert) a kbarticletemplate
- DELETE /kbarticletemplates({kbarticletemplateid}) — deleteKbarticletemplate: Delete a kbarticletemplate

## keyvaultreference
- GET /keyvaultreferences — listKeyvaultreferences: List keyvaultreferences
- POST /keyvaultreferences — createKeyvaultreference: Create a keyvaultreference
- GET /keyvaultreferences({keyvaultreferenceid}) — getKeyvaultreference: Retrieve a keyvaultreference
- PATCH /keyvaultreferences({keyvaultreferenceid}) — updateKeyvaultreference: Update (or upsert) a keyvaultreference
- DELETE /keyvaultreferences({keyvaultreferenceid}) — deleteKeyvaultreference: Delete a keyvaultreference

## knowledgearticle
- GET /knowledgearticles — listKnowledgearticles: List knowledgearticles
- POST /knowledgearticles — createKnowledgearticle: Create a knowledgearticle
- GET /knowledgearticles({knowledgearticleid}) — getKnowledgearticle: Retrieve a knowledgearticle
- PATCH /knowledgearticles({knowledgearticleid}) — updateKnowledgearticle: Update (or upsert) a knowledgearticle
- DELETE /knowledgearticles({knowledgearticleid}) — deleteKnowledgearticle: Delete a knowledgearticle

## knowledgearticleviews
- GET /knowledgearticleviews — listKnowledgearticleviews: List knowledgearticleviews
- POST /knowledgearticleviews — createKnowledgearticleviews: Create a knowledgearticleviews
- GET /knowledgearticleviews({knowledgearticleviewsid}) — getKnowledgearticleviews: Retrieve a knowledgearticleviews
- PATCH /knowledgearticleviews({knowledgearticleviewsid}) — updateKnowledgearticleviews: Update (or upsert) a knowledgearticleviews
- DELETE /knowledgearticleviews({knowledgearticleviewsid}) — deleteKnowledgearticleviews: Delete a knowledgearticleviews

## knowledgebaserecord
- GET /knowledgebaserecords — listKnowledgebaserecords: List knowledgebaserecords
- POST /knowledgebaserecords — createKnowledgebaserecord: Create a knowledgebaserecord
- GET /knowledgebaserecords({knowledgebaserecordid}) — getKnowledgebaserecord: Retrieve a knowledgebaserecord
- PATCH /knowledgebaserecords({knowledgebaserecordid}) — updateKnowledgebaserecord: Update (or upsert) a knowledgebaserecord
- DELETE /knowledgebaserecords({knowledgebaserecordid}) — deleteKnowledgebaserecord: Delete a knowledgebaserecord

## knowledgefaq
- GET /knowledgefaqs — listKnowledgefaqs: List knowledgefaqs
- POST /knowledgefaqs — createKnowledgefaq: Create a knowledgefaq
- GET /knowledgefaqs({knowledgefaqid}) — getKnowledgefaq: Retrieve a knowledgefaq
- PATCH /knowledgefaqs({knowledgefaqid}) — updateKnowledgefaq: Update (or upsert) a knowledgefaq
- DELETE /knowledgefaqs({knowledgefaqid}) — deleteKnowledgefaq: Delete a knowledgefaq

## languagelocale
- GET /languagelocale — listLanguagelocale: List languagelocale
- GET /languagelocale({languagelocaleid}) — getLanguagelocale: Retrieve a languagelocale
- PATCH /languagelocale({languagelocaleid}) — updateLanguagelocale: Update (or upsert) a languagelocale

## letter
- GET /letters — listLetters: List letters
- POST /letters — createLetter: Create a letter
- GET /letters({activityid}) — getLetter: Retrieve a letter
- PATCH /letters({activityid}) — updateLetter: Update (or upsert) a letter
- DELETE /letters({activityid}) — deleteLetter: Delete a letter

## lookupmapping
- GET /lookupmappings — listLookupmappings: List lookupmappings
- POST /lookupmappings — createLookupmapping: Create a lookupmapping
- GET /lookupmappings({lookupmappingid}) — getLookupmapping: Retrieve a lookupmapping
- DELETE /lookupmappings({lookupmappingid}) — deleteLookupmapping: Delete a lookupmapping

## mailbox
- GET /mailboxes — listMailboxes: List mailboxes
- POST /mailboxes — createMailbox: Create a mailbox
- GET /mailboxes({mailboxid}) — getMailbox: Retrieve a mailbox
- PATCH /mailboxes({mailboxid}) — updateMailbox: Update (or upsert) a mailbox
- DELETE /mailboxes({mailboxid}) — deleteMailbox: Delete a mailbox

## mailboxtrackingfolder
- GET /mailboxtrackingfolders — listMailboxtrackingfolders: List mailboxtrackingfolders
- POST /mailboxtrackingfolders — createMailboxtrackingfolder: Create a mailboxtrackingfolder
- GET /mailboxtrackingfolders({mailboxtrackingfolderid}) — getMailboxtrackingfolder: Retrieve a mailboxtrackingfolder
- PATCH /mailboxtrackingfolders({mailboxtrackingfolderid}) — updateMailboxtrackingfolder: Update (or upsert) a mailboxtrackingfolder
- DELETE /mailboxtrackingfolders({mailboxtrackingfolderid}) — deleteMailboxtrackingfolder: Delete a mailboxtrackingfolder

## mailmergetemplate
- GET /mailmergetemplates — listMailmergetemplates: List mailmergetemplates
- POST /mailmergetemplates — createMailmergetemplate: Create a mailmergetemplate
- GET /mailmergetemplates({mailmergetemplateid}) — getMailmergetemplate: Retrieve a mailmergetemplate
- PATCH /mailmergetemplates({mailmergetemplateid}) — updateMailmergetemplate: Update (or upsert) a mailmergetemplate
- DELETE /mailmergetemplates({mailmergetemplateid}) — deleteMailmergetemplate: Delete a mailmergetemplate

## mainfewshot
- GET /mainfewshots — listMainfewshots: List mainfewshots
- POST /mainfewshots — createMainfewshot: Create a mainfewshot
- GET /mainfewshots({mainfewshotid}) — getMainfewshot: Retrieve a mainfewshot
- PATCH /mainfewshots({mainfewshotid}) — updateMainfewshot: Update (or upsert) a mainfewshot
- DELETE /mainfewshots({mainfewshotid}) — deleteMainfewshot: Delete a mainfewshot

## makerfewshot
- GET /makerfewshots — listMakerfewshots: List makerfewshots
- POST /makerfewshots — createMakerfewshot: Create a makerfewshot
- GET /makerfewshots({makerfewshotid}) — getMakerfewshot: Retrieve a makerfewshot
- PATCH /makerfewshots({makerfewshotid}) — updateMakerfewshot: Update (or upsert) a makerfewshot
- DELETE /makerfewshots({makerfewshotid}) — deleteMakerfewshot: Delete a makerfewshot

## managedidentity
- GET /managedidentities — listManagedidentities: List managedidentities
- POST /managedidentities — createManagedidentity: Create a managedidentity
- GET /managedidentities({managedidentityid}) — getManagedidentity: Retrieve a managedidentity
- PATCH /managedidentities({managedidentityid}) — updateManagedidentity: Update (or upsert) a managedidentity
- DELETE /managedidentities({managedidentityid}) — deleteManagedidentity: Delete a managedidentity

## maskingrule
- GET /maskingrules — listMaskingrules: List maskingrules
- POST /maskingrules — createMaskingrule: Create a maskingrule
- GET /maskingrules({maskingruleid}) — getMaskingrule: Retrieve a maskingrule
- PATCH /maskingrules({maskingruleid}) — updateMaskingrule: Update (or upsert) a maskingrule
- DELETE /maskingrules({maskingruleid}) — deleteMaskingrule: Delete a maskingrule

## mcpprompt
- GET /mcpprompts — listMcpprompts: List mcpprompts
- POST /mcpprompts — createMcpprompt: Create a mcpprompt
- GET /mcpprompts({mcppromptid}) — getMcpprompt: Retrieve a mcpprompt
- PATCH /mcpprompts({mcppromptid}) — updateMcpprompt: Update (or upsert) a mcpprompt
- DELETE /mcpprompts({mcppromptid}) — deleteMcpprompt: Delete a mcpprompt

## mcpresource
- GET /mcpresources — listMcpresources: List mcpresources
- POST /mcpresources — createMcpresource: Create a mcpresource
- GET /mcpresources({mcpresourceid}) — getMcpresource: Retrieve a mcpresource
- PATCH /mcpresources({mcpresourceid}) — updateMcpresource: Update (or upsert) a mcpresource
- DELETE /mcpresources({mcpresourceid}) — deleteMcpresource: Delete a mcpresource

## mcpresourcecontent
- GET /mcpresourcecontents — listMcpresourcecontents: List mcpresourcecontents
- POST /mcpresourcecontents — createMcpresourcecontent: Create a mcpresourcecontent
- GET /mcpresourcecontents({mcpresourcecontentid}) — getMcpresourcecontent: Retrieve a mcpresourcecontent
- PATCH /mcpresourcecontents({mcpresourcecontentid}) — updateMcpresourcecontent: Update (or upsert) a mcpresourcecontent
- DELETE /mcpresourcecontents({mcpresourcecontentid}) — deleteMcpresourcecontent: Delete a mcpresourcecontent

## mcpserver
- GET /mcpservers — listMcpservers: List mcpservers
- POST /mcpservers — createMcpserver: Create a mcpserver
- GET /mcpservers({mcpserverid}) — getMcpserver: Retrieve a mcpserver
- PATCH /mcpservers({mcpserverid}) — updateMcpserver: Update (or upsert) a mcpserver
- DELETE /mcpservers({mcpserverid}) — deleteMcpserver: Delete a mcpserver

## mcptool
- GET /mcptools — listMcptools: List mcptools
- POST /mcptools — createMcptool: Create a mcptool
- GET /mcptools({mcptoolid}) — getMcptool: Retrieve a mcptool
- PATCH /mcptools({mcptoolid}) — updateMcptool: Update (or upsert) a mcptool
- DELETE /mcptools({mcptoolid}) — deleteMcptool: Delete a mcptool

## metadataforarchival
- GET /metadataforarchivals — listMetadataforarchivals: List metadataforarchivals
- POST /metadataforarchivals — createMetadataforarchival: Create a metadataforarchival
- GET /metadataforarchivals({metadataforarchivalid}) — getMetadataforarchival: Retrieve a metadataforarchival
- PATCH /metadataforarchivals({metadataforarchivalid}) — updateMetadataforarchival: Update (or upsert) a metadataforarchival
- DELETE /metadataforarchivals({metadataforarchivalid}) — deleteMetadataforarchival: Delete a metadataforarchival

## metric
- GET /metrics — listMetrics: List metrics
- POST /metrics — createMetric: Create a metric
- GET /metrics({metricid}) — getMetric: Retrieve a metric
- PATCH /metrics({metricid}) — updateMetric: Update (or upsert) a metric
- DELETE /metrics({metricid}) — deleteMetric: Delete a metric

## mobileofflineprofile
- GET /mobileofflineprofiles — listMobileofflineprofiles: List mobileofflineprofiles
- POST /mobileofflineprofiles — createMobileofflineprofile: Create a mobileofflineprofile
- GET /mobileofflineprofiles({mobileofflineprofileid}) — getMobileofflineprofile: Retrieve a mobileofflineprofile
- PATCH /mobileofflineprofiles({mobileofflineprofileid}) — updateMobileofflineprofile: Update (or upsert) a mobileofflineprofile
- DELETE /mobileofflineprofiles({mobileofflineprofileid}) — deleteMobileofflineprofile: Delete a mobileofflineprofile
- POST /mobileofflineprofiles({mobileofflineprofileid})/Microsoft.Dynamics.CRM.CloneMobileOfflineProfile — cloneMobileOfflineProfileOnMobileofflineprofile: CloneMobileOfflineProfile action
- GET /mobileofflineprofiles({mobileofflineprofileid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnMobileofflineprofile: RetrieveUnpublished function
- GET /mobileofflineprofiles/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnMobileofflineprofile: RetrieveUnpublishedMultiple function

## mobileofflineprofileextension
- GET /mobileofflineprofileextensions — listMobileofflineprofileextensions: List mobileofflineprofileextensions
- POST /mobileofflineprofileextensions — createMobileofflineprofileextension: Create a mobileofflineprofileextension
- GET /mobileofflineprofileextensions({mobileofflineprofileextensionid}) — getMobileofflineprofileextension: Retrieve a mobileofflineprofileextension
- PATCH /mobileofflineprofileextensions({mobileofflineprofileextensionid}) — updateMobileofflineprofileextension: Update (or upsert) a mobileofflineprofileextension
- DELETE /mobileofflineprofileextensions({mobileofflineprofileextensionid}) — deleteMobileofflineprofileextension: Delete a mobileofflineprofileextension

## mobileofflineprofileitem
- GET /mobileofflineprofileitems — listMobileofflineprofileitems: List mobileofflineprofileitems
- POST /mobileofflineprofileitems — createMobileofflineprofileitem: Create a mobileofflineprofileitem
- GET /mobileofflineprofileitems({mobileofflineprofileitemid}) — getMobileofflineprofileitem: Retrieve a mobileofflineprofileitem
- PATCH /mobileofflineprofileitems({mobileofflineprofileitemid}) — updateMobileofflineprofileitem: Update (or upsert) a mobileofflineprofileitem
- DELETE /mobileofflineprofileitems({mobileofflineprofileitemid}) — deleteMobileofflineprofileitem: Delete a mobileofflineprofileitem
- GET /mobileofflineprofileitems({mobileofflineprofileitemid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnMobileofflineprofileitem: RetrieveUnpublished function
- GET /mobileofflineprofileitems/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnMobileofflineprofileitem: RetrieveUnpublishedMultiple function

## mobileofflineprofileitemassociation
- GET /mobileofflineprofileitemassociations — listMobileofflineprofileitemassociations: List mobileofflineprofileitemassociations
- POST /mobileofflineprofileitemassociations — createMobileofflineprofileitemassociation: Create a mobileofflineprofileitemassociation
- GET /mobileofflineprofileitemassociations({mobileofflineprofileitemassociationid}) — getMobileofflineprofileitemassociation: Retrieve a mobileofflineprofileitemassociation
- PATCH /mobileofflineprofileitemassociations({mobileofflineprofileitemassociationid}) — updateMobileofflineprofileitemassociation: Update (or upsert) a mobileofflineprofileitemassociation
- DELETE /mobileofflineprofileitemassociations({mobileofflineprofileitemassociationid}) — deleteMobileofflineprofileitemassociation: Delete a mobileofflineprofileitemassociation

## mobileofflineprofileitemfilter
- GET /mobileofflineprofileitemfilters — listMobileofflineprofileitemfilters: List mobileofflineprofileitemfilters
- POST /mobileofflineprofileitemfilters — createMobileofflineprofileitemfilter: Create a mobileofflineprofileitemfilter
- GET /mobileofflineprofileitemfilters({mobileofflineprofileitemfilterid}) — getMobileofflineprofileitemfilter: Retrieve a mobileofflineprofileitemfilter
- PATCH /mobileofflineprofileitemfilters({mobileofflineprofileitemfilterid}) — updateMobileofflineprofileitemfilter: Update (or upsert) a mobileofflineprofileitemfilter
- DELETE /mobileofflineprofileitemfilters({mobileofflineprofileitemfilterid}) — deleteMobileofflineprofileitemfilter: Delete a mobileofflineprofileitemfilter

## monthlyfiscalcalendar
- GET /monthlyfiscalcalendars — listMonthlyfiscalcalendars: List monthlyfiscalcalendars
- POST /monthlyfiscalcalendars — createMonthlyfiscalcalendar: Create a monthlyfiscalcalendar
- GET /monthlyfiscalcalendars({userfiscalcalendarid}) — getMonthlyfiscalcalendar: Retrieve a monthlyfiscalcalendar
- PATCH /monthlyfiscalcalendars({userfiscalcalendarid}) — updateMonthlyfiscalcalendar: Update (or upsert) a monthlyfiscalcalendar
- DELETE /monthlyfiscalcalendars({userfiscalcalendarid}) — deleteMonthlyfiscalcalendar: Delete a monthlyfiscalcalendar

## mos3management
- GET /mos3managements — listMos3managements: List mos3managements
- POST /mos3managements — createMos3management: Create a mos3management
- GET /mos3managements({mos3managementid}) — getMos3management: Retrieve a mos3management
- PATCH /mos3managements({mos3managementid}) — updateMos3management: Update (or upsert) a mos3management
- DELETE /mos3managements({mos3managementid}) — deleteMos3management: Delete a mos3management

## msdyn_aibdataset
- GET /msdyn_aibdatasets — listMsdyn_aibdatasets: List msdyn_aibdatasets
- POST /msdyn_aibdatasets — createMsdyn_aibdataset: Create a msdyn_aibdataset
- GET /msdyn_aibdatasets({msdyn_aibdatasetid}) — getMsdyn_aibdataset: Retrieve a msdyn_aibdataset
- PATCH /msdyn_aibdatasets({msdyn_aibdatasetid}) — updateMsdyn_aibdataset: Update (or upsert) a msdyn_aibdataset
- DELETE /msdyn_aibdatasets({msdyn_aibdatasetid}) — deleteMsdyn_aibdataset: Delete a msdyn_aibdataset

## msdyn_aibdatasetfile
- GET /msdyn_aibdatasetfiles — listMsdyn_aibdatasetfiles: List msdyn_aibdatasetfiles
- POST /msdyn_aibdatasetfiles — createMsdyn_aibdatasetfile: Create a msdyn_aibdatasetfile
- GET /msdyn_aibdatasetfiles({msdyn_aibdatasetfileid}) — getMsdyn_aibdatasetfile: Retrieve a msdyn_aibdatasetfile
- PATCH /msdyn_aibdatasetfiles({msdyn_aibdatasetfileid}) — updateMsdyn_aibdatasetfile: Update (or upsert) a msdyn_aibdatasetfile
- DELETE /msdyn_aibdatasetfiles({msdyn_aibdatasetfileid}) — deleteMsdyn_aibdatasetfile: Delete a msdyn_aibdatasetfile

## msdyn_aibdatasetrecord
- GET /msdyn_aibdatasetrecords — listMsdyn_aibdatasetrecords: List msdyn_aibdatasetrecords
- POST /msdyn_aibdatasetrecords — createMsdyn_aibdatasetrecord: Create a msdyn_aibdatasetrecord
- GET /msdyn_aibdatasetrecords({msdyn_aibdatasetrecordid}) — getMsdyn_aibdatasetrecord: Retrieve a msdyn_aibdatasetrecord
- PATCH /msdyn_aibdatasetrecords({msdyn_aibdatasetrecordid}) — updateMsdyn_aibdatasetrecord: Update (or upsert) a msdyn_aibdatasetrecord
- DELETE /msdyn_aibdatasetrecords({msdyn_aibdatasetrecordid}) — deleteMsdyn_aibdatasetrecord: Delete a msdyn_aibdatasetrecord

## msdyn_aibdatasetscontainer
- GET /msdyn_aibdatasetscontainers — listMsdyn_aibdatasetscontainers: List msdyn_aibdatasetscontainers
- POST /msdyn_aibdatasetscontainers — createMsdyn_aibdatasetscontainer: Create a msdyn_aibdatasetscontainer
- GET /msdyn_aibdatasetscontainers({msdyn_aibdatasetscontainerid}) — getMsdyn_aibdatasetscontainer: Retrieve a msdyn_aibdatasetscontainer
- PATCH /msdyn_aibdatasetscontainers({msdyn_aibdatasetscontainerid}) — updateMsdyn_aibdatasetscontainer: Update (or upsert) a msdyn_aibdatasetscontainer
- DELETE /msdyn_aibdatasetscontainers({msdyn_aibdatasetscontainerid}) — deleteMsdyn_aibdatasetscontainer: Delete a msdyn_aibdatasetscontainer

## msdyn_aibfeedbackloop
- GET /msdyn_aibfeedbackloops — listMsdyn_aibfeedbackloops: List msdyn_aibfeedbackloops
- POST /msdyn_aibfeedbackloops — createMsdyn_aibfeedbackloop: Create a msdyn_aibfeedbackloop
- GET /msdyn_aibfeedbackloops({msdyn_aibfeedbackloopid}) — getMsdyn_aibfeedbackloop: Retrieve a msdyn_aibfeedbackloop
- PATCH /msdyn_aibfeedbackloops({msdyn_aibfeedbackloopid}) — updateMsdyn_aibfeedbackloop: Update (or upsert) a msdyn_aibfeedbackloop
- DELETE /msdyn_aibfeedbackloops({msdyn_aibfeedbackloopid}) — deleteMsdyn_aibfeedbackloop: Delete a msdyn_aibfeedbackloop

## msdyn_aibfile
- GET /msdyn_aibfiles — listMsdyn_aibfiles: List msdyn_aibfiles
- POST /msdyn_aibfiles — createMsdyn_aibfile: Create a msdyn_aibfile
- GET /msdyn_aibfiles({msdyn_aibfileid}) — getMsdyn_aibfile: Retrieve a msdyn_aibfile
- PATCH /msdyn_aibfiles({msdyn_aibfileid}) — updateMsdyn_aibfile: Update (or upsert) a msdyn_aibfile
- DELETE /msdyn_aibfiles({msdyn_aibfileid}) — deleteMsdyn_aibfile: Delete a msdyn_aibfile

## msdyn_aibfileattacheddata
- GET /msdyn_aibfileattacheddatas — listMsdyn_aibfileattacheddatas: List msdyn_aibfileattacheddatas
- POST /msdyn_aibfileattacheddatas — createMsdyn_aibfileattacheddata: Create a msdyn_aibfileattacheddata
- GET /msdyn_aibfileattacheddatas({msdyn_aibfileattacheddataid}) — getMsdyn_aibfileattacheddata: Retrieve a msdyn_aibfileattacheddata
- PATCH /msdyn_aibfileattacheddatas({msdyn_aibfileattacheddataid}) — updateMsdyn_aibfileattacheddata: Update (or upsert) a msdyn_aibfileattacheddata
- DELETE /msdyn_aibfileattacheddatas({msdyn_aibfileattacheddataid}) — deleteMsdyn_aibfileattacheddata: Delete a msdyn_aibfileattacheddata

## msdyn_aiconfiguration
- GET /msdyn_aiconfigurations — listMsdyn_aiconfigurations: List msdyn_aiconfigurations
- POST /msdyn_aiconfigurations — createMsdyn_aiconfiguration: Create a msdyn_aiconfiguration
- GET /msdyn_aiconfigurations({msdyn_aiconfigurationid}) — getMsdyn_aiconfiguration: Retrieve a msdyn_aiconfiguration
- PATCH /msdyn_aiconfigurations({msdyn_aiconfigurationid}) — updateMsdyn_aiconfiguration: Update (or upsert) a msdyn_aiconfiguration
- DELETE /msdyn_aiconfigurations({msdyn_aiconfigurationid}) — deleteMsdyn_aiconfiguration: Delete a msdyn_aiconfiguration
- POST /msdyn_aiconfigurations({msdyn_aiconfigurationid})/Microsoft.Dynamics.CRM.CancelTraining — cancelTrainingOnMsdyn_aiconfiguration: CancelTraining action
- POST /msdyn_aiconfigurations({msdyn_aiconfigurationid})/Microsoft.Dynamics.CRM.PublishAIConfiguration — publishAIConfigurationOnMsdyn_aiconfiguration: PublishAIConfiguration action
- POST /msdyn_aiconfigurations({msdyn_aiconfigurationid})/Microsoft.Dynamics.CRM.QuickTest — quickTestOnMsdyn_aiconfiguration: QuickTest action
- POST /msdyn_aiconfigurations({msdyn_aiconfigurationid})/Microsoft.Dynamics.CRM.ScheduleTraining — scheduleTrainingOnMsdyn_aiconfiguration: ScheduleTraining action
- POST /msdyn_aiconfigurations({msdyn_aiconfigurationid})/Microsoft.Dynamics.CRM.Train — trainOnMsdyn_aiconfiguration: Train action
- POST /msdyn_aiconfigurations({msdyn_aiconfigurationid})/Microsoft.Dynamics.CRM.UnpublishAIConfiguration — unpublishAIConfigurationOnMsdyn_aiconfiguration: UnpublishAIConfiguration action
- POST /msdyn_aiconfigurations({msdyn_aiconfigurationid})/Microsoft.Dynamics.CRM.UnscheduleTraining — unscheduleTrainingOnMsdyn_aiconfiguration: UnscheduleTraining action

## msdyn_aiconfiguration_documenttemplate
- GET /msdyn_aiconfiguration_documenttemplateset — listMsdyn_aiconfiguration_documenttemplateset: List msdyn_aiconfiguration_documenttemplateset

## msdyn_aidataprocessingevent
- GET /msdyn_aidataprocessingevents — listMsdyn_aidataprocessingevents: List msdyn_aidataprocessingevents
- POST /msdyn_aidataprocessingevents — createMsdyn_aidataprocessingevent: Create a msdyn_aidataprocessingevent
- GET /msdyn_aidataprocessingevents({msdyn_aidataprocessingeventid}) — getMsdyn_aidataprocessingevent: Retrieve a msdyn_aidataprocessingevent
- PATCH /msdyn_aidataprocessingevents({msdyn_aidataprocessingeventid}) — updateMsdyn_aidataprocessingevent: Update (or upsert) a msdyn_aidataprocessingevent
- DELETE /msdyn_aidataprocessingevents({msdyn_aidataprocessingeventid}) — deleteMsdyn_aidataprocessingevent: Delete a msdyn_aidataprocessingevent

## msdyn_aidocumenttemplate
- GET /msdyn_aidocumenttemplates — listMsdyn_aidocumenttemplates: List msdyn_aidocumenttemplates
- POST /msdyn_aidocumenttemplates — createMsdyn_aidocumenttemplate: Create a msdyn_aidocumenttemplate
- GET /msdyn_aidocumenttemplates({msdyn_aidocumenttemplateid}) — getMsdyn_aidocumenttemplate: Retrieve a msdyn_aidocumenttemplate
- PATCH /msdyn_aidocumenttemplates({msdyn_aidocumenttemplateid}) — updateMsdyn_aidocumenttemplate: Update (or upsert) a msdyn_aidocumenttemplate
- DELETE /msdyn_aidocumenttemplates({msdyn_aidocumenttemplateid}) — deleteMsdyn_aidocumenttemplate: Delete a msdyn_aidocumenttemplate

## msdyn_aievaluationconfiguration
- GET /msdyn_aievaluationconfigurations — listMsdyn_aievaluationconfigurations: List msdyn_aievaluationconfigurations
- POST /msdyn_aievaluationconfigurations — createMsdyn_aievaluationconfiguration: Create a msdyn_aievaluationconfiguration
- GET /msdyn_aievaluationconfigurations({msdyn_aievaluationconfigurationid}) — getMsdyn_aievaluationconfiguration: Retrieve a msdyn_aievaluationconfiguration
- PATCH /msdyn_aievaluationconfigurations({msdyn_aievaluationconfigurationid}) — updateMsdyn_aievaluationconfiguration: Update (or upsert) a msdyn_aievaluationconfiguration
- DELETE /msdyn_aievaluationconfigurations({msdyn_aievaluationconfigurationid}) — deleteMsdyn_aievaluationconfiguration: Delete a msdyn_aievaluationconfiguration

## msdyn_aievaluationrun
- GET /msdyn_aievaluationruns — listMsdyn_aievaluationruns: List msdyn_aievaluationruns
- POST /msdyn_aievaluationruns — createMsdyn_aievaluationrun: Create a msdyn_aievaluationrun
- GET /msdyn_aievaluationruns({msdyn_aievaluationrunid}) — getMsdyn_aievaluationrun: Retrieve a msdyn_aievaluationrun
- PATCH /msdyn_aievaluationruns({msdyn_aievaluationrunid}) — updateMsdyn_aievaluationrun: Update (or upsert) a msdyn_aievaluationrun
- DELETE /msdyn_aievaluationruns({msdyn_aievaluationrunid}) — deleteMsdyn_aievaluationrun: Delete a msdyn_aievaluationrun

## msdyn_aievent
- GET /msdyn_aievents — listMsdyn_aievents: List msdyn_aievents
- POST /msdyn_aievents — createMsdyn_aievent: Create a msdyn_aievent
- GET /msdyn_aievents({msdyn_aieventid}) — getMsdyn_aievent: Retrieve a msdyn_aievent
- PATCH /msdyn_aievents({msdyn_aieventid}) — updateMsdyn_aievent: Update (or upsert) a msdyn_aievent
- DELETE /msdyn_aievents({msdyn_aieventid}) — deleteMsdyn_aievent: Delete a msdyn_aievent

## msdyn_aifptrainingdocument
- GET /msdyn_aifptrainingdocuments — listMsdyn_aifptrainingdocuments: List msdyn_aifptrainingdocuments
- POST /msdyn_aifptrainingdocuments — createMsdyn_aifptrainingdocument: Create a msdyn_aifptrainingdocument
- GET /msdyn_aifptrainingdocuments({msdyn_aifptrainingdocumentid}) — getMsdyn_aifptrainingdocument: Retrieve a msdyn_aifptrainingdocument
- PATCH /msdyn_aifptrainingdocuments({msdyn_aifptrainingdocumentid}) — updateMsdyn_aifptrainingdocument: Update (or upsert) a msdyn_aifptrainingdocument
- DELETE /msdyn_aifptrainingdocuments({msdyn_aifptrainingdocumentid}) — deleteMsdyn_aifptrainingdocument: Delete a msdyn_aifptrainingdocument

## msdyn_aimodel
- GET /msdyn_aimodels — listMsdyn_aimodels: List msdyn_aimodels
- POST /msdyn_aimodels — createMsdyn_aimodel: Create a msdyn_aimodel
- GET /msdyn_aimodels({msdyn_aimodelid}) — getMsdyn_aimodel: Retrieve a msdyn_aimodel
- PATCH /msdyn_aimodels({msdyn_aimodelid}) — updateMsdyn_aimodel: Update (or upsert) a msdyn_aimodel
- DELETE /msdyn_aimodels({msdyn_aimodelid}) — deleteMsdyn_aimodel: Delete a msdyn_aimodel
- POST /msdyn_aimodels({msdyn_aimodelid})/Microsoft.Dynamics.CRM.AddToFeedbackLoop — addToFeedbackLoopOnMsdyn_aimodel: AddToFeedbackLoop action
- POST /msdyn_aimodels({msdyn_aimodelid})/Microsoft.Dynamics.CRM.BatchPrediction — batchPredictionOnMsdyn_aimodel: BatchPrediction action
- POST /msdyn_aimodels({msdyn_aimodelid})/Microsoft.Dynamics.CRM.Predict — predictOnMsdyn_aimodel: Predict action
- POST /msdyn_aimodels({msdyn_aimodelid})/Microsoft.Dynamics.CRM.PredictByReference — predictByReferenceOnMsdyn_aimodel: PredictByReference action
- POST /msdyn_aimodels({msdyn_aimodelid})/Microsoft.Dynamics.CRM.PredictionSchema — predictionSchemaOnMsdyn_aimodel: PredictionSchema action
- POST /msdyn_aimodels({msdyn_aimodelid})/Microsoft.Dynamics.CRM.SchedulePrediction — schedulePredictionOnMsdyn_aimodel: SchedulePrediction action
- POST /msdyn_aimodels({msdyn_aimodelid})/Microsoft.Dynamics.CRM.ScheduleRetrain — scheduleRetrainOnMsdyn_aimodel: ScheduleRetrain action
- POST /msdyn_aimodels({msdyn_aimodelid})/Microsoft.Dynamics.CRM.UnschedulePrediction — unschedulePredictionOnMsdyn_aimodel: UnschedulePrediction action

## msdyn_aiodimage
- GET /msdyn_aiodimages — listMsdyn_aiodimages: List msdyn_aiodimages
- POST /msdyn_aiodimages — createMsdyn_aiodimage: Create a msdyn_aiodimage
- GET /msdyn_aiodimages({msdyn_aiodimageid}) — getMsdyn_aiodimage: Retrieve a msdyn_aiodimage
- PATCH /msdyn_aiodimages({msdyn_aiodimageid}) — updateMsdyn_aiodimage: Update (or upsert) a msdyn_aiodimage
- DELETE /msdyn_aiodimages({msdyn_aiodimageid}) — deleteMsdyn_aiodimage: Delete a msdyn_aiodimage

## msdyn_aiodlabel
- GET /msdyn_aiodlabels — listMsdyn_aiodlabels: List msdyn_aiodlabels
- POST /msdyn_aiodlabels — createMsdyn_aiodlabel: Create a msdyn_aiodlabel
- GET /msdyn_aiodlabels({msdyn_aiodlabelid}) — getMsdyn_aiodlabel: Retrieve a msdyn_aiodlabel
- PATCH /msdyn_aiodlabels({msdyn_aiodlabelid}) — updateMsdyn_aiodlabel: Update (or upsert) a msdyn_aiodlabel
- DELETE /msdyn_aiodlabels({msdyn_aiodlabelid}) — deleteMsdyn_aiodlabel: Delete a msdyn_aiodlabel

## msdyn_aiodtrainingboundingbox
- GET /msdyn_aiodtrainingboundingboxes — listMsdyn_aiodtrainingboundingboxes: List msdyn_aiodtrainingboundingboxes
- POST /msdyn_aiodtrainingboundingboxes — createMsdyn_aiodtrainingboundingbox: Create a msdyn_aiodtrainingboundingbox
- GET /msdyn_aiodtrainingboundingboxes({msdyn_aiodtrainingboundingboxid}) — getMsdyn_aiodtrainingboundingbox: Retrieve a msdyn_aiodtrainingboundingbox
- PATCH /msdyn_aiodtrainingboundingboxes({msdyn_aiodtrainingboundingboxid}) — updateMsdyn_aiodtrainingboundingbox: Update (or upsert) a msdyn_aiodtrainingboundingbox
- DELETE /msdyn_aiodtrainingboundingboxes({msdyn_aiodtrainingboundingboxid}) — deleteMsdyn_aiodtrainingboundingbox: Delete a msdyn_aiodtrainingboundingbox

## msdyn_aiodtrainingimage
- GET /msdyn_aiodtrainingimages — listMsdyn_aiodtrainingimages: List msdyn_aiodtrainingimages
- POST /msdyn_aiodtrainingimages — createMsdyn_aiodtrainingimage: Create a msdyn_aiodtrainingimage
- GET /msdyn_aiodtrainingimages({msdyn_aiodtrainingimageid}) — getMsdyn_aiodtrainingimage: Retrieve a msdyn_aiodtrainingimage
- PATCH /msdyn_aiodtrainingimages({msdyn_aiodtrainingimageid}) — updateMsdyn_aiodtrainingimage: Update (or upsert) a msdyn_aiodtrainingimage
- DELETE /msdyn_aiodtrainingimages({msdyn_aiodtrainingimageid}) — deleteMsdyn_aiodtrainingimage: Delete a msdyn_aiodtrainingimage

## msdyn_aitemplate
- GET /msdyn_aitemplates — listMsdyn_aitemplates: List msdyn_aitemplates
- POST /msdyn_aitemplates — createMsdyn_aitemplate: Create a msdyn_aitemplate
- GET /msdyn_aitemplates({msdyn_aitemplateid}) — getMsdyn_aitemplate: Retrieve a msdyn_aitemplate
- PATCH /msdyn_aitemplates({msdyn_aitemplateid}) — updateMsdyn_aitemplate: Update (or upsert) a msdyn_aitemplate
- DELETE /msdyn_aitemplates({msdyn_aitemplateid}) — deleteMsdyn_aitemplate: Delete a msdyn_aitemplate

## msdyn_aitestcase
- GET /msdyn_aitestcases — listMsdyn_aitestcases: List msdyn_aitestcases
- POST /msdyn_aitestcases — createMsdyn_aitestcase: Create a msdyn_aitestcase
- GET /msdyn_aitestcases({msdyn_aitestcaseid}) — getMsdyn_aitestcase: Retrieve a msdyn_aitestcase
- PATCH /msdyn_aitestcases({msdyn_aitestcaseid}) — updateMsdyn_aitestcase: Update (or upsert) a msdyn_aitestcase
- DELETE /msdyn_aitestcases({msdyn_aitestcaseid}) — deleteMsdyn_aitestcase: Delete a msdyn_aitestcase

## msdyn_aitestcasedocument
- GET /msdyn_aitestcasedocuments — listMsdyn_aitestcasedocuments: List msdyn_aitestcasedocuments
- POST /msdyn_aitestcasedocuments — createMsdyn_aitestcasedocument: Create a msdyn_aitestcasedocument
- GET /msdyn_aitestcasedocuments({msdyn_aitestcasedocumentid}) — getMsdyn_aitestcasedocument: Retrieve a msdyn_aitestcasedocument
- PATCH /msdyn_aitestcasedocuments({msdyn_aitestcasedocumentid}) — updateMsdyn_aitestcasedocument: Update (or upsert) a msdyn_aitestcasedocument
- DELETE /msdyn_aitestcasedocuments({msdyn_aitestcasedocumentid}) — deleteMsdyn_aitestcasedocument: Delete a msdyn_aitestcasedocument

## msdyn_aitestcaseinput
- GET /msdyn_aitestcaseinputs — listMsdyn_aitestcaseinputs: List msdyn_aitestcaseinputs
- POST /msdyn_aitestcaseinputs — createMsdyn_aitestcaseinput: Create a msdyn_aitestcaseinput
- GET /msdyn_aitestcaseinputs({msdyn_aitestcaseinputid}) — getMsdyn_aitestcaseinput: Retrieve a msdyn_aitestcaseinput
- PATCH /msdyn_aitestcaseinputs({msdyn_aitestcaseinputid}) — updateMsdyn_aitestcaseinput: Update (or upsert) a msdyn_aitestcaseinput
- DELETE /msdyn_aitestcaseinputs({msdyn_aitestcaseinputid}) — deleteMsdyn_aitestcaseinput: Delete a msdyn_aitestcaseinput

## msdyn_aitestrun
- GET /msdyn_aitestruns — listMsdyn_aitestruns: List msdyn_aitestruns
- POST /msdyn_aitestruns — createMsdyn_aitestrun: Create a msdyn_aitestrun
- GET /msdyn_aitestruns({msdyn_aitestrunid}) — getMsdyn_aitestrun: Retrieve a msdyn_aitestrun
- PATCH /msdyn_aitestruns({msdyn_aitestrunid}) — updateMsdyn_aitestrun: Update (or upsert) a msdyn_aitestrun
- DELETE /msdyn_aitestruns({msdyn_aitestrunid}) — deleteMsdyn_aitestrun: Delete a msdyn_aitestrun

## msdyn_aitestrunbatch
- GET /msdyn_aitestrunbatches — listMsdyn_aitestrunbatches: List msdyn_aitestrunbatches
- POST /msdyn_aitestrunbatches — createMsdyn_aitestrunbatch: Create a msdyn_aitestrunbatch
- GET /msdyn_aitestrunbatches({msdyn_aitestrunbatchid}) — getMsdyn_aitestrunbatch: Retrieve a msdyn_aitestrunbatch
- PATCH /msdyn_aitestrunbatches({msdyn_aitestrunbatchid}) — updateMsdyn_aitestrunbatch: Update (or upsert) a msdyn_aitestrunbatch
- DELETE /msdyn_aitestrunbatches({msdyn_aitestrunbatchid}) — deleteMsdyn_aitestrunbatch: Delete a msdyn_aitestrunbatch

## msdyn_analysiscomponent
- GET /msdyn_analysiscomponents — listMsdyn_analysiscomponents: List msdyn_analysiscomponents
- POST /msdyn_analysiscomponents — createMsdyn_analysiscomponent: Create a msdyn_analysiscomponent
- GET /msdyn_analysiscomponents({msdyn_analysiscomponentid}) — getMsdyn_analysiscomponent: Retrieve a msdyn_analysiscomponent
- PATCH /msdyn_analysiscomponents({msdyn_analysiscomponentid}) — updateMsdyn_analysiscomponent: Update (or upsert) a msdyn_analysiscomponent
- DELETE /msdyn_analysiscomponents({msdyn_analysiscomponentid}) — deleteMsdyn_analysiscomponent: Delete a msdyn_analysiscomponent

## msdyn_analysisjob
- GET /msdyn_analysisjobs — listMsdyn_analysisjobs: List msdyn_analysisjobs
- POST /msdyn_analysisjobs — createMsdyn_analysisjob: Create a msdyn_analysisjob
- GET /msdyn_analysisjobs({msdyn_analysisjobid}) — getMsdyn_analysisjob: Retrieve a msdyn_analysisjob
- PATCH /msdyn_analysisjobs({msdyn_analysisjobid}) — updateMsdyn_analysisjob: Update (or upsert) a msdyn_analysisjob
- DELETE /msdyn_analysisjobs({msdyn_analysisjobid}) — deleteMsdyn_analysisjob: Delete a msdyn_analysisjob

## msdyn_analysisoverride
- GET /msdyn_analysisoverrides — listMsdyn_analysisoverrides: List msdyn_analysisoverrides
- POST /msdyn_analysisoverrides — createMsdyn_analysisoverride: Create a msdyn_analysisoverride
- GET /msdyn_analysisoverrides({msdyn_analysisoverrideid}) — getMsdyn_analysisoverride: Retrieve a msdyn_analysisoverride
- PATCH /msdyn_analysisoverrides({msdyn_analysisoverrideid}) — updateMsdyn_analysisoverride: Update (or upsert) a msdyn_analysisoverride
- DELETE /msdyn_analysisoverrides({msdyn_analysisoverrideid}) — deleteMsdyn_analysisoverride: Delete a msdyn_analysisoverride

## msdyn_analysisresult
- GET /msdyn_analysisresults — listMsdyn_analysisresults: List msdyn_analysisresults
- POST /msdyn_analysisresults — createMsdyn_analysisresult: Create a msdyn_analysisresult
- GET /msdyn_analysisresults({msdyn_analysisresultid}) — getMsdyn_analysisresult: Retrieve a msdyn_analysisresult
- PATCH /msdyn_analysisresults({msdyn_analysisresultid}) — updateMsdyn_analysisresult: Update (or upsert) a msdyn_analysisresult
- DELETE /msdyn_analysisresults({msdyn_analysisresultid}) — deleteMsdyn_analysisresult: Delete a msdyn_analysisresult

## msdyn_analysisresultdetail
- GET /msdyn_analysisresultdetails — listMsdyn_analysisresultdetails: List msdyn_analysisresultdetails
- POST /msdyn_analysisresultdetails — createMsdyn_analysisresultdetail: Create a msdyn_analysisresultdetail
- GET /msdyn_analysisresultdetails({msdyn_analysisresultdetailid}) — getMsdyn_analysisresultdetail: Retrieve a msdyn_analysisresultdetail
- PATCH /msdyn_analysisresultdetails({msdyn_analysisresultdetailid}) — updateMsdyn_analysisresultdetail: Update (or upsert) a msdyn_analysisresultdetail
- DELETE /msdyn_analysisresultdetails({msdyn_analysisresultdetailid}) — deleteMsdyn_analysisresultdetail: Delete a msdyn_analysisresultdetail

## msdyn_appinsightsmetadata
- GET /msdyn_appinsightsmetadatas — listMsdyn_appinsightsmetadatas: List msdyn_appinsightsmetadatas
- POST /msdyn_appinsightsmetadatas — createMsdyn_appinsightsmetadata: Create a msdyn_appinsightsmetadata
- GET /msdyn_appinsightsmetadatas({msdyn_appinsightsmetadataid}) — getMsdyn_appinsightsmetadata: Retrieve a msdyn_appinsightsmetadata
- PATCH /msdyn_appinsightsmetadatas({msdyn_appinsightsmetadataid}) — updateMsdyn_appinsightsmetadata: Update (or upsert) a msdyn_appinsightsmetadata
- DELETE /msdyn_appinsightsmetadatas({msdyn_appinsightsmetadataid}) — deleteMsdyn_appinsightsmetadata: Delete a msdyn_appinsightsmetadata

## msdyn_bulkharvestrunlog
- GET /msdyn_bulkharvestrunlogs — listMsdyn_bulkharvestrunlogs: List msdyn_bulkharvestrunlogs
- POST /msdyn_bulkharvestrunlogs — createMsdyn_bulkharvestrunlog: Create a msdyn_bulkharvestrunlog
- GET /msdyn_bulkharvestrunlogs({msdyn_bulkharvestrunlogid}) — getMsdyn_bulkharvestrunlog: Retrieve a msdyn_bulkharvestrunlog
- PATCH /msdyn_bulkharvestrunlogs({msdyn_bulkharvestrunlogid}) — updateMsdyn_bulkharvestrunlog: Update (or upsert) a msdyn_bulkharvestrunlog
- DELETE /msdyn_bulkharvestrunlogs({msdyn_bulkharvestrunlogid}) — deleteMsdyn_bulkharvestrunlog: Delete a msdyn_bulkharvestrunlog

## msdyn_componentlayer
- GET /msdyn_componentlayers — listMsdyn_componentlayers: List msdyn_componentlayers
- POST /msdyn_componentlayers — createMsdyn_componentlayer: Create a msdyn_componentlayer
- GET /msdyn_componentlayers({msdyn_componentlayerid}) — getMsdyn_componentlayer: Retrieve a msdyn_componentlayer
- PATCH /msdyn_componentlayers({msdyn_componentlayerid}) — updateMsdyn_componentlayer: Update (or upsert) a msdyn_componentlayer
- DELETE /msdyn_componentlayers({msdyn_componentlayerid}) — deleteMsdyn_componentlayer: Delete a msdyn_componentlayer

## msdyn_componentlayerdatasource
- GET /msdyn_componentlayerdatasources — listMsdyn_componentlayerdatasources: List msdyn_componentlayerdatasources
- POST /msdyn_componentlayerdatasources — createMsdyn_componentlayerdatasource: Create a msdyn_componentlayerdatasource
- GET /msdyn_componentlayerdatasources({msdyn_componentlayerdatasourceid}) — getMsdyn_componentlayerdatasource: Retrieve a msdyn_componentlayerdatasource
- PATCH /msdyn_componentlayerdatasources({msdyn_componentlayerdatasourceid}) — updateMsdyn_componentlayerdatasource: Update (or upsert) a msdyn_componentlayerdatasource
- DELETE /msdyn_componentlayerdatasources({msdyn_componentlayerdatasourceid}) — deleteMsdyn_componentlayerdatasource: Delete a msdyn_componentlayerdatasource

## msdyn_connectordatasource
- GET /msdyn_connectordatasources — listMsdyn_connectordatasources: List msdyn_connectordatasources
- POST /msdyn_connectordatasources — createMsdyn_connectordatasource: Create a msdyn_connectordatasource
- GET /msdyn_connectordatasources({msdyn_connectordatasourceid}) — getMsdyn_connectordatasource: Retrieve a msdyn_connectordatasource
- PATCH /msdyn_connectordatasources({msdyn_connectordatasourceid}) — updateMsdyn_connectordatasource: Update (or upsert) a msdyn_connectordatasource
- DELETE /msdyn_connectordatasources({msdyn_connectordatasourceid}) — deleteMsdyn_connectordatasource: Delete a msdyn_connectordatasource

## msdyn_copilotinteractions
- GET /msdyn_copilotinteractionses — listMsdyn_copilotinteractionses: List msdyn_copilotinteractionses
- POST /msdyn_copilotinteractionses — createMsdyn_copilotinteractions: Create a msdyn_copilotinteractions
- GET /msdyn_copilotinteractionses({msdyn_copilotinteractionsid}) — getMsdyn_copilotinteractions: Retrieve a msdyn_copilotinteractions
- PATCH /msdyn_copilotinteractionses({msdyn_copilotinteractionsid}) — updateMsdyn_copilotinteractions: Update (or upsert) a msdyn_copilotinteractions
- DELETE /msdyn_copilotinteractionses({msdyn_copilotinteractionsid}) — deleteMsdyn_copilotinteractions: Delete a msdyn_copilotinteractions

## msdyn_customcontrolextendedsettings
- GET /msdyn_customcontrolextendedsettingses — listMsdyn_customcontrolextendedsettingses: List msdyn_customcontrolextendedsettingses
- POST /msdyn_customcontrolextendedsettingses — createMsdyn_customcontrolextendedsettings: Create a msdyn_customcontrolextendedsettings
- GET /msdyn_customcontrolextendedsettingses({msdyn_customcontrolextendedsettingsid}) — getMsdyn_customcontrolextendedsettings: Retrieve a msdyn_customcontrolextendedsettings
- PATCH /msdyn_customcontrolextendedsettingses({msdyn_customcontrolextendedsettingsid}) — updateMsdyn_customcontrolextendedsettings: Update (or upsert) a msdyn_customcontrolextendedsettings
- DELETE /msdyn_customcontrolextendedsettingses({msdyn_customcontrolextendedsettingsid}) — deleteMsdyn_customcontrolextendedsettings: Delete a msdyn_customcontrolextendedsettings

## msdyn_dataflow
- GET /msdyn_dataflows — listMsdyn_dataflows: List msdyn_dataflows
- POST /msdyn_dataflows — createMsdyn_dataflow: Create a msdyn_dataflow
- GET /msdyn_dataflows({msdyn_dataflowid}) — getMsdyn_dataflow: Retrieve a msdyn_dataflow
- PATCH /msdyn_dataflows({msdyn_dataflowid}) — updateMsdyn_dataflow: Update (or upsert) a msdyn_dataflow
- DELETE /msdyn_dataflows({msdyn_dataflowid}) — deleteMsdyn_dataflow: Delete a msdyn_dataflow

## msdyn_dataflow_datalakefolder
- GET /msdyn_dataflow_datalakefolders — listMsdyn_dataflow_datalakefolders: List msdyn_dataflow_datalakefolders
- POST /msdyn_dataflow_datalakefolders — createMsdyn_dataflow_datalakefolder: Create a msdyn_dataflow_datalakefolder
- GET /msdyn_dataflow_datalakefolders({msdyn_dataflow_datalakefolderid}) — getMsdyn_dataflow_datalakefolder: Retrieve a msdyn_dataflow_datalakefolder
- PATCH /msdyn_dataflow_datalakefolders({msdyn_dataflow_datalakefolderid}) — updateMsdyn_dataflow_datalakefolder: Update (or upsert) a msdyn_dataflow_datalakefolder
- DELETE /msdyn_dataflow_datalakefolders({msdyn_dataflow_datalakefolderid}) — deleteMsdyn_dataflow_datalakefolder: Delete a msdyn_dataflow_datalakefolder

## msdyn_dataflowconnectionreference
- GET /msdyn_dataflowconnectionreferences — listMsdyn_dataflowconnectionreferences: List msdyn_dataflowconnectionreferences
- POST /msdyn_dataflowconnectionreferences — createMsdyn_dataflowconnectionreference: Create a msdyn_dataflowconnectionreference
- GET /msdyn_dataflowconnectionreferences({msdyn_dataflowconnectionreferenceid}) — getMsdyn_dataflowconnectionreference: Retrieve a msdyn_dataflowconnectionreference
- PATCH /msdyn_dataflowconnectionreferences({msdyn_dataflowconnectionreferenceid}) — updateMsdyn_dataflowconnectionreference: Update (or upsert) a msdyn_dataflowconnectionreference
- DELETE /msdyn_dataflowconnectionreferences({msdyn_dataflowconnectionreferenceid}) — deleteMsdyn_dataflowconnectionreference: Delete a msdyn_dataflowconnectionreference

## msdyn_dataflowrefreshhistory
- GET /msdyn_dataflowrefreshhistories — listMsdyn_dataflowrefreshhistories: List msdyn_dataflowrefreshhistories
- POST /msdyn_dataflowrefreshhistories — createMsdyn_dataflowrefreshhistory: Create a msdyn_dataflowrefreshhistory
- GET /msdyn_dataflowrefreshhistories({msdyn_dataflowrefreshhistoryid}) — getMsdyn_dataflowrefreshhistory: Retrieve a msdyn_dataflowrefreshhistory
- PATCH /msdyn_dataflowrefreshhistories({msdyn_dataflowrefreshhistoryid}) — updateMsdyn_dataflowrefreshhistory: Update (or upsert) a msdyn_dataflowrefreshhistory
- DELETE /msdyn_dataflowrefreshhistories({msdyn_dataflowrefreshhistoryid}) — deleteMsdyn_dataflowrefreshhistory: Delete a msdyn_dataflowrefreshhistory

## msdyn_dataflowtemplate
- GET /msdyn_dataflowtemplates — listMsdyn_dataflowtemplates: List msdyn_dataflowtemplates
- POST /msdyn_dataflowtemplates — createMsdyn_dataflowtemplate: Create a msdyn_dataflowtemplate
- GET /msdyn_dataflowtemplates({msdyn_dataflowtemplateid}) — getMsdyn_dataflowtemplate: Retrieve a msdyn_dataflowtemplate
- PATCH /msdyn_dataflowtemplates({msdyn_dataflowtemplateid}) — updateMsdyn_dataflowtemplate: Update (or upsert) a msdyn_dataflowtemplate
- DELETE /msdyn_dataflowtemplates({msdyn_dataflowtemplateid}) — deleteMsdyn_dataflowtemplate: Delete a msdyn_dataflowtemplate

## msdyn_datalakeds
- GET /msdyn_datalakedses — listMsdyn_datalakedses: List msdyn_datalakedses
- POST /msdyn_datalakedses — createMsdyn_datalakeds: Create a msdyn_datalakeds
- GET /msdyn_datalakedses({msdyn_datalakedsid}) — getMsdyn_datalakeds: Retrieve a msdyn_datalakeds
- PATCH /msdyn_datalakedses({msdyn_datalakedsid}) — updateMsdyn_datalakeds: Update (or upsert) a msdyn_datalakeds
- DELETE /msdyn_datalakedses({msdyn_datalakedsid}) — deleteMsdyn_datalakeds: Delete a msdyn_datalakeds

## msdyn_dmsrequest
- GET /msdyn_dmsrequests — listMsdyn_dmsrequests: List msdyn_dmsrequests
- POST /msdyn_dmsrequests — createMsdyn_dmsrequest: Create a msdyn_dmsrequest
- GET /msdyn_dmsrequests({msdyn_dmsrequestid}) — getMsdyn_dmsrequest: Retrieve a msdyn_dmsrequest
- PATCH /msdyn_dmsrequests({msdyn_dmsrequestid}) — updateMsdyn_dmsrequest: Update (or upsert) a msdyn_dmsrequest
- DELETE /msdyn_dmsrequests({msdyn_dmsrequestid}) — deleteMsdyn_dmsrequest: Delete a msdyn_dmsrequest

## msdyn_dmsrequeststatus
- GET /msdyn_dmsrequeststatuses — listMsdyn_dmsrequeststatuses: List msdyn_dmsrequeststatuses
- POST /msdyn_dmsrequeststatuses — createMsdyn_dmsrequeststatus: Create a msdyn_dmsrequeststatus
- GET /msdyn_dmsrequeststatuses({msdyn_dmsrequeststatusid}) — getMsdyn_dmsrequeststatus: Retrieve a msdyn_dmsrequeststatus
- PATCH /msdyn_dmsrequeststatuses({msdyn_dmsrequeststatusid}) — updateMsdyn_dmsrequeststatus: Update (or upsert) a msdyn_dmsrequeststatus
- DELETE /msdyn_dmsrequeststatuses({msdyn_dmsrequeststatusid}) — deleteMsdyn_dmsrequeststatus: Delete a msdyn_dmsrequeststatus

## msdyn_dmssyncrequest
- GET /msdyn_dmssyncrequests — listMsdyn_dmssyncrequests: List msdyn_dmssyncrequests
- POST /msdyn_dmssyncrequests — createMsdyn_dmssyncrequest: Create a msdyn_dmssyncrequest
- GET /msdyn_dmssyncrequests({msdyn_dmssyncrequestid}) — getMsdyn_dmssyncrequest: Retrieve a msdyn_dmssyncrequest
- PATCH /msdyn_dmssyncrequests({msdyn_dmssyncrequestid}) — updateMsdyn_dmssyncrequest: Update (or upsert) a msdyn_dmssyncrequest
- DELETE /msdyn_dmssyncrequests({msdyn_dmssyncrequestid}) — deleteMsdyn_dmssyncrequest: Delete a msdyn_dmssyncrequest

## msdyn_dmssyncstatus
- GET /msdyn_dmssyncstatuses — listMsdyn_dmssyncstatuses: List msdyn_dmssyncstatuses
- POST /msdyn_dmssyncstatuses — createMsdyn_dmssyncstatus: Create a msdyn_dmssyncstatus
- GET /msdyn_dmssyncstatuses({msdyn_dmssyncstatusid}) — getMsdyn_dmssyncstatus: Retrieve a msdyn_dmssyncstatus
- PATCH /msdyn_dmssyncstatuses({msdyn_dmssyncstatusid}) — updateMsdyn_dmssyncstatus: Update (or upsert) a msdyn_dmssyncstatus
- DELETE /msdyn_dmssyncstatuses({msdyn_dmssyncstatusid}) — deleteMsdyn_dmssyncstatus: Delete a msdyn_dmssyncstatus

## msdyn_entitylinkchatconfiguration
- GET /msdyn_entitylinkchatconfigurations — listMsdyn_entitylinkchatconfigurations: List msdyn_entitylinkchatconfigurations
- POST /msdyn_entitylinkchatconfigurations — createMsdyn_entitylinkchatconfiguration: Create a msdyn_entitylinkchatconfiguration
- GET /msdyn_entitylinkchatconfigurations({msdyn_entitylinkchatconfigurationid}) — getMsdyn_entitylinkchatconfiguration: Retrieve a msdyn_entitylinkchatconfiguration
- PATCH /msdyn_entitylinkchatconfigurations({msdyn_entitylinkchatconfigurationid}) — updateMsdyn_entitylinkchatconfiguration: Update (or upsert) a msdyn_entitylinkchatconfiguration
- DELETE /msdyn_entitylinkchatconfigurations({msdyn_entitylinkchatconfigurationid}) — deleteMsdyn_entitylinkchatconfiguration: Delete a msdyn_entitylinkchatconfiguration

## msdyn_entityrefreshhistory
- GET /msdyn_entityrefreshhistories — listMsdyn_entityrefreshhistories: List msdyn_entityrefreshhistories
- POST /msdyn_entityrefreshhistories — createMsdyn_entityrefreshhistory: Create a msdyn_entityrefreshhistory
- GET /msdyn_entityrefreshhistories({msdyn_entityrefreshhistoryid}) — getMsdyn_entityrefreshhistory: Retrieve a msdyn_entityrefreshhistory
- PATCH /msdyn_entityrefreshhistories({msdyn_entityrefreshhistoryid}) — updateMsdyn_entityrefreshhistory: Update (or upsert) a msdyn_entityrefreshhistory
- DELETE /msdyn_entityrefreshhistories({msdyn_entityrefreshhistoryid}) — deleteMsdyn_entityrefreshhistory: Delete a msdyn_entityrefreshhistory

## msdyn_evalassertion
- GET /msdyn_evalassertions — listMsdyn_evalassertions: List msdyn_evalassertions
- POST /msdyn_evalassertions — createMsdyn_evalassertion: Create a msdyn_evalassertion
- GET /msdyn_evalassertions({msdyn_evalassertionid}) — getMsdyn_evalassertion: Retrieve a msdyn_evalassertion
- PATCH /msdyn_evalassertions({msdyn_evalassertionid}) — updateMsdyn_evalassertion: Update (or upsert) a msdyn_evalassertion
- DELETE /msdyn_evalassertions({msdyn_evalassertionid}) — deleteMsdyn_evalassertion: Delete a msdyn_evalassertion

## msdyn_evaldataset
- GET /msdyn_evaldatasets — listMsdyn_evaldatasets: List msdyn_evaldatasets
- POST /msdyn_evaldatasets — createMsdyn_evaldataset: Create a msdyn_evaldataset
- GET /msdyn_evaldatasets({msdyn_evaldatasetid}) — getMsdyn_evaldataset: Retrieve a msdyn_evaldataset
- PATCH /msdyn_evaldatasets({msdyn_evaldatasetid}) — updateMsdyn_evaldataset: Update (or upsert) a msdyn_evaldataset
- DELETE /msdyn_evaldatasets({msdyn_evaldatasetid}) — deleteMsdyn_evaldataset: Delete a msdyn_evaldataset

## msdyn_evalprompt
- GET /msdyn_evalprompts — listMsdyn_evalprompts: List msdyn_evalprompts
- POST /msdyn_evalprompts — createMsdyn_evalprompt: Create a msdyn_evalprompt
- GET /msdyn_evalprompts({msdyn_evalpromptid}) — getMsdyn_evalprompt: Retrieve a msdyn_evalprompt
- PATCH /msdyn_evalprompts({msdyn_evalpromptid}) — updateMsdyn_evalprompt: Update (or upsert) a msdyn_evalprompt
- DELETE /msdyn_evalprompts({msdyn_evalpromptid}) — deleteMsdyn_evalprompt: Delete a msdyn_evalprompt

## msdyn_evalresult
- GET /msdyn_evalresults — listMsdyn_evalresults: List msdyn_evalresults
- POST /msdyn_evalresults — createMsdyn_evalresult: Create a msdyn_evalresult
- GET /msdyn_evalresults({msdyn_evalresultid}) — getMsdyn_evalresult: Retrieve a msdyn_evalresult
- PATCH /msdyn_evalresults({msdyn_evalresultid}) — updateMsdyn_evalresult: Update (or upsert) a msdyn_evalresult
- DELETE /msdyn_evalresults({msdyn_evalresultid}) — deleteMsdyn_evalresult: Delete a msdyn_evalresult

## msdyn_evalrun
- GET /msdyn_evalruns — listMsdyn_evalruns: List msdyn_evalruns
- POST /msdyn_evalruns — createMsdyn_evalrun: Create a msdyn_evalrun
- GET /msdyn_evalruns({msdyn_evalrunid}) — getMsdyn_evalrun: Retrieve a msdyn_evalrun
- PATCH /msdyn_evalruns({msdyn_evalrunid}) — updateMsdyn_evalrun: Update (or upsert) a msdyn_evalrun
- DELETE /msdyn_evalruns({msdyn_evalrunid}) — deleteMsdyn_evalrun: Delete a msdyn_evalrun

## msdyn_favoriteknowledgearticle
- GET /msdyn_favoriteknowledgearticles — listMsdyn_favoriteknowledgearticles: List msdyn_favoriteknowledgearticles
- POST /msdyn_favoriteknowledgearticles — createMsdyn_favoriteknowledgearticle: Create a msdyn_favoriteknowledgearticle
- GET /msdyn_favoriteknowledgearticles({msdyn_favoriteknowledgearticleid}) — getMsdyn_favoriteknowledgearticle: Retrieve a msdyn_favoriteknowledgearticle
- PATCH /msdyn_favoriteknowledgearticles({msdyn_favoriteknowledgearticleid}) — updateMsdyn_favoriteknowledgearticle: Update (or upsert) a msdyn_favoriteknowledgearticle
- DELETE /msdyn_favoriteknowledgearticles({msdyn_favoriteknowledgearticleid}) — deleteMsdyn_favoriteknowledgearticle: Delete a msdyn_favoriteknowledgearticle

## msdyn_federatedarticle
- GET /msdyn_federatedarticles — listMsdyn_federatedarticles: List msdyn_federatedarticles
- POST /msdyn_federatedarticles — createMsdyn_federatedarticle: Create a msdyn_federatedarticle
- GET /msdyn_federatedarticles({msdyn_federatedarticleid}) — getMsdyn_federatedarticle: Retrieve a msdyn_federatedarticle
- PATCH /msdyn_federatedarticles({msdyn_federatedarticleid}) — updateMsdyn_federatedarticle: Update (or upsert) a msdyn_federatedarticle
- DELETE /msdyn_federatedarticles({msdyn_federatedarticleid}) — deleteMsdyn_federatedarticle: Delete a msdyn_federatedarticle

## msdyn_federatedarticleincident
- GET /msdyn_federatedarticleincidents — listMsdyn_federatedarticleincidents: List msdyn_federatedarticleincidents
- POST /msdyn_federatedarticleincidents — createMsdyn_federatedarticleincident: Create a msdyn_federatedarticleincident
- GET /msdyn_federatedarticleincidents({msdyn_federatedarticleincidentid}) — getMsdyn_federatedarticleincident: Retrieve a msdyn_federatedarticleincident
- PATCH /msdyn_federatedarticleincidents({msdyn_federatedarticleincidentid}) — updateMsdyn_federatedarticleincident: Update (or upsert) a msdyn_federatedarticleincident
- DELETE /msdyn_federatedarticleincidents({msdyn_federatedarticleincidentid}) — deleteMsdyn_federatedarticleincident: Delete a msdyn_federatedarticleincident

## msdyn_fileupload
- GET /msdyn_fileuploads — listMsdyn_fileuploads: List msdyn_fileuploads
- POST /msdyn_fileuploads — createMsdyn_fileupload: Create a msdyn_fileupload
- GET /msdyn_fileuploads({msdyn_fileuploadid}) — getMsdyn_fileupload: Retrieve a msdyn_fileupload
- PATCH /msdyn_fileuploads({msdyn_fileuploadid}) — updateMsdyn_fileupload: Update (or upsert) a msdyn_fileupload
- DELETE /msdyn_fileuploads({msdyn_fileuploadid}) — deleteMsdyn_fileupload: Delete a msdyn_fileupload

## msdyn_flow_actionapprovalmodel
- GET /msdyn_flow_actionapprovalmodels — listMsdyn_flow_actionapprovalmodels: List msdyn_flow_actionapprovalmodels
- POST /msdyn_flow_actionapprovalmodels — createMsdyn_flow_actionapprovalmodel: Create a msdyn_flow_actionapprovalmodel
- GET /msdyn_flow_actionapprovalmodels({msdyn_flow_actionapprovalmodelid}) — getMsdyn_flow_actionapprovalmodel: Retrieve a msdyn_flow_actionapprovalmodel
- PATCH /msdyn_flow_actionapprovalmodels({msdyn_flow_actionapprovalmodelid}) — updateMsdyn_flow_actionapprovalmodel: Update (or upsert) a msdyn_flow_actionapprovalmodel
- DELETE /msdyn_flow_actionapprovalmodels({msdyn_flow_actionapprovalmodelid}) — deleteMsdyn_flow_actionapprovalmodel: Delete a msdyn_flow_actionapprovalmodel

## msdyn_flow_approval
- GET /msdyn_flow_approvals — listMsdyn_flow_approvals: List msdyn_flow_approvals
- POST /msdyn_flow_approvals — createMsdyn_flow_approval: Create a msdyn_flow_approval
- GET /msdyn_flow_approvals({msdyn_flow_approvalid}) — getMsdyn_flow_approval: Retrieve a msdyn_flow_approval
- PATCH /msdyn_flow_approvals({msdyn_flow_approvalid}) — updateMsdyn_flow_approval: Update (or upsert) a msdyn_flow_approval
- DELETE /msdyn_flow_approvals({msdyn_flow_approvalid}) — deleteMsdyn_flow_approval: Delete a msdyn_flow_approval

## msdyn_flow_approvalrequest
- GET /msdyn_flow_approvalrequests — listMsdyn_flow_approvalrequests: List msdyn_flow_approvalrequests
- POST /msdyn_flow_approvalrequests — createMsdyn_flow_approvalrequest: Create a msdyn_flow_approvalrequest
- GET /msdyn_flow_approvalrequests({msdyn_flow_approvalrequestid}) — getMsdyn_flow_approvalrequest: Retrieve a msdyn_flow_approvalrequest
- PATCH /msdyn_flow_approvalrequests({msdyn_flow_approvalrequestid}) — updateMsdyn_flow_approvalrequest: Update (or upsert) a msdyn_flow_approvalrequest
- DELETE /msdyn_flow_approvalrequests({msdyn_flow_approvalrequestid}) — deleteMsdyn_flow_approvalrequest: Delete a msdyn_flow_approvalrequest

## msdyn_flow_approvalresponse
- GET /msdyn_flow_approvalresponses — listMsdyn_flow_approvalresponses: List msdyn_flow_approvalresponses
- POST /msdyn_flow_approvalresponses — createMsdyn_flow_approvalresponse: Create a msdyn_flow_approvalresponse
- GET /msdyn_flow_approvalresponses({msdyn_flow_approvalresponseid}) — getMsdyn_flow_approvalresponse: Retrieve a msdyn_flow_approvalresponse
- PATCH /msdyn_flow_approvalresponses({msdyn_flow_approvalresponseid}) — updateMsdyn_flow_approvalresponse: Update (or upsert) a msdyn_flow_approvalresponse
- DELETE /msdyn_flow_approvalresponses({msdyn_flow_approvalresponseid}) — deleteMsdyn_flow_approvalresponse: Delete a msdyn_flow_approvalresponse

## msdyn_flow_approvalstep
- GET /msdyn_flow_approvalsteps — listMsdyn_flow_approvalsteps: List msdyn_flow_approvalsteps
- POST /msdyn_flow_approvalsteps — createMsdyn_flow_approvalstep: Create a msdyn_flow_approvalstep
- GET /msdyn_flow_approvalsteps({msdyn_flow_approvalstepid}) — getMsdyn_flow_approvalstep: Retrieve a msdyn_flow_approvalstep
- PATCH /msdyn_flow_approvalsteps({msdyn_flow_approvalstepid}) — updateMsdyn_flow_approvalstep: Update (or upsert) a msdyn_flow_approvalstep
- DELETE /msdyn_flow_approvalsteps({msdyn_flow_approvalstepid}) — deleteMsdyn_flow_approvalstep: Delete a msdyn_flow_approvalstep

## msdyn_flow_awaitallactionapprovalmodel
- GET /msdyn_flow_awaitallactionapprovalmodels — listMsdyn_flow_awaitallactionapprovalmodels: List msdyn_flow_awaitallactionapprovalmodels
- POST /msdyn_flow_awaitallactionapprovalmodels — createMsdyn_flow_awaitallactionapprovalmodel: Create a msdyn_flow_awaitallactionapprovalmodel
- GET /msdyn_flow_awaitallactionapprovalmodels({msdyn_flow_awaitallactionapprovalmodelid}) — getMsdyn_flow_awaitallactionapprovalmodel: Retrieve a msdyn_flow_awaitallactionapprovalmodel
- PATCH /msdyn_flow_awaitallactionapprovalmodels({msdyn_flow_awaitallactionapprovalmodelid}) — updateMsdyn_flow_awaitallactionapprovalmodel: Update (or upsert) a msdyn_flow_awaitallactionapprovalmodel
- DELETE /msdyn_flow_awaitallactionapprovalmodels({msdyn_flow_awaitallactionapprovalmodelid}) — deleteMsdyn_flow_awaitallactionapprovalmodel: Delete a msdyn_flow_awaitallactionapprovalmodel

## msdyn_flow_awaitallapprovalmodel
- GET /msdyn_flow_awaitallapprovalmodels — listMsdyn_flow_awaitallapprovalmodels: List msdyn_flow_awaitallapprovalmodels
- POST /msdyn_flow_awaitallapprovalmodels — createMsdyn_flow_awaitallapprovalmodel: Create a msdyn_flow_awaitallapprovalmodel
- GET /msdyn_flow_awaitallapprovalmodels({msdyn_flow_awaitallapprovalmodelid}) — getMsdyn_flow_awaitallapprovalmodel: Retrieve a msdyn_flow_awaitallapprovalmodel
- PATCH /msdyn_flow_awaitallapprovalmodels({msdyn_flow_awaitallapprovalmodelid}) — updateMsdyn_flow_awaitallapprovalmodel: Update (or upsert) a msdyn_flow_awaitallapprovalmodel
- DELETE /msdyn_flow_awaitallapprovalmodels({msdyn_flow_awaitallapprovalmodelid}) — deleteMsdyn_flow_awaitallapprovalmodel: Delete a msdyn_flow_awaitallapprovalmodel

## msdyn_flow_basicapprovalmodel
- GET /msdyn_flow_basicapprovalmodels — listMsdyn_flow_basicapprovalmodels: List msdyn_flow_basicapprovalmodels
- POST /msdyn_flow_basicapprovalmodels — createMsdyn_flow_basicapprovalmodel: Create a msdyn_flow_basicapprovalmodel
- GET /msdyn_flow_basicapprovalmodels({msdyn_flow_basicapprovalmodelid}) — getMsdyn_flow_basicapprovalmodel: Retrieve a msdyn_flow_basicapprovalmodel
- PATCH /msdyn_flow_basicapprovalmodels({msdyn_flow_basicapprovalmodelid}) — updateMsdyn_flow_basicapprovalmodel: Update (or upsert) a msdyn_flow_basicapprovalmodel
- DELETE /msdyn_flow_basicapprovalmodels({msdyn_flow_basicapprovalmodelid}) — deleteMsdyn_flow_basicapprovalmodel: Delete a msdyn_flow_basicapprovalmodel

## msdyn_flow_flowapproval
- GET /msdyn_flow_flowapprovals — listMsdyn_flow_flowapprovals: List msdyn_flow_flowapprovals
- POST /msdyn_flow_flowapprovals — createMsdyn_flow_flowapproval: Create a msdyn_flow_flowapproval
- GET /msdyn_flow_flowapprovals({msdyn_flow_flowapprovalid}) — getMsdyn_flow_flowapproval: Retrieve a msdyn_flow_flowapproval
- PATCH /msdyn_flow_flowapprovals({msdyn_flow_flowapprovalid}) — updateMsdyn_flow_flowapproval: Update (or upsert) a msdyn_flow_flowapproval
- DELETE /msdyn_flow_flowapprovals({msdyn_flow_flowapprovalid}) — deleteMsdyn_flow_flowapproval: Delete a msdyn_flow_flowapproval

## msdyn_formmapping
- GET /msdyn_formmappings — listMsdyn_formmappings: List msdyn_formmappings
- POST /msdyn_formmappings — createMsdyn_formmapping: Create a msdyn_formmapping
- GET /msdyn_formmappings({msdyn_formmappingid}) — getMsdyn_formmapping: Retrieve a msdyn_formmapping
- PATCH /msdyn_formmappings({msdyn_formmappingid}) — updateMsdyn_formmapping: Update (or upsert) a msdyn_formmapping
- DELETE /msdyn_formmappings({msdyn_formmappingid}) — deleteMsdyn_formmapping: Delete a msdyn_formmapping

## msdyn_function
- GET /msdyn_functions — listMsdyn_functions: List msdyn_functions
- POST /msdyn_functions — createMsdyn_function: Create a msdyn_function
- GET /msdyn_functions({msdyn_functionid}) — getMsdyn_function: Retrieve a msdyn_function
- PATCH /msdyn_functions({msdyn_functionid}) — updateMsdyn_function: Update (or upsert) a msdyn_function
- DELETE /msdyn_functions({msdyn_functionid}) — deleteMsdyn_function: Delete a msdyn_function

## msdyn_harvesteligibilitycondition
- GET /msdyn_harvesteligibilityconditions — listMsdyn_harvesteligibilityconditions: List msdyn_harvesteligibilityconditions
- POST /msdyn_harvesteligibilityconditions — createMsdyn_harvesteligibilitycondition: Create a msdyn_harvesteligibilitycondition
- GET /msdyn_harvesteligibilityconditions({msdyn_harvesteligibilityconditionid}) — getMsdyn_harvesteligibilitycondition: Retrieve a msdyn_harvesteligibilitycondition
- PATCH /msdyn_harvesteligibilityconditions({msdyn_harvesteligibilityconditionid}) — updateMsdyn_harvesteligibilitycondition: Update (or upsert) a msdyn_harvesteligibilitycondition
- DELETE /msdyn_harvesteligibilityconditions({msdyn_harvesteligibilityconditionid}) — deleteMsdyn_harvesteligibilitycondition: Delete a msdyn_harvesteligibilitycondition

## msdyn_harvestworkitem
- GET /msdyn_harvestworkitems — listMsdyn_harvestworkitems: List msdyn_harvestworkitems
- POST /msdyn_harvestworkitems — createMsdyn_harvestworkitem: Create a msdyn_harvestworkitem
- GET /msdyn_harvestworkitems({msdyn_harvestworkitemid}) — getMsdyn_harvestworkitem: Retrieve a msdyn_harvestworkitem
- PATCH /msdyn_harvestworkitems({msdyn_harvestworkitemid}) — updateMsdyn_harvestworkitem: Update (or upsert) a msdyn_harvestworkitem
- DELETE /msdyn_harvestworkitems({msdyn_harvestworkitemid}) — deleteMsdyn_harvestworkitem: Delete a msdyn_harvestworkitem

## msdyn_helppage
- GET /msdyn_helppages — listMsdyn_helppages: List msdyn_helppages
- POST /msdyn_helppages — createMsdyn_helppage: Create a msdyn_helppage
- GET /msdyn_helppages({msdyn_helppageid}) — getMsdyn_helppage: Retrieve a msdyn_helppage
- PATCH /msdyn_helppages({msdyn_helppageid}) — updateMsdyn_helppage: Update (or upsert) a msdyn_helppage
- DELETE /msdyn_helppages({msdyn_helppageid}) — deleteMsdyn_helppage: Delete a msdyn_helppage

## msdyn_historicalcaseharvestbatch
- GET /msdyn_historicalcaseharvestbatches — listMsdyn_historicalcaseharvestbatches: List msdyn_historicalcaseharvestbatches
- POST /msdyn_historicalcaseharvestbatches — createMsdyn_historicalcaseharvestbatch: Create a msdyn_historicalcaseharvestbatch
- GET /msdyn_historicalcaseharvestbatches({msdyn_historicalcaseharvestbatchid}) — getMsdyn_historicalcaseharvestbatch: Retrieve a msdyn_historicalcaseharvestbatch
- PATCH /msdyn_historicalcaseharvestbatches({msdyn_historicalcaseharvestbatchid}) — updateMsdyn_historicalcaseharvestbatch: Update (or upsert) a msdyn_historicalcaseharvestbatch
- DELETE /msdyn_historicalcaseharvestbatches({msdyn_historicalcaseharvestbatchid}) — deleteMsdyn_historicalcaseharvestbatch: Delete a msdyn_historicalcaseharvestbatch

## msdyn_historicalcaseharvestrun
- GET /msdyn_historicalcaseharvestruns — listMsdyn_historicalcaseharvestruns: List msdyn_historicalcaseharvestruns
- POST /msdyn_historicalcaseharvestruns — createMsdyn_historicalcaseharvestrun: Create a msdyn_historicalcaseharvestrun
- GET /msdyn_historicalcaseharvestruns({msdyn_historicalcaseharvestrunid}) — getMsdyn_historicalcaseharvestrun: Retrieve a msdyn_historicalcaseharvestrun
- PATCH /msdyn_historicalcaseharvestruns({msdyn_historicalcaseharvestrunid}) — updateMsdyn_historicalcaseharvestrun: Update (or upsert) a msdyn_historicalcaseharvestrun
- DELETE /msdyn_historicalcaseharvestruns({msdyn_historicalcaseharvestrunid}) — deleteMsdyn_historicalcaseharvestrun: Delete a msdyn_historicalcaseharvestrun

## msdyn_historicalcaseharvestrunlog
- GET /msdyn_historicalcaseharvestrunlogs — listMsdyn_historicalcaseharvestrunlogs: List msdyn_historicalcaseharvestrunlogs
- POST /msdyn_historicalcaseharvestrunlogs — createMsdyn_historicalcaseharvestrunlog: Create a msdyn_historicalcaseharvestrunlog
- GET /msdyn_historicalcaseharvestrunlogs({msdyn_historicalcaseharvestrunlogid}) — getMsdyn_historicalcaseharvestrunlog: Retrieve a msdyn_historicalcaseharvestrunlog
- PATCH /msdyn_historicalcaseharvestrunlogs({msdyn_historicalcaseharvestrunlogid}) — updateMsdyn_historicalcaseharvestrunlog: Update (or upsert) a msdyn_historicalcaseharvestrunlog
- DELETE /msdyn_historicalcaseharvestrunlogs({msdyn_historicalcaseharvestrunlogid}) — deleteMsdyn_historicalcaseharvestrunlog: Delete a msdyn_historicalcaseharvestrunlog

## msdyn_insightsstorevirtualentity
- GET /msdyn_insightsstorevirtualentities — listMsdyn_insightsstorevirtualentities: List msdyn_insightsstorevirtualentities
- POST /msdyn_insightsstorevirtualentities — createMsdyn_insightsstorevirtualentity: Create a msdyn_insightsstorevirtualentity
- GET /msdyn_insightsstorevirtualentities({msdyn_insightsstorevirtualentityid}) — getMsdyn_insightsstorevirtualentity: Retrieve a msdyn_insightsstorevirtualentity
- PATCH /msdyn_insightsstorevirtualentities({msdyn_insightsstorevirtualentityid}) — updateMsdyn_insightsstorevirtualentity: Update (or upsert) a msdyn_insightsstorevirtualentity
- DELETE /msdyn_insightsstorevirtualentities({msdyn_insightsstorevirtualentityid}) — deleteMsdyn_insightsstorevirtualentity: Delete a msdyn_insightsstorevirtualentity

## msdyn_integratedsearchprovider
- GET /msdyn_integratedsearchproviders — listMsdyn_integratedsearchproviders: List msdyn_integratedsearchproviders
- POST /msdyn_integratedsearchproviders — createMsdyn_integratedsearchprovider: Create a msdyn_integratedsearchprovider
- GET /msdyn_integratedsearchproviders({msdyn_integratedsearchproviderid}) — getMsdyn_integratedsearchprovider: Retrieve a msdyn_integratedsearchprovider
- PATCH /msdyn_integratedsearchproviders({msdyn_integratedsearchproviderid}) — updateMsdyn_integratedsearchprovider: Update (or upsert) a msdyn_integratedsearchprovider
- DELETE /msdyn_integratedsearchproviders({msdyn_integratedsearchproviderid}) — deleteMsdyn_integratedsearchprovider: Delete a msdyn_integratedsearchprovider

## msdyn_kalanguagesetting
- GET /msdyn_kalanguagesettings — listMsdyn_kalanguagesettings: List msdyn_kalanguagesettings
- POST /msdyn_kalanguagesettings — createMsdyn_kalanguagesetting: Create a msdyn_kalanguagesetting
- GET /msdyn_kalanguagesettings({msdyn_kalanguagesettingid}) — getMsdyn_kalanguagesetting: Retrieve a msdyn_kalanguagesetting
- PATCH /msdyn_kalanguagesettings({msdyn_kalanguagesettingid}) — updateMsdyn_kalanguagesetting: Update (or upsert) a msdyn_kalanguagesetting
- DELETE /msdyn_kalanguagesettings({msdyn_kalanguagesettingid}) — deleteMsdyn_kalanguagesetting: Delete a msdyn_kalanguagesetting

## msdyn_kbattachment
- GET /msdyn_kbattachments — listMsdyn_kbattachments: List msdyn_kbattachments
- POST /msdyn_kbattachments — createMsdyn_kbattachment: Create a msdyn_kbattachment
- GET /msdyn_kbattachments({msdyn_kbattachmentid}) — getMsdyn_kbattachment: Retrieve a msdyn_kbattachment
- PATCH /msdyn_kbattachments({msdyn_kbattachmentid}) — updateMsdyn_kbattachment: Update (or upsert) a msdyn_kbattachment
- DELETE /msdyn_kbattachments({msdyn_kbattachmentid}) — deleteMsdyn_kbattachment: Delete a msdyn_kbattachment

## msdyn_kmfederatedsearchconfig
- GET /msdyn_kmfederatedsearchconfigs — listMsdyn_kmfederatedsearchconfigs: List msdyn_kmfederatedsearchconfigs
- POST /msdyn_kmfederatedsearchconfigs — createMsdyn_kmfederatedsearchconfig: Create a msdyn_kmfederatedsearchconfig
- GET /msdyn_kmfederatedsearchconfigs({msdyn_kmfederatedsearchconfigid}) — getMsdyn_kmfederatedsearchconfig: Retrieve a msdyn_kmfederatedsearchconfig
- PATCH /msdyn_kmfederatedsearchconfigs({msdyn_kmfederatedsearchconfigid}) — updateMsdyn_kmfederatedsearchconfig: Update (or upsert) a msdyn_kmfederatedsearchconfig
- DELETE /msdyn_kmfederatedsearchconfigs({msdyn_kmfederatedsearchconfigid}) — deleteMsdyn_kmfederatedsearchconfig: Delete a msdyn_kmfederatedsearchconfig

## msdyn_kmpersonalizationsetting
- GET /msdyn_kmpersonalizationsettings — listMsdyn_kmpersonalizationsettings: List msdyn_kmpersonalizationsettings
- POST /msdyn_kmpersonalizationsettings — createMsdyn_kmpersonalizationsetting: Create a msdyn_kmpersonalizationsetting
- GET /msdyn_kmpersonalizationsettings({msdyn_kmpersonalizationsettingid}) — getMsdyn_kmpersonalizationsetting: Retrieve a msdyn_kmpersonalizationsetting
- PATCH /msdyn_kmpersonalizationsettings({msdyn_kmpersonalizationsettingid}) — updateMsdyn_kmpersonalizationsetting: Update (or upsert) a msdyn_kmpersonalizationsetting
- DELETE /msdyn_kmpersonalizationsettings({msdyn_kmpersonalizationsettingid}) — deleteMsdyn_kmpersonalizationsetting: Delete a msdyn_kmpersonalizationsetting

## msdyn_knowledgearticleimage
- GET /msdyn_knowledgearticleimages — listMsdyn_knowledgearticleimages: List msdyn_knowledgearticleimages
- POST /msdyn_knowledgearticleimages — createMsdyn_knowledgearticleimage: Create a msdyn_knowledgearticleimage
- GET /msdyn_knowledgearticleimages({msdyn_knowledgearticleimageid}) — getMsdyn_knowledgearticleimage: Retrieve a msdyn_knowledgearticleimage
- PATCH /msdyn_knowledgearticleimages({msdyn_knowledgearticleimageid}) — updateMsdyn_knowledgearticleimage: Update (or upsert) a msdyn_knowledgearticleimage
- DELETE /msdyn_knowledgearticleimages({msdyn_knowledgearticleimageid}) — deleteMsdyn_knowledgearticleimage: Delete a msdyn_knowledgearticleimage

## msdyn_knowledgearticletemplate
- GET /msdyn_knowledgearticletemplates — listMsdyn_knowledgearticletemplates: List msdyn_knowledgearticletemplates
- POST /msdyn_knowledgearticletemplates — createMsdyn_knowledgearticletemplate: Create a msdyn_knowledgearticletemplate
- GET /msdyn_knowledgearticletemplates({msdyn_knowledgearticletemplateid}) — getMsdyn_knowledgearticletemplate: Retrieve a msdyn_knowledgearticletemplate
- PATCH /msdyn_knowledgearticletemplates({msdyn_knowledgearticletemplateid}) — updateMsdyn_knowledgearticletemplate: Update (or upsert) a msdyn_knowledgearticletemplate
- DELETE /msdyn_knowledgearticletemplates({msdyn_knowledgearticletemplateid}) — deleteMsdyn_knowledgearticletemplate: Delete a msdyn_knowledgearticletemplate

## msdyn_knowledgeassetconfiguration
- GET /msdyn_knowledgeassetconfigurations — listMsdyn_knowledgeassetconfigurations: List msdyn_knowledgeassetconfigurations
- POST /msdyn_knowledgeassetconfigurations — createMsdyn_knowledgeassetconfiguration: Create a msdyn_knowledgeassetconfiguration
- GET /msdyn_knowledgeassetconfigurations({msdyn_knowledgeassetconfigurationid}) — getMsdyn_knowledgeassetconfiguration: Retrieve a msdyn_knowledgeassetconfiguration
- PATCH /msdyn_knowledgeassetconfigurations({msdyn_knowledgeassetconfigurationid}) — updateMsdyn_knowledgeassetconfiguration: Update (or upsert) a msdyn_knowledgeassetconfiguration
- DELETE /msdyn_knowledgeassetconfigurations({msdyn_knowledgeassetconfigurationid}) — deleteMsdyn_knowledgeassetconfiguration: Delete a msdyn_knowledgeassetconfiguration

## msdyn_knowledgeconfiguration
- GET /msdyn_knowledgeconfigurations — listMsdyn_knowledgeconfigurations: List msdyn_knowledgeconfigurations
- POST /msdyn_knowledgeconfigurations — createMsdyn_knowledgeconfiguration: Create a msdyn_knowledgeconfiguration
- GET /msdyn_knowledgeconfigurations({msdyn_knowledgeconfigurationid}) — getMsdyn_knowledgeconfiguration: Retrieve a msdyn_knowledgeconfiguration
- PATCH /msdyn_knowledgeconfigurations({msdyn_knowledgeconfigurationid}) — updateMsdyn_knowledgeconfiguration: Update (or upsert) a msdyn_knowledgeconfiguration
- DELETE /msdyn_knowledgeconfigurations({msdyn_knowledgeconfigurationid}) — deleteMsdyn_knowledgeconfiguration: Delete a msdyn_knowledgeconfiguration

## msdyn_knowledgeharvestjobrecord
- GET /msdyn_knowledgeharvestjobrecords — listMsdyn_knowledgeharvestjobrecords: List msdyn_knowledgeharvestjobrecords
- POST /msdyn_knowledgeharvestjobrecords — createMsdyn_knowledgeharvestjobrecord: Create a msdyn_knowledgeharvestjobrecord
- GET /msdyn_knowledgeharvestjobrecords({msdyn_knowledgeharvestjobrecordid}) — getMsdyn_knowledgeharvestjobrecord: Retrieve a msdyn_knowledgeharvestjobrecord
- PATCH /msdyn_knowledgeharvestjobrecords({msdyn_knowledgeharvestjobrecordid}) — updateMsdyn_knowledgeharvestjobrecord: Update (or upsert) a msdyn_knowledgeharvestjobrecord
- DELETE /msdyn_knowledgeharvestjobrecords({msdyn_knowledgeharvestjobrecordid}) — deleteMsdyn_knowledgeharvestjobrecord: Delete a msdyn_knowledgeharvestjobrecord

## msdyn_knowledgeharvestplan
- GET /msdyn_knowledgeharvestplans — listMsdyn_knowledgeharvestplans: List msdyn_knowledgeharvestplans
- POST /msdyn_knowledgeharvestplans — createMsdyn_knowledgeharvestplan: Create a msdyn_knowledgeharvestplan
- GET /msdyn_knowledgeharvestplans({msdyn_knowledgeharvestplanid}) — getMsdyn_knowledgeharvestplan: Retrieve a msdyn_knowledgeharvestplan
- PATCH /msdyn_knowledgeharvestplans({msdyn_knowledgeharvestplanid}) — updateMsdyn_knowledgeharvestplan: Update (or upsert) a msdyn_knowledgeharvestplan
- DELETE /msdyn_knowledgeharvestplans({msdyn_knowledgeharvestplanid}) — deleteMsdyn_knowledgeharvestplan: Delete a msdyn_knowledgeharvestplan

## msdyn_knowledgeinteractioninsight
- GET /msdyn_knowledgeinteractioninsights — listMsdyn_knowledgeinteractioninsights: List msdyn_knowledgeinteractioninsights
- POST /msdyn_knowledgeinteractioninsights — createMsdyn_knowledgeinteractioninsight: Create a msdyn_knowledgeinteractioninsight
- GET /msdyn_knowledgeinteractioninsights({msdyn_knowledgeinteractioninsightid}) — getMsdyn_knowledgeinteractioninsight: Retrieve a msdyn_knowledgeinteractioninsight
- PATCH /msdyn_knowledgeinteractioninsights({msdyn_knowledgeinteractioninsightid}) — updateMsdyn_knowledgeinteractioninsight: Update (or upsert) a msdyn_knowledgeinteractioninsight
- DELETE /msdyn_knowledgeinteractioninsights({msdyn_knowledgeinteractioninsightid}) — deleteMsdyn_knowledgeinteractioninsight: Delete a msdyn_knowledgeinteractioninsight

## msdyn_knowledgemanagementsetting
- GET /msdyn_knowledgemanagementsettings — listMsdyn_knowledgemanagementsettings: List msdyn_knowledgemanagementsettings
- POST /msdyn_knowledgemanagementsettings — createMsdyn_knowledgemanagementsetting: Create a msdyn_knowledgemanagementsetting
- GET /msdyn_knowledgemanagementsettings({msdyn_knowledgemanagementsettingid}) — getMsdyn_knowledgemanagementsetting: Retrieve a msdyn_knowledgemanagementsetting
- PATCH /msdyn_knowledgemanagementsettings({msdyn_knowledgemanagementsettingid}) — updateMsdyn_knowledgemanagementsetting: Update (or upsert) a msdyn_knowledgemanagementsetting
- DELETE /msdyn_knowledgemanagementsettings({msdyn_knowledgemanagementsettingid}) — deleteMsdyn_knowledgemanagementsetting: Delete a msdyn_knowledgemanagementsetting

## msdyn_knowledgepersonalfilter
- GET /msdyn_knowledgepersonalfilters — listMsdyn_knowledgepersonalfilters: List msdyn_knowledgepersonalfilters
- POST /msdyn_knowledgepersonalfilters — createMsdyn_knowledgepersonalfilter: Create a msdyn_knowledgepersonalfilter
- GET /msdyn_knowledgepersonalfilters({msdyn_knowledgepersonalfilterid}) — getMsdyn_knowledgepersonalfilter: Retrieve a msdyn_knowledgepersonalfilter
- PATCH /msdyn_knowledgepersonalfilters({msdyn_knowledgepersonalfilterid}) — updateMsdyn_knowledgepersonalfilter: Update (or upsert) a msdyn_knowledgepersonalfilter
- DELETE /msdyn_knowledgepersonalfilters({msdyn_knowledgepersonalfilterid}) — deleteMsdyn_knowledgepersonalfilter: Delete a msdyn_knowledgepersonalfilter

## msdyn_knowledgesearchfilter
- GET /msdyn_knowledgesearchfilters — listMsdyn_knowledgesearchfilters: List msdyn_knowledgesearchfilters
- POST /msdyn_knowledgesearchfilters — createMsdyn_knowledgesearchfilter: Create a msdyn_knowledgesearchfilter
- GET /msdyn_knowledgesearchfilters({msdyn_knowledgesearchfilterid}) — getMsdyn_knowledgesearchfilter: Retrieve a msdyn_knowledgesearchfilter
- PATCH /msdyn_knowledgesearchfilters({msdyn_knowledgesearchfilterid}) — updateMsdyn_knowledgesearchfilter: Update (or upsert) a msdyn_knowledgesearchfilter
- DELETE /msdyn_knowledgesearchfilters({msdyn_knowledgesearchfilterid}) — deleteMsdyn_knowledgesearchfilter: Delete a msdyn_knowledgesearchfilter

## msdyn_knowledgesearchinsight
- GET /msdyn_knowledgesearchinsights — listMsdyn_knowledgesearchinsights: List msdyn_knowledgesearchinsights
- POST /msdyn_knowledgesearchinsights — createMsdyn_knowledgesearchinsight: Create a msdyn_knowledgesearchinsight
- GET /msdyn_knowledgesearchinsights({msdyn_knowledgesearchinsightid}) — getMsdyn_knowledgesearchinsight: Retrieve a msdyn_knowledgesearchinsight
- PATCH /msdyn_knowledgesearchinsights({msdyn_knowledgesearchinsightid}) — updateMsdyn_knowledgesearchinsight: Update (or upsert) a msdyn_knowledgesearchinsight
- DELETE /msdyn_knowledgesearchinsights({msdyn_knowledgesearchinsightid}) — deleteMsdyn_knowledgesearchinsight: Delete a msdyn_knowledgesearchinsight

## msdyn_locationrecord
- GET /msdyn_locationrecords — listMsdyn_locationrecords: List msdyn_locationrecords
- POST /msdyn_locationrecords — createMsdyn_locationrecord: Create a msdyn_locationrecord
- GET /msdyn_locationrecords({msdyn_locationrecordid}) — getMsdyn_locationrecord: Retrieve a msdyn_locationrecord
- PATCH /msdyn_locationrecords({msdyn_locationrecordid}) — updateMsdyn_locationrecord: Update (or upsert) a msdyn_locationrecord
- DELETE /msdyn_locationrecords({msdyn_locationrecordid}) — deleteMsdyn_locationrecord: Delete a msdyn_locationrecord

## msdyn_mobileapp
- GET /msdyn_mobileapps — listMsdyn_mobileapps: List msdyn_mobileapps
- POST /msdyn_mobileapps — createMsdyn_mobileapp: Create a msdyn_mobileapp
- GET /msdyn_mobileapps({msdyn_mobileappid}) — getMsdyn_mobileapp: Retrieve a msdyn_mobileapp
- PATCH /msdyn_mobileapps({msdyn_mobileappid}) — updateMsdyn_mobileapp: Update (or upsert) a msdyn_mobileapp
- DELETE /msdyn_mobileapps({msdyn_mobileappid}) — deleteMsdyn_mobileapp: Delete a msdyn_mobileapp

## msdyn_modulerundetail
- GET /msdyn_modulerundetails — listMsdyn_modulerundetails: List msdyn_modulerundetails
- POST /msdyn_modulerundetails — createMsdyn_modulerundetail: Create a msdyn_modulerundetail
- GET /msdyn_modulerundetails({msdyn_modulerundetailid}) — getMsdyn_modulerundetail: Retrieve a msdyn_modulerundetail
- PATCH /msdyn_modulerundetails({msdyn_modulerundetailid}) — updateMsdyn_modulerundetail: Update (or upsert) a msdyn_modulerundetail
- DELETE /msdyn_modulerundetails({msdyn_modulerundetailid}) — deleteMsdyn_modulerundetail: Delete a msdyn_modulerundetail

## msdyn_nativeextension
- GET /msdyn_nativeextensions — listMsdyn_nativeextensions: List msdyn_nativeextensions
- POST /msdyn_nativeextensions — createMsdyn_nativeextension: Create a msdyn_nativeextension
- GET /msdyn_nativeextensions({msdyn_nativeextensionid}) — getMsdyn_nativeextension: Retrieve a msdyn_nativeextension
- PATCH /msdyn_nativeextensions({msdyn_nativeextensionid}) — updateMsdyn_nativeextension: Update (or upsert) a msdyn_nativeextension
- DELETE /msdyn_nativeextensions({msdyn_nativeextensionid}) — deleteMsdyn_nativeextension: Delete a msdyn_nativeextension

## msdyn_nonrelationalds
- GET /msdyn_nonrelationaldses — listMsdyn_nonrelationaldses: List msdyn_nonrelationaldses
- POST /msdyn_nonrelationaldses — createMsdyn_nonrelationalds: Create a msdyn_nonrelationalds
- GET /msdyn_nonrelationaldses({msdyn_nonrelationaldsid}) — getMsdyn_nonrelationalds: Retrieve a msdyn_nonrelationalds
- PATCH /msdyn_nonrelationaldses({msdyn_nonrelationaldsid}) — updateMsdyn_nonrelationalds: Update (or upsert) a msdyn_nonrelationalds
- DELETE /msdyn_nonrelationaldses({msdyn_nonrelationaldsid}) — deleteMsdyn_nonrelationalds: Delete a msdyn_nonrelationalds

## msdyn_odatav4ds
- GET /msdyn_odatav4ds — listMsdyn_odatav4ds: List msdyn_odatav4ds
- POST /msdyn_odatav4ds — createMsdyn_odatav4ds: Create a msdyn_odatav4ds
- GET /msdyn_odatav4ds({msdyn_odatav4dsid}) — getMsdyn_odatav4ds: Retrieve a msdyn_odatav4ds
- PATCH /msdyn_odatav4ds({msdyn_odatav4dsid}) — updateMsdyn_odatav4ds: Update (or upsert) a msdyn_odatav4ds
- DELETE /msdyn_odatav4ds({msdyn_odatav4dsid}) — deleteMsdyn_odatav4ds: Delete a msdyn_odatav4ds

## msdyn_pmanalysishistory
- GET /msdyn_pmanalysishistories — listMsdyn_pmanalysishistories: List msdyn_pmanalysishistories
- POST /msdyn_pmanalysishistories — createMsdyn_pmanalysishistory: Create a msdyn_pmanalysishistory
- GET /msdyn_pmanalysishistories({msdyn_pmanalysishistoryid}) — getMsdyn_pmanalysishistory: Retrieve a msdyn_pmanalysishistory
- PATCH /msdyn_pmanalysishistories({msdyn_pmanalysishistoryid}) — updateMsdyn_pmanalysishistory: Update (or upsert) a msdyn_pmanalysishistory
- DELETE /msdyn_pmanalysishistories({msdyn_pmanalysishistoryid}) — deleteMsdyn_pmanalysishistory: Delete a msdyn_pmanalysishistory

## msdyn_pmbusinessruleautomationconfig
- GET /msdyn_pmbusinessruleautomationconfigs — listMsdyn_pmbusinessruleautomationconfigs: List msdyn_pmbusinessruleautomationconfigs
- POST /msdyn_pmbusinessruleautomationconfigs — createMsdyn_pmbusinessruleautomationconfig: Create a msdyn_pmbusinessruleautomationconfig
- GET /msdyn_pmbusinessruleautomationconfigs({msdyn_pmbusinessruleautomationconfigid}) — getMsdyn_pmbusinessruleautomationconfig: Retrieve a msdyn_pmbusinessruleautomationconfig
- PATCH /msdyn_pmbusinessruleautomationconfigs({msdyn_pmbusinessruleautomationconfigid}) — updateMsdyn_pmbusinessruleautomationconfig: Update (or upsert) a msdyn_pmbusinessruleautomationconfig
- DELETE /msdyn_pmbusinessruleautomationconfigs({msdyn_pmbusinessruleautomationconfigid}) — deleteMsdyn_pmbusinessruleautomationconfig: Delete a msdyn_pmbusinessruleautomationconfig

## msdyn_pmcalendar
- GET /msdyn_pmcalendars — listMsdyn_pmcalendars: List msdyn_pmcalendars
- POST /msdyn_pmcalendars — createMsdyn_pmcalendar: Create a msdyn_pmcalendar
- GET /msdyn_pmcalendars({msdyn_pmcalendarid}) — getMsdyn_pmcalendar: Retrieve a msdyn_pmcalendar
- PATCH /msdyn_pmcalendars({msdyn_pmcalendarid}) — updateMsdyn_pmcalendar: Update (or upsert) a msdyn_pmcalendar
- DELETE /msdyn_pmcalendars({msdyn_pmcalendarid}) — deleteMsdyn_pmcalendar: Delete a msdyn_pmcalendar

## msdyn_pmcalendarversion
- GET /msdyn_pmcalendarversions — listMsdyn_pmcalendarversions: List msdyn_pmcalendarversions
- POST /msdyn_pmcalendarversions — createMsdyn_pmcalendarversion: Create a msdyn_pmcalendarversion
- GET /msdyn_pmcalendarversions({msdyn_pmcalendarversionid}) — getMsdyn_pmcalendarversion: Retrieve a msdyn_pmcalendarversion
- PATCH /msdyn_pmcalendarversions({msdyn_pmcalendarversionid}) — updateMsdyn_pmcalendarversion: Update (or upsert) a msdyn_pmcalendarversion
- DELETE /msdyn_pmcalendarversions({msdyn_pmcalendarversionid}) — deleteMsdyn_pmcalendarversion: Delete a msdyn_pmcalendarversion

## msdyn_pminferredtask
- GET /msdyn_pminferredtasks — listMsdyn_pminferredtasks: List msdyn_pminferredtasks
- POST /msdyn_pminferredtasks — createMsdyn_pminferredtask: Create a msdyn_pminferredtask
- GET /msdyn_pminferredtasks({msdyn_pminferredtaskid}) — getMsdyn_pminferredtask: Retrieve a msdyn_pminferredtask
- PATCH /msdyn_pminferredtasks({msdyn_pminferredtaskid}) — updateMsdyn_pminferredtask: Update (or upsert) a msdyn_pminferredtask
- DELETE /msdyn_pminferredtasks({msdyn_pminferredtaskid}) — deleteMsdyn_pminferredtask: Delete a msdyn_pminferredtask
- POST /msdyn_pminferredtasks({msdyn_pminferredtaskid})/Microsoft.Dynamics.CRM.Analyze — analyzeOnMsdyn_pminferredtask: Analyze action
- POST /msdyn_pminferredtasks({msdyn_pminferredtaskid})/Microsoft.Dynamics.CRM.Share — shareOnMsdyn_pminferredtask: Share action

## msdyn_pmprocessextendedmetadataversion
- GET /msdyn_pmprocessextendedmetadataversions — listMsdyn_pmprocessextendedmetadataversions: List msdyn_pmprocessextendedmetadataversions
- POST /msdyn_pmprocessextendedmetadataversions — createMsdyn_pmprocessextendedmetadataversion: Create a msdyn_pmprocessextendedmetadataversion
- GET /msdyn_pmprocessextendedmetadataversions({msdyn_pmprocessextendedmetadataversionid}) — getMsdyn_pmprocessextendedmetadataversion: Retrieve a msdyn_pmprocessextendedmetadataversion
- PATCH /msdyn_pmprocessextendedmetadataversions({msdyn_pmprocessextendedmetadataversionid}) — updateMsdyn_pmprocessextendedmetadataversion: Update (or upsert) a msdyn_pmprocessextendedmetadataversion
- DELETE /msdyn_pmprocessextendedmetadataversions({msdyn_pmprocessextendedmetadataversionid}) — deleteMsdyn_pmprocessextendedmetadataversion: Delete a msdyn_pmprocessextendedmetadataversion

## msdyn_pmprocesstemplate
- GET /msdyn_pmprocesstemplates — listMsdyn_pmprocesstemplates: List msdyn_pmprocesstemplates
- POST /msdyn_pmprocesstemplates — createMsdyn_pmprocesstemplate: Create a msdyn_pmprocesstemplate
- GET /msdyn_pmprocesstemplates({msdyn_pmprocesstemplateid}) — getMsdyn_pmprocesstemplate: Retrieve a msdyn_pmprocesstemplate
- PATCH /msdyn_pmprocesstemplates({msdyn_pmprocesstemplateid}) — updateMsdyn_pmprocesstemplate: Update (or upsert) a msdyn_pmprocesstemplate
- DELETE /msdyn_pmprocesstemplates({msdyn_pmprocesstemplateid}) — deleteMsdyn_pmprocesstemplate: Delete a msdyn_pmprocesstemplate

## msdyn_pmprocessusersettings
- GET /msdyn_pmprocessusersettings — listMsdyn_pmprocessusersettings: List msdyn_pmprocessusersettings
- POST /msdyn_pmprocessusersettings — createMsdyn_pmprocessusersettings: Create a msdyn_pmprocessusersettings
- GET /msdyn_pmprocessusersettings({msdyn_pmprocessusersettingsid}) — getMsdyn_pmprocessusersettings: Retrieve a msdyn_pmprocessusersettings
- PATCH /msdyn_pmprocessusersettings({msdyn_pmprocessusersettingsid}) — updateMsdyn_pmprocessusersettings: Update (or upsert) a msdyn_pmprocessusersettings
- DELETE /msdyn_pmprocessusersettings({msdyn_pmprocessusersettingsid}) — deleteMsdyn_pmprocessusersettings: Delete a msdyn_pmprocessusersettings

## msdyn_pmprocessversion
- GET /msdyn_pmprocessversions — listMsdyn_pmprocessversions: List msdyn_pmprocessversions
- POST /msdyn_pmprocessversions — createMsdyn_pmprocessversion: Create a msdyn_pmprocessversion
- GET /msdyn_pmprocessversions({msdyn_pmprocessversionid}) — getMsdyn_pmprocessversion: Retrieve a msdyn_pmprocessversion
- PATCH /msdyn_pmprocessversions({msdyn_pmprocessversionid}) — updateMsdyn_pmprocessversion: Update (or upsert) a msdyn_pmprocessversion
- DELETE /msdyn_pmprocessversions({msdyn_pmprocessversionid}) — deleteMsdyn_pmprocessversion: Delete a msdyn_pmprocessversion

## msdyn_pmrecording
- GET /msdyn_pmrecordings — listMsdyn_pmrecordings: List msdyn_pmrecordings
- POST /msdyn_pmrecordings — createMsdyn_pmrecording: Create a msdyn_pmrecording
- GET /msdyn_pmrecordings({msdyn_pmrecordingid}) — getMsdyn_pmrecording: Retrieve a msdyn_pmrecording
- PATCH /msdyn_pmrecordings({msdyn_pmrecordingid}) — updateMsdyn_pmrecording: Update (or upsert) a msdyn_pmrecording
- DELETE /msdyn_pmrecordings({msdyn_pmrecordingid}) — deleteMsdyn_pmrecording: Delete a msdyn_pmrecording
- POST /msdyn_pmrecordings({msdyn_pmrecordingid})/Microsoft.Dynamics.CRM.Ingest — ingestOnMsdyn_pmrecording: Ingest action

## msdyn_pmsimulation
- GET /msdyn_pmsimulations — listMsdyn_pmsimulations: List msdyn_pmsimulations
- POST /msdyn_pmsimulations — createMsdyn_pmsimulation: Create a msdyn_pmsimulation
- GET /msdyn_pmsimulations({msdyn_pmsimulationid}) — getMsdyn_pmsimulation: Retrieve a msdyn_pmsimulation
- PATCH /msdyn_pmsimulations({msdyn_pmsimulationid}) — updateMsdyn_pmsimulation: Update (or upsert) a msdyn_pmsimulation
- DELETE /msdyn_pmsimulations({msdyn_pmsimulationid}) — deleteMsdyn_pmsimulation: Delete a msdyn_pmsimulation

## msdyn_pmtab
- GET /msdyn_pmtabs — listMsdyn_pmtabs: List msdyn_pmtabs
- POST /msdyn_pmtabs — createMsdyn_pmtab: Create a msdyn_pmtab
- GET /msdyn_pmtabs({msdyn_pmtabid}) — getMsdyn_pmtab: Retrieve a msdyn_pmtab
- PATCH /msdyn_pmtabs({msdyn_pmtabid}) — updateMsdyn_pmtab: Update (or upsert) a msdyn_pmtab
- DELETE /msdyn_pmtabs({msdyn_pmtabid}) — deleteMsdyn_pmtab: Delete a msdyn_pmtab

## msdyn_pmtemplate
- GET /msdyn_pmtemplates — listMsdyn_pmtemplates: List msdyn_pmtemplates
- POST /msdyn_pmtemplates — createMsdyn_pmtemplate: Create a msdyn_pmtemplate
- GET /msdyn_pmtemplates({msdyn_pmtemplateid}) — getMsdyn_pmtemplate: Retrieve a msdyn_pmtemplate
- PATCH /msdyn_pmtemplates({msdyn_pmtemplateid}) — updateMsdyn_pmtemplate: Update (or upsert) a msdyn_pmtemplate
- DELETE /msdyn_pmtemplates({msdyn_pmtemplateid}) — deleteMsdyn_pmtemplate: Delete a msdyn_pmtemplate

## msdyn_pmview
- GET /msdyn_pmviews — listMsdyn_pmviews: List msdyn_pmviews
- POST /msdyn_pmviews — createMsdyn_pmview: Create a msdyn_pmview
- GET /msdyn_pmviews({msdyn_pmviewid}) — getMsdyn_pmview: Retrieve a msdyn_pmview
- PATCH /msdyn_pmviews({msdyn_pmviewid}) — updateMsdyn_pmview: Update (or upsert) a msdyn_pmview
- DELETE /msdyn_pmviews({msdyn_pmviewid}) — deleteMsdyn_pmview: Delete a msdyn_pmview

## msdyn_powerappswrapbuild
- GET /msdyn_powerappswrapbuilds — listMsdyn_powerappswrapbuilds: List msdyn_powerappswrapbuilds
- POST /msdyn_powerappswrapbuilds — createMsdyn_powerappswrapbuild: Create a msdyn_powerappswrapbuild
- GET /msdyn_powerappswrapbuilds({msdyn_powerappswrapbuildid}) — getMsdyn_powerappswrapbuild: Retrieve a msdyn_powerappswrapbuild
- PATCH /msdyn_powerappswrapbuilds({msdyn_powerappswrapbuildid}) — updateMsdyn_powerappswrapbuild: Update (or upsert) a msdyn_powerappswrapbuild
- DELETE /msdyn_powerappswrapbuilds({msdyn_powerappswrapbuildid}) — deleteMsdyn_powerappswrapbuild: Delete a msdyn_powerappswrapbuild

## msdyn_qna
- GET /msdyn_qnas — listMsdyn_qnas: List msdyn_qnas
- POST /msdyn_qnas — createMsdyn_qna: Create a msdyn_qna
- GET /msdyn_qnas({msdyn_qnaid}) — getMsdyn_qna: Retrieve a msdyn_qna
- PATCH /msdyn_qnas({msdyn_qnaid}) — updateMsdyn_qna: Update (or upsert) a msdyn_qna
- DELETE /msdyn_qnas({msdyn_qnaid}) — deleteMsdyn_qna: Delete a msdyn_qna

## msdyn_richtextfile
- GET /msdyn_richtextfiles — listMsdyn_richtextfiles: List msdyn_richtextfiles
- POST /msdyn_richtextfiles — createMsdyn_richtextfile: Create a msdyn_richtextfile
- GET /msdyn_richtextfiles({msdyn_richtextfileid}) — getMsdyn_richtextfile: Retrieve a msdyn_richtextfile
- PATCH /msdyn_richtextfiles({msdyn_richtextfileid}) — updateMsdyn_richtextfile: Update (or upsert) a msdyn_richtextfile
- DELETE /msdyn_richtextfiles({msdyn_richtextfileid}) — deleteMsdyn_richtextfile: Delete a msdyn_richtextfile

## msdyn_rtestructuredtemplate
- GET /msdyn_rtestructuredtemplates — listMsdyn_rtestructuredtemplates: List msdyn_rtestructuredtemplates
- POST /msdyn_rtestructuredtemplates — createMsdyn_rtestructuredtemplate: Create a msdyn_rtestructuredtemplate
- GET /msdyn_rtestructuredtemplates({msdyn_rtestructuredtemplateid}) — getMsdyn_rtestructuredtemplate: Retrieve a msdyn_rtestructuredtemplate
- PATCH /msdyn_rtestructuredtemplates({msdyn_rtestructuredtemplateid}) — updateMsdyn_rtestructuredtemplate: Update (or upsert) a msdyn_rtestructuredtemplate
- DELETE /msdyn_rtestructuredtemplates({msdyn_rtestructuredtemplateid}) — deleteMsdyn_rtestructuredtemplate: Delete a msdyn_rtestructuredtemplate

## msdyn_rtestructuredtemplateconfig
- GET /msdyn_rtestructuredtemplateconfigs — listMsdyn_rtestructuredtemplateconfigs: List msdyn_rtestructuredtemplateconfigs
- POST /msdyn_rtestructuredtemplateconfigs — createMsdyn_rtestructuredtemplateconfig: Create a msdyn_rtestructuredtemplateconfig
- GET /msdyn_rtestructuredtemplateconfigs({msdyn_rtestructuredtemplateconfigid}) — getMsdyn_rtestructuredtemplateconfig: Retrieve a msdyn_rtestructuredtemplateconfig
- PATCH /msdyn_rtestructuredtemplateconfigs({msdyn_rtestructuredtemplateconfigid}) — updateMsdyn_rtestructuredtemplateconfig: Update (or upsert) a msdyn_rtestructuredtemplateconfig
- DELETE /msdyn_rtestructuredtemplateconfigs({msdyn_rtestructuredtemplateconfigid}) — deleteMsdyn_rtestructuredtemplateconfig: Delete a msdyn_rtestructuredtemplateconfig

## msdyn_rtetemplatemapping
- GET /msdyn_rtetemplatemappings — listMsdyn_rtetemplatemappings: List msdyn_rtetemplatemappings
- POST /msdyn_rtetemplatemappings — createMsdyn_rtetemplatemapping: Create a msdyn_rtetemplatemapping
- GET /msdyn_rtetemplatemappings({msdyn_rtetemplatemappingid}) — getMsdyn_rtetemplatemapping: Retrieve a msdyn_rtetemplatemapping
- PATCH /msdyn_rtetemplatemappings({msdyn_rtetemplatemappingid}) — updateMsdyn_rtetemplatemapping: Update (or upsert) a msdyn_rtetemplatemapping
- DELETE /msdyn_rtetemplatemappings({msdyn_rtetemplatemappingid}) — deleteMsdyn_rtetemplatemapping: Delete a msdyn_rtetemplatemapping

## msdyn_salesforcestructuredobject
- GET /msdyn_salesforcestructuredobjects — listMsdyn_salesforcestructuredobjects: List msdyn_salesforcestructuredobjects
- POST /msdyn_salesforcestructuredobjects — createMsdyn_salesforcestructuredobject: Create a msdyn_salesforcestructuredobject
- GET /msdyn_salesforcestructuredobjects({msdyn_salesforcestructuredobjectid}) — getMsdyn_salesforcestructuredobject: Retrieve a msdyn_salesforcestructuredobject
- PATCH /msdyn_salesforcestructuredobjects({msdyn_salesforcestructuredobjectid}) — updateMsdyn_salesforcestructuredobject: Update (or upsert) a msdyn_salesforcestructuredobject
- DELETE /msdyn_salesforcestructuredobjects({msdyn_salesforcestructuredobjectid}) — deleteMsdyn_salesforcestructuredobject: Delete a msdyn_salesforcestructuredobject

## msdyn_salesforcestructuredqnaconfig
- GET /msdyn_salesforcestructuredqnaconfigs — listMsdyn_salesforcestructuredqnaconfigs: List msdyn_salesforcestructuredqnaconfigs
- POST /msdyn_salesforcestructuredqnaconfigs — createMsdyn_salesforcestructuredqnaconfig: Create a msdyn_salesforcestructuredqnaconfig
- GET /msdyn_salesforcestructuredqnaconfigs({msdyn_salesforcestructuredqnaconfigid}) — getMsdyn_salesforcestructuredqnaconfig: Retrieve a msdyn_salesforcestructuredqnaconfig
- PATCH /msdyn_salesforcestructuredqnaconfigs({msdyn_salesforcestructuredqnaconfigid}) — updateMsdyn_salesforcestructuredqnaconfig: Update (or upsert) a msdyn_salesforcestructuredqnaconfig
- DELETE /msdyn_salesforcestructuredqnaconfigs({msdyn_salesforcestructuredqnaconfigid}) — deleteMsdyn_salesforcestructuredqnaconfig: Delete a msdyn_salesforcestructuredqnaconfig

## msdyn_schedule
- GET /msdyn_schedules — listMsdyn_schedules: List msdyn_schedules
- POST /msdyn_schedules — createMsdyn_schedule: Create a msdyn_schedule
- GET /msdyn_schedules({msdyn_scheduleid}) — getMsdyn_schedule: Retrieve a msdyn_schedule
- PATCH /msdyn_schedules({msdyn_scheduleid}) — updateMsdyn_schedule: Update (or upsert) a msdyn_schedule
- DELETE /msdyn_schedules({msdyn_scheduleid}) — deleteMsdyn_schedule: Delete a msdyn_schedule

## msdyn_serviceconfiguration
- GET /msdyn_serviceconfigurations — listMsdyn_serviceconfigurations: List msdyn_serviceconfigurations
- POST /msdyn_serviceconfigurations — createMsdyn_serviceconfiguration: Create a msdyn_serviceconfiguration
- GET /msdyn_serviceconfigurations({msdyn_serviceconfigurationid}) — getMsdyn_serviceconfiguration: Retrieve a msdyn_serviceconfiguration
- PATCH /msdyn_serviceconfigurations({msdyn_serviceconfigurationid}) — updateMsdyn_serviceconfiguration: Update (or upsert) a msdyn_serviceconfiguration
- DELETE /msdyn_serviceconfigurations({msdyn_serviceconfigurationid}) — deleteMsdyn_serviceconfiguration: Delete a msdyn_serviceconfiguration

## msdyn_slakpi
- GET /msdyn_slakpis — listMsdyn_slakpis: List msdyn_slakpis
- POST /msdyn_slakpis — createMsdyn_slakpi: Create a msdyn_slakpi
- GET /msdyn_slakpis({msdyn_slakpiid}) — getMsdyn_slakpi: Retrieve a msdyn_slakpi
- PATCH /msdyn_slakpis({msdyn_slakpiid}) — updateMsdyn_slakpi: Update (or upsert) a msdyn_slakpi
- DELETE /msdyn_slakpis({msdyn_slakpiid}) — deleteMsdyn_slakpi: Delete a msdyn_slakpi

## msdyn_solutionhealthrule
- GET /msdyn_solutionhealthrules — listMsdyn_solutionhealthrules: List msdyn_solutionhealthrules
- POST /msdyn_solutionhealthrules — createMsdyn_solutionhealthrule: Create a msdyn_solutionhealthrule
- GET /msdyn_solutionhealthrules({msdyn_solutionhealthruleid}) — getMsdyn_solutionhealthrule: Retrieve a msdyn_solutionhealthrule
- PATCH /msdyn_solutionhealthrules({msdyn_solutionhealthruleid}) — updateMsdyn_solutionhealthrule: Update (or upsert) a msdyn_solutionhealthrule
- DELETE /msdyn_solutionhealthrules({msdyn_solutionhealthruleid}) — deleteMsdyn_solutionhealthrule: Delete a msdyn_solutionhealthrule

## msdyn_solutionhealthruleargument
- GET /msdyn_solutionhealthrulearguments — listMsdyn_solutionhealthrulearguments: List msdyn_solutionhealthrulearguments
- POST /msdyn_solutionhealthrulearguments — createMsdyn_solutionhealthruleargument: Create a msdyn_solutionhealthruleargument
- GET /msdyn_solutionhealthrulearguments({msdyn_solutionhealthruleargumentid}) — getMsdyn_solutionhealthruleargument: Retrieve a msdyn_solutionhealthruleargument
- PATCH /msdyn_solutionhealthrulearguments({msdyn_solutionhealthruleargumentid}) — updateMsdyn_solutionhealthruleargument: Update (or upsert) a msdyn_solutionhealthruleargument
- DELETE /msdyn_solutionhealthrulearguments({msdyn_solutionhealthruleargumentid}) — deleteMsdyn_solutionhealthruleargument: Delete a msdyn_solutionhealthruleargument

## msdyn_solutionhealthruleset
- GET /msdyn_solutionhealthrulesets — listMsdyn_solutionhealthrulesets: List msdyn_solutionhealthrulesets
- POST /msdyn_solutionhealthrulesets — createMsdyn_solutionhealthruleset: Create a msdyn_solutionhealthruleset
- GET /msdyn_solutionhealthrulesets({msdyn_solutionhealthrulesetid}) — getMsdyn_solutionhealthruleset: Retrieve a msdyn_solutionhealthruleset
- PATCH /msdyn_solutionhealthrulesets({msdyn_solutionhealthrulesetid}) — updateMsdyn_solutionhealthruleset: Update (or upsert) a msdyn_solutionhealthruleset
- DELETE /msdyn_solutionhealthrulesets({msdyn_solutionhealthrulesetid}) — deleteMsdyn_solutionhealthruleset: Delete a msdyn_solutionhealthruleset

## msdyn_solutionhistory
- GET /msdyn_solutionhistories — listMsdyn_solutionhistories: List msdyn_solutionhistories
- POST /msdyn_solutionhistories — createMsdyn_solutionhistory: Create a msdyn_solutionhistory
- GET /msdyn_solutionhistories({msdyn_solutionhistoryid}) — getMsdyn_solutionhistory: Retrieve a msdyn_solutionhistory
- PATCH /msdyn_solutionhistories({msdyn_solutionhistoryid}) — updateMsdyn_solutionhistory: Update (or upsert) a msdyn_solutionhistory
- DELETE /msdyn_solutionhistories({msdyn_solutionhistoryid}) — deleteMsdyn_solutionhistory: Delete a msdyn_solutionhistory

## msdyn_solutionhistorydatasource
- GET /msdyn_solutionhistorydatasources — listMsdyn_solutionhistorydatasources: List msdyn_solutionhistorydatasources
- POST /msdyn_solutionhistorydatasources — createMsdyn_solutionhistorydatasource: Create a msdyn_solutionhistorydatasource
- GET /msdyn_solutionhistorydatasources({msdyn_solutionhistorydatasourceid}) — getMsdyn_solutionhistorydatasource: Retrieve a msdyn_solutionhistorydatasource
- PATCH /msdyn_solutionhistorydatasources({msdyn_solutionhistorydatasourceid}) — updateMsdyn_solutionhistorydatasource: Update (or upsert) a msdyn_solutionhistorydatasource
- DELETE /msdyn_solutionhistorydatasources({msdyn_solutionhistorydatasourceid}) — deleteMsdyn_solutionhistorydatasource: Delete a msdyn_solutionhistorydatasource

## msdyn_timelinepin
- GET /msdyn_timelinepins — listMsdyn_timelinepins: List msdyn_timelinepins
- POST /msdyn_timelinepins — createMsdyn_timelinepin: Create a msdyn_timelinepin
- GET /msdyn_timelinepins({msdyn_timelinepinid}) — getMsdyn_timelinepin: Retrieve a msdyn_timelinepin
- PATCH /msdyn_timelinepins({msdyn_timelinepinid}) — updateMsdyn_timelinepin: Update (or upsert) a msdyn_timelinepin
- DELETE /msdyn_timelinepins({msdyn_timelinepinid}) — deleteMsdyn_timelinepin: Delete a msdyn_timelinepin

## msdyn_tour
- GET /msdyn_tours — listMsdyn_tours: List msdyn_tours
- POST /msdyn_tours — createMsdyn_tour: Create a msdyn_tour
- GET /msdyn_tours({msdyn_tourid}) — getMsdyn_tour: Retrieve a msdyn_tour
- PATCH /msdyn_tours({msdyn_tourid}) — updateMsdyn_tour: Update (or upsert) a msdyn_tour
- DELETE /msdyn_tours({msdyn_tourid}) — deleteMsdyn_tour: Delete a msdyn_tour

## msdyn_virtualtablecolumncandidate
- GET /msdyn_virtualtablecolumncandidates — listMsdyn_virtualtablecolumncandidates: List msdyn_virtualtablecolumncandidates
- POST /msdyn_virtualtablecolumncandidates — createMsdyn_virtualtablecolumncandidate: Create a msdyn_virtualtablecolumncandidate
- GET /msdyn_virtualtablecolumncandidates({msdyn_virtualtablecolumncandidateid}) — getMsdyn_virtualtablecolumncandidate: Retrieve a msdyn_virtualtablecolumncandidate
- PATCH /msdyn_virtualtablecolumncandidates({msdyn_virtualtablecolumncandidateid}) — updateMsdyn_virtualtablecolumncandidate: Update (or upsert) a msdyn_virtualtablecolumncandidate
- DELETE /msdyn_virtualtablecolumncandidates({msdyn_virtualtablecolumncandidateid}) — deleteMsdyn_virtualtablecolumncandidate: Delete a msdyn_virtualtablecolumncandidate

## msdyn_workflowactionstatus
- GET /msdyn_workflowactionstatuses — listMsdyn_workflowactionstatuses: List msdyn_workflowactionstatuses
- POST /msdyn_workflowactionstatuses — createMsdyn_workflowactionstatus: Create a msdyn_workflowactionstatus
- GET /msdyn_workflowactionstatuses({msdyn_workflowactionstatusid}) — getMsdyn_workflowactionstatus: Retrieve a msdyn_workflowactionstatus
- PATCH /msdyn_workflowactionstatuses({msdyn_workflowactionstatusid}) — updateMsdyn_workflowactionstatus: Update (or upsert) a msdyn_workflowactionstatus
- DELETE /msdyn_workflowactionstatuses({msdyn_workflowactionstatusid}) — deleteMsdyn_workflowactionstatus: Delete a msdyn_workflowactionstatus

## msdynce_botcontent
- GET /msdynce_botcontents — listMsdynce_botcontents: List msdynce_botcontents
- POST /msdynce_botcontents — createMsdynce_botcontent: Create a msdynce_botcontent
- GET /msdynce_botcontents({msdynce_botcontentid}) — getMsdynce_botcontent: Retrieve a msdynce_botcontent
- PATCH /msdynce_botcontents({msdynce_botcontentid}) — updateMsdynce_botcontent: Update (or upsert) a msdynce_botcontent
- DELETE /msdynce_botcontents({msdynce_botcontentid}) — deleteMsdynce_botcontent: Delete a msdynce_botcontent

## msgraphresourcetosubscription
- GET /msgraphresourcetosubscriptions — listMsgraphresourcetosubscriptions: List msgraphresourcetosubscriptions
- POST /msgraphresourcetosubscriptions — createMsgraphresourcetosubscription: Create a msgraphresourcetosubscription
- GET /msgraphresourcetosubscriptions({msgraphresourcetosubscriptionid}) — getMsgraphresourcetosubscription: Retrieve a msgraphresourcetosubscription
- PATCH /msgraphresourcetosubscriptions({msgraphresourcetosubscriptionid}) — updateMsgraphresourcetosubscription: Update (or upsert) a msgraphresourcetosubscription
- DELETE /msgraphresourcetosubscriptions({msgraphresourcetosubscriptionid}) — deleteMsgraphresourcetosubscription: Delete a msgraphresourcetosubscription

## mspcat_catalogsubmissionfiles
- GET /mspcat_catalogsubmissionfileses — listMspcat_catalogsubmissionfileses: List mspcat_catalogsubmissionfileses
- POST /mspcat_catalogsubmissionfileses — createMspcat_catalogsubmissionfiles: Create a mspcat_catalogsubmissionfiles
- GET /mspcat_catalogsubmissionfileses({mspcat_catalogsubmissionfilesid}) — getMspcat_catalogsubmissionfiles: Retrieve a mspcat_catalogsubmissionfiles
- PATCH /mspcat_catalogsubmissionfileses({mspcat_catalogsubmissionfilesid}) — updateMspcat_catalogsubmissionfiles: Update (or upsert) a mspcat_catalogsubmissionfiles
- DELETE /mspcat_catalogsubmissionfileses({mspcat_catalogsubmissionfilesid}) — deleteMspcat_catalogsubmissionfiles: Delete a mspcat_catalogsubmissionfiles

## mspcat_packagestore
- GET /mspcat_packagestores — listMspcat_packagestores: List mspcat_packagestores
- POST /mspcat_packagestores — createMspcat_packagestore: Create a mspcat_packagestore
- GET /mspcat_packagestores({mspcat_packagestoreid}) — getMspcat_packagestore: Retrieve a mspcat_packagestore
- PATCH /mspcat_packagestores({mspcat_packagestoreid}) — updateMspcat_packagestore: Update (or upsert) a mspcat_packagestore
- DELETE /mspcat_packagestores({mspcat_packagestoreid}) — deleteMspcat_packagestore: Delete a mspcat_packagestore

## mspp_adplacement
- GET /mspp_adplacements — listMspp_adplacements: List mspp_adplacements
- POST /mspp_adplacements — createMspp_adplacement: Create a mspp_adplacement
- GET /mspp_adplacements({mspp_adplacementid}) — getMspp_adplacement: Retrieve a mspp_adplacement
- PATCH /mspp_adplacements({mspp_adplacementid}) — updateMspp_adplacement: Update (or upsert) a mspp_adplacement
- DELETE /mspp_adplacements({mspp_adplacementid}) — deleteMspp_adplacement: Delete a mspp_adplacement

## mspp_columnpermission
- GET /mspp_columnpermissions — listMspp_columnpermissions: List mspp_columnpermissions
- POST /mspp_columnpermissions — createMspp_columnpermission: Create a mspp_columnpermission
- GET /mspp_columnpermissions({mspp_columnpermissionid}) — getMspp_columnpermission: Retrieve a mspp_columnpermission
- PATCH /mspp_columnpermissions({mspp_columnpermissionid}) — updateMspp_columnpermission: Update (or upsert) a mspp_columnpermission
- DELETE /mspp_columnpermissions({mspp_columnpermissionid}) — deleteMspp_columnpermission: Delete a mspp_columnpermission

## mspp_columnpermissionprofile
- GET /mspp_columnpermissionprofiles — listMspp_columnpermissionprofiles: List mspp_columnpermissionprofiles
- POST /mspp_columnpermissionprofiles — createMspp_columnpermissionprofile: Create a mspp_columnpermissionprofile
- GET /mspp_columnpermissionprofiles({mspp_columnpermissionprofileid}) — getMspp_columnpermissionprofile: Retrieve a mspp_columnpermissionprofile
- PATCH /mspp_columnpermissionprofiles({mspp_columnpermissionprofileid}) — updateMspp_columnpermissionprofile: Update (or upsert) a mspp_columnpermissionprofile
- DELETE /mspp_columnpermissionprofiles({mspp_columnpermissionprofileid}) — deleteMspp_columnpermissionprofile: Delete a mspp_columnpermissionprofile

## mspp_contentsnippet
- GET /mspp_contentsnippets — listMspp_contentsnippets: List mspp_contentsnippets
- POST /mspp_contentsnippets — createMspp_contentsnippet: Create a mspp_contentsnippet
- GET /mspp_contentsnippets({mspp_contentsnippetid}) — getMspp_contentsnippet: Retrieve a mspp_contentsnippet
- PATCH /mspp_contentsnippets({mspp_contentsnippetid}) — updateMspp_contentsnippet: Update (or upsert) a mspp_contentsnippet
- DELETE /mspp_contentsnippets({mspp_contentsnippetid}) — deleteMspp_contentsnippet: Delete a mspp_contentsnippet

## mspp_entityform
- GET /mspp_entityforms — listMspp_entityforms: List mspp_entityforms
- POST /mspp_entityforms — createMspp_entityform: Create a mspp_entityform
- GET /mspp_entityforms({mspp_entityformid}) — getMspp_entityform: Retrieve a mspp_entityform
- PATCH /mspp_entityforms({mspp_entityformid}) — updateMspp_entityform: Update (or upsert) a mspp_entityform
- DELETE /mspp_entityforms({mspp_entityformid}) — deleteMspp_entityform: Delete a mspp_entityform

## mspp_entityformmetadata
- GET /mspp_entityformmetadatas — listMspp_entityformmetadatas: List mspp_entityformmetadatas
- POST /mspp_entityformmetadatas — createMspp_entityformmetadata: Create a mspp_entityformmetadata
- GET /mspp_entityformmetadatas({mspp_entityformmetadataid}) — getMspp_entityformmetadata: Retrieve a mspp_entityformmetadata
- PATCH /mspp_entityformmetadatas({mspp_entityformmetadataid}) — updateMspp_entityformmetadata: Update (or upsert) a mspp_entityformmetadata
- DELETE /mspp_entityformmetadatas({mspp_entityformmetadataid}) — deleteMspp_entityformmetadata: Delete a mspp_entityformmetadata

## mspp_entitylist
- GET /mspp_entitylists — listMspp_entitylists: List mspp_entitylists
- POST /mspp_entitylists — createMspp_entitylist: Create a mspp_entitylist
- GET /mspp_entitylists({mspp_entitylistid}) — getMspp_entitylist: Retrieve a mspp_entitylist
- PATCH /mspp_entitylists({mspp_entitylistid}) — updateMspp_entitylist: Update (or upsert) a mspp_entitylist
- DELETE /mspp_entitylists({mspp_entitylistid}) — deleteMspp_entitylist: Delete a mspp_entitylist

## mspp_entitypermission
- GET /mspp_entitypermissions — listMspp_entitypermissions: List mspp_entitypermissions
- POST /mspp_entitypermissions — createMspp_entitypermission: Create a mspp_entitypermission
- GET /mspp_entitypermissions({mspp_entitypermissionid}) — getMspp_entitypermission: Retrieve a mspp_entitypermission
- PATCH /mspp_entitypermissions({mspp_entitypermissionid}) — updateMspp_entitypermission: Update (or upsert) a mspp_entitypermission
- DELETE /mspp_entitypermissions({mspp_entitypermissionid}) — deleteMspp_entitypermission: Delete a mspp_entitypermission

## mspp_pagetemplate
- GET /mspp_pagetemplates — listMspp_pagetemplates: List mspp_pagetemplates
- POST /mspp_pagetemplates — createMspp_pagetemplate: Create a mspp_pagetemplate
- GET /mspp_pagetemplates({mspp_pagetemplateid}) — getMspp_pagetemplate: Retrieve a mspp_pagetemplate
- PATCH /mspp_pagetemplates({mspp_pagetemplateid}) — updateMspp_pagetemplate: Update (or upsert) a mspp_pagetemplate
- DELETE /mspp_pagetemplates({mspp_pagetemplateid}) — deleteMspp_pagetemplate: Delete a mspp_pagetemplate

## mspp_pollplacement
- GET /mspp_pollplacements — listMspp_pollplacements: List mspp_pollplacements
- POST /mspp_pollplacements — createMspp_pollplacement: Create a mspp_pollplacement
- GET /mspp_pollplacements({mspp_pollplacementid}) — getMspp_pollplacement: Retrieve a mspp_pollplacement
- PATCH /mspp_pollplacements({mspp_pollplacementid}) — updateMspp_pollplacement: Update (or upsert) a mspp_pollplacement
- DELETE /mspp_pollplacements({mspp_pollplacementid}) — deleteMspp_pollplacement: Delete a mspp_pollplacement

## mspp_powerpagescoreentityds
- GET /mspp_powerpagescoreentitydses — listMspp_powerpagescoreentitydses: List mspp_powerpagescoreentitydses
- POST /mspp_powerpagescoreentitydses — createMspp_powerpagescoreentityds: Create a mspp_powerpagescoreentityds
- GET /mspp_powerpagescoreentitydses({mspp_powerpagescoreentitydsid}) — getMspp_powerpagescoreentityds: Retrieve a mspp_powerpagescoreentityds
- PATCH /mspp_powerpagescoreentitydses({mspp_powerpagescoreentitydsid}) — updateMspp_powerpagescoreentityds: Update (or upsert) a mspp_powerpagescoreentityds
- DELETE /mspp_powerpagescoreentitydses({mspp_powerpagescoreentitydsid}) — deleteMspp_powerpagescoreentityds: Delete a mspp_powerpagescoreentityds

## mspp_publishingstate
- GET /mspp_publishingstates — listMspp_publishingstates: List mspp_publishingstates
- POST /mspp_publishingstates — createMspp_publishingstate: Create a mspp_publishingstate
- GET /mspp_publishingstates({mspp_publishingstateid}) — getMspp_publishingstate: Retrieve a mspp_publishingstate
- PATCH /mspp_publishingstates({mspp_publishingstateid}) — updateMspp_publishingstate: Update (or upsert) a mspp_publishingstate
- DELETE /mspp_publishingstates({mspp_publishingstateid}) — deleteMspp_publishingstate: Delete a mspp_publishingstate

## mspp_publishingstatetransitionrule
- GET /mspp_publishingstatetransitionrules — listMspp_publishingstatetransitionrules: List mspp_publishingstatetransitionrules
- POST /mspp_publishingstatetransitionrules — createMspp_publishingstatetransitionrule: Create a mspp_publishingstatetransitionrule
- GET /mspp_publishingstatetransitionrules({mspp_publishingstatetransitionruleid}) — getMspp_publishingstatetransitionrule: Retrieve a mspp_publishingstatetransitionrule
- PATCH /mspp_publishingstatetransitionrules({mspp_publishingstatetransitionruleid}) — updateMspp_publishingstatetransitionrule: Update (or upsert) a mspp_publishingstatetransitionrule
- DELETE /mspp_publishingstatetransitionrules({mspp_publishingstatetransitionruleid}) — deleteMspp_publishingstatetransitionrule: Delete a mspp_publishingstatetransitionrule

## mspp_redirect
- GET /mspp_redirects — listMspp_redirects: List mspp_redirects
- POST /mspp_redirects — createMspp_redirect: Create a mspp_redirect
- GET /mspp_redirects({mspp_redirectid}) — getMspp_redirect: Retrieve a mspp_redirect
- PATCH /mspp_redirects({mspp_redirectid}) — updateMspp_redirect: Update (or upsert) a mspp_redirect
- DELETE /mspp_redirects({mspp_redirectid}) — deleteMspp_redirect: Delete a mspp_redirect

## mspp_shortcut
- GET /mspp_shortcuts — listMspp_shortcuts: List mspp_shortcuts
- POST /mspp_shortcuts — createMspp_shortcut: Create a mspp_shortcut
- GET /mspp_shortcuts({mspp_shortcutid}) — getMspp_shortcut: Retrieve a mspp_shortcut
- PATCH /mspp_shortcuts({mspp_shortcutid}) — updateMspp_shortcut: Update (or upsert) a mspp_shortcut
- DELETE /mspp_shortcuts({mspp_shortcutid}) — deleteMspp_shortcut: Delete a mspp_shortcut

## mspp_sitemarker
- GET /mspp_sitemarkers — listMspp_sitemarkers: List mspp_sitemarkers
- POST /mspp_sitemarkers — createMspp_sitemarker: Create a mspp_sitemarker
- GET /mspp_sitemarkers({mspp_sitemarkerid}) — getMspp_sitemarker: Retrieve a mspp_sitemarker
- PATCH /mspp_sitemarkers({mspp_sitemarkerid}) — updateMspp_sitemarker: Update (or upsert) a mspp_sitemarker
- DELETE /mspp_sitemarkers({mspp_sitemarkerid}) — deleteMspp_sitemarker: Delete a mspp_sitemarker

## mspp_sitesetting
- GET /mspp_sitesettings — listMspp_sitesettings: List mspp_sitesettings
- POST /mspp_sitesettings — createMspp_sitesetting: Create a mspp_sitesetting
- GET /mspp_sitesettings({mspp_sitesettingid}) — getMspp_sitesetting: Retrieve a mspp_sitesetting
- PATCH /mspp_sitesettings({mspp_sitesettingid}) — updateMspp_sitesetting: Update (or upsert) a mspp_sitesetting
- DELETE /mspp_sitesettings({mspp_sitesettingid}) — deleteMspp_sitesetting: Delete a mspp_sitesetting

## mspp_webfile
- GET /mspp_webfiles — listMspp_webfiles: List mspp_webfiles
- POST /mspp_webfiles — createMspp_webfile: Create a mspp_webfile
- GET /mspp_webfiles({mspp_webfileid}) — getMspp_webfile: Retrieve a mspp_webfile
- PATCH /mspp_webfiles({mspp_webfileid}) — updateMspp_webfile: Update (or upsert) a mspp_webfile
- DELETE /mspp_webfiles({mspp_webfileid}) — deleteMspp_webfile: Delete a mspp_webfile

## mspp_webform
- GET /mspp_webforms — listMspp_webforms: List mspp_webforms
- POST /mspp_webforms — createMspp_webform: Create a mspp_webform
- GET /mspp_webforms({mspp_webformid}) — getMspp_webform: Retrieve a mspp_webform
- PATCH /mspp_webforms({mspp_webformid}) — updateMspp_webform: Update (or upsert) a mspp_webform
- DELETE /mspp_webforms({mspp_webformid}) — deleteMspp_webform: Delete a mspp_webform

## mspp_webformmetadata
- GET /mspp_webformmetadatas — listMspp_webformmetadatas: List mspp_webformmetadatas
- POST /mspp_webformmetadatas — createMspp_webformmetadata: Create a mspp_webformmetadata
- GET /mspp_webformmetadatas({mspp_webformmetadataid}) — getMspp_webformmetadata: Retrieve a mspp_webformmetadata
- PATCH /mspp_webformmetadatas({mspp_webformmetadataid}) — updateMspp_webformmetadata: Update (or upsert) a mspp_webformmetadata
- DELETE /mspp_webformmetadatas({mspp_webformmetadataid}) — deleteMspp_webformmetadata: Delete a mspp_webformmetadata

## mspp_webformstep
- GET /mspp_webformsteps — listMspp_webformsteps: List mspp_webformsteps
- POST /mspp_webformsteps — createMspp_webformstep: Create a mspp_webformstep
- GET /mspp_webformsteps({mspp_webformstepid}) — getMspp_webformstep: Retrieve a mspp_webformstep
- PATCH /mspp_webformsteps({mspp_webformstepid}) — updateMspp_webformstep: Update (or upsert) a mspp_webformstep
- DELETE /mspp_webformsteps({mspp_webformstepid}) — deleteMspp_webformstep: Delete a mspp_webformstep

## mspp_weblink
- GET /mspp_weblinks — listMspp_weblinks: List mspp_weblinks
- POST /mspp_weblinks — createMspp_weblink: Create a mspp_weblink
- GET /mspp_weblinks({mspp_weblinkid}) — getMspp_weblink: Retrieve a mspp_weblink
- PATCH /mspp_weblinks({mspp_weblinkid}) — updateMspp_weblink: Update (or upsert) a mspp_weblink
- DELETE /mspp_weblinks({mspp_weblinkid}) — deleteMspp_weblink: Delete a mspp_weblink

## mspp_weblinkset
- GET /mspp_weblinksets — listMspp_weblinksets: List mspp_weblinksets
- POST /mspp_weblinksets — createMspp_weblinkset: Create a mspp_weblinkset
- GET /mspp_weblinksets({mspp_weblinksetid}) — getMspp_weblinkset: Retrieve a mspp_weblinkset
- PATCH /mspp_weblinksets({mspp_weblinksetid}) — updateMspp_weblinkset: Update (or upsert) a mspp_weblinkset
- DELETE /mspp_weblinksets({mspp_weblinksetid}) — deleteMspp_weblinkset: Delete a mspp_weblinkset

## mspp_webpage
- GET /mspp_webpages — listMspp_webpages: List mspp_webpages
- POST /mspp_webpages — createMspp_webpage: Create a mspp_webpage
- GET /mspp_webpages({mspp_webpageid}) — getMspp_webpage: Retrieve a mspp_webpage
- PATCH /mspp_webpages({mspp_webpageid}) — updateMspp_webpage: Update (or upsert) a mspp_webpage
- DELETE /mspp_webpages({mspp_webpageid}) — deleteMspp_webpage: Delete a mspp_webpage

## mspp_webpageaccesscontrolrule
- GET /mspp_webpageaccesscontrolrules — listMspp_webpageaccesscontrolrules: List mspp_webpageaccesscontrolrules
- POST /mspp_webpageaccesscontrolrules — createMspp_webpageaccesscontrolrule: Create a mspp_webpageaccesscontrolrule
- GET /mspp_webpageaccesscontrolrules({mspp_webpageaccesscontrolruleid}) — getMspp_webpageaccesscontrolrule: Retrieve a mspp_webpageaccesscontrolrule
- PATCH /mspp_webpageaccesscontrolrules({mspp_webpageaccesscontrolruleid}) — updateMspp_webpageaccesscontrolrule: Update (or upsert) a mspp_webpageaccesscontrolrule
- DELETE /mspp_webpageaccesscontrolrules({mspp_webpageaccesscontrolruleid}) — deleteMspp_webpageaccesscontrolrule: Delete a mspp_webpageaccesscontrolrule

## mspp_webrole
- GET /mspp_webroles — listMspp_webroles: List mspp_webroles
- POST /mspp_webroles — createMspp_webrole: Create a mspp_webrole
- GET /mspp_webroles({mspp_webroleid}) — getMspp_webrole: Retrieve a mspp_webrole
- PATCH /mspp_webroles({mspp_webroleid}) — updateMspp_webrole: Update (or upsert) a mspp_webrole
- DELETE /mspp_webroles({mspp_webroleid}) — deleteMspp_webrole: Delete a mspp_webrole

## mspp_website
- GET /mspp_websites — listMspp_websites: List mspp_websites
- POST /mspp_websites — createMspp_website: Create a mspp_website
- GET /mspp_websites({mspp_websiteid}) — getMspp_website: Retrieve a mspp_website
- PATCH /mspp_websites({mspp_websiteid}) — updateMspp_website: Update (or upsert) a mspp_website
- DELETE /mspp_websites({mspp_websiteid}) — deleteMspp_website: Delete a mspp_website

## mspp_websiteaccess
- GET /mspp_websiteaccesses — listMspp_websiteaccesses: List mspp_websiteaccesses
- POST /mspp_websiteaccesses — createMspp_websiteaccess: Create a mspp_websiteaccess
- GET /mspp_websiteaccesses({mspp_websiteaccessid}) — getMspp_websiteaccess: Retrieve a mspp_websiteaccess
- PATCH /mspp_websiteaccesses({mspp_websiteaccessid}) — updateMspp_websiteaccess: Update (or upsert) a mspp_websiteaccess
- DELETE /mspp_websiteaccesses({mspp_websiteaccessid}) — deleteMspp_websiteaccess: Delete a mspp_websiteaccess

## mspp_websitelanguage
- GET /mspp_websitelanguages — listMspp_websitelanguages: List mspp_websitelanguages
- POST /mspp_websitelanguages — createMspp_websitelanguage: Create a mspp_websitelanguage
- GET /mspp_websitelanguages({mspp_websitelanguageid}) — getMspp_websitelanguage: Retrieve a mspp_websitelanguage
- PATCH /mspp_websitelanguages({mspp_websitelanguageid}) — updateMspp_websitelanguage: Update (or upsert) a mspp_websitelanguage
- DELETE /mspp_websitelanguages({mspp_websitelanguageid}) — deleteMspp_websitelanguage: Delete a mspp_websitelanguage

## mspp_webtemplate
- GET /mspp_webtemplates — listMspp_webtemplates: List mspp_webtemplates
- POST /mspp_webtemplates — createMspp_webtemplate: Create a mspp_webtemplate
- GET /mspp_webtemplates({mspp_webtemplateid}) — getMspp_webtemplate: Retrieve a mspp_webtemplate
- PATCH /mspp_webtemplates({mspp_webtemplateid}) — updateMspp_webtemplate: Update (or upsert) a mspp_webtemplate
- DELETE /mspp_webtemplates({mspp_webtemplateid}) — deleteMspp_webtemplate: Delete a mspp_webtemplate

## navigationsetting
- GET /navigationsettings — listNavigationsettings: List navigationsettings
- POST /navigationsettings — createNavigationsetting: Create a navigationsetting
- GET /navigationsettings({navigationsettingid}) — getNavigationsetting: Retrieve a navigationsetting
- PATCH /navigationsettings({navigationsettingid}) — updateNavigationsetting: Update (or upsert) a navigationsetting
- DELETE /navigationsettings({navigationsettingid}) — deleteNavigationsetting: Delete a navigationsetting
- GET /navigationsettings({navigationsettingid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnNavigationsetting: RetrieveUnpublished function
- GET /navigationsettings/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnNavigationsetting: RetrieveUnpublishedMultiple function

## newprocess
- GET /newprocesses — listNewprocesses: List newprocesses
- POST /newprocesses — createNewprocess: Create a newprocess
- GET /newprocesses({businessprocessflowinstanceid}) — getNewprocess: Retrieve a newprocess
- PATCH /newprocesses({businessprocessflowinstanceid}) — updateNewprocess: Update (or upsert) a newprocess
- DELETE /newprocesses({businessprocessflowinstanceid}) — deleteNewprocess: Delete a newprocess

## nlsqregistration
- GET /nlsqregistrations — listNlsqregistrations: List nlsqregistrations
- POST /nlsqregistrations — createNlsqregistration: Create a nlsqregistration
- GET /nlsqregistrations({nlsqregistrationid}) — getNlsqregistration: Retrieve a nlsqregistration
- PATCH /nlsqregistrations({nlsqregistrationid}) — updateNlsqregistration: Update (or upsert) a nlsqregistration
- DELETE /nlsqregistrations({nlsqregistrationid}) — deleteNlsqregistration: Delete a nlsqregistration

## officegraphdocument
- GET /officegraphdocuments — listOfficegraphdocuments: List officegraphdocuments

## organization
- GET /organizations — listOrganizations: List organizations
- GET /organizations({organizationid}) — getOrganization: Retrieve an organization
- PATCH /organizations({organizationid}) — updateOrganization: Update (or upsert) an organization
- GET /organizations({organizationid})/Microsoft.Dynamics.CRM.RetrievePrincipalAccess(Target=@Target) — retrievePrincipalAccessOnOrganization: RetrievePrincipalAccess function

## organizationdatasyncfnostate
- GET /organizationdatasyncfnostates — listOrganizationdatasyncfnostates: List organizationdatasyncfnostates
- POST /organizationdatasyncfnostates — createOrganizationdatasyncfnostate: Create an organizationdatasyncfnostate
- GET /organizationdatasyncfnostates({organizationdatasyncfnostateid}) — getOrganizationdatasyncfnostate: Retrieve an organizationdatasyncfnostate
- PATCH /organizationdatasyncfnostates({organizationdatasyncfnostateid}) — updateOrganizationdatasyncfnostate: Update (or upsert) an organizationdatasyncfnostate
- DELETE /organizationdatasyncfnostates({organizationdatasyncfnostateid}) — deleteOrganizationdatasyncfnostate: Delete an organizationdatasyncfnostate

## organizationdatasyncstate
- GET /organizationdatasyncstates — listOrganizationdatasyncstates: List organizationdatasyncstates
- POST /organizationdatasyncstates — createOrganizationdatasyncstate: Create an organizationdatasyncstate
- GET /organizationdatasyncstates({organizationdatasyncstateid}) — getOrganizationdatasyncstate: Retrieve an organizationdatasyncstate
- PATCH /organizationdatasyncstates({organizationdatasyncstateid}) — updateOrganizationdatasyncstate: Update (or upsert) an organizationdatasyncstate
- DELETE /organizationdatasyncstates({organizationdatasyncstateid}) — deleteOrganizationdatasyncstate: Delete an organizationdatasyncstate

## organizationdatasyncsubscription
- GET /organizationdatasyncsubscriptions — listOrganizationdatasyncsubscriptions: List organizationdatasyncsubscriptions
- POST /organizationdatasyncsubscriptions — createOrganizationdatasyncsubscription: Create an organizationdatasyncsubscription
- GET /organizationdatasyncsubscriptions({organizationdatasyncsubscriptionid}) — getOrganizationdatasyncsubscription: Retrieve an organizationdatasyncsubscription
- PATCH /organizationdatasyncsubscriptions({organizationdatasyncsubscriptionid}) — updateOrganizationdatasyncsubscription: Update (or upsert) an organizationdatasyncsubscription
- DELETE /organizationdatasyncsubscriptions({organizationdatasyncsubscriptionid}) — deleteOrganizationdatasyncsubscription: Delete an organizationdatasyncsubscription

## organizationdatasyncsubscriptionentity
- GET /organizationdatasyncsubscriptionentities — listOrganizationdatasyncsubscriptionentities: List organizationdatasyncsubscriptionentities
- POST /organizationdatasyncsubscriptionentities — createOrganizationdatasyncsubscriptionentity: Create an organizationdatasyncsubscriptionentity
- GET /organizationdatasyncsubscriptionentities({organizationdatasyncsubscriptionentityid}) — getOrganizationdatasyncsubscriptionentity: Retrieve an organizationdatasyncsubscriptionentity
- PATCH /organizationdatasyncsubscriptionentities({organizationdatasyncsubscriptionentityid}) — updateOrganizationdatasyncsubscriptionentity: Update (or upsert) an organizationdatasyncsubscriptionentity
- DELETE /organizationdatasyncsubscriptionentities({organizationdatasyncsubscriptionentityid}) — deleteOrganizationdatasyncsubscriptionentity: Delete an organizationdatasyncsubscriptionentity

## organizationdatasyncsubscriptionfnotable
- GET /organizationdatasyncsubscriptionfnotables — listOrganizationdatasyncsubscriptionfnotables: List organizationdatasyncsubscriptionfnotables
- POST /organizationdatasyncsubscriptionfnotables — createOrganizationdatasyncsubscriptionfnotable: Create an organizationdatasyncsubscriptionfnotable
- GET /organizationdatasyncsubscriptionfnotables({organizationdatasyncsubscriptionfnotableid}) — getOrganizationdatasyncsubscriptionfnotable: Retrieve an organizationdatasyncsubscriptionfnotable
- PATCH /organizationdatasyncsubscriptionfnotables({organizationdatasyncsubscriptionfnotableid}) — updateOrganizationdatasyncsubscriptionfnotable: Update (or upsert) an organizationdatasyncsubscriptionfnotable
- DELETE /organizationdatasyncsubscriptionfnotables({organizationdatasyncsubscriptionfnotableid}) — deleteOrganizationdatasyncsubscriptionfnotable: Delete an organizationdatasyncsubscriptionfnotable

## ownermapping
- GET /ownermappings — listOwnermappings: List ownermappings
- POST /ownermappings — createOwnermapping: Create an ownermapping
- GET /ownermappings({ownermappingid}) — getOwnermapping: Retrieve an ownermapping
- DELETE /ownermappings({ownermappingid}) — deleteOwnermapping: Delete an ownermapping

## package
- GET /packages — listPackages: List packages
- POST /packages — createPackage: Create a package
- GET /packages({packageid}) — getPackage: Retrieve a package
- PATCH /packages({packageid}) — updatePackage: Update (or upsert) a package
- DELETE /packages({packageid}) — deletePackage: Delete a package

## packagehistory
- GET /packagehistories — listPackagehistories: List packagehistories
- POST /packagehistories — createPackagehistory: Create a packagehistory
- GET /packagehistories({packagehistoryid}) — getPackagehistory: Retrieve a packagehistory
- PATCH /packagehistories({packagehistoryid}) — updatePackagehistory: Update (or upsert) a packagehistory
- DELETE /packagehistories({packagehistoryid}) — deletePackagehistory: Delete a packagehistory

## personaldocumenttemplate
- GET /personaldocumenttemplates — listPersonaldocumenttemplates: List personaldocumenttemplates
- POST /personaldocumenttemplates — createPersonaldocumenttemplate: Create a personaldocumenttemplate
- GET /personaldocumenttemplates({personaldocumenttemplateid}) — getPersonaldocumenttemplate: Retrieve a personaldocumenttemplate
- PATCH /personaldocumenttemplates({personaldocumenttemplateid}) — updatePersonaldocumenttemplate: Update (or upsert) a personaldocumenttemplate
- DELETE /personaldocumenttemplates({personaldocumenttemplateid}) — deletePersonaldocumenttemplate: Delete a personaldocumenttemplate

## phonecall
- GET /phonecalls — listPhonecalls: List phonecalls
- POST /phonecalls — createPhonecall: Create a phonecall
- GET /phonecalls({activityid}) — getPhonecall: Retrieve a phonecall
- PATCH /phonecalls({activityid}) — updatePhonecall: Update (or upsert) a phonecall
- DELETE /phonecalls({activityid}) — deletePhonecall: Delete a phonecall

## picklistmapping
- GET /picklistmappings — listPicklistmappings: List picklistmappings
- POST /picklistmappings — createPicklistmapping: Create a picklistmapping
- GET /picklistmappings({picklistmappingid}) — getPicklistmapping: Retrieve a picklistmapping
- DELETE /picklistmappings({picklistmappingid}) — deletePicklistmapping: Delete a picklistmapping

## plannerbusinessscenario
- GET /plannerbusinessscenarios — listPlannerbusinessscenarios: List plannerbusinessscenarios
- POST /plannerbusinessscenarios — createPlannerbusinessscenario: Create a plannerbusinessscenario
- GET /plannerbusinessscenarios({plannerbusinessscenarioid}) — getPlannerbusinessscenario: Retrieve a plannerbusinessscenario
- PATCH /plannerbusinessscenarios({plannerbusinessscenarioid}) — updatePlannerbusinessscenario: Update (or upsert) a plannerbusinessscenario
- DELETE /plannerbusinessscenarios({plannerbusinessscenarioid}) — deletePlannerbusinessscenario: Delete a plannerbusinessscenario

## plannersyncaction
- GET /plannersyncactions — listPlannersyncactions: List plannersyncactions
- POST /plannersyncactions — createPlannersyncaction: Create a plannersyncaction
- GET /plannersyncactions({plannersyncactionid}) — getPlannersyncaction: Retrieve a plannersyncaction
- PATCH /plannersyncactions({plannersyncactionid}) — updatePlannersyncaction: Update (or upsert) a plannersyncaction
- DELETE /plannersyncactions({plannersyncactionid}) — deletePlannersyncaction: Delete a plannersyncaction

## plugin
- GET /plugins — listPlugins: List plugins
- POST /plugins — createPlugin: Create a plugin
- GET /plugins({pluginid}) — getPlugin: Retrieve a plugin
- PATCH /plugins({pluginid}) — updatePlugin: Update (or upsert) a plugin
- DELETE /plugins({pluginid}) — deletePlugin: Delete a plugin

## pluginassembly
- GET /pluginassemblies — listPluginassemblies: List pluginassemblies
- POST /pluginassemblies — createPluginassembly: Create a pluginassembly
- GET /pluginassemblies({pluginassemblyid}) — getPluginassembly: Retrieve a pluginassembly
- PATCH /pluginassemblies({pluginassemblyid}) — updatePluginassembly: Update (or upsert) a pluginassembly
- DELETE /pluginassemblies({pluginassemblyid}) — deletePluginassembly: Delete a pluginassembly

## pluginpackage
- GET /pluginpackages — listPluginpackages: List pluginpackages
- POST /pluginpackages — createPluginpackage: Create a pluginpackage
- GET /pluginpackages({pluginpackageid}) — getPluginpackage: Retrieve a pluginpackage
- PATCH /pluginpackages({pluginpackageid}) — updatePluginpackage: Update (or upsert) a pluginpackage
- DELETE /pluginpackages({pluginpackageid}) — deletePluginpackage: Delete a pluginpackage

## plugintracelog
- GET /plugintracelogs — listPlugintracelogs: List plugintracelogs
- GET /plugintracelogs({plugintracelogid}) — getPlugintracelog: Retrieve a plugintracelog
- DELETE /plugintracelogs({plugintracelogid}) — deletePlugintracelog: Delete a plugintracelog

## plugintype
- GET /plugintypes — listPlugintypes: List plugintypes
- POST /plugintypes — createPlugintype: Create a plugintype
- GET /plugintypes({plugintypeid}) — getPlugintype: Retrieve a plugintype
- PATCH /plugintypes({plugintypeid}) — updatePlugintype: Update (or upsert) a plugintype
- DELETE /plugintypes({plugintypeid}) — deletePlugintype: Delete a plugintype

## plugintypestatistic
- GET /plugintypestatistics — listPlugintypestatistics: List plugintypestatistics
- GET /plugintypestatistics({plugintypestatisticid}) — getPlugintypestatistic: Retrieve a plugintypestatistic

## position
- GET /positions — listPositions: List positions
- POST /positions — createPosition: Create a position
- GET /positions({positionid}) — getPosition: Retrieve a position
- PATCH /positions({positionid}) — updatePosition: Update (or upsert) a position
- DELETE /positions({positionid}) — deletePosition: Delete a position

## post
- GET /posts — listPosts: List posts
- POST /posts — createPost: Create a post
- GET /posts({postid}) — getPost: Retrieve a post
- DELETE /posts({postid}) — deletePost: Delete a post
- GET /posts/Microsoft.Dynamics.CRM.RetrievePersonalWall(PageNumber=@PageNumber,PageSize=@PageSize,CommentsPerPost=@CommentsPerPost,StartDate=@StartDate,EndDate=@EndDate,Type=@Type,Source=@Source,SortDirection=@SortDirection,Keyword=@Keyword) — retrievePersonalWallOnPost: RetrievePersonalWall function
- GET /posts/Microsoft.Dynamics.CRM.RetrieveRecordWall(Entity=@Entity,PageNumber=@PageNumber,PageSize=@PageSize,CommentsPerPost=@CommentsPerPost,StartDate=@StartDate,EndDate=@EndDate,Type=@Type,Source=@Source,SortDirection=@SortDirection,Keyword=@Keyword) — retrieveRecordWallOnPost: RetrieveRecordWall function

## postcomment
- GET /postcomments — listPostcomments: List postcomments
- POST /postcomments — createPostcomment: Create a postcomment
- GET /postcomments({postcommentid}) — getPostcomment: Retrieve a postcomment
- DELETE /postcomments({postcommentid}) — deletePostcomment: Delete a postcomment

## postfollow
- GET /postfollows — listPostfollows: List postfollows
- POST /postfollows — createPostfollow: Create a postfollow
- GET /postfollows({postfollowid}) — getPostfollow: Retrieve a postfollow
- DELETE /postfollows({postfollowid}) — deletePostfollow: Delete a postfollow

## postlike
- GET /postlikes — listPostlikes: List postlikes
- POST /postlikes — createPostlike: Create a postlike
- GET /postlikes({postlikeid}) — getPostlike: Retrieve a postlike
- DELETE /postlikes({postlikeid}) — deletePostlike: Delete a postlike

## powerfxrule
- GET /powerfxrules — listPowerfxrules: List powerfxrules
- POST /powerfxrules — createPowerfxrule: Create a powerfxrule
- GET /powerfxrules({powerfxruleid}) — getPowerfxrule: Retrieve a powerfxrule
- PATCH /powerfxrules({powerfxruleid}) — updatePowerfxrule: Update (or upsert) a powerfxrule
- DELETE /powerfxrules({powerfxruleid}) — deletePowerfxrule: Delete a powerfxrule

## powerpagecomponent
- GET /powerpagecomponents — listPowerpagecomponents: List powerpagecomponents
- POST /powerpagecomponents — createPowerpagecomponent: Create a powerpagecomponent
- GET /powerpagecomponents({powerpagecomponentid}) — getPowerpagecomponent: Retrieve a powerpagecomponent
- PATCH /powerpagecomponents({powerpagecomponentid}) — updatePowerpagecomponent: Update (or upsert) a powerpagecomponent
- DELETE /powerpagecomponents({powerpagecomponentid}) — deletePowerpagecomponent: Delete a powerpagecomponent

## powerpagecomponent_powerpagecomponent
- GET /powerpagecomponent_powerpagecomponentset — listPowerpagecomponent_powerpagecomponentset: List powerpagecomponent_powerpagecomponentset

## powerpagesddosalert
- GET /powerpagesddosalerts — listPowerpagesddosalerts: List powerpagesddosalerts
- POST /powerpagesddosalerts — createPowerpagesddosalert: Create a powerpagesddosalert
- GET /powerpagesddosalerts({powerpagesddosalertid}) — getPowerpagesddosalert: Retrieve a powerpagesddosalert
- PATCH /powerpagesddosalerts({powerpagesddosalertid}) — updatePowerpagesddosalert: Update (or upsert) a powerpagesddosalert
- DELETE /powerpagesddosalerts({powerpagesddosalertid}) — deletePowerpagesddosalert: Delete a powerpagesddosalert

## powerpagesite
- GET /powerpagesites — listPowerpagesites: List powerpagesites
- POST /powerpagesites — createPowerpagesite: Create a powerpagesite
- GET /powerpagesites({powerpagesiteid}) — getPowerpagesite: Retrieve a powerpagesite
- PATCH /powerpagesites({powerpagesiteid}) — updatePowerpagesite: Update (or upsert) a powerpagesite
- DELETE /powerpagesites({powerpagesiteid}) — deletePowerpagesite: Delete a powerpagesite

## powerpagesite_dvfilesearch
- GET /powerpagesite_dvfilesearchset — listPowerpagesite_dvfilesearchset: List powerpagesite_dvfilesearchset

## powerpagesite_dvtablesearch
- GET /powerpagesite_dvtablesearchset — listPowerpagesite_dvtablesearchset: List powerpagesite_dvtablesearchset

## powerpagesitelanguage
- GET /powerpagesitelanguages — listPowerpagesitelanguages: List powerpagesitelanguages
- POST /powerpagesitelanguages — createPowerpagesitelanguage: Create a powerpagesitelanguage
- GET /powerpagesitelanguages({powerpagesitelanguageid}) — getPowerpagesitelanguage: Retrieve a powerpagesitelanguage
- PATCH /powerpagesitelanguages({powerpagesitelanguageid}) — updatePowerpagesitelanguage: Update (or upsert) a powerpagesitelanguage
- DELETE /powerpagesitelanguages({powerpagesitelanguageid}) — deletePowerpagesitelanguage: Delete a powerpagesitelanguage

## powerpagesitepublished
- GET /powerpagesitepublisheds — listPowerpagesitepublisheds: List powerpagesitepublisheds
- POST /powerpagesitepublisheds — createPowerpagesitepublished: Create a powerpagesitepublished
- GET /powerpagesitepublisheds({powerpagesitepublishedid}) — getPowerpagesitepublished: Retrieve a powerpagesitepublished
- PATCH /powerpagesitepublisheds({powerpagesitepublishedid}) — updatePowerpagesitepublished: Update (or upsert) a powerpagesitepublished
- DELETE /powerpagesitepublisheds({powerpagesitepublishedid}) — deletePowerpagesitepublished: Delete a powerpagesitepublished

## powerpageslog
- GET /powerpageslogs — listPowerpageslogs: List powerpageslogs
- POST /powerpageslogs — createPowerpageslog: Create a powerpageslog
- GET /powerpageslogs({powerpageslogid}) — getPowerpageslog: Retrieve a powerpageslog
- PATCH /powerpageslogs({powerpageslogid}) — updatePowerpageslog: Update (or upsert) a powerpageslog
- DELETE /powerpageslogs({powerpageslogid}) — deletePowerpageslog: Delete a powerpageslog

## powerpagesmanagedidentity
- GET /powerpagesmanagedidentities — listPowerpagesmanagedidentities: List powerpagesmanagedidentities
- POST /powerpagesmanagedidentities — createPowerpagesmanagedidentity: Create a powerpagesmanagedidentity
- GET /powerpagesmanagedidentities({powerpagesmanagedidentityid}) — getPowerpagesmanagedidentity: Retrieve a powerpagesmanagedidentity
- PATCH /powerpagesmanagedidentities({powerpagesmanagedidentityid}) — updatePowerpagesmanagedidentity: Update (or upsert) a powerpagesmanagedidentity
- DELETE /powerpagesmanagedidentities({powerpagesmanagedidentityid}) — deletePowerpagesmanagedidentity: Delete a powerpagesmanagedidentity

## powerpagesscanreport
- GET /powerpagesscanreports — listPowerpagesscanreports: List powerpagesscanreports
- POST /powerpagesscanreports — createPowerpagesscanreport: Create a powerpagesscanreport
- GET /powerpagesscanreports({powerpagesscanreportid}) — getPowerpagesscanreport: Retrieve a powerpagesscanreport
- PATCH /powerpagesscanreports({powerpagesscanreportid}) — updatePowerpagesscanreport: Update (or upsert) a powerpagesscanreport
- DELETE /powerpagesscanreports({powerpagesscanreportid}) — deletePowerpagesscanreport: Delete a powerpagesscanreport

## powerpagessiteaifeedback
- GET /powerpagessiteaifeedbacks — listPowerpagessiteaifeedbacks: List powerpagessiteaifeedbacks
- POST /powerpagessiteaifeedbacks — createPowerpagessiteaifeedback: Create a powerpagessiteaifeedback
- GET /powerpagessiteaifeedbacks({powerpagessiteaifeedbackid}) — getPowerpagessiteaifeedback: Retrieve a powerpagessiteaifeedback
- PATCH /powerpagessiteaifeedbacks({powerpagessiteaifeedbackid}) — updatePowerpagessiteaifeedback: Update (or upsert) a powerpagessiteaifeedback
- DELETE /powerpagessiteaifeedbacks({powerpagessiteaifeedbackid}) — deletePowerpagessiteaifeedback: Delete a powerpagessiteaifeedback

## powerpagessourcefile
- GET /powerpagessourcefiles — listPowerpagessourcefiles: List powerpagessourcefiles
- POST /powerpagessourcefiles — createPowerpagessourcefile: Create a powerpagessourcefile
- GET /powerpagessourcefiles({powerpagessourcefileid}) — getPowerpagessourcefile: Retrieve a powerpagessourcefile
- PATCH /powerpagessourcefiles({powerpagessourcefileid}) — updatePowerpagessourcefile: Update (or upsert) a powerpagessourcefile
- DELETE /powerpagessourcefiles({powerpagessourcefileid}) — deletePowerpagessourcefile: Delete a powerpagessourcefile

## powerpagesusermapping
- GET /powerpagesusermappings — listPowerpagesusermappings: List powerpagesusermappings
- POST /powerpagesusermappings — createPowerpagesusermapping: Create a powerpagesusermapping
- GET /powerpagesusermappings({powerpagesusermappingid}) — getPowerpagesusermapping: Retrieve a powerpagesusermapping
- PATCH /powerpagesusermappings({powerpagesusermappingid}) — updatePowerpagesusermapping: Update (or upsert) a powerpagesusermapping
- DELETE /powerpagesusermappings({powerpagesusermappingid}) — deletePowerpagesusermapping: Delete a powerpagesusermapping

## principalobjectattributeaccess
- GET /principalobjectattributeaccessset — listPrincipalobjectattributeaccessset: List principalobjectattributeaccessset
- POST /principalobjectattributeaccessset — createPrincipalobjectattributeaccess: Create a principalobjectattributeaccess
- GET /principalobjectattributeaccessset({principalobjectattributeaccessid}) — getPrincipalobjectattributeaccess: Retrieve a principalobjectattributeaccess
- PATCH /principalobjectattributeaccessset({principalobjectattributeaccessid}) — updatePrincipalobjectattributeaccess: Update (or upsert) a principalobjectattributeaccess
- DELETE /principalobjectattributeaccessset({principalobjectattributeaccessid}) — deletePrincipalobjectattributeaccess: Delete a principalobjectattributeaccess

## privilege
- GET /privileges — listPrivileges: List privileges
- GET /privileges({privilegeid}) — getPrivilege: Retrieve a privilege
- GET /privileges/Microsoft.Dynamics.CRM.RetrievePrivilegeSet() — retrievePrivilegeSetOnPrivilege: RetrievePrivilegeSet function

## privilegecheckerlog
- GET /privilegecheckerlogs — listPrivilegecheckerlogs: List privilegecheckerlogs
- POST /privilegecheckerlogs — createPrivilegecheckerlog: Create a privilegecheckerlog
- GET /privilegecheckerlogs({privilegecheckerlogid}) — getPrivilegecheckerlog: Retrieve a privilegecheckerlog
- PATCH /privilegecheckerlogs({privilegecheckerlogid}) — updatePrivilegecheckerlog: Update (or upsert) a privilegecheckerlog
- DELETE /privilegecheckerlogs({privilegecheckerlogid}) — deletePrivilegecheckerlog: Delete a privilegecheckerlog

## privilegecheckerrun
- GET /privilegecheckerruns — listPrivilegecheckerruns: List privilegecheckerruns
- POST /privilegecheckerruns — createPrivilegecheckerrun: Create a privilegecheckerrun
- GET /privilegecheckerruns({privilegecheckerrunid}) — getPrivilegecheckerrun: Retrieve a privilegecheckerrun
- PATCH /privilegecheckerruns({privilegecheckerrunid}) — updatePrivilegecheckerrun: Update (or upsert) a privilegecheckerrun
- DELETE /privilegecheckerruns({privilegecheckerrunid}) — deletePrivilegecheckerrun: Delete a privilegecheckerrun
- POST /privilegecheckerruns({privilegecheckerrunid})/Microsoft.Dynamics.CRM.CreateRoleWithPrivilegeCheckerRun — createRoleWithPrivilegeCheckerRunOnPrivilegecheckerrun: CreateRoleWithPrivilegeCheckerRun action

## processsession
- GET /processsessions — listProcesssessions: List processsessions
- POST /processsessions — createProcesssession: Create a processsession
- GET /processsessions({processsessionid}) — getProcesssession: Retrieve a processsession
- PATCH /processsessions({processsessionid}) — updateProcesssession: Update (or upsert) a processsession
- DELETE /processsessions({processsessionid}) — deleteProcesssession: Delete a processsession

## processstage
- GET /processstages — listProcessstages: List processstages
- POST /processstages — createProcessstage: Create a processstage
- GET /processstages({processstageid}) — getProcessstage: Retrieve a processstage
- DELETE /processstages({processstageid}) — deleteProcessstage: Delete a processstage

## processstageparameter
- GET /processstageparameters — listProcessstageparameters: List processstageparameters
- POST /processstageparameters — createProcessstageparameter: Create a processstageparameter
- GET /processstageparameters({processstageparameterid}) — getProcessstageparameter: Retrieve a processstageparameter
- PATCH /processstageparameters({processstageparameterid}) — updateProcessstageparameter: Update (or upsert) a processstageparameter
- DELETE /processstageparameters({processstageparameterid}) — deleteProcessstageparameter: Delete a processstageparameter

## processtrigger
- GET /processtriggers — listProcesstriggers: List processtriggers
- POST /processtriggers — createProcesstrigger: Create a processtrigger
- GET /processtriggers({processtriggerid}) — getProcesstrigger: Retrieve a processtrigger
- PATCH /processtriggers({processtriggerid}) — updateProcesstrigger: Update (or upsert) a processtrigger
- DELETE /processtriggers({processtriggerid}) — deleteProcesstrigger: Delete a processtrigger

## provisionlanguageforuser
- GET /provisionlanguageforusers — listProvisionlanguageforusers: List provisionlanguageforusers
- POST /provisionlanguageforusers — createProvisionlanguageforuser: Create a provisionlanguageforuser
- GET /provisionlanguageforusers({provisionlanguageforuserid}) — getProvisionlanguageforuser: Retrieve a provisionlanguageforuser
- PATCH /provisionlanguageforusers({provisionlanguageforuserid}) — updateProvisionlanguageforuser: Update (or upsert) a provisionlanguageforuser
- DELETE /provisionlanguageforusers({provisionlanguageforuserid}) — deleteProvisionlanguageforuser: Delete a provisionlanguageforuser

## publisher
- GET /publishers — listPublishers: List publishers
- POST /publishers — createPublisher: Create a publisher
- GET /publishers({publisherid}) — getPublisher: Retrieve a publisher
- PATCH /publishers({publisherid}) — updatePublisher: Update (or upsert) a publisher
- DELETE /publishers({publisherid}) — deletePublisher: Delete a publisher

## publisheraddress
- GET /publisheraddresses — listPublisheraddresses: List publisheraddresses
- POST /publisheraddresses — createPublisheraddress: Create a publisheraddress
- GET /publisheraddresses({publisheraddressid}) — getPublisheraddress: Retrieve a publisheraddress
- PATCH /publisheraddresses({publisheraddressid}) — updatePublisheraddress: Update (or upsert) a publisheraddress
- DELETE /publisheraddresses({publisheraddressid}) — deletePublisheraddress: Delete a publisheraddress

## purviewlabelinfo
- GET /purviewlabelinfos — listPurviewlabelinfos: List purviewlabelinfos
- POST /purviewlabelinfos — createPurviewlabelinfo: Create a purviewlabelinfo
- GET /purviewlabelinfos({purviewlabelinfoid}) — getPurviewlabelinfo: Retrieve a purviewlabelinfo
- PATCH /purviewlabelinfos({purviewlabelinfoid}) — updatePurviewlabelinfo: Update (or upsert) a purviewlabelinfo
- DELETE /purviewlabelinfos({purviewlabelinfoid}) — deletePurviewlabelinfo: Delete a purviewlabelinfo

## quarterlyfiscalcalendar
- GET /quarterlyfiscalcalendars — listQuarterlyfiscalcalendars: List quarterlyfiscalcalendars
- POST /quarterlyfiscalcalendars — createQuarterlyfiscalcalendar: Create a quarterlyfiscalcalendar
- GET /quarterlyfiscalcalendars({userfiscalcalendarid}) — getQuarterlyfiscalcalendar: Retrieve a quarterlyfiscalcalendar
- PATCH /quarterlyfiscalcalendars({userfiscalcalendarid}) — updateQuarterlyfiscalcalendar: Update (or upsert) a quarterlyfiscalcalendar
- DELETE /quarterlyfiscalcalendars({userfiscalcalendarid}) — deleteQuarterlyfiscalcalendar: Delete a quarterlyfiscalcalendar

## queue
- GET /queues — listQueues: List queues
- POST /queues — createQueue: Create a queue
- GET /queues({queueid}) — getQueue: Retrieve a queue
- PATCH /queues({queueid}) — updateQueue: Update (or upsert) a queue
- DELETE /queues({queueid}) — deleteQueue: Delete a queue
- POST /queues({queueid})/Microsoft.Dynamics.CRM.AddPrincipalToQueue — addPrincipalToQueueOnQueue: AddPrincipalToQueue action
- POST /queues({queueid})/Microsoft.Dynamics.CRM.AddToQueue — addToQueueOnQueue: AddToQueue action

## queueitem
- GET /queueitems — listQueueitems: List queueitems
- POST /queueitems — createQueueitem: Create a queueitem
- GET /queueitems({queueitemid}) — getQueueitem: Retrieve a queueitem
- PATCH /queueitems({queueitemid}) — updateQueueitem: Update (or upsert) a queueitem
- DELETE /queueitems({queueitemid}) — deleteQueueitem: Delete a queueitem
- POST /queueitems({queueitemid})/Microsoft.Dynamics.CRM.PickFromQueue — pickFromQueueOnQueueitem: PickFromQueue action
- POST /queueitems({queueitemid})/Microsoft.Dynamics.CRM.ReleaseToQueue — releaseToQueueOnQueueitem: ReleaseToQueue action
- POST /queueitems({queueitemid})/Microsoft.Dynamics.CRM.RemoveFromQueue — removeFromQueueOnQueueitem: RemoveFromQueue action

## recentlyused
- GET /recentlyused — listRecentlyused: List recentlyused
- POST /recentlyused — createRecentlyused: Create a recentlyused
- GET /recentlyused({recentlyusedid}) — getRecentlyused: Retrieve a recentlyused
- PATCH /recentlyused({recentlyusedid}) — updateRecentlyused: Update (or upsert) a recentlyused
- DELETE /recentlyused({recentlyusedid}) — deleteRecentlyused: Delete a recentlyused

## recommendeddocument
- GET /recommendeddocuments — listRecommendeddocuments: List recommendeddocuments

## recordfilter
- GET /recordfilters — listRecordfilters: List recordfilters
- POST /recordfilters — createRecordfilter: Create a recordfilter
- GET /recordfilters({recordfilterid}) — getRecordfilter: Retrieve a recordfilter
- PATCH /recordfilters({recordfilterid}) — updateRecordfilter: Update (or upsert) a recordfilter
- DELETE /recordfilters({recordfilterid}) — deleteRecordfilter: Delete a recordfilter

## recurrencerule
- GET /recurrencerules — listRecurrencerules: List recurrencerules
- POST /recurrencerules — createRecurrencerule: Create a recurrencerule
- GET /recurrencerules({ruleid}) — getRecurrencerule: Retrieve a recurrencerule
- PATCH /recurrencerules({ruleid}) — updateRecurrencerule: Update (or upsert) a recurrencerule
- DELETE /recurrencerules({ruleid}) — deleteRecurrencerule: Delete a recurrencerule

## recurringappointmentmaster
- GET /recurringappointmentmasters — listRecurringappointmentmasters: List recurringappointmentmasters
- POST /recurringappointmentmasters — createRecurringappointmentmaster: Create a recurringappointmentmaster
- GET /recurringappointmentmasters({activityid}) — getRecurringappointmentmaster: Retrieve a recurringappointmentmaster
- PATCH /recurringappointmentmasters({activityid}) — updateRecurringappointmentmaster: Update (or upsert) a recurringappointmentmaster
- DELETE /recurringappointmentmasters({activityid}) — deleteRecurringappointmentmaster: Delete a recurringappointmentmaster
- POST /recurringappointmentmasters/Microsoft.Dynamics.CRM.CreateException — createExceptionOnRecurringappointmentmaster: CreateException action

## recyclebinconfig
- GET /recyclebinconfigs — listRecyclebinconfigs: List recyclebinconfigs
- POST /recyclebinconfigs — createRecyclebinconfig: Create a recyclebinconfig
- GET /recyclebinconfigs({recyclebinconfigid}) — getRecyclebinconfig: Retrieve a recyclebinconfig
- PATCH /recyclebinconfigs({recyclebinconfigid}) — updateRecyclebinconfig: Update (or upsert) a recyclebinconfig
- DELETE /recyclebinconfigs({recyclebinconfigid}) — deleteRecyclebinconfig: Delete a recyclebinconfig

## relationship
- GET /relationships — listRelationships: List relationships

## relationshipattribute
- GET /relationshipattributes — listRelationshipattributes: List relationshipattributes
- GET /relationshipattributes({relationshipattributeid}) — getRelationshipattribute: Retrieve a relationshipattribute

## report
- GET /reports — listReports: List reports
- POST /reports — createReport: Create a report
- GET /reports({reportid}) — getReport: Retrieve a report
- PATCH /reports({reportid}) — updateReport: Update (or upsert) a report
- DELETE /reports({reportid}) — deleteReport: Delete a report
- GET /reports({reportid})/Microsoft.Dynamics.CRM.DownloadReportDefinition() — downloadReportDefinitionOnReport: DownloadReportDefinition function
- GET /reports({reportid})/Microsoft.Dynamics.CRM.GetReportHistoryLimit() — getReportHistoryLimitOnReport: GetReportHistoryLimit function

## reportcategory
- GET /reportcategories — listReportcategories: List reportcategories
- POST /reportcategories — createReportcategory: Create a reportcategory
- GET /reportcategories({reportcategoryid}) — getReportcategory: Retrieve a reportcategory
- PATCH /reportcategories({reportcategoryid}) — updateReportcategory: Update (or upsert) a reportcategory
- DELETE /reportcategories({reportcategoryid}) — deleteReportcategory: Delete a reportcategory

## reportparameter
- GET /reportparameters — listReportparameters: List reportparameters
- POST /reportparameters — createReportparameter: Create a reportparameter
- GET /reportparameters({reportparameterid}) — getReportparameter: Retrieve a reportparameter
- PATCH /reportparameters({reportparameterid}) — updateReportparameter: Update (or upsert) a reportparameter
- DELETE /reportparameters({reportparameterid}) — deleteReportparameter: Delete a reportparameter

## retaineddataexcel
- GET /retaineddataexcels — listRetaineddataexcels: List retaineddataexcels
- POST /retaineddataexcels — createRetaineddataexcel: Create a retaineddataexcel
- GET /retaineddataexcels({retaineddataexcelid}) — getRetaineddataexcel: Retrieve a retaineddataexcel
- PATCH /retaineddataexcels({retaineddataexcelid}) — updateRetaineddataexcel: Update (or upsert) a retaineddataexcel
- DELETE /retaineddataexcels({retaineddataexcelid}) — deleteRetaineddataexcel: Delete a retaineddataexcel

## retentionconfig
- GET /retentionconfigs — listRetentionconfigs: List retentionconfigs
- POST /retentionconfigs — createRetentionconfig: Create a retentionconfig
- GET /retentionconfigs({retentionconfigid}) — getRetentionconfig: Retrieve a retentionconfig
- PATCH /retentionconfigs({retentionconfigid}) — updateRetentionconfig: Update (or upsert) a retentionconfig
- DELETE /retentionconfigs({retentionconfigid}) — deleteRetentionconfig: Delete a retentionconfig

## retentionfailuredetail
- GET /retentionfailuredetails — listRetentionfailuredetails: List retentionfailuredetails
- POST /retentionfailuredetails — createRetentionfailuredetail: Create a retentionfailuredetail
- GET /retentionfailuredetails({retentionfailuredetailid}) — getRetentionfailuredetail: Retrieve a retentionfailuredetail
- PATCH /retentionfailuredetails({retentionfailuredetailid}) — updateRetentionfailuredetail: Update (or upsert) a retentionfailuredetail
- DELETE /retentionfailuredetails({retentionfailuredetailid}) — deleteRetentionfailuredetail: Delete a retentionfailuredetail

## retentionoperation
- GET /retentionoperations — listRetentionoperations: List retentionoperations
- POST /retentionoperations — createRetentionoperation: Create a retentionoperation
- GET /retentionoperations({retentionoperationid}) — getRetentionoperation: Retrieve a retentionoperation
- PATCH /retentionoperations({retentionoperationid}) — updateRetentionoperation: Update (or upsert) a retentionoperation
- DELETE /retentionoperations({retentionoperationid}) — deleteRetentionoperation: Delete a retentionoperation

## retentionoperationdetail
- GET /retentionoperationdetails — listRetentionoperationdetails: List retentionoperationdetails
- POST /retentionoperationdetails — createRetentionoperationdetail: Create a retentionoperationdetail
- GET /retentionoperationdetails({retentionoperationdetailid}) — getRetentionoperationdetail: Retrieve a retentionoperationdetail
- PATCH /retentionoperationdetails({retentionoperationdetailid}) — updateRetentionoperationdetail: Update (or upsert) a retentionoperationdetail
- DELETE /retentionoperationdetails({retentionoperationdetailid}) — deleteRetentionoperationdetail: Delete a retentionoperationdetail

## retentionsuccessdetail
- GET /retentionsuccessdetails — listRetentionsuccessdetails: List retentionsuccessdetails
- POST /retentionsuccessdetails — createRetentionsuccessdetail: Create a retentionsuccessdetail
- GET /retentionsuccessdetails({retentionsuccessdetailid}) — getRetentionsuccessdetail: Retrieve a retentionsuccessdetail
- PATCH /retentionsuccessdetails({retentionsuccessdetailid}) — updateRetentionsuccessdetail: Update (or upsert) a retentionsuccessdetail
- DELETE /retentionsuccessdetails({retentionsuccessdetailid}) — deleteRetentionsuccessdetail: Delete a retentionsuccessdetail

## ribbonmetadatatoprocess
- GET /ribbonmetadatasettoprocess — listRibbonmetadatasettoprocess: List ribbonmetadatasettoprocess

## role
- GET /roles — listRoles: List roles
- POST /roles — createRole: Create a role
- GET /roles({roleid}) — getRole: Retrieve a role
- PATCH /roles({roleid}) — updateRole: Update (or upsert) a role
- DELETE /roles({roleid}) — deleteRole: Delete a role
- POST /roles({roleid})/Microsoft.Dynamics.CRM.AddPrivilegesRole — addPrivilegesRoleOnRole: AddPrivilegesRole action
- POST /roles({roleid})/Microsoft.Dynamics.CRM.RemovePrivilegeRole — removePrivilegeRoleOnRole: RemovePrivilegeRole action
- POST /roles({roleid})/Microsoft.Dynamics.CRM.ReplacePrivilegesRole — replacePrivilegesRoleOnRole: ReplacePrivilegesRole action

## roleeditorlayout
- GET /roleeditorlayouts — listRoleeditorlayouts: List roleeditorlayouts
- POST /roleeditorlayouts — createRoleeditorlayout: Create a roleeditorlayout
- GET /roleeditorlayouts({roleeditorlayoutid}) — getRoleeditorlayout: Retrieve a roleeditorlayout
- PATCH /roleeditorlayouts({roleeditorlayoutid}) — updateRoleeditorlayout: Update (or upsert) a roleeditorlayout
- DELETE /roleeditorlayouts({roleeditorlayoutid}) — deleteRoleeditorlayout: Delete a roleeditorlayout

## roleprivileges
- GET /roleprivilegescollection — listRoleprivilegescollection: List roleprivilegescollection

## rollupfield
- GET /rollupfields — listRollupfields: List rollupfields
- POST /rollupfields — createRollupfield: Create a rollupfield
- GET /rollupfields({rollupfieldid}) — getRollupfield: Retrieve a rollupfield
- PATCH /rollupfields({rollupfieldid}) — updateRollupfield: Update (or upsert) a rollupfield
- DELETE /rollupfields({rollupfieldid}) — deleteRollupfield: Delete a rollupfield

## sa_suggestedaction
- GET /sa_suggestedactions — listSa_suggestedactions: List sa_suggestedactions
- POST /sa_suggestedactions — createSa_suggestedaction: Create a sa_suggestedaction
- GET /sa_suggestedactions({sa_suggestedactionid}) — getSa_suggestedaction: Retrieve a sa_suggestedaction
- PATCH /sa_suggestedactions({sa_suggestedactionid}) — updateSa_suggestedaction: Update (or upsert) a sa_suggestedaction
- DELETE /sa_suggestedactions({sa_suggestedactionid}) — deleteSa_suggestedaction: Delete a sa_suggestedaction

## sa_suggestedactioncriteria
- GET /sa_suggestedactioncriterias — listSa_suggestedactioncriterias: List sa_suggestedactioncriterias
- POST /sa_suggestedactioncriterias — createSa_suggestedactioncriteria: Create a sa_suggestedactioncriteria
- GET /sa_suggestedactioncriterias({sa_suggestedactioncriteriaid}) — getSa_suggestedactioncriteria: Retrieve a sa_suggestedactioncriteria
- PATCH /sa_suggestedactioncriterias({sa_suggestedactioncriteriaid}) — updateSa_suggestedactioncriteria: Update (or upsert) a sa_suggestedactioncriteria
- DELETE /sa_suggestedactioncriterias({sa_suggestedactioncriteriaid}) — deleteSa_suggestedactioncriteria: Delete a sa_suggestedactioncriteria

## savedquery
- GET /savedqueries — listSavedqueries: List savedqueries
- POST /savedqueries — createSavedquery: Create a savedquery
- GET /savedqueries({savedqueryid}) — getSavedquery: Retrieve a savedquery
- PATCH /savedqueries({savedqueryid}) — updateSavedquery: Update (or upsert) a savedquery
- DELETE /savedqueries({savedqueryid}) — deleteSavedquery: Delete a savedquery
- POST /savedqueries/Microsoft.Dynamics.CRM.ValidateSavedQuery — validateSavedQueryOnSavedquery: ValidateSavedQuery action
- GET /savedqueries({savedqueryid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnSavedquery: RetrieveUnpublished function
- GET /savedqueries/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnSavedquery: RetrieveUnpublishedMultiple function

## savedqueryvisualization
- GET /savedqueryvisualizations — listSavedqueryvisualizations: List savedqueryvisualizations
- POST /savedqueryvisualizations — createSavedqueryvisualization: Create a savedqueryvisualization
- GET /savedqueryvisualizations({savedqueryvisualizationid}) — getSavedqueryvisualization: Retrieve a savedqueryvisualization
- PATCH /savedqueryvisualizations({savedqueryvisualizationid}) — updateSavedqueryvisualization: Update (or upsert) a savedqueryvisualization
- DELETE /savedqueryvisualizations({savedqueryvisualizationid}) — deleteSavedqueryvisualization: Delete a savedqueryvisualization
- GET /savedqueryvisualizations({savedqueryvisualizationid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnSavedqueryvisualization: RetrieveUnpublished function
- GET /savedqueryvisualizations/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnSavedqueryvisualization: RetrieveUnpublishedMultiple function

## savingrule
- GET /savingrules — listSavingrules: List savingrules
- POST /savingrules — createSavingrule: Create a savingrule
- GET /savingrules({savingruleid}) — getSavingrule: Retrieve a savingrule
- PATCH /savingrules({savingruleid}) — updateSavingrule: Update (or upsert) a savingrule
- DELETE /savingrules({savingruleid}) — deleteSavingrule: Delete a savingrule

## sdkmessage
- GET /sdkmessages — listSdkmessages: List sdkmessages
- GET /sdkmessages({sdkmessageid}) — getSdkmessage: Retrieve a sdkmessage

## sdkmessagefilter
- GET /sdkmessagefilters — listSdkmessagefilters: List sdkmessagefilters
- GET /sdkmessagefilters({sdkmessagefilterid}) — getSdkmessagefilter: Retrieve a sdkmessagefilter

## sdkmessageprocessingstep
- GET /sdkmessageprocessingsteps — listSdkmessageprocessingsteps: List sdkmessageprocessingsteps
- POST /sdkmessageprocessingsteps — createSdkmessageprocessingstep: Create a sdkmessageprocessingstep
- GET /sdkmessageprocessingsteps({sdkmessageprocessingstepid}) — getSdkmessageprocessingstep: Retrieve a sdkmessageprocessingstep
- PATCH /sdkmessageprocessingsteps({sdkmessageprocessingstepid}) — updateSdkmessageprocessingstep: Update (or upsert) a sdkmessageprocessingstep
- DELETE /sdkmessageprocessingsteps({sdkmessageprocessingstepid}) — deleteSdkmessageprocessingstep: Delete a sdkmessageprocessingstep

## sdkmessageprocessingstepimage
- GET /sdkmessageprocessingstepimages — listSdkmessageprocessingstepimages: List sdkmessageprocessingstepimages
- POST /sdkmessageprocessingstepimages — createSdkmessageprocessingstepimage: Create a sdkmessageprocessingstepimage
- GET /sdkmessageprocessingstepimages({sdkmessageprocessingstepimageid}) — getSdkmessageprocessingstepimage: Retrieve a sdkmessageprocessingstepimage
- PATCH /sdkmessageprocessingstepimages({sdkmessageprocessingstepimageid}) — updateSdkmessageprocessingstepimage: Update (or upsert) a sdkmessageprocessingstepimage
- DELETE /sdkmessageprocessingstepimages({sdkmessageprocessingstepimageid}) — deleteSdkmessageprocessingstepimage: Delete a sdkmessageprocessingstepimage

## sdkmessageprocessingstepsecureconfig
- GET /sdkmessageprocessingstepsecureconfigs — listSdkmessageprocessingstepsecureconfigs: List sdkmessageprocessingstepsecureconfigs
- POST /sdkmessageprocessingstepsecureconfigs — createSdkmessageprocessingstepsecureconfig: Create a sdkmessageprocessingstepsecureconfig
- GET /sdkmessageprocessingstepsecureconfigs({sdkmessageprocessingstepsecureconfigid}) — getSdkmessageprocessingstepsecureconfig: Retrieve a sdkmessageprocessingstepsecureconfig
- PATCH /sdkmessageprocessingstepsecureconfigs({sdkmessageprocessingstepsecureconfigid}) — updateSdkmessageprocessingstepsecureconfig: Update (or upsert) a sdkmessageprocessingstepsecureconfig
- DELETE /sdkmessageprocessingstepsecureconfigs({sdkmessageprocessingstepsecureconfigid}) — deleteSdkmessageprocessingstepsecureconfig: Delete a sdkmessageprocessingstepsecureconfig

## searchattributesettings
- GET /searchattributesettingses — listSearchattributesettingses: List searchattributesettingses
- POST /searchattributesettingses — createSearchattributesettings: Create a searchattributesettings
- GET /searchattributesettingses({searchattributesettingsid}) — getSearchattributesettings: Retrieve a searchattributesettings
- PATCH /searchattributesettingses({searchattributesettingsid}) — updateSearchattributesettings: Update (or upsert) a searchattributesettings
- DELETE /searchattributesettingses({searchattributesettingsid}) — deleteSearchattributesettings: Delete a searchattributesettings

## searchcustomanalyzer
- GET /searchcustomanalyzers — listSearchcustomanalyzers: List searchcustomanalyzers
- POST /searchcustomanalyzers — createSearchcustomanalyzer: Create a searchcustomanalyzer
- GET /searchcustomanalyzers({searchcustomanalyzerid}) — getSearchcustomanalyzer: Retrieve a searchcustomanalyzer
- PATCH /searchcustomanalyzers({searchcustomanalyzerid}) — updateSearchcustomanalyzer: Update (or upsert) a searchcustomanalyzer
- DELETE /searchcustomanalyzers({searchcustomanalyzerid}) — deleteSearchcustomanalyzer: Delete a searchcustomanalyzer

## searchrelationshipsettings
- GET /searchrelationshipsettingses — listSearchrelationshipsettingses: List searchrelationshipsettingses
- POST /searchrelationshipsettingses — createSearchrelationshipsettings: Create a searchrelationshipsettings
- GET /searchrelationshipsettingses({searchrelationshipsettingsid}) — getSearchrelationshipsettings: Retrieve a searchrelationshipsettings
- PATCH /searchrelationshipsettingses({searchrelationshipsettingsid}) — updateSearchrelationshipsettings: Update (or upsert) a searchrelationshipsettings
- DELETE /searchrelationshipsettingses({searchrelationshipsettingsid}) — deleteSearchrelationshipsettings: Delete a searchrelationshipsettings

## searchresultscache
- GET /searchresultscaches — listSearchresultscaches: List searchresultscaches
- POST /searchresultscaches — createSearchresultscache: Create a searchresultscache
- GET /searchresultscaches({searchresultscacheid}) — getSearchresultscache: Retrieve a searchresultscache
- PATCH /searchresultscaches({searchresultscacheid}) — updateSearchresultscache: Update (or upsert) a searchresultscache
- DELETE /searchresultscaches({searchresultscacheid}) — deleteSearchresultscache: Delete a searchresultscache

## searchtelemetry
- GET /searchtelemetries — listSearchtelemetries: List searchtelemetries
- POST /searchtelemetries — createSearchtelemetry: Create a searchtelemetry
- GET /searchtelemetries({searchtelemetryid}) — getSearchtelemetry: Retrieve a searchtelemetry
- PATCH /searchtelemetries({searchtelemetryid}) — updateSearchtelemetry: Update (or upsert) a searchtelemetry
- DELETE /searchtelemetries({searchtelemetryid}) — deleteSearchtelemetry: Delete a searchtelemetry

## semiannualfiscalcalendar
- GET /semiannualfiscalcalendars — listSemiannualfiscalcalendars: List semiannualfiscalcalendars
- POST /semiannualfiscalcalendars — createSemiannualfiscalcalendar: Create a semiannualfiscalcalendar
- GET /semiannualfiscalcalendars({userfiscalcalendarid}) — getSemiannualfiscalcalendar: Retrieve a semiannualfiscalcalendar
- PATCH /semiannualfiscalcalendars({userfiscalcalendarid}) — updateSemiannualfiscalcalendar: Update (or upsert) a semiannualfiscalcalendar
- DELETE /semiannualfiscalcalendars({userfiscalcalendarid}) — deleteSemiannualfiscalcalendar: Delete a semiannualfiscalcalendar

## sensitivitylabel
- GET /sensitivitylabels — listSensitivitylabels: List sensitivitylabels
- POST /sensitivitylabels — createSensitivitylabel: Create a sensitivitylabel
- GET /sensitivitylabels({sensitivitylabelid}) — getSensitivitylabel: Retrieve a sensitivitylabel
- PATCH /sensitivitylabels({sensitivitylabelid}) — updateSensitivitylabel: Update (or upsert) a sensitivitylabel
- DELETE /sensitivitylabels({sensitivitylabelid}) — deleteSensitivitylabel: Delete a sensitivitylabel

## sensitivitylabelattributemapping
- GET /sensitivitylabelattributemappings — listSensitivitylabelattributemappings: List sensitivitylabelattributemappings
- POST /sensitivitylabelattributemappings — createSensitivitylabelattributemapping: Create a sensitivitylabelattributemapping
- GET /sensitivitylabelattributemappings({sensitivitylabelattributemappingid}) — getSensitivitylabelattributemapping: Retrieve a sensitivitylabelattributemapping
- PATCH /sensitivitylabelattributemappings({sensitivitylabelattributemappingid}) — updateSensitivitylabelattributemapping: Update (or upsert) a sensitivitylabelattributemapping
- DELETE /sensitivitylabelattributemappings({sensitivitylabelattributemappingid}) — deleteSensitivitylabelattributemapping: Delete a sensitivitylabelattributemapping

## serviceendpoint
- GET /serviceendpoints — listServiceendpoints: List serviceendpoints
- POST /serviceendpoints — createServiceendpoint: Create a serviceendpoint
- GET /serviceendpoints({serviceendpointid}) — getServiceendpoint: Retrieve a serviceendpoint
- PATCH /serviceendpoints({serviceendpointid}) — updateServiceendpoint: Update (or upsert) a serviceendpoint
- DELETE /serviceendpoints({serviceendpointid}) — deleteServiceendpoint: Delete a serviceendpoint
- POST /serviceendpoints({serviceendpointid})/Microsoft.Dynamics.CRM.TriggerServiceEndpointCheck — triggerServiceEndpointCheckOnServiceendpoint: TriggerServiceEndpointCheck action

## serviceplan
- GET /serviceplans({serviceplanid}) — getServiceplan: Retrieve a serviceplan

## serviceplanappmodules
- GET /serviceplanappmodulesset — listServiceplanappmodulesset: List serviceplanappmodulesset

## serviceplancustomcontrol
- GET /serviceplancustomcontrolset — listServiceplancustomcontrolset: List serviceplancustomcontrolset
- POST /serviceplancustomcontrolset — createServiceplancustomcontrol: Create a serviceplancustomcontrol
- GET /serviceplancustomcontrolset({serviceplancustomcontrolid}) — getServiceplancustomcontrol: Retrieve a serviceplancustomcontrol
- PATCH /serviceplancustomcontrolset({serviceplancustomcontrolid}) — updateServiceplancustomcontrol: Update (or upsert) a serviceplancustomcontrol
- DELETE /serviceplancustomcontrolset({serviceplancustomcontrolid}) — deleteServiceplancustomcontrol: Delete a serviceplancustomcontrol

## serviceplanmapping
- GET /serviceplanmappings — listServiceplanmappings: List serviceplanmappings
- POST /serviceplanmappings — createServiceplanmapping: Create a serviceplanmapping
- GET /serviceplanmappings({serviceplanmappingid}) — getServiceplanmapping: Retrieve a serviceplanmapping
- PATCH /serviceplanmappings({serviceplanmappingid}) — updateServiceplanmapping: Update (or upsert) a serviceplanmapping
- DELETE /serviceplanmappings({serviceplanmappingid}) — deleteServiceplanmapping: Delete a serviceplanmapping

## sharedlinksetting
- GET /sharedlinksettings — listSharedlinksettings: List sharedlinksettings
- POST /sharedlinksettings — createSharedlinksetting: Create a sharedlinksetting
- GET /sharedlinksettings({sharedlinksettingid}) — getSharedlinksetting: Retrieve a sharedlinksetting
- PATCH /sharedlinksettings({sharedlinksettingid}) — updateSharedlinksetting: Update (or upsert) a sharedlinksetting
- DELETE /sharedlinksettings({sharedlinksettingid}) — deleteSharedlinksetting: Delete a sharedlinksetting

## sharedobject
- GET /sharedobjects — listSharedobjects: List sharedobjects
- POST /sharedobjects — createSharedobject: Create a sharedobject
- GET /sharedobjects({sharedobjectid}) — getSharedobject: Retrieve a sharedobject
- PATCH /sharedobjects({sharedobjectid}) — updateSharedobject: Update (or upsert) a sharedobject
- DELETE /sharedobjects({sharedobjectid}) — deleteSharedobject: Delete a sharedobject

## sharedworkspace
- GET /sharedworkspaces — listSharedworkspaces: List sharedworkspaces
- POST /sharedworkspaces — createSharedworkspace: Create a sharedworkspace
- GET /sharedworkspaces({sharedworkspaceid}) — getSharedworkspace: Retrieve a sharedworkspace
- PATCH /sharedworkspaces({sharedworkspaceid}) — updateSharedworkspace: Update (or upsert) a sharedworkspace
- DELETE /sharedworkspaces({sharedworkspaceid}) — deleteSharedworkspace: Delete a sharedworkspace

## sharedworkspaceaccesstoken2
- GET /sharedworkspaceaccesstoken2s — listSharedworkspaceaccesstoken2s: List sharedworkspaceaccesstoken2s
- POST /sharedworkspaceaccesstoken2s — createSharedworkspaceaccesstoken2: Create a sharedworkspaceaccesstoken2
- GET /sharedworkspaceaccesstoken2s({sharedworkspaceaccesstoken2id}) — getSharedworkspaceaccesstoken2: Retrieve a sharedworkspaceaccesstoken2
- PATCH /sharedworkspaceaccesstoken2s({sharedworkspaceaccesstoken2id}) — updateSharedworkspaceaccesstoken2: Update (or upsert) a sharedworkspaceaccesstoken2
- DELETE /sharedworkspaceaccesstoken2s({sharedworkspaceaccesstoken2id}) — deleteSharedworkspaceaccesstoken2: Delete a sharedworkspaceaccesstoken2

## sharedworkspacepool
- GET /sharedworkspacepools — listSharedworkspacepools: List sharedworkspacepools
- POST /sharedworkspacepools — createSharedworkspacepool: Create a sharedworkspacepool
- GET /sharedworkspacepools({sharedworkspacepoolid}) — getSharedworkspacepool: Retrieve a sharedworkspacepool
- PATCH /sharedworkspacepools({sharedworkspacepoolid}) — updateSharedworkspacepool: Update (or upsert) a sharedworkspacepool
- DELETE /sharedworkspacepools({sharedworkspacepoolid}) — deleteSharedworkspacepool: Delete a sharedworkspacepool

## sharepointdocumentlocation
- GET /sharepointdocumentlocations — listSharepointdocumentlocations: List sharepointdocumentlocations
- POST /sharepointdocumentlocations — createSharepointdocumentlocation: Create a sharepointdocumentlocation
- GET /sharepointdocumentlocations({sharepointdocumentlocationid}) — getSharepointdocumentlocation: Retrieve a sharepointdocumentlocation
- PATCH /sharepointdocumentlocations({sharepointdocumentlocationid}) — updateSharepointdocumentlocation: Update (or upsert) a sharepointdocumentlocation
- DELETE /sharepointdocumentlocations({sharepointdocumentlocationid}) — deleteSharepointdocumentlocation: Delete a sharepointdocumentlocation
- GET /sharepointdocumentlocations({sharepointdocumentlocationid})/Microsoft.Dynamics.CRM.RetrieveAbsoluteAndSiteCollectionUrl() — retrieveAbsoluteAndSiteCollectionUrlOnSharepointdocumentlocation: RetrieveAbsoluteAndSiteCollectionUrl function

## sharepointmanagedidentity
- GET /sharepointmanagedidentities — listSharepointmanagedidentities: List sharepointmanagedidentities
- POST /sharepointmanagedidentities — createSharepointmanagedidentity: Create a sharepointmanagedidentity
- GET /sharepointmanagedidentities({sharepointmanagedidentityid}) — getSharepointmanagedidentity: Retrieve a sharepointmanagedidentity
- PATCH /sharepointmanagedidentities({sharepointmanagedidentityid}) — updateSharepointmanagedidentity: Update (or upsert) a sharepointmanagedidentity
- DELETE /sharepointmanagedidentities({sharepointmanagedidentityid}) — deleteSharepointmanagedidentity: Delete a sharepointmanagedidentity

## sharepointsite
- GET /sharepointsites — listSharepointsites: List sharepointsites
- POST /sharepointsites — createSharepointsite: Create a sharepointsite
- GET /sharepointsites({sharepointsiteid}) — getSharepointsite: Retrieve a sharepointsite
- PATCH /sharepointsites({sharepointsiteid}) — updateSharepointsite: Update (or upsert) a sharepointsite
- DELETE /sharepointsites({sharepointsiteid}) — deleteSharepointsite: Delete a sharepointsite
- GET /sharepointsites({sharepointsiteid})/Microsoft.Dynamics.CRM.RetrieveAbsoluteAndSiteCollectionUrl() — retrieveAbsoluteAndSiteCollectionUrlOnSharepointsite: RetrieveAbsoluteAndSiteCollectionUrl function

## sideloadedaiplugin
- GET /sideloadedaiplugins — listSideloadedaiplugins: List sideloadedaiplugins
- POST /sideloadedaiplugins — createSideloadedaiplugin: Create a sideloadedaiplugin
- GET /sideloadedaiplugins({sideloadedaipluginid}) — getSideloadedaiplugin: Retrieve a sideloadedaiplugin
- PATCH /sideloadedaiplugins({sideloadedaipluginid}) — updateSideloadedaiplugin: Update (or upsert) a sideloadedaiplugin
- DELETE /sideloadedaiplugins({sideloadedaipluginid}) — deleteSideloadedaiplugin: Delete a sideloadedaiplugin

## signal
- GET /signals — listSignals: List signals
- POST /signals — createSignal: Create a signal
- GET /signals({signalid}) — getSignal: Retrieve a signal
- PATCH /signals({signalid}) — updateSignal: Update (or upsert) a signal
- DELETE /signals({signalid}) — deleteSignal: Delete a signal

## sitemap
- GET /sitemaps — listSitemaps: List sitemaps
- POST /sitemaps — createSitemap: Create a sitemap
- GET /sitemaps({sitemapid}) — getSitemap: Retrieve a sitemap
- PATCH /sitemaps({sitemapid}) — updateSitemap: Update (or upsert) a sitemap
- DELETE /sitemaps({sitemapid}) — deleteSitemap: Delete a sitemap
- GET /sitemaps({sitemapid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnSitemap: RetrieveUnpublished function
- GET /sitemaps/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnSitemap: RetrieveUnpublishedMultiple function

## skill
- GET /skills — listSkills: List skills
- POST /skills — createSkill: Create a skill
- GET /skills({skillid}) — getSkill: Retrieve a skill
- PATCH /skills({skillid}) — updateSkill: Update (or upsert) a skill
- DELETE /skills({skillid}) — deleteSkill: Delete a skill

## skilldvtablesearch
- GET /skilldvtablesearchset — listSkilldvtablesearchset: List skilldvtablesearchset

## skillmetadata
- GET /skillmetadatas — listSkillmetadatas: List skillmetadatas
- POST /skillmetadatas — createSkillmetadata: Create a skillmetadata
- GET /skillmetadatas({skillmetadataid}) — getSkillmetadata: Retrieve a skillmetadata
- PATCH /skillmetadatas({skillmetadataid}) — updateSkillmetadata: Update (or upsert) a skillmetadata
- DELETE /skillmetadatas({skillmetadataid}) — deleteSkillmetadata: Delete a skillmetadata

## skillresource
- GET /skillresources — listSkillresources: List skillresources
- POST /skillresources — createSkillresource: Create a skillresource
- GET /skillresources({skillresourceid}) — getSkillresource: Retrieve a skillresource
- PATCH /skillresources({skillresourceid}) — updateSkillresource: Update (or upsert) a skillresource
- DELETE /skillresources({skillresourceid}) — deleteSkillresource: Delete a skillresource

## skillrolemapping
- GET /skillrolemappings — listSkillrolemappings: List skillrolemappings
- POST /skillrolemappings — createSkillrolemapping: Create a skillrolemapping
- GET /skillrolemappings({skillrolemappingid}) — getSkillrolemapping: Retrieve a skillrolemapping
- PATCH /skillrolemappings({skillrolemappingid}) — updateSkillrolemapping: Update (or upsert) a skillrolemapping
- DELETE /skillrolemappings({skillrolemappingid}) — deleteSkillrolemapping: Delete a skillrolemapping

## sla
- GET /slas — listSlas: List slas
- POST /slas — createSla: Create a sla
- GET /slas({slaid}) — getSla: Retrieve a sla
- PATCH /slas({slaid}) — updateSla: Update (or upsert) a sla
- DELETE /slas({slaid}) — deleteSla: Delete a sla

## slaitem
- GET /slaitems — listSlaitems: List slaitems
- POST /slaitems — createSlaitem: Create a slaitem
- GET /slaitems({slaitemid}) — getSlaitem: Retrieve a slaitem
- PATCH /slaitems({slaitemid}) — updateSlaitem: Update (or upsert) a slaitem
- DELETE /slaitems({slaitemid}) — deleteSlaitem: Delete a slaitem

## slakpiinstance
- GET /slakpiinstances — listSlakpiinstances: List slakpiinstances
- POST /slakpiinstances — createSlakpiinstance: Create a slakpiinstance
- GET /slakpiinstances({slakpiinstanceid}) — getSlakpiinstance: Retrieve a slakpiinstance
- PATCH /slakpiinstances({slakpiinstanceid}) — updateSlakpiinstance: Update (or upsert) a slakpiinstance
- DELETE /slakpiinstances({slakpiinstanceid}) — deleteSlakpiinstance: Delete a slakpiinstance

## socialactivity
- GET /socialactivities — listSocialactivities: List socialactivities
- POST /socialactivities — createSocialactivity: Create a socialactivity
- GET /socialactivities({activityid}) — getSocialactivity: Retrieve a socialactivity
- PATCH /socialactivities({activityid}) — updateSocialactivity: Update (or upsert) a socialactivity
- DELETE /socialactivities({activityid}) — deleteSocialactivity: Delete a socialactivity

## socialprofile
- GET /socialprofiles — listSocialprofiles: List socialprofiles
- POST /socialprofiles — createSocialprofile: Create a socialprofile
- GET /socialprofiles({socialprofileid}) — getSocialprofile: Retrieve a socialprofile
- PATCH /socialprofiles({socialprofileid}) — updateSocialprofile: Update (or upsert) a socialprofile
- DELETE /socialprofiles({socialprofileid}) — deleteSocialprofile: Delete a socialprofile
- POST /socialprofiles/Microsoft.Dynamics.CRM.GenerateSocialProfile — generateSocialProfileOnSocialprofile: GenerateSocialProfile action

## solution
- GET /solutions — listSolutions: List solutions
- POST /solutions — createSolution: Create a solution
- GET /solutions({solutionid}) — getSolution: Retrieve a solution
- PATCH /solutions({solutionid}) — updateSolution: Update (or upsert) a solution
- DELETE /solutions({solutionid}) — deleteSolution: Delete a solution
- POST /solutions/Microsoft.Dynamics.CRM.ExportTranslation — exportTranslationOnSolution: ExportTranslation action

## solutioncomponent
- GET /solutioncomponents — listSolutioncomponents: List solutioncomponents
- GET /solutioncomponents({solutioncomponentid}) — getSolutioncomponent: Retrieve a solutioncomponent

## solutioncomponentattributeconfiguration
- GET /solutioncomponentattributeconfigurations — listSolutioncomponentattributeconfigurations: List solutioncomponentattributeconfigurations
- POST /solutioncomponentattributeconfigurations — createSolutioncomponentattributeconfiguration: Create a solutioncomponentattributeconfiguration
- GET /solutioncomponentattributeconfigurations({solutioncomponentattributeconfigurationid}) — getSolutioncomponentattributeconfiguration: Retrieve a solutioncomponentattributeconfiguration
- PATCH /solutioncomponentattributeconfigurations({solutioncomponentattributeconfigurationid}) — updateSolutioncomponentattributeconfiguration: Update (or upsert) a solutioncomponentattributeconfiguration
- DELETE /solutioncomponentattributeconfigurations({solutioncomponentattributeconfigurationid}) — deleteSolutioncomponentattributeconfiguration: Delete a solutioncomponentattributeconfiguration

## solutioncomponentbatchconfiguration
- GET /solutioncomponentbatchconfigurations — listSolutioncomponentbatchconfigurations: List solutioncomponentbatchconfigurations
- POST /solutioncomponentbatchconfigurations — createSolutioncomponentbatchconfiguration: Create a solutioncomponentbatchconfiguration
- GET /solutioncomponentbatchconfigurations({solutioncomponentbatchconfigurationid}) — getSolutioncomponentbatchconfiguration: Retrieve a solutioncomponentbatchconfiguration
- PATCH /solutioncomponentbatchconfigurations({solutioncomponentbatchconfigurationid}) — updateSolutioncomponentbatchconfiguration: Update (or upsert) a solutioncomponentbatchconfiguration
- DELETE /solutioncomponentbatchconfigurations({solutioncomponentbatchconfigurationid}) — deleteSolutioncomponentbatchconfiguration: Delete a solutioncomponentbatchconfiguration

## solutioncomponentconfiguration
- GET /solutioncomponentconfigurations — listSolutioncomponentconfigurations: List solutioncomponentconfigurations
- POST /solutioncomponentconfigurations — createSolutioncomponentconfiguration: Create a solutioncomponentconfiguration
- GET /solutioncomponentconfigurations({solutioncomponentconfigurationid}) — getSolutioncomponentconfiguration: Retrieve a solutioncomponentconfiguration
- PATCH /solutioncomponentconfigurations({solutioncomponentconfigurationid}) — updateSolutioncomponentconfiguration: Update (or upsert) a solutioncomponentconfiguration
- DELETE /solutioncomponentconfigurations({solutioncomponentconfigurationid}) — deleteSolutioncomponentconfiguration: Delete a solutioncomponentconfiguration

## solutioncomponentrelationshipconfiguration
- GET /solutioncomponentrelationshipconfigurations — listSolutioncomponentrelationshipconfigurations: List solutioncomponentrelationshipconfigurations
- POST /solutioncomponentrelationshipconfigurations — createSolutioncomponentrelationshipconfiguration: Create a solutioncomponentrelationshipconfiguration
- GET /solutioncomponentrelationshipconfigurations({solutioncomponentrelationshipconfigurationid}) — getSolutioncomponentrelationshipconfiguration: Retrieve a solutioncomponentrelationshipconfiguration
- PATCH /solutioncomponentrelationshipconfigurations({solutioncomponentrelationshipconfigurationid}) — updateSolutioncomponentrelationshipconfiguration: Update (or upsert) a solutioncomponentrelationshipconfiguration
- DELETE /solutioncomponentrelationshipconfigurations({solutioncomponentrelationshipconfigurationid}) — deleteSolutioncomponentrelationshipconfiguration: Delete a solutioncomponentrelationshipconfiguration

## solutionhistorydata
- GET /solutionhistories — listSolutionhistories: List solutionhistories

## sourcecontrolbranchconfiguration
- GET /sourcecontrolbranchconfigurations — listSourcecontrolbranchconfigurations: List sourcecontrolbranchconfigurations
- POST /sourcecontrolbranchconfigurations — createSourcecontrolbranchconfiguration: Create a sourcecontrolbranchconfiguration
- GET /sourcecontrolbranchconfigurations({sourcecontrolbranchconfigurationid}) — getSourcecontrolbranchconfiguration: Retrieve a sourcecontrolbranchconfiguration
- PATCH /sourcecontrolbranchconfigurations({sourcecontrolbranchconfigurationid}) — updateSourcecontrolbranchconfiguration: Update (or upsert) a sourcecontrolbranchconfiguration
- DELETE /sourcecontrolbranchconfigurations({sourcecontrolbranchconfigurationid}) — deleteSourcecontrolbranchconfiguration: Delete a sourcecontrolbranchconfiguration

## sourcecontrolcomponent
- GET /sourcecontrolcomponents — listSourcecontrolcomponents: List sourcecontrolcomponents
- POST /sourcecontrolcomponents — createSourcecontrolcomponent: Create a sourcecontrolcomponent
- GET /sourcecontrolcomponents({sourcecontrolcomponentid}) — getSourcecontrolcomponent: Retrieve a sourcecontrolcomponent
- PATCH /sourcecontrolcomponents({sourcecontrolcomponentid}) — updateSourcecontrolcomponent: Update (or upsert) a sourcecontrolcomponent
- DELETE /sourcecontrolcomponents({sourcecontrolcomponentid}) — deleteSourcecontrolcomponent: Delete a sourcecontrolcomponent

## sourcecontrolcomponentpayload
- GET /sourcecontrolcomponentpayloads — listSourcecontrolcomponentpayloads: List sourcecontrolcomponentpayloads
- POST /sourcecontrolcomponentpayloads — createSourcecontrolcomponentpayload: Create a sourcecontrolcomponentpayload
- GET /sourcecontrolcomponentpayloads({sourcecontrolcomponentpayloadid}) — getSourcecontrolcomponentpayload: Retrieve a sourcecontrolcomponentpayload
- PATCH /sourcecontrolcomponentpayloads({sourcecontrolcomponentpayloadid}) — updateSourcecontrolcomponentpayload: Update (or upsert) a sourcecontrolcomponentpayload
- DELETE /sourcecontrolcomponentpayloads({sourcecontrolcomponentpayloadid}) — deleteSourcecontrolcomponentpayload: Delete a sourcecontrolcomponentpayload

## sourcecontrolconfiguration
- GET /sourcecontrolconfigurations — listSourcecontrolconfigurations: List sourcecontrolconfigurations
- POST /sourcecontrolconfigurations — createSourcecontrolconfiguration: Create a sourcecontrolconfiguration
- GET /sourcecontrolconfigurations({sourcecontrolconfigurationid}) — getSourcecontrolconfiguration: Retrieve a sourcecontrolconfiguration
- PATCH /sourcecontrolconfigurations({sourcecontrolconfigurationid}) — updateSourcecontrolconfiguration: Update (or upsert) a sourcecontrolconfiguration
- DELETE /sourcecontrolconfigurations({sourcecontrolconfigurationid}) — deleteSourcecontrolconfiguration: Delete a sourcecontrolconfiguration

## sourcecontroloperationstatus
- GET /sourcecontroloperationstatuses — listSourcecontroloperationstatuses: List sourcecontroloperationstatuses
- POST /sourcecontroloperationstatuses — createSourcecontroloperationstatus: Create a sourcecontroloperationstatus
- GET /sourcecontroloperationstatuses({sourcecontroloperationstatusid}) — getSourcecontroloperationstatus: Retrieve a sourcecontroloperationstatus
- PATCH /sourcecontroloperationstatuses({sourcecontroloperationstatusid}) — updateSourcecontroloperationstatus: Update (or upsert) a sourcecontroloperationstatus
- DELETE /sourcecontroloperationstatuses({sourcecontroloperationstatusid}) — deleteSourcecontroloperationstatus: Delete a sourcecontroloperationstatus

## sourcecontroloperationtracking
- GET /sourcecontroloperationtrackings — listSourcecontroloperationtrackings: List sourcecontroloperationtrackings
- POST /sourcecontroloperationtrackings — createSourcecontroloperationtracking: Create a sourcecontroloperationtracking
- GET /sourcecontroloperationtrackings({sourcecontroloperationtrackingid}) — getSourcecontroloperationtracking: Retrieve a sourcecontroloperationtracking
- PATCH /sourcecontroloperationtrackings({sourcecontroloperationtrackingid}) — updateSourcecontroloperationtracking: Update (or upsert) a sourcecontroloperationtracking
- DELETE /sourcecontroloperationtrackings({sourcecontroloperationtrackingid}) — deleteSourcecontroloperationtracking: Delete a sourcecontroloperationtracking

## stagedentity
- GET /stagedentities — listStagedentities: List stagedentities
- POST /stagedentities — createStagedentity: Create a stagedentity
- GET /stagedentities({stagedentityid}) — getStagedentity: Retrieve a stagedentity
- PATCH /stagedentities({stagedentityid}) — updateStagedentity: Update (or upsert) a stagedentity
- DELETE /stagedentities({stagedentityid}) — deleteStagedentity: Delete a stagedentity

## stagedentityattribute
- GET /stagedentityattributes — listStagedentityattributes: List stagedentityattributes
- POST /stagedentityattributes — createStagedentityattribute: Create a stagedentityattribute
- GET /stagedentityattributes({stagedentityattributeid}) — getStagedentityattribute: Retrieve a stagedentityattribute
- PATCH /stagedentityattributes({stagedentityattributeid}) — updateStagedentityattribute: Update (or upsert) a stagedentityattribute
- DELETE /stagedentityattributes({stagedentityattributeid}) — deleteStagedentityattribute: Delete a stagedentityattribute

## stagedmetadataasyncoperation
- GET /stagedmetadataasyncoperations — listStagedmetadataasyncoperations: List stagedmetadataasyncoperations
- POST /stagedmetadataasyncoperations — createStagedmetadataasyncoperation: Create a stagedmetadataasyncoperation
- GET /stagedmetadataasyncoperations({stagedmetadataasyncoperationid}) — getStagedmetadataasyncoperation: Retrieve a stagedmetadataasyncoperation
- PATCH /stagedmetadataasyncoperations({stagedmetadataasyncoperationid}) — updateStagedmetadataasyncoperation: Update (or upsert) a stagedmetadataasyncoperation
- DELETE /stagedmetadataasyncoperations({stagedmetadataasyncoperationid}) — deleteStagedmetadataasyncoperation: Delete a stagedmetadataasyncoperation

## stagedsourcecontrolcomponent
- GET /stagedsourcecontrolcomponents — listStagedsourcecontrolcomponents: List stagedsourcecontrolcomponents
- POST /stagedsourcecontrolcomponents — createStagedsourcecontrolcomponent: Create a stagedsourcecontrolcomponent
- GET /stagedsourcecontrolcomponents({stagedsourcecontrolcomponentid}) — getStagedsourcecontrolcomponent: Retrieve a stagedsourcecontrolcomponent
- PATCH /stagedsourcecontrolcomponents({stagedsourcecontrolcomponentid}) — updateStagedsourcecontrolcomponent: Update (or upsert) a stagedsourcecontrolcomponent
- DELETE /stagedsourcecontrolcomponents({stagedsourcecontrolcomponentid}) — deleteStagedsourcecontrolcomponent: Delete a stagedsourcecontrolcomponent

## stagesolutionupload
- GET /stagesolutionuploads — listStagesolutionuploads: List stagesolutionuploads
- POST /stagesolutionuploads — createStagesolutionupload: Create a stagesolutionupload
- GET /stagesolutionuploads({stagesolutionuploadid}) — getStagesolutionupload: Retrieve a stagesolutionupload
- PATCH /stagesolutionuploads({stagesolutionuploadid}) — updateStagesolutionupload: Update (or upsert) a stagesolutionupload
- DELETE /stagesolutionuploads({stagesolutionuploadid}) — deleteStagesolutionupload: Delete a stagesolutionupload

## subject
- GET /subjects — listSubjects: List subjects
- POST /subjects — createSubject: Create a subject
- GET /subjects({subjectid}) — getSubject: Retrieve a subject
- PATCH /subjects({subjectid}) — updateSubject: Update (or upsert) a subject
- DELETE /subjects({subjectid}) — deleteSubject: Delete a subject
- GET /subjects({subjectid})/Microsoft.Dynamics.CRM.RetrieveByTopIncidentSubjectKbArticle() — retrieveByTopIncidentSubjectKbArticleOnSubject: RetrieveByTopIncidentSubjectKbArticle function

## synapsedatabase
- GET /synapsedatabases — listSynapsedatabases: List synapsedatabases
- POST /synapsedatabases — createSynapsedatabase: Create a synapsedatabase
- GET /synapsedatabases({synapsedatabaseid}) — getSynapsedatabase: Retrieve a synapsedatabase
- PATCH /synapsedatabases({synapsedatabaseid}) — updateSynapsedatabase: Update (or upsert) a synapsedatabase
- DELETE /synapsedatabases({synapsedatabaseid}) — deleteSynapsedatabase: Delete a synapsedatabase

## synapselinkexternaltablestate
- GET /synapselinkexternaltablestates — listSynapselinkexternaltablestates: List synapselinkexternaltablestates
- POST /synapselinkexternaltablestates — createSynapselinkexternaltablestate: Create a synapselinkexternaltablestate
- GET /synapselinkexternaltablestates({synapselinkexternaltablestateid}) — getSynapselinkexternaltablestate: Retrieve a synapselinkexternaltablestate
- PATCH /synapselinkexternaltablestates({synapselinkexternaltablestateid}) — updateSynapselinkexternaltablestate: Update (or upsert) a synapselinkexternaltablestate
- DELETE /synapselinkexternaltablestates({synapselinkexternaltablestateid}) — deleteSynapselinkexternaltablestate: Delete a synapselinkexternaltablestate

## synapselinkprofile
- GET /synapselinkprofiles — listSynapselinkprofiles: List synapselinkprofiles
- POST /synapselinkprofiles — createSynapselinkprofile: Create a synapselinkprofile
- GET /synapselinkprofiles({synapselinkprofileid}) — getSynapselinkprofile: Retrieve a synapselinkprofile
- PATCH /synapselinkprofiles({synapselinkprofileid}) — updateSynapselinkprofile: Update (or upsert) a synapselinkprofile
- DELETE /synapselinkprofiles({synapselinkprofileid}) — deleteSynapselinkprofile: Delete a synapselinkprofile

## synapselinkprofileentity
- GET /synapselinkprofileentities — listSynapselinkprofileentities: List synapselinkprofileentities
- POST /synapselinkprofileentities — createSynapselinkprofileentity: Create a synapselinkprofileentity
- GET /synapselinkprofileentities({synapselinkprofileentityid}) — getSynapselinkprofileentity: Retrieve a synapselinkprofileentity
- PATCH /synapselinkprofileentities({synapselinkprofileentityid}) — updateSynapselinkprofileentity: Update (or upsert) a synapselinkprofileentity
- DELETE /synapselinkprofileentities({synapselinkprofileentityid}) — deleteSynapselinkprofileentity: Delete a synapselinkprofileentity

## synapselinkprofileentitystate
- GET /synapselinkprofileentitystates — listSynapselinkprofileentitystates: List synapselinkprofileentitystates
- POST /synapselinkprofileentitystates — createSynapselinkprofileentitystate: Create a synapselinkprofileentitystate
- GET /synapselinkprofileentitystates({synapselinkprofileentitystateid}) — getSynapselinkprofileentitystate: Retrieve a synapselinkprofileentitystate
- PATCH /synapselinkprofileentitystates({synapselinkprofileentitystateid}) — updateSynapselinkprofileentitystate: Update (or upsert) a synapselinkprofileentitystate
- DELETE /synapselinkprofileentitystates({synapselinkprofileentitystateid}) — deleteSynapselinkprofileentitystate: Delete a synapselinkprofileentitystate

## synapselinkschedule
- GET /synapselinkschedules — listSynapselinkschedules: List synapselinkschedules
- POST /synapselinkschedules — createSynapselinkschedule: Create a synapselinkschedule
- GET /synapselinkschedules({synapselinkscheduleid}) — getSynapselinkschedule: Retrieve a synapselinkschedule
- PATCH /synapselinkschedules({synapselinkscheduleid}) — updateSynapselinkschedule: Update (or upsert) a synapselinkschedule
- DELETE /synapselinkschedules({synapselinkscheduleid}) — deleteSynapselinkschedule: Delete a synapselinkschedule

## syncerror
- GET /syncerrors — listSyncerrors: List syncerrors
- POST /syncerrors — createSyncerror: Create a syncerror
- GET /syncerrors({syncerrorid}) — getSyncerror: Retrieve a syncerror
- PATCH /syncerrors({syncerrorid}) — updateSyncerror: Update (or upsert) a syncerror
- DELETE /syncerrors({syncerrorid}) — deleteSyncerror: Delete a syncerror

## systemform
- GET /systemforms — listSystemforms: List systemforms
- POST /systemforms — createSystemform: Create a systemform
- GET /systemforms({formid}) — getSystemform: Retrieve a systemform
- PATCH /systemforms({formid}) — updateSystemform: Update (or upsert) a systemform
- DELETE /systemforms({formid}) — deleteSystemform: Delete a systemform
- POST /systemforms({formid})/Microsoft.Dynamics.CRM.CopySystemForm — copySystemFormOnSystemform: CopySystemForm action
- GET /systemforms/Microsoft.Dynamics.CRM.RetrieveFilteredForms(EntityLogicalName=@EntityLogicalName,FormType=@FormType,User=@User) — retrieveFilteredFormsOnSystemform: RetrieveFilteredForms function
- GET /systemforms({formid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnSystemform: RetrieveUnpublished function
- GET /systemforms/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnSystemform: RetrieveUnpublishedMultiple function

## systemuser
- GET /systemusers — listSystemusers: List systemusers
- POST /systemusers — createSystemuser: Create a systemuser
- GET /systemusers({ownerid}) — getSystemuser: Retrieve a systemuser
- PATCH /systemusers({ownerid}) — updateSystemuser: Update (or upsert) a systemuser
- DELETE /systemusers({ownerid}) — deleteSystemuser: Delete a systemuser
- POST /systemusers({ownerid})/Microsoft.Dynamics.CRM.AddUserToRecordTeam — addUserToRecordTeamOnSystemuser: AddUserToRecordTeam action
- POST /systemusers({ownerid})/Microsoft.Dynamics.CRM.InstantiateFilters — instantiateFiltersOnSystemuser: InstantiateFilters action
- POST /systemusers({ownerid})/Microsoft.Dynamics.CRM.ReassignObjectsSystemUser — reassignObjectsSystemUserOnSystemuser: ReassignObjectsSystemUser action
- POST /systemusers({ownerid})/Microsoft.Dynamics.CRM.RemoveUserFromRecordTeam — removeUserFromRecordTeamOnSystemuser: RemoveUserFromRecordTeam action
- POST /systemusers({ownerid})/Microsoft.Dynamics.CRM.SetBusinessSystemUser — setBusinessSystemUserOnSystemuser: SetBusinessSystemUser action
- POST /systemusers({ownerid})/Microsoft.Dynamics.CRM.SetParentSystemUser — setParentSystemUserOnSystemuser: SetParentSystemUser action
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveAllChildUsersSystemUser() — retrieveAllChildUsersSystemUserOnSystemuser: RetrieveAllChildUsersSystemUser function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrievePrincipalAccess(Target=@Target) — retrievePrincipalAccessOnSystemuser: RetrievePrincipalAccess function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrievePrincipalAttributePrivileges() — retrievePrincipalAttributePrivilegesOnSystemuser: RetrievePrincipalAttributePrivileges function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrievePrincipalSyncAttributeMappings() — retrievePrincipalSyncAttributeMappingsOnSystemuser: RetrievePrincipalSyncAttributeMappings function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUserApplicationLicenseAccess(ApplicationId=@ApplicationId) — retrieveUserApplicationLicenseAccessOnSystemuser: RetrieveUserApplicationLicenseAccess function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUserLicenseInfo() — retrieveUserLicenseInfoOnSystemuser: RetrieveUserLicenseInfo function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUserPrivilegeByPrivilegeId(PrivilegeId=@PrivilegeId,ExcludeTeamBasic=@ExcludeTeamBasic) — retrieveUserPrivilegeByPrivilegeIdOnSystemuser: RetrieveUserPrivilegeByPrivilegeId function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUserPrivilegeByPrivilegeName(PrivilegeName=@PrivilegeName,ExcludeTeamBasic=@ExcludeTeamBasic) — retrieveUserPrivilegeByPrivilegeNameOnSystemuser: RetrieveUserPrivilegeByPrivilegeName function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUserPrivileges() — retrieveUserPrivilegesOnSystemuser: RetrieveUserPrivileges function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUserQueues(IncludePublic=@IncludePublic) — retrieveUserQueuesOnSystemuser: RetrieveUserQueues function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUserSetOfPrivilegesByIds(PrivilegeIds=@PrivilegeIds,ExcludeTeamBasic=@ExcludeTeamBasic) — retrieveUserSetOfPrivilegesByIdsOnSystemuser: RetrieveUserSetOfPrivilegesByIds function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUserSetOfPrivilegesByNames(PrivilegeNames=@PrivilegeNames,ExcludeTeamBasic=@ExcludeTeamBasic) — retrieveUserSetOfPrivilegesByNamesOnSystemuser: RetrieveUserSetOfPrivilegesByNames function
- GET /systemusers({ownerid})/Microsoft.Dynamics.CRM.RetrieveUsersPrivilegesThroughTeams(ExcludeOrgDisabledPrivileges=@ExcludeOrgDisabledPrivileges,IncludeSetupUserFiltering=@IncludeSetupUserFiltering) — retrieveUsersPrivilegesThroughTeamsOnSystemuser: RetrieveUsersPrivilegesThroughTeams function

## tag
- GET /tags — listTags: List tags
- POST /tags — createTag: Create a tag
- GET /tags({tagid}) — getTag: Retrieve a tag
- PATCH /tags({tagid}) — updateTag: Update (or upsert) a tag
- DELETE /tags({tagid}) — deleteTag: Delete a tag

## taggedflowsession
- GET /taggedflowsessions — listTaggedflowsessions: List taggedflowsessions
- POST /taggedflowsessions — createTaggedflowsession: Create a taggedflowsession
- GET /taggedflowsessions({taggedflowsessionid}) — getTaggedflowsession: Retrieve a taggedflowsession
- PATCH /taggedflowsessions({taggedflowsessionid}) — updateTaggedflowsession: Update (or upsert) a taggedflowsession
- DELETE /taggedflowsessions({taggedflowsessionid}) — deleteTaggedflowsession: Delete a taggedflowsession

## taggedprocess
- GET /taggedprocesses — listTaggedprocesses: List taggedprocesses
- POST /taggedprocesses — createTaggedprocess: Create a taggedprocess
- GET /taggedprocesses({taggedprocessid}) — getTaggedprocess: Retrieve a taggedprocess
- PATCH /taggedprocesses({taggedprocessid}) — updateTaggedprocess: Update (or upsert) a taggedprocess
- DELETE /taggedprocesses({taggedprocessid}) — deleteTaggedprocess: Delete a taggedprocess

## task
- GET /tasks — listTasks: List tasks
- POST /tasks — createTask: Create a task
- GET /tasks({activityid}) — getTask: Retrieve a task
- PATCH /tasks({activityid}) — updateTask: Update (or upsert) a task
- DELETE /tasks({activityid}) — deleteTask: Delete a task

## team
- GET /teams — listTeams: List teams
- POST /teams — createTeam: Create a team
- GET /teams({ownerid}) — getTeam: Retrieve a team
- PATCH /teams({ownerid}) — updateTeam: Update (or upsert) a team
- DELETE /teams({ownerid}) — deleteTeam: Delete a team
- POST /teams({ownerid})/Microsoft.Dynamics.CRM.AddMembersTeam — addMembersTeamOnTeam: AddMembersTeam action
- POST /teams({ownerid})/Microsoft.Dynamics.CRM.ConvertOwnerTeamToAccessTeam — convertOwnerTeamToAccessTeamOnTeam: ConvertOwnerTeamToAccessTeam action
- POST /teams({ownerid})/Microsoft.Dynamics.CRM.RemoveMembersTeam — removeMembersTeamOnTeam: RemoveMembersTeam action
- POST /teams({ownerid})/Microsoft.Dynamics.CRM.SetParentTeam — setParentTeamOnTeam: SetParentTeam action
- POST /teams({ownerid})/Microsoft.Dynamics.CRM.SyncGroupMembersToTeam — syncGroupMembersToTeamOnTeam: SyncGroupMembersToTeam action
- GET /teams({ownerid})/Microsoft.Dynamics.CRM.RetrievePrincipalAccess(Target=@Target) — retrievePrincipalAccessOnTeam: RetrievePrincipalAccess function
- GET /teams({ownerid})/Microsoft.Dynamics.CRM.RetrievePrincipalAttributePrivileges() — retrievePrincipalAttributePrivilegesOnTeam: RetrievePrincipalAttributePrivileges function
- GET /teams({ownerid})/Microsoft.Dynamics.CRM.RetrievePrincipalSyncAttributeMappings() — retrievePrincipalSyncAttributeMappingsOnTeam: RetrievePrincipalSyncAttributeMappings function
- GET /teams({ownerid})/Microsoft.Dynamics.CRM.RetrieveTeamPrivileges() — retrieveTeamPrivilegesOnTeam: RetrieveTeamPrivileges function

## teamtemplate
- GET /teamtemplates — listTeamtemplates: List teamtemplates
- POST /teamtemplates — createTeamtemplate: Create a teamtemplate
- GET /teamtemplates({teamtemplateid}) — getTeamtemplate: Retrieve a teamtemplate
- PATCH /teamtemplates({teamtemplateid}) — updateTeamtemplate: Update (or upsert) a teamtemplate
- DELETE /teamtemplates({teamtemplateid}) — deleteTeamtemplate: Delete a teamtemplate

## template
- GET /templates — listTemplates: List templates
- POST /templates — createTemplate: Create a template
- GET /templates({templateid}) — getTemplate: Retrieve a template
- PATCH /templates({templateid}) — updateTemplate: Update (or upsert) a template
- DELETE /templates({templateid}) — deleteTemplate: Delete a template

## territory
- GET /territories — listTerritories: List territories
- POST /territories — createTerritory: Create a territory
- GET /territories({territoryid}) — getTerritory: Retrieve a territory
- PATCH /territories({territoryid}) — updateTerritory: Update (or upsert) a territory
- DELETE /territories({territoryid}) — deleteTerritory: Delete a territory

## textanalyticsentitymapping
- GET /textanalyticsentitymappings — listTextanalyticsentitymappings: List textanalyticsentitymappings
- POST /textanalyticsentitymappings — createTextanalyticsentitymapping: Create a textanalyticsentitymapping
- GET /textanalyticsentitymappings({textanalyticsentitymappingid}) — getTextanalyticsentitymapping: Retrieve a textanalyticsentitymapping
- PATCH /textanalyticsentitymappings({textanalyticsentitymappingid}) — updateTextanalyticsentitymapping: Update (or upsert) a textanalyticsentitymapping
- DELETE /textanalyticsentitymappings({textanalyticsentitymappingid}) — deleteTextanalyticsentitymapping: Delete a textanalyticsentitymapping

## textdatarecordsindexingstatus
- GET /textdatarecordsindexingstatuses — listTextdatarecordsindexingstatuses: List textdatarecordsindexingstatuses
- POST /textdatarecordsindexingstatuses — createTextdatarecordsindexingstatus: Create a textdatarecordsindexingstatus
- GET /textdatarecordsindexingstatuses({textdatarecordsindexingstatusid}) — getTextdatarecordsindexingstatus: Retrieve a textdatarecordsindexingstatus
- PATCH /textdatarecordsindexingstatuses({textdatarecordsindexingstatusid}) — updateTextdatarecordsindexingstatus: Update (or upsert) a textdatarecordsindexingstatus
- DELETE /textdatarecordsindexingstatuses({textdatarecordsindexingstatusid}) — deleteTextdatarecordsindexingstatus: Delete a textdatarecordsindexingstatus

## theme
- GET /themes — listThemes: List themes
- POST /themes — createTheme: Create a theme
- GET /themes({themeid}) — getTheme: Retrieve a theme
- PATCH /themes({themeid}) — updateTheme: Update (or upsert) a theme
- DELETE /themes({themeid}) — deleteTheme: Delete a theme
- POST /themes({themeid})/Microsoft.Dynamics.CRM.PublishTheme — publishThemeOnTheme: PublishTheme action

## timezonedefinition
- GET /timezonedefinitions — listTimezonedefinitions: List timezonedefinitions
- GET /timezonedefinitions({timezonedefinitionid}) — getTimezonedefinition: Retrieve a timezonedefinition
- GET /timezonedefinitions/Microsoft.Dynamics.CRM.GetAllTimeZonesWithDisplayName(LocaleId=@LocaleId) — getAllTimeZonesWithDisplayNameOnTimezonedefinition: GetAllTimeZonesWithDisplayName function

## timezonelocalizedname
- GET /timezonelocalizednames — listTimezonelocalizednames: List timezonelocalizednames
- GET /timezonelocalizednames({timezonelocalizednameid}) — getTimezonelocalizedname: Retrieve a timezonelocalizedname

## timezonerule
- GET /timezonerules — listTimezonerules: List timezonerules
- GET /timezonerules({timezoneruleid}) — getTimezonerule: Retrieve a timezonerule

## tracelog
- GET /tracelogs — listTracelogs: List tracelogs
- POST /tracelogs — createTracelog: Create a tracelog
- GET /tracelogs({tracelogid}) — getTracelog: Retrieve a tracelog
- DELETE /tracelogs({tracelogid}) — deleteTracelog: Delete a tracelog

## trait
- GET /traits — listTraits: List traits
- POST /traits — createTrait: Create a trait
- GET /traits({traitid}) — getTrait: Retrieve a trait
- PATCH /traits({traitid}) — updateTrait: Update (or upsert) a trait
- DELETE /traits({traitid}) — deleteTrait: Delete a trait

## transactioncurrency
- GET /transactioncurrencies — listTransactioncurrencies: List transactioncurrencies
- POST /transactioncurrencies — createTransactioncurrency: Create a transactioncurrency
- GET /transactioncurrencies({transactioncurrencyid}) — getTransactioncurrency: Retrieve a transactioncurrency
- PATCH /transactioncurrencies({transactioncurrencyid}) — updateTransactioncurrency: Update (or upsert) a transactioncurrency
- DELETE /transactioncurrencies({transactioncurrencyid}) — deleteTransactioncurrency: Delete a transactioncurrency

## transformationmapping
- GET /transformationmappings — listTransformationmappings: List transformationmappings
- POST /transformationmappings — createTransformationmapping: Create a transformationmapping
- GET /transformationmappings({transformationmappingid}) — getTransformationmapping: Retrieve a transformationmapping
- DELETE /transformationmappings({transformationmappingid}) — deleteTransformationmapping: Delete a transformationmapping

## transformationparametermapping
- GET /transformationparametermappings — listTransformationparametermappings: List transformationparametermappings
- POST /transformationparametermappings — createTransformationparametermapping: Create a transformationparametermapping
- GET /transformationparametermappings({transformationparametermappingid}) — getTransformationparametermapping: Retrieve a transformationparametermapping
- DELETE /transformationparametermappings({transformationparametermappingid}) — deleteTransformationparametermapping: Delete a transformationparametermapping

## translationprocess
- GET /translationprocesses — listTranslationprocesses: List translationprocesses
- POST /translationprocesses — createTranslationprocess: Create a translationprocess
- GET /translationprocesses({businessprocessflowinstanceid}) — getTranslationprocess: Retrieve a translationprocess
- PATCH /translationprocesses({businessprocessflowinstanceid}) — updateTranslationprocess: Update (or upsert) a translationprocess
- DELETE /translationprocesses({businessprocessflowinstanceid}) — deleteTranslationprocess: Delete a translationprocess

## unstructuredfilesearchentity
- GET /unstructuredfilesearchentities — listUnstructuredfilesearchentities: List unstructuredfilesearchentities
- POST /unstructuredfilesearchentities — createUnstructuredfilesearchentity: Create an unstructuredfilesearchentity
- GET /unstructuredfilesearchentities({unstructuredfilesearchentityid}) — getUnstructuredfilesearchentity: Retrieve an unstructuredfilesearchentity
- PATCH /unstructuredfilesearchentities({unstructuredfilesearchentityid}) — updateUnstructuredfilesearchentity: Update (or upsert) an unstructuredfilesearchentity
- DELETE /unstructuredfilesearchentities({unstructuredfilesearchentityid}) — deleteUnstructuredfilesearchentity: Delete an unstructuredfilesearchentity

## unstructuredfilesearchrecord
- GET /unstructuredfilesearchrecords — listUnstructuredfilesearchrecords: List unstructuredfilesearchrecords
- POST /unstructuredfilesearchrecords — createUnstructuredfilesearchrecord: Create an unstructuredfilesearchrecord
- GET /unstructuredfilesearchrecords({unstructuredfilesearchrecordid}) — getUnstructuredfilesearchrecord: Retrieve an unstructuredfilesearchrecord
- PATCH /unstructuredfilesearchrecords({unstructuredfilesearchrecordid}) — updateUnstructuredfilesearchrecord: Update (or upsert) an unstructuredfilesearchrecord
- DELETE /unstructuredfilesearchrecords({unstructuredfilesearchrecordid}) — deleteUnstructuredfilesearchrecord: Delete an unstructuredfilesearchrecord

## userform
- GET /userforms — listUserforms: List userforms
- POST /userforms — createUserform: Create an userform
- GET /userforms({userformid}) — getUserform: Retrieve an userform
- PATCH /userforms({userformid}) — updateUserform: Update (or upsert) an userform
- DELETE /userforms({userformid}) — deleteUserform: Delete an userform

## usermapping
- GET /usermappings — listUsermappings: List usermappings
- POST /usermappings — createUsermapping: Create an usermapping
- GET /usermappings({usermappingid}) — getUsermapping: Retrieve an usermapping
- PATCH /usermappings({usermappingid}) — updateUsermapping: Update (or upsert) an usermapping
- DELETE /usermappings({usermappingid}) — deleteUsermapping: Delete an usermapping

## userquery
- GET /userqueries — listUserqueries: List userqueries
- POST /userqueries — createUserquery: Create an userquery
- GET /userqueries({userqueryid}) — getUserquery: Retrieve an userquery
- PATCH /userqueries({userqueryid}) — updateUserquery: Update (or upsert) an userquery
- DELETE /userqueries({userqueryid}) — deleteUserquery: Delete an userquery

## userqueryvisualization
- GET /userqueryvisualizations — listUserqueryvisualizations: List userqueryvisualizations
- POST /userqueryvisualizations — createUserqueryvisualization: Create an userqueryvisualization
- GET /userqueryvisualizations({userqueryvisualizationid}) — getUserqueryvisualization: Retrieve an userqueryvisualization
- PATCH /userqueryvisualizations({userqueryvisualizationid}) — updateUserqueryvisualization: Update (or upsert) an userqueryvisualization
- DELETE /userqueryvisualizations({userqueryvisualizationid}) — deleteUserqueryvisualization: Delete an userqueryvisualization

## userrating
- GET /userratings — listUserratings: List userratings
- POST /userratings — createUserrating: Create an userrating
- GET /userratings({userratingid}) — getUserrating: Retrieve an userrating
- PATCH /userratings({userratingid}) — updateUserrating: Update (or upsert) an userrating
- DELETE /userratings({userratingid}) — deleteUserrating: Delete an userrating

## usersettings
- GET /usersettingscollection — listUsersettingscollection: List usersettingscollection
- GET /usersettingscollection({systemuserid}) — getUsersettings: Retrieve an usersettings
- PATCH /usersettingscollection({systemuserid}) — updateUsersettings: Update (or upsert) an usersettings

## viewasexamplequestion
- GET /viewasexamplequestions — listViewasexamplequestions: List viewasexamplequestions
- POST /viewasexamplequestions — createViewasexamplequestion: Create a viewasexamplequestion
- GET /viewasexamplequestions({viewasexamplequestionid}) — getViewasexamplequestion: Retrieve a viewasexamplequestion
- PATCH /viewasexamplequestions({viewasexamplequestionid}) — updateViewasexamplequestion: Update (or upsert) a viewasexamplequestion
- DELETE /viewasexamplequestions({viewasexamplequestionid}) — deleteViewasexamplequestion: Delete a viewasexamplequestion

## virtualentitymetadata
- GET /virtualentitymetadatas — listVirtualentitymetadatas: List virtualentitymetadatas
- POST /virtualentitymetadatas — createVirtualentitymetadata: Create a virtualentitymetadata
- GET /virtualentitymetadatas({virtualentitymetadataid}) — getVirtualentitymetadata: Retrieve a virtualentitymetadata
- PATCH /virtualentitymetadatas({virtualentitymetadataid}) — updateVirtualentitymetadata: Update (or upsert) a virtualentitymetadata
- DELETE /virtualentitymetadatas({virtualentitymetadataid}) — deleteVirtualentitymetadata: Delete a virtualentitymetadata

## webresource
- GET /webresourceset — listWebresourceset: List webresourceset
- POST /webresourceset — createWebresource: Create a webresource
- GET /webresourceset({webresourceid}) — getWebresource: Retrieve a webresource
- PATCH /webresourceset({webresourceid}) — updateWebresource: Update (or upsert) a webresource
- DELETE /webresourceset({webresourceid}) — deleteWebresource: Delete a webresource
- GET /webresourceset({webresourceid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnWebresource: RetrieveUnpublished function
- GET /webresourceset/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnWebresource: RetrieveUnpublishedMultiple function

## workflow
- GET /workflows — listWorkflows: List workflows
- POST /workflows — createWorkflow: Create a workflow
- GET /workflows({workflowid}) — getWorkflow: Retrieve a workflow
- PATCH /workflows({workflowid}) — updateWorkflow: Update (or upsert) a workflow
- DELETE /workflows({workflowid}) — deleteWorkflow: Delete a workflow
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.AddRequiredDesktopFlowComponentsToSolutions — addRequiredDesktopFlowComponentsToSolutionsOnWorkflow: AddRequiredDesktopFlowComponentsToSolutions action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.CancelAllCloudFlowRuns — cancelAllCloudFlowRunsOnWorkflow: CancelAllCloudFlowRuns action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.CreateWorkflowFromTemplate — createWorkflowFromTemplateOnWorkflow: CreateWorkflowFromTemplate action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.ExecuteWorkflow — executeWorkflowOnWorkflow: ExecuteWorkflow action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.InitializeModernFlowFromAsyncWorkflow — initializeModernFlowFromAsyncWorkflowOnWorkflow: InitializeModernFlowFromAsyncWorkflow action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.install — installOnWorkflow: install action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.ListChildDesktopFlows — listChildDesktopFlowsOnWorkflow: ListChildDesktopFlows action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.ListConnectionReferences — listConnectionReferencesOnWorkflow: ListConnectionReferences action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.RunDesktopFlow — runDesktopFlowOnWorkflow: RunDesktopFlow action
- POST /workflows({workflowid})/Microsoft.Dynamics.CRM.SaveAsDesktopFlow — saveAsDesktopFlowOnWorkflow: SaveAsDesktopFlow action
- GET /workflows({workflowid})/Microsoft.Dynamics.CRM.RetrieveUnpublished() — retrieveUnpublishedOnWorkflow: RetrieveUnpublished function
- GET /workflows/Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple() — retrieveUnpublishedMultipleOnWorkflow: RetrieveUnpublishedMultiple function

## workflowbinary
- GET /workflowbinaries — listWorkflowbinaries: List workflowbinaries
- POST /workflowbinaries — createWorkflowbinary: Create a workflowbinary
- GET /workflowbinaries({workflowbinaryid}) — getWorkflowbinary: Retrieve a workflowbinary
- PATCH /workflowbinaries({workflowbinaryid}) — updateWorkflowbinary: Update (or upsert) a workflowbinary
- DELETE /workflowbinaries({workflowbinaryid}) — deleteWorkflowbinary: Delete a workflowbinary

## workflowcardconnections
- GET /workflowcardconnectionsset — listWorkflowcardconnectionsset: List workflowcardconnectionsset

## workflowlog
- GET /workflowlogs — listWorkflowlogs: List workflowlogs
- POST /workflowlogs — createWorkflowlog: Create a workflowlog
- GET /workflowlogs({workflowlogid}) — getWorkflowlog: Retrieve a workflowlog
- PATCH /workflowlogs({workflowlogid}) — updateWorkflowlog: Update (or upsert) a workflowlog
- DELETE /workflowlogs({workflowlogid}) — deleteWorkflowlog: Delete a workflowlog

## workflowmetadata
- GET /workflowmetadata — listWorkflowmetadata: List workflowmetadata
- POST /workflowmetadata — createWorkflowmetadata: Create a workflowmetadata
- GET /workflowmetadata({workflowmetadataid}) — getWorkflowmetadata: Retrieve a workflowmetadata
- PATCH /workflowmetadata({workflowmetadataid}) — updateWorkflowmetadata: Update (or upsert) a workflowmetadata
- DELETE /workflowmetadata({workflowmetadataid}) — deleteWorkflowmetadata: Delete a workflowmetadata

## workqueue
- GET /workqueues — listWorkqueues: List workqueues
- POST /workqueues — createWorkqueue: Create a workqueue
- GET /workqueues({workqueueid}) — getWorkqueue: Retrieve a workqueue
- PATCH /workqueues({workqueueid}) — updateWorkqueue: Update (or upsert) a workqueue
- DELETE /workqueues({workqueueid}) — deleteWorkqueue: Delete a workqueue
- POST /workqueues({workqueueid})/Microsoft.Dynamics.CRM.ClearWorkQueue — clearWorkQueueOnWorkqueue: ClearWorkQueue action
- POST /workqueues({workqueueid})/Microsoft.Dynamics.CRM.ComputeSlaWorkQueueItem — computeSlaWorkQueueItemOnWorkqueue: ComputeSlaWorkQueueItem action
- POST /workqueues({workqueueid})/Microsoft.Dynamics.CRM.Dequeue — dequeueOnWorkqueue: Dequeue action
- POST /workqueues({workqueueid})/Microsoft.Dynamics.CRM.EnqueueWorkQueueItem — enqueueWorkQueueItemOnWorkqueue: EnqueueWorkQueueItem action

## workqueueitem
- GET /workqueueitems — listWorkqueueitems: List workqueueitems
- POST /workqueueitems — createWorkqueueitem: Create a workqueueitem
- GET /workqueueitems({workqueueitemid}) — getWorkqueueitem: Retrieve a workqueueitem
- PATCH /workqueueitems({workqueueitemid}) — updateWorkqueueitem: Update (or upsert) a workqueueitem
- DELETE /workqueueitems({workqueueitemid}) — deleteWorkqueueitem: Delete a workqueueitem
- POST /workqueueitems({workqueueitemid})/Microsoft.Dynamics.CRM.AddWorkQueueItemProcessingHistoryEntry — addWorkQueueItemProcessingHistoryEntryOnWorkqueueitem: AddWorkQueueItemProcessingHistoryEntry action
