import { AppStateProvider } from './../state/state'

import './../styles/bootstrap.min.css'
import './../styles/modern-normalize.css'

import './../styles/globals.css'
import './../styles/variables.css'
import './../styles/typography.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  )
}

export default MyApp
