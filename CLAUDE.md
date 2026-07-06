# CLAUDE.md

This repo is maintained by an agent-run loop. The operating manual — the
environment, the goal, the layout, the provenance schema, the feedback buckets,
and the audit log — is in **[AGENTS.md](./AGENTS.md)**. Read it before doing
maintenance work.

Quick reference:

- `pnpm specs report` — what's new / missing / stale / incomplete / wrong.
- `pnpm specs instructions <adaptor>` — the per-adaptor work order (agentic finding step).
- `pnpm specs data-objects <adaptor>` — derive data-schemas from openapi.json.
- `pnpm specs manifest` — rebuild the aggregate index.
- `pnpm test` — enforce the invariants (drift, dangling refs, provenance, OpenAPI shape).
