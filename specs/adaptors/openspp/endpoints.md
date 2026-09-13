# OpenSPP API (synthesized from adaptor surface) (openspp) v1.0.0

<!-- derived from openapi.json by `pnpm specs index openspp` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 21 operations in 6 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## areas
- GET /areas/{spp_id} — getArea: Get area by spp_id (spp.area)
- POST /areas/search — searchArea: Search areas by Odoo domain (spp.area)

## groups
- GET /groups/{spp_id} — getGroup: Get a group registrant by spp_id (res.partner where is_group=true)
- GET /groups/{spp_id}/members — getGroupMembers: List members of a group (g2p.group.membership)
- POST /groups/{spp_id}/members — addToGroup: Add an individual to a group with a role/kind (g2p.group.membership)
- DELETE /groups/{group_id}/members/{individual_id} — removeFromGroup: Remove an individual from a group (ends the g2p.group.membership)
- POST /groups/search — searchGroup: Search group registrants by Odoo domain (res.partner where is_group=true)
- GET /groups — listGroups: List group registrants (res.partner where is_group=true)
- POST /groups — createGroup: Create a new group registrant (res.partner create)
- PATCH /groups/{group_id} — updateGroup: Update a group registrant (res.partner write)

## individuals
- GET /individuals/{spp_id} — getIndividual: Get an individual registrant by spp_id (res.partner where is_group=false)
- POST /individuals/search — searchIndividual: Search individual registrants by Odoo domain (res.partner where is_group=false)
- POST /individuals — createIndividual: Create a new individual registrant (res.partner create)
- PATCH /individuals/{individual_id} — updateIndividual: Update an individual registrant (res.partner write)

## programs
- GET /programs — getPrograms: List programs (g2p.program)
- GET /programs/{program_id} — getProgram: Get a program by program_id (g2p.program)

## registrants
- GET /registrants/{spp_id}/programs — getEnrolledPrograms: List programs a registrant is enrolled in (g2p.program_membership -> g2p.program)
- POST /registrants/{spp_id}/programs/{program_id}/enroll — enroll: Enroll a registrant into a program (g2p.program_membership state=enrolled)
- POST /registrants/{spp_id}/programs/{program_id}/unenroll — unenroll: Unenroll a registrant from a program (g2p.program_membership state=not_eligible)

## service-points
- GET /service-points/{spp_id} — getServicePoint: Get service point(s) by spp_id (spp.service.point)
- POST /service-points/search — searchServicePoint: Search service points by Odoo domain (spp.service.point)
