import { THEME_MODES } from './utils/constants'

const PRIMARY_COLOR = '#6B63C7';
const WHITE_COLOR = '#FFFFFF';
const BLACK_COLOR = '#000000';
const DARK_GREY_COLOR = '#656565';
const LIGHT_GREY_COLOR = '#E9E9E9';
const LIGHTEST_GREY_COLOR = '#F9F9F9';

const basicTheme = {
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    white: WHITE_COLOR,
    black: {
      main: BLACK_COLOR,
    },
    lightGrey: LIGHT_GREY_COLOR,
    grey: DARK_GREY_COLOR,
    lightestGrey: LIGHTEST_GREY_COLOR,
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: "Nunito, Roboto, sans-serif"
  },
  button: {},
};

const lightTheme = {
  ...basicTheme,
  navBar: {
    color: PRIMARY_COLOR,
    backgroundColor: WHITE_COLOR,
  },
  menu: {
    backgroundColor: WHITE_COLOR,
    selectedMenu: LIGHT_GREY_COLOR,
    text: BLACK_COLOR,
  },
  app: {
    backgroundColor: LIGHTEST_GREY_COLOR,
  },
};

const darkTheme = {
  ...basicTheme,
  navBar: {
    color: WHITE_COLOR,
    backgroundColor: DARK_GREY_COLOR,
  },
  menu: {
    backgroundColor: DARK_GREY_COLOR,
    selectedMenu: WHITE_COLOR,
    text: WHITE_COLOR,
  },
  app: {
    backgroundColor: LIGHTEST_GREY_COLOR,
  },
};

const theme = mode => mode === THEME_MODES.light ? lightTheme : darkTheme;

export default theme;
