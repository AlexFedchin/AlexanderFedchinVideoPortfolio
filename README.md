# Alexander Fedchin — Portfolio

A premium, cinematic portfolio for a photographer & videographer. Deep rich‑black
theme, frosted "liquid glass" surfaces, champagne accents and Apple‑smooth motion.
Built to be **fast**, **accessible**, and — above all — **trivial to maintain**:
all content lives in three data files.

> Migrated from the original Webnode site
> (<https://alexander-fedchin.webnode.page/>): name, role, location, the welcome
> text, photo/video categories and the Instagram/YouTube links. Bio, equipment,
> experience and the sample gallery items are tasteful placeholders — clearly
> marked in the data files — for you to replace.

---

## Tech stack

| | |
|---|---|
| Framework | **React 18** (JavaScript, no TypeScript) |
| Build tool | **Vite 5** |
| Styling | **Tailwind CSS 3** (the only UI dependency) |
| Routing | **React Router 6** |
| Icons | **Hand‑drawn custom SVGs** (no Lucide / no icon library) |
| Animation | **CSS + IntersectionObserver** (no animation library) |
| Backend | **None** — 100% static |

No Next.js · no Radix · no shadcn/ui · no Material UI · no component libraries.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Requires Node 18+.

---

## Project structure

```
src/
├── assets/
│   └── photos/            # ← your image files live here (only place)
├── components/
│   ├── gallery/           # MasonryGallery, PhotoCard, CategoryFilter, Lightbox
│   ├── layout/            # RootLayout, Navbar, Footer, Background, transitions
│   ├── ui/                # Button, GlassPanel, SectionHeading, icons, etc.
│   └── video/             # VideoGrid, VideoCard, VideoThumbnail, VideoPlayer
├── data/
│   ├── site.js            # identity, bio, contact, socials, nav, services
│   ├── photos.js          # the entire photo gallery
│   └── videos.js          # the entire video catalogue
├── hooks/                 # useInView, useBodyScrollLock, useSwipe, useScrolled
├── pages/                 # Home, Photography, Videos, VideoDetail, About, Contact, NotFound
├── utils/                 # image resolver, placeholder generator, youtube helpers
├── App.jsx                # routes (lazy‑loaded)
├── main.jsx               # entry
└── index.css              # design system (Tailwind layers)
```

---

## Content management

> **Rule:** components never hardcode content. Everything comes from `src/data/`.

### Add a photo

1. Drop the image into [`src/assets/photos/`](src/assets/photos/).
2. Add **one object** to [`src/data/photos.js`](src/data/photos.js):

```js
{
  id: 15,
  title: 'Sunset over Pyynikki',
  category: 'Landscapes',          // creates/uses a filter automatically
  image: 'sunset-over-pyynikki.jpg', // the filename you just added
  featured: true,                  // show in the Home "Featured" section
}
```

That's it. Images are picked up automatically (`import.meta.glob`), fingerprinted
for caching, and optimised by the build.

### Add a video

Add **one object** to [`src/data/videos.js`](src/data/videos.js) — no files to manage,
thumbnails come from YouTube:

```js
{
  id: 9,
  slug: 'my-new-film',         // detail page → /videos/my-new-film
  title: 'My New Film',
  youtubeId: 'dQw4w9WgXcQ',     // the id from the YouTube URL
  description: 'A short blurb shown on the detail page.',
  category: 'Short Films',
  featured: true,
}
```

### Edit identity, bio, contact & socials

All in [`src/data/site.js`](src/data/site.js): name, role, location, email, the
intro text, navigation, social links, services, stats, the About bio/equipment/
experience, and Contact copy.

---

## Placeholder system (why the site looks complete with zero photos)

The sample data references image filenames that don't exist yet. Rather than show
broken images, [`src/utils/placeholder.js`](src/utils/placeholder.js) generates a
cohesive, dark, champagne‑lit **SVG placeholder** per item (with a stable aspect
ratio so the masonry still varies). The instant you drop a real file with the
matching name into `src/assets/photos/`, it takes over — no code change. Video
thumbnails use public Blender open‑movie clips as stand‑ins until you swap in your
own `youtubeId`s.

---

## Design system

Defined once, used everywhere:

- **Tokens** — colours (`ink`, `bone`, `champagne`), fonts, shadows, blur,
  keyframes and easings live in [`tailwind.config.js`](tailwind.config.js).
- **Primitives** — `.glass` / `.glass-strong`, `.btn*`, `.chip*`, `.eyebrow`,
  `.text-gradient`, `.reveal`, `.grain` and the rich‑black canvas live in
  [`src/index.css`](src/index.css).
- **Type** — *Fraunces* (editorial display serif) + *Inter* (UI), loaded in
  [`index.html`](index.html).

---

## Architecture decisions

- **CSS multi‑column masonry** (not a JS masonry lib) — zero layout thrashing,
  fast, and it embraces mixed aspect ratios.
- **`import.meta.glob` image resolver** — lets the data files reference images by
  plain filename so "add a photo" is genuinely one object, while Vite still
  fingerprints/optimises every asset.
- **Route‑level code splitting** (`React.lazy`) — the initial load ships only the
  shell + landing route; each page is its own chunk; React/Router are a separate
  long‑cached vendor chunk.
- **No animation library** — reveal‑on‑scroll is a tiny `IntersectionObserver`
  hook + CSS transitions; page transitions key on the pathname. Smaller bundle,
  full control, and it all respects `prefers-reduced-motion`.
- **Controlled lightbox** — the page owns the open index so the lightbox's
  prev/next always matches the currently filtered set.
- **BrowserRouter + SPA fallback** — clean URLs (e.g. `/videos/:slug`) with a
  static redirect rule (see Deployment).

---

## Performance

- Route‑based code splitting + a dedicated `react-vendor` chunk.
- Native lazy‑loading (`loading="lazy"`) + async decode on every image; blur‑up
  fade‑in; the YouTube iframe is lazy and only mounts on the detail page.
- Lightbox preloads the previous/next image for instant navigation.
- `IntersectionObserver` disconnects after firing; filtered lists are memoised.
- Aspect‑ratio boxes for video/placeholders avoid layout shift (good CLS).

### Image optimisation (recommended)

- Use **WebP/AVIF** (or optimised JPEG).
- Resize the longest edge to ~**2000–2400px**; aim for **< 400 KB** each.
- Tools: [Squoosh](https://squoosh.app), ImageOptim, or `sharp`.

---

## Accessibility (targets WCAG AA)

- Semantic landmarks (`header` / `nav` / `main` / `footer`), correct heading order.
- "Skip to content" link; visible champagne **focus rings** on all interactives.
- **Full keyboard support** in the lightbox: `←` / `→` navigate, `Esc` closes,
  focus is trapped while open and restored to the trigger on close.
- Icon‑only buttons have `aria-label`s; images have descriptive `alt` text;
  filters expose `aria-pressed`; the dialog uses `role="dialog"` + `aria-modal`.
- All motion is disabled under `prefers-reduced-motion`.

---

## Deployment (static hosting)

Build with `npm run build` and serve `dist/`. Because routing is client‑side, the
host must serve `index.html` for unknown paths (SPA fallback).

- **Netlify** — already handled by [`public/_redirects`](public/_redirects)
  (`/* /index.html 200`). Build `npm run build`, publish `dist`.
- **Vercel** — add `vercel.json`:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```
- **GitHub Pages** — after building, copy `dist/index.html` to `dist/404.html`
  (GH Pages serves `404.html` for unknown routes). If hosting under a sub‑path,
  set Vite `base` and a Router `basename`.
- **Apache** — add an `.htaccess` that rewrites all non‑file requests to
  `index.html`.

---

## Credits

Design & build for **Alexander Fedchin** · Photographer & Videographer · Tampere,
Finland. Fonts: Fraunces & Inter (Google Fonts). Placeholder motion clips:
Blender Foundation open movies.
