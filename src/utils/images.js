/**
 * Image resolver.
 *
 * Eagerly imports everything in src/assets/photos/ so the data files can refer
 * to images by plain filename (e.g. 'sunset.jpg') instead of each one needing
 * its own `import` statement. This is what makes "drop a file in, add one
 * object" actually true.
 *
 * Vite turns `import.meta.glob(..., { eager: true })` into static imports at
 * build time, so every referenced asset is fingerprinted and optimised.
 */
const modules = import.meta.glob(
  '../assets/photos/*.{jpg,jpeg,png,webp,avif,gif,svg,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' }
);

// Map bare filename -> hashed, build-time URL.
const byFilename = {};
for (const path in modules) {
  const filename = path.split('/').pop();
  byFilename[filename] = modules[path];
}

// Laurels live in src/assets/laurels/{slug}/*.{...}
const laurelModules = import.meta.glob(
  '../assets/laurels/**/*.{jpg,jpeg,png,webp,avif,gif,svg,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' }
);

/**
 * Return all laurel images for a given project slug as `{ src, alt }` objects.
 * Alt text is derived from the filename (without extension).
 */
export function getLaurelsBySlug(slug) {
  return Object.entries(laurelModules)
    .filter(([path]) => path.includes(`/laurels/${slug}/`))
    .map(([path, src]) => ({
      src,
      alt: path.split('/').pop().replace(/\.[^.]+$/, ''),
    }));
}

/**
 * Resolve a data-file `image` reference to a usable URL.
 * - Full URLs / data URIs / absolute paths are returned as-is.
 * - Bare filenames are looked up in src/assets/photos/.
 * - Anything not found returns null (caller falls back to a placeholder).
 */
export function resolveImage(ref) {
  if (!ref) return null;
  if (/^(https?:)?\/\//.test(ref) || ref.startsWith('data:') || ref.startsWith('/')) {
    return ref;
  }
  return byFilename[ref] ?? null;
}

/** Whether a real asset exists for this reference. */
export const hasImage = (ref) => resolveImage(ref) !== null;
