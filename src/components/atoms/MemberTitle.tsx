import { Typography, SxProps, Theme } from '@mui/material';

export interface MemberTitleProps {
  title: string;
  sx?: SxProps<Theme>;
}

const MemberTitle: React.FC<MemberTitleProps> = ({ title, sx }) => (
  <Typography variant="h5" color="text.secondary" sx={sx}>
    {title}
  </Typography>
);

export default MemberTitle; 