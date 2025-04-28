import { useState } from 'react';
import { AppBar, Toolbar, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Logo from '../atoms/Logo';
import MenuButtonGroup from '../molecules/MenuButtonGroup';
import MobileMenu from '../molecules/MobileMenu';
import HamburgerMenu from '../atoms/HamburgerMenu';
import { menuItems } from '../../constants/menuItems';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar 
      position="fixed"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.66)',
        backdropFilter: 'blur(16px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        height: '64px',
      }}
    >
      <Toolbar sx={{ minHeight: '64px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{xs:6, md:3}} >
              <Logo />
            </Grid>
            <Grid size={{xs:2,sm:1, md:9}} offset={{xs:4,sm:5, md:0}} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
              <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
            </Grid>
            <Grid size={{xs:12, md:9}} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <MenuButtonGroup items={menuItems} />
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
      {isMobile && <MobileMenu isOpen={isMenuOpen} items={menuItems} />}
    </AppBar>
  );
};

export default Navbar; 