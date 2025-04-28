import { Box, Typography, CardActionArea, Link } from '@mui/material';

interface FooterIconProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const FooterIcon = ({ icon, text, href }: FooterIconProps) => (
  <CardActionArea>
    <Link href={href} component="a" sx={{ textDecoration: 'none', color: 'inherit' }}>
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
    </Link>
  </CardActionArea>
);

export default FooterIcon;