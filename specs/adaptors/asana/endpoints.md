# Asana (asana) v1.0

<!-- derived from openapi.json by `pnpm specs index asana` — do not edit by hand -->

base: https://app.asana.com/api/1.0 | auth: http/bearer, oauth2 (authorizationCode) | 249 operations in 49 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## AI Studio usage API
- GET /workspaces/{workspace_gid}/ai_studio/runs — getAiStudioRuns: Get AI Studio credit utilization
- GET /workspaces/{workspace_gid}/ai_studio/seats — getAiStudioSeats: Get AI Studio seats

## Access requests
- GET /access_requests — getAccessRequests: Get access requests
- POST /access_requests — createAccessRequest: Create an access request
- POST /access_requests/{access_request_gid}/approve — approveAccessRequest: Approve an access request
- POST /access_requests/{access_request_gid}/reject — rejectAccessRequest: Reject an access request

## Agents
- GET /workspaces/{workspace_gid}/agents — getAgentsForWorkspace: Get a list of agents in a workspace
- GET /agents/{agent_gid} — getAgent: Get an agent

## Allocations
- GET /allocations/{allocation_gid} — getAllocation: Get an allocation
- PUT /allocations/{allocation_gid} — updateAllocation: Update an allocation
- DELETE /allocations/{allocation_gid} — deleteAllocation: Delete an allocation
- GET /allocations — getAllocations: Get multiple allocations
- POST /allocations — createAllocation: Create an allocation

## Attachments
- GET /attachments/{attachment_gid} — getAttachment: Get an attachment
- DELETE /attachments/{attachment_gid} — deleteAttachment: Delete an attachment
- GET /attachments — getAttachmentsForObject: Get attachments from an object
- POST /attachments — createAttachmentForObject: Upload an attachment

## Audit log API
- GET /workspaces/{workspace_gid}/audit_log_events — getAuditLogEvents: Get audit log events

## Batch API
- POST /batch — createBatchRequest: Submit parallel requests

## Budgets
- GET /budgets — getBudgets: Get all budgets
- POST /budgets — createBudget: Create a budget
- GET /budgets/{budget_gid} — getBudget: Get a budget
- PUT /budgets/{budget_gid} — updateBudget: Update a budget
- DELETE /budgets/{budget_gid} — deleteBudget: Delete a budget

## Custom field settings
- GET /projects/{project_gid}/custom_field_settings — getCustomFieldSettingsForProject: Get a project's custom fields
- GET /portfolios/{portfolio_gid}/custom_field_settings — getCustomFieldSettingsForPortfolio: Get a portfolio's custom fields
- GET /goals/{goal_gid}/custom_field_settings — getCustomFieldSettingsForGoal: Get a goal's custom fields
- GET /teams/{team_gid}/custom_field_settings — getCustomFieldSettingsForTeam: Get a team's custom fields

## Custom fields
- POST /custom_fields — createCustomField: Create a custom field
- GET /custom_fields/{custom_field_gid} — getCustomField: Get a custom field
- PUT /custom_fields/{custom_field_gid} — updateCustomField: Update a custom field
- DELETE /custom_fields/{custom_field_gid} — deleteCustomField: Delete a custom field
- GET /workspaces/{workspace_gid}/custom_fields — getCustomFieldsForWorkspace: Get a workspace's custom fields
- POST /custom_fields/{custom_field_gid}/enum_options — createEnumOptionForCustomField: Create an enum option
- POST /custom_fields/{custom_field_gid}/enum_options/insert — insertEnumOptionForCustomField: Reorder a custom field's enum
- PUT /enum_options/{enum_option_gid} — updateEnumOption: Update an enum option

## Custom types
- GET /custom_types — getCustomTypes: Get all custom types associated with an object
- GET /custom_types/{custom_type_gid} — getCustomType: Get a custom type

## Events
- GET /events — getEvents: Get events on a resource

## Exports
- POST /exports/graph — createGraphExport: Initiate a graph export
- POST /exports/resource — createResourceExport: Initiate a resource export

