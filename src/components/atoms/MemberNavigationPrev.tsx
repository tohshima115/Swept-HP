import { IconButton, SxProps, Theme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface MemberNavigationPrevProps {
  onClick: () => void;
  sx?: SxProps<Theme>;
}

const MemberNavigationPrev: React.FC<MemberNavigationPrevProps> = ({ onClick, sx }) => (
  <IconButton
    onClick={onClick}
    sx={{
      bgcolor: 'rgba(255, 255, 255, 0.7)',
      '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
      pointerEvents: 'auto',
      ...sx
    }}
  >
    <ArrowBackIosNewIcon fontSize="small" />
  </IconButton>
);

export default MemberNavigationPrev; 