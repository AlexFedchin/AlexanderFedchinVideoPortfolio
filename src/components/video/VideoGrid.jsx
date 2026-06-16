import ProjectCard from './ProjectCard';

/**
 * A simple responsive grid of project cards. Used for "related" rails and
 * featured strips, where every item shares a category (so cards are uniform).
 */
export default function VideoGrid({ videos, columns = 'sm:grid-cols-2 lg:grid-cols-3' }) {
  if (!videos?.length) return null;

  return (
    <div className={`grid grid-cols-1 gap-6 ${columns}`}>
      {videos.map((video) => (
        <ProjectCard key={video.id} video={video} />
      ))}
    </div>
  );
}
