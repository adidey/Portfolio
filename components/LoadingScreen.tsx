import React, { useState, useEffect } from 'react';

const SPECIALTIES = [
  'product design',
  'interaction design',
  'interface architecture',
  'audio engineering',
  'graphic design',
  'tech consulting',
];

const LoadingScreen: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!visible) return;
    
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SPECIALTIES.length);
        setFade(true);
      }, 300);
    }, 1000); // Faster cycle to show more specialties

    return () => clearInterval(interval);
  }, [visible]);

  // Handle animation completion
  const [isFinishing, setIsFinishing] = useState(false);
  useEffect(() => {
    if (!visible && !isFinishing) {
      // Just triggered to hide, but we might want to wait?
      // Actually, let's just make the animation itself take a fixed time.
    }
  }, [visible]);

  return (
    <div className={`fixed inset-0 z-[200] bg-[var(--bg)] flex flex-col items-center justify-center transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-[-10px]'}`}>
        <div className="relative w-24 h-32 mb-8 group">
          {/* Metaphorical Container (Jug-like shape) */}
          <div className="absolute inset-0 border-2 border-[var(--text)] rounded-b-2xl rounded-t-sm overflow-hidden opacity-20"></div>
          
          {/* Filling Liquid */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-[var(--accent)] transition-all duration-300 ease-out"
            style={{ 
              height: visible ? '100%' : '0%',
              transition: 'height 3s cubic-bezier(0.65, 0, 0.35, 1)',
              opacity: 0.6
            }}
          >
            {/* Liquid Surface/Fizz */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white opacity-40 animate-pulse" />
          </div>
          
          {/* Glass Reflections */}
          <div className="absolute top-2 left-2 w-1 h-8 bg-white opacity-10 rounded-full" />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-sm md:text-xl font-bold tracking-[0.2em] text-[var(--text)] uppercase whitespace-nowrap mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            ADITYA DEY <span className="opacity-30 mx-2">|</span> 
            <span className={`inline-block transition-all duration-300 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              {SPECIALTIES[index]}
            </span>
          </h1>
          
          {/* Secondary progress bar (subtle) */}
          <div className="w-48 h-[1px] bg-[var(--border)] overflow-hidden relative opacity-50">
            <div className="absolute inset-0 bg-[var(--accent)]" 
                 style={{ 
                   width: visible ? '100%' : '0%',
                   transition: 'width 3s linear'
                 }} />
          </div>
        </div>
    </div>
  );
};

export default LoadingScreen;
