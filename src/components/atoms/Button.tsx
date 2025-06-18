import { Button as MuiButton, ButtonProps, Typography } from '@mui/material'
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
  variant?: 'contained' | 'text'
  to?: string
  component?: React.ElementType
}

const Button = ({
  children,
  sizeType = 'medium',
  color = 'primary',
  startIcon,
  endIcon,
  variant = 'contained',
  to,
  component,
  ...props
}: CustomButtonProps) => {
  const extraProps: Record<string, unknown> = {};
  if (component) extraProps.component = component;
  if (to) extraProps.to = to;
  return (
    <MuiButton
      color={color}
      variant={variant}
      disableElevation
      sx={{
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
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      {...extraProps}
      {...props}
    >
      <Typography
        variant="h6"
        component="span"
        sx={{ fontSize: sizeStyles[sizeType].fontSize, fontWeight: 700 }}
      >
        {children}
      </Typography>
    </MuiButton>
  )
}

export default Button 