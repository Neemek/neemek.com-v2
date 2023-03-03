import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ReactNode, useEffect, useState } from 'react'
import { getNouns } from './api/noun'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const colors = [
  ['#FC466B', '#3F5EFB'],
  undefined,
  ['#00C9FF', '#92FE9D'],
  ['#f8ff00', '#3ad59f'],
  undefined,
  ['#00d2ff', '#3a47d5'],
]

const description = [
  "eemek.com",
  "gg",
  "xternal",
  "e",
  "xtermination",
  "ontact",
]

const destinations = [
  "/",
  undefined,
  "/external",
  "/me",
  undefined,
  "/kontact",
]

const lightDark = '#70707070'
const darkDark = '#d0d0d070'

export function pickRandom<T>(from: T[]): T {
  return from[Math.floor(Math.random() * from.length)]
}

/**
 * Combine classnames into one
 * @param classes classNames to join
 * @returns {string} a combined class
 */

export const combine = (...classes: string[]) => classes.join(' ')

export default function Home() {

  return (
    <>
      <Head>
        <title>👉neemek.com👈</title>
        <meta name="description" content="Neemek's home website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <OGHead description="Neemek's website"></OGHead>
      </Head>
      <>
        <SideBar></SideBar>
        <main className={styles.main}>
          <div /* className={styles.grid} */>
            <div className={styles.moreSpace}>
              <h1>Hi! I&apos;m <AnimatedGradientText className={inter.className} to={'#0700b8'} from={'#00ff88'} cycleDuration={96}>Neemek</AnimatedGradientText></h1>
              <h2>💿 Full-stack developer 💾</h2>
              <h3 className={styles.spaceUp}><FaArrowLeft style={{ translate: '0 10%' }}></FaArrowLeft> have a look</h3>
            </div>
          </div>
          {Date.now() - new Date(2023, 1, 20).getTime() < 1000 * 60 * 60 * 24 * 30 && <h5 style={{ opacity: 0.5, fontStyle: 'italic' }}>Not what you expected? Try the <a href='https://old.neemek.com/'>old site</a></h5>}
        </main>
      </>
    </>
  )
}

export function SideBar() {
  return (<div className={styles.sidebar}>
    {"NEEMEK".split("").map((char, i) => <Character key={i} i={i}>{char}</Character>)}
  </div>)
}

export function OGHead({ title = '👉neemek.com👈', description = '', type = 'website', path = '/' }) {
  return (
    <>
      <link rel="manifest" href="manifest.json" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`https://neemek.com${path}`} />
      <meta property="og:site_name" content="Neemek.com" />
    </>
  )
}

function Character({ children: char, i }: { children: string, i: number }) {
  let [noun, setNoun] = useState(' ')

  useEffect(() => setNoun(pickRandom(getNouns('e'))), [])

  return (
    <Link href={destinations[i] ?? ''} className={styles.unLink}>
      <div tabIndex={i + 1} className={[styles.character, inter.className, colors[i] && styles.rotate].join(' ')} style={{ cursor: colors[i] ? 'pointer' : 'unset' }} /* onKeyUp={(e) => { if (e.key.toLocaleLowerCase() === "enter" && destinations[i] !== undefined) { location.pathname =  ?? '/'; }}} onClick={() => { if (destinations[i] !== undefined) location.pathname = destinations[i] ?? "/"}} */ key={i}>

        <AnimatedGradientText from={(colors[i] ?? [darkDark])[0]} to={(colors[i] ?? ['', lightDark])[1]}>
          {char}

        </AnimatedGradientText>
        <div>
          {(
            colors[i] !== undefined
              ? <AnimatedGradientText className={styles.desc} style={{ transition: `all ${0.025 * description[i].length}s steps(${description[i].length}, end) .1s` }} from={(colors[i] ?? [darkDark])[0]} to={(colors[i] ?? ['', lightDark])[1]}>{description[i]}</AnimatedGradientText>
              : <AnimatedGradientText className={styles.desc} style={{ transition: `all ${0.025 * noun.slice(1).length}s steps(${noun.slice(1).length}, end) .1s` }} from={darkDark} to={lightDark}>{noun.slice(1)}</AnimatedGradientText>
          )}
        </div>
      </div>
    </Link>)
}

export function GradientText({ children, to, from }: { children: ReactNode, to: string, from: string }): JSX.Element {
  return (<span className={styles.clipToBg} style={{
    background: `-webkit-linear-gradient(180deg, ${from}, ${to})`,
  }}>{children}</span>)
}

export function AnimatedGradientText({ children, to, from, cycleDuration = 64, className = '', style = {} }: { children: ReactNode, to: string, from: string, cycleDuration?: number, className?: string, style?: Object }): JSX.Element {
  return (<span className={styles.clipToBg + ' ' + className} style={{
    background: `-webkit-linear-gradient(180deg, ${from}, ${to}, ${from}) 0 0 / var(--bg-size) 100%`,
    animation: `move-bg ${cycleDuration}s infinite linear`,
    ...style
  }}>{children}</span>)
}
