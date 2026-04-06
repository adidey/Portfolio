import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import BehanceSection from '../components/BehanceSection';
import MacWindow from '../components/MacWindow';
import { m, AnimatePresence, LazyMotion, domMax } from 'framer-motion';
import { ExternalLink, Play, Eye } from 'lucide-react';

interface WorkProps {
  onProjectClick?: (id: string) => void;
  layout: '01' | '02';
}

const Work: React.FC<WorkProps> = ({ layout }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Layout 01: Refined Sequential Vertical Reveal
const DesignerArtifact: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const artifacts = project.annotations || [];
  if (artifacts.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {artifacts.map((text, i) => {
        const isEven = index % 2 === 0;
        const seed = (index * 13) + (i * 7);
        const top = (seed % 15) + (i * 35);
        const left = isEven ? (seed % 15) + 75 : (seed % 15) - 5;
        const rotate = (seed % 20) - 10;

        return (
          <m.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotate: rotate + 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: rotate }}
            transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
            className={`absolute p-3 border shadow-xl backdrop-blur-xl hidden md:block select-none
              ${i % 2 === 0 ? 'bg-[var(--accent)] text-white border-white/20' : 'bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)]'}
            `}
            style={{ 
              top: `${top}%`, 
              left: `${left}%`,
              borderRadius: '2px'
            }}
          >
            <div className="flex items-center gap-2 mb-1 opacity-50">
               <div className="w-1 h-1 rounded-full bg-current" />
               <span className="text-[7px] font-mono tracking-widest">{i === 0 ? 'ANNOTATION' : 'SYSTEM_NOTE'}</span>
            </div>
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] leading-tight">
              {text}
            </p>
          </m.div>
        );
      })}
    </div>
  );
};

const ProjectBoardCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Staggered side-entry calculations
  const isEven = index % 2 === 0;
  const rotation = isHovered ? 0 : (isEven ? -2.5 : 2.5);
  const xOffset = isEven ? -100 : 100;

  return (
    <m.div
      initial={{ opacity: 0, x: isEven ? -100 : 100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-64 last:mb-96"
      style={{
        zIndex: isHovered ? 100 : 10 + index,
      }}
    >
      <Link
        to={`/work/${project.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor-label="VIEW"
        className="group relative block w-full max-w-5xl mx-auto cursor-none h-fit"
      >
        <DesignerArtifact project={project} index={index} />
        
        <m.div 
          className="relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          animate={{
            rotate: rotation,
            scale: isHovered ? 1.02 : 1
          }}
        >
          <MacWindow title={project.title} category={project.category} className="aspect-[16/9]">
            {/* Main Image / Preview */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-105 opacity-40 blur-sm' : 'opacity-80'}`}
              />
              
              {/* Hover Preview Content */}
              <AnimatePresence>
                {isHovered && (
                  <m.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex items-center justify-center p-12 z-10"
                  >
                    <div className="text-center max-w-lg space-y-6">
                      <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--accent)] font-bold">Prototype Insight</p>
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--text)]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-lg text-[var(--text-muted)] leading-relaxed font-light italic">
                        "{project.shortDescription}"
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 pt-4 max-w-xs mx-auto">
                         {project.tags.slice(0, 3).map(tag => (
                           <span key={tag} className="text-[8px] uppercase tracking-[0.2em] px-3 py-1 border border-[var(--border)] text-[var(--text-muted)] rounded-full whitespace-nowrap">
                             {tag}
                           </span>
                         ))}
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </MacWindow>

          {/* Contextual Annotation Box */}
          <div className="mt-8 flex justify-between items-end">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-[var(--text-muted)]">SYSTEM:</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text)]">{project.title}</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-[var(--text-muted)]">Problem context: {project.problem.slice(0, 60)}...</p>
            </div>
            <div className="flex gap-6 items-center">
               <div className="w-16 h-px bg-[var(--border)]" />
               <span className="text-[10px] font-mono text-[var(--text-muted)] opacity-50">0{index + 1}</span>
            </div>
          </div>
        </m.div>
      </Link>
    </m.div>
  );
};

const renderList = () => (
  <div className="relative w-full py-20 px-8 md:px-32 max-w-[1600px] mx-auto">
    {PROJECTS.map((project, index) => (
      <ProjectBoardCard key={project.id} project={project} index={index} />
    ))}
  </div>
);

const renderGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32 mb-32">
    {PROJECTS.map((project) => (
      <Link
        key={project.id}
        to={`/work/${project.id}`}
        data-cursor-label="VIEW"
        className="group cursor-pointer flex flex-col gap-6 md:gap-10 transition-all duration-500"
      >
        <MacWindow title={project.title} category={project.category} className="aspect-[16/10]">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 pointer-events-none group-active:opacity-10" />
        </MacWindow>
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
    <LazyMotion features={domMax}>
      <main className="relative z-10" ref={containerRef}>
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
    </LazyMotion>
  );
};

export default Work;
