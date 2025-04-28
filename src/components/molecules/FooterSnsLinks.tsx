import { Box, Link } from '@mui/material';
import XIcon from '@mui/icons-material/X'; // 仮のX(Twitter)アイコン
import { Image } from '../atoms/Image';

const FooterSnsLinks = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center', my: 2 }}>
    <Link href="https://swept.jp" target="_blank" rel="noopener">
      {/* ここはSVGやImageコンポーネントでロゴを表示 */}
      <Image src="" alt="Swept" width={80} height={24} />
    </Link>
    <Link href="https://twitter.com/swept_skt" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <XIcon />
      @swept_skt
    </Link>
  </Box>
);

export default FooterSnsLinks;
