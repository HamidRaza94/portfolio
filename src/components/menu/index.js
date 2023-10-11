import { useContext } from 'react';
import classNames from 'classnames';

import MenuContext from '@/contexts/MenuContext';

import MenuItem from './MenuItem';
import menus from './menus';

const Menu = (props) => {
  const { closeMenu } = props;

  const { menu, setMenu } = useContext(MenuContext);
  console.log('menu =>', menu, setMenu)

  const handleClick = (id) => {
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
          selected={menu === item.id}
          handleClick={handleClick}
        />
      ))}
      {/* <div
        className={classNames('flex flex-col items-center')}
        onClick={() => handleClick(1)}
      >
        <HomeIcon />
        <label>Home</label>
      </div>

      <div className={classNames('flex flex-col items-center')}>
        <HomeIcon />
        <label>About me</label>
      </div>

      <div className={classNames('flex flex-col items-center')}>
        <HomeIcon />
        <label>Skills</label>
      </div>

      <div className={classNames('flex flex-col items-center')}>
        <HomeIcon />
        <label>Experience</label>
      </div>

      <div className={classNames('flex flex-col items-center')}>
        <HomeIcon />
        <label>Education</label>
      </div>

      <div className={classNames('flex flex-col items-center')}>
        <HomeIcon />
        <label>Ability</label>
      </div>

      <div className={classNames('flex flex-col items-center')}>
        <HomeIcon />
        <label>Projects</label>
      </div>

      <div className={classNames('flex flex-col items-center')}>
        <HomeIcon />
        <label>Contact me</label>
      </div> */}
    </div>
  );
};

export default Menu;
