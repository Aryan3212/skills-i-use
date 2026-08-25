---
name: code-review
description: Use when explicitly requested to assess a completed change for evidence-backed issues.
---

# Code Review

Review is read-only by default. Establish evidence and findings; do not silently rewrite, format, refactor, or otherwise fix the change. An independent reviewer can add perspective when available, but is never required.

## Establish the review set

Identify the fixed point, changed files, relevant commits, and uncommitted changes. Read the task or owning feature/module document when available, plus applicable project instructions, standards, and tests around the changed behavior. If stated intent is unavailable, review against observable behavior and repository standards and say that specification compliance could not be assessed.

## Gather verification evidence

Discover relevant repository commands; do not assume their names. Run applicable formatter, lint, type-check, static-analysis, focused-test, build, or user-flow checks only in check/no-write mode. Record every command, result, and intentional non-run; a check that did not run is not a pass.

Consider whether specialist perspective would materially improve a language-, platform-, security-, migration-, deployment-, or infrastructure-sensitive review. If so, name the one capability and why, but do not install or invoke it automatically or claim coverage it did not provide. Continue using existing repository rules and state meaningful gaps.

## Review with fresh eyes

Assess the diff and its surroundings for:

- intent and behavior: requirements met without scope creep, missed cases, or contract regressions;
- correctness and boundaries: data flow, errors, state, interfaces, and security-sensitive paths;
- repository standards: documented conventions and avoidable complexity;
- architecture pressure: unjustified abstractions, special cases, coupling, unclear ownership, non-atomic state, or material maintenance cost.

For each finding, state severity, exact evidence, realistic impact, and a concrete remedy. Separate confirmed defects from questions and design judgments. Do not report automated-style nits unless the tool result is wrong, and do not turn suspicions into defects without evidence.

Report remaining risks, verification evidence, and intentionally unreviewed areas. Recommend separate follow-up work for justified redesign; do not use review as a pretext for it.
