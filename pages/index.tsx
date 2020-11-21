import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// import { VerticalNav } from './../components/vertical-nav'

import { GlobalState } from './../state/state'

import styles from '../styles/Home.module.css'

export default function Index() {
  const { state } = useContext(GlobalState)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-5 col-lg-4">
                <Link href="/login">
                  Login &rarr;
                </Link>
              </div>

              <div className="col-sm-6 col-md-5 col-lg-4">
                <Link href="/editor">
                  Open Monaco editor &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
