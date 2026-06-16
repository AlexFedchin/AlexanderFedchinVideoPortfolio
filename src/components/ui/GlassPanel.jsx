import { cn } from '@/utils/cn';

/**
 * Frosted-glass surface. `strong` swaps to the heavier "liquid glass" variant
 * used for overlays and floating bars. Polymorphic via `as`.
 */
export default function GlassPanel({
  as: Tag = 'div',
  strong = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag className={cn(strong ? 'glass-strong' : 'glass', className)} {...props}>
      {children}
    </Tag>
  );
}
