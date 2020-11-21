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
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload
      }
    case 'SET_LAST_ACTIVE':
      return {
        ...state,
        lastActive: action.payload
      }
    case 'SET_DARK_MODE':
      return {
        ...state,
        isDarkModeOn: action.payload
      }
    case 'SET_USER_LOGGED':
      return {
        ...state,
        isUserLoggedIn: action.payload
      }
    case 'SET_NAV_COLLAPSED':
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
