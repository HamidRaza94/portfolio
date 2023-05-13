import { createTheme, ThemeProvider } from '@mui/material/styles';

import theme from '../theme';
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
