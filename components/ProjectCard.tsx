
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project.id)}
      className="group relative cursor-pointer overflow-hidden aspect-[3/4]"
    >
      <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
      <img 
        src={project.thumbnail} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-xs uppercase tracking-[0.2em] mb-2 opacity-80">{project.category}</p>
          <h3 className="text-3xl font-serif italic">{project.title}</h3>
        </div>
      </div>

      {/* Static Info for Mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-[10px] uppercase tracking-widest mb-1">{project.category}</p>
        <h3 className="text-xl font-serif italic">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
