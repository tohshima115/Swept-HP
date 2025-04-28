import { Box, Link } from '@mui/material';
import XIcon from '@mui/icons-material/X'; // 仮のX(Twitter)アイコン
import Logo from '../atoms/Logo';

const FooterSnsLinks = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center', my: 2 }}>
    <Logo color='#ffffff'/>
    <Link href="https://twitter.com/swept_skt" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <XIcon />
      @swept_skt
    </Link>
  </Box>
);

export default FooterSnsLinks;
