import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useSwipe } from '@/hooks/useSwipe';
import { getPhotoSource, photoAlt } from '@/utils/photoSource';
import { Close, ChevronLeft, ChevronRight } from '@/components/ui/icons';

const sideBtn =
  'grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-bone backdrop-blur-xl transition-all duration-300 ease-out-expo hover:border-white/35 hover:bg-white/10';

/**
 * Fullscreen image viewer, rendered into <body> via a portal.
 *
 * Accessibility & UX:
 *  - role="dialog" + aria-modal, focus moves in on open, Tab is trapped,
 *    Escape closes, focus is restored to the trigger on close.
 *  - Keyboard: ← / → navigate, Esc closes.
 *  - Touch: horizontal swipe navigates (useSwipe).
 *  - Neighbours are preloaded so navigation feels instant.
 *  - Navigation wraps, so you can never dead-end.
 *
 * Controlled: parent owns `index` (null = closed) and updates via onIndexChange.
 */
export default function Lightbox({ photos, index, onClose, onIndexChange }) {
  const open = index !== null && index >= 0;
  const dialogRef = useRef(null);
  const restoreFocusRef = useRef(null);

  const go = useCallback(
    (dir) => {
      if (!open) return;
      const n = photos.length;
      onIndexChange((index + dir + n) % n);
    },
    [open, index, photos.length, onIndexChange]
  );

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  useBodyScrollLock(open);

  // Keyboard: navigation, close, and a lightweight focus trap.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') return onClose();
      if (e.key === 'ArrowLeft') return prev();
      if (e.key === 'ArrowRight') return next();
      if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll('button');
        if (!focusables?.length) return undefined;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
      return undefined;
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, prev, next]);

  // Move focus in on open; restore it to the trigger on close.
  useEffect(() => {
    if (open) {
      restoreFocusRef.current = document.activeElement;
      dialogRef.current?.focus();
    } else if (restoreFocusRef.current instanceof HTMLElement) {
      restoreFocusRef.current.focus();
      restoreFocusRef.current = null;
    }
  }, [open]);

  // Preload the previous + next images for instant navigation.
  useEffect(() => {
    if (!open) return;
    [-1, 1].forEach((d) => {
      const neighbour = photos[(index + d + photos.length) % photos.length];
      if (neighbour) {
        const img = new Image();
        img.src = getPhotoSource(neighbour).src;
      }
    });
  }, [open, index, photos]);

  const swipe = useSwipe({ onSwipeLeft: next, onSwipeRight: prev });

  if (!open) return null;

  const photo = photos[index];
  const { src } = getPhotoSource(photo);
  const total = photos.length;

  return createPortal(
    <div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${total}`}
      className="fixed inset-0 z-[80] flex items-center justify-center outline-none"
    >
      {/* Backdrop (click to close) */}
      <button
        type="button"
        aria-label="Close image viewer"
        onClick={onClose}
        className="absolute inset-0 cursor-zoom-out bg-ink-950/90 backdrop-blur-2xl animate-fade-in"
      />

      {/* Top bar: counter + close */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 sm:px-8">
        <span className="font-display text-sm tabular-nums tracking-wide text-bone-muted">
          {String(index + 1).padStart(2, '0')}
          <span className="text-bone-dim"> / {String(total).padStart(2, '0')}</span>
        </span>
        <button type="button" onClick={onClose} aria-label="Close" className={sideBtn.replace('h-12 w-12', 'h-11 w-11')}>
          <Close className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop prev / next */}
      <button type="button" onClick={prev} aria-label="Previous image" className={`absolute left-3 z-10 hidden sm:left-6 sm:grid ${sideBtn}`}>
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button type="button" onClick={next} aria-label="Next image" className={`absolute right-3 z-10 hidden sm:right-6 sm:grid ${sideBtn}`}>
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image */}
      <figure {...swipe} className="relative z-[5] flex max-h-[95vh] max-w-[90vw] items-center">
        <img
          key={photo.id}
          src={src}
          alt={photoAlt(photo)}
          className="max-h-[95vh] max-w-[90vw] rounded-lg object-contain shadow-lift animate-scale-in"
        />
      </figure>

      {/* Mobile prev / next */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 sm:hidden">
        <button type="button" onClick={prev} aria-label="Previous image" className={sideBtn}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button type="button" onClick={next} aria-label="Next image" className={sideBtn}>
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>,
    document.body
  );
}
