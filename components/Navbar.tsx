import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, m, LazyMotion, domMax } from 'motion/react';

export type PageView = 'home' | 'work' | 'about' | 'resume' | 'contact' | 'posters' | { type: 'project'; id: string };

interface NavbarProps {
  currentPath: string;
  onNavigate: (view: PageView) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const AnimatedIdentity = ({ isScrolled, isExpanded, hovered, onHoverChange }: { isScrolled: boolean; isExpanded: boolean; hovered: boolean; onHoverChange: (hovered: boolean) => void }) => {
  return (
    <m.div
      layout
      transition={{ layout: { duration: 0.3, ease: [0.19, 1, 0.22, 1] } }}
      className="pointer-events-auto select-none flex items-center group relative h-8"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <div className="flex items-center text-[12px] font-bold tracking-[0.18em] uppercase text-[var(--ink)] overflow-hidden">
        <m.span layout>A</m.span>
        <AnimatePresence mode="popLayout" initial={false}>
          {(isExpanded || hovered) && (
            <m.span
              key="ditya"
              layout
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden whitespace-nowrap"
            >
              ditya&nbsp;
            </m.span>
          )}
        </AnimatePresence>
        <m.span layout>D</m.span>
        <AnimatePresence mode="popLayout" initial={false}>
          {(isExpanded || hovered) && (
            <m.span
              key="ey"
              layout
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden whitespace-nowrap"
            >
              ey
            </m.span>
          )}
        </AnimatePresence>
      </div>
    </m.div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoExpanded, setIsLogoExpanded] = useState(true);
  const [logoHovered, setLogoHovered] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const menuItems = [
    { label: 'WORK', path: '/work' },
    { label: 'GALLERY', path: '/posters' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' },
  ];



  useEffect(() => {
    // Initial identity reveal sequence
    const timer = setTimeout(() => {
      setIsLogoExpanded(false);
      setHasInitialized(true);
    }, 1500); // 1.5s to account for page entry

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <>
      <m.header
        key={currentPath}
        initial={{ x: 40, opacity: 0, rotateY: 5 }}
        animate={{ x: 0, opacity: 1, rotateY: 0 }}
        exit={{ x: -40, opacity: 0, rotateY: -5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 pointer-events-none ${isScrolled
          ? 'bg-[var(--bg)]/70 backdrop-blur-md border-b-[0.5px] border-[var(--ink)]/5 py-4'
          : 'bg-transparent py-8 md:py-12'
        }`}>


        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link
            to="/"
            className="pointer-events-auto block w-[110px]"
            aria-label="Aditya Dey — Home"
          >
            <AnimatedIdentity
              isScrolled={isScrolled}
              isExpanded={isLogoExpanded}
              hovered={logoHovered}
              onHoverChange={setLogoHovered}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
            {menuItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={`text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-300 ${isActive ? 'text-[var(--ink)] opacity-100' : 'text-[var(--muted)] hover:text-[var(--ink)] hover:opacity-100'
                    }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden pointer-events-auto text-[var(--ink)] p-1"
            aria-label="Open menu"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="0" y1="2" x2="22" y2="2" />
              <line x1="0" y1="8" x2="22" y2="8" />
              <line x1="0" y1="14" x2="22" y2="14" />
            </svg>
          </button>
        </div>
      </m.header>


      <div className={`fixed inset-0 z-[200] bg-[var(--bg)] flex flex-col px-8 pt-14 pb-12 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-6 right-6 text-[var(--muted)] p-2 hover:text-[var(--ink)] transition-colors"
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="2" y1="2" x2="18" y2="18" />
            <line x1="18" y1="2" x2="2" y2="18" />
          </svg>
        </button>

        <Link to="/" onClick={() => setIsMobileOpen(false)} className="mb-14">
          {/* Simple static version for mobile menu */}
          <div className="text-[12px] font-bold tracking-[0.18em] uppercase text-[var(--ink)]">Aditya Dey</div>
        </Link>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `text-5xl font-black tracking-tight uppercase transition-opacity ${isActive ? 'text-[var(--ink)]' : 'text-[var(--muted)]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto text-[11px] text-[var(--muted)] tracking-widest uppercase">
          Open for Work — Melbourne, AU
        </div>
      </div>
    </>
  );
};

export default Navbar;
