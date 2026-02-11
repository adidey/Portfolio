
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

  const SocialLink = ({ href, label }: { href: string; label: string }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative group block overflow-hidden"
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-blue-500">
        {label}
      </span>
    </a>
  );

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black flex flex-col relative overflow-x-hidden">
      <LoadingScreen visible={isLoading} />
      
      {/* Dynamic Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.12] overflow-hidden">
        <div 
          className="absolute w-[120vw] h-[120vh] -top-[10%] -left-[10%] blur-[120px] bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-transparent animate-slow-rotate"
          style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}
        />
        <div 
          className="absolute w-[80vw] h-[80vh] top-[20%] left-[40%] blur-[100px] bg-blue-500/10 rounded-full"
          style={{ transform: `translate(${mousePos.x * -0.05}px, ${mousePos.y * -0.05}px)` }}
        />
      </div>

      {/* Whitespace Micro-elements (Refined) */}
      <div className="fixed inset-0 pointer-events-none z-10 select-none overflow-hidden opacity-20">
        {/* Removed location coordinates */}
        <div className="absolute bottom-1/4 left-24 text-[8px] font-mono tracking-widest animate-float" style={{ animationDelay: '4s' }}>+ + + +</div>
      </div>

      <Navbar 
        currentView={currentView} 
        onNavigate={navigate} 
        workLayout={workLayout}
        onToggleLayout={(l) => setWorkLayout(l)}
      />
      
      <div 
        key={`${viewKey}-${workLayout}`}
        className="flex-grow page-fade-enter relative z-20"
      >
        {renderView()}
      </div>

      <footer className="px-6 md:px-20 py-24 border-t border-neutral-900 bg-[#000000] mt-auto relative z-30 group/footer">
        <div className="max-w-[1800px] mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start opacity-50 hover:opacity-100 transition-opacity duration-700">
            
            {/* Copyright & Location */}
            <div className="md:col-span-4 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                © 2025 ADITYA DEY™
              </p>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                <p className="text-[9px] uppercase tracking-[0.4em]">Melbourne, Australia</p>
              </div>
            </div>

            {/* Social Links with Roll-up Animation */}
            <div className="md:col-span-4">
              <p className="text-[8px] uppercase tracking-[0.6em] text-neutral-600 mb-8">CONNECT_ARCHIVE</p>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-[11px] uppercase tracking-[0.4em] font-medium">
                <SocialLink href="https://www.linkedin.com/in/adityadey27/" label="LinkedIn" />
                <SocialLink href="https://github.com/adidey" label="GitHub" />
                <SocialLink href="https://www.behance.net/adityadey" label="Behance" />
                <SocialLink href="https://dribbble.com/Aditya_Dey" label="Dribbble" />
                <SocialLink href="https://www.instagram.com/_adityadey/" label="Instagram" />
              </div>
            </div>

            {/* Status & Availability */}
            <div className="md:col-span-4 md:text-right space-y-6">
              <div>
                <p className="text-[8px] uppercase tracking-[0.6em] text-neutral-600 mb-2">AVAILABILITY</p>
                <p className="text-2xl md:text-3xl font-bold font-mono tracking-tighter tabular-nums uppercase">
                  Open for Collaborations
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Micro-line */}
          <div className="mt-20 w-full h-[1px] bg-neutral-900 overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-600/30 -translate-x-full group-hover/footer:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
