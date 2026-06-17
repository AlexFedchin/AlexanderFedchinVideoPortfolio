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
 *   image     the FILENAME inside src/assets/photos/  (e.g. 'sunset.jpg')
 *             — a full http(s) URL also works.
 *   featured  true → appears in the "Featured" section on the Home page
 *
 * Note: the `image` filenames below don't exist yet, so each renders an
 * elegant generated placeholder. Drop a real file with the matching name into
 * src/assets/photos/ and it takes over automatically — no code change needed.
 */

export const photos = [
  { id: 1, image: "dont-look.png", featured: true },
  { id: 2, image: "quiet-hours.jpg", featured: false },
  { id: 3, image: "smoke-and-silk.jpg", featured: true },
  { id: 4, image: "afterglow.jpg", featured: false },
  { id: 5, image: "the-stillness.jpg", featured: false },
  { id: 6, image: "northern-silence.jpg", featured: true },
  { id: 7, image: "lakeside-pyynikki.jpg", featured: false },
  { id: 8, image: "pine-and-fog.jpg", featured: true },
  { id: 9, image: "first-snow.jpg", featured: false },
  { id: 10, image: "midnight-sun.jpg", featured: false },
  { id: 11, image: "tampere-nights.jpg", featured: true },
  { id: 12, image: "concrete-poem.jpg", featured: false },
  { id: 13, image: "tram-lines.jpg", featured: false },
  { id: 14, image: "neon-rain.jpg", featured: false },
];

/** Featured subset, used by the Home page. */
export const featuredPhotos = photos.filter((p) => p.featured);
