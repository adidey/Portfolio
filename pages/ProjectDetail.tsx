
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  onBack?: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onBack }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return null;

  return (
    <div className="min-h-screen text-[var(--text)]">
      <Helmet>
        <title>{project.title} — Aditya Dey</title>
        <meta name="description" content={project.shortDescription} />
        <meta property="og:title" content={`${project.title} — Aditya Dey`} />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:image" content={project.thumbnail} />
      </Helmet>
      <div className="pt-32 pb-48 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-32">
          <Link to="/work" className="text-[10px] uppercase tracking-[0.5em] mb-16 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors inline-block">
            ← INDEX
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-24">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.4em] mb-8 text-[var(--accent)] font-medium">Case Study / {project.year}</p>
              <h1 className="text-6xl md:text-[8vw] font-bold leading-[0.9] tracking-tighter mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.title}</h1>
            </div>
            <div className="md:col-span-4 md:text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] mb-1">Role</p>
              <p className="text-xl font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-y border-[var(--border)] py-16">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-4">Overview</p>
              <p className="text-lg text-[var(--text)] font-light leading-relaxed">{project.shortDescription}</p>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2">Category</p>
                <p className="text-sm uppercase tracking-wider">{project.category}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2">Technology</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-[var(--text-muted)]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-48">
          <div className="aspect-video overflow-hidden bg-[var(--surface)] group border border-[var(--border)]">
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Problem Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[var(--text-muted)] sticky top-40 mb-8 md:mb-0">Problem</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl md:text-3xl text-[var(--text)] font-medium leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.problem}</p>
            </div>
          </div>

          {/* Role Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[var(--text-muted)] sticky top-40 mb-8 md:mb-0">Role</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl md:text-3xl text-[var(--text)] font-medium leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.role}</p>
            </div>
          </div>

          {/* Approach / Process Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[var(--text-muted)] sticky top-40 mb-8 md:mb-0">Approach / Process</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl text-[var(--text)] font-medium leading-relaxed mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.context}</p>
              <p className="text-xl text-[var(--text-muted)] font-light leading-relaxed mb-12">{project.process}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.map((img, i) => (
                  <div key={i} className="aspect-[3/4] overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
                    <img src={img} alt="Detail" loading="lazy" className="w-full h-full object-cover transition-all duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-24 border-b border-[var(--border)]">
            <div className="md:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[var(--text-muted)] sticky top-40 mb-8 md:mb-0">Outcome</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl md:text-3xl text-[var(--text)] font-medium leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.outcome}</p>
            </div>
          </div>
        </section>

        <footer className="mt-32 text-center">
          <Link
            to="/work"
            className="text-4xl md:text-8xl font-bold hover:text-[var(--accent)] transition-all duration-500 group inline-block"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Back to Index <span className="inline-block transition-transform group-hover:translate-x-4">→</span>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetail;
