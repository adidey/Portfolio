
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Share, 
  Sidebar, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  List, 
  Trash2, 
  SquarePen, 
  Palette,
  MoreHorizontal
} from 'lucide-react';

interface MacWindowProps {
  children: React.ReactNode;
  title?: string;
  category?: string;
  year?: string;
  className?: string;
}

const MacWindow: React.FC<MacWindowProps> = ({ children, title, category, year, className = "" }) => {
  return (
    <div className={`flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden shadow-2xl transition-all duration-700 ${className}`}>
      {/* macOS Title Bar */}
      <div className="h-12 px-5 flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg)]/10 backdrop-blur-xl z-20 select-none">
        {/* Traffic Lights */}
        <div className="flex gap-2 w-[80px]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>

        {/* Toolbar Icons (Simplified macOS Finder style) */}
        <div className="hidden md:flex items-center gap-6 text-[var(--text-muted)]">
          <div className="flex items-center gap-4 border-r border-[var(--border)] pr-6">
            <Sidebar size={14} className="hover:text-[var(--text)] cursor-pointer transition-colors" />
            <div className="flex gap-2">
              <ChevronLeft size={14} className="opacity-30" />
              <ChevronRight size={14} className="opacity-30" />
            </div>
          </div>
          
          <div className="flex items-center gap-4 border-r border-[var(--border)] pr-6">
            <div className="flex items-center gap-1 bg-[var(--bg)]/20 px-2 py-0.5 rounded border border-[var(--border)]/50">
              <LayoutGrid size={12} className="text-[var(--accent)]" />
              <div className="w-px h-3 bg-[var(--border)] mx-1" />
              <List size={12} />
            </div>
            <Trash2 size={14} className="hover:text-[var(--text)] cursor-pointer transition-colors" />
            <SquarePen size={14} className="hover:text-[var(--text)] cursor-pointer transition-colors" />
          </div>

          <div className="flex items-center gap-4">
            <Palette size={14} className="hover:text-[var(--text)] cursor-pointer transition-colors" />
            <Share size={14} className="hover:text-[var(--text)] cursor-pointer transition-colors" />
            <MoreHorizontal size={14} className="hover:text-[var(--text)] cursor-pointer transition-colors" />
            <div className="relative">
              <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2 opacity-50" />
              <div className="w-32 h-6 bg-[var(--bg)]/20 rounded border border-[var(--border)]/50" />
            </div>
          </div>
        </div>

        {/* Title / Meta Mobile */}
        <div className="md:hidden flex flex-col items-end">
           <span className="text-[9px] font-bold uppercase tracking-tight text-[var(--text)]">{title}</span>
           <span className="text-[7px] font-mono text-[var(--text-muted)]">{category}</span>
        </div>

        {/* Right Spacer for Desktop */}
         <div className="hidden md:block w-[80px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative flex-grow h-full">
        {children}
      </div>
    </div>
  );
};

export default MacWindow;
