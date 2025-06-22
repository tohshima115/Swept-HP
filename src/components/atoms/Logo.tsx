import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoHorizontal } from '@/assets/logoHorizontal.svg'
import { ReactComponent as LogoVertical } from '@/assets/logoVertical.svg'
import { ReactComponent as LogoMark } from '@/assets/logoMark.svg'
import { ReactComponent as LogoMarkNoMargin } from '@/assets/logoMarkNoMargin.svg'

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | number
  color?: 'default' | 'white'
  variant?: 'horizontal' | 'vertical' | 'mark' | 'markNoMargin'
}

const sizeMap = {
  small: 32,
  medium: 48,
  large: 72,
}

const Logo = ({ size = 'medium', color = 'default', variant = 'horizontal' }: LogoProps) => {
  const pxSize = typeof size === 'number' ? size : sizeMap[size]

  const LogoComponent = {
    horizontal: LogoHorizontal,
    vertical: LogoVertical,
    mark: LogoMark,
    markNoMargin: LogoMarkNoMargin,
  }[variant]

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
      <LogoComponent />
    </Box>
  )
}

export default Logo