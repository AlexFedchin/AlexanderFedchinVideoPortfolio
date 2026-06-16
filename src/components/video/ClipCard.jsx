import VideoThumbnail from './VideoThumbnail';
import { ytWatch } from '@/utils/youtube';
import { Play, ExternalLink } from '@/components/ui/icons';

/**
 * Landscape tile for VFX Breakdowns & Commercials. These are minimal
 * (title, year, description) and link straight out to YouTube in a new tab.
 */
export default function ClipCard({ video }) {
  return (
    <a
      href={ytWatch(video.youtubeId)}
      target="_blank"
      rel="noreferrer noopener"
      className="group block focus-visible:outline-offset-4"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-ink-850">
        <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]">
          <VideoThumbnail youtubeId={video.youtubeId} alt={`${video.title} thumbnail`} />
        </div>
        <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-ink-950/40 text-bone backdrop-blur-md transition-all duration-500 ease-out-expo group-hover:scale-110 group-hover:border-white/50">
            <Play className="ml-0.5 h-5 w-5" />
          </span>
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/50 px-2.5 py-1 text-[0.6rem] uppercase tracking-cinematic text-bone backdrop-blur-md">
          YouTube
          <ExternalLink className="h-3 w-3" />
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="label">{video.year}</div>
          <h3 className="mt-1 font-display text-xl font-semibold text-bone transition-colors group-hover:text-white">
            {video.title}
          </h3>
          {video.description && (
            <p className="mt-1.5 line-clamp-2 text-sm text-bone-muted">{video.description}</p>
          )}
        </div>
        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-bone-dim transition-all duration-400 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bone" />
      </div>
    </a>
  );
}
