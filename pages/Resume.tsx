
import React from 'react';
import { EXPERIENCE, SKILLS } from '../constants';

const Resume: React.FC = () => {
  return (
    <main className="pt-32 px-6 md:px-12 pb-32 max-w-7xl mx-auto">
      <header className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif italic mb-4">Resume.</h1>
          <p className="text-[10px] uppercase tracking-widest text-neutral-500">Professional Background & Competencies</p>
        </div>
        <a 
          href="#" 
          className="text-[10px] uppercase tracking-[0.3em] border border-neutral-800 px-6 py-3 hover:bg-white hover:text-black transition-all"
        >
          Download PDF ↓
        </a>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Experience Section */}
        <section className="md:col-span-8">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-12">Experience</h2>
          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="border-l border-neutral-900 pl-8 relative">
                <div className="absolute -left-[1px] top-0 w-[1px] h-4 bg-white" />
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-serif italic">{exp.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">{exp.period}</p>
                </div>
                <p className="text-sm font-medium mb-4 text-neutral-300">{exp.organization}</p>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-500 leading-relaxed font-light flex gap-3">
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
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-12">Capabilities</h2>
          <div className="space-y-12">
            {SKILLS.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((skill, i) => (
                    <li key={i} className="text-sm font-light text-neutral-500 uppercase tracking-widest">
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
