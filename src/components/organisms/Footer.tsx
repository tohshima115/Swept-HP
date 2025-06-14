import { Box, Container, useTheme } from '@mui/material'
import FooterMenuList from '../molecules/FooterMenuList'
import FooterSnsLinks from '../molecules/FooterSnsLinks'
import FooterPolicyLinks from '../molecules/FooterPolicyLinks'
import FooterCopyright from '../atoms/FooterCopyright'

const Footer = () => {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ position: 'relative', background: 'background.default', color: 'primary.contrastText',pt:5 }}>
      {/* 波型SVG */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '40px',
        overflow: 'hidden',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 64" width="100%" height="40" preserveAspectRatio="none">
          <path 
            d="M -100 64 Q -50 64 0 32 Q 100 -32 200 32 Q 250 64 300 64 Q 350 64 400 32 Q 500 -32 600 32 Q 650 64 700 64 L 400 64 L 0 64 Z" 
            fill={theme.palette.primary.main}
          />
        </svg>
      </Box>
      
      <Box sx={{ bgcolor: 'primary.main', py: 2 }}>
        <Container maxWidth="sm" sx={{display:'flex',flexFlow:'column', gap:3,}}>
          <FooterMenuList />
          <FooterSnsLinks />
        </Container>
      </Box>
      
      <Box sx={{ bgcolor:'background.paper', color: 'primaryTonal.contrastText', pt: 2, pb: 1 }}>
        <FooterPolicyLinks />
        <FooterCopyright />
      </Box>
    </Box>
  )
}

export default Footer 