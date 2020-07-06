import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { AskQuestions } from './pages/AskQuestions'

export function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Switch>
        <Route path="/questions/ask">
          <AskQuestions />
        </Route>
      </Switch>
    </>
  )
}
