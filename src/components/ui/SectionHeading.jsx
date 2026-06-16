import { cn } from '@/utils/cn';

/**
 * One big, bold heading — and nothing else. (No eyebrow, no sub-paragraph.)
 * Optionally takes an `action` node (e.g. a "View all" link) pinned to the
 * baseline on the right. `title` accepts a string or node.
 */
export default function SectionHeading({ title, action, align = 'left', size = 'lg', className }) {
  const center = align === 'center';
  return (
    <div
      className={cn(
        'flex flex-wrap items-end gap-x-6 gap-y-3',
        center ? 'justify-center text-center' : 'justify-between',
        className
      )}
    >
      <h2
        className={cn(
          'font-display font-bold leading-[0.95] tracking-tightest text-bone',
          size === 'lg' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'
        )}
      >
        {title}
      </h2>
      {action ? <div className="shrink-0 pb-1.5">{action}</div> : null}
    </div>
  );
}
