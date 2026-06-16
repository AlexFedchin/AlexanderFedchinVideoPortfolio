# Photo assets

Put your photography here. This folder is the **only** place image files live.

## Adding a photo

1. Copy the image file into this folder, e.g. `sunset-over-pyynikki.jpg`.
2. Open [`src/data/photos.js`](../../data/photos.js) and add one object:

   ```js
   {
     id: 15,
     title: 'Sunset over Pyynikki',
     category: 'Landscapes',
     image: 'sunset-over-pyynikki.jpg', // ← the filename you just added
     featured: false,
   }
   ```

That's it. The build picks the file up automatically (via `import.meta.glob`
in [`src/utils/images.js`](../../utils/images.js)), fingerprints it for caching,
and the gallery renders it.

## Until you add real files

Every photo currently points to a filename that doesn't exist yet, so the app
renders a generated, on-brand SVG placeholder for each one. Drop in a real file
with the matching name and it takes over instantly — no code change required.

## Recommended formats & sizes

- **Format:** `.webp` or `.avif` for the best size/quality (`.jpg` is fine).
- **Longest edge:** ~2000–2400px is plenty for full-screen viewing.
- **Compression:** aim for < 400 KB per image (Squoosh, ImageOptim, `sharp`).
- Keep the aspect ratio you shot — the masonry layout embraces mixed ratios.
