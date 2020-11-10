import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="row justify-content-center text-center">
          <h1 className="h2 mt-0 mb-4">
            Welcome back commander!
          </h1>

          <div className="col-md-8">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-5 col-lg-4">
                <Link href="/login" className={styles.card}>
                  Login &rarr;
                </Link>
              </div>

              <div className="col-sm-6 col-md-5 col-lg-4">
                <Link href="/editor" className={styles.card}>
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
