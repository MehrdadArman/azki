import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#26B79B',
    },
    secondary: {
      light: '#0066ff',
      main: '#FFFBEB',
      contrastText: '#ffcc00',
    },
    error: {
      main: '#9B0000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});