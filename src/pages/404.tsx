import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { SideBar } from "."

const inter = Inter({subsets: ['latin']})

export default function NotFoundPage() {
  return (
    <>
        <Head>
          <title>Not found ¯\_(ツ)_/¯</title>
        </Head>
        <>
        <SideBar></SideBar>
        <main className={styles.main}>
            <div>
              <h1 className={inter.className}>404 - Not found</h1>
              <h2>have you been surfin&apos; the web?</h2>
            </div>
            <h1>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧🌊🌊🌊</h1>
            <h3 className={styles.bottom} style={{translate: '0 10vh'}}>⬅️➡️⬅️➡️🔼🔼🔽🔽🅰️🅱️</h3>
        </main>
        </>
    </>
  )
}
