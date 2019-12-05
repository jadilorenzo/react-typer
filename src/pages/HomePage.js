import React from 'react';
import '../App.css';
import Page from '../templates/Page'
import {ThemeContextConsumer} from '../templates/ThemeContextProvider'

const HomePage = () => {
  return (
    <ThemeContextConsumer>
      {({theme, toggleTheme}) => (
        <Page theme={theme} toggleTheme={toggleTheme} title={`Typer`}>
          <div className='body'>
              Other Content
          </div>
        </Page>
      )}
    </ThemeContextConsumer>
  );
}

export default React.memo(HomePage)
