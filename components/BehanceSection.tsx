import React, { useEffect, useState, useRef } from 'react';
import { getBehanceProjects, type BehanceProject } from '../services/behanceService';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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

  const BehanceListItem: React.FC<{ project: BehanceProject; index: number }> = ({ project, index }) => {
    const itemRef = useRef<HTMLAnchorElement>(null);
    const [focus, setFocus] = useState(0);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const viewportCenter = window.innerHeight / 2;
            const itemCenter = rect.top + rect.height / 2;
            const dist = Math.abs(viewportCenter - itemCenter);
            const focusZone = window.innerHeight * 0.6;
            const factor = Math.max(0, 1 - dist / focusZone);
            setFocus(Math.pow(factor, 2));
          }
        });
      }, observerOptions);

      if (itemRef.current) observer.observe(itemRef.current);

      const handleScroll = () => {
        if (!itemRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const viewportCenter = window.innerHeight / 2;
          const itemCenter = rect.top + rect.height / 2;
          const dist = Math.abs(viewportCenter - itemCenter);
          const focusZone = window.innerHeight * 0.6;
          const factor = Math.max(0, 1 - dist / focusZone);
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

    const height = isMobile ? `${280 + focus * 150}px` : `${160 + focus * 450}px`;

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 400);
    };

    return (
      <a
        ref={itemRef}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`group relative flex flex-col w-full border-b border-[var(--border)] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[var(--surface)]/30 ${clicked ? 'bg-[var(--text)]/[0.05]' : ''}`}
        style={{ height }}
      >
        {/* Index Label */}
        <div className="absolute top-4 left-6 md:top-5 md:left-8 z-30 pointer-events-none">
          <span
            className="text-[9px] md:text-[10px] font-bold transition-all duration-500"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              opacity: 0.2 + focus * 0.8,
              color: focus > 0.4 ? 'var(--text)' : 'var(--text-muted)',
            }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Content Flex Container */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full h-full px-6 md:px-20 py-12 md:py-0 relative z-20 pointer-events-none">
          {/* Title Section */}
          <div className="w-full md:w-[30%] text-left flex items-center md:h-full">
            <h3
              className="text-2xl md:text-5xl font-bold tracking-tighter transition-all duration-700"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                color: focus > 0.2 ? 'var(--text)' : 'var(--text-muted)',
                transform: `translateY(${(1 - focus) * 10}px)`,
                opacity: 0.3 + focus * 0.7,
              }}
            >
              {project.title}
            </h3>
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
                clipPath: isMobile ? 'none' : `inset(${(1 - focus) * 100}% 0 0 0)`,
              }}
            >
              {project.coverImage ? (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-all duration-1000 md:group-hover:grayscale-0 md:group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-neutral-800" />
              )}
              <div className="absolute inset-0 bg-black/20 md:hidden" />
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-[30%] text-left md:text-right flex items-center md:justify-end md:h-full">
            <p
              className="text-[9px] md:text-[12px] font-medium leading-relaxed max-w-[260px] transition-all duration-700"
              style={{
                color: focus > 0.4 ? 'var(--text-muted)' : 'var(--border)',
                opacity: focus,
                transform: `translateY(${(1 - focus) * 10}px)`,
              }}
            >
              {project.description || 'Behance project'}
            </p>
          </div>
        </div>

        {/* Selection Highlight */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none ${clicked ? 'opacity-5' : 'opacity-0'
            }`}
        />
      </a>
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
          <div className="relative border-t border-neutral-900 w-full mb-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="relative flex flex-col w-full border-b border-neutral-900 overflow-hidden transition-all duration-700 bg-neutral-900/10"
                style={{ height: isMobile ? '320px' : '240px' }}
              >
                <div className="absolute inset-0 bg-neutral-900/20 animate-pulse" />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full h-full px-6 md:px-20 py-12 md:py-0">
                  <div className="w-full md:w-[30%]">
                    <div className="h-6 md:h-10 w-2/3 bg-neutral-800 rounded animate-pulse" />
                  </div>
                  <div className="w-full md:w-[40%] my-6 md:my-0">
                    <div className="aspect-[16/9] bg-neutral-800 rounded-[2px] border border-white/5 animate-pulse" />
                  </div>
                  <div className="w-full md:w-[30%] md:flex md:justify-end">
                    <div className="h-4 w-full md:w-2/3 bg-neutral-800 rounded animate-pulse" />
                  </div>
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
          <div className="relative border-t border-[var(--border)] w-full mb-32 md:mb-40">
            {projects.map((project, index) => (
              <BehanceListItem key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer flex flex-col gap-6 md:gap-10 opacity-70 hover:opacity-100 transition-opacity duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-[var(--surface)] border border-[var(--border)] shadow-lg">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover md:grayscale transition-all duration-500 md:group-hover:grayscale-0 md:group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--surface)]" />
                  )}
                </div>
                <div className="flex flex-col gap-3 px-2">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    Behance Archive
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold tracking-tighter text-[var(--text)] group-hover:translate-x-2 transition-transform duration-300"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    {project.title}
                  </h3>
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

