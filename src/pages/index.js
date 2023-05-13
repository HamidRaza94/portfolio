import Head from 'next/head'

import NavBar from '@/components/navBar';
import styles from '@/styles/Home.module.scss';
import { MenuProvider } from '@/contexts/MenuContext';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Mohammad Hamid Raza Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuProvider>
        <main className={styles.main}>
          <section></section>
          <NavBar />
        </main>
      </MenuProvider>
    </>
  )
}
