import { cn } from '@/utils/cn';

/**
 * Pill filter bar. Prepends an "All" option to the data-derived categories.
 * Each pill is a real button with aria-pressed for screen-reader state.
 */
export default function CategoryFilter({ categories, active, onChange, allLabel = 'All', className }) {
  const options = [allLabel, ...categories];

  return (
    <div role="group" aria-label="Filter by category" className={cn('flex flex-wrap items-center gap-2.5', className)}>
      {options.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={cn('chip', isActive && 'chip-active')}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
