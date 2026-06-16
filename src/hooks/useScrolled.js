import { useEffect, useState } from 'react';

/**
 * True once the page has scrolled past `threshold` pixels. Drives the navbar's
 * transparent → frosted-glass transition. Passive listener; reads scrollY once
 * on mount so a reload mid-page is correct.
 */
export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
