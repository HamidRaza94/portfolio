import { THEME_MODES } from './utils/constants'

const lightTheme = {
  palette: {
    primary: {
      main: '#6B63C7',
    },
    white: '#FFFFFF',
    black: {
      main: '#000000',
    },
    grey: '#E9E9E9',
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
};

const theme = (mode) => {
  if (mode === THEME_MODES.light) {
    return lightTheme;
  }

  return lightTheme;
};

export default theme;
