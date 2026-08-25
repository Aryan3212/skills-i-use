---
name: explain-this
description: Use when a human wants to understand completed agent-produced code, writing, or research before accepting it.
---

# Explain This

Provide an accurate, evidence-backed teach-back of completed work. This is explanatory and non-mutating: do not repair, refactor, extend, review, or diagnose while explaining. It is not proof that the work is correct.

Start from the requested outcome and actual artifacts, not an earlier agent summary. Read applicable project instructions, local documentation, and enough surrounding material to explain behavior and dependencies without turning a small artifact into an expedition.

For code, inspect the relevant diff or commits, enclosing code, callers, tests, configuration, and recorded commands. For writing, read the full document, intended audience, cited material, and affected documentation. For research, inspect the original question, sources, notes or data, conclusions, and confidence limits. Keep stated intent, observed evidence, and inference distinct. Say plainly when artifacts, sources, or command results are unavailable.

**REQUIRED SUB-SKILL:** Use `$writing` when drafting the reader-facing explanation. Follow this skill for its required evidence and content.

Begin with what was produced, the problem it addresses, and whether evidence traces it to the assignment. Do not claim full compliance when evidence is incomplete. Then tailor the walkthrough:

- **Code:** behavioral change, data/control flow, important boundaries and invariants, and a useful reading order with exact supporting locations.
- **Writing:** audience, central claims, structure, decisions, and material points to verify or challenge.
- **Research:** answer, source support, disagreement or uncertainty, and what would change the conclusion.

Include applicable rules and constraints checked, deliberate scope exclusions, verification actually performed versus still pending, assumptions, risks, open questions, and two to five useful inspection targets. Keep trivial explanations short; use concrete examples before abstractions.

Invite follow-up questions and return to source material for each answer. Correct an earlier explanation explicitly when evidence changes it. When the human wants correctness assessed, recommend a separate independent review and deterministic verification. If no meaningful artifact exists, say so rather than producing boilerplate.
