import { useContext } from 'react';

import MenuContext from '@/contexts/MenuContext';
import SVGIcon from '@/components/Icon';

const MenuSVGIcon = ({ name, id }) => {
  const { menu } = useContext(MenuContext);

  return (
    <SVGIcon name={name} selected={menu === id} />
  );
};

const menus = [
  {
    Icon: <MenuSVGIcon name="home" id={1} />,
    label: 'Home',
    id: 1,
  },
  {
    Icon: <MenuSVGIcon name="person" id={2} />,
    label: 'About me',
    id: 2,
  },
  {
    Icon: <MenuSVGIcon name="trophy" id={3} />,
    label: 'Skills',
    id: 3,
  },
  {
    Icon: <MenuSVGIcon name="suitcase" id={4} />,
    label: 'Experience',
    id: 4,
  },
  {
    Icon: <MenuSVGIcon name="books" id={5} />,
    label: 'Education',
    id: 5,
  },
  {
    Icon: <MenuSVGIcon name="listCheck" id={6} />,
    label: 'Ability',
    id: 6,
  },
  {
    Icon: <MenuSVGIcon name="folderOpen" id={7} />,
    label: 'Projects',
    id: 7,
  },
  {
    Icon: <MenuSVGIcon name="addressBook" id={8} />,
    label: 'Contact me',
    id: 8,
  },
];

export default menus;
