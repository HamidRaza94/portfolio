import { useMemo, useContext } from 'react';
import Head from 'next/head'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from '@/components/navBar';
import styles from '@/styles/Home.module.scss';
import ThemeModeContext from '@/contexts/ThemeModeContext';
import theme from '../theme';

export default function Home() {
  const { themeMode } = useContext(ThemeModeContext);

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
        <section></section>
        <NavBar />
      </main>
    </ThemeProvider>
  );
}
