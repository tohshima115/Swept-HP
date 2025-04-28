import { Typography } from '@mui/material';

const FooterCopyright = () => (
  <Typography variant="body2" color="text.secondary" align="center" sx={{ fontSize: 12 }}>
    © {new Date().getFullYear()} Swept, All Rights Reserved.
  </Typography>
);

export default FooterCopyright;
