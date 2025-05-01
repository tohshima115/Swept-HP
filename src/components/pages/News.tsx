import { Container, Box } from '@mui/material'
import NewsCard from '../molecules/NewsCard'
import { Heading1 } from '../atoms/typography'
import { newsItems } from '../../data/news'
import { useNavigate } from 'react-router-dom'

const News = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 3, mb: 5 }}>
        <Heading1 titleEn={'News'} titleJa={'ニュース'} />
        <Box sx={{ mt: 5 }}>
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
      </Box>
    </Container>
  )
}

export default News 