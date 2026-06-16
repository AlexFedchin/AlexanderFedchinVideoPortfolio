import { Link } from 'react-router-dom';
import { site, currentYear } from '@/data/site';
import Container from '@/components/ui/Container';
import SocialLinks from '@/components/ui/SocialLinks';
import { ArrowUp, MapPin } from '@/components/ui/icons';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative mt-24 border-t border-white/10">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <span className="font-display text-3xl text-bone">{site.name}</span>
            <p className="prose-cine max-w-xs text-[0.98rem]">{site.tagline}</p>
            <span className="inline-flex items-center gap-2 text-sm text-bone-muted">
              <MapPin className="h-4 w-4 text-bone-muted" />
              {site.location}
            </span>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <h3 className="label mb-1">Explore</h3>
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="w-fit text-bone-muted transition-colors hover:text-bone"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="label mb-1">Connect</h3>
            <SocialLinks variant="list" />
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-xs text-bone-dim">
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-cinematic text-bone-muted transition-colors hover:text-bone"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-all duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:border-white/30">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
