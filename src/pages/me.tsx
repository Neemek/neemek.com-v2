import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { AnimatedGradientText, OGHead, SideBar, colors } from "."
import { FaDiscord, FaStackOverflow, FaTwitter } from 'react-icons/fa'

const inter = Inter({subsets: ['latin']})

export default function AboutMePage() {
  return (
    <>
        <Head>
          <meta name="description" content="Neemek's home website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>About me</title>
          <OGHead title='About me' description="About me: Neemek." path="/me"></OGHead>
        </Head>
        <>
        <SideBar></SideBar>
        <main className={styles.main}>
            <div>
              <h1 className={inter.className}>About <AnimatedGradientText from={(colors[3] ?? '')[0]} to={(colors[3] ?? '')[1]}>Me</AnimatedGradientText></h1>
            </div>
            
        </main>
        </>
    </>
  )
}
