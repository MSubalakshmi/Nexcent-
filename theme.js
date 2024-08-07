import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
    secondary: {
      main: '#00FF66',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
});

export default theme;