## Goal relationships
- GET /goal_relationships/{goal_relationship_gid} — getGoalRelationship: Get a goal relationship
- PUT /goal_relationships/{goal_relationship_gid} — updateGoalRelationship: Update a goal relationship
- GET /goal_relationships — getGoalRelationships: Get goal relationships
- POST /goals/{goal_gid}/addSupportingRelationship — addSupportingRelationship: Add a supporting goal relationship
- POST /goals/{goal_gid}/removeSupportingRelationship — removeSupportingRelationship: Removes a supporting goal relationship

## Goals
- GET /goals/{goal_gid} — getGoal: Get a goal
- PUT /goals/{goal_gid} — updateGoal: Update a goal
- DELETE /goals/{goal_gid} — deleteGoal: Delete a goal
- GET /goals — getGoals: Get goals
- POST /goals — createGoal: Create a goal
- POST /goals/{goal_gid}/setMetric — createGoalMetric: Create a goal metric
- POST /goals/{goal_gid}/setMetricCurrentValue — updateGoalMetric: Update a goal metric
- POST /goals/{goal_gid}/addFollowers — addFollowers: Add a collaborator to a goal
- POST /goals/{goal_gid}/removeFollowers — removeFollowers: Remove a collaborator from a goal
- GET /goals/{goal_gid}/parentGoals — getParentGoalsForGoal: Get parent goals from a goal
- POST /goals/{goal_gid}/addCustomFieldSetting — addCustomFieldSettingForGoal: Add a custom field to a goal
- POST /goals/{goal_gid}/removeCustomFieldSetting — removeCustomFieldSettingForGoal: Remove a custom field from a goal

## Jobs
- GET /jobs/{job_gid} — getJob: Get a job by id

## Memberships
- GET /memberships — getMemberships: Get multiple memberships
- POST /memberships — createMembership: Create a membership
- GET /memberships/{membership_gid} — getMembership: Get a membership
- PUT /memberships/{membership_gid} — updateMembership: Update a membership
- DELETE /memberships/{membership_gid} — deleteMembership: Delete a membership

## Ooo entries
- GET /ooo_entries/{ooo_entry_gid} — getOooEntry: Get an OOO entry
- PUT /ooo_entries/{ooo_entry_gid} — updateOooEntry: Update an OOO entry
- DELETE /ooo_entries/{ooo_entry_gid} — deleteOooEntry: Delete an OOO entry
- GET /ooo_entries — getOooEntries: Get OOO entries for a user
- POST /ooo_entries — createOooEntry: Create an OOO entry

## Organization exports
- POST /organization_exports — createOrganizationExport: Create an organization export request
- GET /organization_exports/{organization_export_gid} — getOrganizationExport: Get details on an org export request

## Portfolio memberships
- GET /portfolio_memberships — getPortfolioMemberships: Get multiple portfolio memberships
- GET /portfolio_memberships/{portfolio_membership_gid} — getPortfolioMembership: Get a portfolio membership
- GET /portfolios/{portfolio_gid}/portfolio_memberships — getPortfolioMembershipsForPortfolio: Get memberships from a portfolio

## Portfolios
- GET /portfolios — getPortfolios: Get multiple portfolios
- POST /portfolios — createPortfolio: Create a portfolio
- GET /portfolios/{portfolio_gid} — getPortfolio: Get a portfolio
- PUT /portfolios/{portfolio_gid} — updatePortfolio: Update a portfolio
- DELETE /portfolios/{portfolio_gid} — deletePortfolio: Delete a portfolio
- GET /portfolios/{portfolio_gid}/items — getItemsForPortfolio: Get portfolio items
- POST /portfolios/{portfolio_gid}/addItem — addItemForPortfolio: Add a portfolio item
- POST /portfolios/{portfolio_gid}/removeItem — removeItemForPortfolio: Remove a portfolio item
- POST /portfolios/{portfolio_gid}/addCustomFieldSetting — addCustomFieldSettingForPortfolio: Add a custom field to a portfolio
- POST /portfolios/{portfolio_gid}/removeCustomFieldSetting — removeCustomFieldSettingForPortfolio: Remove a custom field from a portfolio
- POST /portfolios/{portfolio_gid}/addMembers — addMembersForPortfolio: Add users to a portfolio
- POST /portfolios/{portfolio_gid}/removeMembers — removeMembersForPortfolio: Remove users from a portfolio
- POST /portfolios/{portfolio_gid}/duplicate — duplicatePortfolio: Duplicate a portfolio

