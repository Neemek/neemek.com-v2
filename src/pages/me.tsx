import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { AnimatedGradientText, OGHead, SideBar, colors } from "."
import { FaDiscord, FaStackOverflow, FaTwitter } from 'react-icons/fa'
import { GetServerSideProps } from "next"

import { calcAge } from '@/pages/api/age'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  age: number
}

export default function AboutMePage({ age }: Props) {
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
          <div><h1 className={inter.className+' '+styles.aboutMeTitle}>I'm Neemek</h1> <p className={styles.aboutMeBody}>A {age} year old full-stack developer with experience in Python, Javascript and Java, plus Web standards and API integration.</p></div>
          <div></div>
        </main>
      </>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      age: calcAge()
    }
  }
}
