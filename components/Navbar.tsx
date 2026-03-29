
import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export type PageView = 'home' | 'work' | 'about' | 'resume' | 'contact' | 'posters' | { type: 'project'; id: string };

interface NavbarProps {
  currentPath: string;
  onNavigate: (view: PageView) => void;
  workLayout: '01' | '02';
  onToggleLayout: (layout: '01' | '02') => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentPath, 
  onNavigate, 
  workLayout, 
  onToggleLayout,
  theme,
  onToggleTheme
}) => {
  const isSelected = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    return path !== '/' && currentPath.startsWith(path);
  };

  const isToggleVisible = isSelected('/work') || isSelected('/posters');

  const navRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!navRef.current || window.innerWidth < 768) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHighlightStyle({
      opacity: 1,
      background: `radial-gradient(120px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.3), transparent)`,
      transition: 'background 0.1s linear, opacity 0.3s ease'
    });
  };

  const handleMouseLeave = () => {
    setHighlightStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const menuItems = [
    { label: 'work', path: '/work' },
    { label: 'about', path: '/about' },
    { label: 'posters', path: '/posters' },
    { label: 'contact', path: '/contact' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape or resize
  useEffect(() => {
    const handleEvents = (e: KeyboardEvent | UIEvent) => {
      if ((e as KeyboardEvent).key === 'Escape') setIsMobileMenuOpen(false);
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEvents as any);
    window.addEventListener('resize', handleEvents as any);
    return () => {
      window.removeEventListener('keydown', handleEvents as any);
      window.removeEventListener('resize', handleEvents as any);
    };
  }, []);

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/adityadey27/',
      icon: <svg className="w-5 h-5 md:w-3.5 md:h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    },
    {
      label: 'GitHub',
      href: 'https://github.com/adidey',
      icon: <svg className="w-5 h-5 md:w-3.5 md:h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.235c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    }
  ];

  return (
    <>
      {/* Top Right Layout Toggle - Responsive Positioning */}
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-[110] flex items-center gap-2 pointer-events-none">
        <div className={`flex items-center bg-[var(--bg)]/60 backdrop-blur-xl border border-[var(--border)] rounded-sm overflow-hidden pointer-events-auto transition-all duration-700 ${isToggleVisible ? 'opacity-100' : 'opacity-0 translate-x-12'}`}>
          <button
            onClick={() => onToggleLayout('01')}
            className={`px-4 md:px-5 py-2.5 md:py-3.5 text-[10px] md:text-xs border-r border-[var(--border)] font-mono transition-all duration-500 ${workLayout === '01' ? 'bg-[var(--text)] text-[var(--bg)]' : 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
          >
            01
          </button>
          <button
            onClick={() => onToggleLayout('02')}
            className={`px-4 md:px-5 py-2.5 md:py-3.5 text-[10px] md:text-xs font-mono transition-all duration-500 ${workLayout === '02' ? 'bg-[var(--text)] text-[var(--bg)]' : 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
          >
            02
          </button>
        </div>

        <button
          onClick={onToggleTheme}
          className="flex items-center justify-center bg-[var(--bg)]/60 backdrop-blur-xl border border-[var(--border)] rounded-sm p-2.5 md:p-3.5 pointer-events-auto transition-all duration-700 hover:bg-[var(--surface)] text-[var(--text)]"
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </div>

      {/* Center Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[110] p-6 md:p-8 flex justify-center pointer-events-none">
        <div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center bg-[var(--bg)]/60 backdrop-blur-xl border border-[var(--border)] rounded-sm overflow-hidden pointer-events-auto transition-all duration-500 group max-w-full"
        >
          <div
            className="absolute inset-[-1px] pointer-events-none z-[-1] hidden md:block"
            style={highlightStyle}
          />

          <Link
            to="/"
            onClick={handleLinkClick}
            className="w-[120px] h-[48px] flex items-center justify-center text-[11px] md:text-[12px] font-bold tracking-tight border-r border-[var(--border)] hover:bg-[var(--surface)] transition-colors whitespace-nowrap"
          >
            Aditya Dey™
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center h-full">
            {menuItems.map((item, i) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `w-[120px] h-[48px] flex items-center justify-center text-[10px] uppercase tracking-widest transition-colors ${i === menuItems.length - 1 ? '' : 'border-r border-[var(--border)]'} ${isActive ? 'text-[var(--text)] bg-[var(--surface)]' : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]/50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-[120px] h-[48px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors flex items-center justify-center gap-2"
          >
            <div className="w-5 h-5 relative flex flex-col justify-center gap-1.5 flex-shrink-0">
              <span className={`w-full h-[1.5px] bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold whitespace-nowrap hidden sm:block">Menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[105] bg-[var(--bg)]/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
          } md:hidden`}
      >
        <div className="h-full flex flex-col p-8 pt-32 relative">
          {/* Internal Close Button for Mobile Drawer */}
          <button 
            onClick={handleLinkClick}
            className="absolute top-8 right-8 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col gap-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 mb-4">Navigation</p>
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `text-left text-5xl font-bold tracking-tighter uppercase transition-all ${isActive ? 'text-[var(--text)]' : 'text-[var(--text-muted)] active:text-[var(--text)]'}`
                }
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto grid grid-cols-2 gap-8 border-t border-neutral-900 pt-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-6">Socials</p>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="text-sm font-medium hover:text-blue-500 transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-6">Availability</p>
              <p className="text-xs font-mono uppercase leading-relaxed">
                Open for <br /> Collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
