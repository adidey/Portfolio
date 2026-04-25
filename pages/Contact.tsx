import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, Mail, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BusinessCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [16, -16]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [16, -16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative flex justify-center items-center" style={{ perspective: '800px' }}>
      {/* Floating shadow */}
      <motion.div
        style={{ x: shadowX, y: shadowY }}
        className="absolute w-full h-full rounded-3xl bg-black/10 blur-2xl pointer-events-none scale-90 translate-y-4"
      />

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateY, rotateX, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
        className="relative w-[300px] h-[185px] sm:w-[340px] sm:h-[210px] md:w-[440px] md:h-[265px] rounded-3xl overflow-hidden group cursor-default"
      >
        {/* Background — stark white card */}
        <div className="absolute inset-0 bg-[#111111]" />

        {/* Subtle  grain */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] scale-150 pointer-events-none" />

        {/* Subtle orange glow bottom-right */}
        <div className="absolute inset-0 bg-[radial-gradient(at_90%_90%,rgba(234,77,44,0.25)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(at_10%_20%,rgba(255,255,255,0.04)_0%,transparent_55%)] pointer-events-none" />

        {/* Content */}
        <div
          style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }}
          className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between"
        >
          {/* Top row */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base md:text-xl font-black tracking-tight text-white leading-none mb-1">ADITYA DEY</h3>
              <p className="text-[10px] font-medium uppercase tracking-widest text-white/50">Designer & Engineer</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest font-bold text-white/40">Open</span>
            </div>
          </div>

          {/* Middle — stats */}
          <div className="flex gap-5">
            {[
              { label: 'Projects', value: '12+' },
              { label: 'Years Exp', value: '3+' },
              { label: 'Connections', value: '900+' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lg md:text-2xl font-black text-white leading-none">{stat.value}</p>
                <p className="text-[8px] uppercase tracking-widest text-white/40 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Bottom row */}
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText('adidey27@gmail.com');
                    alert('Email copied to clipboard!');
                  }}
                  className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors group/email"
                >
                  <Mail size={10} />
                  <span className="text-[10px] font-medium">adidey27@gmail.com</span>
                  <span className="text-[8px] opacity-0 group-hover/email:opacity-100 transition-opacity ml-1">(Copy)</span>
                </button>
                <p className="text-[8px] font-bold uppercase tracking-widest text-white/30">Melbourne · AU</p>
              </div>
              <a
                href="mailto:adidey27@gmail.com"
                className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                style={{ transform: 'translateZ(40px)' }}
              >
                <ArrowUpRight size={14} className="text-white" />
              </a>
            </div>

        </div>

        {/* Shine sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      </motion.div>
    </div>
  );
};

// ─── Social link row ──────────────────────────────────────────────────────────
const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adityadey27/' },
  { label: 'GitHub', href: 'https://github.com/adidey' },
  { label: 'Behance', href: 'https://www.behance.net/adityadey27' },
  { label: 'Email', href: 'mailto:adidey27@gmail.com' },
];

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
    >
      <Helmet>
        <title>Contact — Aditya Dey</title>
        <meta name="description" content="Get in touch with Aditya Dey — open for freelance and full-time opportunities." />
      </Helmet>

      <div className="flex flex-col">

        {/* Standardized Z-Pattern Header */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 pt-8 md:pt-12 pb-10 md:pb-16 border-b border-[var(--border)] items-start">
          <div className="md:col-span-8 flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] font-bold">Contact</p>
            <h1
              className="font-black text-[var(--ink)] uppercase tracking-tight leading-[0.85]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              Let's work<br /><span className="text-[var(--muted)]">together.</span>
            </h1>
          </div>
          <div className="md:col-span-4 md:text-right flex flex-col items-start md:items-end pt-1">
             <p className="text-[13px] md:text-[15px] leading-relaxed text-[var(--muted)] max-w-xs font-medium">
               Open for new opportunities and collaborations at the intersection of design and engineering.
             </p>
             <div className="mt-8 flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] rounded-full text-[var(--ink)]">
               <span className="text-[9px] font-black uppercase tracking-widest ">Melbourne, AU</span>
             </div>
          </div>
        </header>

        {/* ── Editorial Grid Layout ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border-b border-[var(--border)]">
          {/* Left Column: Socials and Availability */}
          <div className="py-16 md:py-24 md:pr-16 flex flex-col justify-between gap-16">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-8">Connect</p>
              <div className="flex flex-col gap-6">
                {socials.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[20px] md:text-[24px] font-black uppercase tracking-tight text-[var(--ink)] hover:opacity-50 transition-opacity w-fit flex items-center gap-3"
                  >
                    {social.label} <ArrowUpRight size={20} className="opacity-40" />
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
               <p className="text-[9px] uppercase tracking-widest text-[var(--muted)] mb-4">Status Update</p>
               <div className="inline-flex items-center gap-2 border border-[var(--border)] px-5 py-2.5 rounded-full">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--ink)]">
                   Available for freelance & full-time roles
                 </span>
               </div>
            </div>
          </div>

          {/* Right Column: 3D Visual Card */}
          <div className="py-16 md:py-24 md:pl-16 flex flex-col items-center justify-center overflow-hidden">
             <BusinessCard />
             
             <div className="md:hidden mt-12 w-full text-center">
               <div className="inline-flex items-center gap-2 border border-[var(--border)] px-5 py-2.5 rounded-full">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--ink)]">
                   Available for roles
                 </span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
