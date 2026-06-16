import { useState } from 'react';
import { VIDEO_CATEGORIES, getVideosByCategory } from '@/data/videos';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import CategoryFilter from '@/components/gallery/CategoryFilter';
import VideoSection from '@/components/video/VideoSection';

const toId = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function Videos() {
  // 'All' shows every section stacked; a specific category isolates one.
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? VIDEO_CATEGORIES : [active];

  return (
    <>
      <PageHeader title="Videos" />

      <Container className="py-12">
        <CategoryFilter categories={VIDEO_CATEGORIES} active={active} onChange={setActive} />

        <div className="mt-16 flex flex-col gap-24">
          {visible.map((category) => (
            <VideoSection
              key={category}
              id={toId(category)}
              title={category}
              videos={getVideosByCategory(category)}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
