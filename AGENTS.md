<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Overview

This is a portfolio website built with Next.js 16, React 19.2, TypeScript, Tailwind CSS, and Biome for linting.

### Tech Stack
- **Framework**: Next.js 16.3.4 (App Router)
- **Runtime**: Turbopack (default, no explicit flags needed)
- **Styling**: Tailwind CSS v4, PostCSS
- **Linting**: Biome (not ESLint)
- **React Compiler**: Enabled as a stable configuration option
- **Package Manager**: pnpm

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `lib/` - Utility functions
- `public/` - Static assets

### Important Notes for Agents
1. When writing new code, check `node_modules/next/dist/docs/` for current APIs and patterns
2. All async request APIs (params, searchParams, cookies, headers, draftMode) must be awaited
3. Use Biome for linting - run `pnpm lint` or `pnpm format`
4. Turbopack is enabled by default - no need for `--turbopack` flag
5. React Compiler is enabled as a stable feature
