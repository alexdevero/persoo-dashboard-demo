import { createContext, useState } from 'react'

interface appStateUI {
  children: React.Children
}

export const appState = createContext({
  username: '',
  lastActive: '',
  isDarkModeOn: false,
  isUserLoggedIn: false,
  isNavCollapsed: false,
  handleAppStateChange: () => {}
})

export function AppStateProvider(props: appStateUI) {
  const [appState, setAppState] = useState({
    username: '',
    lastActive: '',
    isDarkModeOn: false,
    isUserLoggedIn: false,
    isNavCollapsed: false
  })

  const handleAppStateChange = (prop: 'username' | 'lastActive' | 'darkMode', value: String) => {
    setAppState({
      ...appState,
      [prop]: value
    })
  }

  return (
    <AppStateProvider value={{ appState, handleAppStateChange }}>
      {props.children}
    </AppStateProvider>
  )
}
