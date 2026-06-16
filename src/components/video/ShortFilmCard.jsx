import { Link } from 'react-router-dom';
import { getImageSource } from '@/utils/photoSource';
import { Play } from '@/components/ui/icons';

/**
 * Short-film tile: a portrait poster that links to the rich detail page.
 * Shows year · genre, the bold title, and an awards badge when laurels exist.
 */
export default function ShortFilmCard({ video }) {
  const { src } = getImageSource(video.poster, {
    title: video.title,
    label: 'Short Film',
    seed: video.slug,
  });
  const awards = video.laurels?.length ?? 0;

  return (
    <Link to={`/videos/${video.slug}`} className="group block focus-visible:outline-offset-4">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-white/10 bg-ink-850">
        <img
          src={src}
          alt={`${video.title} poster`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-ink-950/40 text-bone backdrop-blur-md transition-all duration-500 ease-out-expo group-hover:scale-110 group-hover:border-white/50">
            <Play className="ml-0.5 h-5 w-5" />
          </span>
        </span>

        {awards > 0 && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/15 bg-ink-950/50 px-2.5 py-1 text-[0.6rem] uppercase tracking-cinematic text-bone backdrop-blur-md">
            {awards} {awards === 1 ? 'Award' : 'Awards'}
          </span>
        )}
      </div>

      <div className="mt-4">
        <div className="label">
          {video.year} · {video.genre}
        </div>
        <h3 className="mt-1 font-display text-xl font-semibold text-bone transition-colors group-hover:text-white">
          {video.title}
        </h3>
      </div>
    </Link>
  );
}
