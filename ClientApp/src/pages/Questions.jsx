import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SingleQuestionForList(props) {
  return (
    <Link to="/questions/42" className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.question.title}</h5>
        <small>5 Reviews</small>
      </div>
      <p className="mb-1">{props.question.body}</p>
      <small className="mr-3">
        <button className="btn btn-success btn-sm">
          <span className="mr-2" role="img" aria-label="upvote">
            👍🏻
          </span>
          5
        </button>
      </small>
      <small className="mr-3">
        <button className="btn btn-danger btn-sm">
          <span className="mr-2" role="img" aria-label="downvote">
            👎🏻
          </span>{' '}
          3
        </button>
      </small>
    </Link>
  )
}
export function Questions() {
  const [questions, setQuestions] = useState([])

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Trending Questions
          </li>
        </ol>
      </nav>
      <div className="list-group">
        {questions.map(question => (
          <SingleQuestionForList question={question} />
        ))}
      </div>
    </>
  )
}
