import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = styled(Box)({
  width: '48px',
  height: '48px',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const TRANSLATE_DISTANCE = 8.4;

const Line = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open, theme }) => ({
  position: 'absolute',
  width: '32px',
  height: '3.2px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: 4,
  transition: 'all 0.3s ease',
  '&:nth-of-type(1)': {
    top: '8.8px',
    transform: open ? `rotate(45deg) translate(${TRANSLATE_DISTANCE}px, ${TRANSLATE_DISTANCE}px)` : 'none',
  },
  '&:nth-of-type(2)': {
    top: '20.8px',
    transform: open ? 'scaleX(0)' : 'none',
  },
  '&:nth-of-type(3)': {
    top: '32.8px',
    transform: open ? `rotate(-45deg) translate(${TRANSLATE_DISTANCE}px, -${TRANSLATE_DISTANCE}px)` : 'none',
  },
}));

const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  return (
    <HamburgerButton onClick={onClick}>
      <Line open={isOpen} />
      <Line open={isOpen} />
      <Line open={isOpen} />
    </HamburgerButton>
  );
};

export default HamburgerMenu;