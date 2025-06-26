import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

const SITE_URL = 'https://swept.jp';

const staticPaths = [
  '', // Home
  'vision',
  'service',
  'team',
  'company',
  'contact',
];

type UrlEntry = { loc: string; lastmod?: string };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // News一覧をmicroCMSから取得
  let newsPaths: UrlEntry[] = [];
  try {
    const news = await client.get<{ contents: { id: string; updatedAt?: string }[] }>({ endpoint: 'news' });
    newsPaths = news.contents.map(item => ({
      loc: `${SITE_URL}/news/${item.id}`,
      lastmod: item.updatedAt,
    }));
  } catch {
    // エラー時は空配列
  }

  // サイトマップXML生成
  const urls: UrlEntry[] = [
    ...staticPaths.map(path => ({
      loc: `${SITE_URL}/${path}`.replace(/\/$/, ''),
    })),
    ...newsPaths,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    url => `<url><loc>${url.loc}</loc>${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}</url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
} 