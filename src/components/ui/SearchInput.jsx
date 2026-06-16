import { Search, Close } from './icons';
import { cn } from '@/utils/cn';

/**
 * Glass search field with a leading icon and a clear button. Controlled —
 * parent owns the value. The leading icon warms to champagne on focus.
 */
export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search…',
  id = 'search',
  className,
}) {
  return (
    <div className={cn('group relative flex items-center', className)}>
      <Search className="pointer-events-none absolute left-4 h-4 w-4 text-bone-dim transition-colors duration-300 group-focus-within:text-bone" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete="off"
        className="w-full rounded-full border border-white/10 bg-white/[0.03] py-3 pl-11 pr-11 text-sm text-bone outline-none transition-colors duration-300 placeholder:text-bone-dim focus:border-white/35 [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 grid h-7 w-7 place-items-center rounded-full text-bone-dim transition-colors hover:text-bone"
        >
          <Close className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
