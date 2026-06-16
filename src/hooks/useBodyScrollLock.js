import { useLayoutEffect } from 'react';

/**
 * Lock page scroll while an overlay (lightbox, mobile menu) is open, and
 * compensate for the now-missing scrollbar so the layout doesn't jump.
 * Restores the previous inline styles on unlock/unmount.
 */
export function useBodyScrollLock(locked) {
  useLayoutEffect(() => {
    if (!locked) return undefined;

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [locked]);
}
