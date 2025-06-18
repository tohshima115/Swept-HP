import Button from './Button'
import { Link } from 'react-router-dom'

interface MenuButtonProps {
  to: string
  label: string
  color?: 'primary' | 'primaryTonal'
  variant?: 'contained' | 'text'
}

const MenuButton = ({ to, label, color = 'primary', variant = 'text' }: MenuButtonProps) => {
  return (
    <Button
      component={Link}
      to={to}
      color={color}
      variant={variant}
      sizeType="medium"
    >
      {label}
    </Button>
  )
}

export default MenuButton 