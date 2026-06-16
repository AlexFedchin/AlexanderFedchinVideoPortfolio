import { useLocation } from 'react-router-dom';

/**
 * Cross-fades + lifts each page in on navigation. Keying on the pathname
 * remounts the subtree so the entrance animation replays every route change.
 * Reduced-motion users get an instant swap (animation is neutralised in CSS).
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="animate-page-in">
      {children}
    </div>
  );
}
