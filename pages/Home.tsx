
import React, { useState, useEffect } from 'react';

interface HomeProps {
  onProjectClick: (id: string) => void;
  onNavigate: (view: any) => void;
}

const PROFESSIONS = ['graphic designer', 'product designer', 'web dev', 'consulting'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [speed, setSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const currentWord = PROFESSIONS[loopIndex % PROFESSIONS.length];

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(DELETING_SPEED);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(TYPING_SPEED);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, speed]);

  return (
    <main className="min-h-screen w-full flex flex-col justify-between bg-[#000000] px-6 md:px-20 py-24 md:py-32 relative overflow-hidden select-none">

      {/* Background Micro-elements - Hidden on small screens for performance */}
      <div className="absolute inset-0 pointer-events-none p-12 overflow-hidden z-0 hidden md:block">
        <div
          className="absolute top-[25%] right-[10%] border border-neutral-900 px-3 py-1.5 text-[7px] text-neutral-800 font-mono rotate-12 transition-all duration-1000 group-hover:rotate-0"
        >
          CORE_MANIFEST.JSON
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col justify-center max-w-6xl mt-auto mb-auto">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">

          {/* Top Label */}
          <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-neutral-500 mb-4 md:mb-6 font-medium">
            BASED IN MELBOURNE, AUSTRALIA
          </p>

          {/* Large Title - Fluid scaling */}
          <h1 className="text-[18vw] md:text-[12vw] font-black tracking-tighter leading-[0.85] md:leading-[0.8] text-white flex flex-wrap items-end" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            ADITYA <br className="hidden md:block" /> DEY<span className="inline-block w-[0.12em] h-[0.12em] bg-blue-600 rounded-full ml-2 mb-2 md:mb-4"></span>
          </h1>

          {/* Typing Animation Section - Stacked on mobile */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pt-6 md:pt-8">
            <span className="text-[9px] md:text-[12px] uppercase tracking-[0.4em] text-neutral-600 font-medium">CONCEPTUALLY</span>
            <span className="text-3xl md:text-7xl text-white font-bold tracking-tighter" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              {text}
              <span className="inline-block w-[2px] md:w-[3px] h-[0.8em] bg-blue-600 ml-1 md:ml-2 animate-pulse align-middle" />
            </span>
          </div>

          {/* Intro Paragraph with Left Line */}
          <div className="max-w-xl pt-12 md:pt-16 md:ml-2">
            <div className="border-l border-neutral-800 pl-6 md:pl-10 py-1 md:py-2">
              <p className="text-neutral-400 text-sm md:text-xl leading-relaxed font-light">
                Pioneering digital experiences that merge complex systems with pure aesthetics. Specializing in UI/UX Engineering and behavioral design strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-12 pt-12">
        <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-12 w-full md:w-auto">
          <button
            onClick={() => onNavigate('work')}
            className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold py-4 md:py-5 px-6 md:px-12 border border-white hover:bg-white hover:text-black transition-all duration-500 text-center"
          >
            VIEW WORK
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold py-4 md:py-5 text-neutral-500 hover:text-white transition-all duration-500 text-center"
          >
            CONTACT
          </button>
        </div>
      </div>

    </main>
  );
};

export default Home;
