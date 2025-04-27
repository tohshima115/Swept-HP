import { Box } from '@mui/material'
import MenuButton from '../atoms/MenuButton'

interface MenuItem {
  to: string
  label: string
}

interface MenuButtonGroupProps {
  items: MenuItem[]
  color?: string
}

const MenuButtonGroup = ({ items, color }: MenuButtonGroupProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {items.map((item) => (
        <MenuButton
          key={item.to}
          to={item.to}
          label={item.label}
          color={color}
        />
      ))}
    </Box>
  )
}

export default MenuButtonGroup 