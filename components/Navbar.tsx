
import React, { useState, useRef, useEffect } from 'react';

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
                className={`px-5 py-3.5 text-[10px] uppercase tracking-widest transition-colors border-r border-neutral-800 last:border-r-0 ${isSelected(view) ? 'text-white bg-neutral-900/80' : 'text-neutral-500 hover:text-white hover:bg-neutral-900/40'}`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
