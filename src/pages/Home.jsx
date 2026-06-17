import { useState } from "react";
import { site } from "@/data/site";
import { featuredPhotos } from "@/data/photos";
import { getVideosByCategory } from "@/data/videos";
import { resolveImage } from "@/utils/images";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassPanel from "@/components/ui/GlassPanel";
import SocialLinks from "@/components/ui/SocialLinks";
import { Play } from "@/components/ui/icons";
import MasonryGallery from "@/components/gallery/MasonryGallery";
import Lightbox from "@/components/gallery/Lightbox";
import VideoGrid from "@/components/video/VideoGrid";
import Silk from "@/components/Silk";

const mailto =
  site.socials.find((s) => s.icon === "mail")?.url || `mailto:${site.email}`;
const shortFilms = getVideosByCategory("Short Films");

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <Silk
          speed={7.8}
          scale={1.0}
          color="#477685"
          noiseIntensity={2}
          rotation={3.1}
        />

        {/* Fade the bottom of the canvas into the page so there's no hard seam. */}
        <div className="absolute inset-0 bg-ink-fade" />
      </div>

      <Container className="py-40">
        <div className="max-w-4xl flex flex-col items-center md:items-start gap-8">
          <h1 className="font-display text-center md:text-start font-bold leading-[0.9] tracking-tightest text-bone text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            <span className="block animate-fade-up">{site.heroLines[0]}</span>
            <span
              className="block animate-fade-up text-bone-muted"
              style={{ animationDelay: "120ms" }}
            >
              {site.heroLines[1]}
            </span>
          </h1>

          <p
            className="max-w-xl animate-fade-up text-lg leading-relaxed text-bone-muted"
            style={{ animationDelay: "240ms" }}
          >
            {site.tagline}
          </p>

          <div
            className="mt-1 flex animate-fade-up flex-wrap items-center gap-4"
            style={{ animationDelay: "340ms" }}
          >
            <Button to="/photography" size="lg" withArrow>
              View Photography
            </Button>
            <Button
              to="/videos"
              size="lg"
              variant="ghost"
              icon={<Play className="h-4 w-4" />}
            >
              Watch Videos
            </Button>
          </div>

          <div
            className="mt-2 animate-fade-up"
            style={{ animationDelay: "440ms" }}
          >
            <SocialLinks />
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="text-[0.6rem] uppercase tracking-cinematic text-bone-dim">
          Scroll
        </span>
        <span className="relative flex h-14 w-px justify-center bg-gradient-to-b from-white/30 to-transparent">
          <span className="absolute top-0 h-3 w-px animate-bounce bg-white/80" />
        </span>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="shell py-24 sm:py-32">
      <ScrollReveal className="max-w-4xl">
        <p className="font-display text-3xl font-semibold leading-[1.12] tracking-tight2 text-bone sm:text-4xl lg:text-5xl">
          {site.intro}
        </p>
        <div className="mt-9">
          <Button to="/about" variant="ghost" size="md" withArrow>
            About me
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FeaturedPhotography() {
  const [index, setIndex] = useState(null);

  return (
    <section className="shell py-16 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          title="Photography"
          action={
            <Button to="/photography" variant="ghost" size="md" withArrow>
              View all
            </Button>
          }
        />
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <MasonryGallery photos={featuredPhotos} onSelect={setIndex} />
      </ScrollReveal>

      <Lightbox
        photos={featuredPhotos}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </section>
  );
}

function SelectedFilms() {
  return (
    <section className="shell py-16 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          title="Selected Films"
          action={
            <Button to="/videos" variant="ghost" size="md" withArrow>
              All videos
            </Button>
          }
        />
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <VideoGrid videos={shortFilms} />
      </ScrollReveal>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="shell pb-28 pt-10">
      <ScrollReveal>
        <GlassPanel
          strong
          className="relative overflow-hidden rounded-4xl px-6 py-16 text-center sm:px-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-radial-frost blur-2xl"
          />
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[0.98] tracking-tightest text-bone sm:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-bone-muted">
            Tell me about it — a portrait session, a short film, a music video.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg" withArrow>
              Start a project
            </Button>
            <Button href={mailto} size="lg" variant="ghost">
              Email me
            </Button>
          </div>
        </GlassPanel>
      </ScrollReveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <FeaturedPhotography />
      <SelectedFilms />
      <ClosingCTA />
    </>
  );
}
