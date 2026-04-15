import React from 'react';
import { m, LazyMotion, domMax } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

// ─── Horizontal auto-scrolling marquee of project thumbnails ───────────────
const HorizontalMarquee = () => {
  const items = [...PROJECTS, ...PROJECTS, ...PROJECTS].slice(0, 18);
  return (
    <div className="w-full flex items-center overflow-hidden h-full [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] group/marquee">
      <div className="flex gap-8 w-max h-full items-center animate-marquee group-hover/marquee:[animation-play-state:paused]">
        {items.map((p, i) => (
          <Link
            to={`/work/${p.id}`}
            key={i}
            className="w-[220px] lg:w-[300px] aspect-[4/3] rounded-lg overflow-hidden relative group shrink-0 bg-[#e5e5e5]"
          >
            <m.img
              src={p.thumbnail}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={p.title}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <span className="absolute bottom-3 left-3 text-[9px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
              {p.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ─── Main canvas ─────────────────────────────────────────────────────────────
export const InteractiveCanvas = () => {
  return (
    <LazyMotion features={domMax}>
      <div className="relative w-full bg-[var(--bg)] text-[var(--ink)] overflow-x-hidden">

        {/* ── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="relative w-full flex flex-col justify-start pt-4 pb-12">
          {/* 2. Structured Hero Content */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="flex items-start w-full mb-10 md:mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 w-full items-start">
              {/* Left — Identity Line */}
              <m.div className="md:col-span-7 flex flex-col text-left">
                <h2 className="text-[24px] md:text-[32px] font-black tracking-tight text-[var(--ink)] uppercase leading-tight">
                  Product Designer & Engineer <br />
                  <span className="text-[var(--muted)]">Designing Systems for Human Cognition.</span>
                </h2>
              </m.div>

              {/* Right — Manifesto (Narrower) */}
              <m.div className="md:col-span-5 flex flex-col text-left md:text-right mt-4 md:mt-0 md:items-end">
                <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--muted)] max-w-sm font-medium">
                  I design product systems that translate complex technical workflows into clear interfaces.
                </p>
              </m.div>
            </div>
          </m.div>

          {/* 3. Marquee band (Above the fold) */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full h-[240px] md:h-[300px] overflow-hidden border-t border-b border-[var(--border)]"
          >
            <HorizontalMarquee />
          </m.div>
        </section>
      </div>
    </LazyMotion>
  );
};
