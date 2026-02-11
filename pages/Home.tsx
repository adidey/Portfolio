
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
    <main className="h-screen w-full flex flex-col justify-between bg-[#000000] px-6 md:px-20 py-20 relative overflow-hidden select-none">
      
      {/* Background Micro-elements */}
      <div className="absolute inset-0 pointer-events-none p-12 overflow-hidden z-0">
        <div 
          className="absolute top-[25%] right-[10%] border border-neutral-900 px-3 py-1.5 text-[7px] text-neutral-800 font-mono rotate-12 transition-all duration-1000 group-hover:rotate-0"
        >
          CORE_MANIFEST.JSON
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col justify-center max-w-6xl mt-auto mb-auto">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          
          {/* Top Label (Moved closer to heading) */}
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-neutral-500 mb-6 font-medium">
            BASED IN MELBOURNE, AUSTRALIA
          </p>

          {/* Large Title */}
          <h1 className="text-[14vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] text-white flex items-end" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            ADITYA <br /> DEY<span className="inline-block w-[0.15em] h-[0.15em] bg-blue-600 rounded-full ml-2 mb-4"></span>
          </h1>

          {/* Typing Animation Section */}
          <div className="flex items-center gap-8 pt-8">
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-neutral-600 font-medium">CONCEPTUALLY</span>
            <span className="text-4xl md:text-7xl text-white font-bold tracking-tighter" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              {text}
              <span className="inline-block w-[3px] h-[0.8em] bg-blue-600 ml-2 animate-pulse align-middle" />
            </span>
          </div>

          {/* Intro Paragraph with Left Line */}
          <div className="max-w-xl pt-16 ml-2">
            <div className="border-l border-neutral-800 pl-10 py-2">
              <p className="text-neutral-400 text-sm md:text-xl leading-relaxed font-light">
                Pioneering digital experiences that merge complex systems with pure aesthetics. Specializing in UI/UX Engineering and behavioral design strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => onNavigate('work')}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold py-5 px-12 border border-white hover:bg-white hover:text-black transition-all duration-500"
          >
            VIEW WORK
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold py-5 text-neutral-500 hover:text-white transition-all duration-500"
          >
            CONTACT
          </button>
        </div>
      </div>

    </main>
  );
};

export default Home;
