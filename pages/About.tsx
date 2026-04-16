import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EXPERIENCE, SKILLS } from '../constants';
import { m, LazyMotion, domMax } from 'motion/react';

const LEADERSHIP_DATA = [
  { role: 'Innovation Lead', org: 'Google Developer Club', logo: '/assets/logos/gdsc.png' },
  { role: 'Competitions Officer', org: 'CISSA', logo: '/assets/logos/cissa.png' },
  { role: 'Campus Leader', org: 'Notion', logo: '/assets/logos/notion.png' },
  { role: 'Melbourne University Peer Mentor', org: 'University of Melbourne', logo: '/assets/logos/unimelb.png' },
  { role: 'Faculty of Science Ambassador', org: 'University of Melbourne', logo: '/assets/logos/unimelb.png' },
  { role: 'Graphic Designer', org: 'MUR', logo: '/assets/logos/mur.png' },
];

const About: React.FC = () => {
  return (
    <LazyMotion features={domMax}>
      <Helmet>
        <title>About — Aditya Dey</title>
        <meta name="description" content="Product and interaction designer based in Melbourne, working at the intersection of software systems and human behavior." />
      </Helmet>

      <div className="relative">

        {/* Standardized Z-Pattern Header */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 pt-8 md:pt-12 pb-16 md:pb-24 border-b border-[var(--border)] items-start">
          <div className="md:col-span-8 flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] font-bold">About</p>
            <h1
              className="font-black text-[var(--ink)] uppercase tracking-tight leading-[0.85]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              Systems<br />& Humans
            </h1>
          </div>
          <div className="md:col-span-4 md:text-right flex flex-col items-start md:items-end pt-1">
             <p className="text-[13px] md:text-[15px] leading-relaxed text-[var(--muted)] max-w-xs font-medium">
                Product and interaction designer based in Melbourne, working at the intersection of software systems and human behavior.
             </p>
             <div className="mt-8 flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] rounded-full">
               <span className="text-[9px] font-black uppercase tracking-widest text-[var(--ink)]">Melbourne, AU</span>
             </div>
          </div>
        </header>

        {/* Bio + portrait split*/}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border-b border-[var(--border)]">
          <div className="py-12 md:py-16 flex flex-col justify-between gap-10">
            <div className="space-y-6 max-w-lg">
              <m.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[18px] md:text-[22px] font-medium leading-snug text-[var(--ink)] tracking-tight"
              >
                Design through Systems and Cognition.
              </m.p>
              <p className="text-[14px] md:text-[16px] leading-relaxed text-[var(--muted)]">
                I'm a product and interaction designer based in Melbourne, working at the intersection of software systems and human behavior.
              </p>
              <p className="text-[14px] md:text-[16px] leading-relaxed text-[var(--muted)]">
                My background in computing shapes how I approach design — structured, scalable, and grounded in real technical constraints. I focus on building interfaces that translate cleanly from concept to production.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/assets/resume.pdf"
                download
                className="text-[10px] uppercase tracking-[0.2em] font-black bg-[var(--ink)] text-[var(--bg)] px-6 py-3 hover:opacity-80 transition-opacity"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#e5e5e5]" style={{ minHeight: '460px' }}>
            <img
              src="/assets/portrait.jpg"
              alt="Portrait of Aditya Dey"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Section 1: EXPERIENCE (VERTICAL TIMELINE) */}
        <div className="border-b border-[var(--border)] pb-12">
          <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] pt-12 mb-12">Experience</p>
          <div className="flex flex-col space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start">
                 {/* Timeline item meta */}
                 <div className="md:col-span-3 flex flex-col">
                   <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">{exp.period}</p>
                 </div>
                 {/* Content */}
                 <div className="md:col-span-9 max-w-2xl">
                    <h3 className="text-[18px] font-black uppercase tracking-tight text-[var(--ink)] leading-none">{exp.title}</h3>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)] mt-2 mb-4">{exp.organization}</p>
                    <div className="space-y-4">
                      {exp.description.map((desc, di) => (
                        <p key={di} className="text-[14px] text-[var(--muted)] leading-relaxed">{desc}</p>
                      ))}
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: LEADERSHIP + EDUCATION (DENSE 2-COLUMN GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border-b border-[var(--border)]">
          <div className="py-12 md:pr-10 h-full flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-8">Leadership</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {LEADERSHIP_DATA.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight">{item.role}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--muted)] mt-1">{item.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-12 md:pl-10 h-full flex flex-col justify-center text-left md:text-right md:items-end">
            <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-8 w-full">Education</p>
            <div className="space-y-1 w-full">
                <p className="text-[18px] font-black text-[var(--ink)] uppercase tracking-tight">The University of Melbourne</p>
                <p className="text-[13px] font-bold uppercase tracking-widest text-[var(--muted)]">BSc. Computing & Software Systems</p>
                <p className="text-[13px] text-[var(--muted)] mt-1">Minor in Psychology — 2023 to 2026</p>
            </div>
          </div>
        </div>

        {/* Section 3: WHAT I DO (SKILLS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
          {SKILLS.slice(0, 3).map((group, index) => (
            <div key={group.category} className={`py-12 h-full flex flex-col justify-center ${index === 0 ? 'md:pr-10' : index === 1 ? 'md:px-10' : 'md:pl-10 text-left md:text-right md:items-end'}`}>
              <p className={`text-[9px] uppercase tracking-widest text-[var(--muted)] mb-8 w-full ${index === 2 ? 'md:text-right' : ''}`}>{group.category}</p>
              <div className={`flex flex-wrap gap-2 ${index === 2 ? 'md:justify-end' : ''}`}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[12px] font-medium tracking-wide text-[var(--ink)] bg-[#f2f2f2] px-3.5 py-1.5 rounded-full border border-transparent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </LazyMotion>
  );
};

export default About;
