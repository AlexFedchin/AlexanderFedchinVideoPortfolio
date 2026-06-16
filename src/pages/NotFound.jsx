import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden pt-24 text-center">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-radial-frost blur-3xl animate-glow-pulse"
      />
      <Container>
        <div className="label">Error 404</div>
        <h1 className="mt-6 font-display text-[6rem] font-bold leading-none tracking-tightest text-bone sm:text-[10rem]">
          404
        </h1>
        <h2 className="mt-2 font-display text-2xl font-semibold text-bone sm:text-3xl">
          This frame doesn&rsquo;t exist
        </h2>
        <p className="mx-auto mt-4 max-w-md text-bone-muted">
          The page you&rsquo;re looking for may have been moved or never existed. Let&rsquo;s get you
          back to the work.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button to="/" size="lg" withArrow>
            Back home
          </Button>
          <Button to="/photography" size="lg" variant="ghost">
            View photography
          </Button>
        </div>
      </Container>
    </section>
  );
}
