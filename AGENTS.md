# AGENTS.md — maintenance loop for openfn-api-specs

This repo is a **tracked, full-coverage copy of the external API surface every
OpenFn adaptor can reach**. It is maintained by an agent (or a human) running the
loop described here. The human-facing overview is in `README.md`; this file is
the operating manual for keeping the copy correct and current.

## Why full coverage (read this first)

Every adaptor inherits generic builders — `get()`, `post()`, `request()`, etc. —
so a workflow can call **any** endpoint of the vendor's API, not just the
adaptor's named operations. Therefore:

- **`openapi.json` must describe the whole vendor API**, not a hand-picked slice.
- A narrowed view is legitimate **only when derived from a full source of truth**
  — never hand-authored on its own. The full spec stays the source of truth.
- Where a full machine spec exists upstream, we **commit it verbatim** as
  `upstream.<ext>` (`upstream.json`, or `upstream.yaml` for a YAML spec — kept
  byte-for-byte) and treat it as ground truth. It is **never edited**. If a content
  change is ever unavoidable (e.g. redacting an example value that trips secret
  scanning), it is the smallest possible change, recorded in `source.json`'s
  `modifications[]`, and logged — never silent. `pnpm test` re-hashes the committed
  upstream against `upstream.contentHash`, so a later edit can't slip in unnoticed.

"Full" means different things by origin, and provenance must say which:

| situation | source of truth | what "full" means | completeness |
| --------- | --------------- | ----------------- | ------------ |
| vendor OpenAPI, saved verbatim (`found-openapi`) | the upstream spec (`upstream.json`) | the vendor's own complete spec — the gold standard | `complete` (by definition; needs no separate claim) |
| other machine spec, converted (Swagger/Discovery/GraphQL/CSDL) | the upstream spec (`upstream.json`) | the entire documented API, once the conversion covers it | `complete` when declared (conversion can lose fidelity) |
| docs only, no machine spec | the vendor docs | the entire *documented* API, best-effort | `best-effort` |
| non-REST (SQL/Redis/SFTP/…) | the adaptor's operation surface | every operation the adaptor exposes | `complete` (bounded surface) |
| private / undocumented API | reverse-engineered from adaptor source + mocks | as much as can be recovered | `best-effort` |

A vendor-provided OpenAPI is the authoritative baseline, so `found-openapi` is
treated as `complete` without a separate claim. Authority still decays: a
`complete` spec is re-checked against `upstream.contentHash` and ages into
`stale`, and an explicit `coverage: subset` in `source.json` always overrides
the default (e.g. if we knowingly ship a narrowed view).

## The environment (what we track)

1. **The adaptor list** — `openfn/adaptors` `packages/*`. Adaptors are added and
   removed; the cached list is `_adaptors.json` (refresh with `pnpm specs list --refresh`).
2. **Each vendor's API surface** — which itself drifts as vendors ship changes.

Both axes move. The loop's job is to keep our copy converged on both.

## Layout

```
specs/adaptors/<adaptor>/
  upstream.json      verbatim upstream machine spec, exactly as fetched (source of
                     truth). Present when origin is found-openapi or converted.
  openapi.json       full-coverage OpenAPI 3.x we serve. Equals upstream normalised
                     to 3.x, the conversion of upstream, or authored from docs/surface.
  source.json        provenance (schema below)
  data-schemas/      JSON Schema per data object, derived from openapi.json + index.json
```

**Invariant:** `openapi.json` is full coverage. Any subset is derived from it and
`upstream.json`/`openapi.json` remain authoritative.

## Provenance — `source.json`

```jsonc
{
  "adaptor": "stripe",
  "npm": "@openfn/language-stripe",

  "origin": "found-openapi",        // found-openapi | converted | generated | synthesized
  "upstreamFormat": "openapi-3.1",  // openapi-3.1 | swagger-2.0 | google-discovery | csdl | graphql-sdl | docs | adaptor-surface

  "coverage": "full",               // full | subset
  "derivedFrom": null,              // when coverage=subset: the full artifact it was derived from (e.g. "upstream.json")

  "completeness": "complete",       // complete | best-effort
  "completenessReason": null,       // required when best-effort: docs-only | private-api | partial-docs | ...

  "upstream": {                     // present when a machine spec exists (found-openapi | converted)
    "specUrl": "https://…/openapi.json",
    "format": "openapi-3.1",
    "contentHash": "sha256:…",      // hash of upstream.json as fetched — drift detector
    "fetchedAt": "2026-07-06"
  },

  "attempts": [                     // the finding-step decision trail (why we landed where we did)
    { "kind": "openapi", "url": "https://…", "result": "used" },
    { "kind": "postman", "url": "https://…", "result": "not-found", "note": "no public workspace" }
  ],
  "verifiedAgainst": ["ast.json"],  // what the surface was cross-checked against

  "modifications": [],              // content edits forced onto a verbatim upstream —
                                    // MUST be empty for a clean copy; each entry is a
                                    // loud, reviewable exception (e.g. a redacted example)

  "sources": ["https://…"],         // URLs consulted
  "capturedAt": "2026-07-06",       // when this spec content was produced
  "lastCheckedAt": "2026-07-06",    // when we last verified against upstream (staleness clock)
  "notes": "…"
}
```

