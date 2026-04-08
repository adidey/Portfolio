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
import { PROJECTS } from '../constants';

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
    <div className="h-[1.2em] overflow-visible relative flex items-center justify-start">
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
          <span style={{ color: 'var(--role-accent)' }}>{roles[index].second}</span>
        </m.div>
      </AnimatePresence>
    </div>
  );
});

const HeroText = ({ text, showBlueprint }: { text: string, showBlueprint?: boolean }) => {
  return (
    <div className="relative">
      <div className="relative w-full py-3">
        {showBlueprint && <BlueprintLabel label="HERO" />}
        <h1 className="font-display font-black text-[var(--text)] leading-none tracking-[-0.04em] text-left uppercase w-full"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)' }}>
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

// --- Bento Grid: 4-col × 3-row with cutout image effect ---
const BG_COLS = 4;
const BG_ROWS = 3;

const ImgSlice = ({
  src, startCol, startRow, spanCols = 1, spanRows = 1,
  cssCol, cssRow, cssColSpan, cssRowSpan
}: {
  src: string; startCol: number; startRow: number;
  spanCols?: number; spanRows?: number;
  cssCol: number; cssRow: number; cssColSpan?: number; cssRowSpan?: number;
}) => (
  <div
    className="relative overflow-hidden rounded-xl"
    style={{
      gridColumn: cssColSpan ? `${cssCol} / span ${cssColSpan}` : `${cssCol}`,
      gridRow:    cssRowSpan ? `${cssRow} / span ${cssRowSpan}` : `${cssRow}`,
    }}
  >
    <img
      src={src} alt=""
      className="absolute inset-0 select-none pointer-events-none object-cover"
      style={{
        width:      `${(BG_COLS / spanCols) * 100}%`,
        height:     `${(BG_ROWS / spanRows) * 100}%`,
        marginLeft: `${-(startCol / spanCols) * 100}%`,
        marginTop:  `${-(startRow / spanRows) * 100}%`,
        maxWidth: 'none',
      }}
    />
  </div>
);

const BentoSlide = React.memo(({ project }: { project: any }) => {
  const src = project.thumbnail;
  return (
    // Always dark gap — matte cutout effect regardless of light/dark theme
    <div
      className="w-full aspect-[4/3] grid gap-[4px] rounded-2xl overflow-hidden"
      style={{ gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: 'repeat(3,1fr)', background: '#0D0D0D' }}
    >
      {/* Big 2×2 image: top-left quadrant */}
      <ImgSlice src={src} startCol={0} startRow={0} spanCols={2} spanRows={2}
        cssCol={1} cssRow={1} cssColSpan={2} cssRowSpan={2} />

      {/* Top-right slices */}
      <ImgSlice src={src} startCol={2} startRow={0} cssCol={3} cssRow={1} />
      <ImgSlice src={src} startCol={3} startRow={0} cssCol={4} cssRow={1} />

      {/* Middle col 3 slice */}
      <ImgSlice src={src} startCol={2} startRow={1} cssCol={3} cssRow={2} />

      {/* Featured Work card: col 4, rows 2–3 — matte desaturated, no harsh colour */}
      <Link
        to={`/work`}
        state={{ highlightProject: project.id }}
        className="rounded-xl p-3 flex flex-col justify-between overflow-hidden group/feat"
        style={{
          gridColumn: '4', gridRow: '2 / span 2',
          background: '#1C2333',
        }}
      >
        <div>
          <p className="text-[7px] font-black uppercase tracking-[0.2em] mb-1.5" style={{ color: 'rgba(147,163,191,0.6)' }}>
            Featured
          </p>
          <h3 className="text-[11px] font-black leading-snug tracking-tight line-clamp-4" style={{ color: 'rgba(220,230,245,0.9)' }}>
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-1 group-hover/feat:gap-1.5 transition-all">
          <svg className="w-2.5 h-2.5 flex-shrink-0" fill="none" stroke="rgba(147,163,191,0.7)" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
          <span className="text-[7px] font-bold uppercase tracking-wide" style={{ color: 'rgba(147,163,191,0.7)' }}>View</span>
        </div>
      </Link>

      {/* Bottom-left image slice */}
      <ImgSlice src={src} startCol={0} startRow={2} cssCol={1} cssRow={3} />

      {/* Status bar: cols 2-3, row 3 */}
      <div
        className="rounded-xl px-3 flex items-center justify-between"
        style={{ gridColumn: '2 / span 2', gridRow: '3', background: '#141414' }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
          <span className="text-[7px] font-black uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.3)' }}>Live</span>
        </div>
        <span className="text-[7px] font-medium uppercase tracking-wide truncate ml-1" style={{ color: 'rgba(255,255,255,0.25)' }}>
          {project.category}
        </span>
      </div>
    </div>
  );
});

const BentoGallery = React.memo(() => {
  const displayProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS].slice(0, 20);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const yRef = useRef(0);
  const isHoveredRef = useRef(false);
  const TOTAL_HEIGHT = 6000;

  // non-passive native wheel event for true scroll jacking
  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (!isHoveredRef.current && innerRef.current) {
        yRef.current -= 0.4;
        if (yRef.current < -TOTAL_HEIGHT) yRef.current = 0;
        innerRef.current.style.transform = `translateY(${yRef.current}px)`;
        if (scrollbarRef.current) {
          scrollbarRef.current.style.transform = `scaleY(${Math.abs(yRef.current) / TOTAL_HEIGHT})`;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const handleNativeWheel = (e: WheelEvent) => {
      const atTop = yRef.current >= 0 && e.deltaY < 0;
      const atBottom = yRef.current <= -TOTAL_HEIGHT && e.deltaY > 0;
      
      if (!atTop && !atBottom) {
        e.preventDefault();
        yRef.current = Math.max(-TOTAL_HEIGHT, Math.min(0, yRef.current - e.deltaY * 0.8));
        if (innerRef.current) innerRef.current.style.transform = `translateY(${yRef.current}px)`;
        if (scrollbarRef.current) {
          scrollbarRef.current.style.transform = `scaleY(${Math.abs(yRef.current) / TOTAL_HEIGHT})`;
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleNativeWheel, { passive: false });
    }

    return () => {
      cancelAnimationFrame(raf);
      if (container) container.removeEventListener('wheel', handleNativeWheel);
    };
  }, []);

  return (
    <div className="relative flex items-center pr-8 w-full group">
      <div
        ref={containerRef}
        className="relative w-full h-[680px] overflow-hidden cursor-pointer rounded-2xl"
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
      >
        <div ref={innerRef} className="flex flex-col gap-4" style={{ willChange: 'transform' }}>
          {displayProjects.map((project, i) => (
            <BentoSlide key={`${project.id}-${i}`} project={project} />
          ))}
        </div>
        {/* Hover hint */}
        <div className="absolute bottom-12 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full">
            <span className="text-[8px] font-black text-[var(--muted)] uppercase tracking-widest">Scroll to explore</span>
          </div>
        </div>
      </div>
      
      {/* Scrollbar Indicator completely outside the overflow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-48 bg-[var(--border)] rounded-full overflow-hidden z-20 transition-opacity opacity-0 group-hover:opacity-100 md:opacity-100 mix-blend-difference pointer-events-none">
        <div 
          ref={scrollbarRef} 
          className="w-full bg-[var(--accent)] origin-top rounded-full shadow-[0_0_12px_var(--accent)]" 
          style={{ height: '100%', transform: 'scaleY(0)', willChange: 'transform' }} 
        />
      </div>
    </div>

  );
});

export const InteractiveCanvas = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTagId, setActiveTagId] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(true);
  const [showGuides, setShowGuides] = useState(true);
  const [showNoise, setShowNoise] = useState(true);
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

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
      id: 'keyboards',
      text: 'Keyboards',
      icon: Wrench,
      position: '-translate-x-[520px] -translate-y-[260px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Tactile Systems</p>
          <p className="text-[#94A3B8]">Building custom mechanical keyboards. I love assembling, lubing, and tuning switches for the perfect acoustic and tactile signature.</p>
        </div>
      )
    },
    {
      id: 'espresso',
      text: 'Espresso',
      icon: FlaskConical,
      position: 'translate-x-[520px] -translate-y-[260px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Dialing It In</p>
          <p className="text-[#94A3B8]">Obsessed with extraction parameters. Pulling the perfect shot of espresso is my daily morning engineering ritual.</p>
        </div>
      )
    },
    {
      id: 'gaming',
      text: 'Gaming',
      icon: MonitorPlay,
      position: '-translate-x-[560px] translate-y-[0px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">E-Sports & Co-Op</p>
          <p className="text-[#94A3B8]">Big fan of competitive multiplayer and strategy. Always down to run a few matches or get absolutely destroyed in a souls-like.</p>
        </div>
      )
    },
    {
      id: 'photography',
      text: 'Photography',
      icon: Palette,
      position: 'translate-x-[560px] translate-y-[0px]',
      content: (
        <div className="space-y-2 dark">
          <p className="font-bold uppercase tracking-wider text-[10px] text-[var(--accent)]">Capturing Light</p>
          <p className="text-[#94A3B8]">Street and atmospheric photography. Translating complex physical environments into balanced, compelling frames.</p>
        </div>
      )
    }
  ];

  return (
    <LazyMotion features={domMax}>
      <div
        onMouseMove={handleGlobalMouseMove}
        onClick={() => setActiveTagId(null)}
        className="relative w-full min-h-screen overflow-x-hidden md:overflow-hidden bg-bg flex flex-col items-center justify-center pt-24 md:pt-20 pb-20 md:pb-10 transition-colors duration-500"
      >
        <style>{`
          .design-grid {
            --grid-color: rgba(255,255,255,0.06);
            background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
            background-size: 80px 80px;
            background-position: center top;
          }
          .design-guide {
            background-color: var(--border);
            opacity: 0.06;
          }
          .light .design-guide, [data-theme='light'] .design-guide {
            opacity: 0.05;
          }
          .light .design-grid, [data-theme='light'] .design-grid {
            --grid-color: rgba(0,0,0,0.035);
          }
        `}</style>

        {/* Design Canvas Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Layer (Standardized Designer Canvas) */}
          {showGrid && <div className="fixed inset-0 designer-grid opacity-30 pointer-events-none z-[0]" />}
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
          <div className="absolute bottom-6 right-6 z-40 text-[10px] opacity-35 tracking-[0.15em] uppercase text-[var(--muted)] pointer-events-none hidden md:flex items-center">
            <svg className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            VIEWS: 1,402
          </div>

          {/* Global Blueprint Overlay for Navigation */}
          {showBlueprint && (
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[480px] h-[48px] border border-blue-500/40 bg-blue-500/5 z-[100] mt-8 pointer-events-none rounded-sm hidden md:block">
              <BlueprintLabel label="NAVIGATION" />
            </div>
          )}
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-16">
          {/* Hero Content Stack - Two Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full z-10">

            {/* Left Column: Identity */}
            <div className="lg:col-span-5 flex flex-col items-start justify-between text-left w-full h-auto md:h-[680px] lg:pt-0 gap-8 md:gap-0">
              <div className="w-full">
                <RoleFlipper showBlueprint={showBlueprint} />
                <div className="mt-6 w-full">
                  <HeroText text="ADITYA DEY" showBlueprint={showBlueprint} />
                </div>
              </div>

              <div
                className="w-full max-w-[380px] mx-auto lg:mx-0 relative perspective-1000 group cursor-pointer mt-auto h-[440px] shrink-0"
                onClick={() => setIsCardFlipped(!isCardFlipped)}
              >
                {showBlueprint && <BlueprintLabel label="INTERACTIVE CARD" />}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, rotateY: isCardFlipped ? 180 : 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1], rotateY: { duration: 0.8, ease: "easeInOut" } }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative w-full h-full"
                >
                  {/* FRONT SIDE */}
                  <div
                    className="absolute inset-0 p-6 rounded-[28px] shadow-2xl border"
                    style={{
                      background: 'var(--card-base)',
                      borderColor: 'var(--border)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Gradients */}
                    <div className="absolute inset-0 overflow-hidden rounded-[28px] pointer-events-none">
                      <div className="absolute inset-0 bg-[radial-gradient(at_0%_50%,var(--card-glow-1)_0%,transparent_65%)] opacity-20" />
                      <div className="absolute inset-0 bg-[radial-gradient(at_10%_40%,var(--card-glow-2)_0%,transparent_45%)] opacity-20" />
                      <div className="absolute inset-0 bg-[radial-gradient(at_100%_50%,var(--card-glow-1)_0%,transparent_65%)] opacity-20" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,var(--card-center)_50%,transparent)] opacity-[0.03]" />
                      <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] scale-150" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      {/* Top: availability badge */}
                      <div className="flex items-start justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-1" style={{ color: 'var(--muted)' }}>Based in Melbourne, AU</p>
                        <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">Open</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[12px] font-medium leading-relaxed" style={{ color: 'var(--muted)' }}>
                          I build digital experiences that actually mean something — where solid engineering meets thoughtful design.
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border)]">
                          <div>
                            <p className="text-[8px] font-black uppercase tracking-[0.25em] mb-1.5" style={{ color: 'var(--muted)', opacity: 0.7 }}>Currently</p>
                            <p className="text-[11px] font-bold leading-snug text-[var(--ink)]">Studying CS and<br />Psychology at<br />UniMelb</p>
                          </div>
                          <div>
                            <p className="text-[8px] font-black uppercase tracking-[0.25em] mb-1.5" style={{ color: 'var(--muted)', opacity: 0.7 }}>Seeking</p>
                            <p className="text-[11px] font-bold leading-snug text-[var(--ink)]">Full-time /<br />Freelance</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                        <span className="text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 text-[var(--muted)] group-hover:text-[var(--ink)] transition-colors">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                          Flip for interests
                        </span>
                        <Link to="/work" onClick={(e) => e.stopPropagation()} className="px-5 py-2.5 bg-[var(--ink)] text-[var(--bg)] text-[10px] font-black uppercase tracking-[0.25em] rounded-2xl hover:opacity-90 transition-opacity">
                          View Work
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className="absolute inset-0 p-6 rounded-[28px] shadow-2xl border"
                    style={{
                      background: 'var(--card-base)',
                      borderColor: 'var(--border)',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-[28px] pointer-events-none">
                      <div className="absolute inset-0 bg-[radial-gradient(at_50%_50%,var(--card-glow-2)_0%,transparent_70%)] opacity-20" />
                      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] scale-150" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-1" style={{ color: 'var(--muted)' }}>Beyond The Screen</p>
                        <h2 className="text-[15px] font-black tracking-tight leading-none text-[var(--ink)]">Interests & Sandbox</h2>
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-center gap-3">
                        {tags.map((tag) => (
                           <div key={tag.id} className={`items-center gap-3 p-2 rounded-xl border border-transparent hover:border-[var(--border)] hover:bg-[var(--surface)] transition-colors ${tag.id === 'gaming' ? 'hidden md:flex' : 'flex'}`}>
                              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 text-[var(--ink)]">
                                <tag.icon size={12} strokeWidth={2.5} />
                              </div>
                              <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--ink)]">{tag.text}</p>
                                <p className="text-[10px] font-medium mt-0.5 line-clamp-1 text-[var(--muted)]">{tag.content.props.children[1].props.children}</p>
                              </div>
                           </div>
                        ))}
                      </div>

                       <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                        <span className="text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 text-[var(--muted)] group-hover:text-[var(--ink)] transition-colors">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                          Flip back
                        </span>
                        <Link to="/about" onClick={(e) => e.stopPropagation()} className="px-5 py-2.5 border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] text-[10px] font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors">
                          More About Me
                        </Link>
                      </div>
                    </div>
                  </div>
                </m.div>
              </div>
            </div>

            {/* Right Column: Bento Gallery Stream */}
            <div className="lg:col-span-7 w-full hidden lg:block">
              <BentoGallery />
            </div>

          </div>
        </div>

        {/* Mobile Tags Grid */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="md:hidden grid grid-cols-3 gap-2 mt-8 md:mt-12 px-6 relative z-10 w-full mb-12"
          >
            {tags.filter(tag => tag.id !== 'gaming').map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTagId(activeTagId === tag.id ? null : tag.id)}
                className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-300 ${activeTagId === tag.id
                    ? 'bg-[var(--accent)] border-[var(--accent)] shadow-lg shadow-accent/20'
                    : 'bg-[var(--card-base)]/80 backdrop-blur-md border-[var(--border)]'
                  }`}
              >
                <tag.icon size={16} className={activeTagId === tag.id ? 'text-white' : 'text-[var(--ink)]'} />
                <span className={`text-[8px] font-bold uppercase tracking-widest transition-colors ${activeTagId === tag.id ? 'text-white' : 'text-[var(--ink)]'
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
