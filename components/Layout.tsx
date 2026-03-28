import React, { useState, useEffect } from 'react';
import Navbar, { PageView } from './Navbar';
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
    children
}) => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        const saved = localStorage.getItem('portfolio-theme');
        return (saved as 'dark' | 'light') || 'dark';
    });

    useEffect(() => {
        document.documentElement.classList.toggle('light', theme === 'light');
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    const isHome = currentPath === '/';

    return (
        <div className={`min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] flex flex-col relative overflow-x-hidden ${theme === 'light' ? 'light' : ''}`}>
            {/* Subtle cursor-following glow — only on non-home pages */}
            {!isHome && (
                <CustomCursor />
            )}

            <Navbar
                currentPath={currentPath}
                onNavigate={onNavigate}
                workLayout={workLayout}
                onToggleLayout={onToggleLayout}
                theme={theme}
                onToggleTheme={toggleTheme}
            />

            {/* Add top padding on non-home pages for navbar clearance */}
            <main
                key={currentPath}
                className={`flex-grow relative z-20 ${isHome ? '' : 'pt-24 md:pt-32'}`}
            >
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
