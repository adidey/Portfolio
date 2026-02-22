import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fetchBehanceRssProjects } from './server/behanceRss';
import { getScrapedShots } from './server/dribbbleScraper';

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
            const result = await getScrapedShots(fetch);
            res.statusCode = result.status || 200;
            res.setHeader('content-type', 'application/json; charset=utf-8');
            res.end(JSON.stringify(result));
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
