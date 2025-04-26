import { Card as MuiCard, CardProps, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledCard = styled(MuiCard)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}))

interface CustomCardProps extends CardProps {
  image?: string
  title?: string
  description?: string
}

const Card = ({ image, title, description, children, ...props }: CustomCardProps) => {
  return (
    <StyledCard {...props}>
      {image && (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent>
        {title && (
          <Typography variant="h5" component="h3" gutterBottom>
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        )}
        {children}
      </CardContent>
    </StyledCard>
  )
}

export default Card 