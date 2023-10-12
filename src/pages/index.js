import Head from 'next/head'
import { Nunito } from 'next/font/google';

import NavBar from '@/components/navBar';
import HomePage from '@/components/home';
import AboutMePage from '@/components/aboutMe';

import ThemeModeContext from '@/contexts/ThemeModeContext';

import styles from '@/styles/Home.module.scss';
import { useContext, useEffect } from 'react';

export default function HomeApp() {
  const { darkThemeMode } = useContext(ThemeModeContext);

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
      <main className="bg-grey z-0">
        <HomePage />
        <AboutMePage />
      </main>
      <NavBar />
    </>
  );
}
//  h-screen min-h-screen