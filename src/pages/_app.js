import '@/styles/global.scss';

import { ThemeModeProvider } from '@/contexts/ThemeModeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />
    </ThemeModeProvider>
  );
}
