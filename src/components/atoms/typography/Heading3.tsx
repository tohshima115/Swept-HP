import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface Heading3Props {
  title: string;
  required?: boolean;
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const VerticalBar = styled(Box)(({ theme }) => ({
  width: '4px',
  height: '40px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '2px',
}));

export const Heading3 = ({ title, required = false }: Heading3Props) => {
  return (
    <StyledBox>
      <VerticalBar />
      <Typography variant="h6" component="h3" sx={{ color: 'text.primary'}}>
        {title}
        {required && (
          <Typography
            component="span"
            variant="body2"
            sx={{ color: 'text.secondary'}}
          >
            （必須）
          </Typography>
        )}
      </Typography>
    </StyledBox>
  );
}; 