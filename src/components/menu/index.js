import { useContext } from 'react';
import classNames from 'classnames';

import MenuContext from '@/contexts/MenuContext';

import MenuItem from './MenuItem';
import menus from './menus';

const Menu = (props) => {
  const { closeMenu } = props;

  const { menu, setMenu, setMenuClicked } = useContext(MenuContext);

  const handleClick = (id) => {
    setMenuClicked(true);
    setMenu(id);
    closeMenu();
  };

  return (
    <div className={classNames('grid gap-4 grid-cols-4')}>
      {menus.map((item) => (
        <MenuItem
          key={item.id}
          text={item.label}
          Icon={item.Icon}
          id={item.id}
          selected={menu === item.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Menu;
