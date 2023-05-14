import { useMemo, useContext } from 'react';
import Head from 'next/head'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from '@/components/navBar';

import Home from '@/components/home';
import AboutMe from '@/components/aboutMe';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Ability from '@/components/ability';
import Projects from '@/components/projects';
import ContactMe from '@/components/contactMe';

import styles from '@/styles/Home.module.scss';
import ThemeModeContext from '@/contexts/ThemeModeContext';
import SectionRefContext from '@/contexts/SectionRefContext';

import theme from '../theme';

export default function HomeApp() {
  const { themeMode } = useContext(ThemeModeContext);
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

  const customTheme = useMemo(() => theme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={createTheme(customTheme)}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Mohammad Hamid Raza Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles['max-height']} ref={home}>
          <Home />
        </section>

        <section className={styles['max-height']} ref={aboutMe}>
          <AboutMe />
        </section>

        <section className={styles['max-height']} ref={skills}>
          <Skills />
        </section>

        <section className={styles['max-height']} ref={experience}>
          <Experience />
        </section>

        <section className={styles['max-height']} ref={education}>
          <Education />
        </section>

        <section className={styles['max-height']} ref={ability}>
          <Ability />
        </section>

        <section className={styles['max-height']} ref={projects}>
          <Projects />
        </section>

        <section className={styles['max-height']} ref={contactMe}>
          <ContactMe />
        </section>
      </main>
      <NavBar />
    </ThemeProvider>
  );
}