## Project briefs
- GET /project_briefs/{project_brief_gid} — getProjectBrief: Get a project brief
- PUT /project_briefs/{project_brief_gid} — updateProjectBrief: Update a project brief
- DELETE /project_briefs/{project_brief_gid} — deleteProjectBrief: Delete a project brief
- POST /projects/{project_gid}/project_briefs — createProjectBrief: Create a project brief

## Project memberships
- GET /project_memberships/{project_membership_gid} — getProjectMembership: Get a project membership
- GET /projects/{project_gid}/project_memberships — getProjectMembershipsForProject: Get memberships from a project

## Project portfolio settings
- GET /project_portfolio_settings/{project_portfolio_setting_gid} — getProjectPortfolioSetting: Get a project portfolio setting
- PUT /project_portfolio_settings/{project_portfolio_setting_gid} — updateProjectPortfolioSetting: Update a project portfolio setting
- GET /projects/{project_gid}/project_portfolio_settings — getProjectPortfolioSettingsForProject: Get project portfolio settings for a project
- GET /portfolios/{portfolio_gid}/project_portfolio_settings — getProjectPortfolioSettingsForPortfolio: Get project portfolio settings for a portfolio

## Project statuses
- GET /project_statuses/{project_status_gid} — getProjectStatus: Get a project status
- DELETE /project_statuses/{project_status_gid} — deleteProjectStatus: Delete a project status
- GET /projects/{project_gid}/project_statuses — getProjectStatusesForProject: Get statuses from a project
- POST /projects/{project_gid}/project_statuses — createProjectStatusForProject: Create a project status

## Project templates
- GET /project_templates/{project_template_gid} — getProjectTemplate: Get a project template
- DELETE /project_templates/{project_template_gid} — deleteProjectTemplate: Delete a project template
- GET /project_templates — getProjectTemplates: Get multiple project templates
- GET /teams/{team_gid}/project_templates — getProjectTemplatesForTeam: Get a team's project templates
- POST /project_templates/{project_template_gid}/instantiateProject — instantiateProject: Instantiate a project from a project template

## Projects
- GET /projects — getProjects: Get multiple projects
- POST /projects — createProject: Create a project
- GET /projects/{project_gid} — getProject: Get a project
- PUT /projects/{project_gid} — updateProject: Update a project
- DELETE /projects/{project_gid} — deleteProject: Delete a project
- POST /projects/{project_gid}/duplicate — duplicateProject: Duplicate a project
- GET /tasks/{task_gid}/projects — getProjectsForTask: Get projects a task is in
- GET /teams/{team_gid}/projects — getProjectsForTeam: Get a team's projects
- POST /teams/{team_gid}/projects — createProjectForTeam: Create a project in a team
- GET /workspaces/{workspace_gid}/projects — getProjectsForWorkspace: Get all projects in a workspace
- POST /workspaces/{workspace_gid}/projects — createProjectForWorkspace: Create a project in a workspace
- GET /workspaces/{workspace_gid}/projects/search — searchProjectsForWorkspace: Search projects in a workspace
- POST /projects/{project_gid}/addCustomFieldSetting — addCustomFieldSettingForProject: Add a custom field to a project
- POST /projects/{project_gid}/removeCustomFieldSetting — removeCustomFieldSettingForProject: Remove a custom field from a project
- GET /projects/{project_gid}/task_counts — getTaskCountsForProject: Get task count of a project
- POST /projects/{project_gid}/addMembers — addMembersForProject: Add users to a project
- POST /projects/{project_gid}/removeMembers — removeMembersForProject: Remove users from a project
- POST /projects/{project_gid}/addFollowers — addFollowersForProject: Add followers to a project
- POST /projects/{project_gid}/removeFollowers — removeFollowersForProject: Remove followers from a project
- POST /projects/{project_gid}/saveAsTemplate — projectSaveAsTemplate: Create a project template from a project

