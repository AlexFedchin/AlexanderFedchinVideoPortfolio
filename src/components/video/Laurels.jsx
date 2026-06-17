import { resolveImage } from '@/utils/images';
import { cn } from '@/utils/cn';

/**
 * Festival / award laurels shown next to a film.
 *
 * Each laurel is `{ title, event, year, image? }`. If `image` resolves to a
 * real file in src/assets/photos/ (e.g. an official laurel PNG), it's used
 * as-is. Otherwise we draw a clean SVG laurel wreath around the text — so
 * awards look intentional even before you have the official graphics.
 */

// Leaf positions for the left branch; the right branch is a mirror.
const LEAVES = [
  { x: 41, y: 26, a: -62 },
  { x: 32, y: 41, a: -46 },
  { x: 28, y: 57, a: -28 },
  { x: 29, y: 73, a: -12 },
  { x: 36, y: 87, a: 4 },
];

function Leaves() {
  return LEAVES.map((p, i) => (
    <ellipse key={i} cx="0" cy="0" rx="4.2" ry="9.5" transform={`translate(${p.x} ${p.y}) rotate(${p.a})`} />
  ));
}

function Wreath({ className }) {
  return (
    <svg viewBox="0 0 140 120" className={className} aria-hidden="true">
      <g fill="currentColor">
        <Leaves />
        <g transform="translate(140 0) scale(-1 1)">
          <Leaves />
        </g>
      </g>
    </svg>
  );
}

export default function Laurels({ laurels, className }) {
  if (!laurels?.length) return null;

  return (
    <ul className={cn('flex flex-wrap items-center gap-x-7 gap-y-4', className)}>
      {laurels.map((laurel, i) => {
        const img = laurel.image ? resolveImage(laurel.image) : null;
        const alt = [laurel.title, laurel.event, laurel.year].filter(Boolean).join(' — ') || laurel.image || 'Award laurel';

        if (img) {
          return (
            <li key={i}>
              <img src={img} alt={alt} loading="lazy" decoding="async" className="h-16 w-auto opacity-90" />
            </li>
          );
        }

        return (
          <li
            key={i}
            className="relative flex h-[4.5rem] min-w-[8.5rem] items-center justify-center text-bone/70"
          >
            <Wreath className="absolute inset-0 mx-auto h-full w-auto" />
            <div className="relative px-7 text-center leading-tight">
              <div className="text-[0.5rem] font-medium uppercase tracking-[0.18em] text-bone-muted">
                {laurel.title}
              </div>
              <div className="mt-0.5 text-[0.7rem] font-semibold text-bone">{laurel.event}</div>
              {laurel.year && <div className="text-[0.55rem] text-bone-muted">{laurel.year}</div>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
