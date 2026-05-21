import puppeteer from 'puppeteer-core';
import fs from 'fs';

(async () => {
    console.log("Starting Vouchr screenshot capture...");
    
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
    
    const outDir = './public/assets/vouchr';
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const BASE_URL = 'https://spout-skip-02451619.figma.site/';
    
    console.log(`Navigating to ${BASE_URL}...`);
    await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
    // Extra wait for JS-rendered Figma site to fully paint
    await new Promise(r => setTimeout(r, 5000));

    // 1. Landing page — top of page
    await page.screenshot({ path: `${outDir}/screen_landing.png`, type: 'png', fullPage: false });
    console.log('Saved screen_landing.png');

    // 2. Scroll down 600px to reveal more content
    await page.evaluate(() => window.scrollBy(0, 600));
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: `${outDir}/screen_scroll1.png`, type: 'png', fullPage: false });
    console.log('Saved screen_scroll1.png');

    // 3. Scroll further
    await page.evaluate(() => window.scrollBy(0, 700));
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: `${outDir}/screen_scroll2.png`, type: 'png', fullPage: false });
    console.log('Saved screen_scroll2.png');

    // 4. Try to find and click any nav buttons / CTAs
    const clickTargets = await page.$$('button, a, [role="button"]');
    console.log(`Found ${clickTargets.length} clickable elements`);

    if (clickTargets.length > 0) {
        try {
            await clickTargets[0].click();
            await new Promise(r => setTimeout(r, 2500));
            await page.screenshot({ path: `${outDir}/screen_view2.png`, type: 'png', fullPage: false });
            console.log('Saved screen_view2.png');
        } catch (e) { console.log('Click 1 failed:', e.message); }
    }

    if (clickTargets.length > 1) {
        try {
            await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 20000 });
            await new Promise(r => setTimeout(r, 4000));
            await clickTargets[1].click();
            await new Promise(r => setTimeout(r, 2500));
            await page.screenshot({ path: `${outDir}/screen_view3.png`, type: 'png', fullPage: false });
            console.log('Saved screen_view3.png');
        } catch (e) { console.log('Click 2 failed:', e.message); }
    }

    // 5. Full-page screenshot
    await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({ path: `${outDir}/screen_full.png`, type: 'png', fullPage: true });
    console.log('Saved screen_full.png');

    await browser.close();
    console.log("Done! All Vouchr screenshots captured.");
})();
