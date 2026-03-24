
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EXPERIENCE, SKILLS } from '../constants';

const Resume: React.FC = () => {
  return (
    <main className="pt-32 px-6 md:px-12 pb-32 max-w-7xl mx-auto">
      <Helmet>
        <title>Resume — Aditya Dey</title>
        <meta name="description" content="Professional background, experience, and competencies in product and UX design." />
      </Helmet>
      <header className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif italic mb-4 text-[var(--text)]">Resume.</h1>
          <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Professional Background & Competencies</p>
        </div>
        <a
          href="/assets/resume.pdf"
          download
          className="text-[10px] uppercase tracking-[0.3em] border border-[var(--border)] px-6 py-3 hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all text-[var(--text)]"
        >
          Download PDF ↓
        </a>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Experience Section */}
        <section className="md:col-span-8">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[var(--text-muted)] mb-12">Experience</h2>
          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="border-l border-[var(--border)] pl-8 relative">
                <div className="absolute -left-[1px] top-0 w-[1px] h-4 bg-[var(--text)]" />
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-serif italic text-[var(--text)]">{exp.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{exp.period}</p>
                </div>
                <p className="text-sm font-medium mb-4 text-[var(--text-muted)]">{exp.organization}</p>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-[var(--text-muted)] leading-relaxed font-light flex gap-3">
                      <span className="opacity-30">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="md:col-span-4 space-y-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[var(--text-muted)] mb-12">Capabilities</h2>
          <div className="space-y-12">
            {SKILLS.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((skill, i) => (
                    <li key={i} className="text-sm font-light text-[var(--text-muted)] uppercase tracking-widest">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;
