# Mapping-inventory taxonomy (fixed in advance; do not invent codes)

Unit of analysis = one "entity" = a named schema (or titled inline schema, prefixed `~`) that an adaptor's openapi.json uses
as the (unwrapped) request body (W = writable, a mapping TARGET) or 2xx response (R = readable, a mapping SOURCE) of some operation.
A "mapping step" = SOURCE entity in adaptor A -> TARGET entity in adaptor B (A != B) of the same CONCEPT.

## 1. ROLE (exactly one per entity)
- ENTITY      a standalone business/domain object with its own identity that a data integration would move (patient, invoice, SMS, product).
- COMPONENT   a reusable embedded part with no identity of its own (address, human name, identifier, coding, money, period).
- WRAPPER     request/response/envelope/list/pagination/error/options/params/filter/sort/search-criteria/bulk-request types.
- OPERATIONAL system/admin/auth/job/config/health/webhook/permission/audit/AI-model plumbing: real objects but not domain data to map between systems.

Only ENTITY rows get a CONCEPT. All others use concept `-`.

## 2. CONCEPT (exactly one per ENTITY; pick the closest; "family" = the concept, `native` = the vendor's own word)
PERSON       natural person as record subject: patient, citizen, client, beneficiary, individual, member, contact, subscriber, customer-as-individual, respondent, tracked-entity(person)
STAFF_USER   system user / practitioner / health worker / employee / provider / agent / role-holder
ORG          organization / facility / clinic / company / partner / supplier / customer-as-company / org unit / account-as-organisation
LOCATION     place / geography / address-as-record / admin area / site / warehouse / store / village / bed / point
GROUP        household / family / community / team / cohort / audience / mailing list / segment
CASE         case / enrollment / episode / registration / program-enrolment / tracked-entity-instance / referral
ENCOUNTER    visit / encounter / appointment / consultation / event / activity / session / call
OBSERVATION  observation / measurement / vital / lab result / test result / data value / indicator value / survey answer
CONDITION    diagnosis / problem / condition / allergy / symptom / risk
IMMUNIZATION vaccination / immunization / vaccine certificate / dose
MEDICATION   prescription / medication request / dispense / administration / regimen
LAB_ORDER    lab order / test request / specimen / sample / accession
PRODUCT      product / item / drug catalogue entry / SKU / stock item definition / asset / equipment
INVENTORY    stock level / batch / lot / stock line / stock movement / adjustment
ORDER        purchase/sales order / requisition / shipment / transfer / delivery / line items
FINANCE_TX   invoice / bill / payment / charge / refund / payout / transaction / subscription / price / balance entry
FINANCE_ACCT bank/wallet/billing account / customer billing profile / balance / payment method
MESSAGE      SMS / email / WhatsApp / chat message / notification / voice call / conversation thread
CAMPAIGN     campaign / broadcast / automation / journey / template / audience-send
FILE         file / document / attachment / blob / object / image / media
FORM         form or survey DEFINITION / questionnaire / data element / field definition / metadata schema / dataset definition
SUBMISSION   a filled-in form / survey response / data entry / dynamic-shape record
CODELIST     terminology / code system / value set / concept dictionary / option set / mapping / reference data
PROGRAM      program / project / study / workflow / care pathway / scheme / grant
TASK         task / ticket / issue / work order / to-do / alert / approval
NOTE         note / comment / annotation / history / audit trail entry
CIVIL_EVENT  birth / death / marriage / divorce registration / civil record
CREDENTIAL   ID document / certificate / credential / license / verifiable credential
CLAIM        insurance claim / policy / entitlement / benefit / coverage / eligibility
REPORT       report / dashboard / chart / indicator definition / aggregate / analytics result / query result
CALENDAR     calendar / meeting / schedule / shift
GENERIC_REC  schemaless generic record/row/document/key-value (SQL rows, Mongo docs, Redis keys, generic REST resource)
OTHER        a real domain object that fits nothing above (put the concept word in native)

## 3. CONFIDENCE (Likert 1-5): "how confident would I be performing this mapping using the OpenAPI spec ALONE"
Give conf_r (as SOURCE; read side) and conf_w (as TARGET; write side). Use `-` where that direction does not exist for the entity.
5 Extremely  All fields typed and described, enums explained, required/readOnly clear, identity & relations obvious. Could write the mapping with no questions.
4 Very       Typed and mostly described; small semantic gaps (a few unexplained enums/fields) resolvable with common domain knowledge.
3 Moderately Structure is clear but descriptions are sparse/absent or semantics need domain assumptions; I could draft a mapping but would want a sample payload to validate.
2 Slightly   Thin, partially opaque, or heavily dependent on conventions not in the spec; mostly guessing; needs docs or live data.
1 Not at all Effectively no usable field-level schema (free-form, dynamic per tenant/form, stub, or placeholder).
Calibration hints: desc%<20 and enums unexplained caps at 3; props<=3 caps at 2; free-form/dynamic = 1; provenance origin=generated/synthesized caps at 3 (spec itself may be reconstructed), unless fields are richly described.
Judge the spec as given, not your outside knowledge of the vendor.

## 4. ISSUE codes (zero or more per entity; comma-separated; closed list)
Spec-quality
 S-THIN       <=3 meaningful fields, stub or placeholder schema
 S-OPAQUE     free-form object / additionalProperties / untyped blob / custom-field bag
 S-UNDESCRIBED fields (or enum values) lack descriptions so meaning must be guessed
 S-RWDIVERGE  read and write shapes differ or readOnly/writeOnly not marked, so round-tripping is unclear
 S-RECONSTRUCTED spec is generated/synthesized/best-effort, so field list may be incomplete or invented
Mapping-semantics
 M-CODELIST   coded/enum values (gender, status, type...) need a terminology crosswalk not given in the spec
 M-IDENTITY   id/key strategy unclear: which id, external ids, uniqueness, upsert/match key
 M-RELATION   references other entities by id/uuid/ref; needs lookup or load-ordering
 M-SHAPE      nested/array/multi-valued/polymorphic structure likely differs from the counterpart
 M-GRAIN      cardinality/granularity mismatch likely (1:n split, n:1 merge, header+lines)
 M-FORMAT     dates/times/units/phone/currency/locale formats unspecified or non-standard
 M-SENSITIVE  contains PII or health/financial data needing consent/masking decisions
 M-LOSSY      target-side fields likely have no home / source-side fields no counterpart
Behaviour
 B-WRITERULES required fields, validation, defaults or side-effects on write are not documented
 B-ASYNCBULK  write is batch/async/job-based so success is not immediate or per-record
 B-ONEWAY     entity only readable or only writable here (cannot be both source and target)
 B-DYNAMIC    shape varies per tenant/form/program/instance (custom fields, user-defined metadata)
