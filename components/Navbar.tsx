
import React, { useState, useRef } from 'react';

export type PageView = 'home' | 'work' | 'about' | 'resume' | 'contact' | 'posters' | { type: 'project'; id: string };

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  workLayout: '01' | '02';
  onToggleLayout: (layout: '01' | '02') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, workLayout, onToggleLayout }) => {
  const isSelected = (view: string) => typeof currentView === 'string' && currentView === view;
  const isWorkActive = isSelected('work') || (typeof currentView !== 'string' && currentView.type === 'project');
  
  const navRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!navRef.current) return;
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

  const socialLinks = [
    { 
      label: 'LI', 
      href: 'https://www.linkedin.com/in/adityadey27/', 
      icon: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
    },
    { 
      label: 'GH', 
      href: 'https://github.com/adidey', 
      icon: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.235c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> 
    }
  ];

  return (
    <>
      {/* Top Right Layout Toggle */}
      <div className="fixed top-8 right-8 z-[110] flex items-center pointer-events-none">
        <div className={`flex items-center bg-black/40 backdrop-blur-xl border border-neutral-800 rounded-sm overflow-hidden pointer-events-auto transition-all duration-700 ${isWorkActive ? 'opacity-100' : 'opacity-0 translate-x-12'}`}>
          <button
            onClick={() => onToggleLayout('01')}
            className={`px-5 py-3.5 text-[10px] border-r border-neutral-800 font-mono transition-all duration-500 ${
              workLayout === '01' ? 'bg-neutral-100 text-black' : 'bg-transparent text-neutral-500 hover:text-white'
            }`}
          >
            01
          </button>
          <button
            onClick={() => onToggleLayout('02')}
            className={`px-5 py-3.5 text-[10px] font-mono transition-all duration-500 ${
              workLayout === '02' ? 'bg-neutral-100 text-black' : 'bg-transparent text-neutral-500 hover:text-white'
            }`}
          >
            02
          </button>
        </div>
      </div>

      {/* Center Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-6 md:p-8 flex justify-center pointer-events-none">
        <div 
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center bg-black/40 backdrop-blur-xl border border-neutral-800 rounded-sm overflow-hidden pointer-events-auto transition-all duration-500 group"
        >
          <div 
            className="absolute inset-[-1px] pointer-events-none z-[-1]"
            style={highlightStyle}
          />

          <button 
            onClick={() => onNavigate('home')}
            className="px-6 py-3.5 text-[11px] font-medium tracking-tight border-r border-neutral-800 hover:bg-neutral-900/50 transition-colors whitespace-nowrap"
          >
            Aditya Dey™
          </button>

          <div className="flex items-center">
            {['work', 'about', 'posters', 'contact'].map((view) => (
              <button 
                key={view}
                onClick={() => onNavigate(view as PageView)} 
                className={`px-5 py-3.5 text-[10px] uppercase tracking-widest transition-colors border-r border-neutral-800 ${isSelected(view) ? 'text-white bg-neutral-900/80' : 'text-neutral-500 hover:text-white hover:bg-neutral-900/40'}`}
              >
                {view}
              </button>
            ))}
          </div>

          {/* Socials Group */}
          <div className="flex items-center">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-neutral-500 hover:text-white transition-colors border-r border-neutral-800 last:border-r-0 hover:bg-neutral-900/40 flex items-center justify-center"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
