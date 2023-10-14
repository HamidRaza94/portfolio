import { useContext, useEffect } from 'react';
import Head from 'next/head'
import { Nunito } from 'next/font/google';

import NavBar from '@/components/navBar';
import ThemeModeContext from '@/contexts/ThemeModeContext';
import SectionRefContext from '@/contexts/SectionRefContext';

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
    home,
    aboutMe,
    skills,
    experience,
    education,
    ability,
    projects,
    contactMe,
  } = useContext(SectionRefContext);

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
        <section ref={home}>
          <HomePage />
        </section>

        <section ref={aboutMe}>
          <AboutMePage />
        </section>

        <section ref={skills}>
          <SkillsPage />
        </section>

        <section ref={experience}>
          <ExperiencePage />
        </section>

        <section ref={education}>
          <EducationPage />
        </section>

        <section ref={ability}>
          <AbilityPage />
        </section>

        <section ref={projects}>
          <ProjectsPage />
        </section>

        <section ref={contactMe}>
          <ContactMePage />
        </section>
      </main>
      <NavBar />
    </>
  );
}
