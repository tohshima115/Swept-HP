import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Slide in={scrollDirection === 'up'} direction="down" timeout={400} appear={false}>
        <AppBar 
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.66)',
            backdropFilter: 'blur(16px)',
            m: 2,
            p: 1,
            borderRadius: '100px',
            width: 'calc(100% - 32px)',
            boxShadow:'0px 4px 20px rgba(0,0,0,0.12)',
            transition: 'box-shadow 0.3s',
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