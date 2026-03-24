import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar, { PageView } from './Navbar';
import LoadingScreen from './LoadingScreen';
import CustomCursor from './CustomCursor';
import Footer from './Footer';

interface LayoutProps {
    currentPath: string;
    onNavigate: (view: PageView) => void;
    workLayout: '01' | '02';
    onToggleLayout: (layout: '01' | '02') => void;
    isLoading: boolean;
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    currentPath,
    onNavigate,
    workLayout,
    onToggleLayout,
    isLoading,
    children
}) => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        const saved = localStorage.getItem('portfolio-theme');
        return (saved as 'dark' | 'light') || 'dark';
    });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState<{ x: number, y: number, id: number, timestamp: number }[]>([]);

    useEffect(() => {
        document.documentElement.classList.toggle('light', theme === 'light');
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const newPos = { x: e.clientX, y: e.clientY };
            setMousePos(newPos);
            
            setTrail(prev => {
                const now = Date.now();
                // Add new point, keep last 15 points for better performance
                const newTrail = [...prev, { ...newPos, id: now, timestamp: now }];
                return newTrail.slice(-15);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Cleanup old trail points
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            setTrail(prev => prev.filter(p => now - p.timestamp < 400));
        }, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] flex flex-col relative overflow-x-hidden ${theme === 'light' ? 'light' : ''}`}>
            <LoadingScreen visible={isLoading} />
            <CustomCursor />
            
            {/* "Eclipse" Aesthetic Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[var(--bg)] transition-colors duration-500">
                
                {/* 1. Base Scanline/Ring Texture (Ultra subtle in light mode) */}
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08] mix-blend-overlay z-[2] pointer-events-none" 
                     style={{ 
                         backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, var(--text) 2px, var(--text) 3px)`,
                         backgroundSize: '100% 4px'
                     }}></div>

                {/* 2. Heavy Grain Overlays */}
                <div className="absolute inset-0 opacity-[0.18] mix-blend-overlay z-[5] pointer-events-none" 
                     style={{ 
                         backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                         filter: 'contrast(250%) brightness(100%) saturate(150%)',
                         backgroundSize: '180px'
                     }}></div>
                <div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light z-[4] pointer-events-none" 
                     style={{ 
                         backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', 
                         backgroundSize: '120px',
                         filter: 'contrast(200%)'
                     }}></div>
                
                {/* 3. Dissipating Cursor Trail (Eclipse Flares) */}
                <div className="absolute inset-0 z-[3]">
                    {trail.map((point, i) => {
                        const age = Date.now() - point.timestamp;
                        const opacity = Math.max(0, 1 - age / 400);
                        const scale = 1 + (age / 400) * 0.3;
                        const blur = 15 + (age / 400) * 30;
                        
                        return (
                            <div 
                                key={point.id + i}
                                className="absolute rounded-full pointer-events-none transition-opacity duration-150"
                                style={{
                                    left: point.x,
                                    top: point.y,
                                    width: '10vw',
                                    height: '10vw',
                                    marginLeft: '-5vw',
                                    marginTop: '-5vw',
                                    opacity: opacity * (theme === 'light' ? 0.2 : 0.4),
                                    transform: `scale(${scale})`,
                                    filter: `blur(${blur}px)`,
                                    background: theme === 'light'
                                        ? 'radial-gradient(circle, rgba(17, 17, 17, 0.15) 0%, rgba(17, 17, 17, 0.05) 40%, transparent 70%)'
                                        : 'radial-gradient(circle, #D6CDC0 0%, #A09D95 20%, #4B0000 50%, transparent 100%)',
                                    mixBlendMode: theme === 'light' ? 'multiply' : 'screen'
                                }}
                            />
                        );
                    })}
                </div>

                {/* 4. Contrast Layers */}
                {theme === 'light' ? (
                    /* Subtle grain texture lift */
                    <div className="absolute inset-0 bg-white/10 z-[1]" />
                ) : (
                    /* Deep grounding shadow for the Charcoal background */
                    <div className="absolute inset-0 bg-black/50 z-[1]" />
                )}
            </div>

            <Navbar
                currentPath={currentPath}
                onNavigate={onNavigate}
                workLayout={workLayout}
                onToggleLayout={onToggleLayout}
                theme={theme}
                onToggleTheme={toggleTheme}
            />

            <main
                key={currentPath}
                className="flex-grow page-fade-enter relative z-20"
            >
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
