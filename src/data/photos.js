/**
 * PHOTOS — the entire photography gallery lives in this array.
 * One unified gallery, no categories.
 *
 * ── To add a photo ──────────────────────────────────────────────────────
 *   1. Drop the image file into  src/assets/photos/
 *   2. Add one object below.
 *
 * Fields:
 *   id        unique number (React key + lightbox order)
 *   title     shown in the lightbox + used as the alt text
 *   image     the FILENAME inside src/assets/photos/  (e.g. 'sunset.jpg')
 *             — a full http(s) URL also works.
 *   featured  true → appears in the "Featured" section on the Home page
 *
 * Note: the `image` filenames below don't exist yet, so each renders an
 * elegant generated placeholder. Drop a real file with the matching name into
 * src/assets/photos/ and it takes over automatically — no code change needed.
 */

export const photos = [
  { id: 1, title: "Don't Look", image: 'dont-look.jpg', featured: true },
  { id: 2, title: 'Quiet Hours', image: 'quiet-hours.jpg', featured: false },
  { id: 3, title: 'Smoke & Silk', image: 'smoke-and-silk.jpg', featured: true },
  { id: 4, title: 'Afterglow', image: 'afterglow.jpg', featured: false },
  { id: 5, title: 'The Stillness', image: 'the-stillness.jpg', featured: false },
  { id: 6, title: 'Northern Silence', image: 'northern-silence.jpg', featured: true },
  { id: 7, title: 'Lakeside, Pyynikki', image: 'lakeside-pyynikki.jpg', featured: false },
  { id: 8, title: 'Pine & Fog', image: 'pine-and-fog.jpg', featured: true },
  { id: 9, title: 'First Snow', image: 'first-snow.jpg', featured: false },
  { id: 10, title: 'Midnight Sun', image: 'midnight-sun.jpg', featured: false },
  { id: 11, title: 'Tampere Nights', image: 'tampere-nights.jpg', featured: true },
  { id: 12, title: 'Concrete Poem', image: 'concrete-poem.jpg', featured: false },
  { id: 13, title: 'Tram Lines', image: 'tram-lines.jpg', featured: false },
  { id: 14, title: 'Neon Rain', image: 'neon-rain.jpg', featured: false },
];

/** Featured subset, used by the Home page. */
export const featuredPhotos = photos.filter((p) => p.featured);
