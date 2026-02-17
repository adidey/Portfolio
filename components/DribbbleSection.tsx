import React, { useEffect, useState, useRef } from 'react';
import { getDribbbleShots } from '../services/dribbbleService';
import { CarouselItem } from '../types';

interface DribbbleSectionProps {
    layout?: '01' | '02';
}

const SKELETON_COUNT = 4;

const DribbbleSection: React.FC<DribbbleSectionProps> = ({ layout = '01' }) => {
    const [shots, setShots] = useState<CarouselItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hasIntersected, setHasIntersected] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHasIntersected(true);
                        observer.disconnect();
                    }
                });
            },
            {
                root: null,
                threshold: 0.1, // Start loading slightly earlier
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasIntersected) return;

        let cancelled = false;

        const load = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await getDribbbleShots();
                if (!cancelled) {
                    if (data.length === 0) {
                        setError('No Dribbble shots available right now.');
                    } else {
                        setShots(data);
                    }
                }
            } catch (e) {
                if (!cancelled) {
                    setError('Unable to load Dribbble shots at the moment.');
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        };

        load();

        return () => {
            cancelled = true;
        };
    }, [hasIntersected]);

    const showContent = !isLoading && !error && shots.length > 0;

    const DribbbleListItem: React.FC<{ shot: CarouselItem; index: number }> = ({ shot, index }) => {
        const itemRef = useRef<HTMLAnchorElement>(null);
        const [focus, setFocus] = useState(0);
        const [clicked, setClicked] = useState(false);

        useEffect(() => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const rect = entry.boundingClientRect;
                        const viewportCenter = window.innerHeight / 2;
                        const itemCenter = rect.top + rect.height / 2;
                        const dist = Math.abs(viewportCenter - itemCenter);
                        const focusZone = window.innerHeight * 0.6;
                        const factor = Math.max(0, 1 - dist / focusZone);
                        setFocus(Math.pow(factor, 2));
                    }
                });
            }, observerOptions);

            if (itemRef.current) observer.observe(itemRef.current);

            const handleScroll = () => {
                if (!itemRef.current) return;
                const rect = itemRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const viewportCenter = window.innerHeight / 2;
                    const itemCenter = rect.top + rect.height / 2;
                    const dist = Math.abs(viewportCenter - itemCenter);
                    const focusZone = window.innerHeight * 0.6;
                    const factor = Math.max(0, 1 - dist / focusZone);
                    setFocus(Math.pow(factor, 2));
                }
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleScroll);

            return () => {
                observer.disconnect();
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            };
        }, []);

        const height = isMobile ? `${280 + focus * 150}px` : `${160 + focus * 450}px`;

        const handleClick = () => {
            setClicked(true);
            setTimeout(() => setClicked(false), 400);
        };

        return (
            <a
                ref={itemRef}
                href={shot.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className={`group relative flex flex-col w-full border-b border-neutral-900 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-neutral-900/30 ${clicked ? 'bg-white/[0.05]' : ''}`}
                style={{ height }}
            >
                {/* Index Label */}
                <div className="absolute top-4 left-6 md:top-5 md:left-8 z-30 pointer-events-none">
                    <span
                        className="text-[9px] md:text-[10px] font-bold transition-all duration-500"
                        style={{
                            fontFamily: 'Satoshi, sans-serif',
                            opacity: 0.2 + focus * 0.8,
                            color: focus > 0.4 ? '#ea4c89' : '#444444', // Dribbble pink accent
                        }}
                    >
                        0{index + 1}
                    </span>
                </div>

                {/* Content Flex Container */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full h-full px-6 md:px-20 py-12 md:py-0 relative z-20 pointer-events-none">
                    {/* Title Section */}
                    <div className="w-full md:w-[30%] text-left flex items-center md:h-full">
                        <h3
                            className="text-2xl md:text-5xl font-bold tracking-tighter transition-all duration-700"
                            style={{
                                fontFamily: 'Satoshi, sans-serif',
                                color: focus > 0.2 ? '#ffffff' : '#333333',
                                transform: `translateY(${(1 - focus) * 10}px)`,
                                opacity: 0.3 + focus * 0.7,
                            }}
                        >
                            {shot.title}
                        </h3>
                    </div>

                    {/* Image Section */}
                    <div
                        className="w-full md:w-[40%] flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] my-6 md:my-0"
                        style={{
                            opacity: focus,
                            transform: `translateY(${(1 - focus) * 40}px)`,
                        }}
                    >
                        <div
                            className="relative w-full max-w-[420px] aspect-[4/3] overflow-hidden bg-neutral-900/40 rounded-[2px] shadow-2xl border border-white/5"
                            style={{
                                clipPath: isMobile ? 'none' : `inset(${(1 - focus) * 100}% 0 0 0)`,
                            }}
                        >
                            {shot.imageUrl ? (
                                <img
                                    src={shot.imageUrl}
                                    alt={shot.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-all duration-1000 md:group-hover:scale-105" // Removed grayscale to show Dribbble colors
                                />
                            ) : (
                                <div className="w-full h-full bg-neutral-800" />
                            )}
                            <div className="absolute inset-0 bg-black/20 md:hidden" />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="w-full md:w-[30%] text-left md:text-right flex items-center md:justify-end md:h-full">
                        <p
                            className="text-[9px] md:text-[12px] font-medium leading-relaxed max-w-[260px] transition-all duration-700"
                            style={{
                                color: focus > 0.4 ? '#999999' : '#333333',
                                opacity: focus,
                                transform: `translateY(${(1 - focus) * 10}px)`,
                            }}
                        >
                            Dribbble Shot
                        </p>
                    </div>
                </div>

                {/* Selection Highlight */}
                <div
                    className={`absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none ${clicked ? 'opacity-5' : 'opacity-0'
                        }`}
                />
            </a>
        );
    };

    return (
        <section
            ref={containerRef}
            className="mt-32 md:mt-40 border-t border-neutral-900 pt-16 md:pt-24"
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                <div>
                    <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-neutral-500 mb-3">
                        Selected Work from
                    </p>
                    <h2
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                        Dribbble
                    </h2>
                </div>
                <a
                    href="https://dribbble.com/Aditya_Dey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-neutral-500 hover:text-[#ea4c89] transition-colors duration-300"
                >
                    View full profile
                </a>
            </div>

            {/* Skeleton loader */}
            {isLoading && (
                layout === '01' ? (
                    <div className="relative border-t border-neutral-900 w-full mb-8">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="relative flex flex-col w-full border-b border-neutral-900 overflow-hidden transition-all duration-700 bg-neutral-900/10"
                                style={{ height: isMobile ? '320px' : '240px' }}
                            >
                                <div className="absolute inset-0 bg-neutral-900/20 animate-pulse" />
                                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full h-full px-6 md:px-20 py-12 md:py-0">
                                    <div className="w-full md:w-[30%]">
                                        <div className="h-6 md:h-10 w-2/3 bg-neutral-800 rounded animate-pulse" />
                                    </div>
                                    <div className="w-full md:w-[40%] my-6 md:my-0">
                                        <div className="aspect-[4/3] bg-neutral-800 rounded-[2px] border border-white/5 animate-pulse" />
                                    </div>
                                    <div className="w-full md:w-[30%] md:flex md:justify-end">
                                        <div className="h-4 w-full md:w-2/3 bg-neutral-800 rounded animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
                        {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                            <div key={idx} className="group flex flex-col gap-6 md:gap-8">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/5">
                                    <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                                </div>
                                <div className="space-y-3 px-1">
                                    <div className="h-3 w-24 bg-neutral-800 rounded-full animate-pulse" />
                                    <div className="h-6 w-3/4 bg-neutral-800 rounded animate-pulse" />
                                    <div className="h-3 w-full bg-neutral-900 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                )
            )}

            {/* Error / fallback */}
            {!isLoading && error && (
                <div className="mt-6 text-sm md:text-base text-neutral-500">
                    {error}
                </div>
            )}

            {/* Projects grid */}
            {showContent && (
                layout === '01' ? (
                    <div className="relative border-t border-neutral-900 w-full mb-32 md:mb-40">
                        {shots.map((shot, index) => (
                            <DribbbleListItem key={shot.id} shot={shot} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
                        {shots.map((shot) => (
                            <a
                                key={shot.id}
                                href={shot.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group cursor-pointer flex flex-col gap-6 md:gap-10"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/5 shadow-lg">
                                    {shot.imageUrl ? (
                                        <img
                                            src={shot.imageUrl}
                                            alt={shot.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-neutral-800" />
                                    )}
                                    <div className="absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none opacity-0 group-hover:opacity-5" />
                                </div>
                                <div className="flex flex-col gap-3 px-2">
                                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-neutral-600 group-hover:text-[#ea4c89] transition-colors duration-300">
                                        Dribbble Shot
                                    </p>
                                    <h3
                                        className="text-2xl md:text-4xl font-bold tracking-tighter text-neutral-200 group-hover:text-white transition-all duration-300 md:group-hover:translate-x-2"
                                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                                    >
                                        {shot.title}
                                    </h3>
                                </div>
                            </a>
                        ))}
                    </div>
                )
            )}
        </section>
    );
};

export default DribbbleSection;
