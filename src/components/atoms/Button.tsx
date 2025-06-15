import { Button as MuiButton, ButtonProps, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

const sizeStyles = {
  small: {
    height: '40px',
    padding: '0 16px',
    gap: '8px',
    fontSize: '1rem',
  },
  medium: {
    height: '56px',
    padding: '0 24px',
    gap: '8px',
    fontSize: '1.125rem',
  },
  large: {
    height: '96px',
    padding: '0 48px',
    gap: '12px',
    fontSize: '1.25rem',
  },
}

interface CustomButtonProps extends ButtonProps {
  sizeType?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'primaryTonal'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const StyledButton = styled(MuiButton)<{
  sizeType: 'small' | 'medium' | 'large'
  color: 'primary' | 'primaryTonal'
}>(({ sizeType }) => ({
  ...sizeStyles[sizeType],
  borderRadius: '100px',
  minWidth: 0,
  width: 'auto',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
  fontWeight: 700,
  transition: 'all 0.3s ease',
}))

const Button = ({
  children,
  sizeType = 'medium',
  color = 'primary',
  startIcon,
  endIcon,
  ...props
}: CustomButtonProps) => {
  const gap = sizeStyles[sizeType].gap
  return (
    <StyledButton
      sizeType={sizeType}
      color={color}
      variant='contained'
      disableElevation
      {...props}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap }}>
        {startIcon}
        <Typography
          variant="h6"
          component="span"
          sx={{ fontSize: sizeStyles[sizeType].fontSize, fontWeight: 700 }}
        >
          {children}
        </Typography>
        {endIcon}
      </span>
    </StyledButton>
  )
}

export default Button 