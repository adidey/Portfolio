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
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black flex flex-col relative overflow-x-hidden">
            <LoadingScreen visible={isLoading} />
            <CustomCursor />

            {/* Dynamic Mesh Gradients */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.12] overflow-hidden">
                <div
                    className="absolute w-[120vw] h-[120vh] -top-[10%] -left-[10%] blur-[120px] bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-transparent animate-slow-rotate"
                    style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}
                />
                <div
                    className="absolute w-[80vw] h-[80vh] top-[20%] left-[40%] blur-[100px] bg-blue-500/10 rounded-full"
                    style={{ transform: `translate(${mousePos.x * -0.05}px, ${mousePos.y * -0.05}px)` }}
                />
            </div>

            <Navbar
                currentPath={currentPath}
                onNavigate={onNavigate}
                workLayout={workLayout}
                onToggleLayout={onToggleLayout}
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
