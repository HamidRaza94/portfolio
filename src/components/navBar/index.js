import { useState, useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Drawer from '@mui/material/Drawer';

import Logo from '@/components/logo';
import ThemeModeContext from '@/contexts/ThemeModeContext';

import Menus from './Menus';
import { THEME_MODES } from '../../utils/constants';

const NavBar = () => {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let ThemeModeIcon = WbSunnyOutlinedIcon;

  if (themeMode === THEME_MODES.dark) {
    ThemeModeIcon = NightlightRoundOutlinedIcon;
  }

  return (
    <>
      <AppBar position="fixed" color="white" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Logo />
          <IconButton
            color="primary"
            aria-label="toggle theme"
            onClick={toggleThemeMode}
          >
            <ThemeModeIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={() => setIsMenuOpen(true)}
          >
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
