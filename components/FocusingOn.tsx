import React, { useEffect, useRef, useState } from 'react';

const ROLES = [
  'PRODUCT DESIGNER',
  'INTERFACE ARCHITECT',
  'UX STRATEGIST',
  'BEHAVIORAL DESIGNER',
  'SYSTEM THINKER',
  'INTERACTION DESIGNER',
];

const FocusingOn: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % ROLES.length);
        setIsVisible(true);
      }, 500);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[inherit]">
      {/* Slow-drifting gradient orbs — Monopo-style */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: '60%',
            paddingBottom: '60%',
            top: '-20%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'driftA 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '50%',
            paddingBottom: '50%',
            bottom: '-20%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(99,60,180,0.25) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'driftB 16s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '40%',
            paddingBottom: '40%',
            top: '20%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(30,200,120,0.12) 0%, transparent 70%)',
            filter: 'blur(35px)',
            animation: 'driftC 20s ease-in-out infinite',
          }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-10 py-10">
        <p
          className="text-[9px] uppercase tracking-[0.5em] text-blue-500 font-bold mb-4"
          style={{ fontFamily: 'Satoshi, monospace' }}
        >
          FOCUSED_ON
        </p>
        <div className="flex items-center gap-3">
          <div className="w-5 h-[2px] bg-blue-500 flex-shrink-0" />
          <h2
            className="text-lg md:text-2xl font-black tracking-tight text-[var(--text)] leading-none"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
              fontFamily: 'Satoshi, sans-serif',
            }}
          >
            {ROLES[currentIndex]}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FocusingOn;
