---
name: to-tickets
description: Use when an approved spec needs sequential, independently shippable implementation tickets.
---

# To Tickets

Turn an approved spec into an implementation sequence; do not reopen specification. Save tickets as Markdown files under `specs/<spec-name>/tickets/`; each ticket references `../<spec-name>.md` rather than duplicating its decisions. Keep approval and completion status explicit.

## Ground the breakdown

Read the approved spec and inspect the relevant repository area when the current code affects the slice boundaries. Preserve the document's vocabulary, scope, non-goals, and technical decisions.

If a requirement is still ambiguous enough to change the task order or behavior, surface it and return to `$to-spec` rather than hiding the decision inside a task.

## Create useful tasks

**REQUIRED SUB-SKILL:** Use `$writing` when drafting the task descriptions for human or agent readers. Follow this skill for their required scope, dependencies, and acceptance conditions.

Prefer narrow vertical slices: each task should make a user-visible or otherwise verifiable path work through the necessary layers. A task must state:

- what it delivers;
- what blocks it, if anything;
- acceptance conditions;
- how it will be verified;
- notable scope boundaries or risk.

Order tickets by dependency and make each safe to ship independently, as a complete behavior or compatible preparatory change. Work synchronously: one approved ticket, human review, then shipping when authorized, before starting the next. Do not parallelize or automatically advance unless the human changes this workflow.

For broad mechanical changes that cannot land as a vertical slice, use an expand–migrate–contract sequence: introduce the compatible form, migrate callers in bounded batches, then remove the old form after verification. Keep every safely independent step verifiable.

Avoid task lists that merely mirror files, layers, or generic activities such as “write tests.” Tests belong with the behavior each task delivers.

## Confirm the plan

Write proposed tickets locally for human review, then obtain confirmation of their scope and order before implementation. Do not publish externally without approval. Approval of the spec or tickets does not authorize shipping.

After approval, hand one ticket to `$implement` with its parent spec and acceptance conditions. Mark accepted, delivered tickets completed; retain them as history rather than ongoing system documentation.

## Boundaries

- Do not invent a tracker or labels. The human may choose direct implementation from a manageable approved spec or a lighter path for a small correction.
- Do not include stale file paths or code snippets unless a compact contract shape is essential to the task.
- Do not split work so finely that a task loses independently checkable behavior.
