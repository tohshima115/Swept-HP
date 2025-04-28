import { Box, Container, Typography, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import NewsCard from '../NewsCard'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box>
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
          <Grid container spacing={4}>
            <Grid size={{xs:12, md:4}}>
              <NewsCard
                date="2024.03.15"
                title="Sweptが新サービスを開始しました"
                tag="ニュース"
                image="/images/news1.jpg"
                onClick={() => navigate('/news/1')}
              />
            </Grid>
            <Grid size={{xs:12, md:4}}>
              <NewsCard
                date="2024.03.10"
                title="イベント開催のお知らせ"
                tag="イベント"
                image="/images/news2.jpg"
                onClick={() => navigate('/news/2')}
              />
            </Grid>
            <Grid size={{xs:12, md:4}}>
              <NewsCard
                date="2024.03.05"
                title="採用情報を更新しました"
                tag="ニュース"
                image="/images/news3.jpg"
                onClick={() => navigate('/news/3')}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 