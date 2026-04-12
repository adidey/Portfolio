import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { m, LazyMotion, domMax } from 'framer-motion';

interface WorkProps {
  onProjectClick: (id: string) => void;
}

const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
  return (
    <LazyMotion features={domMax}>
      <main className="relative">
        <Helmet>
          <title>Work — Aditya Dey</title>
          <meta name="description" content="A curated index of product design, engineering, and digital systems." />
        </Helmet>

        {/* Standardized Z-Pattern Header */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 pt-8 md:pt-12 pb-16 md:pb-24 border-b border-[var(--border)] items-start">
          <div className="md:col-span-8 flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] font-bold">Index</p>
            <h1
              className="font-black text-[var(--ink)] uppercase tracking-tight leading-[0.85]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              Project<br />Archive
            </h1>
          </div>
          <div className="md:col-span-4 md:text-right flex flex-col items-start md:items-end pt-1">
             <p className="text-[13px] md:text-[15px] leading-relaxed text-[var(--muted)] max-w-xs font-medium">
               A curated index of product design, engineering, and digital systems — exploring the intersection of art and logic.
             </p>
             <div className="mt-8 flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] rounded-full">
               <span className="text-[9px] font-black uppercase tracking-widest text-[var(--ink)]">{PROJECTS.length} Selected Projects</span>
             </div>
          </div>
        </header>

        {/* Folder Grid Restoration — Optimized for spacious editorial flow */}
        <div className="py-12 md:py-20">
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10"
          >
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={onProjectClick} 
              />
            ))}
          </m.div>
        </div>


      </main>
    </LazyMotion>
  );
};

export default Work;
