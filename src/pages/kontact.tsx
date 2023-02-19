import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { AnimatedGradientText, SideBar, colors } from "."
import { FaDiscord, FaStackOverflow, FaTwitter } from 'react-icons/fa'
import { useState } from 'react';

const inter = Inter({subsets: ['latin']})

export default function ExternalLinksPage() {
    const [email, setEmail] = useState('')

  return (
    <>
        <Head>
          <meta name="description" content="Neemek's home website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>External resources</title>
        </Head>
        <>
        <SideBar></SideBar>
        <main className={styles.main}>
            <div>
              <h1 className={inter.className}><AnimatedGradientText from={(colors[5] ?? '')[0]} to={(colors[5] ?? '')[1]}>Kontact</AnimatedGradientText> me</h1>
            </div>
            <div style={{translate: '0 -1000%'}}>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                <button onClick={() => {
                    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                        fetch("https://data.neemek.com/email", {
                            method: 'POST',
                            body: email
                        })
                    }
                }}>Submit</button>
            </div>
        </main>
        </>
    </>
  )
}
