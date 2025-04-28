import { Box } from '@mui/material';
import FooterIcon from '../atoms/FooterIcon';
import { menuItems } from '../../constants/menuItems';

const FooterMenuList = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
    {menuItems.map((item) => (
      <FooterIcon 
        key={item.to} 
        href={item.to} 
        icon={item.icon} 
        text={item.labelJa}
      />
    ))}
  </Box>
);

export default FooterMenuList;
