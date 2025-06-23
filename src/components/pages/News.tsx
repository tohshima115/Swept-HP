import { Container, Box } from '@mui/material'
import NewsCard from '../molecules/NewsCard'
import { Heading1 } from '../atoms/typography'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useStore from '../../store/useStore'
import logoUrl from '../../assets/logoHorizontal169.svg?url'

const News = () => {
  const navigate = useNavigate()
  const newsList = useStore((state) => state.newsList.data)
  const fetchNewsList = useStore((state) => state.fetchNewsList)

  useEffect(() => {
    fetchNewsList()
  }, [fetchNewsList])

  // データがまだない場合はローディング表示
  if (newsList.length === 0) {
    return (
      <Container maxWidth="md" sx={{ mt: 16, mb: 5 }}>
        <p>読み込み中...</p>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" >
      <Box sx={{ mt: 16, mb: 5 }}>
        <Heading1 titleEn={'News'} titleJa={'ニュース'} />
        <Box sx={{display:'flex',flexFlow:'column',alignItems:'center' }}>
          <Box maxWidth="sm" sx={{ mt: 5,display:'flex',flexFlow:'column',alignItems:'center' }}>
            {newsList.map((item) => (
              <NewsCard
                key={item.id}
                date={new Date(item.publishedAt || item.createdAt).toLocaleDateString()}
                title={item.title}
                imageSrc={item.thumbnail?.url || logoUrl}
                imageAlt={item.title}
                isNews={item.category?.name === 'ニュース'}
                onClick={() => navigate(`/news/${item.id}`)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default News 