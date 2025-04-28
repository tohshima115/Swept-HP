import { Box, Container, Typography, SxProps, Theme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import NewsCard from '../NewsCard'
import { News } from '../../types/news'

interface HomeProps {
  sx?: SxProps<Theme>
}

const Home: React.FC<HomeProps> = ({ sx }) => {
  const navigate = useNavigate()

  const newsItems: News[] = [
    {
      id: 1,
      date: '2024-03-01',
      title: '新サービス「Swept」のリリース',
      content: '新サービス「Swept」をリリースしました。',
      tag: 'ニュース',
      imageUrl: '/images/news1.jpg',
    },
    {
      id: 2,
      date: '2024-02-15',
      title: '採用情報更新',
      content: '新規採用情報を更新しました。',
      tag: '採用',
      imageUrl: '/images/news2.jpg',
    },
    {
      id: 3,
      date: '2024-01-10',
      title: 'オフィス移転のお知らせ',
      content: 'オフィスを移転しました。',
      tag: 'お知らせ',
      imageUrl: '/images/news3.jpg',
    },
  ]

  return (
    <Box sx={sx}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#F5F5F5',
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
            <Typography
              variant="h1"
              sx={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#1F2337',
                lineHeight: 1.2,
              }}
            >
              自分らしく輝ける社会へ
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: '24px',
                fontWeight: 400,
                color: '#525460',
                lineHeight: 1.5,
              }}
            >
              安心できるつながりの中で
            </Typography>
            <Button
              onClick={() => navigate('/contact')}
            >
              詳しく見る
            </Button>
          </Box>
        </Container>
      </Box>

      {/* News Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1F2337',
              mb: 4,
            }}
          >
            お知らせ
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {newsItems.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 