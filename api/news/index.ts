import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from 'microcms-js-sdk';
import type { News } from '../../src/types/news';

// microCMSクライアントの初期化
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // microCMSからニュース一覧を取得
    const data = await client.get<{ contents: News[] }>({
      endpoint: 'news',
      queries: { orders: '-publishedAt', limit: 100 } // 最新順に100件まで取得
    });
    // 取得したデータ（contents配列）をクライアントに返す
    return res.status(200).json(data.contents);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
} 