import React, { useState, useEffect } from 'react';
import { m, LazyMotion, domMax, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

// ─── Component: Project Grid Item ────────────────────────────────────────
const ProjectGridItem = ({ project, delay = 0 }: { project: any; delay?: number }) => (
  <m.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col group"
  >
    <Link to={`/work/${project.id}`} className="flex flex-col">
      <div className="aspect-[16/10] overflow-hidden rounded-lg bg-[var(--surface)] relative mb-6 border border-[var(--border)] group-hover:border-[var(--ink)]/20 transition-colors">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[var(--ink)]/5 group-hover:bg-transparent transition-colors duration-700" />
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-[14px] md:text-[15px] font-bold uppercase tracking-widest text-[var(--ink)]">
            {project.title}
          </h4>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--muted)]">
            {project.category}
          </span>
        </div>
        <p className="text-[13px] leading-relaxed text-[var(--muted)] font-medium line-clamp-1 max-w-[90%]">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  </m.div>
);

// ─── Component: Attentive Frame ──────────────────────────────────────────
const FocusFrame = () => (
  <m.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    className="fixed inset-0 pointer-events-none z-[50]"
  >
    {/* Corner Brackets */}
    {[
      "top-10 left-10 border-t-2 border-l-2",
      "top-10 right-10 border-t-2 border-r-2",
      "bottom-10 left-10 border-b-2 border-l-2",
      "bottom-10 right-10 border-b-2 border-r-2"
    ].map((pos, i) => (
      <m.div 
        key={i}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: [0.1, 0.3, 0.1] }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 1 },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`absolute w-4 h-4 border-[var(--ink)]/20 ${pos}`}
    />
  ))}
</m.div>

);

export const InteractiveCanvas = () => {
  // Selecting higher-impact projects: Sonora, Aurorae, and Exousia
  const featured = PROJECTS.filter(p => ['sonora', 'aurorae', 'exousia'].includes(p.id)).slice(0, 3);
  const [showFocus, setShowFocus] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFocus(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LazyMotion features={domMax}>
      <div className="w-full min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col relative overflow-hidden">
        
        {/* Attentive UI Layer */}
        <FocusFrame />

        {/* ── BACKGROUND ACCENTS ────────────────────────────────────────── */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none" />

        {/* ── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="w-full pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex flex-col gap-8 md:gap-12">
              {/* Subtle Tag */}
              <m.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-[1px] bg-[var(--border)]" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--muted)]">Focusing Architecture</span>
              </m.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
                <div className="lg:col-span-8">
                  <m.h1 
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight uppercase leading-[0.9] text-[var(--ink)]"
                  >
                    Building products <br />
                    <span className="text-[var(--muted)]">with structure</span> <br />
                    and intent.
                  </m.h1>
                </div>
                <div className="lg:col-span-4 pt-4">
                  <m.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col gap-6"
                  >
                    <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--muted)] font-medium max-w-sm">
                      I'm Aditya Dey. I help teams translate complex ideas into clean, connected systems. Currently bridging the gap between design and high-performance engineering.
                    </p>
                    <div className="flex items-center gap-6">
                       <Link to="/about" className="text-[11px] font-black uppercase tracking-widest border-b border-[var(--ink)] pb-1 hover:opacity-50 transition-opacity">Learn more</Link>
                       <Link to="/contact" className="text-[11px] font-black uppercase tracking-widest text-[var(--muted)] hover:text-[var(--ink)] transition-colors">Start a project</Link>
                    </div>
                  </m.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECT INDEX SECTION ────────────────────────────────────── */}
        <section className="w-full flex-1 border-t border-[var(--border)] pt-16 md:pt-24 pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between mb-12">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--muted)]">Selected Projects</h3>
               <Link to="/work" className="text-[10px] font-black uppercase tracking-widest hover:text-[var(--muted)] transition-colors">View Index &rarr;</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
              {featured.map((p, i) => (
                <ProjectGridItem key={p.id} project={p} delay={0.4 + (0.1 * i)} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </LazyMotion>
  );
};
