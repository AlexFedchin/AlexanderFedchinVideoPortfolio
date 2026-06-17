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
  "Short Films",
  "Music Videos",
  "VFX Breakdowns",
  "Commercials",
];

/** Which categories open an on-site detail page (vs. linking out to YouTube). */
export const DETAIL_CATEGORIES = new Set(["Short Films", "Music Videos"]);

export const videos = [
  // ── Short Films ──────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "northern-lights",
    category: "Short Films",
    title: "H.A.S.I.",
    year: 2022,
    genre: "Sc-Fi",
    youtubeId: "mFN_6nZpqt8",
    poster: "hasi.jpg",
    description:
      "Emily returns from vacation and becomes a hostage of her own smart home. At first, it looks like a minor glitch in the system, but soon she realises that everything is much worse...",
    credits: {
      shotBy: "Sergey Fedchin",
      starring: "Polina Sigitova, Arseniy Ershov, Alexander Fedchin",
      editedBy: "Alexander Fedchin",
    },
    laurels: [
      { image: "laurel-tampere-2024-official-selection.png" },
      { image: "laurel-nordic-shorts-2024-best-cinematography.png" },
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "mystical-things-2",
    category: "Short Films",
    title: "Mystical Things 2",
    year: 2019,
    genre: "Thriller",
    youtubeId: "13UDubkMbvs",
    poster: "mystical-things-2.webp",
    description:
      "After saving Max, the three friends decide to move on with their lives and forget about the case. However, there is something weird happening with Max again. Did he ever leave the Dark Side? Or did the Dark Side leave him?",
    credits: {
      shotBy: "Alexander Fedchin",
      starring: "Elias Korhonen",
      editedBy: "Alexander Fedchin",
    },
    laurels: [
      { image: "laurel-helsinki-shorts-2023-official-selection.png" },
    ],
    featured: true,
  },
  {
    id: 3,
    slug: "mystical-things",
    category: "Short Films",
    title: "Mystical Things",
    year: 2018,
    genre: "Thriller",
    youtubeId: "XFlFn6nq71k",
    poster: "mystical-things.webp",
    description:
      "One of the three friends, Max, mystically disappears in the forest, so Alex and Dana decide to investigate this case and try to find their missing friend. However, everything becomes even more complicated when they find a weird girl in the same forest.",
    credits: {
      shotBy: "Sergey Fedchin, Alexander Fedchin",
      starring:
        "Uliana Abrosimenkova, Mariia Antonova, Sergey Fedchin, Alexander Fedchin",
      editedBy: "Alexander Fedchin",
    },
    laurels: [],
    featured: false,
  },

  // ── Music Videos ─────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "sing-me-to-sleep",
    category: "Music Videos",
    title: "Alan Walker - Sing Me To Sleep",
    year: 2017,
    youtubeId: "VeKhANofxHo",
    cover: "sing-me-to-sleep.webp",
    credits: {
      shotBy: "Sergey Fedchin, Alexander Fedchin",
      starring: "Alexander Fedchin, Sergey Fedchin",
      editedBy: "Alexander Fedchin",
    },
    featured: true,
  },
  {
    id: 5,
    slug: "on-20th-floor",
    category: "Music Videos",
    title: "На 20 этаже",
    year: 2020,
    youtubeId: "WOzC85M5LPY",
    cover: "on-20-floor.webp",
    credits: {
      shotBy: "Sergey Fedchin, Alexander Fedchin",
      starring: "Alexander Kharauzov, Ivan Fomin, Liza Virolainen",
      editedBy: "Alexander Fedchin",
    },
    featured: false,
  },
  {
    id: 6,
    slug: "tell-me",
    category: "Music Videos",
    title: "MiyaGi & Andy Panda - Говори мне",
    year: 2022,
    youtubeId: "-fnq3uRQx34",
    cover: "tell-me.jpg",
    credits: {
      shotBy: "Uliana Abrosimenkova",
      starring: "Alexander Fedchin, Ayza Shvetsova, Anton Fedchin",
      editedBy: "Alexander Fedchin",
    },
    featured: false,
  },

  // ── VFX Breakdowns ───────────────────────────────────────────────────────
  {
    id: 7,
    slug: "hasi-breakdown",
    category: "VFX Breakdowns",
    title: "H.A.S.I. VFX Breakdown",
    year: 2022,
    youtubeId: "bNYjja9Bzng",
    cover: "hasi-breakdown.webp",
    description:
      "A showreel of VFX done for the H.A.S.I. short film, including compositing, tracking and 3D work.",
    featured: false,
  },
  {
    id: 8,
    slug: "mystical-things-2-breakdown",
    category: "VFX Breakdowns",
    title: "Mystical Things 2 VFX Breakdown",
    year: 2019,
    youtubeId: "qjV2-vz5vAQ",
    cover: "mystical-things-2-breakdown.webp",
    description:
      "Behind the scenes of the VFX work for Mystical Things 2, including compositing, rotoscoping, 3D graphics and particle simulations.",
    featured: false,
  },

  // ── Commercials ──────────────────────────────────────────────────────────
  {
    id: 10,
    slug: "aurora-watches",
    category: "Commercials",
    title: "Aurora Watches",
    year: 2024,
    youtubeId: "R6MlUcmOul8",
    description:
      "A 30-second product spot for a Nordic watchmaker — macro detail meets wide landscape.",
    featured: false,
  },
  {
    id: 11,
    slug: "nordic-coffee",
    category: "Commercials",
    title: "Nordic Coffee Co.",
    year: 2023,
    youtubeId: "WhWc3b3KhnY",
    description:
      "Warm, tactile brand film for a local roastery, shot on location across a single morning.",
    featured: false,
  },
  {
    id: 12,
    slug: "lakeside-resort",
    category: "Commercials",
    title: "Lakeside Resort",
    year: 2022,
    youtubeId: "SkVqJ1SGeL0",
    description:
      "Aerial-led tourism spot capturing the calm of a lakeside resort through the seasons.",
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
  return {
    prev: prev === current ? null : prev,
    next: next === current ? null : next,
  };
}

/** Up to `limit` other videos in the same category (for "Related"). */
export function getRelatedVideos(slug, limit = 3) {
  const current = getVideoBySlug(slug);
  if (!current) return [];
  return getVideosByCategory(current.category)
    .filter((v) => v.slug !== slug)
    .slice(0, limit);
}
