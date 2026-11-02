# BLD-120 results

10 prompts checked; 7 judged. Left out: 2 where the run failed before any job code ran (adaptor install or environment), 1 where the source read was valid but the mock had no records to return. Each rate reads "pass rate over all prompts (pass rate where the check could be measured, of how many)".

## Headline

| | |
|---|---|
| Workflow generated | 100% |
| Uses both expected adaptors | 100% |
| Ran to completion against the mocks | 14% |
| **All four checks pass** | **0%** |
| Ran clean (completed, no check failed) | 14% |
| Valid endpoint on A | 86% (86% of 7) |
| Understands object A | 0% (0% of 1) |
| Understands peer object B | 14% (100% of 1) |
| Valid endpoint on B | 14% (100% of 1) |

"Understands object A" could not be measured for 5 prompts whose read was valid, usually because A's spec gives that operation no response schema. That is itself a docs gap.

## Rates by confidence

| confidence | n | all four | Valid endpoint on A | Understands object A | Understands peer object B | Valid endpoint on B |
|---|---|---|---|---|---|---|
| 3 | 6 | 0% | 83% (83% of 6) | 0% (0% of 1) | 0% (n/a of 0) | 0% (n/a of 0) |
| 2 | 1 | 0% | 100% (100% of 1) | 0% (n/a of 0) | 100% (100% of 1) | 100% (100% of 1) |

## Rates by peer type

| peer type | n | all four | Valid endpoint on A | Understands object A | Understands peer object B | Valid endpoint on B |
|---|---|---|---|---|---|---|

## Rates by source adaptor

| source adaptor | n | all four | Valid endpoint on A | Understands object A | Understands peer object B | Valid endpoint on B |
|---|---|---|---|---|---|---|

## Rates by target adaptor

| target adaptor | n | all four | Valid endpoint on A | Understands object A | Understands peer object B | Valid endpoint on B |
|---|---|---|---|---|---|---|

## Why runs failed

| reason | count |
|---|---|
| calls a function the adaptor does not have | 3 |
| called an adaptor function with the wrong arguments | 1 |
| read source data in a shape it does not have | 1 |
| API rejected a request | 1 |

## Most common violations

| system: kind | count |
|---|---|
| asana: unknown-operation | 1 |

