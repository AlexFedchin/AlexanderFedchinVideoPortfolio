/**
 * Tiny className joiner — filters out falsy values so you can write
 * conditional classes inline without a dependency:
 *
 *   cn('btn', isActive && 'btn-active', className)
 */
export function cn(...parts) {
  return parts.flat(Infinity).filter(Boolean).join(' ');
}
