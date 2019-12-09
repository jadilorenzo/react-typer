import React from 'react';
import '../App.css';
import Page from '../templates/Page'
import {ThemeContextConsumer} from '../templates/ThemeContextProvider'
import Typer from '../templates/Typer'

const HomePage = () => {
  const [missed, setMissed] = React.useState(0)
  const addMissed = () => {
    setMissed(missed + 1)
  }
  return (
    <ThemeContextConsumer>
      {({theme, toggleTheme}) => (
        <Page theme={theme} toggleTheme={toggleTheme} title={`Typer`}>
          <div className='body'>
              Other Content
              <Typer text={'This is a test sentence.'} addMissed={addMissed}/>
          </div>
        </Page>
      )}
    </ThemeContextConsumer>
  );
}

export default React.memo(HomePage)
