import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { AskQuestions } from './pages/AskQuestions'
import { Questions } from './pages/Questions'
import { ShowQuestion } from './pages/ShowQuestion'
import { SignUp } from './pages/Signup'

export function App() {
  const [activeFilter, setActiveFilter] = useState('')

  return (
    <>
      <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="container-fluid p-4">
        <Header />
        <Switch>
          <Route exact path="/">
            <Questions activeFilter={activeFilter} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/questions/ask">
            <AskQuestions />
          </Route>
          <Route path="/questions/:id">
            <ShowQuestion />
          </Route>
        </Switch>
      </main>
    </>
  )
}
