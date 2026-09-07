---
name: tdd
description: Use when explicitly requested to implement or repair observable behavior through red-green-refactor cycles.
---

# TDD

This manual skill is also invoked by `$implement` by default for behavioral coding work. Follow it unless the human explicitly opts out. Test externally observable behavior through the highest practical stable seam, not private structure or incidental implementation details.

For a purely mechanical edit with no independently observable behavior, do not invent a test. State why a new red test would add no signal and run the smallest relevant existing check instead. This is a TDD decision, not an unreported opt-out; “too small” or “too hard to test” is not sufficient.

## Choose the seam

Read the approved ticket and parent spec when present, relevant system documentation, existing tests, and local conventions. If the right contract is unclear, surface that design decision before choosing a test shape.

## Work by behavioral slice

For each small slice:

1. Add or extend one focused behavioral test with an independently derived expected result; reuse an existing failing regression test when it already captures the requirement.
2. Run it and observe the intended failure.
3. Implement only enough to make it pass.
4. Re-run the focused test.
5. Refactor only when behavior remains covered and the cleanup is justified.

Do not batch speculative tests for behavior not yet understood through the preceding slice.

## Keep tests meaningful

Prefer a small suite of focused integration scenarios exercising complete functionality through real internal collaborators. Cover the main flow, common edge cases, and consequential failures; add targeted regression tests for discovered bugs. Add a test only for a distinct behavior or meaningful risk not already covered. Do not chase comprehensive coverage, test counts, or one test per function, file, or implementation step.

Avoid mocks, spies, assertions about internal calls, expectations copied from the implementation, and snapshots without a meaningful oracle. Prefer supported local services or sandboxes for external dependencies; if a substitute is unavoidable, explain the limitation and obtain the human’s agreement rather than silently introducing mocks. Use unit, property, mutation, or end-to-end tests only when they add concrete signal beyond the existing suite. Keep scenarios focused enough to diagnose failures; a single giant test is not the goal.

Do not leave a failing test unexplained before moving on. Treat broader architectural simplification separately rather than disguising it as a red-green cycle.
