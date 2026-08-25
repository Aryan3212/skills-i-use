---
name: to-spec
description: Use when confirmed feature or module intent must become a concise, durable document before implementation.
---

# To Spec

Turn confirmed intent and relevant repository evidence into one requested durable feature or module document. Do not create separate context or ADR documents for ordinary work.

Synthesize what is already known; do not restart the interview or create unrelated documents. If an unresolved point would materially affect behavior, scope, or a technical boundary, surface it clearly and hand off to `$grill` only if the human wants to resolve it.

## Locate the document

First inspect the repository's existing documentation and local conventions.

- Update an existing document that already owns the feature or module.
- Use a colocated `README.md` when the document explains a directory or module as a whole.
- Use a colocated `<feature-name>.md` when one feature needs its own product and technical explanation.
- If no suitable document exists, create the smallest one that covers the feature or module, beside the code it explains.

Do not create a separate global documentation tree, ADR, context document, or duplicate document unless the repository already has a clear convention requiring it. Do not make a `README.md` and feature document repeat the same material; link between them where both scopes genuinely exist.

## Ground the document in the codebase

Read the relevant code, tests, configuration, and existing docs before writing. Use the project's vocabulary. Prefer established interfaces and test seams over creating new ones without a reason.

State only decisions that are supported by the confirmed intent or repository evidence. Label assumptions, alternatives intentionally rejected, and unresolved questions rather than presenting them as settled facts.

## Write the smallest complete document

**REQUIRED SUB-SKILL:** Use `$writing` when drafting or revising the reader-facing feature or module document. Follow this skill for its required product and technical content.

Use only the sections that make the feature understandable. A useful default is:

```markdown
# <Feature or Module>

## Purpose
Who or what this serves, the problem it solves, and the intended outcome.

## Behavior
User-visible behavior, important scenarios, acceptance conditions, and explicit non-goals.

## Technical design
Relevant module boundaries, interfaces, data flow, configuration, and decisions that affect future changes.

## Verification
How behavior is tested or otherwise checked, including important edge cases.

## Open questions and constraints
Only remaining decisions, known limits, risks, or required follow-up.
```

Keep requirements observable. Describe external behavior and stable contracts rather than transient file paths or implementation snippets. Include a small decision-rich schema, state shape, or interface only when prose would make the chosen contract ambiguous.

For a large initiative with distinct independently testable capabilities, record only the meaningful capability boundaries and dependency order. Do not turn the document into a task list; task decomposition is a later concern.

## Confirm before implementation

Present the proposed document or material changes for human confirmation. The confirmation must cover the intended behavior, non-goals, major technical decisions, and verification approach.

Once implementation begins, the document remains current behavior documentation. If the implementation changes a decision, interface, scope, or verification approach, update this same document as part of the work. `$implement` is responsible for making that update when it performs the code change.

## Boundaries

- A short, concrete document is better than a comprehensive document that duplicates the code.
- Do not publish to an issue tracker or create tickets as a side effect.
- Do not add requirements, architecture, or future-proof abstractions that were not agreed or evidenced.
- Do not leave product intent in a separate spec while technical behavior lives elsewhere; keep the durable explanation together.
