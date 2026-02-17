
export const config = {
    runtime: 'edge', // Using Edge runtime for best performance
};

export default async function handler(req: Request): Promise<Response> {
    try {
        const items: any[] = [];
        const uniqueShots = new Set();

        // Simulate browser headers to avoid blocking
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        };

        // Fetch up to 5 pages
        for (let page = 1; page <= 5; page++) {
            const profileUrl = `https://dribbble.com/Aditya_Dey?page=${page}`;
            console.log(`Fetching Dribbble page ${page}...`);

            const response = await fetch(profileUrl, { headers });
            if (!response.ok) break;

            const htmlText = await response.text();
            const fragments = htmlText.split('shot-thumbnail ');
            let foundOnPage = 0;

            for (const fragment of fragments) {
                if (!fragment.includes('href="/shots/')) continue;

                const linkMatch = fragment.match(/href="(\/shots\/[^"]+)"/);
                if (!linkMatch) continue;

                const relativeLink = linkMatch[1];
                const fullLink = `https://dribbble.com${relativeLink}`;
                const shotId = relativeLink.split('/')[2]?.split('-')[0];

                if (!shotId || uniqueShots.has(shotId)) continue;

                let imgMatch = fragment.match(/data-src="([^"]+)"/);
                if (!imgMatch) imgMatch = fragment.match(/src="([^"]*cdn\.dribbble\.com[^"]+)"/);
                if (!imgMatch) imgMatch = fragment.match(/<noscript>.*?src="([^"]+)".*?<\/noscript>/s);

                if (!imgMatch) continue;

                // Extract Title
                const titleMatch = fragment.match(/alt="([^"]+)"/);
                let title = titleMatch ? titleMatch[1] : 'Dribbble Shot';

                // Clean up title
                const separators = [' by ', ' - ', ' | ', ' artist ', ' design ', ' graphic '];
                for (const sep of separators) {
                    if (title.includes(sep)) {
                        title = title.split(sep)[0];
                        break;
                    }
                }
                const words = title.split(' ');
                if (words.length > 6) title = words.slice(0, 5).join(' ');

                // Filter
                if (imgMatch[1].includes('avatar') || title.includes('Aditya Dey') || shotId === 'popular' || title === 'close') continue;

                if (imgMatch[1]) {
                    uniqueShots.add(shotId);
                    items.push({
                        id: shotId,
                        title: title,
                        link: fullLink,
                        imageUrl: imgMatch[1],
                        pubDate: new Date().toISOString()
                    });
                    foundOnPage++;
                }
            }

            if (foundOnPage < 5) break;
            // Small delay not strictly necessary on edge but helps with rate limits if calling sequentially
            // await new Promise(r => setTimeout(r, 200)); 
        }

        return new Response(JSON.stringify({ shots: items }), {
            status: 200,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
                'Access-Control-Allow-Origin': '*', // Allow CORS for now since it's a GET request
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
            },
        });

    } catch (error) {
        console.error('Error in Dribbble API handler:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch Dribbble shots' }), {
            status: 500,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }
}
