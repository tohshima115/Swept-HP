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

  // クエリからIDを取得
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  try {
    // microCMSから特定のニュース記事を取得
    const data = await client.get<News>({
      endpoint: 'news',
      contentId: id,
    });
    return res.status(200).json(data);
  } catch (error: any) {
    console.error(error);
    // microCMSは存在しないIDの場合に404エラーを返すのでハンドリング
    if (error.status === 404) {
      return res.status(404).json({ message: `Content with id ${id} not found` });
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  }
} 