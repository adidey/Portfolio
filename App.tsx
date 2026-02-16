import React, { useState, useEffect } from 'react';
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
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [workLayout, setWorkLayout] = useState<'01' | '02'>('01');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);

    // Dynamic Title Management
    let title = 'Aditya Dey | Designer & Engineer';
    if (typeof currentView === 'string') {
      const viewName = currentView.charAt(0).toUpperCase() + currentView.slice(1);
      title = `${viewName} | Aditya Dey`;
    } else if (currentView.type === 'project') {
      title = `${currentView.id.toUpperCase()} | Aditya Dey`;
    }
    document.title = title;

    return () => clearTimeout(timer);
  }, [currentView]);

  const navigate = (view: PageView) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsLoading(false), 600);
    }, 400);
  };

  const handleProjectClick = (id: string) => {
    navigate({ type: 'project', id });
  };

  const renderView = () => {
    if (typeof currentView === 'string') {
      switch (currentView) {
        case 'home':
          return <Home onProjectClick={handleProjectClick} onNavigate={navigate} />;
        case 'work':
          return <Work onProjectClick={handleProjectClick} layout={workLayout} />;
        case 'posters':
          return <Gallery layout={workLayout} />;
        case 'about':
          return <About />;
        case 'resume':
          return <Resume />;
        case 'contact':
          return <Contact />;
        default:
          return <Home onProjectClick={handleProjectClick} onNavigate={navigate} />;
      }
    } else if (currentView.type === 'project') {
      return <ProjectDetail projectId={currentView.id} onBack={() => navigate('work')} />;
    }
  };

  const viewKey = typeof currentView === 'string' ? currentView : currentView.id;

  return (
    <Layout
      currentView={currentView}
      onNavigate={navigate}
      workLayout={workLayout}
      onToggleLayout={(l) => setWorkLayout(l)}
      isLoading={isLoading}
      viewKey={viewKey}
    >
      {renderView()}
    </Layout>
  );
};

export default App;
