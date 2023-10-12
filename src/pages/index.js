import Head from 'next/head'
import { Nunito } from 'next/font/google';

import NavBar from '@/components/navBar';
import HomePage from '@/components/home';
import AboutMePage from '@/components/aboutMe';
import SkillsPage from '@/components/skills';
import ExperiencePage from '@/components/experience';
import EducationPage from '@/components/education';
import AbilityPage from '@/components/ability';
import ProjectsPage from '@/components/projects';
import ContactMePage from '@/components/contactMe';

import ThemeModeContext from '@/contexts/ThemeModeContext';
import SectionRefContext from '@/contexts/SectionRefContext';

import styles from '@/styles/Home.module.scss';
import { useContext, useEffect } from 'react';

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
      <main className="bg-gray-100 dark:bg-darkest-grey z-0">
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
