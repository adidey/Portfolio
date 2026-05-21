import puppeteer from 'puppeteer-core';

(async () => {
    console.log("Launching browser to inspect Figma site...");
    const browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true,
      defaultViewport: { width: 1440, height: 900 }
    });

    const page = await browser.newPage();
    const url = 'https://spout-skip-02451619.figma.site/';
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 6000));

    // Get all interactive elements
    const elements = await page.evaluate(() => {
        const interactive = [];
        // Look for buttons, links, or elements with text that could be clickable
        document.querySelectorAll('button, a, [role="button"], div, span').forEach((el, index) => {
            const text = (el.innerText || el.textContent || '').trim();
            if (text && text.length < 100 && (el.tagName === 'BUTTON' || el.tagName === 'A' || el.getAttribute('role') === 'button' || el.onclick || window.getComputedStyle(el).cursor === 'pointer')) {
                interactive.push({
                    index,
                    tagName: el.tagName,
                    text: text.substring(0, 50),
                    id: el.id,
                    className: el.className
                });
            }
        });
        return interactive;
    });

    console.log(`Found ${elements.length} potentially clickable elements:`);
    console.log(JSON.stringify(elements.slice(0, 40), null, 2));

    await browser.close();
})();
