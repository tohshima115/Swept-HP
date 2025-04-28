import { Box, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface Heading1Props {
  titleEn: string;
  titleJa: string;
}

const TitleEn = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: '56px',
  fontFamily: 'Caveat, sans-serif',
  color: theme.palette.primary.main,
  lineHeight: 1.4,
  textShadow: `
    0.2px 0 0 ${theme.palette.primary.main},
    -0.2px 0 0 ${theme.palette.primary.main},
    0 0.2px 0 ${theme.palette.primary.main},
    0 -0.2px 0 ${theme.palette.primary.main}
  `,
  fontWeight:700,
}));

const Slash = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: '56px',
  fontFamily: 'Caveat, sans-serif',
  color: theme.palette.primary.main,
  lineHeight: 1.4,
  fontWeight:'400',
}));

const TitleJa = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: '28px',
  fontFamily: '"Yorutegaki", sans-serif',
  color: theme.palette.primary.main,
  height: '56px',
  lineHeight: '56px',
  textShadow: `
  0.2px 0 0 ${theme.palette.primary.main},
  -0.2px 0 0 ${theme.palette.primary.main},
  0 0.2px 0 ${theme.palette.primary.main},
  0 -0.2px 0 ${theme.palette.primary.main}
`,
}));

const StyledHeading1 = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.h1.fontWeight,
  lineHeight: theme.typography.h1.lineHeight,
  [theme.breakpoints.down('sm')]: {
    fontSize: `calc(${theme.typography.h1.fontSize} * 0.8)`,
  },
  // アニメーション用のスタイルを追加する場所
  // transition: 'all 0.3s ease-in-out',
  // '&:hover': {
  //   transform: 'scale(1.05)',
  // },
}));

export const Heading1 = ({ titleEn, titleJa }: Heading1Props) => {
  return (
    <StyledHeading1 variant="h1" component="h1">
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
        <TitleEn>{titleEn}</TitleEn>
        <Slash>/</Slash>
        <TitleJa>{titleJa}</TitleJa>
      </Box>
    </StyledHeading1>
  );
}; 