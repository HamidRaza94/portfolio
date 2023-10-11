import { useContext, useState } from 'react';
import classNames from 'classnames';

import Drawer from '@/components/drawer';
import Menu from '@/components/menu';

import ThemeModeContext from '@/contexts/ThemeModeContext';
import LightModeIcon from '@/assets/icons/light-mode.svg';
import DarkModeIcon from '@/assets/icons/dark-mode.svg';
import AppIcon from '@/assets/icons/apps.svg';
import { THEME_MODES } from '@/utils/constants';

const NavBar = () => {
  const [clicked, setClicked] = useState(true);
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

  const getLogoName = () => '<Hamid />';

  return (
    <nav>
      <div className={classNames('fixed bottom-0 flex justify-between w-full px-3 py-2 bg-white dark:bg-dark-grey text-black dark:text-white')}>
        <h1 className='text-2xl'>{getLogoName()}</h1>
        <div className={classNames('flex justify-center')}>
          {themeMode === THEME_MODES.light ? (
            <div style={{ width: 24, height: 24 }}>
              <LightModeIcon onClick={() => toggleThemeMode()} />
            </div>
          ) : <DarkModeIcon onClick={() => toggleThemeMode()} />}
          <AppIcon onClick={() => setClicked(!clicked)} />
        </div>
      </div>
      <Drawer open={clicked}>
        <Menu closeMenu={() => setClicked(false)} />
      </Drawer>
    </nav>
  );
};

export default NavBar;
