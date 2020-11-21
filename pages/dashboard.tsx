import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { GlobalState } from './../state/state'

import styles from '../styles/Home.module.css'

export default function Dashboard() {
  const { state } = useContext(GlobalState)

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container text-center">
        <h1 className="h2 mt-0 mb-4">
          Welcome back commander!
        </h1>

        <Link href="/"><a className="text-underline">&larr; Back home</a></Link>
      </main>
    </div>
  )
}
