import {
  useState,
  useContext,
  createContext,
  useMemo,
  useEffect,
} from 'react';

import SectionRefContext from '@/contexts/SectionRefContext';

const MenuContext = createContext(1);

const MenuProvider = (props) => {
  const [menu, setMenu] = useState(1);
  const [menuClicked, setMenuClicked] = useState(false);

  const {
    homeScroll,
    aboutMeScroll,
    skillsScroll,
    experienceScroll,
    educationScroll,
    abilityScroll,
    projectsScroll,
    contactMeScroll,
  } = useContext(SectionRefContext);

  useEffect(() => {
    const mapping = {
      1: homeScroll,
      2: aboutMeScroll,
      3: skillsScroll,
      4: experienceScroll,
      5: educationScroll,
      6: abilityScroll,
      7: projectsScroll,
      8: contactMeScroll,
    }

    if (menuClicked) {
      mapping[menu || 1]();
      setMenuClicked(false);
    }
  }, [
    menu,
    menuClicked,
    homeScroll,
    aboutMeScroll,
    skillsScroll,
    experienceScroll,
    educationScroll,
    abilityScroll,
    projectsScroll,
    contactMeScroll,
  ]);

  const providerValue = useMemo(() => ({
    menu,
    setMenu,
    menuClicked,
    setMenuClicked,
  }), [menu, menuClicked]);

  return (
    <MenuContext.Provider value={providerValue}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

export { MenuProvider }
