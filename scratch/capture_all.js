import puppeteer from 'puppeteer-core';
import fs from 'fs';

const outDir = './public/assets/vouchr';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

async function capture(page, name) {
    const path = `${outDir}/${name}.png`;
    await page.screenshot({ path, type: 'png', fullPage: false });
    console.log(`Saved ${name}.png`);
}

async function clickText(page, text) {
    return await page.evaluate((t) => {
        const all = Array.from(document.querySelectorAll('button, a, [role="button"], div, span, li'));
        const el = all.find(e => (e.innerText || '').trim().toLowerCase().includes(t.toLowerCase()));
        if (el) { el.scrollIntoView(); el.click(); return true; }
        return false;
    }, text);
}

async function scrollDown(page, px) {
    await page.evaluate((p) => window.scrollBy(0, p), px);
    await new Promise(r => setTimeout(r, 1200));
}

(async () => {
    console.log("Starting extended capture...");
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true,
        defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }
    });

    const page = await browser.newPage();
    const BASE = 'https://spout-skip-02451619.figma.site/';

    // ── BUYER FLOW ──────────────────────────────────────────────────────────
    console.log("=== BUYER ===");
    await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 6000));
    await capture(page, 'vouchr_landing');

    await clickText(page, 'Buyer');
    await new Promise(r => setTimeout(r, 4000));
    await capture(page, 'vouchr_buyer_dashboard');

    // Scroll buyer dashboard to reveal more content
    await scrollDown(page, 400);
    await capture(page, 'vouchr_buyer_dashboard_scroll');

    await scrollDown(page, 400);
    await capture(page, 'vouchr_buyer_dashboard_bottom');

    // Click into a campaign/group
    const cardClicked = await page.evaluate(() => {
        const cards = Array.from(document.querySelectorAll('div, a, button')).filter(el => {
            const txt = el.innerText || '';
            return txt.includes('iPhone') || txt.includes('Sony') || txt.includes('Samsung') || txt.includes('Group') || txt.includes('View');
        });
        if (cards.length > 0) { cards[0].scrollIntoView(); cards[0].click(); return true; }
        return false;
    });
    if (cardClicked) {
        await new Promise(r => setTimeout(r, 3000));
        await capture(page, 'vouchr_buyer_group_details');
        // Scroll within group details
        await scrollDown(page, 400);
        await capture(page, 'vouchr_buyer_group_details_scroll');
    }

    // Create Group flow
    await page.goto(BASE, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 5000));
    await clickText(page, 'Buyer');
    await new Promise(r => setTimeout(r, 3000));
    const cgClicked = await clickText(page, 'Create Group') || await clickText(page, 'Start Group') || await clickText(page, 'New Group');
    if (cgClicked) {
        await new Promise(r => setTimeout(r, 3000));
        await capture(page, 'vouchr_buyer_create_group');
        await scrollDown(page, 400);
        await capture(page, 'vouchr_buyer_create_group_scroll');
    }

    // Vouchers / commitments
    await page.goto(BASE, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 5000));
    await clickText(page, 'Buyer');
    await new Promise(r => setTimeout(r, 3000));
    const vClicked = await clickText(page, 'Voucher') || await clickText(page, 'Commitment') || await clickText(page, 'My Vouchers');
    if (vClicked) {
        await new Promise(r => setTimeout(r, 3000));
        await capture(page, 'vouchr_buyer_vouchers');
    }

    // ── SELLER FLOW ─────────────────────────────────────────────────────────
    console.log("=== SELLER ===");
    await page.goto(BASE, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 6000));
    await clickText(page, 'Seller');
    await new Promise(r => setTimeout(r, 4000));
    await capture(page, 'vouchr_seller_dashboard');

    // Scroll seller dashboard
    await scrollDown(page, 400);
    await capture(page, 'vouchr_seller_dashboard_scroll');

    // Try clicking into an opportunity / create offer
    const oppClicked = await page.evaluate(() => {
        const all = Array.from(document.querySelectorAll('div, a, button')).filter(el => {
            const txt = el.innerText || '';
            return txt.includes('Submit Offer') || txt.includes('Create Offer') || txt.includes('iPhone') || txt.includes('View');
        });
        if (all.length > 0) { all[0].scrollIntoView(); all[0].click(); return true; }
        return false;
    });
    if (oppClicked) {
        await new Promise(r => setTimeout(r, 3000));
        await capture(page, 'vouchr_seller_offer_detail');
        await scrollDown(page, 400);
        await capture(page, 'vouchr_seller_offer_detail_scroll');
    }

    // My Offers
    await page.goto(BASE, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 5000));
    await clickText(page, 'Seller');
    await new Promise(r => setTimeout(r, 3000));
    const moClicked = await clickText(page, 'My Offers') || await clickText(page, 'My offers');
    if (moClicked) {
        await new Promise(r => setTimeout(r, 3000));
        await capture(page, 'vouchr_seller_my_offers');
    }

    // ── RETAILER FLOW ───────────────────────────────────────────────────────
    console.log("=== RETAILER ===");
    await page.goto(BASE, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 6000));
    await clickText(page, 'Retailer');
    await new Promise(r => setTimeout(r, 4000));
    await capture(page, 'vouchr_retailer_dashboard');

    // Scroll retailer dashboard
    await scrollDown(page, 400);
    await capture(page, 'vouchr_retailer_dashboard_scroll');

    await browser.close();
    console.log("Extended capture complete!");
})();
