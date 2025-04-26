import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface NewsCardProps {
  date: string
  title: string
  tag: string
  image: string
  onClick?: () => void
}

const NewsCard = ({ date, title, tag, image, onClick }: NewsCardProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2,
        borderRadius: 2,
        bgcolor: 'white',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 200,
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            color: '#525460',
            fontSize: '14px',
          }}
        >
          {date}
        </Typography>
        <Box
          sx={{
            bgcolor: tag === 'ニュース' ? '#E8EAF2' : '#FCFBE7',
            color: tag === 'ニュース' ? '#21295C' : '#D97620',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            fontSize: '14px',
          }}
        >
          {tag}
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: '#1F2337',
          fontSize: '16px',
          lineHeight: 1.5,
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default NewsCard 