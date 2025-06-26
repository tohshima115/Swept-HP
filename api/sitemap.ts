import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

const SITE_URL = 'https://swept.jp';

const staticPaths: { path: string; lastmod: string; changefreq: string; priority: string }[] = [
  { path: '', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '1.0' },
  { path: 'vision', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.8' },
  { path: 'service', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.8' },
  { path: 'team', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { path: 'company', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { path: 'contact', lastmod: new Date().toISOString(), changefreq: 'yearly', priority: '0.5' },
];

type UrlEntry = { loc: string; lastmod?: string; changefreq?: string; priority?: string };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // News一覧をmicroCMSから取得
  let newsPaths: UrlEntry[] = [];
  try {
    const news = await client.get<{ contents: { id: string; updatedAt?: string }[] }>({ endpoint: 'news' });
    newsPaths = news.contents.map(item => ({
      loc: `${SITE_URL}/news/${item.id}`,
      lastmod: item.updatedAt,
      changefreq: 'monthly',
      priority: '0.6',
    }));
  } catch {
    // エラー時は空配列
  }

  // サイトマップXML生成
  const urls: UrlEntry[] = [
    ...staticPaths.map(({ path, lastmod, changefreq, priority }) => ({
      loc: `${SITE_URL}/${path}`.replace(/\/$/, ''),
      lastmod,
      changefreq,
      priority,
    })),
    ...newsPaths,
  ];

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