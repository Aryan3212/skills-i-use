---
name: wayfinder
description: Use when explicitly invoked to choose a direction for a broad, uncertain effort that cannot yet be specified.
---

# Wayfinder

Find a direction when the destination is not clear enough to specify, important decisions are entangled, or several plausible directions deserve comparison. Do not create an implementation plan or start delivery.

## Establish the destination

Start from confirmed intent. If it is not confirmed, hand off to `$grill`. Name the decision this session must make and the consequence of making the wrong one.

Inspect relevant repository evidence. Use `$research` only for factual questions that cannot be answered from the repository or existing documentation. Keep facts, assumptions, and preferences separate.

## Explore selectively

Generate a small number of materially different directions, not variations in wording. Use only the evaluation lenses that clarify the decision:

- user value and the concrete job to be done;
- feasibility, cost, and the hardest technical constraint;
- differentiation or the reason this direction is preferable to the status quo;
- assumptions that must, should, or might be true;
- the smallest useful scope and an explicit not-doing list.

Challenge the first plausible answer. Do not generate alternatives when the evidence already makes one direction clearly superior.

## Converge

Compare the viable directions against the chosen lenses, identify the riskiest assumption, and recommend one direction with reasons and trade-offs. Be direct when no direction is worth pursuing as stated.

Finish with a concise confirmed direction: destination, chosen approach, key assumptions and validation needed, constraints, and non-goals. After the human confirms it, hand off to `$to-spec`.

## Boundaries

- Do not create a tracker map, issue hierarchy, ADR, or context document.
- Do not turn exploratory options into task slices.
- Do not use this for a well-scoped feature that can proceed directly to `$to-spec`.