## Rates
- GET /rates — getRates: Get multiple rates
- POST /rates — createRate: Create a rate
- GET /rates/{rate_gid} — getRate: Get a rate
- PUT /rates/{rate_gid} — updateRate: Update a rate
- DELETE /rates/{rate_gid} — deleteRate: Delete a rate

## Reactions
- GET /reactions — getReactionsOnObject: Get reactions with an emoji base on an object.

## Roles
- GET /roles — getRoles: Get multiple roles
- POST /roles — createRole: Create a role
- GET /roles/{role_gid} — getRole: Get a role
- PUT /roles/{role_gid} — updateRole: Update a role
- DELETE /roles/{role_gid} — deleteRole: Delete a role

## Rules
- POST /rule_triggers/{rule_trigger_gid}/run — triggerRule: Trigger a rule

## Sections
- GET /sections/{section_gid} — getSection: Get a section
- PUT /sections/{section_gid} — updateSection: Update a section
- DELETE /sections/{section_gid} — deleteSection: Delete a section
- GET /projects/{project_gid}/sections — getSectionsForProject: Get sections in a project
- POST /projects/{project_gid}/sections — createSectionForProject: Create a section in a project
- POST /sections/{section_gid}/addTask — addTaskForSection: Add task to section
- POST /projects/{project_gid}/sections/insert — insertSectionForProject: Move or Insert sections

## Status updates
- GET /status_updates/{status_update_gid} — getStatus: Get a status update
- DELETE /status_updates/{status_update_gid} — deleteStatus: Delete a status update
- GET /status_updates — getStatusesForObject: Get status updates from an object
- POST /status_updates — createStatusForObject: Create a status update

## Stories
- GET /stories/{story_gid} — getStory: Get a story
- PUT /stories/{story_gid} — updateStory: Update a story
- DELETE /stories/{story_gid} — deleteStory: Delete a story
- GET /tasks/{task_gid}/stories — getStoriesForTask: Get stories from a task
- POST /tasks/{task_gid}/stories — createStoryForTask: Create a story on a task
- GET /goals/{goal_gid}/stories — getStoriesForGoal: Get stories from a goal
- POST /goals/{goal_gid}/stories — createStoryForGoal: Create a story on a goal

## Tags
- GET /tags — getTags: Get multiple tags
- POST /tags — createTag: Create a tag
- GET /tags/{tag_gid} — getTag: Get a tag
- PUT /tags/{tag_gid} — updateTag: Update a tag
- DELETE /tags/{tag_gid} — deleteTag: Delete a tag
- GET /tasks/{task_gid}/tags — getTagsForTask: Get a task's tags
- GET /workspaces/{workspace_gid}/tags — getTagsForWorkspace: Get tags in a workspace
- POST /workspaces/{workspace_gid}/tags — createTagForWorkspace: Create a tag in a workspace

## Task templates
- GET /task_templates — getTaskTemplates: Get multiple task templates
- GET /task_templates/{task_template_gid} — getTaskTemplate: Get a task template
- DELETE /task_templates/{task_template_gid} — deleteTaskTemplate: Delete a task template
- POST /task_templates/{task_template_gid}/instantiateTask — instantiateTask: Instantiate a task from a task template

