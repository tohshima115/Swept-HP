import { Button as MuiButton, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 'bold',
  padding: '12px 24px',
  fontSize: '16px',
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '&.MuiButton-outlined': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.dark,
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