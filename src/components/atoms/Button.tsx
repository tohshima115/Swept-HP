import { Button as MuiButton, ButtonProps, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(() => ({
  height: '48px',
  borderRadius: '24px',
  width: '100%',
  background: 'var(--gradient-primary)',
  '&:hover': {
    background: 'var(--gradient-primary)',
    opacity: 0.9,
    transform: 'translateY(-1px)',
    transition: 'all 0.3s ease',
  },
  '&.Mui-disabled': {
    background: 'rgba(0, 0, 0, 0.12)',
    color: 'rgba(0, 0, 0, 0.26)',
    transform: 'none',
  },
  '&.MuiButton-outlined': {
    background: 'transparent',
    border: '2px solid transparent',
    backgroundImage: 'linear-gradient(#fff, #fff), var(--gradient-primary)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    boxShadow: '2px 1000px 1px #fff inset',
    '&:hover': {
      background: 'transparent',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(#fff, #fff), var(--gradient-primary)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
      boxShadow: '2px 1000px 1px #fff inset',
      opacity: 0.9,
      transform: 'translateY(-1px)',
      transition: 'all 0.3s ease',
    },
    '&.Mui-disabled': {
      background: 'transparent',
      border: '2px solid rgba(0, 0, 0, 0.12)',
      backgroundImage: 'none',
      boxShadow: 'none',
      color: 'rgba(0, 0, 0, 0.26)',
      transform: 'none',
    }
  }
}))

interface CustomButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined'
}

const Button = ({ children, variant = 'contained', ...props }: CustomButtonProps) => {
  return (
    <Grid container sx={{width:'100%'}}>
      <Grid size={{xs:8}} offset={{ xs: 2}}>
        <StyledButton variant={variant} {...props}>
          <Typography variant="h6" component="span">
            {children}
          </Typography>
        </StyledButton>
      </Grid>
    </Grid>
  )
}

export default Button 