import { cn } from '@/utils/cn';
import Container from './Container';

/**
 * Interior-page header: one oversized, bold H1. Owns the top padding that
 * clears the fixed navbar. Pass extra content (e.g. a count or controls) as
 * children to sit beneath the title.
 */
export default function PageHeader({ title, children, className }) {
  return (
    <header className={cn('relative overflow-hidden pt-32 sm:pt-40', className)}>
      <Container>
        <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.92] tracking-tightest text-bone animate-fade-up sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {children}
      </Container>
    </header>
  );
}
