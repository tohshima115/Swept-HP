import { Box, Container, Typography, SxProps, Theme } from '@mui/material'
import { useParams } from 'react-router-dom'
import { newsItems } from '../../data/news'
import { Image } from '../atoms/Image'
import CategoryTag from '../atoms/CategoryTag'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'

interface NewsDetailProps {
  sx?: SxProps<Theme>
}

const NewsDetail: React.FC<NewsDetailProps> = ({ sx }) => {

const navigate = useNavigate()
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
      <Container maxWidth="md">
        <Box mt={8} mb={5}>
            <Image src={news.imageUrl} alt={news.title} aspectRatio='16:9'/>
          <Box mb={2} sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
            <CategoryTag isNews={news.tag === 'ニュース'}/>
            <Typography variant="body1" color="text.secondary">
              {news.date}
            </Typography>
          </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: '32px',
                fontWeight: 700,
                color: 'text.primary',
                mb: 3,
              }}
            >
              {news.title}
            </Typography>
          <Typography mb={5}>
            {news.content}
          </Typography>
          <Button
                onClick={() => navigate('/news')}
              >
                ニュース一覧に戻る
            </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default NewsDetail 