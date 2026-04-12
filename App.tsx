import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AnimatePresence, m, LazyMotion, domMax } from 'framer-motion';
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

  useEffect(() => {
    const duration = 1000;
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
      initial={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[2000] bg-[var(--ink)] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute bottom-10 right-10 flex">
        <span className="text-[100px] md:text-[140px] leading-none font-black text-[var(--bg)] tabular-nums tracking-tighter">
          {count}
        </span>
        <span className="text-xl md:text-2xl font-bold text-[var(--bg)]/50 mt-4 md:mt-6">%</span>
      </div>
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
    // Initial load timer
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('App: Current path:', location.pathname);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

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
        <AnimatePresence mode="wait">
          <m.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
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
