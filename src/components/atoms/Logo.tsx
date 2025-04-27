import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface LogoProps {
  color?: string
}

const Logo = ({ color = 'text.primary' }: LogoProps) => {
  return (
    <Typography
      variant="h6"
      component={Link}
      to="/"
      sx={{
        textDecoration: 'none',
        color,
        fontWeight: 700,
      }}
    >
      Swept
    </Typography>
  )
}

export default Logo 