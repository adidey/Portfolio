import { CarouselItem } from '../types';

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
    let cachedShots: CarouselItem[] = [];
    let isStale = false;

    // Check localStorage cache first
    if (typeof window !== 'undefined') {
        try {
            const cachedRaw = window.localStorage.getItem(CACHE_KEY);
            if (cachedRaw) {
                const cached: CachePayload = JSON.parse(cachedRaw);
                cachedShots = cached.shots;
                if (Date.now() - cached.timestamp < CACHE_TTL_MS) {
                    return cachedShots;
                }
                isStale = true;
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

        if (data?.error) {
            throw new Error(data.error);
        }

        if (data && Array.isArray(data.shots) && data.shots.length > 0) {
            // Map items to CarouselItem format
            carouselItems = data.shots.map((shot: any): CarouselItem => ({
                id: shot.id || `dribbble-${Math.random().toString(36).substr(2, 9)}`,
                title: shot.title,
                imageUrl: shot.imageUrl,
                year: new Date().getFullYear().toString(),
                link: shot.link,
                source: 'dribbble',
            }));

            // Persist to cache (ONLY if we have items)
            if (typeof window !== 'undefined') {
                const payload: CachePayload = {
                    shots: carouselItems,
                    timestamp: Date.now(),
                };
                window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
            }
            return carouselItems;
        }
    } catch (error) {
        // Return stale data if available on failure
        if (isStale && cachedShots.length > 0) {
            return cachedShots;
        }
    }

    return cachedShots.length > 0 ? cachedShots : [];
}
