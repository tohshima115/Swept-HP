import { Box, Container, Typography, SxProps, Theme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { membersData } from '../../data/members'
import HomeVisionSection from '../organisms/HomeVisionSection'
import HomeServiceSection from '../organisms/HomeServiceSection'
import HomeMemberSection from '../organisms/HomeMemberSection'
import HomeNewsSection from '../organisms/HomeNewsSection'
import ResponsiveTypography from '../atoms/ResponsiveTypography'
// import Spline from '@splinetool/react-spline'

interface HomeProps {
  sx?: SxProps<Theme>
}

const Home: React.FC<HomeProps> = ({ sx }) => {
  const navigate = useNavigate()

  // メンバー表示順をカスタム（2,0,1の順）
  const customOrder = [2, 0, 1];
  const orderedMembers = customOrder.map(i => membersData[i]);

  return (
    <Box sx={sx}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: 'calc(100dvh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 4,
            }}
          >
            <Box>
            <Typography variant="h1" mb={1} fontSize={{sm:'64px'}}
              sx={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: undefined, sm: '64px' },
              }}
            >
              自分の人生を
            </Typography>
            <Typography variant="h1" fontSize={{sm:'64px'}}
              sx={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
            自分のものに
            </Typography>
            </Box>
            <ResponsiveTypography
              variantXs="h4"
              variantSm="h3"
              fontWeight={400}
              color="text.secondary"
            >
              ありのままを受け入れて、<br/>
              あなたの人生を歩む第一歩に
            </ResponsiveTypography>
            {/* Spline 3D Viewer (Reactコンポーネント版) */}
            {/* <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 4, height: '272px' }}>
              <Spline scene="https://prod.spline.design/cV1MggwTiqcCzcum/scene.splinecode" />
            </Box> */}
          </Box>
        </Container>
      </Box>

      {/* News Section（各セクションをコンポーネント化） */}
      <Box sx={{ bgcolor: 'white' }}>
      <Container maxWidth="sm">
      <HomeVisionSection navigate={navigate} />
      <HomeServiceSection navigate={navigate} />
      <HomeMemberSection navigate={navigate} orderedMembers={orderedMembers} />
      <HomeNewsSection navigate={navigate} />
      </Container>
      </Box>
    </Box>
  )
}

export default Home 