import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProjectCard from './ProjectCard';

/**
 * A titled block of one video category (big bold heading + responsive grid).
 * `id` lets the Videos page jump-scroll to it.
 */
export default function VideoSection({ id, title, videos, action }) {
  if (!videos?.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <ScrollReveal>
        <SectionHeading title={title} action={action} />
      </ScrollReveal>
      <ScrollReveal className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <ProjectCard key={video.id} video={video} />
        ))}
      </ScrollReveal>
    </section>
  );
}
