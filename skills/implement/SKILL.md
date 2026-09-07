---
name: implement
description: Use when an approved implementation task has clear scope and acceptance conditions.
---

# Implement

Implement one approved ticket at a time, or a manageable approved spec directly when the human chooses. Read the ticket and its parent spec (`specs/<spec-name>/spec.md`), applicable project instructions, existing code and tests, and relevant system documentation before editing. For source documentation, read the directory README; if absent, use the nearest ancestor README within the repository. Respect applicable broader constraints; source-file pointers are not required.

Work synchronously through implementation, human review, and authorized shipping before starting another ticket. Do not parallelize or automatically advance unless the human changes this workflow. Make routine implementation choices within approved scope; the human decides material changes to behavior, scope, major design decisions, verification approach, or ticket order. After approval, update the active spec and affected tickets as well as the implementation.

## Make the smallest complete change

Reuse existing patterns, platform capabilities, and dependencies. Preserve scope; record unrelated opportunities instead of repairing them opportunistically. Keep the system valid between increments and do not leave broken tests, incomplete migrations, or hidden unfinished behavior without explicit direction.

For behavioral coding work, invoke `$tdd` by default before implementation. Do not ask whether to use TDD merely because tests were mentioned: use it unless the human explicitly opts out. Its purely mechanical, no-new-observable-behavior exception remains available. For a non-code task, use the proportionate verification the task requires.

## Get help only when it matters

For a non-trivial change, identify whether unfamiliar or high-risk work needs focused guidance beyond repository rules: for example a new backend interface, database migration, authentication boundary, deployment change, performance work, or unfamiliar tooling. When that would materially improve correctness or safety, tell the human the one capability needed and why. Do not install or invoke specialist skills, browse a catalogue, or load unrelated context automatically. Continue on available evidence unless missing guidance or authority makes safe work impossible; state any material coverage gap.

## Keep durable docs current

With each delivered increment, update the existing owning documentation, or create a colocated README or feature document when needed. Describe the actual system for developers and end users: purpose, business rules, vocabulary, usage, configuration, contracts, limitations, verification, and lasting decisions with their reasons. Keep plans, tickets, and pending behavior in `specs/`; documentation must stand on its own. Do not create docs for trivial edits or copy the whole spec. Split docs by distinct audience, responsibility, or reason to change, not arbitrary length.

Before closing the work, transfer lasting knowledge from the spec into system documentation. After delivery and human acceptance, mark applicable tickets and the fully delivered spec completed and retain them as history; do not maintain completed specs as current documentation.

## Gather evidence and finish

Run relevant focused tests and repository checks as changes are made. Record commands and results, including checks that could not run and why; never claim completion from an unexecuted command. Include the ticket and spec references in the review handoff. Do not commit, publish, deploy, or expand scope unless requested; spec or ticket approval alone does not authorize shipping.

## Boundaries

- Fix root causes, not symptoms.
- Do not add speculative behavior, abstractions, or dependencies.
- Return to the human when the approved behavior must change.
