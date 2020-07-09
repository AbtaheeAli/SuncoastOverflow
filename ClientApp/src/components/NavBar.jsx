import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import { isLoggedIn, logout } from '../auth'

export function NavBar(props) {
  const [filterText, setfilterText] = useState('')

  const handleClickSearch = event => {}
  props.setActiveFilter(filterText)

  const handleLogout = () => {
    logout()

    window.location = '/'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className=" nav navbar-brand" to="/">
        <span className="mr-2" role="img" aria-label="sdg">
          <img
            class=""
            src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzVhOTE5MTt9LmNscy0ye2ZpbGw6I2Q2NTYyYjt9LmNscy0ze2ZpbGw6I2Y5YTAxYjt9LmNscy00e2ZpbGw6I2ZmZjIwMDt9LmNscy01e2ZpbGw6I2IyZDIzNTt9LmNscy02e2ZpbGw6IzEwMGYwZjtmaWxsLW9wYWNpdHk6MC4zO30uY2xzLTd7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi1sb2dvPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00ODUsMTc0LjNjLTE2LjYyLTM3LjU1LTUxLjA1LTk0LjA4LTgzLjMzLTExNS4xMS02Ny41NC00NC0xMzguODMtNjEuODEtMjI3LjkyLTI4LjI3LTExMiw0Mi4xOS0xNDMsMTUwLjc2LTE0NS4yLDE1Ni44M0MxOCwyMTcuMjYsMTEuMjEsMjQ5LjYzLDE0LjIxLDI3NS4zMiwyOC4wNywzOTQuMjgsMTIxLjY4LDQ5NSwyNzQuNTUsNDk4LjQ4YzU2LjY4LDEuMjgsMTMzLjE3LTM4LjU5LDE2NS03Ny41M0M1MTcuMTMsMzI1Ljg4LDUwMS42LDIxMS44NSw0ODUsMTc0LjNaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDU0LjY1LDE2MS41NEM0MzkuNzYsMTI3LjYsNDE0LDk4Ljg1LDM4NS4xMSw3OS44NCwzMjQuNiw0MC4wNSwyNjAuNzMsMjQsMTgwLjkxLDU0LjI5LDgwLjUyLDkyLjQyLDUyLjc2LDE5MC41Nyw1MC44MiwxOTYuMDYsNDEuNDEsMjIyLjczLDM1LjQzLDI1MiwzOCwyNzUuMjJzMTUuNCw1NS45MiwxNS40LDU1LjkybDQxMC4zNy43MnMxMC4wNi00Ni42LDEwLjkyLTc2LjcxUzQ2OS41NCwxOTUuNDgsNDU0LjY1LDE2MS41NFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00NjIsMzM5LjcybC00MDQuMzktMS44czQuNzUsMTIuODMsNy40MiwxOC4yYzEuMjEsMi40NCw4Ljc2LDE2LDguNzYsMTZsMzcwLjg0LDEuMnM2LjU5LTkuNTksMTAuNzgtMTYuNzlTNDYyLDMzOS43Miw0NjIsMzM5LjcyWiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTQ0Mi42LDM3OS41OXMtMTEuNDQsMTUuMTQtMTYuMjEsMjEuNzQtMjEuNiwyMS4xMy0yMS42LDIxLjEzbC0yOTItMy41OXMtMTIuODMtMTAuMTYtMjAuODQtMTljLTguMjgtOS4xNy0xNS43OC0yMi4yMi0xNS43OC0yMi4yMloiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0zOTcuMjQsNDMwLjM5UzMzNS42Niw0ODAsMjYxLjE3LDQ3N3MtMTQxLjYyLTUwLjYxLTE0MS42Mi01MC42MVoiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0xMjAsMTgzbDE0LjU1LDEuMTMsMTEuNzQsMTYuODhzNTAuNzItMy41Niw2My41OSw0LjMyLDI0LjMxLDI2Ljc4LDI0LjMxLDI2Ljc4bC0xMy40My41NnMtNS4yOS0xMy4wOC0xOC0xNy41OS02Mi4wOSw5LjU3LTYyLjA5LDkuNTdsLTExLjE5LTE1Ljc2LTEwLjA3LDEwLjdTNTkuODQsMjExLDUwLjYxLDIxNS4xMnMtMTcuMjUsMjMuNTMtMTcuMjUsMjMuNTNMMjMuODUsMjM3czExLjI5LTI4Ljc4LDIzLjQxLTM0Ljc4LDYyLjA5LDEuMTIsNjIuMDksMS4xMloiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik0xMjAsMTc0bDE0LjU1LDEuMTIsMTEuNzQsMTYuODlzNTAuNzItMy41Nyw2My41OSw0LjMxLDI0LjMxLDI2Ljc5LDI0LjMxLDI2Ljc5bC0xMy40My41NnMtNS4yOS0xMy4wOS0xOC0xNy41OS02Mi4wOSw5LjU3LTYyLjA5LDkuNTdsLTExLjE5LTE1Ljc2LTEwLjA3LDEwLjY5cy01OS41OC04LjY2LTY4LjgxLTQuNS0xNy4yNSwyMy41Mi0xNy4yNSwyMy41MkwyMy44NSwyMjhzMTEuMjktMjguNzgsMjMuNDEtMzQuNzksNjIuMDksMS4xMyw2Mi4wOSwxLjEzWiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTMyNC4zNiwyNDkuNzcsMzQ1LjYxLDI0N2wxNC41NSwyNC43NywzNS4zOS0uOTJjMTkuODYtLjUyLDQxLjU3LTIsNjEsNC41OCwyNC41OCw4LjMzLDM1LDI4LjY1LDQyLjQzLDUyLjE2LDAsMC0xNy4zMi0yLjIxLTE3LjM0LTIuMjUtNC41Ni02LjYtMTQtMTguNzMtMTYuODgtMjEtOC4yNy02LjYzLTE4LjY2LTguODUtMjkuMjMtMTAuNjYtMTIuNDYtMi4xNC0yMy42MywxLjYzLTM1LjgyLDMuNDYtMTQuOSwyLjIzLTI5LjEzLDYuMTgtNDQsOC40MmwtMTcuOS0yNS44OUwzMTguMiwzMDEuNTVsLTQ1LjQyLTQuODVjLTEzLjY4LTEuNDUtMzAuMzQtNS4yLTQ0LjQ2LTIuNDdDMjExLjg3LDI5Ny40MSwxOTcsMzEwLDE5Mi41NiwzMjEuNWwtMTYuNDUtMWMxMC40NC0xOC43NywzMC4xMS0zNS45NCwzMi4wOC0zNi43OCwxNC4xNy02LDI5LjA5LTExLjM2LDYwLjYyLTEwLjEzbDM4Ljc2LDEuNVoiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik0zMjQuMzYsMjQwLjc2LDM0NS42MSwyMzhsMTQuNTUsMjQuNzYsMzUuMzktLjkyYzE5Ljg2LS41MSw0MS41Ny0yLDYxLDQuNTksMjQuNTgsOC4zMywzNSwyOC42NCw0Mi40Myw1Mi4xNiwwLDAtMTcuMzItMi4yMi0xNy4zNC0yLjI1LTQuNTYtNi42LTE0LTE4Ljc0LTE2Ljg4LTIxLTguMjctNi42NC0xOC42Ni04Ljg1LTI5LjIzLTEwLjY3LTEyLjQ2LTIuMTQtMjMuNjMsMS42My0zNS44MiwzLjQ2LTE0LjksMi4yNC0yOS4xMyw2LjE5LTQ0LDguNDJsLTE3LjktMjUuODktMTkuNTgsMjItNDUuNDItNC44NGMtMTMuNjgtMS40Ni0zMC4zNC01LjIxLTQ0LjQ2LTIuNDdDMjExLjg3LDI4OC40MSwxOTcsMzAxLDE5Mi41NiwzMTIuNWwtMTYuNDUtMWMxMC40NC0xOC43NiwzMC4xMS0zNS45NCwzMi4wOC0zNi43NywxNC4xNy02LDI5LjA5LTExLjM3LDYwLjYyLTEwLjE0bDM4Ljc2LDEuNTFaIi8+PC9zdmc+"
            width="50"
            height="50"
          />
        </span>
        <span className="navi">Suncoast Overflow</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="navi"></span>
          </li>
        </ul>
        {isLoggedIn() || (
          <Link className="btn btn-success mr-2" to="/signup">
            Sign Up
          </Link>
        )}
        {isLoggedIn() || (
          <Link className="btn btn-success mr-2" to="/signin">
            Sign In
          </Link>
        )}
        <Route exact path="/">
          <form className="form-inline mr-2 my-2 my-lg-0">
            <Link className="btn btn-success mr-2" to="/questions/ask">
              Ask A Question
            </Link>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filterText}
              onChange={event => setfilterText(event.target.value)}
            />
            <span
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={handleClickSearch}
            >
              Search
            </span>
          </form>
        </Route>

        {isLoggedIn() && (
          <span className="btn btn-success" onClick={handleLogout}>
            Sign Out
          </span>
        )}
      </div>
    </nav>
  )
}
