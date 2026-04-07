import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import BehanceSection from '../components/BehanceSection';
import { m, LazyMotion, domMax } from 'framer-motion';

interface WorkProps {
  onProjectClick?: (id: string) => void;
}

import ProjectCard from '../components/ProjectCard';

const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const renderGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-24 mb-32">
      {PROJECTS.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onClick={() => onProjectClick(project.id)} 
        />
      ))}
    </div>
  );

  return (
    <LazyMotion features={domMax}>
      <main className="relative min-h-screen pt-24 pb-32" ref={containerRef}>
        {/* Designer Canvas Decor */}
        <div className="fixed inset-0 designer-grid opacity-30 pointer-events-none z-0" />
        
        <Helmet>
          <title>Work — Aditya Dey</title>
          <meta name="description" content="A selection of product and UX design projects focusing on interaction design, interface architecture, and digital experiences." />
          <meta property="og:title" content="Work — Aditya Dey" />
          <meta property="og:description" content="A selection of product and UX design projects focusing on interaction design, interface architecture, and digital experiences." />
          <meta property="og:image" content="/og-image.png" />
        </Helmet>
        
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 flex flex-col items-center">
            <h1
              className="text-[14vw] md:text-[10vw] font-bold leading-none tracking-tighter text-[var(--text)] select-none uppercase"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Work
            </h1>
            {/* Signature Vertical Blue Divider */}
            <div className="w-px h-24 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 mt-12" />
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 cubic-bezier-liquid">
            {renderGrid()}
          </div>

          {/* Behance Section Hidden (Code Preserved) */}
          {/* <BehanceSection username="adityadey" layout="02" /> */}
        </div>
      </main>
    </LazyMotion>
  );
};

export default Work;
