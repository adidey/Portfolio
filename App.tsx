import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AnimatePresence, m, LazyMotion, domMax } from 'motion/react';
import { PageView } from './components/Navbar';
import Layout from './components/Layout';

// Lazy load non-critical pages to improve FCP
const Home = React.lazy(() => import('./pages/Home'));
const Work = React.lazy(() => import('./pages/Work'));
const About = React.lazy(() => import('./pages/About'));
const Resume = React.lazy(() => import('./pages/Resume'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));

const Loader = () => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 800;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let current = 0;
    
    const interval = setInterval(() => {
      current++;
      const progress = Math.min(100, Math.floor((current / steps) * 100));
      setCount(progress);
      if (current >= steps) {
        clearInterval(interval);
        setTimeout(() => setIsComplete(true), 200);
      }
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, []);

  const barVariants = {
    initial: { scaleY: 1 },
    exit: (i: number) => ({
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.05 * i
      }
    })
  };

  return (
    <m.div
      className="fixed inset-0 z-[2000] flex overflow-hidden pointer-events-none"
    >
      {/* Staircase Background Bars */}
      {[...Array(5)].map((_, i) => (
        <m.div
          key={i}
          variants={barVariants}
          custom={i}
          initial="initial"
          exit="exit"
          className="h-full w-full bg-[var(--ink)] origin-top"
        />
      ))}

      {/* Counter Overlay */}
      <AnimatePresence>
        {!isComplete && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center">
              <span className="text-[120px] md:text-[200px] leading-none font-black text-[var(--bg)] tabular-nums tracking-tighter">
                {count}
              </span>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--bg)]/40 font-bold -mt-4">
                System Initializing
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Initial load timer matches Loader duration + transition buffer
    const timer = setTimeout(() => setIsLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('App: Current path:', location.pathname);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Dynamic Title Management
    let title = 'Aditya Dey | Designer & Engineer';
    const path = location.pathname;

    if (path === '/') {
      title = 'Home | Aditya Dey';
    } else if (path.startsWith('/work/')) {
      const slug = path.split('/').pop()?.toUpperCase();
      title = `${slug} | Aditya Dey`;
    } else {
      const viewName = path.slice(1).charAt(0).toUpperCase() + path.slice(2);
      title = `${viewName || 'Home'} | Aditya Dey`;
    }
    document.title = title;
  }, [location.pathname]);

  const handleProjectClick = (id: string) => {
    navigate(`/work/${id}`);
  };

  const handleNavigate = (view: PageView) => {
    if (typeof view === 'string') {
      navigate(view === 'home' ? '/' : `/${view}`);
    } else {
      navigate(`/work/${view.id}`);
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 20,
      scale: 0.98,
      filter: 'blur(10px)'
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      scale: 1.02,
      filter: 'blur(10px)',
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
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
            className="w-full"
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