`attempts[].result` is one of `used | not-found | rejected`. Logging the misses
is what makes `generated`/`best-effort` trustworthy rather than lazy: it shows the
machine-spec hunting grounds were actually checked and came up empty.

## Feedback — `pnpm specs report`

Every adaptor lands in exactly one bucket:

- **ok** — full coverage, completeness acknowledged, validates, checked recently.
- **new** — present in `openfn/adaptors`, no directory here yet.
- **missing** — directory exists but no `openapi.json` or no `source.json`.
- **stale** — `lastCheckedAt` older than the threshold (default 90 days); not
  re-verified against upstream recently.
- **incomplete** — `coverage ≠ full`, or `completeness = best-effort`
  (knowingly partial: docs-only / private API). Surfaced, not hidden.
- **at-risk** — `upstream.contentHash` differs on re-fetch (the API moved under
  us), or `upstream.specUrl` no longer resolves.
- **wrong** — fails validation: invalid OpenAPI, data-schema drift, dangling
  `$ref`, or malformed provenance.

These same buckets, plus each adaptor's quality tier, freshness and notes, are
published as a static dashboard by `pnpm specs site` (a self-contained
`site/index.html`). The `Deploy status dashboard` GitHub Action rebuilds it on
every push to `main` and weekly, so the staleness clock re-evaluates over time.

## The loop (the agentic process)

1. **Refresh the environment.** `pnpm specs list --refresh`; diff against
   `_adaptors.json` to find added/removed adaptors.
2. **Get feedback.** `pnpm specs report` to bucket every adaptor.
3. **Pick work**, in priority order: `wrong` → `at-risk` → `missing`/`new` →
   `incomplete` → `stale`.
4. **Do the finding step.** `pnpm specs instructions <adaptor>` emits a precise
   work order. Execute it — this is the agentic part, deliberately not a scraper:
   - Prefer a machine spec. `pnpm specs convert <adaptor> --url=<specUrl>` does
     the capture: it recognises OpenAPI 3.x (JSON or YAML), Swagger 2.0 and
     Google Discovery, writes the fetched bytes verbatim to `upstream.<ext>`,
     derives the full `openapi.json`, and records `origin`, `upstreamFormat` and
     `upstream.*` (incl. `contentHash`). Then verify the coverage yourself and
     claim `coverage: full` / `completeness: complete` (`--complete` writes both).
   - No machine spec → author the full documented API from vendor docs.
     `completeness: best-effort` with a reason.
   - Non-REST → synthesize the full operation surface from the adaptor.
   - Record every `attempt` (including the misses) and `verifiedAgainst`.
   The standard procedure for this step — spec hunting, docs scraping, the
   OpenAPI house rules, and the cross-reference pass — is the
   [`api-spec-ingestion` skill](./.claude/skills/api-spec-ingestion/SKILL.md).

   The `coverage`/`completeness` claim is always the agent's, never the tool's: a
   fetch can prove what a document contains, not that the document covers the
   vendor's whole API. Where it doesn't, say so — a third-party rendering that
   lags the vendor, or an RPC surface that can't be enumerated, is
   `best-effort` with a reason, and stays visible in the report.
5. **Derive.** `pnpm specs data-objects <adaptor>` regenerates the data-schemas.
6. **Validate.** `pnpm test` (drift, dangling refs, provenance, OpenAPI shape).
   Fix and repeat until green.
7. **Log + commit.** Append maintenance-log entries (below) and commit. Git is
   the primary version/timestamp record; the log is the human-readable narrative.
8. **Rebuild the index.** `pnpm specs manifest`.

## Audit log — `specs/adaptors/maintenance-log.jsonl`

Append-only JSON Lines. **Write an entry only when something actually happened** —
a scrape/check was performed, a problem was detected, or a fix was applied. Never
log a clean no-op run (git already shows "nothing changed").

```jsonc
{ "ts": "2026-07-06T09:27:29Z", "adaptor": "stripe", "event": "upstream-changed",
  "detail": "contentHash changed since 2026-04-01", "from": "sha256:aaa", "to": "sha256:bbb", "by": "agent" }
```

`event` ∈ `scraped | checked | new | missing | stale | drift | upstream-changed | incomplete | fixed | error`.
Keep `detail` short; use `from`/`to` for before→after values. `by` is `agent` or `cli`.

## Invariants (enforced by `pnpm test` in CI)

- Every `openapi.json` is valid OpenAPI 3.x with `info.title` and `paths`.
- Every committed data-schema equals a fresh extraction (no drift).
- Every sibling `$ref` resolves; every data-object declares the 2020-12 dialect.
- `source.json` provenance is well-formed (origin in the enum, non-empty
  `sources`, `capturedAt`/`lastCheckedAt` are ISO dates).
- A `full`/`complete` claim must not silently regress — see the coverage checks.
