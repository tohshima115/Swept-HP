import { useState } from 'react';
import { AppBar, Box, Grid, useMediaQuery, useTheme, Slide } from '@mui/material';
import Logo from '../atoms/Logo';
import MenuButtonGroup from '../molecules/MenuButtonGroup';
import MobileMenu from '../molecules/MobileMenu';
import { menuItems } from '../../constants/menuItems';
import { Link as RouterLink } from 'react-router-dom';
import HamburgerMenuFab from '../atoms/HamburgerMenuFab';
import Button from '../atoms/Button';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollDirection = useScrollDirection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Slide in={scrollDirection === 'up'} direction="down" timeout={400} appear={false}>
        <AppBar 
          position="fixed"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.66)',
            backdropFilter: 'blur(16px)',
            boxShadow: 8,
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            m: 2,
            p: 1,
            borderRadius: '100px',
            width: 'calc(100% - 32px)',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid size={{xs:6, md:3}} >
                <Logo size={isMobile ? 'medium' : 56} />
              </Grid>
              <Grid size={{xs:6, md:9}} sx={{pr:'4px', display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  color="primary"
                  variant="contained"
                  sizeType="small"
                >
                  お問い合わせ
                </Button>
              </Grid>
              <Grid size={{xs:12, md:9}} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                <MenuButtonGroup items={menuItems} />
              </Grid>
            </Grid>
          </Box>
        </AppBar>
      </Slide>
      {isMobile && <MobileMenu isOpen={isMenuOpen} items={menuItems} onClose={handleCloseMenu} />}
      {isMobile && (
        <HamburgerMenuFab
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          bgcolor={isMenuOpen ? theme.palette.primary.main : theme.palette.primaryTonal.main}
          iconColor={isMenuOpen ? theme.palette.primary.contrastText : theme.palette.primaryTonal.contrastText}
        />
      )}
    </>
  );
};

export default Navbar; 