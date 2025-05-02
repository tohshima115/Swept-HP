import { Box, Typography, CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface FooterIconProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const FooterIcon = ({ icon, text, href }: FooterIconProps) => (
  <CardActionArea component={RouterLink} to={href} sx={{ textDecoration: 'none', color: 'inherit' }}>
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2, 
      p: 2,
      borderBottom: 1,
      borderColor: 'divider'
    }}>
      {icon}
      <Typography variant="h6" fontWeight={400}>{text}</Typography>
    </Box>
  </CardActionArea>
);

export default FooterIcon;