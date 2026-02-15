
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';

interface WorkProps {
  onProjectClick: (id: string) => void;
  layout: '01' | '02';
}

const Work: React.FC<WorkProps> = ({ onProjectClick, layout }) => {
  const [clickedId, setClickedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (id: string) => {
    setClickedId(id);
    setTimeout(() => {
      onProjectClick(id);
      setClickedId(null);
    }, 400);
  };

  // Layout 01: Refined Sequential Vertical Reveal
  const renderList = () => (
    <div className="relative border-t border-neutral-900 w-full mb-32 md:mb-40">
      {PROJECTS.map((project, index) => {
        const itemRef = useRef<HTMLDivElement>(null);
        const [focus, setFocus] = useState(0);

        useEffect(() => {
          const updateFocus = () => {
            if (!itemRef.current) return;
            const rect = itemRef.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const itemCenter = rect.top + rect.height / 2;
            const dist = Math.abs(viewportCenter - itemCenter);

            // Define a precise focus zone
            const focusZone = window.innerHeight * 0.6;
            const factor = Math.max(0, 1 - (dist / focusZone));
            // Cubic curve for ultra-smooth motion
            setFocus(Math.pow(factor, 2));
          };

          updateFocus();
          window.addEventListener('scroll', updateFocus, { passive: true });
          window.addEventListener('resize', updateFocus);
          return () => {
            window.removeEventListener('scroll', updateFocus);
            window.removeEventListener('resize', updateFocus);
          };
        }, []);

        return (
          <div
            key={project.id}
            ref={itemRef}
            className={`group relative flex flex-col w-full border-b border-neutral-900 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${clickedId === project.id ? 'bg-white/[0.05]' : 'hover:bg-neutral-900/30'
              }`}
            onClick={() => handleItemClick(project.id)}
            style={{
              height: window.innerWidth < 768
                ? `${280 + (focus * 150)}px` // More compact on mobile
                : `${160 + (focus * 450)}px`,
            }}
          >
            {/* Index Label */}
            <div className="absolute top-4 left-6 md:top-5 md:left-8 z-30 pointer-events-none">
              <span
                className="text-[9px] md:text-[10px] font-bold transition-all duration-500"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  opacity: 0.2 + (focus * 0.8),
                  color: focus > 0.4 ? '#ffffff' : '#444444'
                }}
              >
                0{index + 1}
              </span>
            </div>

            {/* Content Flex Container */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full h-full px-6 md:px-20 py-12 md:py-0 relative z-20 pointer-events-none">

              {/* Title Section */}
              <div className="w-full md:w-[30%] text-left flex items-center md:h-full">
                <h2
                  className="text-2xl md:text-5xl font-bold tracking-tighter transition-all duration-700"
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    color: focus > 0.2 ? '#ffffff' : '#333333',
                    transform: `translateY(${(1 - focus) * 10}px)`,
                    opacity: 0.3 + (focus * 0.7)
                  }}
                >
                  {project.title}
                </h2>
              </div>

              {/* Image Section */}
              <div
                className="w-full md:w-[40%] flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] my-6 md:my-0"
                style={{
                  opacity: focus,
                  transform: `translateY(${(1 - focus) * 40}px)`,
                }}
              >
                <div
                  className="relative w-full max-w-[420px] aspect-[16/9] overflow-hidden bg-neutral-900/40 rounded-[2px] shadow-2xl border border-white/5"
                  style={{
                    clipPath: window.innerWidth < 768 ? 'none' : `inset(${(1 - focus) * 100}% 0 0 0)`
                  }}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 md:group-hover:grayscale-0 md:group-hover:scale-105"
                  />
                  {/* Subtle overlay for mobile focus */}
                  <div className="absolute inset-0 bg-black/20 md:hidden" />
                </div>
              </div>

              {/* Info Section */}
              <div className="w-full md:w-[30%] text-left md:text-right flex items-center md:justify-end md:h-full">
                <p
                  className="text-[9px] md:text-[12px] font-medium leading-relaxed max-w-[220px] transition-all duration-700"
                  style={{
                    color: focus > 0.4 ? '#999999' : '#333333',
                    opacity: focus,
                    transform: `translateY(${(1 - focus) * 10}px)`
                  }}
                >
                  {project.link}
                </p>
              </div>
            </div>

            {/* Selection Highlight */}
            <div className={`absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none ${clickedId === project.id ? 'opacity-5' : 'opacity-0'}`} />
          </div>
        );
      })}
    </div>
  );

  const renderGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
      {PROJECTS.map((project, index) => (
        <div
          key={project.id}
          className={`group cursor-pointer flex flex-col gap-6 md:gap-10 transition-all duration-500 ${clickedId === project.id ? 'scale-[0.98]' : ''}`}
          onClick={() => handleItemClick(project.id)}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/5 shadow-lg">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover md:grayscale md:brightness-[0.7] transition-all duration-500 md:group-hover:grayscale-0 md:group-hover:brightness-110 md:group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none ${clickedId === project.id ? 'opacity-10' : 'opacity-0'}`} />
          </div>
          <div className="flex justify-between items-baseline px-2">
            <h3 className="text-2xl md:text-5xl font-bold tracking-tighter text-neutral-200 group-hover:text-white transition-all duration-300 md:group-hover:translate-x-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              {project.title}
            </h3>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">{project.category}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen bg-[#000000] pt-64 pb-[100vh]" ref={containerRef}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-64 flex flex-col items-center">
          <h1 className="text-[14vw] md:text-[12vw] font-bold leading-none tracking-tighter text-white select-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Work
          </h1>
          <div className="w-px h-24 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 mt-12" />
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 cubic-bezier-liquid">
          {layout === '01' ? renderList() : renderGrid()}
        </div>
      </div>
    </main>
  );
};

export default Work;
