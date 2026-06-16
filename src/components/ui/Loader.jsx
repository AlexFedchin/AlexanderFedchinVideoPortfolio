/**
 * Suspense fallback shown while a route chunk loads. Quiet, on-brand, and
 * announced to assistive tech via role="status".
 */
export default function Loader({ label = 'Loading' }) {
  return (
    <div
      className="flex min-h-[60vh] w-full items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-5">
        <span className="relative flex h-12 w-12 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-white/10" />
          <span
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-frost"
            style={{ animationDuration: '0.9s' }}
          />
          <span className="font-display text-[0.7rem] tracking-wide text-bone-muted">AF</span>
        </span>
        <span className="text-[0.7rem] uppercase tracking-cinematic text-bone-dim">{label}</span>
      </div>
    </div>
  );
}
