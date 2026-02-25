# Agent Rules — NextWave Mortgage Codebase

These rules apply to **all** AI agents (and humans) working on this repo.

## Routing & SEO

- **Do not add, remove, or rename a route** without documenting the old → new
  path in a `redirects` entry in `next.config.ts`.
- Every public page must export `metadata` (title + description).

## Architecture

- **Pages must stay thin.** A page file should import and compose components
  from `src/components/` — not contain large blocks of markup.
- Use the `(marketing)` route group for all public-facing pages.
- Prefer **MDX** (in `src/content/`) for long-form or frequently-updated text.

## Dependencies

- Do **not** add a new npm dependency without a comment in the PR explaining
  why it is needed and what alternatives were considered.
- Keep the bundle small. No full UI-component libraries.

## Code Quality

- Run `npm run lint` and `npm run format` before finishing any task.
- Do not disable ESLint or TypeScript rules without justification.

## Content

- Blog posts go in `src/content/blog/` as `.mdx` files.
- Loan program pages go in `src/content/programs/` as `.mdx` files.
- Images referenced in MDX go in `public/images/`.

## Environment Variables

- Never commit real secrets. Use `.env.example` as the template.
- Access env vars through `src/lib/site.ts` or Next.js built-in env handling.
