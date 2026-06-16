/**
 * Deterministic SVG placeholder generator.
 *
 * Until real photos are dropped into src/assets/photos/, the gallery still
 * needs to look intentional — not like a wall of broken-image icons. Given a
 * title/category/seed we generate a cohesive, dark, champagne-lit SVG with a
 * stable (seed-derived) aspect ratio, so the masonry layout gets natural
 * variety. Everything is a data URI — zero network requests.
 */

// FNV-1a — small, fast, stable string hash.
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function escapeXml(value) {
  return String(value).replace(
    /[<>&'"]/g,
    (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c])
  );
}

// A spread of editorial aspect ratios for masonry variety.
const RATIOS = [
  [3, 4],
  [4, 5],
  [1, 1],
  [4, 3],
  [3, 2],
  [5, 4],
  [2, 3],
];

/**
 * @returns {{ src: string, width: number, height: number, ratio: number }}
 */
export function generatePlaceholder({ title = '', category = '', seed = '' } = {}) {
  const h = hash(`${seed}|${title}|${category}`);
  const [rw, rh] = RATIOS[h % RATIOS.length];

  const W = 1000;
  const H = Math.round((W * rh) / rw);

  // Stay within a cool charcoal band so the whole gallery reads as one set.
  const baseHue = 218 + ((h >> 3) % 28) - 14; // ~204–232
  const c1 = `hsl(${baseHue} 14% 7%)`;
  const c2 = `hsl(${baseHue} 12% 12.5%)`;

  // Move the champagne glow around so no two tiles feel identical.
  const gx = 18 + ((h >> 5) % 64);
  const gy = 8 + ((h >> 9) % 52);

  const initial = (category || title || 'AF').trim().charAt(0).toUpperCase();
  const label = escapeXml((category || 'Portfolio').toUpperCase());

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}' viewBox='0 0 ${W} ${H}'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='${c1}'/>
      <stop offset='1' stop-color='${c2}'/>
    </linearGradient>
    <radialGradient id='glow' cx='${gx}%' cy='${gy}%' r='80%'>
      <stop offset='0' stop-color='rgba(150,210,235,0.18)'/>
      <stop offset='55%' stop-color='rgba(150,210,235,0.04)'/>
      <stop offset='100%' stop-color='rgba(150,210,235,0)'/>
    </radialGradient>
  </defs>
  <rect width='${W}' height='${H}' fill='url(#g)'/>
  <rect width='${W}' height='${H}' fill='url(#glow)'/>
  <rect x='22' y='22' width='${W - 44}' height='${H - 44}' fill='none' stroke='rgba(236,234,228,0.10)'/>
  <text x='50%' y='50%' text-anchor='middle' dominant-baseline='central'
    font-family='Georgia, serif' font-weight='600' font-size='${Math.round(W * 0.46)}'
    fill='rgba(236,234,228,0.05)'>${escapeXml(initial)}</text>
  <text x='50%' y='${H - 48}' text-anchor='middle'
    font-family='Inter, system-ui, sans-serif' font-size='22' letter-spacing='7'
    fill='rgba(236,234,228,0.42)'>${label}</text>
</svg>`;

  return {
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    width: W,
    height: H,
    ratio: rw / rh,
  };
}
