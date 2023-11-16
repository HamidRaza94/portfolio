import { useContext, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Drawer from '@/components/drawer';
import Menu from '@/components/menu';
import useNavigation from '@/hooks/useNavigation';

import ThemeModeContext from '@/contexts/ThemeModeContext';
import LightModeIcon from '@/assets/icons/light-mode.svg';
import DarkModeIcon from '@/assets/icons/dark-mode.svg';
import AppIcon from '@/assets/icons/apps.svg';

const MobileNavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { lightThemeMode, toggleThemeMode } = useContext(ThemeModeContext);
  const isMobileView = useNavigation();

  if (!isMobileView || isMobileView === null) {
    return null;
  }

  return (
    <nav className="z-20">
      <div className={classNames('fixed bottom-0 flex justify-between items-center w-full px-3 py-2 bg-white dark:bg-dark-grey text-black dark:text-white')}>
        <div>
          {lightThemeMode ? (
            <Image src="/logo-full-dark.png" alt="Logo" width={100} height={20} />
          ) : (
            <Image src="/logo-full-light.png" alt="Logo" width={100} height={20} />
          )}
        </div>
        <div className={classNames('flex justify-center')}>
          {lightThemeMode ? (
            <div style={{ width: 24, height: 24 }}>
              <LightModeIcon onClick={() => toggleThemeMode()} />
            </div>
          ) : <DarkModeIcon onClick={() => toggleThemeMode()} />}
          <div className={classNames('ml-2')}>
            <AppIcon onClick={() => setMenuOpened(!menuOpened)} />
          </div>
        </div>
      </div>
      <Drawer open={menuOpened}>
        <Menu closeMenu={() => setMenuOpened(false)} />
      </Drawer>
    </nav>
  );
};

export default MobileNavBar;
