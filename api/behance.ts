import { fetchBehanceRssProjects } from '../server/behanceRss';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username') || 'adityadey';

    const projects = await fetchBehanceRssProjects(username);

    return new Response(JSON.stringify({ projects }), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        // CDN caching (Vercel) to reduce rate-limits.
        'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ projects: [], error: 'Failed to load Behance RSS' }), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
    });
  }
}

