import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AttachartFooter = () => (
  <Box component="footer" sx={{ py: 3, textAlign: 'center', bgcolor: 'background.paper', mt: 'auto', color: 'var(--color-on-surface-variant)' }}>
    <Link to="/attachart/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>
      <Typography variant="body2">プライバシーポリシー</Typography>
    </Link>
    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
      &copy; {new Date().getFullYear()} Swept, Inc.
    </Typography>
  </Box>
);

export default AttachartFooter; 