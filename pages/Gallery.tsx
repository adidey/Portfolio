import React, { useState, useEffect, useRef, useMemo } from 'react';
import { POSTERS } from '../constants';

interface GalleryProps {
    layout: '01' | '02';
}

const Gallery: React.FC<GalleryProps> = ({ layout }) => {
    const [rotation, setRotation] = useState(0);
    const [radius, setRadius] = useState(1200);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) setRadius(600);
            else if (width < 1200) setRadius(900);
            else setRadius(1200);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const angleStep = 360 / POSTERS.length;
            if (e.key === 'ArrowRight') {
                setRotation(prev => prev - angleStep);
            } else if (e.key === 'ArrowLeft') {
                setRotation(prev => prev + angleStep);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Generate random stable offsets for a "scattered" spherical look
    const scatterOffsets = useMemo(() => {
        return POSTERS.map(() => ({
            y: (Math.random() - 0.5) * 120, // Vertical scattering
            z: (Math.random() - 0.5) * 150, // Depth scattering
            tilt: (Math.random() - 0.5) * 15, // random tilt
        }));
    }, []);

    return (
        <main className="relative min-h-[160vh] bg-black select-none flex flex-col pt-24">
            {/* Background Gradient Blurs */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[60vw] h-[60vw] bg-blue-600 rounded-full blur-[180px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[60vw] h-[60vw] bg-purple-600 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <header className="relative w-full z-20 pt-32 md:pt-48 px-6 md:px-12 pointer-events-none mb-32 md:mb-64">
                <div className="flex flex-col items-center text-center">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 mb-6 font-medium italic">Vol. 01 — Kinetic Gallery</p>
                    <h1 className="text-[14vw] md:text-[12vw] font-bold leading-none tracking-tighter text-white uppercase select-none flex flex-col items-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        <span>Poster</span>
                        <span className="md:-mt-10">Gallery</span>
                    </h1>
                    <div className="w-px h-24 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 mt-12" />

                    {layout === '01' && (
                        <div className="mt-12 animate-in fade-in duration-1000">
                            <p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] font-light flex items-center gap-4 justify-center">
                                <span className="px-2 py-1 border border-neutral-800 rounded bg-neutral-900/50 pointer-events-auto">←</span>
                                Navigate
                                <span className="px-2 py-1 border border-neutral-800 rounded bg-neutral-900/50 pointer-events-auto">→</span>
                            </p>
                        </div>
                    )}
                </div>
            </header>

            {/* 3D Scene / Grid Container */}
            <div className="relative w-full flex-grow px-6 md:px-12 pb-64">
                {layout === '01' ? (
                    /* layout 01: 3D Scene */
                    <div className="relative w-full flex items-center justify-center pt-40 md:pt-64" style={{ perspective: '3000px' }}>
                        <div
                            className="relative flex items-center justify-center transition-transform duration-1000 cubic-bezier-liquid"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: `rotateY(${rotation}deg)`
                            }}
                        >
                            {POSTERS.map((poster, idx) => (
                                <PosterCard
                                    key={poster.id}
                                    poster={poster}
                                    index={idx}
                                    total={POSTERS.length}
                                    radius={radius}
                                    scatter={scatterOffsets[idx]}
                                    globalRotation={rotation}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    /* layout 02: Grid View */
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 cubic-bezier-liquid">
                        {POSTERS.map((poster, idx) => (
                            <div key={poster.id} className="group relative aspect-[2/3] bg-neutral-900 overflow-hidden rounded-[2px] border border-white/5 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:border-white/10">
                                <img
                                    src={poster.imageUrl}
                                    alt={poster.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 block">Study No. {idx + 1}</span>
                                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-white italic" style={{ fontFamily: 'Satoshi, sans-serif' }}>{poster.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <footer className="absolute bottom-0 left-0 w-full z-20 pb-12 px-6 md:px-12 pointer-events-none">
                <div className="flex justify-between items-center opacity-40">
                    <p className="text-[8px] uppercase tracking-[0.6em] text-neutral-400">
                        Aditya Dey Visual Studies — {new Date().getFullYear()}
                    </p>
                    <div className="flex items-center gap-12">
                        <p className="text-[8px] uppercase tracking-[0.4em] text-neutral-500 font-mono">
                            Orbital Gallery v2.4
                        </p>
                        <p className="text-[8px] uppercase tracking-[0.4em] text-neutral-500 font-mono">
                            {POSTERS.length} Items Indexed
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
};

interface PosterCardProps {
    poster: any;
    index: number;
    total: number;
    radius: number;
    scatter: { y: number; z: number; tilt: number };
    globalRotation: number;
}

const PosterCard: React.FC<PosterCardProps> = ({ poster, index, total, radius, scatter, globalRotation }) => {
    const [isHovered, setIsHovered] = useState(false);
    const angleStep = 360 / total;
    const currentAngle = index * angleStep;

    // Calculate distance from center to flatten tilt/Y offset as it approaches the front
    const totalRotation = globalRotation + currentAngle;
    const normalizedRotation = ((totalRotation % 360) + 360) % 360;
    const distanceFromCenter = Math.min(normalizedRotation, 360 - normalizedRotation); // 0 to 180

    // Factor: 0 at center, 1 at 45 degrees or more
    const flattenFactor = Math.min(1, distanceFromCenter / 45);

    // Apply flattening to vertical scatter and tilt
    const displayY = scatter.y * flattenFactor;
    const displayTilt = scatter.tilt * flattenFactor;

    return (
        <div
            className="absolute transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
                transform: `rotateY(${currentAngle}deg) translateZ(${radius + scatter.z}px) translateY(${displayY}px) rotateZ(${displayTilt}deg)`,
                transformStyle: 'preserve-3d',
                width: '380px', // Increased from 320px
                height: '570px' // Increased from 480px (1.5 aspect ratio)
            }}
        >
            <div
                className="relative w-full h-full group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    transform: `scale(${isHovered ? 1.05 : 1})`,
                    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* Artistic Glass Frame - Removed white border */}
                <div className="relative w-full h-full bg-neutral-900 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-700">
                    <img
                        src={poster.imageUrl}
                        alt={poster.title}
                        className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-110 opacity-100' : 'opacity-80 grayscale-[0.3]'}`}
                        loading="lazy"
                    />

                    {/* Glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* Subtle Year Tag */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-[10px] font-mono text-white bg-black/80 px-2 py-1 backdrop-blur-md rounded border border-white/10">
                            {poster.year}
                        </span>
                    </div>

                    {/* Metadata UI */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 flex flex-col justify-end p-8 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-[9px] font-mono text-blue-400 mb-2 uppercase tracking-[0.5em]">System Gallery</span>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 italic" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {poster.title}
                        </h3>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-white/20" />
                            <p className="text-neutral-500 text-[8px] tracking-[0.4em] uppercase font-light">
                                Study No. {index + 1}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ambient occlusion shadow */}
                <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-blue-500/20 blur-3xl rounded-full transition-all duration-700 ${isHovered ? 'opacity-80 w-[90%]' : 'opacity-20'}`} />
            </div>
        </div>
    );
};

export default Gallery;
