import { useState } from 'react';
import { cn } from '@/utils/cn';
import { getPhotoSource, photoAlt } from '@/utils/photoSource';

/**
 * Minimal masonry tile — just the image. A quiet zoom on hover and the title
 * fading in along the bottom edge; everything else lives in the lightbox.
 * It's a <button> so it's keyboard focusable and announces "View {title}".
 */
export default function PhotoCard({ photo, index, onSelect }) {
  const { src, isPlaceholder, ratio } = getPhotoSource(photo);
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-label={`View photograph ${index + 1}`}
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/5 bg-ink-900 text-left transition-colors duration-500 hover:border-white/15 focus-visible:outline-offset-4"
    >
      {!loaded && !isPlaceholder && <span className="absolute inset-0 animate-pulse bg-ink-800" />}

      <img
        src={src}
        alt={photoAlt(photo)}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={isPlaceholder && ratio ? { aspectRatio: String(ratio) } : undefined}
        className={cn(
          'w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]',
          loaded || isPlaceholder ? 'opacity-100' : 'opacity-0'
        )}
      />

    </button>
  );
}
