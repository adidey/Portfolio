import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';
import { FULL_PROJECTS } from '../projectData';
import { m, LazyMotion, domMax } from 'motion/react';
import { ExternalLink } from 'lucide-react';

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

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = FULL_PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return null;

  return (
    <LazyMotion features={domMax}>
      <div className="bg-[var(--bg)] text-[var(--ink)]">
        <Helmet>
          <title>{project.title} — Aditya Dey</title>
          <meta name="description" content={project.shortDescription} />
        </Helmet>

        <div className="relative">
          {/* Standardized Z-Pattern Header */}
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
                className="w-full h-full object-cover" 
              />
            )}
          </div>

          <div>
            {/* Case Study Content */}
            {project.brief && (
              <ProjectSection title="Objective">
                <div className="space-y-10">
                  <p className="text-[22px] md:text-[32px] font-medium leading-tight tracking-tight max-w-4xl text-[var(--ink)]">
                    {project.brief}
                  </p>
                  {project.goal && (
                    <div className="pt-10 border-t border-[var(--border)]/60">
                      <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-4 font-black">Strategic Goal</p>
                      <p className="text-[18px] md:text-[26px] font-bold leading-tight tracking-tight max-w-3xl italic text-[var(--muted)]">
                        "{project.goal}"
                      </p>
                    </div>
                  )}
                </div>
              </ProjectSection>
            )}

            <ProjectSection title="Problem">
              <p className="text-[22px] md:text-[32px] font-black leading-tight tracking-tight max-w-4xl">
                {project.problem}
              </p>
            </ProjectSection>

            {project.challenges && (
              <ProjectSection title="Challenges">
                <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--muted)] max-w-2xl">
                  {project.challenges}
                </p>
              </ProjectSection>
            )}

            {project.tradeoffs && (
              <ProjectSection title="Trade-offs">
                <div className="bg-[var(--border)]/30 border border-[var(--border)] p-8 md:p-12 rounded-2xl max-w-3xl">
                  <p className="text-[18px] md:text-[22px] font-bold leading-tight tracking-tight text-[var(--ink)]">
                    {project.tradeoffs}
                  </p>
                </div>
              </ProjectSection>
            )}

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
                 <div className="md:text-left">
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

            <ProjectSection title="Process">
               <div className="space-y-12">
                 <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--muted)] max-w-2xl">
                    {project.process}
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {(project.processImages || project.images).map((img, i) => (
                      <div key={i} className="group">
                        <div className="aspect-[4/3] overflow-hidden bg-[var(--border)] mb-4">
                          <img src={img} alt={`Process ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <p className="text-[9px] uppercase tracking-widest text-[var(--muted)]">Fig. {String(i+1).padStart(2, '0')}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </ProjectSection>

            {project.learnings && (
              <ProjectSection title="Learnings">
                <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--muted)] max-w-2xl italic">
                  {project.learnings}
                </p>
              </ProjectSection>
            )}

            <ProjectSection title="Outcome">
               <div className="space-y-12">
                  <p className="text-[22px] md:text-[32px] font-black leading-tight tracking-tight text-[var(--accent)] max-w-4xl">
                    {project.outcome}
                  </p>

                  {project.outcomeImages && (
                    <div className="grid grid-cols-1 gap-8">
                       {project.outcomeImages.map((img, i) => (
                         <div key={i} className="aspect-video overflow-hidden border border-[var(--border)] shadow-sm">
                           <img src={img} alt="Final result" className="w-full h-full object-cover" />
                         </div>
                       ))}
                    </div>
                  )}
                  {project.link && (
                    <div className="pt-8">
                       <a
                          href={project.link.startsWith('http') ? project.link : '#'}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-4 text-[20px] md:text-[32px] font-black uppercase tracking-tight hover:text-[var(--accent)] transition-all group"
                       >
                         Explore live project <ExternalLink size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                       </a>
                    </div>
                  )}
               </div>
            </ProjectSection>
          </div>

          {/* Next Project Footer */}
          <footer className="border-t border-[var(--border)] py-20 text-center">
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-8">Next Up</p>
            <Link
              to="/work"
              className="group block"
            >
              <h3 className="text-[clamp(2.5rem,8vw,8rem)] font-black uppercase tracking-tight text-[var(--ink)] leading-none transition-transform group-hover:scale-[0.98]">
                Index <span className="inline-block transition-transform group-hover:translate-x-4">→</span>
              </h3>
            </Link>
          </footer>
        </div>
      </div>
    </LazyMotion>
  );
};

export default ProjectDetail;
