import { useContext, useEffect } from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
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

export default function HomeApp(props) {
  const { contactNo, emailAddress } = props;

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
      <main className="bg-gray-100 dark:bg-darkest-grey z-0 transition-all duration-500 transform p-2">
        <section ref={homeRef} className="min-h-screen h-screen">
          <HomePage ref={homeViewRef}/>
        </section>

        <section ref={aboutMeRef} className="min-h-screen h-screen">
          <AboutMePage ref={aboutMeViewRef}/>
        </section>

        <section ref={skillsRef} className="min-h-screen h-screen">
          <SkillsPage ref={skillsViewRef}/>
        </section>

        <section ref={experienceRef} className="min-h-screen h-screen">
          <ExperiencePage ref={experienceViewRef}/>
        </section>

        <section ref={educationRef} className="min-h-screen h-screen">
          <EducationPage ref={educationViewRef}/>
        </section>

        <section ref={abilityRef} className="min-h-screen h-screen">
          <AbilityPage ref={abilityViewRef}/>
        </section>

        <section ref={projectsRef} className="min-h-screen h-screen">
          <ProjectsPage ref={projectsViewRef}/>
        </section>

        <section ref={contactMeRef} className="min-h-screen h-screen">
          <ContactMePage
            ref={contactMeViewRef}
            contactNo={contactNo}
            emailAddress={emailAddress}
          />
        </section>
      </main>
      <NavBar />
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
