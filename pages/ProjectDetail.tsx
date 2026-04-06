
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';
import { m, AnimatePresence, LazyMotion, domMax } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

interface ProjectDetailProps {
  onBack?: () => void;
}

const ProjectSection: React.FC<{ title: string; children: React.ReactNode; sticky?: boolean }> = ({ title, children, sticky = true }) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start py-24 md:py-32 border-b border-[var(--border)] last:border-0">
    <div className="md:col-span-4">
      <h2 className={`text-[10px] uppercase tracking-[0.5em] text-[var(--accent)] font-bold mb-8 md:mb-0 ${sticky ? 'md:sticky md:top-40' : ''}`}>
        {title}
      </h2>
    </div>
    <div className="md:col-span-8 flex flex-col gap-16">
      {children}
    </div>
  </div>
);

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onBack }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return null;

  return (
    <LazyMotion features={domMax}>
      <div className="text-[var(--text)] selection:bg-[var(--accent)] selection:text-white">
        <Helmet>
          <title>{project.title} — Aditya Dey</title>
          <meta name="description" content={project.shortDescription} />
        </Helmet>

        <div className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="mb-32">
            <Link 
              to="/work" 
              data-cursor-label="BACK"
              className="text-[10px] uppercase tracking-[0.5em] mb-16 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors inline-block"
            >
              ← INDEX
            </Link>

            <div className="space-y-12">
               <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border)] px-3 py-1 rounded-sm uppercase tracking-widest">
                    SYS: DESIGN_BOARD
                  </span>
                  <span className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest">
                    {project.category} // {project.year}
                  </span>
               </div>
               
               <h1 className="text-6xl md:text-[10vw] font-bold leading-[0.85] tracking-tighter" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                 {project.title}
               </h1>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[var(--border)]">
                  <div className="space-y-6">
                     <p className="text-xl md:text-2xl text-[var(--text)] font-medium leading-relaxed italic" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                       {project.context}
                     </p>
                  </div>
                  <div className="flex flex-col justify-end gap-6 md:text-right">
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-mono">Primary Role</p>
                        <p className="text-xl font-bold italic">{project.role}</p>
                     </div>
                     {project.roleDetail && (
                       <p className="text-xs text-[var(--text-muted)] max-w-sm md:ml-auto leading-relaxed">
                          {project.roleDetail}
                       </p>
                     )}
                  </div>
               </div>
            </div>
          </header>

          {/* Technical Summary / Metrics Bar */}
          {(project.metrics || project.technologies) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 p-8 border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-md rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <span className="text-6xl font-mono">01</span>
               </div>
               
               {project.technologies && (
                 <div className="space-y-6">
                    <p className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest">Stack.Inventory</p>
                    <div className="flex flex-wrap gap-2">
                       {project.technologies.map(tech => (
                         <span key={tech} className="px-3 py-1 bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] text-[10px] font-bold rounded-full uppercase tracking-tighter">
                            {tech}
                         </span>
                       ))}
                    </div>
                 </div>
               )}

               {project.metrics && (
                 <div className="space-y-6">
                    <p className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest text-right">Performance.KPIs</p>
                    <div className="flex flex-col gap-4 items-end">
                       {project.metrics.map((metric, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <span className="text-[11px] font-bold text-[var(--text)] text-right">{metric}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                         </div>
                       ))}
                    </div>
                 </div>
               )}
            </div>
          )}

          {/* Hero Asset */}
          <m.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="aspect-video overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-2xl mb-32"
          >
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          </m.div>

          {/* Case Study Sections */}
          <section className="space-y-0">
            <ProjectSection title="The Problem">
              <p className="text-2xl md:text-4xl text-[var(--text)] font-semibold leading-tight tracking-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                 {project.problem}
              </p>
            </ProjectSection>

            <ProjectSection title="The Process">
              <div className="space-y-12">
                 <p className="text-xl text-[var(--text-muted)] font-light leading-relaxed max-w-2xl">
                   {project.process}
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {(project.processImages || project.images).map((img, i) => (
                     <figure key={i} className="group">
                       <div className="aspect-[4/3] overflow-hidden bg-[var(--surface)] border border-[var(--border)] mb-4">
                         <img src={img} alt={`Process detail ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                       </div>
                       <figcaption className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] opacity-50">
                         Fig. 0{i+1} — Technical breakdown / System architecture
                       </figcaption>
                     </figure>
                   ))}
                 </div>
              </div>
            </ProjectSection>

            {project.prototypeVideo && (
              <ProjectSection title="Interactive Prototype">
                 <div className="aspect-video bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center p-12">
                    <Play size={48} className="text-[var(--accent)] opacity-50" />
                    <p className="ml-4 text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-mono">Loading Interactive Sandbox...</p>
                 </div>
              </ProjectSection>
            )}

            <ProjectSection title="Outcome">
              <div className="space-y-16">
                 <p className="text-2xl md:text-4xl text-[var(--accent)] font-semibold leading-tight tracking-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {project.outcome}
                 </p>
                 
                 {project.outcomeImages && (
                   <div className="grid grid-cols-1 gap-8">
                      {project.outcomeImages.map((img, i) => (
                        <div key={i} className="aspect-video overflow-hidden border border-[var(--border)] shadow-xl">
                          <img src={img} alt="Final outcome" className="w-full h-full object-cover" />
                        </div>
                      ))}
                   </div>
                 )}
                 
                 {project.link && (
                   <div className="pt-12">
                      <a 
                        href={project.link.startsWith('http') ? project.link : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="OPEN"
                        className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-[var(--accent)] transition-all group"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        Explore Project <ExternalLink size={32} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </a>
                   </div>
                 )}
              </div>
            </ProjectSection>
          </section>

          <footer className="mt-48 pt-24 border-t border-[var(--border)] text-center">
             <Link
               to="/work"
               data-cursor-label="BACK"
               className="text-4xl md:text-8xl font-bold hover:text-[var(--accent)] transition-all duration-500 group inline-block"
               style={{ fontFamily: 'Satoshi, sans-serif' }}
             >
               Next Exploration <span className="inline-block transition-transform group-hover:translate-x-4">→</span>
             </Link>
          </footer>
        </div>
      </div>
    </LazyMotion>
  );
};

export default ProjectDetail;
