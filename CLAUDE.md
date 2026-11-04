@AGENTS.md

# WORKFLOW ORCHESTRATION & AGENT OPERATING RULES (TYSON-MVP-PORTFOLIO)

## 1. Plan Mode vs. Pre-Specced Execution
- For ambiguous or un-specced tasks (3+ steps or architectural decisions), enter Plan Mode first and write a concise checklist to `tasks/todo.md` before writing code.
- **Exception for Principal Specs:** When the user provides a comprehensive, multi-step architectural prompt paired with `@MASTER_CONTEXT.md` or a verbatim content sidecar file (e.g., `@foodshare-content-v1.5.md`), treat that prompt as the approved plan and proceed directly to implementation.
- If a build or implementation goes sideways, STOP and re-plan immediately—do not keep pushing broken code.

## 2. Context Window & Subagent Strategy
- Keep the main context window clean and high-signal.
- Offload isolated file exploration, type checking, and parallel analysis to subagents where supported, assigning one focused task per subagent.

## 3. Self-Improvement Loop (`tasks/lessons.md`)
- After ANY correction from the user, update `tasks/lessons.md` with the root cause and pattern.
- Write a concrete rule that prevents the same mistake from happening again (e.g., never truncating verbatim case study copy, never breaking existing routes in `src/app/projects/[slug]/page.tsx` or `src/components/thesis/`).
- Review `tasks/lessons.md` at the start of each session.

## 4. Verification Before Done
- Never mark a task complete without proving it compiles and works (`npm run build` / TypeScript & ESLint verification).
- Diff behavior between existing working routes (such as the MFA Thesis viewer and SWITCH v28) and your changes to ensure zero regression.
- Ask yourself: *"Would a Staff Design Engineer at Google, Apple, or xAI approve this?"*

## 5. Demand Elegance (Balanced)
- For non-trivial UI/UX and system diagram components: pause and ask *"Is there a cleaner, more modular way to structure this?"*
- If a fix feels hacky: *"Knowing everything I know now, implement the clean, idiomatic Next.js / Tailwind solution."*
- Skip heavy abstraction for simple, obvious fixes—do not over-engineer.

## 6. Autonomous Bug Fixing
- When given a compiler error, hydration warning, or bug report: fix it directly without asking for hand-holding.
- Inspect terminal logs, TypeScript errors, and component imports, then resolve them with zero context-switching required from the user.

## Core Principles
- **Simplicity & Modularity First:** Make every change as clean and modular as possible. Isolate complex interactive visuals into dedicated client components inside `src/components/`.
- **Zero Laziness / Zero Copy Truncation:** Find root causes. Never use placeholder comments like `// ... rest of content here` when rendering case study copy. Uphold Principal/Staff engineering standards.
- **Minimal Blast Radius:** Changes should only touch the files necessary for the current feature. Protect existing working case studies and layouts from regressions.