import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import MobileMenuButton from '../atoms/MobileMenuButton';

interface MobileMenuProps {
  isOpen: boolean;
  items: Array<{ to: string; label: string; labelJa: string }>;
}

const MenuOverlay = styled(Box)<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'fixed',
  top: '64px',
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.86)', // 334380の色を95%の透明度で使用
  backdropFilter: 'blur(16px)',
  display: isOpen ? 'flex' : 'none',
  flexDirection: 'column',
  height: 'calc(100vh - 64px)',
  zIndex: 1000,
  '@media (min-width: 768px)': {
    display: 'none',
  },
}));

const MobileMenu = ({ isOpen, items }: MobileMenuProps) => {
  return (
    <MenuOverlay isOpen={isOpen}>
      <Grid container spacing={2} m={2}>
        {items.map((item) => (
          <Grid key={item.to} size={{xs:6}}>
            <MobileMenuButton label={item.label} labelJa={item.labelJa} href={item.to} />
          </Grid>
        ))}
      </Grid>
    </MenuOverlay>
  );
};

export default MobileMenu;