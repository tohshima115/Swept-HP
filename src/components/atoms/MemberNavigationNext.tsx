import { IconButton, SxProps, Theme } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface MemberNavigationNextProps {
  onClick: () => void;
  sx?: SxProps<Theme>;
}

const MemberNavigationNext: React.FC<MemberNavigationNextProps> = ({ onClick, sx }) => (
  <IconButton
    onClick={onClick}
    sx={{
      bgcolor: 'rgba(255, 255, 255, 0.7)',
      '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
      pointerEvents: 'auto',
      ...sx
    }}
  >
    <ArrowForwardIosIcon fontSize="small" />
  </IconButton>
);

export default MemberNavigationNext; 