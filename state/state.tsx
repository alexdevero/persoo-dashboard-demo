import React, { createContext, useState } from 'react'

interface appStateUI {
  children: React.ReactNode;
}

export const AppState = createContext({
  username: '',
  lastActive: '',
  isDarkModeOn: false,
  isUserLoggedIn: false,
  isNavCollapsed: false,
  handleAppStateChange: () => {}
})

const initialGlobalState = {
  username: '',
  lastActive: '',
  isDarkModeOn: false,
  isUserLoggedIn: false,
  isNavCollapsed: false
}


  const handleAppStateChange = (prop: 'username' | 'lastActive' | 'darkMode', value: String) => {
    setAppState({
      ...appState,
      [prop]: value
    })
  }

  return (
    <AppState.Provider value={{ appState, handleAppStateChange }}>
      {props.children}
    </AppState.Provider>
  )
}
