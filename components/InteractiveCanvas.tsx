import React, { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence, LazyMotion, domMax } from 'framer-motion';
import { 
  Palette, 
  Music, 
  FlaskConical, 
  FileText,
  Wrench,
  MonitorPlay
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BlueprintLabel = ({ label }: { label: string }) => (
  <div className="absolute inset-[-4px] border border-blue-500/40 dark:border-blue-400/40 bg-blue-500/5 dark:bg-blue-400/5 pointer-events-none z-50 flex items-start justify-start p-1.5 rounded-sm">
    <span className="text-[9px] text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase bg-[var(--bg)]/80 px-1.5 py-0.5 rounded-sm backdrop-blur-sm shadow-sm">{label}</span>
  </div>
);

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
  showBlueprint?: boolean;
}

const FloatingTag = React.memo(({ 
  id,
  text, 
  icon: Icon, 
  delay = 0, 
  positionClasses, 
  mouseX, 
  mouseY,
  isActive,
  onClick,
  panelContent,
  showBlueprint
}: FloatingTagProps) => {
  const [isDrawn, setIsDrawn] = useState(false);
  const [startDrawing, setStartDrawing] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const floatConfig = useRef({
    durationX: 14 + Math.random() * 4,
    durationY: 10 + Math.random() * 2,
    durationR: 16 + Math.random() * 2,
    driftX: 4,
    driftY: 10,
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
    <m.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [0, floatConfig.current.driftX, 0],
        y: [0, -floatConfig.current.driftY, 0],
        rotate: [-0.2, 0.2, -0.2],
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
        {showBlueprint && <BlueprintLabel label="TAG" />}
        {/* Figma-style edge-by-edge drawing frame */}
        {startDrawing && (
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-30">
            {/* Top Edge */}
            <m.line
              x1="0" y1="0" x2="100%" y2="0"
              stroke={accentColor} strokeWidth={isActive ? "2" : "1"}
              strokeDasharray="4 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, stroke: isActive || isHovered ? accentColor : `${accentColor}66` }}
              transition={edgeTransition}
            />
            {/* Right Edge */}
            <m.line
              x1="100%" y1="0" x2="100%" y2="100%"
              stroke={accentColor} strokeWidth={isActive ? "2" : "1"}
              strokeDasharray="4 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, stroke: isActive || isHovered ? accentColor : `${accentColor}66` }}
              transition={{ ...edgeTransition, delay: 0.15 }}
            />
            {/* Bottom Edge */}
            <m.line
              x1="100%" y1="100%" x2="0" y2="100%"
              stroke={accentColor} strokeWidth={isActive ? "2" : "1"}
              strokeDasharray="4 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, stroke: isActive || isHovered ? accentColor : `${accentColor}66` }}
              transition={{ ...edgeTransition, delay: 0.3 }}
            />
            {/* Left Edge */}
            <m.line
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
                  <m.rect
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
        <m.div
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
        </m.div>

        {/* Info Panel */}
        <AnimatePresence>
          {isActive && (
            <m.div
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
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.div>
  );
});

const RoleFlipper = React.memo(({ showBlueprint }: { showBlueprint?: boolean }) => {
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
    <div className="h-[1.2em] overflow-visible relative flex items-center justify-center">
      {showBlueprint && <BlueprintLabel label="ROLE" />}
      <AnimatePresence mode="wait">
        <m.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-[clamp(1rem,2vw,1.25rem)] font-satoshi font-semibold tracking-[0.15em] text-[var(--text)] uppercase flex gap-2"
        >
          <span>{roles[index].first}</span>
          <span className="text-accent">{roles[index].second}</span>
        </m.div>
      </AnimatePresence>
    </div>
  );
});

const HeroText = ({ text, showBlueprint }: { text: string, showBlueprint?: boolean }) => {
  return (
    <div className="relative">
      <div className="relative flex items-center justify-center w-full py-6">
        {showBlueprint && <BlueprintLabel label="HERO" />}
        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-display font-black text-[var(--text)] leading-none tracking-tighter text-center uppercase whitespace-nowrap">
          {text}
        </h1>
      </div>
    </div>
  );
};

const LiveTimeWidget = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Australia/Melbourne',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        setTime(formatter.format(new Date()));
      } catch (e) {
        setTime("Melbourne, AU");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-sm font-bold text-[var(--ink)]">{time ? `${time} • MEL` : 'Melbourne, AU'}</p>;
};

const GithubStatusWidget = () => {
  const [status, setStatus] = useState("NotchPrompt v2");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/adidey/events/public')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const pushEvent = data.find((e: any) => e.type === 'PushEvent');
          if (pushEvent && pushEvent.repo) {
            const repoName = pushEvent.repo.name.split('/')[1];
            setStatus(`Building ${repoName}`);
          }
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex items-center gap-2 mt-1.5">
      <div className={`w-1.5 h-1.5 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`} />
      <p className="text-base text-[var(--ink)] font-bold truncate max-w-[200px]">{status}</p>
    </div>
  );
};

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton = ({ children, className, onClick, ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const { x, y } = position;
  return (
    <m.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={className}
      {...(props as any)}
    >
      {children}
    </m.button>
  );
};

export const InteractiveCanvas = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTagId, setActiveTagId] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(true);
  const [showGuides, setShowGuides] = useState(true);
  const [showNoise, setShowNoise] = useState(true);
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [isMeasuring, setIsMeasuring] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Alt') setIsMeasuring(true);
      if (e.key.toLowerCase() === 'g') setShowBlueprint(p => !p);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Alt') setIsMeasuring(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleGlobalMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const tags = [
    {
      id: 'philosophy',
      text: 'Philosophy',
      icon: Palette,
      position: '-translate-x-[520px] -translate-y-[260px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Design Philosophy</p>
          <p className="text-[#94A3B8]">I believe in systems thinking and cognitive science as the foundation for intuitive design. Every interface is a conversation between the user and the system.</p>
        </div>
      )
    },
    {
      id: 'music',
      text: 'Music',
      icon: Music,
      position: 'translate-x-[520px] -translate-y-[260px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Rhythm & Design</p>
          <p className="text-[#94A3B8]">Music influences my design rhythm. From ambient textures to complex polyrhythms, I find parallels in layout balance and interaction timing.</p>
        </div>
      )
    },
    {
      id: 'toolkit',
      text: 'Toolkit',
      icon: Wrench,
      position: '-translate-x-[560px] translate-y-[0px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Tech Stack</p>
          <ul className="text-[#94A3B8] font-mono grid grid-cols-2 gap-2 text-[10px] pt-1">
            <li>• Figma</li><li>• Framer</li><li>• React</li><li>• Tailwind</li>
          </ul>
        </div>
      )
    },
    {
      id: 'playground',
      text: 'Playground',
      icon: MonitorPlay,
      position: 'translate-x-[560px] translate-y-[0px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Creative Sandbox</p>
          <p className="text-[#94A3B8]">Experimental interfaces and creative coding explorations.</p>
        </div>
      )
    },
    {
      id: 'experiments',
      text: 'Experiments',
      icon: FlaskConical,
      position: '-translate-x-[520px] translate-y-[260px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Current Explorations</p>
          <p className="text-[#94A3B8]">Currently deep-diving into generative UI patterns, AI-assisted design workflows, and the intersection of creative coding and functional tools.</p>
        </div>
      )
    },
    {
      id: 'resume',
      text: 'Resume',
      icon: FileText,
      position: 'translate-x-[520px] translate-y-[260px]',
      content: (
        <div className="space-y-3 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Experience & Projects</p>
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
    <LazyMotion features={domMax}>
      <div 
        onMouseMove={handleGlobalMouseMove}
        onClick={() => setActiveTagId(null)}
        className="relative w-full min-h-screen overflow-hidden bg-bg flex flex-col items-center justify-center pt-20 pb-10 transition-colors duration-500"
      >
        <style>{`
          .design-grid {
            --grid-color: rgba(255,255,255,0.06);
            background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
            background-size: 80px 80px;
            background-position: center top;
            -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
            mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
          }
          .design-guide {
            background-color: var(--border);
            opacity: 0.06;
          }
          .light .design-guide, [data-theme='light'] .design-guide {
            opacity: 0.05;
          }
          .light .design-grid, [data-theme='light'] .design-grid {
            --grid-color: rgba(0,0,0,0.05);
          }
        `}</style>
        
        {/* Design Canvas Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Layer */}
          {showGrid && <div className="absolute inset-0 design-grid z-0" />}
          {/* Noise Texture Overlay */}
          {showNoise && <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-soft-light z-10 bg-grain"></div>}
          {/* Alignment Guides */}
          {showGuides && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-1/2 w-px design-guide" />
              <div className="absolute left-0 right-0 top-1/2 h-px design-guide" />
            </div>
          )}
          {/* Labels */}
          <div className="absolute top-6 left-6 z-40 text-[10px] opacity-35 tracking-[0.15em] uppercase text-[var(--muted)] pointer-events-none hidden md:block">
            CANVAS
          </div>
          <div className="absolute bottom-6 right-6 z-40 text-[10px] opacity-35 tracking-[0.15em] uppercase text-[var(--muted)] pointer-events-none hidden md:block">
            ZOOM 100%
          </div>

          {/* Global Blueprint Overlay for Navigation */}
          {showBlueprint && (
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[480px] h-[48px] border border-blue-500/40 bg-blue-500/5 z-[100] mt-8 pointer-events-none rounded-sm hidden md:block">
              <BlueprintLabel label="NAVIGATION" />
            </div>
          )}
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
                showBlueprint={showBlueprint}
              />
            ))}
          </div>

          {/* Hero Content Stack */}
          <div className="flex flex-col items-center text-center w-full z-10">
            <RoleFlipper showBlueprint={showBlueprint} />
            
            <div className="mt-8 w-full flex items-center justify-center">
              <HeroText text="ADITYA DEY" showBlueprint={showBlueprint} />
            </div>

            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.2 } }}
              className="mt-14 w-full max-w-[340px] md:max-w-xl group shadow-soft hover:shadow-xl hover:shadow-[var(--accent)]/10 rounded-3xl cursor-default transition-shadow duration-500 relative"
            >
              <div className="relative overflow-hidden p-6 md:p-8 rounded-3xl border border-[var(--border)] transition-colors duration-500">
                {showBlueprint && <BlueprintLabel label="STATUS CARD" />}
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
                        <LiveTimeWidget />
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
                        <GithubStatusWidget />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Link 
                          to="/work"
                          data-cursor-label="VIEW"
                          className="px-5 py-2.5 bg-[var(--ink)] text-[var(--bg)] text-[10px] font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center"
                        >
                          View Work
                        </Link>
                        <Link 
                          to="/contact"
                          data-cursor-label="TALK"
                          className="px-5 py-2.5 bg-[var(--border)] text-[var(--ink)] text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all hover:bg-[var(--surface)] hover:shadow-md flex items-center justify-center"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                    
                    <div className="text-left">
                      <span className="text-[9px] font-bold text-[var(--muted)] uppercase tracking-[0.2em]">Focus</span>
                      <ul className="mt-4 space-y-2.5">
                        {['Design Systems', 'Generative Interfaces', 'Creative Development'].map((item, i) => (
                          <m.li 
                            key={i} 
                            whileHover={{ x: 4 }}
                            className="text-sm text-[var(--ink)] font-medium flex items-center gap-2.5 cursor-pointer group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                            <span className="transition-colors duration-300">{item}</span>
                          </m.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>

          {/* Mobile Tags Grid */}
          <m.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="md:hidden grid grid-cols-3 gap-2 mt-12 px-6 relative z-10 w-full"
          >
            {tags.map((tag) => (
              <button 
                key={tag.id} 
                onClick={() => setActiveTagId(activeTagId === tag.id ? null : tag.id)}
                className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                  activeTagId === tag.id 
                  ? 'bg-[var(--accent)] border-[var(--accent)] shadow-lg shadow-accent/20' 
                  : 'bg-[var(--card-base)]/80 backdrop-blur-md border-[var(--border)]'
                }`}
              >
                <tag.icon size={16} className={activeTagId === tag.id ? 'text-white' : 'text-[var(--ink)]'} />
                <span className={`text-[8px] font-bold uppercase tracking-widest transition-colors ${
                  activeTagId === tag.id ? 'text-white' : 'text-[var(--ink)]'
                }`}>
                  {tag.text}
                </span>
              </button>
            ))}
          </m.div>

          {/* Mobile Info Panel Overlay */}
          <AnimatePresence>
            {activeTagId && (
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="md:hidden fixed bottom-24 left-6 right-6 p-6 bg-[var(--card-base)]/95 backdrop-blur-2xl border border-[var(--border)] rounded-2xl shadow-2xl z-50 overflow-hidden"
                onClick={() => setActiveTagId(null)}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between mb-2">
                     <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-[0.2em]">Context</span>
                     <button className="text-[var(--muted)] hover:text-[var(--ink)] transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                  </div>
                  <div className="text-sm font-medium leading-relaxed text-[var(--ink)]">
                    {tags.find(t => t.id === activeTagId)?.content}
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>

        {/* Measurement Tool Layout */}
        {isMeasuring && (
          <svg className="fixed inset-0 w-full h-full pointer-events-none z-50">
            <line
              x1={mousePos.x} y1={mousePos.y}
              x2={window.innerWidth / 2} y2={window.innerHeight / 2}
              stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4"
              className="opacity-60"
            />
            <line 
              x1={window.innerWidth / 2} y1={window.innerHeight / 2 - 10}
              x2={window.innerWidth / 2} y2={window.innerHeight / 2 + 10}
              stroke="var(--accent)" strokeWidth="1.5"
            />
            <line 
              x1={window.innerWidth / 2 - 10} y1={window.innerHeight / 2}
              x2={window.innerWidth / 2 + 10} y2={window.innerHeight / 2}
              stroke="var(--accent)" strokeWidth="1.5"
            />
            <text 
              x={(mousePos.x + window.innerWidth / 2) / 2}
              y={(mousePos.y + window.innerHeight / 2) / 2 - 8}
              fill="var(--accent)"
              className="text-[10px] font-mono shadow-sm bg-black/50"
              textAnchor="middle"
            >
              {Math.round(Math.hypot(window.innerWidth / 2 - mousePos.x, window.innerHeight / 2 - mousePos.y))}px
            </text>
            <circle cx={mousePos.x} cy={mousePos.y} r="3" fill="var(--accent)" />
          </svg>
        )}

        {/* Workspace Layer Control */}
        <div className="fixed bottom-6 left-6 z-50 flex-col items-start gap-1 hidden md:flex">
          <label className="text-[9px] font-bold text-[var(--muted)] uppercase tracking-[0.2em] mb-1.5">LAYER CONTROL</label>
          <button onClick={() => setShowGrid(!showGrid)} className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${showGrid ? 'text-[var(--ink)]' : 'text-[var(--muted)] opacity-50'}`}>
            [ GRID {showGrid ? '✓' : ' '} ]
          </button>
          <button onClick={() => setShowGuides(!showGuides)} className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${showGuides ? 'text-[var(--ink)]' : 'text-[var(--muted)] opacity-50'}`}>
            [ GUIDES {showGuides ? '✓' : ' '} ]
          </button>
          <button onClick={() => setShowBlueprint(!showBlueprint)} className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${showBlueprint ? 'text-[var(--ink)]' : 'text-[var(--muted)] opacity-50'}`}>
            [ BLUEPRINT {showBlueprint ? '✓' : ' '} ]
          </button>
        </div>
      </div>
    </LazyMotion>
  );
};
