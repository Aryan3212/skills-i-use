---
name: tdd
description: Use when explicitly requested to implement or repair observable behavior through red-green-refactor cycles.
---

# TDD

This manual skill is also invoked by `$implement` by default for behavioral coding work. Follow it unless the human explicitly opts out. Test externally observable behavior through the highest practical stable seam, not private structure or incidental implementation details.

For a purely mechanical edit with no independently observable behavior, do not invent a test. State why a new red test would add no signal and run the smallest relevant existing check instead. This is a TDD decision, not an unreported opt-out; “too small” or “too hard to test” is not sufficient.

## Choose the seam

Read the approved task or feature document, existing tests, and local conventions. If the right contract is unclear, surface that design decision before choosing a test shape.

## Work by behavioral slice

For each small slice:

1. Write one focused test with an independently derived expected result.
2. Run it and observe the intended failure.
3. Implement only enough to make it pass.
4. Re-run the focused test.
5. Refactor only when behavior remains covered and the cleanup is justified.

Do not batch speculative tests for behavior not yet understood through the preceding slice.

## Keep tests meaningful

Write readable behavioral examples. Avoid asserting private calls, reproducing implementation in the expectation, mocking the system under test, and snapshots without a meaningful oracle. Use integration, property, mutation, or end-to-end tests only when their extra signal fits the risk; do not pursue coverage targets as a substitute for useful assertions.

Do not leave a failing test unexplained before moving on. Treat broader architectural simplification separately rather than disguising it as a red-green cycle.
