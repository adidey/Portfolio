import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';
import { FULL_PROJECTS } from '../projectData';
import { CaseSection } from '../types';
import { m, LazyMotion, domMax, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';

const ProjectSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-20 md:py-28 border-b border-[var(--border)] last:border-0">
    <div className="md:col-span-4">
      <h2 className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] font-black mb-6 md:sticky md:top-32">
        {title}
      </h2>
    </div>
    <div className="md:col-span-8 flex flex-col gap-12">
      {children}
    </div>
  </div>
);

const ImageLightboxContext = React.createContext<(src: string) => void>(() => {});

const CaseSectionBlock: React.FC<{ section: CaseSection; index: number }> = ({ section, index }) => {
  const openLightbox = React.useContext(ImageLightboxContext);
  const num = String(index + 1).padStart(2, '0');

  const renderImages = () => {
    const { images, layout } = section;
    if (!images || images.length === 0) return null;

    if (layout === 'full' || images.length === 1) {
      return (
        <div
          className="w-full overflow-hidden cursor-zoom-in border border-[var(--border)] group"
          onClick={() => openLightbox(images[0])}
        >
          <img
            src={images[0]}
            alt={section.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      );
    }

    if (layout === 'wide') {
      return (
        <div className="w-full overflow-hidden cursor-zoom-in border border-[var(--border)] group" onClick={() => openLightbox(images[0])}>
          <img src={images[0]} alt={section.title} className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        </div>
      );
    }

    if (layout === 'grid-3' || images.length === 3) {
      return (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden border border-[var(--border)] cursor-zoom-in group" onClick={() => openLightbox(img)}>
              <img src={img} alt={`${section.title} ${i + 1}`} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      );
    }

    if (images.length === 2) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden border border-[var(--border)] cursor-zoom-in group" onClick={() => openLightbox(img)}>
              <img src={img} alt={`${section.title} ${i + 1}`} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      );
    }

    // 4+ images — 2-col grid
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden border border-[var(--border)] cursor-zoom-in group" onClick={() => openLightbox(img)}>
            <img src={img} alt={`${section.title} ${i + 1}`} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border-b border-[var(--border)] py-20 md:py-28 last:border-0">
      {/* Section label row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-start">
        <div className="md:col-span-1">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[var(--muted)] block pt-1">{num}</span>
        </div>
        <div className="md:col-span-11">
          <h3
            className="text-[clamp(1.4rem,3.5vw,2.5rem)] font-black leading-tight tracking-tight uppercase text-[var(--ink)] mb-6"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {section.title}
          </h3>
          {section.body && (
            <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--muted)] max-w-3xl">
              {section.body}
            </p>
          )}
        </div>
      </div>

      {/* Images */}
      {renderImages()}

      {/* Fig caption */}
      {section.images && section.images.length > 0 && (
        <div className="flex items-center gap-4 mt-5">
          <span className="text-[9px] uppercase tracking-[0.45em] text-[var(--muted)] font-bold">Fig. {num}</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">{section.title}</span>
        </div>
      )}
    </div>
  );
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = FULL_PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return null;

  return (
    <ImageLightboxContext.Provider value={setSelectedImage}>
      <LazyMotion features={domMax}>
        <div className="bg-[var(--bg)] text-[var(--ink)] relative">
          <Helmet>
            <title>{project.title} — Aditya Dey</title>
            <meta name="description" content={project.shortDescription} />
          </Helmet>

          {/* Image Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
              >
                <m.button
                  className="absolute top-10 right-10 text-white/50 hover:text-white p-2 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={32} />
                </m.button>
                <m.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </m.div>
            )}
          </AnimatePresence>

          <div className="relative">
            {/* Header */}
            <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 pt-8 md:pt-12 pb-16 md:pb-24 border-b border-[var(--border)] items-start">
              <div className="md:col-span-8 flex flex-col gap-4">
                <div className="mb-2">
                  <Link
                    to="/work"
                    className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-2 group font-bold"
                  >
                    <span className="transition-transform group-hover:-translate-x-1">←</span> Index
                  </Link>
                </div>
                <h1
                  className="text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.85] tracking-tight uppercase"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {project.title}
                </h1>
              </div>
              <div className="md:col-span-4 md:text-right flex flex-col items-start md:items-end pt-5">
                <div className="grid grid-cols-2 gap-8 text-left md:text-right">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-2">Category</p>
                    <p className="text-[14px] font-bold uppercase tracking-tight">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-2">Year</p>
                    <p className="text-[14px] font-bold uppercase tracking-tight">{project.year}</p>
                  </div>
                </div>
                <p className="text-[14px] md:text-[16px] leading-snug font-medium mt-8 max-w-xs">
                  {project.context}
                </p>
              </div>
            </header>

            {/* Hero Asset */}
            <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden bg-[#e5e5e5] border-b border-[var(--border)] relative">
              {project.figmaEmbed ? (
                <div
                  dangerouslySetInnerHTML={{ __html: project.figmaEmbed }}
                  className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-none"
                />
              ) : (
                <m.img
                  layoutId={`project-img-${project.id}`}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setSelectedImage(project.thumbnail)}
                />
              )}
            </div>

            <div>
              {/* Stack & Impact */}
              <ProjectSection title="Stack & Impact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-4">Core Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map(tech => (
                        <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink)] bg-[var(--border)]/40 px-3 py-1.5 border border-[var(--border)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-4">Key Metrics</p>
                    <ul className="space-y-2">
                      {project.metrics?.map((metric, i) => (
                        <li key={i} className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-tight">
                          <span className="text-[var(--accent)] text-[10px]">●</span> {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ProjectSection>

              {/* ── CASE STUDY SECTIONS (Behance-style) ── */}
              {project.sections && project.sections.length > 0 ? (
                <div className="py-4">
                  {project.sections.map((section, i) => (
                    <CaseSectionBlock key={i} section={section} index={i} />
                  ))}
                </div>
              ) : (
                /* Fallback for older projects without sections */
                <div className="py-20 md:py-28">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.images?.map((img, i) => (
                      <div key={i} className="aspect-[4/3] overflow-hidden bg-[var(--border)] mb-4 cursor-zoom-in border border-[var(--border)] group" onClick={() => setSelectedImage(img)}>
                        <img src={img} alt={`Preview ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* External Link */}
              {project.link && (
                <ProjectSection title="Live">
                  <div className="pt-8 pb-20">
                    <a
                      href={project.link.startsWith('http') ? project.link : '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-4 text-[20px] md:text-[32px] font-black uppercase tracking-tight hover:text-[var(--accent)] transition-all group"
                    >
                      Explore live project <ExternalLink size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </ProjectSection>
              )}
            </div>

            {/* Next Project Footer */}
            <footer className="border-t border-[var(--border)] py-20 text-center">
              <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-8">Next Up</p>
              <Link to="/work" className="group block">
                <h3 className="text-[clamp(2.5rem,8vw,8rem)] font-black uppercase tracking-tight text-[var(--ink)] leading-none transition-transform group-hover:scale-[0.98]">
                  Index <span className="inline-block transition-transform group-hover:translate-x-4">→</span>
                </h3>
              </Link>
            </footer>
          </div>
        </div>
      </LazyMotion>
    </ImageLightboxContext.Provider>
  );
};

export default ProjectDetail;
