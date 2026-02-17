import { scrapeDribbbleShots } from '../server/dribbbleScraper';

export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request): Promise<Response> {
    try {
        const items = await scrapeDribbbleShots(fetch);

        if (items.length === 0) {
            return new Response(JSON.stringify({ error: 'No items found. Logic might need update or IP is blocked.', count: 0 }), {
                status: 200,
                headers: {
                    'content-type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                },
            });
        }

        return new Response(JSON.stringify({ shots: items }), {
            status: 200,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
            },
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        const blockedMatch = message.match(/Dribbble blocked request: (\d+)/);
        const blockedStatus = blockedMatch ? Number(blockedMatch[1]) : null;

        return new Response(JSON.stringify({
            error: blockedStatus ? `Dribbble blocked request: ${blockedStatus}` : 'Failed to fetch Dribbble shots',
            status: blockedStatus ?? undefined,
            details: message,
        }), {
            status: blockedStatus || 500,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }
}
