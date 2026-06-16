import { useState } from 'react';
import { photos } from '@/data/photos';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import MasonryGallery from '@/components/gallery/MasonryGallery';
import Lightbox from '@/components/gallery/Lightbox';

export default function Photography() {
  const [index, setIndex] = useState(null);

  return (
    <>
      <PageHeader title="Photography" />

      <Container className="py-12">
        <MasonryGallery photos={photos} onSelect={setIndex} columns="lg:columns-3 xl:columns-4" />
      </Container>

      <Lightbox
        photos={photos}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
