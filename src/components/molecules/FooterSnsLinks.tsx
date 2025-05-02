import { Box } from '@mui/material';
// import XIcon from '@mui/icons-material/X'; // 仮のX(Twitter)アイコン
import Logo from '../atoms/Logo';

const FooterSnsLinks = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 1,px:2 }}>
    <Logo color='#ffffff'/>
    {/* <Link href="https://twitter.com/Swept_skt" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', gap: 1,color:'#fff' }}>
      <XIcon />
      <Typography variant='body1'>
        @Swept_skt
      </Typography>
    </Link> */}
  </Box>
);

export default FooterSnsLinks;
