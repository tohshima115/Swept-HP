import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomTheme {
    gradients: {
      primary: string
    }
  }
  interface Palette {
    primaryTonal: Palette['primary'];
    secondaryTonal: Palette['secondary'];
  }
  interface PaletteOptions {
    primaryTonal?: PaletteOptions['primary'];
    secondaryTonal?: PaletteOptions['secondary'];
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
      main: '#01677D',
      contrastText: '#FFFFFF',
    },
    primaryTonal: {
      main: '#B2EBFF',
      contrastText: '#004E5F',
    },
    secondary: {
      main: '#4B626A',
      contrastText: '#FFFFFF',
    },
    secondaryTonal: {
      main: '#CEE6F0',
      contrastText: '#344A52',
    },
    background: {
      default: '#F5FAFD',
      paper: '#DBE4E8',
    },
    text: {
      primary: '#171C1E',
      secondary: '#40484B',
      disabled: '#87787A',
    },
    divider: '#BFC8CC',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
      },
    },
  },
  typography: {
    fontFamily: "M PLUS 1",
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
    button:{
      ...calculateHeadingSize(8),
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },
}) 

import '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primaryTonal: true;
    secondaryTonal: true;
  }
}