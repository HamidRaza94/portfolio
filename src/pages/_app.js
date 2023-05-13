import { MenuProvider } from '@/contexts/MenuContext';
import { ThemeModeProvider } from '@/contexts/ThemeModeContext';
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <ThemeModeProvider>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </ThemeModeProvider>
  );
}
