import { Box, Typography } from '@mui/material';

const AttachartFooter = () => (
  <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 4 }}>
    <Typography variant="caption" color="text.secondary">
      &copy; {new Date().getFullYear()} attachart
    </Typography>
  </Box>
);

export default AttachartFooter; 