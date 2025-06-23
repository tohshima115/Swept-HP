import { Box, Container, SxProps, Theme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { membersData } from '../../data/members'
import HomeVisionSection from '../organisms/HomeVisionSection'
// import HomeServiceSection from '../organisms/HomeServiceSection'
import HomeMemberSection from '../organisms/HomeMemberSection'
import HomeNewsSection from '../organisms/HomeNewsSection'
import HeroFootprintScene from '../atoms/HeroFootprintScene'
// import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'

interface HomeProps {
  sx?: SxProps<Theme>
}

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.25, duration: 0.7, ease: 'easeOut' },
  }),
}

const Home: React.FC<HomeProps> = ({ sx }) => {
  const navigate = useNavigate()

  // メンバー表示順をカスタム（2,0,1の順）
  const customOrder = [2, 0, 1]
  const orderedMembers = customOrder.map(i => membersData[i])

  return (
    <Box sx={{ position: 'relative', minHeight: '200vh', overflow: 'hidden', ...sx }}>
      {/* 固定背景（パララックスなし） */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Box sx={{ width: '100%', height: '100vh' }}>
          <HeroFootprintScene />
        </Box>
      </Box>

      {/* フェードインで現れるセクション */}
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, pt: { xs: 8, md: 12 } }}>
        <AnimatePresence>
          {/* Visionセクションだけ中央寄せ */}
          <Box key="spacer-1" sx={{ minHeight: '33vh' }} />

            <motion.div
              key="vision"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <HomeVisionSection navigate={navigate} />
            </motion.div>
          <Box key="spacer-2" sx={{ minHeight: '33vh' }} />

          {/* セクション間スペース */}
          <motion.div
            key="member"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <HomeMemberSection navigate={navigate} orderedMembers={orderedMembers} />
          </motion.div>
          <Box key="spacer-3" sx={{ minHeight: '33vh' }} />
          <motion.div
            key="news"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <HomeNewsSection navigate={navigate} />
          </motion.div>
          <Box key="spacer-4" sx={{ minHeight: '33vh' }} />
        </AnimatePresence>
      </Container>
    </Box>
  )
}

export default Home 