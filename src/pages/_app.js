import { MenuProvider } from '@/contexts/MenuContext';
import { ThemeModeProvider } from '@/contexts/ThemeModeContext';
import { SectionRefProvider } from '@/contexts/SectionRefContext';

import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <ThemeModeProvider>
      <SectionRefProvider>
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </SectionRefProvider>
    </ThemeModeProvider>
  );
}
