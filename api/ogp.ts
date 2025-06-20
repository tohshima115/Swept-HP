import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const title = 'attachart | 愛着スタイル診断テスト';
  const description = 'あなたの愛着スタイルを診断し、人間関係のパターンを理解するためのテストです。簡単な質問に答えて、自分のタイプを見つけましょう。';
  const url = 'https://www.swept.jp/attachart'; // ご自身のサイトのURLに適宜変更してください
  const imageUrl = `${new URL(req.url ?? '/', `https://${req.headers.host}`).origin}/assets/logoMark-attachart.png`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <meta name="description" content="${description}" />
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${url}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:image" content="${imageUrl}" />
        
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="${url}" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:image" content="${imageUrl}" />
        
        <meta http-equiv="refresh" content="0;url=${url}" />
      </head>
      <body>
        <p>Redirecting to the application...</p>
      </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
} 