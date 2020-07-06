import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { AskQuestions } from './pages/AskQuestions'
import { Questions } from './pages/Questions'

export function App() {
  return (
    <>
      <NavBar />
      <main className="containter-fluid p-4">
        <Header />
        <Switch>
          <Route exact path="/">
            <Questions />
          </Route>
          <Route path="/questions/ask">
            <AskQuestions />
          </Route>
        </Switch>
      </main>
    </>
  )
}
