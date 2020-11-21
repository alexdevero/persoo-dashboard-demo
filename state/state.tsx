import React, { createContext, useReducer, useState } from 'react'

interface appStateUI {
  children: React.ReactNode;
}

export const GlobalState = createContext()

const initialState = {
  username: '',
  lastActive: '',
  isDarkModeOn: false,
  isUserLoggedIn: false,
  isNavCollapsed: false
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'username':
      return {
        ...state,
        username: action.payload
      }
    case 'lastActive':
      return {
        ...state,
        lastActive: action.payload
      }
    case 'isDarkModeOn':
      return {
        ...state,
        isDarkModeOn: action.payload
      }
    case 'isUserLoggedIn':
      return {
        ...state,
        isUserLoggedIn: action.payload
      }
    case 'isNavCollapsed':
      return {
        ...state,
        isNavCollapsed: action.payload
      }
    default:
      return state
  }
}

export function AppStateProvider(props: appStateUI) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalState.Provider>
  )
}
