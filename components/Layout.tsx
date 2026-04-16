import React from 'react';
import { LazyMotion, domMax } from 'motion/react';
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
    const isHome = currentPath === '/';

    return (
        <LazyMotion features={domMax}>
            <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] flex flex-col relative overflow-x-hidden bg-grain">

                {/* ── Global Background Effects ─────────────────────────────────── */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 designer-grid" />
                </div>

                <Navbar
                    currentPath={currentPath}
                    onNavigate={onNavigate}
                    theme="light"
                    onToggleTheme={() => { }}
                />

                {/* Standardized navbar clearance and container for all routes */}
                <main
                    className="relative z-10 pt-28 md:pt-40 pb-28 md:pb-40 max-w-[1400px] mx-auto px-6 md:px-10 w-full"
                >
                    {children}
                </main>

                <Footer />
            </div>
        </LazyMotion>
    );
};

export default Layout;
