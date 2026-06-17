// Inline fractal-noise grain (no network request).
const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Fixed ambient backdrop behind all content: a few slow, frost-tinted glows
 * plus faint grain. Purely decorative (aria-hidden, no pointer events).
 */
export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-1/4 right-[-12%] h-[46rem] w-[46rem] rounded-full bg-radial-frost blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-[-28%] left-[-14%] h-[42rem] w-[42rem] rounded-full bg-radial-frost opacity-60 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-radial-frost opacity-25 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        // style={{ backgroundImage: `url("${NOISE}")` }}
      />
    </div>
  );
}
