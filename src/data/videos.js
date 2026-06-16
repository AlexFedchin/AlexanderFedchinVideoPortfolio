/**
 * VIDEOS — the entire video catalogue, split into four sections:
 *   'Short Films' · 'Music Videos' · 'VFX Breakdowns' · 'Commercials'
 *
 * Each category uses only the fields it needs (see below). Thumbnails, embeds
 * and the "watch" link are all derived from `youtubeId`, so the only thing you
 * ever manage by hand is this file (+ optional poster/cover/laurel images in
 * src/assets/photos/).
 *
 * ── Common fields ────────────────────────────────────────────────────────
 *   id, slug, category, title, year, youtubeId, featured
 *
 * ── Short Films ──────────────────────────────────────────────────────────
 *   + genre, description, poster (image filename)
 *   + credits: { shotBy, starring, editedBy }
 *   + laurels: [{ title, event, year, image? }]   // festival/award laurels
 *   → rich detail page at /videos/:slug
 *
 * ── Music Videos ─────────────────────────────────────────────────────────
 *   + cover (image filename)
 *   + credits: { shotBy, starring, editedBy }
 *   → detail page at /videos/:slug
 *
 * ── VFX Breakdowns / Commercials ─────────────────────────────────────────
 *   + description
 *   → link straight out to YouTube
 *
 * NOTE: `youtubeId`s below are public Blender open-movie clips used as
 * stand-ins. Poster/cover/laurel image filenames don't exist yet, so generated
 * placeholders are shown until you drop real files into src/assets/photos/.
 */

export const VIDEO_CATEGORIES = [
  'Short Films',
  'Music Videos',
  'VFX Breakdowns',
  'Commercials',
];

/** Which categories open an on-site detail page (vs. linking out to YouTube). */
export const DETAIL_CATEGORIES = new Set(['Short Films', 'Music Videos']);

