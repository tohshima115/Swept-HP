import { Box, Container, SxProps, Theme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { membersData } from '../../data/members'
import HomeVisionSection from '../organisms/HomeVisionSection'
import HomeServiceSection from '../organisms/HomeServiceSection'
import HomeMemberSection from '../organisms/HomeMemberSection'
import HomeNewsSection from '../organisms/HomeNewsSection'
import HeroGsapScene from '../atoms/HeroGsapScene'
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
        }}
      >
        <HeroGsapScene />
      </Box>

      {/* News Section（各セクションをコンポーネント化） */}
      <Box >
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