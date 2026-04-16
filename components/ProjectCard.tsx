
import React, { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
  priority?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, priority = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(project.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer aspect-[4/5] md:aspect-[1/1] overflow-hidden rounded-[32px] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--folder-glow)]"
      data-cursor-label="VIEW"
    >
      {/* SVG Mask Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id={`folder-clip-${project.id}`} clipPathUnits="objectBoundingBox">
            <path d="M0,0.1 
                     C0,0.04 0.02,0.04 0.05,0.04 
                     L0.32,0.04 
                     C0.38,0.04 0.40,0.02 0.45,0 
                     L1,0 
                     L1,1 
                     L0,1 
                     Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Layer 0: Background Canvas */}
      <div className="absolute inset-0 z-0 bg-[var(--bg)] overflow-hidden">
        {/* Designer Grid Motif */}
        <div className="absolute inset-0 designer-grid opacity-15 pointer-events-none" />

        {/* Project Image */}
        <m.img
          layoutId={`project-img-${project.id}`}
          src={project.thumbnail}
          alt={project.title}
          initial={{ scale: 1, filter: 'grayscale(0.1) brightness(0.8)' }}
          animate={{
            scale: isHovered ? 1.1 : 1.02,
            filter: isHovered ? 'grayscale(0) brightness(1)' : 'grayscale(0.1) brightness(0.8)',
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
      </div>

      {/* Layer 1: Foreground Folder Panel */}
      <m.div
        initial={false}
        animate={{
          y: isHovered ? '35%' : '0%',
          rotate: isHovered ? -0.5 : 0
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="absolute inset-0 z-10 flex flex-col justify-end"
      >
        <div
          className="h-[42%] w-full bg-[var(--folder-bg)] text-[var(--folder-text)] p-6 md:p-7 flex flex-col justify-between relative border-t border-white/10"
          style={{
            clipPath: `url(#folder-clip-${project.id})`,
            boxShadow: isHovered ? '0 40px 80px -15px rgba(0,0,0,0.5)' : 'var(--shadow-realistic)'
          }}
        >
          {/* Top Content (Tab Area) */}
          <div className="flex justify-between items-start pt-3">
            <div className="space-y-1.5">
              <h3 className="text-xl md:text-2xl font-bold tracking-tighter leading-none font-satoshi">
                {project.title.replace(/\s/g, '')}
              </h3>
              <p className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-medium">
                {project.category}
              </p>
            </div>

            {/* Tech Stack Tags (List up to 3) */}
            <div className="flex flex-wrap justify-end gap-1.5 max-w-[150px]">
              {project.tags.slice(0, 3).map((tag, i) => (
                <div key={tag} className="flex items-center gap-1 px-2 py-1 bg-current/5 border border-current/10 rounded-md">
                  {i === 0 && <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />}
                  <span className="text-[7px] font-bold tracking-widest opacity-80 uppercase leading-none">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Impact Metrics */}
          <div className="flex justify-between items-end pt-5 border-t border-current/10">
            <div className="flex flex-col gap-1.5">
              <span className="text-[7px] uppercase tracking-[0.3em] opacity-40 font-bold">Performance_Index</span>
              <p className="text-[11px] font-bold tracking-tight max-w-[180px] leading-snug">
                {project.metrics?.[0] || 'Standardized Operational Procedures'}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs md:text-sm font-bold tracking-tight leading-none opacity-80 block mb-1">
                {project.role}
              </span>
              <p className="text-[6px] uppercase tracking-widest opacity-30">Rel_Role</p>
            </div>
          </div>
        </div>
      </m.div>

      {/* Immersive Outer Glow & View Action on Hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none z-20 border-[0.5px] border-white/20 rounded-[32px] bg-black/10 backdrop-blur-[2px]"
            />
            <m.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
            >
              <div className="px-6 py-2.5 bg-white text-black rounded-full shadow-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                  View Case Study
                </span>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
