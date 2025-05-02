import { Box, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

export interface Heading1Props {
  titleEn: string;
  titleJa: string;
}

// フォントサイズ・lineHeightの定数定義
const HEADING1_FONT_SIZES = {
  xs: {
    en: 56,
    ja: 28,
  },
  sm: {
    en: 72,
    ja: 36,
  },
};

const getFontSize = (key: 'en' | 'ja', theme: Theme) => ({
  fontSize: `${HEADING1_FONT_SIZES.xs[key]}px`,
  [theme.breakpoints.up('sm')]: {
    fontSize: `${HEADING1_FONT_SIZES.sm[key]}px`,
  },
});

const TitleEn = styled('span')(({ theme }) => ({
  display: 'block',
  ...getFontSize('en', theme),
  lineHeight:1.4,
  fontFamily: 'Caveat, sans-serif',
  color: theme.palette.primary.main,
  textShadow: `
    0.2px 0 0 ${theme.palette.primary.main},
    -0.2px 0 0 ${theme.palette.primary.main},
    0 0.2px 0 ${theme.palette.primary.main},
    0 -0.2px 0 ${theme.palette.primary.main}
  `,
  fontWeight: 700,
}));

const Slash = styled('span')(({ theme }) => ({
  display: 'block',
  ...getFontSize('en', theme), // Slashも英語と同じサイズ
  lineHeight:1.4,
  fontFamily: 'Caveat, sans-serif',
  color: theme.palette.primary.main,
  fontWeight: '400',
}));

const TitleJa = styled('span')(({ theme }) => ({
  display: 'block',
  ...getFontSize('ja', theme),
  fontFamily: '"Yorutegaki", sans-serif',
  color: theme.palette.primary.main,
  lineHeight: `${HEADING1_FONT_SIZES.xs.en}px`,
  [theme.breakpoints.up('sm')]: {
    lineHeight: `${HEADING1_FONT_SIZES.sm.en}px`,
  },
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