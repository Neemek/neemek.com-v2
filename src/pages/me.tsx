import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { AnimatedGradientText, OGHead, SideBar, colors, pickRandom } from "."
import { FaDiscord, FaStackOverflow, FaTwitter } from 'react-icons/fa'
import { GetServerSideProps, GetStaticProps } from "next"
import AnimatedText from 'react-animated-text-content'

import { calcAge } from '@/pages/api/age'
import { combine as c } from "."

const inter = Inter({ subsets: ['latin'] })

interface Props {
  age: number,
  iAm: string
}

export default function AboutMePage({ age, iAm }: Props) {
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
          <div><h1 className={c(inter.className, styles.aboutMeTitle)}><AnimatedText animationType={'lights'} type={'chars'} duration={0.1} interval={0.06}>{iAm}</AnimatedText></h1>
            <p className={styles.aboutMeBody}>A {age} year old full-stack developer with experience in Python, Javascript/Typescript and Java, plus Web standards and API integration.</p><p style={{ marginTop: '.5rem' }} className={styles.aboutMeBody}>I have worked on projects with custom APIs, OAuth integration, and webservers with SSR and SPA. Currently working on with NEXT.js</p></div>
          <div></div>
        </main>
      </>
    </>
  )
}

const amI = [
  "Je suis Neemek",
  "Ich bin Neemek",
  "I am Neemek",
  "Jeg er Neemek",
  "Eu sunt Neemek",
  "Jag är Neemek",
  "Já jsem Neemek",
  "Jestem Neemek"
]

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      age: calcAge(),
      iAm: pickRandom(amI)
    }
  }
}
