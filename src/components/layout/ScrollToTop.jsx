import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Jump to the top of the page on every route change. Temporarily disables the
 * global smooth-scroll so navigation is an instant cut, not a long glide.
 * Renders nothing.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
}
