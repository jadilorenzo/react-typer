import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ThemeContextProvider} from './templates/ThemeContextProvider'
import HomePage from './pages/HomePage'


class AppRouter extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/' component={(props) => {
                  return (
                    <HomePage/>
                  )
                }} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeContextProvider>
    )
  }
}

export default AppRouter