## Tasks
- GET /tasks — getTasks: Get multiple tasks
- POST /tasks — createTask: Create a task
- GET /tasks/{task_gid} — getTask: Get a task
- PUT /tasks/{task_gid} — updateTask: Update a task
- DELETE /tasks/{task_gid} — deleteTask: Delete a task
- POST /tasks/{task_gid}/duplicate — duplicateTask: Duplicate a task
- GET /projects/{project_gid}/tasks — getTasksForProject: Get tasks from a project
- GET /sections/{section_gid}/tasks — getTasksForSection: Get tasks from a section
- GET /tags/{tag_gid}/tasks — getTasksForTag: Get tasks from a tag
- GET /user_task_lists/{user_task_list_gid}/tasks — getTasksForUserTaskList: Get tasks from a user task list
- GET /tasks/{task_gid}/subtasks — getSubtasksForTask: Get subtasks from a task
- POST /tasks/{task_gid}/subtasks — createSubtaskForTask: Create a subtask
- POST /tasks/{task_gid}/setParent — setParentForTask: Set the parent of a task
- GET /tasks/{task_gid}/dependencies — getDependenciesForTask: Get dependencies from a task
- POST /tasks/{task_gid}/addDependencies — addDependenciesForTask: Set dependencies for a task
- POST /tasks/{task_gid}/removeDependencies — removeDependenciesForTask: Unlink dependencies from a task
- GET /tasks/{task_gid}/dependents — getDependentsForTask: Get dependents from a task
- POST /tasks/{task_gid}/addDependents — addDependentsForTask: Set dependents for a task
- POST /tasks/{task_gid}/removeDependents — removeDependentsForTask: Unlink dependents from a task
- POST /tasks/{task_gid}/addProject — addProjectForTask: Add a project to a task
- POST /tasks/{task_gid}/removeProject — removeProjectForTask: Remove a project from a task
- POST /tasks/{task_gid}/addTag — addTagForTask: Add a tag to a task
- POST /tasks/{task_gid}/removeTag — removeTagForTask: Remove a tag from a task
- POST /tasks/{task_gid}/addFollowers — addFollowersForTask: Add followers to a task
- POST /tasks/{task_gid}/removeFollowers — removeFollowerForTask: Remove followers from a task
- GET /workspaces/{workspace_gid}/tasks/custom_id/{custom_id} — getTaskForCustomID: Get a task for a given custom ID
- GET /workspaces/{workspace_gid}/tasks/search — searchTasksForWorkspace: Search tasks in a workspace

## Team memberships
- GET /team_memberships/{team_membership_gid} — getTeamMembership: Get a team membership
- GET /team_memberships — getTeamMemberships: Get team memberships
- GET /teams/{team_gid}/team_memberships — getTeamMembershipsForTeam: Get memberships from a team
- GET /users/{user_gid}/team_memberships — getTeamMembershipsForUser: Get memberships from a user

## Teams
- POST /teams — createTeam: Create a team
- GET /teams/{team_gid} — getTeam: Get a team
- PUT /teams/{team_gid} — updateTeam: Update a team
- GET /workspaces/{workspace_gid}/teams — getTeamsForWorkspace: Get teams in a workspace
- GET /users/{user_gid}/teams — getTeamsForUser: Get teams for a user
- POST /teams/{team_gid}/addUser — addUserForTeam: Add a user to a team
- POST /teams/{team_gid}/removeUser — removeUserForTeam: Remove a user from a team

## Time periods
- GET /time_periods/{time_period_gid} — getTimePeriod: Get a time period
- GET /time_periods — getTimePeriods: Get time periods

## Time tracking categories
- GET /time_tracking_categories/{time_tracking_category_gid} — getTimeTrackingCategory: Get a time tracking category
- PUT /time_tracking_categories/{time_tracking_category_gid} — updateTimeTrackingCategory: Update a time tracking category
- DELETE /time_tracking_categories/{time_tracking_category_gid} — deleteTimeTrackingCategory: Delete a time tracking category
- GET /time_tracking_categories/{time_tracking_category_gid}/time_tracking_entries — getTimeTrackingEntriesForTimeTrackingCategory: Get time tracking entries for a time tracking category
- GET /time_tracking_categories — getTimeTrackingCategories: Get time tracking categories for a workspace
- POST /time_tracking_categories — createTimeTrackingCategory: Create a time tracking category

