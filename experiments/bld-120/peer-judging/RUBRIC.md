# Peer-object judging rubric (BLD-120)

Each row is a data object from one adaptor's OpenAPI spec, already classified
into a concept by the data-mapping analysis. We want to keep only the objects
that could be one side of a realistic "get X from system A, modify it, post it
to system B as its peer" integration.

For every row output one TSV line: `id<TAB>core<TAB>peer_type<TAB>reason`

- `core`: `yes` if this is a primary business record of its kind that an
  implementer would plausibly read from or write to as the main payload of a
  sync (a patient, an invoice, an SMS, a facility, a stock line). `no` for
  peripheral, configuration, derived or sub-objects (a shipping rate, a tax
  setting, a price tier, a time-tracking category, an identity-provider config,
  a "who viewed this" record, a request wrapper the analysis misfiled, an
  object with an unresolved/empty schema whose name gives no clear meaning).
  When unsure, say `no`: a false keep costs more than a false drop.
- `peer_type`: exactly one value from the concept's list below (use `none` when
  core is `no`, or when the object is core but fits none of the listed types).
  Two objects are peers only if they share concept AND peer_type, so pick the
  type a real integration would match on.
- `reason`: at most 12 words.

| concept | allowed peer_type values |
|---|---|
| PERSON | person (patient, client, beneficiary, contact, individual, member, citizen) |
| STAFF_USER | user_account, health_worker |
| ORG | facility, organisation |
| LOCATION | admin_area, site |
| ENCOUNTER | visit, appointment |
| OBSERVATION | clinical_observation, data_value, lab_result |
| CASE | case, enrollment, referral |
| MESSAGE | sms, email, chat_message, notification |
| IMMUNIZATION | immunization |
| MEDICATION | prescription, dispense |
| LAB_ORDER | lab_order, specimen |
| PRODUCT | product |
| INVENTORY | stock_level, stock_movement |
| SUBMISSION | form_submission |
| FINANCE_TX | invoice, payment, refund, subscription, expense |
| CIVIL_EVENT | birth, death, civil_event |
| CONDITION | condition, allergy |

Judge from the native term, field names and your knowledge of the vendor. Do
not invent peer_type values. Output exactly one line per input row, same ids,
no header.
