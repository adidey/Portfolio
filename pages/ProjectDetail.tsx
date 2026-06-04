import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FULL_PROJECTS } from '../projectData';
import { CaseSection } from '../types';
import { m, LazyMotion, domMax, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  X, 
  Target, 
  ShieldAlert, 
  Wrench, 
  GraduationCap, 
  ArrowLeft, 
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  Beaker,
  Eye,
  CheckCircle,
  Activity
} from 'lucide-react';

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
          className="w-full overflow-hidden cursor-zoom-in border border-[var(--border)] group rounded-lg bg-[var(--surface)]"
          onClick={() => openLightbox(images[0])}
        >
          <img
            src={images[0]}
            alt={section.title}
            className="w-full h-auto object-cover transition-transform duration-750 ease-out-expo group-hover:scale-[1.015]"
          />
        </div>
      );
    }

    if (layout === 'wide') {
      return (
        <div 
          className="w-full overflow-hidden cursor-zoom-in border border-[var(--border)] group rounded-lg bg-[var(--surface)]" 
          onClick={() => openLightbox(images[0])}
        >
          <img 
            src={images[0]} 
            alt={section.title} 
            className="w-full aspect-[21/9] object-cover transition-transform duration-750 ease-out-expo group-hover:scale-[1.015]" 
          />
        </div>
      );
    }

    if (layout === 'grid-3' || images.length === 3) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="overflow-hidden border border-[var(--border)] cursor-zoom-in group rounded-lg bg-[var(--surface)]" 
              onClick={() => openLightbox(img)}
            >
              <img 
                src={img} 
                alt={`${section.title} ${i + 1}`} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-750 ease-out-expo group-hover:scale-105" 
              />
            </div>
          ))}
        </div>
      );
    }

    // 2-col or more
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="overflow-hidden border border-[var(--border)] cursor-zoom-in group rounded-lg bg-[var(--surface)]" 
            onClick={() => openLightbox(img)}
          >
            <img 
              src={img} 
              alt={`${section.title} ${i + 1}`} 
              className="w-full aspect-[4/3] object-cover transition-transform duration-750 ease-out-expo group-hover:scale-105" 
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border-b border-[var(--border)] py-14 md:py-20 last:border-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 lg:mb-12 items-start">
        <div className="lg:col-span-1 flex items-center gap-3 lg:block">
          <span className="text-[11px] font-black tracking-[0.5em] uppercase text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded lg:bg-transparent lg:px-0 lg:py-0 lg:rounded-none lg:block">
            {num}
          </span>
        </div>
        <div className="lg:col-span-11">
          <h3
            className="text-[clamp(1.5rem,3vw,2.2rem)] font-black leading-tight tracking-tight uppercase text-[var(--ink)] mb-4"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {section.title}
          </h3>
          {section.body && (
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[var(--muted)] max-w-3xl">
              {section.body}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {renderImages()}
      </div>

      {section.images && section.images.length > 0 && (
        <div className="flex items-center gap-4 mt-5">
          <span className="text-[9px] uppercase tracking-[0.45em] text-[var(--muted)] font-black">Fig. {num}</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[40px]" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] font-medium">{section.title}</span>
        </div>
      )}
    </div>
  );
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const project = FULL_PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useEffect(() => {
    if (!project) return;
    
    const sections = ['overview', 'challenge', 'process'];
    if (project.sections && project.sections.length > 0) sections.push('deep-dive');
    if (project.challenges || project.tradeoffs) sections.push('decisions');
    if (project.learnings) sections.push('reflection');
    if (project.abTests && project.abTests.length > 0) sections.push('ab-testing');
    if (project.wcagAudit) sections.push('accessibility');

    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-20% 0px -50% 0px' }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [project, projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col justify-center items-center p-8">
        <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Project Not Found</h2>
        <Link to="/work" className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold">Back to index</Link>
      </div>
    );
  }

  // Sidebar navigation data
  const navItems = [
    { id: 'overview', label: '01 / Overview' },
    { id: 'challenge', label: '02 / Challenge' },
    { id: 'process', label: '03 / Process' },
    ...(project.sections && project.sections.length > 0 ? [{ id: 'deep-dive', label: '04 / Deep Dive' }] : []),
    ...(project.challenges || project.tradeoffs ? [{ id: 'decisions', label: '05 / Decisions' }] : []),
    ...(project.learnings ? [{ id: 'reflection', label: '06 / Reflection' }] : []),
    ...(project.abTests && project.abTests.length > 0 ? [{ id: 'ab-testing', label: '07 / A/B Testing' }] : []),
    ...(project.wcagAudit ? [{ id: 'accessibility', label: '08 / Accessibility' }] : [])
  ];

  return (
    <ImageLightboxContext.Provider value={setSelectedImage}>
      <LazyMotion features={domMax}>
        <div className="bg-[var(--bg)] text-[var(--ink)] relative min-h-screen">
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
                className="fixed inset-0 z-[1000] bg-black/95 overflow-y-auto cursor-zoom-out flex justify-center items-center p-4 sm:p-10"
              >
                <m.button
                  className="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors z-[1001]"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={28} />
                </m.button>
                <m.img
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: 'spring', damping: 30, stiffness: 220 }}
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-auto max-w-full max-h-[90vh] object-contain shadow-2xl rounded-md"
                />
              </m.div>
            )}
          </AnimatePresence>

          {/* Header */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-16 pb-12 border-b border-[var(--border)]">
            <div className="mb-6 md:mb-10">
              <Link
                to="/work"
                className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-2.5 group font-bold"
              >
                <ArrowLeft size={10} className="transition-transform group-hover:-translate-x-1" /> INDEX
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] font-bold block mb-3">
                  {project.category}
                </span>
                <h1
                  className="text-[clamp(2.2rem,8vw,5.5rem)] font-black leading-[0.85] tracking-tight uppercase mb-4"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {project.title}
                </h1>
                <p className="text-[16px] md:text-[18px] leading-relaxed text-[var(--muted)] max-w-2xl font-medium">
                  {project.shortDescription}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-row lg:flex-col lg:items-end justify-between items-center lg:justify-end gap-6 text-left lg:text-right border-t lg:border-t-0 pt-6 lg:pt-0 border-[var(--border)]">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-1">Timeline</p>
                  <p className="text-[15px] font-black uppercase tracking-tight text-[var(--ink)]">{project.year}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-1">Origin</p>
                  <p className="text-[15px] font-black uppercase tracking-tight text-[var(--ink)]">{project.client}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Banner / Interactive embed */}
          <div className="w-full h-[50vh] md:h-[75vh] bg-[#111] border-b border-[var(--border)] relative overflow-hidden">
            {project.figmaEmbed ? (
              <div
                dangerouslySetInnerHTML={{ __html: project.figmaEmbed }}
                className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-none"
              />
            ) : (
              <m.img
                layoutId={`project-img-${project.id}`}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover cursor-zoom-in opacity-95"
                onClick={() => setSelectedImage(project.thumbnail)}
              />
            )}
            
            {project.annotations && project.annotations.length > 0 && (
              <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 text-[10px] uppercase font-bold tracking-wider text-white rounded shadow-lg">
                <Sparkles size={12} className="text-[var(--accent)]" />
                {project.annotations[0]}
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* STICKY LEFT NAVIGATION - TABLE OF CONTENTS */}
              <div className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-28 space-y-8">
                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.45em] text-[var(--muted)] font-black mb-6">
                      CASE NAVIGATION
                    </h4>
                    <nav className="flex flex-col gap-3">
                      {navItems.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`text-[11px] uppercase tracking-[0.3em] font-black transition-all duration-300 block py-1 border-l-2 pl-4 ${
                            activeSection === item.id
                              ? 'text-[var(--accent)] border-[var(--accent)]'
                              : 'text-[var(--muted)] border-transparent hover:text-[var(--ink)] hover:border-[var(--border)]'
                          }`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="h-px bg-[var(--border)] w-1/2" />

                  {/* MINI ROLE INFO */}
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-[8px] uppercase tracking-[0.35em] text-[var(--muted)] font-black mb-1">MY ROLE</h5>
                      <p className="text-[12px] font-bold text-[var(--ink)] leading-snug">{project.role}</p>
                      {project.roleDetail && (
                        <p className="text-[11px] text-[var(--muted)] mt-1 leading-normal">{project.roleDetail}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN CASE CONTENT */}
              <div className="lg:col-span-9 space-y-24">
                
                {/* 01 / OVERVIEW & BRIEF */}
                <section id="overview" className="scroll-mt-28 space-y-12">
                  <div className="border-b border-[var(--border)] pb-12">
                    <div className="flex items-center gap-3 text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                      <Layers size={14} /> 01 / OVERVIEW
                    </div>
                    
                    <h2 
                      className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-8"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      Context & Vision
                    </h2>

                    <p className="text-[16px] md:text-[18px] leading-relaxed text-[var(--ink)] font-normal mb-8 max-w-4xl">
                      {project.context}
                    </p>

                    {/* Metadata Dashboard */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-soft">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest text-[var(--muted)] font-black block mb-2">CLIENT</span>
                        <span className="text-[13px] font-bold text-[var(--ink)] uppercase tracking-tight block">{project.client}</span>
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-widest text-[var(--muted)] font-black block mb-2">ROLE</span>
                        <span className="text-[13px] font-bold text-[var(--ink)] uppercase tracking-tight block">{project.role}</span>
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-widest text-[var(--muted)] font-black block mb-2">CATEGORY</span>
                        <span className="text-[13px] font-bold text-[var(--ink)] uppercase tracking-tight block">{project.category}</span>
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-widest text-[var(--muted)] font-black block mb-2">YEAR</span>
                        <span className="text-[13px] font-bold text-[var(--ink)] uppercase tracking-tight block">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Brief, Goal, Stack & Metrics Split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Brief & Goal */}
                    <div className="space-y-8">
                      {project.brief && (
                        <div>
                          <h4 className="text-[11px] uppercase tracking-[0.3em] text-[var(--ink)] font-black mb-3">THE BRIEF</h4>
                          <p className="text-[14px] leading-relaxed text-[var(--muted)]">{project.brief}</p>
                        </div>
                      )}
                      
                      {project.goal && (
                        <div className="p-5 border border-l-4 border-[var(--border)] border-l-[var(--accent)] bg-[var(--surface)] rounded shadow-soft">
                          <div className="flex items-center gap-2 text-[var(--accent)] font-black text-[9px] uppercase tracking-widest mb-2">
                            <Target size={14} /> PRIMARY GOAL
                          </div>
                          <p className="text-[13px] leading-relaxed text-[var(--ink)] font-medium">{project.goal}</p>
                        </div>
                      )}
                    </div>

                    {/* Stack & Impact metrics */}
                    <div className="space-y-8">
                      {project.technologies && project.technologies.length > 0 && (
                        <div>
                          <h4 className="text-[11px] uppercase tracking-[0.3em] text-[var(--ink)] font-black mb-3">CORE TECH STACK</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                              <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink)] bg-[var(--border)]/40 px-3 py-1.5 border border-[var(--border)] rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.metrics && project.metrics.length > 0 && (
                        <div className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-lg shadow-soft">
                          <h4 className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] font-black mb-4 flex items-center gap-2">
                            <TrendingUp size={12} className="text-[var(--accent)]" /> KEY IMPACT METRICS
                          </h4>
                          <ul className="space-y-3">
                            {project.metrics.map((metric, i) => (
                              <li key={i} className="flex items-start gap-3 text-[13px] font-bold uppercase tracking-tight text-[var(--ink)]">
                                <span className="text-[var(--accent)] text-[12px] mt-0.5">●</span>
                                <span>{metric}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {/* 02 / THE PROBLEM SPACE */}
                <section id="challenge" className="scroll-mt-28 space-y-8 border-t border-[var(--border)] pt-16">
                  <div className="flex items-center gap-3 text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-2">
                    <ShieldAlert size={14} /> 02 / THE CHALLENGE
                  </div>
                  
                  <h2 
                    className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-4"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    The Problem
                  </h2>

                  <p className="text-[16px] md:text-[17px] leading-relaxed text-[var(--muted)] max-w-4xl">
                    {project.problem}
                  </p>

                  <div className="p-6 md:p-8 bg-[#111] text-[#f9f8f4] border border-[#222] rounded-lg relative overflow-hidden shadow-realistic">
                    {/* Background canvas decoration element */}
                    <div className="absolute inset-0 designer-grid opacity-5" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                      <div className="text-[var(--accent)] pt-1">
                        <ShieldAlert size={32} />
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-[0.35em] text-[var(--accent)] font-black mb-2">
                          CORE SYSTEM DIFFICULTY & HINDERANCE
                        </h4>
                        <p className="text-[15px] md:text-[17px] leading-relaxed font-bold tracking-tight uppercase" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                          How might we streamline this system to eliminate context switching, maximize visual transparency, and guarantee transactions without compounding cognitive overload?
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 03 / PROCESS & STRATEGY */}
                <section id="process" className="scroll-mt-28 space-y-8 border-t border-[var(--border)] pt-16">
                  <div className="flex items-center gap-3 text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-2">
                    <Cpu size={14} /> 03 / PROCESS & STRATEGY
                  </div>
                  
                  <h2 
                    className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-4"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    Process & Engineering
                  </h2>

                  <p className="text-[16px] md:text-[17px] leading-relaxed text-[var(--muted)] max-w-4xl">
                    {project.process}
                  </p>

                  {project.processImages && project.processImages.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      {project.processImages.map((img, i) => (
                        <div 
                          key={i} 
                          className="overflow-hidden border border-[var(--border)] cursor-zoom-in group rounded-lg bg-[var(--surface)]"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img 
                            src={img} 
                            alt={`Process step ${i + 1}`} 
                            className="w-full aspect-[16/10] object-cover transition-transform duration-750 ease-out-expo group-hover:scale-105" 
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                {/* 04 / DEEP DIVE CASE SECTIONS */}
                {project.sections && project.sections.length > 0 && (
                  <section id="deep-dive" className="scroll-mt-28 border-t border-[var(--border)] pt-16">
                    <div className="flex items-center gap-3 text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                      <Sparkles size={14} /> 04 / CASE STUDY DEEP DIVE
                    </div>
                    
                    <h2 
                      className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-2"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      Interface Architecture & Implementation
                    </h2>

                    <div className="py-4">
                      {project.sections.map((section, i) => (
                        <CaseSectionBlock key={i} section={section} index={i} />
                      ))}
                    </div>
                  </section>
                )}

                {/* 05 / DECISION HUB (Split Grid for Challenges vs Tradeoffs) */}
                {(project.challenges || project.tradeoffs) && (
                  <section id="decisions" className="scroll-mt-28 space-y-8 border-t border-[var(--border)] pt-16">
                    <div className="flex items-center gap-3 text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-2">
                      <Wrench size={14} /> 05 / DECISION HUB
                    </div>
                    
                    <h2 
                      className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-4"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      Engineering Architecture & Decisions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      {/* Left: Challenges */}
                      {project.challenges && (
                        <div className="p-6 md:p-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-soft">
                          <div className="flex items-center gap-2 text-[var(--accent)] font-black text-[10px] uppercase tracking-widest mb-4">
                            <Wrench size={16} /> THE HURDLES (CHALLENGES)
                          </div>
                          <p className="text-[14px] leading-relaxed text-[var(--muted)]">
                            {project.challenges}
                          </p>
                        </div>
                      )}

                      {/* Right: Tradeoffs */}
                      {project.tradeoffs && (
                        <div className="p-6 md:p-8 bg-[var(--ink)] text-[var(--bg)] border border-[var(--border)] rounded-lg shadow-realistic">
                          <div className="flex items-center gap-2 text-[var(--accent)] font-black text-[10px] uppercase tracking-widest mb-4">
                            <Cpu size={16} /> THE DECISIONS (TRADE-OFFS)
                          </div>
                          <p className="text-[14px] leading-relaxed opacity-85">
                            {project.tradeoffs}
                          </p>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* 06 / REFLECTION & RETROSPECTIVE */}
                {project.learnings && (
                  <section id="reflection" className="scroll-mt-28 space-y-8 border-t border-[var(--border)] pt-16">
                    <div className="flex items-center gap-3 text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-2">
                      <GraduationCap size={14} /> 06 / REFLECTION
                    </div>
                    
                    <h2 
                      className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-4"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      Retrospective & Reflections
                    </h2>

                    <div className="p-8 md:p-10 border border-[var(--border)] rounded-lg relative overflow-hidden bg-[var(--surface)] shadow-soft">
                      {/* Grid background effect */}
                      <div className="absolute inset-0 designer-grid opacity-[0.03] pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col gap-6">
                        <p className="text-[15px] md:text-[16px] leading-relaxed text-[var(--ink)]">
                          {project.learnings}
                        </p>
                        
                        <div className="border-t border-[var(--border)] pt-6 mt-2 flex items-center gap-4">
                          <div className="w-10 h-10 bg-[var(--border)] rounded-full flex items-center justify-center font-bold text-[13px] text-[var(--ink)] border border-[var(--border)]">
                            AD
                          </div>
                          <div>
                            <span className="text-[11px] font-black uppercase tracking-wider text-[var(--ink)] block">
                              Aditya Dey
                            </span>
                            <span className="text-[9px] uppercase tracking-wider text-[var(--muted)] block">
                              Lead Product Engineer & Designer
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* 07 / A/B TESTING */}
                {project.abTests && project.abTests.length > 0 && (
                  <section id="ab-testing" className="scroll-mt-28 space-y-8 border-t border-[var(--border)] pt-16">
                    <div className="flex items-center gap-3 text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-2">
                      <Beaker size={14} /> 07 / A/B TESTING & VALIDATION
                    </div>
                    
                    <h2 
                      className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-4"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      Empirical Validation
                    </h2>

                    <div className="space-y-12 pt-4">
                      {project.abTests.map((test, index) => (
                        <div key={index} className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--surface)] shadow-soft">
                          {/* Top: Hypothesis */}
                          <div className="p-6 md:p-8 bg-[#111] text-[#f9f8f4] border-b border-[var(--border)]">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] font-black mb-3">HYPOTHESIS</h4>
                            <p className="text-[15px] leading-relaxed font-medium">{test.hypothesis}</p>
                          </div>

                          {/* Middle: Control vs Variant */}
                          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
                            <div className="p-6 md:p-8 space-y-4">
                              <span className="inline-block text-[10px] font-black tracking-widest text-[var(--muted)] uppercase border border-[var(--border)] px-2.5 py-1 rounded-full">Control</span>
                              <h5 className="text-[14px] font-bold text-[var(--ink)] uppercase tracking-tight">{test.controlLabel}</h5>
                              <p className="text-[13px] leading-relaxed text-[var(--muted)]">{test.controlDesc}</p>
                              <div className="pt-4 mt-auto">
                                <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-black block mb-1">Result</span>
                                <span className="text-[16px] font-black text-[var(--ink)]">{test.controlValue}</span>
                              </div>
                            </div>
                            <div className="p-6 md:p-8 space-y-4 relative bg-[var(--accent)]/5">
                              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--accent)]/20 to-transparent pointer-events-none" />
                              <span className="inline-block text-[10px] font-black tracking-widest text-[var(--accent)] uppercase border border-[var(--accent)]/30 px-2.5 py-1 rounded-full bg-[var(--accent)]/10">Variant</span>
                              <h5 className="text-[14px] font-bold text-[var(--ink)] uppercase tracking-tight">{test.variantLabel}</h5>
                              <p className="text-[13px] leading-relaxed text-[var(--muted)]">{test.variantDesc}</p>
                              <div className="pt-4 mt-auto">
                                <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-black block mb-1">Result</span>
                                <span className="text-[16px] font-black text-[var(--accent)]">{test.variantValue}</span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom: Insight & Improvement */}
                          <div className="p-6 md:p-8 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                              <div className="bg-[var(--accent)]/10 text-[var(--accent)] p-4 rounded border border-[var(--accent)]/20 h-full flex flex-col justify-center">
                                <span className="text-[10px] uppercase tracking-widest font-black mb-2 opacity-80">Key Improvement</span>
                                <span className="text-[20px] font-black tracking-tight leading-none">{test.improvement}</span>
                              </div>
                            </div>
                            <div className="md:col-span-8 space-y-4">
                              <div>
                                <h4 className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)] font-black mb-2">PSYCHOLOGICAL INSIGHT</h4>
                                <p className="text-[14px] leading-relaxed text-[var(--muted)]">{test.insight}</p>
                              </div>
                              {test.methodology && (
                                <div className="pt-2">
                                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)] font-black mb-2">METHODOLOGY</h4>
                                  <p className="text-[12px] leading-relaxed text-[var(--muted)] font-mono opacity-80">{test.methodology}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 08 / ACCESSIBILITY (WCAG) */}
                {project.wcagAudit && (
                  <section id="accessibility" className="scroll-mt-28 space-y-8 border-t border-[var(--border)] pt-16">
                    <div className="flex items-center gap-3 text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-2">
                      <Activity size={14} /> 08 / ACCESSIBILITY & INCLUSION
                    </div>
                    
                    <h2 
                      className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-4"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      WCAG Audit & Compliance
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
                      {/* Left: Summary Stats */}
                      <div className="lg:col-span-1 space-y-6">
                        <div className="p-6 border border-[var(--border)] rounded-lg bg-[var(--surface)] text-center shadow-soft">
                          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] font-black block mb-2">TARGET COMPLIANCE</span>
                          <span className="text-[28px] font-black text-[var(--ink)] tracking-tight">{project.wcagAudit.compliance}</span>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-5 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
                            <div className="flex items-center gap-2 text-[var(--ink)] font-black text-[10px] uppercase tracking-widest mb-3">
                              <Eye size={14} /> VISUAL CONTRAST
                            </div>
                            <p className="text-[13px] leading-relaxed text-[var(--muted)]">{project.wcagAudit.contrastRatio}</p>
                          </div>
                          
                          <div className="p-5 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
                            <div className="flex items-center gap-2 text-[var(--ink)] font-black text-[10px] uppercase tracking-widest mb-3">
                              <Activity size={14} /> FOCUS & KEYBOARD
                            </div>
                            <p className="text-[13px] leading-relaxed text-[var(--muted)]">{project.wcagAudit.focusManagement}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right: Detailed Criteria & Motion */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="p-6 md:p-8 border border-[var(--border)] rounded-lg bg-[var(--surface)] shadow-soft h-full">
                          <h4 className="text-[11px] uppercase tracking-[0.3em] text-[var(--ink)] font-black mb-6">CRITERIA VALIDATION</h4>
                          
                          <div className="space-y-6">
                            {project.wcagAudit.criteria.map((criterion, i) => (
                              <div key={i} className="flex gap-4 items-start">
                                <div className="mt-1">
                                  {criterion.status === 'pass' ? (
                                    <CheckCircle size={16} className="text-emerald-500" />
                                  ) : criterion.status === 'manual' ? (
                                    <Eye size={16} className="text-amber-500" />
                                  ) : (
                                    <X size={16} className="text-red-500" />
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[13px] font-bold text-[var(--ink)]">{criterion.criterion}</span>
                                    <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[var(--border)] text-[var(--muted)] uppercase tracking-wider">{criterion.level}</span>
                                  </div>
                                  <p className="text-[13px] leading-relaxed text-[var(--muted)]">{criterion.note}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {project.wcagAudit.screenReaderSupport && (
                            <div className="mt-8 pt-6 border-t border-[var(--border)]">
                              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)] font-black mb-3">SCREEN READER SUPPORT</h4>
                              <p className="text-[13px] leading-relaxed text-[var(--muted)]">{project.wcagAudit.screenReaderSupport}</p>
                            </div>
                          )}
                          
                          {project.wcagAudit.motionSafety && (
                            <div className="mt-6 pt-6 border-t border-[var(--border)]">
                              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)] font-black mb-3">MOTION SAFETY</h4>
                              <p className="text-[13px] leading-relaxed text-[var(--muted)]">{project.wcagAudit.motionSafety}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* LIVE EXPLORE LINK */}
                {project.link && (
                  <div className="border-t border-[var(--border)] pt-16 pb-10">
                    <a
                      href={project.link.startsWith('http') ? project.link : '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-4 text-[20px] md:text-[28px] font-black uppercase tracking-tight hover:text-[var(--accent)] transition-colors group"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      Explore live project <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                )}
                
              </div>
            </div>
          </div>

          {/* Next Project Footer */}
          <footer className="border-t border-[var(--border)] py-16 text-center bg-[var(--surface)]">
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-black mb-4">WANT TO SEE MORE?</p>
            <Link to="/work" className="group block">
              <h3 className="text-[clamp(2rem,7vw,6.5rem)] font-black uppercase tracking-tight text-[var(--ink)] leading-none transition-transform group-hover:scale-[0.98]">
                Return to Index <span className="inline-block transition-transform group-hover:translate-x-3">→</span>
              </h3>
            </Link>
          </footer>
        </div>
      </LazyMotion>
    </ImageLightboxContext.Provider>
  );
};

export default ProjectDetail;
