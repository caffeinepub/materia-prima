# Materia Prima

## Current State
The blog has 4 articles stored in the Motoko backend via an `initialize()` function called on app load. The articles are stored in an in-memory `Map<Nat, Article>`. The frontend fetches articles via `getArticles()` backend call. Users are reporting that only 3 articles appear.

The root cause: the backend `initialize()` call is async and fires in a `useEffect` in App.tsx, but the `useGetArticles` query may run before `initialize()` completes (race condition). Additionally, in-memory state resets on canister upgrades, making the timing dependency even more fragile.

## Requested Changes (Diff)

### Add
- Static article data defined directly in the frontend (no backend dependency for article list)
- All 4 articles always visible without any async initialization race

### Modify
- `ArticoliPage.tsx`: use static local articles instead of `useGetArticles()` hook
- `ArticoloPage.tsx`: use static local articles instead of `useGetArticle()` hook
- `HomePage.tsx`: use static articles if it references them
- Move article data to a shared `src/data/articles.ts` file

### Remove
- Dependency on backend `initialize()` call for article visibility
- `useGetArticles` and `useGetArticle` hooks usage in article pages (can keep hooks for future use)

## Implementation Plan
1. Create `src/frontend/src/data/articles.ts` with all 4 articles as a static TypeScript array
2. Update `ArticoliPage.tsx` to import and use static articles
3. Update `ArticoloPage.tsx` to import and use static articles (find by id)
4. Update `HomePage.tsx` if it uses articles from backend
5. Keep backend and hooks intact for future dynamic use
