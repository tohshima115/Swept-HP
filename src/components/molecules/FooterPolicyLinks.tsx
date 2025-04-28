import { Box } from '@mui/material';
import FooterLink from '../atoms/FooterLink';

const FooterPolicyLinks = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, my: 1 }}>
    <FooterLink href="/privacy">プライバシーポリシー</FooterLink>
    <FooterLink href="/sitemap">サイトマップ</FooterLink>
  </Box>
);

export default FooterPolicyLinks;
