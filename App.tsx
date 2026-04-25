import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AnimatePresence, m, LazyMotion, domMax } from 'motion/react';
import { PageView } from './components/Navbar';
import Layout from './components/Layout';

// Lazy load non-critical pages to improve FCP
import Home from './pages/Home';
// const Home = React.lazy(() => import('./pages/Home'));

const Work = React.lazy(() => import('./pages/Work'));
const About = React.lazy(() => import('./pages/About'));
const Resume = React.lazy(() => import('./pages/Resume'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));

// ─── IMPROVED FOLDER LOADER ───────────────────────────────────────────────
const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 600;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCount(Math.min(100, Math.floor((current / steps) * 100)));
      if (current >= steps) clearInterval(interval);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <m.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      }}
      className="fixed inset-0 z-[2000] bg-[var(--bg)] flex items-center justify-center p-6"
    >
      <div className="relative w-full max-w-[500px] aspect-[3/2] flex items-center justify-center">
        {/* Folder Back (Static) */}
        <div className="absolute inset-0 bg-[#e5e4de] rounded-2xl border border-[var(--ink)]/10 shadow-sm" />
        
        {/* Folder Tab (Static) */}
        <div className="absolute -top-6 left-8 w-32 h-10 bg-[#e5e4de] rounded-t-xl border-t border-x border-[var(--ink)]/10 flex items-center justify-center">
           <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30">Archive // 2024</span>
        </div>

        {/* Peeking Content (Animated) */}
        <m.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: count > 20 ? -30 : 0, opacity: count > 10 ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-x-12 top-0 bottom-12 bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center z-10 border border-[var(--border)]"
        >
          <div className="text-[80px] md:text-[100px] font-black tracking-tighter text-[var(--ink)] tabular-nums leading-none">
            {count}%
          </div>
          <div className="w-32 h-1 bg-[var(--ink)]/5 rounded-full overflow-hidden mt-6">
            <m.div 
              className="h-full bg-[var(--ink)]" 
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
            />
          </div>
        </m.div>

        {/* Front Flap (Physics-based opening) */}
        <m.div 
          initial={{ rotateX: 0 }}
          exit={{ 
            rotateX: -115,
            y: 40,
            opacity: 0,
            transition: { 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              opacity: { duration: 0.6, delay: 0.4 }
            }
          }}
          style={{ transformOrigin: "bottom", perspective: "2000px" }}
          className="absolute inset-0 bg-[#f1f0ea] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col p-10 items-start justify-end z-20 border border-[var(--ink)]/10"
        >
           <div className="flex flex-col gap-2">
             <div className="w-16 h-1.5 bg-[var(--ink)]/10 rounded-full" />
             <div className="w-12 h-1.5 bg-[var(--ink)]/5 rounded-full" />
           </div>
           <div className="mt-auto">
             <h2 className="text-[28px] font-black uppercase tracking-tight text-[var(--ink)] leading-tight mb-2">
               Aditya Dey <br /> <span className="text-[var(--muted)]">Portfolio</span>
             </h2>
             <div className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--muted)]">Structured Digital Systems</div>
           </div>
        </m.div>
      </div>
    </m.div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    let title = 'Aditya Dey | Designer & Engineer';
    const path = location.pathname;
    if (path === '/') title = 'Home | Aditya Dey';
    else if (path.startsWith('/work/')) {
      const slug = path.split('/').pop()?.toUpperCase();
      title = `${slug} | Aditya Dey`;
    } else {
      const viewName = path.slice(1).charAt(0).toUpperCase() + path.slice(2);
      title = `${viewName || 'Home'} | Aditya Dey`;
    }
    document.title = title;
  }, [location.pathname]);

  const handleProjectClick = (id: string) => navigate(`/work/${id}`);
  const handleNavigate = (view: PageView) => {
    if (typeof view === 'string') navigate(view === 'home' ? '/' : `/${view}`);
    else navigate(`/work/${view.id}`);
  };

  // ─── IMPROVED FOLDER PAGE SHIFT (Stacking Effect) ───────────────────────
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.96,
      x: 100,
      rotateY: 10,
      filter: 'blur(10px)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      x: -100,
      rotateY: -10,
      filter: 'blur(10px)',
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <LazyMotion features={domMax}>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <Layout
        currentPath={location.pathname}
        onNavigate={handleNavigate}
        isLoading={isLoading}
      >
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
            className="w-full origin-center"
          >
            <React.Suspense fallback={<div className="min-h-screen bg-[var(--bg)]" />}>
              <Routes location={location}>


                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work onProjectClick={handleProjectClick} />} />
                <Route path="/work/:projectId" element={<ProjectDetail onBack={() => navigate('/work')} />} />
                <Route path="/posters" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </React.Suspense>
          </m.div>
        </AnimatePresence>
        <Analytics />
        <SpeedInsights />
      </Layout>
    </LazyMotion>
  );
};

export default App;
