import { createContext } from 'react';

import useScroll from '@/hooks/useScroll';

const SectionRefContext = createContext(null);

const SectionRefProvider = (props) => {
  const [home, homeScroll] = useScroll();
  const [aboutMe, aboutMeScroll] = useScroll();
  const [skills, skillsScroll] = useScroll();
  const [experience, experienceScroll] = useScroll();
  const [education, educationScroll] = useScroll();
  const [ability, abilityScroll] = useScroll();
  const [projects, projectsScroll] = useScroll();
  const [contactMe, contactMeScroll] = useScroll();

  const providerValue = {
    home, homeScroll,
    aboutMe, aboutMeScroll,
    skills, skillsScroll,
    experience, experienceScroll,
    education, educationScroll,
    ability, abilityScroll,
    projects, projectsScroll,
    contactMe, contactMeScroll,
  };

  return (
    <SectionRefContext.Provider value={providerValue}>
      {props.children}
    </SectionRefContext.Provider>
  );
};

export default SectionRefContext;

export { SectionRefProvider }
