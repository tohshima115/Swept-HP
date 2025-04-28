import { Grid } from '@mui/material';
import FooterIcon from '../atoms/FooterIcon';
import { menuItems } from '../../constants/menuItems';

const FooterMenuList = () => (
  <Grid container columnSpacing={2}>
    {menuItems.map((item) => (
      <Grid
        key={item.to}
        size={{xs:12,sm:6}}
      >
        <FooterIcon 
          href={item.to} 
          icon={item.icon} 
          text={item.labelJa}
        />
      </Grid>
    ))}
  </Grid>
);

export default FooterMenuList;
