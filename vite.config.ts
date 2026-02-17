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
              const rssUrl = 'https://dribbble.com/Aditya_Dey/shots.rss';
              const response = await fetch(rssUrl);

              if (!response.ok) {
                throw new Error(`Dribbble RSS error: ${response.status}`);
              }

              const xmlText = await response.text();

              // Simple regex parser for RSS items
              const items: any[] = [];
              const itemRegex = /<item>([\s\S]*?)<\/item>/g;
              const titleRegex = /<title>([\s\S]*?)<\/title>/;
              const linkRegex = /<link>([\s\S]*?)<\/link>/;
              const pubDateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
              // Try to find image in description (HTML) or media:content/thumbnail
              const imgRegex = /<description>[\s\S]*?<img[^>]+src="([^">]+)"[\s\S]*?<\/description>/;
              const mediaRegex = /<media:content[^>]+url="([^">]+)"/;

              let match;
              while ((match = itemRegex.exec(xmlText)) !== null) {
                const itemContent = match[1];
                const title = titleRegex.exec(itemContent)?.[1] || 'Untitled';
                const link = linkRegex.exec(itemContent)?.[1] || '';
                const pubDate = pubDateRegex.exec(itemContent)?.[1] || '';

                let imageUrl = imgRegex.exec(itemContent)?.[1];
                if (!imageUrl) {
                  imageUrl = mediaRegex.exec(itemContent)?.[1];
                }

                if (imageUrl) {
                  items.push({
                    title: title.replace(/<!\[CDATA\[|\]\]>/g, ''),
                    link,
                    pubDate,
                    imageUrl
                  });
                }
              }

              res.statusCode = 200;
              res.setHeader('content-type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ shots: items.slice(0, 12) })); // Limit to 12
            } catch (error) {
              console.error('RSS Fetch Error:', error);
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
