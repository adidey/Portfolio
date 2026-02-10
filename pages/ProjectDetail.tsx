
import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return null;

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="pt-32 pb-48 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-32">
          <button onClick={onBack} className="text-[10px] uppercase tracking-[0.5em] mb-16 text-neutral-500 hover:text-white transition-colors">
            ← INDEX
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-24">
             <div className="md:col-span-8">
                <p className="text-xs uppercase tracking-[0.4em] mb-8 text-blue-500">Case Study / {project.year}</p>
                <h1 className="text-6xl md:text-[8vw] font-bold leading-[0.9] tracking-tighter mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.title}</h1>
             </div>
             <div className="md:col-span-4 md:text-right">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-1">Role</p>
                <p className="text-xl font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.role}</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-y border-neutral-900 py-16">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-4">Brief</p>
              <p className="text-lg text-neutral-300 font-light leading-relaxed">{project.excerpt}</p>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Category</p>
                <p className="text-sm uppercase tracking-wider">{project.category}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Technology</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-neutral-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-48">
          <div className="aspect-video overflow-hidden bg-neutral-900 group">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 sticky top-40 mb-8 md:mb-0">01 — The Challenge</h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-2xl md:text-3xl text-neutral-200 font-medium leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.context}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 sticky top-40 mb-8 md:mb-0">02 — The Process</h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12">{project.process}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.map((img, i) => (
                  <div key={i} className="aspect-[3/4] overflow-hidden bg-neutral-900">
                    <img src={img} alt="Detail" className="w-full h-full object-cover grayscale" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-24 border-b border-neutral-900">
            <div className="md:col-span-5">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 sticky top-40 mb-8 md:mb-0">03 — Impact</h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-2xl md:text-3xl text-neutral-200 font-medium leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.outcome}</p>
            </div>
          </div>
        </section>

        <footer className="mt-32 text-center">
          <button 
            onClick={onBack}
            className="text-4xl md:text-8xl font-bold hover:text-blue-500 transition-all duration-500 group"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Back to Index <span className="inline-block transition-transform group-hover:translate-x-4">→</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetail;
