
const https = require('https');

// Mimic the headers from vite.config.ts
const options = {
    hostname: 'dribbble.com',
    path: '/Aditya_Dey',
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
    }
};

console.log('Fetching https://dribbble.com/Aditya_Dey ...');

const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`HTML received. Length: ${data.length}`);

        // --- PASTE LOGIC FROM VITE.CONFIG.TS HERE ---
        const htmlText = data;
        const items = [];
        const uniqueShots = new Set();
        const fragments = htmlText.split('<li');

        console.log(`Found ${fragments.length} fragments (potential list items)`);

        let debugCount = 0;

        for (const fragment of fragments) {
            // Debug first few fragments
            if (debugCount < 3) {
                // console.log(`Fragment ${debugCount}:`, fragment.substring(0, 200));
                debugCount++;
            }

            if (!fragment.includes('href="/shots/')) continue;

            // Extract Link
            const linkMatch = fragment.match(/href="(\/shots\/[^"]+)"/);
            if (!linkMatch) continue;

            const relativeLink = linkMatch[1];
            const fullLink = `https://dribbble.com${relativeLink}`;

            // Extract ID
            const shotId = relativeLink.split('/')[2]?.split('-')[0];
            if (!shotId || uniqueShots.has(shotId)) continue;

            // Extract Image
            const imgMatch = fragment.match(/src="([^"]*cdn\.dribbble\.com[^"]+)"/);

            // Debug if we found a link but no image
            if (!imgMatch) {
                console.log(`Found link ${relativeLink} but NO image match in fragment.`);
                // console.log('Fragment snippet:', fragment.substring(0, 300));
            }

            if (!imgMatch) continue;

            const titleMatch = fragment.match(/alt="([^"]+)"/);
            const title = titleMatch ? titleMatch[1] : 'Dribbble Shot';

            if (imgMatch[1].includes('avatar') || title.includes('Aditya Dey')) {
                console.log(`Skipping avatar/user image: ${title}`);
            } else {
                uniqueShots.add(shotId);
                items.push({
                    id: shotId,
                    title: title,
                    link: fullLink,
                    imageUrl: imgMatch[1],
                    pubDate: new Date().toISOString()
                });
            }
        }
        // ---------------------------------------------

        console.log('--- RESULTS ---');
        console.log(`Found ${items.length} shots.`);
        if (items.length > 0) {
            console.log(JSON.stringify(items[0], null, 2));
        } else {
            console.log('Dumping a part of HTML to check structure...');
            // Look for any href="/shots/" to see what it looks like
            const shotIndex = data.indexOf('href="/shots/');
            if (shotIndex !== -1) {
                console.log(data.substring(shotIndex - 100, shotIndex + 300));
            } else {
                console.log('No href="/shots/" found in HTML at all.');
            }
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.end();
