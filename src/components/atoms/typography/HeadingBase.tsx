import { styled } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';

export interface HeadingBaseProps extends TypographyProps {
  component?: React.ElementType;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Caveat, "Noto Sans JP", sans-serif',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

export const HeadingBase = ({ children, ...props }: HeadingBaseProps) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
}; 