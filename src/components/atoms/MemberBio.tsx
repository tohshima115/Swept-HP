import { Box, Typography, SxProps, Theme } from '@mui/material';

export interface MemberBioProps {
  bio: string;
  sx?: SxProps<Theme>;
}

const MemberBio: React.FC<MemberBioProps> = ({ bio, sx }) => (
  <Box sx={sx}>
    <Typography color="text.primary">
      {bio}
    </Typography>
  </Box>
);

export default MemberBio; 