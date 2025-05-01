import { Box, Container, Typography, SxProps, Theme } from '@mui/material'
import { useParams } from 'react-router-dom'
import { newsItems } from '../../data/news'
import { Image } from '../atoms/Image'

interface NewsDetailProps {
  sx?: SxProps<Theme>
}

const NewsDetail: React.FC<NewsDetailProps> = ({ sx }) => {
  const { slug } = useParams<{ slug: string }>()
  const news = newsItems.find(item => item.slug === slug)

  if (!news) {
    return (
      <Box sx={sx}>
        <Container maxWidth="lg">
          <Typography variant="h1">記事が見つかりません</Typography>
        </Container>
      </Box>
    )
  }

  return (
    <Box sx={sx}>
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1F2337',
              mb: 2,
            }}
          >
            {news.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Typography variant="body2" color="text.secondary">
              {news.date}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                bgcolor: '#F5F5F5',
                px: 2,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              {news.tag}
            </Typography>
          </Box>
          <Image src={news.imageUrl} alt={news.title} aspectRatio='16:9'/>
          <Typography
            variant="body1"
            sx={{
              whiteSpace: 'pre-line',
              lineHeight: 1.8,
            }}
          >
            {news.content}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default NewsDetail 