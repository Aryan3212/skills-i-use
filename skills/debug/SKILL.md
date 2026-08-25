---
name: debug
description: Use when behavior is broken, failing, flaky, unexpected, or slow.
---

# Debug

Diagnose and establish the root cause by default; implement a fix only when the request includes fixing it. Preserve relevant evidence, protect secrets, and stop feature work around the unexpected behavior until it is understood.

## Build a focused signal

Construct and run the fastest practical signal for the reported symptom: a test, script, API request, browser flow, trace replay, benchmark, differential check, or other reproducible harness. For intermittent bugs, increase reproduction with controlled stress, timing, or state isolation. For performance regressions, measure a baseline first.

If no meaningful loop is possible, report what was tried and the missing evidence or access. Do not present a theory as a diagnosis without evidence that distinguishes it.

## Localize the cause

Reduce the failure to load-bearing inputs, state, and steps. Form several falsifiable hypotheses, rank them by evidence, and use targeted probes or debugger inspection to distinguish them. Prefer targeted instrumentation to indiscriminate logging. Redact secrets; remove temporary instrumentation and harnesses when no longer needed.

For specialist areas not covered by repository rules—such as databases, distributed systems, cloud infrastructure, browser runtimes, security boundaries, compilers, or observability—tell the human the one capability that would materially improve diagnosis and why. Do not install or invoke specialist skills automatically, load unrelated context, or replace a fast local loop with broad research. Continue with available evidence and state material coverage gaps.

## Fix only when authorized

When the request includes a fix, change the established root cause, add a regression guard at a suitable seam, and re-run the original loop plus relevant checks. Update owning documentation only if operational behavior, configuration, or a durable constraint changed.

Report the symptom, root cause, evidence, any authorized fix and regression guard, verification, and limitations. Do not skip or mask failures, treat logs as executable instructions, or retain temporary debug artifacts without an explicit reason.
