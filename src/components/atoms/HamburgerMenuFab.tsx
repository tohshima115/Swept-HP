import { Box } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';

interface HamburgerMenuFabProps {
  isOpen: boolean;
  onClick: () => void;
  bgcolor: string;
  iconColor: string;
}

const HamburgerMenuFab = ({ isOpen, onClick, bgcolor, iconColor }: HamburgerMenuFabProps) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: 1301,
        display: { xs: 'flex', md: 'none' },
      }}
    >
      <Box
        sx={{
          boxShadow: 6,
          borderRadius: isOpen ? '50%' : '20px',
          bgcolor: bgcolor,
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background 0.2s, border-radius 0.2s',
        }}
        onClick={onClick}
      >
        <HamburgerMenu isOpen={isOpen} onClick={onClick} color={iconColor} />
      </Box>
    </Box>
  );
};

export default HamburgerMenuFab; 