import { Button as MuiButton, ButtonProps, Typography, TypographyProps } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'

const sizeStyles = {
  small: {
    height: '40px',
    minWidth: '40px',
    padding: '0 16px',
    gap: '8px',
    fontSize: '1rem',
    iconSize: '24px',
  },
  medium: {
    height: '56px',
    minWidth: '56px',
    padding: '0 24px',
    gap: '8px',
    fontSize: '1.125rem',
    iconSize: '24px',
  },
  large: {
    height: '96px',
    minWidth: '96px',
    padding: '0 48px',
    gap: '12px',
    fontSize: '1.25rem',
    iconSize: '32px',
  },
}

const typographyVariantMap: Record<'small' | 'medium' | 'large', TypographyProps['variant']> = {
  small: 'button',
  medium: 'h6',
  large: 'h4',
};

interface CustomButtonProps extends ButtonProps {
  sizeType?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'primaryTonal'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: 'contained' | 'text' | 'outlined'
  to?: string
  component?: React.ElementType
  target?: string
  rel?: string
  fullWidth?: boolean
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
  target,
  rel,
  fullWidth,
  ...props
}: CustomButtonProps) => {
  const extraProps: Record<string, unknown> = {};
  if (component) extraProps.component = component;
  if (to) extraProps.to = to;
  if (target) extraProps.target = target;
  if (rel) extraProps.rel = rel;

  // アイコンをサイズに応じてラップする
  const wrapIcon = (icon: React.ReactNode, position: 'start' | 'end') => {
    if (!icon) return null;
    return (
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          width: sizeStyles[sizeType].iconSize,
          height: sizeStyles[sizeType].iconSize,
          '& > *': {
            width: '100%',
            height: '100%',
            color: variant === 'text' ? 'text.secondary' : undefined,
          },
          margin: '0 !important',
          marginLeft: position === 'start' ? '0 !important' : undefined,
          marginRight: position === 'end' ? '0 !important' : undefined,
        }}
      >
        {icon}
      </Box>
    );
  };

  return (
    <MuiButton
      color={color}
      variant={variant}
      disableElevation
      fullWidth={fullWidth}
      sx={{
        ...sizeStyles[sizeType],
        borderRadius: '100px',
        width: fullWidth ? '100%' : 'auto',
        display: fullWidth ? 'flex' : 'inline-flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'none',
        fontWeight: 700,
        transition: 'all 0.3s ease',
        ...(children ? {} : { padding: '8px' }),
        '& .MuiButton-startIcon, & .MuiButton-endIcon': {
          margin: '0 !important',
        },
        ...(variant === 'outlined' ? {
          backgroundColor: 'transparent',
          border: '1px solid',
          borderColor: 'divider',
        } : {}),
      }}
      startIcon={wrapIcon(startIcon, 'start')}
      endIcon={wrapIcon(endIcon, 'end')}
      {...extraProps}
      {...props}
    >
      {children && (
        <Typography
          variant={typographyVariantMap[sizeType]}
          component="span"
          color={variant === 'text' ? 'text.secondary' : undefined}
        >
          {children}
        </Typography>
      )}
    </MuiButton>
  )
}

export default Button 