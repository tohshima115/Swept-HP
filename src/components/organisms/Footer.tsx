import { Box, Container } from '@mui/material'
import FooterMenuList from '../molecules/FooterMenuList'
import FooterSnsLinks from '../molecules/FooterSnsLinks'
import FooterPolicyLinks from '../molecules/FooterPolicyLinks'
import FooterCopyright from '../atoms/FooterCopyright'

const Footer = () => (
  <Box component="footer" sx={{ background: '#CC3750', color: '#fff', pt: 4, pb: 2 }}>
    {/* 波型SVGはここに配置 */}
    <Box sx={{ width: '100%', height: 32, mb: -1 }}>
      {/* SVG波型 */}
      <svg width="100%" height="32" viewBox="0 0 360 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32V0C60 24 300 24 360 0V32H0Z" fill="#CC3750"/>
      </svg>
    </Box>
    <Container maxWidth="xs" sx={{ bgcolor: '#CC3750', borderRadius: '0 0 16px 16px', pb: 2 }}>
      <FooterMenuList />
      <FooterSnsLinks />
    </Container>
    <Box sx={{ bgcolor: '#fff', color: 'text.secondary', pt: 2, pb: 1 }}>
      <FooterPolicyLinks />
      <FooterCopyright />
    </Box>
  </Box>
)

export default Footer 