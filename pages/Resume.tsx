import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EXPERIENCE, SKILLS } from '../constants';
import { m, LazyMotion, domMax } from 'framer-motion';

const Resume: React.FC = () => {
  return (
    <LazyMotion features={domMax}>
      <main className="relative">
        <Helmet>
          <title>Resume — Aditya Dey</title>
          <meta name="description" content="Professional background, experience, and competencies in product and UX design." />
        </Helmet>

        {/* Standardized Z-Pattern Header */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 pt-8 md:pt-12 pb-16 md:pb-24 border-b border-[var(--border)] items-start">
          <div className="md:col-span-8 flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] font-bold">Resume</p>
            <h1
              className="font-black text-[var(--ink)] uppercase tracking-tight leading-[0.85]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              Curriculum<br />Vitae
            </h1>
          </div>
          <div className="md:col-span-4 md:text-right flex flex-col items-start md:items-end pt-1">
             <p className="text-[13px] md:text-[15px] leading-relaxed text-[var(--muted)] max-w-xs font-medium">
               A detailed record of professional evolution, academic foundations, and specialized core competencies.
             </p>
             <div className="mt-8">
               <a
                href="/assets/resume.pdf"
                download
                className="text-[10px] uppercase tracking-[0.2em] font-black bg-[var(--ink)] text-[var(--bg)] px-8 py-4 hover:opacity-80 transition-opacity inline-flex items-center gap-2"
              >
                Download PDF ↓
              </a>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 border-t border-[var(--border)]">
          {/* Left Side: Experience */}
          <section className="md:col-span-8 border-r border-[var(--border)]">
             <div className="px-6 md:px-12 py-12 border-b border-[var(--border)]">
                <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-12">Professional Experience</p>
                <div className="space-y-20">
                  {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="group">
                      <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                        <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--ink)]">{exp.title}</h3>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--muted)] pt-2">{exp.period}</p>
                      </div>
                      <p className="text-[12px] font-bold uppercase tracking-widest text-[var(--muted)] mb-6">{exp.organization}</p>
                      <ul className="space-y-4 max-w-2xl">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-[15px] text-[var(--muted)] leading-relaxed flex gap-4">
                            <span className="text-[var(--accent)]">—</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* Right Side: Skills & Capabilities */}
          <section className="md:col-span-4 bg-[var(--border)]/10">
             <div className="px-6 md:px-10 py-12">
               <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-12">Capabilities</p>
               <div className="space-y-16">
                  {SKILLS.map((group, idx) => (
                    <div key={idx}>
                      <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--ink)] mb-6">{group.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill, i) => (
                          <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)] border border-[var(--border)] px-3 py-1.5 bg-[var(--bg)]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
               </div>

               <div className="mt-20 pt-10 border-t border-[var(--border)]">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-4">Location</p>
                  <p className="text-[14px] font-bold uppercase tracking-tight text-[var(--ink)]">Melbourne, AU</p>
                  <p className="text-[12px] text-[var(--muted)]">Open for Work</p>
               </div>
             </div>
          </section>
        </div>

      </main>
    </LazyMotion>
  );
};

export default Resume;
