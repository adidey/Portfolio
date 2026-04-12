import puppeteer from 'puppeteer-core';
import fs from 'fs';

(async () => {
    console.log("Starting screenshot script...");
    const browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true,
      defaultViewport: {
        width: 1440,
        height: 900,
        deviceScaleFactor: 2,
      }
    });

    const page = await browser.newPage();
    
    // Ensure assets dir exists
    if (!fs.existsSync('./public/assets')) {
         fs.mkdirSync('./public/assets');
    }

    const capture = async (url, filename) => {
        console.log(`Navigating to ${url}...`);
        await page.goto(url, { waitUntil: 'networkidle0' });
        // Wait for loader to finish and animations to settle
        await new Promise(r => setTimeout(r, 2500));
        await page.screenshot({ path: `./public/assets/${filename}`, type: 'jpeg', quality: 90 });
        console.log(`Saved ${filename}`);
    };

    await capture('http://localhost:3000/', 'portfolio-home.jpg');
    await capture('http://localhost:3000/work', 'portfolio-work.jpg');
    await capture('http://localhost:3000/about', 'portfolio-about.jpg');

    await browser.close();
    console.log("Done!");
})();
