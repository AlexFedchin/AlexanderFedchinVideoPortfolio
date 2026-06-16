import { Search } from './icons';

/** Quiet, on-brand empty state for filtered galleries with no results. */
export default function EmptyState({ title = 'Nothing here yet', message }) {
  return (
    <div className="glass flex flex-col items-center gap-4 rounded-3xl px-6 py-20 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-bone-dim">
        <Search className="h-6 w-6" />
      </span>
      <h3 className="font-display text-xl text-bone">{title}</h3>
      {message && <p className="max-w-sm text-sm text-bone-muted">{message}</p>}
    </div>
  );
}
