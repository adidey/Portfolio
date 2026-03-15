import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';

// Load project data to generate dynamic routes
// Since constants.tsx is TypeScript, we'll extract the project IDs using regex or just read it.
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const constantsContent = fs.readFileSync(path.join(__dirname, 'constants.tsx'), 'utf-8');
const projectIds = [...constantsContent.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);

const routes = [
  '/',
  '/about',
  '/work',
  '/resume',
  '/contact',
  '/services',
  '/posters',
  ...projectIds.map(id => `/work/${id}`)
];

(async () => {
  console.log('Starting custom pre-render...');
  
  // Start standard Vite preview server
  const server = await preview({ preview: { port: 4173 } });
  const url = server.resolvedUrls.local[0];

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  for (const route of routes) {
    const page = await browser.newPage();
    try {
      console.log(`Pre-rendering ${route}...`);
      await page.goto(`${url}${route === '/' ? '' : route.substring(1)}`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      const html = await page.content();
      
      // Save HTML to dist/
      const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const fullPath = path.join(__dirname, 'dist', routePath);
      
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, html);
      console.log(`✅ Saved ${routePath}`);
    } catch (err) {
      console.error(`❌ Failed to render ${route}:`, err);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.httpServer.close();
  
  console.log('Pre-rendering complete!');
  process.exit(0);
})();
