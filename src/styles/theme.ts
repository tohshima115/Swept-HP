import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomTheme {
    gradients: {
      primary: string
    }
  }
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
}

export const BASE_FONT_SIZE_MOBILE = 16
export const BASE_FONT_SIZE_DESKTOP = 18

const baseTheme = createTheme({ breakpoints })

const calculateHeadingSize = (n: number) => ({
  fontSize: `calc(${BASE_FONT_SIZE_MOBILE}px * 8/${n})`,
  [baseTheme.breakpoints.up('sm')]: {
    fontSize: `calc(${BASE_FONT_SIZE_DESKTOP}px * 8/${n})`,
  },
})

export const theme = createTheme({
  breakpoints,
  palette: {
    mode: 'light',
    primary: {
      main: '#CC3750',
      light: '#FBE4E9',
      dark: '#7E2442',
    },
    secondary: {
      main: '#CC379A',
      light: '#F9E4F0',
      dark: '#770070',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F4F4',
    },
    text: {
      primary: '#4b3539',
      secondary: '#605255',
      disabled: '#87787A',
    },
    divider: '#D8D5D5',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--gradient-primary': 'linear-gradient(-20deg, #CC3778 0%, #cc3750 100%)',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
      },
    },
  },
  typography: {
    fontFamily: "Noto Sans JP",
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
      ...calculateHeadingSize(8),
      fontWeight: 700,
      lineHeight: 1.5,
    },
    body1: {
      ...calculateHeadingSize(8),
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      ...calculateHeadingSize(8),
      fontWeight: 400,
      lineHeight: 2,
    },
    subtitle1:{
      ...calculateHeadingSize(9),
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
}) 