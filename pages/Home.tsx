
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface HomeProps {
  onProjectClick?: (id: string) => void;
  onNavigate?: (view: any) => void;
}

const PROFESSIONS = [
  'interaction design',
  'interface architecture',
  'product designing',
  'audio engineering',
  'graphic design',
  'tech consulting',
];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;

const Home: React.FC<HomeProps> = () => {
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
      <Helmet>
        <title>Aditya Dey | Product & UX Designer</title>
        <meta name="description" content="Melbourne-based Product & UX Designer specialising in UI/UX engineering and behavioral design strategy. HARMAN International, EY, Melbourne BioInnovation." />
        <meta property="og:title" content="Aditya Dey | Product & UX Designer" />
        <meta property="og:description" content="Melbourne-based Product & UX Designer specialising in UI/UX engineering and behavioral design strategy. HARMAN International, EY, Melbourne BioInnovation." />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>

      {/* Background Micro-elements */}
      <div className="absolute inset-0 pointer-events-none p-12 overflow-hidden z-0 hidden md:block">
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col justify-center max-w-6xl mt-auto mb-auto">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">

          {/* Top Label */}
          <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-neutral-500 mb-4 md:mb-6 font-medium">
            DESIGNING FROM MELBOURNE, AUSTRALIA
          </p>

          {/* Large Title - Fluid scaling */}
          <h1 className="text-[18vw] md:text-[12vw] font-black tracking-tighter leading-[0.85] md:leading-[0.8] text-white flex flex-wrap items-end" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            ADITYA <br className="hidden md:block" /> DEY<span className="inline-block w-[0.12em] h-[0.12em] bg-blue-600 rounded-full ml-2 mb-2 md:mb-4"></span>
          </h1>

          {/* Typing Animation Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pt-6 md:pt-8">
            <span className="text-[9px] md:text-[12px] uppercase tracking-[0.4em] text-neutral-600 font-medium">FOCUSED ON</span>
            <span className="text-3xl md:text-7xl text-white font-bold tracking-tighter" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              {text}
              <span className="inline-block w-[2px] md:w-[3px] h-[0.8em] bg-blue-600 ml-1 md:ml-2 animate-pulse align-middle" />
            </span>
          </div>

          {/* Description & CTAs - Refined copy & Linear flow */}
          <div className="max-w-2xl pt-12 md:pt-16 md:ml-2">
            <div className="border-l border-neutral-800 pl-6 md:pl-10 py-1 md:py-2 mb-10">
              <p className="text-neutral-400 text-sm md:text-xl leading-relaxed font-light">
                I design structured digital experiences where engineering precision meets human intuition. From complex product systems to scalable interfaces, I focus on clarity, performance, and seamless interaction.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 pl-6 md:pl-10">
              <Link
                to="/work"
                className="w-full md:w-auto text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-bold py-4 md:py-5 px-8 md:px-12 border border-white hover:bg-white hover:text-black transition-all duration-500 text-center relative group overflow-hidden"
              >
                <span className="relative z-10">VIEW WORK</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <Link
                to="/contact"
                className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-neutral-500 hover:text-white transition-all duration-500"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row - Cleaned up */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-12 pt-12">
        {/* Placeholder or empty div to maintain layout if needed, or just remove if justified */}
      </div>

    </main>
  );
};

export default Home;
