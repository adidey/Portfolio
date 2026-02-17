export interface BehanceRssProject {
  id: string;
  title: string;
  url: string;
  coverImage: string;
  description?: string;
}

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const memCache = new Map<string, { timestamp: number; projects: BehanceRssProject[] }>();

function decodeCdata(s: string): string {
  return s.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '');
}

function extractTag(block: string, tag: string): string | null {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = block.match(re);
  if (!m) return null;
  return decodeCdata(m[1].trim());
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractFirstImageUrl(descriptionHtml: string): string {
  const img = descriptionHtml.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (img?.[1]) return img[1];

  // Common RSS namespaces in some feeds
  const mediaThumb = descriptionHtml.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i);
  if (mediaThumb?.[1]) return mediaThumb[1];

  const mediaContent = descriptionHtml.match(/<media:content[^>]+url=["']([^"']+)["']/i);
  if (mediaContent?.[1]) return mediaContent[1];

  return '';
}

export function parseBehanceRss(xml: string): BehanceRssProject[] {
  const items: BehanceRssProject[] = [];
  const itemRe = /<item\b[^>]*>([\s\S]*?)<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = itemRe.exec(xml)) !== null) {
    const itemBlock = m[1];
    const title = extractTag(itemBlock, 'title') ?? 'Untitled';
    const url = extractTag(itemBlock, 'link') ?? '#';
    const descriptionRaw = extractTag(itemBlock, 'description') ?? '';
    const coverImage = extractFirstImageUrl(descriptionRaw);
    const description = stripHtml(descriptionRaw);

    items.push({
      id: url,
      title,
      url,
      coverImage,
      description: description || undefined,
    });
  }

  return items;
}

export async function fetchBehanceRssProjects(username: string): Promise<BehanceRssProject[]> {
  const key = username.trim().toLowerCase();
  const cached = memCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.projects;
  }

  const rssUrl = `https://www.behance.net/feeds/user?username=${encodeURIComponent(username)}`;
  const res = await fetch(rssUrl, {
    headers: {
      // Behance requires a browser-like User-Agent to avoid 400 errors
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Accept: 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
    },
  });

  if (!res.ok) {
    throw new Error(`Behance RSS error: ${res.status}`);
  }

  const xml = await res.text();
  const projects = parseBehanceRss(xml);

  memCache.set(key, { timestamp: Date.now(), projects });
  return projects;
}

