import React, { useContext } from 'react'

import { AppStateProvider, AppState } from './../state/state'

interface PageWrapperUI {
  children: React.ReactNode;
}

export function PageWrapper(props: PageWrapperUI) {
  const { isUserLoggedIn } = useContext(AppState)

  console.log(isUserLoggedIn)

  return (
    <AppStateProvider>
      <div className="page-wrapper">
        {props.children}
      </div>
    </AppStateProvider>
  )
}
