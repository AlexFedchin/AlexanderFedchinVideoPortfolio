import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

/**
 * Reveals its children on first scroll into view (fade + rise). Pure CSS
 * transition driven by the `.reveal` / `.is-visible` classes; the
 * IntersectionObserver lives in useInView and disconnects after firing.
 *
 * `delay` (ms) staggers siblings. Honours prefers-reduced-motion via CSS.
 */
export default function ScrollReveal({
  as: Tag = 'div',
  delay = 0,
  threshold = 0.15,
  className,
  children,
  ...props
}) {
  const [ref, inView] = useInView({ threshold, rootMargin: '0px 0px -8% 0px' });

  return (
    <Tag
      ref={ref}
      className={cn('reveal', inView && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
