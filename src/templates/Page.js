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
    </div>
  )
}

// <div onClick={toggleTheme} className={`header-${theme}`} style={{padding: '10px', margin: '10px'}}>
//   Switch theme
// </div>

export default Page
