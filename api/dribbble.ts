
export const config = {
    runtime: 'edge', // Using Edge runtime for best performance
};

export default async function handler(req: Request): Promise<Response> {
    try {
        const items: any[] = [];
        const uniqueShots = new Set();

        // Simulate browser headers to avoid blocking
        // These headers mimic a real Chrome request on macOS
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9',
            'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"macOS"',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'Cache-Control': 'max-age=0',
        };

        // Fetch up to 5 pages
        for (let page = 1; page <= 5; page++) {
            const profileUrl = `https://dribbble.com/Aditya_Dey?page=${page}`;
            console.log(`Fetching Dribbble page ${page}...`);

            const response = await fetch(profileUrl, { headers });

            if (!response.ok) {
                console.error(`Dribbble responded with ${response.status}`);
                // If first page fails, we might be blocked
                if (page === 1) {
                    return new Response(JSON.stringify({
                        error: `Dribbble blocked request: ${response.status}`,
                        status: response.status
                    }), {
                        status: response.status,
                        headers: { 'content-type': 'application/json' }
                    });
                }
                break;
            }

            const htmlText = await response.text();

            // Check if we got a CAPTCHA or Login page
            if (htmlText.includes('SignIn') || htmlText.includes('auth') || htmlText.includes('CAPTCHA')) {
                console.warn('Likely hit a login/captcha page');
            }

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
            // Small delay
            if (page < 5) {
                // await new Promise(r => setTimeout(r, 200)); 
            }
        }

        // If we found nothing but got 200 OK, maybe layout changed or we got a different page
        if (items.length === 0) {
            return new Response(JSON.stringify({
                error: 'No items found. Logic might need update or IP is blocked.',
                count: 0
            }), {
                status: 200, // Return 200 so we can see the JSON in browser
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
        console.error('Error in Dribbble API handler:', error);
        return new Response(JSON.stringify({
            error: 'Failed to fetch Dribbble shots',
            details: error instanceof Error ? error.message : String(error)
        }), {
            status: 500,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }
}
