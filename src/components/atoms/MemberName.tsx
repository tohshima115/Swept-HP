import { Box, Typography, SxProps, Theme } from '@mui/material';

export interface MemberNameProps {
  name: string;
  nameEn: string;
  sx?: SxProps<Theme>;
}

const MemberName: React.FC<MemberNameProps> = ({ name, nameEn, sx }) => (
  <Box sx={sx}>
    <Typography variant="h3" component="p" sx={{ fontWeight: 'bold' }}>
      {name}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ display: 'block' }}>
      {nameEn}
    </Typography>
  </Box>
);

export default MemberName; 