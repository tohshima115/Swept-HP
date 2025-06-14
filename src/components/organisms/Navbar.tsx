import { useState } from 'react';
import { AppBar, Toolbar, Box, Grid, useMediaQuery, useTheme, Button as MuiButton } from '@mui/material';
import Logo from '../atoms/Logo';
import MenuButtonGroup from '../molecules/MenuButtonGroup';
import MobileMenu from '../molecules/MobileMenu';
import { menuItems } from '../../constants/menuItems';
import { Link as RouterLink } from 'react-router-dom';
import HamburgerMenuFab from '../atoms/HamburgerMenuFab';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
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
              <Grid size={{xs:6, md:9}} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', alignItems: 'center' }}>
                <MuiButton
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  sx={{
                    minWidth: 0,
                    px: 2,
                    py: 1,
                    height: '40px',
                    borderRadius: '20px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    boxShadow: 'none',
                    '&:hover': {
                      background: theme.palette.primary.dark || theme.palette.primary.main,
                    },
                    whiteSpace: 'nowrap',
                  }}
                >
                  お問い合わせ
                </MuiButton>
              </Grid>
              <Grid size={{xs:12, md:9}} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                <MenuButtonGroup items={menuItems} />
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
        {isMobile && <MobileMenu isOpen={isMenuOpen} items={menuItems} onClose={handleCloseMenu} />}
      </AppBar>
      {isMobile && (
        <HamburgerMenuFab
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          bgcolor={theme.palette.primaryTonal.main}
          iconColor={theme.palette.primaryTonal.contrastText}
        />
      )}
    </>
  );
};

export default Navbar; 