import { useState } from 'react';
import { ytThumb, THUMB_FALLBACKS } from '@/utils/youtube';
import { cn } from '@/utils/cn';

/**
 * YouTube thumbnail with graceful degradation. Not every video has a
 * `maxresdefault`, so on error we step down maxres → sd → hq (hq always
 * exists). A pulse skeleton covers the gap until the image decodes.
 */
export default function VideoThumbnail({ youtubeId, alt, className }) {
  const [level, setLevel] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-ink-800 to-ink-700" />
      )}
      <img
        src={ytThumb(youtubeId, THUMB_FALLBACKS[level])}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLevel((l) => Math.min(l + 1, THUMB_FALLBACKS.length - 1))}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-700 ease-out-expo',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
      />
    </>
  );
}
