import { useContext } from 'react';
import classNames from 'classnames';

import menus from '@/components/menu/menus';
import useNavigation from '@/hooks/useNavigation';

import MenuContext from '@/contexts/MenuContext';

const DesktopNavBar = () => {
  const { menu, setMenu, setMenuClicked } = useContext(MenuContext);

  const isMobileView = useNavigation();

  const getLogoName = () => '<Hamid />';

  const handleClick = (id) => {
    setMenuClicked(true);
    setMenu(id);
  };

  if (isMobileView || isMobileView === null) {
    return null;
  }

  return (
    <nav className="sticky top-0 bg-gray-100 dark:bg-darkest-grey py-5">
      <div className="flex justify-between items-center">
        <div className="">
          {getLogoName()}
        </div>

        <div className="">
          <div className="flex">
            {menus.map(({ id, Icon, label }) => (
              <div
                key={id}
                className={classNames(
                  'flex items-center p-1 ml-1 rounded-lg cursor-pointer',
                  { 'text-white': menu === id, 'bg-primary': menu === id },
                )}
                onClick={() => handleClick(id)}
              >
                <Icon />
                <label className="cursor-pointer">{label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
