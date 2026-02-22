import { getScrapedShots } from '../server/dribbbleScraper';

export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request): Promise<Response> {
    const result = await getScrapedShots(fetch);

    return new Response(JSON.stringify(result), {
        status: result.status || 200,
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
        },
    });
}
