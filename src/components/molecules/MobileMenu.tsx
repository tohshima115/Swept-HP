import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import MobileMenuButton from '../atoms/MobileMenuButton';

interface MobileMenuProps {
  isOpen: boolean;
  items: Array<{ to: string; label: string; labelJa: string }>;
  onClose?: () => void;
}

const MenuOverlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
  position: 'fixed',
  top: '64px',
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.86)', // 334380の色を95%の透明度で使用
  backdropFilter: 'blur(16px)',
  display: open ? 'flex' : 'none',
  flexDirection: 'column',
  height: 'calc(100vh - 64px)',
  zIndex: 1000,
  '@media (min-width: 768px)': {
    display: 'none',
  },
}));

const MobileMenu = ({ isOpen, items, onClose }: MobileMenuProps) => {
  return (
    <MenuOverlay open={isOpen}>
      <Grid container spacing={2} m={2}>
        {items.map((item) => (
          <Grid key={item.to} size={{xs:6}}>
            <MobileMenuButton label={item.label} labelJa={item.labelJa} to={item.to} onClick={onClose} />
          </Grid>
        ))}
      </Grid>
    </MenuOverlay>
  );
};

export default MobileMenu;