import { createTheme } from '@mui/material/styles'

const BASE_FONT_SIZE_MOBILE = 16
const BASE_FONT_SIZE_DESKTOP = 18

const calculateHeadingSize = (n: number) => ({
  fontSize: `calc(${BASE_FONT_SIZE_MOBILE}px * 8/${n})`,
  '@media (min-width:600px)': {
    fontSize: `calc(${BASE_FONT_SIZE_DESKTOP}px * 8/${n})`,
  },
})

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#334380',
      light: '#E8EAF2',
      dark: '#21295C',
    },
    secondary: {
      main: '#EFE47C',
      light: '#FCFBE7',
      dark: '#D97620',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F4F4F5',
    },
    text: {
      primary: '#1F2337',
      secondary: '#525460',
      disabled: '#787A87',
    },
    divider: '#D5D5D8',
  },
  typography: {
    fontFamily: '"Noto Sans JP", "Caveat", sans-serif',
    h1: {
      ...calculateHeadingSize(3),
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h2: {
      ...calculateHeadingSize(4),
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h3: {
      ...calculateHeadingSize(5),
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      ...calculateHeadingSize(6),
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h5: {
      ...calculateHeadingSize(7),
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h6: {
      ...calculateHeadingSize(7),
      fontWeight: 700,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: `${BASE_FONT_SIZE_MOBILE}px`,
      fontWeight: 400,
      lineHeight: 1.5,
      '@media (min-width:600px)': {
        fontSize: `${BASE_FONT_SIZE_DESKTOP}px`,
      },
    },
    body2: {
      fontSize: `${BASE_FONT_SIZE_MOBILE}px`,
      fontWeight: 700,
      lineHeight: 1.5,
      '@media (min-width:600px)': {
        fontSize: `${BASE_FONT_SIZE_DESKTOP}px`,
      },
    },
    overline: {
      fontSize: `${BASE_FONT_SIZE_MOBILE}px`,
      lineHeight: 2,
      '@media (min-width:600px)': {
        fontSize: `${BASE_FONT_SIZE_DESKTOP}px`,
      },
    },
  },
}) 