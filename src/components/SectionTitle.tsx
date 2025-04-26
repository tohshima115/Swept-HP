import { Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}))

interface SectionTitleProps {
  title: string
  subtitle?: string
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <StyledBox>
      <Typography variant="h2" component="h2" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </StyledBox>
  )
}

export default SectionTitle 