import { Link, useParams } from "react-router-dom";
import {
  getVideoBySlug,
  getRelatedVideos,
  getVideoNeighbors,
} from "@/data/videos";
import { ytWatch } from "@/utils/youtube";
import { getImageSource } from "@/utils/photoSource";
import { cn } from "@/utils/cn";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoPlayer from "@/components/video/VideoPlayer";
import VideoGrid from "@/components/video/VideoGrid";
import Laurels from "@/components/video/Laurels";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "@/components/ui/icons";

function Credits({ credits }) {
  const rows = [
    ["Shot by", credits.shotBy],
    ["Starring", credits.starring],
    ["Edited by", credits.editedBy],
  ].filter(([, value]) => value);
  if (!rows.length) return null;

  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-bone-muted">
        Credits
      </h2>
      <dl className="mt-4 overflow-hidden rounded-2xl border border-white/10">
        {rows.map(([role, name], i) => (
          <div
            key={role}
            className={cn(
              "flex items-baseline justify-between gap-6 px-5 py-4",
              i % 2 ? "bg-white/[0.015]" : "bg-white/[0.04]",
            )}
          >
            <dt className="label">{role}</dt>
            <dd className="text-right font-medium text-bone">{name}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function NeighborLink({ video, direction }) {
  if (!video) return <span aria-hidden="true" />;
  const isPrev = direction === "prev";
  return (
    <Link
      to={`/videos/${video.slug}`}
      className={cn(
        "group glass flex items-center gap-4 rounded-2xl p-5 transition-colors duration-500 hover:border-white/25",
        !isPrev && "sm:flex-row-reverse sm:text-right",
      )}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-bone transition-colors duration-300 group-hover:border-white/40">
        {isPrev ? (
          <ChevronLeft className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="label">{isPrev ? "Previous" : "Next"}</span>
        <span className="truncate font-display text-lg font-semibold text-bone transition-colors group-hover:text-white">
          {video.title}
        </span>
      </span>
    </Link>
  );
}

function VideoNotFound() {
  return (
    <Container className="pb-24 pt-40 text-center">
      <div className="label">Error 404</div>
      <h1 className="mt-4 font-display text-4xl font-bold text-bone">
        Video not found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-bone-muted">
        This video may have moved or no longer exists.
      </p>
      <div className="mt-8 flex justify-center">
        <Button to="/videos" withArrow>
          Back to videos
        </Button>
      </div>
    </Container>
  );
}

export default function VideoDetail() {
  const { slug } = useParams();
  const video = getVideoBySlug(slug);

  if (!video) return <VideoNotFound />;

  const related = getRelatedVideos(slug);
  const { prev, next } = getVideoNeighbors(slug);
  const isFilm = video.category === "Short Films";
  const imageFile = video.poster || video.cover;
  const aside = imageFile
    ? getImageSource(imageFile, {
        title: video.title,
        label: video.category,
        seed: video.slug,
      })
    : null;
  const meta = [video.year, isFilm ? video.genre : video.category]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="pt-28 sm:pt-32">
      <Container>
        <ScrollReveal>
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 text-sm text-bone-muted transition-colors hover:text-bone"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to videos
          </Link>
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <div className="label">{meta}</div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-6xl lg:text-7xl">
            {video.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <VideoPlayer youtubeId={video.youtubeId} title={video.title} />
        </ScrollReveal>

        {isFilm && video.laurels?.length > 0 && (
          <ScrollReveal className="mt-8 flex justify-center sm:justify-start">
            <Laurels laurels={video.laurels} />
          </ScrollReveal>
        )}

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <ScrollReveal delay={100} className="flex flex-col gap-5">
            {aside && (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850">
                <img
                  src={aside.src}
                  alt={`${video.title} ${isFilm ? "poster" : "cover"}`}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover",
                    isFilm ? "aspect-[2/3]" : "aspect-square",
                  )}
                />
              </div>
            )}
            <Button
              href={ytWatch(video.youtubeId)}
              variant="ghost"
              size="lg"
              icon={<ExternalLink className="h-4 w-4" />}
            >
              Watch on YouTube
            </Button>
          </ScrollReveal>

          <ScrollReveal className="flex flex-col gap-10 lg:col-span-2">
            {video.description && (
              <p className="prose-cine text-lg">{video.description}</p>
            )}
            {video.credits && <Credits credits={video.credits} />}
          </ScrollReveal>
        </div>

        <nav
          aria-label="Video navigation"
          className="mt-14 grid gap-4 sm:grid-cols-2"
        >
          <NeighborLink video={prev} direction="prev" />
          <NeighborLink video={next} direction="next" />
        </nav>

        {related.length > 0 && (
          <section className="mt-20">
            <ScrollReveal>
              <SectionHeading title="More from this section" size="md" />
            </ScrollReveal>
            <ScrollReveal className="mt-10">
              <VideoGrid videos={related} />
            </ScrollReveal>
          </section>
        )}
      </Container>
    </article>
  );
}
