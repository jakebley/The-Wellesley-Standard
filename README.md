# 1881 — The Wellesley Standard

A magazine-style media and events site for Wellesley, Massachusetts.

Built with [Astro](https://astro.build). Content currently lives in local content
collections (`src/content/`); see the master build plan for the Sanity CMS migration
planned for Checkpoint 2.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------- | :----------------------------------------------- |
| `npm install`         | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build the production site to `./dist/`           |
| `npm run preview`      | Preview the build locally, before deploying      |
| `npx astro check`      | Type-check the project                           |

## Project structure

- `src/content/` — local content collections (House of the Week, Streets of Wellesley, Living Here, Events)
- `src/content.config.ts` — content schemas
- `src/pages/` — routes
- `src/layouts/BaseLayout.astro` — shared nav/header/footer
- `src/components/` — Logo, Seal (brand mark)
- `src/styles/global.css` — design tokens (palette, type scale)
