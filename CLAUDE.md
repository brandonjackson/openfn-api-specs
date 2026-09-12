# CLAUDE.md

This repo is maintained by an agent-run loop. The operating manual — the
environment, the goal, the layout, the provenance schema, the feedback buckets,
and the audit log — is in **[AGENTS.md](./AGENTS.md)**. Read it before doing
maintenance work.

Quick reference:

- `pnpm specs report` — what's new / missing / stale / incomplete / wrong.
- `pnpm specs instructions <adaptor>` — the per-adaptor work order (agentic finding step).
  Execute it with the `api-spec-ingestion` skill (`.claude/skills/api-spec-ingestion/SKILL.md`):
  how to hunt for a machine spec, scrape docs, write the OpenAPI, and cross-reference a spec.
- `pnpm specs convert <adaptor> --url=<specUrl>` — capture an upstream machine spec
  (OpenAPI 3.x / Swagger 2.0 / Google Discovery) verbatim and derive `openapi.json`.
  With no `--url`, re-derives `openapi.json` from the committed upstream.
- `pnpm specs data-objects <adaptor>` — derive data-schemas from openapi.json.
- `pnpm specs manifest` — rebuild the aggregate index.
- `pnpm specs site` — build the static status dashboard (`site/index.html`, published to GitHub Pages).
- `pnpm test` — enforce the invariants (drift, dangling refs, provenance, OpenAPI shape).
