---
name: thermo-nuclear-code-quality-review
description: Use when performing an unusually strict, read-only maintainability review focused on structural simplification, abstraction quality, giant files, or spaghetti-condition growth.
---

# Thermo-Nuclear Code Quality Review

Review the current change set; do not edit code unless the user separately asks for a fix. Judge maintainability, not behavioral correctness alone. Be direct and high-conviction, but do not manufacture findings.

## Review contract

Look first for a structural simplification that deletes concepts, branches, helpers, modes, or layers rather than merely moving complexity. Prefer direct, legible code, explicit boundaries and types, canonical helpers, and logic in the layer that owns it.

Treat these as likely design problems: special-case conditionals scattered through existing flows; one-off flags or nullable modes; feature logic in shared paths; copy-paste or thin wrappers; cast-heavy, optional, `any`, or `unknown` contracts that hide an invariant; and unnecessarily sequential or partial-update orchestration.

A diff that crosses a file from below 1,000 lines to above it is a strong decomposition heuristic, not automatic proof of a defect. Ask for a compelling structural reason before accepting it.

## Findings and approval

Prioritize structural regressions and missed simplifications, then branching growth, ownership or type boundaries, file decomposition, and legibility. Report a small set of actionable findings with the concrete consequence and a plausible simpler direction. Do not flood the review with cosmetic nits.

Do not approve solely because behavior works. Block only clear, justified maintainability regressions or a plainly better simplification; otherwise say that no such issue was found. Keep the review read-only.
