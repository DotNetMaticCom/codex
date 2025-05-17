# Agent Development Guide

This document defines the architectural rules you must follow while extending the ERP frontend.

## 1. Project Structure & Routing
- The codebase uses **Next.js App Router**. Every folder under `src/app` is a distinct business module (e.g. `/sales`, `/accounting`, `/hr`, …).
- Each module owns:
  - `page.tsx` – its landing page
  - `layout.tsx` – optional, for module-specific chrome (sub-sidebar, tabs, etc.)
- Global UI skeleton lives in `src/app/layout.tsx`.
- When adding a new module, mirror this pattern exactly.

## 2. Component Architecture
- Reusable UI elements belong in `src/components`.  
  Place a component here **if it’s useful to more than one module.**
- Keep components **presentational** whenever possible. State management and data fetching occur outside.
- Complex widgets may be broken into sub-components; nest those in the same folder.
- Add Storybook stories (if the repo uses Storybook) so components can be isolated and tested.

## 3. Tailwind CSS Rules
- Use Tailwind utility classes as the first choice for styling.
- Respect the design tokens defined in `tailwind.config.js` (colors, spacing, radius, …). Never hard-code hex values that duplicate a token.
- Consistency matters: identical UI patterns must reuse the same class sets.
- Write additional CSS only when a design cannot be expressed cleanly with utilities; place it in a local CSS Module or in `globals.css`.

## 4. Data & State Management
- **React Query** (TanStack Query) is the single source of truth for server state.
- Never perform fetch/axios calls directly inside page or UI components. Implement them in `src/services/…` and import the function inside React-Query hooks.
- Global client state (auth, permissions, current company, …) goes into React Context or a thin Redux slice, not into React Query cache.
- When the backend evolves from REST to GraphQL, adapt only the service layer; component interfaces must remain stable.

## 5. Internationalization
- All visible strings come from translation files (`public/locales/**`).  
  Use `t('key')` or `<Trans>` helpers—**never** inline Turkish or English text.
- When you create new UI text, add keys to every locale file (`tr`, `en`, …) with accurate translations.
- Follow Next.js locale routing conventions when linking between pages.

## 6. Code Quality
- TypeScript everywhere; no `any` unless unavoidable.
- ESLint + Prettier configs are enforced—pass all checks before committing.
- Name React components in **PascalCase**, variables/functions in **camelCase**.
- Provide inline comments for non-obvious logic, magic numbers, or complex regexes.

## 7. Performance
- Memoize heavy components (`React.memo`, `useMemo`, `useCallback`) when they re-render excessively.
- Consider `next/dynamic` for large, rarely-used chunks.
- Trust Tailwind JIT for CSS size; avoid custom classes that balloon the stylesheet.

## 8. Documentation & Hand-off
- Update `README.md` with setup or architectural changes.
- Keep this `agent.md` current—if you introduce a new library or pattern, document it here.
- Commit atomically: one logical change per commit with a descriptive message.

Follow these rules and the codebase will stay clean, scalable, and easy for humans and AIs to work on together.
