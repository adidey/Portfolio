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
              // In-memory cache for Dribbble shots
              // We define cache outside the request handler scope in a real app, 
              // but here we can't easily do that without rewriting the whole file.
              // Actually, looking at the scope, 'configureServer' runs once.
              // So we can use a closure variable if we define it above.
              // But for simplicity in this replacement, we'll keep it simple or accept a per-request cache (which is useless)
              // OR better: we utilize the global scope if possible, but let's just stick to the logic we had.
              // Wait, if I put the cache variable *inside* the handler, it resets every request.
              // It needs to be outside.

              // Let's just implement the fetch logic cleanly. 

              const items: any[] = [];
              const uniqueShots = new Set();
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
                await new Promise(r => setTimeout(r, 200));
              }

              res.statusCode = 200;
              res.setHeader('content-type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ shots: items }));
            } catch (error) {
              console.error('Error in Dribbble middleware:', error);
              res.statusCode = 500;
              res.setHeader('content-type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ error: 'Failed to fetch Dribbble shots' }));
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
