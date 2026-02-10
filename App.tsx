
import React, { useState, useEffect } from 'react';
import Navbar, { PageView } from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Posters from './pages/Posters';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [workLayout, setWorkLayout] = useState<'01' | '02'>('01');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);

    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('cursor-follower');
    
    const moveCursor = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // RequestAnimationFrame for smoother cursor sync
      requestAnimationFrame(() => {
        if (cursor && follower) {
          cursor.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
          follower.style.transform = `translate3d(${e.clientX - (follower.offsetWidth / 2)}px, ${e.clientY - (follower.offsetHeight / 2)}px, 0)`;
        }
      });

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .group, input, textarea');
      if (isInteractive) {
        follower?.classList.add('cursor-hover');
      } else {
        follower?.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearTimeout(timer);
    };
  }, []);

  const navigate = (view: PageView) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'auto' });
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
          return <Posters />;
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
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black flex flex-col relative overflow-x-hidden">
      <LoadingScreen visible={isLoading} />
      
      {/* Background Aura */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 70%)`
        }}
      />

      <Navbar 
        currentView={currentView} 
        onNavigate={navigate} 
        workLayout={workLayout}
        onToggleLayout={(l) => setWorkLayout(l)}
      />
      
      <div 
        key={`${viewKey}-${workLayout}`}
        className="flex-grow page-fade-enter"
      >
        {renderView()}
      </div>

      <footer className="px-6 md:px-12 py-16 border-t border-neutral-900 bg-[#000000] mt-auto relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[9px] uppercase tracking-[0.4em]">
          <p>© 2025 Aditya Dey — Melbourne, AU</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors duration-300">GitHub</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
          </div>
          <p className="font-mono">Timezone UTC+11</p>
        </div>
      </footer>

      <div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[99]" />
    </div>
  );
};

export default App;
