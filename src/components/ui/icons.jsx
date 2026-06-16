/**
 * Custom SVG icon set — hand-drawn, no icon library (no Lucide, no Heroicons).
 *
 * All line icons share <Svg>: 24×24 grid, currentColor stroke, rounded caps.
 * Brand/solid marks override fill locally. Every icon is decorative by default
 * (aria-hidden); pass `aria-hidden={false}` + a `title` for standalone meaning.
 */

function Svg({ className = 'h-5 w-5', strokeWidth = 1.5, children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ── Directional ────────────────────────────────────────────────────────── */
export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </Svg>
);

export const ArrowLeft = (p) => (
  <Svg {...p}>
    <path d="M20 12H5" />
    <path d="M11 6l-6 6 6 6" />
  </Svg>
);

export const ArrowUpRight = (p) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Svg>
);

export const ArrowUp = (p) => (
  <Svg {...p}>
    <path d="M12 19V5" />
    <path d="M6 11l6-6 6 6" />
  </Svg>
);

export const ChevronLeft = (p) => (
  <Svg {...p}>
    <path d="M15 6l-6 6 6 6" />
  </Svg>
);

export const ChevronRight = (p) => (
  <Svg {...p}>
    <path d="M9 6l6 6-6 6" />
  </Svg>
);

export const ChevronDown = (p) => (
  <Svg {...p}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
);

/* ── Interface ──────────────────────────────────────────────────────────── */
export const Close = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Svg>
);

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M4 9h16" />
    <path d="M4 15h16" />
  </Svg>
);

export const Search = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </Svg>
);

export const Filter = (p) => (
  <Svg {...p}>
    <path d="M4 6h16M7 12h10M10 18h4" />
  </Svg>
);

export const ExternalLink = (p) => (
  <Svg {...p}>
    <path d="M14 5h5v5" />
    <path d="M19 5l-8 8" />
    <path d="M19 14v3.5A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5H10" />
  </Svg>
);

/** Decorative six-point asterisk — the little champagne spark above headings. */
export const Asterisk = (p) => (
  <Svg strokeWidth={1.25} {...p}>
    <path d="M12 4v16M5.5 7.5l13 9M18.5 7.5l-13 9" />
  </Svg>
);

/* ── Media ──────────────────────────────────────────────────────────────── */
export const Play = ({ className = 'h-5 w-5', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...props}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" fill="currentColor" />
  </svg>
);

export const Camera = (p) => (
  <Svg {...p}>
    <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.6a1 1 0 0 0 .8-.4l.9-1.2a1 1 0 0 1 .8-.4h4.8a1 1 0 0 1 .8.4l.9 1.2a1 1 0 0 0 .8.4h1.6A2.5 2.5 0 0 1 21 8.5V17a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z" />
    <circle cx="12" cy="12.5" r="3.2" />
  </Svg>
);

export const Film = (p) => (
  <Svg {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <path d="M3 9h18M3 15h18M8 4.5v15M16 4.5v15" />
  </Svg>
);

export const Mountain = (p) => (
  <Svg {...p}>
    <path d="M3 19l5.5-8.5 3.5 4.5 2.5-3.5L21 19z" />
    <circle cx="8" cy="6.5" r="1.6" />
  </Svg>
);

/* ── Contact ────────────────────────────────────────────────────────────── */
export const Mail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7.5l8 5.5 8-5.5" />
  </Svg>
);

export const MapPin = (p) => (
  <Svg {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

/* ── Brand ──────────────────────────────────────────────────────────────── */
export const Instagram = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const YouTube = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="4" />
    <path d="M10.5 9.2v5.6l4.8-2.8z" fill="currentColor" stroke="none" />
  </Svg>
);

/** name → component, for data-driven rendering (services, socials, etc.). */
export const iconByName = {
  camera: Camera,
  film: Film,
  mountain: Mountain,
  instagram: Instagram,
  youtube: YouTube,
  mail: Mail,
  'map-pin': MapPin,
  clock: Clock,
};

/** Render an icon by its string name (returns null for unknown names). */
export function Icon({ name, ...props }) {
  const Component = iconByName[name];
  return Component ? <Component {...props} /> : null;
}
