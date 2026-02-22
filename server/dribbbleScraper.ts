export interface ScrapedShot {
  id: string;
  title: string;
  link: string;
  imageUrl: string;
  pubDate: string;
}

export interface ScrapeResponse {
  shots: ScrapedShot[];
  error?: string;
  status?: number;
  details?: string;
}

export const SCRAPE_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Accept-Language': 'en-US,en;q=0.9',
};

export function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export function cleanTitle(rawTitle: string): string {
  let title = decodeHtmlEntities(rawTitle).trim();
  const separators = [' by ', ' - ', ' | ', ' artist ', ' design ', ' graphic '];
  for (const sep of separators) {
    if (title.includes(sep)) {
      title = title.split(sep)[0];
      break;
    }
  }
  const words = title.split(/\s+/);
  if (words.length > 6) title = words.slice(0, 5).join(' ');
  return title || 'Dribbble Shot';
}

export function parseShotsFromHtml(htmlText: string, uniqueShots: Set<string>): ScrapedShot[] {
  const items: ScrapedShot[] = [];
  const shotBlocks = htmlText.match(/<li[^>]*class="[^"]*shot-thumbnail[^"]*"[\s\S]*?<\/li>/g) || [];

  for (const block of shotBlocks) {
    const linkMatch = block.match(/href="(\/shots\/[^"?#]+(?:-[^"]*)?)"/);
    if (!linkMatch) continue;

    const relativeLink = linkMatch[1];
    const shotId = relativeLink.split('/')[2]?.split('-')[0];
    if (!shotId || uniqueShots.has(shotId) || shotId === 'popular') continue;

    const dataSrcMatch = block.match(/data-src="([^"]+)"/);
    const srcMatch = block.match(/src="([^"]+)"/);
    const srcSetMatch = block.match(/data-srcset="([^"]+)"/);

    let chosenImage = dataSrcMatch?.[1] || srcMatch?.[1] || '';
    if (srcSetMatch?.[1]) {
      const parts = srcSetMatch[1].split(',').map(p => p.trim());
      const lastPart = parts[parts.length - 1]?.split(' ')[0];
      if (lastPart) chosenImage = lastPart;
    }
    const imageUrl = decodeHtmlEntities(chosenImage);

    if (!imageUrl || imageUrl.startsWith('data:image') || imageUrl.includes('avatar')) continue;

    const titleMatch = block.match(/alt="([^"]+)"/);
    const title = cleanTitle(titleMatch?.[1] || 'Dribbble Shot');
    if (title.includes('Aditya Dey') || title.toLowerCase() === 'close') continue;

    uniqueShots.add(shotId);
    items.push({
      id: shotId,
      title,
      link: `https://dribbble.com${relativeLink}`,
      imageUrl,
      pubDate: new Date().toISOString(),
    });
  }

  return items;
}

export async function scrapeDribbbleShots(fetchImpl: typeof fetch, maxPages = 5): Promise<ScrapedShot[]> {
  const items: ScrapedShot[] = [];
  const uniqueShots = new Set<string>();

  for (let page = 1; page <= maxPages; page++) {
    const profileUrl = `https://dribbble.com/Aditya_Dey?page=${page}`;
    const response = await fetchImpl(profileUrl, { headers: SCRAPE_HEADERS });

    if (!response.ok) {
      if (page === 1) {
        throw new Error(`Dribbble blocked request: ${response.status}`);
      }
      break;
    }

    const htmlText = await response.text();
    const pageItems = parseShotsFromHtml(htmlText, uniqueShots);
    items.push(...pageItems);

    if (pageItems.length < 5) break;
  }

  return items;
}

/**
 * Shared wrapper for scraping Dribbble shots with unified error handling
 */
export async function getScrapedShots(fetchImpl: typeof fetch): Promise<ScrapeResponse> {
  try {
    const items = await scrapeDribbbleShots(fetchImpl);

    if (items.length === 0) {
      return {
        shots: [],
        error: 'No items found. Logic might need update or IP is blocked.',
        status: 200
      };
    }

    return { shots: items };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const blockedMatch = message.match(/Dribbble blocked request: (\d+)/);
    const blockedStatus = blockedMatch ? Number(blockedMatch[1]) : null;

    return {
      shots: [],
      error: blockedStatus ? `Dribbble blocked request: ${blockedStatus}` : 'Failed to fetch Dribbble shots',
      status: blockedStatus || 500,
      details: message,
    };
  }
}
