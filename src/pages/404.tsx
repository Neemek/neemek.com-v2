import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { OGHead, SideBar, pickRandom } from "."
import { useState, useEffect } from 'react';
import Image from "next/image";
import { getCatWithTie } from "./api/cat-tie";
import { GetServerSideProps, GetStaticProps } from "next";

interface Props {
  image: string
}

const inter = Inter({ subsets: ['latin'] })
const notfoundInfos = [
  "me and my armada of business cats will be looking into this",
  "paw-don us, there seems to be something wrong",
  // "we're working on making your expreience purr-fect, just a sec",
  // ""
]

export default function NotFoundPage({ image }: Props) {
  let [info, setInfo] = useState("me and my armada of business cats are currently working on this")

  useEffect(() => setInfo(pickRandom(notfoundInfos)), [])

  return (
    <>
      <Head>
        <meta name="description" content="Neemek's home website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>404 - Not found ¯\_(ツ)_/¯</title>
        <OGHead title='404 - Not found' description="This page could not be found!" path="/404"></OGHead>
      </Head>
      <>
        <SideBar></SideBar>
        <main className={styles.main}>
          <div>
            <h1 className={inter.className}>404 - Not found</h1>
            <h3>{info}</h3>
          </div>
          <Image style={{ objectFit: 'contain' }} className={styles.notFoundImage} src={image} alt="cat with tie" width={300} height={300} />
          {/* <h1>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧🌊🌊🌊</h1> */}
          {/* <h3 className={styles.bottom} style={{translate: '0 10vh'}}>⬅️➡️⬅️➡️🔼🔼🔽🔽🅰️🅱️</h3> */}
        </main>
      </>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      image: await getCatWithTie()
    }
  }
}
