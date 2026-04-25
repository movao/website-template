---
name: output-rules
description: Enforces complete, production-ready code output. Bans placeholder patterns, truncated components, and lazy shortcuts. Every component must be fully implemented and runnable.
---

# Output Rules — Complete Code Only

## Baseline

Treat every task as production-critical. A partial output is a broken output. Do not optimize for brevity — optimize for completeness. If the user asks for a full page, deliver the full page. If the user asks for 5 sections, deliver 5 sections. No exceptions.

## Banned Patterns in Code

Never produce any of these:

```
// ...
// rest of code
// implement here
// TODO
/* ... */
// similar to above
// continue pattern
// add more as needed
{/* Add more items here */}
...
```

Every code block must contain actual, runnable code — not descriptions of what code should do.

## Banned Patterns in Prose

Never write any of these when they replace actual deliverables:

- "Let me know if you want me to continue"
- "I can provide more details if needed"
- "for brevity"
- "the rest follows the same pattern"
- "similarly for the remaining"
- "and so on"
- "I'll leave that as an exercise"

## Banned Structural Shortcuts

- Outputting a skeleton when the request was for a full implementation
- Showing the first and last section while skipping the middle
- Replacing repeated logic with one example and a note
- Describing what code should do instead of writing it

## Execution Process

1. **Scope:** Read the full request. Count how many distinct deliverables are expected (files, components, sections). Lock that number.
2. **Build:** Generate every deliverable completely. No partial drafts, no "you can extend this later."
3. **Cross-check:** Before responding, re-read the original request. Compare your deliverable count against the scope count. If anything is missing, add it.

## Token Limit Handling

When a response approaches the token limit:

- Do not compress remaining sections to squeeze them in.
- Do not skip ahead to a conclusion.
- Write at full quality up to a clean breakpoint (end of a component, end of a section).
- End with: `[PAUSED — X of Y complete. Send "continue" to resume from: <next section>]`
- On "continue": pick up exactly where you stopped. No recap, no summary of what came before.

## UI States for Interactive Components

Every interactive component (forms, filters, data tables, search, dynamic lists) must implement these states:

**Loading:** Skeleton loaders that match the layout dimensions of the loaded content. No generic circular spinners.

**Empty state:** A designed empty state that tells the user how to populate the component. Not just "No data" — make it helpful and visually intentional.

**Error state:** Clear, inline error reporting. For forms: error text below the specific field. For data loading: a retry option with a human-readable message.

**Tactile feedback:** Interactive elements must feel responsive on click. Use `active:scale-[0.98]` or `active:-translate-y-px` to simulate a physical press.

**Scope limit:** These states apply only to interactive components. Static content sections (Hero, Testimonials, About) do not need loading, empty, or error states.

## Pre-Output Check

Before finalizing any response, verify:
- No banned patterns appear anywhere in the output
- Every item the user requested is present and finished
- Code blocks contain runnable code, not descriptions
- Nothing was shortened to save space or tokens