export const videos = [
  // ── Short Films ──────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'northern-lights',
    category: 'Short Films',
    title: 'Northern Lights',
    year: 2024,
    genre: 'Drama',
    youtubeId: 'eRsGyueVLvQ',
    poster: 'northern-lights-poster.jpg',
    description:
      'A short film shot across a single Finnish winter night, following one character through the cold and the quiet toward first light. A study in patience, silence and the colour of snow after dark.',
    credits: {
      shotBy: 'Alexander Fedchin',
      starring: 'Aino Virtanen, Mikko Laine',
      editedBy: 'Alexander Fedchin',
    },
    laurels: [
      { title: 'Official Selection', event: 'Tampere Film Festival', year: '2024' },
      { title: 'Best Cinematography', event: 'Nordic Shorts', year: '2024' },
    ],
    featured: true,
  },
  {
    id: 2,
    slug: 'the-long-way-home',
    category: 'Short Films',
    title: 'The Long Way Home',
    year: 2023,
    genre: 'Drama',
    youtubeId: 'R6MlUcmOul8',
    poster: 'the-long-way-home-poster.jpg',
    description:
      'A slow-burn narrative piece about distance and return, built around long lenses, practical light and a patient edit.',
    credits: {
      shotBy: 'Alexander Fedchin',
      starring: 'Elias Korhonen',
      editedBy: 'Alexander Fedchin',
    },
    laurels: [{ title: 'Official Selection', event: 'Helsinki Shorts', year: '2023' }],
    featured: true,
  },
  {
    id: 3,
    slug: 'bloom',
    category: 'Short Films',
    title: 'Bloom',
    year: 2022,
    genre: 'Experimental',
    youtubeId: 'WhWc3b3KhnY',
    poster: 'bloom-poster.jpg',
    description:
      'A wordless visual poem on the turn from winter into spring — texture, colour and motion doing all the talking.',
    credits: {
      shotBy: 'Alexander Fedchin',
      starring: 'Sofia Niemi',
      editedBy: 'Alexander Fedchin',
    },
    laurels: [],
    featured: false,
  },

  // ── Music Videos ─────────────────────────────────────────────────────────
  {
    id: 4,
    slug: 'echoes',
    category: 'Music Videos',
    title: 'Echoes',
    year: 2024,
    youtubeId: 'mN0zPOpADL4',
    cover: 'echoes-cover.jpg',
    credits: {
      shotBy: 'Alexander Fedchin',
      starring: 'HALO',
      editedBy: 'Alexander Fedchin',
    },
    featured: true,
  },
  {
    id: 5,
    slug: 'daybreak',
    category: 'Music Videos',
    title: 'Daybreak',
    year: 2023,
    youtubeId: 'SkVqJ1SGeL0',
    cover: 'daybreak-cover.jpg',
    credits: {
      shotBy: 'Alexander Fedchin',
      starring: 'Lumi',
      editedBy: 'Niko Aalto',
    },
    featured: false,
  },
  {
    id: 6,
    slug: 'daydream',
    category: 'Music Videos',
    title: 'Daydream',
    year: 2022,
    youtubeId: 'YE7VzlLtp-4',
    cover: 'daydream-cover.jpg',
    credits: {
      shotBy: 'Alexander Fedchin',
      starring: 'The Pinecones',
      editedBy: 'Alexander Fedchin',
    },
    featured: false,
  },

  // ── VFX Breakdowns ───────────────────────────────────────────────────────
  {
    id: 7,
    slug: 'cosmos-breakdown',
    category: 'VFX Breakdowns',
    title: 'Cosmos — Set Extension',
    year: 2024,
    youtubeId: 'Y-rmzh0PI3c',
    description:
      'Layer-by-layer breakdown of a digital set extension: plate, tracking, matte painting, lighting and final comp.',
    featured: false,
  },
  {
    id: 8,
    slug: 'creature-fx-breakdown',
    category: 'VFX Breakdowns',
    title: 'Creature FX',
    year: 2023,
    youtubeId: 'aqz-KE-bpKQ',
    description:
      'From rough animation to final render — a quick look at the simulation and lighting passes behind a creature shot.',
    featured: false,
  },
  {
    id: 9,
    slug: 'cityscape-breakdown',
    category: 'VFX Breakdowns',
    title: 'Cityscape Comp',
    year: 2023,
    youtubeId: 'eRsGyueVLvQ',
    description: 'Compositing a night cityscape: sky replacement, reflections, light wrap and grade.',
    featured: false,
  },

  // ── Commercials ──────────────────────────────────────────────────────────
  {
    id: 10,
    slug: 'aurora-watches',
    category: 'Commercials',
    title: 'Aurora Watches',
    year: 2024,
    youtubeId: 'R6MlUcmOul8',
    description: 'A 30-second product spot for a Nordic watchmaker — macro detail meets wide landscape.',
    featured: false,
  },
  {
    id: 11,
    slug: 'nordic-coffee',
    category: 'Commercials',
    title: 'Nordic Coffee Co.',
    year: 2023,
    youtubeId: 'WhWc3b3KhnY',
    description: 'Warm, tactile brand film for a local roastery, shot on location across a single morning.',
    featured: false,
  },
  {
    id: 12,
    slug: 'lakeside-resort',
    category: 'Commercials',
    title: 'Lakeside Resort',
    year: 2022,
    youtubeId: 'SkVqJ1SGeL0',
    description: 'Aerial-led tourism spot capturing the calm of a lakeside resort through the seasons.',
    featured: false,
  },
];

/* ── Derived helpers ──────────────────────────────────────────────────────── */

/** Featured subset, used by the Home page. */
export const featuredVideos = videos.filter((v) => v.featured);

/** All videos in a category, in authored order. */
export const getVideosByCategory = (category) =>
  videos.filter((v) => v.category === category);

/** Look up a single video by slug (detail route). */
export const getVideoBySlug = (slug) => videos.find((v) => v.slug === slug);

/** Does this video open an on-site detail page? */
export const hasDetailPage = (video) => DETAIL_CATEGORIES.has(video?.category);

/**
 * Previous / next within the SAME category, wrapping so it never dead-ends.
 */
export function getVideoNeighbors(slug) {
  const current = getVideoBySlug(slug);
  if (!current) return { prev: null, next: null };
  const list = getVideosByCategory(current.category);
  const i = list.findIndex((v) => v.slug === slug);
  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];
  return { prev: prev === current ? null : prev, next: next === current ? null : next };
}

/** Up to `limit` other videos in the same category (for "Related"). */
export function getRelatedVideos(slug, limit = 3) {
  const current = getVideoBySlug(slug);
  if (!current) return [];
  return getVideosByCategory(current.category)
    .filter((v) => v.slug !== slug)
    .slice(0, limit);
}
