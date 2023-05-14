import { useContext } from 'react';

import Grid from '@mui/material/Grid';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

import MenuContext from '@/contexts/MenuContext';

import MenuItem from './MenuItem';

const menuItems = [
  {
    Icon: HomeOutlinedIcon,
    label: 'Home',
    id: 1,
  },
  {
    Icon: PersonOutlineOutlinedIcon,
    label: 'About me',
    id: 2,
  },
  {
    Icon: EmojiEventsOutlinedIcon,
    label: 'Skills',
    id: 3,
  },
  {
    Icon: WorkOutlineOutlinedIcon,
    label: 'Experience',
    id: 4,
  },
  {
    Icon: SchoolOutlinedIcon,
    label: 'Education',
    id: 5,
  },
  {
    Icon: ChecklistOutlinedIcon,
    label: 'Ability',
    id: 6,
  },
  {
    Icon: FolderOpenOutlinedIcon,
    label: 'Projects',
    id: 7,
  },
  {
    Icon: ContactMailOutlinedIcon,
    label: 'Contact me',
    id: 8,
  },
];

const Menus = (props) => {
  const { closeMenu } = props;

  const { menu, setMenu } = useContext(MenuContext);

  const handleClick = (id) => {
    setMenu(id);
    closeMenu();
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ padding: 1 }}
      spacing={2}
    >
      {menuItems.map((item) => (
        <Grid
          item
          xs={3}
          key={item.id}
        >
          <MenuItem {...item} selected={menu === item.id} handleClick={handleClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Menus;
