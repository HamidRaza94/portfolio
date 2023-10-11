import '@/styles/global.scss';

import { ThemeModeProvider } from '@/contexts/ThemeModeContext';
import { SectionRefProvider } from '@/contexts/SectionRefContext';
import { MenuProvider } from '@/contexts/MenuContext';

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
