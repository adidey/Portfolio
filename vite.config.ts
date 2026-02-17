import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fetchBehanceRssProjects } from './server/behanceRss';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'behance-rss-api',
        configureServer(server) {
          server.middlewares.use('/api/behance', async (req, res) => {
            try {
              const url = new URL(req.url || '', 'http://localhost');
              const username = url.searchParams.get('username') || 'adityadey';
              const projects = await fetchBehanceRssProjects(username);
              res.statusCode = 200;
              res.setHeader('content-type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ projects }));
            } catch {
              res.statusCode = 200;
              res.setHeader('content-type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ projects: [], error: 'Failed to load Behance RSS' }));
            }
          });

          server.middlewares.use('/api/dribbble', async (req, res) => {
            try {
              // Fallback to scraping public profile since RSS is deprecated/404
              const profileUrl = 'https://dribbble.com/Aditya_Dey';
              const response = await fetch(profileUrl, {
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
              });

              if (!response.ok) {
                throw new Error(`Dribbble Profile fetch error: ${response.status}`);
              }

              const htmlText = await response.text();
              const items: any[] = [];

              // Regex to find shot blocks. Dribbble structure varies, so we search for the critical elements.
              // We look for links to shots that contain images.
              // Typically: <a ... href="/shots/..." ...><picture>...<img src="..." alt="...">

              // Strategy: Find all 'search-result-item' or 'shot-thumbnail' blocks would be ideal, 
              // but global regex for href="/shots/..." and capturing nearby img src is more robust against class name changes.

              // Match <a href="/shots/..." ... <img ... src="..."
              // This is a bit loose but should work for the grid

              // Let's iterate over unique shot IDs to avoid duplicates
              const uniqueShots = new Set();

              // Regex to find shot links and metadata
              // Looking for the pattern: href="/shots/123-Title" ... src="...cdn.dribbble.com..."
              // We'll split by "shot-thumbnail" or "group" to isolate items if possible, 
              // but splitting by "<li" is safer.

              const fragments = htmlText.split('<li');

              for (const fragment of fragments) {
                if (!fragment.includes('href="/shots/')) continue;

                // Extract Link
                const linkMatch = fragment.match(/href="(\/shots\/[^"]+)"/);
                if (!linkMatch) continue;

                const relativeLink = linkMatch[1];
                const fullLink = `https://dribbble.com${relativeLink}`;

                // Extract ID to prevent duplicates
                const shotId = relativeLink.split('/')[2]?.split('-')[0];
                if (!shotId || uniqueShots.has(shotId)) continue;

                // Extract Image
                // Look for image with cdn.dribbble.com
                const imgMatch = fragment.match(/src="([^"]*cdn\.dribbble\.com[^"]+)"/);
                if (!imgMatch) continue;

                // Extract Title (from alt attribute of the image or nearby title tag)
                // Often the alt text of the image is the title
                const titleMatch = fragment.match(/alt="([^"]+)"/);
                const title = titleMatch ? titleMatch[1] : 'Dribbble Shot';

                // Filter out standard Dribbble assets or avatars if they get caught
                if (imgMatch[1].includes('avatar') || title.includes('Aditya Dey')) {
                  // Start of fragment often contains user avatar in some views, skip if it's just that
                  // But usually the main shot image is the largest one. 
                  // Let's rely on the structure that the shot link wraps the shot image.
                }

                // If we have a valid link and image, add it
                if (imgMatch[1]) {
                  uniqueShots.add(shotId);
                  items.push({
                    id: shotId,
                    title: title,
                    link: fullLink,
                    imageUrl: imgMatch[1],
                    pubDate: new Date().toISOString() // No easy date in list view
                  });
                }
              }

              res.statusCode = 200;
              res.setHeader('content-type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ shots: items.slice(0, 12) }));
            } catch (error) {
              console.error('Dribbble Scrape Fetch Error:', error);
              res.statusCode = 200;
              res.setHeader('content-type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ shots: [], error: 'Failed to load Dribbble shots' }));
            }
          });
        },
      },
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
