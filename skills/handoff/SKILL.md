---
name: handoff
description: Use when work will pause, change owners, or continue in a fresh session and needs a concise evidence-backed handoff.
---

# Handoff

Create a compact continuation brief that lets a fresh person or agent resume without rediscovering the work.

**REQUIRED SUB-SKILL:** Use `$writing` when drafting or revising the reader-facing handoff brief. Follow this skill for its required evidence and content.

Reference existing documents, tasks, diffs, commits, commands, and research rather than duplicating them. Redact secrets, credentials, personal data, and sensitive captured output.

Include only what materially affects the next step:

- current objective and status;
- completed work and where its evidence lives;
- decisions, constraints, and assumptions that remain in force;
- uncompleted work, blockers, and risks;
- exact next actions and the skills likely to help;
- verification already run and what still needs to run.

Write the handoff in the response by default. Save an ephemeral handoff file only when the human asks for one; do not add it to the repository unless it is genuinely durable project documentation.

## Boundaries

- Do not repeat the full spec, task list, or diff.
- Do not claim that an unverified step is complete.
- Do not preserve credentials or tokens in a handoff.
