import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

interface EmailProps {
  resultType: string;
  resultFeature: string;
  score: { A: number; B: number; C: number };
  recommendedBook: { title: string; url: string };
  referenceBook: { title: string; url: string };
  nickname: string;
}

// メールHTMLを生成する関数
const createEmailHtml = (props: EmailProps) => {
  const { resultType, resultFeature, score, recommendedBook, referenceBook, nickname } = props;
  return `
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>愛着スタイル診断 結果</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
        .header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px; }
        .result-type { font-size: 24px; font-weight: bold; color: #e4577c; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 18px; font-weight: bold; border-bottom: 2px solid #e4577c; padding-bottom: 5px; margin-bottom: 10px; }
        a { color: #007bff; text-decoration: none; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>愛着スタイル診断 結果</h1>
        </div>
        <div class="section">
          <p>${nickname || 'あなた'}の診断結果は...</p>
          <p class="result-type">${resultType}</p>
          <p>${resultFeature}</p>
        </div>
        <div class="section">
          <h2 class="section-title">あなたのスコア</h2>
          <ul>
            <li>安定スコア: ${score.A}</li>
            <li>不安スコア: ${score.B}</li>
            <li>回避スコア: ${score.C}</li>
          </ul>
        </div>
        <div class="section">
          <h2 class="section-title">あなたへのおすすめ書籍</h2>
          <p>
            <strong>${recommendedBook.title}</strong><br />
            <a href="${recommendedBook.url}" target="_blank" rel="noopener noreferrer">Amazonで見る</a>
          </p>
        </div>
        <div class="section">
          <h2 class="section-title">この診断の参考にさせて頂いた書籍</h2>
          <p>
            <strong>${referenceBook.title}</strong><br />
            <a href="${referenceBook.url}" target="_blank" rel="noopener noreferrer">Amazonで見る</a>
          </p>
        </div>
        <div class="footer">
          <p>このメールは、愛着スタイル診断をご利用いただいた方にお送りしています。</p>
          <p>&copy; 2024 Swept Inc.</p>
        </div>
      </div>
    </body>
  </html>
  `;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = 'attachart@swept.jp';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    if (!body.email || !body.resultType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const emailHtml = createEmailHtml(body);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [body.email],
      subject: '愛着スタイル診断 結果',
      html: emailHtml,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error.message, resendError: error });
    }
    
    // ToDo: Googleスプレッドシートへの書き込み処理

    return res.status(200).json({ success: true, message: 'Email sent successfully', emailId: data?.id });

  } catch (error) {
    console.error('Server Error Caught:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ error: 'Internal Server Error', details: message });
  }
} 