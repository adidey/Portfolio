import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
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
        name: 'dribbble-api',
        configureServer(server) {
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
