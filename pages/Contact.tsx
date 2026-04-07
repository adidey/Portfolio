import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, Mail, Users, Activity, Palette, Globe, Phone } from 'lucide-react';

const BusinessCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  // 3D Shadow Strats: Shadow moves opposite to the tilt
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);
  const shadowOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0.1, 0.3]);

  // Parallax values for background
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["10%", "-10%"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["10%", "-10%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex justify-center items-center py-20 perspective-1000 relative">
      {/* 3D Floating Shadow Strat */}
      <motion.div
        style={{
          x: shadowX,
          y: shadowY,
          opacity: shadowOpacity,
          filter: "blur(40px)",
        }}
        className="absolute w-[80%] h-[60%] bg-black rounded-full pointer-events-none"
      />

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 w-[350px] h-[220px] md:w-[450px] md:h-[260px] rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] group"
      >
        {/* Base Background Color */}
        <div className="absolute inset-0 bg-[var(--card-base)] transition-colors duration-500" />

        {/* Theme-aware Background Gradients */}
        <motion.div 
          style={{
            x: bgX,
            y: bgY,
            transform: "translateZ(-50px)",
          }}
          className="absolute inset-[-20%] pointer-events-none"
        >
          {/* Mesh/Glow Layer */}
          <div className="absolute inset-0">
            {/* Left Side Blob - Vibrant Navy */}
            <div className="absolute inset-0 bg-[radial-gradient(at_0%_50%,var(--card-glow-1)_0%,transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(at_10%_40%,var(--card-glow-2)_0%,transparent_45%)]" />
            
            {/* Right Side Blob - Vibrant Navy */}
            <div className="absolute inset-0 bg-[radial-gradient(at_100%_50%,var(--card-glow-1)_0%,transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(at_90%_60%,var(--card-glow-3)_0%,transparent_45%)]" />
            
            {/* Deep Black Middle Column - Vertical Void */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,var(--card-center)_50%,transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_10%,var(--card-center)_90%)] opacity-30" />
          </div>
          
          {/* Grain Overlay - Sandy Editorial Look */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] scale-150" />
          <div className="absolute inset-0 opacity-10 dark:opacity-20 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')] scale-110 rotate-90" />
        </motion.div>

        {/* Card Content */}
        <div 
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
          className="absolute inset-0 p-8 flex flex-col justify-between text-ink"
        >
          {/* Top Section: Branding & Status */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-xl font-display font-bold tracking-tighter">ADITYA DEY</h3>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-muted">Active Now</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-border/5 flex items-center justify-center">
              <Globe size={20} className="text-accent" />
            </div>
          </div>

          {/* Middle Section: Integrations/Badges */}
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1.5 bg-border/5 rounded-full flex items-center gap-2">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <path d="M22 13h-7v.846c0 1.265.82 2.308 2.5 2.308 1.66 0 2.5-1.154 2.5-1.154l2 1.23s-1.18 2.77-4.5 2.77c-3.34 0-5.5-2.462-5.5-5.923 0-3.462 2.16-5.847 5.5-5.847 3.34 0 5.5 2.385 5.5 5.847v.77zm-4.5-3.846c-1.68 0-2.5 1.042-2.5 2.308h5c0-1.266-.84-2.308-2.5-2.308zM10 15c0 2-2 4-5 4H1V7h4c3 0 5 2 5 4.5 0 1-1 2-2 2.5 1 .5 2 1.5 2 2.5V15zm-6-6v2.5h1.5c1 0 1.5-.5 1.5-1.25 0-.75-.5-1.25-1.5-1.25H4zm0 5v3h2c1 0 1.5-.5 1.5-1.5 0-1-.5-1.5-1.5-1.5H4zm11-10h5v1h-5v-1z" />
              </svg>
              <span className="text-[9px] font-bold">11k Views</span>
            </div>
            <div className="px-3 py-1.5 bg-border/5 rounded-full flex items-center gap-2">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="#ea4c89">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.324c-.426-.13-3.911-1.144-7.85-0.519.164.444.321.895.466 1.353 3.996.183 7.02 2.016 7.319 2.203.0 0 .151-.122.151-.122-.065-.052-.085-.067-2.083-1.636zm-8.874 1.764c-.16-.484-.337-.972-.533-1.46-3.882 1.14-8.083 1.11-8.583 1.107v.149c.277.014 4.385.19 8.271-1.01a18.27 18.27 0 01.845 1.214c-3.161 1.933-4.508 5.758-4.646 6.18.232.181 4.28 3.253 8.358-1.527-.156-.237-.308-.475-.458-.716-1.127.346-2.224.515-3.264.515-1.04 0-1.848-.169-2.261-.285.451-.95 1.516-3.197 4.271-4.062zm.325-1.748c1.396-.13 2.76.113 4.015.71a17.43 17.43 0 00-.547-1.14c-1.288-2.316-3.328-4.544-3.585-4.81-2.146 1.41-3.665 4.032-4.1 4.706C11.532 12.83 12.637 13.514 13.571 13.692zm-.544-7.604c.18.21 1.845 2.152 3.09 4.37.5.88.922 1.77 1.258 2.66 2.508-1.385 3.49-3.793 3.59-4.045-1.554-1.92-3.805-3.14-6.3-3.414l-.624.429c-.31.21-.575.402-.8 1.147-2.3 0-5.46-0.34-8.536 1.625.32 0.73 1.09 2.45 2.64 4.14 0.16-.3 1.98-3.46 5.03-5.505zM5.312 7.02c-.15 0-.15 0 0 0-.12.1-.24.21-.35.32-1.565 1.74-2.825 4.35-3.07 7.05v.19c.14-.01 3.51-.18 7.37-1.29l0-.01c-1.39-.93-2.73-2.07-3.95-6.26zm0 0c-.15 0-.15 0 0 0z" />
              </svg>
              <span className="text-[9px] font-bold">5k+ Views</span>
            </div>
            <div className="px-3 py-1.5 bg-border/5 rounded-full flex items-center gap-2">
              <svg className="w-3 h-3 text-muted" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-[9px] font-bold">900+ Connections</span>
            </div>
          </div>

          {/* Bottom Section: Contact & Location */}
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted">
                <Mail size={12} />
                <span className="text-[10px] font-medium">adidey27@gmail.com</span>
              </div>
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted/50">Melbourne • AU</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-ink text-bg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-ink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <div className="container mx-auto px-6 h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Side: Text & Form */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Get in touch</p>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
                LET'S BUILD <br /> THE <span className="text-muted italic">FUTURE</span>
              </h1>
              <p className="text-muted max-w-md text-lg">
                Currently open to select freelance opportunities and full-time roles in design-driven engineering.
              </p>
            </div>

            <form className="space-y-6 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-border/10 border border-border rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-border/10 border border-border rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Your Message</label>
                <textarea 
                  placeholder="Tell me about your project..." 
                  rows={4}
                  className="w-full bg-border/10 border border-border rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-ink text-bg rounded-2xl py-5 text-xs font-bold uppercase tracking-widest hover:bg-muted transition-all transform active:scale-[0.98]">
                Send Transmission
              </button>
            </form>
          </div>

          {/* Right Side: Enhanced Business Card */}
          <div className="flex justify-center lg:justify-end" data-cursor-label="TALK">
            <BusinessCard />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;
