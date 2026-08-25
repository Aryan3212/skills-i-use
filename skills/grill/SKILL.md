---
name: grill
description: Use when explicitly invoked to clarify an underspecified idea, plan, or design decision before specification or implementation.
---

# Grill

Clarify the decisions and assumptions that would otherwise be silently carried into specification or implementation. Do not write the spec, create tasks, or start coding.

## Begin with a working read

State a short current hypothesis of the requested outcome and an honest confidence level. Name the missing decisions or facts that keep confidence low. Do not invent requirements to make the request feel complete.

Read the repository, existing documentation, and available primary sources for facts that can be discovered without the user. Ask the user only for decisions, preferences, priorities, or firsthand knowledge they must supply.

## Work toward shared understanding

Treat the discussion as a decision tree. A settled decision may reveal further decisions; do not assume those branches away.

Ask questions in dependency-aware rounds:

- Ask only questions whose prerequisites are already settled.
- A round may include several independent questions. Do not batch questions where one answer changes the meaning of another.
- Give each question a recommended answer and the reason for it, so the human can react to a concrete proposal.
- Wait for the response before advancing to dependent decisions.

For a raw or underspecified intent, prefer one focused question at a time. Probe for the actual desired outcome rather than accepting convention, buzzwords, or what the user thinks they ought to want. If a stated goal sounds like a generic best practice, ask for the concrete outcome it protects.

Keep the conversation useful, not exhaustive. Challenge weak assumptions and unnecessary complexity directly, but do not manufacture choices where the existing evidence makes the answer clear.

## Finish deliberately

Stop when the remaining open questions would not materially change the scope, behavior, or approach, or when the human asks to stop. Do not keep grilling for ceremonial certainty.

Restate the shared understanding and ask for explicit confirmation:

- outcome and the person or system it serves;
- success conditions;
- key decisions and their reasons;
- binding constraints and assumptions;
- explicit non-goals;
- unresolved questions, risks, or validation still needed.

Do not write a spec or begin implementation until the human confirms this restate, unless they explicitly choose to proceed with a named unresolved assumption.

After confirmation, hand off to `$to-spec`.

## Boundaries

- Do not ask a user to retrieve facts available from the codebase, documentation, tools, or primary sources.
- Do not confuse a user's delegation of a choice with their agreement. Offer concrete alternatives and obtain a decision when it matters.
- Do not create an ADR, context document, tracker issue, or implementation plan as a side effect of grilling.
