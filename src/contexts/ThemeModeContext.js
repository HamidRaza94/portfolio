import { useState, createContext, useMemo, useCallback } from 'react';

import { THEME_MODES } from '../utils/constants';

const ThemeModeContext = createContext(THEME_MODES.light);

const ThemeModeProvider = (props) => {
  const [themeMode, setThemeMode] = useState(THEME_MODES.light);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prevMode) => prevMode === THEME_MODES.light ? THEME_MODES.dark : THEME_MODES.light)
  }, []);

  const providerValue = useMemo(() => ({
    themeMode,
    toggleThemeMode,
  }), [themeMode, toggleThemeMode]);

  return (
    <ThemeModeContext.Provider value={providerValue}>
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeContext;

export { ThemeModeProvider }
