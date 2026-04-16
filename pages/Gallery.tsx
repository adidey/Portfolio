import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CarouselItem } from '../types';
import { getDribbbleShots } from '../services/dribbbleService';
import { m, LazyMotion, domMax } from 'motion/react';

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
                staggerChildren: 0.1
            }
        }
    };

    return (
        <LazyMotion features={domMax}>
            <main className="relative">
                <Helmet>
                    <title>Posters — Aditya Dey</title>
                    <meta name="description" content="A gallery of design experiments, posters, and visual studies." />
                </Helmet>

                {/* Standardized Z-Pattern Header */}
                <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 pt-8 md:pt-12 pb-16 md:pb-24 border-b border-[var(--border)] items-start">
                    <div className="md:col-span-8 flex flex-col gap-4">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] font-bold">Experimental</p>
                        <h1
                            className="font-black text-[var(--ink)] uppercase tracking-tight leading-[0.85]"
                            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
                        >
                            Posters
                        </h1>
                    </div>
                    <div className="md:col-span-4 md:text-right flex flex-col items-start md:items-end pt-1">
                        <p className="text-[13px] md:text-[15px] leading-relaxed text-[var(--muted)] max-w-xs font-medium">
                            A gallery of design experiments, posters, and visual studies exploring form, color, and typography.
                        </p>
                        <div className="mt-8 flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] rounded-full">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[var(--ink)]">Vol. 101 — {new Date().getFullYear()}</span>
                        </div>
                    </div>
                </header>

                <div className="py-12 md:py-20">
                    {isLoading ? (
                        <div className="min-h-[40vh] flex items-center justify-center">
                            <p className="text-[var(--muted)] text-[10px] uppercase tracking-[0.5em] animate-pulse">Loading Studies...</p>
                        </div>
                    ) : items.length === 0 ? (
                        <div className="min-h-[40vh] flex items-center justify-center">
                            <p className="text-[var(--muted)] text-[10px] uppercase tracking-[0.5em]">No experiments found</p>
                        </div>
                    ) : (
                        <m.div 
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
                        >
                            {items.map((item, idx) => (
                                <PosterCard key={item.id} poster={item} index={idx} />
                            ))}
                        </m.div>
                    )}
                </div>
            </main>
        </LazyMotion>
    );
};

const PosterCard: React.FC<{ poster: CarouselItem; index: number }> = ({ poster, index }) => {
    const cardVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    return (
        <m.div variants={cardVariants} className="group flex flex-col gap-4">
            <a 
                href={poster.link || '#'} 
                target="_blank" 
                rel="noreferrer"
                className="block aspect-[3/4] overflow-hidden bg-[#e5e5e5] border border-[var(--border)] relative"
            >
                <img
                    src={poster.imageUrl}
                    alt={poster.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
            </a>
            
            <div className="flex justify-between items-start pt-1">
                <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-widest text-[var(--muted)]">Vol. {index + 101} — {poster.year}</p>
                    <h3 className="text-[14px] font-black uppercase tracking-tight text-[var(--ink)]">
                        {poster.title}
                    </h3>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--ink)] opacity-30">
                    Study
                </span>
            </div>
        </m.div>
    );
};

export default Gallery;
