import type { VercelRequest, VercelResponse } from '@vercel/node';

const SITE_URL = 'https://swept.jp/attachart';

const staticPaths: { path: string; lastmod: string; changefreq: string; priority: string }[] = [
  { path: '', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '1.0' },
  { path: 'quiz/1', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.8' },
  { path: 'result', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { path: 'privacy-policy', lastmod: new Date().toISOString(), changefreq: 'yearly', priority: '0.5' },
];

type UrlEntry = { loc: string; lastmod?: string; changefreq?: string; priority?: string };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 将来、動的ページがあればここでAPI等から取得して配列に追加

  const urls: UrlEntry[] = staticPaths.map(({ path, lastmod, changefreq, priority }) => ({
    loc: `${SITE_URL}/${path}`.replace(/\/$/, ''),
    lastmod,
    changefreq,
    priority,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    url => `<url>\n  <loc>${url.loc}</loc>${url.lastmod ? `\n  <lastmod>${url.lastmod}</lastmod>` : ''}${url.changefreq ? `\n  <changefreq>${url.changefreq}</changefreq>` : ''}${url.priority ? `\n  <priority>${url.priority}</priority>` : ''}\n</url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
} 