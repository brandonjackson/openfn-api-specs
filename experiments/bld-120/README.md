# BLD-120: verify AI-generated code against the API specs

Linear: https://linear.app/openfn/issue/BLD-120

**Goal:** estimate what share of the AI assistant's job code is valid against
the APIs it calls, so adaptor-docs work can be prioritised where it matters.

**Status:** the harness is built and proven on hand-written fixtures. The
1,000 prompts are ready. The Apollo generation run has not happened yet: it
needs an Apollo URL and key.

## Pipeline

| Step | Script | In | Out |
|---|---|---|---|
| 1. Sample prompts | `sample-prompts.ts` | data-mapping analysis + peer judgments | `prompts.jsonl` |
| 2. Generate | `run-apollo.ts` | `prompts.jsonl` | `generations/<id>.json` |
| 3. Check | `check.ts` | generations + openfn-mocker | `results.jsonl` |
| 4. Report | `report.ts` | `results.jsonl` | `REPORT.md` |

```bash
# 2. generation (resumable; run a 50-prompt pilot first)
APOLLO_URL=https://<apollo> APOLLO_API_KEY=<key> \
  npx tsx experiments/bld-120/run-apollo.ts --limit=50 --concurrency=4

# 3. checking (needs `npm i -g @openfn/cli`, a clone of openfn-mocker with
#    `pnpm install` run, and root for the systems that need host aliasing)
MOCKER_DIR=../openfn-mocker npx tsx experiments/bld-120/check.ts

# 4. report
npx tsx experiments/bld-120/report.ts > experiments/bld-120/REPORT.md
```

## The prompts

Pattern, from the ticket: *get object X from system A, modify it, post it to
system B as its peer object Y.* For example, "Get the latest patient from
mSupply, set its dateOfBirth to today's date, and upload it as a patient to
SatuSehat Platform."

- **Where pairs come from.** `experiments/data-mapping-analysis/entities_final.json`
  (a readable entity in A, a writable entity of the same concept in B, A ≠ B),
  limited to adaptors openfn-mocker can serve.
- **Peer filter.** Matching on concept alone was too loose: about two thirds
  of the pairs weren't mappings anyone would build (an Asana time-tracking
  category to a Mailchimp interest category). So the entities in 17
  record-like concepts were judged one by one (`peer-judging/`, rubric in
  `RUBRIC.md`) for whether each is a core record an integration would sync,
  and for its specific peer type (invoice vs payment, sms vs email). A pair
  counts only when both sides are core records of the same type. That leaves
  887 system-level pairs, down from 3,500, all covered by the 1,000 prompts.
- **Sampling.** Stratified by peer type in proportion to how many pairs each
  type has (person 35%, user account 18%, product 10%, ...), then shuffled, so
  any prefix is a fair pilot. Every prompt text is distinct, because a repeat
  would be a wasted generation. Seeded (`--seed=120`), so it's reproducible.
- **The "modify" step.** It is taken from the source object's own spec
  fields: a date field set to today when there is one (the ticket's birthday
  example), else a name/description field. 224 prompts have no suitable field
  and ask for a straight pass-through.
- **Ground truth.** Each prompt line carries the expected source and target
  adaptor, entity, native term, and the analysis' 1-5 confidence rating.

## How the checker judges

Each generated workflow is run whole through the real `@openfn/cli`, with the
real published adaptors, against openfn-mocker. Every system gets its own
mock and a credential pointing at it. The captured HTTP traffic is then judged
by `createConformer` against this repo's full `openapi.json`. The mock's own
404s are not the verdict, because its routes are hand-written and narrower
than the spec.

| Ticket check | How it's measured |
|---|---|
| Requests data from a valid endpoint on A | every request to A matches an operation in A's spec |
| Understands object A | every step after the first is wrapped so that reads of fields the incoming data lacks are recorded; each is judged against the response schema of A's last read. It fails only if the schema positively rules the field out, so reading an optional field the schema declares is fine |
| Understands peer object B | every body sent to B passes B's request schema |
| Posts to a valid endpoint on B | B received a write, and every request to B matches B's spec |

A check is "not measured" when the run never reached it, for example when
the read failed so B was never called. `report.ts` gives every rate both over
all prompts (not measured = fail) and over measured prompts only.

**Proof.** `fixtures/` holds a FHIR → OpenMRS patient workflow, once correct
and four times broken (one check each). The checker flags exactly the broken
check in all five:

```bash
npx tsx experiments/bld-120/check.ts --prompts=experiments/bld-120/fixtures/prompts.jsonl \
  --generations=experiments/bld-120/fixtures/generations --out=/tmp/fx.jsonl
```

## Things the results will need to separate out

The checker measures code against **our specs**, so a spec that is wrong or
empty shows up as a code failure or as "not measurable". Two already seen:

- **DHIS2:** `GET /api/tracker/trackedEntities` has an empty response schema,
  so "understands object A" can't be measured when DHIS2 tracked entities
  are the source.
- **OpenMRS:** the spec types `PatientCreate.person` as a UUID string, but
  real OpenMRS, and the mocker's own usage example, accept a nested person
  object. Realistic code fails the body check on spec strictness.

Both are worth fixing in the specs, and both are part of the answer the ticket
is after: where weak docs hurt. The report's by-adaptor tables are where they
will surface.

## openfn-mocker fix this depends on

The mocker's `scripts/lib/host-alias-proxy.ts` uses `127.0.0.1` as the base
domain for host-derived adaptors. OpenCRVS then builds
`https://auth.127.0.0.1:<port>`, which Node rejects as an invalid URL,
because a host whose last label is numeric parses as IPv4. So every OpenCRVS
usage example fails. `check.ts` carries its own alias proxy that uses
`<system>.mock.test` instead. The same change belongs upstream in the mocker.
