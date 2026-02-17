export interface BehanceProject {
  id: string;
  title: string;
  url: string;
  coverImage: string;
  description?: string;
}

const CACHE_KEY = 'behance_projects_cache_v1';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

interface CachePayload {
  projects: BehanceProject[];
  timestamp: number;
}

export async function getBehanceProjects(username: string): Promise<BehanceProject[]> {
  // Check localStorage cache first (client-side only)
  if (typeof window !== 'undefined') {
    try {
      const cachedRaw = window.localStorage.getItem(CACHE_KEY);
      if (cachedRaw) {
        const cached: CachePayload = JSON.parse(cachedRaw);
        if (Date.now() - cached.timestamp < CACHE_TTL_MS) {
          return cached.projects;
        }
      }
    } catch {
      // Ignore cache errors
    }
  }

  let projects: BehanceProject[] | null = null;

  // RSS feed (server-side via same-origin API to avoid browser CORS issues)
  try {
    const apiUrl = `/api/behance?username=${encodeURIComponent(username)}`;
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Behance API proxy error: ${res.status}`);
    }
    const data = await res.json();
    if (data && Array.isArray(data.projects)) {
      projects = data.projects;
    }
  } catch {
    // Final failure – will return empty array
  }

  const safeProjects = projects || [];

  // Persist to cache
  if (typeof window !== 'undefined') {
    try {
      const payload: CachePayload = {
        projects: safeProjects,
        timestamp: Date.now(),
      };
      window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore cache write errors
    }
  }

  return safeProjects;
}

