import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface MenuButtonProps {
  to: string
  label: string
  color?: string
}

const MenuButton = ({ to, label, color = 'text.primary' }: MenuButtonProps) => {
  return (
    <Typography
      component={Link}
      to={to}
      sx={{
        textDecoration: 'none',
        color,
        '&:hover': {
          color: 'primary.main',
        },
      }}
    >
      {label}
    </Typography>
  )
}

export default MenuButton 