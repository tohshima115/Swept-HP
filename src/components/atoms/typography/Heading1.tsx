import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export interface Heading1Props {
  titleEn: string;
  titleJa: string;
}

export const Heading1 = ({ titleEn  }: Heading1Props) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Gill Sans MT',
          color: theme.palette.primary.main,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {titleEn}
      </Typography>
      {/* <Typography
        variant="h1"
        sx={{
          fontFamily: 'Gill Sans MT',
          color: theme.palette.primary.main,
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        /
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'M PLUS 1',
          color: theme.palette.primary.main,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {titleJa}
      </Typography> */}
    </Box>
  );
}; 