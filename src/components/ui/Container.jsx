import { cn } from '@/utils/cn';

/**
 * Page width + horizontal gutter, in one place. `tight` switches to the
 * narrower reading column used by long-form content (About / Contact).
 */
export default function Container({ as: Tag = 'div', tight = false, className, children, ...props }) {
  return (
    <Tag className={cn(tight ? 'shell-tight' : 'shell', className)} {...props}>
      {children}
    </Tag>
  );
}
