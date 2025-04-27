import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

interface MobileMenuButtonProps extends ButtonProps {
  label: string;
  labelJa: string;
}

const StyledButton = styled(Button)({
    padding:'8px',
  width: '100%',
  fontFamily: 'Caveat, "Noto Sans JP", sans-serif',
  fontSize: '42.66px',
  fontWeight: 700,
  lineHeight: 1.4,
  color: '#FFFFFF',
  border: 'none',
  borderRadius: 2,
  textTransform: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const LabelJa = styled('span')({
  fontSize: '32px',
  fontFamily: '"Yorutegaki", "Noto Sans JP", sans-serif',
});

const MobileMenuButton = ({ label, labelJa, ...props }: MobileMenuButtonProps) => {
  return (
    <StyledButton {...props}>
      {label}
      <LabelJa>{labelJa}</LabelJa>
    </StyledButton>
  );
};

export default MobileMenuButton; 