import { useEffect, useRef, useState } from 'react';

/**
 * Observe an element and report when it scrolls into view.
 * Returns [ref, inView]. Defaults to firing once (then disconnecting) which is
 * exactly what scroll-reveal wants — cheap and no re-trigger flicker.
 *
 * Degrades gracefully: with no IntersectionObserver (very old/SSR), it simply
 * reports visible so content is never hidden.
 */
export function useInView({ threshold = 0.15, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
