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



const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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


      <Layout
        currentPath={location.pathname}
        onNavigate={handleNavigate}
        isLoading={false}
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
