import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import ScrollToTop from './ScrollToTop';
import PageTransition from './PageTransition';
import Loader from '@/components/ui/Loader';

/**
 * App shell shared by every route. Order matters: the ambient Background sits
 * behind everything, the fixed Navbar floats on top, and route content fades
 * in inside <main>. Suspense catches lazily-loaded route chunks.
 */
export default function RootLayout() {
  return (
    <>
      {/* Keyboard users land here first. */}
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-bone px-4 py-2 text-sm font-medium text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Background />
      <ScrollToTop />
      <Navbar />

      <main id="main" className="relative">
        <Suspense fallback={<Loader />}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
