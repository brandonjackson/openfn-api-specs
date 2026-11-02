# Dry run: what a pilot looks like

**Not real Apollo output.** These 10 workflows were hand-written by Claude as
a stand-in for the assistant, for the first 10 pilot prompts: written the way
the assistant plausibly would, from adaptor docs and without checking our
specs. They show the harness end to end on realistic code, including the
failures realistic code produces. The prompts are copied from `prompts.jsonl`
as it stood at the time; the sampler has since been tightened, so the ids
won't line up with the current file.

`make.py` writes `generations/`; `results.jsonl` and `REPORT.md` come from
`check.ts` and `report.ts`.

| id | pair | outcome | whose problem |
|---|---|---|---|
| 0001 | DHIS2 user → OpenMRS user | excluded: the DHIS2 mock returned no users | mock seed data |
| 0002 | Go.Data contact → Mailchimp | read `contact.email`, which Go.Data contacts don't have (it lives under `addresses`); then passed an object where `addMember` wants an array | code: invented field, wrong arguments |
| 0003 | Go.Data case → openIMIS | `http.post`, but the openIMIS adaptor has no `http` | code: function doesn't exist |
| 0004 | FHIR → openIMIS | same | code: function doesn't exist |
| 0005 | CHT report → SatuSehat | ran clean; "understands A" not measurable because CHT's export response has no schema | docs gap |
| 0006 | Go.Data user → CommCare | excluded: adaptor install blocked by this sandbox's network | environment |
| 0007 | CommCare → SurveyCTO | same | environment |
| 0008 | mSupply patient → LAMISPlus | read `data.patients.nodes` from the GraphQL result; mSupply's schema there is free-form, so not measurable | code crash; docs gap |
| 0009 | OpenBoxes → openIMIS | read was valid; write used the missing `http` | code: function doesn't exist |
| 0010 | Asana user → OpenHIM | `request('GET', '/users')`, but Asana's `request` takes the path first, so it called `GET /api/1.0/GET` | code: wrong arguments → invalid endpoint |
