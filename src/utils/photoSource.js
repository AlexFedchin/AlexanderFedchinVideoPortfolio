import { resolveImage } from './images';
import { generatePlaceholder } from './placeholder';

/**
 * Resolve a photo object to something the gallery can render.
 *
 * Returns the real, build-optimised asset when the file exists in
 * src/assets/photos/, otherwise a generated placeholder. Either way the
 * gallery code stays identical.
 *
 * @returns {{ src: string, isPlaceholder: boolean, ratio?: number }}
 */
export function getPhotoSource(photo) {
  const real = resolveImage(photo.image);
  if (real) return { src: real, isPlaceholder: false };

  const placeholder = generatePlaceholder({
    title: photo.title,
    category: 'Photograph',
    seed: String(photo.id),
  });
  return { src: placeholder.src, isPlaceholder: true, ratio: placeholder.ratio };
}

/** Accessible alt text for a photo. */
export const photoAlt = (photo) => `${photo.title} — photograph by Alexander Fedchin`;

/**
 * Generic resolver for any single asset (poster, cover, laurel, portrait):
 * the real file if present in src/assets/photos/, otherwise a generated
 * placeholder keyed by the given title/label.
 *
 * @returns {{ src: string, isPlaceholder: boolean, ratio?: number }}
 */
export function getImageSource(filename, { title = '', label = '', seed = '' } = {}) {
  const real = resolveImage(filename);
  if (real) return { src: real, isPlaceholder: false };

  const placeholder = generatePlaceholder({
    title,
    category: label,
    seed: seed || filename || title || label,
  });
  return { src: placeholder.src, isPlaceholder: true, ratio: placeholder.ratio };
}
