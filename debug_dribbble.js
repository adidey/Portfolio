
const https = require('https');

const url = 'https://dribbble.com/Aditya_Dey';

console.log(`Fetching ${url}...`);

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('Data received. Length:', data.length);
        // Look for shot links
        const shotRegex = /<li[^>]*class="[^"]*shot-thumbnail[^"]*"[\s\S]*?<\/li>/g;
        // Or newer structure?
        // Let's just print a chunk that contains "shot-thumbnail" or just "shot" to see structure
        const match = data.match(/shot-thumbnail/);
        if (match) {
            console.log('Found "shot-thumbnail" at index', match.index);
            console.log('Context:', data.substring(match.index - 50, match.index + 500));
        } else {
            console.log('"shot-thumbnail" not found. Searching for "shots"...');
            const match2 = data.match(/shots/);
            if (match2) {
                console.log('Found "shots" at index', match2.index);
                console.log('Context:', data.substring(match2.index - 50, match2.index + 500));
            }
        }
    });
}).on('error', (e) => {
    console.error(e);
});