## Time tracking entries
- GET /tasks/{task_gid}/time_tracking_entries — getTimeTrackingEntriesForTask: Get time tracking entries for a task
- POST /tasks/{task_gid}/time_tracking_entries — createTimeTrackingEntry: Create a time tracking entry
- GET /time_tracking_entries/{time_tracking_entry_gid} — getTimeTrackingEntry: Get a time tracking entry
- PUT /time_tracking_entries/{time_tracking_entry_gid} — updateTimeTrackingEntry: Update a time tracking entry
- DELETE /time_tracking_entries/{time_tracking_entry_gid} — deleteTimeTrackingEntry: Delete a time tracking entry
- GET /time_tracking_entries — getTimeTrackingEntries: Get multiple time tracking entries

## Timesheet approval statuses
- GET /timesheet_approval_statuses/{timesheet_approval_status_gid} — getTimesheetApprovalStatus: Get a timesheet approval status
- PUT /timesheet_approval_statuses/{timesheet_approval_status_gid} — updateTimesheetApprovalStatus: Update a timesheet approval status
- GET /timesheet_approval_statuses — getTimesheetApprovalStatuses: Get multiple timesheet approval statuses
- POST /timesheet_approval_statuses — createTimesheetApprovalStatus: Create a timesheet approval status

## Typeahead
- GET /workspaces/{workspace_gid}/typeahead — typeaheadForWorkspace: Get objects via typeahead

## User task lists
- GET /user_task_lists/{user_task_list_gid} — getUserTaskList: Get a user task list
- GET /users/{user_gid}/user_task_list — getUserTaskListForUser: Get a user's task list

## Users
- GET /users — getUsers: Get multiple users
- GET /users/{user_gid} — getUser: Get a user
- PUT /users/{user_gid} — updateUser: Update a user
- GET /users/{user_gid}/favorites — getFavoritesForUser: Get a user's favorites
- GET /teams/{team_gid}/users — getUsersForTeam: Get users in a team
- GET /workspaces/{workspace_gid}/users — getUsersForWorkspace: Get users in a workspace or organization
- GET /workspaces/{workspace_gid}/users/{user_gid} — getUserForWorkspace: Get a user in a workspace or organization
- PUT /workspaces/{workspace_gid}/users/{user_gid} — updateUserForWorkspace: Update a user in a workspace or organization

## Webhooks
- GET /webhooks — getWebhooks: Get multiple webhooks
- POST /webhooks — createWebhook: Establish a webhook
- GET /webhooks/{webhook_gid} — getWebhook: Get a webhook
- PUT /webhooks/{webhook_gid} — updateWebhook: Update a webhook
- DELETE /webhooks/{webhook_gid} — deleteWebhook: Delete a webhook

## Workspace memberships
- GET /workspace_memberships/{workspace_membership_gid} — getWorkspaceMembership: Get a workspace membership
- GET /users/{user_gid}/workspace_memberships — getWorkspaceMembershipsForUser: Get workspace memberships for a user
- GET /workspaces/{workspace_gid}/workspace_memberships — getWorkspaceMembershipsForWorkspace: Get the workspace memberships for a workspace

## Workspaces
- GET /workspaces — getWorkspaces: Get multiple workspaces
- GET /workspaces/{workspace_gid} — getWorkspace: Get a workspace
- PUT /workspaces/{workspace_gid} — updateWorkspace: Update a workspace
- POST /workspaces/{workspace_gid}/addUser — addUserForWorkspace: Add a user to a workspace or organization
- POST /workspaces/{workspace_gid}/removeUser — removeUserForWorkspace: Remove a user from a workspace or organization
- GET /workspaces/{workspace_gid}/events — getWorkspaceEvents: Get workspace events
