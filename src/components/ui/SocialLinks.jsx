import { site } from '@/data/site';
import { cn } from '@/utils/cn';
import { iconByName, ArrowUpRight } from './icons';

/**
 * Social links rendered from site.socials (data-driven — never hardcoded).
 *   variant="row"  → compact circular icon buttons (footer, menus, hero)
 *   variant="list" → icon + name + handle rows (footer/connect, contact)
 */
export default function SocialLinks({ variant = 'row', className }) {
  const { socials } = site;

  if (variant === 'list') {
    return (
      <ul className={cn('flex flex-col gap-3', className)}>
        {socials.map((s) => {
          const IconCmp = iconByName[s.icon];
          const external = s.url.startsWith('http');
          return (
            <li key={s.name}>
              <a
                href={s.url}
                {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="group flex w-full items-center gap-3 text-bone-muted transition-colors hover:text-bone"
              >
                {IconCmp && (
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-white/30">
                    <IconCmp className="h-4 w-4" />
                  </span>
                )}
                <span className="flex flex-col leading-tight">
                  <span className="text-sm text-bone">{s.name}</span>
                  <span className="text-xs text-bone-dim">{s.handle}</span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {socials.map((s) => {
        const IconCmp = iconByName[s.icon];
        const external = s.url.startsWith('http');
        return (
          <a
            key={s.name}
            href={s.url}
            aria-label={s.name}
            title={s.name}
            {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-bone-muted transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-white/30 hover:text-bone"
          >
            {IconCmp && <IconCmp className="h-[1.1rem] w-[1.1rem]" />}
          </a>
        );
      })}
    </div>
  );
}
