import { Box, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

interface FooterIconProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const FooterIcon = ({ icon, text, href }: FooterIconProps) => (
  <CardActionArea>
    <Link to={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
        {icon}
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Link>
  </CardActionArea>
);

export default FooterIcon;