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
        
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-20 flex flex-col items-center">
            <h1
              className="text-[14vw] md:text-[10vw] font-black leading-none tracking-tighter text-[var(--text)] select-none uppercase"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Work
            </h1>
            {/* Signature Vertical Blue Divider */}
            <div className="w-px h-24 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 mt-12" />
          </div>

          <m.div 
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-10 md:gap-y-20 mb-32"
          >
            {PROJECTS.map((project) => (
              <m.div
                key={project.id}
                variants={{
                  initial: { opacity: 0, y: 40, scale: 0.98 },
                  animate: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] } 
                  }
                }}
              >
                <ProjectCard 
                  project={project} 
                  onClick={() => onProjectClick(project.id)} 
                />
              </m.div>
            ))}
          </m.div>

          {/* Behance Section Hidden (Code Preserved) */}
          {/* <BehanceSection username="adityadey" layout="02" /> */}
        </div>
      </main>
    </LazyMotion>
  );
};

export default Work;
