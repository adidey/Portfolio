import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extract project IDs more reliably from constants.tsx
const constantsPath = path.join(__dirname, 'constants.tsx');
const constantsContent = fs.readFileSync(constantsPath, 'utf-8');
const PROJECTS_STR = constantsContent.match(/export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);/)?.[1] || '[]';
const projectIds = [...PROJECTS_STR.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);

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
  console.log('Starting custom pre-render with @sparticuz/chromium...');
  
  // Start Vite preview
  let server;
  try {
    server = await preview({ preview: { port: 4173 } });
  } catch (e) {
    console.error('Failed to start Vite preview server:', e);
    process.exit(1);
  }
  
  const url = server.resolvedUrls.local[0];

  let browser;
  try {
    let executablePath = await chromium.executablePath();
    
    // Fallback for local development on macOS
    if (!executablePath && process.platform === 'darwin') {
      executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    }

    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: executablePath,
      headless: chromium.headless,
    });

    for (const route of routes) {
      const page = await browser.newPage();
      try {
        console.log(`Pre-rendering ${route}...`);
        await page.goto(`${url}${route === '/' ? '' : route.substring(1)}`, { 
          waitUntil: 'networkidle0', 
          timeout: 60000 
        });
        
        const html = await page.content();
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
  } catch (err) {
    console.error('❌ Browser process failed:', err);
  } finally {
    if (browser) await browser.close();
    if (server) server.httpServer.close();
  }

  console.log('Pre-rendering complete!');
  process.exit(0);
})();
