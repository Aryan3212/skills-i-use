# Skills I Use

This repository contains the skills and supporting tools I am currently using for agentic engineering—the more sophisticated word for vibe coding with AI. It is the result of extensive research into how other people work with coding agents, combined with my own preference for understanding the code rather than generating as much as possible as quickly as possible.

This is a snapshot of my workflow as of August 25, 2026. The original text for this README was dictated with Wispr Flow at 10:20 p.m. that day.

## Where these ideas came from

The people whose work I referenced include:

- Thorsten Ball, co-founder of Amp
- Matt Pocock
- Geoffrey Litt from Notion, particularly his talk about understanding what we generate so that we can continue working on long-running tasks
- Tejas Kumar, although I still have more of his talks to watch
- Dex Horthy
- Armin Ronacher, creator of Flask
- Antirez, creator of Redis
- Dillon Mulroy, who works at Cloudflare
- Mario Zechner, creator of Pi
- Mitchell Hashimoto, co-founder of HashiCorp and creator of Ghostty
- Teknium, creator of Hermes, who has written about using as many as 25 parallel agents

I took ideas from all of them, but I am on the side that still wants to understand what is happening. I want to be slow and intentional with the code I write. At the moment, I am looking for a job, so learning and understanding the work matters more to me than making something work as quickly as possible.

Except for people operating large parallel-agent setups, most of these developers have fairly simple workflows and stay closely involved with their agents. Whether they talk about LLMs, harness engineering, skills, MCP, or CLI tools, the fundamental problem is context engineering. The best results come from giving the model the smallest amount of the highest-quality context.

As a context window grows, the model has to form relationships across an increasing amount of text. Keeping the relevant context small helps it reason better. Today's context windows are already large enough to hold far more than a person could keep in mind at once, which is one reason AI coding agents can do so much. They still have limitations, though, so we have to do a lot of mental and "context" gymnastics.

## The process still matters

The processes humans developed to manage context and maintain quality are still useful. Software development lifecycles, planning, test-driven development, domain-driven design, Agile, and Extreme Programming did not stop mattering when AI arrived. If a million-token context window worked like magic, we could dump an entire codebase into it without planning, skills, orchestration, or sub-agents. In practice, that does not work reliably.

AI makes it easier to follow these processes because some of the work can be delegated. Coding itself is not necessarily the boring part, but people often skip tests, planning, research, and documentation. LLMs can help with those things. The goal is not to hand over understanding; it is to use the agent to apply good practices more consistently while I remain involved in the decisions and understand the output.

This repository covers the generation side of how I use LLMs, not every way I use them. It is an experiment. I am going to work with this setup for a while, observe what actually helps, and change it based on evidence rather than treating any particular arrangement of skills as permanent.

## Workflow

### 1. Refine the idea

I start with an idea and work with the LLM to uncover the actual intent. The model asks questions, tests my assumptions and its own, and helps turn a vague thought into a decision that can be implemented.

The `grill` skill is for an idea whose destination I mostly know but whose requirements still need to be extracted. It is influenced by Matt Pocock's grilling skill and Addy Osmani's interview-me skill. The `wayfinder` skill is for broader exploration: it looks for useful directions and possibilities that I have not considered. These lead into a spec or plan once the intent is clear.

### 2. Understand the spec

I read the spec. Some people say this is unnecessary, but I want to understand what is about to be built. I can use `explain-this` to get a walkthrough and, if it is useful, ask the AI to quiz me. The quiz may be overkill most of the time; the important part is that I do not blindly approve a plan I do not understand. We can also branch out tickets from this spec. The spec should contain product decisions + technical decisions and tradeoffs.

### 3. Implement and verify

The agent implements the work using test-driven development and the other practices that make code easier to verify and maintain. During implementation, deterministic checks—tests, static analysis, linters, and formatters—create a frequent feedback loop against the agreed criteria.

Skills can describe what good and bad work look like in a particular language or framework. A reviewer can use something focused, such as `ts-oxlint-anti-slop`, when that specific checklist is relevant. The point is not to load every possible instruction. It is to add the one piece of specialist context that improves the current task.

### 4. Explain and review

After implementation, I use `explain-this` again so the agent tells me what it actually changed before I go directly into the code. Then a separate agent with a fresh context window reviews the completed work. A smaller, fresh context usually makes the reviewer more useful because it is not carrying all the assumptions and history of the implementation conversation.

The review will sometimes uncover gaps or recurring mistakes. I treat that as a sprint retrospective: fix the work, then add the durable lesson to a skill or `AGENTS.md` when it is likely to prevent the same mistake again. Those instructions are reminders for both the agent and me.

In short, the workflow is:

1. Explore or refine the idea.
2. Turn the confirmed intent into a spec.
3. Break the spec into small, verifiable tasks when needed.
4. Implement with tests and deterministic feedback.
5. Understand the result.
6. Review it in a fresh context.
7. Feed recurring lessons back into the system.

This is mostly the same workflow people wrote about before AI. The tools changed; the need to manage context, verify work, and understand the result did not.

## Using this repository

This repository is reference material for setting up my local agents, not a set of project-specific instructions. The `skills/` directory contains the skills I install into an agent's local skill directory as needed.

