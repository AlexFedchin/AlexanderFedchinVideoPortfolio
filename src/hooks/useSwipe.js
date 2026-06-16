import { useRef } from 'react';

/**
 * Horizontal swipe detection for touch devices (lightbox / galleries).
 * Spread the returned handlers onto the swipeable element:
 *
 *   const swipe = useSwipe({ onSwipeLeft: next, onSwipeRight: prev });
 *   <div {...swipe}> … </div>
 *
 * Ignores mostly-vertical gestures so page scrolling still works.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 48 } = {}) {
  const start = useRef(null);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    start.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e) => {
    if (!start.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.current.x;
    const dy = t.clientY - start.current.y;
    start.current = null;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
      if (dx < 0) onSwipeLeft?.();
      else onSwipeRight?.();
    }
  };

  return { onTouchStart, onTouchEnd };
}
