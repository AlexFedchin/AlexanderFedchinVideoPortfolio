import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { ArrowRight } from './icons';

const VARIANTS = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  link: 'btn-link',
};

const SIZES = {
  lg: 'btn-lg',
  md: 'btn-md',
};

/**
 * One button to rule them all. Renders:
 *   - a <Link>   when given `to`   (internal route)
 *   - an <a>     when given `href` (external — opens safely in a new tab)
 *   - a <button> otherwise
 *
 * `withArrow` adds a trailing arrow that slides on hover (the `group` class
 * wires the hover relationship).
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'lg',
  withArrow = false,
  icon = null,
  className,
  ...props
}) {
  const classes = cn('btn', SIZES[size], VARIANTS[variant], withArrow && 'group', className);

  const content = (
    <>
      {icon}
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-out-expo group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
