---
name: to-tickets
description: Use when a confirmed feature or module document needs dependency-aware, independently verifiable implementation tasks.
---

# To Tickets

Turn an approved feature or module document into an implementation sequence; do not reopen specification.

## Ground the breakdown

Read the confirmed document and inspect the relevant repository area when the current code affects the slice boundaries. Preserve the document's vocabulary, scope, non-goals, and technical decisions.

If a requirement is still ambiguous enough to change the task order or behavior, surface it and return to `$to-spec` rather than hiding the decision inside a task.

## Create useful tasks

**REQUIRED SUB-SKILL:** Use `$writing` when drafting the task descriptions for human or agent readers. Follow this skill for their required scope, dependencies, and acceptance conditions.

Prefer narrow vertical slices: each task should make a user-visible or otherwise verifiable path work through the necessary layers. A task must state:

- what it delivers;
- what blocks it, if anything;
- acceptance conditions;
- how it will be verified;
- notable scope boundaries or risk.

Order tasks by dependency. A task with no incomplete blockers is ready to start.

For broad mechanical changes that cannot land as a vertical slice, use an expand–migrate–contract sequence: introduce the compatible form, migrate callers in bounded batches, then remove the old form after verification. Keep every safely independent step verifiable.

Avoid task lists that merely mirror files, layers, or generic activities such as “write tests.” Tests belong with the behavior each task delivers.

## Confirm the plan

Present the proposed tasks and dependency order for human confirmation before publishing them to any tracker or beginning implementation. Do not publish externally without approval. Use the repository's existing tracker convention when one exists; otherwise keep the approved breakdown in the conversation or the human's requested location.

After approval, hand each task to `$implement` with the originating document and its acceptance conditions.

## Boundaries

- Do not invent a tracker, labels, or task-file convention.
- Do not include stale file paths or code snippets unless a compact contract shape is essential to the task.
- Do not split work so finely that a task loses independently checkable behavior.
