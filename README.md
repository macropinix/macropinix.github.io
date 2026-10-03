# macropinix.github.io

Engineering portfolio for **Macropinix** — practical software for data,
systems, networks, and interaction by Mani Kamran.

Built with [Astro](https://astro.build). Fully static, deployed to GitHub
Pages.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview the production build |

`npm run check` runs in CI, so type errors fail the deploy rather than
shipping.

## Structure

```
src/
  assets/shots/     Project screenshots (imported through astro:assets)
  components/       Astro components, scoped styles
  data/
    projects.ts     Project content: one entry per project
    services.ts     Service offerings
  layouts/
    BaseLayout.astro  Head metadata, canonical URL, global motion driver
  pages/
    work/[slug].astro  Single template for every project page
  styles/global.css  Design tokens, base styles, radar ring
public/             Files copied verbatim (favicons, og-image)
```

## Adding a project

Add one entry to `src/data/projects.ts`. The listing on the home page, the
detail page, its canonical URL, the sitemap, and the "next project" links are
all generated from that entry — no page file needs to be created or edited.

Screenshots go in `src/assets/shots/` and are imported by the entry. They are
optimised and served as responsive WebP automatically.

## Notes

- Every page derives its own `canonical` URL from its route, so a page cannot
  accidentally claim the site root.
- The social preview image must be a raster format at an absolute URL;
  `public/og-image.png` is 1200×630.
- The interface uses a restrained, CSS-only visual system and respects
  `prefers-reduced-motion`; there are no animation or font-service dependencies.
- Images use `astro:assets` (`<Image>`), which outputs `srcset` variants and
  explicit dimensions to avoid layout shift.
