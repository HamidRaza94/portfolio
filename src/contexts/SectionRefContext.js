import { createContext } from 'react';

import useScroll from '@/hooks/useScroll';

const SectionRefContext = createContext(null);

const SectionRefProvider = (props) => {
  const [homeRef, homeScroll] = useScroll();
  const [aboutMeRef, aboutMeScroll] = useScroll();
  const [skillsRef, skillsScroll] = useScroll();
  const [experienceRef, experienceScroll] = useScroll();
  const [educationRef, educationScroll] = useScroll();
  const [abilityRef, abilityScroll] = useScroll();
  const [projectsRef, projectsScroll] = useScroll();
  const [contactMeRef, contactMeScroll] = useScroll();

  const providerValue = {
    homeRef, homeScroll,
    aboutMeRef, aboutMeScroll,
    skillsRef, skillsScroll,
    experienceRef, experienceScroll,
    educationRef, educationScroll,
    abilityRef, abilityScroll,
    projectsRef, projectsScroll,
    contactMeRef, contactMeScroll,
  };

  return (
    <SectionRefContext.Provider value={providerValue}>
      {props.children}
    </SectionRefContext.Provider>
  );
};

export default SectionRefContext;

export { SectionRefProvider }
