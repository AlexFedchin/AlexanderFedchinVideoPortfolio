import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site } from '@/data/site';
import { cn } from '@/utils/cn';
import { useScrolled } from '@/hooks/useScrolled';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { Menu, Close, ArrowUpRight } from '@/components/ui/icons';
import SocialLinks from '@/components/ui/SocialLinks';

function Monogram() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/[0.04] font-display text-sm font-bold text-bone transition-colors duration-400 ease-out-expo group-hover:border-white/40">
        {site.monogram}
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-[0.95rem] tracking-wide text-bone">{site.name}</span>
        <span className="mt-1 text-[0.56rem] uppercase tracking-cinematic text-bone-dim">
          {site.role}
        </span>
      </span>
    </Link>
  );
}

function DesktopLink({ item }) {
  return (
    <NavLink
      to={item.to}
      end={item.to === '/'}
      className={({ isActive }) =>
        cn(
          'relative py-1 text-sm tracking-wide transition-colors duration-300',
          isActive ? 'text-bone' : 'text-bone-muted hover:text-bone'
        )
      }
    >
      {({ isActive }) => (
        <>
          {item.label}
          <span
            className={cn(
              'absolute -bottom-0.5 left-0 h-px w-full origin-left bg-white/70 transition-transform duration-400 ease-out-expo',
              isActive ? 'scale-x-100' : 'scale-x-0'
            )}
          />
        </>
      )}
    </NavLink>
  );
}

function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div id="mobile-menu" className="fixed inset-0 z-40 lg:hidden">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink-950/80 backdrop-blur-2xl animate-fade-in"
      />
      <div className="glass-strong relative mx-3 mt-[5.25rem] rounded-3xl p-6 animate-slide-down">
        <ul className="flex flex-col">
          {site.nav.map((item, i) => (
            <li key={item.to} className="animate-fade-up" style={{ animationDelay: `${i * 55}ms` }}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between border-b border-white/5 py-4 font-display text-2xl transition-colors',
                    isActive ? 'text-bone' : 'text-bone-muted hover:text-bone'
                  )
                }
              >
                {item.label}
                <ArrowUpRight className="h-5 w-5 text-bone-dim" />
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between">
          <SocialLinks variant="row" />
          <span className="text-[0.65rem] uppercase tracking-cinematic text-bone-dim">
            {site.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useBodyScrollLock(open);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo',
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/70 backdrop-blur-2xl'
          : 'border-b border-transparent'
      )}
    >
      <nav className="shell flex h-20 items-center justify-between" aria-label="Primary">
        <Monogram />

        <div className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <DesktopLink key={item.to} item={item} />
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn btn-md btn-ghost group">
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-400 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-bone transition-colors hover:border-white/25 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
