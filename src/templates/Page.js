import React from 'react'
import Button from '../templates/Button'

const Page = ({children, title, theme, toggleTheme}) => {
  return (
    <div className={`${theme} application`}>
      <header className={`header-${theme}`}>
        <h2 className='App'>{title}</h2>
      </header>
      <div className='App' style={{paddingTop: '10px'}}>
        {children}
      </div>
      <footer onClick={toggleTheme} className={`header-${theme}`} style={{ padding: '10px', margin: 'auto', width: '75%'}}>
        Switch theme
      </footer>
    </div>
  )
}

export default Page
