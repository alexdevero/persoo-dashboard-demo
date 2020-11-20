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

function reducer(state, action) {
  switch (action.type) {
    case 'username':
      return {
        ...state,
        username: action.value
      }
    case 'lastActive':
      return {
        ...state,
        lastActive: action.value
      }
    case 'isDarkModeOn':
      return {
        ...state,
        isDarkModeOn: action.value
      }
    case 'isUserLoggedIn':
      return {
        ...state,
        isUserLoggedIn: action.value
      }
    case 'isNavCollapsed':
      return {
        ...state,
        isNavCollapsed: action.value
      }
    default:
      return state
  }
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
