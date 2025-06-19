import { createTheme } from '@mui/material/styles';

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

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8C4A5D',
      contrastText: '#ffffff',
    },    
    primaryTonal: {
        main: '#FFD9E1',
        contrastText: '#703346',
      },
    secondary: {
      main: '#75565D',
      contrastText: '#ffffff',
    },    
    secondaryTonal: {
        main: '#FFD9E1',
        contrastText: '#5B3F46',
      },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
}); 