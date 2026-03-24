
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';
import BehanceSection from '../components/BehanceSection';

interface WorkProps {
  onProjectClick?: (id: string) => void;
  layout: '01' | '02';
}

const Work: React.FC<WorkProps> = ({ layout }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Layout 01: Refined Sequential Vertical Reveal
  const renderList = () => (
    <div className="relative border-t border-[var(--border)] w-full mb-32 md:mb-40">
      {PROJECTS.map((project, index) => {
        const itemRef = useRef<HTMLAnchorElement>(null);
        const [focus, setFocus] = useState(0);

        useEffect(() => {
          const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: Array.from({ length: 101 }, (_, i) => i / 100)
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const rect = entry.boundingClientRect;
                const viewportCenter = window.innerHeight / 2;
                const itemCenter = rect.top + rect.height / 2;
                const dist = Math.abs(viewportCenter - itemCenter);

                const focusZone = window.innerHeight * 0.6;
                const factor = Math.max(0, 1 - (dist / focusZone));
                setFocus(Math.pow(factor, 2));
              }
            });
          }, observerOptions);

          if (itemRef.current) {
            observer.observe(itemRef.current);
          }

          const handleScroll = () => {
            if (!itemRef.current) return;
            const rect = itemRef.current.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const viewportCenter = window.innerHeight / 2;
              const itemCenter = rect.top + rect.height / 2;
              const dist = Math.abs(viewportCenter - itemCenter);

              const focusZone = window.innerHeight * 0.6;
              const factor = Math.max(0, 1 - (dist / focusZone));
              setFocus(Math.pow(factor, 2));
            }
          };

          window.addEventListener('scroll', handleScroll, { passive: true });
          window.addEventListener('resize', handleScroll);

          return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
          };
        }, []);

        return (
          <Link
            key={project.id}
            to={`/work/${project.id}`}
            ref={itemRef}
            className="group relative flex flex-col w-full border-b border-[var(--border)] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[var(--text)]/5"
            style={{
              height: window.innerWidth < 768
                ? `${280 + (focus * 150)}px`
                : `${160 + (focus * 450)}px`,
            }}
          >
            <div className="absolute top-4 left-6 md:top-5 md:left-8 z-30 pointer-events-none">
              <span
                className="text-[9px] md:text-[10px] font-bold transition-all duration-500"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  opacity: 0.2 + (focus * 0.8),
                  color: focus > 0.4 ? 'var(--bg)' : 'var(--text-muted)'
                }}
              >
                0{index + 1}
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full h-full px-6 md:px-20 py-12 md:py-0 relative z-20 pointer-events-none">
              <div className="w-full md:w-[30%] text-left flex items-center md:h-full">
                <div className="flex flex-col">
                  <h2
                    className="text-2xl md:text-5xl font-bold tracking-tighter transition-all duration-700"
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      color: focus > 0.2 ? 'var(--text)' : 'var(--text-muted)',
                      transform: `translateY(${(1 - focus) * 10}px)`,
                      opacity: 0.3 + (focus * 0.7)
                    }}
                  >
                    {project.title}
                  </h2>
                  <div 
                    className="flex flex-wrap gap-2 mt-2 transition-all duration-700"
                    style={{
                      opacity: focus,
                      transform: `translateY(${(1 - focus) * 10}px)`
                    }}
                  >
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] md:text-[10px] uppercase tracking-widest text-[var(--accent)] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="w-full md:w-[40%] flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] my-6 md:my-0"
                style={{
                  opacity: focus,
                  transform: `translateY(${(1 - focus) * 40}px)`,
                }}
              >
                <div
                  className="relative w-full max-w-[420px] aspect-[16/9] overflow-hidden bg-[var(--surface)] rounded-[2px] shadow-2xl border border-[var(--border)]"
                  style={{
                    clipPath: window.innerWidth < 768 ? 'none' : `inset(${(1 - focus) * 100}% 0 0 0)`
                  }}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-1000 md:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 md:hidden" />
                </div>
              </div>

              <div className="w-full md:w-[30%] text-left md:text-right flex items-center md:justify-end md:h-full">
                <p
                  className="text-[9px] md:text-[12px] font-medium leading-relaxed max-w-[220px] transition-all duration-700"
                  style={{
                    color: focus > 0.4 ? 'var(--text-muted)' : 'var(--text)',
                    opacity: focus,
                    transform: `translateY(${(1 - focus) * 10}px)`
                  }}
                >
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );

  const renderGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
      {PROJECTS.map((project) => (
        <Link
          key={project.id}
          to={`/work/${project.id}`}
          className="group cursor-pointer flex flex-col gap-6 md:gap-10 transition-all duration-500"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-[var(--surface)] border border-[var(--border)] shadow-lg">
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 pointer-events-none group-active:opacity-10" />
          </div>
          <div className="flex flex-col gap-4 px-2">
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-[var(--text)] group-hover:translate-x-2 transition-transform" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {project.title}
              </h3>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)]">{project.category}</span>
            </div>
            <p className="text-xs md:text-sm text-[var(--text-muted)] line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[8px] md:text-[9px] uppercase tracking-widest px-2 py-1 bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen pt-48 pb-[100vh]" ref={containerRef}>
      <Helmet>
        <title>Work — Aditya Dey</title>
        <meta name="description" content="A selection of product and UX design projects focusing on interaction design, interface architecture, and digital experiences." />
        <meta property="og:title" content="Work — Aditya Dey" />
        <meta property="og:description" content="A selection of product and UX design projects focusing on interaction design, interface architecture, and digital experiences." />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-32 flex flex-col items-center">
          <h1
            className="text-[14vw] md:text-[12vw] font-bold leading-none tracking-tighter text-[var(--text)] select-none"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Work
          </h1>
          <div className="w-px h-24 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 mt-12" />
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 cubic-bezier-liquid">
          {layout === '01' ? renderList() : renderGrid()}
        </div>

        <BehanceSection username="adityadey" layout={layout} />
      </div>
    </main>
  );
};

export default Work;