[`codex-global-instructions.md`](codex-global-instructions.md) is the repository reference for my global Codex `~/.codex/AGENTS.md`. It is deliberately not named `AGENTS.md` here because Codex would otherwise treat it as instructions for this repository. When these references change, I sync [`codex-global-instructions.md`](codex-global-instructions.md), [`ast-grep.md`](ast-grep.md), and [`ast-grep-rule-reference.md`](ast-grep-rule-reference.md) to their matching filenames under `~/.codex/`. The global instructions keep RTK and Semble available generally, while ast-grep is loaded only for software-engineering work.

## Skill catalog

“Auto-available” skills may be considered by an agent from their description. “Manual-only” skills require an explicit `$skill-name` invocation and do not enter the normal agent context.

Core skills do not automatically install or load specialist skills. When a language, framework, platform, or risk area needs more focused guidance, they name the one useful capability and why; I decide whether to add or invoke it.

| Skill | Availability | Use case | Required input | Conditional helper or dependency | Typical next step |
| --- | --- | --- | --- | --- | --- |
| `grill` | Manual-only | Clarify hidden requirements and decisions before specification or implementation begins. | Raw idea, plan, or decision | `research` for unanswered facts | `to-spec` |
| `wayfinder` | Manual-only | Compare plausible directions when broad intent is confirmed but destination remains unclear. | Confirmed but broad intent | `grill`; `research` for factual unknowns | `to-spec` |
| `research` | Auto-available | Resolve bounded factual questions using repository evidence or authoritative primary sources. | Bounded factual question | — | Returns evidence to the calling skill |
| `to-spec` | Auto-available | Turn confirmed intent into one concise, durable implementation-ready feature document. | Confirmed intent | `grill` when a material decision remains; `research` for factual unknowns | `to-tickets` |
| `to-tickets` | Auto-available | Break an approved specification into dependency-aware, independently verifiable implementation tasks. | Approved feature or module document | `to-spec` | `implement` |
| `implement` | Auto-available | Complete one approved task with minimal changes and proportionate verification. | Approved task and acceptance conditions; owning document when present | Explicitly invokes manual-only `tdd` for coding tasks unless I opt out; names a focused specialist capability only when it materially helps | I may request a walkthrough or review |
| `tdd` | Manual-only | Implement observable behavior through focused red-green-refactor cycles at stable seams. | A coding task or bug fix | Invoked by `implement` for coding tasks; `debug` supplies a reproduction for fixes | Returns to implementation |
| `debug` | Auto-available | Reproduce unexpected behavior, establish its root cause, then fix when authorized. | Reported symptom or failing signal | `research` only for unfamiliar external behavior; recommends specialist help only when it materially sharpens diagnosis | `implement` when a fix is requested; `code-review` after a fix |
| `explain-this` | Auto-available | Teach back completed agent work accurately before human acceptance or review. | Completed code, writing, or research artifact | — | Human inspection; separate review only when requested |
| `code-review` | Manual-only | Assess completed changes for evidence-backed defects without silently modifying the code. | Completed diff plus intended behavior where available | Recommends a focused specialist capability only when needed; I choose whether to research, add, or invoke it | Final verification or follow-up task |
| `handoff` | Auto-available | Create a concise evidence-backed brief for pausing or transferring unfinished work. | Current work state and evidence | — | Named next skill or human action |
| `writing` | Auto-available | Draft or revise reader-facing prose for its actual audience and purpose. | Draft or existing prose and its intended audience | `research` for claims that need evidence | Validate factual claims and reader intent |
| `write-agent-skill` | Manual-only | Create, revise, or statically review focused reusable instructions for agents. | Skill idea or existing skill plus its intended use | — | Use the skill; revise only from observed needs |
| `project-skill-bootstrapper` | Manual-only | Plan the smallest specialized capability portfolio needed for a project. | Project or body of work plus intended outcomes | `grill`; `find-skills` and web search for discovery; `write-agent-skill` for proposed local skill work | Human portfolio decision, then implementation by another agent |
| `ts-oxlint-anti-slop` | Manual-only | Install or migrate bundled Oxlint anti-slop rules in TypeScript repositories. | TypeScript repository using OxLint | — | `code-review` or implementation verification |
| `thermo-nuclear-code-quality-review` | Manual-only | Perform an unusually strict maintainability review for structural code problems. | Broad or high-risk completed change | — | `code-review` findings or follow-up work |

The origin and local adaptation of imported skills are recorded in [`skills/PROVENANCE.md`](skills/PROVENANCE.md). Their measured context costs are recorded in [`skills/CONTEXT-SCORES.md`](skills/CONTEXT-SCORES.md).

## Supporting CLI tools

Three tools sit around the agent rather than acting as skills. My global `AGENTS.md` contains the Semble guidance and eagerly loads the RTK guidance; it points to `ast-grep.md` only when the agent is doing software-engineering work.

- **Semble** is a semantic codebase indexer and retriever. It uses embeddings to find relevant code even when my wording does not exactly match the codebase's vocabulary. That may help the agent retrieve better context, although I have not independently evaluated it.
- **ast-grep** searches code by syntax and structure rather than text alone. I also use its outline command to get a compact map of a file before reading the implementation.
- **RTK (Rust Token Killer)** reduces shell-command output before it reaches the agent, which is intended to spend less of the context window on noisy terminal output.

I looked at knowledge-graph indexers and language-server-based tools as well, but did not find enough evidence to add them. Even for Semble, ast-grep, and RTK, I have not run my own evaluations. This is the current state of the setup, not a claim that these tools are proven to improve every task.
