# CLAUDE.md — Portfolio Site

## Meta instructions for LLMs

- **After every series of changes** (i.e. after completing work on a user prompt), ask the user: "Should I create a git commit for these changes?" and suggest a fitting commit message.
- **If you modify core architecture or design** (component structure, CSS design tokens, data shape, animation system, layout patterns, or section organisation), update the relevant section of this file to reflect the change before reporting the task as done.

---

## Dev commands

```bash
npm run dev      # start dev server (Vite, localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview production build locally
```

Package manager: **npm**. Do not use `pnpm` or `yarn`.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Vue 3 (`<script setup>`, Composition API) |
| Build | Vite |
| Styling | Vanilla CSS — no utility framework |
| Icons | `@iconify/vue` with the `simple-icons` set |
| Fonts | Inter (body), Outfit (headings), Courier Prime (typewriter) |

---

## Project structure

```
src/
  data/
    portfolioData.js     # Single source of truth for all content
  components/
    HeroSection.vue
    ExperienceSection.vue
    ToolsSection.vue
    ProjectsSection.vue
    ContactSection.vue
    SectionHeader.vue    # Reusable section index + title + description
    SiteHeader.vue
    SiteFooter.vue
    ScrollArtifacts.vue  # Decorative background sphere/grain
  directives/
    reveal.js            # Custom v-reveal scroll-in animation directive
  style.css              # All global styles — single stylesheet, no scoped CSS
  main.js                # Registers v-reveal directive, mounts app
index.html
vite.config.js
Bachelorthesis_Niklas_Franz.pdf   # Served as static asset from root
```

---

## Content data (`portfolioData.js`)

All user-facing content lives here. Components are purely presentational — **never hardcode copy inside a component**. When adding a new export, document it in the table below before reporting the task as done.

| Export | Shape | Used by |
|---|---|---|
| `name` | string | HeroSection |
| `heroDescription` | string | HeroSection |
| `heroStatus` | string | HeroSection (currently unused in template) |
| `coreSkills` | `{ title, iconPaths[], summary, tags[] }[]` | ExperienceSection |
| `tools` | `{ category, name, icon, color, link }[]` | ToolsSection |
| `projects` | `{ title, date, place, logoPaths[], links[], shortDescription, description, tags[] }[]` | ProjectsSection |
| `contactLinks` | `{ label, title, description, icon, href, color }[]` | ContactSection |
| `footerLegalLinks` | `{ label, href }[]` | SiteFooter |
| `footerSitemapLinks` | `{ label, href }[]` | SiteFooter |

### Icon usage

`coreSkills[].iconPaths` — raw SVG path `d` strings (drawn directly via `<path>`):
```js
iconPaths: ["M8 8 4 12l4 4", "m16 8 4 4-4 4", "m14.5 4-5 16"]
```

`tools[].icon` — Iconify simple-icons slug (the part after `simple-icons:`):
```js
{ icon: "vuedotjs" }   // renders as <Icon icon="simple-icons:vuedotjs" />
```
Always verify the slug exists in the `@iconify-json/simple-icons` package before adding a new tool.

### `heroStatus`

Currently unused in the template. Kept as a content field for a future availability banner. Do not remove it; do not render it elsewhere unless intentionally building that feature.

### Project links
Each link object: `{ label, href, download? }`. If `download` is set to a filename string, the anchor renders with the `download` attribute and no `target="_blank"`.

---

## Design system

### CSS custom properties

```css
--bg: #f4efe5          /* page background, warm off-white */
--bg-soft: #fffaf2     /* card/surface background */
--text: #171412        /* primary text, near-black */
--muted: #59514b       /* secondary text */
--line: #d8ccb9        /* borders and dividers */
--accent: #9f6535      /* primary brand colour, warm brown */
--typewriter: 'Courier Prime', monospace
```

### Typography
- **Headings** — Outfit (500/700/800)
- **Body / UI** — Inter (400/500/600)
- **Descriptive text / code-adjacent** — Courier Prime (`var(--typewriter)`)

### Styling conventions
- All styles in `src/style.css` — **no `<style>` blocks in components**
- BEM-like class naming per section: `.exp-*`, `.project-*`, `.tool-*`, `.hero-*`
- Cards use `border: 1px solid var(--line)` with `border-top: 2px solid var(--accent)`
- Pills/tags use `border-radius: 999px`
- Colour mixing via `color-mix(in srgb, ...)` — no hardcoded one-off colours
- Single responsive breakpoint: `@media (max-width: 700px)`

---

## Component architecture

### HeroSection
Typed animation for credits text, wave emoji intersection observer, scroll offset CSS variable sync. No content props beyond `name`, `description`.

### ExperienceSection
Three-column card grid from `coreSkills`. Cards show icon + title + summary + accent tags. Staggered `v-reveal` on each card.

### ToolsSection
Groups `tools` by `category` computed from the flat array. Each category renders a label (absolutely positioned, left edge) + a centered wrapping pill row. Labels and pills animate left-to-right with staggered delays.

### ProjectsSection
Alternating two-column timeline layout (odd rows flipped). Each row: title pane (left/right) + content card (right/left). Content card shows `shortDescription` always; full `description` expands via a JS-hooked `<Transition>` animating `max-height` + `opacity`. Read more / Read less button is primary style; external links are secondary style.

### v-reveal directive
Adds `.reveal` + `.reveal-from-{direction}` classes. Triggers `.is-visible` via IntersectionObserver. Supports directions: `up`, `down`, `left`, `right`. Options: `delay` (ms), `once` (boolean), `threshold`, `rootMargin`.

---

## Layout

- Sections use `.section` class — centred, max-width constrained
- Project timeline: CSS grid `1fr 1fr` with a `::before` centre line and `::after` dot per row
- Tools: full-width rows, category label absolutely positioned so pills centre across full width
- Responsive breakpoint stacks projects to single column, exp-cards to single column

---

## Static assets

- `Bachelorthesis_Niklas_Franz.pdf` — placed in project root, served at `/Bachelorthesis_Niklas_Franz.pdf` by Vite. **Do not rename, move, or delete this file** — it is a personal academic document linked from the projects section.

---

## Constraints — do not violate

- No `<style>` blocks in `.vue` components — all CSS goes in `src/style.css`
- No new CSS custom properties outside `src/style.css` `:root`
- No utility CSS frameworks (Tailwind etc.) — vanilla CSS only
- Do not hardcode copy in components — all content goes in `portfolioData.js`
- Do not introduce new breakpoints other than `700px`
- Do not add new data exports to `portfolioData.js` without updating the table in this file
