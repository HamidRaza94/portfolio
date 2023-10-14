import { useContext, useEffect } from 'react';
import Head from 'next/head'
import { useInView } from 'react-intersection-observer';
import { Nunito } from 'next/font/google';

import NavBar from '@/components/navBar';
import ThemeModeContext from '@/contexts/ThemeModeContext';
import SectionRefContext from '@/contexts/SectionRefContext';
import MenuContext from '@/contexts/MenuContext';

import HomePage from './homePage';
import AboutMePage from './aboutMePage';
import SkillsPage from './skillsPage';
import ExperiencePage from './experiencePage';
import EducationPage from './educationPage';
import AbilityPage from './abilityPage';
import ProjectsPage from './projectsPage';
import ContactMePage from './contactMePage';

export default function HomeApp() {
  const { darkThemeMode } = useContext(ThemeModeContext);
  const {
    homeRef,
    aboutMeRef,
    skillsRef,
    experienceRef,
    educationRef,
    abilityRef,
    projectsRef,
    contactMeRef,
  } = useContext(SectionRefContext);
  const { setMenu } = useContext(MenuContext);

  const [homeViewRef, homeInView] = useInView();
  const [aboutMeViewRef, aboutMeInView] = useInView();
  const [skillsViewRef, skillsInView] = useInView();
  const [experienceViewRef, experienceInView] = useInView();
  const [educationViewRef, educationInView] = useInView();
  const [abilityViewRef, abilityInView] = useInView();
  const [projectsViewRef, projectsInView] = useInView();
  const [contactMeViewRef, contactMeInView] = useInView();

  useEffect(() => {
    if (homeInView) {
      setMenu(1);
    } else if (aboutMeInView) {
      setMenu(2);
    } else if (skillsInView) {
      setMenu(3);
    } else if (experienceInView) {
      setMenu(4);
    } else if (educationInView) {
      setMenu(5);
    } else if (abilityInView) {
      setMenu(6);
    } else if (projectsInView) {
      setMenu(7);
    } else if (contactMeInView) {
      setMenu(8);
    }
  }, [
    setMenu, homeInView, aboutMeInView, skillsInView, experienceInView,
    educationInView, abilityInView, projectsInView, contactMeInView,
  ]);

  useEffect(() => {
    if (darkThemeMode) {
      document.querySelector("html").classList.add('dark');
    } else {
      document.querySelector("html").classList.remove('dark');
    }
  }, [darkThemeMode]);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Mohammad Hamid Raza Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 dark:bg-darkest-grey z-0 transition-all duration-500 transform">
        <section ref={homeRef}>
          <HomePage ref={homeViewRef}/>
        </section>

        <section ref={aboutMeRef}>
          <AboutMePage ref={aboutMeViewRef}/>
        </section>

        <section ref={skillsRef}>
          <SkillsPage ref={skillsViewRef}/>
        </section>

        <section ref={experienceRef}>
          <ExperiencePage ref={experienceViewRef}/>
        </section>

        <section ref={educationRef}>
          <EducationPage ref={educationViewRef}/>
        </section>

        <section ref={abilityRef}>
          <AbilityPage ref={abilityViewRef}/>
        </section>

        <section ref={projectsRef}>
          <ProjectsPage ref={projectsViewRef}/>
        </section>

        <section ref={contactMeRef}>
          <ContactMePage ref={contactMeViewRef}/>
        </section>
      </main>
      <NavBar />
    </>
  );
}
