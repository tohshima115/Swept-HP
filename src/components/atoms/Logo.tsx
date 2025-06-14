import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoHorizontal } from '../../../public/assets/logoHorizontal.svg'

const Logo = () => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '48px',
        textDecoration: 'none',
        '& svg': {
          height: '48px',
          width: 'auto',
          display: 'block',
        },
      }}
    >
      <LogoHorizontal />
    </Box>
  )
}

export default Logo