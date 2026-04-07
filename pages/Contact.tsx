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
              <Palette size={12} className="text-muted" />
              <span className="text-[9px] font-bold">11k Views</span>
            </div>
            <div className="px-3 py-1.5 bg-border/5 rounded-full flex items-center gap-2">
              <Activity size={12} className="text-muted" />
              <span className="text-[9px] font-bold">5k+ Views</span>
            </div>
            <div className="px-3 py-1.5 bg-border/5 rounded-full flex items-center gap-2">
              <Users size={12} className="text-muted" />
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
