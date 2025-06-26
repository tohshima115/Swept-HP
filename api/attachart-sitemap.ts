import type { VercelRequest, VercelResponse } from '@vercel/node';

const SITE_URL = 'https://swept.jp/attachart';

const staticPaths = [
  '', // /attachart/
  'quiz/1',
  'result',
  'privacy-policy',
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 将来、動的ページがあればここでAPI等から取得して配列に追加

  const urls = staticPaths.map(path => ({
    loc: `${SITE_URL}/${path}`.replace(/\/$/, ''),
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `<url><loc>${url.loc}</loc></url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
} 