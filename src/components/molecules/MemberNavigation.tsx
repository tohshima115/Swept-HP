import { Box, SxProps, Theme } from '@mui/material';
import MemberNavigationPrev from '../atoms/MemberNavigationPrev';
import MemberNavigationNext from '../atoms/MemberNavigationNext';

interface MemberNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  sx?: SxProps<Theme>;
}

const MemberNavigation: React.FC<MemberNavigationProps> = ({ onPrev, onNext, sx }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', px: 1, pointerEvents: 'none', ...sx }}>
    <MemberNavigationPrev onClick={onPrev} />
    <MemberNavigationNext onClick={onNext} />
  </Box>
);

export default MemberNavigation; 