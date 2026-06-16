import { site } from '@/data/site';
import { resolveImage } from '@/utils/images';
import { generatePlaceholder } from '@/utils/placeholder';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassPanel from '@/components/ui/GlassPanel';
import SocialLinks from '@/components/ui/SocialLinks';
import { MapPin } from '@/components/ui/icons';

const { about } = site;

const portrait =
  resolveImage(about.portraitImage) ||
  generatePlaceholder({ title: site.name, category: 'Portrait', seed: 'about-portrait' }).src;

function Biography() {
  return (
    <section className="shell py-16 sm:py-20">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="lg:sticky lg:top-28">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-850">
              <img
                src={portrait}
                alt={`Portrait of ${site.name}`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-radial-frost blur-2xl"
            />
            <GlassPanel className="absolute -bottom-5 left-5 right-5 rounded-2xl px-5 py-4">
              <p className="font-display text-lg font-semibold text-bone">{site.name}</p>
              <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-bone-muted">
                <MapPin className="h-3.5 w-3.5 text-bone-muted" />
                {site.location}
              </p>
            </GlassPanel>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className="flex flex-col gap-6">
          <div className="prose-cine text-lg">
            {about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-5">
            <SocialLinks />
            <Button to="/contact" variant="link" size="md" withArrow>
              Get in touch
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section className="shell py-16 sm:py-20">
      <ScrollReveal>
        <SectionHeading title="Equipment" />
      </ScrollReveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {about.equipment.map((group, i) => (
          <ScrollReveal key={group.group} delay={i * 90}>
            <GlassPanel className="h-full rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-bone">{group.group}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-bone-muted">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-bone/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="shell py-16 sm:py-20">
      <ScrollReveal>
        <SectionHeading title="Experience" />
      </ScrollReveal>

      <ol className="mt-12 max-w-3xl">
        {about.experience.map((item, i) => {
          const isLast = i === about.experience.length - 1;
          return (
            <ScrollReveal
              as="li"
              key={item.year + item.title}
              delay={i * 80}
              className="relative pb-10 pl-10 last:pb-0"
            >
              <span className="absolute left-0 top-1.5 z-10 h-2.5 w-2.5 rounded-full bg-bone ring-4 ring-white/10" />
              {!isLast && <span className="absolute left-[5px] top-4 h-full w-px bg-white/10" />}
              <div className="label">{item.year}</div>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-bone">{item.title}</h3>
              <p className="mt-1.5 text-bone-muted">{item.description}</p>
            </ScrollReveal>
          );
        })}
      </ol>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader title="About" />
      <Biography />
      <Equipment />
      <Experience />
    </>
  );
}
