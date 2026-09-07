---
name: to-spec
description: Use when confirmed feature or module intent must become an approved spec before implementation.
---

# To Spec

Turn confirmed intent and relevant repository evidence into one spec describing the approved change. Do not create separate context or ADR documents for ordinary work.

Synthesize what is already known; do not restart the interview or create unrelated documents. If an unresolved point would materially affect behavior, scope, or a technical boundary, surface it clearly and hand off to `$grill` only if the human wants to resolve it.

## Locate the document

Use `specs/<spec-name>/<spec-name>.md`, with any tickets under `specs/<spec-name>/tickets/`, unless the human specifies another location. Update the active spec for this change when one exists. Keep planning separate from source READMEs and other documentation of the delivered system.

## Ground the document in the codebase

Read the relevant code, tests, configuration, and existing docs before writing. Use the project's vocabulary. Prefer established interfaces and test seams over creating new ones without a reason.

State only decisions supported by confirmed intent or repository evidence. Preserve consequential decisions, their reasons, assumptions, and alternatives likely to be proposed again; state what would justify reconsidering them. Label unresolved questions rather than presenting them as settled facts.

## Write the smallest complete document

**REQUIRED SUB-SKILL:** Use `$writing` when drafting or revising the reader-facing spec. Follow this skill for its required product and technical content.

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

During implementation, obtain human approval for material changes to behavior, scope, major technical decisions, or verification approach, then update this spec and affected tickets. Do not silently rewrite approved intent to match the code. After delivery and human acceptance, mark the spec completed and retain it as history; current system documentation evolves separately.

## Boundaries

- A short, concrete document is better than a comprehensive document that duplicates the code.
- Do not publish to an issue tracker or create tickets as a side effect.
- Do not add requirements, architecture, or future-proof abstractions that were not agreed or evidenced.
- Keep product and technical intent together in the spec. `$implement` carries lasting knowledge into separate system documentation with each delivered increment.

## Vocabulary

Maintain very strict vocabulary for the spec as well as the code, especially don't use jargon. Use words that tightly contains the meaning without ambiguity and make sure to use that consistently and document it's usage so that it's clear to anyone reading the spec.
