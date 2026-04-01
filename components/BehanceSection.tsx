import React, { useEffect, useState, useRef } from 'react';
import { getBehanceProjects, type BehanceProject } from '../services/behanceService';
import MacWindow from './MacWindow';

interface BehanceSectionProps {
  username: string;
  layout?: '01' | '02';
}

const SKELETON_COUNT = 4;

const BehanceSection: React.FC<BehanceSectionProps> = ({ username, layout = '01' }) => {
  const [projects, setProjects] = useState<BehanceProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasIntersected(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasIntersected || !username) return;

    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getBehanceProjects(username);
        if (!cancelled) {
          if (data.length === 0) {
            setError('No Behance projects available right now.');
          } else {
            setProjects(data);
          }
        }
      } catch (e) {
        if (!cancelled) {
          setError('Unable to load Behance projects at the moment.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [hasIntersected, username]);

  const showContent = !isLoading && !error && projects.length > 0;

  const BehanceCard: React.FC<{ project: BehanceProject; index: number }> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isEven = index % 2 === 0;
    const rotation = isHovered ? 0 : (isEven ? -2.5 : 2.5);

    return (
      <div
        className="relative mb-32 last:mb-0"
        style={{ zIndex: isHovered ? 100 : 10 + index }}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-cursor-label="VIEW"
          className="group relative block w-full max-w-5xl mx-auto cursor-none h-fit"
        >
          <div
            className="relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `rotate(${rotation}deg) scale(${isHovered ? 1.02 : 1})`,
            }}
          >
            <MacWindow title={project.title} category="Behance Archive" className="aspect-[16/9]">
              <div className="relative w-full h-full overflow-hidden">
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-105 opacity-40 blur-sm' : 'opacity-80'}`}
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--surface)]" />
                )}
                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
                    <div className="text-center max-w-lg space-y-4">
                      <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent)] font-bold">Behance Archive</p>
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--text)]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed font-light italic">
                          "{project.description}"
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </MacWindow>

            {/* Annotation row */}
            <div className="mt-8 flex justify-between items-end">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">SYSTEM:</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text)]">{project.title}</span>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-[var(--text-muted)]">Archive — Behance</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-16 h-px bg-[var(--border)]" />
                <span className="text-[10px] font-mono text-[var(--text-muted)] opacity-50">0{index + 1}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <section
      ref={containerRef}
      className="mt-32 md:mt-40 border-t border-[var(--border)] pt-16 md:pt-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[var(--text-muted)] mb-3">
            Archive Work
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text)]"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Behance
          </h2>
        </div>
        <a
          href={`https://www.behance.net/${encodeURIComponent(username)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          → View full archive on Behance
        </a>
      </div>

      {/* Skeleton loader */}
      {isLoading && (
        layout === '01' ? (
          <div className="relative w-full py-20 px-8 md:px-32 max-w-[1600px] mx-auto space-y-32">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="w-full max-w-5xl mx-auto">
                <div className="aspect-[16/9] bg-neutral-900 border border-white/5 rounded-[2px] animate-pulse" />
                <div className="mt-8 flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="h-3 w-32 bg-neutral-800 rounded animate-pulse" />
                    <div className="h-2 w-48 bg-neutral-900 rounded animate-pulse" />
                  </div>
                  <div className="h-2 w-8 bg-neutral-800 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
            {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
              <div key={idx} className="group flex flex-col gap-6 md:gap-8">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/5">
                  <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                </div>
                <div className="space-y-3 px-1">
                  <div className="h-3 w-24 bg-neutral-800 rounded-full animate-pulse" />
                  <div className="h-6 w-3/4 bg-neutral-800 rounded animate-pulse" />
                  <div className="h-3 w-full bg-neutral-900 rounded animate-pulse" />
                  <div className="h-3 w-2/3 bg-neutral-900 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        )
      )}

      {/* Error / fallback */}
      {!isLoading && error && (
        <div className="mt-6 text-sm md:text-base text-neutral-500">
          {error}
        </div>
      )}

      {/* Projects grid */}
      {showContent && (
        layout === '01' ? (
          <div className="relative w-full py-20 px-8 md:px-32 max-w-[1600px] mx-auto">
            {projects.map((project, index) => (
              <BehanceCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32 mb-32">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="VIEW"
                className="group cursor-none flex flex-col gap-6 md:gap-10 transition-all duration-500"
              >
                <MacWindow title={project.title} category="Behance Archive" className="aspect-[16/10]">
                  <img
                    src={project.coverImage || ''}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 pointer-events-none group-active:opacity-10" />
                </MacWindow>
                <div className="flex flex-col gap-4 px-2">
                  <div className="flex justify-between items-baseline">
                    <h3
                      className="text-2xl md:text-4xl font-bold tracking-tighter text-[var(--text)] group-hover:translate-x-2 transition-transform"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)]">Behance Archive</span>
                  </div>
                  {project.description && (
                    <p className="text-xs md:text-sm text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )
      )}
    </section>
  );
};

export default BehanceSection;

