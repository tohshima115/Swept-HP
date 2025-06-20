import { Box, useTheme, useMediaQuery } from '@mui/material';
import Button from '@/components/atoms/Button';

interface OptionsButtonGroupProps<T> {
  options: readonly T[];
  value: T | string;
  onChange: (value: T) => void;
  columns: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; };
}

export const OptionsButtonGroup = <T extends string>({
  options,
  value,
  onChange,
  columns,
}: OptionsButtonGroupProps<T>) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  
  let currentCol = 1;
  if (typeof columns === 'number') {
    currentCol = columns;
  } else {
    if (isMdUp) {
      currentCol = columns.md || columns.sm || columns.xs || 1;
    } else if (isSmUp) {
      currentCol = columns.sm || columns.xs || 1;
    } else {
      currentCol = columns.xs || 1;
    }
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${currentCol}, 1fr)`,
        gap: '2px', // ボタン間の隙間を少し空ける
      }}
    >
      {options.map((option, index) => {
        const isSelected = value === option;
        const isFirstInRow = index % currentCol === 0;
        const isLastInRow = (index % currentCol === currentCol - 1) || (index === options.length - 1);

        const wrapperRadius = '100px';
        const wrapperBorderRadius = `${isFirstInRow ? wrapperRadius : 0} ${isLastInRow ? wrapperRadius : 0} ${isLastInRow ? wrapperRadius : 0} ${isFirstInRow ? wrapperRadius : 0}`;

        return (
          <Box
            key={option}
            sx={{
              position: 'relative',
              borderRadius: wrapperBorderRadius,
              overflow: 'hidden',
              // Add transition to the wrapper for smoother radius changes on responsive layout shifts
              transition: theme.transitions.create(['border-radius'], {
                duration: theme.transitions.duration.short,
              }),
            }}
          >
            <Button
              color={isSelected ? 'primary' : 'primaryTonal'}
              onClick={() => onChange(option)}
              sizeType="small"
              variant="contained"
              sx={{
                width: '100%',
                height: '48px',
                // Always set button's own radius, wrapper will clip it.
                borderRadius: isSelected ? '100px' : '12px',
                // The transition is now on the button itself.
                transition: theme.transitions.create(['background-color'], {
                  duration: theme.transitions.duration.short,
                }),
              }}
            >
              {option}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
}; 