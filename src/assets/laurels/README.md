# Laurel assets

Put official festival / award laurel images here (PNG with transparency works best).

## Adding a laurel

1. Copy the laurel PNG into this folder, e.g. `tampere-2024-official-selection.png`.
2. Open [`src/data/videos.js`](../../data/videos.js) and add an `image` field to the laurel entry:

   ```js
   laurels: [
     { image: 'tampere-2024-official-selection.png' },
   ]
   ```

That's it. No title, event, or year text is needed — the image carries all that visually.

## Recommended formats & sizes

- **Format:** `.png` (for transparency) or `.webp`.
- **Height:** laurels are displayed at 4 rem (64 px) tall; the image can be any width.
- Keep official festival graphics at their original aspect ratio.
