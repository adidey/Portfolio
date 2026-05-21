import puppeteer from 'puppeteer-core';

async function clickText(page, text) {
    return await page.evaluate((t) => {
        const all = Array.from(document.querySelectorAll('button, a, [role="button"]'));
        const el = all.find(e => (e.innerText || '').trim().toLowerCase().includes(t.toLowerCase()));
        if (el) { el.scrollIntoView(); el.click(); return true; }
        return false;
    }, text);
}

async function getNavItems(page) {
    return await page.evaluate(() => {
        // Look for nav elements, sidebars, tab lists, header links
        const navContainers = document.querySelectorAll('nav, [role="navigation"], header, aside, [role="tablist"]');
        const items = [];
        navContainers.forEach(container => {
            container.querySelectorAll('a, button, [role="tab"], [role="menuitem"]').forEach(el => {
                const text = (el.innerText || el.textContent || '').trim();
                if (text && text.length < 80) {
                    items.push({ text, tag: el.tagName, role: el.getAttribute('role') });
                }
            });
        });
        // Also check sidebar-like elements
        document.querySelectorAll('[class*="sidebar"], [class*="nav"], [class*="menu"]').forEach(container => {
            container.querySelectorAll('a, button, li, div').forEach(el => {
                const text = (el.innerText || '').trim();
                const style = window.getComputedStyle(el);
                if (text && text.length < 60 && text.length > 2 && style.cursor === 'pointer') {
                    items.push({ text: text.split('\n')[0], tag: el.tagName });
                }
            });
        });
        return [...new Map(items.map(i => [i.text, i])).values()].slice(0, 30);
    });
}

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true,
        defaultViewport: { width: 1440, height: 900 }
    });

    const page = await browser.newPage();
    const BASE = 'https://spout-skip-02451619.figma.site/';

    for (const role of ['Buyer', 'Seller', 'Retailer']) {
        console.log(`\n=== ${role.toUpperCase()} NAV ITEMS ===`);
        await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 30000 });
        await new Promise(r => setTimeout(r, 6000));
        await clickText(page, role);
        await new Promise(r => setTimeout(r, 4000));
        const items = await getNavItems(page);
        console.log(JSON.stringify(items, null, 2));
    }

    await browser.close();
})();
