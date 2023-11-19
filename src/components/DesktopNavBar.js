import { useContext } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import menus from '@/components/menu/menus';
import useNavigation from '@/hooks/useNavigation';

import MenuContext from '@/contexts/MenuContext';
import ThemeModeContext from '@/contexts/ThemeModeContext';

const DesktopNavBar = () => {
  const { menu, setMenu, setMenuClicked } = useContext(MenuContext);
  const { lightThemeMode } = useContext(ThemeModeContext);

  const isMobileView = useNavigation();

  const handleClick = (id) => {
    setMenuClicked(true);
    setMenu(id);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      scrollToHome();
    }
  };

  if (isMobileView || isMobileView === null) {
    return null;
  }

  return (
    <nav className="sticky top-0 bg-gray-100 dark:bg-darkest-grey h-14 flex justify-between items-center">
      <div>
        {lightThemeMode ? (
          <Image src="/logo-full-dark.png" alt="Logo" width={150} height={50} />
        ) : (
          <Image src="/logo-full-light.png" alt="Logo" width={150} height={50} />
        )}
      </div>

      <div className="">
        <div className="flex">
          {menus.map(({ id, Icon, label }) => (
            <div
              key={id}
              className={classNames(
                'group flex items-center p-1 ml-1 rounded-lg cursor-pointer hover:text-white hover:bg-primary',
                { 'text-white': menu === id, 'bg-primary': menu === id },
                'dark:text-white',
              )}
              onClick={() => handleClick(id)}
              onKeyDown={handleKeyDown}
            >
              {Icon}
              <label className="cursor-pointer">{label}</label>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
