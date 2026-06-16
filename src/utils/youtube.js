/**
 * YouTube helpers. Videos are referenced by id only (see src/data/videos.js);
 * thumbnails and embeds are derived here so nothing is duplicated.
 */

/**
 * Thumbnail URL. Qualities, largest → smallest:
 *   maxresdefault (1280×720, not always present)
 *   sddefault (640×480)
 *   hqdefault (480×360, ALWAYS present)
 * The <VideoThumbnail> component walks down this list on error.
 */
export const ytThumb = (id, quality = 'maxresdefault') =>
  `https://i.ytimg.com/vi/${id}/${quality}.jpg`;

export const THUMB_FALLBACKS = ['maxresdefault', 'sddefault', 'hqdefault'];

/**
 * Privacy-enhanced embed URL (youtube-nocookie). `rel=0` keeps related videos
 * limited to the same channel; `modestbranding` trims chrome.
 */
export const ytEmbed = (id, { autoplay = false } = {}) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&color=white${
    autoplay ? '&autoplay=1' : ''
  }`;

/** Canonical watch URL (used for "open on YouTube" links). */
export const ytWatch = (id) => `https://www.youtube.com/watch?v=${id}`;
