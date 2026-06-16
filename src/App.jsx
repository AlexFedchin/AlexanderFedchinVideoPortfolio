import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';

/**
 * Route-level code splitting: each page is its own lazily-loaded chunk, so the
 * initial load only ships the shell + the landing route. RootLayout provides
 * the <Suspense> boundary that covers these while they load.
 */
const Home = lazy(() => import('@/pages/Home'));
const Photography = lazy(() => import('@/pages/Photography'));
const Videos = lazy(() => import('@/pages/Videos'));
const VideoDetail = lazy(() => import('@/pages/VideoDetail'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:slug" element={<VideoDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
