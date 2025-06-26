import { Box, Container, Typography, Link } from '@mui/material';

const PrivacyPolicy = () => {
  // Get today's date in YYYY年M月D日 format
  const today = new Date();
  const formattedDate = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  return (
    <Container maxWidth="md" sx={{ py: 4, color: 'var(--color-on-surface)' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        プライバシーポリシー
      </Typography>
      <Typography>最終更新日: {formattedDate}</Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          はじめに
        </Typography>
        <Typography>
          開発チームSwept（以下「当チーム」といいます。）は、当チームが提供する愛着スタイル診断サービス（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          収集する情報
        </Typography>
        <Typography>
          本サービスでは、以下の情報を収集します。
        </Typography>
        <ul>
          <li><Typography><strong>診断結果のSNSシェアまたはメール送信に同意いただいた場合に収集する情報:</strong></Typography>
            <ul>
              <li><Typography>診断への回答内容</Typography></li>
              <li><Typography>ニックネーム、年齢、性別、メールアドレス等のフォーム入力情報</Typography></li>
            </ul>
          </li>
          <li><Typography><strong>すべてのユーザーから収集する情報:</strong></Typography>
            <ul>
              <li><Typography>Cookieおよびそれに類する技術（本サービスの利用状況の分析のため）</Typography></li>
            </ul>
          </li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          情報の利用目的
        </Typography>
        <Typography>
          収集した情報は、以下の目的で利用します。
        </Typography>
        <ul>
          <li><Typography>診断結果の表示およびメールでの送信</Typography></li>
          <li><Typography>本サービスの改善、研究、新サービスの開発</Typography></li>
          <li><Typography>個人を特定しない形での統計データの作成</Typography></li>
          <li><Typography>お問い合わせへの対応</Typography></li>
        </ul>
      </Box>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          情報の第三者提供
        </Typography>
        <Typography>
          当チームは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供しません。
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          お問い合わせ
        </Typography>
        <Typography>
          本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
        </Typography>
        <Typography>
          開発チームSwept<br />
          連絡先: <Link href="mailto:support@swept.jp">support@swept.jp</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy; 