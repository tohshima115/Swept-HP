import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
}

const HamburgerButton = styled(Box)({
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const TRANSLATE_DISTANCE = 8.5;

const Line = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'color',
})<{ open: boolean; color?: string }>(({ open, color, theme }) => ({
  position: 'absolute',
  width: '32px',
  height: '4px',
  backgroundColor: color || theme.palette.primary.main,
  borderRadius: 4,
  transition: 'all 0.3s ease',
  '&:nth-of-type(1)': {
    top: '6px',
    transform: open ? `rotate(45deg) translate(${TRANSLATE_DISTANCE}px, ${TRANSLATE_DISTANCE}px)` : 'none',
  },
  '&:nth-of-type(2)': {
    top: '18px',
    transform: open ? 'scaleX(0)' : 'none',
  },
  '&:nth-of-type(3)': {
    top: '30px',
    transform: open ? `rotate(-45deg) translate(${TRANSLATE_DISTANCE}px, -${TRANSLATE_DISTANCE}px)` : 'none',
  },
}));

const HamburgerMenu = ({ isOpen, onClick, color }: HamburgerMenuProps) => {
  return (
    <HamburgerButton onClick={onClick}>
      <Line open={isOpen} color={color} />
      <Line open={isOpen} color={color} />
      <Line open={isOpen} color={color} />
    </HamburgerButton>
  );
};

export default HamburgerMenu;