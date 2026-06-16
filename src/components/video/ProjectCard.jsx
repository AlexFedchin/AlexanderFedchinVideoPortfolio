import ShortFilmCard from './ShortFilmCard';
import MusicVideoCard from './MusicVideoCard';
import ClipCard from './ClipCard';

/**
 * Renders the right card for a video based on its category. Keeps every list
 * (sections, related, featured) free of category branching.
 */
export default function ProjectCard({ video }) {
  if (video.category === 'Short Films') return <ShortFilmCard video={video} />;
  if (video.category === 'Music Videos') return <MusicVideoCard video={video} />;
  return <ClipCard video={video} />; // VFX Breakdowns & Commercials
}
