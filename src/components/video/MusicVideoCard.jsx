import { Link } from 'react-router-dom';
import { getImageSource } from '@/utils/photoSource';
import { Play } from '@/components/ui/icons';

/**
 * Music-video tile: a square cover that links to the detail page (player +
 * credits). Shows year, bold title, and the featured artist.
 */
export default function MusicVideoCard({ video }) {
  const { src } = getImageSource(video.cover, {
    title: video.title,
    label: 'Music Video',
    seed: video.slug,
  });

  return (
    <Link to={`/videos/${video.slug}`} className="group block focus-visible:outline-offset-4">
      <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-ink-850">
        <img
          src={src}
          alt={`${video.title} cover`}
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
      </div>

      <div className="mt-4">
        <div className="label">{video.year} · Music Video</div>
        <h3 className="mt-1 font-display text-xl font-semibold text-bone transition-colors group-hover:text-white">
          {video.title}
        </h3>
        {video.credits?.starring && (
          <p className="mt-0.5 text-sm text-bone-dim">{video.credits.starring}</p>
        )}
      </div>
    </Link>
  );
}
