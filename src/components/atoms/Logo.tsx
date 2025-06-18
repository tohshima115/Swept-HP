import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoHorizontal } from '../../../public/assets/logoHorizontal.svg'

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | number
  color?: 'default' | 'white'
}

const sizeMap = {
  small: 32,
  medium: 48,
  large: 72,
}

const Logo = ({ size = 'medium', color = 'default' }: LogoProps) => {
  const pxSize = typeof size === 'number' ? size : sizeMap[size]
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: pxSize,
        textDecoration: 'none',
        '& svg': {
          height: pxSize,
          width: 'auto',
          display: 'block',
          ...(color === 'white' && {
            filter: 'brightness(0) invert(1)',
          }),
        },
      }}
    >
      <LogoHorizontal />
    </Box>
  )
}

export default Logo