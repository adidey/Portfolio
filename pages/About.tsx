import React from 'react';
import { EXPERIENCE, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <main className="pt-32 md:pt-40 px-6 md:px-12 pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">
        <div className="md:col-span-7 space-y-12 md:space-y-16">
          <h1 className="text-4xl md:text-8xl font-bold leading-tight tracking-tighter" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Design through <span className="text-neutral-600">Systems</span> and <span className="text-neutral-600">Cognition</span>.
          </h1>

          <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-neutral-400 font-light leading-relaxed">
            <p>
              I’m a product and interaction designer based in Melbourne, working at the intersection of software systems and human behavior.
            </p>
            <p>
              My background in computing shapes how I approach design — structured, scalable, and grounded in real technical constraints. I focus on building interfaces that translate cleanly from concept to production, balancing clarity, performance, and usability.
            </p>
            <p>
              Currently completing a Bachelor of Science in Computing and Software Systems at the University of Melbourne, with a minor in Psychology.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="/assets/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] bg-white text-black px-8 py-4 hover:bg-white/90 transition-all font-bold"
              >
                Download Resume ↓
              </a>
              <a
                href="mailto:adityad1@student.unimelb.edu.au"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] border border-white/20 px-8 py-4 hover:border-white transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="pt-10 md:pt-12 grid grid-cols-1 gap-12 border-t border-neutral-900">
            <div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 mb-8 md:mb-10">Professional Path</p>
              <div className="space-y-12">
                {EXPERIENCE.slice(0, 3).map((exp, idx) => (
                  <div key={idx} className="group border-l border-neutral-900 pl-6 hover:border-blue-500/50 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-1 mb-2">
                      <h3 className="text-lg font-bold tracking-tight text-white italic">{exp.title}</h3>
                      <p className="text-[9px] uppercase tracking-widest text-neutral-600 font-mono mt-1">{exp.period}</p>
                    </div>
                    <p className="text-xs text-neutral-500 mb-3">{exp.organization}</p>
                    <p className="text-xs text-neutral-600 leading-relaxed font-light line-clamp-2 group-hover:line-clamp-none transition-all">
                      {exp.description[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 mb-6">Leadership</p>
                <ul className="text-xs text-neutral-600 space-y-2 font-light">
                  <li>Innovation Lead — Google Developer Club</li>
                  <li>Competitions Officer— CISSA</li>
                  <li>Campus Leader- Notion</li>
                  <li>Melbourne Univeristy Peer Mentor</li>
                  <li>Faculty of Science Ambassador</li>
                  <li>Graphic Designer — MUR</li>
                </ul>
              </div>
              <div className="opacity-80">
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-600 mb-6">Education</p>
                <div className="space-y-1">
                  <p className="text-sm font-light text-neutral-400">The University of Melbourne</p>
                  <p className="text-xs text-neutral-600 font-light">BSc. Computing & Software Systems</p>
                  <p className="text-xs text-neutral-600 font-light">Minor in Psychology (2023 — 2026)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 space-y-16 md:space-y-20">
          <div className="aspect-[4/5] bg-neutral-900 relative overflow-hidden group max-w-md mx-auto md:max-w-none">
            <img
              src="/assets/portrait.jpg"
              alt="Portrait"
              loading="lazy"
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/5" />
          </div>

          <div className="grid grid-cols-1 gap-12">
            <section>
              <h3 className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 mb-8 md:mb-10">Core Capabilities</h3>
              <div className="space-y-10">
                {SKILLS.map((group, idx) => (
                  <div key={idx}>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-700 mb-4">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span key={i} className="text-[10px] font-mono text-neutral-400 bg-neutral-900/50 px-3 py-1.5 rounded-sm border border-white/5 uppercase tracking-wider">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
