import { useContext, useEffect } from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Nunito } from 'next/font/google';

import MobileNavBar from '@/components/MobileNavBar';
import DesktopNavBar from '@/components/DesktopNavBar';
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

import UpIcon from '@/assets/icons/circle-chevron-up.svg';
import LightModeIcon from '@/assets/icons/new/son.svg';
import DarkModeIcon from '@/assets/icons/new/moon.svg';

export default function HomeApp(props) {
  const { contactNo, emailAddress } = props;

  const { darkThemeMode, toggleThemeMode } = useContext(ThemeModeContext);
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
  const { setMenu, setMenuClicked } = useContext(MenuContext);

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

  const scrollToHome = () => {
    setMenuClicked(true);
    setMenu(1);
  };

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Mohammad Hamid Raza Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed bottom-14 inset-x-2/4 z-10 cursor-pointer md:left-5 md:bottom-4" onClick={scrollToHome}>
        <UpIcon className="stroke-dark-grey dark:stroke-gray-300 hover:stroke-primary dark:hover:stroke-primary opacity-25 hover:opacity-100 md:opacity-100" />
      </div>
      <div className="hidden fixed left-5 bottom-12 z-50 cursor-pointer w-11 h-11 justify-center items-center md:flex md:bottom-14">
        {darkThemeMode ? (
          <DarkModeIcon
            className="stroke-dark-grey dark:stroke-gray-300 hover:stroke-primary dark:hover:stroke-primary"
            onClick={() => toggleThemeMode()}
          />
        ) : (
          <LightModeIcon
            className="stroke-dark-grey dark:stroke-gray-300 hover:stroke-primary dark:hover:stroke-primary"
            onClick={() => toggleThemeMode()}
          />
        )}
      </div>
      <main className="bg-gray-100 dark:bg-darkest-grey z-0 transition-all duration-500 transform px-2 md:px-10">
        <DesktopNavBar />
        <section ref={homeRef} className="min-h-[calc(100vh)] mb-10 md:pt-14 flex justify-center items-center">
          <HomePage ref={homeViewRef}/>
        </section>

        <section ref={aboutMeRef} className="min-h-[calc(100vh)] mb-10 md:pt-14 flex justify-center items-center">
          <AboutMePage ref={aboutMeViewRef}/>
        </section>

        <section ref={skillsRef} className="min-h-[calc(100vh)] mb-10 md:pt-14">
          <SkillsPage ref={skillsViewRef}/>
        </section>

        <section ref={experienceRef} className="min-h-[calc(100vh)] mb-10 md:pt-14">
          <ExperiencePage ref={experienceViewRef}/>
        </section>

        <section ref={educationRef} className="min-h-[calc(100vh)] mb-10 md:pt-14">
          <EducationPage ref={educationViewRef}/>
        </section>

        <section ref={abilityRef} className="min-h-[calc(100vh)] mb-10 md:pt-14">
          <AbilityPage ref={abilityViewRef}/>
        </section>

        <section ref={projectsRef} className="min-h-[calc(100vh)] mb-10 md:pt-14">
          <ProjectsPage ref={projectsViewRef}/>
        </section>

        <section ref={contactMeRef} className="min-h-[calc(100vh)] mb-10 md:pt-14">
          <ContactMePage
            ref={contactMeViewRef}
            contactNo={contactNo}
            emailAddress={emailAddress}
          />
        </section>
      </main>
      <MobileNavBar />
    </>
  );
}

HomeApp.propTypes = {
  contactNo: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
};

export const getStaticProps = () => {
  const contactNo = process.env.CONTACT_NUMBER;
  const emailAddress = process.env.SMTP_FROM_EMAIL;

  return { props: { contactNo, emailAddress } };
};
