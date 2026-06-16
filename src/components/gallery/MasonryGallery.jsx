import PhotoCard from './PhotoCard';

/**
 * Responsive masonry via pure CSS multi-columns — no JS measuring, no layout
 * thrash, and it embraces mixed aspect ratios. `onSelect(index)` opens the
 * lightbox; `index` is the position within THIS (already-filtered) list so
 * lightbox prev/next stays in sync with what's on screen.
 */
export default function MasonryGallery({ photos, onSelect, columns = 'lg:columns-3' }) {
  if (!photos?.length) return null;

  return (
    <div className={`columns-1 gap-4 [column-fill:_balance] sm:columns-2 ${columns}`}>
      {photos.map((photo, index) => (
        <PhotoCard key={photo.id} photo={photo} index={index} onSelect={onSelect} />
      ))}
    </div>
  );
}
