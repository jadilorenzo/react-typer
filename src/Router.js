import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AllLessonsPage from './pages/AllLessonsPage'
import TypingPage from './pages/TypingPage'
import RestartGamePage from './pages/RestartGamePage'


class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <header className={`header-light`}>
          <Link to='/' style={{color: 'white', textDecoration: 'none'}}><h2 className='App'>Typer</h2></Link>
        </header>
        <div className='App' style={{paddingTop: '10px'}}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/'>
                <HomePage/>
              </Route>
              <Route path='/all_lessons'>
                <AllLessonsPage/>
              </Route>
              <Route path='/type/:str/:id'>
                <TypingPage/>
              </Route>
              <Route path='/restart'>
                <RestartGamePage/>
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    )
  }
}

export default AppRouter
