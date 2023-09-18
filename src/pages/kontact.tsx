import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { AnimatedGradientText, OGHead, SideBar, colors } from "."
import { FaDiscord, FaStackOverflow, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <>
      <Head>
        <meta name="description" content="Neemek's home website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <title>External resources</title>
        <OGHead title='Kontact me' description="Submit your email and i'll be in touch!" path="/external"></OGHead>
      </Head>
      <>
        <SideBar></SideBar>
        <main className={styles.main}>
          <div>
            <h1 className={inter.className}><AnimatedGradientText from={(colors[5] ?? '')[0]} to={(colors[5] ?? '')[1]}>Kontact</AnimatedGradientText> me</h1>
          </div>
          <div className={styles.contacting}>
            <a className={styles.contactLink} href="mailto:me@neemek.com"><FaEnvelope /> me@neemek.com</a>
            <a className={styles.contactLink} href="https://twitter.com/neemek_"><FaTwitter /> @Neemek_</a>
            <a className={styles.contactLink} href="https://discord.gg/HFM8DqhngE"><FaDiscord /> Neemek</a>
            <a className={styles.contactLink} href="https://stackoverflow.com/users/19857885/neemek"><FaStackOverflow /> Neemek</a>
            <a className={styles.contactLink} href="https://github.com/Neemek"><FaGithub /> Neemek</a>
          </div>
          <div></div>
        </main>
      </>
    </>
  )
}
