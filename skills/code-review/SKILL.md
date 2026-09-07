---
name: code-review
description: Use when explicitly requested to assess a completed change for evidence-backed issues.
---

# Code Review

Review is read-only by default. Establish evidence and findings; do not silently rewrite, format, refactor, or otherwise fix the change. Use another agent only when the human requests it.

## Establish the review set

Identify the fixed point, changed files, relevant commits, and uncommitted changes. Read both the ticket and its parent spec (`specs/<spec-name>/spec.md`) when present, plus applicable project instructions, standards, system documentation, and tests around the changed behavior. Read the source directory README, or the nearest ancestor README within the repository if absent, while respecting applicable broader constraints. Completed specs are historical context, not authority over current approved behavior. If stated intent is unavailable, review against observable behavior and repository standards and say that specification compliance could not be assessed.

## Gather verification evidence

Discover relevant repository commands; do not assume their names. Run applicable formatter, lint, type-check, static-analysis, focused-test, build, or user-flow checks only in check/no-write mode. Record every command, result, and intentional non-run; a check that did not run is not a pass.

Consider whether specialist perspective would materially improve a language-, platform-, security-, migration-, deployment-, or infrastructure-sensitive review. If so, name the one capability and why, but do not install or invoke it automatically or claim coverage it did not provide. Continue using existing repository rules and state meaningful gaps.

## Review with fresh eyes

Assess the diff and its surroundings for:

- intent and behavior: requirements met without scope creep, missed cases, or contract regressions;
- correctness and boundaries: data flow, errors, state, interfaces, and security-sensitive paths;
- repository standards: documented conventions and avoidable complexity;
- architecture pressure: unjustified abstractions, special cases, coupling, unclear ownership, non-atomic state, or material maintenance cost.

For each finding, identify the violated requirement, contract, repository rule, or evidenced failure, with severity, exact evidence, realistic impact, and a concrete remedy. Respect approved constraints and non-goals; reopen settled decisions only with new evidence or a failed assumption. A documented decision does not excuse a demonstrated defect. Do not demand extra abstractions or tests without a concrete uncovered risk. Separate confirmed defects from questions and design judgments. Do not report automated-style nits unless the tool result is wrong, and do not turn suspicions into defects without evidence.

Report remaining risks, verification evidence, and intentionally unreviewed areas. Recommend separate follow-up work for justified redesign; do not use review as a pretext for it. Leave acceptance and shipping to the human; do not start the next ticket.
