import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Palette taken from the old Wix site: teal dot logo, burgundy / teal / grey circles.
let theme = createTheme({
  palette: {
    primary: { main: '#2a8c82', contrastText: '#ffffff' },
    secondary: { main: '#8b1e2d' },
    text: { primary: '#1d1d1f', secondary: '#5b5b63' },
    background: { default: '#fbfaf8', paper: '#ffffff' },
  },
  typography: {
    fontFamily: '"Work Sans", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.015em' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 500 },
    overline: { fontWeight: 600, letterSpacing: '0.12em' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 999 } } },
    MuiPaper: { defaultProps: { elevation: 0 } },
    MuiCard: {
      styleOverrides: { root: { border: '1px solid rgba(0,0,0,0.08)' } },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
