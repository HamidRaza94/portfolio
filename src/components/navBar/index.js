import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Drawer from '@mui/material/Drawer';

import Logo from '@/components/logo';

import Menus from './Menus';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AppBar position="fixed" color="white" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Logo />
          <IconButton color="primary" aria-label="toggle theme">
            <WbSunnyOutlinedIcon />
          </IconButton>
          <IconButton color="primary" aria-label="open drawer" onClick={() => setIsMenuOpen(true)}>
            <GridViewOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="bottom"
        open={isMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          square: false,
          sx: { borderRadius: '5px 5px 0 0' }
        }}
      >
        <Menus closeMenu={handleMenuClose} />
      </Drawer>
    </>
  );
};

export default NavBar;
