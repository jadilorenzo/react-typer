import React, {useState} from "react"
const {Provider, Consumer} = React.createContext()

const ThemeContextProvider = (props) => {
  const initialTheme = window.localStorage.getItem('theme') !== null ? window.localStorage.getItem('theme') : 'light'

  const [theme, setTheme] = useState(initialTheme)

  const toggleTheme = () => {
    const currentTheme = theme
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
    window.localStorage.setItem('theme', theme)
  }

  return (
      <Provider value={{theme: theme, toggleTheme}}>
          {props.children}
      </Provider>
  )
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
