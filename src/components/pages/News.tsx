import { Container, Box } from '@mui/material'
import NewsCard from '../molecules/NewsCard'
import { Heading1 } from '../atoms/typography'
import { newsItems } from '../../data/news'
import { useNavigate } from 'react-router-dom'

const News = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="md" >
      <Box sx={{ mt: 8, mb: 5 }}>
        <Heading1 titleEn={'News'} titleJa={'ニュース'} />
        <Box sx={{display:'flex',flexFlow:'column',alignItems:'center' }}>
          <Box maxWidth="sm" sx={{ mt: 5,display:'flex',flexFlow:'column',alignItems:'center' }}>
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
      </Box>
    </Container>
  )
}

export default News 