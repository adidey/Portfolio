import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { CarouselItem } from '../types';
import { getDribbbleShots } from '../services/dribbbleService';
import { m, LazyMotion, domMax } from 'framer-motion';

const Gallery: React.FC = () => {
    const [items, setItems] = useState<CarouselItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true);
            try {
                const shots = await getDribbbleShots();
                setItems(shots);
            } catch (e) {
                console.error('Gallery: Fetch failed', e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItems();
    }, []);

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 30, scale: 0.95 },
        animate: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
        }
    };

    return (
        <main className="relative min-h-screen pt-24 pb-32 flex flex-col items-center">
            <Helmet>
                <title>Gallery — Aditya Dey</title>
                <meta name="description" content="A gallery of design experiments, posters, and visual studies." />
            </Helmet>

            {/* Designer Canvas Decor */}
            <div className="fixed inset-0 designer-grid opacity-30 pointer-events-none z-0" />

            <header className="relative w-full z-10 px-6 md:px-12 flex flex-col items-center text-center">
                <h1 
                    className="text-[14vw] md:text-[10vw] font-black leading-none tracking-tighter text-[var(--text)] select-none uppercase"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                    Posters
                </h1>
                {/* Signature Vertical Blue Divider */}
                <div className="w-px h-24 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 mt-12 mb-20" />
            </header>

            <div className="max-w-[1600px] w-full px-6 md:px-12 relative z-10">
                {isLoading ? (
                    <div className="min-h-[40vh] flex items-center justify-center">
                        <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-[0.5em] animate-pulse">Loading Studies...</p>
                    </div>
                ) : items.length === 0 ? (
                    <div className="min-h-[40vh] flex items-center justify-center">
                        <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-[0.5em]">No experiments found</p>
                    </div>
                ) : (
                    <LazyMotion features={domMax}>
                        <m.div 
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                        >
                            {items.map((item, idx) => (
                                <m.div key={item.id} variants={itemVariants}>
                                    <PosterCard poster={item} index={idx} />
                                </m.div>
                            ))}
                        </m.div>
                    </LazyMotion>
                )}
            </div>
        </main>
    );
};

interface PosterCardProps {
    poster: CarouselItem;
    index: number;
}

const PosterCard: React.FC<PosterCardProps> = ({ poster, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const Content = (
        <div
            className="group relative aspect-[3/4] overflow-hidden rounded-[40px] transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                backgroundColor: 'var(--surface)',
                boxShadow: isHovered ? '0 40px 80px -15px rgba(0,0,0,0.5)' : '0 20px 40px -10px rgba(0,0,0,0.2)'
            }}
        >
            {/* Project Image */}
            <div className="absolute inset-0 overflow-hidden">
                <m.img
                    src={poster.imageUrl}
                    alt={poster.title}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Subtle Glare/Elevation Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Bottom Info Section */}
            <div className={`absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/90 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
                <span className="text-[9px] font-mono text-[var(--accent)] mb-2 uppercase tracking-[0.5em] block">
                    {poster.source === 'dribbble' ? 'Dribbble Study' : 'Experiment'}
                </span>
                <h3 
                    className="text-2xl font-black text-[var(--text)] uppercase tracking-tighter mb-4 italic leading-none"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                    {poster.title}
                </h3>
                <div className="flex justify-between items-center border-t border-[var(--border)] pt-4">
                     <p className="text-[var(--text-muted)] text-[8px] tracking-[0.4em] uppercase font-light">
                        Vol {index + 101}
                    </p>
                    <span className="text-[10px] font-mono opacity-40">{poster.year}</span>
                </div>
            </div>
        </div>
    );

    return poster.link ? (
        <a href={poster.link} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-[40px]">
            {Content}
        </a>
    ) : Content;
};

export default Gallery;
