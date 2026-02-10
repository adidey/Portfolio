
import React from 'react';
import { POSTERS } from '../constants';

const Posters: React.FC = () => {
  return (
    <main className="pt-48 px-6 md:px-12 pb-32 max-w-[1400px] mx-auto min-h-screen">
      <header className="mb-32">
        <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 mb-6">Visual Playground</p>
        <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tighter" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Poster <br /> Gallery<span className="text-neutral-800">.</span>
        </h1>
      </header>

      {/* Structured Poster Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {POSTERS.map((poster, idx) => (
          <div 
            key={poster.id} 
            className="group flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Poster Frame */}
            <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden border border-neutral-900 shadow-2xl transition-all duration-700 group-hover:border-neutral-700">
              <img 
                src={poster.imageUrl} 
                alt={poster.title}
                className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Subtle Frame Effect */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-black/5 mix-blend-overlay" />
              
              {/* Year Badge */}
              <div className="absolute top-4 right-4 text-[8px] font-mono text-white/40 group-hover:text-white transition-colors duration-500">
                {poster.year}
              </div>
            </div>

            {/* Poster Info */}
            <div className="px-1 flex justify-between items-baseline">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-white transition-colors duration-500" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {poster.title}
              </h3>
              <span className="text-[9px] text-neutral-800 font-mono">0{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-40 pt-12 border-t border-neutral-900 text-center">
        <p className="text-[9px] uppercase tracking-[0.6em] text-neutral-600">Explore more through the archive.</p>
      </footer>
    </main>
  );
};

export default Posters;
