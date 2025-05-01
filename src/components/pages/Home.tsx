import { Box, Container, Typography, SxProps, Theme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import { newsItems } from '../../data/news'
import { Heading1 } from '../atoms/typography'
import { Image } from '../atoms/Image'
import NewsCard from '../molecules/NewsCard'

interface HomeProps {
  sx?: SxProps<Theme>
}

const Home: React.FC<HomeProps> = ({ sx }) => {
  const navigate = useNavigate()

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
          </Box>
        </Container>
      </Box>

      {/* News Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box>
            <Heading1 titleEn={'Vision'} titleJa={'ビジョン'}/>
            <Typography variant='h3'>
              自分の人生を<br/>
              自分のものに
            </Typography>
            <Button
                onClick={() => navigate('/vision')}
              >
                詳しく見る
            </Button>
          </Box>
          <Box>
            <Heading1 titleEn={'Service'} titleJa={'サービス'}/>
            <Image src={'https://picsum.photos/1600/900'} alt={''}/>

            <Typography variant='h3'>
              ataccha
            </Typography>
            <Button
                onClick={() => navigate('/service')}
              >
                詳しく見る
            </Button>
          </Box>
          <Box>
            <Heading1 titleEn={'Member'} titleJa={'メンバー'}/>
            <Image src={'https://picsum.photos/1600/900'} alt={''}/>

            <Typography variant='h3'>
              ataccha
            </Typography>
            <Button
                onClick={() => navigate('/member')}
              >
                詳しく見る
            </Button>
          </Box>
          <Heading1 titleEn={'News'} titleJa={'ニュース'}/>
          <Box>
            {newsItems.map((news) => (
              <NewsCard
              key={news.slug}
              date={news.date}
              title={news.title}
              imageSrc={news.imageUrl}
              imageAlt={news.title}
              isNews={news.tag === 'ニュース'}
              onClick={() => navigate(`/news/${news.slug}`)}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 