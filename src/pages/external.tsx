import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { AnimatedGradientText, SideBar, colors, OGHead } from "."
import { FaDiscord, FaStackOverflow, FaTwitter } from 'react-icons/fa'

const inter = Inter({subsets: ['latin']})

export default function ExternalLinksPage() {
  return (
    <>
        <Head>
          <meta name="description" content="Neemek's home website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>External resources</title>
          <OGHead title='Resources' description="Neemek's website" path="/external"></OGHead>
        </Head>
        <>
        <SideBar></SideBar>
        <main className={styles.main}>
            <div>
              <h1 className={inter.className}><AnimatedGradientText from={(colors[2] ?? '')[0]} to={(colors[2] ?? '')[1]}>External</AnimatedGradientText> resources</h1>
            </div>
            <div className={styles.xList}>
              <a href="https://twitter.com/Neemek_"><FaTwitter size={64}/></a>
              <a href="https://stackoverflow.com/users/19857885/neemek"><FaStackOverflow size={64} /></a>
              <a href="https://discord.gg/HFM8DqhngE"><FaDiscord size={64}/></a>
            </div>
        </main>
        </>
    </>
  )
}
