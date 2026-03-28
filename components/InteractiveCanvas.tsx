import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Music, 
  FlaskConical, 
  FileText
} from 'lucide-react';

// Floating Tag Component
interface FloatingTagProps {
  key?: string | number;
  id: string;
  text: string;
  icon: any;
  delay?: number;
  positionClasses: string;
  mouseX: number;
  mouseY: number;
  isActive: boolean;
  onClick: () => void;
  panelContent: React.ReactNode;
}

const FloatingTag = ({ 
  id,
  text, 
  icon: Icon, 
  delay = 0, 
  positionClasses, 
  mouseX, 
  mouseY,
  isActive,
  onClick,
  panelContent
}: FloatingTagProps) => {
  const [isDrawn, setIsDrawn] = useState(false);
  const [startDrawing, setStartDrawing] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const floatConfig = useRef({
    durationX: 7 + Math.random() * 3,
    durationY: 8 + Math.random() * 4,
    durationR: 12 + Math.random() * 6,
    driftX: 0.4,
    driftY: 0.6,
  });

  useEffect(() => {
    const timer = setTimeout(() => setStartDrawing(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const edgeTransition = { duration: 0.15, ease: "linear" as any };
  const accentColor = "#8A8072";

  const parallaxX = (mouseX / window.innerWidth - 0.5) * 3;
  const parallaxY = (mouseY / window.innerHeight - 0.5) * 3;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [0, floatConfig.current.driftX, 0],
        y: [0, -floatConfig.current.driftY, 0],
        rotate: [-0.1, 0.1, -0.1],
        translateX: parallaxX,
        translateY: parallaxY,
        scale: isActive ? 1.05 : isHovered ? 1.02 : 1,
      }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        x: { duration: floatConfig.current.durationX, repeat: Infinity, ease: "easeInOut" },
        y: { duration: floatConfig.current.durationY, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: floatConfig.current.durationR, repeat: Infinity, ease: "easeInOut" },
        translateX: { type: "spring", stiffness: 50, damping: 20 },
        translateY: { type: "spring", stiffness: 50, damping: 20 },
        scale: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute z-20 hidden md:flex ${positionClasses} cursor-pointer group transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-85 hover:opacity-100'}`}
    >
      <div className="relative p-1">
        {/* Figma-style edge-by-edge drawing frame */}
        {startDrawing && (
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-30">
            {/* Top Edge */}
            <motion.line
              x1="0" y1="0" x2="100%" y2="0"
              stroke={accentColor} strokeWidth={isActive ? "2" : "1"}
              strokeDasharray="4 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, stroke: isActive || isHovered ? accentColor : `${accentColor}66` }}
              transition={edgeTransition}
            />
            {/* Right Edge */}
            <motion.line
              x1="100%" y1="0" x2="100%" y2="100%"
              stroke={accentColor} strokeWidth={isActive ? "2" : "1"}
              strokeDasharray="4 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, stroke: isActive || isHovered ? accentColor : `${accentColor}66` }}
              transition={{ ...edgeTransition, delay: 0.15 }}
            />
            {/* Bottom Edge */}
            <motion.line
              x1="100%" y1="100%" x2="0" y2="100%"
              stroke={accentColor} strokeWidth={isActive ? "2" : "1"}
              strokeDasharray="4 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, stroke: isActive || isHovered ? accentColor : `${accentColor}66` }}
              transition={{ ...edgeTransition, delay: 0.3 }}
            />
            {/* Left Edge */}
            <motion.line
              x1="0" y1="100%" x2="0" y2="0"
              stroke={accentColor} strokeWidth={isActive ? "2" : "1"}
              strokeDasharray="4 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, stroke: isActive || isHovered ? accentColor : `${accentColor}66` }}
              transition={{ ...edgeTransition, delay: 0.45 }}
              onAnimationComplete={() => {
                setIsDrawn(true);
                setTimeout(() => setShowContent(true), 100);
              }}
            />

            {/* Corner handles (Figma style) */}
            {isDrawn && (
              <>
                {[
                  { x: -2.5, y: -2.5 },
                  { x: "calc(100% - 2.5px)", y: -2.5 },
                  { x: "calc(100% - 2.5px)", y: "calc(100% - 2.5px)" },
                  { x: -2.5, y: "calc(100% - 2.5px)" }
                ].map((pos, i) => (
                  <motion.rect
                    key={i}
                    x={pos.x}
                    y={pos.y}
                    width="5"
                    height="5"
                    fill="white"
                    stroke={accentColor}
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: isActive || isHovered ? 1.2 : 1 
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </>
            )}
          </svg>
        )}

        {/* Tag Content */}
        <motion.div
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 5,
            scale: isHovered ? 1.02 : 1,
            backgroundColor: isActive || isHovered ? 'color-mix(in srgb, var(--accent) 10%, var(--card-base))' : 'var(--card-base)',
            borderColor: isActive || isHovered ? 'var(--accent)' : 'var(--border)'
          }}
          className="flex items-center gap-2 px-2.5 py-1 backdrop-blur-md border rounded-sm shadow-sm transition-colors duration-300"
        >
          <Icon size={12} className="text-[var(--ink)]" />
          <span className="text-[10px] font-bold tracking-tight text-[var(--ink)] whitespace-nowrap uppercase">
            {text}
          </span>
        </motion.div>

        {/* Info Panel */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-full left-0 mt-4 w-64 p-5 bg-[var(--card-base)]/90 backdrop-blur-xl border border-[var(--border)] rounded-lg shadow-xl z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-[11px] leading-relaxed text-[var(--ink)] font-medium">
                {panelContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const RoleFlipper = () => {
  const roles = [
    { first: "Product", second: "Designer" },
    { first: "Design", second: "Engineer" },
    { first: "Creative", second: "Developer" },
    { first: "Interaction", second: "Designer" }
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden relative flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-[clamp(1rem,2vw,1.25rem)] font-satoshi font-semibold tracking-[0.15em] text-ink uppercase flex gap-2"
        >
          <span>{roles[index].first}</span>
          <span className="text-accent">{roles[index].second}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const HeroText = ({ text }: { text: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
      className="relative flex items-center justify-center w-full py-6"
    >
      <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-satoshi font-black text-ink leading-[1.1] tracking-[0.1em] text-center uppercase whitespace-nowrap">
        {text}
      </h1>
    </motion.div>
  );
};

export const InteractiveCanvas = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTagId, setActiveTagId] = useState<string | null>(null);

  const handleGlobalMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const tags = [
    {
      id: 'philosophy',
      text: 'Philosophy',
      icon: Palette,
      position: '-translate-x-[480px] -translate-y-[200px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[#3B82F6] dark:text-[#60A5FA]">Design Philosophy</p>
          <p className="text-[#94A3B8]">I believe in systems thinking and cognitive science as the foundation for intuitive design. Every interface is a conversation between the user and the system.</p>
        </div>
      )
    },
    {
      id: 'music',
      text: 'Music',
      icon: Music,
      position: 'translate-x-[480px] -translate-y-[200px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[#3B82F6] dark:text-[#60A5FA]">Rhythm & Design</p>
          <p className="text-[#94A3B8]">Music influences my design rhythm. From ambient textures to complex polyrhythms, I find parallels in layout balance and interaction timing.</p>
        </div>
      )
    },
    {
      id: 'experiments',
      text: 'Experiments',
      icon: FlaskConical,
      position: '-translate-x-[500px] translate-y-[200px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[#3B82F6] dark:text-[#60A5FA]">Current Explorations</p>
          <p className="text-[#94A3B8]">Currently deep-diving into generative UI patterns, AI-assisted design workflows, and the intersection of creative coding and functional tools.</p>
        </div>
      )
    },
    {
      id: 'resume',
      text: 'Resume',
      icon: FileText,
      position: 'translate-x-[500px] translate-y-[200px]',
      content: (
        <div className="space-y-3 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[#3B82F6] dark:text-[#60A5FA]">Experience & Projects</p>
          <p className="text-[#94A3B8]">View my full professional journey and technical expertise.</p>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-[var(--ink)] text-[var(--bg)] text-[10px] font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-all"
          >
            Download Resume
          </a>
        </div>
      )
    }
  ];

  return (
    <div 
      onMouseMove={handleGlobalMouseMove}
      onClick={() => setActiveTagId(null)}
      className="relative w-full min-h-screen overflow-hidden bg-bg flex flex-col items-center justify-center pt-20 pb-10 transition-colors duration-500"
    >
      
      <style>{`
        .design-grid {
          --grid-color: rgba(255,255,255,0.04);
          background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
          background-size: 120px 120px;
          background-position: center top;
          -webkit-mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
          mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
        }
        @media (min-width: 768px) {
          .design-grid {
            background-position: calc(50% - 60px) top;
          }
        }
        .light .design-grid, [data-theme='light'] .design-grid {
          --grid-color: rgba(0,0,0,0.05);
        }
      `}</style>
      
      {/* Design Canvas Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Layer */}
        <div className="absolute inset-0 design-grid z-0" />
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center">
        {/* Floating Tags */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {tags.map((tag) => (
            <FloatingTag 
              key={tag.id}
              id={tag.id}
              text={tag.text}
              icon={tag.icon}
              delay={0.4 + tags.indexOf(tag) * 0.1}
              positionClasses={`${tag.position} pointer-events-auto`}
              mouseX={mousePos.x}
              mouseY={mousePos.y}
              isActive={activeTagId === tag.id}
              onClick={() => setActiveTagId(activeTagId === tag.id ? null : tag.id)}
              panelContent={tag.content}
            />
          ))}
        </div>

        {/* Hero Content Stack */}
        <div className="flex flex-col items-center text-center w-full z-10">
          <RoleFlipper />
          
          <div className="mt-8 w-full flex items-center justify-center">
            <HeroText text="ADITYA DEY" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="mt-14 w-full max-w-[340px] md:max-w-lg group shadow-soft hover:shadow-xl hover:shadow-[var(--accent)]/10 rounded-3xl cursor-default transition-shadow duration-500"
          >
            <div className="relative overflow-hidden p-6 md:p-8 rounded-3xl border border-[var(--border)] transition-colors duration-500">
              {/* Base Background Color */}
              <div className="absolute inset-0 bg-[var(--card-base)] transition-colors duration-500" />
              
              {/* Theme-aware Background Gradients */}
              <div className="absolute inset-[-20%] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,var(--card-glow),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,var(--card-glow),transparent_70%)] transition-all duration-700" />
              </div>

              {/* Status Card Content */}
              <div className="relative z-10 w-full h-full">
                <div className="flex items-start justify-between mb-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.2em]">Status</span>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                      <span className="text-sm font-bold text-[var(--ink)] uppercase tracking-wider">Available</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.2em]">Location</span>
                    <div className="flex items-center justify-end gap-2.5">
                      <p className="text-sm font-bold text-[var(--ink)]">Melbourne, AU</p>
                      <div className="w-1 h-1 rounded-full bg-[var(--border)]" />
                      <div className="flex items-center gap-2 text-[var(--muted)]">
                        <a href="https://www.linkedin.com/in/adityadey27/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors" title="LinkedIn">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="https://github.com/adidey" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors" title="GitHub">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.235c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[var(--border)] pt-10">
                  <div className="space-y-5 text-left">
                    <div>
                      <span className="text-[9px] font-bold text-[var(--muted)] uppercase tracking-[0.2em]">Currently Shipping</span>
                      <p className="text-base text-[var(--ink)] font-bold mt-1.5">NotchPrompt v2</p>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button className="px-5 py-2.5 bg-[var(--ink)] text-[var(--bg)] text-[10px] font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/20">View Work</button>
                      <button className="px-5 py-2.5 bg-[var(--border)] text-[var(--ink)] text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all">Contact</button>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <span className="text-[9px] font-bold text-[var(--muted)] uppercase tracking-[0.2em]">Focus</span>
                    <ul className="mt-4 space-y-2.5">
                      {['Design Systems', 'Generative Interfaces', 'Creative Development'].map((item, i) => (
                        <li key={i} className="text-sm text-[var(--ink)] font-medium flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-30" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="flex md:hidden flex-wrap justify-center gap-1.5 mt-10 px-4 relative z-10"
        >
          {tags.map((tag) => (
            <div key={tag.id} className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--card-base)]/90 backdrop-blur-sm border border-[var(--border)] rounded-sm shadow-sm transition-colors duration-300">
              <tag.icon size={10} className="text-[var(--ink)]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--ink)]">{tag.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
