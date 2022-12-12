import React from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/layouts/Navbar'
import Introduction from '../components/layouts/Introduction'
import Projects from '../components/layouts/Projects'
import Contact from '../components/layouts/Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Griffith Baker</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Introduction />
        <Projects />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT Licensed - Griffith Baker {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}
