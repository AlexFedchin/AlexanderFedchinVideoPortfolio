import { ytEmbed } from '@/utils/youtube';

/**
 * Responsive 16:9 YouTube embed using the privacy-enhanced (youtube-nocookie)
 * domain. The aspect-ratio box prevents layout shift; the iframe lazy-loads so
 * it never blocks first paint of the page.
 */
export default function VideoPlayer({ youtubeId, title }) {
  return (
    <div className="aspect-video-frame relative w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-lift">
      <iframe
        src={ytEmbed(youtubeId)}
        title={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
