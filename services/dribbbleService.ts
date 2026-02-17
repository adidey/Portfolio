import { DribbbleShot, CarouselItem } from '../types';

const CACHE_KEY = 'dribbble_shots_cache_v1';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

interface CachePayload {
    shots: CarouselItem[];
    timestamp: number;
}

/**
 * Fetches Dribbble shots and converts them to CarouselItem format
 * Uses localStorage caching with 1 hour TTL
 * Falls back to empty array on error
 */
export async function getDribbbleShots(): Promise<CarouselItem[]> {
    // Check localStorage cache first (client-side only)
    if (typeof window !== 'undefined') {
        try {
            const cachedRaw = window.localStorage.getItem(CACHE_KEY);
            if (cachedRaw) {
                const cached: CachePayload = JSON.parse(cachedRaw);
                if (Date.now() - cached.timestamp < CACHE_TTL_MS) {
                    return cached.shots;
                }
            }
        } catch {
            // Ignore cache errors
        }
    }

    let carouselItems: CarouselItem[] = [];

    // Fetch from server-side API proxy
    try {
        const apiUrl = '/api/dribbble';
        const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error(`Dribbble API proxy error: ${res.status}`);
        }
        const data = await res.json();

        if (data && Array.isArray(data.shots)) {
            // Map RSS items to CarouselItem format
            carouselItems = data.shots
                .map((shot: any): CarouselItem => {
                    return {
                        id: shot.id || `dribbble-${Math.random().toString(36).substr(2, 9)}`,
                        title: shot.title,
                        imageUrl: shot.imageUrl,
                        year: new Date().getFullYear().toString(),
                        link: shot.link,
                        source: 'dribbble',
                    };
                });
        }
    } catch (error) {
        console.warn('Failed to fetch Dribbble shots:', error);
        // Return empty array on failure
    }

    // Persist to cache
    if (typeof window !== 'undefined') {
        try {
            const payload: CachePayload = {
                shots: carouselItems,
                timestamp: Date.now(),
            };
            window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
        } catch {
            // Ignore cache write errors
        }
    }

    return carouselItems;
}
