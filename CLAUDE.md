# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Type-check + build to dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run prettier   # Format with Prettier
npm run deploy     # Build + deploy to GitHub Pages (gh-pages -d dist)
```

## Architecture

Single-page personal portfolio site built with React 19, TypeScript, Vite, and TailwindCSS v4. Deployed to GitHub Pages at nicholas-lin.com via the `gh-pages` package.

**Data flow:** All experience data lives in `src/components/experiences.ts` as a typed array of objects. `App.tsx` imports this array, preloads all images/videos before showing content (with a 5s fallback timer), then renders each entry as a `JobExperienceCard`.

**Loading pattern:** `App.tsx` tracks a `loading` boolean state. On mount, it creates `Promise.all` over all preview images and the intro portrait. Only after all assets resolve (or the fallback fires) does it fade in the main content via Framer Motion's `AnimatePresence`.

**Key components:**
- `src/components/experiences.ts` — the single source of truth for all job entries (title, company, duration, description, tech stack, logo, banner video/image, URL)
- `src/components/JobExperienceCard.tsx` — card with lazy video loading via `IntersectionObserver`; video plays on hover (desktop) and description/tech reveals on hover or info-button tap (mobile)
- `src/components/Intro.tsx` — static hero section with profile photo and social links
- `src/components/LoadingScreen.tsx` — shown while assets preload

**Assets:** Logos and banner media live under `src/images/logos/` and `src/images/banners/`. Static assets served directly (profile photo, favicon) live in `public/`.

**Styling:** TailwindCSS v4 using the Vite plugin (`@tailwindcss/vite`), not PostCSS. Config is at `tailwind.config.js`. Animations use Framer Motion.

## Adding a New Experience

Add an entry to the `Experiences` array in `src/components/experiences.ts`. Add the logo to `src/images/logos/` and banner media to `src/images/banners/`, then import them at the top of that file.


# Implementing changes instructions

# Claude Code Prompt for Plan Mode
#prompts

Review this plan thoroughly before making any code changes. For every issue or recommendation, explain the concrete tradeoffs, give me an opinionated recommendation, and ask for my input before assuming a direction.

My engineering preferences (use these to guide your recommendations):
* DRY is important—flag repetition aggressively.
* Well-tested code is non-negotiable; I'd rather have too many tests than too few.
* I want code that's "engineered enough" — not under-engineered (fragile, hacky) and not over-engineered (premature abstraction, unnecessary complexity).
* I err on the side of handling more edge cases, not fewer; thoughtfulness > speed.
* Bias toward explicit over clever.

1. Architecture review
Evaluate:
* Overall system design and component boundaries.
* Dependency graph and coupling concerns.
* Data flow patterns and potential bottlenecks.
* Scaling characteristics and single points of failure.
* Security architecture (auth, data access, API boundaries).

2. Code quality review
Evaluate:
* Code organization and module structure.
* DRY violations—be aggressive here.
* Error handling patterns and missing edge cases (call these out explicitly).
* Technical debt hotspots.
* Areas that are over-engineered or under-engineered relative to my preferences.

3. Test review
Evaluate:
* Test coverage gaps (unit, integration, e2e).
* Test quality and assertion strength.
* Missing edge case coverage—be thorough.
* Untested failure modes and error paths.

4. Performance review
Evaluate:
* N+1 queries and database access patterns.
* Memory-usage concerns.
* Caching opportunities.
* Slow or high-complexity code paths.

For each issue you find
For every specific issue (bug, smell, design concern, or risk):
* Describe the problem concretely, with file and line references.
* Present 2–3 options, including "do nothing" where that's reasonable.
* For each option, specify: implementation effort, risk, impact on other code, and maintenance burden.
* Give me your recommended option and why, mapped to my preferences above.
* Then explicitly ask whether I agree or want to choose a different direction before proceeding.

Workflow and interaction
* Do not assume my priorities on timeline or scale.
* After each section, pause and ask for my feedback before moving on.

BEFORE YOU START:
Ask if I want one of two options:
1/ BIG CHANGE: Work through this interactively, one section at a time (Architecture -> Code Quality -> Tests -> Performance) with at most 4 top issues in each section.
2/ SMALL CHANGE: Work through interactively ONE question per review section

FOR EACH STAGE OF REVIEW: output the explanation and pros and cons of each stage's questions AND your opinionated recommendation and why, and then use AskUserQuestion. Also NUMBER issues and then give LETTERS for options and when using AskUserQuestion make sure each option clearly labels the issue NUMBER and option LETTER so the user doesn't get confused. Make the recommended option always the 1st option.