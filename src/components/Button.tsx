import { Button as MuiButton, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(() => ({
  borderRadius: '64px',
  textTransform: 'none',
  fontWeight: 700,
  padding: '10px',
  fontSize: '18.29px',
  fontFamily: 'Noto Sans JP, sans-serif',
  boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
  '&.MuiButton-contained': {
    backgroundColor: '#334380',
    color: '#F5F5F5',
    '&:hover': {
      backgroundColor: '#2A3768',
    },
  },
  '&.MuiButton-outlined': {
    borderColor: '#334380',
    color: '#334380',
    '&:hover': {
      backgroundColor: '#E8E8E8',
      borderColor: '#2A3768',
    },
  },
}))

interface CustomButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined'
}

const Button = ({ children, variant = 'contained', ...props }: CustomButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button 