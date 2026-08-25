---
name: write-agent-skill
description: Use when explicitly invoked to create, revise, or statically review an agent skill and its metadata, instructions, references, scripts, or assets.
---

# Write Agent Skill

Create or revise reusable guidance for a recognizable class of requests. Keep only the information that changes an agent's decisions or execution; a skill is not project history or a generic tutorial.

**REQUIRED SUB-SKILL:** Use `$writing` when drafting or revising skill prose or the reader-facing review report. Follow this skill for the agent-skill contract and static-review requirements.

This is a budget-conscious personal workflow. Use static review by default; do not create or run behavioral evaluations, repeated model runs, subagent campaigns, formal test harnesses, or automated tests unless the user explicitly asks.

## Decide whether a skill is appropriate

Use a skill when the guidance is reusable, non-obvious, and likely to matter across tasks. It may provide:

- a technique with a useful sequence or method;
- a pattern for recognizing and reasoning about a recurring situation;
- a reference containing domain facts, schemas, commands, or conventions;
- a reliable helper script or asset used repeatedly.

Do not use a skill for one-off history, generic advice, repository-wide conventions, or rules existing tooling can enforce. Prefer revising an existing skill or reusing a current resource.

## Establish the contract

Before writing, establish:

1. the concrete requests or symptoms that should select the skill;
2. the outcome the skill should help produce;
3. the important boundaries, non-goals, permissions, and stopping conditions;
4. the knowledge or behavior that the agent would not reliably infer on its own.

Match prescription to risk: principles for flexible work, a preferred pattern for consistency, and exact steps only when variation could cause failure.

## Design discovery metadata

Use a lowercase, hyphenated folder name under 64 characters. `SKILL.md` needs matching `name` frontmatter and a concise routing `description` beginning `Use when`. Make triggers concrete; do not summarize the workflow there.

Use `agents/openai.yaml` only for UI metadata, dependencies, or invocation policy. For manual-only use, set:

```yaml
policy:
  allow_implicit_invocation: false
```

Preserve unrelated existing metadata.

## Default `SKILL.md` format

Use this only when it fits. Remove, rename, or combine sections that do not earn their context cost.

```markdown
---
name: skill-name-with-hyphens
description: Use when [specific triggering conditions and symptoms].
---

# Skill Name

## Overview

[What the skill is and its core principle in one or two sentences.]

## When to Use

[Concrete symptoms and use cases. State when not to use it. Add a small flowchart only when the decision is genuinely non-obvious.]

## Core Pattern

[For a technique or pattern, show the essential method. Use a focused before-and-after comparison when it clarifies the difference.]

## Quick Reference

[A compact table or list for common decisions or operations.]

## Implementation

[Put short instructions or code inline. Link directly to heavy references or reusable tools and say when to read or run them.]

## Common Mistakes

[Describe likely mistakes and the concrete correction for each.]

## Real-World Impact

[Optional: include only concrete, reusable evidence that helps an agent apply the skill.]
```

The headings are a drafting aid, not a compliance target. Prefer the smallest structure that makes the workflow and boundaries clear.

## Organize for progressive disclosure

Keep common-use instructions in `SKILL.md`. Add supporting files only for a concrete purpose:

- `references/` for substantial conditional guidance, schemas, policies, or API details;
- `scripts/` for deterministic operations worth reusing;
- `assets/` for templates, images, fonts, or files copied into outputs;
- `agents/openai.yaml` for product-specific metadata.

Link each support file directly from `SKILL.md` and say when to use it. Avoid reference chains. Give long references a contents section; use descriptive forward-slash paths. Split conditional detail, not arbitrary word counts.

## Write instructions that shape the right thing

Assume the agent is capable. State the result, non-obvious constraints, and decision criteria; remove tutorials, throat-clearing, duplication, and speculative edge cases.

Match the form of the instruction to the problem:

- For a required output shape, give a positive structure or template.
- For a commonly omitted element, make it an explicit field, step, or checklist item.
- For conditional behavior, tie the action to an observable condition.
- For a known discipline failure or unsafe shortcut, use a clear prohibition and name the demonstrated loophole.

Use strong wording for security, integrity, destructive actions, authorization, and recurring failures; otherwise it is noise.

Use consistent terminology. Avoid time-sensitive claims when a stable rule or authoritative reference can be used instead. If legacy behavior matters, separate it from the current path.

## Workflows, examples, and references

Use numbered steps only for real sequences and a decision aid only for confusing branches. Keep examples only when they clarify a format, subtle decision, or invocation. Name required skills or tools and when to use them. Instructions never expand user authorization.

Do not add a cross-skill dependency merely because an output is reader-facing; require an explicit contract need.

## Bundled scripts

Add a script only for fragile repeated logic or a materially more reliable deterministic operation. Prefer existing dependencies. State whether to run or read it, its inputs, outputs, prerequisites, and important errors. Give predictable failures useful messages. Do not add script tests or test scaffolding unless asked; plainly flag untested high-leverage scripts.

## Cost-conscious review

Do not create or run behavioral evaluations unless the user explicitly requests them. This includes baseline-versus-skill comparisons, pressure scenarios, subagent campaigns, multi-model testing, repeated sampling, and custom evaluation harnesses.

Static review is enough by default. Check that:

- the name, folder, frontmatter, and invocation policy agree;
- the description routes the intended requests without attracting unrelated ones;
- the main workflow is complete and internally consistent;
- permissions, prerequisites, failure handling, and stopping conditions are clear;
- references and scripts exist and are discoverable from `SKILL.md`;
- instructions do not duplicate generic knowledge or contradict repository rules;
- no placeholders, invented dependencies, stale paths, or unsupported claims remain.

An already-available, cheap structural validator is optional. Do not install or create validation tooling for this check. State exactly what any validator checks; valid YAML or packaging does not prove the skill works.

## Improve from real usage

Ship a reasonable version without claiming it is proven. Revise the smallest part after real failures such as wrong activation, missed references, ignored constraints, verbosity, bad order, or failing helpers. Delete guidance shown unnecessary. Formal evaluation is an optional future investment, never a default prerequisite here.

## Finish

Report which files were created or changed, whether the skill is automatic or manual-only, and what review was actually performed. Be explicit when the work received static inspection only. Do not create tests, eval artifacts, commits, or external changes unless requested.

Adapted for a budget-conscious personal workflow from [obra/superpowers `writing-skills`](https://github.com/obra/superpowers/tree/main/skills/writing-skills), its [subagent testing guide](https://github.com/obra/superpowers/blob/main/skills/writing-skills/testing-skills-with-subagents.md), and its bundled [Anthropic skill-authoring guidance](https://github.com/obra/superpowers/blob/main/skills/writing-skills/anthropic-best-practices.md). The upstream testing requirements are intentionally optional here.
