import React, { useState, useEffect } from 'react';
import Navbar, { PageView } from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    currentPath: string;
    onNavigate: (view: PageView) => void;
    isLoading: boolean;
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    currentPath,
    onNavigate,
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
            {/* Global Design Grid (Simplified for Designer Canvas) */}
            <div className="fixed inset-0 pointer-events-none z-0 designer-grid opacity-20" />

            <Navbar
                currentPath={currentPath}
                onNavigate={onNavigate}
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
