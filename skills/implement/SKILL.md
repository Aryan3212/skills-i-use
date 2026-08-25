---
name: implement
description: Use when an approved implementation task has clear scope and acceptance conditions.
---

# Implement

Implement one approved task at a time. Read the task, applicable project instructions, the owning feature or module document when one exists, and the existing code path before editing.

## Make the smallest complete change

Reuse existing patterns, platform capabilities, and dependencies. Preserve scope; record unrelated opportunities instead of repairing them opportunistically. Keep the system valid between increments and do not leave broken tests, incomplete migrations, or hidden unfinished behavior without explicit direction.

For behavioral coding work, invoke `$tdd` by default before implementation. Do not ask whether to use TDD merely because tests were mentioned: use it unless the human explicitly opts out. Its purely mechanical, no-new-observable-behavior exception remains available. For a non-code task, use the proportionate verification the task requires.

## Get help only when it matters

For a non-trivial change, identify whether unfamiliar or high-risk work needs focused guidance beyond repository rules: for example a new backend interface, database migration, authentication boundary, deployment change, performance work, or unfamiliar tooling. When that would materially improve correctness or safety, tell the human the one capability needed and why. Do not install or invoke specialist skills, browse a catalogue, or load unrelated context automatically. Continue on available evidence unless missing guidance or authority makes safe work impossible; state any material coverage gap.

## Keep durable docs current

Update an existing owning document, or create a colocated durable feature or module document, only when the approved change alters behavior, contracts, operational configuration, or a non-obvious constraint that needs ownership. Do not create documentation for a trivial edit. Describe purpose, important behavior, boundaries, contracts, verification, and durable decisions—not transient paths, code listings, or task checklists.

## Gather evidence and finish

Run relevant focused tests and repository checks as changes are made. Record commands and results, including checks that could not run and why; never claim completion from an unexecuted command. Do not commit, publish, deploy, or expand scope unless requested.

## Boundaries

- Fix root causes, not symptoms.
- Do not add speculative behavior, abstractions, or dependencies.
- Return to the human when the approved behavior must change.
