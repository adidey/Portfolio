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
    driftX: 0.6,
    driftY: 0.8,
  });

  useEffect(() => {
    const timer = setTimeout(() => setStartDrawing(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const edgeTransition = { duration: 0.15, ease: "linear" as any };
  const accentColor = "#8A8072";

  const parallaxX = (mouseX / window.innerWidth - 0.5) * 8;
  const parallaxY = (mouseY / window.innerHeight - 0.5) * 8;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [0, floatConfig.current.driftX, 0],
        y: [0, -floatConfig.current.driftY, 0],
        rotate: [-0.15, 0.15, -0.15],
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
            backgroundColor: isActive ? 'rgba(138, 128, 114, 0.1)' : undefined
          }}
          className="flex items-center gap-2 px-2.5 py-1 bg-[#F1EFEA]/80 dark:bg-[#1C1C1C]/80 backdrop-blur-md border border-[#D8D4CE] dark:border-[#333333] rounded-sm shadow-sm"
        >
          <Icon size={12} className="text-accent" />
          <span className="text-[10px] font-bold tracking-tight text-[#2A2A2A] dark:text-[#E8E6E3] whitespace-nowrap uppercase">
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
              className="absolute top-full left-0 mt-4 w-64 p-5 bg-[#F6F4EF]/80 dark:bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#DDD9D3] dark:border-[#2F2F2F] rounded-lg shadow-xl z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-[11px] leading-relaxed text-ink font-medium">
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
          className="text-[clamp(1rem,2vw,1.25rem)] font-satoshi font-medium tracking-[0.15em] text-ink uppercase flex gap-2"
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
      <h1 className="text-[clamp(3.5rem,12vw,10rem)] font-thunder font-bold text-ink leading-[0.85] tracking-tight text-center uppercase">
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
      position: '-translate-x-[500px] -translate-y-[260px]',
      content: (
        <div className="space-y-2">
          <p className="font-bold uppercase tracking-wider text-[10px] text-accent">Design Philosophy</p>
          <p className="text-muted">I believe in systems thinking and cognitive science as the foundation for intuitive design. Every interface is a conversation between the user and the system.</p>
        </div>
      )
    },
    {
      id: 'music',
      text: 'Music',
      icon: Music,
      position: 'translate-x-[500px] -translate-y-[260px]',
      content: (
        <div className="space-y-2">
          <p className="font-bold uppercase tracking-wider text-[10px] text-accent">Rhythm & Design</p>
          <p className="text-muted">Music influences my design rhythm. From ambient textures to complex polyrhythms, I find parallels in layout balance and interaction timing.</p>
        </div>
      )
    },
    {
      id: 'experiments',
      text: 'Experiments',
      icon: FlaskConical,
      position: '-translate-x-[580px] translate-y-[260px]',
      content: (
        <div className="space-y-2">
          <p className="font-bold uppercase tracking-wider text-[10px] text-accent">Current Explorations</p>
          <p className="text-muted">Currently deep-diving into generative UI patterns, AI-assisted design workflows, and the intersection of creative coding and functional tools.</p>
        </div>
      )
    },
    {
      id: 'resume',
      text: 'Resume',
      icon: FileText,
      position: 'translate-x-[580px] translate-y-[260px]',
      content: (
        <div className="space-y-3">
          <p className="font-bold uppercase tracking-wider text-[10px] text-accent">Experience & Projects</p>
          <p className="text-muted">View my full professional journey and technical expertise.</p>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-accent/90 transition-all"
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
      
      {/* Editorial Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            className="mt-14 w-full max-w-[340px] md:max-w-lg"
          >
            <div className="bg-card-bg p-6 md:p-8 rounded-2xl border border-card-border shadow-soft group">
              <div className="flex items-start justify-between mb-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-ink uppercase tracking-[0.2em]">Status</span>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                    <span className="text-sm font-bold text-ink uppercase tracking-wider">Available</span>
                  </div>
                </div>
                <div className="text-right flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-ink uppercase tracking-[0.2em]">Location</span>
                  <p className="text-sm font-bold text-ink">Melbourne, AU</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-border pt-10">
                <div className="space-y-5 text-left">
                  <div>
                    <span className="text-[9px] font-bold text-ink uppercase tracking-[0.2em]">Currently Shipping</span>
                    <p className="text-base text-ink font-bold mt-1.5">NotchPrompt v2</p>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button className="px-5 py-2.5 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20">View Work</button>
                    <button className="px-5 py-2.5 bg-ink/5 dark:bg-white/5 text-ink text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-ink/10 dark:hover:bg-white/10 transition-all">Contact</button>
                  </div>
                </div>
                
                <div className="text-left">
                  <span className="text-[9px] font-bold text-ink uppercase tracking-[0.2em]">Focus</span>
                  <ul className="mt-4 space-y-2.5">
                    {['Design Systems', 'Generative Interfaces', 'Creative Development'].map((item, i) => (
                      <li key={i} className="text-sm text-ink font-medium flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
            <div key={tag.id} className="flex items-center gap-1.5 px-2.5 py-1 bg-[#EFEDE8] dark:bg-[#1C1C1C] border border-[#D9D5CF] dark:border-[#333333] rounded-sm shadow-sm">
              <tag.icon size={10} className="text-accent" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#2A2A2A] dark:text-[#E8E6E3]">{tag.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
