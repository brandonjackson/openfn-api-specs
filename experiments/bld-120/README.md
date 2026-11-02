# BLD-120: verify AI-generated code against the API specs

Linear: https://linear.app/openfn/issue/BLD-120

Goal: estimate what share of AI-generated job code is valid against the APIs it
calls, so adaptor-docs work can be prioritised.

Status: work in progress. The prompt sampler is drafted; the plausibility
filter, Apollo runner and mocker-driven checker are next.

## Pipeline

1. `sample-prompts.ts` samples "get X from A, modify it, post it to B as peer Y"
   prompts from `experiments/data-mapping-analysis/entities_final.json`,
   restricted to adaptors openfn-mocker serves, stratified by concept and
   shuffled, so any prefix is a fair pilot. Each line of `prompts.jsonl` carries
   the ground truth (source/target adaptor, entity, native term, confidence).
2. Runner (todo): send each prompt to Apollo `global_chat`, save the workflow.
3. Checker (todo): run each step with `@openfn/cli` against openfn-mocker,
   capture the HTTP exchanges, and judge them with `createConformer` against the
   full `openapi.json` (not against the mock's own routes).

```bash
npx tsx experiments/bld-120/sample-prompts.ts --n=1000 --seed=120 \
  --mocker=../openfn-mocker > experiments/bld-120/prompts.jsonl
```

## Known issue with the draft prompts

Concept-level pairing is too coarse on its own: roughly a third of sampled
pairs are a mapping a real implementer would build (dhis2 sms -> FHIR
CommunicationRequest), and the rest are not (Asana time-tracking category ->
Mailchimp interest category). A plausibility filter is needed before the set
is used.
