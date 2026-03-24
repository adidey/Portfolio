import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { PageView } from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [workLayout, setWorkLayout] = useState<'01' | '02'>('01');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { // Final loading delay
      const finalTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 3500); // 3.5s minimum for the "filling" effect
    return () => clearTimeout(finalTimeout);
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
    <Layout
      currentPath={location.pathname}
      onNavigate={handleNavigate}
      workLayout={workLayout}
      onToggleLayout={(l) => setWorkLayout(l)}
      isLoading={isLoading}
    >
      <Routes>
        <Route path="/" element={<Home onProjectClick={handleProjectClick} onNavigate={handleNavigate} />} />
        <Route path="/work" element={<Work onProjectClick={handleProjectClick} layout={workLayout} />} />
        <Route path="/work/:projectId" element={<ProjectDetail onBack={() => navigate('/work')} />} />
        <Route path="/posters" element={<Gallery layout={workLayout} />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home onProjectClick={handleProjectClick} onNavigate={handleNavigate} />} />
      </Routes>
      <Analytics />
    </Layout>
  );
};

export default App;
