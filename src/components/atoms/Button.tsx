import { Button as MuiButton, ButtonProps, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(() => ({
  height:'48px',
  borderRadius:'24px',
  width:'100%'
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