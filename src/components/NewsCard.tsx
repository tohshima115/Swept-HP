import { Box, Typography, SxProps, Theme } from '@mui/material'
import { News } from '../types/news'

interface NewsCardProps {
  news: News
  sx?: SxProps<Theme>
}

const NewsCard: React.FC<NewsCardProps> = ({ news, sx }) => {
  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        ...sx,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {news.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {news.date}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {news.content}
      </Typography>
    </Box>
  )
}

export default NewsCard 