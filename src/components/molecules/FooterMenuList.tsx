import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FooterIcon from '../atoms/FooterIcon';
// ...他のアイコンもimport

const menuItems = [
  { icon: <HomeIcon />, label: 'トップページ', href: '/' },
  { icon: <InfoIcon />, label: 'ビジョン', href: '/vision' },
  // ...他のメニュー
];

const FooterMenuList = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
    {menuItems.map((item) => (
      <FooterIcon key={item.href} href={item.href} icon={item.icon} text={item.label}/>
    ))}
  </Box>
);

export default FooterMenuList;
